import Head from 'next/head'
import Image from 'next/image'
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core"

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Apple Store</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>
             <Image src="/apple.svg" width="40px" height="40px" alt="apple-logo" />
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
          {children}
      </Container>
      <footer>
          <Typography>
              All rights reserved to Apple Store &copy;
          </Typography>
      </footer>
    </>
  );
};

export default Layout;
