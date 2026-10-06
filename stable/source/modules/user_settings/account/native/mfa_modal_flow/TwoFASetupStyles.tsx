// Module ID: 14308
// Function ID: 14309
// Name: TwoFASetupStyles
// Dependencies: [1086, 4837, 5837, 588, 2]

// Module 14308 (TwoFASetupStyles)
import nativeDefault from "native" /* 588 */;
import Constants from "Constants" /* 1086 */;
import createStyles_mod from "createStyles" /* 4837 */;
import TextStyles from "TextStyles" /* 5837 */;
import size from "module_2" /* 2 */;

let obj2;
const Fonts = Constants.Fonts;
let createStyles = createStyles_mod;
createStyles = createStyles.createStyles;
const obj = { text: { textAlign: "center", marginLeft: 20, marginRight: 20 }, modalHeader: obj2, modalBody: { color: nativeDefault.colors.TEXT_SUBTLE, marginTop: 8 } };
obj2 = {};
const merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
({ color: nativeDefault.colors.TEXT_SUBTLE, marginTop: 8 });
const styles = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupStyles.tsx");

export const useTwoFASetupStyles = styles;
