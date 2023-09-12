import React, { useState } from "react";
import "./App.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";

function App() {

  const [TexttoCopy, setTexttoCopy] = useState('')
  const [isCopied, setCopied] = useClipboard(TexttoCopy);

  let startListening = () =>
    SpeechRecognition.startListening({ continuous: true });
  let stopListening = () => SpeechRecognition.stopListening();

  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div className="container">
      <h2>Audio to Written Word Converter</h2>
      <br />
      <p>
        A React hooks module that transforms spoken words captured by the microphone into text and provides accessibility to your React components.
      </p>

      <div className="main-content" onClick={() => setTexttoCopy(transcript)} >{transcript}</div>

      <div className="btn-style">
        <button onClick={setCopied}>
          {isCopied ? "Copied" : "Copy to clipboard"}
        </button>

        <button onClick={startListening}>Start Listening</button>
        <button onClick={stopListening}>Stop Listening</button>
      </div>
    </div>
  );
}

export default App;
