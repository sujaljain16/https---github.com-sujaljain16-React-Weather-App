import { useContext } from "react";
import AppContext from "../provider/appContext";

function Footer() {
  const {
    app: { isDark },
  } = useContext(AppContext);
  const anchorStyle = {
    color: "#C6C6C6",
  };
  return (
    <>
      <footer className="footer">
        <a
          href="https://github.com/sujaljain1601"
          target="_blank"
          rel="noreferrer"
          style={isDark ? anchorStyle : null}
        >
          <i class="fa-brands fa-github"></i> <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/sujal-jain-30a5791b8/"
          target="_blank"
          rel="noreferrer"
          style={isDark ? anchorStyle : null}
        >
          <i class="fa-brands fa-linkedin"></i> <span>LinkedIn</span>
        </a>
        <a
          href="https://www.instagram.com/_sujal__jain/"
          target="_blank"
          rel="noreferrer"
          style={isDark ? anchorStyle : null}
        >
          <i class="fa-brands fa-instagram"></i> <span>Instagram</span>
        </a>
      </footer>
    </>
  );
}

export default Footer;
