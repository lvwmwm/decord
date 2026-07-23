// Module ID: 15834
// Function ID: 122270
// Name: StreamIcon
// Dependencies: [31, 27, 4122, 1347, 4149, 4202, 10015, 10013, 10018, 653, 4148, 33, 3991, 1273, 4130, 689, 1324, 10014, 15790, 15835, 10791, 15836, 15788, 10717, 8866, 5517, 7507, 1212, 8867, 4542, 15786, 4309, 4194, 10525, 15717, 15837, 15838, 566, 15820, 7589, 15839, 3842, 4528, 5464, 8492, 8878, 4361, 8516, 4126, 8577, 8931, 15763, 2]

// Module 15834 (StreamIcon)
import importAllResult from "isVoiceChannelFull";
import get_ActivityIndicator from "getSystemLocale";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import VoicePanelModes from "VoicePanelModes";
import { VoicePanelControlsModes } from "VoicePanelControlsModes";
import { VOICE_PANEL_CARD_INNER_PADDING as closure_12 } from "CARD_SIZE";
import { ThemeTypes } from "ME";
import ParticipantTypes from "ParticipantTypes";
import jsxProd from "_isNativeReflectConstruct";
import importDefaultResult from "module_3991";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult1 from "module_3991";

let Platform;
let Pressable;
let closure_10;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_9;
const require = arg1;
function StreamIcon(voicePlatform) {
  voicePlatform = voicePlatform.voicePlatform;
  const controlsSpecs = importAllResult.useContext(importDefault(10014)).controlsSpecs;
  let obj = controlsSpecs(3991);
  const fn = function o() {
    const tmp = controlsSpecs.get().mode === outer1_11.HIDDEN;
    const obj = {};
    let num = 4;
    if (tmp) {
      num = 2;
    }
    obj.marginLeft = num;
    let num2 = 0;
    if (tmp) {
      num2 = 2;
    }
    obj.marginRight = num2;
    return obj;
  };
  obj = { controlsSpecs, VoicePanelControlsModes, GAP: 4 };
  fn.__closure = obj;
  fn.__workletHash = 3270040588948;
  fn.__initData = closure_22;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let tmp3 = importDefault(15790);
  if (voicePlatform === constants2.XBOX) {
    tmp3 = importDefault(15835);
  } else if (voicePlatform === constants2.MOBILE) {
    tmp3 = importDefault(10791);
  } else if (voicePlatform === constants2.QUEST) {
    tmp3 = importDefault(15836);
  }
  obj = { source: tmp3 };
  const items = [callback2(importDefault(1324)("VoicePanelCardFloatingControls")).iconWithoutBackground, animatedStyle];
  obj.style = items;
  return callback(closure_19, obj);
}
function AnimatedLabelIcon(icon) {
  icon = icon.icon;
  const tmp = callback2(importDefault(1324)("VoicePanelCardFloatingControls"));
  const type = icon.type;
  if (require(15788) /* useVoicePanelCardUserStateIcons */.VoicePanelCardUserStateIconType.STREAM_ICON === type) {
    let obj = { voicePlatform: icon.voicePlatform };
    return callback(StreamIcon, obj);
  } else if (require(15788) /* useVoicePanelCardUserStateIcons */.VoicePanelCardUserStateIconType.SPEAKER_MUTE_ICON === type) {
    obj = { style: tmp.speakerMuteIcon, hitSlop: 12, onPress: icon.onPress };
    const obj1 = { style: tmp.iconWithoutBackground };
    obj.children = callback(require(10717) /* VoiceXIcon */.VoiceXIcon, obj1);
    return callback(Pressable, obj);
  } else if (require(15788) /* useVoicePanelCardUserStateIcons */.VoicePanelCardUserStateIconType.USER_VIDEO_ICON === type) {
    const obj2 = { style: tmp.iconContainer, onPress: icon.onPress };
    const obj3 = { style: tmp.icon, state: icon.videoIconState };
    obj2.children = callback(require(8866) /* VideoDisabledSvgIcon */.VideoIcon, obj3);
    return callback(Pressable, obj2);
  } else if (require(15788) /* useVoicePanelCardUserStateIcons */.VoicePanelCardUserStateIconType.MUTE_DEAFEN_ICON === type) {
    const obj4 = { style: tmp.iconContainer };
    const obj5 = { onPress: icon.onPress, hitSlop: 12 };
    const obj6 = { style: tmp.icon, state: icon.muteDeafenIconState, alwaysWhite: true };
    obj5.children = callback(require(8866) /* VideoDisabledSvgIcon */.MuteDeafenIcon, obj6);
    obj4.children = callback(Pressable, obj5);
    return callback(importDefault(5517), obj4);
  } else if (require(15788) /* useVoicePanelCardUserStateIcons */.VoicePanelCardUserStateIconType.USER_DISCONNECTED_ICON === type) {
    obj = { style: tmp.iconContainer, onPress: icon.onPress };
    const obj7 = { size: "xs", color: importDefault(689).colors.TEXT_FEEDBACK_WARNING };
    obj.children = callback(require(7507) /* CircleErrorIcon */.CircleErrorIcon, obj7);
    return callback(Pressable, obj);
  }
}
function getAccessibilityLabel(arr, username) {
  if (null != arr.find((type) => type.type === outer1_0(outer1_2[22]).VoicePanelCardUserStateIconType.STREAM_ICON)) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    let obj = { username };
    return intl3.formatToPlainString(require(1212) /* getSystemLocale */.t.I0mOAs, obj);
  } else {
    const found = arr.find((type) => type.type === outer1_0(outer1_2[22]).VoicePanelCardUserStateIconType.MUTE_DEAFEN_ICON);
    if (null != found) {
      const muteDeafenIconState = found.muteDeafenIconState;
      if (require(8867) /* isStableVoiceStateEqual */.MuteDeafenIconState.DEAFENED !== muteDeafenIconState) {
        if (require(8867) /* isStableVoiceStateEqual */.MuteDeafenIconState.DEAFENED_SERVER !== muteDeafenIconState) {
          const intl = require(1212) /* getSystemLocale */.intl;
          obj = { username };
          return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.Hd1oVG, obj);
        }
      }
      const intl2 = require(1212) /* getSystemLocale */.intl;
      obj = { username };
      return intl2.formatToPlainString(require(1212) /* getSystemLocale */.t["9hDjai"], obj);
    } else {
      return username;
    }
  }
}
({ Platform, Pressable } = get_ActivityIndicator);
({ MODE_CHANGE_PHYSICS: closure_9, VoicePanelModes: closure_10 } = VoicePanelModes);
({ ParticipantTypes: closure_14, VoicePlatforms: closure_15 } = ParticipantTypes);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = jsxProd);
let closure_19 = require("module_3991").createAnimatedComponent(require("Button").Icon);
let closure_20 = require("module_3991").createAnimatedComponent(Pressable);
let closure_21 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = { labelPositionContainer: { position: "absolute", left: 8, right: 8, bottom: 8, justifyContent: "center", alignItems: "center", marginHorizontal: 8 } };
  obj = { display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", borderRadius: null, overflow: "hidden", paddingHorizontal: 8, backgroundColor: null, height: 28, gap: 4 };
  const radii = importDefault(689).radii;
  obj.borderRadius = arg0 ? radii.sm : radii.round;
  obj.backgroundColor = importDefault(689).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
  obj.labelOuterContainer = obj;
  obj.initialIcons = { display: "flex", flexDirection: "row", marginStart: -4, marginEnd: -4 };
  obj = { width: 12, height: 12, tintColor: importDefault(689).colors.WHITE };
  obj.icon = obj;
  const obj1 = { width: 16, height: 16, tintColor: importDefault(689).colors.WHITE };
  obj.iconWithoutBackground = obj1;
  const obj2 = { width: 20, height: 20, borderRadius: importDefault(689).radii.round, alignItems: "center", justifyContent: "center" };
  obj.iconContainer = obj2;
  obj.speakerMuteIcon = { marginRight: 4 };
  obj.floatingContainer = { flexDirection: "row", alignItems: "center", gap: 4, overflow: "hidden", flexShrink: 1 };
  obj.floatingText = { overflow: "hidden", paddingStart: 4, paddingEnd: 4, flexShrink: 1, lineHeight: 14 };
  const obj3 = { position: "absolute", top: 8, right: 8, padding: 6, borderRadius: importDefault(689).radii.round, backgroundColor: importDefault(689).colors.BACKGROUND_SURFACE_HIGH };
  obj.ringingIconContainer = obj3;
  obj.ringingIcon = { tintColor: importDefault(689).colors.STATUS_POSITIVE };
  obj.secureFramesIcon = { marginEnd: -2 };
  return obj;
});
let closure_22 = { code: "function VoicePanelCardFloatingControlsTsx1(){const{controlsSpecs,VoicePanelControlsModes,GAP}=this.__closure;const hidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;return{marginLeft:hidden?2:GAP,marginRight:hidden?2:0};}" };
let closure_23 = { code: "function VoicePanelCardFloatingControlsTsx2(){const{controlsHidden,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const hidden=controlsHidden.get();return{position:'absolute',top:hidden?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):VOICE_PANEL_CARD_INNER_PADDING,left:VOICE_PANEL_CARD_INNER_PADDING,opacity:withSpring(hidden?0:1,MODE_CHANGE_PHYSICS),zIndex:1};}" };
let closure_24 = importAllResult.memo((participant) => {
  let controlsHidden;
  let isSelf;
  let layout;
  participant = participant.participant;
  ({ controlsHidden, isSelf, layout } = participant);
  guildId = importAllResult.useContext(guildId(10014)).guildId;
  const items = [guildId, participant];
  const callback = importAllResult.useCallback(() => {
    let obj = participant(outer1_2[30]);
    if (obj.isStableStreamParticipant(participant)) {
      const streamForUser = outer1_7.getStreamForUser(participant.user.id, guildId);
      if (null != streamForUser) {
        const obj5 = participant(outer1_2[31]);
        obj5.stopStream(participant(outer1_2[32]).encodeStreamKey(streamForUser));
        const obj6 = participant(outer1_2[32]);
      }
    }
    if (obj2.isStableActivityParticipant(participant)) {
      const currentEmbeddedActivity = outer1_6.getCurrentEmbeddedActivity();
      obj = {};
      let _location;
      if (null != currentEmbeddedActivity) {
        _location = currentEmbeddedActivity.location;
      }
      obj.location = _location;
      obj.applicationId = participant.applicationId;
      guildId(outer1_2[33]).leaveActivity(obj);
      const obj3 = guildId(outer1_2[33]);
    }
  }, items);
  let obj = {};
  const tmp = (function useTopLeftButtonStyles(controlsHidden) {
    let closure_0 = controlsHidden;
    let obj = participant(outer1_2[12]);
    const fn = function n() {
      const value = controlsHidden.get();
      const obj = { position: "absolute" };
      if (value) {
        let tmp3 = -28 + 2 * tmp2;
      } else {
        tmp3 = tmp2;
      }
      obj.top = tmp3;
      obj.left = outer2_12;
      let num3 = 1;
      if (value) {
        num3 = 0;
      }
      obj.opacity = participant(outer2_2[29]).withSpring(num3, outer2_9);
      obj.zIndex = 1;
      return obj;
    };
    obj = { controlsHidden, FLOATING_BAR_HEIGHT: 28, VOICE_PANEL_CARD_INNER_PADDING: outer1_12, withSpring: participant(outer1_2[29]).withSpring, MODE_CHANGE_PHYSICS: outer1_9 };
    fn.__closure = obj;
    fn.__workletHash = 4080439075039;
    fn.__initData = outer1_23;
    return obj.useAnimatedStyle(fn);
  })(controlsHidden);
  let tmp3 = closure_16;
  obj.icon = guildId(15837);
  obj.onPress = callback;
  obj.style = tmp;
  obj.layout = layout;
  const tmp4 = guildId(15717);
  const result = participant(15786).isStableActivityParticipant(participant);
  const intl = participant(1212).intl;
  const string = intl.string;
  const t = participant(1212).t;
  if (result) {
    let stringResult = string(t["R/FK4A"]);
  } else if (isSelf) {
    stringResult = string(t.S5anIc);
  } else {
    stringResult = string(t.q3O3J8);
  }
  obj.accessibilityLabel = stringResult;
  return tmp3(tmp4, obj);
});
let closure_25 = { code: "function VoicePanelCardFloatingControlsTsx3(){const{controlsHidden,mode,VoicePanelModes,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const hidden=controlsHidden.get()||mode.get()===VoicePanelModes.PIP;return{position:'absolute',top:hidden?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):VOICE_PANEL_CARD_INNER_PADDING,right:VOICE_PANEL_CARD_INNER_PADDING,opacity:withSpring(hidden?0:1,MODE_CHANGE_PHYSICS),zIndex:1};}" };
let closure_26 = importAllResult.memo((participantId) => {
  let isActivityParticipant;
  let layout;
  participantId = participantId.participantId;
  const controlsHidden = participantId.controlsHidden;
  const targetName = participantId.targetName;
  ({ isActivityParticipant, layout } = participantId);
  const context = mode.useContext(controlsHidden(setFocused[17]));
  setFocused = context.setFocused;
  mode = context.mode;
  const items = [setFocused, participantId];
  const callback = mode.useCallback(() => {
    setFocused(participantId);
  }, items);
  let obj = participantId(setFocused[12]);
  const fn = function _() {
    let value = controlsHidden.get();
    if (!value) {
      value = mode.get() === outer1_10.PIP;
    }
    const obj = { position: "absolute" };
    if (value) {
      let tmp5 = -28 + 2 * tmp4;
    } else {
      tmp5 = tmp4;
    }
    obj.top = tmp5;
    obj.right = outer1_12;
    let num3 = 1;
    if (value) {
      num3 = 0;
    }
    obj.opacity = participantId(setFocused[29]).withSpring(num3, outer1_9);
    obj.zIndex = 1;
    return obj;
  };
  obj = { controlsHidden, mode, VoicePanelModes: closure_10, FLOATING_BAR_HEIGHT: 28, VOICE_PANEL_CARD_INNER_PADDING: closure_12, withSpring: participantId(setFocused[29]).withSpring, MODE_CHANGE_PHYSICS: closure_9 };
  fn.__closure = obj;
  fn.__workletHash = 12421495364262;
  fn.__initData = closure_25;
  const animatedStyle = obj.useAnimatedStyle(fn);
  if (isActivityParticipant) {
    const intl3 = participantId(setFocused[27]).intl;
    let stringResult = intl3.string(participantId(setFocused[27]).t["3ejJer"]);
  } else if (null != targetName) {
    const intl2 = participantId(setFocused[27]).intl;
    obj = { targetName };
    stringResult = intl2.formatToPlainString(participantId(setFocused[27]).t.OervdV, obj);
  } else {
    const intl = participantId(setFocused[27]).intl;
    stringResult = intl.string(participantId(setFocused[27]).t["77cRN4"]);
  }
  const obj1 = { icon: controlsHidden(setFocused[36]), onPress: callback, style: animatedStyle, layout, accessibilityLabel: stringResult };
  return callback(controlsHidden(setFocused[34]), obj1);
});
let closure_27 = { mass: 0.1, stiffness: 400, overshootClamping: true };
let closure_28 = { code: "function VoicePanelCardFloatingControlsTsx4(){const{flip}=this.__closure;return flip.get();}" };
let closure_29 = { code: "function VoicePanelCardFloatingControlsTsx5(flipped){const{angle,withSpring,getRandomNumberInRange,RING_PHYSICS,flip}=this.__closure;if(flipped){angle.set(withSpring(getRandomNumberInRange(45-10,45+10),RING_PHYSICS,'respect-motion-settings',function(finished){if(!finished)return;flip.set(!flip.get());}));}else{angle.set(withSpring(getRandomNumberInRange(0-10,0+10),RING_PHYSICS,'respect-motion-settings',function(finished){if(!finished)return;flip.set(!flip.get());}));}}" };
let closure_30 = { code: "function VoicePanelCardFloatingControlsTsx6(finished){const{flip}=this.__closure;if(!finished)return;flip.set(!flip.get());}" };
let closure_31 = { code: "function VoicePanelCardFloatingControlsTsx7(finished){const{flip}=this.__closure;if(!finished)return;flip.set(!flip.get());}" };
let closure_32 = { code: "function VoicePanelCardFloatingControlsTsx8(){const{controlsHidden,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING}=this.__closure;return{top:controlsHidden.get()?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):0};}" };
let closure_33 = { code: "function VoicePanelCardFloatingControlsTsx9(){const{angle}=this.__closure;return{transform:[{rotate:angle.get()+\"deg\"}]};}" };
let closure_34 = importAllResult.memo((controlsHidden) => {
  controlsHidden = controlsHidden.controlsHidden;
  const tmp = callback2(sharedValue(sharedValue1[16])("VoicePanelCardFloatingControls"));
  let obj = controlsHidden(sharedValue1[12]);
  sharedValue = obj.useSharedValue(true);
  let obj1 = controlsHidden(sharedValue1[12]);
  sharedValue1 = obj1.useSharedValue(0);
  let obj2 = controlsHidden(sharedValue1[37]);
  let items = [_isNativeReflectConstruct];
  const stateFromStores = obj2.useStateFromStores(items, () => outer1_5.useReducedMotion);
  let obj3 = controlsHidden(sharedValue1[12]);
  let fn = function o() {
    return sharedValue.get();
  };
  fn.__closure = { flip: sharedValue };
  fn.__workletHash = 7663309832237;
  fn.__initData = closure_28;
  let fn2 = function n(arg0) {
    const tmp2 = controlsHidden(sharedValue1[29]);
    const withSpring = tmp2.withSpring;
    const tmp3 = sharedValue(sharedValue1[38]);
    if (arg0) {
      const fn2 = function o(arg0) {
        if (arg0) {
          const result = outer1_1.set(!outer1_1.get());
        }
      };
      let obj = { flip: sharedValue };
      fn2.__closure = obj;
      fn2.__workletHash = 17264907521028;
      fn2.__initData = outer1_30;
      let result = set(withSpring(tmp3(35, 55), outer1_27, "respect-motion-settings", fn2));
    } else {
      const fn = function n(arg0) {
        if (arg0) {
          const result = outer1_1.set(!outer1_1.get());
        }
      };
      obj = { flip: sharedValue };
      fn.__closure = obj;
      fn.__workletHash = 1799436949573;
      fn.__initData = outer1_31;
      const result1 = set(withSpring(tmp3(-10, 10), outer1_27, "respect-motion-settings", fn));
    }
  };
  obj = { angle: sharedValue1, withSpring: controlsHidden(sharedValue1[29]).withSpring, getRandomNumberInRange: sharedValue(sharedValue1[38]), RING_PHYSICS: closure_27, flip: sharedValue };
  fn2.__closure = obj;
  fn2.__workletHash = 15646860695268;
  fn2.__initData = closure_29;
  const animatedReaction = obj3.useAnimatedReaction(fn, fn2);
  const fn3 = function p() {
    const obj = {};
    let num = 0;
    if (controlsHidden.get()) {
      num = -28 + 2 * outer1_12;
    }
    obj.top = num;
    return obj;
  };
  obj = { controlsHidden, FLOATING_BAR_HEIGHT: 28, VOICE_PANEL_CARD_INNER_PADDING: closure_12 };
  fn3.__closure = obj;
  fn3.__workletHash = 726627995932;
  fn3.__initData = closure_32;
  const animatedStyle = controlsHidden(sharedValue1[12]).useAnimatedStyle(fn3);
  const obj6 = controlsHidden(sharedValue1[12]);
  class C {
    constructor() {
      obj = {};
      obj = { rotate: "" + useSharedValue.get() + "deg" };
      items = [];
      items[0] = obj;
      obj.transform = items;
      return obj;
    }
  }
  C.__closure = { angle: sharedValue1 };
  C.__workletHash = 791392364030;
  C.__initData = closure_33;
  const animatedStyle1 = controlsHidden(sharedValue1[12]).useAnimatedStyle(C);
  obj1 = { style: items1 };
  items1 = [animatedStyle, tmp.ringingIconContainer];
  const obj8 = controlsHidden(sharedValue1[12]);
  const tmp8 = callback;
  obj2 = {};
  let tmp12 = !stateFromStores;
  const tmp10 = callback;
  const tmp9 = sharedValue(sharedValue1[39]);
  if (tmp12) {
    tmp12 = animatedStyle1;
  }
  obj2.style = tmp12;
  obj2.pointerEvents = "none";
  obj3 = { source: sharedValue(sharedValue1[40]), size: controlsHidden(sharedValue1[13]).IconSizes.SMALL_20, style: tmp.ringingIcon };
  obj2.children = callback(controlsHidden(sharedValue1[13]).Icon, obj3);
  obj1.children = tmp10(sharedValue(sharedValue1[39]), obj2);
  return tmp8(tmp9, obj1);
});
let closure_35 = importAllResult.memo((controlsHidden) => {
  const obj = { theme: ThemeTypes.LIGHT, children: callback(closure_34, { controlsHidden: controlsHidden.controlsHidden }) };
  return callback(require(3842) /* ManaContext */.ThemeContextProvider, obj);
});
let closure_36 = { code: "function VoicePanelCardFloatingControlsTsx10(){const{hasHiddenVisibleIcon,focused,connected,mode,VoicePanelModes,controlsHidden}=this.__closure;const showIcon=hasHiddenVisibleIcon&&focused.get()==null;return!connected.get()||mode.get()===VoicePanelModes.PIP||!showIcon&&controlsHidden.get();}" };
let closure_37 = { code: "function VoicePanelCardFloatingControlsTsx11(){const{isPillHidden}=this.__closure;return isPillHidden.get();}" };
let closure_38 = { code: "function VoicePanelCardFloatingControlsTsx12(hidden){const{pillOpacity,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;pillOpacity.set(withSpring(hidden?0:1,MODE_CHANGE_PHYSICS));}" };
let closure_39 = { code: "function VoicePanelCardFloatingControlsTsx13(){const{pillOpacity,isPillHidden,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING}=this.__closure;return{opacity:pillOpacity.get(),top:isPillHidden.get()?FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING:0,height:FLOATING_BAR_HEIGHT,pointerEvents:isPillHidden.get()?'none':'auto'};}" };
let closure_40 = { code: "function VoicePanelCardFloatingControlsTsx14(){const{connected,isScreenReaderEnabled,controlsSpecs,VoicePanelControlsModes,hasIcon,GAP}=this.__closure;const hidden=!connected.get()||!isScreenReaderEnabled&&controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&hasIcon;const shouldCollapseWidth=hidden&&hasIcon;return{width:shouldCollapseWidth?0:'auto',marginRight:hidden?-GAP:0};}" };
let closure_41 = importAllResult.memo((controlsHidden) => {
  let channelId;
  let guildId;
  let label;
  let layout;
  let participant;
  controlsHidden = controlsHidden.controlsHidden;
  ({ label, layout, participant } = controlsHidden);
  let id;
  let analyticsLocations;
  let c9;
  let c10;
  let derivedValue;
  let sharedValue;
  const context = focused.useContext(channelId(controlsSpecs[17]));
  ({ guildId, channelId } = context);
  controlsSpecs = context.controlsSpecs;
  focused = context.focused;
  const connected = context.connected;
  const mode = context.mode;
  let obj = controlsHidden(controlsSpecs[42]);
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  let tmp3 = callback2(channelId(controlsSpecs[16])("VoicePanelCardFloatingControls"));
  let obj1 = controlsHidden(controlsSpecs[30]);
  id = undefined;
  if (obj1.isStableParticipantWithUser(participant)) {
    id = participant.user.id;
  }
  analyticsLocations = channelId(controlsSpecs[43])().analyticsLocations;
  const items = [id, channelId, analyticsLocations];
  const callback = focused.useCallback(() => {
    if (null != id) {
      const obj = { userId: id, channelId, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations };
      channelId(controlsSpecs[44])(obj);
    }
  }, items);
  let obj2 = controlsHidden(controlsSpecs[45]);
  obj = { userId: id, channelId };
  let isUserSecureFramesVerified = obj2.useIsUserSecureFramesVerified(obj);
  let obj4 = controlsHidden(controlsSpecs[30]);
  let id1;
  if (obj4.isStableParticipantWithUser(participant)) {
    id1 = participant.user.id;
  }
  const tmp7Result = channelId(controlsSpecs[22])(participant.type, id1, guildId, channelId);
  obj = { userId: id, guildId };
  const tmp7 = channelId(controlsSpecs[22]);
  let obj6 = controlsHidden(controlsSpecs[47]);
  const displayNameStylesFont = obj6.useDisplayNameStylesFont({ displayNameStyles: channelId(controlsSpecs[46])(obj) });
  let num = 1;
  c9 = tmp11;
  const tmp12 = tmp7Result.filter((type) => type.type !== controlsHidden(controlsSpecs[22]).VoicePanelCardUserStateIconType.STREAM_ICON).length >= 1;
  c10 = tmp12;
  let obj7 = controlsHidden(controlsSpecs[12]);
  const fn = function c() {
    let tmp = _undefined;
    if (_undefined) {
      tmp = null == focused.get();
    }
    let tmp4 = !connected.get();
    if (!tmp4) {
      tmp4 = mode.get() === _undefined.PIP;
    }
    if (!tmp4) {
      let value = !tmp;
      if (!tmp) {
        value = controlsHidden.get();
      }
      tmp4 = value;
    }
    return tmp4;
  };
  obj1 = { hasHiddenVisibleIcon: tmp12, focused, connected, mode, VoicePanelModes: c10, controlsHidden };
  fn.__closure = obj1;
  fn.__workletHash = 14354852732719;
  fn.__initData = closure_36;
  derivedValue = obj7.useDerivedValue(fn);
  let obj10 = controlsHidden(controlsSpecs[12]);
  if (derivedValue.get()) {
    num = 0;
  }
  sharedValue = obj10.useSharedValue(num);
  let obj11 = controlsHidden(controlsSpecs[12]);
  const fn2 = function u() {
    return derivedValue.get();
  };
  fn2.__closure = { isPillHidden: derivedValue };
  fn2.__workletHash = 653298163833;
  fn2.__initData = closure_37;
  const fn3 = function _(arg0) {
    let num = 1;
    if (arg0) {
      num = 0;
    }
    const result = sharedValue.set(controlsHidden(controlsSpecs[29]).withSpring(num, c9));
  };
  obj2 = { pillOpacity: sharedValue, withSpring: controlsHidden(controlsSpecs[29]).withSpring, MODE_CHANGE_PHYSICS: c9 };
  fn3.__closure = obj2;
  fn3.__workletHash = 158794425133;
  fn3.__initData = closure_38;
  const animatedReaction = obj11.useAnimatedReaction(fn2, fn3);
  const tmp9 = channelId(controlsSpecs[46])(obj);
  class Q {
    constructor() {
      obj = { opacity: controlsHidden.get() };
      num = 0;
      if (c11.get()) {
        tmp = controlsHidden;
        num2 = 28;
        num = 28 + controlsHidden;
      }
      obj.top = num;
      obj.height = 28;
      str = "auto";
      if (c11.get()) {
        str = "none";
      }
      obj.pointerEvents = str;
      return obj;
    }
  }
  Q.__closure = { pillOpacity: sharedValue, isPillHidden: derivedValue, FLOATING_BAR_HEIGHT: 28, VOICE_PANEL_CARD_INNER_PADDING: sharedValue };
  Q.__workletHash = 12355778282621;
  Q.__initData = closure_39;
  const animatedStyle = controlsHidden(controlsSpecs[12]).useAnimatedStyle(Q);
  const obj14 = controlsHidden(controlsSpecs[12]);
  const obj3 = { pillOpacity: sharedValue, isPillHidden: derivedValue, FLOATING_BAR_HEIGHT: 28, VOICE_PANEL_CARD_INNER_PADDING: sharedValue };
  const fn4 = function $() {
    let tmp = !connected.get();
    if (!tmp) {
      let tmp3 = !isScreenReaderEnabled;
      if (tmp3) {
        tmp3 = controlsSpecs.get().mode === derivedValue.HIDDEN;
      }
      if (tmp3) {
        tmp3 = c9;
      }
      tmp = tmp3;
    }
    const obj = {};
    let num = "auto";
    if (tmp) {
      num = "auto";
      if (c9) {
        num = 0;
      }
    }
    obj.width = num;
    let num2 = 0;
    if (tmp) {
      num2 = -4;
    }
    obj.marginRight = num2;
    return obj;
  };
  obj4 = { connected, isScreenReaderEnabled, controlsSpecs, VoicePanelControlsModes: derivedValue, hasIcon: tmp11, GAP: 4 };
  fn4.__closure = obj4;
  fn4.__workletHash = 10013340978870;
  fn4.__initData = closure_40;
  const items1 = [tmp3.labelPositionContainer];
  const animatedStyle1 = controlsHidden(controlsSpecs[12]).useAnimatedStyle(fn4);
  const obj5 = { style: items1, layout, pointerEvents: "box-none" };
  obj6 = {};
  let tmp21;
  const obj16 = controlsHidden(controlsSpecs[12]);
  const tmp17 = callback;
  if (null != id) {
    tmp21 = callback;
  }
  obj6.onPress = tmp21;
  const items2 = [tmp3.labelOuterContainer, animatedStyle];
  obj6.style = items2;
  obj6.layout = layout;
  let tmp22 = tmp7Result.length > 0;
  if (tmp22) {
    obj7 = { style: tmp3.initialIcons, children: tmp7Result.map((icon) => outer1_16(outer1_44, { icon }, icon.type)) };
    tmp22 = callback(channelId(controlsSpecs[25]), obj7);
    const tmp26 = channelId(controlsSpecs[25]);
  }
  const items3 = [tmp22, ];
  const obj8 = { style: items4, layout };
  items4 = [tmp3.floatingContainer, animatedStyle1];
  const tmp18 = channelId(controlsSpecs[39]);
  const tmp19 = closure_17;
  const tmp20 = closure_20;
  const tmp27 = closure_17;
  const obj9 = { variant: "heading-sm/semibold", color: "text-overlay-light", lineClamp: 1, style: null, ellipsizeMode: "tail" };
  const items5 = [tmp3.floatingText, ];
  let tmp30 = null != displayNameStylesFont;
  if (tmp30) {
    obj10 = { fontFamily: displayNameStylesFont };
    tmp30 = obj10;
  }
  items5[1] = tmp30;
  obj9.style = items5;
  obj9.accessibilityLabel = getAccessibilityLabel(tmp7Result, label);
  obj9.children = label;
  const items6 = [callback(controlsHidden(controlsSpecs[48]).Text, obj9), , ];
  let tmp31 = participant.type === constants.USER;
  if (tmp31) {
    obj11 = { userId: participant.user.id, textColor: "text-overlay-light" };
    tmp31 = callback(channelId(controlsSpecs[49]), obj11);
  }
  items6[1] = tmp31;
  if (isUserSecureFramesVerified) {
    const obj12 = { style: tmp3.secureFramesIcon, size: "xs" };
    const intl = controlsHidden(controlsSpecs[27]).intl;
    obj12.accessibilityLabel = intl.string(controlsHidden(controlsSpecs[27]).t.mR9cf3);
    isUserSecureFramesVerified = callback(controlsHidden(controlsSpecs[50]).ShieldLockIcon, obj12);
  }
  items6[2] = isUserSecureFramesVerified;
  obj8.children = items6;
  items3[1] = tmp27(channelId(controlsSpecs[39]), obj8);
  obj6.children = items3;
  obj5.children = tmp19(tmp20, obj6);
  return tmp17(tmp18, obj5);
});
let closure_42 = { code: "function VoicePanelCardFloatingControlsTsx15(){const{controlsSpecs,VoicePanelControlsModes,focused,mode,VoicePanelModes}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN||focused.get()!=null||mode.get()===VoicePanelModes.PIP;}" };
const memoResult = importAllResult.memo(function FloatingControls(arg0) {
  let isRinging;
  let label;
  let layout;
  let participant;
  ({ label, participant } = arg0);
  ({ isRinging, layout } = arg0);
  const context = focused.useContext(guildId(controlsSpecs[17]));
  guildId = context.guildId;
  controlsSpecs = context.controlsSpecs;
  focused = context.focused;
  const mode = context.mode;
  let obj = participant(controlsSpecs[37]);
  const items = [closure_8];
  let stateFromStores = obj.useStateFromStores(items, () => outer1_8.isConnected());
  let obj1 = participant(controlsSpecs[30]);
  const tmp3 = !obj1.isStableParticipantWithUser(participant);
  let isSelf = !tmp3;
  if (!tmp3) {
    isSelf = participant.isSelf;
  }
  let obj2 = participant(controlsSpecs[37]);
  const items1 = [closure_6, closure_7];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    if (obj.isStableActivityParticipant(participant)) {
      const currentEmbeddedActivity = outer1_6.getCurrentEmbeddedActivity();
      let applicationId;
      if (null != currentEmbeddedActivity) {
        applicationId = currentEmbeddedActivity.applicationId;
      }
      return participant.applicationId === applicationId;
    } else {
      const tmp4 = !participant(controlsSpecs[30]).isStableStreamParticipant(participant);
      let tmp5 = !tmp4;
      if (!tmp4) {
        tmp5 = null != outer1_7.getActiveStreamForUser(participant.user.id, guildId);
      }
      return tmp5;
    }
    obj = participant(controlsSpecs[30]);
  });
  let obj3 = participant(controlsSpecs[12]);
  class I {
    constructor() {
      tmp = controlsSpecs.get().mode === outer1_11.HIDDEN;
      if (!tmp) {
        tmp2 = focused;
        tmp3 = null;
        tmp = null != focused.get();
      }
      if (!tmp) {
        tmp4 = mode;
        tmp5 = outer1_10;
        tmp = mode.get() === outer1_10.PIP;
      }
      return tmp;
    }
  }
  obj = { controlsSpecs, VoicePanelControlsModes, focused, mode, VoicePanelModes: closure_10 };
  I.__closure = obj;
  I.__workletHash = 8765031976276;
  I.__initData = closure_42;
  const derivedValue = obj3.useDerivedValue(I);
  let tmp7 = null != label;
  if (tmp7) {
    obj = { controlsHidden: derivedValue, label, layout, participant };
    tmp7 = callback(closure_41, obj);
  }
  obj1 = {};
  if (isRinging) {
    obj2 = { controlsHidden: derivedValue };
    isRinging = callback(closure_35, obj2);
  }
  const items2 = [isRinging, , , ];
  let tmp14 = stateFromStores;
  if (stateFromStores) {
    tmp14 = stateFromStores1;
  }
  if (tmp14) {
    obj3 = { controlsHidden: derivedValue, participant, isSelf, layout };
    tmp14 = callback(closure_24, obj3);
  }
  items2[1] = tmp14;
  if (stateFromStores) {
    stateFromStores = tmp5;
  }
  if (stateFromStores) {
    const obj4 = { controlsHidden: derivedValue, participantId: participant.id, targetName: label, isActivityParticipant: participant(controlsSpecs[30]).isStableActivityParticipant(participant), layout };
    stateFromStores = callback(closure_26, obj4);
    const obj11 = participant(controlsSpecs[30]);
  }
  items2[2] = stateFromStores;
  items2[3] = tmp7;
  obj1.children = items2;
  return closure_17(closure_18, obj1);
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCardFloatingControls.tsx");

export default memoResult;
