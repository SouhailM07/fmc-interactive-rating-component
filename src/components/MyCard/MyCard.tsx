import "./mycard.css";
// hooks
import { useState } from "react";

// assets
import logo from "/icon-star.svg";
export default function MyCard() {
  const [rate, setRate] = useState<number>();
  // handlers
  const handleRate = (e: number) => setRate(e);
  return (
    <article className="bg-NeutralVeryDarkBlue max-sm:w-[90%] w-[23rem] min-h-[20rem] rounded-xl ">
      <section className="p-[1.5rem]  space-y-[1rem]">
        <img
          src={logo}
          alt="logo"
          className="bg-NeutralDarkBlue h-[2.5rem] aspect-square p-3 rounded-full"
        />
        <h1 className="text-[1.7rem]">How did we do?</h1>
        <p className="text-[0.85rem] text-NeutralLightGrey">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <ul className="flex justify-between">
          {Array(5)
            .fill("")
            .map((_e, i) => {
              return (
                <li
                  key={i}
                  className={`${
                    rate == i
                      ? "bg-NeutralLightGrey text-white"
                      : "bg-NeutralDarkBlue text-NeutralMediumGrey"
                  } max-sm:h-[2.4rem] h-[2.7rem]  aspect-square grid place-items-center  rounded-full hover:bg-PrimaryOrange cursor-pointer hover:text-white`}
                  onClick={() => handleRate(i)}
                >
                  {i + 1}
                </li>
              );
            })}
        </ul>
        <button className="bg-PrimaryOrange text-white rounded-full w-full grid place-items-center h-[2.5rem] text-[0.9rem] hover:bg-white hover:text-PrimaryOrange">
          SUBMIT
        </button>
      </section>
    </article>
  );
}
