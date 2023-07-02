import React, { useRef, useState } from 'react';

const DiaryEditor = ({ onCreate }) => {
  const authorInput = useRef();
  const textInput = useRef();
  const [state, setState] = useState({
    author: 'hwan',
    text: '메시지 입력란',
    emotion: 1,
  });

  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value, // e.target.name의 값이 객체인 state에 해당하는 name값이 value값으로 변경
    });
  };
  const handleSumbit = () => {
    if (state.author.length < 1) {
      alert('최소 1글자 이상 입력해주세요');
      // foucs
      authorInput.current.focus();
      return;
    }
    if (state.text.length < 5) {
      alert('본문은 5글자 이상 입력해주세요.');
      // foucs
      textInput.current.focus();
      return;
    }

    onCreate(state.author, state.text, state.emotion);
    alert('저장성공');
    setState({
      author: '',
      text: '',
      emotion: '1',
    });
  };

  return (
    <>
      <div className="DiaryEditor">
        <h1>오늘의 하루</h1>
        <input
          name="author"
          ref={authorInput}
          value={state.author}
          onChange={handleInput}
        />

        <div>
          <textarea
            name="text"
            ref={textInput}
            value={state.text}
            onChange={handleInput}
          />
        </div>
        <div className="score">
          <p>감정점수:</p>
          <select name="emotion" value={state.emotion} onChange={handleInput}>
            <option value={1}>1</option>
            <option value={2}>2</option>
          </select>
        </div>
        <div>
          <button onClick={handleSumbit}>save</button>
        </div>
      </div>
    </>
  );
};

export default DiaryEditor;
