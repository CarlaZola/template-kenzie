
import { styled } from "@/styles/stitches.config";


export const AboutMeContainer = styled("div", {
    maxWidth: "$container",
    padding: "0 1rem",
    display: "flex",
    margin: " 0 auto",
    flexDirection:"column",
    gap: "$1",
})

export const AboutMeContainerText = styled("div", {
    maxWidth: "45%",
    display: "flex",
    flexDirection:"column",
    gap: "1rem",
    "@mobile": {
        maxWidth: "90%",
        margin: "0 auto",
    },
    
})


export const AboutMeFlex = styled("div", {
    display: "flex",
    gap: "$1",
    alignItems: "center",
    justifyContent: "space-around",
    "@mobile": {   
        flexDirection: "column",
    },
})


export const UserImageAboutMe = styled("img", {
    borderRadius: "50%",
    objectFit: 'cover',
    "@mobile": {
        width: "158px",
        height: "158px",
    },
});