// Module ID: 4959
// Function ID: 4960
// Name: native
// Dependencies: [2, 4960, 4961, 4962, 4816]

// Module 4959 (native)
import themes from "themes" /* 4816 */;
import getNodeText from "getNodeText" /* 4960 */;
import mergeProps from "mergeProps" /* 4961 */;
import useFocus from "useFocus" /* 4962 */;
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
