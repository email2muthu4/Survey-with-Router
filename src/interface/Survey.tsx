export interface ISurvey {
  q1: IQA;
  q2: IQA;
  q3: IQA;
}

export interface IQA {
  question: string;
  answer: string;
}
