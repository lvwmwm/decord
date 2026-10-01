// Module ID: 11770
// Function ID: 11771
// Name: MemberActionChatInputBanner
// Dependencies: [32, 19, 17, 4825, 5771, 2045, 2108, 1074, 1375, 21, 4836, 576, 563, 4989, 4832, 1115, 1177, 11282, 5899, 1397, 4483, 11771, 11768, 4566, 4837, 11772, 5435, 1101, 11769, 6643, 2]

// Module 11770 (MemberActionChatInputBanner)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl4 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import EmojiConstants from "EmojiConstants" /* 1375 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4483 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import Text_Text from "Text/Text" /* 4832 */;
import timing from "timing" /* 4837 */;
import useChannelNameDefault from "useChannelName" /* 4989 */;
import Pressables from "Pressables" /* 5435 */;
import FastImageDefault from "FastImage" /* 5899 */;
import AssetRegistryDefault from "AssetRegistry" /* 11282 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11769 */;
import MemberActionUtils from "MemberActionUtils" /* 11771 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 11772 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import EmojiStore from "EmojiStore" /* 5771 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let closure_12;
let closure_14;
let map1;
let obj2;
let obj3;
let size;
let size1;
let tmp;
const GuildOnboardingHomeTypes = tmp(11768);
function ActionChannelInfo(action) {
  let MkzlDL;
  let format;
  let intl;
  let intl3;
  let obj3;
  let obj4;
  let obj5;
  action = action.action;
  const items = [ChannelStore];
  const obj = action(563);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(action.channelId));
  const tmp4 = useChannelNameDefault(stateFromStores, true);
  const Text = action(4832).Text;
  const tmp5 = closure_12;
  if (null == stateFromStores) {
    const obj2 = { variant: "text-xxs/normal", color: "text-default", children: format(MkzlDL, obj3) };
    const intl2 = tmp(1115).intl;
    format = intl2.format;
    obj3 = { channelName: intl3.string(action(1115).t.J90oLW) };
    MkzlDL = tmp(1115).t.MkzlDL;
    intl3 = tmp(1115).intl;
    obj4 = obj2;
  } else {
    obj4 = { variant: "text-xxs/normal", color: "text-default", children: intl.format(action(1115).t.MkzlDL, obj5) };
    intl = tmp(1115).intl;
    obj5 = { channelName: tmp4 };
  }
  return tmp5(Text, obj4);
}
function ChannelActionEmoji(emoji) {
  let Icon;
  let name;
  let obj2;
  let obj4;
  let obj5;
  let tmp2Result;
  let tmp5Result4;
  emoji = emoji.emoji;
  let id;
  const tmp = closure_15();
  const obj = { style: tmp.emojiPlaceholder, children: closure_12(Icon, obj2) };
  obj2 = { size: id(1177).Icon.Sizes.REFRESH_SMALL_16, source: AssetRegistryDefault };
  Icon = id(1177).Icon;
  const tmp6 = closure_12(View, obj);
  id = undefined;
  if (emoji != null) {
    id = emoji.id;
  }
  if (emoji != null) {
    name = emoji.name;
  }
  const items = [EmojiStore];
  const items1 = [id];
  const tmp3Result = id(563);
  const stateFromStores = tmp3Result.useStateFromStores(items, () => {
    let customEmojiById = null;
    if (null != id) {
      customEmojiById = EmojiStore.getCustomEmojiById(tmp);
    }
    return customEmojiById;
  }, items1);
  if (null != stateFromStores) {
    const obj3 = { style: tmp.emoji, source: obj4, resizeMode: "contain" };
    obj4 = { uri: tmp5Result4.getEmojiURL(obj5) };
    obj5 = { id: null, animated: null, size: EMOJI_URL_BASE_SIZE };
    ({ id: obj9.id, animated: obj9.animated } = stateFromStores);
    const tmp5Result = FastImageDefault;
    tmp5Result4 = AvatarUtilsDefault;
    tmp2Result = tmp2(tmp5Result, obj3);
  } else {
    tmp2Result = tmp6;
    if (null != name) {
      const getByName = UnicodeEmojisDefault.getByName;
      UnicodeEmojisDefault;
      tmp2Result = tmp6;
      const tmp5Result6 = UnicodeEmojisDefault;
      if (null != getByName(tmp5Result6.convertSurrogateToName(name, false))) {
        const obj6 = { style: tmp.textEmoji, variant: "heading-lg/normal", children: name };
        tmp2Result = tmp2(tmp3(4832).Text, obj6);
      }
    }
  }
  return tmp2Result;
}
function MemberActionChatInputBanner(channel) {
  let closure_1;
  let items5;
  let items6;
  let items7;
  channel = channel.channel;
  let channelAction;
  let nextMemberAction;
  let stateFromStores;
  let useReducedMotion;
  let first;
  let closure_8;
  let first1;
  let closure_10;
  let sharedValue;
  let sharedValue1;
  let tmp = closure_15();
  importDefault = tmp;
  let tmp2 = channel;
  let tmp3 = channelAction;
  let obj = channel(channelAction[21]);
  const memberActionsForChannel = obj.useMemberActionsForChannel(channel.guild_id, channel);
  channelAction = memberActionsForChannel.channelAction;
  const completed = memberActionsForChannel.completed;
  let channelId;
  const useNextMemberAction = channel(channelAction[21]).useNextMemberAction;
  const guild_id = channel.guild_id;
  const tmp5 = channel(channelAction[21]);
  if (channelAction != null) {
    channelId = channelAction.channelId;
  }
  nextMemberAction = useNextMemberAction(guild_id, channelId);
  let items = [useReducedMotion];
  const tmp2Result = tmp2(tmp3[12]);
  stateFromStores = tmp2Result.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let actionType;
  if (channelAction != null) {
    actionType = channelAction.actionType;
  }
  const tmp10 = actionType === tmp2(tmp3[22]).NewMemberActionTypes.VIEW;
  useReducedMotion = tmp10;
  let obj3 = nextMemberAction;
  const tmp11 = completed(nextMemberAction.useState(tmp2(tmp3[22]).CHANNEL_ACTION_BANNER_HEIGHT), 2);
  first = tmp11[0];
  closure_8 = tmp13;
  const tmp14 = completed(nextMemberAction.useState(tmp2(tmp3[22]).CHANNEL_ACTION_BANNER_HEIGHT), 2);
  first1 = tmp14[0];
  closure_10 = tmp16;
  const tmp2Result5 = tmp2(tmp3[23]);
  sharedValue = tmp2Result5.useSharedValue(0);
  let num = 0;
  const useSharedValue = tmp2(tmp3[23]).useSharedValue;
  tmp2(tmp3[23]);
  if (completed) {
    num = first1;
  }
  sharedValue1 = useSharedValue(num);
  let items1 = [sharedValue, completed, tmp10, first];
  const effect = obj3.useEffect(() => {
    const tmp = completed;
    if (!tmp) {
      const tmp2 = useReducedMotion;
      if (!tmp2) {
        const result = sharedValue.set(first);
      }
    }
    const result1 = sharedValue.set(0);
  }, items1);
  const items2 = [sharedValue1, completed, nextMemberAction, first1];
  const effect1 = obj3.useEffect(() => {
    const tmp = completed;
    if (tmp) {
      if (null != nextMemberAction) {
        const result = sharedValue1.set(first1);
      }
    }
    const result1 = sharedValue1.set(0);
  }, items2);
  const tmp2Result7 = tmp2(tmp3[23]);
  class G {
    constructor() {
      let tmp8;
      const obj = { height: null };
      if (stateFromStores) {
        obj.height = sharedValue.get();
        tmp8 = obj;
      } else {
        let num = 200;
        const withDelay = ReanimatedRexport.withDelay;
        ReanimatedRexport;
        if (completed) {
          num = 800;
        }
        const withTiming = timing.withTiming;
        const obj2 = { duration: 400, easing: native.DECELERATED_EASING };
        timing;
        const value = sharedValue.get();
        obj.height = withDelay(num, withTiming(value, obj2));
        tmp8 = obj;
      }
      return tmp8;
    }
  }
  let obj2 = { useReducedMotion: stateFromStores, height: sharedValue, withDelay: tmp2(tmp3[23]).withDelay, completed, withTiming: tmp2(tmp3[24]).withTiming, DECELERATED_EASING: tmp2(tmp3[16]).DECELERATED_EASING };
  G.__closure = obj2;
  G.__workletHash = 5585837927201;
  G.__initData = __initData;
  const animatedStyle = tmp2Result7.useAnimatedStyle(G);
  const tmp2Result8 = tmp2(tmp3[23]);
  class B {
    constructor() {
      let tmp9;
      const obj = { height: null };
      if (stateFromStores) {
        obj.height = sharedValue1.get();
        tmp9 = obj;
      } else {
        let num = 0;
        const withDelay = ReanimatedRexport.withDelay;
        ReanimatedRexport;
        if (!useReducedMotion) {
          num = 0;
          if (completed) {
            num = 1200;
          }
        }
        const withTiming = timing.withTiming;
        const obj2 = { duration: 400, easing: native.DECELERATED_EASING };
        timing;
        const value = sharedValue1.get();
        obj.height = withDelay(num, withTiming(value, obj2));
        tmp9 = obj;
      }
      return tmp9;
    }
  }
  let obj4 = { useReducedMotion: stateFromStores, nextHeight: sharedValue1, withDelay: tmp2(tmp3[23]).withDelay, isViewAction: tmp10, completed, withTiming: tmp2(tmp3[24]).withTiming, DECELERATED_EASING: tmp2(tmp3[16]).DECELERATED_EASING };
  B.__closure = obj4;
  B.__workletHash = 10256555667281;
  B.__initData = __initData2;
  const items3 = [tmp11[1]];
  const animatedStyle1 = tmp2Result8.useAnimatedStyle(B);
  [][0] = tmp14[1];
  const callback = obj3.useCallback((nativeEvent) => {
    closure_8(nativeEvent.nativeEvent.layout.height);
  }, items3);
  if (null == channelAction) {
    return null;
  } else {
    function renderAction() {
      let intl;
      let items;
      let items1;
      let tmp3Result = null;
      if (null != channelAction) {
        const obj = { style: closure_1.container, children: items };
        const obj2 = { emoji: channelAction.emoji };
        items = [sharedValue1(ChannelActionEmoji, obj2), , ];
        const obj3 = { style: closure_1.text, children: items1 };
        const obj4 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: closure_1.wrap, children: channelAction.title };
        items1 = [sharedValue1(Text_Text.Text, obj4), ];
        const obj5 = { variant: "text-xxs/normal", color: "text-muted", children: intl.string(intl4.t["ElGg8+"]) };
        const Text = Text_Text.Text;
        intl = intl4.intl;
        items1[1] = sharedValue1(Text, obj5);
        items[1] = map1(View, obj3);
        let tmp6Result = completed;
        const tmp3 = map1;
        const tmp4 = View;
        const tmp6 = sharedValue1;
        if (tmp6Result) {
          const obj6 = { disableColor: true, size: native.Icon.Sizes.MEDIUM, source: AssetRegistryDefault3 };
          const Icon = tmp8(1177).Icon;
          tmp6Result = tmp6(Icon, obj6);
        }
        items[2] = tmp6Result;
        tmp3Result = tmp3(tmp4, obj);
      }
      return tmp3Result;
    }
    let obj5 = { style: tmp.measurement, onLayout: callback, children: renderAction() };
    const items4 = [sharedValue1(stateFromStores, obj5), , ];
    let tmp32Result = !tmp10;
    const tmp33 = stateFromStores;
    if (tmp32Result) {
      let obj6 = { style: items5, children: renderAction() };
      items5 = [tmp.animatedContainer, animatedStyle];
      View = require("ReanimatedRexport").View;
      tmp32Result = tmp32(View, obj6);
    }
    items4[1] = tmp32Result;
    let tmp30Result = null;
    if (completed) {
      tmp30Result = null;
      if (null != nextMemberAction) {
        function renderNextAction() {
          let Icon;
          let channelId;
          let guild_id;
          let intl;
          let intl2;
          let items;
          let items1;
          let obj5;
          let obj8;
          let tmp2 = null;
          if (null != nextMemberAction) {
            let obj = {
              accessibilityRole: "button",
              accessibilityLabel: intl.string(intl4.t.PDTjLN),
              style: closure_1.container,
              onPress() {
                  const obj = channel(channelAction[27]);
                  return obj.transitionTo(closure_10.CHANNEL(guild_id.guild_id, channelId.channelId));
                },
              children: items
            };
            const PressableHighlight = Pressables.PressableHighlight;
            intl = intl4.intl;
            const obj2 = { emoji: nextMemberAction.emoji };
            items = [sharedValue1(ChannelActionEmoji, obj2), , ];
            const obj3 = { style: closure_1.text, children: items1 };
            const obj4 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: closure_1.wrap, children: intl2.format(intl4.t["/beONw"], obj5) };
            const Text = Text_Text.Text;
            intl2 = intl4.intl;
            obj5 = { step: nextMemberAction.title };
            items1 = [sharedValue1(Text, obj4), ];
            const obj6 = { action: nextMemberAction };
            items1[1] = sharedValue1(ActionChannelInfo, obj6);
            items[1] = map1(View, obj3);
            const obj7 = { style: closure_1.circle, children: sharedValue1(Icon, obj8) };
            obj8 = { size: native.Icon.Sizes.REFRESH_SMALL_16, style: closure_1.icon, source: AssetRegistryDefault2 };
            Icon = native.Icon;
            items[2] = sharedValue1(View, obj7);
            tmp2 = map1(PressableHighlight, obj);
          }
          return tmp2;
        }
        let obj7 = { children: items6 };
        let obj8 = { style: tmp.measurement, onLayout: tmp25, children: renderNextAction() };
        items6 = [sharedValue1(tmp33, obj8), ];
        const obj9 = { style: items7, children: renderNextAction() };
        items7 = [tmp.animatedContainer, animatedStyle1];
        const View2 = require("ReanimatedRexport").View;
        items6[1] = sharedValue1(View2, obj9);
        tmp30Result = tmp30(tmp31, obj7);
      }
    }
    const obj10 = { children: items4 };
    items4[2] = tmp30Result;
    return closure_13(closure_14, obj10);
  }
}
let View = react_native.View;
const Routes = Constants.Routes;
const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { animatedContainer: { overflow: "hidden" }, measurement: { opacity: 0, position: "absolute" }, container: obj2, text: { flexGrow: 1, flexShrink: 1, marginLeft: 8 }, wrap: { flexShrink: 1, flexWrap: "wrap" }, emoji: { width: 24, height: 24 }, textEmoji: { width: 24, textAlign: "center" }, emojiPlaceholder: size, circle: size1, icon: obj3 };
obj2 = { display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: 12, paddingVertical: 8 };
createStyles = createStyles.createStyles;
size = { width: 24, height: 24, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md, display: "flex", alignItems: "center", justifyContent: "center" };
size1 = { display: "flex", alignItems: "center", justifyContent: "center", height: 20, width: 20, borderRadius: 15, marginLeft: 8, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj3 = { tintColor: nativeDefault.colors.WHITE };
let closure_15 = createStyles(obj);
const __initData = { code: "function MemberActionChatInputBannerTsx1(){const{useReducedMotion,height,withDelay,completed,withTiming,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:height.get()};}return{height:withDelay(completed?800:200,withTiming(height.get(),{duration:400,easing:DECELERATED_EASING}))};}" };
const __initData2 = { code: "function MemberActionChatInputBannerTsx2(){const{useReducedMotion,nextHeight,withDelay,isViewAction,completed,withTiming,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:nextHeight.get()};}return{height:withDelay(!isViewAction&&completed?1200:0,withTiming(nextHeight.get(),{duration:400,easing:DECELERATED_EASING}))};}" };
const memoResult = react.memo((channel) => {
  channel = channel.channel;
  const obj = channel(6643);
  const canSeeOnboardingHome = obj.useCanSeeOnboardingHome(channel.guild_id);
  const items = [GuildMemberStore];
  const obj2 = channel(563);
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const selfMember = GuildMemberStore.getSelfMember(channel.guild_id);
    let isPending;
    if (selfMember != null) {
      isPending = selfMember.isPending;
    }
    return true === isPending;
  });
  let tmp3 = null;
  const obj3 = channel(11771);
  if (!obj3.useAllActionsCompleted(channel.guild_id)) {
    tmp3 = null;
    if (!stateFromStores) {
      tmp3 = null;
      if (canSeeOnboardingHome) {
        const obj4 = { channel };
        tmp3 = closure_12(MemberActionChatInputBanner, obj4);
      }
    }
  }
  return tmp3;
});
const memoResult1 = react.memo((channel) => {
  let channelAction;
  let completed;
  let tmp8;
  channel = channel.channel;
  const obj = MemberActionUtils;
  const memberActionsForChannel = obj.useMemberActionsForChannel(channel.guild_id, channel);
  ({ channelAction, completed } = memberActionsForChannel);
  let channelId;
  const useNextMemberAction = MemberActionUtils.useNextMemberAction;
  const guild_id = channel.guild_id;
  MemberActionUtils;
  if (channelAction != null) {
    channelId = channelAction.channelId;
  }
  let actionType;
  const nextMemberAction = useNextMemberAction(guild_id, channelId);
  if (channelAction != null) {
    actionType = channelAction.actionType;
  }
  if (actionType !== GuildOnboardingHomeTypes.NewMemberActionTypes.VIEW) {
    const obj2 = { channel };
    tmp8 = closure_12(memoResult, obj2);
  } else {
    tmp8 = null;
    if (completed) {
      tmp8 = null;
    }
  }
  return tmp8;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_onboarding_home/native/MemberActionChatInputBanner.tsx");

export const MemberActionChatInputBannerGuarded = memoResult;
export const MemberActionsChatInputBannerGuardedOuter = memoResult1;
