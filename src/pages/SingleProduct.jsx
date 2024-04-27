import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useProductsContext } from '../context/product_context';
import { single_product_url as url} from '../utils/Constants';
import Loading from '../components/Loading';
import { AddToCart, Error, PageHero, ProductsImages, Stars } from '../components';
import styled from 'styled-components';
import { formatPrice } from '../utils/helpers';
const SingleProduct = () => {
 const{id}=useParams()
 const navigate=useNavigate()

 const{single_product_loading:loading,single_product_error:error,single_product:product,fetchSingleProduct}=useProductsContext()

 useEffect(()=>{
fetchSingleProduct(`${url}${id}`)
 },[id])


  useEffect(()=>{
if(error){

  setTimeout(()=>{
navigate('/')
  },3000)

}
  },[error])
 
 console.log(product);

 if(loading){
return <Loading/>
 }
 if(error){
return <Error/>
 }
 const {
  name,
  price,
  description,
  stock,
  stars,
  reviews,
  id: sku,
  company,
  images,
} = product;
  return (
    
    <Wrapper>
 <PageHero title={name} product/>
 <div className='section section-center page'>
        <Link to='/products' className='btn'>
          back to products
        </Link>

      <div className="product-center">

        <ProductsImages images={images}/>

        <section className="content">
        <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className='price'>{formatPrice(price)}</h5>
            <p className='desc'>{description}</p>
            <p className='info'>
              <span>Available : </span>
              {stock > 0 ? 'In stock' : 'out of stock'}
            </p>
            <p className='info'>
              <span>SKU :</span>
              {sku}
            </p>
            <p className='info'>
              <span>Brand :</span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={product} />}
        </section>
      </div>
        </div>

    </Wrapper>
  )
}

export default SingleProduct

const Wrapper=styled.main`
.product-center {
  display: grid;
  gap: 4rem;
  margin-top: 2rem;
}
.price {
  color: var(--clr-primary-5);
}
.desc {
  line-height: 2;
  max-width: 45em;
}
.info {
  text-transform: capitalize;
  width: 300px;
  display: grid;
  grid-template-columns: 125px 1fr;
  span {
    font-weight: 700;
  }
}
@media (min-width: 992px) {
  .product-center {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
  .price {
    font-size: 1.25rem;
  }
}

`