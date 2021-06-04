import { createMuiTheme }  from "@material-ui/core/styles"

const theme = createMuiTheme({
    palette: {
      primary: {
        light: "#F4F9FC",
        main: "#364057",
        dark: "#6CACDC",
        contrastText: "#FFFFFF",
      },
      secondary: {
        light: "#F06191",
        main: "#2B344D",
        dark: "#414755",
        contrastText: "#FFFFFF",
      },
    },
    typography: {
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            "Segoe UI",
            "Roboto",
            "Helvetica Neue",
            "Arial",
            "sans-serif",
            "Apple Color Emoji",
            "Segoe UI Emoji",
            "Segoe UI Symbol",
        ].join(",")
    }
  });

  export default theme;