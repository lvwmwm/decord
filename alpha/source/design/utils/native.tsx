// Module ID: 5121
// Function ID: 5122
// Name: native
// Dependencies: [2, 5122, 5123, 5124, 4988]

// Module 5121 (native)
import themes from "themes" /* 4988 */;
import getNodeText from "getNodeText" /* 5122 */;
import mergeProps from "mergeProps" /* 5123 */;
import useFocus from "useFocus" /* 5124 */;
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
