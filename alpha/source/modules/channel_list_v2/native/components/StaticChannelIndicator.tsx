// Module ID: 13888
// Function ID: 13889
// Name: StaticChannelIndicator
// Dependencies: [17, 6770, 21, 5009, 575, 5591, 2]
// Exports: default

// Module 13888 (StaticChannelIndicator)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import useToken from "useToken" /* 5591 */;
import ReadStateConstants from "ReadStateConstants" /* 6770 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let StyleSheet;
let c3;
let obj2;
let size;
({ View: c3, StyleSheet } = react_native);
const UnreadSetting = ReadStateConstants.UnreadSetting;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
const obj = { indicatorContainer: obj2, indicator: size };
obj2 = { top: 0, bottom: 0, justifyContent: "center" };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
size = { width: 8, height: 8, borderRadius: nativeDefault.radii.round, marginLeft: -4 };
let closure_6 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/channel_list_v2/native/components/StaticChannelIndicator.tsx");

export default function ChannelIndicator(arg0) {
  let resolvedUnreadSetting;
  let style;
  let unread;
  ({ unread, resolvedUnreadSetting, style } = arg0);
  const tmp = closure_6();
  useToken;
  if (resolvedUnreadSetting === UnreadSetting.ALL_MESSAGES) {
    let CHANNELS_DEFAULT = nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE;
  } else {
    CHANNELS_DEFAULT = nativeDefault.colors.CHANNELS_DEFAULT;
  }
  let tmp7 = null;
  if (unread) {
    const items = [tmp.indicator, , ];
    const obj3 = { backgroundColor: tmp6 };
    items[1] = obj3;
    items[2] = style;
    tmp7 = <_false style={tmp.indicatorContainer}>{null}</_false>;
  }
  return tmp7;
};
