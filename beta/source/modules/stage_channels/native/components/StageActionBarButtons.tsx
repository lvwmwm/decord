// Module ID: 9353
// Function ID: 9354
// Name: StageActionBarButtons
// Dependencies: [32, 19, 17, 4825, 4851, 9354, 5726, 1074, 21, 4836, 576, 8855, 1115, 9355, 7846, 504, 9356, 9362, 9363, 9364, 9366, 9368, 8075, 9369, 9371, 7842, 9097, 6583, 5743, 5737, 4800, 9372, 1981, 9384, 9385, 1613, 6618, 6004, 4832, 5281, 7859, 7861, 9387, 9388, 5734, 9389, 8076, 9390, 9392, 9394, 8867, 5385, 9395, 4566, 5280, 8955, 8053, 7856, 7841, 5435, 1177, 9396, 2]
// Exports: AnimatedStartStagePrompt, ChatButton, ContinueToStagePrompt, DisconnectStageButton, JoinStagePrompt, MoveToAudienceButton, MusicMuteButton, RequestToSpeakButton, RequestToSpeakListButton

// Module 9353 (StageActionBarButtons)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl5 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4566 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4800 */;
import spring from "spring" /* 5280 */;
import Pressables from "Pressables" /* 5435 */;
import StageChannelsConstants from "StageChannelsConstants" /* 5726 */;
import StageChannelModalActionCreators from "StageChannelModalActionCreators" /* 7841 */;
import StageChannelActionCreatorExtras from "StageChannelActionCreatorExtras" /* 7842 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 7846 */;
import AssetRegistryDefault from "AssetRegistry" /* 7856 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7859 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 7861 */;
import Form from "Form" /* 8053 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 8075 */;
import CallBarActionAll from "CallBarAction" /* 8855 */;
import useStageChannelConnectAction from "useStageChannelConnectAction" /* 8955 */;
import CallsUtils from "CallsUtils" /* 9097 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 9355 */;
import StageMusicActionCreators from "StageMusicActionCreators" /* 9368 */;
import shouldShowEndStageModalDefault from "shouldShowEndStageModal" /* 9371 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 9396 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import ReadStateStore from "ReadStateStore" /* 4851 */;
import StageMusicStore from "StageMusicStore" /* 9354 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;
let _require, importAll;

let closure_12;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let obj7;
let obj8;
let obj9;
let size;
class AgeVerificationSpeakerActionSheet {
  constructor(onClose) {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let items;
    let items1;
    let items2;
    let obj2;
    let obj3;
    onClose = onClose.onClose;
    function handleDismiss() {
      onClose();
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    }
    const tmp = closure_15();
    let obj = { startExpanded: true, onDismiss: handleDismiss, contentStyles: { paddingBottom: useSafeAreaInsetsDefault().bottom }, header: closure_12(View2, obj2), children: closure_13(View2, obj3) };
    obj2 = { style: tmp.header, children: closure_12(onClose(6004).TrafficConeSpotIllustration, { width: 120, height: 120 }) };
    const ActionSheet = onClose(6618).ActionSheet;
    obj3 = { style: tmp.container, children: items1 };
    const obj4 = { style: tmp.content, children: items };
    const obj5 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.title, children: intl.string(onClose(1115).t.zvubnM) };
    const Text = onClose(4832).Text;
    intl = onClose(1115).intl;
    items = [closure_12(Text, obj5), ];
    const obj6 = { variant: "text-md/normal", color: "text-default", style: tmp.body, children: intl2.string(onClose(1115).t["/wx+J2"]) };
    const Text2 = onClose(4832).Text;
    intl2 = onClose(1115).intl;
    items[1] = closure_12(Text2, obj6);
    items1 = [closure_13(View2, obj4), ];
    const obj7 = { style: tmp.footer, children: items2 };
    const obj8 = {
      size: "lg",
      onPress() {
        const obj = AgeVerificationActionCreatorsDefault;
        const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
        onClose();
        const obj3 = ActionSheetActionCreatorsDefault;
        obj3.hideActionSheet();
      },
      text: intl3.string(onClose(1115).t.KXVgjt)
    };
    const Button = onClose(5281).Button;
    intl3 = onClose(1115).intl;
    items2 = [closure_12(Button, obj8), ];
    const obj9 = { size: "lg", onPress: handleDismiss, text: intl4.string(onClose(1115).t.WAI6xu), variant: "secondary" };
    const Button2 = onClose(5281).Button;
    intl4 = onClose(1115).intl;
    items2[1] = closure_12(Button2, obj9);
    items1[1] = closure_13(View2, obj7);
    return closure_12(ActionSheet, obj);
  }
}
class AnimatedPrompt {
  constructor(show) {
    let children;
    let style;
    let useReducedMotion;
    show = show.show;
    ({ children, style } = show);
    const tmp = closure_14();
    let obj = show(504);
    const items = [AccessibilityStore];
    const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
    const fn = function c() {
      let num2;
      let tmp5;
      let withSpring2;
      let num = 20;
      const withSpring = spring.withSpring;
      spring;
      if (show) {
        num = 0;
      }
      const obj = { marginTop: withSpring(num, actionBarAnimationConfig), opacity: withSpring2(num2, tmp5) };
      num2 = 0;
      withSpring2 = tmp(5280).withSpring;
      spring;
      tmp5 = actionBarAnimationConfig;
      if (show) {
        num2 = 1;
      }
      return obj;
    };
    const obj2 = show(4566);
    fn.__closure = { withSpring: show(5280).withSpring, show, actionBarAnimationConfig };
    fn.__workletHash = 5255980384921;
    fn.__initData = __initData;
    ({ withSpring: show(5280).withSpring, show, actionBarAnimationConfig });
    const animatedStyle = obj2.useAnimatedStyle(fn);
    const style1 = [tmp.actionBarCTAContainer, style, ];
    let tmp5;
    const View = ReanimatedRexportDefault.View;
    const tmp4 = closure_12;
    if (!stateFromStores) {
      tmp5 = animatedStyle;
    }
    style1[2] = tmp5;
    return tmp4(View, { style: style1, children });
  }
}
class StartStagePrompt {
  constructor(style) {
    let intl;
    let intl2;
    let isLive;
    let require;
    ({ channel: require, isLive } = style);
    style = style.style;
    let tmp = closure_14();
    let obj = {
      onPress() {
        const tmp = isLive;
        if (!tmp) {
          const obj = StageChannelActionCreatorExtras;
          const result = obj.openStageChannelSettings(_require);
        }
      },
      iconSource: isLive(7856),
      iconStyle: null,
      iconContainerStyle: null,
      style,
      completed: isLive,
      title: intl.string(intl5.t.OYbHfv),
      subtitle: intl2.string(intl5.t.yXwLMQ)
    };
    const FormCTA = Form.FormCTA;
    ({ iconStyle: obj.iconStyle, iconContainerStyle: obj.iconContainerStyle } = tmp);
    intl = intl5.intl;
    intl2 = intl5.intl;
    return closure_12(FormCTA, obj);
  }
}
const View2 = react_native.View;
let closure_10 = StageChannelsConstants.REQUEST_TO_SPEAK_SHEET_KEY;
const NOOP = Constants.NOOP;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { actionBarCTAContainer: { position: "relative" }, imageStyle: obj2, iconStyle: size, iconContainerStyle: obj3, continueContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center", padding: 16 }, continueText: obj4, continueIcon: obj5 };
obj2 = { tintColor: nativeDefault.colors.WHITE };
createStyles = createStyles.createStyles;
size = { tintColor: nativeDefault.colors.WHITE, width: 20, height: 20 };
obj3 = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360, borderRadius: nativeDefault.radii.lg, padding: 4 };
obj4 = { color: nativeDefault.unsafe_rawColors.BLUE_345, fontSize: 14, lineHeight: 18 };
obj5 = { tintColor: nativeDefault.unsafe_rawColors.BLUE_345 };
const authStore2 = createStyles(obj);
createStyles = createStyles_mod;
let obj6 = { container: obj7, header: { alignItems: "center" }, content: obj8, title: { textAlign: "center" }, body: { textAlign: "center" }, footer: obj9 };
obj7 = { paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_24 };
const createStyles2 = createStyles.createStyles;
obj8 = { gap: nativeDefault.space.PX_8 };
obj9 = { gap: nativeDefault.space.PX_12 };
let closure_15 = createStyles2(obj6);
const actionBarAnimationConfig = { mass: 1, stiffness: 100, damping: 30, overshootClamping: false, restSpeedThreshold: 0.01, restDisplacementThreshold: 0.01 };
const authStore4 = { code: "function StageActionBarButtonsTsx1(){const{withSpring,show,actionBarAnimationConfig}=this.__closure;return{marginTop:withSpring(show?0:20,actionBarAnimationConfig),opacity:withSpring(show?1:0,actionBarAnimationConfig)};}" };
size = size_mod;
let result = size.fileFinishedImporting("modules/stage_channels/native/components/StageActionBarButtons.tsx");

export const MoveToAudienceButton = function MoveToAudienceButton(channel) {
  let intl;
  channel = channel.channel;
  const isSmallSize = channel.isSmallSize;
  let obj = {
    accessibilityLabel: intl.string(channel(1115).t.ezLpY6),
    source: AssetRegistryDefault3,
    onPress() {
      const obj = StageChannelActionCreators;
      const result = obj.audienceAckRequestToSpeak(channel, true);
    },
    isSmallSize
  };
  const ActionButton = CallBarActionAll.ActionButton;
  intl = channel(1115).intl;
  return closure_12(ActionButton, obj);
};
export const MusicMuteButton = function MusicMuteButton(arg0) {
  let MusicIcon;
  let channel;
  let isSmallSize;
  let muted;
  let stateFromStores;
  ({ channel, isSmallSize } = arg0);
  const tmp = closure_14();
  let obj = stateFromStores(504);
  const items = [StageMusicStore];
  stateFromStores = obj.useStateFromStores(items, () => muted.isMuted());
  let tmp6Result = null;
  const obj2 = stateFromStores(9356);
  if (obj2.useShowStageMusicMuteButton(channel.id)) {
    let stringResult;
    const ActionButton = CallBarActionAll.ActionButton;
    const intl = tmp2(1115).intl;
    const string = intl.string;
    const t = tmp2(1115).t;
    const tmp6 = closure_12;
    if (stateFromStores) {
      stringResult = string(t.ScHlfl);
    } else {
      stringResult = string(t.zqxfrf);
    }
    const obj3 = {
      accessibilityLabel: stringResult,
      source: importDefault(stateFromStores ? 9362 : 9363),
      IconComponent: MusicIcon,
      imageStyle: tmp.imageStyle,
      onPress() {
          const obj = StageMusicActionCreators;
          return obj.updateStageMusicMuted(!stateFromStores);
        },
      isSmallSize
    };
    if (stateFromStores) {
      MusicIcon = tmp2(9364).MusicSlashIcon;
    } else {
      MusicIcon = tmp2(9366).MusicIcon;
    }
    tmp6Result = tmp6(ActionButton, obj3);
  }
  return tmp6Result;
};
export const DisconnectStageButton = function DisconnectStageButton(channel) {
  let intl;
  channel = channel.channel;
  const isSmallSize = channel.isSmallSize;
  const obj = {
    accessibilityLabel: intl.string(channel(1115).t.SMKyih),
    source: AssetRegistryDefault2,
    IconComponent: channel(9369).DoorExitIcon,
    onPress() {
      if (shouldShowEndStageModalDefault(channel)) {
        const tmp3Result = StageChannelActionCreatorExtras;
        tmp3Result.openEndStageModal(channel);
      } else {
        const tmp3Result2 = CallsUtils;
        tmp3Result2.handleDisconnect(channel);
      }
    },
    isSmallSize
  };
  const PrimaryActionButton = CallBarActionAll.PrimaryActionButton;
  intl = channel(1115).intl;
  return closure_12(PrimaryActionButton, obj);
};
export const RequestToSpeakListButton = function RequestToSpeakListButton(channel) {
  let intl;
  let intl2;
  let obj3;
  let obj4;
  let obj6;
  let tmp7;
  channel = channel.channel;
  const isSmallSize = channel.isSmallSize;
  let analyticsLocations;
  function handleOpenAudienceList() {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { channelId: channel.id, analyticsLocations };
    obj.openLazy(asyncRequire(9372, dependencyMap.paths), closure_10, obj2);
  }
  analyticsLocations = analyticsLocations(6583)().analyticsLocations;
  let obj = channel(5743);
  const stageParticipantsCount = obj.useStageParticipantsCount(channel.id, channel(5737).StageChannelParticipantNamedIndex.REQUESTED_TO_SPEAK_ONLY);
  if (stageParticipantsCount > 0) {
    let obj2 = { accessibilityLabel: intl.formatToPlainString(channel(1115).t.OhK58v, obj3), source: analyticsLocations(9384), imageStyle: obj4, IconComponent: channel(9385).HandRequestSpeakListIcon, onPress: handleOpenAudienceList, notifications: stageParticipantsCount, isSmallSize };
    const NotifiedActionButton = CallBarActionAll.NotifiedActionButton;
    intl = tmp3(1115).intl;
    obj3 = { count: stageParticipantsCount };
    obj4 = { tintColor: analyticsLocations(576).unsafe_rawColors.WHITE };
    tmp7 = closure_12(NotifiedActionButton, obj2);
  } else {
    const obj5 = { accessibilityLabel: intl2.string(channel(1115).t.KJnyvh), source: analyticsLocations(9384), imageStyle: obj6, IconComponent: channel(9385).HandRequestSpeakListIcon, onPress: handleOpenAudienceList, isSmallSize };
    const ActionButton = CallBarActionAll.ActionButton;
    intl2 = tmp3(1115).intl;
    obj6 = { tintColor: analyticsLocations(576).unsafe_rawColors.WHITE };
    tmp7 = closure_12(ActionButton, obj5);
  }
  return tmp7;
};
export { AgeVerificationSpeakerActionSheet };
export const RequestToSpeakButton = function RequestToSpeakButton(channel) {
  let HandRequestSpeakIcon;
  let _undefined;
  let c0;
  let closure_2;
  let stringResult;
  let tmp4;
  channel = channel.channel;
  _require = undefined;
  let first;
  let shouldAgeVerifyToSpeakForCurrentUser;
  let shouldShowAgeVerificationPopover;
  const isSmallSize = channel.isSmallSize;
  let tmp = first;
  [tmp4, c0] = shouldShowAgeVerificationPopover(first(shouldAgeVerifyToSpeakForCurrentUser[42])(channel), 2);
  const tmp5 = _require;
  const tmp3 = shouldShowAgeVerificationPopover(first(shouldAgeVerifyToSpeakForCurrentUser[42])(channel), 2);
  let obj = require("useLocalStorageState");
  const tmp6 = shouldShowAgeVerificationPopover(obj.useLocalStorageState("age-verification-stage-popover-dismissed", false), 2);
  first = tmp6[0];
  importAll = tmp8;
  let obj2 = require("useStageSpeakingForCurrentUser");
  shouldAgeVerifyToSpeakForCurrentUser = obj2.useShouldAgeVerifyToSpeakForCurrentUser(channel.id);
  const obj3 = require("useStageSpeakingForCurrentUser");
  shouldShowAgeVerificationPopover = obj3.useShouldShowAgeVerificationPopover(channel.id);
  const items = [shouldShowAgeVerificationPopover, first, tmp6[1]];
  const effect = react.useEffect(() => {
    let obj2;
    const tmp = shouldShowAgeVerificationPopover && !first;
    if (tmp) {
      const obj = { content: closure_12(AgeVerificationSpeakerActionSheet, obj2), key: "AgeVerificationSpeakerActionSheet" };
      obj2 = {
        onClose() {
            return closure_1_2(true);
          }
      };
      const showActionSheet = ActionSheetActionCreators.showActionSheet;
      ActionSheetActionCreators;
      showActionSheet(obj);
    }
  }, items);
  const obj4 = require("useCanRaiseHand");
  const canRaiseHand = obj4.useCanRaiseHand(channel);
  const ToggledActionButton = require("CallBarAction").ToggledActionButton;
  const intl = tmp5(tmp2[12]).intl;
  const string = intl.string;
  const t = tmp5(tmp2[12]).t;
  const tmp14 = closure_12;
  if (tmp4) {
    stringResult = string(t.GCimTk);
  } else {
    stringResult = string(t.hLbG5N);
  }
  const obj5 = {
    accessibilityLabel: stringResult,
    isActive: tmp4,
    source: tmp(shouldAgeVerifyToSpeakForCurrentUser[46]),
    IconComponent: HandRequestSpeakIcon,
    onPress: !canRaiseHand && !tmp4 ? NOOP : (() => {
      const tmp = shouldAgeVerifyToSpeakForCurrentUser;
      if (tmp) {
        const obj = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND };
        const showAgeVerificationGetStartedModal = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal;
        AgeVerificationActionCreatorsDefault;
        const result = showAgeVerificationGetStartedModal(obj);
      } else {
        _undefined();
      }
    }),
    appearsDisabled: !canRaiseHand && !tmp4,
    isSmallSize
  };
  if (shouldAgeVerifyToSpeakForCurrentUser) {
    HandRequestSpeakIcon = tmp5(tmp2[47]).HandRequestDenyIcon;
  } else {
    HandRequestSpeakIcon = tmp5(tmp2[48]).HandRequestSpeakIcon;
  }
  return tmp14(ToggledActionButton, obj5);
};
export const ChatButton = function ChatButton(channel) {
  let intl;
  let intl2;
  let mentionCount;
  let obj5;
  let unreadCount;
  channel = channel.channel;
  const isSmallSize = channel.isSmallSize;
  let tmp = channel;
  const tmp2 = dependencyMap;
  let obj = channel(504);
  const items = [ReadStateStore];
  const items1 = [channel.id];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { unreadCount: ReadStateStore.getUnreadCount(channel.id), mentionCount: ReadStateStore.getMentionCount(channel.id) };
    return obj;
  }, items1);
  ({ unreadCount, mentionCount } = stateFromStoresObject);
  const obj2 = channel(9394);
  const isVoiceChannelLocked = obj2.useIsVoiceChannelLocked(channel);
  const obj3 = channel(8867);
  const voiceChatNavigationContext = obj3.useVoiceChatNavigationContext();
  let openChat;
  if (voiceChatNavigationContext != null) {
    openChat = voiceChatNavigationContext.openChat;
  }
  function onPress() {
    const tmp = isVoiceChannelLocked;
    if (!tmp) {
      if (openChat != null) {
        tmp2();
      }
    }
  }
  if (mentionCount <= 0) {
    let tmp7Result;
    if (unreadCount <= 0) {
      const obj4 = { imageStyle: obj5, accessibilityLabel: intl2.string(tmp(1115).t.ZXxLQg), IconComponent: tmp(5385).ChatIcon, source: isVoiceChannelLocked(9395), onPress, appearsDisabled: isVoiceChannelLocked, isSmallSize };
      obj5 = { tintColor: isVoiceChannelLocked(576).unsafe_rawColors.WHITE };
      const ActionButton = openChat(8855).ActionButton;
      intl2 = tmp(1115).intl;
      tmp7Result = closure_12(ActionButton, obj4);
    }
    return tmp7Result;
  }
  const NotifiedActionButton = openChat(8855).NotifiedActionButton;
  const tmp7 = closure_12;
  if (mentionCount > 0) {
    unreadCount = mentionCount;
  }
  const obj6 = { notifications: unreadCount, isMentioned: mentionCount > 0, imageStyle: { tintColor: isVoiceChannelLocked(576).unsafe_rawColors.WHITE }, accessibilityLabel: intl.string(tmp(1115).t.ZXxLQg), IconComponent: tmp(5385).ChatIcon, source: isVoiceChannelLocked(9395), onPress, appearsDisabled: isVoiceChannelLocked, isSmallSize };
  ({ tintColor: isVoiceChannelLocked(576).unsafe_rawColors.WHITE });
  intl = tmp(1115).intl;
  tmp7Result = tmp7(NotifiedActionButton, obj6);
};
export { AnimatedPrompt };
export const AnimatedStartStagePrompt = function AnimatedStartStagePrompt(channel) {
  let closure_2;
  let closure_4;
  let closure_6;
  let first;
  let first1;
  let first2;
  let obj3;
  channel = channel.channel;
  first = undefined;
  closure_2 = undefined;
  first1 = undefined;
  closure_4 = undefined;
  first2 = undefined;
  closure_6 = undefined;
  const style = channel.style;
  const obj = useStageChannelConnectAction;
  const isLive = obj.useStageChannelStartEvent(channel.id).isLive;
  [first, closure_2] = react.useState(false);
  [first1, closure_4] = react.useState(false);
  [first2, closure_6] = react.useState(isLive);
  const items = [isLive, first, first1];
  const effect = react.useEffect(() => {
    const tmp = first1;
    if (tmp) {
      let tmp2 = isLive;
      if (!tmp2) {
        const tmp3 = first;
        if (!tmp3) {
          closure_2(true);
        }
      }
      if (tmp2) {
        tmp2 = first;
      }
      if (tmp2) {
        closure_2(false);
      }
    }
  }, items);
  const effect1 = react.useEffect(() => {
    let closure_0;
    const timeout = setTimeout(() => {
      closure_1_4(true);
    }, 400);
    return () => {
      clearTimeout(closure_0);
    };
  }, []);
  const items1 = [isLive, first, first2];
  const effect2 = react.useEffect(() => {
    let closure_0;
    let timeout;
    const tmp = timeout;
    if (tmp) {
      const tmp2 = first;
      if (!tmp2) {
        const tmp3 = first2;
        if (!tmp3) {
          const _setTimeout = setTimeout;
          timeout = setTimeout(() => {
            closure_1_6(true);
          }, 400);
          return () => {
            clearTimeout(closure_0);
          };
        }
      }
    }
  }, items1);
  let tmp10 = null;
  if (!first2) {
    const obj2 = { show: first, children: closure_12(StartStagePrompt, obj3) };
    obj3 = { channel, isLive, style };
    tmp10 = closure_12(AnimatedPrompt, obj2);
  }
  return tmp10;
};
export { StartStagePrompt };
export const JoinStagePrompt = function JoinStagePrompt(channel) {
  let intl;
  let intl2;
  channel = channel.channel;
  const style = channel.style;
  let obj = {
    onPress() {
      const obj = StageChannelModalActionCreators;
      obj.connectAndOpen(channel);
    },
    iconSource: AssetRegistryDefault,
    iconStyle: null,
    iconContainerStyle: null,
    style,
    title: intl.string(channel(1115).t["7vb2cc"]),
    subtitle: intl2.string(channel(1115).t.lyCW4E)
  };
  const tmp = closure_14();
  const FormCTA = channel(8053).FormCTA;
  ({ iconStyle: obj.iconStyle, iconContainerStyle: obj.iconContainerStyle } = tmp);
  intl = channel(1115).intl;
  intl2 = channel(1115).intl;
  return closure_12(FormCTA, obj);
};
export const ContinueToStagePrompt = function ContinueToStagePrompt(onContinue) {
  let Icon;
  let LegacyText;
  let intl;
  let items;
  let obj2;
  let obj4;
  let obj6;
  onContinue = onContinue.onContinue;
  const tmp = closure_14();
  const obj = { accessibilityRole: "button", onPress: onContinue, children: map1(View2, obj2) };
  obj2 = { style: tmp.continueContainer, children: items };
  const obj3 = { children: closure_12(LegacyText, obj4) };
  const PressableOpacity = Pressables.PressableOpacity;
  obj4 = { style: tmp.continueText, children: intl.string(intl5.t["jMLfp/"]) };
  LegacyText = native.LegacyText;
  intl = intl5.intl;
  items = [closure_12(View2, obj3), ];
  const obj5 = { children: closure_12(Icon, obj6) };
  obj6 = { style: tmp.continueIcon, source: AssetRegistryDefault4, size: native.Icon.Sizes.SMALL, disableColor: true };
  Icon = native.Icon;
  items[1] = closure_12(View2, obj5);
  return closure_12(PressableOpacity, obj);
};
