import React from 'react'

/* function Card(props) {
   /*  console.log("props", props); */
   /*  console.log(props.username);  */
  function Card({username, btnText="visit me"}){
    console.log(username);
    
  
  return (
    <div className="relative mx-auto mt-8  h-[400px] w-[300px] rounded-md">
        <img src="https://images.pexels.com/photos/36949801/pexels-photo-36949801.jpeg" alt="" className="z-0 h-full w-full rounded-md object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent">
        </div>
        <div className='absolute bottom-0 p-4'>
        <h1 className = "text-lg font-bold text-white">{username}</h1>
        <p className = "mt-2 text-sm text-black-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam expedita earum rem at temporibus officiis ratione, minus repellat ut adipisci id nostrum culpa quia laboriosam incidunt a eligendi maxime facere.</p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-bold text-black">{btnText}</button>
    </div>
    </div>
  )
}

export default Card
