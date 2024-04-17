import AppPaths from "../../lib/appPaths";
import CookieUtil from "../../util/cookieUtil";
import Constants from "../../lib/constants";

const Navbar = () => {
	const logoutClickHandler = () => {
		CookieUtil.deleteCookie(Constants.ACCESS_PROPERTY);
		CookieUtil.deleteCookie(Constants.REFRESH_PROPERTY);
		window.location.href = AppPaths.LOGIN;
	};

	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<a class="navbar-brand" href="#">
				Sandesha
			</a>

			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item active">
						<a class="nav-link" href={AppPaths.FEED}>
							Home
						</a>
					</li>
					<li class="nav-item active">
						<a class="nav-link" href={AppPaths.HOME}>
							Chat
						</a>
					</li>
				</ul>
				<form class="form-inline my-2 my-lg-0">
					<button
						onClick={logoutClickHandler}
						className="btn btn-outline-danger btn-block mt-1"
					>
						Log Out
					</button>
				</form>
			</div>
		</nav>
	);
};

export default Navbar;
