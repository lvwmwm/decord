// Module ID: 4915
// Function ID: 4916
// Name: native
// Dependencies: [2, 4916, 4918, 4919, 4920]

// Module 4915 (native)
import getNodeText from "getNodeText" /* 4916 */;
import mergeProps from "mergeProps" /* 4918 */;
import useFocus from "useFocus" /* 4919 */;
import themes from "themes" /* 4920 */;
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
