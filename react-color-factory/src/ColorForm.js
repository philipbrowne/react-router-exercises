import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ColorForm = ({ ColorList, addColor }) => {
  const INITIAL_STATE = {
    color: '#000000',
    name: '',
  };
  const history = useHistory();
  const [formData, setFormData] = useState(INITIAL_STATE);
  const { color, name } = formData;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor({ ...formData });
    setFormData(INITIAL_STATE);
    history.push('/');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="ColorForm-inputs">
          <div className="ColorForm-input">
            <label htmlFor="name" className="ColorForm-label">
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="ColorForm-input">
            <label htmlFor="color" className="ColorForm-label">
              Color
            </label>
            <input
              type="color"
              name="color"
              id="color"
              value={color}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="NewBoxForm-submit">
          <button>Add Box</button>
        </div>
      </form>
    </div>
  );
};

export default ColorForm;
