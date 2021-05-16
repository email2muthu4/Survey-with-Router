import React, { createContext, useState } from "react";
import { createBrowserHistory } from "history";
import { ISurvey } from "./interface/Survey";

export const AppDataContext = createContext({});

export const history = createBrowserHistory();

export const AppDataProvider = (props: { children: any }) => {
  const survey: ISurvey = {
    q1: {
      question: "Can you explain about your experience ?",
      answer: ""
    },
    q2: {
      question: "Can you explain about your current project ?",
      answer: ""
    },
    q3: {
      question: "How do you feel?",
      answer: ""
    }
  };

  const [data, setData] = useState<ISurvey>(survey);

  return (
    <AppDataContext.Provider value={[data, setData]}>
      {props.children}
    </AppDataContext.Provider>
  );
};
