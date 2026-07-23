// Module ID: 9428
// Function ID: 73358
// Name: useReactors
// Dependencies: [57, 31, 27, 4122, 1348, 1917, 7004, 3758, 653, 33, 3991, 4126, 4130, 689, 566, 3769, 636, 7006, 7005, 5450, 22, 5464, 4319, 3969, 5158, 1273, 1392, 9429, 477, 5119, 8492, 7191, 9430, 1212, 9431, 3974, 3803, 5151, 9432, 4131, 1450, 4089, 4098, 9433, 1934, 5514, 5491, 9434, 4099, 4100, 1557, 8502, 5187, 5189, 587, 5650, 7026, 7067, 9435, 7588, 2]
// Exports: MessageReactionsContent, MessageReactionsEmpty

// Module 9428 (useReactors)
import BurstReactionAnimationPreview from "BurstReactionAnimationPreview";
import Divider from "Divider";
import get_ActivityIndicator from "DiscordTag";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "getSystemLocale";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "module_3991";
import { Storage } from "Storage";

let Platform;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function useReactors(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const reaction = channelId.reaction;
  const reactionType = channelId.reactionType;
  let obj = channelId(reactionType[14]);
  let items = [closure_12];
  const items1 = [channelId, messageId, reaction.emoji, reactionType];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const reactions = outer1_12.getReactions(channelId, messageId, reaction.emoji, outer1_14, reactionType);
    let items;
    if (null != reactions) {
      items = reactions.values();
    }
    if (null == items) {
      items = [];
    }
    return Array.from(items);
  }, items1, messageId(reactionType[16]));
  obj = { reactors: stateFromStores };
  if (reactionType === channelId(reactionType[17]).ReactionTypes.VOTE) {
    const count_details = reaction.count_details;
    let vote;
    if (null != count_details) {
      vote = count_details.vote;
    }
    let num = 0;
    if (null != vote) {
      num = vote;
    }
    let tmp3 = num;
  } else {
    tmp3 = reactionType === channelId(reactionType[17]).ReactionTypes.BURST ? reaction.burst_count : reaction.count;
  }
  obj.reactorsHasMore = tmp3 > stateFromStores.length;
  return obj;
}
function useReactorsOnScrollNative(channelId) {
  let reactors;
  let reactorsHasMore;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const reactionSelected = channelId.reactionSelected;
  ({ reactors, reactorsHasMore } = channelId);
  const reactionType = channelId.reactionType;
  let id;
  let callback;
  let closure_8;
  let _isNativeReflectConstruct;
  React = React.useRef(false);
  id = null;
  if (reactors.length > 0) {
    id = reactors[reactors.length - 1].id;
  }
  const items = [channelId, messageId, reactionSelected, reactorsHasMore, id, reactionType];
  callback = React.useCallback((arg0, arg1) => {
    let tmp = arg0 / arg1 > 0.75 && reactorsHasMore;
    if (tmp) {
      tmp = !ref.current;
    }
    if (tmp) {
      ref.current = true;
      let obj = reactionSelected(reactorsHasMore[18]);
      obj = { channelId, messageId, emoji: reactionSelected.emoji, limit: outer1_14, after: id, type: reactionType };
      const reactors = obj.getReactors(obj);
      reactors.then(() => {
        outer1_5.current = false;
      });
    }
  }, items);
  closure_8 = React.useRef(callback);
  const items1 = [callback];
  const effect = React.useEffect(() => {
    closure_8.current = callback;
  }, items1);
  _isNativeReflectConstruct = messageId(reactorsHasMore[19])(() => messageId(reactorsHasMore[20]).debounce((arg0, arg1) => outer1_8.current(arg0, arg1), 16));
  return messageId(reactorsHasMore[19])(() => (nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    return outer1_9(nativeEvent.contentOffset.y, nativeEvent.contentSize.height);
  });
}
function useRenderFooter(reactors, reactorsHasMore) {
  let closure_0 = reactors;
  let closure_1 = reactorsHasMore;
  const tmp = callback3();
  const importAll = tmp;
  const items = [reactors, reactorsHasMore, tmp];
  return React.useCallback(() => {
    if (closure_1) {
      const obj = { style: tmp.loadingSpinner, size: "large" };
      let tmp2 = outer1_16(outer1_6, obj);
    } else {
      tmp2 = null;
    }
    return tmp2;
  }, items);
}
function useRenderItem(reactors, messageId, channelId, reactionSelected, arg4) {
  let closure_0 = reactors;
  const importDefault = messageId;
  let closure_2 = channelId;
  const dependencyMap = reactionSelected;
  let BurstReactionAnimationPreview = arg4;
  const tmp = callback3();
  const React = tmp;
  const analyticsLocations = importDefault(5464)().analyticsLocations;
  let items = [reactors, channelId, arg4, messageId, reactionSelected, tmp, analyticsLocations];
  return React.useCallback((arg0, arg1) => {
    obj = obj[arg1];
    const id = obj.id;
    const diff = obj.length - 1;
    const channel = outer1_10.getChannel(NORMAL);
    let guildId = null;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    let obj2 = messageId(burst_count[22]);
    let nickname = obj2.getNickname(guildId, NORMAL, obj);
    if (null == nickname) {
      let obj3 = messageId(burst_count[23]);
      nickname = obj3.getGlobalName(obj);
    }
    let member = null;
    if (null != guildId) {
      member = outer1_11.getMember(guildId, id);
    }
    if (burst_count.burst_count > 0) {
      NORMAL = callback(burst_count[17]).ReactionTypes.BURST;
    } else {
      NORMAL = callback(burst_count[17]).ReactionTypes.NORMAL;
    }
    obj = { style: tmp.listRow };
    obj = {};
    const obj1 = { style: tmp.avatar, size: callback(burst_count[25]).AvatarSizes.SMALL };
    const avatarSource = obj.getAvatarSource(guildId);
    let guildMemberAvatarSource = avatarSource;
    if (null != guildId) {
      let avatar;
      if (null != member) {
        avatar = member.avatar;
      }
      guildMemberAvatarSource = avatarSource;
      if (null != avatar) {
        guildMemberAvatarSource = messageId(burst_count[26]).getGuildMemberAvatarSource(member, obj);
        const obj8 = messageId(burst_count[26]);
      }
    }
    obj1.source = guildMemberAvatarSource;
    obj.leading = outer1_16(callback(burst_count[25]).Avatar, obj1);
    obj2 = { user: obj, nick: nickname };
    obj.label = outer1_16(messageId(burst_count[27]), obj2);
    let tmp22 = null;
    if (BurstReactionAnimationPreview) {
      tmp22 = null;
      if (obj10.isAndroid()) {
        obj3 = {
          onPress() {
                obj = obj(7005);
                obj = { channelId: NORMAL, messageId: id, emoji: outer1_3.emoji, location: obj(7005).ReactionLocations.MESSAGE, userId: obj.id };
                obj = { burst: NORMAL === obj(7006).ReactionTypes.BURST };
                obj.options = obj;
                return obj.removeReaction(obj);
              },
          children: outer1_16(callback(burst_count[29]).XSmallIcon, {})
        };
        tmp22 = outer1_16(outer1_7, obj3);
      }
      obj10 = callback(burst_count[28]);
    }
    obj.trailing = tmp22;
    obj.onLongPress = function onLongPress() {
      obj = { userId: id, channelId: NORMAL, messageId: id, localUser: obj, sourceAnalyticsLocations: outer1_6 };
      id(8492)(obj);
    };
    const items = [outer1_16(messageId(burst_count[24]), obj), ];
    let tmp30 = null;
    if (arg1 !== diff) {
      tmp30 = outer1_16(messageId(burst_count[31]), {});
    }
    items[1] = tmp30;
    obj.children = items;
    return outer1_17(outer1_8, obj);
  }, items);
}
function useRenderQuickActions(channelId, messageId, reactionSelected, reactors) {
  let closure_0 = channelId;
  let closure_1 = messageId;
  let closure_2 = reactionSelected;
  let closure_3 = reactors;
  let tmp = callback3();
  let BurstReactionAnimationPreview = tmp;
  const items = [reactors, channelId, messageId, reactionSelected, tmp];
  return React.useCallback((arg0, arg1) => {
    const channelId = dependencyMap[arg1];
    if (burst_count.burst_count > 0) {
      let NORMAL = channelId(7006).ReactionTypes.BURST;
    } else {
      NORMAL = channelId(7006).ReactionTypes.NORMAL;
      const tmp = channelId;
    }
    let obj = { style: tmp.buttonRow };
    obj = {};
    const intl = channelId(1212).intl;
    obj.title = intl.string(channelId(1212).t.N86XcP);
    obj.IconComponent = channelId(5119).XSmallIcon;
    obj.color = messageId(689).unsafe_rawColors.RED_400;
    obj.onPress = function onPress() {
      let obj = lib(7005);
      obj = { channelId: lib, messageId: NORMAL, emoji: outer1_2.emoji, location: lib(7005).ReactionLocations.MESSAGE, userId: lib.id };
      obj = { burst: NORMAL === lib(7006).ReactionTypes.BURST };
      obj.options = obj;
      return obj.removeReaction(obj);
    };
    obj.height = 48;
    obj.children = outer1_16(messageId(9430), obj);
    return outer1_16(outer1_8, obj);
  }, items);
}
function ReactionTab(arg0) {
  let animated;
  let reaction;
  let selected;
  ({ reaction, selected } = arg0);
  const tmp = callback3();
  let obj = require(9431) /* useEmojiColorPalette */;
  let burst_colors = reaction.burst_colors;
  if (null == burst_colors) {
    burst_colors = [];
  }
  const emojiColorPalette = obj.useEmojiColorPalette(burst_colors);
  let accentColor;
  if (null != emojiColorPalette) {
    accentColor = emojiColorPalette.accentColor;
  }
  let tmp5 = null;
  if (null != accentColor) {
    obj = { color: emojiColorPalette.accentColor };
    tmp5 = obj;
  }
  let tmp6 = null;
  if (null != emojiColorPalette) {
    obj = {};
    let obj3 = require(3974) /* hexToRgb */;
    obj.backgroundColor = obj3.hexOpacityToRgba(emojiColorPalette.backgroundColor, emojiColorPalette.opacity);
    tmp6 = obj;
  }
  const emoji = reaction.emoji;
  let obj4 = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj4.useStateFromStores(items, () => outer1_9.useReducedMotion);
  const AnimateEmoji = require(3803) /* explicitContentFromProto */.AnimateEmoji;
  let emojiURL;
  if (null != emoji.id) {
    const obj1 = {};
    ({ id: obj7.id, animated } = emoji);
    if (animated) {
      animated = !stateFromStores;
    }
    if (animated) {
      animated = tmp10;
    }
    obj1.animated = animated;
    obj1.size = 48;
    emojiURL = importDefault(1392).getEmojiURL(obj1);
    const obj6 = importDefault(1392);
  }
  const obj2 = {};
  const items1 = [tmp.tabContainer, , ];
  let tabContainerSelected = null;
  if (selected) {
    tabContainerSelected = tmp.tabContainerSelected;
  }
  items1[1] = tabContainerSelected;
  let tmp17 = null;
  if (selected) {
    tmp17 = null;
    if (tmp2) {
      tmp17 = tmp6;
    }
  }
  items1[2] = tmp17;
  obj2.style = items1;
  obj2.accessible = true;
  obj2.accessibilityLabel = emoji.name;
  obj2.accessibilityState = { selected };
  obj3 = { src: emojiURL, name: emoji.name };
  const items2 = [, ];
  ({ emoji: arr4[0], emojiText: arr4[1] } = tmp);
  obj3.textEmojiStyle = items2;
  const items3 = [, ];
  ({ emoji: arr5[0], emojiImage: arr5[1] } = tmp);
  obj3.fastImageStyle = items3;
  const items4 = [callback(importDefault(5151), obj3), ];
  obj4 = { variant: "text-md/bold" };
  const items5 = [tmp.reactionCountText, , ];
  let prop = null;
  if (selected) {
    prop = tmp.reactionCountTextSelected;
  }
  items5[1] = prop;
  let tmp20 = null;
  if (reaction.burst_count > 0) {
    tmp20 = tmp5;
  }
  items5[2] = tmp20;
  obj4.style = items5;
  obj4.children = reaction.burst_count > 0 ? reaction.burst_count : reaction.count;
  items4[1] = callback(require(4126) /* Text */.Text, obj4);
  obj2.children = items4;
  let name = emoji.id;
  if (null == name) {
    name = emoji.name;
  }
  return closure_17(closure_8, obj2, name);
}
function RemoveAllButton(channelId) {
  let reactionSelectedIndex;
  let require;
  ({ reactions: require, reactionSelectedIndex } = channelId);
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  let obj = require(messageId[14]);
  const items = [closure_10];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_10.getChannel(channelId), items1);
  const useReducedMotion = callback.useReducedMotion;
  const tmp = callback3();
  const tmp4 = useReducedMotion(React.useState(true), 2);
  React = tmp4[0];
  let closure_6 = tmp4[1];
  let obj1 = require(messageId[10]);
  const sharedValue = obj1.useSharedValue(64);
  let obj2 = require(messageId[10]);
  class S {
    constructor() {
      obj = {};
      if (useReducedMotion) {
        tmp5 = closure_7;
        value = closure_7.get();
      } else {
        tmp = reactions;
        tmp2 = messageId;
        num = 39;
        obj2 = reactions(messageId[39]);
        tmp3 = closure_7;
        obj = {};
        num2 = 200;
        obj.duration = 200;
        value = obj2.withTiming(closure_7.get(), obj);
      }
      obj.maxWidth = value;
      return obj;
    }
  }
  obj = { useReducedMotion, buttonWidth: sharedValue, withTiming: require(messageId[39]).withTiming };
  S.__closure = obj;
  S.__workletHash = 16499689496895;
  S.__initData = closure_20;
  const animatedStyle = obj2.useAnimatedStyle(S);
  let obj4 = require(messageId[10]);
  const sharedValue1 = obj4.useSharedValue(0);
  const tmp3 = reactionSelectedIndex(messageId[38])(stateFromStores);
  class T {
    constructor() {
      obj = { opacity: null, color: "white", fontSize: 14, marginLeft: 8, textAlignVertical: "center" };
      if (useReducedMotion) {
        tmp5 = useSharedValue;
        value = useSharedValue.get();
      } else {
        tmp = reactions;
        tmp2 = messageId;
        num = 39;
        obj2 = reactions(messageId[39]);
        tmp3 = useSharedValue;
        obj = {};
        num2 = 125;
        obj.duration = 125;
        value = obj2.withTiming(useSharedValue.get(), obj);
      }
      obj.opacity = value;
      return obj;
    }
  }
  obj = { useReducedMotion, textOpacity: sharedValue1, withTiming: require(messageId[39]).withTiming };
  T.__closure = obj;
  T.__workletHash = 8698187840986;
  T.__initData = closure_21;
  const items2 = [sharedValue, sharedValue1];
  const animatedStyle1 = require(messageId[10]).useAnimatedStyle(T);
  callback = React.useCallback(() => {
    callback(true);
    const result = sharedValue.set(32);
    const result1 = sharedValue1.set(0);
  }, items2);
  const items3 = [reactionSelectedIndex, callback];
  const effect = React.useEffect(() => {
    callback();
  }, items3);
  let tmp11 = null;
  if (tmp3) {
    obj1 = {
      onPress() {
          if (Divider) {
            callback(false);
            const result = sharedValue.set(outer1_0(messageId[40]).getWindowDimensions().width);
            const result1 = sharedValue1.set(1);
            const obj2 = outer1_0(messageId[40]);
          } else {
            channelId(messageId[18]).removeEmojiReactions(channelId, messageId, table[reactionSelectedIndex].emoji);
            callback();
            const obj = channelId(messageId[18]);
          }
        }
    };
    obj2 = {};
    const items4 = [tmp.removeAllButton, animatedStyle];
    obj2.style = items4;
    const obj3 = { color: reactionSelectedIndex(messageId[13]).unsafe_rawColors.WHITE, size: "sm" };
    const items5 = [callback(require(messageId[41]).TrashIcon, obj3), ];
    obj4 = { style: animatedStyle1, variant: "text-sm/semibold", color: "text-overlay-light" };
    const intl = require(messageId[33]).intl;
    obj4.children = intl.string(require(messageId[33]).t["zx/e4P"]);
    items5[1] = callback(closure_18, obj4);
    obj2.children = items5;
    obj1.children = callback2(reactionSelectedIndex(messageId[10]).View, obj2);
    tmp11 = callback(sharedValue, obj1);
  }
  return tmp11;
}
function EmojiOptionsButton(channelId) {
  let reactionSelectedIndex;
  let reactions;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  ({ reactions, reactionSelectedIndex } = channelId);
  let obj = channelId(566);
  const items = [closure_10];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_10.getChannel(channelId), items1);
  const tmp3 = messageId(9432)(stateFromStores);
  const importAll = tmp3;
  const dependencyMap = tmp4;
  const items2 = [channelId, messageId, reactions[reactionSelectedIndex], tmp3];
  obj = {
    onPress: React.useCallback(() => {
      let obj = messageId(tmp4[42]);
      obj = { channelId, messageId, reaction: tmp4, canRemoveReactions: closure_2 };
      obj.openLazy(channelId(tmp4[44])(tmp4[43], tmp4.paths), "ReactionEmojiOptionsActionSheet", obj, "replaceTopSheet");
    }, items2),
    style: callback3().emojiOptionsButton
  };
  obj = { variant: "text-xs/semibold", color: "text-subtle" };
  const intl = channelId(1212).intl;
  obj.children = intl.string(channelId(1212).t.pCaYID);
  const items3 = [callback(channelId(4126).Text, obj), ];
  const obj1 = { color: messageId(689).colors.ICON_SUBTLE, size: "xs" };
  items3[1] = callback(channelId(5514).ChevronSmallRightIcon, obj1);
  obj.children = items3;
  return callback2(closure_7, obj);
}
function ReactionTabs(setReactionSelectedIndex) {
  let reactionSelectedIndex;
  let reactions;
  const tmp = callback3();
  ({ reactions, reactionSelectedIndex } = setReactionSelectedIndex);
  setReactionSelectedIndex = setReactionSelectedIndex.setReactionSelectedIndex;
  let obj = setReactionSelectedIndex(5491);
  obj = { style: tmp.reactionTab };
  obj = {
    tabs: reactions.map((emoji) => {
      const id = emoji.emoji.id;
      let str = "";
      if (null != id) {
        str = id;
      }
      return outer1_16(outer1_28, { reaction: emoji, selected: arg1 === reactionSelectedIndex }, "" + str + ":" + emoji.emoji.name);
    })
  };
  ({ tab: obj3.tabStyle, tabActive: obj3.tabStyleActive, tabSelected: obj3.tabStyleSelected } = tmp);
  obj.tabIndexSelected = reactionSelectedIndex;
  obj.onSelect = function onSelect(arg0) {
    const result = reactionSelectedIndex(outer1_3[48]).triggerHapticFeedback(setReactionSelectedIndex(outer1_3[49]).IMPACT_LIGHT);
    setReactionSelectedIndex(arg0);
  };
  obj.initialNumTabsToRender = reactionSelectedIndex(3769).MAX_REACTIONS;
  const items = [callback(setReactionSelectedIndex(9434), obj), callback(setReactionSelectedIndex(7191), { outer: true }), ];
  const obj1 = { style: tmp.removeButtonContainer };
  const obj2 = { style: tmp.emojiTextIdentifier, variant: "eyebrow", color: "text-default" };
  const tmp2 = closure_17;
  const tmp3 = closure_8;
  const tmp4 = setReactionSelectedIndex(9434);
  const tmp5 = closure_17;
  const tmp6 = closure_8;
  obj2.children = reactionSelectedIndex(3769).getReactionEmojiName(reactions[reactionSelectedIndex].emoji);
  const items1 = [callback(reactionSelectedIndex(4126).Text, obj2), ];
  const obj3 = {};
  const obj6 = reactionSelectedIndex(3769);
  const tmp7 = callback;
  const merged = Object.assign(setReactionSelectedIndex);
  items1[1] = tmp7(obj.useExperiment({ location: "ReactionTabs" }, { autoTrackExposure: false }).tidaWebformEnabled ? EmojiOptionsButton : RemoveAllButton, obj3);
  obj1.children = items1;
  items[2] = tmp5(tmp6, obj1);
  obj.children = items;
  return tmp2(tmp3, obj);
}
({ ActivityIndicator: closure_6, Platform, Pressable: closure_7, View: closure_8 } = get_ActivityIndicator);
({ DEFAULT_NUM_REACTION_USERS: closure_14, Permissions: closure_15 } = ME);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
let closure_18 = require("module_3991").createAnimatedComponent(require("Text").Text);
let obj = { container: { flex: 1 } };
obj = { padding: 32, borderTopLeftRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderTopRightRadius: require("_createForOfIteratorHelperLoose").radii.sm };
obj.containerEmpty = obj;
_createForOfIteratorHelperLoose = { height: 48, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.listRow = _createForOfIteratorHelperLoose;
let obj2 = { flexDirection: "row", alignItems: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, padding: 8, marginTop: 8 };
obj.tabContainer = obj2;
obj.tabContainerSelected = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_BACKGROUND_SELECTED };
obj.tab = { padding: 0, marginHorizontal: 8, marginBottom: 8 };
obj.tabSelected = { borderBottomColor: "transparent" };
let obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_BACKGROUND_SELECTED };
obj.tabActive = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
obj.reactionTab = { display: "flex", flexDirection: "column" };
obj.removeButtonContainer = { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" };
let obj5 = { flexDirection: "row", alignItems: "center", marginRight: require("_createForOfIteratorHelperLoose").space.PX_16, gap: 2 };
obj.emojiOptionsButton = obj5;
let obj6 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_FEEDBACK_CRITICAL, borderRadius: require("_createForOfIteratorHelperLoose").radii.xxl, height: 32, overflow: "hidden", minWidth: 42, marginRight: 20, display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 12 };
obj.removeAllButton = obj6;
let obj4 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
obj.reactionCountText = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
const obj7 = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
obj.reactionCountTextSelected = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE };
obj.emoji = { marginRight: 8 };
const obj9 = { lineHeight: 24, fontSize: 20, textAlign: "center", color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
obj.emojiText = obj9;
obj.emojiImage = { resizeMode: "contain", width: 24, height: 24 };
obj.emojiTextIdentifier = { padding: 16 };
obj.avatar = { marginRight: 10 };
obj.buttonRow = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center" };
obj.loadingSpinner = { height: 48, padding: 6 };
let closure_19 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_20 = { code: "function MessageReactionsContentTsx1(){const{useReducedMotion,buttonWidth,withTiming}=this.__closure;return{maxWidth:useReducedMotion?buttonWidth.get():withTiming(buttonWidth.get(),{duration:200})};}" };
let closure_21 = { code: "function MessageReactionsContentTsx2(){const{useReducedMotion,textOpacity,withTiming}=this.__closure;return{opacity:useReducedMotion?textOpacity.get():withTiming(textOpacity.get(),{duration:125}),color:'white',fontSize:14,marginLeft:8,textAlignVertical:'center'};}" };
let closure_22 = Storage.get("MessageReactionsContent_SwipableBounced", false);
let obj8 = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/reactions/native/MessageReactionsContent.tsx");

export { useReactors };
export { useReactorsOnScrollNative };
export const MessageReactionsEmpty = function MessageReactionsEmpty() {
  const tmp = callback3();
  let obj = require(8502) /* getNoResultsSource */;
  const tmp2 = importDefault(1557)();
  obj = { scrollable: true, startHeight: 338 + tmp2.bottom };
  obj = { style: tmp.containerEmpty };
  const obj1 = { source: obj.useNoResultsSource() };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj1.title = intl.string(require(1212) /* getSystemLocale */.t.HmPOrp);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj1.body = intl2.string(require(1212) /* getSystemLocale */.t["pTJ5J/"]);
  obj.children = callback(require(1273) /* Button */.RefreshEmptyState, obj1);
  obj.children = callback(require(5189) /* BottomSheetModal */.BottomSheetView, obj);
  return callback(require(5187) /* Background */.BottomSheet, obj);
};
export const MessageReactionsContent = function MessageReactionsContent(channelId) {
  let disableManage;
  let emoji;
  let isSelectedBurst;
  let messageId;
  let reactionSelectedIndex;
  let reactions;
  let reactors;
  let reactorsHasMore;
  let setReactionSelectedIndex;
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
  let tmp2 = (function useReactionSelected(reactions) {
    let closure_1;
    let isSelectedBurst;
    reactions = reactions.reactions;
    ({ emoji: closure_1, isSelectedBurst } = reactions);
    if (isSelectedBurst === undefined) {
      isSelectedBurst = false;
    }
    const tmp = outer1_4(outer1_5.useState(() => {
      if (null == closure_1) {
        return 0;
      } else {
        const findIndexResult = reactions.findIndex((emoji) => {
          const emojiEqualsResult = channelId(outer3_3[15]).emojiEquals(emoji.emoji, outer1_1);
          const burst_count = emoji.burst_count;
          let num = 0;
          if (null != burst_count) {
            num = burst_count;
          }
          let tmp2 = num > 0;
          if (outer1_2) {
            if (tmp2) {
              tmp2 = emojiEqualsResult;
            }
            let tmp3 = tmp2;
          } else {
            tmp3 = !tmp2;
            if (!tmp2) {
              tmp3 = emojiEqualsResult;
            }
          }
          return tmp3;
        });
        let num = 0;
        if (findIndexResult >= 0) {
          num = findIndexResult;
        }
        return num;
      }
    }), 2);
    const bound = Math.min(tmp[0], reactions.length - 1);
    return { reactionSelected: reactions[bound], reactionSelectedIndex: bound, setReactionSelectedIndex: tmp[1] };
  })({ reactions, emoji, isSelectedBurst });
  const reactionSelected = tmp2.reactionSelected;
  ({ reactionSelectedIndex, setReactionSelectedIndex } = tmp2);
  if (null != reactionSelected.me_vote) {
    let NORMAL = channelId(7006).ReactionTypes.VOTE;
  } else if (reactionSelected.burst_count > 0) {
    NORMAL = channelId(7006).ReactionTypes.BURST;
  } else {
    NORMAL = channelId(7006).ReactionTypes.NORMAL;
  }
  let obj = { channelId, messageId, reaction: reactionSelected, reactionType: NORMAL };
  let tmp = callback3();
  ({ reactors, reactorsHasMore } = useReactors(obj));
  let obj1 = channelId(566);
  let items = [closure_10];
  let items1 = [channelId];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_10.getChannel(channelId), items1);
  let obj2 = channelId(5650);
  const isActiveChannelOrUnarchivableThread = obj2.useIsActiveChannelOrUnarchivableThread(stateFromStores);
  const tmp9 = useReactors(obj);
  const tmp13 = (function useCanManageMessages(channelId) {
    let closure_0 = channelId;
    const items = [outer1_13];
    const items1 = [channelId];
    return channelId(outer1_3[14]).useStateFromStores(items, () => outer2_13.canWithPartialContext(outer2_15.MANAGE_MESSAGES, { channelId: closure_0 }), items1);
  })(channelId) && !disableManage && isActiveChannelOrUnarchivableThread;
  let name = reactionSelected.emoji.id;
  if (null == name) {
    name = reactionSelected.emoji.name;
  }
  obj = {};
  const intl = channelId(1212).intl;
  obj.accessibilityLabel = intl.string(channelId(1212).t.gHp0C4);
  obj.footerSize = 48;
  obj.insetBottom = importDefault(1557)().bottom;
  obj = { channelId, messageId, reactionSelected, reactors, reactorsHasMore, reactionType: NORMAL };
  obj.onScroll = useReactorsOnScrollNative(obj);
  obj.renderFooter = useRenderFooter(reactors, reactorsHasMore);
  obj.renderItem = useRenderItem(reactors, messageId, channelId, reactionSelected, tmp13);
  obj.renderQuickActions = useRenderQuickActions(channelId, messageId, reactionSelected, reactors);
  obj.itemSize = 48;
  const items2 = [reactors.length];
  obj.sections = items2;
  obj.style = tmp.container;
  const callback = React.useCallback(() => {
    const outer1_22 = true;
    const Storage = channelId(outer1_3[54]).Storage;
    const result = Storage.set("MessageReactionsContent_SwipableBounced", true);
  }, []);
  let obj5 = channelId(477);
  const tmp12 = importDefault(1557)();
  obj1 = { scrollable: true, backdropOpacity: channelId(7026).BACKDROP_OPACITY };
  let tmp17 = null;
  if (NORMAL === channelId(7006).ReactionTypes.BURST) {
    obj2 = { emoji: reactionSelected.emoji, reactionType: NORMAL, messageId, channelId };
    tmp17 = callback(importDefault(7067), obj2);
  }
  obj1.backdropChildren = tmp17;
  let tmp21 = null;
  if (true !== flag) {
    const obj3 = { reactions, reactionSelectedIndex, setReactionSelectedIndex, messageId, channelId };
    tmp21 = callback(ReactionTabs, obj3);
  }
  obj1.header = tmp21;
  if (tmp15) {
    const obj4 = { inActionSheet: true, bounceFirstRowOnMount: !closure_22, onBounceSwipable: callback };
    let tmp25Result = tmp25(9435);
    const merged = Object.assign(obj);
    let tmp24Result = tmp24(tmp25Result, obj4, name);
  } else {
    obj5 = { inActionSheet: true };
    tmp25Result = tmp25(7588);
    const merged1 = Object.assign(obj);
    tmp24Result = tmp24(tmp25Result, obj5, name);
  }
  obj1.children = tmp24Result;
  return callback(channelId(5187).BottomSheet, obj1);
};
