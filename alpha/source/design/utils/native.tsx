// Module ID: 4876
// Function ID: 4877
// Name: native
// Dependencies: [2, 4877, 4879, 4880, 4881]

// Module 4876 (native)
import getNodeText from "getNodeText" /* 4877 */;
import mergeProps from "mergeProps" /* 4879 */;
import useFocus from "useFocus" /* 4880 */;
import themes from "themes" /* 4881 */;
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
