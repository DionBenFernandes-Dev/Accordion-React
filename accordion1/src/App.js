import "./styles.css";
import data from "./data.js";
import SingleQuestion from "./Questions.js";
import { useState } from "react";

export default function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <div className="App">
      <main>
        <div className="container">
          <h3>questions and answers about login</h3>
          <section className="info">
            {questions.map((question) => {
              return (
                <SingleQuestion
                  key={question.id}
                  {...question}
                ></SingleQuestion>
              );
            })}
          </section>
        </div>
      </main>
    </div>
  );
}
