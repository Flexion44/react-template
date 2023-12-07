import {Grid} from "@mui/material";
import ProfilePresentation from "../Components/Présentation/ProfilePresentation.jsx";


export default {
    title : "Presentation/ProfilePresentation",
    component: ProfilePresentation,
}

const Template = (args) => <Grid container><ProfilePresentation {...args}/></Grid>;

export const Default = Template.bind({});
Default.args = {
    title: "Designer - Un métier pas toujours facile",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: "/designer.jpg",
}

export const WithAction = Template.bind({});
WithAction.args = {
    title: "Designer - Un métier pas toujours facile",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: "/designer.jpg",
    action: "Action",
    reverse: true,
    onActionClicked: () => alert("Action clicked")
}