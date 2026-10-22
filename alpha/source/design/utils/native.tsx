// Module ID: 5125
// Function ID: 5126
// Name: native
// Dependencies: [2, 5126, 5127, 5128, 4991]

// Module 5125 (native)
import themes from "themes" /* 4991 */;
import getNodeText from "getNodeText" /* 5126 */;
import mergeProps from "mergeProps" /* 5127 */;
import useFocus from "useFocus" /* 5128 */;
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
