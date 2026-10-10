// Module ID: 10448
// Function ID: 10449
// Name: ForumPostActionBar
// Dependencies: [32, 19, 17, 4751, 4752, 2065, 1085, 21, 5092, 587, 558, 576, 504, 7003, 1497, 9382, 7178, 11, 5027, 9306, 10449, 6184, 1126, 6195, 5088, 8772, 5038, 10471, 2]

// Module 10448 (ForumPostActionBar)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import flow_Client from "flow/Client" /* 5027 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7178 */;
import messages_MessagesUtils from "messages/MessagesUtils" /* 9382 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import LurkingStore from "LurkingStore" /* 4751 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4752 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ForumPostActionBar(channel) {
  let closure_2;
  let first;
  let obj3;
  let tmp11;
  let tmp13;
  let tmp15;
  let tmp17;
  let tmp20;
  let tmp7;
  let tmp9;
  let tmp = channel;
  let obj = channel(576);
  const cResult = obj.c(61);
  channel = channel.channel;
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel.parent_id) {
    const fn = function f() {
      return ChannelStore.getChannel(channel.parent_id);
    };
    cResult[1] = channel.parent_id;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  const tmpResult5 = tmp(7003);
  const firstMessage = tmpResult5.useFirstForumPostMessage(channel).firstMessage;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [JoinedThreadsStore];
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== channel.id) {
    const fn2 = function _() {
      return JoinedThreadsStore.hasJoined(channel.id);
    };
    cResult[4] = channel.id;
    cResult[5] = fn2;
    tmp11 = fn2;
  } else {
    tmp11 = cResult[5];
  }
  const tmpResult6 = tmp(504);
  const stateFromStores1 = tmpResult6.useStateFromStores(tmp9, tmp11);
  if (cResult[6] !== channel) {
    let guildId = channel.getGuildId();
    cResult[6] = channel;
    cResult[7] = guildId;
    tmp13 = guildId;
  } else {
    tmp13 = cResult[7];
  }
  dependencyMap = tmp13;
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [LurkingStore];
    cResult[8] = items2;
    tmp15 = items2;
  } else {
    tmp15 = cResult[8];
  }
  if (cResult[9] !== tmp13) {
    class I {
      constructor() {
        const isLurkingResult = null != closure_2 && LurkingStore.isLurking(tmp);
        return isLurkingResult;
      }
    }
    cResult[9] = tmp13;
    cResult[10] = I;
    tmp17 = I;
  } else {
    class I {
      constructor() {
        const isLurkingResult = null != closure_2 && LurkingStore.isLurking(tmp);
        return isLurkingResult;
      }
    }
  }
  const tmpResult7 = tmp(504);
  const stateFromStores2 = tmpResult7.useStateFromStores(tmp15, tmp17);
  const width = stateFromStores1(1497)().width;
  const tmp19 = width(react.useState(0), 2);
  [tmp20, react] = tmp19;
  if (cResult[11] !== width) {
    class S {
      constructor(nativeEvent) {
        react(width - nativeEvent.nativeEvent.layout.width - 40);
      }
    }
    cResult[11] = width;
    cResult[12] = S;
  } else {
    class S {
      constructor(nativeEvent) {
        react(width - nativeEvent.nativeEvent.layout.width - 40);
      }
    }
  }
  if (cResult[13] === channel) {
    class S {
      constructor(nativeEvent) {
        react(width - nativeEvent.nativeEvent.layout.width - 40);
      }
    }
    if (cResult[16] !== channel) {
      class S {
        constructor(nativeEvent) {
          react(width - nativeEvent.nativeEvent.layout.width - 40);
        }
      }
      cResult[16] = channel;
      cResult[17] = tmp23;
    } else {
      class S {
        constructor(nativeEvent) {
          react(width - nativeEvent.nativeEvent.layout.width - 40);
        }
      }
    }
    if (cResult[18] !== channel.id) {
      class S {
        constructor(nativeEvent) {
          react(width - nativeEvent.nativeEvent.layout.width - 40);
        }
      }
      cResult[18] = channel.id;
      cResult[19] = tmp25;
    } else {
      class S {
        constructor(nativeEvent) {
          react(width - nativeEvent.nativeEvent.layout.width - 40);
        }
      }
    }
    const tmpResult8 = tmp(9306);
    const gradientTop = tmpResult8.useGradientTop();
    if (cResult[20] === gradientTop) {
      class S {
        constructor(nativeEvent) {
          react(width - nativeEvent.nativeEvent.layout.width - 40);
        }
      }
      if (cResult[23] === channel) {
        class S {
          constructor(nativeEvent) {
            react(width - nativeEvent.nativeEvent.layout.width - 40);
          }
        }
      }
      let tmp30 = null != firstMessage;
      if (tmp30) {
        class S {
          constructor(nativeEvent) {
            react(width - nativeEvent.nativeEvent.layout.width - 40);
          }
        }
        let obj2 = { style: tmp4.reactionRow, children: closure_10(tmp(10449).ForumPostActionBarReactions, obj3) };
        obj3 = { thread: channel, parentChannel: stateFromStores, firstMessage, containerWidth: tmp20 };
        tmp30 = closure_10(View, obj2);
      }
      cResult[23] = channel;
      cResult[24] = tmp20;
      cResult[25] = firstMessage;
      cResult[26] = stateFromStores;
      cResult[27] = tmp4.reactionRow;
      cResult[28] = tmp30;
    }
    const items3 = [tmp4.actionBarContainer, gradientTop];
    cResult[20] = gradientTop;
    cResult[21] = tmp4.actionBarContainer;
    cResult[22] = items3;
  }
  function handleFollow() {
    const obj = messages_MessagesUtils;
    const result = obj.handleToggleFollowForumPost(channel, stateFromStores1);
  }
  cResult[13] = channel;
  cResult[14] = stateFromStores1;
  cResult[15] = handleFollow;
}) : (function ForumPostActionBar(channel) {
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
  let obj2 = channel(7003);
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
  const width = stateFromStores1(1497)().width;
  const tmp7 = width(react.useState(0), 2);
  react = tmp7[1];
  const items3 = [width];
  const first = tmp7[0];
  const callback = react.useCallback((nativeEvent) => {
    closure_4(width - nativeEvent.nativeEvent.layout.width - 40);
  }, items3);
  const obj6 = { style: items4, children: items5 };
  items4 = [tmp.actionBarContainer, ];
  const obj5 = channel(9306);
  items4[1] = obj5.useGradientTop();
  let tmp12 = null != firstMessage;
  if (tmp12) {
    const obj7 = { style: tmp.reactionRow, children: closure_10(channel(10449).ForumPostActionBarReactions, obj8) };
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
    const PressableOpacity = tmp2(6184).PressableOpacity;
    const intl = tmp2(1126).intl;
    const string = intl.string;
    const t = tmp2(1126).t;
    if (stateFromStores1) {
      obj10.accessibilityLabel = string(t.G3ooHD);
      obj10.style = tmp.actionButton;
      obj10.onPress = handleFollow;
      const items7 = [closure_10(channel(6195).CheckmarkLargeIcon, { size: "xs", color: "text-brand" }), ];
      const obj11 = { style: tmp.buttonText, variant: "text-sm/semibold", color: "text-brand", children: intl3.string(channel(1126).t["OtF+lC"]) };
      const Text2 = tmp2(5088).Text;
      intl3 = tmp2(1126).intl;
      items7[1] = closure_10(Text2, obj11);
      obj10.children = items7;
      tmp16 = obj10;
    } else {
      obj10.accessibilityLabel = string(t["DjZ+6E"]);
      obj10.style = tmp.actionButton;
      obj10.onPress = handleFollow;
      const items8 = [closure_10(channel(8772).BellIcon, { size: "xs" }), ];
      const obj12 = { style: tmp.buttonText, variant: "text-sm/semibold", color: "interactive-text-default", children: intl2.string(channel(1126).t["0rQinA"]) };
      const Text = tmp2(5088).Text;
      intl2 = tmp2(1126).intl;
      items8[1] = closure_10(Text, obj12);
      obj10.children = items8;
      tmp16 = obj10;
    }
    tmp10Result = tmp10(PressableOpacity, tmp16);
  }
  items9 = [tmp10Result, , ];
  const obj13 = {
    accessible: true,
    accessibilityLabel: intl4.string(channel(1126).t.WqhZss),
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
    children: closure_10(channel(5038).LinkIcon, { size: "xs" })
  };
  const PressableOpacity2 = tmp2(6184).PressableOpacity;
  intl4 = tmp2(1126).intl;
  items9[1] = closure_10(PressableOpacity2, obj13);
  const obj14 = {
    accessible: true,
    accessibilityLabel: intl5.string(channel(1126).t.nFP4oa),
    style: items10,
    onPress: function handleJumpToTop() {
      let obj2;
      const obj = { channelId: channel.id, messageId: obj2.castChannelIdAsMessageId(channel.id), flash: true, jumpType: flow_Client.JumpType.ANIMATED };
      const jumpToMessage = MessageActionCreatorsDefault.jumpToMessage;
      MessageActionCreatorsDefault;
      obj2 = SnowflakeUtilsDefault;
      jumpToMessage(obj);
    },
    children: closure_10(channel(10471).ArrowLargeUpIcon, { size: "xs" })
  };
  const PressableOpacity3 = tmp2(6184).PressableOpacity;
  intl5 = tmp2(1126).intl;
  items10 = [, ];
  ({ actionButton: arr11[0], lastActionButton: arr11[1] } = tmp);
  items9[2] = closure_10(PressableOpacity3, obj14);
  items5[1] = closure_11(View, obj9);
  return closure_11(View, obj6);
});
let result = size.fileFinishedImporting("modules/forums/native/ForumPostActionBar.tsx");

export default tmp4;
