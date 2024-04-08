import { useState } from 'react';
import axios from 'axios';
import './AddOrderStyles.css'; // Make sure to import the CSS file

const AddOrder = () => {
  const [formData, setFormData] = useState({
    ProductID: '',
    CategoryID: '',
    Name: '',
    Description: '',
    Price: '',
    OrderDate: '',
    ShipDate: '',
    ShippingAddress: '',
    Status: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2507/api/orders', formData);
      console.log('Order created:', response.data);
      setFormData({
        ProductID: '',
        CategoryID: '',
        Name: '',
        Description: '',
        Price: '',
        OrderDate: '',
        ShipDate: '',
        ShippingAddress: '',
        Status: '',
      });
      alert('Order added successfully!');
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Failed to add order. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <section className="form-section">
        <h3 className="form-title">Add Order</h3>
        <form onSubmit={handleSubmit} className="form-layout">
          {/* Input fields for ProductID */}
          <div className="form-row">
            <label htmlFor="productID" className="form-label">
              Product ID
            </label>
            <input
              type="text"
              className="form-control"
              id="productID"
              name="ProductID"
              value={formData.ProductID}
              onChange={handleChange}
              required
            />
          </div>

          {/* Input fields for CategoryID */}
          <div className="form-row">
            <label htmlFor="categoryID" className="form-label">
              Category ID
            </label>
            <input
              type="text"
              className="form-control"
              id="categoryID"
              name="CategoryID"
              value={formData.CategoryID}
              onChange={handleChange}
              required
            />
          </div>

          {/* Input fields for Name */}
          <div className="form-row">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Input fields for Description */}
          <div className="form-row">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              name="Description"
              value={formData.Description}
              onChange={handleChange}
              required
            />
          </div>

          {/* Input fields for Price */}
          <div className="form-row">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="Price"
              value={formData.Price}
              onChange={handleChange}
              required
            />
          </div>

          {/* Repeat for other input fields like OrderDate, ShipDate, ShippingAddress, and Status */}
          {/* ... */}

          {/* Submit button */}
          <div className="form-submit">
            <button type="submit" className="btn-primary">
              Add Order
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddOrder;
