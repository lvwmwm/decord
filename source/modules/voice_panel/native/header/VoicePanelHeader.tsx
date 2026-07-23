// Module ID: 15782
// Function ID: 121836
// Name: MusicMuteButton
// Dependencies: [57, 31, 27, 4143, 4044, 10646, 1194, 1348, 4177, 3767, 4952, 1849, 10015, 10018, 10013, 4148, 482, 33, 4130, 689, 3991, 4542, 7589, 4532, 5517, 10014, 10761, 566, 10648, 15717, 1212, 10652, 9077, 10653, 4528, 15719, 15783, 4320, 3834, 10021, 4131, 15784, 15742, 15785, 5093, 15786, 8843, 8916, 8878, 3842, 15255, 15787, 8526, 15789, 8931, 669, 15800, 10196, 15810, 15811, 2]

// Module 15782 (MusicMuteButton)
import registerAsset from "registerAsset";
import importAllResult from "registerAsset";
import get_ActivityIndicator from "initialize";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import VoicePanelModes from "VoicePanelModes";
import { EDGE_GUTTER } from "CARD_SIZE";
import { VoicePanelControlsModes } from "VoicePanelControlsModes";
import { ParticipantTypes } from "ParticipantTypes";
import { ThemeTypes } from "sum";
import jsxProd from "updateStageMusicMuted";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_16;
let closure_17;
let closure_18;
let closure_23;
let closure_24;
const require = arg1;
function MusicMuteButton(channelId) {
  channelId = channelId.channelId;
  let stateFromStores;
  const tmp = importDefault(10761)(channelId);
  if (null != tmp) {
    const speaker = tmp.speaker;
  }
  let obj = stateFromStores(566);
  const items = [closure_8];
  stateFromStores = obj.useStateFromStores(items, () => outer1_8.isMuted());
  let tmp3 = null;
  if (obj2.useShowStageMusicMuteButton(channelId)) {
    tmp3 = null;
    if (speaker) {
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
        let tmp13 = 10652;
      } else {
        tmp13 = 9077;
      }
      obj.icon = importDefault(tmp13);
      obj.onPress = function onPress() {
        return stateFromStores(outer1_2[33]).updateStageMusicMuted(!stateFromStores);
      };
      closure_23(importDefault(15717), obj);
      const tmp11 = importDefault;
      const tmp4 = closure_23;
      const tmp7 = importDefault(15717);
    }
  }
  return tmp3;
}
const StyleSheet = get_ActivityIndicator.StyleSheet;
const MODE_CHANGE_PHYSICS = VoicePanelModes.MODE_CHANGE_PHYSICS;
({ UI_SHOW_HIDE_PHYSICS: closure_16, VoicePanelModes: closure_17, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE: closure_18 } = VoicePanelModes);
({ jsx: closure_23, jsxs: closure_24 } = jsxProd);
let closure_25 = { duration: 300 };
obj = { headerWrapper: obj };
obj = { zIndex: 1, position: "absolute", top: 0, left: 0, width: "100%", paddingBottom: EDGE_GUTTER, overflow: "hidden" };
_createForOfIteratorHelperLoose = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose["opacity"] = 0.7;
obj.blurStyles = _createForOfIteratorHelperLoose;
obj.leftWrapper = { position: "relative", justifyContent: "flex-start", flexDirection: "row", alignItems: "center", flexShrink: 1, gap: 12 };
obj.rightWrapper = { flexDirection: "row", alignItems: "center", gap: 12, paddingLeft: 12 };
obj.headerOuter = { flexDirection: "row", alignItems: "center" };
obj.headerInner = { flexDirection: "row", alignItems: "center", flexShrink: 1, flexGrow: 1 };
obj.headerContentWrapper = { position: "relative" };
obj.stroke = { height: StyleSheet.hairlineWidth, opacity: 0.2 };
obj.strokeAlt = { height: StyleSheet.hairlineWidth, opacity: 0.8 };
let obj4 = { position: "absolute", left: 0, right: 0, bottom: 0, height: StyleSheet.hairlineWidth };
obj.strokeContainer = obj4;
let obj5 = { width: 12, height: 12, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, padding: 2 };
obj.focusedSpeakingDotWrapper = obj5;
let obj6 = { width: 8, height: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
obj.focusedSpeakingDot = obj6;
obj.shieldIconMargin = { marginLeft: -8 };
let closure_26 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_27 = { DOWN: 0, [0]: "DOWN", LEFT: 1, [1]: "LEFT" };
let obj7 = {};
const merged1 = Object.assign(MODE_CHANGE_PHYSICS);
obj7["overshootClamping"] = true;
let closure_29 = { code: "function VoicePanelHeaderTsx1(){const{isHeaderHidden,focused,scrollPosition}=this.__closure;return!isHeaderHidden.get()&&(focused.get()!=null||scrollPosition.get()>0);}" };
let closure_30 = { code: "function VoicePanelHeaderTsx2(){const{withSpring,showHeaderBlur}=this.__closure;return{blurAmount:withSpring(showHeaderBlur.get()?0.3:0)};}" };
let closure_31 = { code: "function VoicePanelHeaderTsx3(){const{withSpring,showHeaderBlur,HEADER_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(showHeaderBlur.get()?1:0,HEADER_CHANGE_PHYSICS)};}" };
let closure_32 = importAllResult.memo((isHeaderHidden) => {
  isHeaderHidden = isHeaderHidden.isHeaderHidden;
  const scrollPosition = isHeaderHidden.scrollPosition;
  const focused = isHeaderHidden.focused;
  let tmp = callback3();
  let obj = isHeaderHidden(focused[20]);
  const fn = function l() {
    let tmp = !isHeaderHidden.get();
    if (tmp) {
      let tmp4 = null != focused.get();
      if (!tmp4) {
        tmp4 = scrollPosition.get() > 0;
      }
      tmp = tmp4;
    }
    return tmp;
  };
  fn.__closure = { isHeaderHidden, focused, scrollPosition };
  fn.__workletHash = 8127245112238;
  fn.__initData = closure_29;
  const derivedValue = obj.useDerivedValue(fn);
  let obj1 = isHeaderHidden(focused[20]);
  const fn2 = function c() {
    const obj = {};
    let num = 0;
    if (derivedValue.get()) {
      num = 0.3;
    }
    obj.blurAmount = isHeaderHidden(focused[21]).withSpring(num);
    return obj;
  };
  obj = { withSpring: isHeaderHidden(focused[21]).withSpring, showHeaderBlur: derivedValue };
  fn2.__closure = obj;
  fn2.__workletHash = 10074943135400;
  fn2.__initData = closure_30;
  const animatedProps = obj1.useAnimatedProps(fn2);
  let obj3 = isHeaderHidden(focused[20]);
  const fn3 = function u() {
    const obj = {};
    let num = 0;
    if (derivedValue.get()) {
      num = 1;
    }
    obj.opacity = isHeaderHidden(focused[21]).withSpring(num, outer1_28);
    return obj;
  };
  obj = { withSpring: isHeaderHidden(focused[21]).withSpring, showHeaderBlur: derivedValue, HEADER_CHANGE_PHYSICS: obj7 };
  fn3.__closure = obj;
  fn3.__workletHash = 2825977044105;
  fn3.__initData = closure_31;
  const animatedStyle = obj3.useAnimatedStyle(fn3);
  obj1 = { style: items, pointerEvents: "none" };
  items = [StyleSheet.absoluteFill, animatedStyle];
  const obj2 = { style: tmp.blurStyles, blurStyle: "ultra-thin", blurTheme: "dark", animatedProps };
  const items1 = [callback(scrollPosition(focused[23]), obj2), ];
  obj3 = { style: tmp.strokeContainer };
  const tmp5 = scrollPosition(focused[22]);
  const items2 = [callback(scrollPosition(focused[24]), { style: tmp.stroke }), callback(scrollPosition(focused[24]), { style: tmp.strokeAlt })];
  obj3.children = items2;
  items1[1] = callback2(scrollPosition(focused[24]), obj3);
  obj1.children = items1;
  return callback2(tmp5, obj1);
});
let closure_33 = { code: "function VoicePanelHeaderTsx4(){const{focused,controlsSpecs,VoicePanelControlsModes,speaking}=this.__closure;return focused.get()!=null&&controlsSpecs.get().mode!==VoicePanelControlsModes.HIDDEN&&speaking.get();}" };
let closure_34 = { code: "function VoicePanelHeaderTsx5(){const{showSpeakingIndicator}=this.__closure;return{opacity:showSpeakingIndicator.get()?1:0};}" };
let closure_35 = importAllResult.memo(() => {
  const id = store.getId();
  const context = derivedValue.useContext(focused(controlsSpecs[25]));
  focused = context.focused;
  controlsSpecs = context.controlsSpecs;
  let obj = id(controlsSpecs[20]);
  const sharedValue = obj.useSharedValue(speaking.isSpeaking(id));
  const items = [id, sharedValue];
  const layoutEffect = derivedValue.useLayoutEffect(() => {
    function handleChange() {
      const result = outer1_3.set(outer2_13.isSpeaking(handleChange));
    }
    handleChange();
    let result = outer1_13.addReactChangeListener(handleChange);
    return () => {
      const result = outer2_13.removeReactChangeListener(handleChange);
    };
  }, items);
  const tmp5 = callback3();
  let obj1 = id(controlsSpecs[20]);
  const fn = function u() {
    let value = null != focused.get();
    if (value) {
      value = controlsSpecs.get().mode !== outer1_20.HIDDEN;
    }
    if (value) {
      value = sharedValue.get();
    }
    return value;
  };
  obj = { focused, controlsSpecs, VoicePanelControlsModes, speaking: sharedValue };
  fn.__closure = obj;
  fn.__workletHash = 5466722752449;
  fn.__initData = closure_33;
  derivedValue = obj1.useDerivedValue(fn);
  const fn2 = function _() {
    const obj = {};
    let num = 0;
    if (derivedValue.get()) {
      num = 1;
    }
    obj.opacity = num;
    return obj;
  };
  fn2.__closure = { showSpeakingIndicator: derivedValue };
  fn2.__workletHash = 16177124708898;
  fn2.__initData = closure_34;
  const animatedStyle = id(controlsSpecs[20]).useAnimatedStyle(fn2);
  obj = { style: items1, pointerEvents: "none" };
  items1 = [tmp5.focusedSpeakingDotWrapper, animatedStyle];
  const obj4 = id(controlsSpecs[20]);
  obj1 = { style: tmp5.focusedSpeakingDot };
  obj.children = callback(focused(controlsSpecs[22]), obj1);
  return callback(focused(controlsSpecs[22]), obj);
});
let closure_36 = { code: "function VoicePanelHeaderTsx6(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}" };
let closure_37 = { code: "function VoicePanelHeaderTsx7(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}" };
let closure_38 = { code: "function VoicePanelHeaderTsx8(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,mode,VoicePanelModes,gestureState,connected,EDGE_GUTTER}=this.__closure;const specs=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);if(mode.get()===VoicePanelModes.PIP||gestureState.get().active&&!gestureState.get().requiresPop&&connected.get()||mode.get()===VoicePanelModes.DISMISSED&&connected.get()){return-(specs.height+EDGE_GUTTER);}return 0;}" };
let closure_39 = { code: "function VoicePanelHeaderTsx9(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,mode,VoicePanelModes,connected,EDGE_GUTTER,withTiming,OPACITY_TIMING,withSpring,yOffset,wrapperOffset,DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,UI_SHOW_HIDE_PHYSICS}=this.__closure;const specs=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);const pipMode=mode.get()===VoicePanelModes.PIP;const height=!connected.get()?specs.height-specs.paddingTop+EDGE_GUTTER:specs.height;const paddingTop=!connected.get()?EDGE_GUTTER:specs.paddingTop;return{...specs,paddingTop:paddingTop,borderTopLeftRadius:!connected.get()?24:0,borderTopRightRadius:!connected.get()?24:0,height:height,opacity:withTiming(pipMode||mode.get()===VoicePanelModes.DISMISSED?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(yOffset.get(),!connected.get()&&wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:UI_SHOW_HIDE_PHYSICS)}]};}" };
let closure_40 = { code: "function VoicePanelHeaderTsx10(){const{controlsSpecs,VoicePanelControlsModes,isScreenReaderEnabled}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&!isScreenReaderEnabled;}" };
let closure_41 = { code: "function VoicePanelHeaderTsx11(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,withTiming,isHeaderHidden,OPACITY_TIMING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const{height:height}=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);return{opacity:withTiming(isHeaderHidden.get()?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(isHeaderHidden.get()?-height:0,MODE_CHANGE_PHYSICS)}]};}" };
let closure_42 = { code: "function VoicePanelHeaderTsx12(){const{isHeaderHidden}=this.__closure;return{pointerEvents:isHeaderHidden.get()?'none':'box-none',importantForAccessibility:isHeaderHidden.get()?'no-hide-descendants':'auto',accessibilityElementsHidden:isHeaderHidden.get()};}" };
const memoResult = importAllResult.memo(function VoicePanelHeader(wrapperOffset) {
  let channelType;
  let closure_10;
  let guildId;
  let scrollPosition;
  let tmp9;
  wrapperOffset = wrapperOffset.wrapperOffset;
  const gestureState = wrapperOffset.gestureState;
  const layout = wrapperOffset.layout;
  let DOWN;
  let c16;
  let tmp = callback3();
  const context = controlsSpecs.useContext(gestureState(channelId[25]));
  channelId = context.channelId;
  const focused = context.focused;
  controlsSpecs = context.controlsSpecs;
  const mode = context.mode;
  const safeArea = context.safeArea;
  const connected = context.connected;
  ({ guildId, channelType, scrollPosition } = context);
  let obj = wrapperOffset(channelId[34]);
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  const tmp4 = gestureState(channelId[35])(channelId);
  let obj1 = gestureState(channelId[36]);
  let obj2 = wrapperOffset(channelId[27]);
  let items = [derivedValue1, token, closure_10, connected];
  const items1 = [channelId];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const channel = outer1_10.getChannel(channelId);
    let channelName;
    if (null != channel) {
      channelName = wrapperOffset(channelId[37]).computeChannelName(channel, derivedValue1, token);
      const obj = wrapperOffset(channelId[37]);
    }
    if (null == channelName) {
      const intl = wrapperOffset(channelId[30]).intl;
      channelName = intl.string(wrapperOffset(channelId[30]).t.zLZPmk);
    }
    return channelName;
  }, items1);
  let tmp6 = focused(controlsSpecs.useState(undefined), 2);
  const first = tmp6[0];
  const store = tmp6[1];
  [tmp9, closure_10] = focused(controlsSpecs.useState(null), 2);
  const items2 = [channelId];
  const callback = controlsSpecs.useCallback((arg0) => {
    let tmp3 = null;
    if (null != arg0) {
      const participant = safeArea.getParticipant(tmp2, arg0);
      let type = null;
      if (null != participant) {
        type = participant.type;
      }
      tmp3 = type;
    }
    closure_10(tmp3);
    callback(arg0);
  }, items2);
  let obj3 = wrapperOffset(channelId[20]);
  class I {
    constructor() {
      value = focused.get();
      id = undefined;
      if (null != value) {
        id = value.id;
      }
      return id;
    }
  }
  I.__closure = { focused };
  I.__workletHash = 7943480174143;
  I.__initData = closure_36;
  const fn = function f(arg0, arg1) {
    if (arg0 !== arg1) {
      wrapperOffset(channelId[20]).runOnJS(callback)(arg0);
      const obj = wrapperOffset(channelId[20]);
    }
  };
  obj = { runOnJS: wrapperOffset(channelId[20]).runOnJS, handleFocusChange: callback };
  fn.__closure = obj;
  fn.__workletHash = 13084116412140;
  fn.__initData = closure_37;
  const animatedReaction = obj3.useAnimatedReaction(I, fn);
  let obj5 = wrapperOffset(channelId[38]);
  token = obj5.useToken(gestureState(channelId[19]).modules.mobile.VOICE_PANEL_GUTTER);
  let obj6 = wrapperOffset(channelId[20]);
  function he() {
    const tmp = gestureState(channelId[39]);
    if (mode.get() === outer1_17.PIP) {
      let num = -tmpResult.height + outer1_19;
    } else {
      num = 0;
      if (mode.get() === outer1_17.DISMISSED) {
        num = 0;
      }
    }
    return num;
  }
  obj = { calculateVoicePanelHeaderSpecs: gestureState(channelId[39]), safeArea, edgeGutter: token, mode, VoicePanelModes: closure_17, gestureState, connected, EDGE_GUTTER };
  he.__closure = obj;
  he.__workletHash = 13290333964417;
  he.__initData = closure_38;
  const derivedValue = obj6.useDerivedValue(he);
  let obj8 = wrapperOffset(channelId[20]);
  function _e() {
    const tmpResult = gestureState(channelId[39])(safeArea.get(), token);
    let value = mode.get();
    const height = tmpResult.height;
    if (connected.get()) {
      let sum = height;
    } else {
      sum = height - tmpResult.paddingTop + outer1_19;
    }
    let obj = {};
    const tmp = gestureState(channelId[39]);
    const merged = Object.assign(tmpResult);
    obj["paddingTop"] = connected.get() ? tmpResult.paddingTop : outer1_19;
    let num = 24;
    let num2 = 24;
    if (connected.get()) {
      num2 = 0;
    }
    obj["borderTopLeftRadius"] = num2;
    if (connected.get()) {
      num = 0;
    }
    obj["borderTopRightRadius"] = num;
    obj["height"] = sum;
    const tmp6 = connected.get() ? tmpResult.paddingTop : outer1_19;
    if (value === outer1_17.PIP) {
      let num3 = 0;
    } else {
      num3 = 1;
    }
    obj["opacity"] = wrapperOffset(channelId[40]).withTiming(num3, outer1_25);
    obj = {};
    const obj2 = wrapperOffset(channelId[40]);
    value = derivedValue.get();
    if (!connected.get()) {
      if (wrapperOffset.get().gestureActive) {
        let tmp12 = outer1_18;
      }
      obj.translateY = obj4.withSpring(value, tmp12);
      const items = [obj];
      obj["transform"] = items;
      return obj;
    }
    tmp12 = c16;
  }
  obj1 = { calculateVoicePanelHeaderSpecs: gestureState(channelId[39]), safeArea, edgeGutter: token, mode, VoicePanelModes: closure_17, connected, EDGE_GUTTER, withTiming: wrapperOffset(channelId[40]).withTiming, OPACITY_TIMING: closure_25, withSpring: wrapperOffset(channelId[21]).withSpring, yOffset: derivedValue, wrapperOffset, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE: closure_18, UI_SHOW_HIDE_PHYSICS: c16 };
  _e.__closure = obj1;
  _e.__workletHash = 11065699618122;
  _e.__initData = closure_39;
  const animatedStyle = obj8.useAnimatedStyle(_e);
  let obj10 = wrapperOffset(channelId[20]);
  function pe() {
    let tmp = controlsSpecs.get().mode === outer1_20.HIDDEN;
    if (tmp) {
      tmp = !isScreenReaderEnabled;
    }
    return tmp;
  }
  obj2 = { controlsSpecs, VoicePanelControlsModes, isScreenReaderEnabled };
  pe.__closure = obj2;
  pe.__workletHash = 16725581527938;
  pe.__initData = closure_40;
  derivedValue1 = obj10.useDerivedValue(pe);
  let obj12 = wrapperOffset(channelId[20]);
  class Se {
    constructor() {
      tmp = gestureState(channelId[39]);
      obj = {};
      obj2 = wrapperOffset(channelId[40]);
      num = 1;
      if (c14.get()) {
        num = 0;
      }
      obj.opacity = obj2.withTiming(num, outer1_25);
      obj = {};
      obj4 = wrapperOffset(channelId[21]);
      num2 = 0;
      if (c14.get()) {
        num2 = -tmp(safeArea.get(), closure_12).height;
      }
      obj.translateY = obj4.withSpring(num2, DOWN);
      items = [];
      items[0] = obj;
      obj.transform = items;
      return obj;
    }
  }
  obj3 = { calculateVoicePanelHeaderSpecs: gestureState(channelId[39]), safeArea, edgeGutter: token, withTiming: wrapperOffset(channelId[40]).withTiming, isHeaderHidden: derivedValue1, OPACITY_TIMING: closure_25, withSpring: wrapperOffset(channelId[21]).withSpring, MODE_CHANGE_PHYSICS: DOWN };
  Se.__closure = obj3;
  Se.__workletHash = 13148362186846;
  Se.__initData = closure_41;
  const animatedStyle1 = obj12.useAnimatedStyle(Se);
  let obj14 = wrapperOffset(channelId[20]);
  function fe() {
    const obj = {};
    let str = "box-none";
    if (derivedValue1.get()) {
      str = "none";
    }
    obj.pointerEvents = str;
    let str2 = "auto";
    if (derivedValue1.get()) {
      str2 = "no-hide-descendants";
    }
    obj.importantForAccessibility = str2;
    obj.accessibilityElementsHidden = derivedValue1.get();
    return obj;
  }
  fe.__closure = { isHeaderHidden: derivedValue1 };
  fe.__workletHash = 4740985143159;
  fe.__initData = closure_42;
  const animatedProps = obj14.useAnimatedProps(fe);
  let obj15 = wrapperOffset(channelId[41]);
  let canInviteMembers = obj15.useCanInviteMembers(channelId);
  let obj16 = wrapperOffset(channelId[42]);
  const tmp8 = focused(controlsSpecs.useState(null), 2);
  const tmp20 = gestureState(channelId[43])();
  let obj17 = wrapperOffset(channelId[44]);
  obj17.useNavigatorBackPressHandler(tmp20);
  if (null != tmp9) {
    DOWN = constants.LEFT;
  } else {
    DOWN = constants.DOWN;
  }
  if (DOWN === constants.LEFT) {
    let intl2 = wrapperOffset(channelId[30]).intl;
    let stringResult = intl2.string(wrapperOffset(channelId[30]).t["9M6OdC"]);
  } else {
    let intl = wrapperOffset(channelId[30]).intl;
    const string = intl.string;
    const t = wrapperOffset(channelId[30]).t;
    if (tmp4) {
      stringResult = string(t.RLCTQG);
    } else {
      stringResult = string(t["5lPjGj"]);
    }
  }
  const inviteMembersCallback = obj16.useInviteMembersCallback(channelId);
  const tmp29Result = gestureState(channelId[45])(store.getId(), channelId, guildId);
  c16 = tmp29Result;
  let obj18 = wrapperOffset(channelId[27]);
  const items3 = [callback];
  const items4 = [tmp29Result];
  const stateFromStores1 = obj18.useStateFromStores(items3, () => {
    if (null != c16) {
      if (obj2.isStableUserParticipant(c16)) {
        if (obj.stableParticipantHasVideo(c16)) {
          const videoDevices = callback.getVideoDevices();
          const _Object = Object;
          const keys = Object.keys(videoDevices);
          if (keys.length >= 2) {
            const videoDeviceId = callback.getVideoDeviceId();
            let facing;
            if (null != videoDevices[videoDeviceId]) {
              facing = tmp26.facing;
            }
            const found = keys.find((arg0) => arg0 !== videoDeviceId);
            if (null != found) {
              let facing1;
              if (null != videoDevices[found]) {
                facing1 = tmp10.facing;
              }
            }
            if (null != facing) {
              if (null != tmp9) {
                if ("back" === facing) {
                  if ("front" === tmp9) {
                    const intl3 = wrapperOffset(channelId[30]).intl;
                    let stringResult = intl3.string(wrapperOffset(channelId[30]).t["/R1SBx"]);
                  }
                }
                if ("front" === facing) {
                  if ("back" === tmp9) {
                    const intl2 = wrapperOffset(channelId[30]).intl;
                    stringResult = intl2.string(wrapperOffset(channelId[30]).t["7YZ/Si"]);
                  }
                }
                const intl = wrapperOffset(channelId[30]).intl;
                stringResult = intl.string(wrapperOffset(channelId[30]).t["t9eQ/g"]);
              }
              return stringResult;
            }
            const intl4 = wrapperOffset(channelId[30]).intl;
            stringResult = intl4.string(wrapperOffset(channelId[30]).t["t9eQ/g"]);
          }
        }
        obj = wrapperOffset(channelId[45]);
      }
      obj2 = wrapperOffset(channelId[45]);
    }
  }, items4);
  const items5 = [DOWN];
  const callback1 = controlsSpecs.useCallback(() => {
    const videoDeviceId = callback.getVideoDeviceId();
    const keys = Object.keys(callback.getVideoDevices());
    const found = keys.find((arg0) => arg0 !== closure_0);
    if (null != found) {
      gestureState(channelId[46]).setVideoDevice(found);
      const obj = gestureState(channelId[46]);
    }
  }, []);
  const memo = controlsSpecs.useMemo(() => {
    let obj = {};
    obj = {};
    let str = "0deg";
    if (DOWN === outer1_27.LEFT) {
      str = "90deg";
    }
    obj.rotateZ = str;
    const items = [obj];
    obj.transform = items;
    return obj;
  }, items5);
  let obj19 = wrapperOffset(channelId[47]);
  const isSecureFramesUIEnabled = obj19.useIsSecureFramesUIEnabled({ channelId });
  let obj20 = wrapperOffset(channelId[48]);
  const obj4 = {};
  let tmp35 = null;
  if (tmp9 === ParticipantTypes.USER) {
    tmp35 = null;
    if (null != first) {
      tmp35 = first;
    }
  }
  obj4.userId = tmp35;
  obj4.channelId = channelId;
  const isUserSecureFramesVerified = obj20.useIsUserSecureFramesVerified(obj4);
  const tmp29 = gestureState(channelId[45]);
  obj5 = {};
  let tmp37 = null;
  if (tmp9 === ParticipantTypes.STREAM) {
    tmp37 = null;
    if (null != first) {
      tmp37 = first;
    }
  }
  obj5.streamKey = tmp37;
  obj5.channelId = channelId;
  if (ParticipantTypes.STREAM === tmp9) {
    let flag = obj23.useIsStreamSecureFramesVerified(obj5);
  } else {
    flag = false;
    if (ParticipantTypes.USER === tmp9) {
      flag = isUserSecureFramesVerified;
    }
  }
  obj6 = {};
  let MIDNIGHT;
  if (tmp4) {
    MIDNIGHT = ThemeTypes.MIDNIGHT;
  }
  obj6.theme = MIDNIGHT;
  const obj7 = { style: items6, pointerEvents: "box-none", layout };
  items6 = [tmp.headerWrapper, animatedStyle];
  obj23 = wrapperOffset(channelId[48]);
  const tmp39 = callback;
  const tmp42 = closure_24;
  const items7 = [callback(closure_32, { isHeaderHidden: derivedValue1, scrollPosition, focused }), , ];
  let tmp44 = tmp4;
  if (tmp4) {
    obj8 = { baseColor: gestureState(channelId[19]).colors.BLACK, minHeight: 0 };
    tmp44 = callback(gestureState(channelId[50]), obj8);
    const tmp48 = gestureState(channelId[50]);
  }
  items7[1] = tmp44;
  const obj9 = { style: tmp.headerContentWrapper, pointerEvents: "box-none", layout };
  let tmp51 = null;
  const tmp43 = gestureState(channelId[22]);
  const tmp49 = closure_24;
  if (tmp9 === ParticipantTypes.USER) {
    obj10 = { isHeaderHidden: derivedValue1 };
    tmp51 = callback(gestureState(channelId[51]), obj10);
  }
  const items8 = [tmp51, ];
  const obj11 = { style: items9, animatedProps };
  items9 = [tmp.headerOuter, animatedStyle1];
  const tmp50 = gestureState(channelId[22]);
  obj12 = { style: tmp.leftWrapper, pointerEvents: "box-none" };
  const tmp56 = gestureState(channelId[22]);
  const obj13 = {};
  const tmp57 = gestureState(channelId[24]);
  obj13.icon = gestureState(channelId[52]);
  obj13.accessibilityLabel = stringResult;
  obj13.onPress = tmp20;
  obj13.style = memo;
  const items10 = [callback(gestureState(channelId[29]), obj13), ];
  obj14 = { style: tmp.headerInner };
  const tmp58 = gestureState(channelId[29]);
  const items11 = [callback(gestureState(channelId[53]), {}), ];
  let tmp60 = null;
  if (isSecureFramesUIEnabled) {
    tmp60 = null;
    if (flag) {
      obj15 = { size: "xs", color: gestureState(channelId[19]).colors.TEXT_SUBTLE, style: tmp.shieldIconMargin };
      tmp60 = callback(wrapperOffset(channelId[54]).ShieldLockIcon, obj15);
    }
  }
  items11[1] = tmp60;
  obj14.children = items11;
  items10[1] = closure_24(gestureState(channelId[22]), obj14);
  obj12.children = items10;
  const items12 = [closure_24(tmp57, obj12), ];
  obj16 = { style: tmp.rightWrapper, layout };
  const tmp59 = gestureState(channelId[22]);
  const tmp65 = closure_24;
  const items13 = [callback(closure_35, {}), , , , , ];
  let tmp67 = channelType === wrapperOffset(channelId[55]).ChannelTypes.GUILD_STAGE_VOICE;
  if (tmp67) {
    obj17 = { channelId };
    tmp67 = callback(MusicMuteButton, obj17);
  }
  items13[1] = tmp67;
  items13[2] = callback(gestureState(channelId[56]), { isConnectedToVoiceChannel: tmp4, channelId });
  if (canInviteMembers) {
    obj18 = { icon: gestureState(channelId[57]) };
    let intl3 = wrapperOffset(channelId[30]).intl;
    obj19 = { channelName: stateFromStores };
    obj18.accessibilityLabel = intl3.formatToPlainString(wrapperOffset(channelId[30]).t["dHHb/2"], obj19);
    obj18.onPress = inviteMembersCallback;
    canInviteMembers = callback(gestureState(channelId[29]), obj18);
    const tmp73 = gestureState(channelId[29]);
  }
  items13[3] = canInviteMembers;
  let tmp75 = null;
  if (null != stateFromStores1) {
    obj20 = { icon: gestureState(channelId[58]), onPress: callback1, accessibilityLabel: stateFromStores1 };
    tmp75 = callback(gestureState(channelId[29]), obj20);
    const tmp79 = gestureState(channelId[29]);
  }
  items13[4] = tmp75;
  let tmp80 = obj1.useConfig({ location: "VoicePanelHeader" }).treatment === wrapperOffset(channelId[36]).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT;
  if (tmp80) {
    const obj21 = { channelId };
    tmp80 = callback(gestureState(channelId[59]), obj21);
  }
  items13[5] = tmp80;
  obj16.children = items13;
  items12[1] = tmp65(gestureState(channelId[22]), obj16);
  obj11.children = items12;
  items8[1] = closure_24(tmp56, obj11);
  obj9.children = items8;
  items7[2] = tmp49(tmp50, obj9);
  obj7.children = items7;
  obj6.children = tmp42(tmp43, obj7);
  return tmp39(wrapperOffset(channelId[49]).ThemeContextProvider, obj6);
});
let obj2 = { height: StyleSheet.hairlineWidth, opacity: 0.2 };
let obj3 = { height: StyleSheet.hairlineWidth, opacity: 0.8 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeader.tsx");

export default memoResult;
