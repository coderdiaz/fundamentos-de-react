import Category from './Category';

const categories = [
  {
    id: 1,
    name: 'Fruits',
    items: [
      { name: 'Apple', price: 1 },
      { name: 'Watermelon', price: 5 },
      { name: 'Mango', price: 2 }
    ]
  },
  {
    id: 2,
    name: 'Vegetables',
    items: [
      { name: 'Tomato', price: 3 },
      { name: 'Carrot', price: 2 },
      { name: 'Lettuce', price: 1 }
    ]
  },
  {
    id: 3,
    name: 'Cereals',
    items: [
      { name: 'Rice', price: 3 },
      { name: 'Corn', price: 2 },
      { name: 'Wheat', price: 1 }
    ]
  },
  {
    id: 4,
    name: 'Legumes',
    items: [
      { name: 'Beans', price: 3 },
      { name: 'Lentils', price: 2 },
      { name: 'Chickpeas', price: 1 }
    ]
  },
  {
    id: 5,
    name: 'Dairy',
    items: [
      { name: 'Milk', price: 3 },
      { name: 'Cheese', price: 2 },
      { name: 'Yogurt', price: 1 }
    ]
  }
]

const ProductList = () => {
  const onHandleClick = () => {
    console.log('Clicked!')
  }

  const onHandleEntered = () => {
    console.log('Entered!');
  }

  const onHandleLeave = () => {
    console.log('Leaved!');
  }

  return (
    <div className="product__list">
      <div className="product__heading">
        <h1 className="product__list-title">Your products</h1>
        <button
          className="btn"
          onClick={onHandleClick}
          onMouseEnter={onHandleEntered}
          onMouseLeave={onHandleLeave}
        >Agregar</button>
      </div>
      {categories.map((category) => (
        <Category
          key={category.id}
          name={category.name}
          items={category.items}
        />
      ))}
    </div>
  )
}

export default ProductList;