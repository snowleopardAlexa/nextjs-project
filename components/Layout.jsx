import Head from 'next/head'
import Image from 'next/image'
import NextLink from 'next/link'
import { AppBar, Toolbar, Typography, Container, Link } from "@material-ui/core"
import useStyles from '../utils/styles'

const Layout = ({ children }) => {

  const classes = useStyles()  

  return (
    <>
    <div>
      <Head>
        <title>Apple Store</title>
      </Head>
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
