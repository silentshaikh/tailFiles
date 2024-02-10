import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <>
   {/* Container */}
    <div className="container flex mx-auto justify-evenly mt-4">
      <div className='bg-teal-300 w-full aspect-square rounded-md p-2 ml-2'>
        <h1>Head One</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quidem, reprehenderit officiis deleniti adipisci vitae excepturi praesentium quis a suscipit, quibusdam consectetur, labore blanditiis nemo illo nesciunt nam natus dolores.</p>
      </div>
      <div className='bg-teal-300 w-full aspect-square rounded-md p-2 ml-2'>
        <h1>Head One</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quidem, reprehenderit officiis deleniti adipisci vitae excepturi praesentium quis a suscipit, quibusdam consectetur, labore blanditiis nemo illo nesciunt nam natus dolores.</p>
      </div>
    </div>
    {/* Columns */}
    <div className=" mt-5 columns-3xs">
    <div className='bg-teal-300 w-full aspect-square rounded-md p-2 ml-2'>
        <h1>Head One</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quidem, reprehenderit officiis deleniti adipisci vitae excepturi praesentium quis a suscipit, quibusdam consectetur, labore blanditiis nemo illo nesciunt nam natus dolores.</p>
      </div>
      <div className='bg-teal-300 w-full aspect-square rounded-md p-2 ml-2'>
        <h1>Head One</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quidem, reprehenderit officiis deleniti adipisci vitae excepturi praesentium quis a suscipit, quibusdam consectetur, labore blanditiis nemo illo nesciunt nam natus dolores.</p>
      </div>
      <div className='bg-teal-300 w-full aspect-square rounded-md p-2 ml-2'>
        <h1>Head One</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quidem, reprehenderit officiis deleniti adipisci vitae excepturi praesentium quis a suscipit, quibusdam consectetur, labore blanditiis nemo illo nesciunt nam natus dolores.</p>
      </div>
      <div className='bg-teal-300 rounded-md p-2 ml-2'>
        <h1>Head One</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quidem, reprehenderit officiis deleniti adipisci vitae excepturi praesentium quis a suscipit, quibusdam consectetur, labore blanditiis nemo illo nesciunt nam natus dolores.</p>
      </div>
      <div className='bg-teal-300 rounded-md p-2 ml-2'>
        <h1>Head One</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quidem, reprehenderit officiis deleniti adipisci vitae excepturi praesentium quis a suscipit, quibusdam consectetur, labore blanditiis nemo illo nesciunt nam natus dolores.</p>
      </div>
    </div>
    {/* Position */}
    <div className="relative bg-red-400 w-[30vw] h-[50vh] mt-5 ml-2 rounded-md mb-2">
    <div className="absolute bg-green-400 w-[20vw] h-[30vh] top-2 left-2 rounded-md">

    </div>
    </div>
   </>
  );
}

export default App;
