import logo from './logo.svg';
import './App.css';
import Image from './download.jpeg';
function App() {
  return (
   <>
    <div className="break-all shadow-innerTwo shadow-teal-300 mx-20 mt-5 rounded-md p-5 font-serif brightness-125">
      <h1>Heading</h1>
      {/* <a href="#">trgnerongvjk</a> */}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti rerum, earum alias nostrum possimus unde eum delectus nulla beatae sit vel consectetur asperiores recusandae aut sint iste rem! Vero ea eius tempore, amet in laudantium tempora soluta consequatur eum, commodi deserunt quod expedita distinctio animi eligendi ratione? Fuga, aliquid velit.</p>
      <button className='hover:translate-y-6 transition-all ease-in  duration-500 bg-sky-400 py-2 px-4 mt-1 rounded-md text-white shadow-lg shadow-sky-400/60 font-bold ring ring-sky-300'>Submit</button>
    </div>
    <img className='  w-72 mx-auto contrast-200 mt-5' src={Image} alt="image" />
    <div className="animate-pulse break-all shadow-innerTwo shadow-teal-300 mx-20 mt-5 rounded-md p-5 font-serif brightness-125">
      <h1>Heading</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti rerum, earum alias nostrum possimus unde eum delectus nulla beatae sit vel consectetur asperiores recusandae aut sint iste rem! Vero ea eius tempore, amet in laudantium tempora soluta consequatur eum, commodi deserunt quod expedita distinctio animi eligendi ratione? Fuga, aliquid velit.</p>
      <button className='transition-all ease-in  duration-500 hover:scale-105  bg-sky-400 py-2 px-4 mt-1 rounded-md text-white shadow-lg shadow-sky-400/60 font-bold ring ring-sky-300'>Submit</button>
    </div>
    
   </>
  );
}

export default App;
