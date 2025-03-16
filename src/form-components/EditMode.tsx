import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    // Clear name field ONLY when switching into edit mode for the first time
    function toggleEditMode() {
        setEditMode(!editMode);
        if (!editMode && name === "Your Name") {
            setName("");
        }
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode"
                checked={editMode}
                onChange={toggleEditMode}
            />
            {editMode ?
                <div>
                    <Form.Group controlId="formNameInput">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        label="Student?"
                        checked={isStudent}
                        onChange={(e) => {
                            setIsStudent(e.target.checked);
                        }}
                    />
                </div>
            :   <p>
                    {name} is {isStudent ? "a student" : "not a student"}.
                </p>
            }
        </div>
    );
}
