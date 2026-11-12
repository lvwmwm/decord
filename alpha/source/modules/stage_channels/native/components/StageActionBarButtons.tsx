// Module ID: 12838
// Function ID: 12839
// Name: StageActionBarButtons
// Dependencies: [32, 19, 17, 5244, 6952, 12839, 6843, 1072, 21, 5243, 575, 12633, 1113, 12840, 6846, 504, 12841, 12842, 12843, 12844, 10787, 12846, 12847, 12200, 12848, 6840, 10514, 7852, 6886, 6880, 5489, 12849, 2118, 12864, 12865, 12867, 12872, 12873, 11886, 12875, 10940, 8004, 12876, 1652, 5876, 12813, 8041, 7953, 7612, 8379, 7364, 1187, 12877, 2]
// Exports: AnimatedStartStagePrompt, ChatButton, ContinueToStagePrompt, DisconnectStageButton, JoinStagePrompt, MoveToAudienceButton, MusicMuteButton, RequestToSpeakButton, RequestToSpeakListButton

// Module 12838 (StageActionBarButtons)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import _mod1652 from "module_1652" /* 1652 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import spring_spring from "spring/spring" /* 5876 */;
import StageChannelActionCreatorExtras from "StageChannelActionCreatorExtras" /* 6840 */;
import StageChannelsConstants from "StageChannelsConstants" /* 6843 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 6846 */;
import Pressables from "Pressables" /* 7364 */;
import StageChannelModalActionCreators from "StageChannelModalActionCreators" /* 7612 */;
import _mod8041 from "module_8041" /* 8041 */;
import AssetRegistryDefault from "AssetRegistry" /* 8379 */;
import CallsUtils from "CallsUtils" /* 10514 */;
import CallBarActionAll from "CallBarAction" /* 12633 */;
import useStageChannelConnectAction from "useStageChannelConnectAction" /* 12813 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 12840 */;
import StageMusicActionCreators from "StageMusicActionCreators" /* 12846 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 12847 */;
import shouldShowEndStageModalDefault from "shouldShowEndStageModal" /* 12848 */;
import useRaiseHandControlDefault from "useRaiseHandControl" /* 12867 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 12877 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;
import ReadStateStore from "ReadStateStore" /* 6952 */;
import StageMusicStore from "StageMusicStore" /* 12839 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

const _modDef1652 = _mod1652;

let closure_12;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let size1;
let tmp;
const AssetRegistryDefault4 = tmp(12872);
class AnimatedPrompt {
  constructor(arg0) {
    let children;
    let show;
    let style;
    let tmp5;
    let tmp6;
    let tmp7;
    let tmp8;
    let useReducedMotion;
    ({ show, children, style } = arg0);
    const tmp = closure_14();
    let obj = get_initialized;
    const items = [AccessibilityStore];
    const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
    const items1 = [closure_16, , , ];
    const useAnimatedStyle = _mod1652.useAnimatedStyle;
    _mod1652;
    items1[1] = spring_spring.withSpring;
    items1[2] = show;
    items1[3] = closure_15;
    let c0;
    let c1;
    let c2;
    [tmp5, tmp6, tmp7, tmp8] = items1;
    class StageActionBarButtonsTsx1 {
      constructor() {
        let num2;
        let tmp3;
        let num = 20;
        if (c1) {
          num = 0;
        }
        const obj = { marginTop: _undefined(num, c2), opacity: _undefined(num2, tmp3) };
        num2 = 0;
        tmp3 = c2;
        if (c1) {
          num2 = 1;
        }
        return obj;
      }
    }
    const items2 = [tmp6, tmp7, tmp8];
    StageActionBarButtonsTsx1.__closure = items2;
    StageActionBarButtonsTsx1.__workletHash = 12579092742848;
    StageActionBarButtonsTsx1.__initData = tmp5;
    const animatedStyle = useAnimatedStyle(StageActionBarButtonsTsx1);
    const style1 = [tmp.actionBarCTAContainer, style, ];
    let tmp11;
    const View = _modDef1652.View;
    const tmp10 = authStore2;
    if (!stateFromStores) {
      tmp11 = animatedStyle;
    }
    style1[2] = tmp11;
    return tmp10(View, { style: style1, children });
  }
}
class StartStagePrompt {
  constructor(style) {
    let intl;
    let intl2;
    let isLive;
    ({ channel: require, isLive } = style);
    style = style.style;
    let tmp = closure_14();
    let obj = {
      onPress: function handleStartStage() {
        const tmp = isLive;
        if (!tmp) {
          const obj = StageChannelActionCreatorExtras;
          const result = obj.openStageChannelSettings(require);
        }
      },
      iconSource: isLive(7953),
      iconStyle: tmp.promptIconStyle,
      style,
      completed: isLive,
      title: intl.string(intl3.t.OYbHfv),
      subtitle: intl2.string(intl3.t.yXwLMQ)
    };
    const FormCTA = _mod8041.FormCTA;
    intl = intl3.intl;
    intl2 = intl3.intl;
    return closure_12(FormCTA, obj);
  }
}
const View2 = react_native.View;
let closure_10 = StageChannelsConstants.REQUEST_TO_SPEAK_SHEET_KEY;
const NOOP = Constants.NOOP;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { actionBarCTAContainer: { position: "relative" }, imageStyle: obj2, iconStyle: size, iconContainerStyle: obj3, promptIconStyle: size1, continueContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center", padding: 16 }, continueText: obj4, continueIcon: obj5 };
obj2 = { tintColor: nativeDefault.colors.WHITE };
createStyles = createStyles.createStyles;
size = { tintColor: nativeDefault.colors.WHITE, width: 20, height: 20 };
obj3 = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360, borderRadius: nativeDefault.radii.lg, padding: 4 };
size1 = { tintColor: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT, width: nativeDefault.space.PX_24, height: nativeDefault.space.PX_24 };
obj4 = { color: nativeDefault.unsafe_rawColors.BLUE_345, fontSize: 14, lineHeight: 18 };
obj5 = { tintColor: nativeDefault.unsafe_rawColors.BLUE_345 };
const gesture = createStyles(obj);
let closure_15 = { mass: 1, stiffness: 100, damping: 30, overshootClamping: false };
let closure_16 = { code: "(function StageActionBarButtonsTsx1(){let[withSpring,show,actionBarAnimationConfig]=this.__closure;return{marginTop:withSpring(show?0:20,actionBarAnimationConfig),opacity:withSpring(show?1:0,actionBarAnimationConfig)};})" };
size = size_mod;
let result = size.fileFinishedImporting("modules/stage_channels/native/components/StageActionBarButtons.tsx");

export function MoveToAudienceButton(channel) {
  let intl;
  channel = channel.channel;
  const isSmallSize = channel.isSmallSize;
  let obj = {
    accessibilityLabel: intl.string(channel(1113).t.ezLpY6),
    source: AssetRegistryDefault2,
    onPress() {
      const obj = StageChannelActionCreators;
      const result = obj.audienceAckRequestToSpeak(channel, true);
    },
    isSmallSize
  };
  const ActionButton = CallBarActionAll.ActionButton;
  intl = channel(1113).intl;
  return closure_12(ActionButton, obj);
}
export function MusicMuteButton(arg0) {
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
  const obj2 = stateFromStores(12841);
  if (obj2.useShowStageMusicMuteButton(channel.id)) {
    let stringResult;
    const ActionButton = CallBarActionAll.ActionButton;
    const intl = tmp2(1113).intl;
    const string = intl.string;
    const t = tmp2(1113).t;
    const tmp6 = closure_12;
    if (stateFromStores) {
      stringResult = string(t.ScHlfl);
    } else {
      stringResult = string(t.zqxfrf);
    }
    const obj3 = {
      accessibilityLabel: stringResult,
      source: importDefault(stateFromStores ? 12842 : 12843),
      IconComponent: MusicIcon,
      imageStyle: tmp.imageStyle,
      onPress() {
          const obj = StageMusicActionCreators;
          return obj.updateStageMusicMuted(!stateFromStores);
        },
      isSmallSize
    };
    if (stateFromStores) {
      MusicIcon = tmp2(12844).MusicSlashIcon;
    } else {
      MusicIcon = tmp2(10787).MusicIcon;
    }
    tmp6Result = tmp6(ActionButton, obj3);
  }
  return tmp6Result;
}
export function DisconnectStageButton(channel) {
  let intl;
  channel = channel.channel;
  const isSmallSize = channel.isSmallSize;
  const obj = {
    accessibilityLabel: intl.string(channel(1113).t.SMKyih),
    source: AssetRegistryDefault3,
    IconComponent: channel(12200).DoorExitIcon,
    onPress: function handleStageDisconnect() {
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
  intl = channel(1113).intl;
  return closure_12(PrimaryActionButton, obj);
}
export function RequestToSpeakListButton(channel) {
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
    obj.openLazy(asyncRequire(12849, dependencyMap.paths), closure_10, obj2);
  }
  analyticsLocations = analyticsLocations(7852)().analyticsLocations;
  let obj = channel(6886);
  const stageParticipantsCount = obj.useStageParticipantsCount(channel.id, channel(6880).StageChannelParticipantNamedIndex.REQUESTED_TO_SPEAK_ONLY);
  if (stageParticipantsCount > 0) {
    let obj2 = { accessibilityLabel: intl.formatToPlainString(channel(1113).t.OhK58v, obj3), source: analyticsLocations(12864), imageStyle: obj4, IconComponent: channel(12865).HandRequestSpeakListIcon, onPress: handleOpenAudienceList, notifications: stageParticipantsCount, isSmallSize };
    const NotifiedActionButton = CallBarActionAll.NotifiedActionButton;
    intl = tmp3(1113).intl;
    obj3 = { count: stageParticipantsCount };
    obj4 = { tintColor: analyticsLocations(575).unsafe_rawColors.WHITE };
    tmp7 = closure_12(NotifiedActionButton, obj2);
  } else {
    const obj5 = { accessibilityLabel: intl2.string(channel(1113).t.KJnyvh), source: analyticsLocations(12864), imageStyle: obj6, IconComponent: channel(12865).HandRequestSpeakListIcon, onPress: handleOpenAudienceList, isSmallSize };
    const ActionButton = CallBarActionAll.ActionButton;
    intl2 = tmp3(1113).intl;
    obj6 = { tintColor: analyticsLocations(575).unsafe_rawColors.WHITE };
    tmp7 = closure_12(ActionButton, obj5);
  }
  return tmp7;
}
export function RequestToSpeakButton(arg0) {
  let HandRequestSpeakIcon;
  let channel;
  let disabled;
  let handlePress;
  let hasRequestedToSpeak;
  let isSmallSize;
  let stringResult;
  let tmp7;
  ({ channel, isSmallSize } = arg0);
  const tmp3 = useRaiseHandControlDefault(channel);
  ({ hasRequestedToSpeak, disabled, handlePress } = tmp3);
  const shouldAgeVerifyToSpeak = tmp3.shouldAgeVerifyToSpeak;
  const ToggledActionButton = CallBarActionAll.ToggledActionButton;
  const intl = intl3.intl;
  const string = intl.string;
  const t = intl3.t;
  const tmp4 = authStore2;
  if (hasRequestedToSpeak) {
    stringResult = string(t.GCimTk);
    tmp7 = tmp5;
  } else {
    stringResult = string(t.hLbG5N);
    tmp7 = tmp5;
  }
  const obj = { accessibilityLabel: stringResult, isActive: hasRequestedToSpeak, source: AssetRegistryDefault4, IconComponent: HandRequestSpeakIcon, onPress: handlePress, appearsDisabled: disabled, isSmallSize };
  if (shouldAgeVerifyToSpeak) {
    HandRequestSpeakIcon = tmp7(12873).HandRequestDenyIcon;
  } else {
    HandRequestSpeakIcon = tmp7(11886).HandRequestSpeakIcon;
  }
  if (disabled) {
    handlePress = NOOP;
  }
  return tmp4(ToggledActionButton, obj);
}
export function ChatButton(channel) {
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
  const obj2 = channel(12875);
  const isVoiceChannelLocked = obj2.useIsVoiceChannelLocked(channel);
  const obj3 = channel(10940);
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
      const obj4 = { imageStyle: obj5, accessibilityLabel: intl2.string(tmp(1113).t.ZXxLQg), IconComponent: tmp(8004).ChatIcon, source: isVoiceChannelLocked(12876), onPress, appearsDisabled: isVoiceChannelLocked, isSmallSize };
      obj5 = { tintColor: isVoiceChannelLocked(575).unsafe_rawColors.WHITE };
      const ActionButton = openChat(12633).ActionButton;
      intl2 = tmp(1113).intl;
      tmp7Result = closure_12(ActionButton, obj4);
    }
    return tmp7Result;
  }
  const NotifiedActionButton = openChat(12633).NotifiedActionButton;
  const tmp7 = closure_12;
  if (mentionCount > 0) {
    unreadCount = mentionCount;
  }
  const obj6 = { notifications: unreadCount, isMentioned: mentionCount > 0, imageStyle: { tintColor: isVoiceChannelLocked(575).unsafe_rawColors.WHITE }, accessibilityLabel: intl.string(tmp(1113).t.ZXxLQg), IconComponent: tmp(8004).ChatIcon, source: isVoiceChannelLocked(12876), onPress, appearsDisabled: isVoiceChannelLocked, isSmallSize };
  ({ tintColor: isVoiceChannelLocked(575).unsafe_rawColors.WHITE });
  intl = tmp(1113).intl;
  tmp7Result = tmp7(NotifiedActionButton, obj6);
}
export { AnimatedPrompt };
export function AnimatedStartStagePrompt(channel) {
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
    const obj2 = { show: first, children: authStore2(StartStagePrompt, obj3) };
    obj3 = { channel, isLive, style };
    tmp10 = authStore2(AnimatedPrompt, obj2);
  }
  return tmp10;
}
export { StartStagePrompt };
export function JoinStagePrompt(channel) {
  let intl;
  let intl2;
  channel = channel.channel;
  const style = channel.style;
  let obj = {
    onPress: function handleJoinStage() {
      const obj = StageChannelModalActionCreators;
      obj.connectAndOpen(channel);
    },
    iconSource: AssetRegistryDefault,
    iconStyle: null,
    iconContainerStyle: null,
    style,
    title: intl.string(channel(1113).t["7vb2cc"]),
    subtitle: intl2.string(channel(1113).t.lyCW4E)
  };
  const tmp = closure_14();
  const FormCTA = channel(8041).FormCTA;
  ({ iconStyle: obj.iconStyle, iconContainerStyle: obj.iconContainerStyle } = tmp);
  intl = channel(1113).intl;
  intl2 = channel(1113).intl;
  return closure_12(FormCTA, obj);
}
export function ContinueToStagePrompt(onContinue) {
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
  const obj3 = { children: authStore2(LegacyText, obj4) };
  const PressableOpacity = Pressables.PressableOpacity;
  obj4 = { style: tmp.continueText, children: intl.string(intl3.t["jMLfp/"]) };
  LegacyText = native.LegacyText;
  intl = intl3.intl;
  items = [authStore2(View2, obj3), ];
  const obj5 = { children: authStore2(Icon, obj6) };
  obj6 = { style: tmp.continueIcon, source: AssetRegistryDefault5, size: native.Icon.Sizes.SMALL, disableColor: true };
  Icon = native.Icon;
  items[1] = authStore2(View2, obj5);
  return authStore2(PressableOpacity, obj);
}
