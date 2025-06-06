import Header from "@/components/Header";
import "../styles/globals.css";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main
        className="flex flex-col items-center flex-grow mt-20 px-4"
        role="main"
      >
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold p-4"
          aria-label="User greeting"
        >
          Welcome, User
        </h1>
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-semibold p-4"
          aria-label="Welcome message"
        >
          Welcome to DevDen!
        </h2>
        <p className="text-center text-base sm:text-lg md:text-xl max-w-2xl p-4">
          DevDen is an online resource for developers of any language to learn
          and chat with other developers!
        </p>
        <p className="text-center text-base sm:text-lg md:text-xl max-w-2xl p-4">
          We want to provide a place where developers not only can get help, but
          learn too. We hope one day the developers who needed help will give
          out help.
        </p>
      </main>
    </div>
  );
}
