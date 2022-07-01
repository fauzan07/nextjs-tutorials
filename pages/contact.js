import Navbar from '../components/Navbar';
import Image from 'next/image';

const contact = () => {
  return (
      <>
        <Navbar/>
        {/* <h1 style={{color : "green"}}>Blog</h1> */}
        <h1>contact</h1>
        <Image
        src="/assets/school-network-bn1.jpg"
        width="500"
        height="500"></Image>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit fugit debitis recusandae dolorum ipsum autem doloribus, aliquam sit quidem magnam vero laudantium enim tenetur illum blanditiis nisi illo, dicta quod.</p>
        <style jsx>{`
             h1{
                color : green;
            }
            p{
                color : red;
            }
        `}</style>
      </>
  )
}

export default contact