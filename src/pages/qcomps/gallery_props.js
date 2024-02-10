function Profile({scientist, size=100}) {
  return (
    <section className="profile">
      <h2>{scientist.name}</h2>
      <img
        className="avatar"
        src={'http://i.imgur.com/' + scientist.imageId + '.jpg'}
        alt={scientist.name}
        width={size}
        height={size}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {scientist.profession}
        </li>
        <li>
          <b>Awards: {scientist.awards.split(',').length} </b>
          ({scientist.awards})
        </li>
        <li>
          <b>Discovered: </b>
          {scientist.discovery}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        scientist={{
          name: 'Maria Skłodowska-Curie',
          imageId: 'szV5sdG',
          profession: 'physicist and chemist',
          awards: 'Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal',
          discovery: 'polonium (element)'
        }}
      />
      <Profile
        scientist={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2',
          profession: 'geochemist',
          awards: 'Miyake Prize for geochemistry, Tanaka Prize',
          discovery: 'a method for measuring carbon dioxide in seawater'
        }}
      />
    </div>
  )
}

// export default function Gallery() {
//   return (
//     <div>
//       <h1>Notable Scientists</h1>


//       <section className="profile">
//         <h2>Maria Skłodowska-Curie</h2>
//         <img
//           className="avatar"
//           src='https://i.imgur.com/szV5sdGs.jpg'
//           alt="Maria Skłodowska-Curie"
//           width={70}
//           height={70}
//         />
//         <ul>
//           <li>
//             <b>Profession: </b>
//             physicist and chemist
//           </li>
//           <li>
//             <b>Awards: 4 </b>
//             (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
//           </li>
//           <li>
//             <b>Discovered: </b>
//             polonium (element)
//           </li>
//         </ul>
//       </section>



//       <section className="profile">
//         <h2>Katsuko Saruhashi</h2>
//         <img
//           className="avatar"
//           src='https://i.imgur.com/YfeOqp2s.jpg'
//           alt="Katsuko Saruhashi"
//           width={70}
//           height={70}
//         />
//         <ul>
//           <li>
//             <b>Profession: </b>
//             geochemist
//           </li>
//           <li>
//             <b>Awards: 2 </b>
//             (Miyake Prize for geochemistry, Tanaka Prize)
//           </li>
//           <li>
//             <b>Discovered: </b>
//             a method for measuring carbon dioxide in seawater
//           </li>
//         </ul>
//       </section>
//     </div>
//   );
// }
