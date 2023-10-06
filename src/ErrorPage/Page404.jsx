import { Link } from "react-router-dom";


const Page404 = () => {
    return (
        <div className="flex md:flex-row flex-col justify-center items-center mt-10">
            <div className="bg-yellow-200 p-4 ">
            <h1 className="md:text-5xl text-center text-red-600"> Sorry! Wrong input.</h1>
           <h1 className="md:text-5xl text-center text-green-600 mt-2"> Try again.Thank you</h1>
           <button><Link to="/"></Link></button>
            </div>
           <img src="https://i.ibb.co/d5cwLNh/faD.png" alt="" className="md:w-52 w-32"/>
        </div>
    );
};

export default Page404;