// Module ID: 4781
// Function ID: 4782
// Name: native
// Dependencies: [2, 4782, 4784, 4785, 4786]

// Module 4781 (native)
import getNodeText from "getNodeText" /* 4782 */;
import mergeProps from "mergeProps" /* 4784 */;
import useFocus from "useFocus" /* 4785 */;
import themes from "themes" /* 4786 */;
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
