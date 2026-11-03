// Module ID: 5310
// Function ID: 5311
// Name: native
// Dependencies: [2, 5311, 5312, 5313, 5163]

// Module 5310 (native)
import themes from "themes" /* 5163 */;
import getNodeText from "getNodeText" /* 5311 */;
import mergeProps from "mergeProps" /* 5312 */;
import useFocus from "useFocus" /* 5313 */;
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
