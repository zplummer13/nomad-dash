import { IoMdCalendar } from "react-icons/io";
import Holidays from "date-holidays"
import { moonPhase } from "./get-moon-phase";

type OwnProps = {
}

function Moon(props: OwnProps) {

    // let hd = new Holidays('US')

    // hd.setHoliday("06-18", "Wedding Anniversary")
    // hd.setHoliday("10-18", "Dating Anniversary")
    // hd.setHoliday("03-27", "ZFD's Birthday")
    // hd.setHoliday("05-13", "ZWP's Birthday")
    // hd.setHoliday("09-15", "Zurg Adoption Day")

    // let holidays = hd.isHoliday(new Date())

    // console.log(holidays)

    const result = moonPhase(new Date())

    console.log(result);

    return (
        <div className="flex flex-col items-center p-1 drop-shadow-lg bg-zpurple rounded-md font-Chango text-2xl text-zgold">
            <>
                <div className="flex gap-3 text-3xl">
                    <span>
                        {result.icon}
                    </span>
                    <span>
                        Moon Status
                    </span>
                </div>
                <div className="text-white">
                    {result.name}
                </div>
                {/* {typeof holidays != "boolean" &&
                    <>
                        {holidays.map((holiday) =>
                            <div className="text-white">{holiday.name}</div>
                        )}
                    </>
                }
                {!holidays &&
                    <div className="text-neutral-400">
                        No holidays today
                    </div>
                } */}
            </>
        </div>
    );
}

export default Moon;