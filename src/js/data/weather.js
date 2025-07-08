const data = [
    {
        city: "Ljubljana",
        current_temperature: 20,
        state: "Clear",
        hourly: [
            {
                hour: "09:00",
                state: "sunny",
                temperature: 18
            },
            {
                hour: "12:00",
                state: "sunny",
                temperature: 25
            },
            {
                hour: "16:00",
                state: "cloudy",
                temperature: 22
            },
            {
                hour: "18:00",
                state: "cloudy",
                temperature: 22
            },
            {
                hour: "16:00",
                state: "rainy",
                temperature: 19
            },
            {
                hour: "20:00",
                state: "night",
                temperature: 17
            },
        ],
        details: {
            sunrise: "06:44",
            sunset: "21:02",
            feel: 18,
            humidity: 63,
            wind: 3,
            pressure: 1012,
        }
    },
    {
        city: "Velenje",
        current_temperature: 24,
        state: "Clear",
        hourly: [
            {
                hour: "09:00",
                state: "sunny",
                temperature: 12
            },
            {
                hour: "12:00",
                state: "sunny",
                temperature: 22
            },
            {
                hour: "16:00",
                state: "sunny",
                temperature: 22
            },
            {
                hour: "18:00",
                state: "rainy",
                temperature: 22
            },
            {
                hour: "16:00",
                state: "rainy",
                temperature: 19
            },
            {
                hour: "20:00",
                state: "night",
                temperature: 17
            },
        ],
        details: {
            sunrise: "06:44",
            sunset: "21:02",
            feel: 19,
            humidity: 63,
            wind: 2,
            pressure: 1016,
        }
    },
];

export default data;