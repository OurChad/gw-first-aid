export type Option = {
    id: string;
    text: string;
    isCorrect: boolean;
}

export type QuestionAdditionalData = {
    text?: string;
    youtube?: string;
    links?: string[];
}

export type Question = {
    id: string;
    text: string;
    options: Option[];
    isMultipleAnswers: boolean;
    additionalData?: QuestionAdditionalData;
}