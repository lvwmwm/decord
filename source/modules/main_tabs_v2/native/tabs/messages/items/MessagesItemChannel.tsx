// Module ID: 14956
// Function ID: 114040
// Name: getMessagesItemChannelSizes
// Dependencies: [31, 1348, 33, 9849, 689, 14957, 566, 14966, 2]
// Exports: getMessagesItemChannelSizes

// Module 14956 (getMessagesItemChannelSizes)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const memoResult = require("result").memo(function MessagesItemChannel(row) {
  let placeholderHeight;
  let require;
  ({ channelId: require, placeholderHeight } = row);
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.getChannel(closure_0));
  let isPrivateResult;
  if (null != stateFromStores) {
    isPrivateResult = stateFromStores.isPrivate();
  }
  if (true === isPrivateResult) {
    obj = { channel: stateFromStores, height: placeholderHeight };
    let tmp5 = jsx(importDefault(14957), { channel: stateFromStores, height: placeholderHeight });
  } else {
    obj = { height: placeholderHeight, row: row.row };
    tmp5 = jsx(importDefault(14966), { height: placeholderHeight, row: row.row });
  }
  return tmp5;
});
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemChannel.tsx");

export default memoResult;
export const getMessagesItemChannelSizes = function getMessagesItemChannelSizes(fontScale) {
  let obj = require(9849) /* scaleLineHeight */;
  const scaleTextLineHeightResult = obj.scaleTextLineHeight("redesign/channel-title/semibold", fontScale);
  const scaleTextLineHeightResult1 = require(9849) /* scaleLineHeight */.scaleTextLineHeight("text-xs/medium", fontScale);
  const PX_16 = importDefault(689).space.PX_16;
  const PX_32 = importDefault(689).space.PX_32;
  obj = { avatar: PX_32 };
  const sum = Math.max(PX_32, scaleTextLineHeightResult + scaleTextLineHeightResult1) + PX_16;
  obj.height = sum + require(14957) /* MESSAGES_ITEM_CHANNEL_PRESSABLE_PADDING */.MESSAGES_ITEM_CHANNEL_PRESSABLE_PADDING;
  obj.label = scaleTextLineHeightResult;
  obj.labelSecondary = scaleTextLineHeightResult1;
  obj.padding = PX_16;
  return obj;
};
