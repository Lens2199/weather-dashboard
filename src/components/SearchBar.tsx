import { TextField , Button, Box } from "@mui/material";
import { useState } from "react";


function SearchBar() {

    const[city, setCity] = useState("");

    return(
    <Box display="flex" gap={2}>
     <TextField
        label="City"
        variant="outlined"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        />
       
       <Button variant="contained" onClick={() => console.log(city)}>Search</Button>
        </Box>
    )

    
}

export default SearchBar;