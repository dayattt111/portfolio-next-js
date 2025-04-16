export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto text-center max-w-xl">
        <h3 className="text-2xl dark:text-black font-semibold mb-6">
          Hubungi Kami
        </h3>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nama"
            className="p-3 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 border rounded"
          />
          <textarea
            placeholder="Pesan"
            className="p-3 border rounded h-32"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </section>
  );
}
