import {AppBar,Toolbar,Typography,InputBase,Box} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Autocomplete } from "@react-google-maps/api";
import useStyles from './Style';

function Header({setCoordinates}) {
    const classes =useStyles();
    const [autocomplete,setAutocomplete] =useState(null);


    const onLoad=(autoC) =>setAutocomplete(autoC);

    const onPlaceChanged = () => {
        const lat=autocomplete.getPlace().geometry.location.lat();
        const lng=autocomplete.getPlace().geometry.location.lng();
    
        setCoordinates({lat,lng});
    }
    return (
        <div>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h5" className={classes.title}>
                        Travel Advicer
                    </Typography>
                    <Box display="flex">
                        <Typography variant="h6" className={classes.title}>
                            Explore New Places
                        </Typography>
                        <Autocomplete onLoad={onLoad} onPlaceChanged={} >
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon/>
                                </div>
                                <InputBase placeholder="search ..." classes={{root: classes.inputRoot ,input: classes.inputInput}}/>
                            </div>
                        </Autocomplete>
                    </Box>
                </Toolbar>      
            </AppBar>
        </div>
    )
}

export default Header;
