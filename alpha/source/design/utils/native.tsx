// Module ID: 5313
// Function ID: 5314
// Name: native
// Dependencies: [2, 5314, 5315, 5316, 5165]

// Module 5313 (native)
import themes from "themes" /* 5165 */;
import getNodeText from "getNodeText" /* 5314 */;
import mergeProps from "mergeProps" /* 5315 */;
import useFocus from "useFocus" /* 5316 */;
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
