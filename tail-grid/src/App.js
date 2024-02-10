import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 mt-5 mx-9 max-[1193px]:grid-cols-3 max-[1025px]:grid-cols-2 max-[641px]:grid-cols-1">
        <div className='bg-sky-400 text-white p-5 rounded-lg '> <h1>Grid One</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus perspiciatis, odit ut rem voluptas saepe et possimus architecto voluptatibus nisi at. Sint nulla impedit veniam nesciunt consectetur totam tempora eligendi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente neque omnis officiis pariatur qui odio eligendi velit quae natus molestias reiciendis dolores vitae mollitia accusamus, itaque magnam nisi dignissimos placeat! </p></div>
        <div className='bg-sky-400 text-white p-5 rounded-lg'> <h1>Grid One</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus perspiciatis, odit ut rem voluptas saepe et possimus architecto voluptatibus nisi at. Sint nulla impedit veniam nesciunt consectetur totam tempora eligendi.</p></div>
        <div className='bg-sky-400 text-white p-5 rounded-lg'> <h1>Grid One</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus perspiciatis, odit ut rem voluptas saepe et possimus architecto voluptatibus nisi at. Sint nulla impedit veniam nesciunt consectetur totam tempora eligendi.</p></div>
        <div className='bg-sky-400 text-white p-5 rounded-lg'> <h1>Grid One</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus perspiciatis, odit ut rem voluptas saepe et possimus architecto voluptatibus nisi at. Sint nulla impedit veniam nesciunt consectetur totam tempora eligendi.</p></div>
      </div>
      {/* <div class="grid grid-cols-6 gap-4">
  <div class="col-start-13 col-end-12 bg-sky-400">01</div>
  <div class="col-start-1 col-end-3 bg-sky-400">02</div>
  <div class="col-end-7 col-span-2 bg-sky-400">03</div>
  <div class="col-start-4 col-end-7 bg-sky-400">04</div>
</div> */}
    </>
  );
}

export default App;
