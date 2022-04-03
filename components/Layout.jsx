import Head from 'next/head'
import Image from 'next/image'
import NextLink from 'next/link'
import { AppBar, Toolbar, Typography, Container, createMuiThemek, Link } from "@material-ui/core"
import useStyles from '../utils/styles'

const Layout = ({ description, title, children }) => {

  const theme = createMuiTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0'
      },
      h2: {
        fontSisze: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0'
      }
    }
  })
  const classes = useStyles()  

  return (
    <>
    <div>
      <Head>
        <title>{title ? `${title} - Apple` : 'BigApple'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
           <Link>
          <Typography className="brand">
             <Image src="/apple.svg" width="40px" height="40px" alt="apple-logo" />
          </Typography>
          </Link> 
          </NextLink>
          <div className={classes.grow}>
            <div>
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
      <Container className={classes.main}>
          {children}
      </Container>
      <footer className={classes.footer}>
          <Typography>
              All rights reserved to Apple Store &copy;
          </Typography>
      </footer>
    </div>
    </>
  );
};

export default Layout;
