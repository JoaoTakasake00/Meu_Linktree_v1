import Grainient from "@/components/Grainient"
import fotoPerfil from "@/assets/imagens/foto_eu_2.jpeg"
import CardPerfil from "@/components/CardPerfil"
import GlassButton from "@/components/GlassButton"
import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

function Home() {
  return (
    <section className="w-screen h-screen bg-[var(--color-background)] flex items-center justify-center">

      <div className="relative w-[480px] h-[800px] rounded-2xl overflow-hidden shadow-xl">

        {/* Gradiente como fundo */}
        <Grainient
          className="absolute inset-0"
          color1="#020764"
          color2="#0059ff"
          color3="#020764"
          timeSpeed={0.25}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
          
        />

        {/* Conteúdo por cima */}
        <div className="relative z-10 flex items-center justify-center w-full h-full flex-col gap-4 p-10">
          <CardPerfil 
            fotoPerfil={fotoPerfil}
            nome="João victor Takasake"
            descricao="Desenvolvedor Full-Stack" 
          />
          <div className="flex flex-col gap-4 w-full items-center justify-center">
            <GlassButton
              title="Currículo"
              href="/CV_Joao_victor_takasake_5.pdf"
              newTab
              icon={FaFilePdf}
            />
            <GlassButton
              title="Portifólio"
              href="https://portifolio-joao-takasake.vercel.app/"
              newTab
              icon={MdWork}
            />
            <GlassButton
              title="Whatsapp"
              href="https://api.whatsapp.com/send/?phone=11970820335"
              newTab
              icon={IoLogoWhatsapp}
            />
            <GlassButton
              title="LinkedIn"
              href="https://www.linkedin.com/in/joao-victor-takasake/"
              newTab
              icon={FaLinkedin}
            />
            <GlassButton
              title="GitHub"
              href="https://github.com/JoaoTakasake00"
              newTab
              icon={FaGithub}
            />
            <GlassButton
              title="Email"
              href="mailto:jv2takasake@gmail.com"
              newTab
              icon={MdEmail}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
