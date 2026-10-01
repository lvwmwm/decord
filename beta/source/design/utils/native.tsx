// Module ID: 4533
// Function ID: 4534
// Name: native
// Dependencies: [2, 4534, 4536, 4537, 4538]

// Module 4533 (native)
import getNodeText from "getNodeText" /* 4534 */;
import mergeProps from "mergeProps" /* 4536 */;
import useFocus from "useFocus" /* 4537 */;
import themes from "themes" /* 4538 */;
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
