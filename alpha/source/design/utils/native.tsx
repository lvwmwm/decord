// Module ID: 4822
// Function ID: 4823
// Name: native
// Dependencies: [2, 4823, 4825, 4826, 4827]

// Module 4822 (native)
import getNodeText from "getNodeText" /* 4823 */;
import mergeProps from "mergeProps" /* 4825 */;
import useFocus from "useFocus" /* 4826 */;
import themes from "themes" /* 4827 */;
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
