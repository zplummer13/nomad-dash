import { getCurrentCoffeeFlavor } from "./helpers";
import { BiCoffeeTogo } from "react-icons/bi";

type OwnProps = {
    flavor?: any;
}

function MaryLou(props: OwnProps) {

    const currentCoffeeFlavor = getCurrentCoffeeFlavor();

    return (
        <div className="flex flex-col items-center p-1 drop-shadow-lg bg-zblue rounded-md font-Sriracha text-2xl text-ztan">
            <div className="flex gap-3 text-3xl">
                <span className="text-pink-400">
                    <BiCoffeeTogo />
                </span>
                <span>
                    Marylou's Coffee
                </span>

            </div>
            <div className="text-white">
                {currentCoffeeFlavor.name}
            </div>
        </div>
    );
}

export default MaryLou;