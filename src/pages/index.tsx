import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center p-24">
      <header className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Making it possible by&nbsp;
          <code className="font-mono font-bold">
            <a href='https://www.linkedin.com/in/bernardo-ferrari-192b80132/'>Ber Ferrari</a>
          </code>
        </p>
      </header>

      <section className="h-full flex flex-col justify-center items-center">
        {/* <div className="relative flex place-items-center">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/silhoutte.png"
            alt="Logo"
            width={180}
            height={37}
            priority
          />
        </div> */}
        <div className="bb" >COMING SOON</div>
      </section>
    </main>
  )
}
