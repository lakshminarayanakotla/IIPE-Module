import React, { useState } from "react";
import {Form, Input, Button} from "semantic-ui-react";

const DynamicInput = () => {
  const [inputs, setInputs] = useState([{ name: '', designation: '' }]); 

  const handleAddInput = () => {
    setInputs([...inputs, { name: '', designation: '' }]); 
  };

  const handleInputChange = (index, field, value) => {
    const newInputs = [...inputs];
    newInputs[index][field] = value; 
    setInputs(newInputs);
  };

  return (
    <div>
      {inputs.map((input, index) => (
        <div key={index}>
            <Form.Group widths='equal'>
                <Form.Field>
                <Input
                    fluid
                    type="text"
                    placeholder="Name"
                    value={input.name}
                    onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                ></Input></Form.Field>
                <Form.Field>
                <Input
                    fluid
                    type="text"
                    placeholder="Designation"
                    value={input.designation}
                    onChange={(e) => handleInputChange(index, 'designation', e.target.value)}
                ></Input></Form.Field>
                
          </Form.Group>
        </div>
      ))}
      
      <Button style={{float : 'right'}} onClick={handleAddInput}>Add</Button><br></br><br></br>
    </div>
  );
};

export default DynamicInput;
