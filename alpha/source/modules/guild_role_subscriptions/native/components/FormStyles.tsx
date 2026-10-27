// Module ID: 15181
// Function ID: 15182
// Name: FormStyles
// Dependencies: [1084, 4972, 587, 6652, 2]

// Module 15181 (FormStyles)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1084 */;
import createStyles_mod from "createStyles" /* 4972 */;
import TextStyles_mod from "TextStyles" /* 6652 */;
import size from "module_2" /* 2 */;

let obj4;
let obj6;
const Fonts = Constants.Fonts;
const obj = { padding: 16, flexGrow: 0, borderRadius: 8, marginHorizontal: 16 };
let createStyles = createStyles_mod;
createStyles = createStyles.createStyles;
const obj2 = { header: { marginTop: 24, paddingStart: 16 }, inputContainer: { marginHorizontal: nativeDefault.space.PX_16 }, textInput: obj4, disabledTextInput: { padding: 16, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, dropdownInput: obj6 };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
({ marginHorizontal: nativeDefault.space.PX_16 });
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, 16));
const merged1 = Object.assign(obj);
obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
({ padding: 16, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH });
TextStyles = TextStyles_mod;
const merged2 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, 16));
const merged3 = Object.assign(obj);
const styles = createStyles(obj2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormStyles.tsx");

export default styles;
