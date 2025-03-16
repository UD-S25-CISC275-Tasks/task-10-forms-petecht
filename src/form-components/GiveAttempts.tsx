import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [currentAttempts, setCurrentAttempts] = useState<number>(3);
    const [attemptRequests, setAttemptRequests] = useState<string>("");

    function changeAttemptRequests(event: React.ChangeEvent<HTMLInputElement>) {
        setAttemptRequests(event.target.value);
    }

    function increaseAttempts() {
        const increase = parseInt(attemptRequests);
        if (!isNaN(increase)) setCurrentAttempts(currentAttempts + increase);
    }

    function useAttempts() {
        if (currentAttempts > 0) setCurrentAttempts(currentAttempts - 1);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Remaining Attempts: {currentAttempts}</p>
            <input
                type="number"
                value={attemptRequests}
                onChange={changeAttemptRequests}
            />
            <button onClick={useAttempts} disabled={currentAttempts <= 0}>
                use
            </button>
            <button onClick={increaseAttempts}>gain</button>
        </div>
    );
}
