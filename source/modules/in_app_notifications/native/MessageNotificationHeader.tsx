// Module ID: 10299
// Function ID: 79495
// Name: LocationText
// Dependencies: []
// Exports: SimpleNotificationHeader, default

// Module 10299 (LocationText)
function LocationText(channel) {
  let _location;
  let author;
  channel = channel.channel;
  const arg1 = channel;
  const parentChannel = channel.parentChannel;
  const dependencyMap = parentChannel;
  const color = channel.color;
  let View;
  ({ author, location: _location } = channel);
  const tmp = callback3();
  const React = tmp;
  let str = "text-muted";
  if (null != color) {
    str = color;
  }
  View = str;
  const items = [channel, parentChannel, tmp.icon, str];
  let obj = { style: tmp.secondaryTextContainer };
  let tmp5 = null != author;
  const memo = React.useMemo(() => {
    const PRIVATE_CHANNEL = channel(parentChannel[10]).ChannelTypesSets.PRIVATE_CHANNEL;
    if (PRIVATE_CHANNEL.has(channel.type)) {
      let element = null;
      if (null != undefined) {
        let obj = { color: str, style: tmp.icon };
        element = tmp.createElement(undefined, obj);
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
    obj = { color: str, style: tmp.separator };
    tmp5 = callback(arg1(dependencyMap[8]).Text, obj);
  }
  const items1 = [tmp5, memo, ];
  obj = { -9223372036854775808: "SHARE_SCREEN_MODAL_KEY", 0: "proto", 0: "NO_VOICE_STATES", color: str, style: tmp.secondaryText, children: _location };
  items1[2] = callback(arg1(dependencyMap[8]).Text, obj);
  obj.children = items1;
  return closure_8(View, obj);
}
let closure_2 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[5]));
let closure_9 = Object.freeze({ radius: 12 });
let closure_10 = Object.freeze({ label: "Array", maxLength: "gradientTop", backgroundColor: "EXPERIMENT_GUILD_EXPOSURE_SUPPRESSED", padding: "showReferralNotificationDot" });
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { gap: importDefault(dependencyMap[7]).space.PX_8 };
obj.container = obj;
obj.headerContent = { accessible: null, count: "\u{1F469}\u{1F3FC}\u200D\u{1F9B1}", "Bool(false)": true };
obj.primaryText = {};
obj.secondaryTextContainer = {};
obj.separator = { marginHorizontal: 2 };
obj.icon = {};
obj.secondaryText = { flex: 1 };
let closure_11 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/in_app_notifications/native/MessageNotificationHeader.tsx");

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
  const arg1 = onDismiss;
  ({ guild, locationTextColor } = arg0);
  const tmp = callback3();
  let obj = arg1(dependencyMap[14]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => roleStyle.roleStyle);
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
  let obj2 = arg1(dependencyMap[9]);
  const channelName = obj2.computeChannelName(channel2, closure_6, closure_5);
  const type = channel2.type;
  let tmp6 = channelName;
  if (arg1(dependencyMap[10]).ChannelTypes.GROUP_DM !== type) {
    if (arg1(dependencyMap[10]).ChannelTypes.GUILD_FORUM !== type) {
      if (arg1(dependencyMap[10]).ChannelTypes.GUILD_TEXT !== type) {
        if (arg1(dependencyMap[10]).ChannelTypes.GUILD_ANNOUNCEMENT !== type) {
          if (arg1(dependencyMap[10]).ChannelTypes.ANNOUNCEMENT_THREAD !== type) {
            if (arg1(dependencyMap[10]).ChannelTypes.PUBLIC_THREAD !== type) {
              tmp6 = null;
            }
          }
          let channelName1 = null;
          if (null != parentChannel2) {
            let obj3 = arg1(dependencyMap[9]);
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
    obj2 = {};
    const items1 = [tmp.primaryText, tmp4];
    obj2.style = items1;
    obj2.children = author.nick;
    tmp25 = callback(arg1(dependencyMap[8]).Text, obj2);
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
    const intl = arg1(dependencyMap[16]).intl;
    obj4.accessibilityLabel = intl.string(arg1(dependencyMap[16]).t.LnEgqX);
    obj4.hitSlop = closure_10;
    obj4.androidRippleConfig = closure_9;
    obj4.onPress = function onPress() {
      return onDismiss("close_from_expanded");
    };
    const obj5 = { color: "icon-subtle", style: { <string:1632221346>: false, <string:2722977214>: "internal" } };
    obj4.children = callback(arg1(dependencyMap[17]).XSmallIcon, obj5);
    expanded = callback(arg1(dependencyMap[15]).PressableOpacity, obj4);
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
  const tmp = callback3();
  let obj = { style: tmp.container };
  const items = [tmp.primaryText, labelStyle];
  const items1 = [callback(arg1(dependencyMap[8]).Text, { style: items, children: text }), ];
  let tmp4 = null != secondaryText;
  if (tmp4) {
    obj = { style: tmp.secondaryTextContainer };
    obj = { flex: null, display: 10, flexDirection: -2, alignItems: true, justifyContent: "/assets/design/components/Icon/native/redesign/generated/images", style: tmp.separator };
    const items2 = [callback(arg1(dependencyMap[8]).Text, obj), ];
    const obj1 = { style: tmp.secondaryText, children: secondaryText };
    items2[1] = callback(arg1(dependencyMap[8]).Text, obj1);
    obj.children = items2;
    tmp4 = callback2(View, obj);
  }
  items1[1] = tmp4;
  obj.children = items1;
  return callback2(View, obj);
};
