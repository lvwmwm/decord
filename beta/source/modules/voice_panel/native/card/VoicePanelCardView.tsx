// Module ID: 17551
// Function ID: 17552
// Name: VoicePanelCardView
// Dependencies: [32, 19, 17, 4774, 12420, 12418, 17486, 12423, 4779, 21, 17552, 558, 4497, 9660, 12419, 4462, 580, 12424, 11293, 5187, 568, 17487, 5801, 5141, 7320, 17582, 504, 12, 4472, 1119, 4471, 2]

// Module 17551 (VoicePanelCardView)
import _modDef12 from "module_12" /* 12 */;
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import native from "native" /* 4471 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4472 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4497 */;
import Suspender from "Suspender" /* 5141 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 7320 */;
import calculateVoicePanelHeaderSpecsDefault from "calculateVoicePanelHeaderSpecs" /* 12424 */;
import VoicePanelCardDefault from "VoicePanelCard" /* 17552 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4774 */;

const spring = tmp23(5187);
const roundToNearestPixelDefault = tmp3(11293);
require = fn;
function getCardKey(type) {
  return "" + type.type + "-" + type.id;
}
function renderCard(arg0, item, transitionState, cleanUp) {
  return jsx(VoicePanelCardDefault, { item, transitionState, cleanUp }, arg0);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const VoicePanelConstants = fn(12420);
({ LAYOUT_PHYSICS: closure_8, VoicePanelModes: closure_9, UI_SHOW_HIDE_PHYSICS, VOICE_PANEL_CHUNK_DIVISOR } = VoicePanelConstants);
const VoicePanelControlsModes = fn(12418).VoicePanelControlsModes;
const VoicePanelPIPModes = fn(17486).VoicePanelPIPModes;
const EDGE_GUTTER = fn(12423).EDGE_GUTTER;
const isUserParticipant = fn(4779).isUserParticipant;
const jsx = fn(21).jsx;
let SCALE_PHYSICS = {};
const merged = Object.assign(UI_SHOW_HIDE_PHYSICS);
SCALE_PHYSICS.mass = 1;
SCALE_PHYSICS.restSpeedThreshold = 0.00001;
let closure_18 = { start: 0, end: VOICE_PANEL_CHUNK_DIVISOR };
const __initData = { code: "function VoicePanelCardViewTsx1(){const{viewableChunks}=this.__closure;return viewableChunks.get();}" };
const __initData2 = { code: "function VoicePanelCardViewTsx2(newChunks_0,previous){const{cheapWorkletShallowEqual,runOnJS,updateValueIfChange}=this.__closure;if(cheapWorkletShallowEqual(newChunks_0,previous!==null&&previous!==void 0?previous:undefined)){return;}runOnJS(updateValueIfChange)(newChunks_0);}" };
const __initData3 = { code: "function VoicePanelCardViewTsx3(){const{viewableChunks}=this.__closure;return viewableChunks.get();}" };
const __initData4 = { code: "function VoicePanelCardViewTsx4(newChunks_0,previous){const{cheapWorkletShallowEqual,runOnJS,updateValueIfChange}=this.__closure;if(cheapWorkletShallowEqual(newChunks_0,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(updateValueIfChange)(newChunks_0);}" };
let ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? ((viewableChunks) => {
  _require = viewableChunks;
  const tmp = _slicedToArray(noop.useState(closure_18), 2);
  closure_1 = tmp[1];
  function updateValueIfChange(arg0) {
    const start = arg0;
    closure_1((start) => {
      let tmp2 = start;
      if (start.start === start.start) {
        tmp2 = tmp;
        if (start.end === tmp.end) {
          tmp2 = start;
        }
      }
      return tmp2;
    });
  }
  const fn = function h() {
    return viewableChunks.get();
  };
  fn.__closure = { viewableChunks };
  fn.__workletHash = 1074173860641;
  fn.__initData = __initData;
  const fn2 = function s(safeAreaState, safeAreaState2) {
    if (!obj.cheapWorkletShallowEqual(safeAreaState, safeAreaState2)) {
      ReanimatedRexport.runOnJS(updateValueIfChange)(safeAreaState);
      const tmp2Result = ReanimatedRexport;
    }
  };
  const obj = require("ReanimatedRexport");
  fn2.__closure = { cheapWorkletShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletShallowEqual, runOnJS: require("ReanimatedRexport").runOnJS, updateValueIfChange };
  fn2.__workletHash = 8068567273906;
  fn2.__initData = __initData2;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  return tmp[0];
}) : ((viewableChunks) => {
  _require = viewableChunks;
  [tmp2, importDefault] = noop.useState(closure_18);
  const updateValueIfChange = noop.useCallback((arg0) => {
    const start = arg0;
    importDefault((start) => {
      let tmp2 = start;
      if (start.start === start.start) {
        tmp2 = tmp;
        if (start.end === tmp.end) {
          tmp2 = start;
        }
      }
      return tmp2;
    });
  }, []);
  const tmp = _slicedToArray(noop.useState(closure_18), 2);
  const fn = function h() {
    return viewableChunks.get();
  };
  fn.__closure = { viewableChunks };
  fn.__workletHash = 1697075298595;
  fn.__initData = __initData3;
  const fn2 = function s(safeAreaState, safeAreaState2) {
    if (!obj.cheapWorkletShallowEqual(safeAreaState, safeAreaState2)) {
      ReanimatedRexport.runOnJS(callback)(safeAreaState);
      const tmp2Result = ReanimatedRexport;
    }
  };
  const obj = require("ReanimatedRexport");
  fn2.__closure = { cheapWorkletShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletShallowEqual, runOnJS: require("ReanimatedRexport").runOnJS, updateValueIfChange };
  fn2.__workletHash = 4342690464082;
  fn2.__initData = __initData4;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  return tmp2;
});
const __initData5 = { code: "function VoicePanelCardViewTsx5(){const{controlsSpecs,VoicePanelControlsModes,safeArea,EDGE_GUTTER,calculateVoicePanelHeaderSpecs,edgeGutter,connected,contentDimensions,windowDimensions,mode,VoicePanelModes,focused,roundToNearestPixel,withSpring,wrapperOffset,LAYOUT_PHYSICS,SCALE_PHYSICS,freeze}=this.__closure;const hidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;let height=0;let scale=1;let top=0;const safeAreaBottom=Math.max(safeArea.get().bottom,EDGE_GUTTER);const{height:headerBarHeight,paddingTop:safeAreaTop}=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);if(connected.get()){height=0+safeAreaTop;height=height+contentDimensions.get().height;height=height+safeAreaBottom;if(height-windowDimensions.get().height<8){height=windowDimensions.get().height;}if(mode.get()!==VoicePanelModes.PIP&&!hidden&&focused.get()==null){const targetHeight=height-headerBarHeight-EDGE_GUTTER-controlsSpecs.get().height-safeAreaBottom;const fullView=windowDimensions.get().height-safeAreaTop-safeAreaBottom;const controlsView=windowDimensions.get().height-headerBarHeight-controlsSpecs.get().height-safeAreaBottom;top=headerBarHeight;scale=function(){if(contentDimensions.get().height>targetHeight){return targetHeight/contentDimensions.get().height;}return 1;}();if(contentDimensions.get().height<fullView&&contentDimensions.get().height>controlsView){const offsetOriginal=(fullView-contentDimensions.get().height)/2;const scaledContent=contentDimensions.get().height*scale;const scaledOffset=(controlsView-scaledContent)/2;top=top-(offsetOriginal-scaledOffset)*scale;}if(contentDimensions.get().height>targetHeight){top=top+(height*scale-height)/2;}else{top=top+(targetHeight-(windowDimensions.get().height-safeAreaTop-safeAreaBottom))/2;}top=top-safeAreaTop*scale;}}return{position:\"relative\",width:windowDimensions.get().width,height:roundToNearestPixel(height),transform:[{translateY:withSpring(top+wrapperOffset.get().y,wrapperOffset.get().gestureActive||mode.get()===VoicePanelModes.PIP?LAYOUT_PHYSICS:SCALE_PHYSICS)},{scale:withSpring(scale,SCALE_PHYSICS)}],opacity:freeze?0:1};}" };
const __initData6 = { code: "function VoicePanelCardViewTsx6(){const{controlsSpecs,VoicePanelControlsModes,safeArea,EDGE_GUTTER,calculateVoicePanelHeaderSpecs,edgeGutter,connected,contentDimensions,windowDimensions,mode,VoicePanelModes,focused,roundToNearestPixel,withSpring,wrapperOffset,LAYOUT_PHYSICS,SCALE_PHYSICS,freeze}=this.__closure;const hidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;let height=0;let scale=1;let top=0;const safeAreaBottom=Math.max(safeArea.get().bottom,EDGE_GUTTER);const{height:headerBarHeight,paddingTop:safeAreaTop}=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);if(connected.get()){height+=safeAreaTop;height+=contentDimensions.get().height;height+=safeAreaBottom;if(height-windowDimensions.get().height<8){height=windowDimensions.get().height;}if(mode.get()!==VoicePanelModes.PIP&&!hidden&&focused.get()==null){const targetHeight=height-headerBarHeight-EDGE_GUTTER-controlsSpecs.get().height-safeAreaBottom;const fullView=windowDimensions.get().height-safeAreaTop-safeAreaBottom;const controlsView=windowDimensions.get().height-headerBarHeight-controlsSpecs.get().height-safeAreaBottom;top=headerBarHeight;scale=function(){if(contentDimensions.get().height>targetHeight){return targetHeight/contentDimensions.get().height;}return 1;}();if(contentDimensions.get().height<fullView&&contentDimensions.get().height>controlsView){const offsetOriginal=(fullView-contentDimensions.get().height)/2;const scaledContent=contentDimensions.get().height*scale;const scaledOffset=(controlsView-scaledContent)/2;top-=(offsetOriginal-scaledOffset)*scale;}if(contentDimensions.get().height>targetHeight){top+=(height*scale-height)/2;}else{top+=(targetHeight-(windowDimensions.get().height-safeAreaTop-safeAreaBottom))/2;}top-=safeAreaTop*scale;}}return{position:'relative',width:windowDimensions.get().width,height:roundToNearestPixel(height),transform:[{translateY:withSpring(top+wrapperOffset.get().y,wrapperOffset.get().gestureActive||mode.get()===VoicePanelModes.PIP?LAYOUT_PHYSICS:SCALE_PHYSICS)},{scale:withSpring(scale,SCALE_PHYSICS)}],opacity:freeze?0:1};}" };
ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? ((freeze) => {
  _require = freeze;
  const context = contentDimensions.useContext(connected(controlsSpecs[14]));
  connected = context.connected;
  controlsSpecs = context.controlsSpecs;
  const safeArea = context.safeArea;
  contentDimensions = context.contentDimensions;
  const windowDimensions = context.windowDimensions;
  const mode = context.mode;
  const focused = context.focused;
  const wrapperOffset = context.wrapperOffset;
  SCALE_PHYSICS = require("useToken");
  const token = SCALE_PHYSICS.useToken(connected(controlsSpecs[16]).modules.mobile.VOICE_PANEL_GUTTER);
  const fn = function o() {
    const bound = Math.max(safeArea.get().bottom, EDGE_GUTTER);
    const tmp = EDGE_GUTTER;
    ({ height, paddingTop } = calculateVoicePanelHeaderSpecsDefault(safeArea.get(), token));
    let num = 1;
    let num2 = 0;
    let num3 = 1;
    let num4 = 0;
    if (connected.get()) {
      let height2 = paddingTop + contentDimensions.get().height + bound;
      if (height2 - windowDimensions.get().height < 8) {
        height2 = obj3.get().height;
      }
      num2 = 0;
      num3 = num;
      num4 = height2;
      if (mode.get() !== constants.PIP) {
        num2 = 0;
        num3 = num;
        num4 = height2;
        if (controlsSpecs.get().mode !== VoicePanelControlsModes.HIDDEN) {
          num2 = 0;
          num3 = num;
          num4 = height2;
          if (null == focused.get()) {
            const diff = height2 - height - tmp;
            const diff1 = diff - obj.get().height - bound;
            const diff2 = obj3.get().height - paddingTop - bound;
            const diff3 = obj3.get().height - height;
            const diff4 = diff3 - obj.get().height - bound;
            let result = num;
            if (obj2.get().height > diff1) {
              result = diff1 / obj2.get().height;
            }
            let diff5 = height;
            if (tmp16) {
              const result1 = (diff2 - obj2.get().height) / 2;
              diff5 = height - (result1 - (diff4 - obj2.get().height * result) / 2) * result;
            }
            if (obj2.get().height > diff1) {
              let sum = diff5 + (height2 * result - height2) / 2;
            } else {
              sum = diff5 + (diff1 - (obj3.get().height - paddingTop - bound)) / 2;
            }
            paddingTop = paddingTop * result;
            const diff6 = sum - paddingTop;
            tmp16 = obj2.get().height < diff2 && obj2.get().height > diff4;
          }
        }
      }
    }
    const size = { position: "relative", width: windowDimensions.get().width, height: roundToNearestPixelDefault(num4), transform: null, opacity: null };
    const tmp5Result = calculateVoicePanelHeaderSpecsDefault(safeArea.get(), token);
    const sum1 = num2 + wrapperOffset.get().y;
    if (!wrapperOffset.get().gestureActive) {
      if (mode.get() !== constants.PIP) {
        let tmp27 = obj;
      }
      const obj4 = { translateY: obj5.withSpring(sum1, tmp27) };
      const items = [obj4, ];
      const obj6 = { scale: spring.withSpring(num3, obj) };
      items[1] = obj6;
      size.transform = items;
      if (closure_0) {
        num = 0;
      }
      size.opacity = num;
      return size;
    }
    tmp27 = closure_2_8;
  };
  const obj2 = require("ReanimatedRexport");
  fn.__closure = { controlsSpecs, VoicePanelControlsModes, safeArea, EDGE_GUTTER, calculateVoicePanelHeaderSpecs: connected(controlsSpecs[17]), edgeGutter: token, connected, contentDimensions, windowDimensions, mode, VoicePanelModes: token, focused, roundToNearestPixel: connected(controlsSpecs[18]), withSpring: require("spring").withSpring, wrapperOffset, LAYOUT_PHYSICS: wrapperOffset, SCALE_PHYSICS, freeze };
  fn.__workletHash = 270121942538;
  fn.__initData = __initData5;
  return obj2.useAnimatedStyle(fn);
}) : ((freeze) => {
  _require = freeze;
  const context = contentDimensions.useContext(connected(controlsSpecs[14]));
  connected = context.connected;
  controlsSpecs = context.controlsSpecs;
  const safeArea = context.safeArea;
  contentDimensions = context.contentDimensions;
  const windowDimensions = context.windowDimensions;
  const mode = context.mode;
  const focused = context.focused;
  const wrapperOffset = context.wrapperOffset;
  SCALE_PHYSICS = require("useToken");
  const token = SCALE_PHYSICS.useToken(connected(controlsSpecs[16]).modules.mobile.VOICE_PANEL_GUTTER);
  const fn = function o() {
    const bound = Math.max(safeArea.get().bottom, EDGE_GUTTER);
    const tmp = EDGE_GUTTER;
    ({ height, paddingTop } = calculateVoicePanelHeaderSpecsDefault(safeArea.get(), token));
    let num = 1;
    let num2 = 0;
    let num3 = 1;
    let num4 = 0;
    if (connected.get()) {
      let height2 = paddingTop + contentDimensions.get().height + bound;
      if (height2 - windowDimensions.get().height < 8) {
        height2 = obj3.get().height;
      }
      num2 = 0;
      num3 = num;
      num4 = height2;
      if (mode.get() !== constants.PIP) {
        num2 = 0;
        num3 = num;
        num4 = height2;
        if (controlsSpecs.get().mode !== VoicePanelControlsModes.HIDDEN) {
          num2 = 0;
          num3 = num;
          num4 = height2;
          if (null == focused.get()) {
            const diff = height2 - height - tmp;
            const diff1 = diff - obj.get().height - bound;
            const diff2 = obj3.get().height - paddingTop - bound;
            const diff3 = obj3.get().height - height;
            const diff4 = diff3 - obj.get().height - bound;
            let result = num;
            if (obj2.get().height > diff1) {
              result = diff1 / obj2.get().height;
            }
            let diff5 = height;
            if (tmp16) {
              const result1 = (diff2 - obj2.get().height) / 2;
              diff5 = height - (result1 - (diff4 - obj2.get().height * result) / 2) * result;
            }
            if (obj2.get().height > diff1) {
              let sum = diff5 + (height2 * result - height2) / 2;
            } else {
              sum = diff5 + (diff1 - (obj3.get().height - paddingTop - bound)) / 2;
            }
            paddingTop = paddingTop * result;
            const diff6 = sum - paddingTop;
            tmp16 = obj2.get().height < diff2 && obj2.get().height > diff4;
          }
        }
      }
    }
    const size = { position: "relative", width: windowDimensions.get().width, height: roundToNearestPixelDefault(num4), transform: null, opacity: null };
    const tmp5Result = calculateVoicePanelHeaderSpecsDefault(safeArea.get(), token);
    const sum1 = num2 + wrapperOffset.get().y;
    if (!wrapperOffset.get().gestureActive) {
      if (mode.get() !== constants.PIP) {
        let tmp27 = obj;
      }
      const obj4 = { translateY: obj5.withSpring(sum1, tmp27) };
      const items = [obj4, ];
      const obj6 = { scale: spring.withSpring(num3, obj) };
      items[1] = obj6;
      size.transform = items;
      if (closure_0) {
        num = 0;
      }
      size.opacity = num;
      return size;
    }
    tmp27 = closure_2_8;
  };
  const obj2 = require("ReanimatedRexport");
  fn.__closure = { controlsSpecs, VoicePanelControlsModes, safeArea, EDGE_GUTTER, calculateVoicePanelHeaderSpecs: connected(controlsSpecs[17]), edgeGutter: token, connected, contentDimensions, windowDimensions, mode, VoicePanelModes: token, focused, roundToNearestPixel: connected(controlsSpecs[18]), withSpring: require("spring").withSpring, wrapperOffset, LAYOUT_PHYSICS: wrapperOffset, SCALE_PHYSICS, freeze };
  fn.__workletHash = 12625747503513;
  fn.__initData = __initData6;
  return obj2.useAnimatedStyle(fn);
});
ReactCompilerGating = fn(558);
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = mode(568).c(6);
  const obj = mode(568);
  mode = mode(17487).usePIPState().mode;
  const ref = noop.useRef(mode === VoicePanelPIPModes.IN_APP);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = {};
    cResult[0] = obj4;
    let first = obj4;
  } else {
    first = cResult[0];
  }
  const tmp6 = _slicedToArray(noop.useState(first), 2)[1];
  dependencyMap = tmp6;
  if (cResult[1] === tmp6) {
    if (cResult[2] === mode) {
      let tmp7 = cResult[3];
    }
    if (cResult[4] !== mode) {
      const items = [mode];
      cResult[4] = mode;
      cResult[5] = items;
      let tmp8 = items;
    } else {
      tmp8 = cResult[5];
    }
    const effect = obj3.useEffect(tmp7, tmp8);
    return mode === VoicePanelPIPModes.IN_APP && ref(5801)(ref);
  }
  const fn = function l() {
    if (timeout === constants.IN_APP) {
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
  };
  cResult[1] = tmp6;
  cResult[2] = mode;
  cResult[3] = fn;
  tmp7 = fn;
}) : (() => {
  mode = mode(17487).usePIPState().mode;
  const ref = noop.useRef(mode === VoicePanelPIPModes.IN_APP);
  dependencyMap = _slicedToArray(noop.useState({}), 2)[1];
  const items = [mode];
  const effect = noop.useEffect(() => {
    if (timeout === constants.IN_APP) {
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
  const obj = mode(17487);
  return mode === VoicePanelPIPModes.IN_APP && ref(5801)(ref);
});
ReactCompilerGating = fn(558);
let closure_28 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  const cResult = c.c(8);
  children = children.children;
  const tmp4 = closure_27();
  const tmp5 = closure_26(tmp4);
  if (cResult[0] !== children) {
    const obj2 = { collapsable: false, style: hasOwnProperty.absoluteFill, children };
    const tmp10 = <timestampProducer collapsable={false} style={hasOwnProperty.absoluteFill}>{children}</timestampProducer>;
    cResult[0] = children;
    cResult[1] = tmp10;
    let tmp6 = tmp10;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === tmp4) {
    if (cResult[3] === tmp6) {
      let tmp11 = cResult[4];
    }
    if (cResult[5] === tmp5) {
      if (cResult[6] === tmp11) {
        let tmp13 = cResult[7];
      }
      return tmp13;
    }
    const obj3 = { style: tmp5, children: tmp11 };
    const tmp16 = jsx(ReanimatedNativeViewDefault, { style: tmp5, children: tmp11 });
    cResult[5] = tmp5;
    cResult[6] = tmp11;
    cResult[7] = tmp16;
    tmp13 = tmp16;
  }
  const tmp12 = jsx(Suspender.Freeze, { freeze: tmp4, children: tmp6 });
  cResult[2] = tmp4;
  cResult[3] = tmp6;
  cResult[4] = tmp12;
  tmp11 = tmp12;
}) : ((children) => {
  children = children.children;
  const tmp = closure_27();
  const freeze = tmp;
  const tmp2 = closure_26(tmp);
  const style = tmp2;
  const items = [tmp2, tmp, children];
  return noop.useMemo(() => {
    const obj = { style, children: null };
    const obj2 = { freeze, children: <timestampProducer collapsable={false} style={hasOwnProperty.absoluteFill}>{children}</timestampProducer> };
    obj.children = jsx(Suspender.Freeze, { freeze, children: <timestampProducer collapsable={false} style={hasOwnProperty.absoluteFill}>{children}</timestampProducer> });
    return jsx(ReanimatedNativeViewDefault, { style, children: null });
  }, items);
});
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCardView.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((viewableChunks) => {
  const cResult = channelId(568).c(11);
  channelId = noop.useContext(stateFromStoresArray(12419)).channelId;
  const obj = channelId(568);
  const tmp4 = closure_23(viewableChunks.viewableChunks);
  const chunkedParticipants = channelId(17582).useChunkedParticipants(channelId, tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelRTCStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function s() {
      const participants = ChannelRTCStore.getParticipants(channelId);
      return participants.filter((item) => closure_1_13(item));
    };
    const items1 = [channelId];
    cResult[1] = channelId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp9 = items1;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const obj3 = channelId(17582);
  stateFromStoresArray = channelId(504).useStateFromStoresArray(first, tmp8, tmp9);
  dependencyMap = obj2.useRef(stateFromStoresArray);
  if (cResult[4] !== stateFromStoresArray) {
    class S {
      constructor() {
        tmp2 = closure_2;
        tmp = closure_1;
        obj = closure_1(closure_2[27]);
        tmp3 = closure_2;
        tmp4 = closure_1;
        if (!obj.isEqual(closure_2.current, closure_1)) {
          tmpResult = tmp(tmp2[27]);
          differenceWithResult = tmpResult.differenceWith(tmp3.current, tmp4, (id, id2) => id.id === id2.id);
          num = 0;
          tmp5 = null;
          user = null;
          if (differenceWithResult.length > 0) {
            user = differenceWithResult[0].user;
          }
          if (null != user) {
            tmp7 = closure_0;
            AccessibilityAnnouncer = closure_0(tmp2[28]).AccessibilityAnnouncer;
            intl = closure_0(tmp2[29]).intl;
            obj1 = { username: null };
            obj1.username = user.username;
            announceResult = AccessibilityAnnouncer.announce(intl.formatToPlainString(closure_0(tmp2[29]).t["9NqwWZ"], obj1));
          }
        }
        tmp3.current = tmp4;
        return;
      }
    }
    cResult[4] = stateFromStoresArray;
    cResult[5] = S;
    const tmp11 = S;
  } else {
    class S {
      constructor() {
        tmp2 = closure_2;
        tmp = closure_1;
        obj = closure_1(closure_2[27]);
        tmp3 = closure_2;
        tmp4 = closure_1;
        if (!obj.isEqual(closure_2.current, closure_1)) {
          tmpResult = tmp(tmp2[27]);
          differenceWithResult = tmpResult.differenceWith(tmp3.current, tmp4, (id, id2) => id.id === id2.id);
          num = 0;
          tmp5 = null;
          user = null;
          if (differenceWithResult.length > 0) {
            user = differenceWithResult[0].user;
          }
          if (null != user) {
            tmp7 = closure_0;
            AccessibilityAnnouncer = closure_0(tmp2[28]).AccessibilityAnnouncer;
            intl = closure_0(tmp2[29]).intl;
            obj1 = { username: null };
            obj1.username = user.username;
            announceResult = AccessibilityAnnouncer.announce(intl.formatToPlainString(closure_0(tmp2[29]).t["9NqwWZ"], obj1));
          }
        }
        tmp3.current = tmp4;
        return;
      }
    }
  }
  if (cResult[6] === stateFromStoresArray) {
    class S {
      constructor() {
        tmp2 = closure_2;
        tmp = closure_1;
        obj = closure_1(closure_2[27]);
        tmp3 = closure_2;
        tmp4 = closure_1;
        if (!obj.isEqual(closure_2.current, closure_1)) {
          tmpResult = tmp(tmp2[27]);
          differenceWithResult = tmpResult.differenceWith(tmp3.current, tmp4, (id, id2) => id.id === id2.id);
          num = 0;
          tmp5 = null;
          user = null;
          if (differenceWithResult.length > 0) {
            user = differenceWithResult[0].user;
          }
          if (null != user) {
            tmp7 = closure_0;
            AccessibilityAnnouncer = closure_0(tmp2[28]).AccessibilityAnnouncer;
            intl = closure_0(tmp2[29]).intl;
            obj1 = { username: null };
            obj1.username = user.username;
            announceResult = AccessibilityAnnouncer.announce(intl.formatToPlainString(closure_0(tmp2[29]).t["9NqwWZ"], obj1));
          }
        }
        tmp3.current = tmp4;
        return;
      }
    }
    const effect = obj2.useEffect(tmp11, items2);
    if (cResult[9] !== chunkedParticipants) {
      class S {
        constructor() {
          tmp2 = closure_2;
          tmp = closure_1;
          obj = closure_1(closure_2[27]);
          tmp3 = closure_2;
          tmp4 = closure_1;
          if (!obj.isEqual(closure_2.current, closure_1)) {
            tmpResult = tmp(tmp2[27]);
            differenceWithResult = tmpResult.differenceWith(tmp3.current, tmp4, (id, id2) => id.id === id2.id);
            num = 0;
            tmp5 = null;
            user = null;
            if (differenceWithResult.length > 0) {
              user = differenceWithResult[0].user;
            }
            if (null != user) {
              tmp7 = closure_0;
              AccessibilityAnnouncer = closure_0(tmp2[28]).AccessibilityAnnouncer;
              intl = closure_0(tmp2[29]).intl;
              obj1 = { username: null };
              obj1.username = user.username;
              announceResult = AccessibilityAnnouncer.announce(intl.formatToPlainString(closure_0(tmp2[29]).t["9NqwWZ"], obj1));
            }
          }
          tmp3.current = tmp4;
          return;
        }
      }
      const obj4 = { children: null };
      const obj5 = { items: chunkedParticipants, renderItem: renderCard, getItemKey: getCardKey, lazyCleanUpDelay: 1000 };
      obj4.children = jsx(tmp(4471).TransitionGroup, { items: chunkedParticipants, renderItem: renderCard, getItemKey: getCardKey, lazyCleanUpDelay: 1000 });
      const tmp17 = <closure_28>{null}</closure_28>;
      cResult[9] = chunkedParticipants;
      cResult[10] = tmp17;
      const tmp13 = tmp17;
    } else {
      class S {
        constructor() {
          tmp2 = closure_2;
          tmp = closure_1;
          obj = closure_1(closure_2[27]);
          tmp3 = closure_2;
          tmp4 = closure_1;
          if (!obj.isEqual(closure_2.current, closure_1)) {
            tmpResult = tmp(tmp2[27]);
            differenceWithResult = tmpResult.differenceWith(tmp3.current, tmp4, (id, id2) => id.id === id2.id);
            num = 0;
            tmp5 = null;
            user = null;
            if (differenceWithResult.length > 0) {
              user = differenceWithResult[0].user;
            }
            if (null != user) {
              tmp7 = closure_0;
              AccessibilityAnnouncer = closure_0(tmp2[28]).AccessibilityAnnouncer;
              intl = closure_0(tmp2[29]).intl;
              obj1 = { username: null };
              obj1.username = user.username;
              announceResult = AccessibilityAnnouncer.announce(intl.formatToPlainString(closure_0(tmp2[29]).t["9NqwWZ"], obj1));
            }
          }
          tmp3.current = tmp4;
          return;
        }
      }
    }
    return tmp13;
  }
  items2 = [stateFromStoresArray, channelId];
  cResult[6] = stateFromStoresArray;
  cResult[7] = channelId;
  cResult[8] = items2;
}) : ((viewableChunks) => {
  let chunkedParticipants;
  let stateFromStoresArray;
  const channelId = noop.useContext(chunkedParticipants(stateFromStoresArray[14])).channelId;
  const tmp = closure_23(viewableChunks.viewableChunks);
  chunkedParticipants = channelId(stateFromStoresArray[25]).useChunkedParticipants(channelId, tmp);
  let obj = channelId(stateFromStoresArray[25]);
  const items = [ChannelRTCStore];
  const items1 = [channelId];
  stateFromStoresArray = channelId(stateFromStoresArray[26]).useStateFromStoresArray(items, () => {
    const participants = ChannelRTCStore.getParticipants(channelId);
    return participants.filter((item) => closure_1_13(item));
  }, items1);
  noop.useRef(stateFromStoresArray);
  const items2 = [stateFromStoresArray, channelId];
  const effect = noop.useEffect(() => {
    if (!obj.isEqual(ref.current, stateFromStoresArray)) {
      const differenceWithResult = _modDef12.differenceWith(tmp3.current, tmp4, (id, id2) => id.id === id2.id);
      let user = null;
      if (differenceWithResult.length > 0) {
        user = differenceWithResult[0].user;
      }
      if (null != user) {
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        const intl = util.intl;
        const obj2 = { username: user.username };
        AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t["9NqwWZ"], obj2));
      }
      const tmpResult = _modDef12;
    }
    ref.current = stateFromStoresArray;
  }, items2);
  const items3 = [chunkedParticipants];
  return noop.useMemo(() => {
    const obj = { children: jsx(native.TransitionGroup, { items: chunkedParticipants, renderItem: renderCard, getItemKey: getCardKey, lazyCleanUpDelay: 1000 }) };
    return <closure_28>{jsx(native.TransitionGroup, { items: chunkedParticipants, renderItem: renderCard, getItemKey: getCardKey, lazyCleanUpDelay: 1000 })}</closure_28>;
  }, items3);
}));
