import { List, ListItemButton, ListItemText } from "@mui/material";

interface SearchHistoryProps {
    history: string[];
    onSelect: (city: string) => void;
}

function SearchHistory({ history, onSelect }: SearchHistoryProps) {
    return (
        <List>
            {history.map((city, index) => (
                <ListItemButton key={index} onClick={() => onSelect(city)}>
                    <ListItemText primary={city} />
                </ListItemButton>
            ))}
        </List>
    )
}

export default SearchHistory;