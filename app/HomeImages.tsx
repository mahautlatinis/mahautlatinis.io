import minishell from 'public/images/home/42/minishell/minishell.gif'
import inception from 'public/images/home/42/inception/inception1.png'
import inception1 from 'public/images/home/42/inception/inception1.png'
import minitalk from 'public/images/home/42/minitalk/minitalk.png'
import solong from 'public/images/home/42/so_long/solonggif.gif'
import Image from 'next/image';
import cub3d from 'public/images/home/42/cub3d/cub3d.gif'


export default function HomeImages() {
    return (
          <div className="grid grid-cols-3 gap-1">
            <div className="space-y-1">
              <Image src={cub3d} alt="Cub3d" objectFit="cover" className="transition-transform duration-300 ease-out hover:scale-90 rounded-lg" />
              <Image src={minitalk} alt="Photo 2" className="transition-transform duration-300 ease-out hover:scale-90 rounded-lg"  />
              <Image src="" alt="Photo 3" objectFit="cover" className="transition-transform duration-300 ease-out hover:scale-90 rounded-lg"  />
            </div>
            <div className="space-y-1">
              <Image src="" alt="Photo 2" objectFit="cover" className="transition-transform duration-300 ease-out hover:scale-90 rounded-lg"  />
              <Image src={minishell} alt="Minishell" objectFit="cover" className="transition-transform duration-300 ease-out hover:scale-90 rounded-lg"  />
              <Image src="" alt="Photo 3" objectFit="cover" className="transition-transform duration-300 ease-out hover:scale-90 rounded-lg"  />
            </div>
            <div className="space-y-1">
              <Image src={inception1} alt="Inception" objectFit="cover" className="transition-transform duration-300 ease-out hover:scale-90 rounded-lg" />
              <Image src={solong} alt="Photo 2" objectFit="cover" className="transition-transform duration-300 ease-out hover:scale-90 rounded-lg"  />
              <Image src="" alt="Photo 3" objectFit="cover" className="transition-transform duration-300 ease-out hover:scale-90 rounded-lg"  />
            </div>
          </div>
    );
  }
  