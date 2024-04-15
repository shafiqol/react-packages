import { Outlet } from "react-router-dom";
import Nave from "../Pages/Shared/Nave";
import Footer from "../Pages/Shared/Footer";


const Root = () => {
	return (
		<div className="h-screen">
			<Nave></Nave>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
};

export default Root;