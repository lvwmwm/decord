// Module ID: 15929
// Function ID: 15930
// Name: TwoFASetupStyles
// Dependencies: [1087, 4966, 6630, 587, 2]

// Module 15929 (TwoFASetupStyles)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import createStyles_mod from "createStyles" /* 4966 */;
import TextStyles from "TextStyles" /* 6630 */;
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
