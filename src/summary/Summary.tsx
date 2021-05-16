import { useContext } from "react";
import { AppDataContext } from "../AppData";
import "./Summary.css";
export const Summary = () => {
  const [data] = useContext<any>(AppDataContext);
  const getData = () => {
    return Object.keys(data).map((k, idx) => {
      return (
        <tr key={idx}>
          <td>{data[k]["question"]}</td>
          <td>{data[k]["answer"]}</td>
        </tr>
      );
    });
  };
  return (
    <div>
      <h4>Summery</h4>
      <table>
        <thead>
          <tr>
            <th>Questions</th>
            <th>Answers</th>
          </tr>
        </thead>
        <tbody>{getData()}</tbody>
      </table>
    </div>
  );
};
