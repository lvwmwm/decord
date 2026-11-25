// Module ID: 5177
// Function ID: 5178
// Name: native
// Dependencies: [2, 5178, 5179, 5180, 5034]

// Module 5177 (native)
import themes from "themes" /* 5034 */;
import getNodeText from "getNodeText" /* 5178 */;
import mergeProps from "mergeProps" /* 5179 */;
import useFocus from "useFocus" /* 5180 */;
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
