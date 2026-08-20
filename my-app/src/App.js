import logo from './logo.svg';
import './App.css';

import Hello from './Hello';   // 1. import เข้ามา (./ = โฟลเดอร์เดียวกัน)

import Header from './companents/Header';
import Footer from './companents/Footer';
import MovieList from './companents/Movielist';
import Card from './companents/Card';

import Greeting from './Greeting';

const students = [
  { id: 1, name: 'ฝน', year: 3 },
  { id: 2, name: 'เต้ย', year: 2 },
  { id: 3, name: 'มายด์', year: 4 },
];



function App() {
  return (

    <div>
      <Header />
      <MovieList />
      <Greeting name="ปุ้ย" year={3} />
      <Greeting name="นา" year={2} />
      <Greeting name="บอย" year={4} />
      <Card title="ประกาศ">
        <p>สัปดาห์หน้าเรียนเรื่อง <b>State & Forms</b></p>
        <p>อย่าลืม push การบ้านขึ้น GitHub!</p>
      </Card>
      <h1>รายชื่อนักศึกษา</h1>
      {students.map((s) => (
        <Greeting key={s.id} name={s.name} year={s.year} />
      ))}

      <Footer />
    </div>
  );
}

export default App;
