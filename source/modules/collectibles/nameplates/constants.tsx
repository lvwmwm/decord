// Module ID: 1877
// Function ID: 20893
// Name: NAMEPLATE_PALETTES
// Dependencies: []

// Module 1877 (NAMEPLATE_PALETTES)
let obj = {};
obj = { title: "Array", accessibilityRole: "isArray", name: require(dependencyMap[0]).PaletteKeys.Crimson };
obj[require(dependencyMap[0]).PaletteKeys.Crimson] = obj;
obj = { title: "Array", accessibilityRole: "isArray", name: require(dependencyMap[0]).PaletteKeys.Berry };
obj[require(dependencyMap[0]).PaletteKeys.Berry] = obj;
const obj1 = { title: true, accessibilityRole: true, name: require(dependencyMap[0]).PaletteKeys.Sky };
obj[require(dependencyMap[0]).PaletteKeys.Sky] = obj1;
const obj2 = { title: true, accessibilityRole: true, name: require(dependencyMap[0]).PaletteKeys.Teal };
obj[require(dependencyMap[0]).PaletteKeys.Teal] = obj2;
const obj3 = { title: "Array", accessibilityRole: "twisted_rightwards_arrows", name: require(dependencyMap[0]).PaletteKeys.Forest };
obj[require(dependencyMap[0]).PaletteKeys.Forest] = obj3;
const obj4 = { title: "Array", accessibilityRole: "isArray", name: require(dependencyMap[0]).PaletteKeys.BubbleGum };
obj[require(dependencyMap[0]).PaletteKeys.BubbleGum] = obj4;
const obj5 = { title: false, accessibilityRole: false, name: require(dependencyMap[0]).PaletteKeys.Violet };
obj[require(dependencyMap[0]).PaletteKeys.Violet] = obj5;
const obj6 = { name: require(dependencyMap[0]).PaletteKeys.Cobalt };
obj[require(dependencyMap[0]).PaletteKeys.Cobalt] = obj6;
const obj7 = { title: "<string:2418496002>", accessibilityRole: "<string:1599489218>", name: require(dependencyMap[0]).PaletteKeys.Clover };
obj[require(dependencyMap[0]).PaletteKeys.Clover] = obj7;
const obj8 = { title: null, accessibilityRole: null, name: require(dependencyMap[0]).PaletteKeys.Lemon };
obj[require(dependencyMap[0]).PaletteKeys.Lemon] = obj8;
const obj9 = { name: require(dependencyMap[0]).PaletteKeys.White };
obj[require(dependencyMap[0]).PaletteKeys.White] = obj9;
const obj10 = { name: require(dependencyMap[0]).PaletteKeys.Black };
obj[require(dependencyMap[0]).PaletteKeys.Black] = obj10;
const values = Object.values(obj);
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/collectibles/nameplates/constants.tsx");

export const NAMEPLATE_PALETTES = obj;
export const INVALID_PALETTE_KEY = "invalid_palette";
export const CUSTOM_PALETTE_KEY = "custom_palette";
export const INVALID_NAMEPLATE_PALETTE = { borderRadius: null, title: null, accessibilityRole: null };
export const PaletteMetadata = values;
