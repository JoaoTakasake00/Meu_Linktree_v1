function CardPerfil({ fotoPerfil, nome, descricao, className = "" }) {
  return (
    <div
      className={`
        w-full
        flex flex-col items-center
        px-8 py-6
        rounded-2xl
        bg-white/10
        backdrop-blur-sm
        border border-white/20
        text-white
        shadow-lg
        ${className}
      `}
    >
      <img
        src={fotoPerfil}
        alt="Foto de perfil"
        className="w-28 h-28 rounded-full object-cover"
      />

      <div className="text-center mt-4">
        <h1 className="text-3xl font-bold">{nome}</h1>
        <p className="mt-2 text-sx opacity-80">
          {descricao}
        </p>
      </div>
    </div>
  )
}

export default CardPerfil