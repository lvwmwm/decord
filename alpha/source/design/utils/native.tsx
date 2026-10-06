// Module ID: 4588
// Function ID: 4589
// Name: native
// Dependencies: [2, 4589, 4591, 4592, 4593]

// Module 4588 (native)
import getNodeText from "getNodeText" /* 4589 */;
import mergeProps from "mergeProps" /* 4591 */;
import useFocus from "useFocus" /* 4592 */;
import themes from "themes" /* 4593 */;
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
