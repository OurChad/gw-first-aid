import React, { useState, useCallback } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { FormGroup, Checkbox, Button } from '@material-ui/core';
import { Option, Question as QuestionType } from '../types';
import AdditionalData from './AdditionalData';

type QuestionState = {
    [key: string]: string | boolean; 
}

type Props = {
    question: QuestionType;
    onSubmit: (isCorrect: boolean) => void;
}

function renderRadioGroup(options: Option[], handleChange: any, submitted: boolean) {
    return (
        <RadioGroup aria-label="options" name="options" onChange={handleChange}>
            {
                options.map(({id, text, isCorrect}) => {
                    return (
                        <div key={id}>
                            <FormControlLabel
                                value={id}
                                control={<Radio color="primary" />}
                                label={text}
                            />
                            { submitted ? isCorrect ? <span>✅</span> : <span>❌</span> : null}
                        </div>
                    )
                })
            }
        </RadioGroup>
    );
}

function renderFormGroup(options: Option[], answers: QuestionState, handleChange: any, submitted: boolean) {
    return (
        <FormGroup>
            {
                options.map(({id, text, isCorrect}) => {
                    return (
                        <div key={id}>
                            <FormControlLabel
                                value={id}
                                control={<Checkbox checked={!!answers[id]} color="primary" onChange={handleChange} />}
                                label={text}
                            />
                            { submitted ? isCorrect ? <span>✅</span> : <span>❌</span> : null}
                        </div>
                    )
                })
            }
        </FormGroup>
    )
}

function checkAnswers(options: Option[], answers: QuestionState) {
    return options.reduce((acc, option) => {
        return acc && option.isCorrect === (answers[option.id] ?? false);
    }, true);
}

const Question: React.FC<Props> = ({ question, onSubmit }) => {
    const [answers, setAnswers] = useState<QuestionState>({});
    const [isCorrect, setIsCorrect] = useState<boolean>(false);
    const [submitted, setSubmitted] = useState<boolean>(false);
    const isAnswered = Object.values(answers).find(answer => answer);

    const handleChange = useCallback((e : React.FormEvent<HTMLInputElement>) => {
        if (question.isMultipleAnswers) {
            setAnswers({...answers, [e.currentTarget.value]: e.currentTarget.checked})
        } else {
            setAnswers({[e.currentTarget.value]: e.currentTarget.checked})
        }
    }, [question, answers, setAnswers]);

    const handleSubmit = useCallback((e: React.SyntheticEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setIsCorrect(checkAnswers(question.options, answers));
    }, [answers, question.options]);

    const handleContinue = useCallback((e: React.SyntheticEvent) => {
        e.preventDefault();
        onSubmit(isCorrect);
        setAnswers({});
        setSubmitted(false);
    }, [isCorrect, onSubmit]);

    return (
        <>
        <form onSubmit={handleSubmit}>
            <FormLabel component="legend">{question.text}</FormLabel>
            <FormControl component="fieldset" disabled={submitted}>
                {
                    question.isMultipleAnswers ? 
                    renderFormGroup(question.options, answers, handleChange, submitted) :
                    renderRadioGroup(question.options, handleChange, submitted) 
                }
            </FormControl>
            <div>
                <Button type="submit" variant="contained" color="primary" disabled={!isAnswered || submitted}>Submit</Button>
            </div>
        </form>
        {
            submitted ? 
            <div>
                { isCorrect ? <h3>Correct!</h3> : <h3>Oops! Not quite right...</h3>}
                <div><Button variant="contained" color="primary" onClick={handleContinue}>Continue</Button></div>
                { question.additionalData ? 
                    <>
                        <h3>Additional Info</h3>
                        <AdditionalData data={question.additionalData || {}} />
                    </> : 
                    null 
                }
            </div> :
            null
        }
        </>
    )
}


export default Question;