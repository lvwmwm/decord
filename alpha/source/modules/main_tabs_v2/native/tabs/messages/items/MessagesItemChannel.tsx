// Module ID: 18032
// Function ID: 18033
// Name: MessagesItemChannel
// Dependencies: [32, 19, 4858, 21, 11028, 575, 18033, 504, 18042, 7288, 14370, 2]
// Exports: getMessagesItemChannelSizes

// Module 18032 (MessagesItemChannel)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import defaultMVCPConfig from "defaultMVCPConfig" /* 7288 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 11028 */;
import LegendList from "LegendList" /* 14370 */;
import MessagesItemChannelBase from "MessagesItemChannelBase" /* 18033 */;
import MessagesItemPlaceholderDefault from "MessagesItemPlaceholder" /* 18042 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import size from "module_2" /* 2 */;

const MessagesItemChannelBaseDefault = MessagesItemChannelBase;

const jsx = Fragment.jsx;
let closure_7 = react.memo(function MessagesItemChannel(arg0) {
  let isPressed;
  let placeholderHeight;
  let row;
  let setIsPressed;
  let tmp5;
  ({ channelId: require, placeholderHeight } = arg0);
  ({ row, isPressed, setIsPressed } = arg0);
  const items = [ChannelStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(require));
  let isPrivateResult;
  if (stateFromStores != null) {
    isPrivateResult = stateFromStores.isPrivate();
  }
  if (true === isPrivateResult) {
    tmp5 = jsx(MessagesItemChannelBaseDefault, { channel: stateFromStores, height: placeholderHeight, isPressed, setIsPressed });
  } else {
    tmp5 = jsx(MessagesItemPlaceholderDefault, { height: placeholderHeight, row });
  }
  return tmp5;
});
const memoResult = react.memo(function MessagesItemChannelFast(arg0) {
  let tmp2;
  let tmp3;
  [tmp2, tmp3] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const merged = Object.assign(arg0);
  return <closure_7 isPressed={tmp2} setIsPressed={tmp3} />;
});
const memoResult1 = react.memo(function MessagesItemChannelFlash(channelId) {
  const items = [channelId.channelId];
  const obj = defaultMVCPConfig;
  const tmp = _slicedToArray(obj.useRecyclingState(false, items), 2);
  let closure_0 = tmp3;
  const items1 = [tmp[1]];
  const first = tmp[0];
  const callback = react.useCallback((arg0) => closure_0(arg0, true), items1);
  const merged = Object.assign(channelId);
  return <closure_7 isPressed={first} setIsPressed={callback} />;
});
const memoResult2 = react.memo(function MessagesItemChannelLegend(arg0) {
  let tmp2;
  let tmp3;
  const obj = LegendList;
  [tmp2, tmp3] = obj.useRecyclingState(false);
  _slicedToArray(obj.useRecyclingState(false), 2);
  const merged = Object.assign(arg0);
  return <closure_7 isPressed={tmp2} setIsPressed={tmp3} />;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemChannel.tsx");

export function getMessagesItemChannelSizes(fontScale) {
  let sum;
  const obj = useScaledTextLineHeight;
  const scaleTextLineHeightResult = obj.scaleTextLineHeight("redesign/channel-title/semibold", fontScale);
  const obj2 = useScaledTextLineHeight;
  const scaleTextLineHeightResult1 = obj2.scaleTextLineHeight("text-xs/medium", fontScale);
  const PX_16 = nativeDefault.space.PX_16;
  const PX_32 = nativeDefault.space.PX_32;
  const obj3 = { avatar: PX_32, height: sum + MessagesItemChannelBase.MESSAGES_ITEM_CHANNEL_PRESSABLE_PADDING, label: scaleTextLineHeightResult, labelSecondary: scaleTextLineHeightResult1, padding: PX_16 };
  sum = Math.max(PX_32, scaleTextLineHeightResult + scaleTextLineHeightResult1) + PX_16;
  return obj3;
}
export const MessagesItemChannelFast = memoResult;
export const MessagesItemChannelFlash = memoResult1;
export const MessagesItemChannelLegend = memoResult2;
