// Module ID: 10304
// Function ID: 79534
// Name: ChannelIndicator
// Dependencies: [27, 4326, 33, 4130, 689, 3834, 2]
// Exports: default

// Module 10304 (ChannelIndicator)
import get_ActivityIndicator from "get ActivityIndicator";
import { UnreadSetting } from "ReadStateTypes";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const View = get_ActivityIndicator.View;
let obj = {};
obj = {};
const merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
obj["top"] = 0;
obj["bottom"] = 0;
obj["justifyContent"] = "center";
obj.indicatorContainer = obj;
const obj1 = { width: 8, height: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, marginLeft: -4 };
obj.indicator = obj1;
let closure_6 = _createForOfIteratorHelperLoose.createStyles(obj);
const result = require("jsxProd").fileFinishedImporting("modules/channel_list_v2/native/components/StaticChannelIndicator.tsx");

export default function ChannelIndicator(arg0) {
  let resolvedUnreadSetting;
  let style;
  let unread;
  ({ unread, resolvedUnreadSetting, style } = arg0);
  const tmp = callback();
  require(3834) /* map */;
  if (resolvedUnreadSetting === UnreadSetting.ALL_MESSAGES) {
    let CHANNELS_DEFAULT = importDefault(689).colors.INTERACTIVE_TEXT_ACTIVE;
  } else {
    CHANNELS_DEFAULT = importDefault(689).colors.CHANNELS_DEFAULT;
  }
  let tmp8 = null;
  if (unread) {
    let obj = { style: tmp.indicatorContainer };
    obj = {};
    const items = [tmp.indicator, , ];
    obj = { backgroundColor: tmp7 };
    items[1] = obj;
    items[2] = style;
    obj.style = items;
    obj.children = <View backgroundColor={tmp7} />;
    tmp8 = <View backgroundColor={tmp7} />;
  }
  return tmp8;
};
