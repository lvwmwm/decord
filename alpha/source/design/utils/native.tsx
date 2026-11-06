// Module ID: 5333
// Function ID: 5334
// Name: native
// Dependencies: [2, 5334, 5335, 5336, 5192]

// Module 5333 (native)
import themes from "themes" /* 5192 */;
import getNodeText from "getNodeText" /* 5334 */;
import mergeProps from "mergeProps" /* 5335 */;
import useFocus from "useFocus" /* 5336 */;
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
