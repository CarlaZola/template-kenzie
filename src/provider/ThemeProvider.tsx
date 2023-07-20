import { createContext, useEffect, useState } from "react";
import { createTheme } from "@stitches/react";
import { globalStyles } from "@/styles/Global";
import { ThemeTokens } from "@stitches/react/types/stitches";


export const ThemeContext = createContext({} as any)

export interface IDefaultProviderProps{
    children: React.ReactNode   
}

export function ThemeProvider({children}: IDefaultProviderProps){

    const dark = createTheme({
        name: {
          light: 'light',
        },
        colors: {
          brand1: "#623CEA",
          brand2: "#311E75",
    
          grey0: "#d2d5d9",
          grey1: "#F8F9FA",
          grey2: "#202224",
          grey3: "#868E96",
          grey4: "#121214",
          grey5: "#0A0A0B",
    
          socialInstagram: "#CF50AC",
          socialFacebook: "#506CCF",
          socialLinkedin: "#0E76A8",
    
          whiteFixed: "#ffffff",
          mode: "#ffffff",
        },
        sizes: {
          container: "75rem",
          containerTablet: "40rem",
        },
        space: {
          1: "0.5rem",
          2: "1rem",
          3: "2rem",
          4: "3rem",
          5: "4rem",
          section: "10rem",
          sectionMobile: "4rem",
        },
        fonts: {
          titles: '"IBM Plex Sans", sans-serif;',
          texts: '"Inter", sans-serif',
        },
        fontSizes: {
          title1: "2.75rem",
          title2: "1.75rem",
          title3: "1.50rem",
          title4: "1.25rem",
          text1: "1rem",
          text2: "0.875rem",
    
          // Mobile
          title1Mobile: "$title2",
          title2Mobile: "$title3",
        },
        lineHeights: {
          title1: "3.8rem",
          title2: "2.75rem",
          title3: "2.5rem",
          title4: "1.25rem",
          text1: "1.75rem",
          text2: "1.75rem",
    
          // Mobile
          title1Mobile: "$title2",
          title2Mobile: "$title3",
        },
    
        radii: {
          1: "0.5rem",
          2: "0.25rem",
        },
      });

    const theme = createTheme({
        name: {
          light: 'dark',
        },
        colors: {
          brand1: "#623CEA",
          brand2: "#311E75",
    
          grey0: "#0A0A0B",
          grey1: "#121214",
          grey2: "#868E96",
          grey3: "#E9ECEF",
          grey4: "#F8F9FA",
          grey5: "#F8F9FA",
    
          socialInstagram: "#CF50AC",
          socialFacebook: "#506CCF",
          socialLinkedin: "#0E76A8",
    
          whiteFixed: "#ffffff",
          mode: "#ffffff",
        },
        sizes: {
          container: "75rem",
          containerTablet: "40rem",
        },
        space: {
          1: "0.5rem",
          2: "1rem",
          3: "2rem",
          4: "3rem",
          5: "4rem",
          section: "10rem",
          sectionMobile: "4rem",
        },
        fonts: {
          titles: '"IBM Plex Sans", sans-serif;',
          texts: '"Inter", sans-serif',
        },
        fontSizes: {
          title1: "2.75rem",
          title2: "1.75rem",
          title3: "1.50rem",
          title4: "1.25rem",
          text1: "1rem",
          text2: "0.875rem",
    
          // Mobile
          title1Mobile: "$title2",
          title2Mobile: "$title3",
        },
        lineHeights: {
          title1: "3.8rem",
          title2: "2.75rem",
          title3: "2.5rem",
          title4: "1.25rem",
          text1: "1.75rem",
          text2: "1.75rem",
    
          // Mobile
          title1Mobile: "$title2",
          title2Mobile: "$title3",
        },
    
        radii: {
          1: "0.5rem",
          2: "0.25rem",
        },
      });

  
    globalStyles();

    const [mode, setMode] = useState(theme)

    function setNewTheme(){ 
      setMode(mode.name.light.value === "dark" ? dark : theme) 
    }

    return(
        <ThemeContext.Provider value={{mode, setMode, theme, dark, setNewTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}
