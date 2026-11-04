// Module ID: 19508
// Function ID: 19509
// Name: VoicePanelCardView
// Dependencies: [32, 19, 17, 6978, 5898, 11410, 11408, 19377, 11413, 5815, 21, 19509, 1652, 10267, 1705, 11409, 504, 5732, 575, 11416, 12628, 5771, 11436, 19466, 7100, 6124, 19457, 12, 5150, 1113, 5207, 2]

// Module 19508 (VoicePanelCardView)
import _modDef12 from "module_12" /* 12 */;
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef1652 from "module_1652" /* 1652 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5150 */;
import CallConstants from "CallConstants" /* 5815 */;
import react2 from "react" /* 6124 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11408 */;
import VoicePanelCardConstants from "VoicePanelCardConstants" /* 11413 */;
import VoicePanelPIPConstants from "VoicePanelPIPConstants" /* 19377 */;
import VoicePanelCardDefault from "VoicePanelCard" /* 19509 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6978 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5898 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11410 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

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
  let connected;
  let contentDimensions;
  let controlsSpecs;
  let dockMinimizeProgress;
  let dockPressed;
  let focused;
  let freeze;
  let isDockEnabled2;
  let mode2;
  let mode3;
  let safeArea;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp38;
  let tmp39;
  let tmp40;
  let tmp41;
  let tmp42;
  let tmp43;
  let tmp44;
  let tmp45;
  let tmp46;
  let tmp47;
  let tmp48;
  let tmp49;
  let tmp50;
  let tmp51;
  let tmp7;
  let tmp8;
  let windowDimensions;
  let wrapperOffset;
  let wrapperOffset2;
  children = children.children;
  importDefault = undefined;
  let animatedStyle;
  _require = undefined;
  let ref;
  dependencyMap = undefined;
  let tmp = children;
  const tmp2 = animatedStyle;
  obj = children(animatedStyle[23]);
  const obj2 = react;
  const tmp3 = importDefault;
  let mode = obj.usePIPState().mode;
  const isDockEnabled = react.useContext(require("VoicePanelStateContext")).isDockEnabled;
  const context = react.useContext(require("VoicePanelStateContext"));
  ({ mode: mode2, dockMinimizeProgress, dockPressed, wrapperOffset } = context);
  let tmp5 = _slicedToArray;
  [tmp7, tmp8] = _slicedToArray(react.useState(false), 2);
  let items = [closure_23, isDockEnabled, mode2, closure_10, dockMinimizeProgress, , , ];
  const tmp6 = _slicedToArray(react.useState(false), 2);
  const useAnimatedReaction = children(animatedStyle[12]).useAnimatedReaction;
  children(animatedStyle[12]);
  items[5] = children(animatedStyle[22]).SHEET_MORPH_PHYSICS;
  items[6] = dockPressed;
  items[7] = wrapperOffset;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items;
  const tmp10 = closure_10;
  class VoicePanelCardViewTsx4 {
    constructor() {
      const tmp = c0 && _undefined.get() === _undefined2.PIP && _undefined3.get() >= 1 - _undefined4.restDisplacementThreshold && !_undefined5.get() && !_undefined6.get().gestureActive;
      return tmp;
    }
  }
  const items1 = [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18];
  VoicePanelCardViewTsx4.__closure = items1;
  VoicePanelCardViewTsx4.__workletHash = 13976123982266;
  VoicePanelCardViewTsx4.__initData = tmp11;
  const items2 = [closure_24, tmp(tmp2[14]).scheduleOnRN, tmp8];
  c0 = undefined;
  c1 = undefined;
  [tmp19, tmp20, tmp21] = items2;
  class VoicePanelCardViewTsx5 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        _undefined(c1, arg0);
      }
    }
  }
  const items3 = [tmp20, tmp21];
  VoicePanelCardViewTsx5.__closure = items3;
  VoicePanelCardViewTsx5.__workletHash = 5067780860290;
  VoicePanelCardViewTsx5.__initData = tmp19;
  const animatedReaction = useAnimatedReaction(VoicePanelCardViewTsx4, VoicePanelCardViewTsx5);
  if (!isDockEnabled) {
    let tmp23 = VoicePanelPIPModes;
  }
  _require = tmp7;
  ref = obj2.useRef(tmp7);
  dependencyMap = tmp5(obj2.useState({}), 2)[1];
  const items4 = [tmp7];
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
  }, items4);
  const tmp26 = tmp7 && tmp3(tmp2[24])(ref);
  importDefault = tmp26;
  const context1 = obj2.useContext(tmp3(tmp2[15]));
  ({ connected, controlsSpecs, safeArea, contentDimensions, windowDimensions, mode: mode3, focused, wrapperOffset: wrapperOffset2, isDockEnabled: isDockEnabled2 } = context1);
  const items5 = [RTCConnectionStore];
  const tmpResult = tmp(tmp2[16]);
  const stateFromStores = tmpResult.useStateFromStores(items5, () => connected.isConnected());
  const tmpResult3 = tmp(tmp2[17]);
  const token = tmpResult3.useToken(tmp3(tmp2[18]).modules.mobile.VOICE_PANEL_GUTTER);
  const items6 = [closure_22, controlsSpecs, VoicePanelControlsModes, safeArea, EDGE_GUTTER, , , , , , , , , , , , , , , , ];
  const useAnimatedStyle = tmp(tmp2[12]).useAnimatedStyle;
  tmp(tmp2[12]);
  items6[5] = tmp3(tmp2[19]);
  items6[6] = token;
  items6[7] = connected;
  items6[8] = contentDimensions;
  items6[9] = windowDimensions;
  items6[10] = isDockEnabled2;
  items6[11] = mode3;
  items6[12] = tmp10;
  items6[13] = focused;
  items6[14] = wrapperOffset2;
  items6[15] = obj;
  items6[16] = closure_9;
  items6[17] = stateFromStores;
  items6[18] = tmp3(tmp2[20]);
  items6[19] = tmp(tmp2[21]).withSpring;
  items6[20] = tmp26;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  let c7;
  let c8;
  let c9;
  let c10;
  let c11;
  let c12;
  let c13;
  let c14;
  let c15;
  let c16;
  let c17;
  let c18;
  let c19;
  [tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51] = items6;
  class VoicePanelCardViewTsx3 {
    constructor() {
      let height;
      let items;
      let paddingTop;
      let tmp23;
      const mode = _undefined.get().mode;
      const HIDDEN = _undefined2.HIDDEN;
      const bound = Math.max(_undefined3.get().bottom, c3);
      ({ height, paddingTop } = _undefined4(_undefined3.get(), c5));
      let num = 1;
      let num2 = 0;
      let num3 = 1;
      let num4 = 0;
      _undefined4(_undefined3.get(), c5);
      const tmp = c3;
      if (_undefined5.get()) {
        let height2 = paddingTop + _undefined6.get().height + bound;
        if (height2 - _undefined7.get().height < 8) {
          height2 = obj3.get().height;
        }
        const tmp5 = c9;
        if (tmp5) {
          num2 = 0;
          num3 = num;
          num4 = height2;
          if (mode !== HIDDEN) {
            num2 = 0;
            num3 = num;
            num4 = height2;
            if (null == _undefined10.get()) {
              let sum;
              const diff = height2 - height - tmp;
              const diff1 = diff - obj.get().height - bound;
              const diff2 = obj3.get().height - paddingTop - bound;
              const diff3 = obj3.get().height - height;
              const diff4 = diff3 - obj.get().height - bound;
              let result = num;
              if (_undefined6.get().height > diff1) {
                result = diff1 / obj2.get().height;
              }
              let diff5 = height;
              const tmp14 = _undefined6.get().height < diff2 && _undefined6.get().height > diff4;
              if (tmp14) {
                const result1 = (diff2 - obj2.get().height) / 2;
                diff5 = height - (result1 - (diff4 - obj2.get().height * result) / 2) * result;
              }
              if (_undefined6.get().height > diff1) {
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
      if (!c9) {
        num9 = _undefined11.get().y;
      }
      if (c9) {
        tmp23 = c14;
      } else {
        tmp23 = c15;
      }
      let str = "respect-motion-settings";
      if (c9) {
        str = "respect-motion-settings";
        if (!c16) {
          str = "animate-never";
        }
      }
      size = { position: "relative", width: _undefined7.get().width, height: _undefined12(num4), transform: items, opacity: num };
      items = [{ translateY: _undefined13(num2 + num9, tmp23, str) }, ];
      ({ translateY: _undefined13(num2 + num9, tmp23, str) });
      items[1] = { scale: _undefined13(num3, c14, str) };
      ({ scale: _undefined13(num3, c14, str) });
      const tmp25 = c19;
      if (tmp25) {
        num = 0;
      }
      return size;
    }
  }
  const items7 = [tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51];
  VoicePanelCardViewTsx3.__closure = items7;
  VoicePanelCardViewTsx3.__workletHash = 8022757380744;
  VoicePanelCardViewTsx3.__initData = tmp31;
  animatedStyle = useAnimatedStyle(VoicePanelCardViewTsx3);
  const items8 = [animatedStyle, tmp26, children];
  return obj2.useMemo(() => {
    const View = _modDef1652.View;
    const Freeze = react2.Freeze;
    return <View style={animatedStyle}>{null}</View>;
  }, items8);
}
let _slicedToArray = _slicedToArray_mod;
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
({ LAYOUT_PHYSICS: c9, VoicePanelModes: c10, UI_SHOW_HIDE_PHYSICS, VOICE_PANEL_CHUNK_DIVISOR } = VoicePanelConstants);
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const VoicePanelPIPModes = VoicePanelPIPConstants.VoicePanelPIPModes;
const EDGE_GUTTER = VoicePanelCardConstants.EDGE_GUTTER;
const isUserParticipant = CallConstants.isUserParticipant;
const jsx = Fragment.jsx;
let obj = { mass: 1 };
const merged = Object.assign(UI_SHOW_HIDE_PHYSICS);
let closure_19 = { start: 0, end: VOICE_PANEL_CHUNK_DIVISOR };
let closure_20 = { code: "(function VoicePanelCardViewTsx1(){let[viewableChunks]=this.__closure;return viewableChunks.get();})" };
let closure_21 = { code: "(function VoicePanelCardViewTsx2(newChunks,previous){let[cheapWorkletShallowEqual,scheduleOnRN,updateValueIfChange]=this.__closure;if(cheapWorkletShallowEqual(newChunks,previous!==null&&previous!==void 0?previous:undefined))return;scheduleOnRN(updateValueIfChange,newChunks);})" };
let closure_22 = { code: "(function VoicePanelCardViewTsx3(){let[controlsSpecs,VoicePanelControlsModes,safeArea,EDGE_GUTTER,calculateVoicePanelHeaderSpecs,edgeGutter,connected,contentDimensions,windowDimensions,isDockEnabled,mode,VoicePanelModes,focused,wrapperOffset,SCALE_PHYSICS,LAYOUT_PHYSICS,isRTCConnected,roundToNearestPixel,withSpring,freeze]=this.__closure;const hidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;let height=0;let scale=1;let top=0;const safeAreaBottom=Math.max(safeArea.get().bottom,EDGE_GUTTER);const{height:headerBarHeight,paddingTop:safeAreaTop}=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);if(connected.get()){height+=safeAreaTop;height+=contentDimensions.get().height;height+=safeAreaBottom;if(height-windowDimensions.get().height<8){height=windowDimensions.get().height;}if((isDockEnabled||mode.get()!==VoicePanelModes.PIP)&&!hidden&&focused.get()==null){const targetHeight=height-headerBarHeight-EDGE_GUTTER-controlsSpecs.get().height-safeAreaBottom;const fullView=windowDimensions.get().height-safeAreaTop-safeAreaBottom;const controlsView=windowDimensions.get().height-headerBarHeight-controlsSpecs.get().height-safeAreaBottom;top=headerBarHeight;scale=function(){if(contentDimensions.get().height>targetHeight){return targetHeight/contentDimensions.get().height;}return 1;}();if(contentDimensions.get().height<fullView&&contentDimensions.get().height>controlsView){const offsetOriginal=(fullView-contentDimensions.get().height)/2;const scaledContent=contentDimensions.get().height*scale;const scaledOffset=(controlsView-scaledContent)/2;top-=(offsetOriginal-scaledOffset)*scale;}if(contentDimensions.get().height>targetHeight){top+=(height*scale-height)/2;}else{top+=(targetHeight-(windowDimensions.get().height-safeAreaTop-safeAreaBottom))/2;}top-=safeAreaTop*scale;}}const offsetY=isDockEnabled?0:wrapperOffset.get().y;const translatePhysics=isDockEnabled||!wrapperOffset.get().gestureActive&&mode.get()!==VoicePanelModes.PIP?SCALE_PHYSICS:LAYOUT_PHYSICS;const motion=isDockEnabled&&!isRTCConnected?'animate-never':'respect-motion-settings';return{position:'relative',width:windowDimensions.get().width,height:roundToNearestPixel(height),transform:[{translateY:withSpring(top+offsetY,translatePhysics,motion)},{scale:withSpring(scale,SCALE_PHYSICS,motion)}],opacity:freeze?0:1};})" };
let closure_23 = { code: "(function VoicePanelCardViewTsx4(){let[isDockEnabled,mode,VoicePanelModes,dockMinimizeProgress,SHEET_MORPH_PHYSICS,dockPressed,wrapperOffset]=this.__closure;return isDockEnabled&&mode.get()===VoicePanelModes.PIP&&dockMinimizeProgress.get()>=1-SHEET_MORPH_PHYSICS.restDisplacementThreshold&&!dockPressed.get()&&!wrapperOffset.get().gestureActive;})" };
let closure_24 = { code: "(function VoicePanelCardViewTsx5(current,previous){let[scheduleOnRN,setIsDockFrozen]=this.__closure;if(current!==previous){scheduleOnRN(setIsDockFrozen,current);}})" };
const memoResult = react.memo(function VoicePanelCardView(viewableChunks) {
  let c0;
  let ref;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp3;
  let tmp7;
  let tmp8;
  let tmp9;
  let chunkedParticipants;
  let stateFromStoresArray;
  _slicedToArray = undefined;
  obj = react;
  let tmp = stateFromStoresArray;
  viewableChunks = viewableChunks.viewableChunks;
  const channelId = react.useContext(chunkedParticipants(stateFromStoresArray[15])).channelId;
  let tmp2 = _slicedToArray(react.useState(closure_19), 2);
  [tmp3, c0] = tmp2;
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
  const items = [closure_20, viewableChunks];
  c0 = undefined;
  [tmp7, tmp8] = items;
  const tmp6 = channelId(stateFromStoresArray[12]);
  class VoicePanelCardViewTsx1 {
    constructor() {
      return _undefined.get();
    }
  }
  const items1 = [tmp8];
  VoicePanelCardViewTsx1.__closure = items1;
  VoicePanelCardViewTsx1.__workletHash = 4293143028920;
  VoicePanelCardViewTsx1.__initData = tmp7;
  const items2 = [closure_21, , , ];
  const useAnimatedReaction = tmp6.useAnimatedReaction;
  items2[1] = channelId(tmp[13]).cheapWorkletShallowEqual;
  items2[2] = channelId(tmp[14]).scheduleOnRN;
  items2[3] = callback;
  c0 = undefined;
  let c1;
  let c2;
  [tmp9, tmp10, tmp11, tmp12] = items2;
  class VoicePanelCardViewTsx2 {
    constructor(arg0, arg1) {
      const tmp = arg1;
      const tmp2 = c0;
      if (!tmp2(arg0, tmp)) {
        _undefined(c2, arg0);
      }
    }
  }
  const items3 = [tmp10, tmp11, tmp12];
  VoicePanelCardViewTsx2.__closure = items3;
  VoicePanelCardViewTsx2.__workletHash = 9848593615087;
  VoicePanelCardViewTsx2.__initData = tmp9;
  const animatedReaction = useAnimatedReaction(VoicePanelCardViewTsx1, VoicePanelCardViewTsx2);
  const tmp5Result = channelId(tmp[26]);
  chunkedParticipants = tmp5Result.useChunkedParticipants(channelId, tmp3);
  const items4 = [ChannelRTCStore];
  const items5 = [channelId];
  const tmp5Result2 = channelId(tmp[16]);
  stateFromStoresArray = tmp5Result2.useStateFromStoresArray(items4, () => {
    const participants = ChannelRTCStore.getParticipants(channelId);
    return participants.filter((item) => closure_1_14(item));
  }, items5);
  _slicedToArray = obj.useRef(stateFromStoresArray);
  const items6 = [stateFromStoresArray, channelId];
  const effect = obj.useEffect(() => {
    obj = _modDef12;
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
  }, items6);
  const items7 = [chunkedParticipants];
  return obj.useMemo(() => <CardContentFreezer>{null}</CardContentFreezer>, items7);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCardView.tsx");

export default memoResult;
