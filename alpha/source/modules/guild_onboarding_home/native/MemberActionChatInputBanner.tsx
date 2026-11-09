// Module ID: 14069
// Function ID: 14070
// Name: MemberActionChatInputBanner
// Dependencies: [32, 19, 17, 5141, 6851, 4989, 5052, 1072, 1388, 21, 5140, 575, 563, 5776, 5751, 1113, 1187, 13428, 5842, 1411, 5086, 14070, 7463, 1652, 5370, 14071, 7043, 1099, 14068, 7461, 2]

// Module 14069 (MemberActionChatInputBanner)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl4 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import EmojiConstants from "EmojiConstants" /* 1388 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1411 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 5086 */;
import Text_Text from "Text/Text" /* 5751 */;
import useChannelNameDefault from "useChannelName" /* 5776 */;
import FastImageDefault from "FastImage" /* 5842 */;
import Pressables from "Pressables" /* 7043 */;
import AssetRegistryDefault from "AssetRegistry" /* 13428 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 14068 */;
import MemberActionUtils from "MemberActionUtils" /* 14070 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 14071 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5141 */;
import EmojiStore from "EmojiStore" /* 6851 */;
import ChannelStore from "ChannelStore" /* 4989 */;
import GuildMemberStore from "GuildMemberStore" /* 5052 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let easing, importDefault;

let closure_12;
let closure_14;
let map1;
let obj2;
let obj3;
let size;
let size1;
let tmp;
const GuildOnboardingHomeTypes = tmp(7463);
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
  const Text = action(5751).Text;
  const tmp5 = closure_12;
  if (null == stateFromStores) {
    const obj2 = { variant: "footnote/normal", color: "text-default", children: format(MkzlDL, obj3) };
    const intl2 = tmp(1113).intl;
    format = intl2.format;
    obj3 = { channelName: intl3.string(action(1113).t.J90oLW) };
    MkzlDL = tmp(1113).t.MkzlDL;
    intl3 = tmp(1113).intl;
    obj4 = obj2;
  } else {
    obj4 = { variant: "footnote/normal", color: "text-default", children: intl.format(action(1113).t.MkzlDL, obj5) };
    intl = tmp(1113).intl;
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
  obj2 = { size: id(1187).Icon.Sizes.REFRESH_SMALL_16, source: AssetRegistryDefault };
  Icon = id(1187).Icon;
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
        const obj6 = { style: tmp.textEmoji, variant: "heading-lg/medium", children: name };
        tmp2Result = tmp2(tmp3(5751).Text, obj6);
      }
    }
  }
  return tmp2Result;
}
function MemberActionChatInputBanner(channel) {
  let closure_1;
  let closure_5;
  let items10;
  let items11;
  let items9;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp38;
  let tmp39;
  channel = channel.channel;
  let channelAction;
  let nextMemberAction;
  easing = undefined;
  let first;
  let closure_7;
  let first1;
  let closure_9;
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
  let items = [first];
  const tmp2Result = tmp2(tmp3[12]);
  const stateFromStores = tmp2Result.useStateFromStores(items, () => first.useReducedMotion);
  let actionType;
  if (channelAction != null) {
    actionType = channelAction.actionType;
  }
  const tmp10 = actionType === tmp2(tmp3[22]).NewMemberActionTypes.VIEW;
  easing = tmp10;
  let obj3 = nextMemberAction;
  const tmp11 = completed(nextMemberAction.useState(tmp2(tmp3[22]).CHANNEL_ACTION_BANNER_HEIGHT), 2);
  first = tmp11[0];
  closure_7 = tmp13;
  const tmp14 = completed(nextMemberAction.useState(tmp2(tmp3[22]).CHANNEL_ACTION_BANNER_HEIGHT), 2);
  first1 = tmp14[0];
  closure_9 = tmp16;
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
      const tmp2 = closure_5;
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
  const items3 = [closure_18, stateFromStores, sharedValue, , , , ];
  const useAnimatedStyle = tmp2(tmp3[23]).useAnimatedStyle;
  tmp2(tmp3[23]);
  items3[3] = tmp2(tmp3[23]).withDelay;
  items3[4] = completed;
  items3[5] = tmp2(tmp3[24]).withTiming;
  items3[6] = tmp2(tmp3[16]).DECELERATED_EASING;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29] = items3;
  class MemberActionChatInputBannerTsx1 {
    constructor() {
      let tmp6;
      const obj = { height: null };
      if (c0) {
        obj.height = _undefined.get();
        tmp6 = obj;
      } else {
        let num = 200;
        const tmp = c2;
        if (c3) {
          num = 800;
        }
        const obj2 = { duration: 400, easing };
        obj.height = tmp(num, _undefined2(_undefined.get(), obj2));
        tmp6 = obj;
      }
      return tmp6;
    }
  }
  const items4 = [tmp24, tmp25, tmp26, tmp27, tmp28, tmp29];
  MemberActionChatInputBannerTsx1.__closure = items4;
  MemberActionChatInputBannerTsx1.__workletHash = 16275727828088;
  MemberActionChatInputBannerTsx1.__initData = tmp23;
  const animatedStyle = useAnimatedStyle(MemberActionChatInputBannerTsx1);
  const items5 = [closure_19, stateFromStores, sharedValue1, , , , , ];
  const useAnimatedStyle2 = tmp2(tmp3[23]).useAnimatedStyle;
  tmp2(tmp3[23]);
  items5[3] = tmp2(tmp3[23]).withDelay;
  items5[4] = tmp10;
  items5[5] = completed;
  items5[6] = tmp2(tmp3[24]).withTiming;
  items5[7] = tmp2(tmp3[16]).DECELERATED_EASING;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  let c6;
  [tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39] = items5;
  class MemberActionChatInputBannerTsx2 {
    constructor() {
      let tmp7;
      const obj = { height: null };
      if (c0) {
        obj.height = _undefined.get();
        tmp7 = obj;
      } else {
        let num = 0;
        const tmp = c2;
        if (!c3) {
          num = 0;
          if (c4) {
            num = 1200;
          }
        }
        const obj2 = { duration: 400, easing };
        obj.height = tmp(num, _undefined2(_undefined.get(), obj2));
        tmp7 = obj;
      }
      return tmp7;
    }
  }
  const items6 = [tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39];
  MemberActionChatInputBannerTsx2.__closure = items6;
  MemberActionChatInputBannerTsx2.__workletHash = 12940138330664;
  MemberActionChatInputBannerTsx2.__initData = tmp32;
  const items7 = [tmp11[1]];
  const animatedStyle2 = useAnimatedStyle2(MemberActionChatInputBannerTsx2);
  [][0] = tmp14[1];
  const callback = obj3.useCallback((nativeEvent) => {
    closure_7(nativeEvent.nativeEvent.layout.height);
  }, items7);
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
        items = [authStore2(ChannelActionEmoji, obj2), , ];
        const obj3 = { style: closure_1.text, children: items1 };
        const obj4 = { variant: "body-sm/medium", color: "mobile-text-heading-primary", style: closure_1.wrap, children: channelAction.title };
        items1 = [authStore2(Text_Text.Text, obj4), ];
        const obj5 = { variant: "footnote/normal", color: "text-muted", children: intl.string(intl4.t["ElGg8+"]) };
        const Text = Text_Text.Text;
        intl = intl4.intl;
        items1[1] = authStore2(Text, obj5);
        items[1] = map1(View, obj3);
        let tmp6Result = completed;
        const tmp3 = map1;
        const tmp4 = View;
        const tmp6 = authStore2;
        if (tmp6Result) {
          const obj6 = { disableColor: true, size: native.Icon.Sizes.MEDIUM, source: AssetRegistryDefault3 };
          const Icon = tmp8(1187).Icon;
          tmp6Result = tmp6(Icon, obj6);
        }
        items[2] = tmp6Result;
        tmp3Result = tmp3(tmp4, obj);
      }
      return tmp3Result;
    }
    let obj2 = { style: tmp.measurement, onLayout: callback, children: renderAction() };
    const items8 = [closure_12(easing, obj2), , ];
    let tmp49Result = !tmp10;
    const tmp50 = easing;
    if (tmp49Result) {
      let obj4 = { style: items9, children: renderAction() };
      items9 = [tmp.animatedContainer, animatedStyle];
      const View = require("module_1652").View;
      tmp49Result = tmp49(View, obj4);
    }
    items8[1] = tmp49Result;
    let tmp47Result = null;
    if (completed) {
      tmp47Result = null;
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
                  return obj.transitionTo(sharedValue.CHANNEL(guild_id.guild_id, channelId.channelId));
                },
              children: items
            };
            const PressableHighlight = Pressables.PressableHighlight;
            intl = intl4.intl;
            const obj2 = { emoji: nextMemberAction.emoji };
            items = [authStore2(ChannelActionEmoji, obj2), , ];
            const obj3 = { style: closure_1.text, children: items1 };
            const obj4 = { variant: "body-sm/medium", color: "mobile-text-heading-primary", style: closure_1.wrap, children: intl2.format(intl4.t["/beONw"], obj5) };
            const Text = Text_Text.Text;
            intl2 = intl4.intl;
            obj5 = { step: nextMemberAction.title };
            items1 = [authStore2(Text, obj4), ];
            const obj6 = { action: nextMemberAction };
            items1[1] = authStore2(ActionChannelInfo, obj6);
            items[1] = map1(View, obj3);
            const obj7 = { style: closure_1.circle, children: authStore2(Icon, obj8) };
            obj8 = { size: native.Icon.Sizes.REFRESH_SMALL_16, style: closure_1.icon, source: AssetRegistryDefault2 };
            Icon = native.Icon;
            items[2] = authStore2(View, obj7);
            tmp2 = map1(PressableHighlight, obj);
          }
          return tmp2;
        }
        let obj5 = { children: items10 };
        let obj6 = { style: tmp.measurement, onLayout: tmp42, children: renderNextAction() };
        items10 = [closure_12(tmp50, obj6), ];
        let obj7 = { style: items11, children: renderNextAction() };
        items11 = [tmp.animatedContainer, animatedStyle2];
        const View2 = require("module_1652").View;
        items10[1] = closure_12(View2, obj7);
        tmp47Result = tmp47(tmp48, obj5);
      }
    }
    let obj8 = { children: items8 };
    items8[2] = tmp47Result;
    return closure_13(closure_14, obj8);
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
let closure_18 = { code: "(function MemberActionChatInputBannerTsx1(){let[useReducedMotion,height,withDelay,completed,withTiming,DECELERATED_EASING]=this.__closure;if(useReducedMotion){return{height:height.get()};}return{height:withDelay(completed?800:200,withTiming(height.get(),{duration:400,easing:DECELERATED_EASING}))};})" };
let closure_19 = { code: "(function MemberActionChatInputBannerTsx2(){let[useReducedMotion,nextHeight,withDelay,isViewAction,completed,withTiming,DECELERATED_EASING]=this.__closure;if(useReducedMotion){return{height:nextHeight.get()};}return{height:withDelay(!isViewAction&&completed?1200:0,withTiming(nextHeight.get(),{duration:400,easing:DECELERATED_EASING}))};})" };
const memoResult = react.memo(function MemberActionChatInputBannerGuarded(channel) {
  channel = channel.channel;
  const obj = channel(7461);
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
  const obj3 = channel(14070);
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
const memoResult1 = react.memo(function ChatInputMemberActions(channel) {
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
    tmp8 = authStore2(memoResult, obj2);
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
