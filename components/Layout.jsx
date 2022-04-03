import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
  Switch,
} from "@material-ui/core";
import useStyles from "../utils/styles";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Store } from "../utils/Store";
import { useContext } from "react";

const Layout = ({ description, title, children }) => {
  //context
  const { state, dispatch } = useContext(Store);
  const { darkMode } = state;

  const theme = createTheme({
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSisze: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      body1: {
        fontWeight: "normal",
      },
      palette: {
        type: darkMode ? "dark" : "light",
        primary: {
          main: "#f0c000",
        },
        secondary: {
          main: "#208080",
        },
      },
    },
  });

  const classes = useStyles();

  // dark mode function
  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" });
  };

  return (
    <>
      <div>
        <Head>
          <title>{title ? `${title} - Apple` : "BigApple"}</title>
          {description && (
            <meta name="description" content={description}></meta>
          )}
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppBar position="static" className={classes.navbar}>
            <Toolbar>
              <NextLink href="/" passHref>
                <Link>
                  <Typography className="brand">
                    <Image
                      src="/apple.svg"
                      width="40px"
                      height="40px"
                      alt="apple-logo"
                    />
                  </Typography>
                </Link>
              </NextLink>
              <div className={classes.grow}>
                <div>
                  {/* theme mode */}
                  <Switch
                    checked={darkMode}
                    onChange={darkModeChangeHandler}
                  ></Switch>
                  <NextLink href="/cart" passHref>
                    <Link>Cart</Link>
                  </NextLink>
                  <NextLink href="/login" passHref>
                    <Link>Login</Link>
                  </NextLink>
                </div>
              </div>
            </Toolbar>
          </AppBar>
        </ThemeProvider>

        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>All rights reserved to Apple Store &copy;</Typography>
        </footer>
      </div>
    </>
  );
};

export default Layout;
