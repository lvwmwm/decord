// Module ID: 5182
// Function ID: 5183
// Name: native
// Dependencies: [2, 5183, 5184, 5185, 5031]

// Module 5182 (native)
import themes from "themes" /* 5031 */;
import getNodeText from "getNodeText" /* 5183 */;
import mergeProps from "mergeProps" /* 5184 */;
import useFocus from "useFocus" /* 5185 */;
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
