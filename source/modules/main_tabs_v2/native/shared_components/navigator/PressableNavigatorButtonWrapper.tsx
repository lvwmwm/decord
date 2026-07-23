// Module ID: 9125
// Function ID: 71469
// Name: MIN_HEADER_HEIGHT
// Dependencies: [27, 9123, 33, 4130, 689, 2]
// Exports: default

// Module 9125 (MIN_HEADER_HEIGHT)
import { View } from "get ActivityIndicator";
import { MIN_HEADER_HEIGHT } from "MIN_HEADER_HEIGHT";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let obj = {};
obj = { flexShrink: 0, flexDirection: "row", alignItems: "center", padding: require("_createForOfIteratorHelperLoose").space.PX_8, height: MIN_HEADER_HEIGHT, width: MIN_HEADER_HEIGHT };
obj.buttonWrapper = obj;
obj.buttonWrapperModal = { marginLeft: -8 };
let closure_2 = _createForOfIteratorHelperLoose.createStyles(obj);
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorButtonWrapper.tsx");

export default function PressableNavigatorButtonWrapper(isModal) {
  let flag = isModal.isModal;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback();
  const obj = { collapsable: false, style: flag ? tmp.buttonWrapperModal : tmp.buttonWrapper, importantForAccessibility: "yes", children: isModal.children };
  return <View collapsable={false} style={flag ? tmp.buttonWrapperModal : tmp.buttonWrapper} importantForAccessibility="yes">{arg0.children}</View>;
};
