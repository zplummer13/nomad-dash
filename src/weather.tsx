import { getCurrentCoffeeFlavor } from "./helpers";
import { BiCoffeeTogo } from "react-icons/bi";

type OwnProps = {
    flavor?: any;
}

function Weather(props: OwnProps) {

    const currentCoffeeFlavor = getCurrentCoffeeFlavor();

    return (
        <div className="flex flex-col items-center p-1 drop-shadow-lg bg-zblue rounded-md font-DM-Serif text-3xl text-ztan">
            <div className="flex">
                <span className="text-pink-400">
                    <BiCoffeeTogo />
                </span>
                Marylou's FOTM

            </div>
            <div className="text-white">
                {currentCoffeeFlavor.name}
            </div>
        </div>
    );
}

export default Weather;