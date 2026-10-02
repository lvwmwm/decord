// Module ID: 4537
// Function ID: 4538
// Name: native
// Dependencies: [2, 4538, 4540, 4541, 4542]

// Module 4537 (native)
import getNodeText from "getNodeText" /* 4538 */;
import mergeProps from "mergeProps" /* 4540 */;
import useFocus from "useFocus" /* 4541 */;
import themes from "themes" /* 4542 */;
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
