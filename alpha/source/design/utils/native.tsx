// Module ID: 5471
// Function ID: 5472
// Name: native
// Dependencies: [2, 5472, 5473, 5474, 5328]

// Module 5471 (native)
import themes from "themes" /* 5328 */;
import getNodeText from "getNodeText" /* 5472 */;
import mergeProps from "mergeProps" /* 5473 */;
import useFocus from "useFocus" /* 5474 */;
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
