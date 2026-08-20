import logo from './logo.svg';
import './App.css';

import Hello from './Hello';   // 1. import เข้ามา (./ = โฟลเดอร์เดียวกัน)

import Header from './companents/Header';
import Footer from './companents/Footer';
import MovieList from './companents/Movielist';
import Card from './companents/Card';

import Greeting from './Greeting';
import ProfileCard from './companents/ProfileCard';

const students = [
  { id: 1, name: 'ฝน', year: 3 },
  { id: 2, name: 'เต้ย', year: 2 },
  { id: 3, name: 'มายด์', year: 4 },
];

const members = [
  { id: 1, name: 'เบิ้ม คุง', nickname: 'บูมบีม',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['แบดมินตัน', 'เธอ'] },
    { id: 2, name: 'ม่อง คุง', nickname: 'ไซมอนด์',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['น้องเค', 'แบดมินตัน'] },
    { id: 3, name: 'เฟิร์ส ร่าน', nickname: 'พี่เฟิร์ส',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['เด็ก', 'บอล'] }
  // 👉 เพิ่มสมาชิกคนอื่น ๆ ของกลุ่มที่นี่
];


function App() {
  return (
    
     <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>

    // <div>
    //   <Header />
    //   <MovieList />
    //   <Greeting name="ปุ้ย" year={3} />
    //   <Greeting name="นา" year={2} />
    //   <Greeting name="บอย" year={4} />
    //   <Card title="ประกาศ">
    //     <p>สัปดาห์หน้าเรียนเรื่อง <b>State & Forms</b></p>
    //     <p>อย่าลืม push การบ้านขึ้น GitHub!</p>
    //   </Card>
    //   <h1>รายชื่อนักศึกษา</h1>
    //   {students.map((s) => (
    //     <Greeting key={s.id} name={s.name} year={s.year} />
    //   ))}

    //   <Footer />
    // </div>
  );
}

export default App;
