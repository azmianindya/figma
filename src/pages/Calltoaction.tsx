const Calltoaction = () => {
  return (
    <div className="bg-[url('./assets/background.png')] w-full h-full bg-cover bg-center">

        {/* konten */}
      <div className="flex flex-col h-screen items-center justify-center gap-6">

        {/* judul */}
        <div className="flex flex-col gap-1 text-center mx-auto">
          <div className="text-4xl font-bold">Easy to setup. <br />Easy to Maintain</div>
          <div className="text-1xl w-129.5">Bootstrap is a widely-used, sleek, intuitive and powerful front-end framework for faster and easier web development.</div>
        </div>
        {/* tombol */}
        <div className="flex flex-row justify-between gap-7.5">
          <div className="w-17.5 h-17.5 bg-[#EA3223] rounded-full">
            <svg className="w-8 h-8 text-white m-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
              </svg>
          </div>

          <div className="w-53.25 h-17.5 bg-[#25DAC5] rounded-full flex items-center justify-center">
            <div className="text-white text-xl font-semibold">Get Started</div>

          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Calltoaction