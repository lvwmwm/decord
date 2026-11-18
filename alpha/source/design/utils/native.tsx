// Module ID: 4988
// Function ID: 4989
// Name: native
// Dependencies: [2, 4989, 4990, 4991, 4845]

// Module 4988 (native)
import themes from "themes" /* 4845 */;
import getNodeText from "getNodeText" /* 4989 */;
import mergeProps from "mergeProps" /* 4990 */;
import useFocus from "useFocus" /* 4991 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/utils/native.tsx");
const getNodeText_export = getNodeText.getNodeText;
const mergeProps_export = mergeProps.mergeProps;
const useFocus_export = useFocus.useFocus;

export { getNodeText_export as getNodeText };
export const chainCallbacks = mergeProps.chainCallbacks;
export { mergeProps_export as mergeProps };
export const mergeRefs = mergeProps.mergeRefs;
export { useFocus_export as useFocus };
export const isThemeLight = themes.isThemeLight;
export const isThemeDark = themes.isThemeDark;
