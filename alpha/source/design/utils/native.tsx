// Module ID: 5475
// Function ID: 5476
// Name: native
// Dependencies: [2, 5476, 5477, 5478, 5332]

// Module 5475 (native)
import themes from "themes" /* 5332 */;
import getNodeText from "getNodeText" /* 5476 */;
import mergeProps from "mergeProps" /* 5477 */;
import useFocus from "useFocus" /* 5478 */;
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
