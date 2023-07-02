import { useRef, useState } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);
  const onCreate = (author, text, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      text,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onDelete = (targetId) => {
    console.log(`${targetId}의 내용이 삭제됩니다`);
    // filter함수로 item의 id와 targetId가 서로 같지 않은것들을 새로 배열을 만들어 줄꺼야
    // 그리고 setData로 배열을 상태를 업데이트 할 꺼임
    const newItem = data.filter((item) => item.id !== targetId);
    console.log(newItem);
    setData(newItem);
  };

  return (
    <div>
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} onDelete={onDelete} />
    </div>
  );
}

export default App;
