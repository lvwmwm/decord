// Module ID: 15652
// Function ID: 120551
// Dependencies: [31, 27, 33, 4165, 10115, 2]

// Module 15652
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_4 = _createForOfIteratorHelperLoose.createStyles({ container: { flexShrink: 1, paddingRight: 12, flexDirection: "row", alignItems: "center" } });
const memoResult = require("result").memo((channelId) => {
  obj = { style: callback().container, children: jsx(importDefault(10115), obj) };
  obj = { channelId: channelId.channelId, screenIndex: "none", pressable: false, isGuildMemberCountVisible: false, isNavigationScreen: true };
  return <View channelId={arg0.channelId} screenIndex="none" pressable={false} isGuildMemberCountVisible={false} isNavigationScreen />;
});
const result = require("jsxProd").fileFinishedImporting("modules/search/native/components/navigator/SearchNavigatorPreviewHeader.tsx");

export default memoResult;
