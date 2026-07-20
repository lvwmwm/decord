// Module ID: 10293
// Function ID: 79476
// Name: LocationText
// Dependencies: []
// Exports: SimpleNotificationHeader, default

// Module 10293 (LocationText)
function LocationText(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const parentChannel = channel.parentChannel;
  const dependencyMap = parentChannel;
  const author = channel.author;
  let View;
  const tmp = callback3();
  const React = tmp;
  let str = "mobile-text-heading-primary";
  if (null != author) {
    str = "text-muted";
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
  obj = { 9223372036854775807: 1776828772, 9223372036854775807: -144637951, 9223372036854775807: 815617, color: str, style: tmp.secondaryText, children: channel.location };
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
let closure_10 = Object.freeze({ position: "parent", right: "Array", top: "isArray", display: "accessibilityRole" });
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { -9223372036854775808: true, filter: true, gap: importDefault(dependencyMap[7]).space.PX_8 };
obj.container = obj;
obj.headerContent = { marginBottom: null, borderRadius: "\u{1F469}\u{1F3FC}\u200D\u{1F9B1}", backgroundColor: true };
obj.primaryText = { flexShrink: 1 };
obj.secondaryTextContainer = {};
obj.separator = { marginHorizontal: 2 };
obj.icon = { aze: "<string:16777479>", azj: "<string:36295491>" };
obj.secondaryText = { flex: 1 };
let closure_11 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/in_app_notifications/native/MessageNotificationHeader.tsx");

export default function MessageNotificationHeader(guild) {
  let author;
  let channel;
  let channel2;
  let expanded;
  let onDismiss;
  let parentChannel;
  let parentChannel2;
  ({ channel, parentChannel, author, expanded, onDismiss } = guild);
  const arg1 = onDismiss;
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
  ({ channel: channel2, parentChannel: parentChannel2, guild } = { channel, parentChannel, guild: guild.guild });
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
            if (null != guild) {
              const _HermesInternal = HermesInternal;
              combined = "" + channelName + ", " + guild.name;
            }
          }
          tmp6 = combined;
        }
      }
    }
    let combined1 = null;
    if (null != guild) {
      const _HermesInternal3 = HermesInternal;
      combined1 = "" + channelName + ", " + guild.name;
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
    obj3 = { location: tmp6, channel, parentChannel, author };
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
    const obj5 = { color: "icon-subtle", style: { <string:1140607356>: false, <string:1751293292>: false } };
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
    obj = { paddingTop: null, textTransform: 12, absolute: -2, tall: true, wide: "/assets/design/components/Icon/native/redesign/generated/images", style: tmp.separator };
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
