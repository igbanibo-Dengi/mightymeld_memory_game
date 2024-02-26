/* eslint-disable @next/next/no-img-element */

export function Button() {
  return (
    <button className="py-2 px-4  bg-sky-600 hover:bg-sky-700 transition duration-300 ease-in-out  text-white text-sm rounded shadow">
      Button
    </button>
  );
}

export function Button_Large() {
  return (
    <button className="bg-sky-600 transition duration-150 ease-in-out hover:bg-sky-700 lg:text-xl rounded text-white px-10 py-4 text-sm">
      Button
    </button>
  );
}

export function Button_Outlined() {
  return (
    <button className="py-2 px-4 rounded border border-sky-700 hover:border-sky-600 transition duration-300 ease-in-out  text-sky-800 text-sm">
      Button
    </button>
  );
}

export function Button_Rounded() {
  return (
    <button className="px-8 py-2 w-[200px] rounded-full bg-white text-pink-500 focus:ring-2 focus:ring-pink-400 hover:shadow-xl transition duration-200">
      Hard
    </button>
  );
}

export function Card() {
  return (
    <div className="bg-white rounded w-80 p-4 flex flex-col justify-between border shadow">
      <div className="w-full h-56 rounded">
        <img
          src="https://source.unsplash.com/random/200x200"
          alt="image"
          className="w-full h-full rounded"
        />
      </div>
      <div className="py-4">
        <h2 className="font-bold text-xl">Card Tiltle</h2>
        <p className="my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente est
          commodi neque officia nobis enim nesciunt optio exercitationem
          blanditiis error.
        </p>
      </div>
    </div>
  );
}

export function Checkbox() {
  return <input type="checkbox" />;
}

export function Div() {
  return <div className="flex items-center justify-center">Div 1</div>;
}

export function Heading1() {
  return <p className="text-base font-bold font-serif">Attempts :</p>;
}

export function Heading2() {
  return <h2 className="text-5xl font-bold font-serif">Heading 2</h2>;
}

export function Heading3() {
  return <h3 className="text-4xl font-bold font-serif">Heading 3</h3>;
}

export function Heading4() {
  return <h4 className="text-3xl font-bold font-serif">Heading 4</h4>;
}

export function Heading5() {
  return <h5 className="text-2xl font-semibold font-serif">Heading 5</h5>;
}

export function Heading6() {
  return <h6 className="text-xl font-medium font-serif">Heading 6</h6>;
}

export function Hero() {
  return (
    <section className="bg-slate-100">
      <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-slate-800 font-extrabold leading-7 md:leading-10">
            Elevate your web development experience with Tailwind Prefabs
          </h1>
          <p className="mt-5 sm:mt-10 lg:w-10/12 text-slate-500 font-normal text-center text-sm sm:text-lg">
            The seamless component building blocks for effortlessly crafting
            your perfect web application{" "}
          </p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <button className="px-10 py-4 rounded border bg-sky-600 transition duration-150 ease-in-out hover:bg-sky-700 text-white test-sm lg:text-xl">
            Get Started
          </button>
          <button className="px-10 py-4 rounded border border-sky-700 hover:border-sky-600 transition duration-150 ease-in-out text-sky-800 test-sm lg:text-xl">
            Book Demo
          </button>
        </div>
      </div>
    </section>
  );
}

export function Icon_Facebook() {
  return (
    <button className="text-slate-600 hover:text-slate-800">
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  );
}

export function Icon_Instagram() {
  return (
    <button className="text-slate-600 hover:text-slate-800">
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  );
}

export function Icon_X() {
  return (
    <button className="text-slate-600 hover:text-slate-800">
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
      </svg>
    </button>
  );
}

export function Icon_Github() {
  return (
    <button className="text-slate-600 hover:text-slate-800">
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  );
}

export function Image() {
  return (
    <div className="w-200 h-200 overflow-hidden rounded-lg border border-slate-500">
      <img
        src="https://source.unsplash.com/random/200x200"
        alt="Random"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export function Input() {
  return (
    <input
      type="text"
      id="input"
      className="block w-full px-3 py-2 text-slate-900 border border-slate-300 rounded outline-sky-600"
    />
  );
}

export function Paragraph() {
  return (
    <p className="mt-2 text-center text-xs text-foreground">
      “Remember, The Force Will Be With You, Always"
      <br />- Obi-Wan Kenobi
    </p>
  );
}

export function Select() {
  return (
    <div className="relative z-20 bg-slate-50">
      <select className="relative z-20 w-full appearance-none rounded border border-slate-300 bg-slate-50 py-3 px-5 outline-none transition text-sm">
        <option value="">Select your country</option>
        <option value="">USA</option>
        <option value="">UK</option>
        <option value="">Canada</option>
      </select>
      <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
        <svg
          className="fill-current"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.8">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
              fill=""
            ></path>
          </g>
        </svg>
      </span>
    </div>
  );
}

export function TextArea() {
  return (
    <textarea
      id="message"
      rows={4}
      className="block p-3 w-full text-sm text-slate-900 bg-slate-50 rounded-lg border border-slate-300 outline-sky-600 "
      placeholder="Write your thoughts here..."
    ></textarea>
  );
}
