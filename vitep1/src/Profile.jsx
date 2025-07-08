// export default function Profile() {
//   return (
//     <img
//       src="https://i.imgur.com/MK3eW3Am.jpg"
//       alt="Katherine Johnson"
//     />
//   )
// }

function Gallery() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

export default function Profile() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Gallery />
      <Gallery />
      <Gallery />
    </section>
  );
}