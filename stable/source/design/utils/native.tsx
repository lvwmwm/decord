// Module ID: 5171
// Function ID: 5172
// Name: native
// Dependencies: [2, 5172, 5173, 5174, 5025]

// Module 5171 (native)
import themes from "themes" /* 5025 */;
import getNodeText from "getNodeText" /* 5172 */;
import mergeProps from "mergeProps" /* 5173 */;
import useFocus from "useFocus" /* 5174 */;
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
