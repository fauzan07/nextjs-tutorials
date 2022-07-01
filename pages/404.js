import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";


const ErrorPage = () => {
    const router = useRouter();

    const handleRedirect = () => {
        router.push('/home');
    }

    useEffect(() => {
        setTimeout(() => {
            router.push('/home');
        }, 3000)
    }, []);

  return (
    <>
        <h1>Page Not Found</h1>
        <Link href="/"><a>Back to Home</a></Link>
        <button onClick={handleRedirect}>Back to Home</button>
    </>
  )
}

export default ErrorPage