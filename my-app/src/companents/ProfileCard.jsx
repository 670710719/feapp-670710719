// function ProfileCard({ name, nickname, major = 'ยังไม่ระบุสาขา', favorites }) {
//   return (
//     <div className="Profile-card">
//       <h3>{name} ({nickname})</h3>
//       <p>สาขา: {major}</p>
//       <ul>
//         {favorites.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ProfileCard;

import Button from './Button';

function ProfileCard({ name, nickname, major = 'ยังไม่ระบุสาขา', favorites }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md
                    transition hover:-translate-y-1 hover:shadow-xl">
      <h3 className="text-lg font-bold text-slate-800">
        {name} <span className="text-cyan-600">({nickname})</span>
      </h3>
      <p className="mt-1 text-sm text-slate-500">สาขา: {major}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {favorites.map((item, index) => (
          <li key={index}
            className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700">
            {item}
          </li>
        ))}
      </ul>
      <div className="flex gap-3 mt-6">
        <Button var>เพิ่ม</Button>
        <Button variant="danger">ลบ</Button>
        
      </div>
    </div>
  );
}

export default ProfileCard;