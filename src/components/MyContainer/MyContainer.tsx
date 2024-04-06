import "./mycontainer.css";
// components
import { MyCard, Thanks } from "../../components";
import { createContext, useState } from "react";

export const StateProvider: any = createContext("");

export default function MyContainer() {
  const [thanks, setThanks] = useState<boolean>(false);
  const [rate, setRate] = useState<number>();
  return (
    <StateProvider.Provider value={{ rate, setRate, setThanks }}>
      <main>{thanks ? <Thanks /> : <MyCard />}</main>
    </StateProvider.Provider>
  );
}
