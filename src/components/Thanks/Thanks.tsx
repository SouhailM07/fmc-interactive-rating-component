import { useContext } from "react";
import "./thanks.css";
import img from "/illustration-thank-you.svg";
import { StateProvider } from "../MyContainer/MyContainer";

export default function Thanks() {
  const { rate }: any = useContext(StateProvider);
  return (
    <>
      <article className=" text-center  min-h-[15rem]  ">
        <section className="max-sm:px-[1rem] px-[2rem] py-[3rem] space-y-[0.5rem]">
          <img src={img} alt="logo" className="mx-auto " />
          <p id="Thanks__rate">You selected {rate + 1} out of 5</p>
          <h1 className="text-[1.7rem]">Thank you!</h1>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </section>
      </article>
    </>
  );
}
