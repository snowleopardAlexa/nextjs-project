import { useRouter } from "next/router"
import { products } from "../../utils/data"

const ProductScreen = () => {

  const router = useRouter()
  const { slug } = router.query  
  const product = products.find(a => a.slug === slug)
  if (!product) {
      return <div>Product Not Found</div>
  }
  return (
    <div>
        <h1>{product.name}</h1>
    </div>
  )
}

export default ProductScreen