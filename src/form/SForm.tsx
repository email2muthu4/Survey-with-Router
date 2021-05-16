import { Link } from "react-router-dom";
import { AppDataContext } from "../AppData";
import { useContext, useRef } from "react";
import { IQA } from "../interface/Survey";

export const SForm = () => {
  const formRef = useRef<any>(null);

  const [data, setData] = useContext<any>(AppDataContext);
  const url = window.location.href;

  let qus: IQA;
  let qPage: string;
  let path: string;
  if (url.indexOf("q2") > -1) {
    qPage = "q2";
    path = "/q3/";
  } else if (url.indexOf("q3") > -1) {
    qPage = "q3";
    path = "/summery/";
  } else {
    qPage = "q1";
    path = "/q2/";
  }
  qus = data[qPage];

  const updateAns = (e: any) => {
    qus.answer = e.target.value;
    data[qPage] = qus;
    setData(data);
  };

  const clear = (): void => {
    formRef.current.reset();
  };

  return (
    <div>
      <h4>{qPage.toUpperCase()}: </h4>
      <div style={{ paddingBottom: "3px" }}>{qus.question}</div>

      <form ref={formRef}>
        <textarea
          rows={5}
          cols={50}
          onChange={(e) => updateAns(e)}
          name="comment"
          required
        ></textarea>
        <button onClick={() => clear()}>
          <Link to={path}>{qPage !== "q3" ? "Next" : "Submite"}</Link>
        </button>
        {/* <button color="primary">{qPage !== "q3" ? "Next" : "Submit"}</button> */}
      </form>
    </div>
  );
};
