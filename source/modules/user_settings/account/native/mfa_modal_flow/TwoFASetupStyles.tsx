// Module ID: 14711
// Function ID: 14712
// Name: styles
// Dependencies: [673, 4481, 5479, 709, 2]

// Module 14711 (styles)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import ThemesDefault from "Themes" /* 709 */;
import createCacheKey from "createCacheKey" /* 4481 */;
import importDefaultResult from "createTextStyle" /* 5479 */;

let obj = { text: { textAlign: "center", marginLeft: 20, marginRight: 20 }, modalHeader: null, modalBody: null };
obj = {};
const merged = Object.assign(importDefaultResult(ME.Fonts.DISPLAY_EXTRABOLD, ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj[1] = obj;
obj[2] = { color: ThemesDefault.colors.TEXT_SUBTLE, marginTop: 8 };
const styles = createCacheKey.createStyles(obj);
const obj1 = { color: ThemesDefault.colors.TEXT_SUBTLE, marginTop: 8 };
const result = set.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupStyles.tsx");

export const useTwoFASetupStyles = styles;
