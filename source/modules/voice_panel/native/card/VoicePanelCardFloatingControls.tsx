// Module ID: 15705
// Function ID: 120010
// Name: StreamIcon
// Dependencies: []

// Module 15705 (StreamIcon)
let Platform;
let Pressable;
function StreamIcon(voicePlatform) {
  voicePlatform = voicePlatform.voicePlatform;
  const controlsSpecs = importAllResult.useContext(importDefault(dependencyMap[17])).controlsSpecs;
  const arg1 = controlsSpecs;
  let obj = arg1(dependencyMap[12]);
  const fn = function o() {
    const tmp = controlsSpecs.get().mode === constants.HIDDEN;
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
  let tmp3 = importDefault(dependencyMap[18]);
  if (voicePlatform === constants2.XBOX) {
    tmp3 = importDefault(dependencyMap[19]);
  } else if (voicePlatform === constants2.MOBILE) {
    tmp3 = importDefault(dependencyMap[20]);
  } else if (voicePlatform === constants2.QUEST) {
    tmp3 = importDefault(dependencyMap[21]);
  }
  obj = { source: tmp3 };
  const items = [callback2(importDefault(dependencyMap[16])("VoicePanelCardFloatingControls")).iconWithoutBackground, animatedStyle];
  obj.style = items;
  return callback(closure_19, obj);
}
function AnimatedLabelIcon(icon) {
  icon = icon.icon;
  const tmp = callback2(importDefault(dependencyMap[16])("VoicePanelCardFloatingControls"));
  const type = icon.type;
  if (arg1(dependencyMap[22]).VoicePanelCardUserStateIconType.STREAM_ICON === type) {
    let obj = { voicePlatform: icon.voicePlatform };
    return callback(StreamIcon, obj);
  } else if (arg1(dependencyMap[22]).VoicePanelCardUserStateIconType.SPEAKER_MUTE_ICON === type) {
    obj = { style: tmp.speakerMuteIcon, hitSlop: 12, onPress: icon.onPress };
    const obj1 = { style: tmp.iconWithoutBackground };
    obj.children = callback(arg1(dependencyMap[23]).VoiceXIcon, obj1);
    return callback(Pressable, obj);
  } else if (arg1(dependencyMap[22]).VoicePanelCardUserStateIconType.USER_VIDEO_ICON === type) {
    const obj2 = { style: tmp.iconContainer, onPress: icon.onPress };
    const obj3 = { style: tmp.icon, state: icon.videoIconState };
    obj2.children = callback(arg1(dependencyMap[24]).VideoIcon, obj3);
    return callback(Pressable, obj2);
  } else if (arg1(dependencyMap[22]).VoicePanelCardUserStateIconType.MUTE_DEAFEN_ICON === type) {
    const obj4 = { style: tmp.iconContainer };
    const obj5 = { onPress: icon.onPress, hitSlop: 12 };
    const obj6 = { style: tmp.icon, state: icon.muteDeafenIconState, alwaysWhite: true };
    obj5.children = callback(arg1(dependencyMap[24]).MuteDeafenIcon, obj6);
    obj4.children = callback(Pressable, obj5);
    return callback(importDefault(dependencyMap[25]), obj4);
  } else if (arg1(dependencyMap[22]).VoicePanelCardUserStateIconType.USER_DISCONNECTED_ICON === type) {
    obj = { style: tmp.iconContainer, onPress: icon.onPress };
    const obj7 = { size: "xs", color: importDefault(dependencyMap[15]).colors.TEXT_FEEDBACK_WARNING };
    obj.children = callback(arg1(dependencyMap[26]).CircleErrorIcon, obj7);
    return callback(Pressable, obj);
  }
}
function getAccessibilityLabel(arr, username) {
  if (null != arr.find((type) => type.type === callback(closure_2[22]).VoicePanelCardUserStateIconType.STREAM_ICON)) {
    const intl3 = username(dependencyMap[27]).intl;
    let obj = { username };
    return intl3.formatToPlainString(username(dependencyMap[27]).t.I0mOAs, obj);
  } else {
    const found = arr.find((type) => type.type === callback(closure_2[22]).VoicePanelCardUserStateIconType.MUTE_DEAFEN_ICON);
    if (null != found) {
      const muteDeafenIconState = found.muteDeafenIconState;
      if (username(dependencyMap[28]).MuteDeafenIconState.DEAFENED !== muteDeafenIconState) {
        if (username(dependencyMap[28]).MuteDeafenIconState.DEAFENED_SERVER !== muteDeafenIconState) {
          const intl = username(dependencyMap[27]).intl;
          obj = { username };
          return intl.formatToPlainString(username(dependencyMap[27]).t.Hd1oVG, obj);
        }
      }
      const intl2 = username(dependencyMap[27]).intl;
      obj = { username };
      return intl2.formatToPlainString(username(dependencyMap[27]).t.9hDjai, obj);
    } else {
      return username;
    }
  }
}
const importAllResult = importAll(dependencyMap[0]);
({ Platform, Pressable } = arg1(dependencyMap[1]));
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const tmp2 = arg1(dependencyMap[1]);
({ MODE_CHANGE_PHYSICS: closure_9, VoicePanelModes: closure_10 } = arg1(dependencyMap[6]));
const VoicePanelControlsModes = arg1(dependencyMap[7]).VoicePanelControlsModes;
let closure_12 = arg1(dependencyMap[8]).VOICE_PANEL_CARD_INNER_PADDING;
const ThemeTypes = arg1(dependencyMap[9]).ThemeTypes;
const tmp3 = arg1(dependencyMap[6]);
({ ParticipantTypes: closure_14, VoicePlatforms: closure_15 } = arg1(dependencyMap[10]));
const tmp4 = arg1(dependencyMap[10]);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = arg1(dependencyMap[11]));
const tmp5 = arg1(dependencyMap[11]);
let closure_19 = importDefault(dependencyMap[12]).createAnimatedComponent(arg1(dependencyMap[13]).Icon);
const importDefaultResult = importDefault(dependencyMap[12]);
let closure_20 = importDefault(dependencyMap[12]).createAnimatedComponent(Pressable);
const importDefaultResult1 = importDefault(dependencyMap[12]);
let closure_21 = arg1(dependencyMap[14]).createStyles((arg0) => {
  let obj = { labelPositionContainer: { MOBILE_BOTTOM_SHEET: "hidden", borderWidth: "absolute", namePlaceholder: 1, nameContainer: 1, updateAllWidths: 1, activeCommandOption: 1, customIconSrc: 1 } };
  obj = { variant: null, lineClamp: null, ellipsizeMode: null, spacing: null, speed: null, style: null, size: null, width: null, horizontal: null, style: null };
  const radii = importDefault(dependencyMap[15]).radii;
  obj.borderRadius = arg0 ? radii.sm : radii.round;
  obj.backgroundColor = importDefault(dependencyMap[15]).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
  obj.labelOuterContainer = obj;
  obj.initialIcons = {};
  obj = { bhk: "version=$(node -p \"require('./package.json').version\") && sed -i '' \"s/#define NITRO_VERSION \\\".*\\\"/#define NITRO_VERSION \\\"$version\\\"/\" ./cpp/utils/NitroDefines.hpp", bic: "bun run write-native-version", tintColor: importDefault(dependencyMap[15]).colors.WHITE };
  obj.icon = obj;
  obj.iconWithoutBackground = { tintColor: importDefault(dependencyMap[15]).colors.WHITE };
  const obj1 = { tintColor: importDefault(dependencyMap[15]).colors.WHITE };
  obj.iconContainer = { borderRadius: importDefault(dependencyMap[15]).radii.round };
  obj.speakerMuteIcon = { marginRight: 4 };
  obj.floatingContainer = { isPreload: true, skipLocalFetch: "/assets/images/native", type: 18, value: 18, description: null };
  obj.floatingText = { line: null, column: null, seenCR: null, locale: null, parentLocale: null };
  const obj3 = { <string:1435746702>: true, <string:751231512>: true, <string:2539449152>: true, <string:979674688>: true, borderRadius: importDefault(dependencyMap[15]).radii.round, backgroundColor: importDefault(dependencyMap[15]).colors.BACKGROUND_SURFACE_HIGH };
  obj.ringingIconContainer = obj3;
  const obj2 = { borderRadius: importDefault(dependencyMap[15]).radii.round };
  obj.ringingIcon = { tintColor: importDefault(dependencyMap[15]).colors.STATUS_POSITIVE };
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
  const arg1 = participant;
  ({ controlsHidden, isSelf, layout } = participant);
  const guildId = importAllResult.useContext(importDefault(dependencyMap[17])).guildId;
  const importDefault = guildId;
  const items = [guildId, participant];
  const callback = importAllResult.useCallback(() => {
    let obj = participant(closure_2[30]);
    if (obj.isStableStreamParticipant(participant)) {
      const streamForUser = streamForUser.getStreamForUser(participant.user.id, guildId);
      if (null != streamForUser) {
        const obj5 = participant(closure_2[31]);
        obj5.stopStream(participant(closure_2[32]).encodeStreamKey(streamForUser));
        const obj6 = participant(closure_2[32]);
      }
    }
    if (obj2.isStableActivityParticipant(participant)) {
      const currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
      obj = {};
      let _location;
      if (null != currentEmbeddedActivity) {
        _location = currentEmbeddedActivity.location;
      }
      obj.location = _location;
      obj.applicationId = participant.applicationId;
      guildId(closure_2[33]).leaveActivity(obj);
      const obj3 = guildId(closure_2[33]);
    }
  }, items);
  const obj = {};
  const tmp = function useTopLeftButtonStyles(controlsHidden) {
    const participant = controlsHidden;
    let obj = participant(closure_2[12]);
    const fn = function n() {
      const value = arg0.get();
      const obj = { position: "absolute" };
      if (value) {
        let tmp3 = -28 + 2 * tmp2;
      } else {
        tmp3 = tmp2;
      }
      obj.top = tmp3;
      obj.left = closure_12;
      let num3 = 1;
      if (value) {
        num3 = 0;
      }
      obj.opacity = arg0(closure_2[29]).withSpring(num3, closure_9);
      obj.zIndex = 1;
      return obj;
    };
    obj = { controlsHidden, FLOATING_BAR_HEIGHT: 28, VOICE_PANEL_CARD_INNER_PADDING: closure_12, withSpring: participant(closure_2[29]).withSpring, MODE_CHANGE_PHYSICS: closure_9 };
    fn.__closure = obj;
    fn.__workletHash = 4080439075039;
    fn.__initData = closure_23;
    return obj.useAnimatedStyle(fn);
  }(controlsHidden);
  const tmp3 = closure_16;
  obj.icon = importDefault(dependencyMap[35]);
  obj.onPress = callback;
  obj.style = tmp;
  obj.layout = layout;
  const tmp4 = importDefault(dependencyMap[34]);
  const result = arg1(dependencyMap[30]).isStableActivityParticipant(participant);
  const intl = arg1(dependencyMap[27]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[27]).t;
  if (result) {
    let stringResult = string(t.R/FK4A);
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
  const arg1 = participantId;
  const controlsHidden = participantId.controlsHidden;
  const importDefault = controlsHidden;
  const targetName = participantId.targetName;
  ({ isActivityParticipant, layout } = participantId);
  const context = importAllResult.useContext(importDefault(dependencyMap[17]));
  const setFocused = context.setFocused;
  const dependencyMap = setFocused;
  const mode = context.mode;
  const items = [setFocused, participantId];
  const callback = importAllResult.useCallback(() => {
    setFocused(participantId);
  }, items);
  let obj = arg1(dependencyMap[12]);
  const fn = function _() {
    let value = controlsHidden.get();
    if (!value) {
      value = mode.get() === constants.PIP;
    }
    const obj = { position: "absolute" };
    if (value) {
      let tmp5 = -28 + 2 * tmp4;
    } else {
      tmp5 = tmp4;
    }
    obj.top = tmp5;
    obj.right = closure_12;
    let num3 = 1;
    if (value) {
      num3 = 0;
    }
    obj.opacity = participantId(setFocused[29]).withSpring(num3, closure_9);
    obj.zIndex = 1;
    return obj;
  };
  obj = { controlsHidden, mode, VoicePanelModes: closure_10, FLOATING_BAR_HEIGHT: 28, VOICE_PANEL_CARD_INNER_PADDING: closure_12, withSpring: arg1(dependencyMap[29]).withSpring, MODE_CHANGE_PHYSICS: closure_9 };
  fn.__closure = obj;
  fn.__workletHash = 12421495364262;
  fn.__initData = closure_25;
  const animatedStyle = obj.useAnimatedStyle(fn);
  if (isActivityParticipant) {
    const intl3 = arg1(dependencyMap[27]).intl;
    let stringResult = intl3.string(arg1(dependencyMap[27]).t.3ejJer);
  } else if (null != targetName) {
    const intl2 = arg1(dependencyMap[27]).intl;
    obj = { targetName };
    stringResult = intl2.formatToPlainString(arg1(dependencyMap[27]).t.OervdV, obj);
  } else {
    const intl = arg1(dependencyMap[27]).intl;
    stringResult = intl.string(arg1(dependencyMap[27]).t.77cRN4);
  }
  const obj1 = { icon: importDefault(dependencyMap[36]), onPress: callback, style: animatedStyle, layout, accessibilityLabel: stringResult };
  return callback(importDefault(dependencyMap[34]), obj1);
});
let closure_27 = { "Bool(false)": "message", "Bool(false)": "PLUM_10", "Bool(false)": 1 };
let closure_28 = { code: "function VoicePanelCardFloatingControlsTsx4(){const{flip}=this.__closure;return flip.get();}" };
let closure_29 = { code: "function VoicePanelCardFloatingControlsTsx5(flipped){const{angle,withSpring,getRandomNumberInRange,RING_PHYSICS,flip}=this.__closure;if(flipped){angle.set(withSpring(getRandomNumberInRange(45-10,45+10),RING_PHYSICS,'respect-motion-settings',function(finished){if(!finished)return;flip.set(!flip.get());}));}else{angle.set(withSpring(getRandomNumberInRange(0-10,0+10),RING_PHYSICS,'respect-motion-settings',function(finished){if(!finished)return;flip.set(!flip.get());}));}}" };
let closure_30 = { code: "function VoicePanelCardFloatingControlsTsx6(finished){const{flip}=this.__closure;if(!finished)return;flip.set(!flip.get());}" };
let closure_31 = { code: "function VoicePanelCardFloatingControlsTsx7(finished){const{flip}=this.__closure;if(!finished)return;flip.set(!flip.get());}" };
let closure_32 = { code: "function VoicePanelCardFloatingControlsTsx8(){const{controlsHidden,FLOATING_BAR_HEIGHT,VOICE_PANEL_CARD_INNER_PADDING}=this.__closure;return{top:controlsHidden.get()?-(FLOATING_BAR_HEIGHT+VOICE_PANEL_CARD_INNER_PADDING*2):0};}" };
let closure_33 = { code: "function VoicePanelCardFloatingControlsTsx9(){const{angle}=this.__closure;return{transform:[{rotate:angle.get()+\"deg\"}]};}" };
let closure_34 = importAllResult.memo((controlsHidden) => {
  controlsHidden = controlsHidden.controlsHidden;
  const arg1 = controlsHidden;
  const tmp = callback2(importDefault(dependencyMap[16])("VoicePanelCardFloatingControls"));
  let obj = arg1(dependencyMap[12]);
  const sharedValue = obj.useSharedValue(true);
  const importDefault = sharedValue;
  let obj1 = arg1(dependencyMap[12]);
  const sharedValue1 = obj1.useSharedValue(0);
  const dependencyMap = sharedValue1;
  let obj2 = arg1(dependencyMap[37]);
  const items = [closure_5];
  const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj3 = arg1(dependencyMap[12]);
  const fn = function o() {
    return sharedValue.get();
  };
  fn.__closure = { flip: sharedValue };
  fn.__workletHash = 7663309832237;
  fn.__initData = closure_28;
  const fn2 = function n(arg0) {
    const tmp2 = controlsHidden(sharedValue1[29]);
    const withSpring = tmp2.withSpring;
    const tmp3 = sharedValue(sharedValue1[38]);
    if (arg0) {
      const fn2 = function o(arg0) {
        if (arg0) {
          const result = store.set(!store.get());
        }
      };
      let obj = { flip: sharedValue };
      fn2.__closure = obj;
      fn2.__workletHash = 17264907521028;
      fn2.__initData = closure_30;
      const result = set(withSpring(tmp3(35, 55), closure_27, "respect-motion-settings", fn2));
    } else {
      const fn = function n(arg0) {
        if (arg0) {
          const result = store.set(!store.get());
        }
      };
      obj = { flip: sharedValue };
      fn.__closure = obj;
      fn.__workletHash = 1799436949573;
      fn.__initData = closure_31;
      const result1 = set(withSpring(tmp3(-10, 10), closure_27, "respect-motion-settings", fn));
    }
  };
  obj = { angle: sharedValue1, withSpring: arg1(dependencyMap[29]).withSpring, getRandomNumberInRange: importDefault(dependencyMap[38]), RING_PHYSICS: closure_27, flip: sharedValue };
  fn2.__closure = obj;
  fn2.__workletHash = 15646860695268;
  fn2.__initData = closure_29;
  const animatedReaction = obj3.useAnimatedReaction(fn, fn2);
  const fn3 = function p() {
    const obj = {};
    let num = 0;
    if (controlsHidden.get()) {
      num = -28 + 2 * closure_12;
    }
    obj.top = num;
    return obj;
  };
  obj = { controlsHidden, FLOATING_BAR_HEIGHT: 28, VOICE_PANEL_CARD_INNER_PADDING: closure_12 };
  fn3.__closure = obj;
  fn3.__workletHash = 726627995932;
  fn3.__initData = closure_32;
  const animatedStyle = arg1(dependencyMap[12]).useAnimatedStyle(fn3);
  const obj6 = arg1(dependencyMap[12]);
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
  const animatedStyle1 = arg1(dependencyMap[12]).useAnimatedStyle(C);
  obj1 = { style: items1 };
  const items1 = [animatedStyle, tmp.ringingIconContainer];
  const obj8 = arg1(dependencyMap[12]);
  const tmp8 = callback;
  obj2 = {};
  let tmp12 = !stateFromStores;
  const tmp10 = callback;
  const tmp9 = importDefault(dependencyMap[39]);
  if (tmp12) {
    tmp12 = animatedStyle1;
  }
  obj2.style = tmp12;
  obj2.pointerEvents = "none";
  obj3 = { source: importDefault(dependencyMap[40]), size: arg1(dependencyMap[13]).IconSizes.SMALL_20, style: tmp.ringingIcon };
  obj2.children = callback(arg1(dependencyMap[13]).Icon, obj3);
  obj1.children = tmp10(importDefault(dependencyMap[39]), obj2);
  return tmp8(tmp9, obj1);
});
let closure_35 = importAllResult.memo((controlsHidden) => {
  const obj = { theme: ThemeTypes.LIGHT, children: callback(closure_34, { controlsHidden: controlsHidden.controlsHidden }) };
  return callback(arg1(dependencyMap[41]).ThemeContextProvider, obj);
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
  const arg1 = controlsHidden;
  ({ label, layout, participant } = controlsHidden);
  let closure_7;
  let closure_8;
  let tmp11;
  let tmp12;
  let VoicePanelControlsModes;
  let closure_12;
  const context = importAllResult.useContext(importDefault(dependencyMap[17]));
  ({ guildId, channelId } = context);
  const importDefault = channelId;
  const controlsSpecs = context.controlsSpecs;
  const dependencyMap = controlsSpecs;
  const focused = context.focused;
  const connected = context.connected;
  const Pressable = connected;
  const mode = context.mode;
  let closure_5 = mode;
  let obj = arg1(dependencyMap[42]);
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  let closure_6 = isScreenReaderEnabled;
  const tmp3 = callback2(importDefault(dependencyMap[16])("VoicePanelCardFloatingControls"));
  let obj1 = arg1(dependencyMap[30]);
  let id;
  if (obj1.isStableParticipantWithUser(participant)) {
    id = participant.user.id;
  }
  closure_7 = id;
  const analyticsLocations = importDefault(dependencyMap[43])().analyticsLocations;
  closure_8 = analyticsLocations;
  const items = [id, channelId, analyticsLocations];
  const callback = importAllResult.useCallback(() => {
    if (null != id) {
      const obj = { userId: id, channelId, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations };
      channelId(controlsSpecs[44])(obj);
    }
  }, items);
  let obj2 = arg1(dependencyMap[45]);
  obj = { userId: id, channelId };
  let isUserSecureFramesVerified = obj2.useIsUserSecureFramesVerified(obj);
  let obj4 = arg1(dependencyMap[30]);
  let id1;
  if (obj4.isStableParticipantWithUser(participant)) {
    id1 = participant.user.id;
  }
  const tmp7Result = importDefault(dependencyMap[22])(participant.type, id1, guildId, channelId);
  obj = { userId: id, guildId };
  const tmp7 = importDefault(dependencyMap[22]);
  let obj6 = arg1(dependencyMap[47]);
  const displayNameStylesFont = obj6.useDisplayNameStylesFont({ displayNameStyles: importDefault(dependencyMap[46])(obj) });
  let num = 1;
  tmp11 = tmp7Result.length >= 1;
  tmp12 = tmp7Result.filter((type) => type.type !== controlsHidden(controlsSpecs[22]).VoicePanelCardUserStateIconType.STREAM_ICON).length >= 1;
  let obj7 = arg1(dependencyMap[12]);
  const fn = function c() {
    let tmp = tmp12;
    if (tmp12) {
      tmp = null == focused.get();
    }
    let tmp4 = !connected.get();
    if (!tmp4) {
      tmp4 = mode.get() === tmp12.PIP;
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
  obj1 = { hasHiddenVisibleIcon: tmp12, focused, connected, mode, VoicePanelModes: tmp12, controlsHidden };
  fn.__closure = obj1;
  fn.__workletHash = 14354852732719;
  fn.__initData = closure_36;
  const derivedValue = obj7.useDerivedValue(fn);
  VoicePanelControlsModes = derivedValue;
  let obj10 = arg1(dependencyMap[12]);
  if (derivedValue.get()) {
    num = 0;
  }
  const sharedValue = obj10.useSharedValue(num);
  closure_12 = sharedValue;
  let obj11 = arg1(dependencyMap[12]);
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
    const result = sharedValue.set(controlsHidden(controlsSpecs[29]).withSpring(num, tmp11));
  };
  obj2 = { pillOpacity: sharedValue, withSpring: arg1(dependencyMap[29]).withSpring, MODE_CHANGE_PHYSICS: tmp11 };
  fn3.__closure = obj2;
  fn3.__workletHash = 158794425133;
  fn3.__initData = closure_38;
  const animatedReaction = obj11.useAnimatedReaction(fn2, fn3);
  const tmp9 = importDefault(dependencyMap[46])(obj);
  class Q {
    constructor() {
      obj = { opacity: controlsHidden.get() };
      num = 0;
      if (closure_11.get()) {
        tmp = controlsHidden;
        num2 = 28;
        num = 28 + controlsHidden;
      }
      obj.top = num;
      obj.height = 28;
      str = "auto";
      if (closure_11.get()) {
        str = "none";
      }
      obj.pointerEvents = str;
      return obj;
    }
  }
  Q.__closure = { pillOpacity: sharedValue, isPillHidden: derivedValue, FLOATING_BAR_HEIGHT: 28, VOICE_PANEL_CARD_INNER_PADDING: closure_12 };
  Q.__workletHash = 12355778282621;
  Q.__initData = closure_39;
  const animatedStyle = arg1(dependencyMap[12]).useAnimatedStyle(Q);
  const obj14 = arg1(dependencyMap[12]);
  const obj3 = { pillOpacity: sharedValue, isPillHidden: derivedValue, FLOATING_BAR_HEIGHT: 28, VOICE_PANEL_CARD_INNER_PADDING: closure_12 };
  const fn4 = function $() {
    let tmp = !connected.get();
    if (!tmp) {
      let tmp3 = !isScreenReaderEnabled;
      if (tmp3) {
        tmp3 = controlsSpecs.get().mode === derivedValue.HIDDEN;
      }
      if (tmp3) {
        tmp3 = tmp11;
      }
      tmp = tmp3;
    }
    const obj = {};
    let num = "auto";
    if (tmp) {
      num = "auto";
      if (tmp11) {
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
  obj4 = { connected, isScreenReaderEnabled, controlsSpecs, VoicePanelControlsModes, hasIcon: tmp11, GAP: 4 };
  fn4.__closure = obj4;
  fn4.__workletHash = 10013340978870;
  fn4.__initData = closure_40;
  const items1 = [tmp3.labelPositionContainer];
  const animatedStyle1 = arg1(dependencyMap[12]).useAnimatedStyle(fn4);
  const obj5 = { style: items1, layout, pointerEvents: "box-none" };
  obj6 = {};
  let tmp21;
  const obj16 = arg1(dependencyMap[12]);
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
    obj7 = { style: tmp3.initialIcons, children: tmp7Result.map((icon) => callback(closure_44, { icon }, icon.type)) };
    tmp22 = callback(importDefault(dependencyMap[25]), obj7);
    const tmp26 = importDefault(dependencyMap[25]);
  }
  const items3 = [tmp22, ];
  const obj8 = { style: items4, layout };
  const items4 = [tmp3.floatingContainer, animatedStyle1];
  const tmp18 = importDefault(dependencyMap[39]);
  const tmp19 = closure_17;
  const tmp20 = closure_20;
  const tmp27 = closure_17;
  const obj9 = { useRef: "inputHint", sk: "guildFolders", accessibilityRole: "ranges", window: "isArray", call: "isArray" };
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
  const items6 = [callback(arg1(dependencyMap[48]).Text, obj9), , ];
  let tmp31 = participant.type === constants.USER;
  if (tmp31) {
    obj11 = { userId: participant.user.id, textColor: "text-overlay-light" };
    tmp31 = callback(importDefault(dependencyMap[49]), obj11);
  }
  items6[1] = tmp31;
  if (isUserSecureFramesVerified) {
    const obj12 = { style: tmp3.secureFramesIcon, size: "xs" };
    const intl = arg1(dependencyMap[27]).intl;
    obj12.accessibilityLabel = intl.string(arg1(dependencyMap[27]).t.mR9cf3);
    isUserSecureFramesVerified = callback(arg1(dependencyMap[50]).ShieldLockIcon, obj12);
  }
  items6[2] = isUserSecureFramesVerified;
  obj8.children = items6;
  items3[1] = tmp27(importDefault(dependencyMap[39]), obj8);
  obj6.children = items3;
  obj5.children = tmp19(tmp20, obj6);
  return tmp17(tmp18, obj5);
});
let closure_42 = { code: "function VoicePanelCardFloatingControlsTsx15(){const{controlsSpecs,VoicePanelControlsModes,focused,mode,VoicePanelModes}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN||focused.get()!=null||mode.get()===VoicePanelModes.PIP;}" };
const obj4 = arg1(dependencyMap[14]);
const memoResult = importAllResult.memo(function FloatingControls(arg0) {
  let isRinging;
  let label;
  let layout;
  let participant;
  ({ label, participant } = arg0);
  const arg1 = participant;
  ({ isRinging, layout } = arg0);
  const context = focused.useContext(importDefault(dependencyMap[17]));
  const guildId = context.guildId;
  const importDefault = guildId;
  const controlsSpecs = context.controlsSpecs;
  const dependencyMap = controlsSpecs;
  const focused = context.focused;
  const mode = context.mode;
  const Pressable = mode;
  let obj = arg1(dependencyMap[37]);
  const items = [closure_8];
  let stateFromStores = obj.useStateFromStores(items, () => connected.isConnected());
  let obj1 = arg1(dependencyMap[30]);
  const tmp3 = !obj1.isStableParticipantWithUser(participant);
  let isSelf = !tmp3;
  if (!tmp3) {
    isSelf = participant.isSelf;
  }
  let obj2 = arg1(dependencyMap[37]);
  const items1 = [closure_6, closure_7];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    if (obj.isStableActivityParticipant(participant)) {
      const currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
      let applicationId;
      if (null != currentEmbeddedActivity) {
        applicationId = currentEmbeddedActivity.applicationId;
      }
      return participant.applicationId === applicationId;
    } else {
      const tmp4 = !participant(controlsSpecs[30]).isStableStreamParticipant(participant);
      let tmp5 = !tmp4;
      if (!tmp4) {
        tmp5 = null != activeStreamForUser.getActiveStreamForUser(participant.user.id, guildId);
      }
      return tmp5;
    }
    const obj = participant(controlsSpecs[30]);
  });
  let obj3 = arg1(dependencyMap[12]);
  class I {
    constructor() {
      tmp = controlsSpecs.get().mode === closure_11.HIDDEN;
      if (!tmp) {
        tmp2 = focused;
        tmp3 = null;
        tmp = null != focused.get();
      }
      if (!tmp) {
        tmp4 = mode;
        tmp5 = closure_10;
        tmp = mode.get() === closure_10.PIP;
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
    const obj4 = { controlsHidden: derivedValue, participantId: participant.id, targetName: label, isActivityParticipant: arg1(dependencyMap[30]).isStableActivityParticipant(participant), layout };
    stateFromStores = callback(closure_26, obj4);
    const obj11 = arg1(dependencyMap[30]);
  }
  items2[2] = stateFromStores;
  items2[3] = tmp7;
  obj1.children = items2;
  return closure_17(closure_18, obj1);
});
const result = arg1(dependencyMap[52]).fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCardFloatingControls.tsx");

export default memoResult;
