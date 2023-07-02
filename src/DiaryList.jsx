import React from 'react';
import DiaryItem from './DiaryItem';

const DiaryList = ({ diaryList, onRemove, onEdit }) => {
  return (
    <div className="diaryList">
      일기 리스트
      <h2>{diaryList.length}개의 일기가 있습니다</h2>
      {diaryList.map((it) => (
        <DiaryItem key={it.id} {...it} onRemove={onRemove} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default DiaryList;
