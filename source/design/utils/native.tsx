// Module ID: 4103
// Function ID: 4104
// Name: getNodeText
// Dependencies: [2, 4104, 4105, 4106, 1364]

// Module 4103 (getNodeText)
import set from "set" /* 2 */;
import isThemeLight from "isThemeLight" /* 1364 */;
import getNodeText from "getNodeText" /* 4104 */;
import chainCallbacks from "chainCallbacks" /* 4105 */;
import useFocus from "useFocus" /* 4106 */;

const result = set.fileFinishedImporting("design/utils/native.tsx");

export const getNodeText = getNodeText.getNodeText;
export const chainCallbacks = chainCallbacks.chainCallbacks;
export const mergeProps = chainCallbacks.mergeProps;
export const mergeRefs = chainCallbacks.mergeRefs;
export const useFocus = useFocus.useFocus;
export const isThemeLight = isThemeLight.isThemeLight;
export const isThemeDark = isThemeLight.isThemeDark;
