import { moonPhase } from "./get-moon-phase";

type OwnProps = {
}

function Moon(props: OwnProps) {

    const result = moonPhase(new Date())

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
            </>
        </div>
    );
}

export default Moon;