function CardPerfil({ fotoPerfil, nome, descricao, className = "" }) {
  return (
    <div
      className={`
        w-full
        flex flex-col items-center
        px-5 sm:px-6 py-4
        rounded-2xl
        bg-white/12
        backdrop-blur-md
        border border-white/20
        text-white
        shadow-lg shadow-black/20
        ${className}
      `}
    >
      <div className="relative">
        <img
          src={fotoPerfil}
          alt="Foto de perfil"
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover ring-2 ring-white/45 shadow-md"
        />
        <span className="absolute bottom-0.5 right-0.5 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-[#0a2a74]" />
      </div>

      <div className="text-center mt-3">
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight">{nome}</h1>
        <p className="mt-1.5 text-sm opacity-90">
          {descricao}
        </p>
        <p className="mt-2 text-[0.72rem] sm:text-xs font-medium text-white/80">
          Disponível para projetos e oportunidades
        </p>
      </div>
    </div>
  )
}

export default CardPerfil
