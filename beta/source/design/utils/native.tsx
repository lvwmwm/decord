// Module ID: 5139
// Function ID: 5140
// Name: native
// Dependencies: [2, 5140, 5141, 5142, 4993]

// Module 5139 (native)
import themes from "themes" /* 4993 */;
import getNodeText from "getNodeText" /* 5140 */;
import mergeProps from "mergeProps" /* 5141 */;
import useFocus from "useFocus" /* 5142 */;
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
