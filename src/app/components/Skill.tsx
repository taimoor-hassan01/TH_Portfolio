// src/components/Skills.tsx
export default function Skills() {
    return (
      <section className="flex flex-col items-center justify-center p-6 md:p-12 bg-[#111827] text-white">
        <h2 className="text-3xl md:text-4xl mb-6 md:mb-8">Skills Overview</h2>
        <ul className="flex flex-wrap gap-2 md:gap-4 justify-center">
          <li className="bg-blue-500 text-white text-sm md:text-base px-3 py-1.5 md:px-4 md:py-2 rounded-lg shadow-md ">CSS/HTML</li>
          <li className="bg-blue-500 text-white text-sm md:text-base px-3 py-1.5 md:px-4 md:py-2 rounded-lg shadow-md">JavaScript</li>
          <li className="bg-blue-500 text-white text-sm md:text-base px-3 py-1.5 md:px-4 md:py-2 rounded-lg shadow-md">TypeScript</li>
          <li className="bg-blue-500 text-white text-sm md:text-base px-3 py-1.5 md:px-4 md:py-2 rounded-lg shadow-md">React</li>
          <li className="bg-blue-500 text-white text-sm md:text-base px-3 py-1.5 md:px-4 md:py-2 rounded-lg shadow-md">Next.js</li>
          <li className="bg-blue-500 text-white text-sm md:text-base px-3 py-1.5 md:px-4 md:py-2 rounded-lg shadow-md">Node.js</li>
          <li className="bg-blue-500 text-white text-sm md:text-base px-3 py-1.5 md:px-4 md:py-2 rounded-lg shadow-md">Python</li>
          <li className="bg-blue-500 text-white text-sm md:text-base px-3 py-1.5 md:px-4 md:py-2 rounded-lg shadow-md">Git/Github</li>
        </ul>
      </section>
    );
  }