import Image from "next/image";
import Header from "./components/header/Header";
import SelectAnimalTypeBtn from "./components/buttons/SelectAnimalTypeBtn";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <SelectAnimalTypeBtn buttonText="ALLE" />
      </main>
    </div>
  );
}
