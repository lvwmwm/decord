// Module ID: 5100
// Function ID: 5101
// Name: native
// Dependencies: [2, 5101, 5102, 5103, 4967]

// Module 5100 (native)
import themes from "themes" /* 4967 */;
import getNodeText from "getNodeText" /* 5101 */;
import mergeProps from "mergeProps" /* 5102 */;
import useFocus from "useFocus" /* 5103 */;
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
