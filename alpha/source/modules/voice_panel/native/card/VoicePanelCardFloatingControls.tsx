// Module ID: 19210
// Function ID: 19211
// Name: VoicePanelCardFloatingControls
// Dependencies: [19, 17, 5010, 4857, 6708, 5759, 11204, 11202, 11207, 1072, 5676, 21, 5090, 1188, 5009, 575, 11203, 19163, 19211, 12005, 19212, 19161, 1114, 11911, 9215, 9214, 6954, 7080, 5632, 7235, 19159, 7893, 6711, 10907, 19094, 19213, 19214, 504, 19196, 19215, 5075, 9272, 9299, 8674, 9297, 9320, 9276, 19216, 5269, 7320, 8742, 9227, 6433, 9271, 5619, 14697, 19136, 2]

// Module 19210 (VoicePanelCardFloatingControls)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl5 from "intl" /* 1114 */;
import native from "native" /* 1188 */;
import native2 from "native" /* 5075 */;
import spring from "spring" /* 5632 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6711 */;
import NativeViewDefault from "NativeView" /* 6954 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 7235 */;
import StreamActionCreators from "StreamActionCreators" /* 7893 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8742 */;
import VoiceStateIcons from "VoiceStateIcons" /* 9214 */;
import VoiceStateIconUtils from "VoiceStateIconUtils" /* 9215 */;
import usePlayingGameActivitiesDefault from "usePlayingGameActivities" /* 9272 */;
import useShouldOpenGameProfileModal from "useShouldOpenGameProfileModal" /* 9297 */;
import useResolveGameDefault from "useResolveGame" /* 9299 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9320 */;
import leaveEmbeddedActivity2 from "leaveEmbeddedActivity" /* 10907 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11202 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11203 */;
import VoicePanelCardConstants from "VoicePanelCardConstants" /* 11207 */;
import VoiceXIcon from "VoiceXIcon" /* 11911 */;
import useStableParticipant from "useStableParticipant" /* 19159 */;
import useVoicePanelCardUserStateIcons from "useVoicePanelCardUserStateIcons" /* 19161 */;
import AssetRegistryDefault from "AssetRegistry" /* 19163 */;
import getRandomNumberInRangeDefault from "getRandomNumberInRange" /* 19196 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4857 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6708 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5759 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11204 */;
import CallConstants from "CallConstants" /* 5676 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport_mod from "ReanimatedRexport" /* 5090 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, importDefault;

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
const useGameProfileObscuredDefault = tmp(8674);
const GuildTagDefault = tmp(9276);
const GameTagChipletDefault = tmp(19216);
function StreamIcon(voicePlatform) {
  let items;
  voicePlatform = voicePlatform.voicePlatform;
  let tmp = closure_23();
  const controlsSpecs = react.useContext(VoicePanelStateContextDefault).controlsSpecs;
  let obj = controlsSpecs(5090);
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
    tmp2Result = tmp2(19211);
  } else if (voicePlatform === constants2.MOBILE) {
    tmp2Result = tmp2(12005);
  } else if (voicePlatform === constants2.QUEST) {
    tmp2Result = tmp2(19212);
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
  const tmp = closure_23();
  const type = icon.type;
  if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.STREAM_ICON === type) {
    const obj2 = { voicePlatform: icon.voicePlatform };
    return authStore4(StreamIcon, obj2);
  } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.SPEAKER_MUTE_ICON === type) {
    const obj3 = { style: tmp.speakerMuteIcon, hitSlop: 12, onPress: icon.onPress, accessibilityRole: "button", accessibilityLabel: intl4.string(intl5.t.Q8Uzof), children: authStore4(VoiceXIcon.VoiceXIcon, obj4) };
    intl4 = tmp2(1114).intl;
    obj4 = { style: tmp.iconWithoutBackground };
    return authStore4(Pressable, obj3);
  } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.USER_VIDEO_ICON === type) {
    let stringResult;
    let tmp16;
    if (icon.videoIconState === VoiceStateIconUtils.VideoIconState.VIDEO_DISABLED_LOCAL_AUTO) {
      const intl3 = tmp2(1114).intl;
      stringResult = intl3.string(tmp2(1114).t.uv1tVh);
    } else {
      const intl2 = tmp2(1114).intl;
      stringResult = intl2.string(tmp2(1114).t["PXMZ/+"]);
    }
    if (null != icon.onPress) {
      const obj5 = { style: tmp.iconContainer, onPress: icon.onPress, accessibilityRole: "button", accessibilityLabel: stringResult, children: authStore4(VoiceStateIcons.VideoIcon, obj6) };
      obj6 = { style: tmp.icon, state: icon.videoIconState };
      tmp16 = authStore4(Pressable, obj5);
    } else {
      const obj7 = { style: tmp.iconContainer, accessible: true, accessibilityRole: "image", accessibilityLabel: stringResult, children: authStore4(VoiceStateIcons.VideoIcon, obj8) };
      obj8 = { style: tmp.icon, state: icon.videoIconState };
      const tmp15 = NativeViewDefault;
      tmp16 = authStore4(tmp15, obj7);
    }
    return tmp16;
  } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.MUTE_DEAFEN_ICON === type) {
    const obj9 = { style: tmp.iconContainer, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: authStore4(Pressable, obj10) };
    obj10 = { onPress: icon.onPress, hitSlop: 12, children: authStore4(VoiceStateIcons.MuteDeafenIcon, obj11) };
    obj11 = { style: tmp.icon, state: icon.muteDeafenIconState, alwaysWhite: true };
    const tmp9 = NativeViewDefault;
    return authStore4(tmp9, obj9);
  } else if (useVoicePanelCardUserStateIcons.VoicePanelCardUserStateIconType.USER_DISCONNECTED_ICON === type) {
    const obj = { style: tmp.iconContainer, onPress: icon.onPress, accessibilityRole: "button", accessibilityLabel: intl.string(intl5.t.HFwRpk), children: authStore4(CircleErrorIcon, obj12) };
    intl = tmp2(1114).intl;
    obj12 = { size: "xs", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
    CircleErrorIcon = tmp2(7080).CircleErrorIcon;
    return authStore4(Pressable, obj);
  }
}
function HideableTileControl(arg0) {
  let children;
  let hideStyles;
  let layout;
  let style;
  ({ style, hideStyles, layout, children } = arg0);
  const obj = { style, layout, pointerEvents: "box-none", children: authStore4(ReanimatedNativeViewDefault, { style: hideStyles, pointerEvents: "box-none", children }) };
  const tmp = ReanimatedNativeViewDefault;
  return authStore4(tmp, obj);
}
({ PixelRatio, Platform, Pressable } = react_native);
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
const paddingVertical = PixelRatio.roundToNearestPixel(4);
let closure_23 = createStyles.createStyles(() => {
  let obj3;
  let rect;
  let rect1;
  let rect2;
  let size1;
  let size2;
  const obj = { topLeftButton: rect, topRightButton: { position: "absolute", top: VOICE_PANEL_CARD_INNER_PADDING, right: VOICE_PANEL_CARD_INNER_PADDING, zIndex: 1 }, labelPositionContainer: rect1, labelHideWrapper: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center", alignItems: "center" }, labelOuterContainer: { display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", borderRadius: nativeDefault.radii.sm, overflow: "hidden", paddingHorizontal: 8, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, height, gap: 4 }, initialIcons: { display: "flex", flexDirection: "row", marginStart: -4, marginEnd: -4 }, icon: size, iconWithoutBackground: size1, iconContainer: size2, speakerMuteIcon: { marginRight: 4 }, floatingContainer: { flexDirection: "row", alignItems: "center", gap: 4, overflow: "hidden", flexShrink: 1, alignSelf: "stretch" }, floatingText: obj3, ringingIconContainer: rect2, ringingIcon: { tintColor: nativeDefault.colors.STATUS_POSITIVE }, secureFramesIcon: { marginEnd: -2 } };
  rect = { position: "absolute", top: VOICE_PANEL_CARD_INNER_PADDING, left: VOICE_PANEL_CARD_INNER_PADDING, zIndex: 1 };
  rect1 = { position: "absolute", left: 8, right: 8, bottom: 8, height, marginHorizontal: 8 };
  ({ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", borderRadius: nativeDefault.radii.sm, overflow: "hidden", paddingHorizontal: 8, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, height, gap: 4 });
  size = { width: 12, height: 12, tintColor: nativeDefault.colors.WHITE };
  size1 = { width: 16, height: 16, tintColor: nativeDefault.colors.WHITE };
  size2 = { width: 20, height: 20, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center" };
  obj3 = { overflow: "hidden", paddingStart: 4, paddingEnd: 4, paddingVertical, marginVertical: -paddingVertical, flexShrink: 1, lineHeight: 14 };
  rect2 = { position: "absolute", top: 8, right: 8, padding: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
  ({ tintColor: nativeDefault.colors.STATUS_POSITIVE });
  return obj;
});
const __initData = { code: "function VoicePanelCardFloatingControlsTsx1(){const{controlsSpecs,VoicePanelControlsModes,GAP}=this.__closure;const hidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;return{marginLeft:hidden?2:GAP,marginRight:hidden?2:0};}" };
const hiddenOffsetY = -28 + 3 * VOICE_PANEL_CARD_INNER_PADDING;
const hiddenOffsetY2 = 28 + VOICE_PANEL_CARD_INNER_PADDING;
const __initData2 = { code: "function VoicePanelCardFloatingControlsTsx2(){const{withSpring,hidden,MODE_CHANGE_PHYSICS,hiddenOffsetY}=this.__closure;return{opacity:withSpring(hidden.get()?0:1,MODE_CHANGE_PHYSICS),transform:[{translateY:withSpring(hidden.get()?hiddenOffsetY:0,MODE_CHANGE_PHYSICS)}]};}" };
let closure_31 = react.memo(function CloseButton(participant) {
  let isSelf;
  let layout;
  let obj4;
  let stringResult;
  let tmp6;
  participant = participant.participant;
  const controlsHidden = participant.controlsHidden;
  let guildId;
  ({ isSelf, layout } = participant);
  guildId = react.useContext(guildId(11203)).guildId;
  let closure_1 = hiddenOffsetY;
  const tmp = closure_23();
  let obj = participant(5090);
  const fn = function o() {
    let items;
    const withSpring = controlsHidden(controlsSpecs[28]).withSpring;
    let num = 1;
    controlsHidden(controlsSpecs[28]);
    const obj = derivedValue;
    if (derivedValue.get()) {
      num = 0;
    }
    const obj2 = { opacity: withSpring(num, closure_9), transform: items };
    const withSpring2 = tmp(tmp2[28]).withSpring;
    let num2 = 0;
    controlsHidden(controlsSpecs[28]);
    if (obj.get()) {
      num2 = closure_1;
    }
    items = [{ translateY: withSpring2(num2, tmp4) }];
    ({ translateY: withSpring2(num2, closure_9) });
    return obj2;
  };
  let obj2 = { withSpring: participant(5632).withSpring, hidden: controlsHidden, MODE_CHANGE_PHYSICS, hiddenOffsetY };
  fn.__closure = obj2;
  fn.__workletHash = 10936966719458;
  fn.__initData = __initData2;
  const items = [guildId, participant];
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = { style: tmp.topLeftButton, hideStyles: animatedStyle, layout, children: closure_16(tmp6, obj4) };
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
  obj4 = { icon: guildId(19213), onPress: callback, accessibilityLabel: stringResult };
  tmp6 = guildId(19094);
  const obj5 = participant(19159);
  let result = obj5.isStableActivityParticipant(participant);
  const intl = participant(1114).intl;
  const string = intl.string;
  const t = participant(1114).t;
  const tmp5 = HideableTileControl;
  if (result) {
    stringResult = string(t["R/FK4A"]);
  } else if (isSelf) {
    stringResult = string(t.S5anIc);
  } else {
    stringResult = string(t.q3O3J8);
  }
  return closure_16(tmp5, obj3);
});
const __initData3 = { code: "function VoicePanelCardFloatingControlsTsx3(){const{controlsHidden,mode,VoicePanelModes}=this.__closure;return controlsHidden.get()||mode.get()===VoicePanelModes.PIP;}" };
let closure_33 = react.memo(function CardFocusButton(participantId) {
  let isActivityParticipant;
  let layout;
  let obj7;
  let stringResult;
  let tmpResult;
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
    const value = controlsHidden.get() || mode.get() === constants.PIP;
    return value;
  };
  const obj2 = { controlsHidden, mode, VoicePanelModes };
  fn.__closure = obj2;
  fn.__workletHash = 2201188865769;
  fn.__initData = __initData3;
  const tmp5 = closure_23();
  const obj = participantId(setFocused[12]);
  const derivedValue = obj.useDerivedValue(fn);
  let closure_1 = hiddenOffsetY;
  const fn2 = function o() {
    let items;
    const withSpring = controlsHidden(controlsSpecs[28]).withSpring;
    let num = 1;
    controlsHidden(controlsSpecs[28]);
    const obj = derivedValue;
    if (derivedValue.get()) {
      num = 0;
    }
    const obj2 = { opacity: withSpring(num, closure_9), transform: items };
    const withSpring2 = tmp(tmp2[28]).withSpring;
    let num2 = 0;
    controlsHidden(controlsSpecs[28]);
    if (obj.get()) {
      num2 = closure_1;
    }
    items = [{ translateY: withSpring2(num2, tmp4) }];
    ({ translateY: withSpring2(num2, closure_9) });
    return obj2;
  };
  const obj3 = participantId(setFocused[12]);
  fn2.__closure = { withSpring: participantId(setFocused[28]).withSpring, hidden: derivedValue, MODE_CHANGE_PHYSICS, hiddenOffsetY };
  fn2.__workletHash = 10936966719458;
  fn2.__initData = __initData2;
  ({ withSpring: participantId(setFocused[28]).withSpring, hidden: derivedValue, MODE_CHANGE_PHYSICS, hiddenOffsetY });
  const animatedStyle = obj3.useAnimatedStyle(fn2);
  if (isActivityParticipant) {
    const intl3 = tmp6(tmp2[22]).intl;
    stringResult = intl3.string(tmp6(tmp2[22]).t["3ejJer"]);
  } else if (null != targetName) {
    const intl2 = tmp6(tmp2[22]).intl;
    const obj5 = { targetName };
    stringResult = intl2.formatToPlainString(tmp6(tmp2[22]).t.OervdV, obj5);
  } else {
    const intl = tmp6(tmp2[22]).intl;
    stringResult = intl.string(tmp6(tmp2[22]).t["77cRN4"]);
  }
  const obj6 = { style: tmp5.topRightButton, hideStyles: animatedStyle, layout, children: closure_16(tmpResult, obj7) };
  obj7 = { icon: controlsHidden(setFocused[36]), onPress: callback, accessibilityLabel: stringResult };
  tmpResult = controlsHidden(setFocused[34]);
  return closure_16(HideableTileControl, obj6);
});
const RING_PHYSICS = { mass: 0.1, stiffness: 400, overshootClamping: true };
const __initData4 = { code: "function VoicePanelCardFloatingControlsTsx4(){const{flip}=this.__closure;return flip.get();}" };
const __initData5 = { code: "function VoicePanelCardFloatingControlsTsx5(flipped){const{angle,withSpring,getRandomNumberInRange,RING_PHYSICS,flip}=this.__closure;if(flipped){angle.set(withSpring(getRandomNumberInRange(45-10,45+10),RING_PHYSICS,'respect-motion-settings',function(finished){if(!finished)return;flip.set(!flip.get());}));}else{angle.set(withSpring(getRandomNumberInRange(0-10,0+10),RING_PHYSICS,'respect-motion-settings',function(finished){if(!finished)return;flip.set(!flip.get());}));}}" };
let closure_37 = { code: "function VoicePanelCardFloatingControlsTsx6(finished){const{flip}=this.__closure;if(!finished)return;flip.set(!flip.get());}" };
let closure_38 = { code: "function VoicePanelCardFloatingControlsTsx7(finished){const{flip}=this.__closure;if(!finished)return;flip.set(!flip.get());}" };
const __initData6 = { code: "function VoicePanelCardFloatingControlsTsx8(){const{controlsHidden,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING}=this.__closure;return{top:controlsHidden.get()?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):0};}" };
const __initData7 = { code: "function VoicePanelCardFloatingControlsTsx9(){const{angle}=this.__closure;return{transform:[{rotate:angle.get()+\"deg\"}]};}" };
let closure_41 = react.memo(function RingingIcon(controlsHidden) {
  let Icon;
  let items1;
  let obj10;
  let obj11;
  let tmp13;
  let useReducedMotion;
  controlsHidden = controlsHidden.controlsHidden;
  let sharedValue1;
  let tmp = closure_23();
  let tmp2 = controlsHidden;
  let tmp3 = sharedValue1;
  let obj = controlsHidden(sharedValue1[12]);
  const sharedValue = obj.useSharedValue(true);
  let obj2 = controlsHidden(sharedValue1[12]);
  sharedValue1 = obj2.useSharedValue(0);
  let items = [AccessibilityStore];
  const obj3 = controlsHidden(sharedValue1[37]);
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
  fn2.__closure = { angle: sharedValue1, withSpring: controlsHidden(sharedValue1[28]).withSpring, getRandomNumberInRange: sharedValue(sharedValue1[38]), RING_PHYSICS, flip: sharedValue };
  fn2.__workletHash = 15646860695268;
  fn2.__initData = __initData5;
  ({ angle: sharedValue1, withSpring: controlsHidden(sharedValue1[28]).withSpring, getRandomNumberInRange: sharedValue(sharedValue1[38]), RING_PHYSICS, flip: sharedValue });
  const animatedReaction = obj4.useAnimatedReaction(fn, fn2);
  const fn3 = function h() {
    let top = 0;
    if (controlsHidden.get()) {
      top = -c21 + 2 * VOICE_PANEL_CARD_INNER_PADDING;
    }
    return { top };
  };
  const obj7 = { controlsHidden, FLOATING_BAR_HEIGHT: v28, VOICE_PANEL_CARD_INNER_PADDING };
  fn3.__closure = obj7;
  fn3.__workletHash = 726627995932;
  fn3.__initData = __initData6;
  const obj6 = controlsHidden(sharedValue1[12]);
  const animatedStyle = obj6.useAnimatedStyle(fn3);
  const fn4 = function p() {
    let items;
    const obj = { transform: items };
    items = [{ rotate: "" + sharedValue1.get() + "deg" }];
    ({ rotate: "" + sharedValue1.get() + "deg" });
    return obj;
  };
  fn4.__closure = { angle: sharedValue1 };
  fn4.__workletHash = 791392364030;
  fn4.__initData = __initData7;
  const obj8 = controlsHidden(sharedValue1[12]);
  const animatedStyle1 = obj8.useAnimatedStyle(fn4);
  const obj9 = { style: items1, children: closure_16(tmp13, obj10) };
  items1 = [animatedStyle, tmp.ringingIconContainer];
  let tmp14 = !stateFromStores;
  const tmp12 = sharedValue(sharedValue1[29]);
  tmp13 = sharedValue(sharedValue1[29]);
  const tmp7 = sharedValue;
  if (!stateFromStores) {
    tmp14 = animatedStyle1;
  }
  obj10 = { style: tmp14, pointerEvents: "none", children: closure_16(Icon, obj11) };
  obj11 = { source: tmp7(tmp3[39]), size: tmp2(tmp3[13]).IconSizes.SMALL_20, style: tmp.ringingIcon };
  Icon = tmp2(tmp3[13]).Icon;
  return closure_16(tmp12, obj9);
});
let closure_42 = react.memo(function RingingIconWrapper(controlsHidden) {
  controlsHidden = controlsHidden.controlsHidden;
  const obj = { theme: ThemeTypes.LIGHT, children: authStore4(closure_41, { controlsHidden }) };
  const ThemeContextProvider = native2.ThemeContextProvider;
  return authStore4(ThemeContextProvider, obj);
});
let closure_43 = react.memo(function UserTagChiplet(arg0) {
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
const __initData8 = { code: "function VoicePanelCardFloatingControlsTsx10(){const{hasHiddenVisibleIcon,focused,connected,mode,VoicePanelModes,controlsHidden}=this.__closure;const showIcon=hasHiddenVisibleIcon&&focused.get()==null;return!connected.get()||mode.get()===VoicePanelModes.PIP||!showIcon&&controlsHidden.get();}" };
const __initData9 = { code: "function VoicePanelCardFloatingControlsTsx11(){const{FLOATING_BAR_HEIGHT,isPillHidden}=this.__closure;return{height:FLOATING_BAR_HEIGHT,pointerEvents:isPillHidden.get()?'none':'auto'};}" };
const __initData10 = { code: "function VoicePanelCardFloatingControlsTsx12(){const{connected,isScreenReaderEnabled,controlsSpecs,VoicePanelControlsModes,hasIcon,GAP}=this.__closure;const hidden=!connected.get()||!isScreenReaderEnabled&&controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&hasIcon;const shouldCollapseWidth=hidden&&hasIcon;return{width:shouldCollapseWidth?0:'auto',marginRight:hidden?-GAP:0};}" };
let closure_47 = react.memo(function FloatingParticipantLabel(controlsHidden) {
  let channelId;
  let closure_9;
  let formatToPlainStringResult;
  let guildId;
  let intl4;
  let items2;
  let items3;
  let items4;
  let items5;
  let items7;
  let label;
  let layout;
  let obj10;
  let obj9;
  let participant;
  let tmp24;
  let tmpResult6;
  controlsHidden = controlsHidden.controlsHidden;
  ({ label, layout, participant } = controlsHidden);
  channelId = undefined;
  let controlsSpecs;
  let focused;
  let analyticsLocations;
  MODE_CHANGE_PHYSICS = undefined;
  VoicePanelModes = undefined;
  let derivedValue;
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
  let obj2 = controlsHidden(controlsSpecs[48]);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  const tmp6 = closure_23();
  const obj3 = controlsHidden(controlsSpecs[30]);
  let id;
  if (obj3.isStableParticipantWithUser(participant)) {
    id = participant.user.id;
  }
  analyticsLocations = tmp(tmp2[49])().analyticsLocations;
  let items = [id, channelId, analyticsLocations];
  const callback = obj.useCallback(() => {
    if (null != id) {
      const obj = { userId: tmp, channelId, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations };
      showUserProfileActionSheetDefault(obj);
    }
  }, items);
  const tmp4Result = tmp4(tmp2[51]);
  let isUserSecureFramesVerified = tmp4Result.useIsUserSecureFramesVerified({ userId: id, channelId });
  const type = participant.type;
  const tmpResult = tmp(tmp2[21]);
  let id1;
  const tmp4Result7 = tmp4(tmp2[30]);
  if (tmp4Result7.isStableParticipantWithUser(participant)) {
    id1 = participant.user.id;
  }
  const tmpResultResult = tmpResult(type, id1, guildId, channelId);
  const tmp12 = tmp(tmp2[52])({ userId: id, guildId });
  const tmp4Result8 = tmp4(tmp2[53]);
  const displayNameStylesFont = tmp4Result8.useDisplayNameStylesFont({ displayNameStyles: tmp12 });
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
  const tmp4Result9 = tmp4(tmp2[12]);
  derivedValue = tmp4Result9.useDerivedValue(fn);
  const fn2 = function u() {
    let str;
    const obj = { height, pointerEvents: str };
    str = "auto";
    if (derivedValue.get()) {
      str = "none";
    }
    return obj;
  };
  const obj5 = { FLOATING_BAR_HEIGHT: v28, isPillHidden: derivedValue };
  fn2.__closure = obj5;
  fn2.__workletHash = 1647642039812;
  fn2.__initData = __initData9;
  let closure_1 = hiddenOffsetY2;
  const tmp4Result10 = tmp4(tmp2[12]);
  const animatedStyle = tmp4Result10.useAnimatedStyle(fn2);
  const fn3 = function o() {
    let items;
    const withSpring = controlsHidden(controlsSpecs[28]).withSpring;
    let num = 1;
    controlsHidden(controlsSpecs[28]);
    const obj = derivedValue;
    if (derivedValue.get()) {
      num = 0;
    }
    const obj2 = { opacity: withSpring(num, closure_9), transform: items };
    const withSpring2 = tmp(tmp2[28]).withSpring;
    let num2 = 0;
    controlsHidden(controlsSpecs[28]);
    if (obj.get()) {
      num2 = closure_1;
    }
    items = [{ translateY: withSpring2(num2, tmp4) }];
    ({ translateY: withSpring2(num2, closure_9) });
    return obj2;
  };
  const tmp4Result11 = tmp4(tmp2[12]);
  fn3.__closure = { withSpring: tmp4(tmp2[28]).withSpring, hidden: derivedValue, MODE_CHANGE_PHYSICS, hiddenOffsetY: hiddenOffsetY2 };
  fn3.__workletHash = 10936966719458;
  fn3.__initData = __initData2;
  ({ withSpring: tmp4(tmp2[28]).withSpring, hidden: derivedValue, MODE_CHANGE_PHYSICS, hiddenOffsetY: hiddenOffsetY2 });
  const animatedStyle1 = tmp4Result11.useAnimatedStyle(fn3);
  const fn4 = function _() {
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
  };
  const obj7 = { connected, isScreenReaderEnabled, controlsSpecs, VoicePanelControlsModes: derivedValue, hasIcon: tmpResultResult.length >= 1, GAP: 4 };
  fn4.__closure = obj7;
  fn4.__workletHash = 2980616778992;
  fn4.__initData = __initData10;
  const items1 = [tmp6.labelPositionContainer];
  const tmp4Result12 = tmp4(tmp2[12]);
  const animatedStyle2 = tmp4Result12.useAnimatedStyle(fn4);
  const obj8 = { style: items1, layout, pointerEvents: "box-none", children: closure_16(tmpResult6, obj9) };
  obj9 = { style: items2, pointerEvents: "box-none", children: closure_17(tmp24, obj10) };
  items2 = [tmp6.labelHideWrapper, animatedStyle1];
  let tmp25;
  const tmpResult5 = tmp(tmp2[29]);
  tmp24 = closure_20;
  tmpResult6 = tmp(tmp2[29]);
  if (null != id) {
    tmp25 = callback;
  }
  obj10 = { onPress: tmp25, style: items3, layout, children: items4 };
  items3 = [tmp6.labelOuterContainer, animatedStyle];
  let tmp20Result = tmpResultResult.length > 0;
  if (tmp20Result) {
    const obj11 = {
      style: tmp6.initialIcons,
      children: tmpResultResult.map((icon) => {
          const obj = { icon };
          return closure_1_16(AnimatedLabelIcon, obj, icon.type);
        })
    };
    const tmpResult7 = tmp(tmp2[26]);
    tmp20Result = tmp20(tmpResult7, obj11);
  }
  items4 = [tmp20Result, ];
  const obj12 = { style: items5, layout, children: items7 };
  items5 = [tmp6.floatingContainer, animatedStyle2];
  const items6 = [tmp6.floatingText, ];
  let tmp29 = null != displayNameStylesFont;
  const tmpResult8 = tmp(tmp2[29]);
  const Text = tmp4(tmp2[54]).Text;
  if (tmp29) {
    tmp29 = { fontFamily: displayNameStylesFont };
    const obj13 = { fontFamily: displayNameStylesFont };
  }
  const obj14 = { variant: "heading-sm/semibold", color: "text-overlay-light", lineClamp: 1, style: items6, ellipsizeMode: "tail", accessibilityLabel: formatToPlainStringResult, children: label };
  items6[1] = tmp29;
  if (null != tmpResultResult.find((type) => type.type === controlsHidden(controlsSpecs[21]).VoicePanelCardUserStateIconType.STREAM_ICON)) {
    const intl3 = tmp4(tmp2[22]).intl;
    const obj15 = { username: label };
    formatToPlainStringResult = intl3.formatToPlainString(tmp4(tmp2[22]).t.I0mOAs, obj15);
  } else {
    const found = tmpResultResult.find((type) => type.type === controlsHidden(controlsSpecs[21]).VoicePanelCardUserStateIconType.MUTE_DEAFEN_ICON);
    formatToPlainStringResult = label;
    if (null != found) {
      const muteDeafenIconState = found.muteDeafenIconState;
      if (tmp4(tmp2[24]).MuteDeafenIconState.DEAFENED !== muteDeafenIconState) {
        if (tmp4(tmp2[24]).MuteDeafenIconState.DEAFENED_SERVER !== muteDeafenIconState) {
          const intl = tmp4(tmp2[22]).intl;
          const obj16 = { username: label };
          formatToPlainStringResult = intl.formatToPlainString(tmp4(tmp2[22]).t.Hd1oVG, obj16);
        }
      }
      const intl2 = tmp4(tmp2[22]).intl;
      const obj17 = { username: label };
      formatToPlainStringResult = intl2.formatToPlainString(tmp4(tmp2[22]).t["9hDjai"], obj17);
    }
  }
  items7 = [closure_16(Text, obj14), , ];
  let tmp20Result2 = participant.type === constants.USER;
  if (tmp20Result2) {
    const obj18 = { userId: participant.user.id, guildId, textColor: "text-overlay-light" };
    tmp20Result2 = tmp20(closure_43, obj18);
  }
  items7[1] = tmp20Result2;
  if (isUserSecureFramesVerified) {
    const obj19 = { style: tmp6.secureFramesIcon, size: "xs", accessibilityLabel: intl4.string(tmp4(tmp2[22]).t.mR9cf3) };
    const ShieldLockIcon = tmp4(tmp2[55]).ShieldLockIcon;
    intl4 = tmp4(tmp2[22]).intl;
    isUserSecureFramesVerified = tmp20(ShieldLockIcon, obj19);
  }
  items7[2] = isUserSecureFramesVerified;
  items4[1] = closure_17(tmpResult8, obj12);
  return closure_16(tmpResult5, obj8);
});
const __initData11 = { code: "function VoicePanelCardFloatingControlsTsx13(){const{controlsSpecs,VoicePanelControlsModes,focused,mode,VoicePanelModes}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN||focused.get()!=null||mode.get()===VoicePanelModes.PIP;}" };
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
  let obj = participant(controlsSpecs[37]);
  const items = [RTCConnectionStore];
  let stateFromStores = obj.useStateFromStores(items, () => connected.isConnected());
  const obj2 = participant(controlsSpecs[30]);
  const items1 = [EmbeddedActivitiesStore, ApplicationStreamingStore];
  const tmp6 = obj2.isStableParticipantWithUser(participant) && participant.isSelf;
  const tmp4Result = participant(controlsSpecs[37]);
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
  const fn = function h() {
    const tmp = controlsSpecs.get().mode === VoicePanelControlsModes.HIDDEN || null != focused.get() || mode.get() === constants.PIP;
    return tmp;
  };
  const obj3 = { controlsSpecs, VoicePanelControlsModes, focused, mode, VoicePanelModes };
  fn.__closure = obj3;
  fn.__workletHash = 16708205249554;
  fn.__initData = __initData11;
  const tmp8 = tmp(controlsSpecs[56])(guildId, channelId, participant.id);
  const tmp4Result3 = participant(controlsSpecs[12]);
  const derivedValue = tmp4Result3.useDerivedValue(fn);
  let tmp10 = null != label;
  if (tmp10) {
    const obj4 = { controlsHidden: derivedValue, label, layout, participant };
    tmp10 = closure_16(closure_47, obj4);
  }
  const tmp13 = closure_17;
  const tmp14 = closure_18;
  if (isRinging) {
    const obj5 = { controlsHidden: derivedValue };
    isRinging = closure_16(closure_42, obj5);
  }
  const children = [isRinging, , , ];
  let tmp17 = stateFromStores && stateFromStores1;
  if (tmp17) {
    const obj6 = { controlsHidden: derivedValue, participant, isSelf: tmp6, layout };
    tmp17 = closure_16(closure_31, obj6);
  }
  children[1] = tmp17;
  if (stateFromStores) {
    stateFromStores = tmp8;
  }
  if (stateFromStores) {
    const obj7 = { controlsHidden: derivedValue, participantId: participant.id, targetName: label, isActivityParticipant: tmp4Result4.isStableActivityParticipant(participant), layout };
    tmp4Result4 = participant(controlsSpecs[30]);
    stateFromStores = closure_16(closure_33, obj7);
  }
  children[2] = stateFromStores;
  children[3] = tmp10;
  return tmp13(tmp14, { children });
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCardFloatingControls.tsx");

export default memoResult;
