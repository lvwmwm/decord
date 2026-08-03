// Module ID: 13903
// Function ID: 13904
// Name: styles
// Dependencies: [676, 4255, 5175, 712, 2]

// Module 13903 (styles)
import createCacheKey from "createCacheKey";
import importDefaultResult from "createTextStyle";

let obj = { text: { textAlign: "center", marginLeft: 20, marginRight: 20 }, modalHeader: null, modalBody: null };
obj = {};
const merged = Object.assign(require("createTextStyle")(require("ME").Fonts.DISPLAY_EXTRABOLD, require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj[1] = obj;
obj[2] = { color: require("Themes").colors.TEXT_SUBTLE, marginTop: 8 };
const styles = createCacheKey.createStyles(obj);
const obj1 = { color: require("Themes").colors.TEXT_SUBTLE, marginTop: 8 };
const result = require("createTextStyle").fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupStyles.tsx");

export const useTwoFASetupStyles = styles;
