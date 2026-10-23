// Module ID: 5137
// Function ID: 5138
// Name: native
// Dependencies: [2, 5138, 5139, 5140, 4991]

// Module 5137 (native)
import themes from "themes" /* 4991 */;
import getNodeText from "getNodeText" /* 5138 */;
import mergeProps from "mergeProps" /* 5139 */;
import useFocus from "useFocus" /* 5140 */;
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
