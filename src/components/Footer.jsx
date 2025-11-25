

const Footer = () => {
  return (
    <div className="mt-25 py-4 flex md:flex-row flex-col gap-5 justify-between items-center">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <div className="flex gap-7">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#project">Project</a>
        </div>
        <div className="flex items-center gap-3">
            <a href="#">
                <i className="ri-github-fill ri-2x"></i>
            </a>
            <a href="#">
                <i className="ri-instagram-fill ri-2x"></i>
            </a>
            <a href="#">
                <i className="ri-twitter-fill ri-2x"></i>
            </a>
            <a href="#">
                <i className="ri-facebook-fill ri-2x"></i>
            </a>
        </div>
    </div>
  )
}

export default Footer