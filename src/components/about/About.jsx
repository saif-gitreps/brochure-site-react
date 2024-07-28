export default function About() {
   return (
      <div className="my-16 bg-white sm:h-screen">
         <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
               <div className="md:5/12 lg:w-5/12">
                  <img src="bookstore.jpg" alt="image" className="rounded-3xl" />
               </div>
               <div className="md:7/12 lg:w-6/12">
                  <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                     Lorem ipsum dolor sit amet consectetur.
                  </h2>
                  <p className="mt-6 text-gray-600">
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis
                     voluptatem accusantium nemo perspiciatis delectus atque autem!
                     Voluptatum tenetur beatae unde aperiam, repellat expedita
                     consequatur! Officiis id consequatur atque doloremque!
                  </p>
                  <p className="mt-4 text-gray-600">
                     Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
                     expedita at? Asperiores nemo possimus nesciunt dicta veniam
                     aspernatur quam mollitia.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}
