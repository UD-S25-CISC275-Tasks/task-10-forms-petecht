import React, { useState } from "react";
import { Form } from "react-bootstrap";

const colors = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white",
    "black",
];
const default_color = colors[0];

export function ChangeColor(): React.JSX.Element {
    const [currentColor, setColor] = useState<string>(default_color);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {colors.map((color: string) => (
                    <Form.Check
                        inline
                        key={color}
                        type="radio"
                        label={color}
                        value={color}
                        name="colorOptions"
                        checked={currentColor === color}
                        onChange={updateColor}
                        style={{ color: color }}
                    />
                ))}
            </div>
            <div
                data-testid="colored-box"
                style={{
                    marginTop: "10px",
                    padding: "10px",
                    backgroundColor: currentColor,
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "5px",
                    width: "fit-content",
                }}
            >
                {currentColor}
            </div>
        </div>
    );
}
