// Module ID: 19239
// Function ID: 19240
// Name: VoicePanelCardView
// Dependencies: [32, 19, 17, 6843, 5764, 11223, 11221, 19108, 11226, 5681, 21, 19240, 5095, 10089, 11222, 504, 5596, 575, 11229, 12271, 5637, 11249, 19197, 6959, 7241, 5989, 19188, 12, 5023, 1113, 5080, 2]

// Module 19239 (VoicePanelCardView)
import _modDef12 from "module_12" /* 12 */;
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5023 */;
import CallConstants from "CallConstants" /* 5681 */;
import react2 from "react" /* 5989 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 7241 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11221 */;
import VoicePanelCardConstants from "VoicePanelCardConstants" /* 11226 */;
import VoicePanelPIPConstants from "VoicePanelPIPConstants" /* 19108 */;
import VoicePanelCardDefault from "VoicePanelCard" /* 19240 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6843 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5764 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11223 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let UI_SHOW_HIDE_PHYSICS;
let VOICE_PANEL_CHUNK_DIVISOR;
let c10;
let c9;
let hasOwnProperty;
let metroRequire;
function getCardKey(type) {
  return "" + type.type + "-" + type.id;
}
function renderCard(arg0, item, transitionState, cleanUp) {
  return jsx(VoicePanelCardDefault, { item, transitionState, cleanUp }, arg0);
}
function CardContentFreezer(children) {
  let constants2;
  let freeze;
  let tmp7;
  let tmp8;
  children = children.children;
  importDefault = undefined;
  let animatedStyle;
  let closure_0;
  let ref;
  let closure_2;
  let tmp = children;
  const tmp2 = animatedStyle;
  SCALE_PHYSICS = children(animatedStyle[22]);
  const obj2 = react;
  let tmp3 = importDefault;
  let mode = SCALE_PHYSICS.usePIPState().mode;
  const isDockEnabled = react.useContext(require("VoicePanelStateContext")).isDockEnabled;
  const context = react.useContext(require("VoicePanelStateContext"));
  const mode2 = context.mode;
  const dockMinimizeProgress = context.dockMinimizeProgress;
  const dockPressed = context.dockPressed;
  const wrapperOffset = context.wrapperOffset;
  let tmp5 = _slicedToArray;
  [tmp7, tmp8] = _slicedToArray(react.useState(false), 2);
  let c5 = tmp8;
  const tmp6 = _slicedToArray(react.useState(false), 2);
  const fn = function c() {
    let tmp = isDockEnabled && mode2.get() === constants.PIP;
    if (tmp) {
      const value = dockMinimizeProgress.get();
      tmp = value >= 1 - children(animatedStyle[21]).SHEET_MORPH_PHYSICS.restDisplacementThreshold;
    }
    if (tmp) {
      tmp = !dockPressed.get();
    }
    if (tmp) {
      tmp = !wrapperOffset.get().gestureActive;
    }
    return tmp;
  };
  const tmp9 = children(animatedStyle[12]);
  const obj3 = { isDockEnabled, mode: mode2, VoicePanelModes, dockMinimizeProgress, SHEET_MORPH_PHYSICS: children(animatedStyle[21]).SHEET_MORPH_PHYSICS, dockPressed, wrapperOffset };
  const useAnimatedReaction = tmp9.useAnimatedReaction;
  fn.__closure = obj3;
  fn.__workletHash = 13859229262083;
  fn.__initData = __initData4;
  const fn2 = function s(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = children(animatedStyle[12]);
      obj.runOnJS(c5)(arg0);
    }
  };
  let obj4 = { runOnJS: children(animatedStyle[12]).runOnJS, setIsDockFrozen: tmp8 };
  fn2.__closure = obj4;
  fn2.__workletHash = 3701106957302;
  fn2.__initData = __initData5;
  const animatedReaction = useAnimatedReaction(fn, fn2);
  const tmp10 = VoicePanelModes;
  if (!isDockEnabled) {
    tmp7 = mode === VoicePanelPIPModes.IN_APP;
  }
  ref = obj2.useRef(tmp7);
  closure_2 = tmp5(obj2.useState({}), 2)[1];
  let items = [tmp7];
  const effect = obj2.useEffect(() => {
    let timeout;
    const tmp = timeout;
    if (tmp) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        if (!ref.current) {
          tmp.current = true;
          closure_1_2({});
        }
      }, 700);
      return () => {
        clearTimeout(closure_0);
      };
    } else {
      ref.current = false;
    }
  }, items);
  const tmp15 = tmp7 && tmp3(tmp2[23])(ref);
  importDefault = tmp15;
  closure_0 = tmp15;
  const context1 = obj2.useContext(tmp3(tmp2[14]));
  const connected = context1.connected;
  const controlsSpecs = context1.controlsSpecs;
  const safeArea = context1.safeArea;
  const contentDimensions = context1.contentDimensions;
  const windowDimensions = context1.windowDimensions;
  const mode3 = context1.mode;
  const focused = context1.focused;
  const wrapperOffset2 = context1.wrapperOffset;
  const isDockEnabled2 = context1.isDockEnabled;
  const items1 = [RTCConnectionStore];
  const tmpResult = tmp(tmp2[15]);
  const stateFromStores = tmpResult.useStateFromStores(items1, () => connected.isConnected());
  const tmpResult3 = tmp(tmp2[16]);
  const token = tmpResult3.useToken(tmp3(tmp2[17]).modules.mobile.VOICE_PANEL_GUTTER);
  const fn3 = function o() {
    let height;
    let items;
    let obj6;
    let obj8;
    let paddingTop;
    let tmp26;
    const mode = controlsSpecs.get().mode;
    const HIDDEN = constants2.HIDDEN;
    const bound = Math.max(safeArea.get().bottom, EDGE_GUTTER);
    const tmp5 = connected(animatedStyle[18]);
    ({ height, paddingTop } = tmp5(safeArea.get(), token));
    let num = 1;
    let num2 = 0;
    let num3 = 1;
    let num4 = 0;
    tmp5(safeArea.get(), token);
    const tmp = EDGE_GUTTER;
    const tmp3 = connected;
    if (connected.get()) {
      let height2 = paddingTop + contentDimensions.get().height + bound;
      if (height2 - windowDimensions.get().height < 8) {
        height2 = obj3.get().height;
      }
      const tmp8 = isDockEnabled2;
      if (tmp8) {
        num2 = 0;
        num3 = num;
        num4 = height2;
        if (mode !== HIDDEN) {
          num2 = 0;
          num3 = num;
          num4 = height2;
          if (null == focused.get()) {
            let sum;
            const diff = height2 - height - tmp;
            const diff1 = diff - obj.get().height - bound;
            const diff2 = obj3.get().height - paddingTop - bound;
            const diff3 = obj3.get().height - height;
            const diff4 = diff3 - obj.get().height - bound;
            let result = num;
            if (contentDimensions.get().height > diff1) {
              result = diff1 / obj2.get().height;
            }
            let diff5 = height;
            const tmp17 = contentDimensions.get().height < diff2 && contentDimensions.get().height > diff4;
            if (tmp17) {
              const result1 = (diff2 - obj2.get().height) / 2;
              diff5 = height - (result1 - (diff4 - obj2.get().height * result) / 2) * result;
            }
            if (contentDimensions.get().height > diff1) {
              sum = diff5 + (height2 * result - height2) / 2;
            } else {
              sum = diff5 + (diff1 - (obj3.get().height - paddingTop - bound)) / 2;
            }
            num2 = sum - paddingTop * result;
            num3 = result;
            num4 = height2;
          }
        }
      } else {
        num2 = 0;
        num3 = num;
        num4 = height2;
      }
    }
    let num9 = 0;
    if (!isDockEnabled2) {
      num9 = wrapperOffset2.get().y;
    }
    if (isDockEnabled2) {
      tmp26 = SCALE_PHYSICS;
    } else {
      tmp26 = LAYOUT_PHYSICS;
    }
    let str = "respect-motion-settings";
    if (isDockEnabled2) {
      str = "respect-motion-settings";
      if (!stateFromStores) {
        str = "animate-never";
      }
    }
    size = { position: "relative", width: windowDimensions.get().width, height: tmp3(tmp4[19])(num4), transform: items, opacity: num };
    const obj4 = { translateY: obj6.withSpring(num2 + num9, tmp26, str) };
    items = [obj4, ];
    obj6 = children(animatedStyle[20]);
    const obj5 = { scale: obj8.withSpring(num3, SCALE_PHYSICS, str) };
    items[1] = obj5;
    obj8 = children(animatedStyle[20]);
    const tmp28 = closure_0;
    if (tmp28) {
      num = 0;
    }
    return size;
  };
  const tmpResult4 = tmp(tmp2[12]);
  let obj5 = { controlsSpecs, VoicePanelControlsModes, safeArea, EDGE_GUTTER, calculateVoicePanelHeaderSpecs: tmp3(tmp2[18]), edgeGutter: token, connected, contentDimensions, windowDimensions, isDockEnabled: isDockEnabled2, mode: mode3, VoicePanelModes: tmp10, focused, wrapperOffset: wrapperOffset2, SCALE_PHYSICS, LAYOUT_PHYSICS, isRTCConnected: stateFromStores, roundToNearestPixel: tmp3(tmp2[19]), withSpring: tmp(tmp2[20]).withSpring, freeze: tmp15 };
  fn3.__closure = obj5;
  fn3.__workletHash = 181782059665;
  fn3.__initData = __initData3;
  animatedStyle = tmpResult4.useAnimatedStyle(fn3);
  const items2 = [animatedStyle, tmp15, children];
  return obj2.useMemo(() => {
    ReanimatedNativeViewDefault;
    const Freeze = react2.Freeze;
    return <tmp style={animatedStyle}>{null}</tmp>;
  }, items2);
}
let _slicedToArray = _slicedToArray_mod;
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
({ LAYOUT_PHYSICS: c9, VoicePanelModes: c10, UI_SHOW_HIDE_PHYSICS, VOICE_PANEL_CHUNK_DIVISOR } = VoicePanelConstants);
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const VoicePanelPIPModes = VoicePanelPIPConstants.VoicePanelPIPModes;
const EDGE_GUTTER = VoicePanelCardConstants.EDGE_GUTTER;
const isUserParticipant = CallConstants.isUserParticipant;
const jsx = Fragment.jsx;
let SCALE_PHYSICS = { mass: 1, restSpeedThreshold: 0.00001 };
const merged = Object.assign(UI_SHOW_HIDE_PHYSICS);
let closure_19 = { start: 0, end: VOICE_PANEL_CHUNK_DIVISOR };
const __initData = { code: "function VoicePanelCardViewTsx1(){const{viewableChunks}=this.__closure;return viewableChunks.get();}" };
const __initData2 = { code: "function VoicePanelCardViewTsx2(newChunks,previous){const{cheapWorkletShallowEqual,runOnJS,updateValueIfChange}=this.__closure;if(cheapWorkletShallowEqual(newChunks,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(updateValueIfChange)(newChunks);}" };
const __initData3 = { code: "function VoicePanelCardViewTsx3(){const{controlsSpecs,VoicePanelControlsModes,safeArea,EDGE_GUTTER,calculateVoicePanelHeaderSpecs,edgeGutter,connected,contentDimensions,windowDimensions,isDockEnabled,mode,VoicePanelModes,focused,wrapperOffset,SCALE_PHYSICS,LAYOUT_PHYSICS,isRTCConnected,roundToNearestPixel,withSpring,freeze}=this.__closure;const hidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;let height=0;let scale=1;let top=0;const safeAreaBottom=Math.max(safeArea.get().bottom,EDGE_GUTTER);const{height:headerBarHeight,paddingTop:safeAreaTop}=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);if(connected.get()){height+=safeAreaTop;height+=contentDimensions.get().height;height+=safeAreaBottom;if(height-windowDimensions.get().height<8){height=windowDimensions.get().height;}if((isDockEnabled||mode.get()!==VoicePanelModes.PIP)&&!hidden&&focused.get()==null){const targetHeight=height-headerBarHeight-EDGE_GUTTER-controlsSpecs.get().height-safeAreaBottom;const fullView=windowDimensions.get().height-safeAreaTop-safeAreaBottom;const controlsView=windowDimensions.get().height-headerBarHeight-controlsSpecs.get().height-safeAreaBottom;top=headerBarHeight;scale=function(){if(contentDimensions.get().height>targetHeight){return targetHeight/contentDimensions.get().height;}return 1;}();if(contentDimensions.get().height<fullView&&contentDimensions.get().height>controlsView){const offsetOriginal=(fullView-contentDimensions.get().height)/2;const scaledContent=contentDimensions.get().height*scale;const scaledOffset=(controlsView-scaledContent)/2;top-=(offsetOriginal-scaledOffset)*scale;}if(contentDimensions.get().height>targetHeight){top+=(height*scale-height)/2;}else{top+=(targetHeight-(windowDimensions.get().height-safeAreaTop-safeAreaBottom))/2;}top-=safeAreaTop*scale;}}const offsetY=isDockEnabled?0:wrapperOffset.get().y;const translatePhysics=isDockEnabled||!wrapperOffset.get().gestureActive&&mode.get()!==VoicePanelModes.PIP?SCALE_PHYSICS:LAYOUT_PHYSICS;const motion=isDockEnabled&&!isRTCConnected?'animate-never':'respect-motion-settings';return{position:'relative',width:windowDimensions.get().width,height:roundToNearestPixel(height),transform:[{translateY:withSpring(top+offsetY,translatePhysics,motion)},{scale:withSpring(scale,SCALE_PHYSICS,motion)}],opacity:freeze?0:1};}" };
const __initData4 = { code: "function VoicePanelCardViewTsx4(){const{isDockEnabled,mode,VoicePanelModes,dockMinimizeProgress,SHEET_MORPH_PHYSICS,dockPressed,wrapperOffset}=this.__closure;return isDockEnabled&&mode.get()===VoicePanelModes.PIP&&dockMinimizeProgress.get()>=1-SHEET_MORPH_PHYSICS.restDisplacementThreshold&&!dockPressed.get()&&!wrapperOffset.get().gestureActive;}" };
const __initData5 = { code: "function VoicePanelCardViewTsx5(current,previous){const{runOnJS,setIsDockFrozen}=this.__closure;if(current!==previous){runOnJS(setIsDockFrozen)(current);}}" };
const memoResult = react.memo(function VoicePanelCardView(viewableChunks) {
  let c1;
  let ref;
  let tmp2;
  viewableChunks = viewableChunks.viewableChunks;
  let chunkedParticipants;
  let stateFromStoresArray;
  _slicedToArray = undefined;
  const channelId = react.useContext(chunkedParticipants(stateFromStoresArray[14])).channelId;
  c1 = undefined;
  let tmp = _slicedToArray(react.useState(closure_19), 2);
  [tmp2, c1] = tmp;
  const callback = react.useCallback((arg0) => {
    let closure_0 = arg0;
    const tmp = _undefined((start) => {
      let tmp2 = start;
      if (start.start === start.start) {
        tmp2 = tmp;
        if (start.end === start.end) {
          tmp2 = start;
        }
      }
      return tmp2;
    });
  }, []);
  let obj = channelId(stateFromStoresArray[12]);
  const fn = function c() {
    return viewableChunks.get();
  };
  fn.__closure = { viewableChunks };
  fn.__workletHash = 1074173860641;
  fn.__initData = __initData;
  const fn2 = function s(safeAreaState, current) {
    const cheapWorkletShallowEqual = channelId(stateFromStoresArray[13]).cheapWorkletShallowEqual;
    channelId(stateFromStoresArray[13]);
    const tmp = current;
    const tmp2 = channelId;
    const tmp3 = stateFromStoresArray;
    if (!cheapWorkletShallowEqual(safeAreaState, tmp)) {
      const tmp2Result = tmp2(tmp3[12]);
      tmp2Result.runOnJS(callback)(safeAreaState);
    }
  };
  let obj2 = { cheapWorkletShallowEqual: channelId(stateFromStoresArray[13]).cheapWorkletShallowEqual, runOnJS: channelId(stateFromStoresArray[12]).runOnJS, updateValueIfChange: callback };
  fn2.__closure = obj2;
  fn2.__workletHash = 13543715159803;
  fn2.__initData = __initData2;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  const obj3 = channelId(stateFromStoresArray[26]);
  chunkedParticipants = obj3.useChunkedParticipants(channelId, tmp2);
  const items = [ChannelRTCStore];
  const items1 = [channelId];
  const obj4 = channelId(stateFromStoresArray[15]);
  stateFromStoresArray = obj4.useStateFromStoresArray(items, () => {
    const participants = ChannelRTCStore.getParticipants(channelId);
    return participants.filter((item) => closure_1_14(item));
  }, items1);
  _slicedToArray = react.useRef(stateFromStoresArray);
  const items2 = [stateFromStoresArray, channelId];
  const effect = react.useEffect(() => {
    const obj = _modDef12;
    if (!obj.isEqual(ref.current, stateFromStoresArray)) {
      const tmpResult = _modDef12;
      const differenceWithResult = tmpResult.differenceWith(ref.current, stateFromStoresArray, (id, id2) => id.id === id2.id);
      let user = null;
      if (differenceWithResult.length > 0) {
        user = differenceWithResult[0].user;
      }
      if (null != user) {
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        const announce = AccessibilityAnnouncer.announce;
        const intl = intl2.intl;
        const obj2 = { username: user.username };
        announce(intl.formatToPlainString(intl2.t["9NqwWZ"], obj2));
      }
    }
    ref.current = stateFromStoresArray;
  }, items2);
  const items3 = [chunkedParticipants];
  return react.useMemo(() => <CardContentFreezer>{null}</CardContentFreezer>, items3);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCardView.tsx");

export default memoResult;
