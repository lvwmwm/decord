// Module ID: 15599
// Function ID: 119017
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 15599 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  const arg1 = windowDimensions;
  const safeArea = windowDimensions.safeArea;
  const importDefault = safeArea;
  let contentDimensions = windowDimensions.contentDimensions;
  const dependencyMap = contentDimensions;
  const isConnected = windowDimensions.isConnected;
  let callback = isConnected;
  const layoutManager = windowDimensions.layoutManager;
  const React = layoutManager;
  let closure_13;
  ({ items, pushToTalk } = windowDimensions);
  const tmp = callback(React.useState(() => {
    let height;
    let width;
    let obj = windowDimensions(contentDimensions[35]);
    const windowDimensions = obj.getWindowDimensions();
    ({ width, height } = windowDimensions);
    obj = { width, height, landscape: width > height };
    return obj;
  }), 2);
  const size = tmp[0];
  const AppState = size;
  let closure_6 = tmp2;
  let obj = arg1(dependencyMap[36]);
  const tmp3 = callback(React.useState(obj.getSafeAreaInsets()), 2);
  const rect = tmp3[0];
  let closure_7 = rect;
  let closure_8 = tmp4;
  const managerSubscription = arg1(dependencyMap[38]).useManagerSubscription(layoutManager);
  let closure_9 = managerSubscription;
  const ref = React.useRef({ timeout: -1, layoutKey: managerSubscription, connected: isConnected, windowState: size, safeAreaState: rect, contentDimensions: { aze: false, azj: true } });
  let closure_10 = ref;
  function useUpdateLayoutManagerState(isConnected) {
    isConnected = isConnected.isConnected;
    const windowDimensions = isConnected;
    const currentUpdatesRef = isConnected.currentUpdatesRef;
    const safeArea = currentUpdatesRef;
    const setWindowState = isConnected.setWindowState;
    const contentDimensions = setWindowState;
    const setSafeAreaState = isConnected.setSafeAreaState;
    isConnected = setSafeAreaState;
    const items = [currentUpdatesRef, isConnected, setWindowState, setSafeAreaState];
    const layoutEffect = layoutManager.useLayoutEffect(() => {
      if (currentUpdatesRef.current.connected !== isConnected) {
        currentUpdatesRef.current.connected = isConnected;
        setWindowState((safeAreaState) => {
          let height;
          let width;
          let windowState = safeAreaState;
          const windowDimensions = callback(closure_2[35]).getWindowDimensions();
          ({ width, height } = windowDimensions);
          closure_1.current.windowState = { width, height, landscape: width > height };
          const obj = callback(closure_2[35]);
          if (!obj2.cheapWorkletShallowEqual(safeAreaState, closure_1.current.windowState)) {
            windowState = closure_1.current.windowState;
          }
          return windowState;
        });
        setSafeAreaState((safeAreaState) => {
          closure_1.current.safeAreaState = callback(closure_2[36]).getSafeAreaInsets();
          const obj = callback(closure_2[36]);
          if (!obj2.cheapWorkletShallowEqual(safeAreaState, closure_1.current.safeAreaState)) {
            safeAreaState = closure_1.current.safeAreaState;
          }
          return safeAreaState;
        });
      }
    }, items);
  }({ isConnected, currentUpdatesRef: ref, setWindowState: tmp[1], setSafeAreaState: tmp3[1] });
  callback = React.useCallback(() => {
    clearTimeout(ref.current.timeout);
    ref.current.timeout = setTimeout(() => {
      clearTimeout(ref.current.timeout);
      callback(closure_2[43]).batchUpdates(() => {
        callback((safeAreaState2) => {
          let windowState = safeAreaState2;
          if (!obj.cheapWorkletShallowEqual(closure_10.current.windowState, safeAreaState2)) {
            windowState = closure_10.current.windowState;
          }
          return windowState;
        });
        callback2((safeAreaState2) => {
          let safeAreaState = safeAreaState2;
          if (!obj.cheapWorkletShallowEqual(closure_10.current.safeAreaState, safeAreaState2)) {
            safeAreaState = closure_10.current.safeAreaState;
          }
          return safeAreaState;
        });
      });
    }, 60);
  }, []);
  let closure_11 = callback;
  items = [callback];
  const layoutEffect = React.useLayoutEffect(() => {
    function updateSafeAreas(safeAreaInsets) {
      let obj = callback(closure_2[23]);
      if (!obj.cheapWorkletShallowEqual(closure_10.current.safeAreaState, safeAreaInsets)) {
        obj = {};
        const merged = Object.assign(safeAreaInsets);
        closure_10.current.safeAreaState = obj;
        callback3();
      }
    }
    function updateWindowDimensions() {
      let height;
      let width;
      let windowDimensions = arg0;
      if (arg0 === undefined) {
        let obj = callback(closure_2[35]);
        windowDimensions = obj.getWindowDimensions();
      }
      ({ width, height } = windowDimensions);
      obj = { width, height, landscape: width > height };
      if (!obj3.cheapWorkletShallowEqual(closure_10.current.windowState, obj)) {
        closure_10.current.windowState = obj;
        callback3();
      }
    }
    const windowDimensions = safeArea(contentDimensions[44])(updateSafeAreas);
    updateSafeAreas(windowDimensions(contentDimensions[36]).getSafeAreaInsets());
    const safeArea = safeArea(contentDimensions[45])(updateWindowDimensions);
    const result = updateWindowDimensions();
    return () => {
      callback();
      callback2();
    };
  }, items);
  const id = React.useId();
  let closure_12 = id;
  const items1 = [isConnected, id];
  const layoutEffect1 = React.useLayoutEffect(() => {
    if (isConnected) {
      const state = ref.getState();
      const obj = { key: id, lockEnabled: true };
      const safeAreaDisableLock = state.requestSafeAreaDisableLock(obj);
      return () => {
        const state = state.getState();
        const safeAreaDisableLock = state.requestSafeAreaDisableLock({ key: closure_12, lockEnabled: false });
      };
    }
  }, items1);
  obj = { windowWidth: size.width, windowHeight: size.height, safeAreaLeft: rect.left, safeAreaRight: rect.right, safeAreaTop: rect.top, safeAreaBottom: rect.bottom, controlBarSize: pushToTalk ? closure_19 : closure_18 };
  layoutManager.updateState(items, obj);
  contentDimensions = layoutManager.getContentDimensions();
  closure_13 = contentDimensions;
  const items2 = [contentDimensions, contentDimensions, managerSubscription, layoutManager, safeArea, rect, windowDimensions, size, isConnected];
  const layoutEffect2 = React.useLayoutEffect(() => {
    function executeLayoutManagerEffect(arg0) {
      return closure_4.handleLayoutEffect();
    }
    const windowDimensions = executeLayoutManagerEffect;
    ref.current.layoutKey = managerSubscription;
    let obj = windowDimensions(contentDimensions[22]);
    const fn = function e(arg0) {
      let contentState;
      let safeAreaState;
      let windowState;
      ({ windowState, safeAreaState, contentState } = arg0);
      let tmp = closure_3;
      if (closure_3) {
        tmp = !executeLayoutManagerEffect(store2[23]).cheapWorkletShallowEqual(store2.get(), contentState);
        const obj = executeLayoutManagerEffect(store2[23]);
      }
      if (tmp) {
        const result = store2.set(contentState);
      }
      if (!obj2.cheapWorkletShallowEqual(executeLayoutManagerEffect.get(), windowState)) {
        const result1 = executeLayoutManagerEffect.set(windowState);
      }
      const obj2 = executeLayoutManagerEffect(store2[23]);
      if (!obj3.cheapWorkletShallowEqual(store.get(), safeAreaState)) {
        const result2 = store.set(safeAreaState);
      }
      const obj3 = executeLayoutManagerEffect(store2[23]);
      executeLayoutManagerEffect(store2[22]).runOnJS(executeLayoutManagerEffect)();
    };
    obj = { isConnected, cheapWorkletShallowEqual: windowDimensions(contentDimensions[23]).cheapWorkletShallowEqual, contentDimensions, windowDimensions, safeArea, runOnJS: windowDimensions(contentDimensions[22]).runOnJS, executeLayoutManagerEffect };
    fn.__closure = obj;
    fn.__workletHash = 13791383688018;
    fn.__initData = closure_41;
    obj = { windowState: size, safeAreaState: rect, contentState: contentDimensions };
    obj.runOnUI(fn)(obj);
  }, items2);
  const items3 = [layoutManager];
  const effect = React.useEffect(() => {
    function checkDimensions() {
      if (!closure_3) {
        const size = callback(closure_2[35]).getWindowDimensions();
        const width = size.width;
        const callback = width;
        const height = size.height;
        let timeout = height;
        const result = checkDimensions.checkDimensionsMismatch(width, height);
        closure_2 = result;
        if (null != result) {
          const _setTimeout = setTimeout;
          timeout = setTimeout(() => {
            let height;
            let width;
            let obj = width(result[35]);
            const windowDimensions = obj.getWindowDimensions();
            ({ width, height } = windowDimensions);
            let tmp2 = width === width;
            if (tmp2) {
              tmp2 = callback === height;
            }
            if (tmp2) {
              if (null != closure_4.checkDimensionsMismatch(width, height)) {
                let closure_3 = true;
                obj = { layout_width: result.staleWidth, layout_height: result.staleHeight, window_width: width, window_height: callback, was_dirty: result.wasDirty };
                callback(result[47]).track(constants.VOICE_PANEL_LAYOUT_DESYNC, obj);
                const callback = null;
                const obj2 = callback(result[47]);
              }
            }
          }, 250);
        }
        const obj = callback(closure_2[35]);
      }
    }
    const layoutManager = checkDimensions;
    if (!windowDimensions(closure_2[46]).isStable) {
      const _setInterval = setInterval;
      const windowDimensions = setInterval(checkDimensions, 1000);
      let closure_1 = null;
      closure_2 = size.addEventListener("change", (arg0) => {
        if ("active" === arg0) {
          if (null == interval) {
            const _setInterval = setInterval;
            let interval = setInterval(checkDimensions, 1000);
          }
        }
        if ("active" !== arg0) {
          const _clearInterval = clearInterval;
          clearInterval(interval);
          const _clearTimeout = clearTimeout;
          clearTimeout(closure_1);
          interval = null;
        }
      });
      let closure_3 = false;
      return () => {
        clearInterval(closure_0);
        clearTimeout(closure_1);
        closure_2.remove();
      };
    }
  }, items3);
  const layoutEffect3 = React.useLayoutEffect(() => () => clearTimeout(ref.current.timeout), []);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const AppState = arg1(dependencyMap[2]).AppState;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
let closure_15 = importDefault(dependencyMap[12]);
({ VoicePanelModes: closure_16, getAnalyticsNameForVoicePanelMode: closure_17 } = arg1(dependencyMap[13]));
const tmp2 = arg1(dependencyMap[13]);
({ CONTROLS_HEIGHT: closure_18, CONTROLS_HEIGHT_PTT: closure_19, CONTROLS_HIDE_TIMEOUT: closure_20, VoicePanelControlsModes: closure_21 } = arg1(dependencyMap[14]));
const tmp3 = arg1(dependencyMap[14]);
({ AnalyticEvents: closure_22, ComponentActions: closure_23, InputModes: closure_24 } = arg1(dependencyMap[15]));
const OrientationLockState = arg1(dependencyMap[16]).OrientationLockState;
const ActivityPanelModes = arg1(dependencyMap[17]).ActivityPanelModes;
const isActivityParticipant = arg1(dependencyMap[18]).isActivityParticipant;
const MorphablePanelModes = arg1(dependencyMap[19]).MorphablePanelModes;
const jsx = arg1(dependencyMap[20]).jsx;
let closure_30 = { code: "function VoicePanelControllerTsx1(){const{focused,mode,connected}=this.__closure;var _focused$get;return[(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,mode.get(),connected.get()];}" };
let closure_31 = { code: "function VoicePanelControllerTsx2(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,handleAnimatedReaction}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[focusedParticipantId,voicePanelMode,connectedValue]=props;runOnJS(handleAnimatedReaction)({focusedParticipantId:focusedParticipantId,voicePanelMode:voicePanelMode,connectedValue:connectedValue});}" };
let closure_32 = 5 * importDefault(dependencyMap[24]).Millis.MINUTE;
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
const tmp4 = arg1(dependencyMap[15]);
const result = arg1(dependencyMap[68]).fileFinishedImporting("modules/voice_panel/native/VoicePanelController.tsx");

export default function VoicePanelController(channelId) {
  let children;
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
  const arg1 = channelId;
  const guildId = channelId.guildId;
  const importDefault = guildId;
  const transitionState = channelId.transitionState;
  let closure_33;
  let closure_34;
  let closure_35;
  let closure_36;
  let closure_37;
  ({ children, transitionCleanUp } = channelId);
  let obj = arg1(dependencyMap[26]);
  items = [closure_13];
  const stateFromStores = obj.useStateFromStores(items, () => safeArea.getMode() === controlsSpecs.PUSH_TO_TALK);
  const first = callback(React.useState(() => {
    let tmp = guildId(first[57]);
    tmp = new tmp(safeArea.getMediaEngine());
    return tmp;
  }), 1)[0];
  const dependencyMap = first;
  const items1 = [first];
  const effect = React.useEffect(() => () => closure_2.cleanUp(), items1);
  ({ items, isConnected } = importDefault(dependencyMap[58])(channelId, guildId));
  const callback = function useMountedCards(items, isConnected) {
    const channelId = items;
    const guildId = isConnected;
    const first = callback(React.useState(() => new Set()), 1)[0];
    items = [isConnected, items, first];
    const effect = React.useEffect(() => {
      if (arg1) {
        const items = items(first[56]).runAfterInteractions(() => {
          let done;
          closure_2.clear();
          const tmp2 = callback(closure_0);
          let iter = tmp2();
          if (!iter.done) {
            do {
              let tmp3 = closure_2;
              let addResult = closure_2.add(iter.value.id);
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
  }(items, isConnected);
  const tmp5 = function useCoreSharedState(channelId, isConnected, items, stateFromStores) {
    const guildId = items;
    let first = stateFromStores;
    const channel = channel.getChannel(channelId);
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
    const sharedValue1 = obj2.useSharedValue(constants.PANEL);
    let callback = sharedValue1;
    let obj3 = channelId(first[35]);
    const size = obj3.getWindowDimensions();
    let obj4 = channelId(first[22]);
    let obj = { width: size.width, height: size.height, landscape: size.width > size.height };
    const sharedValue2 = obj4.useSharedValue(obj);
    const rect = channelId(first[36]).getSafeAreaInsets();
    const connected = rect;
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
    obj2.mode = constants.PANEL;
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
    const contentDimensions = sharedValue10;
    const fn = function c(arg0) {
      const result = sharedValue10.set(arg0);
    };
    fn.__closure = { isFocusedVideoZoomed: sharedValue10 };
    fn.__workletHash = 13885070318174;
    fn.__initData = closure_35;
    items = [sharedValue10];
    callback = size.useCallback(fn, items);
    const obj20 = channelId(first[22]);
    const sharedValue11 = channelId(first[22]).useSharedValue(contentDimensions.useReducedMotion);
    const items1 = [sharedValue11];
    const effect = size.useEffect(() => {
      function onChange() {
        const result = closure_7.set(closure_6.useReducedMotion);
      }
      const arg0 = onChange;
      const result = sharedValue10.addReactChangeListener(onChange);
      return () => {
        const result = closure_6.removeReactChangeListener(onChange);
      };
    }, items1);
    const obj21 = channelId(first[22]);
    const sharedValue12 = channelId(first[22]).useSharedValue({});
    const obj22 = channelId(first[22]);
    class W {
      constructor() {
        value = closure_3.get();
        if (closure_16.PANEL === value) {
          tmp5 = closure_28;
          return closure_28.PANEL;
        } else {
          tmp2 = closure_16;
          if (closure_16.PIP === value) {
            tmp4 = closure_28;
            return closure_28.PIP;
          } else {
            tmp3 = closure_28;
            return closure_28.UNDEFINED;
          }
        }
      }
    }
    obj3 = { mode: sharedValue1, VoicePanelModes: constants, MorphablePanelModes: selectedMode };
    W.__closure = obj3;
    W.__workletHash = 931249605381;
    W.__initData = closure_36;
    const derivedValue = channelId(first[22]).useDerivedValue(W);
    first = callback(size.useState(() => {
      let tmp = arg2(arg3[38]);
      tmp = new tmp(arg0);
      tmp.updateState(arg2, { windowWidth: size.width, windowHeight: size.height, safeAreaLeft: rect.left, safeAreaRight: rect.right, safeAreaTop: rect.top, safeAreaBottom: rect.bottom, controlBarSize: arg3 ? closure_19 : closure_18 });
      return tmp;
    }), 1)[0];
    const focused = first;
    const items2 = [first];
    const layoutEffect = size.useLayoutEffect(() => () => closure_8.cleanUp(), items2);
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
  }(channelId, isConnected, items, stateFromStores);
  ({ channelType: closure_4, connected } = tmp5);
  const AppState = connected;
  const contentDimensions = tmp5.contentDimensions;
  let closure_6 = contentDimensions;
  ({ dragScrolling: closure_7, focused } = tmp5);
  let closure_8 = focused;
  ({ isCall: closure_9, layoutManager } = tmp5);
  let closure_10 = layoutManager;
  const mode = tmp5.mode;
  let closure_11 = mode;
  ({ preJoinContentSize: closure_12, safeArea } = tmp5);
  closure_13 = safeArea;
  ({ scrollPosition: closure_14, windowDimensions } = tmp5);
  let closure_15 = windowDimensions;
  ({ wrapperDimensions: closure_16, isFocusedVideoZoomed: closure_17, setIsFocusedVideoZoomed: closure_18, useReducedMotion: closure_19, wrapperOffset: closure_20, morphablePanelMode: closure_21, panelCardStillInPIP: closure_22 } = tmp5);
  const tmp6 = function useControlsState(mode, isConnected, connected, stateFromStores) {
    const channelId = mode;
    const guildId = isConnected;
    const first = connected;
    let closure_3 = stateFromStores;
    channelId(first[22]);
    let obj = { mode: constants2.FLOATING_DEFAULT, locked: false };
    if (stateFromStores) {
      if (isConnected) {
        let tmp3 = closure_19;
      }
      obj.height = tmp3;
      obj.pushToTalk = stateFromStores;
      const tmp2Result = tmp2(obj);
      let closure_5 = tmp2Result.useRef(-1);
      const callback = tmp2Result.useCallback(() => {
        if (-1 !== ref.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(ref.current);
          ref.current = -1;
        }
      }, []);
      const contentDimensions = callback;
      const items = [tmp2Result, callback, mode];
      const callback1 = tmp2Result.useCallback(() => {
        callback();
        if (-1 === ref.current) {
          const _setTimeout = setTimeout;
          ref.current = setTimeout(() => {
            callback2();
            if (closure_0.get() === constants.PANEL) {
              let locked = store.get().mode !== constants2.FLOATING_DEFAULT;
              if (!locked) {
                locked = store.get().locked;
              }
              if (!locked) {
                const obj = { mode: constants2.HIDDEN };
                callback(closure_2[39])(store, obj);
              }
            }
          }, closure_20);
        }
      }, items);
      const items1 = [tmp2Result, callback1];
      const memo = tmp2Result.useMemo(() => {
        function _setControlsMode(mode, FLOATING_DEFAULT) {
          _setControlsMode(closure_2[39])(closure_4, { mode, returnMode: FLOATING_DEFAULT });
          callback();
        }
        const arg1 = _setControlsMode;
        let obj = arg1(arg2[40]);
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
              FLOATING_DEFAULT = constants.FLOATING_DEFAULT;
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
      const focused = cancelControlsDebounce;
      const setControlsMode = memo.setControlsMode;
      const _Set = Set;
      const set = new Set();
      let closure_10 = tmp2Result.useRef(set);
      const items2 = [tmp2Result, callback1, callback];
      const items3 = [setControlsMode];
      const callback2 = tmp2Result.useCallback((arg0) => {
        let v4Result = arg0;
        if (null == arg0) {
          let obj = arg0(arg2[41]);
          v4Result = obj.v4();
        }
        arg0 = v4Result;
        obj = {
          lock(mode) {
            const current = closure_10.current;
            if (!current.has(v4Result)) {
              callback2();
              const current2 = closure_10.current;
              current2.add(v4Result);
              const obj = { locked: closure_10.current.size > 0 };
              if (null != mode) {
                obj.mode = mode;
              }
              callback(closure_2[39])(closure_4, obj);
            }
          },
          unlock(mode) {
            const current = closure_10.current;
            if (current.has(v4Result)) {
              const current2 = closure_10.current;
              current2.delete(v4Result);
              const obj = { locked: closure_10.current.size > 0 };
              if (null != mode) {
                obj.mode = mode;
              }
              callback(closure_2[39])(closure_4, obj);
              callback3();
            }
          }
        };
        return obj;
      }, items2);
      const items4 = [setControlsMode, tmp2Result];
      const callback3 = tmp2Result.useCallback(() => {
        let tmp = arg0;
        if (arg0 === undefined) {
          let obj = { debounce: false };
          tmp = obj;
        }
        obj = { mode: constants2.HIDDEN, debounce: tmp.debounce };
        setControlsMode(obj);
      }, items3);
      const callback4 = tmp2Result.useCallback(() => {
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
          FLOATING_DEFAULT = constants2.FLOATING_DEFAULT;
        }
        obj.mode = FLOATING_DEFAULT;
        obj.debounce = flag;
        return setControlsMode(obj);
      }, items4);
      let obj1 = channelId(first[22]);
      const fn = function s() {
        return arg0.get();
      };
      obj = { mode };
      fn.__closure = obj;
      fn.__workletHash = 12140218650562;
      fn.__initData = ref;
      const fn2 = function r(arg0) {
        if (arg0 === constants.PANEL) {
          arg0(arg2[22]).runOnJS(callback1)();
          const obj2 = arg0(arg2[22]);
        } else {
          arg0(arg2[22]).runOnJS(callback)();
          const obj = arg0(arg2[22]);
        }
      };
      obj = { VoicePanelModes: closure_16, runOnJS: channelId(first[22]).runOnJS, _queueHideControls: callback1, _clearHideControlsQueue: callback };
      fn2.__closure = obj;
      fn2.__workletHash = 7742206515980;
      fn2.__initData = closure_38;
      const animatedReaction = obj1.useAnimatedReaction(fn, fn2);
      const items5 = [stateFromStores, tmp2Result, isConnected];
      const layoutEffect = tmp2Result.useLayoutEffect(() => {
        const obj = {};
        if (arg3) {
          if (arg1) {
            let tmp4 = closure_19;
          }
          obj.height = tmp4;
          obj.pushToTalk = arg3;
          tmp(tmp2, obj);
        }
        tmp4 = closure_18;
      }, items5);
      const fn3 = function c() {
        return arg2.get();
      };
      obj1 = { connected };
      fn3.__closure = obj1;
      fn3.__workletHash = 16653595323628;
      fn3.__initData = closure_39;
      const fn4 = function l(arg0) {
        const obj = {};
        if (arg3) {
          if (arg0) {
            let tmp4 = closure_19;
          }
          obj.height = tmp4;
          obj.pushToTalk = arg3;
          tmp(tmp2, obj);
        }
        tmp4 = closure_18;
      };
      const obj2 = { updateSharedValueIfChanged: guildId(first[39]), controlsSpecs: tmp2Result, pushToTalk: stateFromStores, CONTROLS_HEIGHT_PTT: closure_19, CONTROLS_HEIGHT: closure_18 };
      fn4.__closure = obj2;
      fn4.__workletHash = 2154816141018;
      fn4.__initData = closure_40;
      const animatedReaction1 = channelId(first[22]).useAnimatedReaction(fn3, fn4);
      const items6 = [cancelControlsDebounce, callback];
      const layoutEffect1 = tmp2Result.useLayoutEffect(() => () => {
        callback2();
        callback();
      }, items6);
      const items7 = [setControlsMode];
      const effect = tmp2Result.useEffect(() => {
        function closeTiV(arg0) {
          callback({ mode: constants.FLOATING_DEFAULT });
        }
        const arg0 = closeTiV;
        const ComponentDispatch = arg0(arg2[42]).ComponentDispatch;
        const subscription = ComponentDispatch.subscribe(constants3.VOICE_PANEL_TIV_CLOSE, closeTiV);
        return () => {
          const ComponentDispatch = closeTiV(closure_2[42]).ComponentDispatch;
          ComponentDispatch.unsubscribe(constants2.VOICE_PANEL_TIV_CLOSE, closeTiV);
        };
      }, items7);
      const obj3 = { generateStateLocker: callback2, setControlsMode, showControls: callback4, hideControls: callback3, controlsSpecs: tmp2Result };
      return obj3;
    }
    tmp3 = closure_18;
  }(mode, isConnected, connected, stateFromStores);
  ({ generateStateLocker: closure_23, controlsSpecs } = tmp6);
  const showControls = tmp6.showControls;
  const OrientationLockState = showControls;
  ({ hideControls: closure_26, setControlsMode } = tmp6);
  const isActivityParticipant = setControlsMode;
  const tmp7 = function useSelectedMode(channelId) {
    let controlsSpecs;
    let mode;
    channelId = channelId.channelId;
    ({ isConnected: closure_1, mode } = channelId);
    let first = mode;
    let connected = channelId.connected;
    const callback = connected;
    ({ transitionState: closure_4, controlsSpecs } = channelId);
    connected = controlsSpecs;
    const setControlsMode = channelId.setControlsMode;
    const contentDimensions = setControlsMode;
    const tmp = callback(React.useState(constants.PANEL), 2);
    first = tmp[0];
    const focused = tmp3;
    const layoutEffect = React.useLayoutEffect(() => {
      const result = mode.set(first);
      if (closure_4 !== channelId(mode[51]).TransitionStates.YEETED) {
        const result1 = connected.set(closure_1);
      }
    });
    const items = [channelId, connected, mode, controlsSpecs, setControlsMode];
    return {
      selectedMode: first,
      setMode: tmp[1],
      dismissPanel: React.useCallback(() => {
        if (controlsSpecs.get().mode === constants2.DRAWER) {
          const obj = { mode: constants2.FLOATING_DEFAULT };
          setControlsMode(obj);
          let flag = true;
        } else if (connected.get()) {
          let flag2 = mode.get() === constants.PANEL;
          if (flag2) {
            tmp3(constants.PIP);
            flag2 = true;
          }
          flag = flag2;
        } else {
          const state = state.getState();
          state.closeChannel(channelId);
          flag = true;
        }
        return flag;
      }, items)
    };
  }({ channelId, isConnected, mode, connected, transitionState, controlsSpecs, setControlsMode });
  const selectedMode = tmp7.selectedMode;
  const MorphablePanelModes = selectedMode;
  const setMode = tmp7.setMode;
  const jsx = setMode;
  const dismissPanel = tmp7.dismissPanel;
  const tmp4 = importDefault(dependencyMap[58])(channelId, guildId);
  ({ manualFocusedItem, setFocused: closure_31 } = function useManuallyFocusedItem(guildId) {
    let focused;
    let layoutManager;
    guildId = guildId.guildId;
    let channelId = guildId;
    channelId = guildId.channelId;
    guildId = channelId;
    ({ layoutManager, focused } = guildId);
    const first = focused;
    let contentDimensions;
    let tmp6;
    const items = [focused];
    const manualFocusedItem = channelId(first[26]).useStateFromStores(items, () => selectedParticipantId.getSelectedParticipantId(channelId));
    let closure_3 = manualFocusedItem;
    const items1 = [guildId, channelId];
    const setFocused = setFocused.useCallback((embeddedActivityParticipantId) => {
      let result = null == embeddedActivityParticipantId;
      if (!result) {
        result = guildId(focused[52]).isVoicePanelParticipantFocusable(guildId, channelId, embeddedActivityParticipantId);
        const obj = guildId(focused[52]);
      }
      if (result) {
        const participant = channelId(focused[53]).selectParticipant(channelId, embeddedActivityParticipantId);
        const obj2 = channelId(focused[53]);
      }
    }, items1);
    let closure_5 = setFocused.useRef(undefined);
    let tmp3;
    if (null != manualFocusedItem) {
      tmp3 = manualFocusedItem;
    }
    const targetDimensions = layoutManager.getTargetDimensions(tmp3);
    contentDimensions = targetDimensions;
    const items2 = [focused, manualFocusedItem, targetDimensions];
    const layoutEffect = setFocused.useLayoutEffect(() => {
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
    tmp6 = guildId(first[52])(guildId, channelId, manualFocusedItem);
    const items3 = [manualFocusedItem, tmp6, setFocused];
    const effect = setFocused.useEffect(() => {
      if (null != manualFocusedItem) {
        if (!tmp6) {
          setFocused(null);
        }
      }
    }, items3);
    const items4 = [setFocused];
    const effect1 = setFocused.useEffect(() => () => callback(null), items4);
    return { setFocused, manualFocusedItem };
  }({ guildId, channelId, layoutManager, focused }));
  let obj1 = arg1(dependencyMap[26]);
  const items2 = [closure_7];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => {
    const connectedActivityLocation = store.getConnectedActivityLocation();
    const embeddedActivityLocationChannelId = channelId(first[59]).getEmbeddedActivityLocationChannelId(connectedActivityLocation);
    let tmp4 = null != connectedActivityLocation;
    const activityPanelMode = store.getActivityPanelMode();
    if (tmp4) {
      tmp4 = embeddedActivityLocationChannelId !== channelId;
    }
    if (tmp4) {
      tmp4 = activityPanelMode === constants3.PANEL;
    }
    return tmp4;
  });
  let closure_32 = stateFromStores1;
  useLayoutManagerState({ isConnected, windowDimensions, contentDimensions, safeArea, layoutManager, items, pushToTalk: stateFromStores });
  const items3 = [selectedMode, stateFromStores1];
  const layoutEffect = React.useLayoutEffect(() => {
    if (tmp) {
      const result = channelId(first[33]).updateActivityPanelMode(constants3.PIP);
      const obj = channelId(first[33]);
    }
  }, items3);
  function useKeyboardDismissHandler(mode) {
    mode = mode.mode;
    const channelId = mode;
    const controlsSpecs = mode.controlsSpecs;
    const guildId = controlsSpecs;
    let obj = channelId(first[22]);
    const fn = function a() {
      const items = [mode.get(), controlsSpecs.get().mode];
      return items;
    };
    fn.__closure = { mode, controlsSpecs };
    fn.__workletHash = 10791754460802;
    fn.__initData = closure_44;
    const fn2 = function n(arg0, arg1) {
      let tmp;
      if (null != arg1) {
        tmp = arg1;
      }
      if (!obj.cheapWorkletArrayShallowEqual(arg0, tmp)) {
        let tmp6 = callback(arg0, 2)[1] === constants2.DRAWER;
        if (tmp6) {
          tmp6 = tmp4 === constants.PANEL;
        }
        if (tmp6) {
          let first;
          if (null != arg1) {
            first = arg1[0];
          }
          tmp6 = first === constants.PANEL;
        }
        if (!tmp6) {
          mode(closure_2[22]).runOnJS(mode(closure_2[55]).dismissKeyboard)();
          const obj2 = mode(closure_2[22]);
        }
        const tmp3 = callback(arg0, 2);
      }
    };
    obj = { cheapWorkletArrayShallowEqual: channelId(first[23]).cheapWorkletArrayShallowEqual, VoicePanelControlsModes: closure_21, VoicePanelModes: closure_16, runOnJS: channelId(first[22]).runOnJS, dismissKeyboard: channelId(first[55]).dismissKeyboard };
    fn2.__closure = obj;
    fn2.__workletHash = 16494740341507;
    fn2.__initData = closure_45;
    const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  }({ mode, controlsSpecs });
  function useTransitionState(channelId) {
    channelId = channelId.channelId;
    const transitionState = channelId.transitionState;
    const guildId = transitionState;
    const transitionCleanUp = channelId.transitionCleanUp;
    const first = transitionCleanUp;
    let connected = channelId.connected;
    let closure_3 = connected;
    const mode = channelId.mode;
    const setMode = channelId.setMode;
    connected = setMode;
    let obj = channelId(first[22]);
    const sharedValue = obj.useSharedValue(transitionState);
    const contentDimensions = sharedValue;
    const items = [transitionState, sharedValue, transitionCleanUp, channelId];
    const layoutEffect = mode.useLayoutEffect(() => {
      const result = sharedValue.set(transitionState);
      if (transitionState === channelId(transitionCleanUp[51]).TransitionStates.YEETED) {
        const state = state.getState();
        const obj = { lockEnabled: false };
        const _HermesInternal = HermesInternal;
        obj.key = "voice-panel-freeze-" + channelId;
        const freezeLock = state.requestFreezeLock(obj);
        const _setTimeout = setTimeout;
        const channelId = setTimeout(transitionCleanUp, 500);
        return () => clearTimeout(closure_0);
      }
    }, items);
    const items1 = [channelId];
    const layoutEffect1 = mode.useLayoutEffect(() => () => {
      const state = state.getState();
      const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "voice-panel-freeze-" + closure_0 });
    }, items1);
    const fn = function h() {
      const items = [connected.get(), mode.get(), sharedValue.get()];
      return items;
    };
    fn.__closure = { connected, mode, sharedTransitionState: sharedValue };
    fn.__workletHash = 7656858903152;
    fn.__initData = closure_42;
    const fn2 = function u(arg0, arg1) {
      let tmp;
      if (null != arg1) {
        tmp = arg1;
      }
      if (!obj.cheapWorkletArrayShallowEqual(arg0, tmp)) {
        const tmp3 = connected(arg0, 3);
        const first = tmp3[0];
        if (tmp3[2] === channelId(transitionCleanUp[51]).TransitionStates.YEETED) {
          if (tmp5 !== constants.DISMISSED) {
            channelId(transitionCleanUp[22]).runOnJS(setMode)(constants.DISMISSED);
            const obj4 = channelId(transitionCleanUp[22]);
          }
        } else if (tmp5 === constants.DISMISSED) {
          let PANEL;
          if (null != arg1) {
            PANEL = arg1[1];
          }
          if (null == PANEL) {
            PANEL = constants.PANEL;
          }
          if (constants.PANEL !== PANEL) {
            if (constants.PIP !== PANEL) {
              PANEL = constants.PANEL;
            }
            channelId(transitionCleanUp[22]).runOnJS(setMode)(PANEL);
            const obj3 = channelId(transitionCleanUp[22]);
          }
          if (!first) {
            PANEL = constants.PANEL;
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
            tmp8 = tmp5 !== constants.PIP;
          }
          if (!tmp8) {
            channelId(transitionCleanUp[22]).runOnJS(setMode)(constants.PANEL);
            const obj2 = channelId(transitionCleanUp[22]);
          }
        }
      }
    };
    obj = { cheapWorkletArrayShallowEqual: channelId(first[23]).cheapWorkletArrayShallowEqual, TransitionStates: channelId(first[51]).TransitionStates, VoicePanelModes: closure_16, runOnJS: channelId(first[22]).runOnJS, setMode };
    fn2.__closure = obj;
    fn2.__workletHash = 5740547237317;
    fn2.__initData = closure_43;
    const animatedReaction = channelId(first[22]).useAnimatedReaction(fn, fn2);
  }({ channelId, transitionState, transitionCleanUp, connected, mode, setMode });
  let obj2 = arg1(dependencyMap[60]);
  obj = { channelId, connected: isConnected };
  let tmp14;
  if (null != manualFocusedItem) {
    tmp14 = manualFocusedItem;
  }
  obj.focusedId = tmp14;
  obj.layoutManager = layoutManager;
  obj.mode = selectedMode;
  const controllerPIPState = obj2.useControllerPIPState(obj);
  closure_33 = importDefault(dependencyMap[61])({ mode, controlsSpecs, safeArea, windowDimensions });
  function useSelectedParticipantEffects(channelId) {
    channelId = channelId.channelId;
    const selectedMode = channelId.selectedMode;
    const guildId = selectedMode;
    let closure_2 = React.useRef(null);
    const items = [selectedMode, channelId.manualFocusedItem, channelId];
    const layoutEffect = React.useLayoutEffect(() => {
      const rTCConnection = store.getRTCConnection();
      let tmp = null != rTCConnection;
      if (tmp) {
        tmp = store.getChannelId() === channelId;
      }
      if (tmp) {
        if (ref.current !== constants.PIP) {
          if (selectedMode === constants.PIP) {
            rTCConnection.setPipOpen(true);
          }
        }
        let tmp11 = ref.current === constants.PIP;
        if (tmp11) {
          tmp11 = selectedMode !== constants.PIP;
        }
        if (tmp11) {
          rTCConnection.setPipOpen(false);
        }
      }
    }, items);
    const layoutEffect1 = React.useLayoutEffect(() => {
      closure_2.current = selectedMode;
    });
  }({ channelId, selectedMode, manualFocusedItem });
  function useHandleThermalState(channelId) {
    channelId = channelId.channelId;
    const focused = channelId.focused;
    const guildId = focused;
    const pipState = channelId.pipState;
    const first = pipState;
    const manuallyFocusedId = channelId.manuallyFocusedId;
    let closure_3 = manuallyFocusedId;
    const items = [channelId];
    const callback = callback.useCallback((arg0) => {
      let focusedId;
      let pipParticipantId;
      ({ focusedId, pipParticipantId } = arg0);
      const result = closure_11.shouldReactToSeriousThermalStateWhenActivityFocused();
      let tmp3 = null != focusedId;
      const result1 = closure_11.consumedRequestToRespondToSeriousThermalState();
      if (tmp3) {
        tmp3 = callback(store.getParticipant(channelId, focusedId));
      }
      let participant;
      if (null != pipParticipantId) {
        participant = store.getParticipant(channelId, pipParticipantId);
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
            const isVideoEnabledResult = videoEnabled.isVideoEnabled();
            let tmp15 = isVideoEnabledResult;
            if (!isVideoEnabledResult) {
              tmp15 = tmp11;
            }
            if (tmp15) {
              let obj = focused(pipState[27]);
              obj = { "Null": "<string:1091650906>", "Null": "/assets/modules/voice_panel/native/images", "Null": "IS_QUEST_RELEASE", "Null": "ParentalControlledDefaultGuildsRestricted", "Null": "<string:641794304>", icon: focused(pipState[30]) };
              const intl = channelId(pipState[29]).intl;
              obj.content = intl.string(channelId(pipState[29]).t.O2IlPT);
              obj.open(obj);
              const result2 = channelId(pipState[31]).trackActivityThermalStateNoticeShown();
              const obj3 = channelId(pipState[31]);
            }
            if (isVideoEnabledResult) {
              focused(pipState[32]).setVideoEnabled(false);
              const obj4 = focused(pipState[32]);
            }
            const result3 = channelId(pipState[33]).consumeRequestToReactToSeriousThermalState();
            const obj5 = channelId(pipState[33]);
          }
        }
      }
    }, items);
    const items1 = [manuallyFocusedId, pipState, callback, channelId];
    const effect = callback.useEffect(() => {
      const items = [closure_11, closure_8];
      const batchedStoreListener = new channelId(pipState[26]).BatchedStoreListener(items, () => {
        const obj = {};
        let tmp2;
        if (null != closure_3) {
          tmp2 = closure_3;
        }
        obj.focusedId = tmp2;
        obj.pipParticipantId = id.id;
        closure_4(obj);
      });
      const channelId = batchedStoreListener;
      batchedStoreListener.attach("thermal-state-reactions-" + channelId);
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
      let obj = channelId(pipState[23]);
      let tmp;
      if (null != arg1) {
        tmp = arg1;
      }
      if (!obj.cheapWorkletArrayShallowEqual(arg0, tmp)) {
        [tmp4, tmp5] = manuallyFocusedId(arg0, 2);
        const tmp3 = manuallyFocusedId(arg0, 2);
        obj = { focusedId: tmp4, pipParticipantId: tmp5 };
        channelId(pipState[22]).runOnJS(callback)(obj);
        const obj2 = channelId(pipState[22]);
      }
    };
    obj = { cheapWorkletArrayShallowEqual: channelId(first[23]).cheapWorkletArrayShallowEqual, runOnJS: channelId(first[22]).runOnJS, handleStateUpdates: callback };
    fn2.__closure = obj;
    fn2.__workletHash = 15246095289306;
    fn2.__initData = closure_34;
    const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  }({ channelId, focused, pipState: controllerPIPState, manuallyFocusedId: manualFocusedItem });
  function useActivityFocused(channelId) {
    channelId = channelId.channelId;
    const focused = channelId.focused;
    const guildId = focused;
    const mode = channelId.mode;
    const first = mode;
    const connected = channelId.connected;
    let closure_3 = connected;
    const items = [channelId];
    const callback = callback.useCallback((arg0) => {
      let connectedValue;
      let focusedParticipantId;
      ({ focusedParticipantId, connectedValue } = arg0);
      if (connectedValue) {
        connectedValue = tmp === constants.PANEL;
      }
      let tmp3 = null != focusedParticipantId;
      if (tmp3) {
        tmp3 = callback(participant.getParticipant(channelId, focusedParticipantId));
      }
      if (tmp3) {
        tmp3 = connectedValue;
      }
      const state = state.getState();
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
      let obj = channelId(mode[23]);
      let tmp;
      if (null != arg1) {
        tmp = arg1;
      }
      if (!obj.cheapWorkletArrayShallowEqual(arg0, tmp)) {
        [tmp4, tmp5, tmp6] = connected(arg0, 3);
        const tmp3 = connected(arg0, 3);
        obj = { focusedParticipantId: tmp4, voicePanelMode: tmp5, connectedValue: tmp6 };
        channelId(mode[22]).runOnJS(callback)(obj);
        const obj2 = channelId(mode[22]);
      }
    };
    obj = { cheapWorkletArrayShallowEqual: channelId(first[23]).cheapWorkletArrayShallowEqual, runOnJS: channelId(first[22]).runOnJS, handleAnimatedReaction: callback };
    fn2.__closure = obj;
    fn2.__workletHash = 15290799116693;
    fn2.__initData = closure_31;
    const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  }({ channelId, focused, mode, connected });
  function useActivityConnected(setControlsMode) {
    setControlsMode = setControlsMode.setControlsMode;
    const channelId = setControlsMode;
    const items = [setControlsMode];
    const callback = React.useCallback(() => {
      setControlsMode({ mode: constants.FLOATING_DEFAULT });
    }, items);
    guildId(first[21])({ onTransition: callback });
  }({ setControlsMode });
  function useSpeakingWhileMutedNotification(showControls) {
    showControls = showControls.showControls;
    const channelId = showControls;
    const enableMuteWarning = guildId(closure_2[25]).useConfig({ location: "VoicePanelController" }).enableMuteWarning;
    const guildId = enableMuteWarning;
    closure_2 = React.useRef(0);
    const obj = guildId(closure_2[25]);
    const items = [safeArea];
    const stateFromStores = channelId(closure_2[26]).useStateFromStores(items, () => speakingWhileMuted.getSpeakingWhileMuted());
    let closure_3 = stateFromStores;
    const items1 = [stateFromStores, enableMuteWarning, showControls];
    const effect = React.useEffect(() => {
      let tmp = stateFromStores;
      if (stateFromStores) {
        tmp = enableMuteWarning;
      }
      if (tmp) {
        const _performance = performance;
        if (performance.now() - ref.current >= closure_32) {
          const _performance2 = performance;
          ref.current = performance.now();
          showControls();
          let obj = enableMuteWarning(ref[27]);
          obj = { key: "SPEAKING_WHILE_MUTED", icon: enableMuteWarning(ref[28]) };
          const intl = showControls(ref[29]).intl;
          obj.content = intl.string(showControls(ref[29]).t.29gnR4);
          obj.toastDurationMs = 3000;
          obj.open(obj);
        }
      }
    }, items1);
  }({ showControls });
  importDefault(dependencyMap[62])(channelId, mode, setMode, connected);
  importDefault(dependencyMap[63])();
  function useActivityOrientationState(isConnected) {
    isConnected = isConnected.isConnected;
    const channelId = isConnected;
    const selectedMode = isConnected.selectedMode;
    const guildId = selectedMode;
    const manualFocusedItem = isConnected.manualFocusedItem;
    const first = manualFocusedItem;
    const isNonVoiceEmbeddedActivityInPanelMode = isConnected.isNonVoiceEmbeddedActivityInPanelMode;
    let closure_3 = isNonVoiceEmbeddedActivityInPanelMode;
    const items = [closure_7];
    const stateFromStoresObject = channelId(first[26]).useStateFromStoresObject(items, () => {
      const currentEmbeddedActivity = store.getCurrentEmbeddedActivity();
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
        let UNLOCKED = constants2.UNLOCKED;
      } else {
        UNLOCKED = store.getOrientationLockStateForApp(applicationId);
      }
      obj.activityOrientationLockState = UNLOCKED;
      return obj;
    });
    const applicationId = stateFromStoresObject.applicationId;
    const activityOrientationLockState = stateFromStoresObject.activityOrientationLockState;
    const connected = activityOrientationLockState;
    const instanceId = stateFromStoresObject.instanceId;
    const contentDimensions = instanceId;
    const items1 = [applicationId, isConnected, selectedMode, activityOrientationLockState, manualFocusedItem, isNonVoiceEmbeddedActivityInPanelMode, instanceId];
    const layoutEffect = applicationId.useLayoutEffect(() => {
      if (!isNonVoiceEmbeddedActivityInPanelMode) {
        if (selectedMode === constants.PANEL) {
          if (isConnected) {
            if (null != applicationId) {
              let obj = { applicationId, instanceId };
              if (manualFocusedItem === obj2.getEmbeddedActivityParticipantId(obj)) {
                selectedMode(manualFocusedItem[50])(activityOrientationLockState);
              }
              const obj2 = isConnected(manualFocusedItem[49]);
            }
            obj = { unlockAfterRotatingToPreviousLock: false };
            isConnected(manualFocusedItem[48]).unlockOrientation(obj);
            const obj4 = isConnected(manualFocusedItem[48]);
          }
        }
        obj = isConnected(manualFocusedItem[48]);
        const result = obj.restoreDefaultOrientation();
      }
    }, items1);
    const layoutEffect1 = applicationId.useLayoutEffect(() => () => callback(closure_2[48]).restoreDefaultOrientation(), []);
  }({ isConnected, selectedMode, manualFocusedItem, isNonVoiceEmbeddedActivityInPanelMode: stateFromStores1 });
  function useVoicePanelAnalytics(channelId) {
    channelId = channelId.channelId;
    const isConnected = channelId.isConnected;
    const guildId = isConnected;
    const selectedMode = channelId.selectedMode;
    const first = selectedMode;
    const items = [selectedMode, channelId, isConnected];
    const effect = React.useEffect(() => {
      if (tmp) {
        let obj = isConnected(selectedMode[47]);
        obj = { video_layout: callback(selectedMode) };
        const merged = Object.assign(channelId(selectedMode[54]).collectVoiceAnalyticsMetadata(channelId));
        obj.track(constants2.VIDEO_LAYOUT_TOGGLED, obj);
        const obj3 = channelId(selectedMode[54]);
      }
    }, items);
  }({ channelId, isConnected, selectedMode });
  const tmp8 = function useManuallyFocusedItem(guildId) {
    let focused;
    let layoutManager;
    guildId = guildId.guildId;
    let channelId = guildId;
    channelId = guildId.channelId;
    guildId = channelId;
    ({ layoutManager, focused } = guildId);
    const first = focused;
    let contentDimensions;
    let tmp6;
    const items = [focused];
    const manualFocusedItem = channelId(first[26]).useStateFromStores(items, () => selectedParticipantId.getSelectedParticipantId(channelId));
    let closure_3 = manualFocusedItem;
    const items1 = [guildId, channelId];
    const setFocused = setFocused.useCallback((embeddedActivityParticipantId) => {
      let result = null == embeddedActivityParticipantId;
      if (!result) {
        result = guildId(focused[52]).isVoicePanelParticipantFocusable(guildId, channelId, embeddedActivityParticipantId);
        const obj = guildId(focused[52]);
      }
      if (result) {
        const participant = channelId(focused[53]).selectParticipant(channelId, embeddedActivityParticipantId);
        const obj2 = channelId(focused[53]);
      }
    }, items1);
    let closure_5 = setFocused.useRef(undefined);
    let tmp3;
    if (null != manualFocusedItem) {
      tmp3 = manualFocusedItem;
    }
    const targetDimensions = layoutManager.getTargetDimensions(tmp3);
    contentDimensions = targetDimensions;
    const items2 = [focused, manualFocusedItem, targetDimensions];
    const layoutEffect = setFocused.useLayoutEffect(() => {
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
    tmp6 = guildId(first[52])(guildId, channelId, manualFocusedItem);
    const items3 = [manualFocusedItem, tmp6, setFocused];
    const effect = setFocused.useEffect(() => {
      if (null != manualFocusedItem) {
        if (!tmp6) {
          setFocused(null);
        }
      }
    }, items3);
    const items4 = [setFocused];
    const effect1 = setFocused.useEffect(() => () => callback(null), items4);
    return { setFocused, manualFocusedItem };
  }({ guildId, channelId, layoutManager, focused });
  ({ showFloatingCTA: closure_34, setShowFloatingCTA: closure_35 } = function useShowFloatingCTA(mode) {
    const channelId = mode;
    let closure_1 = React.useRef(-1);
    const showFloatingCTA = channelId(first[22]).useSharedValue(null);
    const first = showFloatingCTA;
    const items = [mode, showFloatingCTA];
    const setShowFloatingCTA = React.useCallback((arg0) => {
      if (arg0.get() === constants.PANEL) {
        const result = showFloatingCTA.set(arg0);
        if (null != arg0) {
          const _clearTimeout = clearTimeout;
          clearTimeout(ref.current);
          const _setTimeout = setTimeout;
          ref.current = setTimeout(() => {
            const result = closure_2.set(null);
          }, arg0(showFloatingCTA[34]).FLOATING_CTA_HIDE_TIMEOUT);
        }
      }
    }, items);
    const layoutEffect = React.useLayoutEffect(() => () => clearTimeout(ref.current), []);
    return { showFloatingCTA, setShowFloatingCTA };
  }(mode));
  closure_36 = React.useRef(undefined);
  const ref = React.useRef(0);
  closure_37 = ref;
  const effect1 = React.useEffect(() => {
    ref.current = 0;
  });
  if (null != ref.current) {
    ref.current = ref.current + 1;
    if (ref.current > 10) {
      obj = { category: "voice-panel" };
      const _HermesInternal = HermesInternal;
      obj.message = "VoicePanelController is rendering too many times (>" + ref.current + ")";
      importDefault(dependencyMap[64]).addBreadcrumb(obj);
      ref.current = null;
      const obj5 = importDefault(dependencyMap[64]);
    }
  }
  obj1 = { value: callback(React.useState(() => ({ channelId, channelType: closure_4, connected, contentDimensions, controlsSpecs, dismissPanel, dismissToPIPGestureRef: closure_36, dragScrolling: closure_7, focused, generateStateLocker: closure_23, guildId, hideControls: closure_26, isCall: closure_9, isFocusedVideoZoomed: closure_17, layoutManager, mode, morphablePanelMode: closure_21, mountedCards: closure_3, pipAvoidanceSpecs: closure_33, preJoinContentSize: closure_12, safeArea, scrollPosition: closure_14, setControlsMode, setFocused: closure_31, setIsFocusedVideoZoomed: closure_18, setMode, setShowFloatingCTA: closure_35, showControls, showFloatingCTA: closure_34, streamOutputSinkStack: first, usePIPState: channelId(first[65]).usePIPState, useReducedMotion: closure_19, windowDimensions, wrapperDimensions: closure_16, wrapperOffset: closure_20, panelCardStillInPIP: closure_22 })), 1)[0] };
  obj2 = { value: controllerPIPState };
  const obj3 = {};
  let tmp33 = null;
  if (null != guildId) {
    tmp33 = guildId;
  }
  obj3.value = tmp33;
  obj3.children = children;
  obj2.children = jsx(importDefault(dependencyMap[67]).Provider, obj3);
  obj1.children = jsx(arg1(dependencyMap[65]).VoicePanelPIPStateContext.Provider, obj2);
  return jsx(importDefault(dependencyMap[66]).Provider, obj1);
};
