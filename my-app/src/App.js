// import logo from './logo.svg';
// import './App.css';

// import Hello from './Hello';   // 1. import เข้ามา (./ = โฟลเดอร์เดียวกัน)

// import Header from './companents/Header';
// import Footer from './companents/Footer';
// import MovieList from './companents/Movielist';
// import Card from './companents/Card';

// import Greeting from './Greeting';
// import ProfileCard from './companents/ProfileCard';

// const students = [
//   { id: 1, name: 'ฝน', year: 3 },
//   { id: 2, name: 'เต้ย', year: 2 },
//   { id: 3, name: 'มายด์', year: 4 },
// ];

// const members = [
//   { id: 1, name: 'เบิ้ม คุง', nickname: 'บูมบีม',
//     major: 'เทคโนโลยีสารสนเทศ', favorites: ['แบดมินตัน', 'เธอ'] },
//     { id: 2, name: 'ม่อง คุง', nickname: 'ไซมอนด์',
//     major: 'เทคโนโลยีสารสนเทศ', favorites: ['น้องเค', 'แบดมินตัน'] },
//     { id: 3, name: 'เฟิร์ส ร่าน', nickname: 'พี่เฟิร์ส',
//     major: 'เทคโนโลยีสารสนเทศ', favorites: ['เด็ก', 'บอล'] }
//   // 👉 เพิ่มสมาชิกคนอื่น ๆ ของกลุ่มที่นี่
// ];


// function App() {
//   return (

//      <div className="container">
//       <h1>สมาชิกกลุ่มของเรา</h1>
//       <div className="card-row">
//         {members.map((m) => (
//           <ProfileCard
//             key={m.id}
//             name={m.name}
//             nickname={m.nickname}
//             major={m.major}
//             favorites={m.favorites}
//           />
//         ))}
//       </div>
//     </div>

//     <div>
//       <Header />
//       <MovieList />
//       <Greeting name="ปุ้ย" year={3} />
//       <Greeting name="นา" year={2} />
//       <Greeting name="บอย" year={4} />
//       <Card title="ประกาศ">
//         <p>สัปดาห์หน้าเรียนเรื่อง <b>State & Forms</b></p>
//         <p>อย่าลืม push การบ้านขึ้น GitHub!</p>
//       </Card>
//       <h1>รายชื่อนักศึกษา</h1>
//       {students.map((s) => (
//         <Greeting key={s.id} name={s.name} year={s.year} />
//       ))}

//       <Footer />
//     </div>
//   );
// }

// export default App;



// import ProfileCard from './companents/ProfileCard';

// const members = [
//   {
//     id: 1, name: 'ทัตธน จับใจนาย', nickname: 'บูมบีม',
//     major: 'เทคโนโลยีสารสนเทศ', favorites: ['แบดมินตัน', 'GYM']
//   },
//   {
//     id: 2, name: 'ปราชญา ศัพทะเสวี', nickname: 'โอมคุง',
//     major: 'เทคโนโลยีสารสนเทศ', favorites: ['ฟุตบอล', 'แมนยู 2-0']
//   },
//   {
//     id: 3, name: 'วชิรวิทย์ เชื้อเมืองพาน', nickname: 'ทหารง่าว',
//     major: 'เป็นทหาร', favorites: ['ฟุตบอล', 'หลอกให้รัก']
//   },
//   {
//     id: 4, name: 'เขียนชื่อ ไม่เป็น', nickname: 'ไอ่ง่าวซี',
//     major: 'วิศวะกะ', favorites: ['Roblox', 'คนเก่า']
//   },

//   // 👉 เพิ่มสมาชิกคนอื่น ๆ ของกลุ่มที่นี่
// ];



// function App() {
//   return (
//     <div className="flex min-h-screen flex-col bg-slate-50">
//       <Navbar />

//       <div className="min-h-screen bg-slate-50 p-8">
//         <h1 className="mb-8 text-center text-3xl font-bold text-slate-800">
//           สมาชิกกลุ่มของเรา
//         </h1>
//         <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {members.map((m) => (
//             <ProfileCard key={m.id} name={m.name} nickname={m.nickname}
//               major={m.major} favorites={m.favorites} />
//           ))}
//         </div>
//       </div>

//       {/* Hero — ส่วนต้อนรับ */}
//       {/* <header className="bg-slate-900 px-6 pb-16 pt-12 text-center">
//         <h1 className="text-3xl font-bold text-white md:text-5xl">
//           ดูหนังดี ๆ ไปด้วยกัน
//         </h1>
//         <p className="mx-auto mt-4 max-w-xl text-slate-400">
//           รวมหนังคุณภาพที่คัดมาแล้ว อัปเดตใหม่ทุกสัปดาห์
//         </p>
//       </header> */}

//       {/* เนื้อหาหลัก — การ์ดหนัง responsive */}
//       {/* <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
//         <h2 className="mb-6 text-2xl font-bold text-slate-800">หนังแนะนำ</h2>
//         <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {movies.map((m) => (
//             <div key={m.id}
//               className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md
//                             transition hover:-translate-y-1 hover:shadow-xl">
//               <h3 className="text-lg font-bold text-slate-800">{m.title}</h3>
//               <p className="mt-1 text-sm text-slate-500">ปี {m.year}</p>
//               <span className="mt-3 inline-block rounded-full bg-cyan-50 px-3 py-1
//                                text-xs font-medium text-cyan-700">{m.genre}</span>
//             </div>
//           ))}
//         </div>
//       </main> */}

//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="min-h-screen bg-slate-50 p-8">
//       <h1 className="mb-8 text-center text-3xl font-bold text-slate-800">
//         สมาชิกกลุ่มของเรา
//       </h1>
//       <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

//         {members.map((m) => (
//           <ProfileCard key={m.id} name={m.name} nickname={m.nickname}
//             major={m.major} favorites={m.favorites} />
//         ))}

//       </div>

//     </div>
//   )
// }

// export default App;

// function App() {
//   return (

//     <dav>
//       <nav className="flex items-center justify-between bg-slate-800 px-6 py-4">
//         <span className="text-xl font-bold text-white">🎬 MovieHub</span>
//         <div className="flex gap-6 text-slate-300">
//           <a href="#">หน้าแรก</a>
//           <a href="#">หนังใหม่</a>
//           <a href="#">รายการโปรด</a>
//         </div>
//       </nav>

//       <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//         <div className="rounded-xl bg-white p-4 shadow">การ์ด 1</div>
//         <div className="rounded-xl bg-white p-4 shadow">การ์ด 2</div>
//         <div className="rounded-xl bg-white p-4 shadow">การ์ด 3</div>
//       </div>
//       <dav>
//         <div className="bg-slate-100 text-center">
//           <h1 className="text-4xl font-bold text-slate-800">MovieHub</h1>
//           <p className="text-lg text-slate-500">รวมหนังดีที่คุณห้ามพลาด</p>
//           <p className="text-sm uppercase text-cyan-600 font-semibold">since 2026</p>

//         </div>

//         <div className="max-w-sm mx-auto mt-10 rounded-2xl border border-slate-200
//                 bg-white p-6 shadow-lg">
//           <h2 className="text-xl font-bold text-slate-800">Interstellar</h2>
//           <p className="mt-2 text-slate-500">การเดินทางข้ามกาแล็กซีเพื่อหาบ้านใหม่ให้มนุษยชาติ</p>
//           <span className="mt-4 inline-block rounded-full bg-cyan-50 px-3 py-1
//                    text-sm font-semibold text-cyan-700">Sci-Fi</span>
//         </div>
//       </dav>
//       <div className="flex gap-3 p-6">
//         <Button>บันทึก</Button>
//         <Button variant="danger">ลบ</Button>
//         <Button variant="ghost">ยกเลิก</Button>
//       </div>
//     </dav>
//   );
// }

// export default App;


import { Routes, Route } from 'react-router-dom';
import Navbar from './companents/Navbar';
import Footer from './companents/Footer';
import Home from './pages/Home';
import Movies from './pages/Movies';
import About from './pages/About';
import MovieDetail from './pages/MovieDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />                {/* ← เห็นทุกหน้า */}
      <main className="flex-1">
        <Routes>                {/* ← เฉพาะตรงนี้ที่สลับตาม URL */}
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/about" element={<About />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          {/* :id คือตัวแปร — /movies/1, /movies/2, /movies/999 เข้า Route นี้หมด */}
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />   {/* ← ดักทุกอย่างที่เหลือ ไว้ล่างสุด */}
        </Routes>
      </main>
      <Footer />                {/* ← เห็นทุกหน้า */}
    </div>
  );
}

export default App;
