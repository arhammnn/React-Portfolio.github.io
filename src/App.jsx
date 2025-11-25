import DataImage from "./data";
import { listTools, listProyek } from "./data"; 


function App() {
  return (
    <>
    <div className="hero grid md:grid-cols-2 items-center pt-7 xl:gap-0 gap-6 grid-cols-1 place-items-center md:place-items-start">

      <div className="animate__animated animate__fadeInUp animate__delay-2s">
        {/* <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
          <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy"/>
          <p>Lebih baik mencoba dari pada tidak sama sekali.🫡</p>
        </div> */}
        <h2 className="text-5xl/tight font-bold mb-6">Hi, Saya arham</h2>
        <p className="text-base/loose mb-6 opacity-50">Dari ketertarikan awal pada dunia pemrograman hingga mendalami bidang teknologi informasi di jenjang magister, saya terus mengembangkan keterampilan teknis sekaligus memperluas wawasan. Bagi saya, setiap proyek adalah kesempatan untuk tumbuh dan memberi dampak.</p>
        <div className="flex items-center sm:gap-4 gap-2">
        <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">Download CV <i class="ri-download-line ri-lg"></i></a>
        <a href="#project" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">Lihat Project <i className="ri-arrow-down-line ri-lg"></i></a>
      </div>
      </div>
      <img src={DataImage.HeroImage} alt="Hero Image" className="w-full md:w-[500px] mx-0 md:ml-auto animate__animated animate__fadeInUp animate__delay-3s rounded-3xl" loading="lazy"/>
    </div>

    {/* Start about */}
    <div className="about mt-25 py-10" id="about">
      <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy"/> 
        <p className="text-base/loose mb-10">Perkenalkan, saya Arham, lulusan Universitas Muslim Indonesia, Jurusan Teknik Informatika. Setelah menyelesaikan studi sarjana, saya mengembangkan kemampuan di bidang web programming dan terus mengasah keterampilan tersebut. Saat ini, saya sedang menempuh pendidikan Magister (S2) di Universitas Hasanuddin, Jurusan Teknik Informatika, dengan tujuan berdedikasi pada dunia pendidikan, khususnya di bidang teknologi, serta meningkatkan kompetensi pada bidang teknologi informasi.</p>
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" loading="lazy"/> 
          <div className="flex items-center gap-6">
            <div>
            <h1 className="text-3xl mb-1">
              2<span className="text-violet-500">+</span>
            </h1>
            <p>Project Selesai</p>
          </div>
          <div>
            <h1 className="text-3xl mb-1">
              1<span className="text-violet-500">+</span>
            </h1>
            <p>Tahun Pengalaman</p>
            </div>
          </div>
        </div>
      </div>

      <div className="tools mt-25">
        <h1 className="text-4xl/snug font-bold mb-4 text-center" data-aos="fade-up" data-aos-once="true">Tools</h1>
        <p className="xl:w-2/5 lg:2/4 md:2/3 sm:3/4 w-full text-base/loose opacity-50 text-center mx-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut beberapa tools yang biasa saya gunakan untuk pembuatan website ataupun Design</p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

          {listTools.map(tool => (
            <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true" key={tool.id}>
            <img src={tool.gambar} alt="Tools-Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" />
            <div>
              <h4 className="font-bold">{tool.nama}</h4>
              <p className="opacity-50">{tool.ket}</p>
            </div>
          </div>
          ))}
   
        </div>
      </div>
    </div>
    {/* End About */}

    {/* Start Project */}
    <div className="project mt-25 pb-8" id="project">
      <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Project</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut beberapa project yang telah saya buat</p>
        <div className="project-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          
          {listProyek.map(proyek => (
            <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once="true">
              <img src={proyek.gambar} alt="Project Image" loading="lazy"/>
              <div>
                <h2 className="text-2xl font-bold my-4">{proyek.nama}</h2>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a href="#project" className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600">Lihat Website</a>
                </div>
              </div>
            </div>
          ))}

        </div>
    </div>
    {/* End Project */}

    {/* Contact */}
    <div className="kontak mt-25 sm:p-10 p-0" id="contact">
    <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Contact</h1>
    <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Hubungi Saya</p>
    <form action="https://formsubmit.co/muh.arham999@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Nama Lengkap</label>
          <input type="text" name="nama lengkap" placeholder=" Masukkan Nama" className="border border-zinc-500 p-2 rounded-md" required />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Email</label>
          <input type="email" name="email" placeholder=" Masukkan Email" className="border border-zinc-500 p-2 rounded-md" required />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="pesan" className="font-semibold" >Pesan</label>
          <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan" className="border border-zinc-500 p-2 rounded-md" required></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600">Kirim Pesan</button>
        </div>
      </div>
    </form>
  </div>
    {/* End Contact */} 
    </> 
  );
}
 
export default App;
