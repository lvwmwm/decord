// Module ID: 4879
// Function ID: 4880
// Name: native
// Dependencies: [2, 4880, 4882, 4883, 4884]

// Module 4879 (native)
import getNodeText from "getNodeText" /* 4880 */;
import mergeProps from "mergeProps" /* 4882 */;
import useFocus from "useFocus" /* 4883 */;
import themes from "themes" /* 4884 */;
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
