// Module ID: 11375
// Function ID: 88435
// Name: ActionChannelInfo
// Dependencies: []

// Module 11375 (ActionChannelInfo)
function ActionChannelInfo(action) {
  const arg1 = action.action;
  let obj = arg1(dependencyMap[12]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(action.channelId));
  if (null == stateFromStores) {
    obj = {};
    const intl2 = arg1(dependencyMap[15]).intl;
    obj = {};
    const intl3 = arg1(dependencyMap[15]).intl;
    obj.channelName = intl3.string(arg1(dependencyMap[15]).t.J90oLW);
    obj.children = intl2.format(arg1(dependencyMap[15]).t.MkzlDL, obj);
    let obj1 = obj;
  } else {
    obj1 = {};
    const intl = arg1(dependencyMap[15]).intl;
    const obj2 = { channelName: tmp2 };
    obj1.children = intl.format(arg1(dependencyMap[15]).t.MkzlDL, obj2);
  }
  return closure_12(arg1(dependencyMap[14]).Text, obj1);
}
function ChannelActionEmoji(emoji) {
  emoji = emoji.emoji;
  let arg1;
  const tmp = callback4();
  let obj = { style: tmp.emojiPlaceholder };
  obj = { size: arg1(dependencyMap[16]).Icon.Sizes.REFRESH_SMALL_16, source: importDefault(dependencyMap[17]) };
  obj.children = callback2(arg1(dependencyMap[16]).Icon, obj);
  const tmp2 = callback2(View, obj);
  let id;
  if (null != emoji) {
    id = emoji.id;
  }
  arg1 = id;
  if (null != emoji) {
    const name = emoji.name;
  }
  let obj2 = arg1(dependencyMap[12]);
  const items = [closure_7];
  const items1 = [id];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    let customEmojiById = null;
    if (null != id) {
      customEmojiById = customEmojiById.getCustomEmojiById(id);
    }
    return customEmojiById;
  }, items1);
  if (null != stateFromStores) {
    obj = { style: tmp.emoji };
    const obj1 = {};
    const tmp12 = importDefault(dependencyMap[18]);
    obj2 = {};
    ({ id: obj8.id, animated: obj8.animated } = stateFromStores);
    obj2.size = EMOJI_URL_BASE_SIZE;
    obj1.uri = importDefault(dependencyMap[19]).getEmojiURL(obj2);
    obj.source = obj1;
    obj.resizeMode = "contain";
    let tmp8 = callback2(tmp12, obj);
    const obj7 = importDefault(dependencyMap[19]);
  } else {
    tmp8 = tmp2;
    if (null != name) {
      const obj9 = importDefault(dependencyMap[20]);
      tmp8 = tmp2;
      if (null != obj9.getByName(obj10.convertSurrogateToName(name, false))) {
        const obj3 = { style: tmp.textEmoji, variant: "heading-lg/normal", children: name };
        tmp8 = callback2(arg1(dependencyMap[14]).Text, obj3);
      }
      const obj10 = importDefault(dependencyMap[20]);
    }
  }
  return tmp8;
}
function MemberActionChatInputBanner(channel) {
  channel = channel.channel;
  const arg1 = channel;
  let importDefault;
  let dependencyMap;
  let callback;
  let importAllResult;
  let View;
  let closure_6;
  let closure_7;
  let closure_8;
  let closure_9;
  let Routes;
  let EMOJI_URL_BASE_SIZE;
  let sharedValue1;
  function renderAction() {
    let tmp = null;
    if (null != channelAction) {
      let obj = { style: tmp.container };
      obj = { emoji: channelAction.emoji };
      const items = [sharedValue1(closure_20, obj), , ];
      obj = { style: tmp.text };
      const obj1 = { style: tmp.wrap, children: channelAction.title };
      const items1 = [sharedValue1(channel(channelAction[14]).Text, obj1), ];
      const obj2 = {};
      const intl = channel(channelAction[15]).intl;
      obj2.children = intl.string(channel(channelAction[15]).t.ElGg8+);
      items1[1] = sharedValue1(channel(channelAction[14]).Text, obj2);
      obj.children = items1;
      items[1] = callback(stateFromStores, obj);
      let tmp17 = completed;
      if (completed) {
        const obj3 = { disableColor: true, size: channel(channelAction[16]).Icon.Sizes.MEDIUM, source: tmp(channelAction[25]) };
        tmp17 = sharedValue1(channel(channelAction[16]).Icon, obj3);
      }
      items[2] = tmp17;
      obj.children = items;
      tmp = callback(stateFromStores, obj);
      const tmp2 = callback;
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
      obj.style = tmp.container;
      obj.onPress = function onPress() {
        return lib(closure_2[27]).transitionTo(closure_10.CHANNEL(lib.guild_id, channelId.channelId));
      };
      obj = { emoji: nextMemberAction.emoji };
      const items = [sharedValue1(closure_20, obj), , ];
      obj = { style: tmp.text };
      const obj1 = { style: tmp.wrap };
      const intl2 = channel(channelAction[15]).intl;
      const obj2 = { step: nextMemberAction.title };
      obj1.children = intl2.format(channel(channelAction[15]).t./beONw, obj2);
      const items1 = [sharedValue1(channel(channelAction[14]).Text, obj1), ];
      const obj3 = { action: nextMemberAction };
      items1[1] = sharedValue1(closure_19, obj3);
      obj.children = items1;
      items[1] = callback(stateFromStores, obj);
      const obj4 = { style: tmp.circle };
      const obj5 = { size: channel(channelAction[16]).Icon.Sizes.REFRESH_SMALL_16, style: tmp.icon, source: tmp(channelAction[28]) };
      obj4.children = sharedValue1(channel(channelAction[16]).Icon, obj5);
      items[2] = sharedValue1(stateFromStores, obj4);
      obj.children = items;
      tmp = callback(channel(channelAction[26]).PressableHighlight, obj);
    }
    return tmp;
  }
  const tmp = callback4();
  importDefault = tmp;
  let obj = arg1(dependencyMap[21]);
  const memberActionsForChannel = obj.useMemberActionsForChannel(channel.guild_id, channel);
  const channelAction = memberActionsForChannel.channelAction;
  dependencyMap = channelAction;
  const completed = memberActionsForChannel.completed;
  callback = completed;
  let obj1 = arg1(dependencyMap[21]);
  let channelId;
  if (null != channelAction) {
    channelId = channelAction.channelId;
  }
  const nextMemberAction = obj1.useNextMemberAction(channel.guild_id, channelId);
  importAllResult = nextMemberAction;
  let obj2 = arg1(dependencyMap[12]);
  const items = [closure_6];
  const stateFromStores = obj2.useStateFromStores(items, () => tmp7.useReducedMotion);
  View = stateFromStores;
  let actionType;
  if (null != channelAction) {
    actionType = channelAction.actionType;
  }
  const tmp7 = actionType === arg1(dependencyMap[22]).NewMemberActionTypes.VIEW;
  closure_6 = tmp7;
  const tmp8 = callback(importAllResult.useState(arg1(dependencyMap[22]).CHANNEL_ACTION_BANNER_HEIGHT), 2);
  let num = 0;
  const first = tmp8[0];
  closure_7 = first;
  closure_8 = tmp10;
  const tmp11 = callback(importAllResult.useState(arg1(dependencyMap[22]).CHANNEL_ACTION_BANNER_HEIGHT), 2);
  const first1 = tmp11[0];
  closure_9 = first1;
  Routes = tmp13;
  let obj3 = arg1(dependencyMap[23]);
  const sharedValue = obj3.useSharedValue(0);
  EMOJI_URL_BASE_SIZE = sharedValue;
  let obj4 = arg1(dependencyMap[23]);
  if (completed) {
    num = first1;
  }
  sharedValue1 = obj4.useSharedValue(num);
  const items1 = [sharedValue, completed, tmp7, first];
  const effect = importAllResult.useEffect(() => {
    if (!completed) {
      if (!tmp7) {
        const result = sharedValue.set(first);
      }
    }
    const result1 = sharedValue.set(0);
  }, items1);
  const items2 = [sharedValue1, completed, nextMemberAction, first1];
  const effect1 = importAllResult.useEffect(() => {
    if (completed) {
      if (null != nextMemberAction) {
        const result = sharedValue1.set(first1);
      }
    }
    const result1 = sharedValue1.set(0);
  }, items2);
  let obj5 = arg1(dependencyMap[23]);
  class G {
    constructor() {
      obj = {};
      if (closure_5) {
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
  obj = { useReducedMotion: stateFromStores, height: sharedValue, withDelay: arg1(dependencyMap[23]).withDelay, completed, withTiming: arg1(dependencyMap[24]).withTiming, DECELERATED_EASING: arg1(dependencyMap[16]).DECELERATED_EASING };
  G.__closure = obj;
  G.__workletHash = 5585837927201;
  G.__initData = closure_16;
  const animatedStyle = obj5.useAnimatedStyle(G);
  class B {
    constructor() {
      obj = {};
      if (closure_5) {
        tmp10 = closure_12;
        obj.height = closure_12.get();
        tmp9 = obj;
      } else {
        tmp = channel;
        tmp2 = channelAction;
        num = 23;
        obj2 = channel(channelAction[23]);
        tmp3 = closure_6;
        num2 = 0;
        if (!closure_6) {
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
        tmp7 = closure_12;
        obj = {};
        num4 = 400;
        obj.duration = 400;
        num5 = 16;
        value = closure_12.get();
        obj.easing = channel(channelAction[16]).DECELERATED_EASING;
        obj.height = obj2.withDelay(num2, obj3.withTiming(value, obj));
        tmp9 = obj;
      }
      return tmp9;
    }
  }
  obj = { useReducedMotion: stateFromStores, nextHeight: sharedValue1, withDelay: arg1(dependencyMap[23]).withDelay, isViewAction: tmp7, completed, withTiming: arg1(dependencyMap[24]).withTiming, DECELERATED_EASING: arg1(dependencyMap[16]).DECELERATED_EASING };
  B.__closure = obj;
  B.__workletHash = 10256555667281;
  B.__initData = closure_17;
  const items3 = [tmp8[1]];
  const animatedStyle1 = arg1(dependencyMap[23]).useAnimatedStyle(B);
  [][0] = tmp11[1];
  callback = importAllResult.useCallback((nativeEvent) => {
    tmp10(nativeEvent.nativeEvent.layout.height);
  }, items3);
  if (null == channelAction) {
    return null;
  } else {
    obj1 = {};
    obj2 = { style: tmp.measurement, onLayout: callback, children: renderAction() };
    const items4 = [sharedValue1(View, obj2), , ];
    let tmp25 = !tmp7;
    if (!tmp7) {
      obj3 = {};
      const items5 = [tmp.animatedContainer, animatedStyle];
      obj3.style = items5;
      obj3.children = renderAction();
      tmp25 = sharedValue1(importDefault(dependencyMap[23]).View, obj3);
    }
    items4[1] = tmp25;
    let tmp26 = null;
    if (completed) {
      tmp26 = null;
      if (null != nextMemberAction) {
        obj4 = {};
        obj5 = { style: tmp.measurement, onLayout: tmp21, children: renderNextAction() };
        const items6 = [sharedValue1(View, obj5), ];
        const obj6 = {};
        const items7 = [tmp.animatedContainer, animatedStyle1];
        obj6.style = items7;
        obj6.children = renderNextAction();
        items6[1] = sharedValue1(importDefault(dependencyMap[23]).View, obj6);
        obj4.children = items6;
        tmp26 = callback3(closure_14, obj4);
      }
    }
    items4[2] = tmp26;
    obj1.children = items4;
    return callback3(closure_14, obj1);
  }
  const obj8 = arg1(dependencyMap[23]);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const Routes = arg1(dependencyMap[7]).Routes;
const EMOJI_URL_BASE_SIZE = arg1(dependencyMap[8]).EMOJI_URL_BASE_SIZE;
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = arg1(dependencyMap[9]));
let obj1 = arg1(dependencyMap[10]);
let obj = { animatedContainer: { overflow: "hidden" }, measurement: { -1350914179: 1996489027, -1351079902: 1358954819 } };
obj = { "Bool(false)": null, "Bool(false)": 132, "Bool(false)": 182, "Bool(false)": 132, "Bool(false)": 0, "Bool(false)": 0, backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_BASE_LOWEST };
obj.container = obj;
obj.text = {};
obj.wrap = {};
obj.emoji = { bhk: "<string:1027735553>", bic: "<string:4143972873>" };
obj.textEmoji = { borderRadius: null, borderColor: "absolute" };
obj1 = { paddingVertical: "PlusSmallIcon", paddingHorizontal: "png", justifyContent: true, alignItems: "/assets/design/components/Icon/native/redesign/generated/images", marginVertical: 24, marginLeft: 24, backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[11]).radii.md };
obj.emojiPlaceholder = obj1;
const tmp2 = arg1(dependencyMap[9]);
obj.circle = { backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_BRAND };
const obj2 = { backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_BRAND };
obj.icon = { tintColor: importDefault(dependencyMap[11]).colors.WHITE };
let closure_15 = obj1.createStyles(obj);
let closure_16 = { code: "function MemberActionChatInputBannerTsx1(){const{useReducedMotion,height,withDelay,completed,withTiming,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:height.get()};}return{height:withDelay(completed?800:200,withTiming(height.get(),{duration:400,easing:DECELERATED_EASING}))};}" };
let closure_17 = { code: "function MemberActionChatInputBannerTsx2(){const{useReducedMotion,nextHeight,withDelay,isViewAction,completed,withTiming,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:nextHeight.get()};}return{height:withDelay(!isViewAction&&completed?1200:0,withTiming(nextHeight.get(),{duration:400,easing:DECELERATED_EASING}))};}" };
const memoResult = importAllResult.memo((channel) => {
  channel = channel.channel;
  const arg1 = channel;
  let obj = arg1(dependencyMap[29]);
  const canSeeOnboardingHome = obj.useCanSeeOnboardingHome(channel.guild_id);
  const items = [closure_9];
  const stateFromStores = arg1(dependencyMap[12]).useStateFromStores(items, () => {
    const selfMember = selfMember.getSelfMember(channel.guild_id);
    let isPending;
    if (null != selfMember) {
      isPending = selfMember.isPending;
    }
    return true === isPending;
  });
  const obj2 = arg1(dependencyMap[12]);
  let tmp3 = null;
  if (!obj3.useAllActionsCompleted(channel.guild_id)) {
    tmp3 = null;
    if (!stateFromStores) {
      tmp3 = null;
      if (canSeeOnboardingHome) {
        obj = { channel };
        tmp3 = callback2(MemberActionChatInputBanner, obj);
      }
    }
  }
  return tmp3;
});
const obj3 = { tintColor: importDefault(dependencyMap[11]).colors.WHITE };
const memoResult1 = importAllResult.memo((channel) => {
  let channelAction;
  let completed;
  channel = channel.channel;
  let obj = arg1(dependencyMap[21]);
  const memberActionsForChannel = obj.useMemberActionsForChannel(channel.guild_id, channel);
  ({ channelAction, completed } = memberActionsForChannel);
  let channelId;
  if (null != channelAction) {
    channelId = channelAction.channelId;
  }
  let actionType;
  const nextMemberAction = arg1(dependencyMap[21]).useNextMemberAction(channel.guild_id, channelId);
  if (null != channelAction) {
    actionType = channelAction.actionType;
  }
  if (actionType !== arg1(dependencyMap[22]).NewMemberActionTypes.VIEW) {
    obj = { channel };
    let tmp5 = callback2(memoResult, obj);
  } else {
    tmp5 = null;
    if (completed) {
      tmp5 = null;
    }
  }
  return tmp5;
});
const result = arg1(dependencyMap[30]).fileFinishedImporting("modules/guild_onboarding_home/native/MemberActionChatInputBanner.tsx");

export const MemberActionChatInputBannerGuarded = memoResult;
export const MemberActionsChatInputBannerGuardedOuter = memoResult1;
