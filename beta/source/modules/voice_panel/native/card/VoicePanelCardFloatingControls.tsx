// Module ID: 16976
// Function ID: 16977
// Name: VoicePanelCardFloatingControls
// Dependencies: [19, 17, 4825, 2044, 4858, 4859, 11755, 11753, 11758, 1074, 4857, 21, 4566, 1177, 4836, 576, 11754, 16933, 16977, 9524, 16978, 16931, 1115, 9443, 9133, 9132, 5901, 6028, 5280, 16929, 4978, 4888, 8765, 16859, 16979, 16980, 504, 16962, 6494, 16981, 4540, 16982, 9191, 8131, 5423, 8129, 8139, 9205, 16983, 5266, 6583, 7624, 9144, 5084, 9188, 4832, 9238, 16904, 2]

// Module 16976 (VoicePanelCardFloatingControls)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl5 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import native2 from "native" /* 4540 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4888 */;
import StreamActionCreators from "StreamActionCreators" /* 4978 */;
import spring from "spring" /* 5280 */;
import NativeViewDefault from "NativeView" /* 5901 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7624 */;
import useShouldOpenGameProfileModal from "useShouldOpenGameProfileModal" /* 8129 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8139 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 8765 */;
import VoiceStateIcons from "VoiceStateIcons" /* 9132 */;
import VoiceStateIconUtils from "VoiceStateIconUtils" /* 9133 */;
import VoiceXIcon from "VoiceXIcon" /* 9443 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11753 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11754 */;
import VoicePanelCardConstants from "VoicePanelCardConstants" /* 11758 */;
import useStableParticipant from "useStableParticipant" /* 16929 */;
import useVoicePanelCardUserStateIcons from "useVoicePanelCardUserStateIcons" /* 16931 */;
import AssetRegistryDefault from "AssetRegistry" /* 16933 */;
import getRandomNumberInRangeDefault from "getRandomNumberInRange" /* 16962 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4858 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4859 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11755 */;
import CallConstants from "CallConstants" /* 4857 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport_mod from "ReanimatedRexport" /* 4566 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, participantId, set;

let Platform;
let Pressable;
let c10;
let c9;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
function StreamIcon(voicePlatform) {
  let items;
  voicePlatform = voicePlatform.voicePlatform;
  let tmp = closure_22();
  const controlsSpecs = react.useContext(VoicePanelStateContextDefault).controlsSpecs;
  let obj = controlsSpecs(4566);
  const fn = function o() {
    let num2;
    const tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN;
    let num = 4;
    if (tmp) {
      num = 2;
    }
    const obj = { marginLeft: num, marginRight: num2 };
    num2 = 0;
    if (tmp) {
      num2 = 2;
    }
    return obj;
  };
  const obj2 = { controlsSpecs, VoicePanelControlsModes, GAP: 4 };
  fn.__closure = obj2;
  fn.__workletHash = 3270040588948;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let tmp2Result = AssetRegistryDefault;
  if (voicePlatform === constants2.XBOX) {
    tmp2Result = tmp2(16977);
  } else if (voicePlatform === constants2.MOBILE) {
    tmp2Result = tmp2(9524);
  } else if (voicePlatform === constants2.QUEST) {
    tmp2Result = tmp2(16978);
  }
  const obj3 = { source: tmp2Result, style: items };
  items = [tmp.iconWithoutBackground, animatedStyle];
  return closure_16(closure_19, obj3);
}
function AnimatedLabelIcon(icon) {
  let CircleErrorIcon;
  let intl;
  let intl4;
  let obj10;
  let obj11;
  let obj12;
  let obj4;
  let obj6;
  let obj8;
  icon = icon.icon;
  const tmp = closure_22();
  const type = icon.type;
  if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.STREAM_ICON === type) {
    const obj2 = { voicePlatform: icon.voicePlatform };
    return authStore3(StreamIcon, obj2);
  } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.SPEAKER_MUTE_ICON === type) {
    const obj3 = { style: tmp.speakerMuteIcon, hitSlop: 12, onPress: icon.onPress, accessibilityRole: "button", accessibilityLabel: intl4.string(intl5.t.Q8Uzof), children: authStore3(VoiceXIcon.VoiceXIcon, obj4) };
    intl4 = tmp2(1115).intl;
    obj4 = { style: tmp.iconWithoutBackground };
    return authStore3(Pressable, obj3);
  } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.USER_VIDEO_ICON === type) {
    let stringResult;
    let tmp16;
    if (icon.videoIconState === VoiceStateIconUtils.VideoIconState.VIDEO_DISABLED_LOCAL_AUTO) {
      const intl3 = tmp2(1115).intl;
      stringResult = intl3.string(tmp2(1115).t.uv1tVh);
    } else {
      const intl2 = tmp2(1115).intl;
      stringResult = intl2.string(tmp2(1115).t["PXMZ/+"]);
    }
    if (null != icon.onPress) {
      const obj5 = { style: tmp.iconContainer, onPress: icon.onPress, accessibilityRole: "button", accessibilityLabel: stringResult, children: authStore3(VoiceStateIcons.VideoIcon, obj6) };
      obj6 = { style: tmp.icon, state: icon.videoIconState };
      tmp16 = authStore3(Pressable, obj5);
    } else {
      const obj7 = { style: tmp.iconContainer, accessible: true, accessibilityRole: "image", accessibilityLabel: stringResult, children: authStore3(VoiceStateIcons.VideoIcon, obj8) };
      obj8 = { style: tmp.icon, state: icon.videoIconState };
      const tmp15 = NativeViewDefault;
      tmp16 = authStore3(tmp15, obj7);
    }
    return tmp16;
  } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.MUTE_DEAFEN_ICON === type) {
    const obj9 = { style: tmp.iconContainer, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: authStore3(Pressable, obj10) };
    obj10 = { onPress: icon.onPress, hitSlop: 12, children: authStore3(VoiceStateIcons.MuteDeafenIcon, obj11) };
    obj11 = { style: tmp.icon, state: icon.muteDeafenIconState, alwaysWhite: true };
    const tmp9 = NativeViewDefault;
    return authStore3(tmp9, obj9);
  } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.USER_DISCONNECTED_ICON === type) {
    const obj = { style: tmp.iconContainer, onPress: icon.onPress, accessibilityRole: "button", accessibilityLabel: intl.string(intl5.t.HFwRpk), children: authStore3(CircleErrorIcon, obj12) };
    intl = tmp2(1115).intl;
    obj12 = { size: "xs", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
    CircleErrorIcon = tmp2(6028).CircleErrorIcon;
    return authStore3(Pressable, obj);
  }
}
let react = react_mod;
({ Platform, Pressable } = react_native);
({ MODE_CHANGE_PHYSICS: c9, VoicePanelModes: c10 } = VoicePanelConstants);
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const VOICE_PANEL_CARD_INNER_PADDING = VoicePanelCardConstants.VOICE_PANEL_CARD_INNER_PADDING;
const ThemeTypes = Constants.ThemeTypes;
({ ParticipantTypes: closure_14, VoicePlatforms: closure_15 } = CallConstants);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = Fragment);
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_19 = ReanimatedRexport.createAnimatedComponent(native.Icon);
ReanimatedRexport = ReanimatedRexport_mod;
let closure_20 = ReanimatedRexport.createAnimatedComponent(Pressable);
let c21 = 28;
let closure_22 = createStyles.createStyles(() => {
  let rect;
  let size1;
  let size2;
  const obj = { labelPositionContainer: { position: "absolute", left: 8, right: 8, bottom: 8, justifyContent: "center", alignItems: "center", marginHorizontal: 8 }, labelOuterContainer: { display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", borderRadius: nativeDefault.radii.sm, overflow: "hidden", paddingHorizontal: 8, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, height, gap: 4 }, initialIcons: { display: "flex", flexDirection: "row", marginStart: -4, marginEnd: -4 }, icon: size, iconWithoutBackground: size1, iconContainer: size2, speakerMuteIcon: { marginRight: 4 }, floatingContainer: { flexDirection: "row", alignItems: "center", gap: 4, overflow: "hidden", flexShrink: 1 }, floatingText: { overflow: "hidden", paddingStart: 4, paddingEnd: 4, flexShrink: 1, lineHeight: 14 }, ringingIconContainer: rect, ringingIcon: { tintColor: nativeDefault.colors.STATUS_POSITIVE }, secureFramesIcon: { marginEnd: -2 } };
  ({ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", borderRadius: nativeDefault.radii.sm, overflow: "hidden", paddingHorizontal: 8, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, height, gap: 4 });
  size = { width: 12, height: 12, tintColor: nativeDefault.colors.WHITE };
  size1 = { width: 16, height: 16, tintColor: nativeDefault.colors.WHITE };
  size2 = { width: 20, height: 20, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center" };
  rect = { position: "absolute", top: 8, right: 8, padding: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
  ({ tintColor: nativeDefault.colors.STATUS_POSITIVE });
  return obj;
});
const __initData = { code: "function VoicePanelCardFloatingControlsTsx1(){const{controlsSpecs,VoicePanelControlsModes,GAP}=this.__closure;const hidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;return{marginLeft:hidden?2:GAP,marginRight:hidden?2:0};}" };
const __initData2 = { code: "function VoicePanelCardFloatingControlsTsx2(){const{controlsHidden,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const hidden=controlsHidden.get();return{position:'absolute',top:hidden?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):VOICE_PANEL_CARD_INNER_PADDING,left:VOICE_PANEL_CARD_INNER_PADDING,opacity:withSpring(hidden?0:1,MODE_CHANGE_PHYSICS),zIndex:1};}" };
let closure_27 = react.memo((participant) => {
  let isSelf;
  let layout;
  let left;
  let stringResult;
  participant = participant.participant;
  const controlsHidden = participant.controlsHidden;
  let guildId;
  ({ isSelf, layout } = participant);
  guildId = react.useContext(guildId(11754)).guildId;
  let obj = participant(4566);
  const fn = function n() {
    let num2;
    let tmp2;
    let withSpring;
    const value = controlsHidden.get();
    if (value) {
      tmp2 = -v28 + 2 * left;
    } else {
      tmp2 = left;
    }
    const rect = { position: "absolute", top: tmp2, left, opacity: withSpring(num2, MODE_CHANGE_PHYSICS), zIndex: 1 };
    num2 = 1;
    withSpring = participant(dependencyMap[28]).withSpring;
    participant(dependencyMap[28]);
    if (value) {
      num2 = 0;
    }
    return rect;
  };
  let obj2 = { controlsHidden, FLOATING_BAR_HEIGHT: v28, VOICE_PANEL_CARD_INNER_PADDING, withSpring: participant(5280).withSpring, MODE_CHANGE_PHYSICS };
  fn.__closure = obj2;
  fn.__workletHash = 4080439075039;
  fn.__initData = __initData2;
  const items = [guildId, participant];
  const animatedStyle = obj.useAnimatedStyle(fn);
  const callback = react.useCallback(() => {
    const obj = useStableParticipant;
    if (obj.isStableStreamParticipant(participant)) {
      const streamForUser = ApplicationStreamingStore.getStreamForUser(tmp3.user.id, guildId);
      if (null != streamForUser) {
        const stopStream = StreamActionCreators.stopStream;
        StreamActionCreators;
        const tmpResult3 = StreamKeyUtils;
        stopStream(tmpResult3.encodeStreamKey(streamForUser));
      }
    }
    const tmpResult4 = useStableParticipant;
    if (tmpResult4.isStableActivityParticipant(participant)) {
      const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
      let _location;
      const leaveActivity = EmbeddedActivitiesNativeManagerDefault.leaveActivity;
      EmbeddedActivitiesNativeManagerDefault;
      if (currentEmbeddedActivity != null) {
        _location = currentEmbeddedActivity.location;
      }
      const obj2 = { location: _location, applicationId: participant.applicationId };
      leaveActivity(obj2);
    }
  }, items);
  const tmp3 = closure_16;
  const obj3 = { icon: guildId(16979), onPress: callback, style: animatedStyle, layout, accessibilityLabel: stringResult };
  const tmp4 = guildId(16859);
  const obj4 = participant(16929);
  const result = obj4.isStableActivityParticipant(participant);
  const intl = participant(1115).intl;
  const string = intl.string;
  const t = participant(1115).t;
  if (result) {
    stringResult = string(t["R/FK4A"]);
  } else if (isSelf) {
    stringResult = string(t.S5anIc);
  } else {
    stringResult = string(t.q3O3J8);
  }
  return tmp3(tmp4, obj3);
});
const __initData3 = { code: "function VoicePanelCardFloatingControlsTsx3(){const{controlsHidden,mode,VoicePanelModes,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const hidden=controlsHidden.get()||mode.get()===VoicePanelModes.PIP;return{position:'absolute',top:hidden?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):VOICE_PANEL_CARD_INNER_PADDING,right:VOICE_PANEL_CARD_INNER_PADDING,opacity:withSpring(hidden?0:1,MODE_CHANGE_PHYSICS),zIndex:1};}" };
let closure_29 = react.memo((participantId) => {
  let isActivityParticipant;
  let layout;
  let right;
  let stringResult;
  participantId = participantId.participantId;
  const controlsHidden = participantId.controlsHidden;
  const targetName = participantId.targetName;
  let setFocused;
  let mode;
  ({ isActivityParticipant, layout } = participantId);
  const context = mode.useContext(controlsHidden(setFocused[16]));
  setFocused = context.setFocused;
  mode = context.mode;
  const items = [setFocused, participantId];
  const callback = mode.useCallback(() => {
    setFocused(participantId);
  }, items);
  const fn = function u() {
    let num2;
    let tmp4;
    let withSpring;
    const value = controlsHidden.get() || mode.get() === constants.PIP;
    if (value) {
      tmp4 = -c21 + 2 * right;
    } else {
      tmp4 = right;
    }
    const rect = { position: "absolute", top: tmp4, right, opacity: withSpring(num2, c9), zIndex: 1 };
    num2 = 1;
    withSpring = spring.withSpring;
    spring;
    if (value) {
      num2 = 0;
    }
    return rect;
  };
  const obj = participantId(setFocused[12]);
  fn.__closure = { controlsHidden, mode, VoicePanelModes, FLOATING_BAR_HEIGHT: v28, VOICE_PANEL_CARD_INNER_PADDING, withSpring: participantId(setFocused[28]).withSpring, MODE_CHANGE_PHYSICS };
  fn.__workletHash = 12421495364262;
  fn.__initData = __initData3;
  ({ controlsHidden, mode, VoicePanelModes, FLOATING_BAR_HEIGHT: v28, VOICE_PANEL_CARD_INNER_PADDING, withSpring: participantId(setFocused[28]).withSpring, MODE_CHANGE_PHYSICS });
  const animatedStyle = obj.useAnimatedStyle(fn);
  if (isActivityParticipant) {
    const intl3 = tmp5(tmp2[22]).intl;
    stringResult = intl3.string(tmp5(tmp2[22]).t["3ejJer"]);
  } else if (null != targetName) {
    const intl2 = tmp5(tmp2[22]).intl;
    const obj3 = { targetName };
    stringResult = intl2.formatToPlainString(tmp5(tmp2[22]).t.OervdV, obj3);
  } else {
    const intl = tmp5(tmp2[22]).intl;
    stringResult = intl.string(tmp5(tmp2[22]).t["77cRN4"]);
  }
  const obj4 = { icon: controlsHidden(setFocused[35]), onPress: callback, style: animatedStyle, layout, accessibilityLabel: stringResult };
  const tmpResult = controlsHidden(setFocused[33]);
  return closure_16(tmpResult, obj4);
});
const RING_PHYSICS = { mass: 0.1, stiffness: 400, overshootClamping: true };
const __initData4 = { code: "function VoicePanelCardFloatingControlsTsx4(){const{flip}=this.__closure;return flip.get();}" };
const __initData5 = { code: "function VoicePanelCardFloatingControlsTsx5(flipped){const{angle,withSpring,getRandomNumberInRange,RING_PHYSICS,flip}=this.__closure;if(flipped){angle.set(withSpring(getRandomNumberInRange(45-10,45+10),RING_PHYSICS,'respect-motion-settings',function(finished){if(!finished)return;flip.set(!flip.get());}));}else{angle.set(withSpring(getRandomNumberInRange(0-10,0+10),RING_PHYSICS,'respect-motion-settings',function(finished){if(!finished)return;flip.set(!flip.get());}));}}" };
let closure_33 = { code: "function VoicePanelCardFloatingControlsTsx6(finished){const{flip}=this.__closure;if(!finished)return;flip.set(!flip.get());}" };
let closure_34 = { code: "function VoicePanelCardFloatingControlsTsx7(finished){const{flip}=this.__closure;if(!finished)return;flip.set(!flip.get());}" };
const __initData6 = { code: "function VoicePanelCardFloatingControlsTsx8(){const{controlsHidden,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING}=this.__closure;return{top:controlsHidden.get()?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):0};}" };
const __initData7 = { code: "function VoicePanelCardFloatingControlsTsx9(){const{angle}=this.__closure;return{transform:[{rotate:angle.get()+\"deg\"}]};}" };
let closure_37 = react.memo((controlsHidden) => {
  let Icon;
  let items1;
  let obj10;
  let obj11;
  let tmp13;
  let useReducedMotion;
  controlsHidden = controlsHidden.controlsHidden;
  let sharedValue1;
  let tmp = closure_22();
  let tmp2 = controlsHidden;
  let tmp3 = sharedValue1;
  let obj = controlsHidden(sharedValue1[12]);
  const sharedValue = obj.useSharedValue(true);
  let obj2 = controlsHidden(sharedValue1[12]);
  sharedValue1 = obj2.useSharedValue(0);
  let items = [AccessibilityStore];
  const obj3 = controlsHidden(sharedValue1[36]);
  const stateFromStores = obj3.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let fn = function o() {
    return sharedValue.get();
  };
  fn.__closure = { flip: sharedValue };
  fn.__workletHash = 7663309832237;
  fn.__initData = __initData4;
  let fn2 = function n(arg0) {
    let tmp = sharedValue1;
    const withSpring = spring.withSpring;
    const tmp3 = getRandomNumberInRangeDefault;
    const tmp4 = arg0;
    if (tmp4) {
      const fn2 = function o(arg0) {
        const tmp = arg0;
        if (tmp) {
          const result = sharedValue.set(!sharedValue.get());
        }
      };
      const obj2 = { flip: sharedValue };
      fn2.__closure = obj2;
      fn2.__workletHash = 17264907521028;
      fn2.__initData = __initData;
      let result = set(withSpring(tmp3(35, 55), RING_PHYSICS, "respect-motion-settings", fn2));
    } else {
      const fn = function n(arg0) {
        const tmp = arg0;
        if (tmp) {
          const result = sharedValue.set(!sharedValue.get());
        }
      };
      const obj = { flip: sharedValue };
      fn.__closure = obj;
      fn.__workletHash = 1799436949573;
      fn.__initData = __initData2;
      const result1 = set(withSpring(tmp3(-10, 10), RING_PHYSICS, "respect-motion-settings", fn));
    }
  };
  const obj4 = controlsHidden(sharedValue1[12]);
  fn2.__closure = { angle: sharedValue1, withSpring: controlsHidden(sharedValue1[28]).withSpring, getRandomNumberInRange: sharedValue(sharedValue1[37]), RING_PHYSICS, flip: sharedValue };
  fn2.__workletHash = 15646860695268;
  fn2.__initData = __initData5;
  ({ angle: sharedValue1, withSpring: controlsHidden(sharedValue1[28]).withSpring, getRandomNumberInRange: sharedValue(sharedValue1[37]), RING_PHYSICS, flip: sharedValue });
  const animatedReaction = obj4.useAnimatedReaction(fn, fn2);
  const obj6 = controlsHidden(sharedValue1[12]);
  const tmp7 = sharedValue;
  class I {
    constructor() {
      let top = 0;
      if (controlsHidden.get()) {
        top = -c21 + 2 * VOICE_PANEL_CARD_INNER_PADDING;
      }
      return { top };
    }
  }
  const obj7 = { controlsHidden, FLOATING_BAR_HEIGHT: v28, VOICE_PANEL_CARD_INNER_PADDING };
  I.__closure = obj7;
  I.__workletHash = 726627995932;
  I.__initData = __initData6;
  const animatedStyle = obj6.useAnimatedStyle(I);
  const fn3 = function p() {
    let items;
    const obj = { transform: items };
    items = [{ rotate: "" + sharedValue1.get() + "deg" }];
    ({ rotate: "" + sharedValue1.get() + "deg" });
    return obj;
  };
  fn3.__closure = { angle: sharedValue1 };
  fn3.__workletHash = 791392364030;
  fn3.__initData = __initData7;
  const obj8 = controlsHidden(sharedValue1[12]);
  const animatedStyle1 = obj8.useAnimatedStyle(fn3);
  const obj9 = { style: items1, children: closure_16(tmp13, obj10) };
  items1 = [animatedStyle, tmp.ringingIconContainer];
  let tmp14 = !stateFromStores;
  const tmp12 = sharedValue(sharedValue1[38]);
  tmp13 = sharedValue(sharedValue1[38]);
  if (!stateFromStores) {
    tmp14 = animatedStyle1;
  }
  obj10 = { style: tmp14, pointerEvents: "none", children: closure_16(Icon, obj11) };
  obj11 = { source: tmp7(tmp3[39]), size: tmp2(tmp3[13]).IconSizes.SMALL_20, style: tmp.ringingIcon };
  Icon = tmp2(tmp3[13]).Icon;
  return closure_16(tmp12, obj9);
});
let closure_38 = react.memo((controlsHidden) => {
  controlsHidden = controlsHidden.controlsHidden;
  const obj = { theme: ThemeTypes.LIGHT, children: authStore3(closure_37, { controlsHidden }) };
  const ThemeContextProvider = native2.ThemeContextProvider;
  return authStore3(ThemeContextProvider, obj);
});
let closure_39 = react.memo((guildId) => {
  let closure_2;
  let ref;
  let textColor;
  let userId;
  ({ userId, textColor } = guildId);
  let gameRecord;
  dependencyMap = undefined;
  react = undefined;
  let tmp = gameRecord;
  guildId = guildId.guildId;
  const obj = gameRecord(16982);
  const showGameTag = obj.useConfig({ location: "VoicePanelCardFloatingControls" }).showGameTag;
  const first = gameRecord(9191)(userId, guildId, showGameTag)[0];
  let tmp5;
  const tmp4 = gameRecord(8131);
  if (showGameTag) {
    let application_id;
    if (first != null) {
      application_id = first.application_id;
    }
    tmp5 = application_id;
  }
  gameRecord = tmp4({ applicationId: tmp5 }).gameRecord;
  const tmp8 = tmp(5423)(gameRecord);
  dependencyMap = tmp8;
  react = react.useRef(false);
  let items = [showGameTag, gameRecord, tmp8];
  const effect = react.useEffect(() => {
    const tmp = showGameTag && !ref.current && null != gameRecord && closure_2;
    if (tmp) {
      const trackEntryPoint = useShouldOpenGameProfileModal.trackEntryPoint;
      const id = gameRecord.id;
      const items = [useShouldOpenGameProfileModal.RejectionReason.Obscured];
      trackEntryPoint(false, id, items, GameProfileAnalyticUtils.GameProfileSources.CallTile);
      ref.current = true;
    }
  }, items);
  if (showGameTag) {
    if (null != gameRecord) {
      let tmp12;
      if (!tmp8) {
        const obj2 = { game: gameRecord, userId, textColor };
        tmp12 = closure_16(tmp(16983), obj2);
      }
      return tmp12;
    }
  }
  tmp12 = closure_16(tmp(9205), { userId, textColor });
});
const __initData8 = { code: "function VoicePanelCardFloatingControlsTsx10(){const{hasHiddenVisibleIcon,focused,connected,mode,VoicePanelModes,controlsHidden}=this.__closure;const showIcon=hasHiddenVisibleIcon&&focused.get()==null;return!connected.get()||mode.get()===VoicePanelModes.PIP||!showIcon&&controlsHidden.get();}" };
const __initData9 = { code: "function VoicePanelCardFloatingControlsTsx11(){const{isPillHidden}=this.__closure;return isPillHidden.get();}" };
const __initData10 = { code: "function VoicePanelCardFloatingControlsTsx12(hidden){const{pillOpacity,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;pillOpacity.set(withSpring(hidden?0:1,MODE_CHANGE_PHYSICS));}" };
const __initData11 = { code: "function VoicePanelCardFloatingControlsTsx13(){const{pillOpacity,isPillHidden,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING}=this.__closure;return{opacity:pillOpacity.get(),top:isPillHidden.get()?FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING:0,height:FLOATING_BAR_HEIGHT,pointerEvents:isPillHidden.get()?'none':'auto'};}" };
const __initData12 = { code: "function VoicePanelCardFloatingControlsTsx14(){const{connected,isScreenReaderEnabled,controlsSpecs,VoicePanelControlsModes,hasIcon,GAP}=this.__closure;const hidden=!connected.get()||!isScreenReaderEnabled&&controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&hasIcon;const shouldCollapseWidth=hidden&&hasIcon;return{width:shouldCollapseWidth?0:'auto',marginRight:hidden?-GAP:0};}" };
let closure_45 = react.memo((controlsHidden) => {
  let channelId;
  let closure_9;
  let formatToPlainStringResult;
  let guildId;
  let intl4;
  let items2;
  let items3;
  let items4;
  let items6;
  let label;
  let layout;
  let obj9;
  let participant;
  let tmp24;
  controlsHidden = controlsHidden.controlsHidden;
  ({ label, layout, participant } = controlsHidden);
  channelId = undefined;
  let controlsSpecs;
  let focused;
  let analyticsLocations;
  MODE_CHANGE_PHYSICS = undefined;
  VoicePanelModes = undefined;
  let derivedValue;
  let sharedValue;
  let obj = focused;
  let tmp = channelId;
  let tmp2 = controlsSpecs;
  const context = focused.useContext(channelId(controlsSpecs[16]));
  ({ guildId, channelId } = context);
  controlsSpecs = context.controlsSpecs;
  focused = context.focused;
  const connected = context.connected;
  const mode = context.mode;
  let tmp4 = controlsHidden;
  let obj2 = controlsHidden(controlsSpecs[49]);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  const tmp6 = closure_22();
  let id;
  const obj3 = controlsHidden(controlsSpecs[29]);
  if (obj3.isStableParticipantWithUser(participant)) {
    id = participant.user.id;
  }
  analyticsLocations = tmp(tmp2[50])().analyticsLocations;
  const items = [id, channelId, analyticsLocations];
  const callback = obj.useCallback(() => {
    if (null != id) {
      const obj = { userId: tmp, channelId, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations };
      showUserProfileActionSheetDefault(obj);
    }
  }, items);
  const tmp4Result = tmp4(tmp2[52]);
  let isUserSecureFramesVerified = tmp4Result.useIsUserSecureFramesVerified({ userId: id, channelId });
  const type = participant.type;
  let id1;
  const tmpResult = tmp(tmp2[21]);
  const tmp4Result8 = tmp4(tmp2[29]);
  if (tmp4Result8.isStableParticipantWithUser(participant)) {
    id1 = participant.user.id;
  }
  const tmpResultResult = tmpResult(type, id1, guildId, channelId);
  const tmp12 = tmp(tmp2[53])({ userId: id, guildId });
  const tmp4Result9 = tmp4(tmp2[54]);
  const displayNameStylesFont = tmp4Result9.useDisplayNameStylesFont({ displayNameStyles: tmp12 });
  let num = 1;
  MODE_CHANGE_PHYSICS = tmp14;
  const tmp15 = tmpResultResult.filter((type) => type.type !== controlsHidden(controlsSpecs[21]).VoicePanelCardUserStateIconType.STREAM_ICON).length >= 1;
  VoicePanelModes = tmp15;
  const fn = function c() {
    const tmp = closure_10 && null == focused.get();
    const value = connected.get();
    let tmp5 = !value;
    if (value) {
      tmp5 = mode.get() === constants.PIP;
    }
    if (!tmp5) {
      const value2 = !tmp && controlsHidden.get();
      tmp5 = value2;
    }
    return tmp5;
  };
  const obj4 = { hasHiddenVisibleIcon: tmp15, focused, connected, mode, VoicePanelModes, controlsHidden };
  fn.__closure = obj4;
  fn.__workletHash = 14354852732719;
  fn.__initData = __initData8;
  const tmp4Result10 = tmp4(tmp2[12]);
  derivedValue = tmp4Result10.useDerivedValue(fn);
  const useSharedValue = tmp4(tmp2[12]).useSharedValue;
  tmp4(tmp2[12]);
  if (derivedValue.get()) {
    num = 0;
  }
  sharedValue = useSharedValue(num);
  const fn2 = function _() {
    return derivedValue.get();
  };
  fn2.__closure = { isPillHidden: derivedValue };
  fn2.__workletHash = 653298163833;
  fn2.__initData = __initData9;
  const fn3 = function u(arg0) {
    let num = 1;
    set = sharedValue.set;
    const withSpring = spring.withSpring;
    spring;
    if (arg0) {
      num = 0;
    }
    const result = set(withSpring(num, c9));
  };
  const tmp4Result12 = tmp4(tmp2[12]);
  fn3.__closure = { pillOpacity: sharedValue, withSpring: tmp4(tmp2[28]).withSpring, MODE_CHANGE_PHYSICS };
  fn3.__workletHash = 158794425133;
  fn3.__initData = __initData10;
  ({ pillOpacity: sharedValue, withSpring: tmp4(tmp2[28]).withSpring, MODE_CHANGE_PHYSICS });
  const animatedReaction = tmp4Result12.useAnimatedReaction(fn2, fn3);
  const fn4 = function q() {
    let num;
    let str;
    const obj = { opacity: sharedValue.get(), top: num, height, pointerEvents: str };
    num = 0;
    const obj2 = derivedValue;
    if (derivedValue.get()) {
      num = height + VOICE_PANEL_CARD_INNER_PADDING;
    }
    str = "auto";
    if (obj2.get()) {
      str = "none";
    }
    return obj;
  };
  const obj6 = { pillOpacity: sharedValue, isPillHidden: derivedValue, FLOATING_BAR_HEIGHT: v28, VOICE_PANEL_CARD_INNER_PADDING: sharedValue };
  fn4.__closure = obj6;
  fn4.__workletHash = 12355778282621;
  fn4.__initData = __initData11;
  const tmp4Result13 = tmp4(tmp2[12]);
  const animatedStyle = tmp4Result13.useAnimatedStyle(fn4);
  const tmp4Result14 = tmp4(tmp2[12]);
  class Z {
    constructor() {
      let num2;
      const value = connected.get();
      let tmp2 = !value;
      if (value) {
        tmp2 = !isScreenReaderEnabled && controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN && closure_9;
        const tmp4 = !isScreenReaderEnabled && controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN && closure_9;
      }
      let num = "auto";
      if (tmp2) {
        num = "auto";
        if (closure_9) {
          num = 0;
        }
      }
      const obj = { width: num, marginRight: num2 };
      num2 = 0;
      if (tmp2) {
        num2 = -4;
      }
      return obj;
    }
  }
  const obj7 = { connected, isScreenReaderEnabled, controlsSpecs, VoicePanelControlsModes: derivedValue, hasIcon: tmpResultResult.length >= 1, GAP: 4 };
  Z.__closure = obj7;
  Z.__workletHash = 10013340978870;
  Z.__initData = __initData12;
  const items1 = [tmp6.labelPositionContainer];
  const animatedStyle1 = tmp4Result14.useAnimatedStyle(Z);
  let tmp25;
  const obj8 = { style: items1, layout, pointerEvents: "box-none", children: closure_17(tmp24, obj9) };
  tmp24 = closure_20;
  const tmpResult4 = tmp(tmp2[38]);
  if (null != id) {
    tmp25 = callback;
  }
  obj9 = { onPress: tmp25, style: items2, layout, children: items3 };
  items2 = [tmp6.labelOuterContainer, animatedStyle];
  let tmp21Result = tmpResultResult.length > 0;
  if (tmp21Result) {
    const obj10 = {
      style: tmp6.initialIcons,
      children: tmpResultResult.map((icon) => {
          const obj = { icon };
          return closure_1_16(AnimatedLabelIcon, obj, icon.type);
        })
    };
    const tmpResult5 = tmp(tmp2[26]);
    tmp21Result = tmp21(tmpResult5, obj10);
  }
  items3 = [tmp21Result, ];
  const obj11 = { style: items4, layout, children: items6 };
  items4 = [tmp6.floatingContainer, animatedStyle1];
  const items5 = [tmp6.floatingText, ];
  let tmp29 = null != displayNameStylesFont;
  const tmpResult6 = tmp(tmp2[38]);
  const Text = tmp4(tmp2[55]).Text;
  if (tmp29) {
    tmp29 = { fontFamily: displayNameStylesFont };
    const obj12 = { fontFamily: displayNameStylesFont };
  }
  const obj13 = { variant: "heading-sm/semibold", color: "text-overlay-light", lineClamp: 1, style: items5, ellipsizeMode: "tail", accessibilityLabel: formatToPlainStringResult, children: label };
  items5[1] = tmp29;
  if (null != tmpResultResult.find((type) => type.type === controlsHidden(controlsSpecs[21]).VoicePanelCardUserStateIconType.STREAM_ICON)) {
    const intl3 = tmp4(tmp2[22]).intl;
    const obj14 = { username: label };
    formatToPlainStringResult = intl3.formatToPlainString(tmp4(tmp2[22]).t.I0mOAs, obj14);
  } else {
    const found = tmpResultResult.find((type) => type.type === controlsHidden(controlsSpecs[21]).VoicePanelCardUserStateIconType.MUTE_DEAFEN_ICON);
    formatToPlainStringResult = label;
    if (null != found) {
      const muteDeafenIconState = found.muteDeafenIconState;
      if (tmp4(tmp2[24]).MuteDeafenIconState.DEAFENED !== muteDeafenIconState) {
        if (tmp4(tmp2[24]).MuteDeafenIconState.DEAFENED_SERVER !== muteDeafenIconState) {
          const intl = tmp4(tmp2[22]).intl;
          const obj15 = { username: label };
          formatToPlainStringResult = intl.formatToPlainString(tmp4(tmp2[22]).t.Hd1oVG, obj15);
        }
      }
      const intl2 = tmp4(tmp2[22]).intl;
      const obj16 = { username: label };
      formatToPlainStringResult = intl2.formatToPlainString(tmp4(tmp2[22]).t["9hDjai"], obj16);
    }
  }
  items6 = [closure_16(Text, obj13), , ];
  let tmp21Result2 = participant.type === constants.USER;
  if (tmp21Result2) {
    const obj17 = { userId: participant.user.id, guildId, textColor: "text-overlay-light" };
    tmp21Result2 = tmp21(closure_39, obj17);
  }
  items6[1] = tmp21Result2;
  if (isUserSecureFramesVerified) {
    const obj18 = { style: tmp6.secureFramesIcon, size: "xs", accessibilityLabel: intl4.string(tmp4(tmp2[22]).t.mR9cf3) };
    const ShieldLockIcon = tmp4(tmp2[56]).ShieldLockIcon;
    intl4 = tmp4(tmp2[22]).intl;
    isUserSecureFramesVerified = tmp21(ShieldLockIcon, obj18);
  }
  items6[2] = isUserSecureFramesVerified;
  items3[1] = closure_17(tmpResult6, obj11);
  return closure_16(tmpResult4, obj8);
});
const __initData13 = { code: "function VoicePanelCardFloatingControlsTsx15(){const{controlsSpecs,VoicePanelControlsModes,focused,mode,VoicePanelModes}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN||focused.get()!=null||mode.get()===VoicePanelModes.PIP;}" };
const memoResult = react.memo(function FloatingControls(arg0) {
  let connected;
  let isRinging;
  let label;
  let layout;
  let participant;
  let tmp4Result4;
  ({ label, participant } = arg0);
  ({ isRinging, layout } = arg0);
  let guildId;
  let controlsSpecs;
  let focused;
  let tmp = guildId;
  const context = focused.useContext(guildId(controlsSpecs[16]));
  guildId = context.guildId;
  controlsSpecs = context.controlsSpecs;
  focused = context.focused;
  const mode = context.mode;
  const channelId = context.channelId;
  let obj = participant(controlsSpecs[36]);
  const items = [RTCConnectionStore];
  let stateFromStores = obj.useStateFromStores(items, () => connected.isConnected());
  const obj2 = participant(controlsSpecs[29]);
  const items1 = [EmbeddedActivitiesStore, ApplicationStreamingStore];
  const tmp6 = obj2.isStableParticipantWithUser(participant) && participant.isSelf;
  const tmp4Result = participant(controlsSpecs[36]);
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
  const tmp8 = tmp(controlsSpecs[57])(guildId, channelId, participant.id);
  const tmp4Result3 = participant(controlsSpecs[12]);
  class I {
    constructor() {
      const tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN || null != focused.get() || mode.get() === constants.PIP;
      return tmp;
    }
  }
  const obj3 = { controlsSpecs, VoicePanelControlsModes, focused, mode, VoicePanelModes };
  I.__closure = obj3;
  I.__workletHash = 8765031976276;
  I.__initData = __initData13;
  const derivedValue = tmp4Result3.useDerivedValue(I);
  let tmp10 = null != label;
  if (tmp10) {
    const obj4 = { controlsHidden: derivedValue, label, layout, participant };
    tmp10 = closure_16(closure_45, obj4);
  }
  const tmp13 = closure_17;
  const tmp14 = closure_18;
  if (isRinging) {
    const obj5 = { controlsHidden: derivedValue };
    isRinging = closure_16(closure_38, obj5);
  }
  const children = [isRinging, , , ];
  let tmp17 = stateFromStores && stateFromStores1;
  if (tmp17) {
    const obj6 = { controlsHidden: derivedValue, participant, isSelf: tmp6, layout };
    tmp17 = closure_16(closure_27, obj6);
  }
  children[1] = tmp17;
  if (stateFromStores) {
    stateFromStores = tmp8;
  }
  if (stateFromStores) {
    const obj7 = { controlsHidden: derivedValue, participantId: participant.id, targetName: label, isActivityParticipant: tmp4Result4.isStableActivityParticipant(participant), layout };
    tmp4Result4 = participant(controlsSpecs[29]);
    stateFromStores = closure_16(closure_29, obj7);
  }
  children[2] = stateFromStores;
  children[3] = tmp10;
  return tmp13(tmp14, { children });
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCardFloatingControls.tsx");

export default memoResult;
