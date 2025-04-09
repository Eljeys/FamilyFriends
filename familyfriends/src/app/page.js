import Image from "next/image";
import Header from "./components/header/Header";
import SelectAnimalTypeBtn from "./components/buttons/SelectAnimalTypeBtn";
import DescriptiveLabels from "./components/small_components/Label";
import FetchingDemo from "./components/sandbox/FetchingDemo";
export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <SelectAnimalTypeBtn buttonText="ALLE" />
        <DescriptiveLabels labelText="DEMO" className={`${"bg-amber-300"}`} />
      </main>
    </div>
  );
}
