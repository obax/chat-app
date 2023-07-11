import { loadUserDetails } from "../lib/utils";

export const Navigation = () => {
  const { isLoggedIn, userData } = loadUserDetails();

  return (
    <nav id="menu" className={`navbar navbar-default navbar-fixed-top`}>
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            Oii Chat
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            {isLoggedIn ? (
              <>
                <li>
                  <a>{userData?.username}</a>
                </li>
                <li>
                  <a href="/rooms/my-rooms">See my conversations</a>
                </li>
              </>
            ) : (
              <li>
                <a href="/sign-in" className="page-scroll">
                  Sign in
                </a>
              </li>
            )}
            <li>
              <a href="/rooms/public-rooms" className="page-scroll">
                See public rooms
              </a>
            </li>
            <li>
              <a href="/#features" className="page-scroll">
                Features
              </a>
            </li>
            <li>
              <a href="/#about" className="page-scroll">
                How it works
              </a>
            </li>
            <li>
              <a href="/#footer" className="page-scroll">
                Contact
              </a>
            </li>
            {isLoggedIn ? (
              <li>
                <a href="/sign-out" className="page-scroll">
                  Sign out
                </a>
              </li>
            ) : (
              <li>
                <a href="/sign-up" className="page-scroll">
                  Sign up
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
