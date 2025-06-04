const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        gray: {
          10: "#FEFEFE",
          20: "#F0F0F0",
          30: "#E3E3E3",
          40: "#D7D7D7",
          50: "#686868",
          60: "#515151",
          70: "#2C2C2C",
          80: "#202020",
          90: "#0F0F0F",
        },
        primary: {
          30: "#FBB58F",
          50: "#F86B1F",
          80: "#8F3E13",
        },
        "sub-blue": {
          30: "#96B0FE",
          50: "#2D61FD",
          80: "#0A2577",
        },
        "sub-green": {
          30: "#82FBB7",
          50: "#05F86F",
          80: "#03632D",
        },
        // Color System : Text
        "text-primary": "#F86B1F",
        "text-strong": "#0F0F0F",
        "text-bold": "#0F0F0F",
        "text-default": "#2C2C2C",
        "text-weak": "#686868",
        "text-white-default": "#FEFEFE",
        "text-white-weak": "#E3E3E3",
        "background-default": "#F0F0F0",
        // Color System : Background / Surface
        "surface-white": "#FEFEFE",
        "surface-gray": "#515151",
      },
      fontSize: {
        // TODO: 폰트 사이즈 추가
      },
      fontWeight: {
        regular: "400",
        bold: "700",
      },
      boxShadow: {
        header: "0px 8px 32px 0px #D7D7D7",
      },
    },
  },
  plugins: [],
};
