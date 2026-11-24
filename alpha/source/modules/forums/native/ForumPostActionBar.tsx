// Module ID: 11754
// Function ID: 11755
// Name: ForumPostActionBar
// Dependencies: [19, 17, 4850, 4851, 4766, 1071, 21, 4917, 575, 504, 11558, 8948, 8872, 11755, 6026, 1112, 7060, 5508, 8456, 5613, 8103, 11, 6658, 11756, 2]
// Exports: default

// Module 11754 (ForumPostActionBar)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1071 */;
import flow_Client from "flow/Client" /* 6658 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 8103 */;
import messages_MessagesUtils from "messages/MessagesUtils" /* 8948 */;
import react from "react" /* 19 */;
import LurkingStore from "LurkingStore" /* 4850 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4851 */;
import ChannelStore from "ChannelStore" /* 4766 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4917 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
const AnalyticsSections = Constants.AnalyticsSections;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { actionBarContainer: obj2, actionRow: { display: "flex", flexDirection: "row", alignItems: "center", flexShrink: 0 }, reactionRow: obj3, actionButton: obj4, actionButtonsContainer: { alignSelf: "flex-start", marginStart: "auto", justifyContent: "flex-end" }, lastActionButton: { marginRight: 0 }, buttonText: { marginLeft: 8 } };
obj2 = { overflow: "hidden", paddingHorizontal: 12, paddingVertical: 8, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, marginBottom: -1 };
createStyles = createStyles.createStyles;
obj3 = { display: "flex", flexDirection: "row", alignItems: "center", flex: 1, marginEnd: nativeDefault.space.PX_8 };
obj4 = { display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 8, height: 28, marginRight: 4, borderRadius: nativeDefault.radii.xs, borderWidth: 1, backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, borderColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT };
let closure_10 = createStyles(obj);
let result = size.fileFinishedImporting("modules/forums/native/ForumPostActionBar.tsx");

export default function ForumPostActionBar(channel) {
  let closure_2;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items3;
  let items4;
  let items5;
  let items8;
  let items9;
  let obj8;
  channel = channel.channel;
  let tmp = closure_10();
  let obj = channel(504);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channel.parent_id));
  let obj2 = channel(11558);
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
  const obj6 = { style: items3, children: items4 };
  items3 = [tmp.actionBarContainer, ];
  const obj5 = channel(8872);
  items3[1] = obj5.useGradientTop();
  let tmp9 = null != firstMessage;
  if (tmp9) {
    const obj7 = { style: tmp.reactionRow, children: closure_8(channel(11755).ForumPostActionBarReactions, obj8) };
    obj8 = { thread: channel, parentChannel: stateFromStores, firstMessage };
    tmp9 = closure_8(tmp8, obj7);
  }
  items4 = [tmp9, ];
  const obj9 = { style: items5, children: items8 };
  items5 = [, ];
  ({ actionRow: arr6[0], actionButtonsContainer: arr6[1] } = tmp);
  let tmp7Result = !stateFromStores2;
  if (tmp7Result) {
    let tmp13;
    function handleFollow() {
      const obj = messages_MessagesUtils;
      const result = obj.handleToggleFollowForumPost(channel, stateFromStores1);
    }
    const obj10 = { accessible: true, accessibilityLabel: null, style: null, onPress: null, children: null };
    const PressableOpacity = tmp2(6026).PressableOpacity;
    const intl = tmp2(1112).intl;
    const string = intl.string;
    const t = tmp2(1112).t;
    if (stateFromStores1) {
      obj10.accessibilityLabel = string(t.G3ooHD);
      obj10.style = tmp.actionButton;
      obj10.onPress = handleFollow;
      const items6 = [closure_8(channel(7060).CheckmarkLargeIcon, { size: "xs", color: "text-brand" }), ];
      const obj11 = { style: tmp.buttonText, variant: "body-sm/semibold", color: "text-brand", children: intl3.string(channel(1112).t["OtF+lC"]) };
      const Text2 = tmp2(5508).Text;
      intl3 = tmp2(1112).intl;
      items6[1] = closure_8(Text2, obj11);
      obj10.children = items6;
      tmp13 = obj10;
    } else {
      obj10.accessibilityLabel = string(t["DjZ+6E"]);
      obj10.style = tmp.actionButton;
      obj10.onPress = handleFollow;
      const items7 = [closure_8(channel(8456).BellIcon, { size: "xs" }), ];
      const obj12 = { style: tmp.buttonText, variant: "body-sm/semibold", color: "interactive-text-default", children: intl2.string(channel(1112).t["0rQinA"]) };
      const Text = tmp2(5508).Text;
      intl2 = tmp2(1112).intl;
      items7[1] = closure_8(Text, obj12);
      obj10.children = items7;
      tmp13 = obj10;
    }
    tmp7Result = tmp7(PressableOpacity, tmp13);
  }
  items8 = [tmp7Result, , ];
  const obj13 = {
    accessible: true,
    accessibilityLabel: intl4.string(channel(1112).t.WqhZss),
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
    children: closure_8(channel(5613).LinkIcon, { size: "xs" })
  };
  const PressableOpacity2 = tmp2(6026).PressableOpacity;
  intl4 = tmp2(1112).intl;
  items8[1] = closure_8(PressableOpacity2, obj13);
  const obj14 = {
    accessible: true,
    accessibilityLabel: intl5.string(channel(1112).t.nFP4oa),
    style: items9,
    onPress: function handleJumpToTop() {
      let obj2;
      const obj = { channelId: channel.id, messageId: obj2.castChannelIdAsMessageId(channel.id), flash: true, jumpType: flow_Client.JumpType.ANIMATED };
      const jumpToMessage = MessageActionCreatorsDefault.jumpToMessage;
      MessageActionCreatorsDefault;
      obj2 = SnowflakeUtilsDefault;
      jumpToMessage(obj);
    },
    children: closure_8(channel(11756).ArrowLargeUpIcon, { size: "xs" })
  };
  const PressableOpacity3 = tmp2(6026).PressableOpacity;
  intl5 = tmp2(1112).intl;
  items9 = [, ];
  ({ actionButton: arr10[0], lastActionButton: arr10[1] } = tmp);
  items8[2] = closure_8(PressableOpacity3, obj14);
  items4[1] = closure_9(View, obj9);
  return closure_9(View, obj6);
};
