// Module ID: 1877
// Function ID: 20895
// Name: NAMEPLATE_PALETTES
// Dependencies: [1878, 2]

// Module 1877 (NAMEPLATE_PALETTES)
let obj = {};
obj = { darkBackground: "#900007", lightBackground: "#E7040F", name: require("PaletteKeys").PaletteKeys.Crimson };
obj[require("PaletteKeys").PaletteKeys.Crimson] = obj;
obj = { darkBackground: "#893A99", lightBackground: "#B11FCF", name: require("PaletteKeys").PaletteKeys.Berry };
obj[require("PaletteKeys").PaletteKeys.Berry] = obj;
const obj1 = { darkBackground: "#0080B7", lightBackground: "#56CCFF", name: require("PaletteKeys").PaletteKeys.Sky };
obj[require("PaletteKeys").PaletteKeys.Sky] = obj1;
const obj2 = { darkBackground: "#086460", lightBackground: "#7DEED7", name: require("PaletteKeys").PaletteKeys.Teal };
obj[require("PaletteKeys").PaletteKeys.Teal] = obj2;
const obj3 = { darkBackground: "#2D5401", lightBackground: "#6AA624", name: require("PaletteKeys").PaletteKeys.Forest };
obj[require("PaletteKeys").PaletteKeys.Forest] = obj3;
const obj4 = { darkBackground: "#DC3E97", lightBackground: "#F957B3", name: require("PaletteKeys").PaletteKeys.BubbleGum };
obj[require("PaletteKeys").PaletteKeys.BubbleGum] = obj4;
const obj5 = { darkBackground: "#730BC8", lightBackground: "#972FED", name: require("PaletteKeys").PaletteKeys.Violet };
obj[require("PaletteKeys").PaletteKeys.Violet] = obj5;
const obj6 = { darkBackground: "#0131C2", lightBackground: "#4278FF", name: require("PaletteKeys").PaletteKeys.Cobalt };
obj[require("PaletteKeys").PaletteKeys.Cobalt] = obj6;
const obj7 = { darkBackground: "#047B20", lightBackground: "#63CD5A", name: require("PaletteKeys").PaletteKeys.Clover };
obj[require("PaletteKeys").PaletteKeys.Clover] = obj7;
const obj8 = { darkBackground: "#F6CD12", lightBackground: "#FED400", name: require("PaletteKeys").PaletteKeys.Lemon };
obj[require("PaletteKeys").PaletteKeys.Lemon] = obj8;
const obj9 = { darkBackground: "#FFFFFF", lightBackground: "#FFFFFF", name: require("PaletteKeys").PaletteKeys.White };
obj[require("PaletteKeys").PaletteKeys.White] = obj9;
const obj10 = { darkBackground: "#000000", lightBackground: "#000000", name: require("PaletteKeys").PaletteKeys.Black };
obj[require("PaletteKeys").PaletteKeys.Black] = obj10;
const values = Object.values(obj);
const result = require("set").fileFinishedImporting("modules/collectibles/nameplates/constants.tsx");

export const NAMEPLATE_PALETTES = obj;
export const INVALID_PALETTE_KEY = "invalid_palette";
export const CUSTOM_PALETTE_KEY = "custom_palette";
export const INVALID_NAMEPLATE_PALETTE = { name: "invalid_palette", darkBackground: "", lightBackground: "" };
export const PaletteMetadata = values;
