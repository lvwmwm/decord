// Module ID: 15781
// Function ID: 121618
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 27, 4122, 1347, 4143, 8337, 10649, 10568, 1348, 4177, 4202, 4342, 10047, 10045, 653, 4155, 10256, 4148, 10048, 33, 15782, 3991, 9459, 664, 15783, 566, 3831, 10622, 1212, 15784, 15785, 8882, 10515, 15786, 1450, 1557, 15809, 10049, 10051, 22, 491, 1207, 682, 10424, 11137, 6837, 675, 8347, 10561, 15738, 4476, 15810, 4323, 4324, 3989, 5582, 15811, 15812, 3748, 15813, 15819, 15820, 15743, 1184, 15821, 10046, 4011, 2]
// Exports: default

// Module 15781 (_createForOfIteratorHelperLoose)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import trackActivityThermalStateNoticeShown from "trackActivityThermalStateNoticeShown";
import { AppState } from "dispatcher";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_createForOfIteratorHelperLoose";
import closure_8 from "_isNativeReflectConstruct";
import module_8337 from "module_8337";
import module_10649 from "module_10649";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import withEqualityFn from "withEqualityFn";
import VoicePanelModes from "VoicePanelModes";
import VoicePanelControlsModes from "VoicePanelControlsModes";
import ME from "ME";
import { OrientationLockState } from "items3";
import { ActivityPanelModes } from "ActivityPanelModes";
import { isActivityParticipant } from "ParticipantTypes";
import { MorphablePanelModes } from "MIN_PAN_GESTURE_MOVE";
import { jsx } from "_runPrimaryAppCommandOrJoinEmbeddedActivity";

let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function useLayoutManagerState(windowDimensions) {
  let items;
  let pushToTalk;
  windowDimensions = windowDimensions.windowDimensions;
  const safeArea = windowDimensions.safeArea;
  const contentDimensions = windowDimensions.contentDimensions;
  let isConnected = windowDimensions.isConnected;
  const layoutManager = windowDimensions.layoutManager;
  let c13;
  ({ items, pushToTalk } = windowDimensions);
  let tmp = isConnected(layoutManager.useState(() => {
    let height;
    let width;
    let obj = windowDimensions(contentDimensions[35]);
    windowDimensions = obj.getWindowDimensions();
    ({ width, height } = windowDimensions);
    obj = { width, height, landscape: width > height };
    return obj;
  }), 2);
  let size = tmp[0];
  let _isNativeReflectConstruct = tmp2;
  let obj = windowDimensions(contentDimensions[36]);
  const tmp3 = isConnected(layoutManager.useState(obj.getSafeAreaInsets()), 2);
  const rect = tmp3[0];
  let closure_8 = tmp4;
  const managerSubscription = windowDimensions(contentDimensions[38]).useManagerSubscription(layoutManager);
  const ref = layoutManager.useRef({ timeout: -1, layoutKey: managerSubscription, connected: isConnected, windowState: size, safeAreaState: rect, contentDimensions: { width: 0, height: 0 } });
  (function useUpdateLayoutManagerState(isConnected) {
    isConnected = isConnected.isConnected;
    const currentUpdatesRef = isConnected.currentUpdatesRef;
    const setWindowState = isConnected.setWindowState;
    const setSafeAreaState = isConnected.setSafeAreaState;
    const items = [currentUpdatesRef, isConnected, setWindowState, setSafeAreaState];
    const layoutEffect = layoutManager.useLayoutEffect(() => {
      if (currentUpdatesRef.current.connected !== isConnected) {
        currentUpdatesRef.current.connected = isConnected;
        setWindowState((safeAreaState) => {
          let height;
          let width;
          let windowState = safeAreaState;
          windowDimensions = windowDimensions(contentDimensions[35]).getWindowDimensions();
          ({ width, height } = windowDimensions);
          outer1_1.current.windowState = { width, height, landscape: width > height };
          const obj = windowDimensions(contentDimensions[35]);
          if (!obj2.cheapWorkletShallowEqual(safeAreaState, outer1_1.current.windowState)) {
            windowState = outer1_1.current.windowState;
          }
          return windowState;
        });
        setSafeAreaState((safeAreaState) => {
          outer1_1.current.safeAreaState = windowDimensions(contentDimensions[36]).getSafeAreaInsets();
          const obj = windowDimensions(contentDimensions[36]);
          if (!obj2.cheapWorkletShallowEqual(safeAreaState, outer1_1.current.safeAreaState)) {
            safeAreaState = outer1_1.current.safeAreaState;
          }
          return safeAreaState;
        });
      }
    }, items);
  })({ isConnected, currentUpdatesRef: ref, setWindowState: tmp[1], setSafeAreaState: tmp3[1] });
  const callback = layoutManager.useCallback(() => {
    clearTimeout(ref.current.timeout);
    ref.current.timeout = setTimeout(() => {
      clearTimeout(outer1_10.current.timeout);
      windowDimensions(contentDimensions[43]).batchUpdates(() => {
        outer2_6((safeAreaState2) => {
          let windowState = safeAreaState2;
          if (!obj.cheapWorkletShallowEqual(outer3_10.current.windowState, safeAreaState2)) {
            windowState = outer3_10.current.windowState;
          }
          return windowState;
        });
        outer2_8((safeAreaState2) => {
          let safeAreaState = safeAreaState2;
          if (!obj.cheapWorkletShallowEqual(outer3_10.current.safeAreaState, safeAreaState2)) {
            safeAreaState = outer3_10.current.safeAreaState;
          }
          return safeAreaState;
        });
      });
    }, 60);
  }, []);
  items = [callback];
  let layoutEffect = layoutManager.useLayoutEffect(() => {
    function updateSafeAreas(safeAreaInsets) {
      let obj = windowDimensions(contentDimensions[23]);
      if (!obj.cheapWorkletShallowEqual(outer1_10.current.safeAreaState, safeAreaInsets)) {
        obj = {};
        const merged = Object.assign(safeAreaInsets);
        outer1_10.current.safeAreaState = obj;
        outer1_11();
      }
    }
    function updateWindowDimensions() {
      let height;
      let width;
      let windowDimensions = arg0;
      if (arg0 === undefined) {
        let obj = windowDimensions(contentDimensions[35]);
        windowDimensions = obj.getWindowDimensions();
      }
      ({ width, height } = windowDimensions);
      obj = { width, height, landscape: width > height };
      if (!obj3.cheapWorkletShallowEqual(outer1_10.current.windowState, obj)) {
        outer1_10.current.windowState = obj;
        outer1_11();
      }
    }
    let closure_0 = safeArea(contentDimensions[44])(updateSafeAreas);
    updateSafeAreas(windowDimensions(contentDimensions[36]).getSafeAreaInsets());
    let closure_1 = safeArea(contentDimensions[45])(updateWindowDimensions);
    const result = updateWindowDimensions();
    return () => {
      callback();
      callback2();
    };
  }, items);
  const id = layoutManager.useId();
  const items1 = [isConnected, id];
  const layoutEffect1 = layoutManager.useLayoutEffect(() => {
    if (isConnected) {
      let state = ref.getState();
      const obj = { key: id, lockEnabled: true };
      let safeAreaDisableLock = state.requestSafeAreaDisableLock(obj);
      return () => {
        const state = ref.getState();
        const safeAreaDisableLock = state.requestSafeAreaDisableLock({ key: outer1_12, lockEnabled: false });
      };
    }
  }, items1);
  obj = { windowWidth: size.width, windowHeight: size.height, safeAreaLeft: rect.left, safeAreaRight: rect.right, safeAreaTop: rect.top, safeAreaBottom: rect.bottom, controlBarSize: pushToTalk ? closure_19 : closure_18 };
  const updateStateResult = layoutManager.updateState(items, obj);
  c13 = updateStateResult;
  const items2 = [contentDimensions, updateStateResult, managerSubscription, layoutManager, safeArea, rect, windowDimensions, size, isConnected];
  const layoutEffect2 = layoutManager.useLayoutEffect(() => {
    function executeLayoutManagerEffect() {
      return outer1_4.handleLayoutEffect();
    }
    ref.current.layoutKey = managerSubscription;
    let obj = windowDimensions(contentDimensions[22]);
    const fn = function e(arg0) {
      let contentState;
      let safeAreaState;
      let windowState;
      ({ windowState, safeAreaState, contentState } = arg0);
      let tmp = outer1_3;
      if (outer1_3) {
        tmp = !windowDimensions(contentDimensions[23]).cheapWorkletShallowEqual(outer1_2.get(), contentState);
        const obj = windowDimensions(contentDimensions[23]);
      }
      if (tmp) {
        const result = outer1_2.set(contentState);
      }
      if (!obj2.cheapWorkletShallowEqual(executeLayoutManagerEffect.get(), windowState)) {
        const result1 = executeLayoutManagerEffect.set(windowState);
      }
      obj2 = windowDimensions(contentDimensions[23]);
      if (!obj3.cheapWorkletShallowEqual(outer1_1.get(), safeAreaState)) {
        const result2 = outer1_1.set(safeAreaState);
      }
      obj3 = windowDimensions(contentDimensions[23]);
      windowDimensions(contentDimensions[22]).runOnJS(executeLayoutManagerEffect)();
    };
    obj = { isConnected, cheapWorkletShallowEqual: windowDimensions(contentDimensions[23]).cheapWorkletShallowEqual, contentDimensions, windowDimensions: executeLayoutManagerEffect, safeArea, runOnJS: windowDimensions(contentDimensions[22]).runOnJS, executeLayoutManagerEffect };
    fn.__closure = obj;
    fn.__workletHash = 13791383688018;
    fn.__initData = outer1_41;
    obj = { windowState: size, safeAreaState: rect, contentState: c13 };
    obj.runOnUI(fn)(obj);
  }, items2);
  const items3 = [layoutManager];
  const effect = layoutManager.useEffect(() => {
    function checkDimensions() {
      if (!c3) {
        const size = windowDimensions(contentDimensions[35]).getWindowDimensions();
        const width = size.width;
        const height = size.height;
        let timeout = height;
        const result = checkDimensions.checkDimensionsMismatch(width, height);
        let closure_2 = result;
        if (null != result) {
          const _setTimeout = setTimeout;
          timeout = setTimeout(() => {
            let height;
            let width;
            let obj = windowDimensions(contentDimensions[35]);
            windowDimensions = obj.getWindowDimensions();
            ({ width, height } = windowDimensions);
            let tmp2 = width === width;
            if (tmp2) {
              tmp2 = closure_1 === height;
            }
            if (tmp2) {
              if (null != checkDimensions.checkDimensionsMismatch(width, height)) {
                const outer1_3 = true;
                obj = { layout_width: closure_2.staleWidth, layout_height: closure_2.staleHeight, window_width: width, window_height: closure_1, was_dirty: closure_2.wasDirty };
                safeArea(contentDimensions[47]).track(outer3_22.VOICE_PANEL_LAYOUT_DESYNC, obj);
                closure_1 = null;
                const obj2 = safeArea(contentDimensions[47]);
              }
            }
          }, 250);
        }
        let obj = windowDimensions(contentDimensions[35]);
      }
    }
    if (!windowDimensions(contentDimensions[46]).isStable) {
      let _setInterval = setInterval;
      let interval = setInterval(checkDimensions, 1000);
      let c1 = null;
      let closure_2 = size.addEventListener("change", (arg0) => {
        if ("active" === arg0) {
          if (null == interval) {
            const _setInterval = setInterval;
            interval = setInterval(checkDimensions, 1000);
          }
        }
        if ("active" !== arg0) {
          const _clearInterval = clearInterval;
          clearInterval(interval);
          const _clearTimeout = clearTimeout;
          clearTimeout(c1);
          interval = null;
        }
      });
      let c3 = false;
      return () => {
        clearInterval(closure_0);
        clearTimeout(c1);
        closure_2.remove();
      };
    }
  }, items3);
  const layoutEffect3 = layoutManager.useLayoutEffect(() => () => clearTimeout(outer1_10.current.timeout), []);
}
({ VoicePanelModes: closure_16, getAnalyticsNameForVoicePanelMode: closure_17 } = VoicePanelModes);
({ CONTROLS_HEIGHT: closure_18, CONTROLS_HEIGHT_PTT: closure_19, CONTROLS_HIDE_TIMEOUT: closure_20, VoicePanelControlsModes: closure_21 } = VoicePanelControlsModes);
({ AnalyticEvents: closure_22, ComponentActions: closure_23, InputModes: closure_24 } = ME);
let closure_30 = { code: "function VoicePanelControllerTsx1(){const{focused,mode,connected}=this.__closure;var _focused$get;return[(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,mode.get(),connected.get()];}" };
let closure_31 = { code: "function VoicePanelControllerTsx2(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,handleAnimatedReaction}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[focusedParticipantId,voicePanelMode,connectedValue]=props;runOnJS(handleAnimatedReaction)({focusedParticipantId:focusedParticipantId,voicePanelMode:voicePanelMode,connectedValue:connectedValue});}" };
let closure_32 = 5 * require("set").Millis.MINUTE;
let closure_33 = { code: "function VoicePanelControllerTsx3(){const{focused,pipState}=this.__closure;var _focused$get;return[(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,pipState.id];}" };
let closure_34 = { code: "function VoicePanelControllerTsx4(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,handleStateUpdates}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[focusedId,pipParticipantId]=props;runOnJS(handleStateUpdates)({focusedId:focusedId,pipParticipantId:pipParticipantId});}" };
let closure_35 = { code: "function VoicePanelControllerTsx5(value){const{isFocusedVideoZoomed}=this.__closure;isFocusedVideoZoomed.set(value);}" };
let closure_36 = { code: "function VoicePanelControllerTsx6(){const{mode,VoicePanelModes,MorphablePanelModes}=this.__closure;switch(mode.get()){case VoicePanelModes.PANEL:{return MorphablePanelModes.PANEL;}case VoicePanelModes.PIP:{return MorphablePanelModes.PIP;}default:{return MorphablePanelModes.UNDEFINED;}}}" };
let closure_37 = { code: "function VoicePanelControllerTsx7(){const{mode}=this.__closure;return mode.get();}" };
let closure_38 = { code: "function VoicePanelControllerTsx8(value){const{VoicePanelModes,runOnJS,_queueHideControls,_clearHideControlsQueue}=this.__closure;if(value===VoicePanelModes.PANEL){runOnJS(_queueHideControls)();}else{runOnJS(_clearHideControlsQueue)();}}" };
let closure_39 = { code: "function VoicePanelControllerTsx9(){const{connected}=this.__closure;return connected.get();}" };
let closure_40 = { code: "function VoicePanelControllerTsx10(connected){const{updateSharedValueIfChanged,controlsSpecs,pushToTalk,CONTROLS_HEIGHT_PTT,CONTROLS_HEIGHT}=this.__closure;updateSharedValueIfChanged(controlsSpecs,{height:pushToTalk&&connected?CONTROLS_HEIGHT_PTT:CONTROLS_HEIGHT,pushToTalk:pushToTalk});}" };
let closure_41 = { code: "function VoicePanelControllerTsx11({windowState:windowState,safeAreaState:safeAreaState,contentState:contentState}){const{isConnected,cheapWorkletShallowEqual,contentDimensions,windowDimensions,safeArea,runOnJS,executeLayoutManagerEffect}=this.__closure;if(isConnected&&!cheapWorkletShallowEqual(contentDimensions.get(),contentState)){contentDimensions.set(contentState);}if(!cheapWorkletShallowEqual(windowDimensions.get(),windowState)){windowDimensions.set(windowState);}if(!cheapWorkletShallowEqual(safeArea.get(),safeAreaState)){safeArea.set(safeAreaState);}runOnJS(executeLayoutManagerEffect)();}" };
let closure_42 = { code: "function VoicePanelControllerTsx12(){const{connected,mode,sharedTransitionState}=this.__closure;return[connected.get(),mode.get(),sharedTransitionState.get()];}" };
let closure_43 = { code: "function VoicePanelControllerTsx13(props,previous){const{cheapWorkletArrayShallowEqual,TransitionStates,VoicePanelModes,runOnJS,setMode}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[isConnected,currentMode,currentTransitionState]=props;if(currentTransitionState===TransitionStates.YEETED){if(currentMode!==VoicePanelModes.DISMISSED){runOnJS(setMode)(VoicePanelModes.DISMISSED);}}else if(currentMode===VoicePanelModes.DISMISSED){var _previous$;let previousMode=(_previous$=previous===null||previous===void 0?void 0:previous[1])!==null&&_previous$!==void 0?_previous$:VoicePanelModes.PANEL;switch(previousMode){case VoicePanelModes.PANEL:case VoicePanelModes.PIP:if(!isConnected){previousMode=VoicePanelModes.PANEL;}break;default:previousMode=VoicePanelModes.PANEL;}runOnJS(setMode)(previousMode);}else if(!isConnected&&(previous===null||previous===void 0?void 0:previous[0])===true&&currentMode===VoicePanelModes.PIP){runOnJS(setMode)(VoicePanelModes.PANEL);}}" };
let closure_44 = { code: "function VoicePanelControllerTsx14(){const{mode,controlsSpecs}=this.__closure;return[mode.get(),controlsSpecs.get().mode];}" };
let closure_45 = { code: "function VoicePanelControllerTsx15(props,previous){const{cheapWorkletArrayShallowEqual,VoicePanelControlsModes,VoicePanelModes,runOnJS,dismissKeyboard}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[currentMode,currentControlsMode]=props;if(currentControlsMode!==VoicePanelControlsModes.DRAWER||currentMode!==VoicePanelModes.PANEL||(previous===null||previous===void 0?void 0:previous[0])!==VoicePanelModes.PANEL){runOnJS(dismissKeyboard)();}}" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/voice_panel/native/VoicePanelController.tsx");

export default function VoicePanelController(channelId) {
  let ActivityPanelModes;
  let c34;
  let c35;
  let children;
  let closure_12;
  let closure_14;
  let closure_16;
  let closure_17;
  let closure_18;
  let closure_19;
  let closure_20;
  let closure_21;
  let closure_22;
  let closure_23;
  let closure_31;
  let trackActivityThermalStateNoticeShown;
  let closure_7;
  let module_8337;
  let connected;
  let controlsSpecs;
  let focused;
  let isConnected;
  let items;
  let layoutManager;
  let manualFocusedItem;
  let safeArea;
  let setControlsMode;
  let transitionCleanUp;
  let windowDimensions;
  channelId = channelId.channelId;
  let guildId = channelId.guildId;
  let transitionState = channelId.transitionState;
  let closure_33;
  c34 = undefined;
  c35 = undefined;
  let closure_36;
  let ref;
  ({ children, transitionCleanUp } = channelId);
  let obj = channelId(first[26]);
  items = [safeArea];
  let stateFromStores = obj.useStateFromStores(items, () => safeArea.getMode() === controlsSpecs.PUSH_TO_TALK);
  first = callback(React.useState(() => {
    let tmp = guildId(first[57]);
    tmp = new tmp(safeArea.getMediaEngine());
    return tmp;
  }), 1)[0];
  let items1 = [first];
  let effect = React.useEffect(() => () => outer1_2.cleanUp(), items1);
  ({ items, isConnected } = guildId(first[58])(channelId, guildId));
  callback = (function useMountedCards(items, isConnected) {
    let closure_0 = items;
    let closure_1 = isConnected;
    const first = callback(outer1_4.useState(() => new Set()), 1)[0];
    items = [isConnected, items, first];
    const effect = outer1_4.useEffect(() => {
      if (closure_1) {
        let closure_0 = channelId(first[56]).runAfterInteractions(() => {
          let done;
          outer1_2.clear();
          const tmp2 = outer3_46(closure_0);
          let iter = tmp2();
          if (!iter.done) {
            do {
              let tmp3 = outer1_2;
              let addResult = outer1_2.add(iter.value.id);
              let iter2 = tmp2();
              iter = iter2;
              done = iter2.done;
            } while (!done);
          }
        }, 100);
        return () => {
          if (null != closure_0) {
            closure_0.cancel();
          }
        };
      } else {
        first.clear();
      }
    }, items);
    return first;
  })(items, isConnected);
  const tmp5 = (function useCoreSharedState(channelId, isConnected, items, stateFromStores) {
    let closure_0 = channelId;
    let closure_1 = items;
    let closure_2 = stateFromStores;
    const channel = outer1_12.getChannel(channelId);
    let isDMResult;
    if (null != channel) {
      isDMResult = channel.isDM();
    }
    let type;
    if (null != channel) {
      type = channel.type;
    }
    let obj1 = channelId(first[22]);
    const sharedValue = obj1.useSharedValue(isConnected);
    let obj2 = channelId(first[22]);
    const sharedValue1 = obj2.useSharedValue(outer1_16.PANEL);
    let obj3 = channelId(first[35]);
    const size = obj3.getWindowDimensions();
    let obj4 = channelId(first[22]);
    let obj = { width: size.width, height: size.height, landscape: size.width > size.height };
    const sharedValue2 = obj4.useSharedValue(obj);
    const rect = channelId(first[36]).getSafeAreaInsets();
    const obj7 = channelId(first[36]);
    const tmp2 = null != isDMResult && isDMResult;
    obj = {};
    const merged = Object.assign(rect);
    const sharedValue3 = channelId(first[22]).useSharedValue(obj);
    const obj8 = channelId(first[22]);
    obj1 = { windowWidth: size.width, connected: isConnected, safeAreaLeft: rect.left, safeAreaRight: rect.right };
    const maxPanelWidth = channelId(first[37]).getMaxPanelWidth(obj1);
    const obj10 = channelId(first[37]);
    obj2 = { drawerHeight: size.height, drawerWidth: maxPanelWidth };
    const obj12 = channelId(first[22]);
    obj2.drawerX = channelId(first[37]).getPanelX(size.width, maxPanelWidth);
    obj2.drawerY = size.height;
    obj2.pipX = -1;
    obj2.pipY = -1;
    obj2.animated = true;
    obj2.mode = outer1_16.PANEL;
    const sharedValue4 = obj12.useSharedValue(obj2);
    const obj14 = channelId(first[37]);
    const sharedValue5 = channelId(first[22]).useSharedValue(0);
    const obj15 = channelId(first[22]);
    const sharedValue6 = channelId(first[22]).useSharedValue(false);
    const obj16 = channelId(first[22]);
    const sharedValue7 = channelId(first[22]).useSharedValue(null);
    const obj17 = channelId(first[22]);
    const sharedValue8 = channelId(first[22]).useSharedValue(0);
    const obj18 = channelId(first[22]);
    const sharedValue9 = channelId(first[22]).useSharedValue(false);
    const obj19 = channelId(first[22]);
    const sharedValue10 = channelId(first[22]).useSharedValue(false);
    const fn = function c(arg0) {
      const result = sharedValue10.set(arg0);
    };
    fn.__closure = { isFocusedVideoZoomed: sharedValue10 };
    fn.__workletHash = 13885070318174;
    fn.__initData = c35;
    items = [sharedValue10];
    const callback = outer1_4.useCallback(fn, items);
    const obj20 = channelId(first[22]);
    const sharedValue11 = channelId(first[22]).useSharedValue(contentDimensions.useReducedMotion);
    const items1 = [sharedValue11];
    const effect = outer1_4.useEffect(() => {
      function onChange() {
        const result = outer1_7.set(contentDimensions.useReducedMotion);
      }
      let result = contentDimensions.addReactChangeListener(onChange);
      return () => {
        const result = contentDimensions.removeReactChangeListener(onChange);
      };
    }, items1);
    const obj21 = channelId(first[22]);
    const sharedValue12 = channelId(first[22]).useSharedValue({ gestureActive: false, x: 0, y: 0 });
    const obj22 = channelId(first[22]);
    class W {
      constructor() {
        value = _createForOfIteratorHelperLoose.get();
        if (wrapperDimensions.PANEL === value) {
          tmp5 = selectedMode;
          return selectedMode.PANEL;
        } else {
          tmp2 = wrapperDimensions;
          if (wrapperDimensions.PIP === value) {
            tmp4 = selectedMode;
            return selectedMode.PIP;
          } else {
            tmp3 = selectedMode;
            return selectedMode.UNDEFINED;
          }
        }
      }
    }
    obj3 = { mode: sharedValue1, VoicePanelModes: outer1_16, MorphablePanelModes: selectedMode };
    W.__closure = obj3;
    W.__workletHash = 931249605381;
    W.__initData = closure_36;
    const derivedValue = channelId(first[22]).useDerivedValue(W);
    first = callback(outer1_4.useState(() => {
      let tmp = guildId(first[38]);
      tmp = new tmp(closure_0);
      tmp.updateState(closure_1, { windowWidth: size.width, windowHeight: size.height, safeAreaLeft: rect.left, safeAreaRight: rect.right, safeAreaTop: rect.top, safeAreaBottom: rect.bottom, controlBarSize: closure_2 ? outer2_19 : outer2_18 });
      return tmp;
    }), 1)[0];
    const items2 = [first];
    const layoutEffect = outer1_4.useLayoutEffect(() => () => outer1_8.cleanUp(), items2);
    obj4 = { channelType: type, connected: sharedValue };
    const obj23 = channelId(first[22]);
    obj4.contentDimensions = channelId(first[22]).useSharedValue(first.getContentDimensions());
    obj4.dragScrolling = sharedValue6;
    obj4.focused = sharedValue7;
    obj4.isCall = tmp2;
    obj4.layoutManager = first;
    obj4.mode = sharedValue1;
    obj4.preJoinContentSize = sharedValue8;
    obj4.safeArea = sharedValue3;
    obj4.scrollPosition = sharedValue5;
    obj4.windowDimensions = sharedValue2;
    obj4.wrapperDimensions = sharedValue4;
    obj4.isFocusedVideoZoomed = sharedValue10;
    obj4.setIsFocusedVideoZoomed = callback;
    obj4.useReducedMotion = sharedValue11;
    obj4.wrapperOffset = sharedValue12;
    obj4.morphablePanelMode = derivedValue;
    obj4.panelCardStillInPIP = sharedValue9;
    return obj4;
  })(channelId, isConnected, items, stateFromStores);
  ({ channelType: trackActivityThermalStateNoticeShown, connected } = tmp5);
  const contentDimensions = tmp5.contentDimensions;
  ({ dragScrolling: closure_7, focused } = tmp5);
  ({ isCall: module_8337, layoutManager } = tmp5);
  let mode = tmp5.mode;
  ({ preJoinContentSize: closure_12, safeArea } = tmp5);
  ({ scrollPosition: closure_14, windowDimensions } = tmp5);
  ({ wrapperDimensions: closure_16, isFocusedVideoZoomed: closure_17, setIsFocusedVideoZoomed: closure_18, useReducedMotion: closure_19, wrapperOffset: closure_20, morphablePanelMode: closure_21, panelCardStillInPIP: closure_22 } = tmp5);
  let tmp6 = (function useControlsState(mode, isConnected, connected, stateFromStores) {
    let closure_0 = mode;
    let closure_1 = isConnected;
    let closure_2 = connected;
    let _createForOfIteratorHelperLoose = stateFromStores;
    channelId(first[22]);
    let obj = { mode: outer1_21.FLOATING_DEFAULT, locked: false };
    if (stateFromStores) {
      if (isConnected) {
        let tmp3 = outer1_19;
      }
      obj.height = tmp3;
      obj.pushToTalk = stateFromStores;
      const tmp2Result = tmp2(obj);
      let trackActivityThermalStateNoticeShown = tmp2Result;
      let closure_5 = outer1_4.useRef(-1);
      const callback = outer1_4.useCallback(() => {
        if (-1 !== ref.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(ref.current);
          ref.current = -1;
        }
      }, []);
      const items = [tmp2Result, callback, mode];
      const callback1 = outer1_4.useCallback(() => {
        callback();
        if (-1 === ref.current) {
          const _setTimeout = setTimeout;
          ref.current = setTimeout(() => {
            outer1_6();
            if (outer1_0.get() === outer3_16.PANEL) {
              let locked = outer1_4.get().mode !== outer3_21.FLOATING_DEFAULT;
              if (!locked) {
                locked = outer1_4.get().locked;
              }
              if (!locked) {
                const obj = { mode: outer3_21.HIDDEN };
                guildId(first[39])(outer1_4, obj);
              }
            }
          }, outer2_20);
        }
      }, items);
      const items1 = [tmp2Result, callback1];
      const memo = outer1_4.useMemo(() => {
        function _setControlsMode(mode, FLOATING_DEFAULT) {
          guildId(first[39])(outer1_4, { mode, returnMode: FLOATING_DEFAULT });
          outer1_7();
        }
        let obj = guildId(first[40]);
        let closure_0 = obj.debounce(_setControlsMode, 200);
        obj = {
          cancelControlsDebounce() {
            return closure_0.cancel();
          },
          setControlsMode(returnMode) {
            let debounce;
            let mode;
            ({ mode, debounce } = returnMode);
            if (debounce === undefined) {
              debounce = false;
            }
            let FLOATING_DEFAULT = returnMode.returnMode;
            if (FLOATING_DEFAULT === undefined) {
              FLOATING_DEFAULT = outer3_21.FLOATING_DEFAULT;
            }
            if (debounce) {
              obj(mode, FLOATING_DEFAULT);
            } else {
              obj.cancel();
              _setControlsMode(mode, FLOATING_DEFAULT);
            }
          }
        };
        return obj;
      }, items1);
      const cancelControlsDebounce = memo.cancelControlsDebounce;
      const setControlsMode = memo.setControlsMode;
      const _Set = Set;
      const set = new Set();
      let module_10649 = outer1_4.useRef(set);
      const items2 = [tmp2Result, callback1, callback];
      const items3 = [setControlsMode];
      const callback2 = outer1_4.useCallback((arg0) => {
        let v4Result = arg0;
        if (null == arg0) {
          let obj = channelId(first[41]);
          v4Result = obj.v4();
        }
        let closure_0 = v4Result;
        obj = {
          lock(mode) {
            const current = outer1_10.current;
            if (!current.has(closure_0)) {
              outer1_6();
              const current2 = outer1_10.current;
              current2.add(closure_0);
              const obj = { locked: outer1_10.current.size > 0 };
              if (null != mode) {
                obj.mode = mode;
              }
              guildId(first[39])(outer1_4, obj);
            }
          },
          unlock(mode) {
            const current = outer1_10.current;
            if (current.has(closure_0)) {
              const current2 = outer1_10.current;
              current2.delete(closure_0);
              const obj = { locked: outer1_10.current.size > 0 };
              if (null != mode) {
                obj.mode = mode;
              }
              guildId(first[39])(outer1_4, obj);
              outer1_7();
            }
          }
        };
        return obj;
      }, items2);
      const items4 = [setControlsMode, tmp2Result];
      const callback3 = outer1_4.useCallback(() => {
        let tmp = arg0;
        if (arg0 === undefined) {
          let obj = { debounce: false };
          tmp = obj;
        }
        obj = { mode: outer2_21.HIDDEN, debounce: tmp.debounce };
        setControlsMode(obj);
      }, items3);
      const callback4 = outer1_4.useCallback(() => {
        let obj = arg0;
        if (arg0 === undefined) {
          obj = {};
        }
        let flag = obj.debounce;
        if (flag === undefined) {
          flag = false;
        }
        obj = {};
        let FLOATING_DEFAULT = tmp2Result.get().returnMode;
        if (null == FLOATING_DEFAULT) {
          FLOATING_DEFAULT = outer2_21.FLOATING_DEFAULT;
        }
        obj.mode = FLOATING_DEFAULT;
        obj.debounce = flag;
        return setControlsMode(obj);
      }, items4);
      let obj1 = channelId(first[22]);
      const fn = function s() {
        return mode.get();
      };
      obj = { mode };
      fn.__closure = obj;
      fn.__workletHash = 12140218650562;
      fn.__initData = ref;
      const fn2 = function r(arg0) {
        if (arg0 === outer2_16.PANEL) {
          channelId(first[22]).runOnJS(callback1)();
          const obj2 = channelId(first[22]);
        } else {
          channelId(first[22]).runOnJS(callback)();
          const obj = channelId(first[22]);
        }
      };
      obj = { VoicePanelModes: outer1_16, runOnJS: channelId(first[22]).runOnJS, _queueHideControls: callback1, _clearHideControlsQueue: callback };
      fn2.__closure = obj;
      fn2.__workletHash = 7742206515980;
      fn2.__initData = outer1_38;
      const animatedReaction = obj1.useAnimatedReaction(fn, fn2);
      const items5 = [stateFromStores, tmp2Result, isConnected];
      const layoutEffect = outer1_4.useLayoutEffect(() => {
        const obj = {};
        if (_createForOfIteratorHelperLoose) {
          if (closure_1) {
            let tmp4 = outer2_19;
          }
          obj.height = tmp4;
          obj.pushToTalk = _createForOfIteratorHelperLoose;
          tmp(tmp2, obj);
        }
        tmp4 = outer2_18;
      }, items5);
      const fn3 = function c() {
        return connected.get();
      };
      obj1 = { connected };
      fn3.__closure = obj1;
      fn3.__workletHash = 16653595323628;
      fn3.__initData = outer1_39;
      const fn4 = function l(arg0) {
        const obj = {};
        if (_createForOfIteratorHelperLoose) {
          if (arg0) {
            let tmp4 = outer2_19;
          }
          obj.height = tmp4;
          obj.pushToTalk = _createForOfIteratorHelperLoose;
          tmp(tmp2, obj);
        }
        tmp4 = outer2_18;
      };
      let obj2 = { updateSharedValueIfChanged: guildId(first[39]), controlsSpecs: tmp2Result, pushToTalk: stateFromStores, CONTROLS_HEIGHT_PTT: outer1_19, CONTROLS_HEIGHT: outer1_18 };
      fn4.__closure = obj2;
      fn4.__workletHash = 2154816141018;
      fn4.__initData = outer1_40;
      const animatedReaction1 = channelId(first[22]).useAnimatedReaction(fn3, fn4);
      const items6 = [cancelControlsDebounce, callback];
      const layoutEffect1 = outer1_4.useLayoutEffect(() => () => {
        outer1_8();
        outer1_6();
      }, items6);
      const items7 = [setControlsMode];
      const effect = outer1_4.useEffect(() => {
        function closeTiV() {
          outer1_9({ mode: outer3_21.FLOATING_DEFAULT });
        }
        let ComponentDispatch = channelId(first[42]).ComponentDispatch;
        const subscription = ComponentDispatch.subscribe(outer2_23.VOICE_PANEL_TIV_CLOSE, closeTiV);
        return () => {
          const ComponentDispatch = channelId(first[42]).ComponentDispatch;
          ComponentDispatch.unsubscribe(outer3_23.VOICE_PANEL_TIV_CLOSE, closeTiV);
        };
      }, items7);
      const obj3 = { generateStateLocker: callback2, setControlsMode, showControls: callback4, hideControls: callback3, controlsSpecs: tmp2Result };
      return obj3;
    }
    tmp3 = outer1_18;
  })(mode, isConnected, connected, stateFromStores);
  ({ generateStateLocker: closure_23, controlsSpecs } = tmp6);
  let showControls = tmp6.showControls;
  ({ hideControls: ActivityPanelModes, setControlsMode } = tmp6);
  let tmp7 = (function useSelectedMode(channelId) {
    let trackActivityThermalStateNoticeShown;
    let controlsSpecs;
    let guildId;
    let mode;
    channelId = channelId.channelId;
    ({ isConnected: guildId, mode } = channelId);
    const connected = channelId.connected;
    ({ transitionState: trackActivityThermalStateNoticeShown, controlsSpecs } = channelId);
    const setControlsMode = channelId.setControlsMode;
    const tmp = callback(outer1_4.useState(outer1_16.PANEL), 2);
    const first = tmp[0];
    const focused = tmp3;
    const layoutEffect = outer1_4.useLayoutEffect(() => {
      const result = mode.set(first);
      if (trackActivityThermalStateNoticeShown !== channelId(first[51]).TransitionStates.YEETED) {
        const result1 = connected.set(closure_1);
      }
    });
    const items = [channelId, connected, mode, controlsSpecs, setControlsMode];
    return {
      selectedMode: first,
      setMode: tmp[1],
      dismissPanel: outer1_4.useCallback(() => {
        if (controlsSpecs.get().mode === outer2_21.DRAWER) {
          const obj = { mode: outer2_21.FLOATING_DEFAULT };
          setControlsMode(obj);
          let flag = true;
        } else if (connected.get()) {
          let flag2 = mode.get() === outer2_16.PANEL;
          if (flag2) {
            tmp3(outer2_16.PIP);
            flag2 = true;
          }
          flag = flag2;
        } else {
          const state = windowDimensions.getState();
          state.closeChannel(channelId);
          flag = true;
        }
        return flag;
      }, items)
    };
  })({ channelId, isConnected, mode, connected, transitionState, controlsSpecs, setControlsMode });
  let selectedMode = tmp7.selectedMode;
  let setMode = tmp7.setMode;
  const dismissPanel = tmp7.dismissPanel;
  let tmp4 = guildId(first[58])(channelId, guildId);
  ({ manualFocusedItem, setFocused: closure_31 } = (function useManuallyFocusedItem(guildId) {
    let focused;
    let layoutManager;
    guildId = guildId.guildId;
    const channelId = guildId.channelId;
    ({ layoutManager, focused } = guildId);
    let targetDimensions;
    let c7;
    const items = [focused];
    const manualFocusedItem = channelId(first[26]).useStateFromStores(items, () => focused.getSelectedParticipantId(channelId));
    const items1 = [guildId, channelId];
    const setFocused = outer1_4.useCallback((embeddedActivityParticipantId) => {
      let result = null == embeddedActivityParticipantId;
      if (!result) {
        result = channelId(first[52]).isVoicePanelParticipantFocusable(guildId, channelId, embeddedActivityParticipantId);
        const obj = channelId(first[52]);
      }
      if (result) {
        const participant = guildId(first[53]).selectParticipant(channelId, embeddedActivityParticipantId);
        const obj2 = guildId(first[53]);
      }
    }, items1);
    let closure_5 = outer1_4.useRef(undefined);
    let tmp3;
    if (null != manualFocusedItem) {
      tmp3 = manualFocusedItem;
    }
    targetDimensions = layoutManager.getTargetDimensions(tmp3);
    const items2 = [focused, manualFocusedItem, targetDimensions];
    const layoutEffect = outer1_4.useLayoutEffect(() => {
      let tmp = null;
      if (null != manualFocusedItem) {
        const obj = { id: manualFocusedItem };
        const merged = Object.assign(targetDimensions);
        tmp = obj;
      }
      let tmp6;
      if (null != tmp) {
        tmp6 = tmp;
      }
      const current = ref.current;
      let tmp7;
      if (null != current) {
        tmp7 = current;
      }
      if (!obj2.cheapWorkletShallowEqual(tmp6, tmp7)) {
        ref.current = tmp;
        const result = focused.set(tmp);
      }
    }, items2);
    let tmp6 = guildId(first[52])(guildId, channelId, manualFocusedItem);
    c7 = tmp6;
    const items3 = [manualFocusedItem, tmp6, setFocused];
    const effect = outer1_4.useEffect(() => {
      if (null != manualFocusedItem) {
        if (!c7) {
          setFocused(null);
        }
      }
    }, items3);
    const items4 = [setFocused];
    const effect1 = outer1_4.useEffect(() => () => outer1_4(null), items4);
    return { setFocused, manualFocusedItem };
  })({ guildId, channelId, layoutManager, focused }));
  let obj1 = channelId(first[26]);
  let items2 = [closure_7];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => {
    const connectedActivityLocation = outer1_7.getConnectedActivityLocation();
    const embeddedActivityLocationChannelId = channelId(first[59]).getEmbeddedActivityLocationChannelId(connectedActivityLocation);
    let tmp4 = null != connectedActivityLocation;
    const activityPanelMode = outer1_7.getActivityPanelMode();
    if (tmp4) {
      tmp4 = embeddedActivityLocationChannelId !== channelId;
    }
    if (tmp4) {
      tmp4 = activityPanelMode === outer1_26.PANEL;
    }
    return tmp4;
  });
  useLayoutManagerState({ isConnected, windowDimensions, contentDimensions, safeArea, layoutManager, items, pushToTalk: stateFromStores });
  let items3 = [selectedMode, stateFromStores1];
  let layoutEffect = React.useLayoutEffect(() => {
    if (tmp) {
      const result = channelId(first[33]).updateActivityPanelMode(outer1_26.PIP);
      const obj = channelId(first[33]);
    }
  }, items3);
  (function useKeyboardDismissHandler(mode) {
    mode = mode.mode;
    const controlsSpecs = mode.controlsSpecs;
    let obj = channelId(first[22]);
    const fn = function a() {
      const items = [mode.get(), controlsSpecs.get().mode];
      return items;
    };
    fn.__closure = { mode, controlsSpecs };
    fn.__workletHash = 10791754460802;
    fn.__initData = outer1_44;
    const fn2 = function n(arg0, arg1) {
      let tmp;
      if (null != arg1) {
        tmp = arg1;
      }
      if (!obj.cheapWorkletArrayShallowEqual(arg0, tmp)) {
        let tmp6 = callback(arg0, 2)[1] === outer2_21.DRAWER;
        if (tmp6) {
          tmp6 = tmp4 === outer2_16.PANEL;
        }
        if (tmp6) {
          let first;
          if (null != arg1) {
            first = arg1[0];
          }
          tmp6 = first === outer2_16.PANEL;
        }
        if (!tmp6) {
          channelId(first[22]).runOnJS(channelId(first[55]).dismissKeyboard)();
          const obj2 = channelId(first[22]);
        }
        const tmp3 = callback(arg0, 2);
      }
    };
    obj = { cheapWorkletArrayShallowEqual: channelId(first[23]).cheapWorkletArrayShallowEqual, VoicePanelControlsModes: outer1_21, VoicePanelModes: outer1_16, runOnJS: channelId(first[22]).runOnJS, dismissKeyboard: channelId(first[55]).dismissKeyboard };
    fn2.__closure = obj;
    fn2.__workletHash = 16494740341507;
    fn2.__initData = outer1_45;
    const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  })({ mode, controlsSpecs });
  (function useTransitionState(channelId) {
    channelId = channelId.channelId;
    const transitionState = channelId.transitionState;
    const transitionCleanUp = channelId.transitionCleanUp;
    const connected = channelId.connected;
    const mode = channelId.mode;
    const setMode = channelId.setMode;
    let obj = channelId(first[22]);
    const sharedValue = obj.useSharedValue(transitionState);
    let items = [transitionState, sharedValue, transitionCleanUp, channelId];
    const layoutEffect = outer1_4.useLayoutEffect(() => {
      const result = sharedValue.set(transitionState);
      if (transitionState === channelId(first[51]).TransitionStates.YEETED) {
        const state = outer2_9.getState();
        const obj = { lockEnabled: false };
        const _HermesInternal = HermesInternal;
        obj.key = "voice-panel-freeze-" + timeout;
        const freezeLock = state.requestFreezeLock(obj);
        const _setTimeout = setTimeout;
        timeout = setTimeout(transitionCleanUp, 500);
        return () => clearTimeout(closure_0);
      }
    }, items);
    const items1 = [channelId];
    const layoutEffect1 = outer1_4.useLayoutEffect(() => () => {
      const state = outer3_9.getState();
      const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "voice-panel-freeze-" + outer1_0 });
    }, items1);
    const fn = function h() {
      const items = [connected.get(), mode.get(), sharedValue.get()];
      return items;
    };
    fn.__closure = { connected, mode, sharedTransitionState: sharedValue };
    fn.__workletHash = 7656858903152;
    fn.__initData = outer1_42;
    const fn2 = function u(arg0, arg1) {
      let tmp;
      if (null != arg1) {
        tmp = arg1;
      }
      if (!obj.cheapWorkletArrayShallowEqual(arg0, tmp)) {
        const tmp3 = connected(arg0, 3);
        const first = tmp3[0];
        if (tmp3[2] === channelId(first[51]).TransitionStates.YEETED) {
          if (tmp5 !== outer2_16.DISMISSED) {
            channelId(first[22]).runOnJS(setMode)(outer2_16.DISMISSED);
            const obj4 = channelId(first[22]);
          }
        } else if (tmp5 === outer2_16.DISMISSED) {
          let PANEL;
          if (null != arg1) {
            PANEL = arg1[1];
          }
          if (null == PANEL) {
            PANEL = outer2_16.PANEL;
          }
          if (outer2_16.PANEL !== PANEL) {
            if (outer2_16.PIP !== PANEL) {
              PANEL = outer2_16.PANEL;
            }
            channelId(first[22]).runOnJS(setMode)(PANEL);
            const obj3 = channelId(first[22]);
          }
          if (!first) {
            PANEL = outer2_16.PANEL;
          }
        } else {
          let tmp8 = first;
          if (!first) {
            let first1;
            if (null != arg1) {
              first1 = arg1[0];
            }
            tmp8 = true !== first1;
          }
          if (!tmp8) {
            tmp8 = tmp5 !== outer2_16.PIP;
          }
          if (!tmp8) {
            channelId(first[22]).runOnJS(setMode)(outer2_16.PANEL);
            const obj2 = channelId(first[22]);
          }
        }
      }
    };
    obj = { cheapWorkletArrayShallowEqual: channelId(first[23]).cheapWorkletArrayShallowEqual, TransitionStates: channelId(first[51]).TransitionStates, VoicePanelModes: outer1_16, runOnJS: channelId(first[22]).runOnJS, setMode };
    fn2.__closure = obj;
    fn2.__workletHash = 5740547237317;
    fn2.__initData = outer1_43;
    const animatedReaction = channelId(first[22]).useAnimatedReaction(fn, fn2);
  })({ channelId, transitionState, transitionCleanUp, connected, mode, setMode });
  let obj2 = channelId(first[60]);
  obj = { channelId, connected: isConnected };
  let tmp14;
  if (null != manualFocusedItem) {
    tmp14 = manualFocusedItem;
  }
  obj.focusedId = tmp14;
  obj.layoutManager = layoutManager;
  obj.mode = selectedMode;
  const controllerPIPState = obj2.useControllerPIPState(obj);
  closure_33 = guildId(first[61])({ mode, controlsSpecs, safeArea, windowDimensions });
  (function useSelectedParticipantEffects(channelId) {
    channelId = channelId.channelId;
    const selectedMode = channelId.selectedMode;
    let closure_2 = outer1_4.useRef(null);
    const items = [selectedMode, channelId.manualFocusedItem, channelId];
    const layoutEffect = outer1_4.useLayoutEffect(() => {
      const rTCConnection = outer2_14.getRTCConnection();
      let tmp = null != rTCConnection;
      if (tmp) {
        tmp = outer2_14.getChannelId() === channelId;
      }
      if (tmp) {
        if (ref.current !== outer2_16.PIP) {
          if (selectedMode === outer2_16.PIP) {
            rTCConnection.setPipOpen(true);
          }
        }
        let tmp11 = ref.current === outer2_16.PIP;
        if (tmp11) {
          tmp11 = selectedMode !== outer2_16.PIP;
        }
        if (tmp11) {
          rTCConnection.setPipOpen(false);
        }
      }
    }, items);
    const layoutEffect1 = outer1_4.useLayoutEffect(() => {
      closure_2.current = selectedMode;
    });
  })({ channelId, selectedMode, manualFocusedItem });
  (function useHandleThermalState(channelId) {
    channelId = channelId.channelId;
    const focused = channelId.focused;
    const pipState = channelId.pipState;
    const manuallyFocusedId = channelId.manuallyFocusedId;
    let items = [channelId];
    const callback = outer1_4.useCallback((arg0) => {
      let focusedId;
      let pipParticipantId;
      ({ focusedId, pipParticipantId } = arg0);
      const result = mode.shouldReactToSeriousThermalStateWhenActivityFocused();
      let tmp3 = null != focusedId;
      const result1 = mode.consumedRequestToRespondToSeriousThermalState();
      if (tmp3) {
        tmp3 = setControlsMode(focused.getParticipant(channelId, focusedId));
      }
      let participant;
      if (null != pipParticipantId) {
        participant = focused.getParticipant(channelId, pipParticipantId);
      }
      let streamId;
      if (null != participant) {
        streamId = participant.streamId;
      }
      let tmp11 = null != streamId;
      if (tmp11) {
        let selfVideo;
        if (null != participant) {
          const voiceState = participant.voiceState;
          if (null != voiceState) {
            selfVideo = voiceState.selfVideo;
          }
        }
        tmp11 = true === selfVideo;
      }
      if (tmp3) {
        if (result) {
          if (!result1) {
            const isVideoEnabledResult = safeArea.isVideoEnabled();
            let tmp15 = isVideoEnabledResult;
            if (!isVideoEnabledResult) {
              tmp15 = tmp11;
            }
            if (tmp15) {
              let obj = guildId(first[27]);
              obj = { key: "EMBEDDED_ACTIVITIES_VIDEO_DISABLED_FOR_THERMAL_STATE", icon: guildId(first[30]), content: null, disableAnimations: true, toastDurationMs: 3000 };
              const intl = channelId(first[29]).intl;
              obj.content = intl.string(channelId(first[29]).t.O2IlPT);
              obj.open(obj);
              const result2 = channelId(first[31]).trackActivityThermalStateNoticeShown();
              const obj3 = channelId(first[31]);
            }
            if (isVideoEnabledResult) {
              guildId(first[32]).setVideoEnabled(false);
              const obj4 = guildId(first[32]);
            }
            const result3 = channelId(first[33]).consumeRequestToReactToSeriousThermalState();
            const obj5 = channelId(first[33]);
          }
        }
      }
    }, items);
    const items1 = [manuallyFocusedId, pipState, callback, channelId];
    const effect = outer1_4.useEffect(() => {
      const items = [mode, focused];
      const batchedStoreListener = new channelId(first[26]).BatchedStoreListener(items, () => {
        const obj = {};
        let tmp2;
        if (null != outer1_3) {
          tmp2 = outer1_3;
        }
        obj.focusedId = tmp2;
        obj.pipParticipantId = outer1_2.id;
        outer1_4(obj);
      });
      batchedStoreListener.attach("thermal-state-reactions-" + batchedStoreListener);
      return () => batchedStoreListener.detach();
    }, items1);
    let obj = channelId(first[22]);
    const fn = function u() {
      const value = focused.get();
      let id;
      if (null != value) {
        id = value.id;
      }
      const items = [id, pipState.id];
      return items;
    };
    fn.__closure = { focused, pipState };
    fn.__workletHash = 94735519164;
    fn.__initData = closure_33;
    const fn2 = function l(arg0, arg1) {
      let tmp4;
      let tmp5;
      let obj = channelId(first[23]);
      let tmp;
      if (null != arg1) {
        tmp = arg1;
      }
      if (!obj.cheapWorkletArrayShallowEqual(arg0, tmp)) {
        [tmp4, tmp5] = manuallyFocusedId(arg0, 2);
        const tmp3 = manuallyFocusedId(arg0, 2);
        obj = { focusedId: tmp4, pipParticipantId: tmp5 };
        channelId(first[22]).runOnJS(callback)(obj);
        const obj2 = channelId(first[22]);
      }
    };
    obj = { cheapWorkletArrayShallowEqual: channelId(first[23]).cheapWorkletArrayShallowEqual, runOnJS: channelId(first[22]).runOnJS, handleStateUpdates: callback };
    fn2.__closure = obj;
    fn2.__workletHash = 15246095289306;
    fn2.__initData = c34;
    const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  })({ channelId, focused, pipState: controllerPIPState, manuallyFocusedId: manualFocusedItem });
  (function useActivityFocused(channelId) {
    channelId = channelId.channelId;
    const focused = channelId.focused;
    const mode = channelId.mode;
    const connected = channelId.connected;
    let items = [channelId];
    const callback = outer1_4.useCallback((arg0) => {
      let connectedValue;
      let focusedParticipantId;
      ({ focusedParticipantId, connectedValue } = arg0);
      if (connectedValue) {
        connectedValue = tmp === outer2_16.PANEL;
      }
      let tmp3 = null != focusedParticipantId;
      if (tmp3) {
        tmp3 = setControlsMode(focused.getParticipant(channelId, focusedParticipantId));
      }
      if (tmp3) {
        tmp3 = connectedValue;
      }
      const state = windowDimensions.getState();
      state.setIsActivityFocused(tmp3);
    }, items);
    let obj = channelId(first[22]);
    const fn = function c() {
      const value = focused.get();
      let id;
      if (null != value) {
        id = value.id;
      }
      const items = [id, mode.get(), connected.get()];
      return items;
    };
    fn.__closure = { focused, mode, connected };
    fn.__workletHash = 16641161683997;
    fn.__initData = dismissPanel;
    const fn2 = function l(arg0, arg1) {
      let tmp4;
      let tmp5;
      let tmp6;
      let obj = channelId(first[23]);
      let tmp;
      if (null != arg1) {
        tmp = arg1;
      }
      if (!obj.cheapWorkletArrayShallowEqual(arg0, tmp)) {
        [tmp4, tmp5, tmp6] = connected(arg0, 3);
        const tmp3 = connected(arg0, 3);
        obj = { focusedParticipantId: tmp4, voicePanelMode: tmp5, connectedValue: tmp6 };
        channelId(first[22]).runOnJS(callback)(obj);
        const obj2 = channelId(first[22]);
      }
    };
    obj = { cheapWorkletArrayShallowEqual: channelId(first[23]).cheapWorkletArrayShallowEqual, runOnJS: channelId(first[22]).runOnJS, handleAnimatedReaction: callback };
    fn2.__closure = obj;
    fn2.__workletHash = 15290799116693;
    fn2.__initData = outer1_31;
    const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  })({ channelId, focused, mode, connected });
  (function useActivityConnected(setControlsMode) {
    setControlsMode = setControlsMode.setControlsMode;
    const items = [setControlsMode];
    const callback = outer1_4.useCallback(() => {
      setControlsMode({ mode: outer2_21.FLOATING_DEFAULT });
    }, items);
    guildId(first[21])({ onTransition: callback });
  })({ setControlsMode });
  (function useSpeakingWhileMutedNotification(showControls) {
    showControls = showControls.showControls;
    const enableMuteWarning = guildId(first[25]).useConfig({ location: "VoicePanelController" }).enableMuteWarning;
    let closure_2 = outer1_4.useRef(0);
    let obj = guildId(first[25]);
    const items = [safeArea];
    const stateFromStores = channelId(first[26]).useStateFromStores(items, () => safeArea.getSpeakingWhileMuted());
    const items1 = [stateFromStores, enableMuteWarning, showControls];
    const effect = outer1_4.useEffect(() => {
      let tmp = stateFromStores;
      if (stateFromStores) {
        tmp = enableMuteWarning;
      }
      if (tmp) {
        const _performance = performance;
        if (performance.now() - ref.current >= stateFromStores1) {
          const _performance2 = performance;
          ref.current = performance.now();
          showControls();
          let obj = guildId(first[27]);
          obj = { key: "SPEAKING_WHILE_MUTED", icon: guildId(first[28]) };
          const intl = channelId(first[29]).intl;
          obj.content = intl.string(channelId(first[29]).t["29gnR4"]);
          obj.toastDurationMs = 3000;
          obj.open(obj);
        }
      }
    }, items1);
  })({ showControls });
  guildId(first[62])(channelId, mode, setMode, connected);
  guildId(first[63])();
  (function useActivityOrientationState(isConnected) {
    isConnected = isConnected.isConnected;
    const selectedMode = isConnected.selectedMode;
    const manualFocusedItem = isConnected.manualFocusedItem;
    const isNonVoiceEmbeddedActivityInPanelMode = isConnected.isNonVoiceEmbeddedActivityInPanelMode;
    const items = [outer1_7];
    const stateFromStoresObject = channelId(first[26]).useStateFromStoresObject(items, () => {
      const currentEmbeddedActivity = outer2_7.getCurrentEmbeddedActivity();
      let applicationId;
      if (null != currentEmbeddedActivity) {
        applicationId = currentEmbeddedActivity.applicationId;
      }
      const obj = { applicationId };
      let compositeInstanceId;
      if (null != currentEmbeddedActivity) {
        compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
      }
      obj.instanceId = compositeInstanceId;
      if (null == applicationId) {
        let UNLOCKED = showControls.UNLOCKED;
      } else {
        UNLOCKED = outer2_7.getOrientationLockStateForApp(applicationId);
      }
      obj.activityOrientationLockState = UNLOCKED;
      return obj;
    });
    let applicationId = stateFromStoresObject.applicationId;
    const activityOrientationLockState = stateFromStoresObject.activityOrientationLockState;
    const instanceId = stateFromStoresObject.instanceId;
    const items1 = [applicationId, isConnected, selectedMode, activityOrientationLockState, manualFocusedItem, isNonVoiceEmbeddedActivityInPanelMode, instanceId];
    const layoutEffect = outer1_4.useLayoutEffect(() => {
      if (!isNonVoiceEmbeddedActivityInPanelMode) {
        if (selectedMode === outer2_16.PANEL) {
          if (isConnected) {
            if (null != applicationId) {
              let obj = { applicationId, instanceId };
              if (manualFocusedItem === obj2.getEmbeddedActivityParticipantId(obj)) {
                guildId(first[50])(activityOrientationLockState);
              }
              obj2 = channelId(first[49]);
            }
            obj = { unlockAfterRotatingToPreviousLock: false };
            channelId(first[48]).unlockOrientation(obj);
            const obj4 = channelId(first[48]);
          }
        }
        obj = channelId(first[48]);
        const result = obj.restoreDefaultOrientation();
      }
    }, items1);
    const layoutEffect1 = outer1_4.useLayoutEffect(() => () => channelId(first[48]).restoreDefaultOrientation(), []);
  })({ isConnected, selectedMode, manualFocusedItem, isNonVoiceEmbeddedActivityInPanelMode: stateFromStores1 });
  (function useVoicePanelAnalytics(channelId) {
    channelId = channelId.channelId;
    const isConnected = channelId.isConnected;
    const selectedMode = channelId.selectedMode;
    const items = [selectedMode, channelId, isConnected];
    const effect = outer1_4.useEffect(() => {
      if (tmp) {
        let obj = guildId(first[47]);
        obj = { video_layout: outer2_17(selectedMode) };
        const merged = Object.assign(channelId(first[54]).collectVoiceAnalyticsMetadata(channelId));
        obj.track(outer2_22.VIDEO_LAYOUT_TOGGLED, obj);
        const obj3 = channelId(first[54]);
      }
    }, items);
  })({ channelId, isConnected, selectedMode });
  let tmp8 = (function useManuallyFocusedItem(guildId) {
    let focused;
    let layoutManager;
    guildId = guildId.guildId;
    const channelId = guildId.channelId;
    ({ layoutManager, focused } = guildId);
    let targetDimensions;
    let c7;
    const items = [focused];
    const manualFocusedItem = channelId(first[26]).useStateFromStores(items, () => focused.getSelectedParticipantId(channelId));
    const items1 = [guildId, channelId];
    const setFocused = outer1_4.useCallback((embeddedActivityParticipantId) => {
      let result = null == embeddedActivityParticipantId;
      if (!result) {
        result = channelId(first[52]).isVoicePanelParticipantFocusable(guildId, channelId, embeddedActivityParticipantId);
        const obj = channelId(first[52]);
      }
      if (result) {
        const participant = guildId(first[53]).selectParticipant(channelId, embeddedActivityParticipantId);
        const obj2 = guildId(first[53]);
      }
    }, items1);
    let closure_5 = outer1_4.useRef(undefined);
    let tmp3;
    if (null != manualFocusedItem) {
      tmp3 = manualFocusedItem;
    }
    targetDimensions = layoutManager.getTargetDimensions(tmp3);
    const items2 = [focused, manualFocusedItem, targetDimensions];
    const layoutEffect = outer1_4.useLayoutEffect(() => {
      let tmp = null;
      if (null != manualFocusedItem) {
        const obj = { id: manualFocusedItem };
        const merged = Object.assign(targetDimensions);
        tmp = obj;
      }
      let tmp6;
      if (null != tmp) {
        tmp6 = tmp;
      }
      const current = ref.current;
      let tmp7;
      if (null != current) {
        tmp7 = current;
      }
      if (!obj2.cheapWorkletShallowEqual(tmp6, tmp7)) {
        ref.current = tmp;
        const result = focused.set(tmp);
      }
    }, items2);
    let tmp6 = guildId(first[52])(guildId, channelId, manualFocusedItem);
    c7 = tmp6;
    const items3 = [manualFocusedItem, tmp6, setFocused];
    const effect = outer1_4.useEffect(() => {
      if (null != manualFocusedItem) {
        if (!c7) {
          setFocused(null);
        }
      }
    }, items3);
    const items4 = [setFocused];
    const effect1 = outer1_4.useEffect(() => () => outer1_4(null), items4);
    return { setFocused, manualFocusedItem };
  })({ guildId, channelId, layoutManager, focused });
  ({ showFloatingCTA: c34, setShowFloatingCTA: c35 } = (function useShowFloatingCTA(mode) {
    let closure_0 = mode;
    let closure_1 = outer1_4.useRef(-1);
    const showFloatingCTA = channelId(first[22]).useSharedValue(null);
    const items = [mode, showFloatingCTA];
    const setShowFloatingCTA = outer1_4.useCallback((arg0) => {
      if (mode.get() === outer2_16.PANEL) {
        let result = showFloatingCTA.set(arg0);
        if (null != arg0) {
          const _clearTimeout = clearTimeout;
          clearTimeout(ref.current);
          const _setTimeout = setTimeout;
          ref.current = setTimeout(() => {
            const result = outer1_2.set(null);
          }, channelId(first[34]).FLOATING_CTA_HIDE_TIMEOUT);
        }
      }
    }, items);
    const layoutEffect = outer1_4.useLayoutEffect(() => () => clearTimeout(outer1_1.current), []);
    return { showFloatingCTA, setShowFloatingCTA };
  })(mode));
  closure_36 = React.useRef(undefined);
  ref = React.useRef(0);
  let effect1 = React.useEffect(() => {
    ref.current = 0;
  });
  if (null != ref.current) {
    ref.current = ref.current + 1;
    if (ref.current > 10) {
      obj = { category: "voice-panel" };
      let _HermesInternal = HermesInternal;
      obj.message = "VoicePanelController is rendering too many times (>" + ref.current + ")";
      guildId(first[64]).addBreadcrumb(obj);
      ref.current = null;
      let obj5 = guildId(first[64]);
    }
  }
  obj1 = { value: callback(React.useState(() => ({ channelId, channelType: trackActivityThermalStateNoticeShown, connected, contentDimensions, controlsSpecs, dismissPanel, dismissToPIPGestureRef: closure_36, dragScrolling: closure_7, focused, generateStateLocker: closure_23, guildId, hideControls: closure_26, isCall: module_8337, isFocusedVideoZoomed: closure_17, layoutManager, mode, morphablePanelMode: closure_21, mountedCards: _createForOfIteratorHelperLoose, pipAvoidanceSpecs: closure_33, preJoinContentSize: closure_12, safeArea, scrollPosition: closure_14, setControlsMode, setFocused: closure_31, setIsFocusedVideoZoomed: closure_18, setMode, setShowFloatingCTA: c35, showControls, showFloatingCTA: c34, streamOutputSinkStack: first, usePIPState: channelId(first[65]).usePIPState, useReducedMotion: closure_19, windowDimensions, wrapperDimensions: closure_16, wrapperOffset: closure_20, panelCardStillInPIP: closure_22 })), 1)[0] };
  obj2 = { value: controllerPIPState };
  let obj3 = {};
  let tmp33 = null;
  if (null != guildId) {
    tmp33 = guildId;
  }
  obj3.value = tmp33;
  obj3.children = children;
  obj2.children = setMode(guildId(first[67]).Provider, obj3);
  obj1.children = setMode(channelId(first[65]).VoicePanelPIPStateContext.Provider, obj2);
  return setMode(guildId(first[66]).Provider, obj1);
};
