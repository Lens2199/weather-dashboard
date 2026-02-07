import { TextField , Button, Box } from "@mui/material";
import { useState } from "react";

interface SearchBarProps{
    onSearch: (city: string) => void;
}

function SearchBar({onSearch}: SearchBarProps) {

    const[city, setCity] = useState("");

    return(
    <Box display="flex" gap={2}>
     <TextField
        label="City"
        variant="outlined"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        />
       
       <Button variant="contained" onClick={() => onSearch(city)}>Search</Button>
        </Box>
    )

    
}

export default SearchBar;