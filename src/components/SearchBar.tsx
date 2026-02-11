import { TextField , Button, Box } from "@mui/material";
import { useState } from "react";

interface SearchBarProps{
    onSearch: (city: string) => void;
}

function SearchBar({onSearch}: SearchBarProps) {

    const[city, setCity] = useState("");

    function handleSearch(){
        if (!city.trim()) return;
        onSearch(city);
         setCity("");
    }

   return (
  <Box display="flex" gap={2}>
    <TextField
      label="City"
      variant="outlined"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleSearch();
        }
      }}
    />

    <Button
      variant="contained"
      onClick={() => handleSearch()}
    >
      Search
    </Button>
  </Box>
);
}

export default SearchBar;