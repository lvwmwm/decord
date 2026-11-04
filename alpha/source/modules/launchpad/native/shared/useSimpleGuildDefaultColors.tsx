// Module ID: 19351
// Function ID: 19352
// Name: useSimpleGuildDefaultColors
// Dependencies: [5141, 575, 2]

// Module 19351 (useSimpleGuildDefaultColors)
import nativeDefault from "native" /* 575 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let createStyles = createStyles_mod;
createStyles = createStyles.createStyles;
const obj = { iconBackground: { color: nativeDefault.colors.BACKGROUND_MOD_STRONG }, iconBackgroundBrand: { color: nativeDefault.colors.BACKGROUND_BRAND }, iconStroke: { color: nativeDefault.colors.BORDER_SUBTLE } };
({ color: nativeDefault.colors.BACKGROUND_MOD_STRONG });
({ color: nativeDefault.colors.BACKGROUND_BRAND });
({ color: nativeDefault.colors.BORDER_SUBTLE });
const styles = createStyles(obj);
const result = size.fileFinishedImporting("modules/launchpad/native/shared/useSimpleGuildDefaultColors.tsx");

export default styles;
