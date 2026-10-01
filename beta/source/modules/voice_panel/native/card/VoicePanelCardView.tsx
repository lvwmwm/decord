// Module ID: 16955
// Function ID: 16956
// Name: VoicePanelCardView
// Dependencies: [32, 19, 17, 4852, 11755, 11753, 16913, 11758, 4857, 21, 16956, 4566, 8853, 11754, 4531, 576, 11759, 10456, 5280, 16916, 5898, 6494, 5234, 16906, 504, 12, 4541, 1115, 4540, 2]

// Module 16955 (VoicePanelCardView)
import _modDef12 from "module_12" /* 12 */;
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1115 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4541 */;
import CallConstants from "CallConstants" /* 4857 */;
import react2 from "react" /* 5234 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 6494 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11753 */;
import VoicePanelCardConstants from "VoicePanelCardConstants" /* 11758 */;
import VoicePanelPIPConstants from "VoicePanelPIPConstants" /* 16913 */;
import VoicePanelCardDefault from "VoicePanelCard" /* 16956 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4852 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11755 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let UI_SHOW_HIDE_PHYSICS;
let VOICE_PANEL_CHUNK_DIVISOR;
let c9;
let hasOwnProperty;
let metroImportAll;
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
  children = children.children;
  importDefault = undefined;
  let animatedStyle;
  let tmp = children;
  const tmp2 = animatedStyle;
  SCALE_PHYSICS = children(animatedStyle[19]);
  let mode = SCALE_PHYSICS.usePIPState().mode;
  const obj2 = react;
  const ref = react.useRef(mode === VoicePanelPIPModes.IN_APP);
  let closure_2 = _slicedToArray(react.useState({}), 2)[1];
  let items = [mode];
  const effect = react.useEffect(() => {
    let closure_0;
    let timeout;
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
      const tmp = ref;
      ref.current = false;
    }
  }, items);
  let tmp5 = importDefault;
  const tmp6 = mode === VoicePanelPIPModes.IN_APP && require("useRefValue")(ref);
  importDefault = tmp6;
  let closure_0 = tmp6;
  const context = obj2.useContext(tmp5(tmp2[13]));
  const connected = context.connected;
  const controlsSpecs = context.controlsSpecs;
  const safeArea = context.safeArea;
  const contentDimensions = context.contentDimensions;
  const windowDimensions = context.windowDimensions;
  const mode2 = context.mode;
  const focused = context.focused;
  const wrapperOffset = context.wrapperOffset;
  const tmpResult = tmp(tmp2[14]);
  const token = tmpResult.useToken(tmp5(tmp2[15]).modules.mobile.VOICE_PANEL_GUTTER);
  const fn = function o() {
    let height;
    let paddingTop;
    let tmp20Result;
    const mode = controlsSpecs.get().mode;
    const HIDDEN = constants2.HIDDEN;
    const bound = Math.max(safeArea.get().bottom, EDGE_GUTTER);
    const tmp5 = connected(animatedStyle[16]);
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
      num2 = 0;
      num3 = num;
      num4 = height2;
      if (mode2.get() !== constants.PIP) {
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
            const tmp16 = contentDimensions.get().height < diff2 && contentDimensions.get().height > diff4;
            if (tmp16) {
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
      }
    }
    size = { position: "relative", width: windowDimensions.get().width, height: tmp3(tmp4[17])(num4), transform: null, opacity: null };
    const withSpring = children(animatedStyle[18]).withSpring;
    children(animatedStyle[18]);
    const sum1 = num2 + wrapperOffset.get().y;
    const tmp20 = children;
    if (!wrapperOffset.get().gestureActive) {
      let tmp25;
      if (mode2.get() !== constants.PIP) {
        tmp25 = SCALE_PHYSICS;
      }
      const items = [{ translateY: withSpring(sum1, tmp25) }, ];
      const obj4 = { translateY: withSpring(sum1, tmp25) };
      const obj5 = { scale: tmp20Result.withSpring(num3, SCALE_PHYSICS) };
      items[1] = obj5;
      size.transform = items;
      tmp20Result = tmp20(animatedStyle[18]);
      const tmp27 = closure_0;
      if (tmp27) {
        num = 0;
      }
      size.opacity = num;
      return size;
    }
    tmp25 = LAYOUT_PHYSICS;
  };
  const tmpResult2 = tmp(tmp2[11]);
  const obj3 = { controlsSpecs, VoicePanelControlsModes, safeArea, EDGE_GUTTER, calculateVoicePanelHeaderSpecs: tmp5(tmp2[16]), edgeGutter: token, connected, contentDimensions, windowDimensions, mode: mode2, VoicePanelModes, focused, roundToNearestPixel: tmp5(tmp2[17]), withSpring: tmp(tmp2[18]).withSpring, wrapperOffset, LAYOUT_PHYSICS, SCALE_PHYSICS, freeze: tmp6 };
  fn.__closure = obj3;
  fn.__workletHash = 15194344033500;
  fn.__initData = __initData3;
  animatedStyle = tmpResult2.useAnimatedStyle(fn);
  const items1 = [animatedStyle, tmp6, children];
  return obj2.useMemo(() => {
    ReanimatedNativeViewDefault;
    const Freeze = react2.Freeze;
    return <tmp style={animatedStyle}>{null}</tmp>;
  }, items1);
}
let _slicedToArray = _slicedToArray_mod;
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
({ LAYOUT_PHYSICS: metroImportAll, VoicePanelModes: c9, UI_SHOW_HIDE_PHYSICS, VOICE_PANEL_CHUNK_DIVISOR } = VoicePanelConstants);
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const VoicePanelPIPModes = VoicePanelPIPConstants.VoicePanelPIPModes;
const EDGE_GUTTER = VoicePanelCardConstants.EDGE_GUTTER;
const isUserParticipant = CallConstants.isUserParticipant;
const jsx = Fragment.jsx;
let SCALE_PHYSICS = { mass: 1, restSpeedThreshold: 0.00001 };
const merged = Object.assign(UI_SHOW_HIDE_PHYSICS);
let closure_18 = { start: 0, end: VOICE_PANEL_CHUNK_DIVISOR };
const __initData = { code: "function VoicePanelCardViewTsx1(){const{viewableChunks}=this.__closure;return viewableChunks.get();}" };
const __initData2 = { code: "function VoicePanelCardViewTsx2(newChunks,previous){const{cheapWorkletShallowEqual,runOnJS,updateValueIfChange}=this.__closure;if(cheapWorkletShallowEqual(newChunks,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(updateValueIfChange)(newChunks);}" };
const __initData3 = { code: "function VoicePanelCardViewTsx3(){const{controlsSpecs,VoicePanelControlsModes,safeArea,EDGE_GUTTER,calculateVoicePanelHeaderSpecs,edgeGutter,connected,contentDimensions,windowDimensions,mode,VoicePanelModes,focused,roundToNearestPixel,withSpring,wrapperOffset,LAYOUT_PHYSICS,SCALE_PHYSICS,freeze}=this.__closure;const hidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;let height=0;let scale=1;let top=0;const safeAreaBottom=Math.max(safeArea.get().bottom,EDGE_GUTTER);const{height:headerBarHeight,paddingTop:safeAreaTop}=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);if(connected.get()){height+=safeAreaTop;height+=contentDimensions.get().height;height+=safeAreaBottom;if(height-windowDimensions.get().height<8){height=windowDimensions.get().height;}if(mode.get()!==VoicePanelModes.PIP&&!hidden&&focused.get()==null){const targetHeight=height-headerBarHeight-EDGE_GUTTER-controlsSpecs.get().height-safeAreaBottom;const fullView=windowDimensions.get().height-safeAreaTop-safeAreaBottom;const controlsView=windowDimensions.get().height-headerBarHeight-controlsSpecs.get().height-safeAreaBottom;top=headerBarHeight;scale=function(){if(contentDimensions.get().height>targetHeight){return targetHeight/contentDimensions.get().height;}return 1;}();if(contentDimensions.get().height<fullView&&contentDimensions.get().height>controlsView){const offsetOriginal=(fullView-contentDimensions.get().height)/2;const scaledContent=contentDimensions.get().height*scale;const scaledOffset=(controlsView-scaledContent)/2;top-=(offsetOriginal-scaledOffset)*scale;}if(contentDimensions.get().height>targetHeight){top+=(height*scale-height)/2;}else{top+=(targetHeight-(windowDimensions.get().height-safeAreaTop-safeAreaBottom))/2;}top-=safeAreaTop*scale;}}return{position:'relative',width:windowDimensions.get().width,height:roundToNearestPixel(height),transform:[{translateY:withSpring(top+wrapperOffset.get().y,wrapperOffset.get().gestureActive||mode.get()===VoicePanelModes.PIP?LAYOUT_PHYSICS:SCALE_PHYSICS)},{scale:withSpring(scale,SCALE_PHYSICS)}],opacity:freeze?0:1};}" };
const memoResult = react.memo(function VoicePanelCardView(viewableChunks) {
  let c1;
  let ref;
  let tmp2;
  viewableChunks = viewableChunks.viewableChunks;
  let chunkedParticipants;
  let stateFromStoresArray;
  _slicedToArray = undefined;
  const channelId = react.useContext(chunkedParticipants(stateFromStoresArray[13])).channelId;
  c1 = undefined;
  let tmp = _slicedToArray(react.useState(closure_18), 2);
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
  let obj = channelId(stateFromStoresArray[11]);
  const fn = function c() {
    return viewableChunks.get();
  };
  fn.__closure = { viewableChunks };
  fn.__workletHash = 1074173860641;
  fn.__initData = __initData;
  const fn2 = function s(safeAreaState, current) {
    const cheapWorkletShallowEqual = channelId(stateFromStoresArray[12]).cheapWorkletShallowEqual;
    channelId(stateFromStoresArray[12]);
    const tmp = current;
    const tmp2 = channelId;
    const tmp3 = stateFromStoresArray;
    if (!cheapWorkletShallowEqual(safeAreaState, tmp)) {
      const tmp2Result = tmp2(tmp3[11]);
      tmp2Result.runOnJS(callback)(safeAreaState);
    }
  };
  let obj2 = { cheapWorkletShallowEqual: channelId(stateFromStoresArray[12]).cheapWorkletShallowEqual, runOnJS: channelId(stateFromStoresArray[11]).runOnJS, updateValueIfChange: callback };
  fn2.__closure = obj2;
  fn2.__workletHash = 13543715159803;
  fn2.__initData = __initData2;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  const obj3 = channelId(stateFromStoresArray[23]);
  chunkedParticipants = obj3.useChunkedParticipants(channelId, tmp2);
  const items = [ChannelRTCStore];
  const items1 = [channelId];
  const obj4 = channelId(stateFromStoresArray[24]);
  stateFromStoresArray = obj4.useStateFromStoresArray(items, () => {
    const participants = ChannelRTCStore.getParticipants(channelId);
    return participants.filter((item) => closure_1_13(item));
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
