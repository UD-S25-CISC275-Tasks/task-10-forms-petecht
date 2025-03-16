import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [currentAnswer, setCurrentAnswer] = useState<string>("");

    function changeAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setCurrentAnswer(event.target.value);
    }

    let correct: boolean = currentAnswer === expectedAnswer;

    return (
        <div>
            <h3>Check Answer</h3>
            <input
                type="text"
                value={currentAnswer}
                onChange={changeAnswer}
                placeholder="Answer"
            />
            <span style={{ marginLeft: "10px" }}>{correct ? "✔️" : "❌"}</span>
        </div>
    );
}
