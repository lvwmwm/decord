// Module ID: 5303
// Function ID: 5304
// Name: native
// Dependencies: [2, 5304, 5305, 5306, 5162]

// Module 5303 (native)
import themes from "themes" /* 5162 */;
import getNodeText from "getNodeText" /* 5304 */;
import mergeProps from "mergeProps" /* 5305 */;
import useFocus from "useFocus" /* 5306 */;
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
