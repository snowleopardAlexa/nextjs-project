import { useRouter } from "next/router"
import NextLink from "next/link"
import Image from "next/image"
import { Grid, Link } from "@material-ui/core"
import { products } from "../../utils/data"
import Layout from "../../components/Layout"
import useStyles from "../../utils/styles"

const ProductScreen = () => {
  const classes = useStyles
  const router = useRouter()
  const { slug } = router.query  
  const product = products.find(a => a.slug === slug)
  if (!product) {
      return <div>Product Not Found</div>
  }
  return (
    <Layout title={product.name}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
            <Link>back to products</Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
         <Grid item md={6} xs={12}>
             <Image 
               src={product.image} 
               alt={product.name} 
               width={640} 
               height={640}
               layout="responsive"
               >
              </Image>
              <Grid item md={3} xs={12}>
                  
              </Grid>
         </Grid>
      </Grid>
    </Layout>
  )
}

export default ProductScreen