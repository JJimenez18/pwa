import React, {useState, useEffect} from 'react';

const Clock: React.FC = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>¡Hola, TechFix Tracker!</h1>
            <h1>Hora Actual del Sistema</h1>
            <h2>{time.toLocaleTimeString()}</h2>
        </div>
    );
};

export default Clock;
