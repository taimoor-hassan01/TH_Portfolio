// import Image from "next/image";

// // src/components/Introduction.tsx
// export default function Introduction() {
//   return (
//     <section className="relative flex flex-col justify-center items-center h-[90vh] text-gray-100 p-5 pt-10">
//       <div className="absolute top-0 left-0 w-full h-full z-[-1]">
//         <video src="/background-video.mp4" autoPlay loop muted className="object-cover w-full h-full opacity-90"></video>
//       </div>
//       <div className="flex flex-col-reverse md:flex-row justify-around w-full gap-10 z-10">
//         <div className="flex-1 max-w-3xl text-center md:text-left">
//           <h1 className="text-2xl md:text-4xl font-semibold mb-4">Hello! I&apos; Taimoor Hassan</h1>
//           <p className="text-base md:text-xl leading-relaxed mb-2">
//             I&apos;m a dedicated web developer specializing in crafting dynamic, responsive, and engaging websites. With a keen eye for detail and a commitment to quality, I aim to deliver user-centered digital experiences that not only look great but also perform efficiently.
//           </p>
//           <p className="text-base md:text-xl leading-relaxed">
//             Welcome to my portfolio! Here, you can explore my projects, learn about my experience, and see how I bring creative ideas to life through code.
//           </p>
//         </div>
//         <div className="flex justify-center items-center w-36 h-36 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg mx-auto md:mx-0">
//           <Image src="/image.png" alt="Muhammad Hamza, Web Developer" className="object-cover w-full h-full" width={300} height={300}/>
//         </div>
//       </div>
//     </section>
//   );
// }



import Image from "next/image";

// src/components/Introduction.tsx
export default function Introduction() {
  return (
    <section className="relative flex flex-col justify-center items-center h-[90vh] text-gray-100 p-5 pt-10">
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <Image
          src="/background-image.jpg" 
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-90"
          priority
        />
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-around w-full gap-10 z-10">
        <div className="flex-1 max-w-3xl text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-semibold mb-4">Hello! I'm Taimoor Hassan</h1>
          <p className="text-base md:text-xl leading-relaxed mb-2">
            I'm a dedicated web developer specializing in crafting dynamic, responsive, and engaging websites. With a keen eye for detail and a commitment to quality, I aim to deliver user-centered digital experiences that not only look great but also perform efficiently.
          </p>
          <p className="text-base md:text-xl leading-relaxed">
            Welcome to my portfolio! Here, you can explore my projects, learn about my experience, and see how I bring creative ideas to life through code.
          </p>
        </div>

        <div className="flex justify-center items-center w-36 h-36 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg mx-auto md:mx-0">
          <Image
            src="/image.png"
            alt="Muhammad Hamza, Web Developer"
            className="object-cover w-full h-full"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}
