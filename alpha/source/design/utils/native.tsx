// Module ID: 5082
// Function ID: 5083
// Name: native
// Dependencies: [2, 5083, 5084, 5085, 4939]

// Module 5082 (native)
import themes from "themes" /* 4939 */;
import getNodeText from "getNodeText" /* 5083 */;
import mergeProps from "mergeProps" /* 5084 */;
import useFocus from "useFocus" /* 5085 */;
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
