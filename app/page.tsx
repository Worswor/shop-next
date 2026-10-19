import Link from "next/link";

export default function HomePage() {
  return (
    <div className="home-page">
      <h1>Electronic Shop</h1>

      <p>Welcome to my online shop! :D</p>

      <Link className="button-link" href="/shop">
          Start shopping
      </Link>
    </div>
  );
}