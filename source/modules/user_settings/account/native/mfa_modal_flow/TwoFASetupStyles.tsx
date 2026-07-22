// Module ID: 13575
// Function ID: 102918
// Name: styles
// Dependencies: []

// Module 13575 (styles)
const _module = require(dependencyMap[1]);
let obj = { text: { "Null": false, "Bool(false)": false, "Bool(false)": false } };
obj = {};
const merged = Object.assign(importDefault(dependencyMap[2])(require(dependencyMap[0]).Fonts.DISPLAY_EXTRABOLD, importDefault(dependencyMap[3]).colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj.modalHeader = obj;
const importDefaultResult = importDefault(dependencyMap[2]);
obj.modalBody = { color: importDefault(dependencyMap[3]).colors.TEXT_SUBTLE, marginTop: 8 };
const styles = _module.createStyles(obj);
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupStyles.tsx");

export const useTwoFASetupStyles = styles;
