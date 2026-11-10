// Module ID: 5305
// Function ID: 5306
// Name: native
// Dependencies: [2, 5306, 5307, 5308, 5164]

// Module 5305 (native)
import themes from "themes" /* 5164 */;
import getNodeText from "getNodeText" /* 5306 */;
import mergeProps from "mergeProps" /* 5307 */;
import useFocus from "useFocus" /* 5308 */;
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
