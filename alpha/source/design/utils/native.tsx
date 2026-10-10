// Module ID: 4820
// Function ID: 4821
// Name: native
// Dependencies: [2, 4821, 4823, 4824, 4825]

// Module 4820 (native)
import getNodeText from "getNodeText" /* 4821 */;
import mergeProps from "mergeProps" /* 4823 */;
import useFocus from "useFocus" /* 4824 */;
import themes from "themes" /* 4825 */;
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
