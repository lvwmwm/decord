// Module ID: 11312
// Function ID: 11313
// Name: ForumPostActionBar
// Dependencies: [32, 19, 17, 4942, 4943, 4858, 1072, 21, 5009, 575, 504, 7469, 1492, 9873, 9800, 11313, 6974, 1114, 6987, 5619, 9189, 5722, 7629, 11, 5244, 11314, 2]
// Exports: default

// Module 11312 (ForumPostActionBar)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import flow_Client from "flow/Client" /* 5244 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7629 */;
import messages_MessagesUtils from "messages/MessagesUtils" /* 9873 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import LurkingStore from "LurkingStore" /* 4942 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4943 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
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
  let items4;
  let items5;
  let items6;
  let items9;
  let obj8;
  channel = channel.channel;
  react = undefined;
  let tmp = closure_12();
  let obj = channel(504);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channel.parent_id));
  let obj2 = channel(7469);
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
  const width = stateFromStores1(1492)().width;
  const tmp7 = width(react.useState(0), 2);
  react = tmp7[1];
  const items3 = [width];
  const first = tmp7[0];
  const callback = react.useCallback((nativeEvent) => {
    closure_4(width - nativeEvent.nativeEvent.layout.width - 40);
  }, items3);
  const obj6 = { style: items4, children: items5 };
  items4 = [tmp.actionBarContainer, ];
  const obj5 = channel(9800);
  items4[1] = obj5.useGradientTop();
  let tmp12 = null != firstMessage;
  if (tmp12) {
    const obj7 = { style: tmp.reactionRow, children: closure_10(channel(11313).ForumPostActionBarReactions, obj8) };
    obj8 = { thread: channel, parentChannel: stateFromStores, firstMessage, containerWidth: first };
    tmp12 = closure_10(tmp11, obj7);
  }
  items5 = [tmp12, ];
  const obj9 = { style: items6, onLayout: callback, children: items9 };
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
    const PressableOpacity = tmp2(6974).PressableOpacity;
    const intl = tmp2(1114).intl;
    const string = intl.string;
    const t = tmp2(1114).t;
    if (stateFromStores1) {
      obj10.accessibilityLabel = string(t.G3ooHD);
      obj10.style = tmp.actionButton;
      obj10.onPress = handleFollow;
      const items7 = [closure_10(channel(6987).CheckmarkLargeIcon, { size: "xs", color: "text-brand" }), ];
      const obj11 = { style: tmp.buttonText, variant: "text-sm/semibold", color: "text-brand", children: intl3.string(channel(1114).t["OtF+lC"]) };
      const Text2 = tmp2(5619).Text;
      intl3 = tmp2(1114).intl;
      items7[1] = closure_10(Text2, obj11);
      obj10.children = items7;
      tmp16 = obj10;
    } else {
      obj10.accessibilityLabel = string(t["DjZ+6E"]);
      obj10.style = tmp.actionButton;
      obj10.onPress = handleFollow;
      const items8 = [closure_10(channel(9189).BellIcon, { size: "xs" }), ];
      const obj12 = { style: tmp.buttonText, variant: "text-sm/semibold", color: "interactive-text-default", children: intl2.string(channel(1114).t["0rQinA"]) };
      const Text = tmp2(5619).Text;
      intl2 = tmp2(1114).intl;
      items8[1] = closure_10(Text, obj12);
      obj10.children = items8;
      tmp16 = obj10;
    }
    tmp10Result = tmp10(PressableOpacity, tmp16);
  }
  items9 = [tmp10Result, , ];
  const obj13 = {
    accessible: true,
    accessibilityLabel: intl4.string(channel(1114).t.WqhZss),
    style: tmp.actionButton,
    onPress: function handleCopyLink() {
      const guildId = channel.getGuildId();
      const tmp = channel;
      if (null != guildId) {
        const obj2 = { section: AnalyticsSections.CHANNEL_HEADER };
        const obj = messages_MessagesUtils;
        const result = obj.handleCopyLinkForumPost(guildId, tmp.id, obj2);
      }
    },
    children: closure_10(channel(5722).LinkIcon, { size: "xs" })
  };
  const PressableOpacity2 = tmp2(6974).PressableOpacity;
  intl4 = tmp2(1114).intl;
  items9[1] = closure_10(PressableOpacity2, obj13);
  const obj14 = {
    accessible: true,
    accessibilityLabel: intl5.string(channel(1114).t.nFP4oa),
    style: items10,
    onPress: function handleJumpToTop() {
      let obj2;
      const obj = { channelId: channel.id, messageId: obj2.castChannelIdAsMessageId(channel.id), flash: true, jumpType: flow_Client.JumpType.ANIMATED };
      const jumpToMessage = MessageActionCreatorsDefault.jumpToMessage;
      MessageActionCreatorsDefault;
      obj2 = SnowflakeUtilsDefault;
      jumpToMessage(obj);
    },
    children: closure_10(channel(11314).ArrowLargeUpIcon, { size: "xs" })
  };
  const PressableOpacity3 = tmp2(6974).PressableOpacity;
  intl5 = tmp2(1114).intl;
  items10 = [, ];
  ({ actionButton: arr11[0], lastActionButton: arr11[1] } = tmp);
  items9[2] = closure_10(PressableOpacity3, obj14);
  items5[1] = closure_11(View, obj9);
  return closure_11(View, obj6);
};
