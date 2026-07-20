// Module ID: 15647
// Function ID: 119557
// Name: MusicMuteButton
// Dependencies: []

// Module 15647 (MusicMuteButton)
function MusicMuteButton(channelId) {
  channelId = channelId.channelId;
  let arg1;
  const tmp = importDefault(dependencyMap[26])(channelId);
  if (null != tmp) {
    const speaker = tmp.speaker;
  }
  let obj = arg1(dependencyMap[27]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => muted.isMuted());
  arg1 = stateFromStores;
  let tmp3 = null;
  if (obj2.useShowStageMusicMuteButton(channelId)) {
    tmp3 = null;
    if (speaker) {
      obj = {};
      const intl = arg1(dependencyMap[30]).intl;
      const string = intl.string;
      const t = arg1(dependencyMap[30]).t;
      if (stateFromStores) {
        let stringResult = string(t.ScHlfl);
      } else {
        stringResult = string(t.zqxfrf);
      }
      obj.accessibilityLabel = stringResult;
      if (stateFromStores) {
        let tmp13 = tmp12[31];
      } else {
        tmp13 = tmp12[32];
      }
      obj.icon = importDefault(tmp13);
      obj.onPress = function onPress() {
        return stateFromStores(closure_2[33]).updateStageMusicMuted(!stateFromStores);
      };
      closure_23(importDefault(dependencyMap[29]), obj);
      const tmp11 = importDefault;
      const tmp4 = closure_23;
      const tmp7 = importDefault(dependencyMap[29]);
    }
  }
  return tmp3;
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const StyleSheet = arg1(dependencyMap[2]).StyleSheet;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
const tmp3 = arg1(dependencyMap[12]);
const MODE_CHANGE_PHYSICS = tmp3.MODE_CHANGE_PHYSICS;
({ UI_SHOW_HIDE_PHYSICS: closure_16, VoicePanelModes: closure_17, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE: closure_18 } = tmp3);
const EDGE_GUTTER = arg1(dependencyMap[13]).EDGE_GUTTER;
const VoicePanelControlsModes = arg1(dependencyMap[14]).VoicePanelControlsModes;
const ParticipantTypes = arg1(dependencyMap[15]).ParticipantTypes;
const ThemeTypes = arg1(dependencyMap[16]).ThemeTypes;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_23, jsxs: closure_24 } = arg1(dependencyMap[17]));
let closure_25 = { duration: 300 };
let obj1 = arg1(dependencyMap[18]);
let obj = { headerWrapper: { paddingBottom: EDGE_GUTTER } };
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj["opacity"] = 0.7;
obj.blurStyles = obj;
obj.leftWrapper = {};
obj.rightWrapper = { 1384657622: "text-xs/bold", -1754432111: "text-default", -888970414: true, "Null": "/assets/images/native" };
obj.headerOuter = { -9223372036854775808: true, filter: true };
obj.headerInner = { 50243245: "png", 1365494882: null, -1185703395: "text-md/medium", -39012180: "text-muted" };
obj.headerContentWrapper = { position: "relative" };
obj1 = { height: StyleSheet.hairlineWidth, opacity: 0.2 };
obj.stroke = obj1;
obj.strokeAlt = { height: StyleSheet.hairlineWidth, opacity: 0.8 };
obj.strokeContainer = { height: StyleSheet.hairlineWidth };
const obj3 = { flexDirection: null, display: null, gap: null, position: null, borderRadius: importDefault(dependencyMap[19]).radii.round };
obj.focusedSpeakingDotWrapper = obj3;
const obj2 = { height: StyleSheet.hairlineWidth, opacity: 0.8 };
const tmp4 = arg1(dependencyMap[17]);
obj.focusedSpeakingDot = { borderRadius: importDefault(dependencyMap[19]).radii.round };
obj.shieldIconMargin = { marginLeft: -8 };
let closure_26 = obj1.createStyles(obj);
let closure_27 = { DOWN: 0, [0]: "DOWN", LEFT: 1, [1]: "LEFT" };
const obj5 = {};
const merged1 = Object.assign(MODE_CHANGE_PHYSICS);
obj5["overshootClamping"] = true;
let closure_29 = { code: "function VoicePanelHeaderTsx1(){const{isHeaderHidden,focused,scrollPosition}=this.__closure;return!isHeaderHidden.get()&&(focused.get()!=null||scrollPosition.get()>0);}" };
let closure_30 = { code: "function VoicePanelHeaderTsx2(){const{withSpring,showHeaderBlur}=this.__closure;return{blurAmount:withSpring(showHeaderBlur.get()?0.3:0)};}" };
let closure_31 = { code: "function VoicePanelHeaderTsx3(){const{withSpring,showHeaderBlur,HEADER_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(showHeaderBlur.get()?1:0,HEADER_CHANGE_PHYSICS)};}" };
let closure_32 = importAllResult.memo((isHeaderHidden) => {
  isHeaderHidden = isHeaderHidden.isHeaderHidden;
  const arg1 = isHeaderHidden;
  const scrollPosition = isHeaderHidden.scrollPosition;
  const importDefault = scrollPosition;
  const focused = isHeaderHidden.focused;
  const dependencyMap = focused;
  const tmp = callback4();
  let obj = arg1(dependencyMap[20]);
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
  let closure_3 = derivedValue;
  let obj1 = arg1(dependencyMap[20]);
  const fn2 = function c() {
    const obj = {};
    let num = 0;
    if (derivedValue.get()) {
      num = 0.3;
    }
    obj.blurAmount = isHeaderHidden(focused[21]).withSpring(num);
    return obj;
  };
  obj = { withSpring: arg1(dependencyMap[21]).withSpring, showHeaderBlur: derivedValue };
  fn2.__closure = obj;
  fn2.__workletHash = 10074943135400;
  fn2.__initData = closure_30;
  const animatedProps = obj1.useAnimatedProps(fn2);
  let obj3 = arg1(dependencyMap[20]);
  const fn3 = function u() {
    const obj = {};
    let num = 0;
    if (derivedValue.get()) {
      num = 1;
    }
    obj.opacity = isHeaderHidden(focused[21]).withSpring(num, closure_28);
    return obj;
  };
  obj = { withSpring: arg1(dependencyMap[21]).withSpring, showHeaderBlur: derivedValue, HEADER_CHANGE_PHYSICS: obj5 };
  fn3.__closure = obj;
  fn3.__workletHash = 2825977044105;
  fn3.__initData = closure_31;
  const animatedStyle = obj3.useAnimatedStyle(fn3);
  obj1 = { style: items, pointerEvents: "none" };
  const items = [StyleSheet.absoluteFill, animatedStyle];
  const obj2 = { getCurrentUser: "from", accessible: "absolute", bottom: -4, style: tmp.blurStyles, animatedProps };
  const items1 = [callback2(importDefault(dependencyMap[23]), obj2), ];
  obj3 = { style: tmp.strokeContainer };
  const tmp5 = importDefault(dependencyMap[22]);
  const items2 = [callback2(importDefault(dependencyMap[24]), { style: tmp.stroke }), ];
  const obj5 = { style: tmp.strokeAlt };
  items2[1] = callback2(importDefault(dependencyMap[24]), obj5);
  obj3.children = items2;
  items1[1] = callback3(importDefault(dependencyMap[24]), obj3);
  obj1.children = items1;
  return callback3(tmp5, obj1);
});
let closure_33 = { code: "function VoicePanelHeaderTsx4(){const{focused,controlsSpecs,VoicePanelControlsModes,speaking}=this.__closure;return focused.get()!=null&&controlsSpecs.get().mode!==VoicePanelControlsModes.HIDDEN&&speaking.get();}" };
let closure_34 = { code: "function VoicePanelHeaderTsx5(){const{showSpeakingIndicator}=this.__closure;return{opacity:showSpeakingIndicator.get()?1:0};}" };
let closure_35 = importAllResult.memo(() => {
  const id = store.getId();
  const arg1 = id;
  const context = importAllResult.useContext(importDefault(dependencyMap[25]));
  const focused = context.focused;
  const importDefault = focused;
  const controlsSpecs = context.controlsSpecs;
  const dependencyMap = controlsSpecs;
  let obj = arg1(dependencyMap[20]);
  const sharedValue = obj.useSharedValue(speaking.isSpeaking(id));
  let closure_3 = sharedValue;
  const items = [id, sharedValue];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    function handleChange() {
      const result = closure_3.set(closure_13.isSpeaking(handleChange));
    }
    const id = handleChange;
    handleChange();
    const result = closure_13.addReactChangeListener(handleChange);
    return () => {
      const result = closure_13.removeReactChangeListener(handleChange);
    };
  }, items);
  const tmp5 = callback4();
  let obj1 = arg1(dependencyMap[20]);
  const fn = function u() {
    let value = null != focused.get();
    if (value) {
      value = controlsSpecs.get().mode !== constants.HIDDEN;
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
  const derivedValue = obj1.useDerivedValue(fn);
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
  const animatedStyle = arg1(dependencyMap[20]).useAnimatedStyle(fn2);
  obj = { style: items1, pointerEvents: "none" };
  const items1 = [tmp5.focusedSpeakingDotWrapper, animatedStyle];
  const obj4 = arg1(dependencyMap[20]);
  obj1 = { style: tmp5.focusedSpeakingDot };
  obj.children = callback2(importDefault(dependencyMap[22]), obj1);
  return callback2(importDefault(dependencyMap[22]), obj);
});
let closure_36 = { code: "function VoicePanelHeaderTsx6(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}" };
let closure_37 = { code: "function VoicePanelHeaderTsx7(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}" };
let closure_38 = { code: "function VoicePanelHeaderTsx8(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,mode,VoicePanelModes,gestureState,connected,EDGE_GUTTER}=this.__closure;const specs=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);if(mode.get()===VoicePanelModes.PIP||gestureState.get().active&&!gestureState.get().requiresPop&&connected.get()||mode.get()===VoicePanelModes.DISMISSED&&connected.get()){return-(specs.height+EDGE_GUTTER);}return 0;}" };
let closure_39 = { code: "function VoicePanelHeaderTsx9(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,mode,VoicePanelModes,connected,EDGE_GUTTER,withTiming,OPACITY_TIMING,withSpring,yOffset,wrapperOffset,DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,UI_SHOW_HIDE_PHYSICS}=this.__closure;const specs=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);const pipMode=mode.get()===VoicePanelModes.PIP;const height=!connected.get()?specs.height-specs.paddingTop+EDGE_GUTTER:specs.height;const paddingTop=!connected.get()?EDGE_GUTTER:specs.paddingTop;return{...specs,paddingTop:paddingTop,borderTopLeftRadius:!connected.get()?24:0,borderTopRightRadius:!connected.get()?24:0,height:height,opacity:withTiming(pipMode||mode.get()===VoicePanelModes.DISMISSED?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(yOffset.get(),!connected.get()&&wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:UI_SHOW_HIDE_PHYSICS)}]};}" };
let closure_40 = { code: "function VoicePanelHeaderTsx10(){const{controlsSpecs,VoicePanelControlsModes,isScreenReaderEnabled}=this.__closure;return controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN&&!isScreenReaderEnabled;}" };
let closure_41 = { code: "function VoicePanelHeaderTsx11(){const{calculateVoicePanelHeaderSpecs,safeArea,edgeGutter,withTiming,isHeaderHidden,OPACITY_TIMING,withSpring,MODE_CHANGE_PHYSICS}=this.__closure;const{height:height}=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);return{opacity:withTiming(isHeaderHidden.get()?0:1,OPACITY_TIMING),transform:[{translateY:withSpring(isHeaderHidden.get()?-height:0,MODE_CHANGE_PHYSICS)}]};}" };
let closure_42 = { code: "function VoicePanelHeaderTsx12(){const{isHeaderHidden}=this.__closure;return{pointerEvents:isHeaderHidden.get()?'none':'box-none',importantForAccessibility:isHeaderHidden.get()?'no-hide-descendants':'auto',accessibilityElementsHidden:isHeaderHidden.get()};}" };
const obj4 = { borderRadius: importDefault(dependencyMap[19]).radii.round };
const memoResult = importAllResult.memo(function VoicePanelHeader(wrapperOffset) {
  let channelType;
  let guildId;
  let scrollPosition;
  let tmp9;
  wrapperOffset = wrapperOffset.wrapperOffset;
  const arg1 = wrapperOffset;
  const gestureState = wrapperOffset.gestureState;
  const importDefault = gestureState;
  const layout = wrapperOffset.layout;
  let MODE_CHANGE_PHYSICS;
  let tmp29Result;
  const tmp = callback4();
  const context = importAllResult.useContext(importDefault(dependencyMap[25]));
  const channelId = context.channelId;
  const dependencyMap = channelId;
  const focused = context.focused;
  let callback = focused;
  const controlsSpecs = context.controlsSpecs;
  const mode = context.mode;
  const StyleSheet = mode;
  const safeArea = context.safeArea;
  let closure_6 = safeArea;
  const connected = context.connected;
  let closure_7 = connected;
  ({ guildId, channelType, scrollPosition } = context);
  let obj = arg1(dependencyMap[34]);
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  let closure_8 = isScreenReaderEnabled;
  const tmp4 = importDefault(dependencyMap[35])(channelId);
  let obj1 = importDefault(dependencyMap[36]);
  let obj2 = arg1(dependencyMap[27]);
  const items = [closure_14, closure_12, closure_10, closure_7];
  const items1 = [channelId];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const channel = channel.getChannel(channelId);
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
  const tmp6 = callback(controlsSpecs.useState(undefined), 2);
  const first = tmp6[0];
  const store = tmp6[1];
  [tmp9, closure_10] = callback(controlsSpecs.useState(null), 2);
  const items2 = [channelId];
  callback = importAllResult.useCallback((arg0) => {
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
  let closure_11 = callback;
  let obj3 = arg1(dependencyMap[20]);
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
  obj = { runOnJS: arg1(dependencyMap[20]).runOnJS, handleFocusChange: callback };
  fn.__closure = obj;
  fn.__workletHash = 13084116412140;
  fn.__initData = closure_37;
  const animatedReaction = obj3.useAnimatedReaction(I, fn);
  let obj5 = arg1(dependencyMap[38]);
  const token = obj5.useToken(importDefault(dependencyMap[19]).modules.mobile.VOICE_PANEL_GUTTER);
  closure_12 = token;
  let obj6 = arg1(dependencyMap[20]);
  function he() {
    const tmp = gestureState(channelId[39]);
    if (mode.get() === constants.PIP) {
      let num = -tmpResult.height + closure_19;
    } else {
      num = 0;
      if (mode.get() === constants.DISMISSED) {
        num = 0;
      }
    }
    return num;
  }
  obj = { calculateVoicePanelHeaderSpecs: importDefault(dependencyMap[39]), safeArea, edgeGutter: token, mode, VoicePanelModes: closure_17, gestureState, connected, EDGE_GUTTER };
  he.__closure = obj;
  he.__workletHash = 13290333964417;
  he.__initData = closure_38;
  const derivedValue = obj6.useDerivedValue(he);
  let closure_13 = derivedValue;
  let obj8 = arg1(dependencyMap[20]);
  function _e() {
    const tmpResult = gestureState(channelId[39])(safeArea.get(), token);
    let value = mode.get();
    const height = tmpResult.height;
    if (connected.get()) {
      let sum = height;
    } else {
      sum = height - tmpResult.paddingTop + closure_19;
    }
    let obj = {};
    const tmp = gestureState(channelId[39]);
    const merged = Object.assign(tmpResult);
    obj["paddingTop"] = connected.get() ? tmpResult.paddingTop : closure_19;
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
    const tmp6 = connected.get() ? tmpResult.paddingTop : closure_19;
    if (value === constants.PIP) {
      let num3 = 0;
    } else {
      num3 = 1;
    }
    obj["opacity"] = wrapperOffset(channelId[40]).withTiming(num3, closure_25);
    obj = {};
    const obj2 = wrapperOffset(channelId[40]);
    value = derivedValue.get();
    if (!connected.get()) {
      if (wrapperOffset.get().gestureActive) {
        let tmp12 = closure_18;
      }
      obj.translateY = obj4.withSpring(value, tmp12);
      const items = [obj];
      obj["transform"] = items;
      return obj;
    }
    tmp12 = tmp29Result;
  }
  obj1 = { calculateVoicePanelHeaderSpecs: importDefault(dependencyMap[39]), safeArea, edgeGutter: token, mode, VoicePanelModes: closure_17, connected, EDGE_GUTTER, withTiming: arg1(dependencyMap[40]).withTiming, OPACITY_TIMING: closure_25, withSpring: arg1(dependencyMap[21]).withSpring, yOffset: derivedValue, wrapperOffset, DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE: closure_18, UI_SHOW_HIDE_PHYSICS: tmp29Result };
  _e.__closure = obj1;
  _e.__workletHash = 11065699618122;
  _e.__initData = closure_39;
  const animatedStyle = obj8.useAnimatedStyle(_e);
  let obj10 = arg1(dependencyMap[20]);
  function pe() {
    let tmp = controlsSpecs.get().mode === constants2.HIDDEN;
    if (tmp) {
      tmp = !isScreenReaderEnabled;
    }
    return tmp;
  }
  obj2 = { controlsSpecs, VoicePanelControlsModes, isScreenReaderEnabled };
  pe.__closure = obj2;
  pe.__workletHash = 16725581527938;
  pe.__initData = closure_40;
  const derivedValue1 = obj10.useDerivedValue(pe);
  closure_14 = derivedValue1;
  let obj12 = arg1(dependencyMap[20]);
  class Se {
    constructor() {
      tmp = gestureState(channelId[39]);
      obj = {};
      obj2 = wrapperOffset(channelId[40]);
      num = 1;
      if (closure_14.get()) {
        num = 0;
      }
      obj.opacity = obj2.withTiming(num, closure_25);
      obj = {};
      obj4 = wrapperOffset(channelId[21]);
      num2 = 0;
      if (closure_14.get()) {
        num2 = -tmp(safeArea.get(), closure_12).height;
      }
      obj.translateY = obj4.withSpring(num2, DOWN);
      items = [];
      items[0] = obj;
      obj.transform = items;
      return obj;
    }
  }
  obj3 = { calculateVoicePanelHeaderSpecs: importDefault(dependencyMap[39]), safeArea, edgeGutter: token, withTiming: arg1(dependencyMap[40]).withTiming, isHeaderHidden: derivedValue1, OPACITY_TIMING: closure_25, withSpring: arg1(dependencyMap[21]).withSpring, MODE_CHANGE_PHYSICS };
  Se.__closure = obj3;
  Se.__workletHash = 13148362186846;
  Se.__initData = closure_41;
  const animatedStyle1 = obj12.useAnimatedStyle(Se);
  let obj14 = arg1(dependencyMap[20]);
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
  let obj15 = arg1(dependencyMap[41]);
  let canInviteMembers = obj15.useCanInviteMembers(channelId);
  let obj16 = arg1(dependencyMap[42]);
  const tmp8 = callback(controlsSpecs.useState(null), 2);
  const tmp20 = importDefault(dependencyMap[43])();
  let obj17 = arg1(dependencyMap[44]);
  obj17.useNavigatorBackPressHandler(tmp20);
  if (null != tmp9) {
    let DOWN = constants.LEFT;
  } else {
    DOWN = constants.DOWN;
  }
  MODE_CHANGE_PHYSICS = DOWN;
  if (DOWN === constants.LEFT) {
    const intl2 = arg1(dependencyMap[30]).intl;
    let stringResult = intl2.string(arg1(dependencyMap[30]).t.9M6OdC);
  } else {
    const intl = arg1(dependencyMap[30]).intl;
    const string = intl.string;
    const t = arg1(dependencyMap[30]).t;
    if (tmp4) {
      stringResult = string(t.RLCTQG);
    } else {
      stringResult = string(t.5lPjGj);
    }
  }
  const inviteMembersCallback = obj16.useInviteMembersCallback(channelId);
  tmp29Result = importDefault(dependencyMap[45])(store.getId(), channelId, guildId);
  let obj18 = arg1(dependencyMap[27]);
  const items3 = [closure_11];
  const items4 = [tmp29Result];
  const stateFromStores1 = obj18.useStateFromStores(items3, () => {
    if (null != tmp29Result) {
      if (obj2.isStableUserParticipant(tmp29Result)) {
        if (obj.stableParticipantHasVideo(tmp29Result)) {
          const videoDevices = callback.getVideoDevices();
          const _Object = Object;
          const keys = Object.keys(videoDevices);
          if (keys.length >= 2) {
            const videoDeviceId = callback.getVideoDeviceId();
            const wrapperOffset = videoDeviceId;
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
                    let stringResult = intl3.string(wrapperOffset(channelId[30]).t./R1SBx);
                  }
                }
                if ("front" === facing) {
                  if ("back" === tmp9) {
                    const intl2 = wrapperOffset(channelId[30]).intl;
                    stringResult = intl2.string(wrapperOffset(channelId[30]).t.7YZ/Si);
                  }
                }
                const intl = wrapperOffset(channelId[30]).intl;
                stringResult = intl.string(wrapperOffset(channelId[30]).t.t9eQ/g);
              }
              return stringResult;
            }
            const intl4 = wrapperOffset(channelId[30]).intl;
            stringResult = intl4.string(wrapperOffset(channelId[30]).t.t9eQ/g);
          }
        }
        const obj = wrapperOffset(channelId[45]);
      }
      const obj2 = wrapperOffset(channelId[45]);
    }
  }, items4);
  const items5 = [DOWN];
  const callback1 = importAllResult.useCallback(() => {
    const videoDeviceId = callback.getVideoDeviceId();
    const keys = Object.keys(callback.getVideoDevices());
    const found = keys.find((arg0) => arg0 !== closure_0);
    if (null != found) {
      gestureState(channelId[46]).setVideoDevice(found);
      const obj = gestureState(channelId[46]);
    }
  }, []);
  const memo = importAllResult.useMemo(() => {
    let obj = {};
    obj = {};
    let str = "0deg";
    if (DOWN === constants3.LEFT) {
      str = "90deg";
    }
    obj.rotateZ = str;
    const items = [obj];
    obj.transform = items;
    return obj;
  }, items5);
  let obj19 = arg1(dependencyMap[47]);
  const isSecureFramesUIEnabled = obj19.useIsSecureFramesUIEnabled({ channelId });
  let obj20 = arg1(dependencyMap[48]);
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
  const tmp29 = importDefault(dependencyMap[45]);
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
  const items6 = [tmp.headerWrapper, animatedStyle];
  const obj23 = arg1(dependencyMap[48]);
  const tmp39 = callback2;
  const tmp42 = closure_24;
  const items7 = [callback2(closure_32, { isHeaderHidden: derivedValue1, scrollPosition, focused }), , ];
  let tmp44 = tmp4;
  if (tmp4) {
    obj8 = { baseColor: importDefault(dependencyMap[19]).colors.BLACK, minHeight: 0 };
    tmp44 = callback2(importDefault(dependencyMap[50]), obj8);
    const tmp48 = importDefault(dependencyMap[50]);
  }
  items7[1] = tmp44;
  const obj9 = { style: tmp.headerContentWrapper, pointerEvents: "box-none", layout };
  let tmp51 = null;
  const tmp43 = importDefault(dependencyMap[22]);
  const tmp49 = closure_24;
  if (tmp9 === ParticipantTypes.USER) {
    obj10 = { isHeaderHidden: derivedValue1 };
    tmp51 = callback2(importDefault(dependencyMap[51]), obj10);
  }
  const items8 = [tmp51, ];
  const obj11 = { style: items9, animatedProps };
  const items9 = [tmp.headerOuter, animatedStyle1];
  const tmp50 = importDefault(dependencyMap[22]);
  obj12 = { style: tmp.leftWrapper, pointerEvents: "box-none" };
  const tmp56 = importDefault(dependencyMap[22]);
  const obj13 = {};
  const tmp57 = importDefault(dependencyMap[24]);
  obj13.icon = importDefault(dependencyMap[52]);
  obj13.accessibilityLabel = stringResult;
  obj13.onPress = tmp20;
  obj13.style = memo;
  const items10 = [callback2(importDefault(dependencyMap[29]), obj13), ];
  obj14 = { style: tmp.headerInner };
  const tmp58 = importDefault(dependencyMap[29]);
  const items11 = [callback2(importDefault(dependencyMap[53]), {}), ];
  let tmp60 = null;
  if (isSecureFramesUIEnabled) {
    tmp60 = null;
    if (flag) {
      obj15 = { size: "xs", color: importDefault(dependencyMap[19]).colors.TEXT_SUBTLE, style: tmp.shieldIconMargin };
      tmp60 = callback2(arg1(dependencyMap[54]).ShieldLockIcon, obj15);
    }
  }
  items11[1] = tmp60;
  obj14.children = items11;
  items10[1] = closure_24(importDefault(dependencyMap[22]), obj14);
  obj12.children = items10;
  const items12 = [closure_24(tmp57, obj12), ];
  obj16 = { style: tmp.rightWrapper, layout };
  const tmp59 = importDefault(dependencyMap[22]);
  const tmp65 = closure_24;
  const items13 = [callback2(closure_35, {}), , , , , ];
  let tmp67 = channelType === arg1(dependencyMap[55]).ChannelTypes.GUILD_STAGE_VOICE;
  if (tmp67) {
    obj17 = { channelId };
    tmp67 = callback2(MusicMuteButton, obj17);
  }
  items13[1] = tmp67;
  items13[2] = callback2(importDefault(dependencyMap[56]), { isConnectedToVoiceChannel: tmp4, channelId });
  if (canInviteMembers) {
    obj18 = { icon: importDefault(dependencyMap[57]) };
    const intl3 = arg1(dependencyMap[30]).intl;
    obj19 = { channelName: stateFromStores };
    obj18.accessibilityLabel = intl3.formatToPlainString(arg1(dependencyMap[30]).t.dHHb/2, obj19);
    obj18.onPress = inviteMembersCallback;
    canInviteMembers = callback2(importDefault(dependencyMap[29]), obj18);
    const tmp73 = importDefault(dependencyMap[29]);
  }
  items13[3] = canInviteMembers;
  let tmp75 = null;
  if (null != stateFromStores1) {
    obj20 = { icon: importDefault(dependencyMap[58]), onPress: callback1, accessibilityLabel: stateFromStores1 };
    tmp75 = callback2(importDefault(dependencyMap[29]), obj20);
    const tmp79 = importDefault(dependencyMap[29]);
  }
  items13[4] = tmp75;
  let tmp80 = obj1.useConfig({ location: "VoicePanelHeader" }).treatment === arg1(dependencyMap[36]).MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT;
  if (tmp80) {
    const obj21 = { channelId };
    tmp80 = callback2(importDefault(dependencyMap[59]), obj21);
  }
  items13[5] = tmp80;
  obj16.children = items13;
  items12[1] = tmp65(importDefault(dependencyMap[22]), obj16);
  obj11.children = items12;
  items8[1] = closure_24(tmp56, obj11);
  obj9.children = items8;
  items7[2] = tmp49(tmp50, obj9);
  obj7.children = items7;
  obj6.children = tmp42(tmp43, obj7);
  return tmp39(arg1(dependencyMap[49]).ThemeContextProvider, obj6);
});
const result = arg1(dependencyMap[60]).fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeader.tsx");

export default memoResult;
