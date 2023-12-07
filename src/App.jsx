import './App.css'
import {Grid} from "@mui/material";
import ProfilePresentation from "./Components/Présentation/ProfilePresentation.jsx";

function App() {

    return (
        <>
            <Grid container padding={2} spacing={2}>
                <ProfilePresentation
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                    title={"Designer - Un métier pas toujours facile"}
                    img={"/designer.jpg"}
                    action={"En savoir plus"}
                    reverse={false}
                    onActionClicked={() => alert("Action clicked")}/>
                <ProfilePresentation
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                    title={"Developpeur - Un métier qui rend heureux"}
                    img={"/developper.jpg"}
                    action={"En savoir plus"}
                    reverse={true}
                    onActionClicked={() => alert("Action clicked")}/>
            </Grid>
        </>
    )
}

export default App
