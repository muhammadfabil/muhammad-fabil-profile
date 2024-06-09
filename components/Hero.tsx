import { CgWebsite } from "react-icons/cg";
import MagicButton from './MagicButton'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { Button } from './ui/moving-border'
import { Profile} from '@/data'
const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
        <div>
          <Spotlight className='-top-40 -left-10 
          md:-left-32 md:-top-20 h-screen' fill='white'/>
          <Spotlight className='top-10 left-full 
          h-[80vh] w-[50vw]' fill='purple'/>
          <Spotlight className='top-28 left-80
          h-[80vh] w-[50vw]' fill='blue'/>
        </div>
        <div className="h-screen w-full dark:bg-red-950 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>

      
      
    </div>
    <div className='flex justify-center relative my-20 z-10'>
      <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]
      flex flex-col items-center justify-center'>
        <TextGenerateEffect 
         className='text-center text-[40px]
         md:text-5xl lg:text-6xl'
         words='Muhammad Fabil'
        />
        <h2 className='uppercase tracking-widest text=xs text-center text-blue-100 max-w-80'>
          Hi i&apos;m a junior web developer 
        
        </h2>
        <h2 className='uppercase tracking-widest text=xs text-center text-blue-100 max-w-'> 
          Welcome to My profile and portofolio website
        </h2>
        <div className='py-20' id='experiences'>
        <h1 className='heading'>
            Profile
        </h1>
        <div className='w-full mt-6 
        '>
            {Profile.map((card)=>(
                <Button 
                key={card.id}
                duration={Math.floor(Math.random()*10000)
                    +10000
                }
                borderRadius='1.75rem'
                className='flex-1 text-white border-neutral-200 
                dark:border-slate-800'>
                    <div className='flex  items-center p-3 py-6 
                    md:p-5 lg:p-10'>
                        
                        <div className='lg:ms-5'>
                            <h1 className='text-start text-xl
                            md:text-2xl font-bold p2'>
                                Muhammad Fabil
                            </h1>
                            <p className='text-start text-white-100
                            mt-3 font-semibold'>
                                Undergraduate Informatics Student at Institut Teknologi Sumatera
                            </p>
                            <p className='text-start text-white-100
                            mt-3 font-semibold'>
                               junior web developer with a high desire to learn and enjoy finding out new things about programming. 
                            </p>
                            <h1 className='text-start text-xl
                            md:text-2xl font-bold mt-2 pt-2'>
                                Currently, I am a student at Dicoding Study Independent Program with a learning path in React & Back-End.
                            </h1>
                        </div>
                        <img src="./profile.png" alt="Muhammad Fabil Profil Photo" width={400}/>
                    </div>
                </Button>
            ))}

        </div>

    </div>
        <a href="#about" >
          <MagicButton
              title="My interest and projects" 
              icon={<CgWebsite />} 
              position={'right'} 
              otherClasses={''} />


        </a>

      </div>

    </div>

    </div>
  )
}

export default Hero