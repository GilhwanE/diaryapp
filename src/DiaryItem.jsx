import React from 'react';

const DiaryItem = ({ id, text, author, created_date, emotion, onDelete }) => {
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자 : {author} | {emotion}
        </span>
        <br />
        <span className="date">
          {new Date(created_date).toLocaleDateString()}
        </span>
        <br />
        <span className="text"> {text} </span>
        <br />
        <button
          onClick={() => {
            window.confirm(`${id}번쨰 내용을 삭제하시겠습니까?`);
            onDelete(id);
          }}
        >
          삭제하기
        </button>
      </div>
    </div>
  );
};

export default DiaryItem;
