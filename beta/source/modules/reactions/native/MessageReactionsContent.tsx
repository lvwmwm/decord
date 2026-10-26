// Module ID: 9981
// Function ID: 9982
// Name: MessageReactionsContent
// Dependencies: [32, 19, 17, 4972, 6884, 4823, 4883, 8285, 4903, 1087, 21, 5052, 5234, 4971, 587, 558, 576, 504, 4915, 1357, 5225, 8286, 12, 5599, 7253, 5989, 5025, 8668, 7237, 1202, 1417, 9133, 1384, 6931, 8955, 9982, 1128, 9983, 4968, 4799, 7227, 9984, 5206, 1499, 5689, 5210, 9985, 2002, 7305, 9944, 7284, 5212, 5213, 9986, 1633, 8723, 5269, 5265, 510, 7369, 5224, 9987, 7167, 4929, 2]

// Module 9981 (MessageReactionsContent)
import _modDef12 from "module_12" /* 12 */;
import get_initialized from "get initialized" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1128 */;
import native from "native" /* 1202 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1417 */;
import useWindowDimensions from "useWindowDimensions" /* 1499 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1633 */;
import asyncRequire from "asyncRequire" /* 2002 */;
import ColorUtils from "ColorUtils" /* 4968 */;
import timing from "timing" /* 5206 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import HapticUtils from "HapticUtils" /* 5212 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5213 */;
import BurstReactionAnimationPreviewDefault from "BurstReactionAnimationPreview" /* 5224 */;
import MessageReactionsTypes from "MessageReactionsTypes" /* 5225 */;
import Text_Text from "Text/Text" /* 5234 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5265 */;
import BottomSheetModal from "BottomSheetModal" /* 5269 */;
import ExpressionSourceRecord from "ExpressionSourceRecord" /* 6884 */;
import FastListDefault from "FastList" /* 7167 */;
import EmojiDefault from "Emoji" /* 7227 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7253 */;
import ReactionActionCreators from "ReactionActionCreators" /* 8286 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8668 */;
import generated_NoResults from "generated/NoResults" /* 8723 */;
import useEmojiColorPalette2 from "useEmojiColorPalette" /* 9983 */;
import SwipeableFastListDefault from "SwipeableFastList" /* 9987 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4972 */;
import ChannelStore from "ChannelStore" /* 4823 */;
import GuildMemberStore from "GuildMemberStore" /* 4883 */;
import MessageReactionsStore from "MessageReactionsStore" /* 8285 */;
import PermissionStore from "PermissionStore" /* 4903 */;
import Constants from "Constants" /* 1087 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5052 */;
import createStyles_mod from "createStyles" /* 4971 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ReactionActionCreatorsAll = ReactionActionCreators;
let BottomSheet, _require, c38, channel, dependencyMap, importDefault, member, obj1, obj12, obj13, set, tmp14Result1, tmp4Result1, tmp4Result2;

let Platform;
let c9;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj10;
let obj11;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let tmp;
const useEmojiAndSource2 = tmp(9944);
function RemoveAllButton(channelId) {
  let View;
  let _undefined;
  let c5;
  let c6;
  let intl;
  let items4;
  let items5;
  let obj9;
  let reactionSelectedIndex;
  let require;
  ({ reactions: require, reactionSelectedIndex } = channelId);
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  react = undefined;
  c6 = undefined;
  let callback;
  let tmp = closure_22();
  let obj = require("get initialized");
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const useReducedMotion = AccessibilityStore.useReducedMotion;
  const tmp6 = reactionSelectedIndex(messageId[41])(stateFromStores);
  [c5, c6] = useReducedMotion(react.useState(true), 2);
  const tmp7 = useReducedMotion(react.useState(true), 2);
  let obj2 = require("ReanimatedRexport");
  const sharedValue = obj2.useSharedValue(64);
  const fn = function b() {
    let withTimingResult;
    const tmp = useReducedMotion;
    if (tmp) {
      withTimingResult = sharedValue.get();
    } else {
      const obj = timing;
      withTimingResult = obj.withTiming(sharedValue.get(), { duration: 200 });
    }
    return { maxWidth: withTimingResult };
  };
  const obj3 = require("ReanimatedRexport");
  fn.__closure = { useReducedMotion, buttonWidth: sharedValue, withTiming: require("timing").withTiming };
  fn.__workletHash = 16499689496895;
  fn.__initData = __initData;
  ({ useReducedMotion, buttonWidth: sharedValue, withTiming: require("timing").withTiming });
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const obj5 = require("ReanimatedRexport");
  const sharedValue1 = obj5.useSharedValue(0);
  const obj6 = require("ReanimatedRexport");
  class R {
    constructor() {
      let withTimingResult;
      const tmp = useReducedMotion;
      if (tmp) {
        withTimingResult = sharedValue1.get();
      } else {
        const obj = timing;
        withTimingResult = obj.withTiming(sharedValue1.get(), { duration: 125 });
      }
      return { opacity: withTimingResult, color: "white", fontSize: 14, marginLeft: 8, textAlignVertical: "center" };
    }
  }
  R.__closure = { useReducedMotion, textOpacity: sharedValue1, withTiming: require("timing").withTiming };
  R.__workletHash = 8698187840986;
  R.__initData = __initData2;
  const items2 = [sharedValue, sharedValue1];
  ({ useReducedMotion, textOpacity: sharedValue1, withTiming: require("timing").withTiming });
  const animatedStyle1 = obj6.useAnimatedStyle(R);
  callback = react.useCallback(() => {
    _undefined(true);
    const result = sharedValue.set(32);
    const result1 = sharedValue1.set(0);
  }, items2);
  const items3 = [reactionSelectedIndex, callback];
  const effect = react.useEffect(() => {
    callback();
  }, items3);
  let tmp14 = null;
  if (tmp6) {
    const obj8 = {
      onPress() {
          const tmp = c5;
          if (tmp) {
            _undefined(false);
            set = sharedValue.set;
            const obj2 = useWindowDimensions;
            const result = set(obj2.getWindowDimensions().width);
            const result1 = sharedValue1.set(1);
          } else {
            const obj = ReactionActionCreatorsAll;
            obj.removeEmojiReactions(channelId, messageId, _require[reactionSelectedIndex].emoji);
            callback();
          }
        },
      children: closure_19(View, obj9)
    };
    obj9 = { style: items4, children: items5 };
    items4 = [tmp.removeAllButton, animatedStyle];
    View = tmp5(tmp3[11]).View;
    const obj10 = { color: reactionSelectedIndex(messageId[14]).unsafe_rawColors.WHITE, size: "sm" };
    const TrashIcon = tmp2(tmp3[44]).TrashIcon;
    items5 = [closure_18(TrashIcon, obj10), ];
    const obj11 = { style: animatedStyle1, variant: "text-sm/semibold", color: "text-overlay-light", children: intl.string(require("intl").t["zx/e4P"]) };
    intl = tmp2(tmp3[36]).intl;
    items5[1] = closure_18(closure_20, obj11);
    tmp14 = closure_18(sharedValue, obj8);
  }
  return tmp14;
}
function EmojiOptionsButton(channelId) {
  let canRemoveReactions;
  let intl;
  let items3;
  let reactionSelectedIndex;
  let reactions;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  let flag = channelId.isEmojiPack;
  ({ reactions, reactionSelectedIndex } = channelId);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_22();
  let obj = channelId(504);
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const tmp3 = messageId(9984)(stateFromStores);
  dependencyMap = tmp3;
  const reaction = tmp4;
  const items2 = [channelId, messageId, reactions[reactionSelectedIndex], tmp3, flag];
  let obj2 = {
    onPress: react.useCallback(() => {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { channelId, messageId, reaction, canRemoveReactions, isEmojiPack: flag };
      obj.openLazy(asyncRequire(9985, dependencyMap.paths), "ReactionEmojiOptionsActionSheet", obj2, "replaceTopSheet");
    }, items2),
    style: tmp.emojiOptionsButton,
    children: items3
  };
  const obj3 = { variant: "text-xs/semibold", color: "text-subtle", children: intl.string(channelId(1128).t.pCaYID) };
  const Text = channelId(5234).Text;
  intl = channelId(1128).intl;
  items3 = [closure_18(Text, obj3), ];
  const obj4 = { color: messageId(587).colors.ICON_SUBTLE, size: "xs" };
  const ChevronSmallRightIcon = channelId(7305).ChevronSmallRightIcon;
  items3[1] = closure_18(ChevronSmallRightIcon, obj4);
  return closure_19(closure_7, obj2);
}
let react = react_mod;
({ ActivityIndicator: metroRequire, Platform, Pressable: metroImportDefault, StyleSheet: metroImportAll, View: c9 } = react_native);
const EmojiSourceDataTypes = ExpressionSourceRecord.EmojiSourceDataTypes;
({ DEFAULT_NUM_REACTION_USERS: closure_16, Permissions: closure_17 } = Constants);
({ jsx: closure_18, jsxs: closure_19 } = Fragment);
let closure_20 = ReanimatedRexport.createAnimatedComponent(Text_Text.Text);
let c21 = 48;
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, containerEmpty: obj2, listRow: obj3, tabContainer: obj4, tabContainerSelected: obj5, tab: { padding: 0, marginHorizontal: 8, marginBottom: 8 }, tabSelected: { borderBottomColor: "transparent" }, tabActive: obj6, reactionTab: { display: "flex", flexDirection: "column" }, removeButtonContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, emojiOptionsButton: obj7, removeAllButton: obj8, reactionCountText: obj9, reactionCountTextSelected: obj10, emoji: { marginRight: 8 }, emojiText: obj11, emojiImage: { resizeMode: "contain", width: 24, height: 24 }, emojiTextIdentifier: { padding: 16 }, avatar: { marginRight: 10 }, buttonRow: { flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }, loadingSpinner: { height: 48, padding: 6 } };
obj2 = { padding: 32, borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj3 = { height: 48, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj4 = { flexDirection: "row", alignItems: "center", borderRadius: nativeDefault.radii.sm, padding: 8, marginTop: 8 };
obj5 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED };
obj6 = { borderRadius: nativeDefault.radii.sm };
obj7 = { flexDirection: "row", alignItems: "center", marginRight: nativeDefault.space.PX_16, gap: 2 };
obj8 = { backgroundColor: nativeDefault.colors.STATUS_DANGER, borderRadius: nativeDefault.radii.xxl, height: 32, overflow: "hidden", minWidth: 42, marginRight: 20, display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 12 };
obj9 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj10 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj11 = { lineHeight: 24, fontSize: 20, textAlign: "center", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_22 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanManageMessages(channelId) {
  let first;
  let tmp6;
  let tmp7;
  _require = channelId;
  let obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function o() {
      const obj = { channelId };
      return PermissionStore.canWithPartialContext(constants.MANAGE_MESSAGES, obj);
    };
    const items1 = [channelId];
    cResult[1] = channelId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6, tmp7);
}) : (function useCanManageMessages(channelId) {
  _require = channelId;
  let obj = require("get initialized");
  const items = [PermissionStore];
  const items1 = [channelId];
  return obj.useStateFromStores(items, () => {
    const obj = { channelId };
    return PermissionStore.canWithPartialContext(constants.MANAGE_MESSAGES, obj);
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? (function useReactionSelected(reactions) {
  let obj = reactions(576);
  const cResult = obj.c(7);
  reactions = reactions.reactions;
  const emoji = reactions.emoji;
  const isSelectedBurst = reactions.isSelectedBurst;
  let tmp2 = undefined !== isSelectedBurst && isSelectedBurst;
  let closure_2 = tmp2;
  if (cResult[0] === emoji) {
    if (cResult[1] === tmp2) {
      let tmp3;
      if (cResult[2] === reactions) {
        tmp3 = cResult[3];
      }
      let tmp4 = react;
      let num = 2;
      const tmp6 = _slicedToArray(react.useState(tmp3), 2);
      const _Math = Math;
      const tmp7 = tmp6[1];
      const bound = Math.min(tmp6[0], reactions.length - 1);
      if (cResult[4] === reactions[bound]) {
        let tmp11;
        if (cResult[5] === bound) {
          tmp11 = cResult[6];
        }
        return tmp11;
      }
      const obj2 = { reactionSelected: reactions[bound], reactionSelectedIndex: bound, setReactionSelectedIndex: tmp7 };
      cResult[4] = reactions[bound];
      cResult[5] = bound;
      cResult[6] = obj2;
      tmp11 = obj2;
    }
  }
  const fn = function c() {
    if (null == emoji) {
      return 0;
    } else {
      const findIndexResult = reactions.findIndex((emoji) => {
        let tmp4;
        const obj = reactions(dependencyMap[18]);
        const emojiEqualsResult = obj.emojiEquals(emoji.emoji, emoji);
        let num = emoji.burst_count;
        if (num == null) {
          num = 0;
        }
        let tmp2 = num > 0;
        const tmp3 = closure_1_2;
        if (tmp3) {
          if (tmp2) {
            tmp2 = emojiEqualsResult;
          }
          tmp4 = tmp2;
        } else {
          tmp4 = !tmp2 && emojiEqualsResult;
        }
        return tmp4;
      });
      let num = 0;
      if (findIndexResult >= 0) {
        num = findIndexResult;
      }
      return num;
    }
  };
  cResult[0] = emoji;
  cResult[1] = tmp2;
  cResult[2] = reactions;
  cResult[3] = fn;
  tmp3 = fn;
}) : (function useReactionSelected(reactions) {
  let isSelectedBurst;
  reactions = reactions.reactions;
  ({ emoji: importDefault, isSelectedBurst } = reactions);
  if (isSelectedBurst === undefined) {
    isSelectedBurst = false;
  }
  const tmp = _slicedToArray(react.useState(() => {
    if (null == importDefault) {
      return 0;
    } else {
      const findIndexResult = reactions.findIndex((emoji) => {
        let tmp4;
        const obj = reactions(dependencyMap[18]);
        const emojiEqualsResult = obj.emojiEquals(emoji.emoji, closure_1_1);
        let num = emoji.burst_count;
        if (num == null) {
          num = 0;
        }
        let tmp2 = num > 0;
        const tmp3 = isSelectedBurst;
        if (tmp3) {
          if (tmp2) {
            tmp2 = emojiEqualsResult;
          }
          tmp4 = tmp2;
        } else {
          tmp4 = !tmp2 && emojiEqualsResult;
        }
        return tmp4;
      });
      let num = 0;
      if (findIndexResult >= 0) {
        num = findIndexResult;
      }
      return num;
    }
  }), 2);
  let tmp2 = tmp[1];
  const bound = Math.min(tmp[0], reactions.length - 1);
  let obj = { reactionSelected: reactions[bound], reactionSelectedIndex: bound, setReactionSelectedIndex: tmp2 };
  return obj;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useReactors(channelId) {
  let first;
  let reactionType;
  const obj = channelId(reactionType[16]);
  const cResult = obj.c(10);
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const reaction = channelId.reaction;
  reactionType = channelId.reactionType;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [MessageReactionsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channelId) {
    if (cResult[2] === messageId) {
      if (cResult[3] === reaction.emoji) {
        let tmp6;
        let tmp7;
        let tmp13;
        if (cResult[4] === reactionType) {
          tmp6 = cResult[5];
          tmp7 = cResult[6];
        }
        const tmpResult = channelId(reactionType[17]);
        const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7, messageId(tmp2[19]));
        if (reactionType === channelId(reactionType[20]).ReactionTypes.VOTE) {
          const count_details = reaction.count_details;
          let num2;
          if (count_details != null) {
            num2 = count_details.vote;
          }
          if (num2 == null) {
            num2 = 0;
          }
          tmp13 = num2;
        } else {
          tmp13 = reactionType === tmp(tmp2[20]).ReactionTypes.BURST ? reaction.burst_count : reaction.count;
        }
        if (cResult[7] === stateFromStores) {
          let tmp16;
          if (cResult[8] === tmp13 > stateFromStores.length) {
            tmp16 = cResult[9];
          }
          return tmp16;
        }
        const obj2 = { reactors: stateFromStores, reactorsHasMore: tmp13 > stateFromStores.length };
        cResult[7] = stateFromStores;
        cResult[8] = tmp13 > stateFromStores.length;
        cResult[9] = obj2;
        tmp16 = obj2;
      }
    }
  }
  const fn = function o() {
    const reactions = MessageReactionsStore.getReactions(channelId, messageId, reaction.emoji, closure_16, reactionType);
    let items;
    const _Array = Array;
    if (reactions != null) {
      items = reactions.values();
    }
    if (items == null) {
      items = [];
    }
    return from(items);
  };
  const items1 = [channelId, messageId, reaction.emoji, reactionType];
  cResult[1] = channelId;
  cResult[2] = messageId;
  cResult[3] = reaction.emoji;
  cResult[4] = reactionType;
  cResult[5] = fn;
  cResult[6] = items1;
  tmp7 = items1;
  tmp6 = fn;
}) : (function useReactors(channelId) {
  let tmp3;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const reaction = channelId.reaction;
  const reactionType = channelId.reactionType;
  let items = [MessageReactionsStore];
  const items1 = [channelId, messageId, reaction.emoji, reactionType];
  const obj = channelId(reactionType[17]);
  const stateFromStores = obj.useStateFromStores(items, () => {
    const reactions = MessageReactionsStore.getReactions(channelId, messageId, reaction.emoji, closure_16, reactionType);
    let items;
    const _Array = Array;
    if (reactions != null) {
      items = reactions.values();
    }
    if (items == null) {
      items = [];
    }
    return from(items);
  }, items1, messageId(reactionType[19]));
  const obj2 = { reactors: stateFromStores, reactorsHasMore: tmp3 > stateFromStores.length };
  const tmp = channelId;
  const tmp2 = reactionType;
  if (reactionType === channelId(reactionType[20]).ReactionTypes.VOTE) {
    const count_details = reaction.count_details;
    let num;
    if (count_details != null) {
      num = count_details.vote;
    }
    if (num == null) {
      num = 0;
    }
    tmp3 = num;
  } else {
    tmp3 = reactionType === tmp(tmp2[20]).ReactionTypes.BURST ? reaction.burst_count : reaction.count;
  }
  return obj2;
});
let closure_25 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useReactorsOnScrollNative(channelId) {
  let reactors;
  let reactorsHasMore;
  let ref;
  let tmp = reactorsHasMore;
  let obj = channelId(reactorsHasMore[16]);
  const cResult = obj.c(13);
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const reactionSelected = channelId.reactionSelected;
  ({ reactors, reactorsHasMore } = channelId);
  const reactionType = channelId.reactionType;
  let obj2 = react;
  react = react.useRef(false);
  let id = null;
  if (reactors.length > 0) {
    id = reactors[reactors.length - 1].id;
  }
  if (cResult[0] === channelId) {
    if (cResult[1] === messageId) {
      if (cResult[2] === reactionSelected) {
        if (cResult[3] === reactionType) {
          if (cResult[4] === id) {
            let tmp4;
            let tmp7;
            let tmp6;
            let tmp10;
            let tmp13;
            if (cResult[5] === reactorsHasMore) {
              tmp4 = cResult[6];
            }
            const current = tmp4;
            let closure_8 = obj2.useRef(tmp4);
            if (cResult[7] !== tmp4) {
              const fn2 = function p() {
                closure_8.current = current;
              };
              const items = [tmp4];
              cResult[7] = tmp4;
              cResult[8] = fn2;
              cResult[9] = items;
              tmp7 = items;
              tmp6 = fn2;
            } else {
              tmp6 = cResult[8];
              tmp7 = cResult[9];
            }
            const effect = obj2.useEffect(tmp6, tmp7);
            const _Symbol = Symbol;
            if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
              const fn3 = function y() {
                const obj = _modDef12;
                return obj.debounce((AUTO_DISMISS, current) => ref.current(AUTO_DISMISS, current), 16);
              };
              cResult[10] = fn3;
              tmp10 = fn3;
            } else {
              tmp10 = cResult[10];
            }
            const tmp12 = messageId(tmp[23])(tmp10);
            let closure_9 = tmp12;
            const tmp11 = messageId;
            if (cResult[11] !== tmp12) {
              class E {
                constructor() {
                  return (nativeEvent) => {
                    nativeEvent = nativeEvent.nativeEvent;
                    return closure_1_9(nativeEvent.contentOffset.y, nativeEvent.contentSize.height);
                  };
                }
              }
              cResult[11] = tmp12;
              cResult[12] = E;
              tmp13 = E;
            } else {
              class E {
                constructor() {
                  return (nativeEvent) => {
                    nativeEvent = nativeEvent.nativeEvent;
                    return closure_1_9(nativeEvent.contentOffset.y, nativeEvent.contentSize.height);
                  };
                }
              }
            }
            return tmp11(tmp[23])(tmp13);
          }
        }
      }
    }
  }
  const fn = function o(arg0, arg1) {
    const tmp = arg0 / arg1 > 0.75 && reactorsHasMore && !ref.current;
    if (tmp) {
      ref.current = true;
      const obj2 = { channelId, messageId, emoji: reactionSelected.emoji, limit, after: id, type: reactionType };
      const obj = ReactionActionCreatorsAll;
      const reactors = obj.getReactors(obj2);
      reactors.then(() => {
        ref.current = false;
      });
    }
  };
  cResult[0] = channelId;
  cResult[1] = messageId;
  cResult[2] = reactionSelected;
  cResult[3] = reactionType;
  cResult[4] = id;
  cResult[5] = reactorsHasMore;
  cResult[6] = fn;
  tmp4 = fn;
}) : (function useReactorsOnScrollNative(channelId) {
  let reactors;
  let reactorsHasMore;
  let ref;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const reactionSelected = channelId.reactionSelected;
  ({ reactors, reactorsHasMore } = channelId);
  const reactionType = channelId.reactionType;
  react = undefined;
  let current;
  let closure_8;
  let closure_9;
  let obj = react;
  react = react.useRef(false);
  let id = null;
  if (reactors.length > 0) {
    id = reactors[reactors.length - 1].id;
  }
  const items = [channelId, messageId, reactionSelected, reactorsHasMore, id, reactionType];
  current = obj.useCallback((arg0, arg1) => {
    const tmp = arg0 / arg1 > 0.75 && reactorsHasMore && !ref.current;
    if (tmp) {
      ref.current = true;
      const obj2 = { channelId, messageId, emoji: reactionSelected.emoji, limit, after: id, type: reactionType };
      const obj = ReactionActionCreatorsAll;
      const reactors = obj.getReactors(obj2);
      reactors.then(() => {
        ref.current = false;
      });
    }
  }, items);
  closure_8 = obj.useRef(current);
  const items1 = [current];
  const effect = obj.useEffect(() => {
    closure_8.current = current;
  }, items1);
  closure_9 = messageId(reactorsHasMore[23])(() => {
    const obj = _modDef12;
    return obj.debounce((AUTO_DISMISS, current) => ref.current(AUTO_DISMISS, current), 16);
  });
  return messageId(reactorsHasMore[23])(() => (nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    return closure_1_9(nativeEvent.contentOffset.y, nativeEvent.contentSize.height);
  });
});
let closure_26 = tmp7;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? (function useRenderFooter(arg0, arg1) {
  let length;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("react");
  const cResult = obj.c(4);
  const tmp2 = closure_22();
  const loadingSpinner = tmp2;
  if (cResult[0] === arg0) {
    if (cResult[1] === arg1) {
      let tmp3;
      if (cResult[2] === tmp2) {
        tmp3 = cResult[3];
      }
      return tmp3;
    }
  }
  const fn = function o() {
    let tmp3;
    const tmp = closure_1;
    if (tmp) {
      const obj = { style: loadingSpinner.loadingSpinner, size: "large" };
      tmp3 = authStore4(metroRequire, obj);
    } else {
      tmp3 = null;
    }
    return tmp3;
  };
  cResult[0] = arg0;
  cResult[1] = arg1;
  cResult[2] = tmp2;
  cResult[3] = fn;
  tmp3 = fn;
}) : (function useRenderFooter(arg0, arg1) {
  let length;
  let closure_1 = arg1;
  let tmp = closure_22();
  const loadingSpinner = tmp;
  const items = [arg0, arg1, tmp];
  return react.useCallback(() => {
    let tmp3;
    const tmp = closure_1;
    if (tmp) {
      const obj = { style: loadingSpinner.loadingSpinner, size: "large" };
      tmp3 = authStore4(metroRequire, obj);
    } else {
      tmp3 = null;
    }
    return tmp3;
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_28 = ReactCompilerGating.isReactCompilerEnabled() ? (function useRenderItem(arg0, arg1, arg2, burst_count, arg4) {
  let closure_0;
  let closure_1;
  let closure_5;
  _require = arg0;
  importDefault = arg1;
  let closure_2 = arg2;
  dependencyMap = burst_count;
  let closure_4 = arg4;
  let obj = require("react");
  const cResult = obj.c(10);
  let tmp2 = closure_22();
  react = tmp2;
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  if (cResult[0] === arg4) {
    if (cResult[1] === analyticsLocations) {
      if (cResult[2] === arg2) {
        if (cResult[3] === arg1) {
          if (cResult[4] === burst_count.burst_count) {
            if (cResult[5] === burst_count.emoji) {
              if (cResult[6] === arg0) {
                if (cResult[7] === tmp2.avatar) {
                  let tmp3;
                  if (cResult[8] === tmp2.listRow) {
                    tmp3 = cResult[9];
                  }
                  return tmp3;
                }
              }
            }
          }
        }
      }
    }
  }
  class S {
    constructor(arg0, arg1) {
      obj = closure_0[arg1];
      closure_0 = obj;
      id = obj.id;
      diff = closure_0.length - 1;
      tmp2 = NORMAL;
      channel = closure_1_12.getChannel(NORMAL);
      guildId = null;
      if (null != channel) {
        guildId = channel.getGuildId();
      }
      tmp4 = closure_1;
      tmp5 = closure_3;
      obj3 = closure_1(closure_3[25]);
      nickname = obj3.getNickname(guildId, tmp2, obj);
      if (nickname == null) {
        tmp4Result = tmp4(tmp5[26]);
        nickname = tmp4Result.getGlobalName(obj);
      }
      member = null;
      if (null != guildId) {
        tmp8 = closure_1_13;
        member = closure_1_13.getMember(guildId, id);
      }
      if (closure_3.burst_count > 0) {
        tmp11 = closure_0;
        NORMAL = closure_0(tmp5[20]).ReactionTypes.BURST;
        tmp10 = closure_0;
      } else {
        tmp9 = closure_0;
        NORMAL = closure_0(tmp5[20]).ReactionTypes.NORMAL;
        tmp10 = closure_0;
      }
      obj1 = { style: closure_5.listRow, children: null };
      tmp14 = closure_1_18;
      tmp12 = closure_1_19;
      tmp13 = closure_1_9;
      tmp4Result1 = tmp4(tmp5[28]);
      obj11 = { style: closure_5.avatar, size: null, source: null };
      Avatar = tmp10(tmp5[29]).Avatar;
      obj11.size = tmp10(tmp5[29]).AvatarSizes.SMALL;
      avatarSource = obj.getAvatarSource(guildId);
      guildMemberAvatarSource = avatarSource;
      if (null != guildId) {
        avatar = undefined;
        if (member != null) {
          avatar = member.avatar;
        }
        guildMemberAvatarSource = avatarSource;
        if (null != avatar) {
          tmp4Result2 = tmp4(tmp5[30]);
          guildMemberAvatarSource = tmp4Result2.getGuildMemberAvatarSource(member, obj);
        }
      }
      obj12 = { leading: tmp14(Avatar, obj11), label: tmp14(tmp4(tmp5[31]), { user: obj, nick: nickname }), trailing: null, onPress: null, onLongPress: null };
      obj11.source = guildMemberAvatarSource;
      tmp14Result = null;
      if (closure_4) {
        tmp10Result = tmp10(tmp5[32]);
        tmp14Result = null;
        if (tmp10Result.isAndroid()) {
          tmp20 = closure_1_7;
          obj13 = { onPress: null, children: null };
          obj13.onPress = function onPress() { /* body not rendered: F146917 */ };
          obj13.children = tmp14(tmp10(tmp5[33]).XSmallIcon, {});
          tmp14Result = tmp14(closure_1_7, obj13);
        }
      }
      openProfile = function openProfile() { /* body not rendered: F146916 */ };
      obj12.trailing = tmp14Result;
      obj12.onPress = openProfile;
      obj12.onLongPress = openProfile;
      items = [, ];
      items[0] = tmp14(tmp4Result1, obj12);
      tmp14Result1 = null;
      if (arg1 !== diff) {
        tmp14Result1 = tmp14(tmp4(tmp5[34]), {});
      }
      items[1] = tmp14Result1;
      obj1.children = items;
      return tmp12(tmp13, obj1);
    }
  }
  cResult[0] = arg4;
  cResult[1] = analyticsLocations;
  cResult[2] = arg2;
  cResult[3] = arg1;
  cResult[4] = burst_count.burst_count;
  cResult[5] = burst_count.emoji;
  cResult[6] = arg0;
  cResult[7] = tmp2.avatar;
  cResult[8] = tmp2.listRow;
  cResult[9] = S;
  tmp3 = S;
}) : (function useRenderItem(arg0, arg1, arg2, arg3, arg4) {
  let burst_count;
  let closure_1;
  let closure_5;
  let closure_0 = arg0;
  importDefault = arg1;
  let closure_2 = arg2;
  dependencyMap = arg3;
  let closure_4 = arg4;
  let tmp = closure_22();
  react = tmp;
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  let items = [arg0, arg2, arg4, arg1, arg3, tmp, analyticsLocations];
  return react.useCallback((arg0, arg1) => {
    let NORMAL;
    let channelId;
    let emoji;
    let guildMemberAvatarSource;
    let items;
    let openProfile;
    let tmp10;
    let tmp14Result;
    let user;
    user = user[arg1];
    const id = user.id;
    const diff = user.length - 1;
    channel = channel.getChannel(NORMAL);
    let guildId = null;
    const tmp2 = NORMAL;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    const obj3 = messageId(burst_count[25]);
    let nickname = obj3.getNickname(guildId, tmp2, user);
    if (nickname == null) {
      const tmp4Result = messageId(burst_count[26]);
      nickname = tmp4Result.getGlobalName(user);
    }
    member = null;
    if (null != guildId) {
      member = member.getMember(guildId, id);
    }
    if (burst_count.burst_count > 0) {
      NORMAL = closure_0(tmp5[20]).ReactionTypes.BURST;
      tmp10 = closure_0;
    } else {
      NORMAL = closure_0(tmp5[20]).ReactionTypes.NORMAL;
      tmp10 = closure_0;
    }
    const obj2 = { style: closure_5.listRow, children: items };
    const obj4 = { style: closure_5.avatar, size: tmp10(burst_count[29]).AvatarSizes.SMALL, source: guildMemberAvatarSource };
    const tmp4Result3 = messageId(burst_count[28]);
    const Avatar = tmp10(tmp5[29]).Avatar;
    const avatarSource = user.getAvatarSource(guildId);
    guildMemberAvatarSource = avatarSource;
    const tmp12 = closure_1_19;
    const tmp13 = closure_1_9;
    if (null != guildId) {
      let avatar;
      if (member != null) {
        avatar = member.avatar;
      }
      guildMemberAvatarSource = avatarSource;
      if (null != avatar) {
        const tmp4Result4 = messageId(burst_count[30]);
        guildMemberAvatarSource = tmp4Result4.getGuildMemberAvatarSource(member, user);
      }
    }
    const obj5 = { leading: closure_1_18(Avatar, obj4), label: closure_1_18(messageId(burst_count[31]), { user, nick: nickname }), trailing: tmp14Result, onPress: openProfile, onLongPress: openProfile };
    tmp14Result = null;
    if (closure_4) {
      tmp14Result = null;
      const tmp10Result = tmp10(burst_count[32]);
      if (tmp10Result.isAndroid()) {
        const obj6 = {
          onPress() {
                const tmp = ReactionActionCreators;
                obj = { channelId, messageId, emoji: emoji.emoji, location: ReactionActionCreators.ReactionLocations.MESSAGE, userId: obj.id, options: { burst: NORMAL === MessageReactionsTypes.ReactionTypes.BURST } };
                const removeReaction = tmp.removeReaction;
                ({ burst: NORMAL === MessageReactionsTypes.ReactionTypes.BURST });
                return removeReaction(obj);
              },
          children: closure_1_18(tmp10(burst_count[33]).XSmallIcon, {})
        };
        tmp14Result = tmp14(closure_1_7, obj6);
      }
    }
    openProfile = function openProfile() {
      let localUser;
      localUser = { userId: id, channelId, messageId, localUser, sourceAnalyticsLocations: analyticsLocations };
      showUserProfileActionSheetDefault(localUser, "stack");
    };
    items = [closure_1_18(tmp4Result3, obj5), ];
    let tmp14Result2 = null;
    if (arg1 !== diff) {
      tmp14Result2 = tmp14(tmp4(tmp5[34]), {});
    }
    items[1] = tmp14Result2;
    return tmp12(tmp13, obj2);
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? (function useRenderQuickActions(arg0, arg1, burst_count, arg3) {
  let closure_0;
  let closure_3;
  let height;
  _require = arg0;
  let closure_1 = arg1;
  dependencyMap = arg3;
  let obj = require("react");
  const cResult = obj.c(7);
  const tmp2 = closure_22();
  const buttonRow = tmp2;
  if (cResult[0] === arg0) {
    if (cResult[1] === arg1) {
      if (cResult[2] === burst_count.burst_count) {
        if (cResult[3] === burst_count.emoji) {
          if (cResult[4] === arg3) {
            let tmp3;
            if (cResult[5] === tmp2.buttonRow) {
              tmp3 = cResult[6];
            }
            return tmp3;
          }
        }
      }
    }
  }
  const fn = function s(arg0, arg1) {
    let emoji;
    let intl;
    let obj2;
    let tmp5;
    const channelId = closure_3[arg1];
    if (burst_count.burst_count > 0) {
      let NORMAL = channelId(closure_3[20]).ReactionTypes.BURST;
    } else {
      let tmp = channelId;
      NORMAL = channelId(closure_3[20]).ReactionTypes.NORMAL;
    }
    let obj = { style: buttonRow.buttonRow, children: closure_1_18(tmp5, obj2) };
    obj2 = {
      title: intl.string(channelId(closure_3[36]).t.N86XcP),
      IconComponent: channelId(closure_3[33]).XSmallIcon,
      color: messageId(closure_3[14]).unsafe_rawColors.RED_400,
      onPress() {
        const tmp = ReactionActionCreators;
        const removeReaction = tmp.removeReaction;
        const obj = { channelId, messageId, emoji: emoji.emoji, location: ReactionActionCreators.ReactionLocations.MESSAGE, userId: channelId.id, options: { burst: NORMAL === MessageReactionsTypes.ReactionTypes.BURST } };
        ({ burst: NORMAL === MessageReactionsTypes.ReactionTypes.BURST });
        return removeReaction(obj);
      },
      height
    };
    tmp5 = messageId(closure_3[35]);
    intl = channelId(closure_3[36]).intl;
    return closure_1_18(closure_1_9, obj);
  };
  cResult[0] = arg0;
  cResult[1] = arg1;
  cResult[2] = burst_count.burst_count;
  cResult[3] = burst_count.emoji;
  cResult[4] = arg3;
  cResult[5] = tmp2.buttonRow;
  cResult[6] = fn;
  tmp3 = fn;
}) : (function useRenderQuickActions(arg0, arg1, arg2, arg3) {
  let height;
  let closure_0 = arg0;
  let closure_1 = arg1;
  const burst_count = arg2;
  let closure_3 = arg3;
  let tmp = closure_22();
  const buttonRow = tmp;
  const items = [arg3, arg0, arg1, arg2, tmp];
  return react.useCallback((arg0, arg1) => {
    let emoji;
    let intl;
    let obj2;
    let tmp5;
    const channelId = closure_3[arg1];
    if (burst_count.burst_count > 0) {
      let NORMAL = channelId(closure_3[20]).ReactionTypes.BURST;
    } else {
      let tmp = channelId;
      NORMAL = channelId(closure_3[20]).ReactionTypes.NORMAL;
    }
    let obj = { style: buttonRow.buttonRow, children: closure_1_18(tmp5, obj2) };
    obj2 = {
      title: intl.string(channelId(closure_3[36]).t.N86XcP),
      IconComponent: channelId(closure_3[33]).XSmallIcon,
      color: messageId(closure_3[14]).unsafe_rawColors.RED_400,
      onPress() {
        const tmp = ReactionActionCreators;
        const removeReaction = tmp.removeReaction;
        const obj = { channelId, messageId, emoji: emoji.emoji, location: ReactionActionCreators.ReactionLocations.MESSAGE, userId: channelId.id, options: { burst: NORMAL === MessageReactionsTypes.ReactionTypes.BURST } };
        ({ burst: NORMAL === MessageReactionsTypes.ReactionTypes.BURST });
        return removeReaction(obj);
      },
      height
    };
    tmp5 = messageId(closure_3[35]);
    intl = channelId(closure_3[36]).intl;
    return closure_1_18(closure_1_9, obj);
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_30 = ReactCompilerGating.isReactCompilerEnabled() ? (function ReactionTab(arg0) {
  let animated;
  let items1;
  let reaction;
  let selected;
  let tmp13;
  let tmp15;
  let tmp16;
  let tmp6;
  let tmpResult3;
  let useReducedMotion;
  const obj = react2;
  const cResult = obj.c(43);
  ({ reaction, selected } = arg0);
  const tmp4 = closure_22();
  if (cResult[0] !== reaction.burst_colors) {
    let burst_colors = reaction.burst_colors;
    if (burst_colors == null) {
      burst_colors = [];
    }
    cResult[0] = reaction.burst_colors;
    cResult[1] = burst_colors;
    tmp6 = burst_colors;
  } else {
    tmp6 = cResult[1];
  }
  const tmpResult = useEmojiColorPalette2;
  const emojiColorPalette = tmpResult.useEmojiColorPalette(tmp6);
  if (cResult[2] !== emojiColorPalette) {
    let accentColor;
    if (emojiColorPalette != null) {
      accentColor = emojiColorPalette.accentColor;
    }
    let tmp12 = null;
    if (null != accentColor) {
      tmp12 = { color: emojiColorPalette.accentColor };
      const obj2 = { color: emojiColorPalette.accentColor };
    }
    cResult[2] = emojiColorPalette;
    cResult[3] = tmp12;
  }
  if (cResult[4] !== emojiColorPalette) {
    let tmp14 = null;
    if (null != emojiColorPalette) {
      const obj3 = { backgroundColor: tmpResult3.hexOpacityToRgba(emojiColorPalette.backgroundColor, emojiColorPalette.opacity) };
      tmp14 = obj3;
      tmpResult3 = ColorUtils;
    }
    cResult[4] = emojiColorPalette;
    cResult[5] = tmp14;
    tmp13 = tmp14;
  } else {
    tmp13 = cResult[5];
  }
  const emoji = reaction.emoji;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    class I {
      constructor() {
        return closure_1_10.useReducedMotion;
      }
    }
    cResult[6] = items;
    cResult[7] = I;
    tmp16 = I;
    tmp15 = items;
  } else {
    tmp15 = cResult[6];
    tmp16 = cResult[7];
  }
  const tmpResult4 = get_initialized;
  const stateFromStores = tmpResult4.useStateFromStores(tmp15, tmp16);
  const AnimateEmoji = tmp(4799).AnimateEmoji;
  const tmp19 = !stateFromStores && AnimateEmoji.useSetting();
  if (cResult[8] === emoji.animated) {
    if (cResult[9] === emoji.id) {
      let tmp20;
      if (cResult[10] === tmp19) {
        tmp20 = cResult[11];
      }
      class I {
        constructor() {
          return closure_1_10.useReducedMotion;
        }
      }
      let tmp26 = null;
      if (selected) {
        tmp26 = null;
        if (reaction.burst_count > 0) {
          tmp26 = tmp13;
        }
      }
      if (cResult[12] === tmp4.tabContainer) {
        if (cResult[13] === null) {
          let tmp27;
          if (cResult[14] === tmp26) {
            tmp27 = cResult[15];
          }
          let name = emoji.id;
          if (name == null) {
            name = emoji.name;
          }
          class I {
            constructor() {
              return closure_1_10.useReducedMotion;
            }
          }
          if (cResult[18] === tmp4.emoji) {
            let tmp29;
            if (cResult[19] === tmp4.emojiText) {
              tmp29 = cResult[20];
            }
            if (cResult[21] === tmp4.emoji) {
              let tmp30;
              if (cResult[22] === tmp4.emojiImage) {
                tmp30 = cResult[23];
              }
              if (cResult[24] === emoji.name) {
                if (cResult[25] === tmp20) {
                  if (cResult[26] === tmp29) {
                    let tmp31;
                    if (cResult[27] === tmp30) {
                      tmp31 = cResult[28];
                    }
                    let prop = null;
                    if (selected) {
                      prop = tmp4.reactionCountTextSelected;
                    }
                    class I {
                      constructor() {
                        return closure_1_10.useReducedMotion;
                      }
                    }
                    if (cResult[29] === tmp4.reactionCountText) {
                      if (cResult[30] === prop) {
                        let tmp36;
                        if (cResult[31] === tmp35) {
                          tmp36 = cResult[32];
                        }
                        const tmp37 = reaction.burst_count > 0 ? reaction.burst_count : reaction.count;
                        if (cResult[33] === tmp36) {
                          let tmp38;
                          if (cResult[34] === tmp37) {
                            tmp38 = cResult[35];
                          }
                          if (cResult[36] === emoji.name) {
                            if (cResult[37] === name) {
                              if (cResult[38] === tmp28) {
                                if (cResult[39] === tmp31) {
                                  if (cResult[40] === tmp38) {
                                    let tmp40;
                                    if (cResult[41] === tmp27) {
                                      tmp40 = cResult[42];
                                    }
                                    return tmp40;
                                  }
                                }
                              }
                            }
                          }
                          class I {
                            constructor() {
                              return closure_1_10.useReducedMotion;
                            }
                          }
                          const obj4 = { style: tmp27, accessible: true, accessibilityLabel: emoji.name, accessibilityState: tmp28, children: items1 };
                          items1 = [tmp31, tmp38];
                          const tmp42 = closure_19(React4, obj4, name);
                          cResult[36] = emoji.name;
                          cResult[37] = name;
                          cResult[38] = tmp28;
                          cResult[39] = tmp31;
                          cResult[40] = tmp38;
                          cResult[41] = tmp27;
                          cResult[42] = tmp42;
                          tmp40 = tmp42;
                        }
                        class I {
                          constructor() {
                            return closure_1_10.useReducedMotion;
                          }
                        }
                        const obj5 = { variant: "text-md/bold", style: tmp36, children: tmp37 };
                        const tmp39 = authStore4(Text_Text.Text, obj5);
                        cResult[33] = tmp36;
                        cResult[34] = tmp37;
                        cResult[35] = tmp39;
                        tmp38 = tmp39;
                      }
                    }
                    const items2 = [tmp4.reactionCountText, prop, tmp35];
                    cResult[29] = tmp4.reactionCountText;
                    cResult[30] = prop;
                    cResult[31] = tmp35;
                    cResult[32] = items2;
                    tmp36 = items2;
                  }
                }
              }
              class I {
                constructor() {
                  return closure_1_10.useReducedMotion;
                }
              }
              const obj6 = { src: tmp20, name: emoji.name, textEmojiStyle: tmp29, fastImageStyle: tmp30 };
              const tmp33 = authStore4(EmojiDefault, obj6);
              cResult[24] = emoji.name;
              cResult[25] = tmp20;
              cResult[26] = tmp29;
              cResult[27] = tmp30;
              cResult[28] = tmp33;
              tmp31 = tmp33;
            }
            const items3 = [, ];
            class I {
              constructor() {
                return closure_1_10.useReducedMotion;
              }
            }
            items3[1] = tmp4.emojiImage;
            cResult[21] = tmp4.emoji;
            cResult[22] = tmp4.emojiImage;
            cResult[23] = items3;
            tmp30 = items3;
          }
          const items4 = [, ];
          ({ emoji: arr4[0], emojiText: arr4[1] } = tmp4);
          cResult[18] = tmp4.emoji;
          cResult[19] = tmp4.emojiText;
          cResult[20] = items4;
          tmp29 = items4;
        }
      }
      const items5 = [tmp4.tabContainer, null, tmp26];
      cResult[12] = tmp4.tabContainer;
      cResult[13] = null;
      cResult[14] = tmp26;
      cResult[15] = items5;
      tmp27 = items5;
    }
  }
  let emojiURL;
  if (null != emoji.id) {
    const obj7 = { id: null, animated, size: 48 };
    const tmp23 = AvatarUtilsDefault;
    class I {
      constructor() {
        return closure_1_10.useReducedMotion;
      }
    }
    animated = emoji.animated;
    const getEmojiURL = tmp23.getEmojiURL;
    if (animated) {
      animated = tmp19;
    }
    emojiURL = getEmojiURL(obj7);
  }
  cResult[8] = emoji.animated;
  cResult[9] = emoji.id;
  cResult[10] = tmp19;
  cResult[11] = emojiURL;
  tmp20 = emojiURL;
}) : (function ReactionTab(arg0) {
  let animated;
  let items2;
  let items3;
  let items4;
  let reaction;
  let selected;
  let tmp3Result;
  let useReducedMotion;
  ({ reaction, selected } = arg0);
  const tmp = closure_22();
  let burst_colors = reaction.burst_colors;
  const useEmojiColorPalette = useEmojiColorPalette2.useEmojiColorPalette;
  useEmojiColorPalette2;
  if (burst_colors == null) {
    burst_colors = [];
  }
  const emojiColorPalette = useEmojiColorPalette(burst_colors);
  let accentColor;
  if (emojiColorPalette != null) {
    accentColor = emojiColorPalette.accentColor;
  }
  let tmp8 = null;
  if (null != accentColor) {
    tmp8 = { color: emojiColorPalette.accentColor };
    const obj = { color: emojiColorPalette.accentColor };
  }
  let tmp9 = null;
  if (null != emojiColorPalette) {
    const obj2 = { backgroundColor: tmp3Result.hexOpacityToRgba(emojiColorPalette.backgroundColor, emojiColorPalette.opacity) };
    tmp9 = obj2;
    tmp3Result = ColorUtils;
  }
  const emoji = reaction.emoji;
  const items = [AccessibilityStore];
  const tmp3Result2 = get_initialized;
  const stateFromStores = tmp3Result2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const AnimateEmoji = tmp3(4799).AnimateEmoji;
  let emojiURL;
  if (null != emoji.id) {
    const obj3 = { id: null, animated, size: 48 };
    ({ id: obj5.id, animated } = emoji);
    const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
    AvatarUtilsDefault;
    if (animated) {
      animated = !stateFromStores;
    }
    if (animated) {
      animated = tmp11;
    }
    emojiURL = getEmojiURL(obj3);
  }
  const items1 = [tmp.tabContainer, , ];
  let tabContainerSelected = null;
  const tmp15 = closure_19;
  const tmp16 = React4;
  if (selected) {
    tabContainerSelected = tmp.tabContainerSelected;
  }
  items1[1] = tabContainerSelected;
  let tmp18 = null;
  if (selected) {
    tmp18 = null;
    if (reaction.burst_count > 0) {
      tmp18 = tmp9;
    }
  }
  const obj4 = { style: items1, accessible: true, accessibilityLabel: emoji.name, accessibilityState: { selected }, children: items4 };
  items1[2] = tmp18;
  const obj6 = { src: emojiURL, name: emoji.name, textEmojiStyle: items2, fastImageStyle: items3 };
  items2 = [, ];
  ({ emoji: arr4[0], emojiText: arr4[1] } = tmp);
  items3 = [, ];
  ({ emoji: arr5[0], emojiImage: arr5[1] } = tmp);
  items4 = [authStore4(EmojiDefault, obj6), ];
  const items5 = [tmp.reactionCountText, , ];
  let prop = null;
  const Text = tmp3(5234).Text;
  const tmp19 = authStore4;
  if (selected) {
    prop = tmp.reactionCountTextSelected;
  }
  items5[1] = prop;
  let tmp21 = null;
  if (reaction.burst_count > 0) {
    tmp21 = tmp8;
  }
  const obj7 = { variant: "text-md/bold", style: items5, children: reaction.burst_count > 0 ? reaction.burst_count : reaction.count };
  items5[2] = tmp21;
  items4[1] = tmp19(Text, obj7);
  let name = emoji.id;
  if (name == null) {
    name = emoji.name;
  }
  return tmp15(tmp16, obj4, name);
});
const __initData = { code: "function MessageReactionsContentTsx1(){const{useReducedMotion,buttonWidth,withTiming}=this.__closure;return{maxWidth:useReducedMotion?buttonWidth.get():withTiming(buttonWidth.get(),{duration:200})};}" };
const __initData2 = { code: "function MessageReactionsContentTsx2(){const{useReducedMotion,textOpacity,withTiming}=this.__closure;return{opacity:useReducedMotion?textOpacity.get():withTiming(textOpacity.get(),{duration:125}),color:'white',fontSize:14,marginLeft:8,textAlignVertical:'center'};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_35 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiPackReactionTabActions(arg0) {
  let tmp11;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(5);
  const id = arg0.reactions[arg0.reactionSelectedIndex].emoji.id;
  if (cResult[0] !== id) {
    const obj2 = { emojiId: id, skipKnownGuildEmojiFetch: true };
    cResult[0] = id;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult = useEmojiAndSource2;
  const sourceType = tmpResult.useEmojiAndSource(tmp4).sourceType;
  if (cResult[2] === arg0) {
    let tmp5;
    if (cResult[3] === sourceType) {
      tmp5 = cResult[4];
    }
    return tmp5;
  }
  if (sourceType === EmojiSourceDataTypes.PACK) {
    const obj3 = { isEmojiPack: true };
    const merged = Object.assign(arg0);
    tmp11 = authStore4(EmojiOptionsButton, obj3);
  } else {
    const obj4 = {};
    const merged1 = Object.assign(arg0);
    tmp11 = authStore4(RemoveAllButton, obj4);
  }
  cResult[2] = arg0;
  cResult[3] = sourceType;
  cResult[4] = tmp11;
  tmp5 = tmp11;
}) : (function EmojiPackReactionTabActions(arg0) {
  let tmp7;
  const emojiId = arg0.reactions[arg0.reactionSelectedIndex].emoji.id;
  const useEmojiAndSource = useEmojiAndSource2.useEmojiAndSource;
  useEmojiAndSource2;
  if (useEmojiAndSource({ emojiId, skipKnownGuildEmojiFetch: true }).sourceType === EmojiSourceDataTypes.PACK) {
    const obj2 = { isEmojiPack: true };
    const merged = Object.assign(arg0);
    tmp7 = authStore4(EmojiOptionsButton, obj2);
  } else {
    const obj = {};
    const merged1 = Object.assign(arg0);
    tmp7 = authStore4(RemoveAllButton, obj);
  }
  return tmp7;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_36 = ReactCompilerGating.isReactCompilerEnabled() ? (function ReactionTabs(setReactionSelectedIndex) {
  let reactionSelectedIndex;
  let reactions;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp = dependencyMap;
  let obj = reactionSelectedIndex(576);
  const cResult = obj.c(34);
  const tmp3 = closure_22();
  ({ reactions, reactionSelectedIndex } = setReactionSelectedIndex);
  setReactionSelectedIndex = setReactionSelectedIndex.setReactionSelectedIndex;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "ReactionTabs" };
    const obj3 = { autoTrackExposure: false };
    cResult[0] = obj2;
    cResult[1] = obj3;
    tmp4 = obj2;
    tmp5 = obj3;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj4 = setReactionSelectedIndex(7284);
  const tidaWebformEnabled = obj4.useExperiment(tmp4, tmp5).tidaWebformEnabled;
  const tmp6 = setReactionSelectedIndex;
  if (cResult[2] === reactionSelectedIndex) {
    let tmp7;
    if (cResult[3] === reactions) {
      tmp7 = cResult[4];
    }
    if (cResult[7] !== setReactionSelectedIndex) {
      class T {
        constructor(arg0) {
          obj = closure_0(closure_3[51]);
          result = obj.triggerHapticFeedback(closure_1(closure_3[52]).IMPACT_LIGHT);
          tmp2 = setReactionSelectedIndex(setReactionSelectedIndex);
          return;
        }
      }
      cResult[7] = setReactionSelectedIndex;
      cResult[8] = T;
    } else {
      class T {
        constructor(arg0) {
          obj = closure_0(closure_3[51]);
          result = obj.triggerHapticFeedback(closure_1(closure_3[52]).IMPACT_LIGHT);
          tmp2 = setReactionSelectedIndex(setReactionSelectedIndex);
          return;
        }
      }
    }
    if (cResult[9] === reactionSelectedIndex) {
      class T {
        constructor(arg0) {
          obj = closure_0(closure_3[51]);
          result = obj.triggerHapticFeedback(closure_1(closure_3[52]).IMPACT_LIGHT);
          tmp2 = setReactionSelectedIndex(setReactionSelectedIndex);
          return;
        }
      }
    }
    const obj8 = { tabs: tmp7, tabStyle: null, tabStyleActive: null, tabStyleSelected: null, tabIndexSelected: reactionSelectedIndex, onSelect: tmp10 };
    ({ tab: obj5.tabStyle, tabActive: obj5.tabStyleActive, tabSelected: obj5.tabStyleSelected } = tmp3);
    cResult[9] = reactionSelectedIndex;
    cResult[10] = tmp3.tab;
    cResult[11] = tmp3.tabActive;
    cResult[12] = tmp3.tabSelected;
    cResult[13] = tmp7;
    cResult[14] = tmp10;
    cResult[15] = closure_18(tmp6(9986), obj8);
    const tmp13 = closure_18(tmp6(9986), obj8);
  }
  if (cResult[5] !== reactionSelectedIndex) {
    class T {
      constructor(arg0) {
        obj = closure_0(closure_3[51]);
        result = obj.triggerHapticFeedback(closure_1(closure_3[52]).IMPACT_LIGHT);
        tmp2 = setReactionSelectedIndex(setReactionSelectedIndex);
        return;
      }
    }
    cResult[5] = reactionSelectedIndex;
    cResult[6] = R;
    tmp8 = R;
  } else {
    class T {
      constructor(arg0) {
        obj = closure_0(closure_3[51]);
        result = obj.triggerHapticFeedback(closure_1(closure_3[52]).IMPACT_LIGHT);
        tmp2 = setReactionSelectedIndex(setReactionSelectedIndex);
        return;
      }
    }
  }
  const mapped = reactions.map(tmp8);
  cResult[2] = reactionSelectedIndex;
  cResult[3] = reactions;
  cResult[4] = mapped;
  tmp7 = mapped;
}) : (function ReactionTabs(setReactionSelectedIndex) {
  let items;
  let items1;
  let obj6;
  let reactionSelectedIndex;
  let reactions;
  let tmp4Result;
  let tmp = closure_22();
  ({ reactions, reactionSelectedIndex } = setReactionSelectedIndex);
  setReactionSelectedIndex = setReactionSelectedIndex.setReactionSelectedIndex;
  let obj = setReactionSelectedIndex(7284);
  const emoji = reactions[reactionSelectedIndex].emoji;
  let tmp2 = closure_19;
  const obj2 = { style: tmp.reactionTab, children: items };
  const tidaWebformEnabled = obj.useExperiment({ location: "ReactionTabs" }, { autoTrackExposure: false }).tidaWebformEnabled;
  const obj4 = {
    tabs: reactions.map((reaction, index) => {
      let str = "normal-";
      const obj = { reaction, selected: index === reactionSelectedIndex };
      const tmp = authStore4;
      const tmp2 = closure_30;
      if (reaction.burst_count > 0) {
        str = "burst-";
      }
      let str2 = reaction.emoji.id;
      if (str2 == null) {
        str2 = "";
      }
      return tmp(tmp2, obj, "" + str + str2 + ":" + reaction.emoji.name);
    }),
    tabStyle: null,
    tabStyleActive: null,
    tabStyleSelected: null,
    tabIndexSelected: reactionSelectedIndex,
    onSelect(arg0) {
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      setReactionSelectedIndex(arg0);
    }
  };
  ({ tab: obj3.tabStyle, tabActive: obj3.tabStyleActive, tabSelected: obj3.tabStyleSelected } = tmp);
  const tmp5 = setReactionSelectedIndex(9986);
  items = [closure_18(tmp5, obj4), closure_18(setReactionSelectedIndex(8955), { outer: true }), ];
  const obj5 = { style: tmp.removeButtonContainer, children: items1 };
  const obj7 = { style: tmp.emojiTextIdentifier, variant: "eyebrow", color: "text-default", children: obj6.getReactionEmojiName(reactions[reactionSelectedIndex].emoji) };
  const Text = reactionSelectedIndex(5234).Text;
  obj6 = reactionSelectedIndex(4915);
  items1 = [closure_18(Text, obj7), ];
  if (tidaWebformEnabled) {
    const obj8 = {};
    const merged = Object.assign(setReactionSelectedIndex);
    tmp4Result = tmp4(EmojiOptionsButton, obj8);
  } else {
    const obj14 = {};
    const merged1 = Object.assign(setReactionSelectedIndex);
    let name = emoji.id;
    const tmp6 = closure_35;
    if (name == null) {
      name = emoji.name;
    }
    tmp4Result = tmp4(tmp6, obj14, name);
  }
  items1[1] = tmp4Result;
  items[2] = tmp2(closure_9, obj5);
  return tmp2(closure_9, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
const MessageReactionsContent_SwipableBounced = "MessageReactionsContent_SwipableBounced";
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function MessageReactionsEmpty() {
  let tmp12;
  let tmp8;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(10);
  const tmp4 = closure_22();
  const tmp5 = useSafeAreaInsetsDefault();
  const obj2 = generated_NoResults;
  const noResultsSource = obj2.useNoResultsSource();
  const sum = 338 + tmp5.bottom;
  const containerEmpty = tmp4.containerEmpty;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1128).intl;
    const stringResult = intl.string(intl3.t.HmPOrp);
    const intl2 = tmp(1128).intl;
    const stringResult1 = intl2.string(intl3.t["pTJ5J/"]);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp8 = stringResult;
    tmp9 = stringResult1;
  } else {
    [tmp8, tmp9] = cResult;
  }
  if (cResult[2] !== noResultsSource) {
    const obj3 = { source: noResultsSource, title: tmp8, body: tmp9 };
    const tmp14 = authStore4(native.RefreshEmptyState, obj3);
    cResult[2] = noResultsSource;
    cResult[3] = tmp14;
    tmp12 = tmp14;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] === tmp4.containerEmpty) {
    let tmp15;
    if (cResult[5] === tmp12) {
      tmp15 = cResult[6];
    }
    if (cResult[7] === sum) {
      let tmp17;
      if (cResult[8] === tmp15) {
        tmp17 = cResult[9];
      }
      return tmp17;
    }
    const obj4 = { scrollable: true, startHeight: sum, children: tmp15 };
    const tmp19 = authStore4(Sheet_BottomSheet.BottomSheet, obj4);
    cResult[7] = sum;
    cResult[8] = tmp15;
    cResult[9] = tmp19;
    tmp17 = tmp19;
  }
  const tmp16 = authStore4(BottomSheetModal.BottomSheetView, { style: containerEmpty, children: tmp12 });
  cResult[4] = tmp4.containerEmpty;
  cResult[5] = tmp12;
  cResult[6] = tmp16;
  tmp15 = tmp16;
}) : (function MessageReactionsEmpty() {
  let BottomSheetView;
  let RefreshEmptyState;
  let intl;
  let intl2;
  let obj3;
  let obj4;
  const tmp = closure_22();
  const tmp2 = useSafeAreaInsetsDefault();
  const obj = generated_NoResults;
  const obj2 = { scrollable: true, startHeight: 338 + tmp2.bottom, children: authStore4(BottomSheetView, obj3) };
  const noResultsSource = obj.useNoResultsSource();
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  obj3 = { style: tmp.containerEmpty, children: authStore4(RefreshEmptyState, obj4) };
  BottomSheetView = BottomSheetModal.BottomSheetView;
  obj4 = { source: noResultsSource, title: intl.string(intl3.t.HmPOrp), body: intl2.string(intl3.t["pTJ5J/"]) };
  RefreshEmptyState = native.RefreshEmptyState;
  intl = intl3.intl;
  intl2 = intl3.intl;
  return authStore4(BottomSheet, obj2);
});
let Storage = Storage2.Storage;
let closure_38 = Storage.get("MessageReactionsContent_SwipableBounced", false);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? (function MessageReactionsContent(channelId) {
  let NORMAL;
  let disableManage;
  let disableTabs;
  let emoji;
  let isSelectedBurst;
  let reactionSelectedIndex;
  let reactions;
  let reactors;
  let reactorsHasMore;
  let setReactionSelectedIndex;
  let tmp = channelId;
  let obj = channelId(NORMAL[16]);
  const cResult = obj.c(56);
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  ({ emoji, reactions, isSelectedBurst, disableManage, disableTabs } = channelId);
  const tmp4 = undefined !== disableManage && disableManage;
  const tmp6 = closure_22();
  if (cResult[0] === emoji) {
    if (cResult[1] === isSelectedBurst) {
      let tmp7;
      if (cResult[2] === reactions) {
        tmp7 = cResult[3];
      }
      const tmp9 = closure_24(tmp7);
      const reactionSelected = tmp9.reactionSelected;
      ({ reactionSelectedIndex, setReactionSelectedIndex } = tmp9);
      if (null != reactionSelected.me_vote) {
        NORMAL = tmp(tmp2[20]).ReactionTypes.VOTE;
      } else if (reactionSelected.burst_count > 0) {
        NORMAL = tmp(tmp2[20]).ReactionTypes.BURST;
      } else {
        NORMAL = tmp(tmp2[20]).ReactionTypes.NORMAL;
      }
      if (cResult[4] === channelId) {
        if (cResult[5] === messageId) {
          if (cResult[6] === reactionSelected) {
            let tmp11;
            let tmp15;
            let tmp18;
            let tmp17;
            let tmp25;
            if (cResult[7] === NORMAL) {
              tmp11 = cResult[8];
            }
            ({ reactors, reactorsHasMore } = closure_25(tmp11));
            const _Symbol = Symbol;
            closure_25(tmp11);
            if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
              const items = [ChannelStore];
              cResult[9] = items;
              tmp15 = items;
            } else {
              tmp15 = cResult[9];
            }
            if (cResult[10] !== channelId) {
              const fn = function z() {
                return ChannelStore.getChannel(channelId);
              };
              const items1 = [channelId];
              cResult[10] = channelId;
              cResult[11] = fn;
              cResult[12] = items1;
              tmp18 = items1;
              tmp17 = fn;
            } else {
              tmp17 = cResult[11];
              tmp18 = cResult[12];
            }
            const tmpResult = tmp(NORMAL[17]);
            const stateFromStores = tmpResult.useStateFromStores(tmp15, tmp17, tmp18);
            const tmpResult3 = tmp(NORMAL[59]);
            const isActiveChannelOrUnarchivableThread = tmpResult3.useIsActiveChannelOrUnarchivableThread(stateFromStores);
            const tmp22 = messageId(NORMAL[54])();
            const tmp24 = closure_23(channelId) && !tmp4 && isActiveChannelOrUnarchivableThread;
            let name = reactionSelected.emoji.id;
            if (name == null) {
              name = reactionSelected.emoji.name;
            }
            const _Symbol2 = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(tmp2[36]).intl;
              const stringResult = intl.string(tmp(NORMAL[36]).t.gHp0C4);
              cResult[13] = stringResult;
              tmp25 = stringResult;
            } else {
              tmp25 = cResult[13];
            }
            if (cResult[14] === channelId) {
              if (cResult[15] === messageId) {
                if (cResult[16] === reactionSelected) {
                  if (cResult[17] === NORMAL) {
                    if (cResult[18] === reactors) {
                      let tmp28;
                      let tmp46;
                      if (cResult[19] === reactorsHasMore) {
                        tmp28 = cResult[20];
                      }
                      const tmp30 = closure_26(tmp28);
                      const tmp32 = closure_27(reactors, reactorsHasMore);
                      const tmp39 = closure_28(reactors, messageId, channelId, reactionSelected, tmp24);
                      const tmp45 = closure_29(channelId, messageId, reactionSelected, reactors);
                      if (cResult[21] !== reactors.length) {
                        const items2 = [reactors.length];
                        cResult[21] = reactors.length;
                        cResult[22] = items2;
                        tmp46 = items2;
                      } else {
                        tmp46 = cResult[22];
                      }
                      if (cResult[23] === tmp22.bottom) {
                        if (cResult[24] === tmp6.container) {
                          if (cResult[25] === tmp30) {
                            if (cResult[26] === tmp32) {
                              if (cResult[27] === tmp39) {
                                if (cResult[28] === tmp45) {
                                  let tmp47;
                                  let tmp49;
                                  let tmp50;
                                  if (cResult[29] === tmp46) {
                                    tmp47 = cResult[30];
                                  }
                                  const _Symbol3 = Symbol;
                                  if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                                    function se() {
                                      c38 = true;
                                      const Storage = channelId(NORMAL[58]).Storage;
                                      const result = Storage.set(MessageReactionsContent_SwipableBounced, true);
                                    }
                                    cResult[31] = se;
                                    tmp49 = se;
                                  } else {
                                    tmp49 = cResult[31];
                                  }
                                  if (cResult[32] !== tmp24) {
                                    const tmpResult4 = tmp(NORMAL[32]);
                                    const tmp51 = tmpResult4.isIOS() && tmp24;
                                    cResult[32] = tmp24;
                                    cResult[33] = tmp51;
                                    tmp50 = tmp51;
                                  } else {
                                    tmp50 = cResult[33];
                                  }
                                  if (cResult[34] === channelId) {
                                    if (cResult[35] === messageId) {
                                      if (cResult[36] === reactionSelected.emoji) {
                                        let tmp52;
                                        let tmp53;
                                        if (cResult[37] === NORMAL) {
                                          tmp52 = cResult[38];
                                        }
                                        if (cResult[39] !== tmp52) {
                                          const tmp52Result = tmp52();
                                          cResult[39] = tmp52;
                                          cResult[40] = tmp52Result;
                                          tmp53 = tmp52Result;
                                        } else {
                                          tmp53 = cResult[40];
                                        }
                                        if (cResult[41] === channelId) {
                                          if (cResult[42] === (undefined !== disableTabs && disableTabs)) {
                                            if (cResult[43] === messageId) {
                                              if (cResult[44] === reactionSelectedIndex) {
                                                if (cResult[45] === reactions) {
                                                  let tmp55;
                                                  let tmp60Result;
                                                  if (cResult[46] === setReactionSelectedIndex) {
                                                    tmp55 = cResult[47];
                                                  }
                                                  if (cResult[48] === tmp50) {
                                                    if (cResult[49] === tmp47) {
                                                      let tmp59;
                                                      if (cResult[50] === name) {
                                                        tmp59 = cResult[51];
                                                      }
                                                      if (cResult[52] === tmp53) {
                                                        if (cResult[53] === tmp55) {
                                                          let tmp71;
                                                          if (cResult[54] === tmp59) {
                                                            tmp71 = cResult[55];
                                                          }
                                                          return tmp71;
                                                        }
                                                      }
                                                      let obj2 = { scrollable: true, backdropOpacity: tmp(tmp2[63]).BACKDROP_OPACITY, backdropChildren: tmp53, header: tmp55, children: tmp59 };
                                                      BottomSheet = tmp(tmp2[57]).BottomSheet;
                                                      const tmp73 = closure_18(BottomSheet, obj2);
                                                      cResult[52] = tmp53;
                                                      cResult[53] = tmp55;
                                                      cResult[54] = tmp59;
                                                      cResult[55] = tmp73;
                                                      tmp71 = tmp73;
                                                    }
                                                  }
                                                  if (tmp50) {
                                                    const obj3 = { inActionSheet: true, bounceFirstRowOnMount: !c38, onBounceSwipable: tmp49 };
                                                    const tmp21Result = messageId(NORMAL[61]);
                                                    const merged = Object.assign(tmp47);
                                                    tmp60Result = tmp60(tmp21Result, obj3, name);
                                                  } else {
                                                    const obj4 = { inActionSheet: true };
                                                    const tmp21Result2 = messageId(NORMAL[62]);
                                                    const merged1 = Object.assign(tmp47);
                                                    tmp60Result = tmp60(tmp21Result2, obj4, name);
                                                  }
                                                  cResult[48] = tmp50;
                                                  cResult[49] = tmp47;
                                                  cResult[50] = name;
                                                  cResult[51] = tmp60Result;
                                                  tmp59 = tmp60Result;
                                                }
                                              }
                                            }
                                          }
                                        }
                                        let tmp56 = null;
                                        if (true !== (undefined !== disableTabs && disableTabs)) {
                                          const obj5 = { reactions, reactionSelectedIndex, setReactionSelectedIndex, messageId, channelId };
                                          tmp56 = closure_18(closure_36, obj5);
                                        }
                                        cResult[41] = channelId;
                                        cResult[42] = undefined !== disableTabs && disableTabs;
                                        cResult[43] = messageId;
                                        cResult[44] = reactionSelectedIndex;
                                        cResult[45] = reactions;
                                        cResult[46] = setReactionSelectedIndex;
                                        cResult[47] = tmp56;
                                        tmp55 = tmp56;
                                      }
                                    }
                                  }
                                  function renderBurstAnimationPreview() {
                                    let obj2;
                                    let tmp3 = null;
                                    const tmp = NORMAL;
                                    if (NORMAL === MessageReactionsTypes.ReactionTypes.BURST) {
                                      const obj = { style: metroImportAll.absoluteFill, pointerEvents: "none", children: authStore4(BurstReactionAnimationPreviewDefault, obj2) };
                                      obj2 = { emoji: reactionSelected.emoji, reactionType: tmp, messageId, channelId };
                                      tmp3 = authStore4(React4, obj);
                                    }
                                    return tmp3;
                                  }
                                  cResult[34] = channelId;
                                  cResult[35] = messageId;
                                  cResult[36] = reactionSelected.emoji;
                                  cResult[37] = NORMAL;
                                  cResult[38] = renderBurstAnimationPreview;
                                  tmp52 = renderBurstAnimationPreview;
                                }
                              }
                            }
                          }
                        }
                      }
                      const obj6 = { accessibilityLabel: tmp25, footerSize: v48, insetBottom: tmp27, onScroll: tmp30, renderFooter: tmp32, renderItem: tmp39, renderQuickActions: tmp45, itemSize: v48, sections: tmp46, style: tmp6.container };
                      cResult[23] = tmp22.bottom;
                      cResult[24] = tmp6.container;
                      cResult[25] = tmp30;
                      cResult[26] = tmp32;
                      cResult[27] = tmp39;
                      cResult[28] = tmp45;
                      cResult[29] = tmp46;
                      cResult[30] = obj6;
                      tmp47 = obj6;
                    }
                  }
                }
              }
            }
            const obj7 = { channelId, messageId, reactionSelected, reactors, reactorsHasMore, reactionType: NORMAL };
            cResult[14] = channelId;
            cResult[15] = messageId;
            cResult[16] = reactionSelected;
            cResult[17] = NORMAL;
            cResult[18] = reactors;
            cResult[19] = reactorsHasMore;
            cResult[20] = obj7;
            tmp28 = obj7;
          }
        }
      }
      const obj8 = { channelId, messageId, reaction: reactionSelected, reactionType: NORMAL };
      cResult[4] = channelId;
      cResult[5] = messageId;
      cResult[6] = reactionSelected;
      cResult[7] = NORMAL;
      cResult[8] = obj8;
      tmp11 = obj8;
    }
  }
  const obj9 = { reactions, emoji, isSelectedBurst };
  cResult[0] = emoji;
  cResult[1] = isSelectedBurst;
  cResult[2] = reactions;
  cResult[3] = obj9;
  tmp7 = obj9;
}) : (function MessageReactionsContent(channelId) {
  let NORMAL;
  let disableManage;
  let emoji;
  let intl;
  let isSelectedBurst;
  let items2;
  let messageId;
  let obj4;
  let reactionSelectedIndex;
  let reactions;
  let reactors;
  let reactorsHasMore;
  let setReactionSelectedIndex;
  let tmp21Result;
  let tmp21Result3;
  let tmp21Result4;
  let tmp5;
  let tmp7;
  channelId = channelId.channelId;
  ({ messageId, reactions, disableManage } = channelId);
  ({ emoji, isSelectedBurst } = channelId);
  if (disableManage === undefined) {
    disableManage = false;
  }
  let flag = channelId.disableTabs;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_22();
  const tmp2 = closure_24({ reactions, emoji, isSelectedBurst });
  const reactionSelected = tmp2.reactionSelected;
  ({ reactionSelectedIndex, setReactionSelectedIndex } = tmp2);
  if (null != reactionSelected.me_vote) {
    NORMAL = channelId(5225).ReactionTypes.VOTE;
    tmp5 = channelId;
    tmp7 = channelId;
  } else if (reactionSelected.burst_count > 0) {
    NORMAL = channelId(5225).ReactionTypes.BURST;
    tmp5 = channelId;
    tmp7 = channelId;
  } else {
    NORMAL = channelId(5225).ReactionTypes.NORMAL;
    tmp5 = channelId;
    tmp7 = channelId;
  }
  ({ reactors, reactorsHasMore } = closure_25({ channelId, messageId, reaction: reactionSelected, reactionType: NORMAL }));
  closure_25({ channelId, messageId, reaction: reactionSelected, reactionType: NORMAL });
  const items = [ChannelStore];
  const items1 = [channelId];
  const tmp7Result = tmp7(504);
  const stateFromStores = tmp7Result.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const tmp7Result3 = tmp7(7369);
  const isActiveChannelOrUnarchivableThread = tmp7Result3.useIsActiveChannelOrUnarchivableThread(stateFromStores);
  const tmp17 = useSafeAreaInsetsDefault();
  const tmp18 = closure_23(channelId) && !disableManage && isActiveChannelOrUnarchivableThread;
  let name = reactionSelected.emoji.id;
  if (name == null) {
    name = reactionSelected.emoji.name;
  }
  const obj = { accessibilityLabel: intl.string(tmp7(1128).t.gHp0C4), footerSize: v48, insetBottom: tmp17.bottom, onScroll: closure_26({ channelId, messageId, reactionSelected, reactors, reactorsHasMore, reactionType: NORMAL }), renderFooter: closure_27(reactors, reactorsHasMore), renderItem: closure_28(reactors, messageId, channelId, reactionSelected, tmp18), renderQuickActions: closure_29(channelId, messageId, reactionSelected, reactors), itemSize: v48, sections: items2, style: tmp.container };
  intl = tmp7(1128).intl;
  items2 = [reactors.length];
  const callback = react.useCallback(() => {
    c38 = true;
    const Storage = channelId(dependencyMap[58]).Storage;
    const result = Storage.set(MessageReactionsContent_SwipableBounced, true);
  }, []);
  const tmp7Result4 = tmp7(1384);
  const obj2 = { scrollable: true, backdropOpacity: tmp7(4929).BACKDROP_OPACITY, backdropChildren: tmp21Result, header: tmp21Result3, children: tmp21Result4 };
  const tmp20 = tmp7Result4.isIOS() && tmp18;
  BottomSheet = tmp7(5265).BottomSheet;
  tmp21Result = null;
  if (NORMAL === tmp5(5225).ReactionTypes.BURST) {
    const obj3 = { style: closure_8.absoluteFill, pointerEvents: "none", children: closure_18(BurstReactionAnimationPreviewDefault, obj4) };
    obj4 = { emoji: reactionSelected.emoji, reactionType: NORMAL, messageId, channelId };
    tmp21Result = tmp21(closure_9, obj3);
  }
  tmp21Result3 = null;
  if (true !== flag) {
    const obj5 = { reactions, reactionSelectedIndex, setReactionSelectedIndex, messageId, channelId };
    tmp21Result3 = tmp21(closure_36, obj5);
  }
  if (tmp20) {
    const obj6 = { inActionSheet: true, bounceFirstRowOnMount: !c38, onBounceSwipable: callback };
    const tmp16Result = SwipeableFastListDefault;
    const merged = Object.assign(obj);
    tmp21Result4 = tmp21(tmp16Result, obj6, name);
  } else {
    const obj7 = { inActionSheet: true };
    const tmp16Result2 = FastListDefault;
    const merged1 = Object.assign(obj);
    tmp21Result4 = tmp21(tmp16Result2, obj7, name);
  }
  return closure_18(BottomSheet, obj2);
});
let result = size.fileFinishedImporting("modules/reactions/native/MessageReactionsContent.tsx");

export const useReactors = tmp6;
export const useReactorsOnScrollNative = tmp7;
export const MessageReactionsEmpty = tmp8;
export const MessageReactionsContent = tmp9;
