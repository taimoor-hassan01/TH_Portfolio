// import Image from "next/image";

// export default function (){
//   return(
//     <div className="bg-blue-500">
//       <h1 className="bg-red-700 text-4xl py-4 pl-[500px] m-[10px] border-8">Zeeshan Haider</h1>
//       <h2 className="bg-orange-500 font-thin py-4">Can you learn tailwind css</h2>
//       {/* <p className="bg-lime-400 font-black m-20 border-8">this is para</p> */}

//       {/* <p className="bg-lime-400 font-medium pl-9 border-8">this is para</p> */}
//       <p className="bg-fuchsia-400 font-extrabold py-3 my-4 mx-20">And are you interested to learn tailwind css</p>

//       <span className="block text-yellow-300 font-extrabold">So click to login button</span>

//       <button className="p-2 bg-pink-300 m-1 border-yellow-500 border-4 rounded-md">login</button>
//     </div>
//   )
// }


// // Border is consisted of 3 porperties
// // 1. Thinkness
// // 2. style rg: solid, lined, dashed.
// // 3. color rg: black, blue, yellow.





// src/app/page.tsx
import Introduction from "./components/introduction";
import Skills from "./components/Skill";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Introduction />
      <Skills />
      <Experience />
      <Footer />
    </main>
  );
}
