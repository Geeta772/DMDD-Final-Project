import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:2507/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div style={{ margin: '0 10%' }}>
      <h3>Products</h3>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search here"
          style={{ padding: '10px', width: '200px' }}
        />
        <button type="button" className="btn btn-primary">
          Add Product
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Category ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.Product_ID}>
              <td>{product.Product_ID}</td>
              <td>{product.CategoryID}</td>
              <td>{product.Name}</td>
              <td>{product.Description}</td>
              <td>${product.Price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;