// Module ID: 5418
// Function ID: 5419
// Name: native
// Dependencies: [2, 5419, 5420, 5421, 5265]

// Module 5418 (native)
import themes from "themes" /* 5265 */;
import getNodeText from "getNodeText" /* 5419 */;
import mergeProps from "mergeProps" /* 5420 */;
import useFocus from "useFocus" /* 5421 */;
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
