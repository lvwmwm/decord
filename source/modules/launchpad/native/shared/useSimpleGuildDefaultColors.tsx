// Module ID: 15797
// Function ID: 15798
// Name: styles
// Dependencies: [4189, 712, 2]

// Module 15797 (styles)
import createCacheKey from "createCacheKey";

let obj = { iconBackground: null, iconBackgroundBrand: null, iconStroke: null };
obj = { color: require("Themes").colors.BACKGROUND_MOD_STRONG };
obj[0] = obj;
obj[1] = { color: require("Themes").colors.BACKGROUND_BRAND };
const obj1 = { color: require("Themes").colors.BACKGROUND_BRAND };
obj[2] = { color: require("Themes").colors.BORDER_SUBTLE };
const styles = createCacheKey.createStyles(obj);
const obj2 = { color: require("Themes").colors.BORDER_SUBTLE };
const result = require("set").fileFinishedImporting("modules/launchpad/native/shared/useSimpleGuildDefaultColors.tsx");

export default styles;
