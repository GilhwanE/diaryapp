import React, { useState, useRef } from 'react';

const DiaryItem = ({
  id,
  text,
  author,
  created_date,
  emotion,
  onRemove,
  onEdit,
}) => {
  const handleRemove = () => {
    if (window.confirm(`${id}번쨰 내용을 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };
  const localContentInput = useRef();
  const [isEdit, setIsEdit] = useState(false);
  const toggleisEdit = () => setIsEdit(!isEdit);
  const [localContent, setLocalContent] = useState(text);
  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(text);
  };
  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }
    if (window.confirm(`${id}번째 내용을 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      toggleisEdit();
    }
  };

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
        <span className="text">
          {isEdit ? (
            <>
              <textarea
                value={localContent}
                ref={localContentInput}
                onChange={(e) => {
                  setLocalContent(e.target.value);
                }}
              />
            </>
          ) : (
            <>{text}</>
          )}
        </span>
        <br />
        {isEdit ? (
          <>
            <button onClick={handleQuitEdit}>수정취소</button>
            <button onClick={handleEdit}>수정완료</button>
          </>
        ) : (
          <>
            <button onClick={handleRemove}>삭제하기</button>
            <button onClick={toggleisEdit}>수정하기</button>
          </>
        )}
      </div>
    </div>
  );
};

export default DiaryItem;
