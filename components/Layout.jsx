import Head from 'next/head'
import Image from 'next/image'
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core"
import useStyles from '../utils/styles'

const Layout = ({ children }) => {

  const classes = useStyles()  

  return (
    <>
      <Head>
        <title>Apple Store</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>
             <Image src="/apple.svg" width="40px" height="40px" alt="apple-logo" />
          </Typography>
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
    </>
  );
};

export default Layout;
