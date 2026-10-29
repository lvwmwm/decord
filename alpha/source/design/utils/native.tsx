// Module ID: 5176
// Function ID: 5177
// Name: native
// Dependencies: [2, 5177, 5178, 5179, 5027]

// Module 5176 (native)
import themes from "themes" /* 5027 */;
import getNodeText from "getNodeText" /* 5177 */;
import mergeProps from "mergeProps" /* 5178 */;
import useFocus from "useFocus" /* 5179 */;
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
