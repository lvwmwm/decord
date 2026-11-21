// Module ID: 5078
// Function ID: 5079
// Name: native
// Dependencies: [2, 5079, 5080, 5081, 4935]

// Module 5078 (native)
import themes from "themes" /* 4935 */;
import getNodeText from "getNodeText" /* 5079 */;
import mergeProps from "mergeProps" /* 5080 */;
import useFocus from "useFocus" /* 5081 */;
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
