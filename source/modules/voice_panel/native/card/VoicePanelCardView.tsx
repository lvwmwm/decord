// Module ID: 15813
// Function ID: 122047
// Name: getCardKey
// Dependencies: [57, 31, 27, 4143, 10015, 10013, 15770, 10018, 4148, 33, 15814, 3991, 9423, 1324, 10014, 3834, 689, 10021, 9891, 4542, 15774, 5122, 7589, 4489, 15765, 566, 22, 3843, 1212, 4476, 2]

// Module 15813 (getCardKey)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "AccessibilityAnnouncer";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import VoicePanelModes from "VoicePanelModes";
import { VoicePanelControlsModes } from "VoicePanelControlsModes";
import { VoicePanelPIPModes } from "VoicePanelPIPModes";
import { EDGE_GUTTER } from "CARD_SIZE";
import { isUserParticipant } from "ParticipantTypes";
import { jsx } from "jsxProd";

let UI_SHOW_HIDE_PHYSICS;
let VOICE_PANEL_CHUNK_DIVISOR;
let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
function getCardKey(type) {
  return "" + type.type + "-" + type.id;
}
function renderCard(arg0, item, transitionState, cleanUp) {
  return jsx(importDefault(15814), { item, transitionState, cleanUp }, arg0);
}
function CardContentFreezer(children) {
  children = children.children;
  let tmp = (function useLazyContentFreeze() {
    const mode = children(tmp2[20]).usePIPState().mode;
    const ref = outer1_4.useRef(mode === outer1_11.IN_APP);
    tmp2 = outer1_3(outer1_4.useState({}), 2)[1];
    const items = [mode];
    const effect = outer1_4.useEffect(() => {
      if (timeout === outer2_11.IN_APP) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => {
          if (!outer1_1.current) {
            outer1_1.current = true;
            outer1_2({});
          }
        }, 700);
        return () => {
          clearTimeout(closure_0);
        };
      } else {
        ref.current = false;
      }
    }, items);
    const obj = children(tmp2[20]);
    return mode === outer1_11.IN_APP && tmp(tmp2[21])(ref);
  })();
  const importDefault = tmp;
  let tmp2 = (function useSpacerStyles(freeze) {
    let closure_0 = freeze;
    tmp = tmp(tmp2[13])("VoicePanelCardView");
    const context = outer1_4.useContext(tmp(tmp2[14]));
    const connected = context.connected;
    const controlsSpecs = context.controlsSpecs;
    const safeArea = context.safeArea;
    const contentDimensions = context.contentDimensions;
    const windowDimensions = context.windowDimensions;
    const mode = context.mode;
    const focused = context.focused;
    const wrapperOffset = context.wrapperOffset;
    let obj = children(tmp2[15]);
    const token = obj.useToken(tmp(tmp2[16]).modules.mobile.VOICE_PANEL_GUTTER);
    const fn = function o() {
      let height;
      let paddingTop;
      const bound = Math.max(safeArea.get().bottom, outer2_12);
      const tmp2 = tmp(10021);
      ({ height, paddingTop } = tmp(10021)(safeArea.get(), token));
      let num = 1;
      let num2 = 0;
      let num3 = 1;
      let num4 = 0;
      if (connected.get()) {
        let height2 = paddingTop + contentDimensions.get().height + bound;
        if (height2 - windowDimensions.get().height < 8) {
          height2 = windowDimensions.get().height;
        }
        num2 = height2;
        num3 = num;
        num4 = 0;
        if (mode.get() !== outer2_9.PIP) {
          num2 = height2;
          num3 = num;
          num4 = 0;
          if (controlsSpecs.get().mode !== outer2_10.HIDDEN) {
            num2 = height2;
            num3 = num;
            num4 = 0;
            if (null == focused.get()) {
              const diff = height2 - height - outer2_12;
              const diff1 = diff - controlsSpecs.get().height - bound;
              const diff2 = windowDimensions.get().height - paddingTop - bound;
              const diff3 = windowDimensions.get().height - height;
              const diff4 = diff3 - controlsSpecs.get().height - bound;
              if (contentDimensions.get().height > diff1) {
                let result = diff1 / contentDimensions.get().height;
              } else {
                let obj = windowDimensions;
                const width = windowDimensions.get().width;
                if (tmp) {
                  result = width / obj.get().width;
                } else {
                  const diff5 = width - 48;
                  result = diff5 / obj.get().width;
                }
              }
              let tmp24 = contentDimensions.get().height < diff2;
              if (tmp24) {
                tmp24 = contentDimensions.get().height > diff4;
              }
              let diff6 = height;
              if (tmp24) {
                const result1 = (diff2 - contentDimensions.get().height) / 2;
                diff6 = height - (result1 - (diff4 - contentDimensions.get().height * result) / 2) * result;
              }
              if (contentDimensions.get().height > diff1) {
                let sum = diff6 + (height2 * result - height2) / 2;
              } else {
                sum = diff6 + (diff1 - (windowDimensions.get().height - paddingTop - bound)) / 2;
              }
              paddingTop = paddingTop * result;
              const diff7 = sum - paddingTop;
            }
          }
        }
        const tmp4 = paddingTop;
      }
      obj = { position: "relative", width: windowDimensions.get().width, height: tmp(9891)(num2) };
      obj = {};
      const tmp2Result = tmp(10021)(safeArea.get(), token);
      const sum1 = num4 + wrapperOffset.get().y;
      if (!wrapperOffset.get().gestureActive) {
        if (mode.get() !== outer2_9.PIP) {
          let tmp38 = outer2_15;
        }
        obj.translateY = obj4.withSpring(sum1, tmp38);
        const items = [obj, ];
        const obj1 = { scale: children(4542).withSpring(num3, outer2_15) };
        items[1] = obj1;
        obj.transform = items;
        if (closure_0) {
          num = 0;
        }
        obj.opacity = num;
        return obj;
      }
      tmp38 = outer2_8;
    };
    obj = { controlsSpecs, VoicePanelControlsModes: outer1_10, safeArea, EDGE_GUTTER: outer1_12, calculateVoicePanelHeaderSpecs: tmp(tmp2[17]), edgeGutter: token, connected, contentDimensions, windowDimensions, mode, VoicePanelModes: outer1_9, focused, isRefreshEnabled: tmp, roundToNearestPixel: tmp(tmp2[18]), withSpring: children(tmp2[19]).withSpring, wrapperOffset, LAYOUT_PHYSICS: outer1_8, SCALE_PHYSICS: outer1_15, freeze };
    fn.__closure = obj;
    fn.__workletHash = 495797244676;
    fn.__initData = outer1_19;
    return children(tmp2[11]).useAnimatedStyle(fn);
  })(tmp);
  const dependencyMap = tmp2;
  let items = [tmp2, tmp, children];
  return importAllResult.useMemo(() => {
    let obj = { style: tmp2 };
    tmp = tmp(tmp2[22]);
    obj = { freeze: tmp };
    obj = { collapsable: false, style: outer1_5.absoluteFill, children };
    obj.children = outer1_14(outer1_6, obj);
    obj.children = outer1_14(children(tmp2[23]).Freeze, obj);
    return outer1_14(tmp, obj);
  }, items);
}
({ StyleSheet: closure_5, View: closure_6 } = get_ActivityIndicator);
({ LAYOUT_PHYSICS: closure_8, VoicePanelModes: closure_9 } = VoicePanelModes);
({ UI_SHOW_HIDE_PHYSICS, VOICE_PANEL_CHUNK_DIVISOR } = VoicePanelModes);
let obj = {};
const merged = Object.assign(UI_SHOW_HIDE_PHYSICS);
obj["mass"] = 1;
obj["restSpeedThreshold"] = 0.00001;
let closure_16 = { start: 0, end: VOICE_PANEL_CHUNK_DIVISOR };
let closure_17 = { code: "function VoicePanelCardViewTsx1(){const{viewableChunks}=this.__closure;return viewableChunks.get();}" };
let closure_18 = { code: "function VoicePanelCardViewTsx2(newChunks,previous){const{cheapWorkletShallowEqual,runOnJS,updateValueIfChange}=this.__closure;if(cheapWorkletShallowEqual(newChunks,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(updateValueIfChange)(newChunks);}" };
let closure_19 = { code: "function VoicePanelCardViewTsx3(){const{controlsSpecs,VoicePanelControlsModes,safeArea,EDGE_GUTTER,calculateVoicePanelHeaderSpecs,edgeGutter,connected,contentDimensions,windowDimensions,mode,VoicePanelModes,focused,isRefreshEnabled,roundToNearestPixel,withSpring,wrapperOffset,LAYOUT_PHYSICS,SCALE_PHYSICS,freeze}=this.__closure;const hidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;let height=0;let scale=1;let top=0;const safeAreaBottom=Math.max(safeArea.get().bottom,EDGE_GUTTER);const{height:headerBarHeight,paddingTop:safeAreaTop}=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);if(connected.get()){height+=safeAreaTop;height+=contentDimensions.get().height;height+=safeAreaBottom;if(height-windowDimensions.get().height<8){height=windowDimensions.get().height;}if(mode.get()!==VoicePanelModes.PIP&&!hidden&&focused.get()==null){const targetHeight=height-headerBarHeight-EDGE_GUTTER-controlsSpecs.get().height-safeAreaBottom;const fullView=windowDimensions.get().height-safeAreaTop-safeAreaBottom;const controlsView=windowDimensions.get().height-headerBarHeight-controlsSpecs.get().height-safeAreaBottom;top=headerBarHeight;scale=function(){if(contentDimensions.get().height>targetHeight){return targetHeight/contentDimensions.get().height;}return isRefreshEnabled?windowDimensions.get().width/windowDimensions.get().width:(windowDimensions.get().width-48)/windowDimensions.get().width;}();if(contentDimensions.get().height<fullView&&contentDimensions.get().height>controlsView){const offsetOriginal=(fullView-contentDimensions.get().height)/2;const scaledContent=contentDimensions.get().height*scale;const scaledOffset=(controlsView-scaledContent)/2;top-=(offsetOriginal-scaledOffset)*scale;}if(contentDimensions.get().height>targetHeight){top+=(height*scale-height)/2;}else{top+=(targetHeight-(windowDimensions.get().height-safeAreaTop-safeAreaBottom))/2;}top-=safeAreaTop*scale;}}return{position:'relative',width:windowDimensions.get().width,height:roundToNearestPixel(height),transform:[{translateY:withSpring(top+wrapperOffset.get().y,wrapperOffset.get().gestureActive||mode.get()===VoicePanelModes.PIP?LAYOUT_PHYSICS:SCALE_PHYSICS)},{scale:withSpring(scale,SCALE_PHYSICS)}],opacity:freeze?0:1};}" };
const memoResult = importAllResult.memo(function VoicePanelCardView(viewableChunks) {
  const channelId = importAllResult.useContext(chunkedParticipants(stateFromStoresArray[14])).channelId;
  let tmp = (function useViewableChunkState(viewableChunks) {
    let closure_0 = viewableChunks;
    let tmp = ref(outer1_4.useState(outer1_16), 2);
    let closure_1 = tmp[1];
    const callback = outer1_4.useCallback((arg0) => {
      let closure_0 = arg0;
      callback((start) => {
        let tmp = start;
        if (start.start !== closure_0.start) {
          tmp = closure_0;
        }
        return tmp;
      });
    }, []);
    let obj = channelId(stateFromStoresArray[11]);
    const fn = function h() {
      return viewableChunks.get();
    };
    fn.__closure = { viewableChunks };
    fn.__workletHash = 1074173860641;
    fn.__initData = outer1_17;
    const fn2 = function s(safeAreaState, safeAreaState2) {
      let tmp;
      if (null != safeAreaState2) {
        tmp = safeAreaState2;
      }
      if (!obj.cheapWorkletShallowEqual(safeAreaState, tmp)) {
        channelId(stateFromStoresArray[11]).runOnJS(callback)(safeAreaState);
        const obj2 = channelId(stateFromStoresArray[11]);
      }
    };
    obj = { cheapWorkletShallowEqual: channelId(stateFromStoresArray[12]).cheapWorkletShallowEqual, runOnJS: channelId(stateFromStoresArray[11]).runOnJS, updateValueIfChange: callback };
    fn2.__closure = obj;
    fn2.__workletHash = 13543715159803;
    fn2.__initData = outer1_18;
    const animatedReaction = obj.useAnimatedReaction(fn, fn2);
    return tmp[0];
  })(viewableChunks.viewableChunks);
  chunkedParticipants = channelId(stateFromStoresArray[24]).useChunkedParticipants(channelId, tmp);
  let obj = channelId(stateFromStoresArray[24]);
  const items = [_isNativeReflectConstruct];
  const items1 = [channelId];
  stateFromStoresArray = channelId(stateFromStoresArray[25]).useStateFromStoresArray(items, () => {
    const participants = outer1_7.getParticipants(channelId);
    return participants.filter((arg0) => outer2_13(arg0));
  }, items1);
  let _slicedToArray = importAllResult.useRef(stateFromStoresArray);
  const items2 = [stateFromStoresArray, channelId];
  const effect = importAllResult.useEffect(() => {
    let obj = chunkedParticipants(stateFromStoresArray[26]);
    if (!obj.isEqual(ref.current, stateFromStoresArray)) {
      const differenceWithResult = chunkedParticipants(stateFromStoresArray[26]).differenceWith(ref.current, stateFromStoresArray, (id, id2) => id.id === id2.id);
      let user = null;
      if (differenceWithResult.length > 0) {
        user = differenceWithResult[0].user;
      }
      if (null != user) {
        const AccessibilityAnnouncer = channelId(stateFromStoresArray[27]).AccessibilityAnnouncer;
        const intl = channelId(stateFromStoresArray[28]).intl;
        obj = { username: user.username };
        AccessibilityAnnouncer.announce(intl.formatToPlainString(channelId(stateFromStoresArray[28]).t["9NqwWZ"], obj));
      }
      const obj2 = chunkedParticipants(stateFromStoresArray[26]);
    }
    ref.current = stateFromStoresArray;
  }, items2);
  const items3 = [chunkedParticipants];
  return importAllResult.useMemo(() => {
    obj = { children: outer1_14(channelId(stateFromStoresArray[29]).TransitionGroup, obj) };
    obj = { items: chunkedParticipants, renderItem: outer1_21, getItemKey: outer1_20, lazyCleanUpDelay: 1000 };
    return outer1_14(outer1_22, obj);
  }, items3);
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCardView.tsx");

export default memoResult;
