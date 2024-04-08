import React, { useState } from 'react';
import axios from 'axios';
import './AddWarehouseStyles.css'; // Import the updated CSS file

const AddWarehouse = () => {
  const [formData, setFormData] = useState({
    WarehouseID: '',
    Name: '',
    Location: '',
    Capacity: '',
    Description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2507/api/warehouses', formData);
      console.log('Warehouse created:', response.data);
      setFormData({
        WarehouseID: '',
        Name: '',
        Location: '',
        Capacity: '',
        Description: '',
      });
      alert('Warehouse added successfully!');
    } catch (error) {
      console.error('Error creating warehouse:', error);
      alert('Failed to add warehouse. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <section className="form-section">
        <h3 className="form-title">Add Warehouse</h3>
        <form onSubmit={handleSubmit} className="form-layout">
          <div className="form-row">
            <input
              type="text"
              className="form-control"
              id="warehouseID"
              name="WarehouseID"
              placeholder="Warehouse ID"
              value={formData.WarehouseID}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              className="form-control"
              id="name"
              name="Name"
              placeholder="Name"
              value={formData.Name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              className="form-control"
              id="location"
              name="Location"
              placeholder="Location"
              value={formData.Location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <input
              type="number"
              className="form-control"
              id="capacity"
              name="Capacity"
              placeholder="Capacity"
              value={formData.Capacity}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <textarea
              className="form-control"
              id="description"
              name="Description"
              placeholder="Description"
              value={formData.Description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-submit">
            <button type="submit" className="btn-primary">
              Add Warehouse
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddWarehouse;
