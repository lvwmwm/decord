// Module ID: 15506
// Function ID: 119462
// Dependencies: [31, 27, 33, 4130, 10168, 2]

// Module 15506
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ container: { position: "absolute", opacity: 0 } });
const memoResult = importAllResult.memo(function InstantInviteSelfMeasurer(type) {
  let item;
  let onMeasured;
  ({ item, onMeasured } = type);
  let str = type.type;
  if (str === undefined) {
    str = "height";
  }
  const items = [onMeasured, str];
  let obj = { style: null, onLayout: null, pointerEvents: "none", importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, accessible: false };
  const items1 = [type.containerStyle, callback().container];
  obj.style = items1;
  obj.onLayout = importAllResult.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    onMeasured("height" === str ? layout.height : layout.width);
  }, items);
  if ("invite" === item.type) {
    obj = { invite: item.data };
    let tmp7 = jsx(str(10168), { invite: item.data });
  } else {
    obj = { channel: item.data };
    tmp7 = jsx(onMeasured(10168).LinkedChannelInvite, { channel: item.data });
  }
  obj.children = tmp7;
  return <View style={null} onLayout={null} pointerEvents="none" importantForAccessibility="no-hide-descendants" accessibilityElementsHidden accessible={false} />;
});
const result = require("jsxProd").fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteSelfMeasurer.tsx");

export default memoResult;
