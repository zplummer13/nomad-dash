import Header from './header';
import Holiday from './holiday';
import MaryLou from './mary-lou';
import Moon from './moon';
import Weather from './weather';

function App() {
    return (
        <div className={`w-screen h-screen bg-fixed bg-cover bg-center bg-[url('./images/sun.jpg')]`} >
            <div className="flex flex-col justify-around p-4 pt-8 space-y-4 animate-slide-down">
                <Header></Header>
                <Weather></Weather>
                <MaryLou></MaryLou>
                <Moon></Moon>
                <Holiday></Holiday>
            </div>
        </div>
    );
}

export default App;
