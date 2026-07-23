// Module ID: 10313
// Function ID: 79592
// Name: LocationText
// Dependencies: [31, 27, 4122, 3767, 1849, 33, 4130, 689, 4126, 4320, 669, 4629, 4631, 4593, 566, 4660, 1212, 5119, 2]
// Exports: SimpleNotificationHeader, default

// Module 10313 (LocationText)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
function LocationText(channel) {
  let _location;
  let author;
  channel = channel.channel;
  const parentChannel = channel.parentChannel;
  const color = channel.color;
  let str;
  ({ author, location: _location } = channel);
  const tmp = _createForOfIteratorHelperLoose();
  const React = tmp;
  str = "text-muted";
  if (null != color) {
    str = color;
  }
  const items = [channel, parentChannel, tmp.icon, str];
  let obj = { style: tmp.secondaryTextContainer };
  let tmp5 = null != author;
  const memo = React.useMemo(() => {
    const PRIVATE_CHANNEL = channel(parentChannel[10]).ChannelTypesSets.PRIVATE_CHANNEL;
    if (PRIVATE_CHANNEL.has(channel.type)) {
      let element = null;
      if (null != undefined) {
        let obj = { color: str, style: tmp.icon };
        element = tmp.createElement(undefined, { color: str, style: tmp.icon });
      }
      return element;
    } else {
      if (tmp.type !== channel(parentChannel[10]).ChannelTypes.PUBLIC_THREAD) {
        obj = channel(parentChannel[13]);
        const simpleChannelIconComponent = obj.getSimpleChannelIconComponent(tmp);
      }
      if (null == tmp2) {
        const ThreadIcon = channel(parentChannel[12]).ThreadIcon;
      }
      const ChatIcon = channel(parentChannel[11]).ChatIcon;
    }
  }, items);
  if (tmp5) {
    obj = { variant: "text-md/bold", color: str, maxFontSizeMultiplier: 1.75, style: tmp.separator, children: "\u00B7" };
    tmp5 = callback(channel(parentChannel[8]).Text, obj);
  }
  const items1 = [tmp5, memo, ];
  obj = { variant: "text-md/semibold", color: str, lineClamp: 1, style: tmp.secondaryText, children: _location };
  items1[2] = callback(channel(parentChannel[8]).Text, obj);
  obj.children = items1;
  return closure_8(str, obj);
}
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = Object.freeze({ radius: 12 });
let closure_10 = Object.freeze({ top: 8, right: 8, bottom: 8, left: 8 });
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.headerContent = { flex: 1, flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.primaryText = { flexShrink: 1, marginRight: 2 };
_createForOfIteratorHelperLoose.secondaryTextContainer = { flexDirection: "row", alignItems: "center", gap: 2, flex: 1, overflow: "hidden" };
_createForOfIteratorHelperLoose.separator = { marginHorizontal: 2 };
_createForOfIteratorHelperLoose.icon = { width: 16, height: 16 };
_createForOfIteratorHelperLoose.secondaryText = { flex: 1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/in_app_notifications/native/MessageNotificationHeader.tsx");

export default function MessageNotificationHeader(arg0) {
  let author;
  let channel;
  let channel2;
  let expanded;
  let guild;
  let guild2;
  let locationTextColor;
  let onDismiss;
  let parentChannel;
  let parentChannel2;
  ({ channel, parentChannel, author, expanded, onDismiss } = arg0);
  ({ guild, locationTextColor } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = onDismiss(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.roleStyle);
  if (null != author) {
    const colorString = author.colorString;
  }
  let tmp3;
  if ("username" === stateFromStores) {
    tmp3 = colorString;
  }
  if (null != tmp3) {
    obj = { color: tmp3 };
    const tmp4 = obj;
  }
  ({ channel: channel2, parentChannel: parentChannel2, guild: guild2 } = { channel, parentChannel, guild });
  let obj2 = onDismiss(4320);
  const channelName = obj2.computeChannelName(channel2, closure_6, closure_5);
  const type = channel2.type;
  let tmp6 = channelName;
  if (onDismiss(669).ChannelTypes.GROUP_DM !== type) {
    if (onDismiss(669).ChannelTypes.GUILD_FORUM !== type) {
      if (onDismiss(669).ChannelTypes.GUILD_TEXT !== type) {
        if (onDismiss(669).ChannelTypes.GUILD_ANNOUNCEMENT !== type) {
          if (onDismiss(669).ChannelTypes.ANNOUNCEMENT_THREAD !== type) {
            if (onDismiss(669).ChannelTypes.PUBLIC_THREAD !== type) {
              tmp6 = null;
            }
          }
          let channelName1 = null;
          if (null != parentChannel2) {
            let obj3 = onDismiss(4320);
            channelName1 = obj3.computeChannelName(parentChannel2, closure_6, closure_5);
          }
          if (null != channelName1) {
            const _HermesInternal2 = HermesInternal;
            let combined = "" + channelName + ", " + channelName1;
          } else {
            combined = channelName;
            if (null != guild2) {
              const _HermesInternal = HermesInternal;
              combined = "" + channelName + ", " + guild2.name;
            }
          }
          tmp6 = combined;
        }
      }
    }
    let combined1 = null;
    if (null != guild2) {
      const _HermesInternal3 = HermesInternal;
      combined1 = "" + channelName + ", " + guild2.name;
    }
    tmp6 = combined1;
  }
  obj = { style: tmp.container };
  const obj1 = { style: tmp.headerContent };
  let tmp25 = null != author;
  if (tmp25) {
    obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1 };
    const items1 = [tmp.primaryText, tmp4];
    obj2.style = items1;
    obj2.children = author.nick;
    tmp25 = callback(onDismiss(4126).Text, obj2);
  }
  const items2 = [tmp25, ];
  let tmp29 = null != tmp6;
  if (tmp29) {
    obj3 = { location: tmp6, channel, parentChannel, author, color: locationTextColor };
    tmp29 = callback(LocationText, obj3);
  }
  items2[1] = tmp29;
  obj1.children = items2;
  const items3 = [closure_8(View, obj1), ];
  if (expanded) {
    expanded = null != onDismiss;
  }
  if (expanded) {
    const obj4 = { accessibilityRole: "button" };
    const intl = onDismiss(1212).intl;
    obj4.accessibilityLabel = intl.string(onDismiss(1212).t.LnEgqX);
    obj4.hitSlop = closure_10;
    obj4.androidRippleConfig = closure_9;
    obj4.onPress = function onPress() {
      return onDismiss("close_from_expanded");
    };
    const obj5 = { color: "icon-subtle", style: { height: 20, width: 20 } };
    obj4.children = callback(onDismiss(5119).XSmallIcon, obj5);
    expanded = callback(onDismiss(4660).PressableOpacity, obj4);
  }
  items3[1] = expanded;
  obj.children = items3;
  return closure_8(View, obj);
};
export const SimpleNotificationHeader = function SimpleNotificationHeader(secondaryText) {
  let labelStyle;
  let text;
  secondaryText = secondaryText.secondaryText;
  ({ text, labelStyle } = secondaryText);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.container };
  obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1 };
  const items = [tmp.primaryText, labelStyle];
  obj.style = items;
  obj.children = text;
  const items1 = [callback(require(4126) /* Text */.Text, obj), ];
  let tmp4 = null != secondaryText;
  if (tmp4) {
    obj = { style: tmp.secondaryTextContainer };
    const obj1 = { variant: "text-md/bold", color: "text-muted", maxFontSizeMultiplier: 1.75, style: tmp.separator, children: "\u00B7" };
    const items2 = [callback(require(4126) /* Text */.Text, obj1), ];
    const obj2 = { variant: "text-md/semibold", color: "text-muted", lineClamp: 1, style: tmp.secondaryText, children: secondaryText };
    items2[1] = callback(require(4126) /* Text */.Text, obj2);
    obj.children = items2;
    tmp4 = callback2(View, obj);
  }
  items1[1] = tmp4;
  obj.children = items1;
  return callback2(View, obj);
};
