// Module ID: 4780
// Function ID: 4781
// Name: native
// Dependencies: [2, 4781, 4783, 4784, 4785]

// Module 4780 (native)
import getNodeText from "getNodeText" /* 4781 */;
import mergeProps from "mergeProps" /* 4783 */;
import useFocus from "useFocus" /* 4784 */;
import themes from "themes" /* 4785 */;
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
