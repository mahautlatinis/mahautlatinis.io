import Link from 'next/link';
import Image from 'next/image';
import up42 from "public/images/home/42/42up2.jpg"
import deloittelogo from "public/images/home/deloitte/deloitte-digital.png"
import greenlylogo from 'public/images/home/greenly/logo-greenly.png'
import mahaut from 'public/images/home/mahaut.png';
import peers from 'public/images/home/greenly/peers.png'
import shorthair from 'public/images/home/42/updated-42.jpg'
import cub3d from 'public/images/home/42/cub3d/cub3d.gif'
import minishell from 'public/images/home/42/minishell/minishell.gif'

function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  );
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        hey, I'm Mahaut Latinis 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`I'm a French software engineer based in Versailles and a bubbly mother. I currently `}
        <Link href="/work">work</Link>
        {` as Backend Engineer and Product Builder at Greenly.`}
        <span className="not-prose">
         {/*  <Badge href="https://vercel.com/home">
            <svg
              width="13"
              height="11"
              role="img"
              aria-label="Vercel logo"
              className="mr-1 inline-flex"
            >
              <use href="/sprite.svg#vercel" />
            </svg>
            Vercel
          </Badge> */}
        </span>
        {/* {`, where I help teach the `}
        <Badge href="https://nextjs.org">
          <img
            alt="Next.js logomark"
            src="/next-logo.svg"
            className="!mr-1"
            width="14"
            height="14"
          />
          Next.js
        </Badge>
        {` community, an open-source web framework built with `}
        <Badge href="https://react.dev">
          <svg
            width="14"
            height="14"
            role="img"
            aria-label="React logo"
            className="!mr-1"
          >
            <use href="/sprite.svg#react" />
          </svg>
          React
        </Badge>
        . */}
      </p>
      <div className="my-8 columns-2 gap-4 sm:columns-3">
        <div className="relative mb-4 h-40">
          <Image
            alt=""
            src={greenlylogo}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative mb-4 h-80 sm:mb-0">
          <Image
            alt=""
            src={peers}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-[-16px] sm:object-center"
          />
        </div>
        <div className="relative h-40 sm:mb-4 sm:h-80">
          <Image
            alt=""
            src={mahaut}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative mb-4 h-40 sm:mb-0">
          <Image
            alt=""
            src={deloittelogo}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative mb-4 h-40">
          <Image
            alt=""
            src={up42}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80">
          <Image
            alt=""
            src={shorthair}
            fill
            sizes="(min-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, qui cumque. Aut facere possimus ullam molestiae laudantium illo aperiam impedit dolorum illum iste excepturi recusandae ipsum, beatae fugit inventore labore.
        </p>
      </div>
      <div className="my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eos tempora, consectetur veniam accusantium nulla numquam? Est cupiditate reiciendis saepe nesciunt commodi dolores aliquid recusandae, delectus accusantium. Alias, quibusdam ducimus.
        </p>
      </div>
      <div className="my-8 flex w-full flex-col space-y-4">
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam doloremque quae, pariatur suscipit earum qui omnis alias nemo atque temporibus non, a quaerat? Placeat magnam, soluta nemo dolor est labore?
        </p>
      </div>
      {/* <div className="relative mb-4 h-80">
          <Image
            alt=""
            src=""
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div> */}
        <div className="grid grid-cols-3">
          <div /*className="space-y-1"*/>
            <Image src={cub3d} alt="Photo 1" className="w-full h-80 object-cover" />
            <Image src={minishell} alt="Photo 2" className="w-full h-80 object-cover" />
            <img src="photo3.jpg" alt="Photo 3" className="w-full h-80 object-cover" />
          </div>
          <div /*className="space-y-4"*/>
            <img src="photo4.jpg" alt="Photo 4" className="w-full h-80 object-cover" />
            <img src="photo5.jpg" alt="Photo 5" className="w-full h-80 object-cover" />
            <img src="photo6.jpg" alt="Photo 6" className="w-full h-80 object-cover" />
          </div>
          <div /*className="space-y-4"*/>
            <img src="photo7.jpg" alt="Photo 7" className="w-full h-80 object-cover" />
            <img src="photo8.jpg" alt="Photo 8" className="w-full h-80 object-cover" />
            <img src="photo9.jpg" alt="Photo 9" className="w-full h-80 object-cover" />
          </div>
        </div>
      {/* TODO: à changer */}
      <div className="my-8 flex h-14 w-full flex-row space-x-2 overflow-x-auto">
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
        </div>
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
        </div>
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
        </div>
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
        </div>
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
        </div>
      </div>
    </section>
  );
}
