import image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";


export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="container border mx-auto h-screen">
        <div className="grid grid-cols-12">
        <div className="col-span-6">A</div>
        <div className="col-span-6">
          <Lanyard />
        </div>
        </div>
      </div>
    </div>
  );
}
