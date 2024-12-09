import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work',
  description: 'A summary of my work and contributions.',
};


export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione facere vel tempore. Nam nobis earum quasi ipsam dignissimos, laboriosam, sint dolores quis, ut quod expedita ea quibusdam voluptates necessitatibus corporis.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Vercel</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Software Engineer
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem recusandae repellendus similique blanditiis consequuntur, deserunt dicta, fugit provident suscipit molestias inventore cupiditate saepe numquam id delectus eos nam quia repellat.
        </p>
        <ul>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam molestiae eaque animi aliquid eveniet dolorum reprehenderit illo, corporis alias esse quidem velit suscipit quam iusto laboriosam doloribus? Perferendis, aut blanditiis?
          </li>
          <li>
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, ab modi! Nihil quod molestias ipsam accusantium ut quos beatae, vero in sit? Voluptatibus culpa obcaecati blanditiis quo animi autem eaque.
          </li>
          <li>
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum debitis cupiditate consequuntur perferendis nesciunt saepe reiciendis quam quos placeat vitae eum nam unde architecto dignissimos nobis, consequatur sapiente quaerat. Maxime!
          </li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae veritatis corporis architecto asperiores odio alias nesciunt nemo, vitae quas optio nulla odit accusamus porro, in ad rem beatae magnam? Quo
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Hy-Vee</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga ullam, animi minima voluptates deleniti eaque praesentium quaerat aspernatur voluptate repellat tenetur maiores mollitia consequuntur debitis obcaecati fugit quae molestiae eius.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo id fuga repudiandae enim officia impedit non nulla cupiditate consequuntur incidunt. Possimus facere optio nam temporibus eaque aliquid nobis maiores deleniti.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, animi! Illo, nostrum nulla ipsum distinctio qui reiciendis voluptatibus quasi magnam id accusamus explicabo sint facilis! Illum inventore beatae sed corrupti.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Workiva</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Lorem
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate in enim non! Voluptate minus neque officiis commodi. Facere nisi assumenda similique unde perspiciatis. Repellat minima aspernatur minus ipsum expedita officia?
        </p>
      </div>
    </section>
  );
}
