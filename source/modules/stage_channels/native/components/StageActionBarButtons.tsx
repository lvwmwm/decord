// Module ID: 10645
// Function ID: 83094
// Name: AgeVerificationSpeakerActionSheet
// Dependencies: [57, 31, 27, 4122, 4142, 10646, 4947, 653, 33, 4130, 689, 10549, 1212, 10647, 7482, 566, 10648, 10649, 10650, 10651, 9076, 10653, 7582, 10654, 10656, 7478, 8836, 5464, 4963, 4957, 4098, 10657, 1934, 10669, 10670, 1557, 5500, 5807, 4126, 4543, 7536, 7538, 10672, 10673, 4955, 10674, 7583, 10675, 10677, 10679, 10215, 4629, 10680, 3991, 4542, 10626, 7495, 7492, 7477, 4660, 1273, 10681, 2]
// Exports: AnimatedStartStagePrompt, ChatButton, ContinueToStagePrompt, DisconnectStageButton, JoinStagePrompt, MoveToAudienceButton, MusicMuteButton, RequestToSpeakButton, RequestToSpeakListButton

// Module 10645 (AgeVerificationSpeakerActionSheet)
import registerAsset from "registerAsset";
import RequestToSpeakRow from "RequestToSpeakRow";
import { View } from "mergeLocations";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { REQUEST_TO_SPEAK_SHEET_KEY as closure_10 } from "MAX_STAGE_TOPIC_LENGTH";
import { NOOP } from "ME";
import jsxProd from "registerAsset";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
const require = arg1;
class AgeVerificationSpeakerActionSheet {
  constructor(arg0) {
    onClose = global.onClose;
    handleDismiss = function handleDismiss() {
      onClose();
      outer1_1(outer1_3[30]).hideActionSheet();
    };
    tmp = c15();
    obj = { startExpanded: true, onDismiss: handleDismiss, contentStyles: { paddingBottom: require("useSafeAreaInsets")().bottom } };
    obj = { style: tmp.header };
    obj.children = jsx(require("AccountAgeTier10LargeBadge").TrafficConeSpotIllustration, { width: 120, height: 120 });
    obj.header = jsx(View, obj);
    obj1 = { style: tmp.container };
    obj2 = { style: tmp.content };
    obj3 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary" };
    obj3.style = tmp.title;
    intl = require("getSystemLocale").intl;
    obj3.children = intl.string(require("getSystemLocale").t.zvubnM);
    items = [, ];
    items[0] = jsx(require("Text").Text, obj3);
    obj4 = { variant: "text-md/normal", color: "text-default" };
    obj4.style = tmp.body;
    intl2 = require("getSystemLocale").intl;
    obj4.children = intl2.string(require("getSystemLocale").t["/wx+J2"]);
    items[1] = jsx(require("Text").Text, obj4);
    obj2.children = items;
    items1 = [, ];
    items1[0] = jsxs(View, obj2);
    obj5 = { style: tmp.footer };
    obj6 = {
      size: "lg",
      onPress() {
            let obj = outer1_1(outer1_3[40]);
            obj = { entryPoint: onClose(outer1_3[41]).AgeVerificationModalEntryPoint.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT };
            const result = obj.showAgeVerificationGetStartedModal(obj);
            onClose();
            outer1_1(outer1_3[30]).hideActionSheet();
          }
    };
    intl3 = require("getSystemLocale").intl;
    obj6.text = intl3.string(require("getSystemLocale").t.KXVgjt);
    items2 = [, ];
    items2[0] = jsx(require("Button").Button, obj6);
    obj7 = { size: "lg", onPress: handleDismiss };
    intl4 = require("getSystemLocale").intl;
    obj7.text = intl4.string(require("getSystemLocale").t.WAI6xu);
    obj7.variant = "secondary";
    items2[1] = jsx(require("Button").Button, obj7);
    obj5.children = items2;
    items1[1] = jsxs(View, obj5);
    obj1.children = items1;
    obj.children = jsxs(View, obj1);
    return jsx(require("ActionSheet").ActionSheet, obj);
  }
}
class AnimatedPrompt {
  constructor(arg0) {
    show = global.show;
    ({ children, style } = global);
    tmp = jsx();
    obj = require("initialize");
    items = [];
    items[0] = c7;
    stateFromStores = obj.useStateFromStores(items, () => outer1_7.useReducedMotion);
    obj2 = require("module_3991");
    fn = function c() {
      const obj = {};
      let num = 20;
      if (show) {
        num = 0;
      }
      obj.marginTop = show(outer1_3[54]).withSpring(num, outer1_16);
      const obj2 = show(outer1_3[54]);
      let num2 = 0;
      if (show) {
        num2 = 1;
      }
      obj.opacity = show(outer1_3[54]).withSpring(num2, outer1_16);
      return obj;
    };
    obj = { withSpring: require("withSpring").withSpring, show, actionBarAnimationConfig: c16 };
    fn.__closure = obj;
    fn.__workletHash = 5255980384921;
    fn.__initData = c17;
    animatedStyle = obj2.useAnimatedStyle(fn);
    tmp4 = jsx;
    obj1 = {};
    items1 = [, , ];
    items1[0] = tmp.actionBarCTAContainer;
    items1[1] = style;
    tmp5 = undefined;
    if (!stateFromStores) {
      tmp5 = animatedStyle;
    }
    items1[2] = tmp5;
    obj1.style = items1;
    obj1.children = children;
    return tmp4(require("module_3991").View, obj1);
  }
}
class StartStagePrompt {
  constructor(arg0) {
    ({ channel, isLive } = global);
    tmp = jsx();
    obj = {
      onPress() {
            if (!isLive) {
              const result = outer1_0(outer1_3[25]).openStageChannelSettings(closure_0);
              const obj = outer1_0(outer1_3[25]);
            }
          }
    };
    obj.iconSource = require("registerAsset");
    ({ iconStyle: obj.iconStyle, iconContainerStyle: obj.iconContainerStyle } = tmp);
    obj.style = global.style;
    obj.completed = isLive;
    intl = require("getSystemLocale").intl;
    obj.title = intl.string(require("getSystemLocale").t.OYbHfv);
    intl2 = require("getSystemLocale").intl;
    obj.subtitle = intl2.string(require("getSystemLocale").t.yXwLMQ);
    return jsx(require("Form").FormCTA, obj);
  }
}
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
_createForOfIteratorHelperLoose = { actionBarCTAContainer: { position: "relative" } };
_createForOfIteratorHelperLoose = { tintColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose.imageStyle = _createForOfIteratorHelperLoose;
let obj1 = { tintColor: require("_createForOfIteratorHelperLoose").colors.WHITE, width: 20, height: 20 };
_createForOfIteratorHelperLoose.iconStyle = obj1;
_createForOfIteratorHelperLoose.iconContainerStyle = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_360, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, padding: 4 };
_createForOfIteratorHelperLoose.continueContainer = { flexDirection: "row", alignItems: "center", justifyContent: "center", padding: 16 };
let obj3 = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLUE_345, fontSize: 14, lineHeight: 18 };
_createForOfIteratorHelperLoose.continueText = obj3;
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_360, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, padding: 4 };
_createForOfIteratorHelperLoose.continueIcon = { tintColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLUE_345 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj5 = {};
let obj4 = { tintColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLUE_345 };
obj5.container = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12, gap: require("_createForOfIteratorHelperLoose").space.PX_24 };
obj5.header = { alignItems: "center" };
_createForOfIteratorHelperLoose = { gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj5.content = _createForOfIteratorHelperLoose;
obj5.title = { textAlign: "center" };
obj5.body = { textAlign: "center" };
let obj6 = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12, gap: require("_createForOfIteratorHelperLoose").space.PX_24 };
obj5.footer = { gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
let closure_15 = _createForOfIteratorHelperLoose.createStyles(obj5);
let closure_16 = { mass: 1, stiffness: 100, damping: 30, overshootClamping: false, restSpeedThreshold: 0.01, restDisplacementThreshold: 0.01 };
let closure_17 = { code: "function StageActionBarButtonsTsx1(){const{withSpring,show,actionBarAnimationConfig}=this.__closure;return{marginTop:withSpring(show?0:20,actionBarAnimationConfig),opacity:withSpring(show?1:0,actionBarAnimationConfig)};}" };
const obj8 = { gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/stage_channels/native/components/StageActionBarButtons.tsx");

export const MoveToAudienceButton = function MoveToAudienceButton(channel) {
  channel = channel.channel;
  const obj = {};
  const intl = channel(1212).intl;
  obj.accessibilityLabel = intl.string(channel(1212).t.ezLpY6);
  obj.source = importDefault(10647);
  obj.onPress = function onPress() {
    const result = channel(outer1_3[14]).audienceAckRequestToSpeak(channel, true);
  };
  obj.isSmallSize = channel.isSmallSize;
  return callback2(importAll(10549).ActionButton, obj);
};
export const MusicMuteButton = function MusicMuteButton(arg0) {
  let channel;
  let isSmallSize;
  ({ channel, isSmallSize } = arg0);
  let imageStyle = _createForOfIteratorHelperLoose();
  let obj = stateFromStores(566);
  const items = [closure_9];
  stateFromStores = obj.useStateFromStores(items, () => outer1_9.isMuted());
  if (!obj2.useShowStageMusicMuteButton(channel.id)) {
    return null;
  } else {
    obj = {};
    const intl = stateFromStores(1212).intl;
    const string = intl.string;
    const t = stateFromStores(1212).t;
    if (stateFromStores) {
      let stringResult = string(t.ScHlfl);
    } else {
      stringResult = string(t.zqxfrf);
    }
    obj.accessibilityLabel = stringResult;
    if (stateFromStores) {
      let tmp10 = 10649;
    } else {
      tmp10 = 10650;
    }
    obj.source = importDefault(tmp10);
    if (stateFromStores) {
      let MusicIcon = tmp11(10651).MusicSlashIcon;
    } else {
      MusicIcon = tmp11(9076).MusicIcon;
    }
    obj.IconComponent = MusicIcon;
    imageStyle = imageStyle.imageStyle;
    obj.imageStyle = imageStyle;
    obj.onPress = function onPress() {
      return stateFromStores(outer1_3[21]).updateStageMusicMuted(!stateFromStores);
    };
    obj.isSmallSize = isSmallSize;
    closure_12(importAll(10549).ActionButton, obj);
    const tmp2 = closure_12;
    const tmp8 = importDefault;
  }
};
export const DisconnectStageButton = function DisconnectStageButton(channel) {
  channel = channel.channel;
  const obj = {};
  const intl = channel(1212).intl;
  obj.accessibilityLabel = intl.string(channel(1212).t.SMKyih);
  obj.source = importDefault(7582);
  obj.IconComponent = channel(10654).DoorExitIcon;
  obj.onPress = function onPress() {
    if (outer1_1(outer1_3[24])(channel)) {
      let tmpResult = tmp(tmp2[25]);
      tmpResult.openEndStageModal(channel);
    } else {
      tmpResult = tmp(tmp2[26]);
      tmpResult.handleDisconnect(channel);
    }
  };
  obj.isSmallSize = channel.isSmallSize;
  return callback2(importAll(10549).PrimaryActionButton, obj);
};
export const RequestToSpeakListButton = function RequestToSpeakListButton(channel) {
  channel = channel.channel;
  const isSmallSize = channel.isSmallSize;
  let analyticsLocations;
  function handleOpenAudienceList() {
    let obj = analyticsLocations(outer1_3[30]);
    obj = { channelId: channel.id, analyticsLocations };
    obj.openLazy(channel(outer1_3[32])(outer1_3[31], outer1_3.paths), outer1_10, obj);
  }
  analyticsLocations = analyticsLocations(5464)().analyticsLocations;
  let obj = channel(4963);
  const stageParticipantsCount = obj.useStageParticipantsCount(channel.id, channel(4957).StageChannelParticipantNamedIndex.REQUESTED_TO_SPEAK_ONLY);
  if (stageParticipantsCount > 0) {
    obj = {};
    const intl = channel(1212).intl;
    obj = { count: stageParticipantsCount };
    obj.accessibilityLabel = intl.formatToPlainString(channel(1212).t.OhK58v, obj);
    obj.source = analyticsLocations(10669);
    const obj1 = { tintColor: analyticsLocations(689).unsafe_rawColors.WHITE };
    obj.imageStyle = obj1;
    obj.IconComponent = channel(10670).HandRequestSpeakListIcon;
    obj.onPress = handleOpenAudienceList;
    obj.notifications = stageParticipantsCount;
    obj.isSmallSize = isSmallSize;
    let tmp7 = callback2(importAll(10549).NotifiedActionButton, obj);
  } else {
    const obj2 = {};
    const intl2 = channel(1212).intl;
    obj2.accessibilityLabel = intl2.string(channel(1212).t.KJnyvh);
    obj2.source = analyticsLocations(10669);
    const obj3 = { tintColor: analyticsLocations(689).unsafe_rawColors.WHITE };
    obj2.imageStyle = obj3;
    obj2.IconComponent = channel(10670).HandRequestSpeakListIcon;
    obj2.onPress = handleOpenAudienceList;
    obj2.isSmallSize = isSmallSize;
    tmp7 = callback2(importAll(10549).ActionButton, obj2);
  }
  return tmp7;
};
export { AgeVerificationSpeakerActionSheet };
export const RequestToSpeakButton = function RequestToSpeakButton(channel) {
  channel = channel.channel;
  let tmp = shouldShowAgeVerificationPopover(first1(shouldAgeVerifyToSpeakForCurrentUser[42])(channel), 2);
  const first = tmp[0];
  const _require = tmp[1];
  let obj = _require(shouldAgeVerifyToSpeakForCurrentUser[43]);
  const tmp3 = shouldShowAgeVerificationPopover(obj.useLocalStorageState("age-verification-stage-popover-dismissed", false), 2);
  first1 = tmp3[0];
  const importAll = tmp5;
  shouldAgeVerifyToSpeakForCurrentUser = _require(shouldAgeVerifyToSpeakForCurrentUser[44]).useShouldAgeVerifyToSpeakForCurrentUser(channel.id);
  const obj2 = _require(shouldAgeVerifyToSpeakForCurrentUser[44]);
  shouldShowAgeVerificationPopover = _require(shouldAgeVerifyToSpeakForCurrentUser[44]).useShouldShowAgeVerificationPopover(channel.id);
  const items = [shouldShowAgeVerificationPopover, first1, tmp3[1]];
  const effect = React.useEffect(() => {
    let tmp = shouldShowAgeVerificationPopover;
    if (shouldShowAgeVerificationPopover) {
      tmp = !first1;
    }
    if (tmp) {
      let obj = callback(shouldAgeVerifyToSpeakForCurrentUser[30]);
      obj = {};
      obj = {
        onClose() {
            return outer1_2(true);
          }
      };
      obj.content = outer1_12(outer1_18, obj);
      obj.key = "AgeVerificationSpeakerActionSheet";
      obj.showActionSheet(obj);
    }
  }, items);
  const obj3 = _require(shouldAgeVerifyToSpeakForCurrentUser[44]);
  const tmp9 = !_require(shouldAgeVerifyToSpeakForCurrentUser[45]).useCanRaiseHand(channel) && !first;
  obj = {};
  const intl = _require(shouldAgeVerifyToSpeakForCurrentUser[12]).intl;
  const string = intl.string;
  const t = _require(shouldAgeVerifyToSpeakForCurrentUser[12]).t;
  if (first) {
    let stringResult = string(t.GCimTk);
  } else {
    stringResult = string(t.hLbG5N);
  }
  obj.accessibilityLabel = stringResult;
  obj.isActive = first;
  obj.source = first1(shouldAgeVerifyToSpeakForCurrentUser[46]);
  if (shouldAgeVerifyToSpeakForCurrentUser) {
    let HandRequestSpeakIcon = tmp12(tmp13[47]).HandRequestDenyIcon;
  } else {
    HandRequestSpeakIcon = tmp12(tmp13[48]).HandRequestSpeakIcon;
  }
  obj.IconComponent = HandRequestSpeakIcon;
  obj.onPress = tmp9 ? NOOP : (() => {
    if (shouldAgeVerifyToSpeakForCurrentUser) {
      let obj = first1(shouldAgeVerifyToSpeakForCurrentUser[40]);
      obj = { entryPoint: callback(shouldAgeVerifyToSpeakForCurrentUser[41]).AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND };
      const result = obj.showAgeVerificationGetStartedModal(obj);
    } else {
      callback();
    }
  });
  obj.appearsDisabled = tmp9;
  obj.isSmallSize = channel.isSmallSize;
  return closure_12(importAll(shouldAgeVerifyToSpeakForCurrentUser[11]).ToggledActionButton, obj);
};
export const ChatButton = function ChatButton(channel) {
  let mentionCount;
  let unreadCount;
  channel = channel.channel;
  const isSmallSize = channel.isSmallSize;
  let isVoiceChannelLocked;
  let openChat;
  function onPress() {
    let tmp = isVoiceChannelLocked;
    if (!isVoiceChannelLocked) {
      tmp = null == openChat;
    }
    if (!tmp) {
      openChat();
    }
  }
  let obj = channel(566);
  const items = [closure_8];
  const items1 = [channel.id];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ unreadCount: outer1_8.getUnreadCount(channel.id), mentionCount: outer1_8.getMentionCount(channel.id) }), items1);
  ({ unreadCount, mentionCount } = stateFromStoresObject);
  let obj1 = channel(10679);
  isVoiceChannelLocked = obj1.useIsVoiceChannelLocked(channel);
  let obj2 = channel(10215);
  const voiceChatNavigationContext = obj2.useVoiceChatNavigationContext();
  openChat = undefined;
  if (null != voiceChatNavigationContext) {
    openChat = voiceChatNavigationContext.openChat;
  }
  if (mentionCount <= 0) {
    if (unreadCount <= 0) {
      obj = {};
      obj = { tintColor: isVoiceChannelLocked(689).unsafe_rawColors.WHITE };
      obj.imageStyle = obj;
      const intl2 = channel(1212).intl;
      obj.accessibilityLabel = intl2.string(channel(1212).t.ZXxLQg);
      obj.IconComponent = channel(4629).ChatIcon;
      obj.source = isVoiceChannelLocked(10680);
      obj.onPress = onPress;
      obj.appearsDisabled = isVoiceChannelLocked;
      obj.isSmallSize = isSmallSize;
      let tmp5Result = callback2(openChat(10549).ActionButton, obj);
    }
    return tmp5Result;
  }
  obj1 = {};
  if (mentionCount > 0) {
    unreadCount = mentionCount;
  }
  obj1.notifications = unreadCount;
  obj1.isMentioned = mentionCount > 0;
  obj2 = { tintColor: isVoiceChannelLocked(689).unsafe_rawColors.WHITE };
  obj1.imageStyle = obj2;
  const intl = channel(1212).intl;
  obj1.accessibilityLabel = intl.string(channel(1212).t.ZXxLQg);
  obj1.IconComponent = channel(4629).ChatIcon;
  obj1.source = isVoiceChannelLocked(10680);
  obj1.onPress = onPress;
  obj1.appearsDisabled = isVoiceChannelLocked;
  obj1.isSmallSize = isSmallSize;
  tmp5Result = callback2(openChat(10549).NotifiedActionButton, obj1);
};
export { AnimatedPrompt };
export const AnimatedStartStagePrompt = function AnimatedStartStagePrompt(channel) {
  channel = channel.channel;
  let obj = isLive(first1[55]);
  isLive = obj.useStageChannelStartEvent(channel.id).isLive;
  const tmp = callback(first2.useState(false), 2);
  const first = tmp[0];
  let closure_2 = tmp[1];
  const tmp3 = callback(first2.useState(false), 2);
  first1 = tmp3[0];
  callback = tmp3[1];
  let tmp5 = callback(first2.useState(isLive), 2);
  first2 = tmp5[0];
  let closure_6 = tmp5[1];
  const items = [isLive, first, first1];
  const effect = first2.useEffect(() => {
    if (first1) {
      if (!isLive) {
        if (!first) {
          callback(true);
        }
      }
      let tmp5 = isLive;
      if (isLive) {
        tmp5 = first;
      }
      if (tmp5) {
        callback(false);
      }
    }
  }, items);
  const effect1 = first2.useEffect(() => {
    const timeout = setTimeout(() => {
      outer1_4(true);
    }, 400);
    return () => {
      clearTimeout(closure_0);
    };
  }, []);
  const items1 = [isLive, first, first2];
  const effect2 = first2.useEffect(() => {
    if (timeout) {
      if (!first) {
        if (!first2) {
          const _setTimeout = setTimeout;
          timeout = setTimeout(() => {
            outer1_6(true);
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
    obj = { show: first };
    obj = { channel, isLive, style: channel.style };
    obj.children = callback2(StartStagePrompt, obj);
    tmp10 = callback2(AnimatedPrompt, obj);
  }
  return tmp10;
};
export { StartStagePrompt };
export const JoinStagePrompt = function JoinStagePrompt(channel) {
  channel = channel.channel;
  const obj = {
    onPress() {
      channel(outer1_3[58]).connectAndOpen(channel);
    },
    iconSource: importDefault(7492)
  };
  ({ iconStyle: obj.iconStyle, iconContainerStyle: obj.iconContainerStyle } = _createForOfIteratorHelperLoose());
  obj.style = channel.style;
  const intl = channel(1212).intl;
  obj.title = intl.string(channel(1212).t["7vb2cc"]);
  const intl2 = channel(1212).intl;
  obj.subtitle = intl2.string(channel(1212).t.lyCW4E);
  return callback2(channel(7495).FormCTA, obj);
};
export const ContinueToStagePrompt = function ContinueToStagePrompt(onContinue) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { accessibilityRole: "button", onPress: onContinue.onContinue };
  obj = { style: tmp.continueContainer };
  obj = {};
  const obj1 = { style: tmp.continueText };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl.string(require(1212) /* getSystemLocale */.t["jMLfp/"]);
  obj.children = callback2(require(1273) /* Button */.LegacyText, obj1);
  const items = [callback2(View, obj), ];
  const obj2 = {};
  const obj3 = { style: tmp.continueIcon, source: importDefault(10681), size: require(1273) /* Button */.Icon.Sizes.SMALL, disableColor: true };
  obj2.children = callback2(require(1273) /* Button */.Icon, obj3);
  items[1] = callback2(View, obj2);
  obj.children = items;
  obj.children = callback3(View, obj);
  return callback2(require(4660) /* PressableBase */.PressableOpacity, obj);
};
