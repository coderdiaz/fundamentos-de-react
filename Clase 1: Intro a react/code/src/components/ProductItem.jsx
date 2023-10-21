const ProductItem = (props) => {
  return (
    <div className="product__item">
      <span className="product__item-name">{props.name}</span>
      <span className="product__item-price">$ {props.price}</span>
    </div>
  )
}

export default ProductItem;