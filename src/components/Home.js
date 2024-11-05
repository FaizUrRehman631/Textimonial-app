import React from "react";

export default function Home(props) {
  return (
    <div
      className="container mt-3 "
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <div
        className="container p-4 text-center mb-4"
        style={{
          backgroundColor: props.mode === "light" ? "#90EE90" : "#E6E6FA",
          color: props.mode === "dark" ? "green" : "white",
        }}
      >
        <h2>Learn About Textutils</h2>
      </div>
      <h3> What does the Text Analyzer do?</h3>
      <p>
        The Text Analyzer can rate the difficulty level of a text according to
        the Common European Framework, or CEFR Levels. ESL teachers may wish to
        use this tool to:<br></br>
        Determine the approximate level of proficiency that the text is suitable
        for <br></br>• generate a suggested vocabulary list
        <br></br>• compare the difficulty levels of two texts<br></br>• get
        meanings for the suggested vocabulary list (via ninjawords.com)
      </p>
      <h3>How to use the Text Analyzer?</h3>
      <p>
        Simply copy and paste your text in the box above and click SUBMIT. You
        will get more accurate results for texts of over 50 or so words.
      </p>
      <h3>How does the Text Analyzer work?</h3>
      <p>
        Each word in the submitted text is compared to a list of the 10,000 most
        commonly used words in English. Based on each word's position on the
        list and the average word and sentence length, an algorithm is used to
        rate the difficulty of the text. You can expect slightly different
        results compared to the Flesch-Kincaid Index. The Flesch- Kincaid index
        mainly looks at sentence length and word length, whereas this tool
        focuses on complexity of language.
      </p>
      <h3>What is word complexity?</h3>
      <p>
        This is the average position of the words in the list of 10,000 most
        frequent words in English. Hence, the lower the score, the easier the
        text and the higher the score, the more difficult.
      </p>
    </div>
  );
}
