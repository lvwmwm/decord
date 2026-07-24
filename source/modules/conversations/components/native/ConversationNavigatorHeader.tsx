// Module ID: 9324
// Function ID: 72768
// Name: ConversationNavigatorHeader
// Dependencies: [31, 27, 1348, 33, 4130, 689, 566, 4320, 9158, 2]
// Exports: default

// Module 9324 (ConversationNavigatorHeader)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_6 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { flex: 1, paddingVertical: importDefault(689).space.PX_16, paddingRight: null, alignItems: "center", justifyContent: "center" };
  let num = 0;
  if (!arg0) {
    num = importDefault(689).space.PX_64;
  }
  obj.paddingRight = num;
  obj.container = obj;
  return obj;
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorHeader.tsx");

export default function ConversationNavigatorHeader(channelId) {
  channelId = channelId.channelId;
  let flag = channelId.hasRightAction;
  if (flag === undefined) {
    flag = false;
  }
  let obj = channelId(566);
  const items = [_isNativeReflectConstruct];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getChannel(channelId), items1);
  const tmp3 = importDefault(4320)(stateFromStores, true);
  obj = { style: callback(flag).container };
  obj = { title: channelId.title };
  let tmp6;
  if (null != tmp3) {
    tmp6 = tmp3;
  }
  obj.subtitle = tmp6;
  obj.variant = "heading-lg/semibold";
  obj.subtitleColor = "text-muted";
  obj.children = jsx(channelId(9158).GenericHeaderTitle, { title: channelId.title });
  return <View title={arg0.title} />;
};
