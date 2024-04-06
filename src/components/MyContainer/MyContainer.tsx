import "./mycontainer.css";
// components
import { MyCard } from "../../components";

export default function MyContainer() {
  return (
    <main className="bg-black min-h-screen text-white grid place-items-center">
      <MyCard />
    </main>
  );
}
