import "./mycard.css";
// hooks
import { useContext } from "react";
import { StateProvider } from "../MyContainer/MyContainer";
// assets
import logo from "/icon-star.svg";
export default function MyCard() {
  const { rate, setRate, setThanks }: any = useContext(StateProvider);
  // handlers
  const handleRate = (e: number) => setRate(e);
  const handleThanks = () => rate > -1 && setThanks(true);
  return (
    <article id="MyCard">
      <section className="p-[1.5rem] space-y-[1rem]">
        <img
          src={logo}
          alt="logo"
          className="bg-NeutralDarkBlue h-[2.5rem] aspect-square p-3 rounded-full"
        />
        <h1 className="text-[1.7rem]">How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <ul role="list" className="flex justify-between">
          {Array(5)
            .fill("")
            .map((_e, i) => {
              return (
                <li
                  role="listitem"
                  key={i}
                  className={`${
                    rate == i
                      ? "bg-NeutralLightGrey text-white"
                      : "bg-NeutralDarkBlue text-NeutralMediumGrey"
                  } `}
                  onClick={() => handleRate(i)}
                >
                  {i + 1}
                </li>
              );
            })}
        </ul>
        <button onClick={handleThanks}>SUBMIT</button>
      </section>
    </article>
  );
}
