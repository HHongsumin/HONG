import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>Hi! My name is Sumin :)</h1>
      <h2>
        <Link href="/">
          <a>Back to First Page</a>
        </Link>
      </h2>
    </>
  );
}