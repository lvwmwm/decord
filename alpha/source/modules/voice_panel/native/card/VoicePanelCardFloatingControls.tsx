// Module ID: 19646
// Function ID: 19647
// Name: VoicePanelCardFloatingControls
// Dependencies: [19, 17, 5141, 4988, 6769, 5893, 11363, 11361, 11366, 1072, 5805, 21, 1652, 1187, 5140, 575, 11362, 19607, 19647, 12210, 19648, 19605, 1113, 12116, 9314, 9313, 7023, 19649, 7152, 5761, 19603, 7978, 6772, 11065, 19508, 19651, 19652, 504, 19631, 19653, 5199, 9371, 9400, 8753, 9398, 9421, 9375, 19654, 5390, 7387, 8821, 9326, 6572, 9370, 5751, 14974, 19551, 2]

// Module 19646 (VoicePanelCardFloatingControls)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl6 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import _mod1652 from "module_1652" /* 1652 */;
import native2 from "native" /* 5199 */;
import spring_spring from "spring/spring" /* 5761 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6772 */;
import NativeViewDefault from "NativeView" /* 7023 */;
import StreamActionCreators from "StreamActionCreators" /* 7978 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8821 */;
import VoiceStateIcons from "VoiceStateIcons" /* 9313 */;
import VoiceStateIconUtils from "VoiceStateIconUtils" /* 9314 */;
import usePlayingGameActivitiesDefault from "usePlayingGameActivities" /* 9371 */;
import useShouldOpenGameProfileModal from "useShouldOpenGameProfileModal" /* 9398 */;
import useResolveGameDefault from "useResolveGame" /* 9400 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9421 */;
import leaveEmbeddedActivity2 from "leaveEmbeddedActivity" /* 11065 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11361 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11362 */;
import VoicePanelCardConstants from "VoicePanelCardConstants" /* 11366 */;
import VoiceXIcon from "VoiceXIcon" /* 12116 */;
import VoicePanelIconButtonDefault from "VoicePanelIconButton" /* 19508 */;
import useStableParticipant from "useStableParticipant" /* 19603 */;
import useVoicePanelCardUserStateIcons from "useVoicePanelCardUserStateIcons" /* 19605 */;
import getRandomNumberInRangeDefault from "getRandomNumberInRange" /* 19631 */;
import AssetRegistryDefault from "AssetRegistry" /* 19652 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5141 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4988 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6769 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5893 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11363 */;
import CallConstants from "CallConstants" /* 5805 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5140 */;
import size_mod from "module_2" /* 2 */;

const module_1652_mod = _mod1652;
let _undefined, dependencyMap, importDefault, obj1;

let PixelRatio;
let Platform;
let Pressable;
let c10;
let c9;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let tmp;
let tmp10;
const useGameProfileObscuredDefault = tmp(8753);
const GuildTagDefault = tmp(9375);
const AssetRegistryDefault2 = tmp10(19653);
const GameTagChipletDefault = tmp(19654);
function StreamIcon(voicePlatform) {
  let items2;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  voicePlatform = voicePlatform.voicePlatform;
  let tmp = closure_23();
  const controlsSpecs = react.useContext(VoicePanelStateContextDefault).controlsSpecs;
  let obj = _mod1652;
  const items = [closure_24, controlsSpecs, VoicePanelControlsModes, 4];
  let c0;
  let c1;
  let c2;
  [tmp4, tmp5, tmp6, tmp7] = items;
  class VoicePanelCardFloatingControlsTsx1 {
    constructor() {
      tmp = closure_0.get().mode === closure_1.HIDDEN;
      num = 2;
      if (!tmp) {
        num = closure_2;
      }
      obj = { marginLeft: num, marginRight: null };
      num2 = 0;
      if (tmp) {
        num2 = 2;
      }
      obj.marginRight = num2;
      return obj;
    }
  }
  const items1 = [tmp5, tmp6, tmp7];
  VoicePanelCardFloatingControlsTsx1.__closure = items1;
  VoicePanelCardFloatingControlsTsx1.__workletHash = 5506814510669;
  VoicePanelCardFloatingControlsTsx1.__initData = tmp4;
  const animatedStyle = obj.useAnimatedStyle(VoicePanelCardFloatingControlsTsx1);
  let tmp2Result = tmp2(19607);
  if (voicePlatform === constants2.XBOX) {
    tmp2Result = tmp2(19647);
  } else if (voicePlatform === constants2.MOBILE) {
    tmp2Result = tmp2(12210);
  } else if (voicePlatform === constants2.QUEST) {
    tmp2Result = tmp2(19648);
  }
  const obj2 = { source: tmp2Result, style: items2 };
  items2 = [tmp.iconWithoutBackground, animatedStyle];
  return authStore4(closure_19, obj2);
}
function AnimatedLabelIcon(icon) {
  let CircleErrorIcon;
  let StageModeratorIcon;
  let intl;
  let intl2;
  let intl5;
  let obj10;
  let obj11;
  let obj13;
  let obj14;
  let obj4;
  let obj6;
  let obj8;
  icon = icon.icon;
  const tmp = closure_23();
  const type = icon.type;
  if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.STREAM_ICON === type) {
    const obj2 = { voicePlatform: icon.voicePlatform };
    return authStore4(StreamIcon, obj2);
  } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.SPEAKER_MUTE_ICON === type) {
    const obj3 = { style: tmp.speakerMuteIcon, hitSlop: 12, onPress: icon.onPress, accessibilityRole: "button", accessibilityLabel: intl5.string(intl6.t.Q8Uzof), children: authStore4(VoiceXIcon.VoiceXIcon, obj4) };
    intl5 = tmp2(1113).intl;
    obj4 = { style: tmp.iconWithoutBackground };
    return authStore4(Pressable, obj3);
  } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.USER_VIDEO_ICON === type) {
    let stringResult;
    let tmp19;
    if (icon.videoIconState === VoiceStateIconUtils.VideoIconState.VIDEO_DISABLED_LOCAL_AUTO) {
      const intl4 = tmp2(1113).intl;
      stringResult = intl4.string(tmp2(1113).t.uv1tVh);
    } else {
      const intl3 = tmp2(1113).intl;
      stringResult = intl3.string(tmp2(1113).t["PXMZ/+"]);
    }
    if (null != icon.onPress) {
      const obj5 = { style: tmp.iconContainer, onPress: icon.onPress, accessibilityRole: "button", accessibilityLabel: stringResult, children: authStore4(VoiceStateIcons.VideoIcon, obj6) };
      obj6 = { style: tmp.icon, state: icon.videoIconState };
      tmp19 = authStore4(Pressable, obj5);
    } else {
      const obj7 = { style: tmp.iconContainer, accessible: true, accessibilityRole: "image", accessibilityLabel: stringResult, children: authStore4(VoiceStateIcons.VideoIcon, obj8) };
      obj8 = { style: tmp.icon, state: icon.videoIconState };
      const tmp18 = NativeViewDefault;
      tmp19 = authStore4(tmp18, obj7);
    }
    return tmp19;
  } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.MUTE_DEAFEN_ICON === type) {
    const obj9 = { style: tmp.iconContainer, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: authStore4(Pressable, obj10) };
    obj10 = { onPress: icon.onPress, hitSlop: 12, children: authStore4(VoiceStateIcons.MuteDeafenIcon, obj11) };
    obj11 = { style: tmp.icon, state: icon.muteDeafenIconState, alwaysWhite: true };
    const tmp12 = NativeViewDefault;
    return authStore4(tmp12, obj9);
  } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.STAGE_MODERATOR_ICON === type) {
    const obj12 = { style: tmp.iconContainer, accessible: true, accessibilityRole: "image", accessibilityLabel: intl2.string(intl6.t.GMZqSi), children: authStore4(StageModeratorIcon, obj13) };
    const tmp9 = NativeViewDefault;
    intl2 = tmp2(1113).intl;
    obj13 = { size: "xs", color: nativeDefault.colors.WHITE };
    StageModeratorIcon = tmp2(19649).StageModeratorIcon;
    return authStore4(tmp9, obj12);
  } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.USER_DISCONNECTED_ICON === type) {
    const obj = { style: tmp.iconContainer, onPress: icon.onPress, accessibilityRole: "button", accessibilityLabel: intl.string(intl6.t.HFwRpk), children: authStore4(CircleErrorIcon, obj14) };
    intl = tmp2(1113).intl;
    obj14 = { size: "xs", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
    CircleErrorIcon = tmp2(7152).CircleErrorIcon;
    return authStore4(Pressable, obj);
  }
}
function useControlsHideStyles(controlsHidden, arg1) {
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let items = [closure_29, , , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  items[1] = spring_spring.withSpring;
  items[2] = controlsHidden;
  items[3] = React4;
  items[4] = arg1;
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp2, tmp3, tmp4, tmp5, tmp6] = items;
  class VoicePanelCardFloatingControlsTsx2 {
    constructor() {
      tmp = closure_0;
      obj = closure_1;
      num = 1;
      if (closure_1.get()) {
        num = 0;
      }
      obj1 = { opacity: tmp(num, closure_2), transform: null };
      tmp2 = closure_2;
      num2 = 0;
      if (obj.get()) {
        num2 = closure_3;
      }
      obj4 = { translateY: tmp(num2, tmp2) };
      items = [];
      items[0] = obj4;
      obj1.transform = items;
      return obj1;
    }
  }
  const items1 = [tmp3, tmp4, tmp5, tmp6];
  VoicePanelCardFloatingControlsTsx2.__closure = items1;
  VoicePanelCardFloatingControlsTsx2.__workletHash = 9709174111835;
  VoicePanelCardFloatingControlsTsx2.__initData = tmp2;
  return useAnimatedStyle(VoicePanelCardFloatingControlsTsx2);
}
function HideableTileControl(arg0) {
  let children;
  let hideStyles;
  let layout;
  let style;
  ({ style, hideStyles, layout, children } = arg0);
  const obj = { style, layout, pointerEvents: "box-none", children: authStore4(module_1652.View, { style: hideStyles, pointerEvents: "box-none", children }) };
  const View = module_1652.View;
  return authStore4(View, obj);
}
({ PixelRatio, Platform, Pressable } = react_native);
({ MODE_CHANGE_PHYSICS: c9, VoicePanelModes: c10 } = VoicePanelConstants);
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const VOICE_PANEL_CARD_INNER_PADDING = VoicePanelCardConstants.VOICE_PANEL_CARD_INNER_PADDING;
const ThemeTypes = Constants.ThemeTypes;
({ ParticipantTypes: closure_14, VoicePlatforms: closure_15 } = CallConstants);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = Fragment);
let module_1652 = module_1652_mod;
let closure_19 = module_1652.createAnimatedComponent(native.Icon);
module_1652 = module_1652_mod;
let closure_20 = module_1652.createAnimatedComponent(Pressable);
let c21 = 28;
const paddingVertical = PixelRatio.roundToNearestPixel(4);
let closure_23 = createStyles.createStyles(() => {
  let obj3;
  let rect;
  let rect1;
  let rect2;
  let size1;
  let size2;
  const obj = { topLeftButton: rect, topRightButton: { position: "absolute", top: VOICE_PANEL_CARD_INNER_PADDING, right: VOICE_PANEL_CARD_INNER_PADDING, zIndex: 1 }, labelPositionContainer: rect1, labelHideWrapper: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center", alignItems: "center" }, labelOuterContainer: { display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", borderRadius: nativeDefault.radii.sm, overflow: "hidden", paddingHorizontal: 8, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, height: height2, gap: 4 }, initialIcons: { display: "flex", flexDirection: "row", marginStart: -4, marginEnd: -4 }, icon: size, iconWithoutBackground: size1, iconContainer: size2, speakerMuteIcon: { marginRight: 4 }, floatingContainer: { flexDirection: "row", alignItems: "center", gap: 4, overflow: "hidden", flexShrink: 1, alignSelf: "stretch" }, floatingText: obj3, ringingIconContainer: rect2, ringingIcon: { tintColor: nativeDefault.colors.STATUS_POSITIVE }, secureFramesIcon: { marginEnd: -2 } };
  rect = { position: "absolute", top: VOICE_PANEL_CARD_INNER_PADDING, left: VOICE_PANEL_CARD_INNER_PADDING, zIndex: 1 };
  rect1 = { position: "absolute", left: 8, right: 8, bottom: 8, height: height2, marginHorizontal: 8 };
  ({ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", borderRadius: nativeDefault.radii.sm, overflow: "hidden", paddingHorizontal: 8, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, height: height2, gap: 4 });
  size = { width: 12, height: 12, tintColor: nativeDefault.colors.WHITE };
  size1 = { width: 16, height: 16, tintColor: nativeDefault.colors.WHITE };
  size2 = { width: 20, height: 20, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center" };
  obj3 = { overflow: "hidden", paddingStart: 4, paddingEnd: 4, paddingVertical, marginVertical: -paddingVertical, flexShrink: 1, lineHeight: 14 };
  rect2 = { position: "absolute", top: 8, right: 8, padding: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
  ({ tintColor: nativeDefault.colors.STATUS_POSITIVE });
  return obj;
});
let closure_24 = { code: "(function VoicePanelCardFloatingControlsTsx1(){let[controlsSpecs,VoicePanelControlsModes,GAP]=this.__closure;const hidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;return{marginLeft:hidden?2:GAP,marginRight:hidden?2:0};})" };
let closure_27 = -28 + 3 * VOICE_PANEL_CARD_INNER_PADDING;
let closure_28 = 28 + VOICE_PANEL_CARD_INNER_PADDING;
let closure_29 = { code: "(function VoicePanelCardFloatingControlsTsx2(){let[withSpring,hidden,MODE_CHANGE_PHYSICS,hiddenOffsetY]=this.__closure;return{opacity:withSpring(hidden.get()?0:1,MODE_CHANGE_PHYSICS),transform:[{translateY:withSpring(hidden.get()?hiddenOffsetY:0,MODE_CHANGE_PHYSICS)}]};})" };
let closure_32 = react.memo(function CloseButton(participant) {
  let controlsHidden;
  let isSelf;
  let layout;
  let obj2;
  let stringResult;
  let tmp6;
  participant = participant.participant;
  let guildId;
  ({ controlsHidden, isSelf, layout } = participant);
  guildId = react.useContext(guildId(11362)).guildId;
  const items = [guildId, participant];
  const tmp = closure_23();
  const tmp2 = useControlsHideStyles(controlsHidden, closure_27);
  let obj = { style: tmp.topLeftButton, hideStyles: tmp2, layout, children: tmp4(tmp6, obj2) };
  const callback = react.useCallback(() => {
    const obj = useStableParticipant;
    if (obj.isStableStreamParticipant(participant)) {
      const streamForUser = ApplicationStreamingStore.getStreamForUser(tmp3.user.id, guildId);
      if (null != streamForUser) {
        const stopStream = StreamActionCreators.stopStream;
        StreamActionCreators;
        const tmpResult4 = StreamKeyUtils;
        stopStream(tmpResult4.encodeStreamKey(streamForUser));
      }
    }
    const tmpResult5 = useStableParticipant;
    if (tmpResult5.isStableActivityParticipant(participant)) {
      const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
      let _location;
      const leaveEmbeddedActivity = leaveEmbeddedActivity2.leaveEmbeddedActivity;
      leaveEmbeddedActivity2;
      if (currentEmbeddedActivity != null) {
        _location = currentEmbeddedActivity.location;
      }
      const obj2 = { location: _location, applicationId: participant.applicationId };
      const result = leaveEmbeddedActivity(obj2);
    }
  }, items);
  obj2 = { icon: guildId(19651), onPress: callback, accessibilityLabel: stringResult };
  tmp6 = guildId(19508);
  const obj3 = participant(19603);
  let result = obj3.isStableActivityParticipant(participant);
  const intl = participant(1113).intl;
  const string = intl.string;
  const t = participant(1113).t;
  const tmp5 = HideableTileControl;
  if (result) {
    stringResult = string(t["R/FK4A"]);
  } else if (isSelf) {
    stringResult = string(t.S5anIc);
  } else {
    stringResult = string(t.q3O3J8);
  }
  return closure_16(tmp5, obj);
});
let closure_33 = { code: "(function VoicePanelCardFloatingControlsTsx3(){let[controlsHidden,mode,VoicePanelModes]=this.__closure;return controlsHidden.get()||mode.get()===VoicePanelModes.PIP;})" };
let closure_34 = react.memo(function CardFocusButton(participantId) {
  let controlsHidden;
  let isActivityParticipant;
  let layout;
  let obj4;
  let stringResult;
  let tmp10;
  let tmp7;
  let tmp8;
  let tmp9;
  let tmpResult;
  participantId = participantId.participantId;
  const targetName = participantId.targetName;
  ({ controlsHidden, isActivityParticipant, layout } = participantId);
  const context = react.useContext(VoicePanelStateContextDefault);
  const setFocused = context.setFocused;
  const items = [setFocused, participantId];
  const mode = context.mode;
  const callback = react.useCallback(() => {
    setFocused(participantId);
  }, items);
  const items1 = [closure_33, controlsHidden, mode, authStore];
  let c0;
  let c1;
  let c2;
  [tmp7, tmp8, tmp9, tmp10] = items1;
  const tmp5 = closure_23();
  const obj = _mod1652;
  class VoicePanelCardFloatingControlsTsx3 {
    constructor() {
      const value = _undefined.get() || _undefined2.get() === _undefined3.PIP;
      return value;
    }
  }
  const items2 = [tmp8, tmp9, tmp10];
  VoicePanelCardFloatingControlsTsx3.__closure = items2;
  VoicePanelCardFloatingControlsTsx3.__workletHash = 11699868813456;
  VoicePanelCardFloatingControlsTsx3.__initData = tmp7;
  const tmp11 = useControlsHideStyles(obj.useDerivedValue(VoicePanelCardFloatingControlsTsx3), closure_27);
  if (isActivityParticipant) {
    const intl3 = tmp6(1113).intl;
    stringResult = intl3.string(tmp6(1113).t["3ejJer"]);
  } else if (null != targetName) {
    const intl2 = tmp6(1113).intl;
    const obj2 = { targetName };
    stringResult = intl2.formatToPlainString(tmp6(1113).t.OervdV, obj2);
  } else {
    const intl = tmp6(1113).intl;
    stringResult = intl.string(tmp6(1113).t["77cRN4"]);
  }
  const obj3 = { style: tmp5.topRightButton, hideStyles: tmp11, layout, children: authStore4(tmpResult, obj4) };
  obj4 = { icon: AssetRegistryDefault, onPress: callback, accessibilityLabel: stringResult };
  tmpResult = VoicePanelIconButtonDefault;
  return authStore4(HideableTileControl, obj3);
});
let closure_35 = { mass: 0.1, stiffness: 400, overshootClamping: true };
let closure_36 = { code: "(function VoicePanelCardFloatingControlsTsx4(){let[flip]=this.__closure;return flip.get();})" };
let closure_37 = { code: "(function VoicePanelCardFloatingControlsTsx5(finished){let[flip]=this.__closure;if(!finished)return;flip.set(!flip.get());})" };
let closure_38 = { code: "(function VoicePanelCardFloatingControlsTsx6(finished){let[flip]=this.__closure;if(!finished)return;flip.set(!flip.get());})" };
let closure_39 = { code: "(function VoicePanelCardFloatingControlsTsx7(flipped){let[angle,withSpring,getRandomNumberInRange,RING_PHYSICS,_worklet_3408418077918_init_data,flip,_worklet_3975598053693_init_data]=this.__closure;if(flipped){angle.set(withSpring(getRandomNumberInRange(45-10,45+10),RING_PHYSICS,'respect-motion-settings',function VoicePanelCardFloatingControlsTsx5Factory([_worklet_3408418077918_init_data,flip]){const VoicePanelCardFloatingControlsTsx5=function(finished){if(!finished)return;flip.set(!flip.get());};VoicePanelCardFloatingControlsTsx5.__closure=[flip];VoicePanelCardFloatingControlsTsx5.__workletHash=3408418077918;VoicePanelCardFloatingControlsTsx5.__initData=_worklet_3408418077918_init_data;return VoicePanelCardFloatingControlsTsx5;}([_worklet_3408418077918_init_data,flip])));}else{angle.set(withSpring(getRandomNumberInRange(0-10,0+10),RING_PHYSICS,'respect-motion-settings',function VoicePanelCardFloatingControlsTsx6Factory([_worklet_3975598053693_init_data,flip]){const VoicePanelCardFloatingControlsTsx6=function(finished){if(!finished)return;flip.set(!flip.get());};VoicePanelCardFloatingControlsTsx6.__closure=[flip];VoicePanelCardFloatingControlsTsx6.__workletHash=3975598053693;VoicePanelCardFloatingControlsTsx6.__initData=_worklet_3975598053693_init_data;return VoicePanelCardFloatingControlsTsx6;}([_worklet_3975598053693_init_data,flip])));}})" };
let closure_40 = { code: "(function VoicePanelCardFloatingControlsTsx8(){let[controlsHidden,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING]=this.__closure;return{top:controlsHidden.get()?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):0};})" };
let closure_41 = { code: "(function VoicePanelCardFloatingControlsTsx9(){let[angle]=this.__closure;return{transform:[{rotate:angle.get()+\"deg\"}]};})" };
let closure_42 = react.memo(function RingingIcon(controlsHidden) {
  let Icon;
  let View2;
  let items9;
  let obj5;
  let obj6;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp25;
  let tmp26;
  let tmp8;
  let tmp9;
  let useReducedMotion;
  controlsHidden = controlsHidden.controlsHidden;
  let tmp = closure_23();
  const tmp2 = require;
  let obj = _mod1652;
  const sharedValue = obj.useSharedValue(true);
  const obj2 = _mod1652;
  const sharedValue1 = obj2.useSharedValue(0);
  let items = [AccessibilityStore];
  const obj3 = get_initialized;
  const stateFromStores = obj3.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let items1 = [closure_36, sharedValue];
  let c0;
  [tmp8, tmp9] = items1;
  const tmp7 = _mod1652;
  class VoicePanelCardFloatingControlsTsx4 {
    constructor() {
      return _undefined.get();
    }
  }
  let items2 = [tmp9];
  VoicePanelCardFloatingControlsTsx4.__closure = items2;
  VoicePanelCardFloatingControlsTsx4.__workletHash = 5558451211124;
  VoicePanelCardFloatingControlsTsx4.__initData = tmp8;
  let items3 = [closure_39, sharedValue1, , , , , , ];
  const useAnimatedReaction = tmp7.useAnimatedReaction;
  items3[2] = spring_spring.withSpring;
  const tmp10 = importDefault;
  items3[3] = getRandomNumberInRangeDefault;
  items3[4] = closure_35;
  items3[5] = closure_37;
  items3[6] = sharedValue;
  items3[7] = closure_38;
  c0 = undefined;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items3;
  class VoicePanelCardFloatingControlsTsx7 {
    constructor(arg0) {
      let tmp10;
      let tmp11;
      let tmp21;
      let tmp22;
      let tmp = _undefined;
      const tmp4 = arg0;
      if (tmp4) {
        const items = [c4, c5];
        _undefined = undefined;
        [tmp21, tmp22] = items;
        const tmp3Result = _undefined(35, 55);
        class VoicePanelCardFloatingControlsTsx5 {
          constructor(arg0) {
            tmp = arg0;
            if (tmp) {
              tmp2 = closure_0;
              result = closure_0.set(!closure_0.get());
            }
            return;
          }
        }
        const items1 = [tmp22];
        VoicePanelCardFloatingControlsTsx5.__closure = items1;
        VoicePanelCardFloatingControlsTsx5.__workletHash = 3408418077918;
        VoicePanelCardFloatingControlsTsx5.__initData = tmp21;
        let result = set(tmp2(tmp3Result, tmp17, "respect-motion-settings", VoicePanelCardFloatingControlsTsx5));
      } else {
        const items2 = [c6, c5];
        _undefined = undefined;
        [tmp10, tmp11] = items2;
        const tmp3Result2 = _undefined(-10, 10);
        class VoicePanelCardFloatingControlsTsx5 {
          constructor(arg0) {
            tmp = arg0;
            if (tmp) {
              tmp2 = closure_0;
              result = closure_0.set(!closure_0.get());
            }
            return;
          }
        }
        const items3 = [tmp11];
        VoicePanelCardFloatingControlsTsx6.__closure = items3;
        VoicePanelCardFloatingControlsTsx6.__workletHash = 3975598053693;
        VoicePanelCardFloatingControlsTsx6.__initData = tmp10;
        const result1 = set(tmp2(tmp3Result2, tmp6, "respect-motion-settings", VoicePanelCardFloatingControlsTsx6));
      }
    }
  }
  const items4 = [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18];
  VoicePanelCardFloatingControlsTsx7.__closure = items4;
  VoicePanelCardFloatingControlsTsx7.__workletHash = 8633903369339;
  VoicePanelCardFloatingControlsTsx7.__initData = tmp11;
  const animatedReaction = useAnimatedReaction(VoicePanelCardFloatingControlsTsx4, VoicePanelCardFloatingControlsTsx7);
  const items5 = [closure_40, controlsHidden, c21, VOICE_PANEL_CARD_INNER_PADDING];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp20, tmp21, tmp22, tmp23] = items5;
  const tmp2Result = _mod1652;
  class VoicePanelCardFloatingControlsTsx8 {
    constructor() {
      let top = 0;
      if (_undefined.get()) {
        top = -c1 + 2 * c2;
      }
      return { top };
    }
  }
  const items6 = [tmp21, tmp22, tmp23];
  VoicePanelCardFloatingControlsTsx8.__closure = items6;
  VoicePanelCardFloatingControlsTsx8.__workletHash = 1499880068773;
  VoicePanelCardFloatingControlsTsx8.__initData = tmp20;
  const animatedStyle = tmp2Result.useAnimatedStyle(VoicePanelCardFloatingControlsTsx8);
  const items7 = [closure_41, sharedValue1];
  c0 = undefined;
  [tmp25, tmp26] = items7;
  const tmp2Result2 = _mod1652;
  class VoicePanelCardFloatingControlsTsx9 {
    constructor() {
      let items;
      const obj = { transform: items };
      items = [{ rotate: "" + _undefined.get() + "deg" }];
      ({ rotate: "" + _undefined.get() + "deg" });
      return obj;
    }
  }
  const items8 = [tmp26];
  VoicePanelCardFloatingControlsTsx9.__closure = items8;
  VoicePanelCardFloatingControlsTsx9.__workletHash = 7953187195911;
  VoicePanelCardFloatingControlsTsx9.__initData = tmp25;
  const animatedStyle1 = tmp2Result2.useAnimatedStyle(VoicePanelCardFloatingControlsTsx9);
  const obj4 = { style: items9, children: authStore4(View2, obj5) };
  items9 = [animatedStyle, tmp.ringingIconContainer];
  const View = module_1652.View;
  let tmp29 = !stateFromStores;
  View2 = module_1652.View;
  if (!stateFromStores) {
    tmp29 = animatedStyle1;
  }
  obj5 = { style: tmp29, pointerEvents: "none", children: authStore4(Icon, obj6) };
  obj6 = { source: AssetRegistryDefault2, size: native.IconSizes.SMALL_20, style: tmp.ringingIcon };
  Icon = native.Icon;
  return authStore4(View, obj4);
});
let closure_43 = react.memo(function RingingIconWrapper(controlsHidden) {
  controlsHidden = controlsHidden.controlsHidden;
  const obj = { theme: ThemeTypes.LIGHT, children: authStore4(closure_42, { controlsHidden }) };
  const ThemeContextProvider = native2.ThemeContextProvider;
  return authStore4(ThemeContextProvider, obj);
});
let closure_44 = react.memo(function UserTagChiplet(arg0) {
  let closure_1;
  let ref;
  let textColor;
  let userId;
  ({ userId, textColor } = arg0);
  let gameRecord;
  importDefault = undefined;
  dependencyMap = undefined;
  let tmp = importDefault;
  let tmp2 = dependencyMap;
  const first = usePlayingGameActivitiesDefault(userId, arg0.guildId)[0];
  let application_id;
  const tmp4 = useResolveGameDefault;
  if (first != null) {
    application_id = first.application_id;
  }
  gameRecord = tmp4({ applicationId: application_id }).gameRecord;
  const tmp6 = useGameProfileObscuredDefault(gameRecord);
  importDefault = tmp6;
  dependencyMap = react.useRef(false);
  let items = [gameRecord, tmp6];
  const effect = react.useEffect(() => {
    const current = ref.current;
    let tmp2 = !current;
    const tmp = ref;
    if (!current) {
      tmp2 = null != gameRecord;
    }
    if (tmp2) {
      tmp2 = closure_1;
    }
    if (tmp2) {
      const trackEntryPoint = useShouldOpenGameProfileModal.trackEntryPoint;
      const id = gameRecord.id;
      const items = [useShouldOpenGameProfileModal.RejectionReason.Obscured];
      trackEntryPoint(false, id, items, GameProfileAnalyticUtils.GameProfileSources.CallTile);
      tmp.current = true;
    }
  }, items);
  if (null != gameRecord) {
    let tmp9;
    if (!tmp6) {
      const obj = { game: gameRecord, userId, textColor };
      tmp9 = closure_16(GameTagChipletDefault, obj);
    }
    return tmp9;
  }
  tmp9 = closure_16(GuildTagDefault, { userId, textColor });
});
let closure_45 = { code: "(function VoicePanelCardFloatingControlsTsx10(){let[hasHiddenVisibleIcon,focused,connected,mode,VoicePanelModes,controlsHidden]=this.__closure;const showIcon=hasHiddenVisibleIcon&&focused.get()==null;return!connected.get()||mode.get()===VoicePanelModes.PIP||!showIcon&&controlsHidden.get();})" };
let closure_46 = { code: "(function VoicePanelCardFloatingControlsTsx11(){let[FLOATING_BAR_HEIGHT,isPillHidden]=this.__closure;return{height:FLOATING_BAR_HEIGHT,pointerEvents:isPillHidden.get()?'none':'auto'};})" };
let closure_47 = { code: "(function VoicePanelCardFloatingControlsTsx12(){let[connected,isScreenReaderEnabled,controlsSpecs,VoicePanelControlsModes,hasIcon,GAP]=this.__closure;const hidden=!connected.get()||!isScreenReaderEnabled&&controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&hasIcon;const shouldCollapseWidth=hidden&&hasIcon;return{width:shouldCollapseWidth?0:'auto',marginRight:hidden?-GAP:0};})" };
let closure_48 = react.memo(function FloatingParticipantLabel(controlsHidden) {
  let View2;
  let channelId;
  let controlsSpecs;
  let focused;
  let formatToPlainStringResult;
  let guildId;
  let intl4;
  let items10;
  let items11;
  let items13;
  let items8;
  let items9;
  let label;
  let layout;
  let mode;
  let obj5;
  let obj6;
  let participant;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp37;
  const f119011 = (type) => type.type !== channelId(analyticsLocations[21]).VoicePanelCardUserStateIconType.STREAM_ICON;
  ({ label, layout, participant } = controlsHidden);
  channelId = undefined;
  let id;
  let analyticsLocations;
  let obj = react;
  let tmp = id;
  let tmp2 = analyticsLocations;
  controlsHidden = controlsHidden.controlsHidden;
  const context = react.useContext(id(analyticsLocations[16]));
  ({ guildId, channelId } = context);
  const connected = context.connected;
  let tmp4 = channelId;
  ({ controlsSpecs, focused, mode } = context);
  const obj2 = channelId(analyticsLocations[48]);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  const tmp6 = closure_23();
  id = undefined;
  const obj3 = channelId(analyticsLocations[30]);
  if (obj3.isStableParticipantWithUser(participant)) {
    id = participant.user.id;
  }
  analyticsLocations = tmp(tmp2[49])().analyticsLocations;
  const items = [id, channelId, analyticsLocations];
  const callback = obj.useCallback(() => {
    if (null != id) {
      const obj = { userId: tmp, channelId, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations };
      showUserProfileActionSheetDefault(obj);
    }
  }, items);
  const tmp4Result = tmp4(tmp2[51]);
  let isUserSecureFramesVerified = tmp4Result.useIsUserSecureFramesVerified({ userId: id, channelId });
  const type = participant.type;
  let id1;
  const tmpResult = tmp(tmp2[21]);
  const tmp4Result6 = tmp4(tmp2[30]);
  if (tmp4Result6.isStableParticipantWithUser(participant)) {
    id1 = participant.user.id;
  }
  const tmpResultResult = tmpResult(type, id1, guildId, channelId);
  const tmp12 = tmp(tmp2[52])({ userId: id, guildId });
  const tmp4Result7 = tmp4(tmp2[53]);
  const displayNameStylesFont = tmp4Result7.useDisplayNameStylesFont({ displayNameStyles: tmp12 });
  const length = tmpResultResult.length;
  const items1 = [closure_45, tmpResultResult.filter(f119011).length >= 1, focused, connected, mode, closure_10, controlsHidden];
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items1;
  const length2 = tmpResultResult.filter(f119011).length;
  const tmp4Result8 = tmp4(tmp2[12]);
  class VoicePanelCardFloatingControlsTsx10 {
    constructor() {
      const tmp = c0 && null == _undefined.get();
      const value = _undefined2.get();
      let tmp5 = !value;
      if (value) {
        tmp5 = _undefined3.get() === _undefined4.PIP;
      }
      if (!tmp5) {
        const value2 = !tmp && _undefined5.get();
        tmp5 = value2;
      }
      return tmp5;
    }
  }
  const items2 = [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20];
  VoicePanelCardFloatingControlsTsx10.__closure = items2;
  VoicePanelCardFloatingControlsTsx10.__workletHash = 475264106102;
  VoicePanelCardFloatingControlsTsx10.__initData = tmp14;
  const derivedValue = tmp4Result8.useDerivedValue(VoicePanelCardFloatingControlsTsx10);
  const items3 = [closure_46, c21, derivedValue];
  c0 = undefined;
  c1 = undefined;
  [tmp22, tmp23, tmp24] = items3;
  const tmp4Result9 = tmp4(tmp2[12]);
  class VoicePanelCardFloatingControlsTsx11 {
    constructor() {
      let str;
      const obj = { height, pointerEvents: str };
      str = "auto";
      if (_undefined.get()) {
        str = "none";
      }
      return obj;
    }
  }
  const items4 = [tmp23, tmp24];
  VoicePanelCardFloatingControlsTsx11.__closure = items4;
  VoicePanelCardFloatingControlsTsx11.__workletHash = 14022799495709;
  VoicePanelCardFloatingControlsTsx11.__initData = tmp22;
  const animatedStyle = tmp4Result9.useAnimatedStyle(VoicePanelCardFloatingControlsTsx11);
  const items5 = [closure_47, connected, isScreenReaderEnabled, controlsSpecs, VoicePanelControlsModes, length >= 1, 4];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33] = items5;
  const tmp26 = useControlsHideStyles(derivedValue, closure_28);
  const tmp4Result10 = tmp4(tmp2[12]);
  class VoicePanelCardFloatingControlsTsx12 {
    constructor() {
      let num2;
      const value = _undefined.get();
      let tmp2 = !value;
      if (value) {
        tmp2 = !c1 && _undefined2.get().mode === _undefined3.HIDDEN && c4;
        const tmp4 = !c1 && _undefined2.get().mode === _undefined3.HIDDEN && c4;
      }
      let num = "auto";
      if (tmp2) {
        num = "auto";
        if (c4) {
          num = 0;
        }
      }
      const obj = { width: num, marginRight: num2 };
      num2 = 0;
      if (tmp2) {
        num2 = -c5;
      }
      return obj;
    }
  }
  const items6 = [tmp28, tmp29, tmp30, tmp31, tmp32, tmp33];
  VoicePanelCardFloatingControlsTsx12.__closure = items6;
  VoicePanelCardFloatingControlsTsx12.__workletHash = 14557424257641;
  VoicePanelCardFloatingControlsTsx12.__initData = tmp27;
  const items7 = [tmp6.labelPositionContainer];
  const animatedStyle1 = tmp4Result10.useAnimatedStyle(VoicePanelCardFloatingControlsTsx12);
  const obj4 = { style: items7, layout, pointerEvents: "box-none", children: closure_16(View2, obj5) };
  const View = tmp(tmp2[12]).View;
  obj5 = { style: items8, pointerEvents: "box-none", children: closure_17(tmp37, obj6) };
  items8 = [tmp6.labelHideWrapper, tmp26];
  let tmp38;
  View2 = tmp(tmp2[12]).View;
  tmp37 = closure_20;
  if (null != id) {
    tmp38 = callback;
  }
  obj6 = { onPress: tmp38, style: items9, layout, children: items10 };
  items9 = [tmp6.labelOuterContainer, animatedStyle];
  let tmp35Result = tmpResultResult.length > 0;
  if (tmp35Result) {
    const obj7 = {
      style: tmp6.initialIcons,
      children: tmpResultResult.map((icon) => {
          const obj = { icon };
          return closure_1_16(AnimatedLabelIcon, obj, icon.type);
        })
    };
    const tmpResult2 = tmp(tmp2[26]);
    tmp35Result = tmp35(tmpResult2, obj7);
  }
  items10 = [tmp35Result, ];
  const obj8 = { style: items11, layout, children: items13 };
  items11 = [tmp6.floatingContainer, animatedStyle1];
  const View3 = tmp(tmp2[12]).View;
  const items12 = [tmp6.floatingText, ];
  let tmp41 = null != displayNameStylesFont;
  const Text = tmp4(tmp2[54]).Text;
  if (tmp41) {
    tmp41 = { fontFamily: displayNameStylesFont };
    const obj9 = { fontFamily: displayNameStylesFont };
  }
  const obj10 = { variant: "heading-xs/semibold", color: "text-overlay-light", lineClamp: 1, style: items12, ellipsizeMode: "tail", accessibilityLabel: formatToPlainStringResult, children: label };
  items12[1] = tmp41;
  if (null != tmpResultResult.find((type) => type.type === channelId(analyticsLocations[21]).VoicePanelCardUserStateIconType.STREAM_ICON)) {
    const intl3 = tmp4(tmp2[22]).intl;
    const obj11 = { username: label };
    formatToPlainStringResult = intl3.formatToPlainString(tmp4(tmp2[22]).t.I0mOAs, obj11);
  } else {
    const found = tmpResultResult.find((type) => type.type === channelId(analyticsLocations[21]).VoicePanelCardUserStateIconType.MUTE_DEAFEN_ICON);
    formatToPlainStringResult = label;
    if (null != found) {
      const muteDeafenIconState = found.muteDeafenIconState;
      if (tmp4(tmp2[24]).MuteDeafenIconState.DEAFENED !== muteDeafenIconState) {
        if (tmp4(tmp2[24]).MuteDeafenIconState.DEAFENED_SERVER !== muteDeafenIconState) {
          const intl = tmp4(tmp2[22]).intl;
          const obj12 = { username: label };
          formatToPlainStringResult = intl.formatToPlainString(tmp4(tmp2[22]).t.Hd1oVG, obj12);
        }
      }
      const intl2 = tmp4(tmp2[22]).intl;
      const obj13 = { username: label };
      formatToPlainStringResult = intl2.formatToPlainString(tmp4(tmp2[22]).t["9hDjai"], obj13);
    }
  }
  items13 = [closure_16(Text, obj10), , ];
  let tmp35Result2 = participant.type === constants.USER;
  if (tmp35Result2) {
    const obj14 = { userId: participant.user.id, guildId, textColor: "text-overlay-light" };
    tmp35Result2 = tmp35(closure_44, obj14);
  }
  items13[1] = tmp35Result2;
  if (isUserSecureFramesVerified) {
    const obj15 = { style: tmp6.secureFramesIcon, size: "xs", accessibilityLabel: intl4.string(tmp4(tmp2[22]).t.mR9cf3) };
    const ShieldLockIcon = tmp4(tmp2[55]).ShieldLockIcon;
    intl4 = tmp4(tmp2[22]).intl;
    isUserSecureFramesVerified = tmp35(ShieldLockIcon, obj15);
  }
  items13[2] = isUserSecureFramesVerified;
  items10[1] = closure_17(View3, obj8);
  return closure_16(View, obj4);
});
let closure_49 = { code: "(function VoicePanelCardFloatingControlsTsx13(){let[controlsSpecs,VoicePanelControlsModes,focused,mode,VoicePanelModes]=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN||focused.get()!=null||mode.get()===VoicePanelModes.PIP;})" };
const memoResult = react.memo(function FloatingControls(arg0) {
  let channelId;
  let connected;
  let controlsSpecs;
  let focused;
  let isRinging;
  let label;
  let layout;
  let mode;
  let participant;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp4Result4;
  let tmp9;
  ({ label, participant } = arg0);
  ({ isRinging, layout } = arg0);
  let guildId;
  let tmp = guildId;
  const context = react.useContext(guildId(11362));
  guildId = context.guildId;
  ({ channelId, controlsSpecs, focused, mode } = context);
  let obj = participant(504);
  const items = [RTCConnectionStore];
  let stateFromStores = obj.useStateFromStores(items, () => connected.isConnected());
  const obj2 = participant(19603);
  const items1 = [EmbeddedActivitiesStore, ApplicationStreamingStore];
  const tmp6 = obj2.isStableParticipantWithUser(participant) && participant.isSelf;
  const tmp4Result = participant(504);
  const stateFromStores1 = tmp4Result.useStateFromStores(items1, () => {
    const obj = useStableParticipant;
    if (obj.isStableActivityParticipant(participant)) {
      const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
      let applicationId1;
      const applicationId = tmp3.applicationId;
      if (currentEmbeddedActivity != null) {
        applicationId1 = currentEmbeddedActivity.applicationId;
      }
      return applicationId === applicationId1;
    } else {
      const tmpResult = useStableParticipant;
      const result = tmpResult.isStableStreamParticipant(tmp3) && null != ApplicationStreamingStore.getActiveStreamForUser(tmp3.user.id, guildId);
      return result;
    }
  });
  const items2 = [closure_49, controlsSpecs, VoicePanelControlsModes, focused, mode, closure_10];
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items2;
  const tmp8 = tmp(19551)(guildId, channelId, participant.id);
  const tmp4Result3 = participant(1652);
  class VoicePanelCardFloatingControlsTsx13 {
    constructor() {
      const tmp = _undefined.get().mode === _undefined2.HIDDEN || null != _undefined3.get() || _undefined4.get() === _undefined5.PIP;
      return tmp;
    }
  }
  const items3 = [tmp10, tmp11, tmp12, tmp13, tmp14];
  VoicePanelCardFloatingControlsTsx13.__closure = items3;
  VoicePanelCardFloatingControlsTsx13.__workletHash = 1345141750539;
  VoicePanelCardFloatingControlsTsx13.__initData = tmp9;
  const derivedValue = tmp4Result3.useDerivedValue(VoicePanelCardFloatingControlsTsx13);
  let tmp16 = null != label;
  if (tmp16) {
    const obj3 = { controlsHidden: derivedValue, label, layout, participant };
    tmp16 = closure_16(closure_48, obj3);
  }
  const tmp19 = closure_17;
  const tmp20 = closure_18;
  if (isRinging) {
    const obj4 = { controlsHidden: derivedValue };
    isRinging = closure_16(closure_43, obj4);
  }
  const children = [isRinging, , , ];
  let tmp23 = stateFromStores && stateFromStores1;
  if (tmp23) {
    const obj5 = { controlsHidden: derivedValue, participant, isSelf: tmp6, layout };
    tmp23 = closure_16(closure_32, obj5);
  }
  children[1] = tmp23;
  if (stateFromStores) {
    stateFromStores = tmp8;
  }
  if (stateFromStores) {
    const obj6 = { controlsHidden: derivedValue, participantId: participant.id, targetName: label, isActivityParticipant: tmp4Result4.isStableActivityParticipant(participant), layout };
    tmp4Result4 = participant(19603);
    stateFromStores = closure_16(closure_34, obj6);
  }
  children[2] = stateFromStores;
  children[3] = tmp16;
  return tmp19(tmp20, { children });
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCardFloatingControls.tsx");

export default memoResult;
