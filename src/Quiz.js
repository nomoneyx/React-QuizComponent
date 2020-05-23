import React, { useState } from "react";

const Quiz = () => {
  let quizData = require("./quiz_data.json");
  const [quiz_position, set_quiz_position] = useState(1);

  return (
    <div>
      <div className="QuizQuestion">
        {quizData.quiz_questions[0].instruction_text}
      </div>
    </div>
  );
};

export default Quiz;
