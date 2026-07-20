// Module ID: 10628
// Function ID: 82997
// Name: AgeVerificationSpeakerActionSheet
// Dependencies: []
// Exports: AnimatedStartStagePrompt, ChatButton, ContinueToStagePrompt, DisconnectStageButton, JoinStagePrompt, MoveToAudienceButton, MusicMuteButton, RequestToSpeakButton, RequestToSpeakListButton

// Module 10628 (AgeVerificationSpeakerActionSheet)
class AgeVerificationSpeakerActionSheet {
  constructor(arg0) {
    arg1 = global.onClose;
    handleDismiss = function handleDismiss() {
      onClose();
      callback(closure_3[30]).hideActionSheet();
    };
    tmp = closure_15();
    obj = { startExpanded: true, onDismiss: handleDismiss, contentStyles: { paddingBottom: importDefault(dependencyMap[35])().bottom } };
    obj = { style: tmp.header };
    obj.children = jsx(arg1(dependencyMap[37]).TrafficConeSpotIllustration, {});
    obj.header = jsx(View, obj);
    obj1 = { style: tmp.container };
    obj2 = { style: tmp.content };
    obj3 = { INTEGRATION_CREATE: 182714370, ConstraintReasonCode: 1091633154 };
    obj3.style = tmp.title;
    intl = arg1(dependencyMap[12]).intl;
    obj3.children = intl.string(arg1(dependencyMap[12]).t.zvubnM);
    items = [, ];
    items[0] = jsx(arg1(dependencyMap[38]).Text, obj3);
    obj4 = { style: tmp.body };
    intl2 = arg1(dependencyMap[12]).intl;
    obj4.children = intl2.string(arg1(dependencyMap[12]).t./wx+J2);
    items[1] = jsx(arg1(dependencyMap[38]).Text, obj4);
    obj2.children = items;
    items1 = [, ];
    items1[0] = jsxs(View, obj2);
    obj5 = { style: tmp.footer };
    obj6 = {
      size: "lg",
      onPress() {
            let obj = callback(closure_3[40]);
            obj = { entryPoint: onClose(closure_3[41]).AgeVerificationModalEntryPoint.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT };
            const result = obj.showAgeVerificationGetStartedModal(obj);
            onClose();
            callback(closure_3[30]).hideActionSheet();
          }
    };
    intl3 = arg1(dependencyMap[12]).intl;
    obj6.text = intl3.string(arg1(dependencyMap[12]).t.KXVgjt);
    items2 = [, ];
    items2[0] = jsx(arg1(dependencyMap[39]).Button, obj6);
    obj7 = { size: "lg", onPress: handleDismiss };
    intl4 = arg1(dependencyMap[12]).intl;
    obj7.text = intl4.string(arg1(dependencyMap[12]).t.WAI6xu);
    obj7.variant = "secondary";
    items2[1] = jsx(arg1(dependencyMap[39]).Button, obj7);
    obj5.children = items2;
    items1[1] = jsxs(View, obj5);
    obj1.children = items1;
    obj.children = jsxs(View, obj1);
    return jsx(arg1(dependencyMap[36]).ActionSheet, obj);
  }
}
class AnimatedPrompt {
  constructor(arg0) {
    show = global.show;
    arg1 = show;
    ({ children, style } = global);
    tmp = jsx();
    obj = arg1(dependencyMap[15]);
    items = [];
    items[0] = closure_7;
    stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
    obj2 = arg1(dependencyMap[53]);
    fn = function c() {
      const obj = {};
      let num = 20;
      if (show) {
        num = 0;
      }
      obj.marginTop = show(closure_3[54]).withSpring(num, closure_16);
      const obj2 = show(closure_3[54]);
      let num2 = 0;
      if (show) {
        num2 = 1;
      }
      obj.opacity = show(closure_3[54]).withSpring(num2, closure_16);
      return obj;
    };
    obj = { withSpring: arg1(dependencyMap[54]).withSpring, show, actionBarAnimationConfig: closure_16 };
    fn.__closure = obj;
    fn.__workletHash = 5255980384921;
    fn.__initData = closure_17;
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
    return tmp4(importDefault(dependencyMap[53]).View, obj1);
  }
}
class StartStagePrompt {
  constructor(arg0) {
    ({ channel: closure_0, isLive } = global);
    importDefault = isLive;
    tmp = jsx();
    obj = {
      onPress() {
            if (!isLive) {
              const result = callback(closure_3[25]).openStageChannelSettings(callback);
              const obj = callback(closure_3[25]);
            }
          }
    };
    obj.iconSource = importDefault(dependencyMap[57]);
    ({ iconStyle: obj.iconStyle, iconContainerStyle: obj.iconContainerStyle } = tmp);
    obj.style = global.style;
    obj.completed = isLive;
    intl = arg1(dependencyMap[12]).intl;
    obj.title = intl.string(arg1(dependencyMap[12]).t.OYbHfv);
    intl2 = arg1(dependencyMap[12]).intl;
    obj.subtitle = intl2.string(arg1(dependencyMap[12]).t.yXwLMQ);
    return jsx(arg1(dependencyMap[56]).FormCTA, obj);
  }
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = arg1(dependencyMap[6]).REQUEST_TO_SPEAK_SHEET_KEY;
const NOOP = arg1(dependencyMap[7]).NOOP;
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[8]));
let obj = arg1(dependencyMap[9]);
obj = { actionBarCTAContainer: { position: "relative" } };
obj = { tintColor: importDefault(dependencyMap[10]).colors.WHITE };
obj.imageStyle = obj;
const obj1 = { isDowngrading: "Golive Simulcast without prober 720p@500k", type: 144.002, pendingDowngrade: null, tintColor: importDefault(dependencyMap[10]).colors.WHITE };
obj.iconStyle = obj1;
const tmp2 = arg1(dependencyMap[8]);
obj.iconContainerStyle = { backgroundColor: importDefault(dependencyMap[10]).unsafe_rawColors.GREEN_360, borderRadius: importDefault(dependencyMap[10]).radii.lg, padding: 4 };
obj.continueContainer = {};
const obj2 = { backgroundColor: importDefault(dependencyMap[10]).unsafe_rawColors.GREEN_360, borderRadius: importDefault(dependencyMap[10]).radii.lg, padding: 4 };
obj.continueText = { color: importDefault(dependencyMap[10]).unsafe_rawColors.BLUE_345 };
const obj3 = { color: importDefault(dependencyMap[10]).unsafe_rawColors.BLUE_345 };
obj.continueIcon = { tintColor: importDefault(dependencyMap[10]).unsafe_rawColors.BLUE_345 };
let closure_14 = obj.createStyles(obj);
let obj7 = arg1(dependencyMap[9]);
const obj5 = {};
const obj4 = { tintColor: importDefault(dependencyMap[10]).unsafe_rawColors.BLUE_345 };
obj5.container = { paddingVertical: importDefault(dependencyMap[10]).space.PX_12, gap: importDefault(dependencyMap[10]).space.PX_24 };
obj5.header = { alignItems: "center" };
obj7 = { gap: importDefault(dependencyMap[10]).space.PX_8 };
obj5.content = obj7;
obj5.title = { textAlign: "center" };
obj5.body = { textAlign: "center" };
const obj6 = { paddingVertical: importDefault(dependencyMap[10]).space.PX_12, gap: importDefault(dependencyMap[10]).space.PX_24 };
obj5.footer = { gap: importDefault(dependencyMap[10]).space.PX_12 };
let closure_15 = obj7.createStyles(obj5);
let closure_16 = {};
let closure_17 = { code: "function StageActionBarButtonsTsx1(){const{withSpring,show,actionBarAnimationConfig}=this.__closure;return{marginTop:withSpring(show?0:20,actionBarAnimationConfig),opacity:withSpring(show?1:0,actionBarAnimationConfig)};}" };
const obj8 = { gap: importDefault(dependencyMap[10]).space.PX_12 };
const result = arg1(dependencyMap[62]).fileFinishedImporting("modules/stage_channels/native/components/StageActionBarButtons.tsx");

export const MoveToAudienceButton = function MoveToAudienceButton(channel) {
  const arg1 = channel.channel;
  const obj = {};
  const intl = arg1(dependencyMap[12]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[12]).t.ezLpY6);
  obj.source = importDefault(dependencyMap[13]);
  obj.onPress = function onPress() {
    const result = channel(closure_3[14]).audienceAckRequestToSpeak(channel, true);
  };
  obj.isSmallSize = channel.isSmallSize;
  return callback3(importAll(dependencyMap[11]).ActionButton, obj);
};
export const MusicMuteButton = function MusicMuteButton(arg0) {
  let channel;
  let isSmallSize;
  ({ channel, isSmallSize } = arg0);
  let imageStyle = callback5();
  let obj = arg1(dependencyMap[15]);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => muted.isMuted());
  const arg1 = stateFromStores;
  if (!obj2.useShowStageMusicMuteButton(channel.id)) {
    return null;
  } else {
    obj = {};
    const intl = arg1(dependencyMap[12]).intl;
    const string = intl.string;
    const t = arg1(dependencyMap[12]).t;
    if (stateFromStores) {
      let stringResult = string(t.ScHlfl);
    } else {
      stringResult = string(t.zqxfrf);
    }
    obj.accessibilityLabel = stringResult;
    if (stateFromStores) {
      let tmp10 = tmp9[17];
    } else {
      tmp10 = tmp9[18];
    }
    obj.source = importDefault(tmp10);
    if (stateFromStores) {
      let MusicIcon = tmp11(tmp12[19]).MusicSlashIcon;
    } else {
      MusicIcon = tmp11(tmp12[20]).MusicIcon;
    }
    obj.IconComponent = MusicIcon;
    imageStyle = imageStyle.imageStyle;
    obj.imageStyle = imageStyle;
    obj.onPress = function onPress() {
      return stateFromStores(closure_3[21]).updateStageMusicMuted(!stateFromStores);
    };
    obj.isSmallSize = isSmallSize;
    closure_12(importAll(dependencyMap[11]).ActionButton, obj);
    const tmp2 = closure_12;
    const tmp8 = importDefault;
  }
};
export const DisconnectStageButton = function DisconnectStageButton(channel) {
  const arg1 = channel.channel;
  const obj = {};
  const intl = arg1(dependencyMap[12]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[12]).t.SMKyih);
  obj.source = importDefault(dependencyMap[22]);
  obj.IconComponent = arg1(dependencyMap[23]).DoorExitIcon;
  obj.onPress = function onPress() {
    if (callback(closure_3[24])(channel)) {
      let tmpResult = tmp(tmp2[25]);
      tmpResult.openEndStageModal(channel);
    } else {
      tmpResult = tmp(tmp2[26]);
      tmpResult.handleDisconnect(channel);
    }
  };
  obj.isSmallSize = channel.isSmallSize;
  return callback3(importAll(dependencyMap[11]).PrimaryActionButton, obj);
};
export const RequestToSpeakListButton = function RequestToSpeakListButton(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const isSmallSize = channel.isSmallSize;
  let importDefault;
  function handleOpenAudienceList() {
    let obj = analyticsLocations(paths[30]);
    obj = { channelId: channel.id, analyticsLocations };
    obj.openLazy(channel(paths[32])(paths[31], paths.paths), closure_10, obj);
  }
  importDefault = importDefault(dependencyMap[27])().analyticsLocations;
  let obj = arg1(dependencyMap[28]);
  const stageParticipantsCount = obj.useStageParticipantsCount(channel.id, arg1(dependencyMap[29]).StageChannelParticipantNamedIndex.REQUESTED_TO_SPEAK_ONLY);
  if (stageParticipantsCount > 0) {
    obj = {};
    const intl = arg1(dependencyMap[12]).intl;
    obj = { count: stageParticipantsCount };
    obj.accessibilityLabel = intl.formatToPlainString(arg1(dependencyMap[12]).t.OhK58v, obj);
    obj.source = importDefault(dependencyMap[33]);
    const obj1 = { tintColor: importDefault(dependencyMap[10]).unsafe_rawColors.WHITE };
    obj.imageStyle = obj1;
    obj.IconComponent = arg1(dependencyMap[34]).HandRequestSpeakListIcon;
    obj.onPress = handleOpenAudienceList;
    obj.notifications = stageParticipantsCount;
    obj.isSmallSize = isSmallSize;
    let tmp7 = callback3(importAll(dependencyMap[11]).NotifiedActionButton, obj);
  } else {
    const obj2 = {};
    const intl2 = arg1(dependencyMap[12]).intl;
    obj2.accessibilityLabel = intl2.string(arg1(dependencyMap[12]).t.KJnyvh);
    obj2.source = importDefault(dependencyMap[33]);
    const obj3 = { tintColor: importDefault(dependencyMap[10]).unsafe_rawColors.WHITE };
    obj2.imageStyle = obj3;
    obj2.IconComponent = arg1(dependencyMap[34]).HandRequestSpeakListIcon;
    obj2.onPress = handleOpenAudienceList;
    obj2.isSmallSize = isSmallSize;
    tmp7 = callback3(importAll(dependencyMap[11]).ActionButton, obj2);
  }
  return tmp7;
};
export { AgeVerificationSpeakerActionSheet };
export const RequestToSpeakButton = function RequestToSpeakButton(channel) {
  channel = channel.channel;
  const tmp = callback2(importDefault(dependencyMap[42])(channel), 2);
  const first = tmp[0];
  const callback = tmp[1];
  let obj = callback(dependencyMap[43]);
  const tmp3 = callback2(obj.useLocalStorageState("age-verification-stage-popover-dismissed", false), 2);
  const first1 = tmp3[0];
  const importDefault = first1;
  const importAll = tmp5;
  const shouldAgeVerifyToSpeakForCurrentUser = callback(dependencyMap[44]).useShouldAgeVerifyToSpeakForCurrentUser(channel.id);
  const dependencyMap = shouldAgeVerifyToSpeakForCurrentUser;
  const obj2 = callback(dependencyMap[44]);
  const shouldShowAgeVerificationPopover = callback(dependencyMap[44]).useShouldShowAgeVerificationPopover(channel.id);
  const callback2 = shouldShowAgeVerificationPopover;
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
            return callback(true);
          }
      };
      obj.content = callback2(closure_18, obj);
      obj.key = "AgeVerificationSpeakerActionSheet";
      obj.showActionSheet(obj);
    }
  }, items);
  const obj3 = callback(dependencyMap[44]);
  const tmp9 = !callback(dependencyMap[45]).useCanRaiseHand(channel) && !first;
  obj = {};
  const intl = callback(dependencyMap[12]).intl;
  const string = intl.string;
  const t = callback(dependencyMap[12]).t;
  if (first) {
    let stringResult = string(t.GCimTk);
  } else {
    stringResult = string(t.hLbG5N);
  }
  obj.accessibilityLabel = stringResult;
  obj.isActive = first;
  obj.source = importDefault(dependencyMap[46]);
  if (shouldAgeVerifyToSpeakForCurrentUser) {
    let HandRequestSpeakIcon = tmp12(tmp13[47]).HandRequestDenyIcon;
  } else {
    HandRequestSpeakIcon = tmp12(tmp13[48]).HandRequestSpeakIcon;
  }
  obj.IconComponent = HandRequestSpeakIcon;
  obj.onPress = tmp9 ? NOOP : () => {
    if (shouldAgeVerifyToSpeakForCurrentUser) {
      let obj = first1(shouldAgeVerifyToSpeakForCurrentUser[40]);
      obj = { entryPoint: callback(shouldAgeVerifyToSpeakForCurrentUser[41]).AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND };
      const result = obj.showAgeVerificationGetStartedModal(obj);
    } else {
      callback();
    }
  };
  obj.appearsDisabled = tmp9;
  obj.isSmallSize = channel.isSmallSize;
  return closure_12(importAll(dependencyMap[11]).ToggledActionButton, obj);
};
export const ChatButton = function ChatButton(channel) {
  let mentionCount;
  let unreadCount;
  channel = channel.channel;
  const arg1 = channel;
  const isSmallSize = channel.isSmallSize;
  let importDefault;
  let importAll;
  function onPress() {
    let tmp = isVoiceChannelLocked;
    if (!isVoiceChannelLocked) {
      tmp = null == openChat;
    }
    if (!tmp) {
      openChat();
    }
  }
  let obj = arg1(dependencyMap[15]);
  const items = [closure_8];
  const items1 = [channel.id];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ unreadCount: store.getUnreadCount(channel.id), mentionCount: store.getMentionCount(channel.id) }), items1);
  ({ unreadCount, mentionCount } = stateFromStoresObject);
  let obj1 = arg1(dependencyMap[49]);
  const isVoiceChannelLocked = obj1.useIsVoiceChannelLocked(channel);
  importDefault = isVoiceChannelLocked;
  let obj2 = arg1(dependencyMap[50]);
  const voiceChatNavigationContext = obj2.useVoiceChatNavigationContext();
  let openChat;
  if (null != voiceChatNavigationContext) {
    openChat = voiceChatNavigationContext.openChat;
  }
  importAll = openChat;
  if (mentionCount <= 0) {
    if (unreadCount <= 0) {
      obj = {};
      obj = { tintColor: importDefault(dependencyMap[10]).unsafe_rawColors.WHITE };
      obj.imageStyle = obj;
      const intl2 = arg1(dependencyMap[12]).intl;
      obj.accessibilityLabel = intl2.string(arg1(dependencyMap[12]).t.ZXxLQg);
      obj.IconComponent = arg1(dependencyMap[51]).ChatIcon;
      obj.source = importDefault(dependencyMap[52]);
      obj.onPress = onPress;
      obj.appearsDisabled = isVoiceChannelLocked;
      obj.isSmallSize = isSmallSize;
      let tmp5Result = callback3(importAll(dependencyMap[11]).ActionButton, obj);
    }
    return tmp5Result;
  }
  obj1 = {};
  if (mentionCount > 0) {
    unreadCount = mentionCount;
  }
  obj1.notifications = unreadCount;
  obj1.isMentioned = mentionCount > 0;
  obj2 = { tintColor: importDefault(dependencyMap[10]).unsafe_rawColors.WHITE };
  obj1.imageStyle = obj2;
  const intl = arg1(dependencyMap[12]).intl;
  obj1.accessibilityLabel = intl.string(arg1(dependencyMap[12]).t.ZXxLQg);
  obj1.IconComponent = arg1(dependencyMap[51]).ChatIcon;
  obj1.source = importDefault(dependencyMap[52]);
  obj1.onPress = onPress;
  obj1.appearsDisabled = isVoiceChannelLocked;
  obj1.isSmallSize = isSmallSize;
  tmp5Result = callback3(importAll(dependencyMap[11]).NotifiedActionButton, obj1);
};
export { AnimatedPrompt };
export const AnimatedStartStagePrompt = function AnimatedStartStagePrompt(channel) {
  channel = channel.channel;
  let obj = arg1(dependencyMap[55]);
  const isLive = obj.useStageChannelStartEvent(channel.id).isLive;
  const arg1 = isLive;
  const tmp = callback2(React.useState(false), 2);
  const first = tmp[0];
  const importDefault = first;
  let closure_2 = tmp[1];
  const tmp3 = callback2(React.useState(false), 2);
  const first1 = tmp3[0];
  const dependencyMap = first1;
  const callback2 = tmp3[1];
  const tmp5 = callback2(React.useState(isLive), 2);
  const first2 = tmp5[0];
  const React = first2;
  let closure_6 = tmp5[1];
  const items = [isLive, first, first1];
  const effect = React.useEffect(() => {
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
  const effect1 = React.useEffect(() => {
    const timeout = setTimeout(() => {
      callback(true);
    }, 400);
    return () => {
      clearTimeout(closure_0);
    };
  }, []);
  const items1 = [isLive, first, first2];
  const effect2 = React.useEffect(() => {
    if (timeout) {
      if (!first) {
        if (!first2) {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => {
            callback(true);
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
    obj.children = callback3(StartStagePrompt, obj);
    tmp10 = callback3(AnimatedPrompt, obj);
  }
  return tmp10;
};
export { StartStagePrompt };
export const JoinStagePrompt = function JoinStagePrompt(channel) {
  const arg1 = channel.channel;
  const obj = {
    onPress() {
      channel(closure_3[58]).connectAndOpen(channel);
    },
    iconSource: importDefault(dependencyMap[57])
  };
  ({ iconStyle: obj.iconStyle, iconContainerStyle: obj.iconContainerStyle } = callback5());
  obj.style = channel.style;
  const intl = arg1(dependencyMap[12]).intl;
  obj.title = intl.string(arg1(dependencyMap[12]).t.7vb2cc);
  const intl2 = arg1(dependencyMap[12]).intl;
  obj.subtitle = intl2.string(arg1(dependencyMap[12]).t.lyCW4E);
  return callback3(arg1(dependencyMap[56]).FormCTA, obj);
};
export const ContinueToStagePrompt = function ContinueToStagePrompt(onContinue) {
  const tmp = callback5();
  let obj = { accessibilityRole: "button", onPress: onContinue.onContinue };
  obj = { style: tmp.continueContainer };
  obj = {};
  const obj1 = { style: tmp.continueText };
  const intl = arg1(dependencyMap[12]).intl;
  obj1.children = intl.string(arg1(dependencyMap[12]).t.jMLfp/);
  obj.children = callback3(arg1(dependencyMap[60]).LegacyText, obj1);
  const items = [callback3(View, obj), ];
  const obj2 = {};
  const obj3 = { style: tmp.continueIcon, source: importDefault(dependencyMap[61]), size: arg1(dependencyMap[60]).Icon.Sizes.SMALL, disableColor: true };
  obj2.children = callback3(arg1(dependencyMap[60]).Icon, obj3);
  items[1] = callback3(View, obj2);
  obj.children = items;
  obj.children = callback4(View, obj);
  return callback3(arg1(dependencyMap[59]).PressableOpacity, obj);
};
