// Module ID: 13689
// Function ID: 105074
// Name: styles
// Dependencies: [653, 4130, 5052, 689, 2]

// Module 13689 (styles)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";

let obj = { text: { textAlign: "center", marginLeft: 20, marginRight: 20 } };
obj = {};
const merged = Object.assign(require("createTextStyle")(require("ME").Fonts.DISPLAY_EXTRABOLD, require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj.modalHeader = obj;
obj.modalBody = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE, marginTop: 8 };
const styles = _createForOfIteratorHelperLoose.createStyles(obj);
const obj1 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE, marginTop: 8 };
const result = require("createTextStyle").fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupStyles.tsx");

export const useTwoFASetupStyles = styles;
