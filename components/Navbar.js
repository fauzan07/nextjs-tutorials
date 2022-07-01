import Link from 'next/link';
import Head from 'next/head';

const Navbar = () => {

    const mystyle = {
        color: "#fff",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };

  return (
    <>
        <Head>
            <meta charset="UTF-8"/>
            <meta name="description" content="Free Web tutorials"/>
            <meta name="keywords" content="HTML, CSS, JavaScript"/>
            <meta name="author" content="John Doe"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Next tuts</title>
        </Head>
        <h1 style={mystyle}>Navbar</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit fugit debitis recusandae dolorum ipsum autem doloribus, aliquam sit quidem magnam vero laudantium enim tenetur illum blanditiis nisi illo, dicta quod.</p>
        <style jsx>{`
            p{
                color : red;
            }
        `}</style>
        <ul>
            <li><Link href="/home"><a>Home</a></Link></li>
            <li><Link href="/about"><a>About</a></Link></li>
            <li><Link href="/blog"><a>Blog</a></Link></li>
            <li><Link href="/contact"><a>Contact</a></Link></li>
        </ul>
    </>
  )
}

export default Navbar