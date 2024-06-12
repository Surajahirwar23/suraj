import React from 'react'

function Service({icon:Icon, name, para}) {
  return (
   
       <div className="flex items-center justify-center gap-4 flex-col">
                       <h1 className='text-orange-500 text-3xl'><Icon size="44"/></h1>
                       <h1 className="text-white font-semibold text-xl">{name}</h1>
                       <p className="text-white">{para}</p>
         </div>   
  
  )
}

export default Service
