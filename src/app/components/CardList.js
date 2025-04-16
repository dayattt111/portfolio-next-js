export default function CardList() {
  return (
    <section class="px-4 py-10 bg-white">
      <div class="max-w-screen-xl mx-auto">
        <h2 class="text-3xl font-extrabold text-blue-700 dark:text-black mb-4 text-center">
          Beberapa Proyek yang Pernah Saya Kerjakan 🚀
        </h2>
        <p class="text-lg text-blue-700 dark:text-black text-center mb-8">
          Dari eksperimen pribadi hingga proyek nyata—semua saya buat dengan
          rasa ingin tahu dan semangat untuk terus belajar.
        </p>

        <div class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mx-auto">
            <a href="#">
              <img
                class="rounded-t-lg w-full object-cover h-48"
                src="./download.jpeg"
                alt="Project image"
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  10 Tips Belajar Pemrograman
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                halo, ini adalah artikel tentang tips belajar pemrograman
                terbaru
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Selengkapnya
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div>
          <a href="#" className="text-grey-800 dark:text-blue-800 pt-1">
            Project Lainnya
          </a>
        </div>
      </div>
    </section>
  );
}
