import {Button, Grid, Typography} from "@mui/material";
import {motion} from "framer-motion";
import PropTypes from "prop-types";

const ProfilePresentation = ({reverse, img, title, text, action, onActionClicked}) => {

    return (
        <Grid item xs={12}>
            <motion.div
                initial={{opacity: 0, y: 120}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.5, duration: 0.7}}
            >
                <Grid container flexDirection={!reverse ? "row" : "row-reverse"} justifyContent={"center"} spacing={2}
                      padding={2}>
                    <Grid item xs={12} md={6}>
                        <img src={img} alt={"img"} style={{width: "100%"}} className={"rounded-2xl drop-shadow-lg"}/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container flexDirection={"column"}
                              justifyContent={"center"}
                              alignItems={"start"}
                              spacing={2}
                              height={"100%"}>
                            <Grid item>
                                <Typography variant={"h4"} fontWeight={500} fontSize={"24px"}
                                            textAlign={"start"}>{title}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={"body1"} fontWeight={300} fontSize={"16px"}
                                            textAlign={"start"}>{text}</Typography>
                            </Grid>
                            {action &&
                                <>
                                <Grid item >
                                    <Button onClick={onActionClicked} variant={"contained"} className={"m-5"}>
                                        {action}
                                    </Button>
                                </Grid>
                                </>
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </motion.div>
        </Grid>)
}

ProfilePresentation.propTypes = {
    reverse: PropTypes.bool,
    img: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    action : PropTypes.string,
    onActionClicked: PropTypes.func,
}

export default ProfilePresentation