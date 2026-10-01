// Module ID: 10957
// Function ID: 10958
// Name: ForumPostActionBar
// Dependencies: [32, 19, 17, 4470, 4471, 2045, 1074, 21, 4836, 576, 504, 6722, 1479, 10822, 7297, 10958, 5435, 1115, 4783, 4832, 9067, 4775, 6876, 11, 4763, 10959, 2]
// Exports: default

// Module 10957 (ForumPostActionBar)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import flow_Client from "flow/Client" /* 4763 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 6876 */;
import messages_MessagesUtils from "messages/MessagesUtils" /* 10822 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import LurkingStore from "LurkingStore" /* 4470 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4471 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c10;
let obj2;
let obj3;
let unpackModuleId;
let react = react_mod;
const View = react_native.View;
const AnalyticsSections = Constants.AnalyticsSections;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { actionBarContainer: obj2, actionRow: { display: "flex", flexDirection: "row", alignItems: "center", flex: 1 }, reactionRow: { display: "flex", flexDirection: "row", alignItems: "center", flex: 1 }, actionButton: obj3, actionButtonsContainer: { justifyContent: "flex-end" }, lastActionButton: { marginRight: 0 }, buttonText: { marginLeft: 8 } };
obj2 = { overflow: "hidden", paddingHorizontal: 12, paddingVertical: 8, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, marginBottom: -1 };
createStyles = createStyles.createStyles;
obj3 = { display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 8, height: 28, marginRight: 4, borderRadius: nativeDefault.radii.xs, borderWidth: 1, backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, borderColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT };
let closure_12 = createStyles(obj);
let result = size.fileFinishedImporting("modules/forums/native/ForumPostActionBar.tsx");

export default function ForumPostActionBar(channel) {
  let closure_2;
  let closure_4;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items10;
  let items11;
  let items4;
  let items5;
  let items6;
  let items8;
  let obj8;
  channel = channel.channel;
  react = undefined;
  let tmp = closure_12();
  let obj = channel(504);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channel.parent_id));
  let obj2 = channel(6722);
  const firstMessage = obj2.useFirstForumPostMessage(channel).firstMessage;
  const items1 = [JoinedThreadsStore];
  const obj3 = channel(504);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => JoinedThreadsStore.hasJoined(channel.id));
  dependencyMap = channel.getGuildId();
  const items2 = [LurkingStore];
  const obj4 = channel(504);
  const stateFromStores2 = obj4.useStateFromStores(items2, () => {
    const isLurkingResult = null != closure_2 && LurkingStore.isLurking(tmp);
    return isLurkingResult;
  });
  const width = stateFromStores1(1479)().width;
  const tmp7 = width(react.useState(0), 2);
  react = tmp7[1];
  const items3 = [width];
  const first = tmp7[0];
  const callback = react.useCallback((nativeEvent) => {
    closure_4(width - nativeEvent.nativeEvent.layout.width - 40);
  }, items3);
  const obj6 = { style: items4, children: items5 };
  items4 = [tmp.actionBarContainer, ];
  const obj5 = channel(7297);
  items4[1] = obj5.useGradientTop();
  let tmp12 = null != firstMessage;
  if (tmp12) {
    const obj7 = { style: tmp.reactionRow, children: closure_10(channel(10958).ForumPostActionBarReactions, obj8) };
    obj8 = { thread: channel, parentChannel: stateFromStores, firstMessage, containerWidth: first };
    tmp12 = closure_10(tmp11, obj7);
  }
  items5 = [tmp12, ];
  const obj9 = { style: items6, onLayout: callback, children: items10 };
  items6 = [, ];
  ({ actionRow: arr7[0], actionButtonsContainer: arr7[1] } = tmp);
  let tmp10Result = !stateFromStores2;
  if (tmp10Result) {
    let tmp16;
    function handleFollow() {
      const obj = messages_MessagesUtils;
      const result = obj.handleToggleFollowForumPost(channel, stateFromStores1);
    }
    const obj10 = { accessible: true, accessibilityLabel: null, style: null, onPress: null, children: null };
    const PressableOpacity = tmp2(5435).PressableOpacity;
    const intl = tmp2(1115).intl;
    const string = intl.string;
    const t = tmp2(1115).t;
    if (stateFromStores1) {
      obj10.accessibilityLabel = string(t.G3ooHD);
      obj10.style = tmp.actionButton;
      obj10.onPress = handleFollow;
      const items7 = [closure_10(channel(4783).CheckmarkLargeIcon, { size: "xs", color: "text-brand" }), ];
      const obj11 = { style: items8, variant: "text-sm/semibold", color: "text-brand", children: intl3.string(channel(1115).t["OtF+lC"]) };
      items8 = [tmp.buttonText];
      const Text2 = tmp2(4832).Text;
      intl3 = tmp2(1115).intl;
      items7[1] = closure_10(Text2, obj11);
      obj10.children = items7;
      tmp16 = obj10;
    } else {
      obj10.accessibilityLabel = string(t["DjZ+6E"]);
      obj10.style = tmp.actionButton;
      obj10.onPress = handleFollow;
      const items9 = [closure_10(channel(9067).BellIcon, { size: "xs" }), ];
      const obj12 = { style: tmp.buttonText, variant: "text-sm/semibold", color: "interactive-text-default", children: intl2.string(channel(1115).t["0rQinA"]) };
      const Text = tmp2(4832).Text;
      intl2 = tmp2(1115).intl;
      items9[1] = closure_10(Text, obj12);
      obj10.children = items9;
      tmp16 = obj10;
    }
    tmp10Result = tmp10(PressableOpacity, tmp16);
  }
  items10 = [tmp10Result, , ];
  const obj13 = {
    accessible: true,
    accessibilityLabel: intl4.string(channel(1115).t.WqhZss),
    style: tmp.actionButton,
    onPress() {
      const guildId = channel.getGuildId();
      const tmp = channel;
      if (null != guildId) {
        const obj2 = { section: AnalyticsSections.CHANNEL_HEADER };
        const obj = messages_MessagesUtils;
        const result = obj.handleCopyLinkForumPost(guildId, tmp.id, obj2);
      }
    },
    children: closure_10(channel(4775).LinkIcon, { size: "xs" })
  };
  const PressableOpacity2 = tmp2(5435).PressableOpacity;
  intl4 = tmp2(1115).intl;
  items10[1] = closure_10(PressableOpacity2, obj13);
  const obj14 = {
    accessible: true,
    accessibilityLabel: intl5.string(channel(1115).t.nFP4oa),
    style: items11,
    onPress() {
      let obj2;
      const obj = { channelId: channel.id, messageId: obj2.castChannelIdAsMessageId(channel.id), flash: true, jumpType: flow_Client.JumpType.ANIMATED };
      const jumpToMessage = MessageActionCreatorsDefault.jumpToMessage;
      MessageActionCreatorsDefault;
      obj2 = SnowflakeUtilsDefault;
      jumpToMessage(obj);
    },
    children: closure_10(channel(10959).ArrowLargeUpIcon, { size: "xs" })
  };
  const PressableOpacity3 = tmp2(5435).PressableOpacity;
  intl5 = tmp2(1115).intl;
  items11 = [, ];
  ({ actionButton: arr12[0], lastActionButton: arr12[1] } = tmp);
  items10[2] = closure_10(PressableOpacity3, obj14);
  items5[1] = closure_11(View, obj9);
  return closure_11(View, obj6);
};
