// Module ID: 4957
// Function ID: 4958
// Name: native
// Dependencies: [2, 4958, 4959, 4960, 4814]

// Module 4957 (native)
import themes from "themes" /* 4814 */;
import getNodeText from "getNodeText" /* 4958 */;
import mergeProps from "mergeProps" /* 4959 */;
import useFocus from "useFocus" /* 4960 */;
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
