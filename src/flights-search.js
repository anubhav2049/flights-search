import React, {useState} from "react";
import { TextField, Button, MenuItem } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

const FlightSearch = () => {
    const [origin, SetOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [departureDate, setDepartureDate] = useState(null);
    const [returnDate, setReturnDate] = useState(null);
    const [travelers, setTravelers] = useState(1);


return(
    <div className="p-6 space-y-4 max-w-2xl mx-auto bg-white rounded-lg shadow-md">
        <div className="grid grid-cols-2 gap-4">
            <TextField
                label="From"
                value={origin}
                onChange={(e) => SetOrigin(e.target.value)}
                fullWidth
            />
            <TextField
                label="To"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                fullWidth
            />
        </div>

        <div className="grid grid-cols-2 gap-4">
            <DatePicker
                label="Departure Date"
                value={departureDate}
                onChange={(newValue) => setDepartureDate(newValue)}
                renderInput={(params) => <TextField {...params} fullWidth />}
            />
        </div>

        <TextField
            label="Travelers"
            value={travelers}
            onChange={(e) => setTravelers(e.target.value)}
            fullWidth
            select
        >
            {[1,2,3,4,5].map((Option) => (
                <MenuItem key={Option} value={Option}>
                    {Option} {Option == 1 ? "Traveler" : "Travelers"}
                </MenuItem>
            ))}
        </TextField>

        <Button variant="contained" color="primary" fullWidth>
            Search Flights
        </Button>

    </div>
);
};

export default FlightSearch;
