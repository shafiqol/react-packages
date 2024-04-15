import { NavLink } from "react-router-dom";

const Nave = () => {
	return (
		<div className="navbar max-w-7xl mx-auto">
			<div className="navbar-start font-sans">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
					</div>
					<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-x-2">
						<li><NavLink to={"/"}>Home</NavLink></li>
						<li><NavLink to={"/listed-books"}>Listed Books</NavLink></li>
						<li><NavLink to={"/chart"}>Pages to Read</NavLink></li>
						<li><NavLink to={"/user"}>Our users review</NavLink></li>
						<li><NavLink to={"/kidBook"}>Kids Books</NavLink></li>
					</ul>
				</div>
				<a className="btn btn-ghost text-3xl font-bold">Book Vibe</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1 space-x-2">
					<li><NavLink to={"/"}>Home</NavLink></li>
					<li><NavLink to={"/listed-books"}>Listed Books</NavLink></li>
					<li><NavLink to={"/chart"}>Pages to Read</NavLink></li>
					<li><NavLink to={"/user"}>Our users review</NavLink></li>
					<li><NavLink to={"/kidBook"}>Kids Books</NavLink></li>
				</ul>
			</div>
			<div className="navbar-end mt-24 md:mt-0">
				<a className="btn bg-[#23BE0A] text-white mr-2">Sign In</a>
				<a className="btn bg-[#59C6D2] text-white">Sign Up</a>
			</div>
		</div>
	);
};

export default Nave;