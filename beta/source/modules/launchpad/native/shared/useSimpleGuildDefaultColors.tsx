// Module ID: 17674
// Function ID: 17675
// Name: useSimpleGuildDefaultColors
// Dependencies: [4758, 580, 2]

// Module 17674 (useSimpleGuildDefaultColors)
import nativeDefault from "native" /* 580 */;
import createStyles from "createStyles" /* 4758 */;
import size from "module_2" /* 2 */;

const obj = { iconBackground: { color: nativeDefault.colors.BACKGROUND_MOD_STRONG }, iconBackgroundBrand: null, iconStroke: null };
const obj2 = { color: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj.iconBackgroundBrand = { color: nativeDefault.colors.BACKGROUND_BRAND };
const obj3 = { color: nativeDefault.colors.BACKGROUND_BRAND };
obj.iconStroke = { color: nativeDefault.colors.BORDER_SUBTLE };
const styles = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/launchpad/native/shared/useSimpleGuildDefaultColors.tsx");

export default styles;
