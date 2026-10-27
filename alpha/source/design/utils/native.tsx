// Module ID: 5140
// Function ID: 5141
// Name: native
// Dependencies: [2, 5141, 5142, 5143, 4994]

// Module 5140 (native)
import themes from "themes" /* 4994 */;
import getNodeText from "getNodeText" /* 5141 */;
import mergeProps from "mergeProps" /* 5142 */;
import useFocus from "useFocus" /* 5143 */;
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
