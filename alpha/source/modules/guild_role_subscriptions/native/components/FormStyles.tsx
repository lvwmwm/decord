// Module ID: 15680
// Function ID: 15681
// Name: FormStyles
// Dependencies: [1072, 5009, 575, 6717, 2]

// Module 15680 (FormStyles)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import createStyles_mod from "createStyles" /* 5009 */;
import TextStyles from "TextStyles" /* 6717 */;
import size from "module_2" /* 2 */;

let obj3;
const Fonts = Constants.Fonts;
let createStyles = createStyles_mod;
createStyles = createStyles.createStyles;
const obj = { header: { marginTop: 24, paddingStart: 16 }, inputContainer: { marginHorizontal: nativeDefault.space.PX_16 }, dropdownInput: obj3 };
obj3 = { padding: 16, flexGrow: 0, borderRadius: 8, marginHorizontal: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
({ marginHorizontal: nativeDefault.space.PX_16 });
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, 16));
const styles = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormStyles.tsx");

export default styles;
