import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex justify-center items-center">
      <div className="text-center mt-10">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </div>
    </section>
  );
}
