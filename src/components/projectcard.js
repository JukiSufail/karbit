import { Add, Book, BookOnline, CameraAltRounded, Circle, CircleRounded, GitHub, PlayArrowRounded, PlaylistPlay, WebAsset, WebAssetRounded } from '@mui/icons-material';
export const ProjectCard = (props) => {
    const plg = props.plg? props.plg : 'unknown';
    const fw = props.fw? props.fw : 'native';
    const pf = props.pf? props.pf : 'none';
    const {desc, image, repo, page, title} = props;
  
    return (
      <div className='rounded-xl  h-fill shadow-xl min-w-64 md:min-w-96 relative'  
      style={{
        background: "linear-gradient(to bottom,#FFD700, #FF7F32 ,#8B0000)", 
  }}>
        <div className='text-dark p-4 py-6 text-2xl font-medium rounded-t-xl '>
        <div className='absolute h-1/2 w-8 bg-gradient-to-r '></div>
          <div className='absolute h-1/2 w-8 bg-gradient-to-l right-0 me-4 '></div>
          <p className='overflow-y-scroll w-full no-scrollbar px-4 text-nowrap'>{title}</p>
        </div>
        <div style={{backgroundImage:`url(${image})`}} className=' bg-contain bg-no-repeat border border-slate-400/10 bg-center rounded-md h-24 md:h-64 mx-4'></div>
        <div className='p-4 uppercase tracking-wide'>
          <span className='text-white bg-sky-400 p-2 text-xs rounded me-2 bg-opacity-20'>{plg}</span>
          <span className='text-white bg-sky-400 p-2 text-xs rounded me-2 bg-opacity-20'>{fw}</span>
          <span className='text-white bg-sky-400 p-2 text-xs rounded me-2 bg-opacity-20'>{pf}</span>
        </div>
        <p className='p-4 text-dark text-xl  bg-opacity-10 h-48 xs:h-64 md:h-36 overflow-y-scroll'>{desc}</p>
        <div className='grid grid-cols-2  rounded-b-xl w-full absolute bottom-0'>
          <a href={page} className='p-4 text-lg text-center font-medium text-yellow-500'>
            {page?(<PlayArrowRounded />):(<Circle/>)}
          </a>
          <a href={repo}className='p-4 text-lg text-center font-medium text-yellow-500'>
            <Book/>
          </a>
        </div>
      </div>
    )
  }