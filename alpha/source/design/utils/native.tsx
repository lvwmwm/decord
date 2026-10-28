// Module ID: 5175
// Function ID: 5176
// Name: native
// Dependencies: [2, 5176, 5177, 5178, 5026]

// Module 5175 (native)
import themes from "themes" /* 5026 */;
import getNodeText from "getNodeText" /* 5176 */;
import mergeProps from "mergeProps" /* 5177 */;
import useFocus from "useFocus" /* 5178 */;
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
