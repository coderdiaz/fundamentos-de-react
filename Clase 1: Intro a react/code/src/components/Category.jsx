import ProductItem from './ProductItem';

const Category = ({ name, items = [] }) => {
  return (
    <div className="category__item">
      <span className="category__item-title">{name}</span>
      <hr className="divisor" />
      <div className="category__item-list">
        {items.map((item, index) => (
          <ProductItem key={index} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  )
}

export default Category;
