import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <>
    <div className="bg-green-300 flex flex-row-reverse flex-wrap">
      <div className=' basis-1/2'>
      <h1 className='text-3xl font-serif text-white'>Tailwind Width And Height one</h1>
      <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolores, quae quo quaerat quisquam blanditiis veniam natus repellendus laborum cumque. Est nam accusantium expedita at quae tempore voluptatibus ipsa dolores sit officiis deserunt cum odio modi, quibusdam eaque voluptas! Ad, nam consequatur magni fugiat quam aperiam sit est magnam blanditiis.</p>
      </div>
      <div className=' basis-1/2'>
      <h1 className='text-3xl font-serif text-white'>Tailwind Width And Height</h1>
      <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolores, quae quo quaerat quisquam blanditiis veniam natus repellendus laborum cumque. Est nam accusantium expedita at quae tempore voluptatibus ipsa dolores sit officiis deserunt cum odio modi, quibusdam eaque voluptas! Ad, nam consequatur magni fugiat quam aperiam sit est magnam blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tempora molestiae harum ducimus quam, libero debitis voluptatum fugit, quaerat porro atque neque iure totam mollitia doloribus maxime magnam, alias laboriosam! </p>
      </div>
    </div>
    <div className="flex bg-sky-400 break-all">
      <p className='border flex-none w-16 h-14 order-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p className='border grow  h-14 order-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p className='border flex-none w-16 h-14 order-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

    </div>
    <ul className='flex p-5 bg-teal-300 font-mono justify-center items-center'>
      <li className='px-5'>Home</li>
      <li className='px-5'>Product</li>
      <li className='px-5'>Contact</li>
      <li className='px-5'>About</li>
    </ul>
    <div className="flex item-stretch">
      <div className=" bg-sky-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ab, omnis illum dolor cum excepturi facere quisquam ipsam iure architecto ullam. Amet eveniet praesentium, quod minima sunt ipsum voluptatem aperiam? Voluptate nobis necessitatibus libero quo, est dicta facilis ratione similique!
      </div>
    </div>
   </>
  );
}

export default App;
