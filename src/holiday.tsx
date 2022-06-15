import { IoMdCalendar } from "react-icons/io";
import Holidays from "date-holidays"

type OwnProps = {
}

function Holiday(props: OwnProps) {

    let hd = new Holidays('US')

    hd.setHoliday("06-18", "Wedding Anniversary")
    hd.setHoliday("10-18", "Dating Anniversary")
    hd.setHoliday("03-27", "ZFD's Birthday")
    hd.setHoliday("05-13", "ZWP's Birthday")
    hd.setHoliday("09-15", "Zurg Adoption Day")

    let holidays = hd.isHoliday(new Date())

    console.log(holidays)

    return (
        <div className="flex flex-col items-center p-1 drop-shadow-lg bg-zpurple rounded-md font-Sriracha text-2xl text-zgold">
            <>
                <div className="flex text-3xl">
                    <span className="text-yellow-500">
                        <IoMdCalendar />
                    </span>
                    Holidays

                </div>
                {typeof holidays != "boolean" &&
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
                }
            </>
        </div>
    );
}

export default Holiday;