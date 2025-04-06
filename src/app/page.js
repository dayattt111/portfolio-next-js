export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="p-6 bg-blue-600 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">MyLanding</h1>
          <nav>
            <ul className="flex gap-4">
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-blue-50 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">Selamat Datang di MyLanding</h2>
          <p className="text-lg mb-6">Solusi cepat dan sederhana untuk memulai website kamu.</p>
          <a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-8">Fitur Unggulan</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow">
              <h4 className="font-bold mb-2">Responsive</h4>
              <p>Mudah diakses dari berbagai perangkat.</p>
            </div>
            <div className="p-6 border rounded-lg shadow">
              <h4 className="font-bold mb-2">Cepat</h4>
              <p>Optimasi performa untuk loading kilat.</p>
            </div>
            <div className="p-6 border rounded-lg shadow">
              <h4 className="font-bold mb-2">Gratis</h4>
              <p>Tanpa biaya tersembunyi. Open source!</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto text-center max-w-2xl">
          <h3 className="text-2xl font-semibold mb-6">Tentang Kami</h3>
          <p>
            Kami adalah tim pengembang yang berfokus pada pembuatan template landing page yang ringan dan mudah digunakan.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto text-center max-w-xl">
          <h3 className="text-2xl font-semibold mb-6">Hubungi Kami</h3>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Nama" className="p-3 border rounded" />
            <input type="email" placeholder="Email" className="p-3 border rounded" />
            <textarea placeholder="Pesan" className="p-3 border rounded h-32"></textarea>
            <button type="submit" className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
              Kirim Pesan
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-6 mt-8">
        <p>&copy; 2025 MyLanding. All rights reserved.</p>
      </footer>
    </div>
  );
}
