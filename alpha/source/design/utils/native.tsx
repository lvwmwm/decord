// Module ID: 5208
// Function ID: 5209
// Name: native
// Dependencies: [2, 5209, 5210, 5211, 5065]

// Module 5208 (native)
import themes from "themes" /* 5065 */;
import getNodeText from "getNodeText" /* 5209 */;
import mergeProps from "mergeProps" /* 5210 */;
import useFocus from "useFocus" /* 5211 */;
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
