// Module ID: 5187
// Function ID: 5188
// Name: native
// Dependencies: [2, 5188, 5189, 5190, 5036]

// Module 5187 (native)
import themes from "themes" /* 5036 */;
import getNodeText from "getNodeText" /* 5188 */;
import mergeProps from "mergeProps" /* 5189 */;
import useFocus from "useFocus" /* 5190 */;
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
