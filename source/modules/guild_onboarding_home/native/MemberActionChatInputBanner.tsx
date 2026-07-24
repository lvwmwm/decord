// Module ID: 11414
// Function ID: 88749
// Name: ActionChannelInfo
// Dependencies: [57, 31, 27, 4122, 4991, 1348, 1917, 653, 1852, 33, 4130, 689, 624, 4320, 4126, 1212, 1273, 10976, 5085, 1392, 3771, 11415, 11413, 3991, 4131, 11416, 4660, 1198, 7535, 5605, 2]

// Module 11414 (ActionChannelInfo)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { View } from "shouldNavigate";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { Routes } from "ME";
import { EMOJI_URL_BASE_SIZE } from "set";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
let closure_14;
const require = arg1;
function ActionChannelInfo(action) {
  action = action.action;
  let obj = action(624);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getChannel(action.channelId));
  if (null == stateFromStores) {
    obj = { variant: "text-xxs/normal", color: "text-default" };
    const intl2 = action(1212).intl;
    obj = {};
    const intl3 = action(1212).intl;
    obj.channelName = intl3.string(action(1212).t.J90oLW);
    obj.children = intl2.format(action(1212).t.MkzlDL, obj);
    let obj1 = obj;
  } else {
    obj1 = { variant: "text-xxs/normal", color: "text-default" };
    const intl = action(1212).intl;
    const obj2 = { channelName: tmp2 };
    obj1.children = intl.format(action(1212).t.MkzlDL, obj2);
  }
  return closure_12(action(4126).Text, obj1);
}
function ChannelActionEmoji(emoji) {
  emoji = emoji.emoji;
  let id;
  const tmp = callback3();
  let obj = { style: tmp.emojiPlaceholder };
  obj = { size: id(1273).Icon.Sizes.REFRESH_SMALL_16, source: importDefault(10976) };
  obj.children = callback(id(1273).Icon, obj);
  const tmp2 = callback(View, obj);
  id = undefined;
  if (null != emoji) {
    id = emoji.id;
  }
  if (null != emoji) {
    const name = emoji.name;
  }
  let obj2 = id(624);
  const items = [closure_7];
  const items1 = [id];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    let customEmojiById = null;
    if (null != id) {
      customEmojiById = outer1_7.getCustomEmojiById(id);
    }
    return customEmojiById;
  }, items1);
  if (null != stateFromStores) {
    obj = { style: tmp.emoji };
    const obj1 = {};
    const tmp12 = importDefault(5085);
    obj2 = {};
    ({ id: obj8.id, animated: obj8.animated } = stateFromStores);
    obj2.size = EMOJI_URL_BASE_SIZE;
    obj1.uri = importDefault(1392).getEmojiURL(obj2);
    obj.source = obj1;
    obj.resizeMode = "contain";
    let tmp8 = callback(tmp12, obj);
    const obj7 = importDefault(1392);
  } else {
    tmp8 = tmp2;
    if (null != name) {
      const obj9 = importDefault(3771);
      tmp8 = tmp2;
      if (null != obj9.getByName(obj10.convertSurrogateToName(name, false))) {
        const obj3 = { style: tmp.textEmoji, variant: "heading-lg/normal", children: name };
        tmp8 = callback(id(4126).Text, obj3);
      }
      obj10 = importDefault(3771);
    }
  }
  return tmp8;
}
function MemberActionChatInputBanner(channel) {
  channel = channel.channel;
  let importDefault;
  let channelAction;
  let completed;
  let nextMemberAction;
  let stateFromStores;
  let c6;
  let first;
  let c8;
  let first1;
  let c10;
  let sharedValue;
  let sharedValue1;
  function renderAction() {
    let tmp = null;
    if (null != channelAction) {
      let obj = { style: _undefined.container };
      obj = { emoji: channelAction.emoji };
      const items = [sharedValue1(outer1_20, obj), , ];
      obj = { style: _undefined.text };
      const obj1 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: _undefined.wrap, children: channelAction.title };
      const items1 = [sharedValue1(channel(channelAction[14]).Text, obj1), ];
      const obj2 = { variant: "text-xxs/normal", color: "text-muted" };
      const intl = channel(channelAction[15]).intl;
      obj2.children = intl.string(channel(channelAction[15]).t["ElGg8+"]);
      items1[1] = sharedValue1(channel(channelAction[14]).Text, obj2);
      obj.children = items1;
      items[1] = outer1_13(stateFromStores, obj);
      let tmp17 = completed;
      if (completed) {
        const obj3 = { disableColor: true, size: channel(channelAction[16]).Icon.Sizes.MEDIUM, source: _undefined(channelAction[25]) };
        tmp17 = sharedValue1(channel(channelAction[16]).Icon, obj3);
      }
      items[2] = tmp17;
      obj.children = items;
      tmp = outer1_13(stateFromStores, obj);
      const tmp2 = outer1_13;
      const tmp3 = stateFromStores;
    }
    return tmp;
  }
  function renderNextAction() {
    let tmp = null;
    if (null != nextMemberAction) {
      let obj = { accessibilityRole: "button" };
      const intl = channel(channelAction[15]).intl;
      obj.accessibilityLabel = intl.string(channel(channelAction[15]).t.PDTjLN);
      obj.style = _undefined.container;
      obj.onPress = function onPress() {
        return channel(channelAction[27]).transitionTo(c10.CHANNEL(outer1_0.guild_id, outer1_4.channelId));
      };
      obj = { emoji: nextMemberAction.emoji };
      const items = [sharedValue1(outer1_20, obj), , ];
      obj = { style: _undefined.text };
      const obj1 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: _undefined.wrap };
      const intl2 = channel(channelAction[15]).intl;
      const obj2 = { step: nextMemberAction.title };
      obj1.children = intl2.format(channel(channelAction[15]).t["/beONw"], obj2);
      const items1 = [sharedValue1(channel(channelAction[14]).Text, obj1), ];
      const obj3 = { action: nextMemberAction };
      items1[1] = sharedValue1(outer1_19, obj3);
      obj.children = items1;
      items[1] = outer1_13(stateFromStores, obj);
      const obj4 = { style: _undefined.circle };
      const obj5 = { size: channel(channelAction[16]).Icon.Sizes.REFRESH_SMALL_16, style: _undefined.icon, source: _undefined(channelAction[28]) };
      obj4.children = sharedValue1(channel(channelAction[16]).Icon, obj5);
      items[2] = sharedValue1(stateFromStores, obj4);
      obj.children = items;
      tmp = outer1_13(channel(channelAction[26]).PressableHighlight, obj);
    }
    return tmp;
  }
  let tmp = callback3();
  importDefault = tmp;
  let obj = channel(channelAction[21]);
  const memberActionsForChannel = obj.useMemberActionsForChannel(channel.guild_id, channel);
  channelAction = memberActionsForChannel.channelAction;
  completed = memberActionsForChannel.completed;
  let obj1 = channel(channelAction[21]);
  let channelId;
  if (null != channelAction) {
    channelId = channelAction.channelId;
  }
  nextMemberAction = obj1.useNextMemberAction(channel.guild_id, channelId);
  let obj2 = channel(channelAction[12]);
  let items = [c6];
  stateFromStores = obj2.useStateFromStores(items, () => _undefined2.useReducedMotion);
  let actionType;
  if (null != channelAction) {
    actionType = channelAction.actionType;
  }
  const tmp7 = actionType === channel(channelAction[22]).NewMemberActionTypes.VIEW;
  c6 = tmp7;
  let tmp8 = completed(nextMemberAction.useState(channel(channelAction[22]).CHANNEL_ACTION_BANNER_HEIGHT), 2);
  let num = 0;
  first = tmp8[0];
  c8 = tmp10;
  const tmp11 = completed(nextMemberAction.useState(channel(channelAction[22]).CHANNEL_ACTION_BANNER_HEIGHT), 2);
  first1 = tmp11[0];
  c10 = tmp13;
  let obj3 = channel(channelAction[23]);
  sharedValue = obj3.useSharedValue(0);
  let obj4 = channel(channelAction[23]);
  if (completed) {
    num = first1;
  }
  sharedValue1 = obj4.useSharedValue(num);
  let items1 = [sharedValue, completed, tmp7, first];
  const effect = nextMemberAction.useEffect(() => {
    if (!completed) {
      if (!c6) {
        const result = sharedValue.set(first);
      }
    }
    const result1 = sharedValue.set(0);
  }, items1);
  const items2 = [sharedValue1, completed, nextMemberAction, first1];
  const effect1 = nextMemberAction.useEffect(() => {
    if (completed) {
      if (null != nextMemberAction) {
        const result = sharedValue1.set(first1);
      }
    }
    const result1 = sharedValue1.set(0);
  }, items2);
  let obj5 = channel(channelAction[23]);
  class G {
    constructor() {
      obj = {};
      if (c5) {
        tmp9 = useSharedValue;
        obj.height = useSharedValue.get();
        tmp8 = obj;
      } else {
        tmp = channel;
        tmp2 = channelAction;
        num = 23;
        obj2 = channel(channelAction[23]);
        tmp3 = completed;
        num2 = 200;
        if (completed) {
          num2 = 800;
        }
        tmp4 = channel;
        tmp5 = channelAction;
        num3 = 24;
        obj3 = channel(channelAction[24]);
        tmp6 = useSharedValue;
        obj = {};
        num4 = 400;
        obj.duration = 400;
        num5 = 16;
        value = useSharedValue.get();
        obj.easing = channel(channelAction[16]).DECELERATED_EASING;
        obj.height = obj2.withDelay(num2, obj3.withTiming(value, obj));
        tmp8 = obj;
      }
      return tmp8;
    }
  }
  obj = { useReducedMotion: stateFromStores, height: sharedValue, withDelay: channel(channelAction[23]).withDelay, completed, withTiming: channel(channelAction[24]).withTiming, DECELERATED_EASING: channel(channelAction[16]).DECELERATED_EASING };
  G.__closure = obj;
  G.__workletHash = 5585837927201;
  G.__initData = closure_16;
  const animatedStyle = obj5.useAnimatedStyle(G);
  class B {
    constructor() {
      obj = {};
      if (c5) {
        tmp10 = c12;
        obj.height = c12.get();
        tmp9 = obj;
      } else {
        tmp = channel;
        tmp2 = channelAction;
        num = 23;
        obj2 = channel(channelAction[23]);
        tmp3 = c6;
        num2 = 0;
        if (!c6) {
          tmp4 = completed;
          num2 = 0;
          if (completed) {
            num2 = 1200;
          }
        }
        tmp5 = channel;
        tmp6 = channelAction;
        num3 = 24;
        obj3 = channel(channelAction[24]);
        tmp7 = c12;
        obj = {};
        num4 = 400;
        obj.duration = 400;
        num5 = 16;
        value = c12.get();
        obj.easing = channel(channelAction[16]).DECELERATED_EASING;
        obj.height = obj2.withDelay(num2, obj3.withTiming(value, obj));
        tmp9 = obj;
      }
      return tmp9;
    }
  }
  obj = { useReducedMotion: stateFromStores, nextHeight: sharedValue1, withDelay: channel(channelAction[23]).withDelay, isViewAction: tmp7, completed, withTiming: channel(channelAction[24]).withTiming, DECELERATED_EASING: channel(channelAction[16]).DECELERATED_EASING };
  B.__closure = obj;
  B.__workletHash = 10256555667281;
  B.__initData = closure_17;
  const items3 = [tmp8[1]];
  const animatedStyle1 = channel(channelAction[23]).useAnimatedStyle(B);
  [][0] = tmp11[1];
  const callback = nextMemberAction.useCallback((nativeEvent) => {
    _undefined3(nativeEvent.nativeEvent.layout.height);
  }, items3);
  if (null == channelAction) {
    return null;
  } else {
    obj1 = {};
    obj2 = { style: tmp.measurement, onLayout: callback, children: renderAction() };
    const items4 = [sharedValue1(stateFromStores, obj2), , ];
    let tmp25 = !tmp7;
    if (!tmp7) {
      obj3 = {};
      const items5 = [tmp.animatedContainer, animatedStyle];
      obj3.style = items5;
      obj3.children = renderAction();
      tmp25 = sharedValue1(importDefault(channelAction[23]).View, obj3);
    }
    items4[1] = tmp25;
    let tmp26 = null;
    if (completed) {
      tmp26 = null;
      if (null != nextMemberAction) {
        obj4 = {};
        obj5 = { style: tmp.measurement, onLayout: tmp21, children: renderNextAction() };
        const items6 = [sharedValue1(stateFromStores, obj5), ];
        const obj6 = {};
        const items7 = [tmp.animatedContainer, animatedStyle1];
        obj6.style = items7;
        obj6.children = renderNextAction();
        items6[1] = sharedValue1(importDefault(channelAction[23]).View, obj6);
        obj4.children = items6;
        tmp26 = callback2(closure_14, obj4);
      }
    }
    items4[2] = tmp26;
    obj1.children = items4;
    return callback2(closure_14, obj1);
  }
  const obj8 = channel(channelAction[23]);
}
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = jsxProd);
let obj = { animatedContainer: { overflow: "hidden" }, measurement: { opacity: 0, position: "absolute" } };
obj = { display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: 12, paddingVertical: 8 };
obj.container = obj;
obj.text = { flexGrow: 1, flexShrink: 1, marginLeft: 8 };
obj.wrap = { flexShrink: 1, flexWrap: "wrap" };
obj.emoji = { width: 24, height: 24 };
obj.textEmoji = { width: 24, textAlign: "center" };
_createForOfIteratorHelperLoose = { width: 24, height: 24, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, display: "flex", alignItems: "center", justifyContent: "center" };
obj.emojiPlaceholder = _createForOfIteratorHelperLoose;
let obj2 = { display: "flex", alignItems: "center", justifyContent: "center", height: 20, width: 20, borderRadius: 15, marginLeft: 8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
obj.circle = obj2;
obj.icon = { tintColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
let closure_15 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_16 = { code: "function MemberActionChatInputBannerTsx1(){const{useReducedMotion,height,withDelay,completed,withTiming,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:height.get()};}return{height:withDelay(completed?800:200,withTiming(height.get(),{duration:400,easing:DECELERATED_EASING}))};}" };
let closure_17 = { code: "function MemberActionChatInputBannerTsx2(){const{useReducedMotion,nextHeight,withDelay,isViewAction,completed,withTiming,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:nextHeight.get()};}return{height:withDelay(!isViewAction&&completed?1200:0,withTiming(nextHeight.get(),{duration:400,easing:DECELERATED_EASING}))};}" };
const memoResult = importAllResult.memo((channel) => {
  channel = channel.channel;
  let obj = channel(5605);
  const canSeeOnboardingHome = obj.useCanSeeOnboardingHome(channel.guild_id);
  const items = [closure_9];
  const stateFromStores = channel(624).useStateFromStores(items, () => {
    const selfMember = outer1_9.getSelfMember(channel.guild_id);
    let isPending;
    if (null != selfMember) {
      isPending = selfMember.isPending;
    }
    return true === isPending;
  });
  const obj2 = channel(624);
  let tmp3 = null;
  if (!obj3.useAllActionsCompleted(channel.guild_id)) {
    tmp3 = null;
    if (!stateFromStores) {
      tmp3 = null;
      if (canSeeOnboardingHome) {
        obj = { channel };
        tmp3 = callback(MemberActionChatInputBanner, obj);
      }
    }
  }
  return tmp3;
});
let obj3 = { tintColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
const memoResult1 = importAllResult.memo((channel) => {
  let channelAction;
  let completed;
  channel = channel.channel;
  let obj = require(11415) /* useMemberActionsForChannel */;
  const memberActionsForChannel = obj.useMemberActionsForChannel(channel.guild_id, channel);
  ({ channelAction, completed } = memberActionsForChannel);
  let channelId;
  if (null != channelAction) {
    channelId = channelAction.channelId;
  }
  let actionType;
  const nextMemberAction = require(11415) /* useMemberActionsForChannel */.useNextMemberAction(channel.guild_id, channelId);
  if (null != channelAction) {
    actionType = channelAction.actionType;
  }
  if (actionType !== require(11413) /* _createForOfIteratorHelperLoose */.NewMemberActionTypes.VIEW) {
    obj = { channel };
    let tmp5 = callback(closure_18, obj);
  } else {
    tmp5 = null;
    if (completed) {
      tmp5 = null;
    }
  }
  return tmp5;
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_onboarding_home/native/MemberActionChatInputBanner.tsx");

export const MemberActionChatInputBannerGuarded = memoResult;
export const MemberActionsChatInputBannerGuardedOuter = memoResult1;
