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
        // Text
        "text-primary": "#F86B1F",
        "text-strong": "#0F0F0F",
        "text-bold": "#0F0F0F",
        "text-default": "#2C2C2C",
        "text-weak": "#686868",
        "text-white-default": "#FEFEFE",
        "text-white-weak": "#E3E3E3",
        "background-default": "#F0F0F0",
        // Background / Surface
        "surface-white": "#FEFEFE",
        "surface-gray": "#515151",
      },
      fontSize: {
        // Display
        "display-large": [
          "100px",
          { lineHeight: "auto", letterSpacing: "1px" },
        ],
        "display-large-m": [
          "44px",
          { lineHeight: "auto", letterSpacing: "1px" },
        ],
        "display-medium": [
          "64px",
          { lineHeight: "auto", letterSpacing: "1px" },
        ],
        "display-medium-m": [
          "32px",
          { lineHeight: "auto", letterSpacing: "1px" },
        ],
        "display-medium-bold": [
          "64px",
          { lineHeight: "auto", letterSpacing: "1px" },
        ],
        "display-medium-bold-m": [
          "32px",
          { lineHeight: "auto", letterSpacing: "1px" },
        ],
        "display-small": ["36px", { lineHeight: "auto", letterSpacing: "1px" }],
        "display-small-m": [
          "28px",
          { lineHeight: "auto", letterSpacing: "1px" },
        ],
        // Heading
        "heading-large": ["40px", { lineHeight: "auto", letterSpacing: "1px" }],
        "heading-large-m": [
          "28px",
          { lineHeight: "auto", letterSpacing: "1px" },
        ],
        "heading-medium": [
          "24px",
          { lineHeight: "auto", letterSpacing: "1px" },
        ],
        "heading-medium-m": [
          "22px",
          { lineHeight: "auto", letterSpacing: "1px" },
        ],
        "heading-small": ["14px", { lineHeight: "auto", letterSpacing: "1px" }],
        "heading-small-m": [
          "14px",
          { lineHeight: "auto", letterSpacing: "1px" },
        ],
        // Body
        "body-large": ["19px", { lineHeight: "auto", letterSpacing: "0px" }],
        "body-large-bold": [
          "19px",
          { lineHeight: "auto", letterSpacing: "0px" },
        ],
        "body-medium": ["15px", { lineHeight: "auto", letterSpacing: "0px" }],
        "body-medium-bold": [
          "15px",
          { lineHeight: "auto", letterSpacing: "0px" },
        ],
        "body-small": ["10px", { lineHeight: "auto", letterSpacing: "0px" }],
        "body-small-bold": [
          "10px",
          { lineHeight: "auto", letterSpacing: "0px" },
        ],
      },
      fontWeight: {
        regular: "400",
        bold: "700",
      },
      boxShadow: {
        header: [
          "0px 8px 32px 0px #D7D7D7",
          "0px 4px 4px 0px rgba(0,0,0,0.25)",
        ],
        body: "0px -4px 16px 0px #D7D7D7",
      },
      borderRadius: {
        "rounded-15": "15px",
        "rounded-40": "40px",
      },
    },
  },
  plugins: [],
};
