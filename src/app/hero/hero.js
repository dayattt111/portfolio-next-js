export default function Hero() {
  return (
    <section className="bg-gray-900">
      <div className="container mx-auto min-h-screen flex items-center px-6 md:px-20">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-12 w-full">
          {/* Teks Kiri */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              <span className="text-green-500">Hi,</span> I'm Dayat Junior
              Networking
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Ngoding bukan cuma kerja, tapi juga kesenangan. Dengan pengalaman
              dari front-end sampai ke back-end, saya selalu mencari cara untuk
              bikin aplikasi yang nggak cuma jalan, tapi juga nyaman dilihat dan
              dipakai.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 rounded-full bg-rose-500 px-6 py-3 font-semibold text-white shadow-md hover:bg-rose-600 transition">
                Follow
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </button>
              <button className="flex items-center gap-2 rounded-full bg-white text-gray-800 px-6 py-3 font-semibold shadow-md hover:bg-gray-200 transition">
                Resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="./kirito.jpg"
              alt="Profile"
              className="rounded-full w-72 h-72 md:w-96 md:h-96 object-cover border-4 border-blue-700 shadow-[0_0_25px_rgba(59,130,246,0.6)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
