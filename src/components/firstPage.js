import React, { useState } from "react";
import { Grid, Form, Input, Button, Segment, Container, Dropdown , TextArea} from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextEditor from "./textEditor";
import DynamicInput from "./addMember";

const FirstPage = () => {
  const [startDate, setStartDate] = useState(null); 
  const [selectedOption, setSelectedOption] = useState(""); 
  const [showNewField, setShowNewField] = useState(false);

  const handleDropdownChange = (e, data) => {
    setSelectedOption(data.value);
    setShowNewField(data.value === "Offline");
  };
  const customStyles = {
    input: {
      width: '220px',
    },
    datePickerContainer: {
      display: 'inline-block',
    },
  };


  return (
    <div>
      <Segment inverted color="teal" textAlign="center">
        <Container>
        </Container>
      </Segment>
      <Grid stackable textAlign='center' >
        <Grid.Column width={10} style={{ maxWidth: 800, border: '1px solid #ccc', padding: '30px', borderRadius: '5px', marginTop: '100px' }}>
          <Form>
            <Form.Field required>
                <label>Name :</label>
              <Input
                fluid
                type="text"
                name="username"
                placeholder="Enter your name"
                required
              ></Input>
            </Form.Field>
            <Form.Group widths='equal'>
            <Form.Field required>
                <label>Meeting ID :</label>
            <Input
                fluid
                type="text"
                name="MeetingId"
                placeholder="Enter ID"
                required
              ></Input>
            </Form.Field>
            
            <Form.Field required>
              <label>Start time</label>
              <div style={customStyles.datePickerContainer}>
                <DatePicker
                  customInput={<input style={customStyles.input} />}
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="d-MMMM-yyyy h:mm aa"
                />
              </div>
            </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
            <Form.Field required>
              <label>Mode of Meeting:</label>
              <Dropdown
                placeholder="Select option"
                fluid
                selection
                options={[
                  { key: "opt1", text: "Online", value: "Online" },
                  { key: "opt2", text: "Offline", value: "Offline" }
                ]}
                onChange={handleDropdownChange}
                value={selectedOption}
              />
            </Form.Field>
            {showNewField && (
              <Form.Field>
                <label>Enter Venue:</label>
                <Input
                  fluid
                  type="text"
                  name="newField"
                  placeholder="Enter venue..."
                ></Input>
              </Form.Field>
            )}
            </Form.Group>
            <Form.Field required>
                <label>Enter the title of Meeting :</label>
                <Input
                type="text"
                placeholder="Enter the title"
                ></Input>
            </Form.Field>
            
              <br></br>
            <Form.Field required>
                <label>Enter the description of the Meeting</label>
                <TextEditor/>
            </Form.Field><br></br>
            <h5>Enter the details of attendees</h5>
            <Form.Group widths='equal'>
                
                <Form.Field required>
                <label>Name :</label>
                <Input
                    fluid
                    type="text"
                    placeholder="Name"
                ></Input></Form.Field>
                <Form.Field required>
                    <label>Designation :</label>
                <Input
                    fluid
                    type="text"
                    placeholder="Designation"
                ></Input></Form.Field>
            </Form.Group>
            <Form.Field >
                <DynamicInput/>
            </Form.Field><br></br>
            <Form.Field required>
                <label>Resolution :</label>
            <TextArea placeholder='Enter the resolution' style={{ minHeight: 100 }} />
            </Form.Field>
            <Button>Submit</Button>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default FirstPage;
