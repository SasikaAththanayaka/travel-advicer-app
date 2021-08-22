import {AppBar,Toolbar,Typography,InputBase,Box} from "@material-ui/core";
//import { Autocomplete } from "@react-google-maps/api";
import SearchIcon from "@material-ui/icons/Search";
import { Autocomplete } from "@material-ui/lab";
function Header() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar className="toolbar">
                    <Typography variant="h5" className="title">
                        Travel Advicer
                    </Typography>
                    <Box display="flex">
                        <Typography variant="h6" className="title">
                            Explore New Places
                        </Typography>
                        <Autocomplete>
                            <div className="search">
                                <div className="searchIcon">
                                    <SearchIcon/>
                                </div>
                                <InputBase placeholder="search ..."/>
                            </div>
                        </Autocomplete>
                    </Box>
                </Toolbar>      
            </AppBar>
        </div>
    )
}

export default Header;
