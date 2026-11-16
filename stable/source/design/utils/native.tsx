// Module ID: 5335
// Function ID: 5336
// Name: native
// Dependencies: [2, 5336, 5337, 5338, 5192]

// Module 5335 (native)
import themes from "themes" /* 5192 */;
import getNodeText from "getNodeText" /* 5336 */;
import mergeProps from "mergeProps" /* 5337 */;
import useFocus from "useFocus" /* 5338 */;
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
