import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton.js";

class QuizQuestion extends Component {
  handleClick (buttonText) {
    buttonText === this.props.quiz_question.answer
      ? this.props.showNextQuestionHandler()
      : null;
  };
  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map((index) => (
              <li key={index}>
                <QuizQuestionButton
                  button_text={index}
                  clickHandler={this.handleClick.bind(this)}
                />
              </li>
            ))}
            ;
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;
