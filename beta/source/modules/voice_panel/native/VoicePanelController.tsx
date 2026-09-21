// Module ID: 17643
// Function ID: 17644
// Name: VoicePanelController
// Dependencies: [32, 19, 17, 4750, 2044, 4774, 8566, 9742, 9651, 2045, 1996, 4781, 2099, 4966, 12420, 12418, 1078, 2008, 9313, 4779, 12421, 21, 558, 568, 17644, 4497, 9660, 1095, 17645, 504, 4458, 9710, 1119, 17646, 17647, 9889, 9589, 17501, 1482, 1616, 17487, 12426, 12422, 10345, 12, 1259, 1114, 1252, 9730, 12164, 5087, 1245, 8608, 9612, 17442, 4471, 17580, 4959, 4938, 4625, 7284, 17553, 17581, 4389, 17648, 17649, 17653, 17447, 17486, 4642, 12419, 2]

// Module 17643 (VoicePanelController)
import DurationsDefault from "Durations" /* 1095 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1114 */;
import util from "util" /* 1119 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import useWindowDimensions from "useWindowDimensions" /* 1482 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4389 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4458 */;
import native from "native" /* 4471 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4497 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4938 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4959 */;
import DeviceOrientation from "DeviceOrientation" /* 8608 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 9589 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 9612 */;
import cheapWorkletShallowEqual from "cheapWorkletShallowEqual" /* 9660 */;
import _modDef9710 from "module_9710" /* 9710 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9889 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 10345 */;
import VoicePanelCardLayoutManagerDefault from "VoicePanelCardLayoutManager" /* 12422 */;
import applyActivityOrientationLockDefault from "applyActivityOrientationLock" /* 17442 */;
import VoicePanelPIPStateContext from "VoicePanelPIPStateContext" /* 17486 */;
import VoicePanelFloatingCTAUtils from "VoicePanelFloatingCTAUtils" /* 17501 */;
import useIsVoicePanelParticipantFocusable from "useIsVoicePanelParticipantFocusable" /* 17580 */;
import useTransitionToConnectedActivityInVoiceDefault from "useTransitionToConnectedActivityInVoice" /* 17644 */;
import _modDef17646 from "module_17646" /* 17646 */;
import trackActivityThermalStateNoticeShown from "trackActivityThermalStateNoticeShown" /* 17647 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4750 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4774 */;
import AppFreezeStore from "AppFreezeStore" /* 8566 */;
import SafeAreaDisabledStore from "SafeAreaDisabledStore" /* 9742 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 9651 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import MediaEngineStore from "MediaEngineStore" /* 1996 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4781 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import VoicePanelStore from "VoicePanelStore" /* 4966 */;

require = fn;
function useCoreSharedState(channelId, isConnected, items, stateFromStores) {
  _require = channelId;
  dependencyMap = stateFromStores;
  const channel = ChannelStore.getChannel(channelId);
  let flag;
  if (channel != null) {
    flag = channel.isDM();
  }
  if (flag == null) {
    flag = false;
  }
  let type;
  if (channel != null) {
    type = channel.type;
  }
  const sharedValue = require("ReanimatedRexport").useSharedValue(isConnected);
  const obj2 = require("ReanimatedRexport");
  const sharedValue1 = require("ReanimatedRexport").useSharedValue(VoicePanelModes.PANEL);
  const obj3 = require("ReanimatedRexport");
  const size = require("useWindowDimensions").getWindowDimensions();
  const obj4 = require("useWindowDimensions");
  const size1 = { width: size.width, height: size.height, landscape: size.width > size.height };
  const sharedValue2 = require("ReanimatedRexport").useSharedValue(size1);
  const obj5 = require("ReanimatedRexport");
  const rect = require("useSafeAreaInsets").getSafeAreaInsets();
  const obj7 = require("useSafeAreaInsets");
  const merged = Object.assign(rect);
  const sharedValue3 = require("ReanimatedRexport").useSharedValue({});
  let obj = {};
  const obj8 = require("ReanimatedRexport");
  const maxPanelWidth = require("PanelSizeUtils").getMaxPanelWidth({ windowWidth: size.width, connected: isConnected, safeAreaLeft: rect.left, safeAreaRight: rect.right });
  const obj10 = require("PanelSizeUtils");
  const obj6 = { windowWidth: size.width, connected: isConnected, safeAreaLeft: rect.left, safeAreaRight: rect.right };
  const obj9 = { drawerHeight: size.height, drawerWidth: maxPanelWidth, drawerX: null, drawerY: null, pipX: -1, pipY: -1, animated: true, mode: null };
  const obj12 = require("ReanimatedRexport");
  obj9.drawerX = require("PanelSizeUtils").getPanelX(size.width, maxPanelWidth);
  obj9.drawerY = size.height;
  obj9.mode = VoicePanelModes.PANEL;
  const sharedValue4 = obj12.useSharedValue(obj9);
  const obj14 = require("PanelSizeUtils");
  const sharedValue5 = require("ReanimatedRexport").useSharedValue(0);
  const obj15 = require("ReanimatedRexport");
  const sharedValue6 = require("ReanimatedRexport").useSharedValue(false);
  const obj16 = require("ReanimatedRexport");
  const sharedValue7 = require("ReanimatedRexport").useSharedValue(null);
  const obj17 = require("ReanimatedRexport");
  const sharedValue8 = require("ReanimatedRexport").useSharedValue(0);
  const obj18 = require("ReanimatedRexport");
  const sharedValue9 = require("ReanimatedRexport").useSharedValue(false);
  const fn = function h(arg0) {
    const result = sharedValue9.set(arg0);
  };
  fn.__closure = { isFocusedVideoZoomed: sharedValue9 };
  fn.__workletHash = 16949064095058;
  fn.__initData = __initData9;
  items = [sharedValue9];
  const callback = size.useCallback(fn, items);
  const obj19 = require("ReanimatedRexport");
  const sharedValue10 = require("ReanimatedRexport").useSharedValue(sharedValue9.useReducedMotion);
  const items1 = [sharedValue10];
  const effect = size.useEffect(() => {
    function onChange() {
      const result = sharedValue10.set(sharedValue9.useReducedMotion);
    }
    let result = sharedValue9.addReactChangeListener(onChange);
    return () => {
      const result = AccessibilityStore.removeReactChangeListener(onChange);
    };
  }, items1);
  const obj20 = require("ReanimatedRexport");
  const sharedValue11 = require("ReanimatedRexport").useSharedValue({ gestureActive: false, x: 0, y: 0 });
  const obj21 = require("ReanimatedRexport");
  class J {
    constructor() {
      value = closure_3.get();
      if (VoicePanelModes.PANEL === value) {
        tmp5 = MorphablePanelModes;
        return MorphablePanelModes.PANEL;
      } else if (tmp2.PIP === value) {
        tmp4 = MorphablePanelModes;
        return MorphablePanelModes.PIP;
      } else {
        tmp3 = MorphablePanelModes;
        return MorphablePanelModes.UNDEFINED;
      }
    }
  }
  J.__closure = { mode: sharedValue1, VoicePanelModes, MorphablePanelModes };
  J.__workletHash = 8226755065394;
  J.__initData = __initData10;
  const derivedValue = require("ReanimatedRexport").useDerivedValue(J);
  const layoutManager = sharedValue1(size.useState(() => {
    const obj = new VoicePanelCardLayoutManagerDefault(closure_0);
    obj.updateState(closure_1, { windowWidth: size.width, windowHeight: size.height, safeAreaLeft: rect.left, safeAreaRight: rect.right, safeAreaTop: rect.top, safeAreaBottom: rect.bottom, controlBarSize: closure_2 ? CONTROLS_HEIGHT_PTT : CONTROLS_HEIGHT });
    return obj;
  }), 1)[0];
  const items2 = [layoutManager];
  const layoutEffect = size.useLayoutEffect(() => () => layoutManager.cleanUp(), items2);
  const obj13 = { channelType: type, connected: sharedValue, contentDimensions: null, dragScrolling: null, focused: null, isCall: null, layoutManager: null, mode: null, preJoinContentSize: null, safeArea: null, scrollPosition: null, windowDimensions: null, wrapperDimensions: null, isFocusedVideoZoomed: null, setIsFocusedVideoZoomed: null, useReducedMotion: null, wrapperOffset: null, morphablePanelMode: null, pipHandoff: null };
  const obj11 = { mode: sharedValue1, VoicePanelModes, MorphablePanelModes };
  const obj22 = require("ReanimatedRexport");
  obj13.contentDimensions = require("ReanimatedRexport").useSharedValue(layoutManager.getContentDimensions());
  obj13.dragScrolling = sharedValue6;
  obj13.focused = sharedValue7;
  obj13.isCall = flag;
  obj13.layoutManager = layoutManager;
  obj13.mode = sharedValue1;
  obj13.preJoinContentSize = sharedValue8;
  obj13.safeArea = sharedValue3;
  obj13.scrollPosition = sharedValue5;
  obj13.windowDimensions = sharedValue2;
  obj13.wrapperDimensions = sharedValue4;
  obj13.isFocusedVideoZoomed = sharedValue9;
  obj13.setIsFocusedVideoZoomed = callback;
  obj13.useReducedMotion = sharedValue10;
  obj13.wrapperOffset = sharedValue11;
  obj13.morphablePanelMode = derivedValue;
  obj13.pipHandoff = sharedValue1(size.useState(() => new items(stateFromStores[41])()), 1)[0];
  return obj13;
}
function useControlsState(mode, isConnected, connected, stateFromStores) {
  _require = mode;
  importDefault = isConnected;
  dependencyMap = connected;
  closure_3 = stateFromStores;
  require("ReanimatedRexport");
  let obj = { mode: VoicePanelControlsModes.FLOATING_DEFAULT, locked: false, height: null, pushToTalk: null };
  if (stateFromStores) {
    if (isConnected) {
      let tmp5 = CONTROLS_HEIGHT_PTT;
    }
    obj.height = tmp5;
    obj.pushToTalk = stateFromStores;
    const tmp4Result = tmp4(obj);
    noop = tmp4Result;
    noop.useRef(-1);
    const _clearHideControlsQueue = noop.useCallback(() => {
      if (-1 !== ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
        tmp.current = -1;
      }
    }, []);
    const items = [tmp4Result, _clearHideControlsQueue, mode];
    const callback1 = noop.useCallback(() => {
      callback();
      if (-1 === ref.current) {
        const _setTimeout = setTimeout;
        tmp2.current = setTimeout(() => {
          _clearHideControlsQueue();
          if (mode.get() === constants.PANEL) {
            let locked = closure_1_4.get().mode !== constants2.FLOATING_DEFAULT;
            if (!locked) {
              locked = obj.get().locked;
            }
            if (!locked) {
              const obj2 = { mode: tmp2.HIDDEN };
              closure_1(closure_2[43])(obj, obj2);
            }
            tmp2 = constants2;
          }
        }, guild);
      }
    }, items);
    const items1 = [tmp4Result, callback1];
    const memo = noop.useMemo(() => {
      closure_0 = isConnected(connected[44]).debounce(function _setControlsMode(mode, returnMode) {
        closure_1(closure_2[43])(closure_1_4, { mode, returnMode });
        callback1();
      }, 200);
      return {
        cancelControlsDebounce() {
          return closure_0.cancel();
        },
        setControlsMode(returnMode) {
          ({ mode, debounce } = returnMode);
          if (debounce === undefined) {
            debounce = false;
          }
          let FLOATING_DEFAULT = returnMode.returnMode;
          if (FLOATING_DEFAULT === undefined) {
            FLOATING_DEFAULT = VoicePanelControlsModes.FLOATING_DEFAULT;
          }
          if (debounce) {
            obj(mode, FLOATING_DEFAULT);
          } else {
            obj.cancel();
            const obj2 = { mode, returnMode: FLOATING_DEFAULT };
            updateSharedValueIfChangedDefault(closure_4, obj2);
            callback1();
          }
        }
      };
    }, items1);
    const cancelControlsDebounce = memo.cancelControlsDebounce;
    const setControlsMode = memo.setControlsMode;
    const _Set = Set;
    const set = new Set();
    closure_10 = noop.useRef(set);
    const items2 = [tmp4Result, callback1, _clearHideControlsQueue];
    const items3 = [setControlsMode];
    const callback2 = noop.useCallback((arg0) => {
      let v4Result = arg0;
      if (arg0 == null) {
        v4Result = mode(connected[45]).v4();
        let obj = mode(connected[45]);
      }
      mode = v4Result;
      return {
        lock(mode) {
          const current = ref.current;
          if (!current.has(v4Result)) {
            callback();
            const current2 = tmp.current;
            current2.add(v4Result);
            const obj = { locked: tmp.current.size > 0 };
            if (null != mode) {
              obj.mode = mode;
            }
            updateSharedValueIfChangedDefault(closure_4, obj);
          }
        },
        unlock(mode) {
          const current = ref.current;
          if (current.has(v4Result)) {
            const current2 = tmp.current;
            current2.delete(v4Result);
            const obj = { locked: tmp.current.size > 0 };
            if (null != mode) {
              obj.mode = mode;
            }
            updateSharedValueIfChangedDefault(closure_4, obj);
            callback1();
          }
        }
      };
    }, items2);
    const items4 = [setControlsMode, tmp4Result];
    const callback3 = noop.useCallback(() => {
      let obj = arg0;
      if (arg0 === undefined) {
        obj = { debounce: false };
      }
      setControlsMode({ mode: VoicePanelControlsModes.HIDDEN, debounce: obj.debounce });
    }, items3);
    const callback4 = noop.useCallback(() => {
      let obj = arg0;
      if (arg0 === undefined) {
        obj = {};
      }
      let debounce = obj.debounce;
      if (debounce === undefined) {
        debounce = false;
      }
      mode = closure_4.get().returnMode;
      if (mode == null) {
        mode = VoicePanelControlsModes.FLOATING_DEFAULT;
      }
      return setControlsMode({ mode, debounce });
    }, items4);
    const fn = function u() {
      return mode.get();
    };
    let obj2 = { mode };
    fn.__closure = obj2;
    fn.__workletHash = 7296777110165;
    fn.__initData = __initData11;
    const fn2 = function l(arg0) {
      if (arg0 === VoicePanelModes.PANEL) {
        ReanimatedRexport.runOnJS(callback1)();
      } else {
        ReanimatedRexport.runOnJS(callback)();
      }
    };
    const obj3 = { VoicePanelModes, runOnJS: tmp(4497).runOnJS, _queueHideControls: callback1, _clearHideControlsQueue };
    fn2.__closure = obj3;
    fn2.__workletHash = 7926574562967;
    fn2.__initData = __initData12;
    const animatedReaction = tmp(4497).useAnimatedReaction(fn, fn2);
    const items5 = [stateFromStores, tmp4Result, isConnected];
    const layoutEffect = noop.useLayoutEffect(() => {
      if (closure_3) {
        if (closure_1) {
          let tmp5 = CONTROLS_HEIGHT_PTT;
        }
        const obj = { height: tmp5, pushToTalk: tmp3 };
        tmp(tmp2, obj);
      }
      tmp5 = CONTROLS_HEIGHT;
    }, items5);
    const tmpResult = tmp(4497);
    class S {
      constructor() {
        return closure_2.get();
      }
    }
    const obj4 = { connected };
    S.__closure = obj4;
    S.__workletHash = 14793231736375;
    S.__initData = __initData13;
    const fn3 = function h(arg0) {
      if (closure_3) {
        if (arg0) {
          let tmp5 = CONTROLS_HEIGHT_PTT;
        }
        const obj = { height: tmp5, pushToTalk: tmp3 };
        tmp(tmp2, obj);
      }
      tmp5 = CONTROLS_HEIGHT;
    };
    const obj5 = { updateSharedValueIfChanged: updateSharedValueIfChangedDefault, controlsSpecs: tmp4Result, pushToTalk: stateFromStores, CONTROLS_HEIGHT_PTT, CONTROLS_HEIGHT };
    fn3.__closure = obj5;
    fn3.__workletHash = 4550353529118;
    fn3.__initData = __initData14;
    const animatedReaction1 = tmp(4497).useAnimatedReaction(S, fn3);
    const items6 = [cancelControlsDebounce, _clearHideControlsQueue];
    const layoutEffect1 = noop.useLayoutEffect(() => () => {
      cancelControlsDebounce();
      _clearHideControlsQueue();
    }, items6);
    const items7 = [setControlsMode];
    const effect = noop.useEffect(() => {
      function closeTiV() {
        setControlsMode({ mode: constants2.FLOATING_DEFAULT });
      }
      let ComponentDispatch = mode(connected[46]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(constants3.VOICE_PANEL_TIV_CLOSE, closeTiV);
      return () => {
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.unsubscribe(constants2.VOICE_PANEL_TIV_CLOSE, closeTiV);
      };
    }, items7);
    const obj6 = { generateStateLocker: callback2, setControlsMode, showControls: callback4, hideControls: callback3, controlsSpecs: tmp4Result };
    return obj6;
  }
  tmp5 = CONTROLS_HEIGHT;
}
let AppState = fn(17).AppState;
const VoicePanelConstants = fn(12420);
({ VoicePanelModes: closure_17, getAnalyticsNameForVoicePanelMode: closure_18 } = VoicePanelConstants);
const VoicePanelControlsConstants = fn(12418);
({ CONTROLS_HEIGHT: closure_19, CONTROLS_HEIGHT_PTT: closure_20, CONTROLS_HIDE_TIMEOUT: closure_21, VoicePanelControlsModes: closure_22 } = VoicePanelControlsConstants);
const Constants = fn(1078);
({ AnalyticEvents: closure_23, ComponentActions: closure_24, InputModes: closure_25 } = Constants);
const OrientationLockState = fn(2008).OrientationLockState;
const ActivityPanelModes = fn(9313).ActivityPanelModes;
const isActivityParticipant = fn(4779).isActivityParticipant;
const MorphablePanelModes = fn(12421).MorphablePanelModes;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_31 = ReactCompilerGating.isReactCompilerEnabled() ? ((setControlsMode) => {
  const cResult = setControlsMode(568).c(4);
  setControlsMode = setControlsMode.setControlsMode;
  if (cResult[0] !== setControlsMode) {
    const fn = function o() {
      setControlsMode({ mode: VoicePanelControlsModes.FLOATING_DEFAULT });
    };
    cResult[0] = setControlsMode;
    cResult[1] = fn;
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] !== tmp3) {
    const obj2 = { onTransition: tmp3 };
    cResult[2] = tmp3;
    cResult[3] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[3];
  }
  useTransitionToConnectedActivityInVoiceDefault(tmp4);
}) : ((setControlsMode) => {
  setControlsMode = setControlsMode.setControlsMode;
  const items = [setControlsMode];
  const callback = noop.useCallback(() => {
    setControlsMode({ mode: VoicePanelControlsModes.FLOATING_DEFAULT });
  }, items);
  useTransitionToConnectedActivityInVoiceDefault({ onTransition: callback });
});
const __initData = { code: "function VoicePanelControllerTsx1(){const{focused,mode,connected}=this.__closure;var _focused$get;return[(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,mode.get(),connected.get()];}" };
const __initData2 = { code: "function VoicePanelControllerTsx2(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,handleAnimatedReaction}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined)){return;}const[focusedParticipantId_0,voicePanelMode_0,connectedValue_0]=props;runOnJS(handleAnimatedReaction)({focusedParticipantId:focusedParticipantId_0,voicePanelMode:voicePanelMode_0,connectedValue:connectedValue_0});}" };
const __initData3 = { code: "function VoicePanelControllerTsx3(){const{focused,mode,connected}=this.__closure;var _focused$get;return[(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,mode.get(),connected.get()];}" };
const __initData4 = { code: "function VoicePanelControllerTsx4(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,handleAnimatedReaction}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[focusedParticipantId_0,voicePanelMode_0,connectedValue_0]=props;runOnJS(handleAnimatedReaction)({focusedParticipantId:focusedParticipantId_0,voicePanelMode:voicePanelMode_0,connectedValue:connectedValue_0});}" };
ReactCompilerGating = fn(558);
let closure_36 = ReactCompilerGating.isReactCompilerEnabled() ? ((mode) => {
  ({ channelId: require, focused } = mode);
  mode = mode.mode;
  const connected = mode.connected;
  function handleAnimatedReaction(arg0) {
    ({ focusedParticipantId, connectedValue } = arg0);
    if (connectedValue) {
      connectedValue = tmp === VoicePanelModes.PANEL;
    }
    let tmp3 = null != focusedParticipantId;
    if (tmp3) {
      tmp3 = isActivityParticipant(ChannelRTCStore.getParticipant(_require, focusedParticipantId));
    }
    if (tmp3) {
      tmp3 = connectedValue;
    }
    state = VoicePanelStore.getState();
    state.setIsActivityFocused(tmp3);
  }
  const fn = function s() {
    value = focused.get();
    let id;
    if (value != null) {
      id = value.id;
    }
    const items = [id, mode.get(), connected.get()];
    return items;
  };
  fn.__closure = { focused, mode, connected };
  fn.__workletHash = 16641161683997;
  fn.__initData = __initData;
  const fn2 = function n(arg0, arg1) {
    if (!obj.cheapWorkletArrayShallowEqual(arg0, arg1)) {
      [tmp6, tmp7, tmp8] = arg0;
      const tmp5 = _slicedToArray(arg0, 3);
      const obj2 = { focusedParticipantId: tmp6, voicePanelMode: tmp7, connectedValue: tmp8 };
      ReanimatedRexport.runOnJS(handleAnimatedReaction)(obj2);
      const tmp2Result = ReanimatedRexport;
    }
  };
  const obj = require("ReanimatedRexport");
  fn2.__closure = { cheapWorkletArrayShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletArrayShallowEqual, runOnJS: require("ReanimatedRexport").runOnJS, handleAnimatedReaction };
  fn2.__workletHash = 5068513886995;
  fn2.__initData = __initData2;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
}) : ((channelId) => {
  channelId = channelId.channelId;
  const focused = channelId.focused;
  const mode = channelId.mode;
  const connected = channelId.connected;
  let handleAnimatedReaction;
  let items = [channelId];
  handleAnimatedReaction = handleAnimatedReaction.useCallback((arg0) => {
    ({ focusedParticipantId, connectedValue } = arg0);
    if (connectedValue) {
      connectedValue = tmp === VoicePanelModes.PANEL;
    }
    let tmp3 = null != focusedParticipantId;
    if (tmp3) {
      tmp3 = isActivityParticipant(ChannelRTCStore.getParticipant(channelId, focusedParticipantId));
    }
    if (tmp3) {
      tmp3 = connectedValue;
    }
    state = VoicePanelStore.getState();
    state.setIsActivityFocused(tmp3);
  }, items);
  class S {
    constructor() {
      value = focused.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      items = [, , ];
      items[0] = id;
      items[1] = mode.get();
      items[2] = connected.get();
      return items;
    }
  }
  S.__closure = { focused, mode, connected };
  S.__workletHash = 6066981921055;
  S.__initData = __initData3;
  const fn = function h(arg0, arg1) {
    if (!obj.cheapWorkletArrayShallowEqual(arg0, arg1)) {
      [tmp6, tmp7, tmp8] = arg0;
      const tmp5 = _slicedToArray(arg0, 3);
      const obj2 = { focusedParticipantId: tmp6, voicePanelMode: tmp7, connectedValue: tmp8 };
      ReanimatedRexport.runOnJS(callback)(obj2);
      const tmp2Result = ReanimatedRexport;
    }
  };
  const obj = channelId(mode[25]);
  fn.__closure = { cheapWorkletArrayShallowEqual: channelId(mode[26]).cheapWorkletArrayShallowEqual, runOnJS: channelId(mode[25]).runOnJS, handleAnimatedReaction };
  fn.__workletHash = 8543775529459;
  fn.__initData = __initData4;
  const animatedReaction = obj.useAnimatedReaction(S, fn);
});
let closure_37 = 5 * DurationsDefault.Millis.MINUTE;
ReactCompilerGating = fn(558);
let closure_38 = ReactCompilerGating.isReactCompilerEnabled() ? ((showControls) => {
  const cResult = showControls(568).c(8);
  showControls = showControls.showControls;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { location: "VoicePanelController" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  let obj = showControls(568);
  let tmp = showControls;
  enableMuteWarning = enableMuteWarning(17645).useConfig(first).enableMuteWarning;
  dependencyMap = noop.useRef(0);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    const fn = function u() {
      return speakingWhileMuted.getSpeakingWhileMuted();
    };
    cResult[1] = items;
    cResult[2] = fn;
    let tmp6 = fn;
    let tmp5 = items;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const obj3 = enableMuteWarning(17645);
  const obj4 = noop;
  const stateFromStores = tmp(504).useStateFromStores(tmp5, tmp6);
  if (cResult[3] === enableMuteWarning) {
    if (cResult[4] === showControls) {
      if (cResult[5] === stateFromStores) {
        let tmp9 = cResult[6];
        let tmp10 = cResult[7];
      }
      const effect = obj4.useEffect(tmp9, tmp10);
    }
  }
  const fn2 = function f() {
    let tmp = stateFromStores;
    if (stateFromStores) {
      tmp = enableMuteWarning;
    }
    if (tmp) {
      const _performance = performance;
      if (performance.now() - ref.current >= closure_37) {
        const _performance2 = performance;
        tmp3.current = performance.now();
        showControls();
        const obj2 = { key: "SPEAKING_WHILE_MUTED", icon: _modDef9710, content: null, toastDurationMs: 3000 };
        const intl = util.intl;
        obj2.content = intl.string(util.t["29gnR4"]);
        ToastActionCreatorsDefault.open(obj2);
      }
    }
  };
  const items1 = [stateFromStores, enableMuteWarning, showControls];
  cResult[3] = enableMuteWarning;
  cResult[4] = showControls;
  cResult[5] = stateFromStores;
  cResult[6] = fn2;
  cResult[7] = items1;
  tmp10 = items1;
  tmp9 = fn2;
}) : ((showControls) => {
  showControls = showControls.showControls;
  let enableMuteWarning;
  enableMuteWarning = enableMuteWarning(17645).useConfig({ location: "VoicePanelController" }).enableMuteWarning;
  dependencyMap = noop.useRef(0);
  let obj = enableMuteWarning(17645);
  const items = [MediaEngineStore];
  const stateFromStores = showControls(504).useStateFromStores(items, () => speakingWhileMuted.getSpeakingWhileMuted());
  const items1 = [stateFromStores, enableMuteWarning, showControls];
  const effect = noop.useEffect(() => {
    let tmp = stateFromStores;
    if (stateFromStores) {
      tmp = enableMuteWarning;
    }
    if (tmp) {
      const _performance = performance;
      if (performance.now() - ref.current >= closure_37) {
        const _performance2 = performance;
        tmp3.current = performance.now();
        showControls();
        const obj2 = { key: "SPEAKING_WHILE_MUTED", icon: _modDef9710, content: null, toastDurationMs: 3000 };
        const intl = util.intl;
        obj2.content = intl.string(util.t["29gnR4"]);
        ToastActionCreatorsDefault.open(obj2);
      }
    }
  }, items1);
});
const __initData5 = { code: "function VoicePanelControllerTsx5(){const{focused,pipState}=this.__closure;var _focused$get;return[(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,pipState.id];}" };
const __initData6 = { code: "function VoicePanelControllerTsx6(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,handleStateUpdates}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined)){return;}const[focusedId_0,pipParticipantId_0]=props;runOnJS(handleStateUpdates)({focusedId:focusedId_0,pipParticipantId:pipParticipantId_0});}" };
const __initData7 = { code: "function VoicePanelControllerTsx7(){const{focused,pipState}=this.__closure;var _focused$get;return[(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,pipState.id];}" };
const __initData8 = { code: "function VoicePanelControllerTsx8(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,handleStateUpdates}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[focusedId_0,pipParticipantId_0]=props;runOnJS(handleStateUpdates)({focusedId:focusedId_0,pipParticipantId:pipParticipantId_0});}" };
ReactCompilerGating = fn(558);
let closure_43 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(pipState[23]).c(12);
  channelId = channelId.channelId;
  const focused = channelId.focused;
  pipState = channelId.pipState;
  const manuallyFocusedId = channelId.manuallyFocusedId;
  if (cResult[0] !== channelId) {
    const fn = function s(arg0) {
      ({ focusedId, pipParticipantId } = arg0);
      const result = ChannelCallLifecycleStore.shouldReactToSeriousThermalStateWhenActivityFocused();
      let tmp3 = null != focusedId;
      const result1 = ChannelCallLifecycleStore.consumedRequestToRespondToSeriousThermalState();
      if (tmp3) {
        tmp3 = isActivityParticipant(ChannelRTCStore.getParticipant(channelId, focusedId));
      }
      let participant;
      if (null != pipParticipantId) {
        participant = ChannelRTCStore.getParticipant(channelId, pipParticipantId);
      }
      let streamId;
      if (participant != null) {
        streamId = participant.streamId;
      }
      let tmp11 = null != streamId;
      if (tmp11) {
        let selfVideo;
        if (participant != null) {
          const voiceState = participant.voiceState;
          if (voiceState != null) {
            selfVideo = voiceState.selfVideo;
          }
        }
        tmp11 = true === selfVideo;
      }
      if (tmp3) {
        if (result) {
          if (!result1) {
            const isVideoEnabledResult = MediaEngineStore.isVideoEnabled();
            let tmp15 = isVideoEnabledResult;
            if (!isVideoEnabledResult) {
              tmp15 = tmp11;
            }
            if (tmp15) {
              const obj2 = { key: "EMBEDDED_ACTIVITIES_VIDEO_DISABLED_FOR_THERMAL_STATE", icon: _modDef17646, content: null, disableAnimations: true, toastDurationMs: 3000 };
              const intl = util.intl;
              obj2.content = intl.string(util.t.O2IlPT);
              ToastActionCreatorsDefault.open(obj2);
              const result2 = trackActivityThermalStateNoticeShown.trackActivityThermalStateNoticeShown();
            }
            if (isVideoEnabledResult) {
              AudioActionCreatorsDefault.setVideoEnabled(false);
            }
            const result3 = EmbeddedActivitiesActionCreators.consumeRequestToReactToSeriousThermalState();
          }
        }
      }
    };
    cResult[0] = channelId;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  noop = tmp4;
  if (cResult[2] === channelId) {
    if (cResult[3] === tmp4) {
      if (cResult[4] === manuallyFocusedId) {
        if (cResult[5] === pipState.id) {
          let tmp5 = cResult[6];
        }
        if (cResult[7] === channelId) {
          if (cResult[8] === tmp4) {
            if (cResult[9] === manuallyFocusedId) {
              if (cResult[10] === pipState) {
                let tmp6 = cResult[11];
              }
              const effect = noop.useEffect(tmp5, tmp6);
              class P {
                constructor() {
                  value = focused.get();
                  id = undefined;
                  if (value != null) {
                    id = value.id;
                  }
                  items = [, ];
                  items[0] = id;
                  items[1] = pipState.id;
                  return items;
                }
              }
              let obj2 = { focused, pipState };
              P.__closure = obj2;
              P.__workletHash = 13275424525242;
              P.__initData = __initData5;
              const fn3 = function w(arg0, arg1) {
                if (!obj.cheapWorkletArrayShallowEqual(arg0, arg1)) {
                  [tmp6, tmp7] = arg0;
                  const tmp5 = _slicedToArray(arg0, 2);
                  const obj2 = { focusedId: tmp6, pipParticipantId: tmp7 };
                  ReanimatedRexport.runOnJS(closure_4)(obj2);
                  const tmp2Result = ReanimatedRexport;
                }
              };
              let obj3 = { cheapWorkletArrayShallowEqual: tmp(tmp2[26]).cheapWorkletArrayShallowEqual, runOnJS: tmp(tmp2[25]).runOnJS, handleStateUpdates: tmp4 };
              fn3.__closure = obj3;
              fn3.__workletHash = 5497185467806;
              fn3.__initData = __initData6;
              const animatedReaction = tmp(tmp2[25]).useAnimatedReaction(P, fn3);
            }
          }
        }
        let items = [manuallyFocusedId, , tmp4, channelId];
        cResult[7] = channelId;
        cResult[8] = tmp4;
        cResult[9] = manuallyFocusedId;
        cResult[10] = pipState;
        cResult[11] = items;
        tmp6 = items;
      }
    }
  }
  const fn2 = function v() {
    const items = [ChannelCallLifecycleStore, ChannelRTCStore];
    const batchedStoreListener = new channelId(pipState[29]).BatchedStoreListener(items, () => {
      closure_1_4({ focusedId: manuallyFocusedId, pipParticipantId: id.id });
    });
    batchedStoreListener.attach("thermal-state-reactions-" + batchedStoreListener);
    return () => batchedStoreListener.detach();
  };
  cResult[2] = channelId;
  cResult[3] = tmp4;
  cResult[4] = manuallyFocusedId;
  cResult[5] = pipState.id;
  cResult[6] = fn2;
  tmp5 = fn2;
}) : ((channelId) => {
  channelId = channelId.channelId;
  const focused = channelId.focused;
  const pipState = channelId.pipState;
  const manuallyFocusedId = channelId.manuallyFocusedId;
  let handleStateUpdates;
  let items = [channelId];
  handleStateUpdates = handleStateUpdates.useCallback((arg0) => {
    ({ focusedId, pipParticipantId } = arg0);
    const result = ChannelCallLifecycleStore.shouldReactToSeriousThermalStateWhenActivityFocused();
    let tmp3 = null != focusedId;
    const result1 = ChannelCallLifecycleStore.consumedRequestToRespondToSeriousThermalState();
    if (tmp3) {
      tmp3 = isActivityParticipant(ChannelRTCStore.getParticipant(channelId, focusedId));
    }
    let participant;
    if (null != pipParticipantId) {
      participant = ChannelRTCStore.getParticipant(channelId, pipParticipantId);
    }
    let streamId;
    if (participant != null) {
      streamId = participant.streamId;
    }
    let tmp11 = null != streamId;
    if (tmp11) {
      let selfVideo;
      if (participant != null) {
        const voiceState = participant.voiceState;
        if (voiceState != null) {
          selfVideo = voiceState.selfVideo;
        }
      }
      tmp11 = true === selfVideo;
    }
    if (tmp3) {
      if (result) {
        if (!result1) {
          const isVideoEnabledResult = MediaEngineStore.isVideoEnabled();
          let tmp15 = isVideoEnabledResult;
          if (!isVideoEnabledResult) {
            tmp15 = tmp11;
          }
          if (tmp15) {
            const obj2 = { key: "EMBEDDED_ACTIVITIES_VIDEO_DISABLED_FOR_THERMAL_STATE", icon: _modDef17646, content: null, disableAnimations: true, toastDurationMs: 3000 };
            const intl = util.intl;
            obj2.content = intl.string(util.t.O2IlPT);
            ToastActionCreatorsDefault.open(obj2);
            const result2 = trackActivityThermalStateNoticeShown.trackActivityThermalStateNoticeShown();
          }
          if (isVideoEnabledResult) {
            AudioActionCreatorsDefault.setVideoEnabled(false);
          }
          const result3 = EmbeddedActivitiesActionCreators.consumeRequestToReactToSeriousThermalState();
        }
      }
    }
  }, items);
  const items1 = [manuallyFocusedId, pipState, handleStateUpdates, channelId];
  const effect = handleStateUpdates.useEffect(() => {
    const items = [ChannelCallLifecycleStore, ChannelRTCStore];
    const batchedStoreListener = new channelId(pipState[29]).BatchedStoreListener(items, () => {
      handleStateUpdates({ focusedId: manuallyFocusedId, pipParticipantId: id.id });
    });
    batchedStoreListener.attach("thermal-state-reactions-" + batchedStoreListener);
    return () => batchedStoreListener.detach();
  }, items1);
  const fn = function f() {
    value = focused.get();
    let id;
    if (value != null) {
      id = value.id;
    }
    const items = [id, pipState.id];
    return items;
  };
  fn.__closure = { focused, pipState };
  fn.__workletHash = 10687904091320;
  fn.__initData = __initData7;
  const fn2 = function h(arg0, arg1) {
    if (!obj.cheapWorkletArrayShallowEqual(arg0, arg1)) {
      [tmp6, tmp7] = arg0;
      const tmp5 = _slicedToArray(arg0, 2);
      const obj2 = { focusedId: tmp6, pipParticipantId: tmp7 };
      ReanimatedRexport.runOnJS(callback)(obj2);
      const tmp2Result = ReanimatedRexport;
    }
  };
  let obj = channelId(pipState[25]);
  fn2.__closure = { cheapWorkletArrayShallowEqual: channelId(pipState[26]).cheapWorkletArrayShallowEqual, runOnJS: channelId(pipState[25]).runOnJS, handleStateUpdates };
  fn2.__workletHash = 12547034222966;
  fn2.__initData = __initData8;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
});
ReactCompilerGating = fn(558);
let closure_44 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(8);
  noop.useRef(-1);
  const obj = require("c");
  const obj2 = noop;
  sharedValue = require("ReanimatedRexport").useSharedValue(null);
  if (cResult[0] === arg0) {
    if (cResult[1] === sharedValue) {
      let tmp3 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function u() {
        return () => clearTimeout(ref.current);
      };
      const items = [];
      cResult[3] = fn2;
      cResult[4] = items;
      let tmp6 = items;
      let tmp5 = fn2;
    } else {
      tmp5 = cResult[3];
      tmp6 = cResult[4];
    }
    const layoutEffect = obj2.useLayoutEffect(tmp5, tmp6);
    if (cResult[5] === tmp3) {
      if (cResult[6] === sharedValue) {
        let tmp8 = cResult[7];
      }
      return tmp8;
    }
    const obj4 = { showFloatingCTA: sharedValue, setShowFloatingCTA: tmp3 };
    cResult[5] = tmp3;
    cResult[6] = sharedValue;
    cResult[7] = obj4;
    tmp8 = obj4;
  }
  const fn = function n(arg0) {
    if (closure_0.get() === VoicePanelModes.PANEL) {
      let result = sharedValue.set(arg0);
      if (null != arg0) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          const result = sharedValue.set(null);
        }, VoicePanelFloatingCTAUtils.FLOATING_CTA_HIDE_TIMEOUT);
      }
    }
  };
  cResult[0] = arg0;
  cResult[1] = sharedValue;
  cResult[2] = fn;
  tmp3 = fn;
}) : ((arg0) => {
  _require = arg0;
  noop.useRef(-1);
  showFloatingCTA = require("ReanimatedRexport").useSharedValue(null);
  const items = [arg0, showFloatingCTA];
  const setShowFloatingCTA = noop.useCallback((arg0) => {
    if (closure_0.get() === VoicePanelModes.PANEL) {
      let result = showFloatingCTA.set(arg0);
      if (null != arg0) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          const result = showFloatingCTA.set(null);
        }, VoicePanelFloatingCTAUtils.FLOATING_CTA_HIDE_TIMEOUT);
      }
    }
  }, items);
  const layoutEffect = noop.useLayoutEffect(() => () => clearTimeout(ref.current), []);
  return { showFloatingCTA, setShowFloatingCTA };
});
ReactCompilerGating = fn(558);
let closure_45 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(568).c(9);
  channelId = channelId.channelId;
  const selectedMode = channelId.selectedMode;
  const manualFocusedItem = channelId.manualFocusedItem;
  dependencyMap = noop.useRef(null);
  if (cResult[0] === channelId) {
    if (cResult[1] === selectedMode) {
      let tmp2 = cResult[2];
    }
    if (cResult[3] === channelId) {
      if (cResult[4] === manualFocusedItem) {
        if (cResult[5] === selectedMode) {
          let tmp3 = cResult[6];
        }
        const layoutEffect = obj2.useLayoutEffect(tmp2, tmp3);
        if (cResult[7] !== selectedMode) {
          const fn2 = function c() {
            closure_2.current = selectedMode;
          };
          cResult[7] = selectedMode;
          cResult[8] = fn2;
          let tmp5 = fn2;
        } else {
          tmp5 = cResult[8];
        }
        const layoutEffect1 = obj2.useLayoutEffect(tmp5);
      }
    }
    const items = [selectedMode, manualFocusedItem, channelId];
    cResult[3] = channelId;
    cResult[4] = manualFocusedItem;
    cResult[5] = selectedMode;
    cResult[6] = items;
    tmp3 = items;
  }
  const fn = function n() {
    const rTCConnection = RTCConnectionStore.getRTCConnection();
    let tmp = null != rTCConnection;
    if (tmp) {
      tmp = RTCConnectionStore.getChannelId() === channelId;
    }
    if (tmp) {
      if (ref.current !== VoicePanelModes.PIP) {
        if (selectedMode === tmp4.PIP) {
          rTCConnection.setPipOpen(true);
        }
      }
      let tmp7 = ref.current === tmp4.PIP;
      if (tmp7) {
        tmp7 = selectedMode !== tmp4.PIP;
      }
      if (tmp7) {
        rTCConnection.setPipOpen(false);
      }
    }
  };
  cResult[0] = channelId;
  cResult[1] = selectedMode;
  cResult[2] = fn;
  tmp2 = fn;
}) : ((channelId) => {
  channelId = channelId.channelId;
  const selectedMode = channelId.selectedMode;
  noop.useRef(null);
  const items = [selectedMode, channelId.manualFocusedItem, channelId];
  const layoutEffect = noop.useLayoutEffect(() => {
    const rTCConnection = RTCConnectionStore.getRTCConnection();
    let tmp = null != rTCConnection;
    if (tmp) {
      tmp = RTCConnectionStore.getChannelId() === channelId;
    }
    if (tmp) {
      if (ref.current !== VoicePanelModes.PIP) {
        if (selectedMode === tmp4.PIP) {
          rTCConnection.setPipOpen(true);
        }
      }
      let tmp7 = ref.current === tmp4.PIP;
      if (tmp7) {
        tmp7 = selectedMode !== tmp4.PIP;
      }
      if (tmp7) {
        rTCConnection.setPipOpen(false);
      }
    }
  }, items);
  const layoutEffect1 = noop.useLayoutEffect(() => {
    closure_2.current = selectedMode;
  });
});
const __initData9 = { code: "function VoicePanelControllerTsx9(value){const{isFocusedVideoZoomed}=this.__closure;isFocusedVideoZoomed.set(value);}" };
const __initData10 = { code: "function VoicePanelControllerTsx10(){const{mode,VoicePanelModes,MorphablePanelModes}=this.__closure;switch(mode.get()){case VoicePanelModes.PANEL:{return MorphablePanelModes.PANEL;}case VoicePanelModes.PIP:{return MorphablePanelModes.PIP;}default:{return MorphablePanelModes.UNDEFINED;}}}" };
const __initData11 = { code: "function VoicePanelControllerTsx11(){const{mode}=this.__closure;return mode.get();}" };
const __initData12 = { code: "function VoicePanelControllerTsx12(value){const{VoicePanelModes,runOnJS,_queueHideControls,_clearHideControlsQueue}=this.__closure;if(value===VoicePanelModes.PANEL){runOnJS(_queueHideControls)();}else{runOnJS(_clearHideControlsQueue)();}}" };
const __initData13 = { code: "function VoicePanelControllerTsx13(){const{connected}=this.__closure;return connected.get();}" };
const __initData14 = { code: "function VoicePanelControllerTsx14(connected_0){const{updateSharedValueIfChanged,controlsSpecs,pushToTalk,CONTROLS_HEIGHT_PTT,CONTROLS_HEIGHT}=this.__closure;updateSharedValueIfChanged(controlsSpecs,{height:pushToTalk&&connected_0?CONTROLS_HEIGHT_PTT:CONTROLS_HEIGHT,pushToTalk:pushToTalk});}" };
ReactCompilerGating = fn(558);
let closure_54 = ReactCompilerGating.isReactCompilerEnabled() ? ((isConnected) => {
  const cResult = isConnected(setWindowState[23]).c(6);
  isConnected = isConnected.isConnected;
  const currentUpdatesRef = isConnected.currentUpdatesRef;
  setWindowState = isConnected.setWindowState;
  const setSafeAreaState = isConnected.setSafeAreaState;
  if (cResult[0] === currentUpdatesRef) {
    if (cResult[1] === isConnected) {
      if (cResult[2] === setSafeAreaState) {
        if (cResult[3] === setWindowState) {
          let tmp2 = cResult[4];
          let tmp3 = cResult[5];
        }
        const layoutEffect = noop.useLayoutEffect(tmp2, tmp3);
      }
    }
  }
  const fn = function n() {
    if (currentUpdatesRef.current.connected !== isConnected) {
      currentUpdatesRef.current.connected = tmp;
      setWindowState((safeAreaState) => {
        let windowState = safeAreaState;
        const windowDimensions = isConnected(setWindowState[38]).getWindowDimensions();
        ({ width, height } = windowDimensions);
        currentUpdatesRef.current.windowState = { width, height, landscape: width > height };
        const obj = isConnected(setWindowState[38]);
        const tmp2 = currentUpdatesRef;
        if (!obj2.cheapWorkletShallowEqual(safeAreaState, currentUpdatesRef.current.windowState)) {
          windowState = tmp2.current.windowState;
        }
        return windowState;
      });
      setSafeAreaState((safeAreaState) => {
        currentUpdatesRef.current.safeAreaState = isConnected(setWindowState[39]).getSafeAreaInsets();
        const obj = isConnected(setWindowState[39]);
        const tmp = currentUpdatesRef;
        if (!obj2.cheapWorkletShallowEqual(safeAreaState, currentUpdatesRef.current.safeAreaState)) {
          safeAreaState = tmp.current.safeAreaState;
        }
        return safeAreaState;
      });
    }
  };
  const items = [currentUpdatesRef, isConnected, setWindowState, setSafeAreaState];
  cResult[0] = currentUpdatesRef;
  cResult[1] = isConnected;
  cResult[2] = setSafeAreaState;
  cResult[3] = setWindowState;
  cResult[4] = fn;
  cResult[5] = items;
  tmp3 = items;
  tmp2 = fn;
}) : ((isConnected) => {
  isConnected = isConnected.isConnected;
  const currentUpdatesRef = isConnected.currentUpdatesRef;
  const setWindowState = isConnected.setWindowState;
  const setSafeAreaState = isConnected.setSafeAreaState;
  const items = [currentUpdatesRef, isConnected, setWindowState, setSafeAreaState];
  const layoutEffect = noop.useLayoutEffect(() => {
    if (currentUpdatesRef.current.connected !== isConnected) {
      currentUpdatesRef.current.connected = tmp;
      setWindowState((safeAreaState) => {
        let windowState = safeAreaState;
        const windowDimensions = isConnected(setWindowState[38]).getWindowDimensions();
        ({ width, height } = windowDimensions);
        currentUpdatesRef.current.windowState = { width, height, landscape: width > height };
        const obj = isConnected(setWindowState[38]);
        const tmp2 = currentUpdatesRef;
        if (!obj2.cheapWorkletShallowEqual(safeAreaState, currentUpdatesRef.current.windowState)) {
          windowState = tmp2.current.windowState;
        }
        return windowState;
      });
      setSafeAreaState((safeAreaState) => {
        currentUpdatesRef.current.safeAreaState = isConnected(setWindowState[39]).getSafeAreaInsets();
        const obj = isConnected(setWindowState[39]);
        const tmp = currentUpdatesRef;
        if (!obj2.cheapWorkletShallowEqual(safeAreaState, currentUpdatesRef.current.safeAreaState)) {
          safeAreaState = tmp.current.safeAreaState;
        }
        return safeAreaState;
      });
    }
  }, items);
});
let closure_55 = { code: "function VoicePanelControllerTsx15(t14){const{isConnected,cheapWorkletShallowEqual,contentDimensions,windowDimensions,safeArea,runOnJS,executeLayoutManagerEffect}=this.__closure;const{windowState:windowState_1,safeAreaState:safeAreaState_1,contentState:contentState_0}=t14;if(isConnected&&!cheapWorkletShallowEqual(contentDimensions.get(),contentState_0)){contentDimensions.set(contentState_0);}if(!cheapWorkletShallowEqual(windowDimensions.get(),windowState_1)){windowDimensions.set(windowState_1);}if(!cheapWorkletShallowEqual(safeArea.get(),safeAreaState_1)){safeArea.set(safeAreaState_1);}runOnJS(executeLayoutManagerEffect)();}" };
let closure_56 = { code: "function VoicePanelControllerTsx16({windowState:windowState_1,safeAreaState:safeAreaState_1,contentState:contentState_0}){const{isConnected,cheapWorkletShallowEqual,contentDimensions,windowDimensions,safeArea,runOnJS,executeLayoutManagerEffect}=this.__closure;if(isConnected&&!cheapWorkletShallowEqual(contentDimensions.get(),contentState_0)){contentDimensions.set(contentState_0);}if(!cheapWorkletShallowEqual(windowDimensions.get(),windowState_1)){windowDimensions.set(windowState_1);}if(!cheapWorkletShallowEqual(safeArea.get(),safeAreaState_1)){safeArea.set(safeAreaState_1);}runOnJS(executeLayoutManagerEffect)();}" };
ReactCompilerGating = fn(558);
let closure_57 = ReactCompilerGating.isReactCompilerEnabled() ? ((windowDimensions) => {
  const cResult = windowDimensions(contentDimensions[23]).c(43);
  windowDimensions = windowDimensions.windowDimensions;
  const safeArea = windowDimensions.safeArea;
  contentDimensions = windowDimensions.contentDimensions;
  const isConnected = windowDimensions.isConnected;
  const layoutManager = windowDimensions.layoutManager;
  ({ items, pushToTalk: width } = windowDimensions);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let fn = function c() {
      windowDimensions = windowDimensions(contentDimensions[38]).getWindowDimensions();
      ({ width, height } = windowDimensions);
      const size = { width, height, landscape: width > height };
      return size;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp6 = isConnected(layoutManager.useState(first), 2);
  const first1 = tmp6[0];
  closure_6 = tmp8;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let safeAreaInsets = tmp(tmp2[39]).getSafeAreaInsets();
    cResult[1] = safeAreaInsets;
    let tmp9 = safeAreaInsets;
    const tmpResult = tmp(tmp2[39]);
  } else {
    tmp9 = cResult[1];
  }
  const tmp5Result = isConnected(layoutManager.useState(tmp9), 2);
  const rect = tmp5Result[0];
  closure_8 = tmp12;
  let obj = windowDimensions(contentDimensions[23]);
  const managerSubscription = windowDimensions(contentDimensions[42]).useManagerSubscription(layoutManager);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let size = { width: 0, height: 0 };
    cResult[2] = size;
    let tmp14 = size;
  } else {
    tmp14 = cResult[2];
  }
  if (cResult[3] === isConnected) {
    if (cResult[4] === managerSubscription) {
      if (cResult[5] === rect) {
        if (cResult[6] === first1) {
          let tmp15 = cResult[7];
        }
        const ref = obj2.useRef(tmp15);
        if (cResult[8] !== isConnected) {
          let obj3 = { isConnected, currentUpdatesRef: ref, setWindowState: tmp8, setSafeAreaState: tmp12 };
          cResult[8] = isConnected;
          cResult[9] = obj3;
          let tmp17 = obj3;
        } else {
          tmp17 = cResult[9];
        }
        closure_54(tmp17);
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class N {
            constructor() {
              clearTimeoutResult = clearTimeout(closure_10.current.timeout);
              closure_10.current.timeout = setTimeout(() => {
                clearTimeout(ref.current.timeout);
                windowDimensions(contentDimensions[47]).batchUpdates(() => { ... });
              }, 60);
              return;
            }
          }
          cResult[10] = N;
        } else {
          class N {
            constructor() {
              clearTimeoutResult = clearTimeout(closure_10.current.timeout);
              closure_10.current.timeout = setTimeout(() => {
                clearTimeout(ref.current.timeout);
                windowDimensions(contentDimensions[47]).batchUpdates(() => { ... });
              }, 60);
              return;
            }
          }
        }
        N = tmp20;
        const _Symbol2 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class N {
            constructor() {
              clearTimeoutResult = clearTimeout(closure_10.current.timeout);
              closure_10.current.timeout = setTimeout(() => {
                clearTimeout(ref.current.timeout);
                windowDimensions(contentDimensions[47]).batchUpdates(() => { ... });
              }, 60);
              return;
            }
          }
          const items1 = [tmp20];
          cResult[11] = tmp23;
          cResult[12] = items1;
          let tmp22 = items1;
          const tmp21 = tmp23;
        } else {
          class N {
            constructor() {
              clearTimeoutResult = clearTimeout(closure_10.current.timeout);
              closure_10.current.timeout = setTimeout(() => {
                clearTimeout(ref.current.timeout);
                windowDimensions(contentDimensions[47]).batchUpdates(() => { ... });
              }, 60);
              return;
            }
          }
          tmp22 = cResult[12];
        }
        const layoutEffect = obj2.useLayoutEffect(tmp21, tmp22);
        const id = obj2.useId();
        if (cResult[13] === isConnected) {
          class N {
            constructor() {
              clearTimeoutResult = clearTimeout(closure_10.current.timeout);
              closure_10.current.timeout = setTimeout(() => {
                clearTimeout(ref.current.timeout);
                windowDimensions(contentDimensions[47]).batchUpdates(() => { ... });
              }, 60);
              return;
            }
          }
          const layoutEffect1 = obj2.useLayoutEffect(tmp27, tmp26);
          if (cResult[17] === items) {
            class N {
              constructor() {
                clearTimeoutResult = clearTimeout(closure_10.current.timeout);
                closure_10.current.timeout = setTimeout(() => {
                  clearTimeout(ref.current.timeout);
                  windowDimensions(contentDimensions[47]).batchUpdates(() => { ... });
                }, 60);
                return;
              }
            }
          }
          let obj4 = { windowWidth: null, windowHeight: null, safeAreaLeft: null, safeAreaRight: null, safeAreaTop: null, safeAreaBottom: null, controlBarSize: null };
          ({ width: obj8.windowWidth, height: obj8.windowHeight } = first1);
          ({ left: obj8.safeAreaLeft, right: obj8.safeAreaRight, top: obj8.safeAreaTop, bottom: obj8.safeAreaBottom } = rect);
          obj4.controlBarSize = width ? closure_20 : closure_19;
          obj4 = layoutManager.updateState(items, obj4);
          cResult[17] = items;
          cResult[18] = layoutManager;
          class U {
            constructor() {
              if (isConnected) {
                tmp = closure_10;
                state = closure_10.getState();
                obj1 = { key: null, lockEnabled: true };
                tmp2 = closure_12;
                obj1.key = closure_12;
                safeAreaDisableLock = state.requestSafeAreaDisableLock(obj1);
                return () => {
                  state = ref.getState();
                  const safeAreaDisableLock = state.requestSafeAreaDisableLock({ key, lockEnabled: false });
                };
              } else {
                return;
              }
            }
          }
          cResult[20] = rect.bottom;
          cResult[21] = rect.left;
          cResult[22] = rect.right;
          cResult[23] = rect.top;
          ({ height: tmp3[24], width } = first1);
          cResult[25] = width;
          cResult[26] = obj4;
        }
        class U {
          constructor() {
            if (isConnected) {
              tmp = closure_10;
              state = closure_10.getState();
              obj1 = { key: null, lockEnabled: true };
              tmp2 = closure_12;
              obj1.key = closure_12;
              safeAreaDisableLock = state.requestSafeAreaDisableLock(obj1);
              return () => {
                state = ref.getState();
                const safeAreaDisableLock = state.requestSafeAreaDisableLock({ key, lockEnabled: false });
              };
            } else {
              return;
            }
          }
        }
        const items2 = [isConnected, id];
        cResult[13] = isConnected;
        cResult[14] = id;
        cResult[15] = items2;
        cResult[16] = U;
        tmp26 = items2;
        tmp27 = U;
      }
    }
  }
  let obj5 = { timeout: -1, layoutKey: managerSubscription, connected: isConnected, windowState: first1, safeAreaState: rect, contentDimensions: tmp14 };
  cResult[3] = isConnected;
  cResult[4] = managerSubscription;
  cResult[5] = rect;
  cResult[6] = first1;
  cResult[7] = obj5;
  tmp15 = obj5;
}) : ((windowDimensions) => {
  windowDimensions = windowDimensions.windowDimensions;
  const safeArea = windowDimensions.safeArea;
  const contentDimensions = windowDimensions.contentDimensions;
  const isConnected = windowDimensions.isConnected;
  const layoutManager = windowDimensions.layoutManager;
  ({ items, pushToTalk } = windowDimensions);
  let tmp = isConnected(layoutManager.useState(() => {
    windowDimensions = windowDimensions(contentDimensions[38]).getWindowDimensions();
    ({ width, height } = windowDimensions);
    size = { width, height, landscape: width > height };
    return size;
  }), 2);
  let size = tmp[0];
  closure_6 = tmp2;
  const tmp3 = isConnected(layoutManager.useState(windowDimensions(contentDimensions[39]).getSafeAreaInsets()), 2);
  const rect = tmp3[0];
  closure_8 = tmp4;
  let obj2 = windowDimensions(contentDimensions[39]);
  const managerSubscription = windowDimensions(contentDimensions[42]).useManagerSubscription(layoutManager);
  const ref = layoutManager.useRef({ timeout: -1, layoutKey: managerSubscription, connected: isConnected, windowState: size, safeAreaState: rect, contentDimensions: { width: 0, height: 0 } });
  closure_54({ isConnected, currentUpdatesRef: ref, setWindowState: tmp[1], setSafeAreaState: tmp3[1] });
  const callback = layoutManager.useCallback(() => {
    clearTimeout(ref.current.timeout);
    ref.current.timeout = setTimeout(() => {
      clearTimeout(ref.current.timeout);
      windowDimensions(contentDimensions[47]).batchUpdates(() => {
        closure_1_6((safeAreaState2) => {
          let windowState = safeAreaState2;
          if (!obj.cheapWorkletShallowEqual(ref.current.windowState, safeAreaState2)) {
            windowState = ref.current.windowState;
          }
          return windowState;
        });
        closure_1_8((safeAreaState2) => {
          let safeAreaState = safeAreaState2;
          if (!obj.cheapWorkletShallowEqual(ref.current.safeAreaState, safeAreaState2)) {
            safeAreaState = ref.current.safeAreaState;
          }
          return safeAreaState;
        });
      });
    }, 60);
  }, []);
  const items1 = [callback];
  const layoutEffect = layoutManager.useLayoutEffect(() => {
    closure_0 = safeArea(contentDimensions[48])(function updateSafeAreas(safeAreaState2) {
      if (!obj.cheapWorkletShallowEqual(ref.current.safeAreaState, safeAreaState2)) {
        const obj2 = {};
        const merged = Object.assign(safeAreaState2);
        ref.current.safeAreaState = obj2;
        callback();
      }
    });
    const safeAreaInsets = windowDimensions(contentDimensions[39]).getSafeAreaInsets();
    let obj = windowDimensions(contentDimensions[39]);
    const tmp = safeArea;
    if (!obj2.cheapWorkletShallowEqual(ref.current.safeAreaState, safeAreaInsets)) {
      const obj3 = {};
      let merged = Object.assign(safeAreaInsets);
      tmp5.current.safeAreaState = obj3;
      callback();
    }
    function updateWindowDimensions() {
      windowDimensions = arg0;
      if (arg0 === undefined) {
        windowDimensions = windowDimensions(contentDimensions[38]).getWindowDimensions();
        const obj = windowDimensions(contentDimensions[38]);
      }
      ({ width, height } = windowDimensions);
      size = { width, height, landscape: width > height };
      if (!obj3.cheapWorkletShallowEqual(ref.current.windowState, size)) {
        ref.current.windowState = size;
        callback();
      }
    }
    closure_1 = tmp(tmp2[49])(updateWindowDimensions);
    obj2 = windowDimensions(contentDimensions[26]);
    windowDimensions = windowDimensions(contentDimensions[38]).getWindowDimensions();
    ({ width, height } = windowDimensions);
    size = { width, height, landscape: width > height };
    const tmp3Result = windowDimensions(contentDimensions[38]);
    if (!tmp3Result2.cheapWorkletShallowEqual(ref.current.windowState, size)) {
      tmp5.current.windowState = size;
      callback();
    }
    return () => {
      closure_0();
      closure_1();
    };
  }, items1);
  const id = layoutManager.useId();
  const items2 = [isConnected, id];
  const layoutEffect1 = layoutManager.useLayoutEffect(() => {
    if (isConnected) {
      state = SafeAreaDisabledStore.getState();
      const obj = { key: id, lockEnabled: true };
      let safeAreaDisableLock = state.requestSafeAreaDisableLock(obj);
      return () => {
        state = ref.getState();
        const safeAreaDisableLock = state.requestSafeAreaDisableLock({ key, lockEnabled: false });
      };
    }
  }, items2);
  const updateStateResult = layoutManager.updateState(items, { windowWidth: size.width, windowHeight: size.height, safeAreaLeft: rect.left, safeAreaRight: rect.right, safeAreaTop: rect.top, safeAreaBottom: rect.bottom, controlBarSize: pushToTalk ? closure_20 : closure_19 });
  c13 = updateStateResult;
  const items3 = [contentDimensions, updateStateResult, managerSubscription, layoutManager, safeArea, rect, windowDimensions, size, isConnected];
  const layoutEffect2 = obj.useLayoutEffect(() => {
    function executeLayoutManagerEffect() {
      return layoutManager.handleLayoutEffect();
    }
    ref.current.layoutKey = managerSubscription;
    const fn = function t(arg0) {
      ({ windowState, safeAreaState, contentState } = arg0);
      let tmp = isConnected;
      if (isConnected) {
        tmp = !cheapWorkletShallowEqual.cheapWorkletShallowEqual(contentDimensions.get(), contentState);
      }
      if (tmp) {
        const result = contentDimensions.set(contentState);
      }
      if (!obj2.cheapWorkletShallowEqual(windowDimensions.get(), windowState)) {
        const result1 = obj3.set(windowState);
      }
      obj2 = cheapWorkletShallowEqual;
      obj3 = windowDimensions;
      if (!obj4.cheapWorkletShallowEqual(safeArea.get(), safeAreaState)) {
        const result2 = obj5.set(safeAreaState);
      }
      obj4 = cheapWorkletShallowEqual;
      obj5 = safeArea;
      ReanimatedRexport.runOnJS(executeLayoutManagerEffect)();
    };
    let obj = windowDimensions(contentDimensions[25]);
    fn.__closure = { isConnected, cheapWorkletShallowEqual: windowDimensions(contentDimensions[26]).cheapWorkletShallowEqual, contentDimensions, windowDimensions: executeLayoutManagerEffect, safeArea, runOnJS: windowDimensions(contentDimensions[25]).runOnJS, executeLayoutManagerEffect };
    fn.__workletHash = 16901002393114;
    fn.__initData = __initData;
    obj.runOnUI(fn)({ windowState: size, safeAreaState: rect, contentState });
  }, items3);
  const items4 = [layoutManager];
  const effect = obj.useEffect(() => {
    function checkDimensions() {
      if (!c3) {
        size = windowDimensions(contentDimensions[38]).getWindowDimensions();
        const width = size.width;
        const height = size.height;
        let window_height = height;
        const result = checkDimensions.checkDimensionsMismatch(width, height);
        closure_2 = result;
        if (null != result) {
          const _setTimeout = setTimeout;
          window_height = setTimeout(() => {
            windowDimensions = useWindowDimensions.getWindowDimensions();
            ({ width, height } = windowDimensions);
            let tmp4 = width === width;
            if (tmp4) {
              tmp4 = window_height === height;
            }
            if (tmp4) {
              if (null != layoutManager.checkDimensionsMismatch(width, height)) {
                c3 = true;
                const obj4 = { layout_width: null, layout_height: null, window_width: null, window_height: null, was_dirty: null };
                ({ staleWidth: obj3.layout_width, staleHeight: obj3.layout_height } = result);
                obj4.window_width = width;
                obj4.window_height = window_height;
                obj4.was_dirty = result.wasDirty;
                AnalyticsUtilsDefault.track(constants.VOICE_PANEL_LAYOUT_DESYNC, obj4);
                c1 = null;
              }
            }
          }, 250);
        }
        const obj = windowDimensions(contentDimensions[38]);
      }
    }
    if (!windowDimensions(contentDimensions[50]).isStable) {
      let _setInterval = setInterval;
      let interval = setInterval(checkDimensions, 1000);
      c1 = null;
      closure_2 = size.addEventListener("change", (event) => {
        if ("active" === event) {
          if (null == interval) {
            const _setInterval = setInterval;
            interval = setInterval(checkDimensions, 1000);
          }
        }
        if ("active" !== event) {
          const _clearInterval = clearInterval;
          clearInterval(interval);
          const _clearTimeout = clearTimeout;
          clearTimeout(c1);
          interval = null;
        }
      });
      c3 = false;
      return () => {
        clearInterval(c0);
        clearTimeout(c1);
        closure_2.remove();
      };
    }
  }, items4);
  const layoutEffect3 = obj.useLayoutEffect(() => () => clearTimeout(ref.current.timeout), []);
});
ReactCompilerGating = fn(558);
let closure_58 = ReactCompilerGating.isReactCompilerEnabled() ? ((isConnected) => {
  const cResult = isConnected(manualFocusedItem[23]).c(13);
  isConnected = isConnected.isConnected;
  const selectedMode = isConnected.selectedMode;
  manualFocusedItem = isConnected.manualFocusedItem;
  const isNonVoiceEmbeddedActivityInPanelMode = isConnected.isNonVoiceEmbeddedActivityInPanelMode;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmbeddedActivitiesStore];
    const fn = function s() {
      currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
      applicationId = undefined;
      if (currentEmbeddedActivity != null) {
        applicationId = currentEmbeddedActivity.applicationId;
      }
      let compositeInstanceId;
      if (currentEmbeddedActivity != null) {
        compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
      }
      const obj2 = { applicationId, instanceId: compositeInstanceId, activityOrientationLockState: null };
      if (null != applicationId) {
        let UNLOCKED2 = currentEmbeddedActivity.getOrientationLockStateForApp(applicationId);
        if (UNLOCKED2 == null) {
          UNLOCKED2 = constants.UNLOCKED;
        }
        let UNLOCKED = UNLOCKED2;
      } else {
        UNLOCKED = constants.UNLOCKED;
      }
      obj2.activityOrientationLockState = UNLOCKED;
      return obj2;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = isConnected(manualFocusedItem[23]);
  const stateFromStoresObject = isConnected(manualFocusedItem[29]).useStateFromStoresObject(tmp4, tmp5);
  let applicationId = stateFromStoresObject.applicationId;
  const activityOrientationLockState = stateFromStoresObject.activityOrientationLockState;
  const instanceId = stateFromStoresObject.instanceId;
  if (cResult[2] === activityOrientationLockState) {
    if (cResult[3] === applicationId) {
      if (cResult[4] === instanceId) {
        if (cResult[5] === isConnected) {
          if (cResult[6] === isNonVoiceEmbeddedActivityInPanelMode) {
            if (cResult[7] === manualFocusedItem) {
              if (cResult[8] === selectedMode) {
                let tmp8 = cResult[9];
                let tmp9 = cResult[10];
              }
              const layoutEffect = applicationId.useLayoutEffect(tmp8, tmp9);
              const _Symbol = Symbol;
              if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
                const fn3 = function w() {
                  return () => {
                    channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
                    let isGuildStageVoiceResult;
                    if (channel != null) {
                      isGuildStageVoiceResult = channel.isGuildStageVoice();
                    }
                    if (!isGuildStageVoiceResult) {
                      const result = isConnected(manualFocusedItem[52]).restoreDefaultOrientation();
                      const obj2 = isConnected(manualFocusedItem[52]);
                    }
                  };
                };
                const items1 = [];
                cResult[11] = fn3;
                cResult[12] = items1;
                let tmp12 = items1;
                let tmp11 = fn3;
              } else {
                tmp11 = cResult[11];
                tmp12 = cResult[12];
              }
              const layoutEffect1 = applicationId.useLayoutEffect(tmp11, tmp12);
            }
          }
        }
      }
    }
  }
  const fn2 = function _() {
    let tmp = isNonVoiceEmbeddedActivityInPanelMode;
    if (!isNonVoiceEmbeddedActivityInPanelMode) {
      const channel = ChannelStore.getChannel(SelectedChannelStore.getVoiceChannelId());
      let isGuildStageVoiceResult;
      if (channel != null) {
        isGuildStageVoiceResult = channel.isGuildStageVoice();
      }
      tmp = isGuildStageVoiceResult;
    }
    if (!tmp) {
      if (selectedMode === VoicePanelModes.PANEL) {
        if (isConnected) {
          if (null != applicationId) {
            const obj = { applicationId: tmp12, instanceId };
            if (manualFocusedItem === obj3.getEmbeddedActivityParticipantId(obj)) {
              applyActivityOrientationLockDefault(activityOrientationLockState);
            }
            obj3 = ChannelRTCParticipants;
          }
          DeviceOrientation.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
        }
      }
      const result = DeviceOrientation.restoreDefaultOrientation();
    }
  };
  const items2 = [applicationId, isConnected, selectedMode, activityOrientationLockState, manualFocusedItem, isNonVoiceEmbeddedActivityInPanelMode, instanceId];
  cResult[2] = activityOrientationLockState;
  cResult[3] = applicationId;
  cResult[4] = instanceId;
  cResult[5] = isConnected;
  cResult[6] = isNonVoiceEmbeddedActivityInPanelMode;
  cResult[7] = manualFocusedItem;
  cResult[8] = selectedMode;
  cResult[9] = fn2;
  cResult[10] = items2;
  tmp9 = items2;
  tmp8 = fn2;
}) : ((isConnected) => {
  isConnected = isConnected.isConnected;
  const selectedMode = isConnected.selectedMode;
  const manualFocusedItem = isConnected.manualFocusedItem;
  const isNonVoiceEmbeddedActivityInPanelMode = isConnected.isNonVoiceEmbeddedActivityInPanelMode;
  const items = [EmbeddedActivitiesStore];
  const stateFromStoresObject = isConnected(manualFocusedItem[29]).useStateFromStoresObject(items, () => {
    currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
    applicationId = undefined;
    if (currentEmbeddedActivity != null) {
      applicationId = currentEmbeddedActivity.applicationId;
    }
    let compositeInstanceId;
    if (currentEmbeddedActivity != null) {
      compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
    }
    const obj2 = { applicationId, instanceId: compositeInstanceId, activityOrientationLockState: null };
    if (null != applicationId) {
      let UNLOCKED2 = currentEmbeddedActivity.getOrientationLockStateForApp(applicationId);
      if (UNLOCKED2 == null) {
        UNLOCKED2 = constants.UNLOCKED;
      }
      let UNLOCKED = UNLOCKED2;
    } else {
      UNLOCKED = constants.UNLOCKED;
    }
    obj2.activityOrientationLockState = UNLOCKED;
    return obj2;
  });
  let applicationId = stateFromStoresObject.applicationId;
  const activityOrientationLockState = stateFromStoresObject.activityOrientationLockState;
  const instanceId = stateFromStoresObject.instanceId;
  const items1 = [applicationId, isConnected, selectedMode, activityOrientationLockState, manualFocusedItem, isNonVoiceEmbeddedActivityInPanelMode, instanceId];
  const layoutEffect = applicationId.useLayoutEffect(() => {
    let tmp = isNonVoiceEmbeddedActivityInPanelMode;
    if (!isNonVoiceEmbeddedActivityInPanelMode) {
      const channel = ChannelStore.getChannel(SelectedChannelStore.getVoiceChannelId());
      let isGuildStageVoiceResult;
      if (channel != null) {
        isGuildStageVoiceResult = channel.isGuildStageVoice();
      }
      tmp = isGuildStageVoiceResult;
    }
    if (!tmp) {
      if (selectedMode === VoicePanelModes.PANEL) {
        if (isConnected) {
          if (null != applicationId) {
            const obj = { applicationId: tmp12, instanceId };
            if (manualFocusedItem === obj3.getEmbeddedActivityParticipantId(obj)) {
              applyActivityOrientationLockDefault(activityOrientationLockState);
            }
            obj3 = ChannelRTCParticipants;
          }
          DeviceOrientation.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
        }
      }
      const result = DeviceOrientation.restoreDefaultOrientation();
    }
  }, items1);
  const layoutEffect1 = applicationId.useLayoutEffect(() => () => {
    channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
    let isGuildStageVoiceResult;
    if (channel != null) {
      isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    if (!isGuildStageVoiceResult) {
      const result = isConnected(manualFocusedItem[52]).restoreDefaultOrientation();
      const obj2 = isConnected(manualFocusedItem[52]);
    }
  }, []);
});
const __initData15 = { code: "function VoicePanelControllerTsx17(){const{connected,mode,sharedTransitionState}=this.__closure;return[connected.get(),mode.get(),sharedTransitionState.get()];}" };
const __initData16 = { code: "function VoicePanelControllerTsx18(props,previous){const{cheapWorkletArrayShallowEqual,TransitionStates,VoicePanelModes,runOnJS,setMode}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined)){return;}const[isConnected,currentMode,currentTransitionState]=props;if(currentTransitionState===TransitionStates.YEETED){if(currentMode!==VoicePanelModes.DISMISSED){runOnJS(setMode)(VoicePanelModes.DISMISSED);}}else{if(currentMode===VoicePanelModes.DISMISSED){var _previous$;let previousMode=(_previous$=previous===null||previous===void 0?void 0:previous[1])!==null&&_previous$!==void 0?_previous$:VoicePanelModes.PANEL;bb35:switch(previousMode){case VoicePanelModes.PANEL:case VoicePanelModes.PIP:{if(!isConnected){previousMode=VoicePanelModes.PANEL;}break bb35;}default:{previousMode=VoicePanelModes.PANEL;}}runOnJS(setMode)(previousMode);}else{if(!isConnected&&(previous===null||previous===void 0?void 0:previous[0])===true&&currentMode===VoicePanelModes.PIP){runOnJS(setMode)(VoicePanelModes.PANEL);}}}}" };
const __initData17 = { code: "function VoicePanelControllerTsx19(){const{connected,mode,sharedTransitionState}=this.__closure;return[connected.get(),mode.get(),sharedTransitionState.get()];}" };
const __initData18 = { code: "function VoicePanelControllerTsx20(props,previous){const{cheapWorkletArrayShallowEqual,TransitionStates,VoicePanelModes,runOnJS,setMode}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[isConnected,currentMode,currentTransitionState]=props;if(currentTransitionState===TransitionStates.YEETED){if(currentMode!==VoicePanelModes.DISMISSED){runOnJS(setMode)(VoicePanelModes.DISMISSED);}}else if(currentMode===VoicePanelModes.DISMISSED){var _previous$;let previousMode=(_previous$=previous===null||previous===void 0?void 0:previous[1])!==null&&_previous$!==void 0?_previous$:VoicePanelModes.PANEL;switch(previousMode){case VoicePanelModes.PANEL:case VoicePanelModes.PIP:if(!isConnected){previousMode=VoicePanelModes.PANEL;}break;default:previousMode=VoicePanelModes.PANEL;}runOnJS(setMode)(previousMode);}else if(!isConnected&&(previous===null||previous===void 0?void 0:previous[0])===true&&currentMode===VoicePanelModes.PIP){runOnJS(setMode)(VoicePanelModes.PANEL);}}" };
ReactCompilerGating = fn(558);
let closure_63 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(transitionCleanUp[23]).c(9);
  channelId = channelId.channelId;
  const transitionState = channelId.transitionState;
  transitionCleanUp = channelId.transitionCleanUp;
  const connected = channelId.connected;
  const mode = channelId.mode;
  const setMode = channelId.setMode;
  let obj = channelId(transitionCleanUp[23]);
  const sharedValue = channelId(transitionCleanUp[25]).useSharedValue(transitionState);
  if (cResult[0] === channelId) {
    if (cResult[1] === sharedValue) {
      if (cResult[2] === transitionCleanUp) {
        if (cResult[3] === transitionState) {
          let tmp5 = cResult[4];
          let tmp6 = cResult[5];
        }
        const layoutEffect = mode.useLayoutEffect(tmp5, tmp6);
        if (cResult[6] !== channelId) {
          const fn2 = function l() {
            return () => {
              state = state.getState();
              const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "voice-panel-freeze-" + channelId });
            };
          };
          let items = [channelId];
          cResult[6] = channelId;
          cResult[7] = fn2;
          cResult[8] = items;
          let tmp9 = items;
          let tmp8 = fn2;
        } else {
          tmp8 = cResult[7];
          tmp9 = cResult[8];
        }
        const layoutEffect1 = mode.useLayoutEffect(tmp8, tmp9);
        const fn3 = function f() {
          const items = [connected.get(), mode.get(), sharedValue.get()];
          return items;
        };
        const obj4 = { connected, mode, sharedTransitionState: sharedValue };
        fn3.__closure = obj4;
        fn3.__workletHash = 10263230670165;
        fn3.__initData = __initData15;
        class S {
          constructor(arg0, arg1) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[26]);
            tmp3 = arg1;
            if (!obj.cheapWorkletArrayShallowEqual(channelId, tmp3)) {
              tmp4 = closure_3;
              num = 3;
              tmp5 = closure_3(channelId, 3);
              [tmp6, tmp7, tmp8] = tmp5;
              if (tmp8 === tmp(tmp2[55]).TransitionStates.YEETED) {
                if (tmp7 !== VoicePanelModes.DISMISSED) {
                  tmpResult = tmp(tmp2[25]);
                  tmp17 = setMode;
                  tmp18 = tmpResult.runOnJS(setMode)(tmp16.DISMISSED);
                }
              } else {
                tmp19 = VoicePanelModes;
                if (tmp7 === VoicePanelModes.DISMISSED) {
                  PANEL1 = undefined;
                  if (arg1 != null) {
                    PANEL1 = arg1[1];
                  }
                  if (PANEL1 == null) {
                    PANEL1 = tmp19.PANEL;
                  }
                  if (tmp19.PANEL !== PANEL1) {
                    if (tmp19.PIP !== PANEL1) {
                      PANEL = tmp19.PANEL;
                    }
                    tmpResult1 = tmp(tmp2[25]);
                    tmp14 = setMode;
                    tmp15 = tmpResult1.runOnJS(setMode)(PANEL);
                  }
                  PANEL = PANEL1;
                  if (!tmp6) {
                    PANEL = tmp19.PANEL;
                  }
                } else {
                  tmp9 = tmp6;
                  if (!tmp6) {
                    first = undefined;
                    if (arg1 != null) {
                      first = arg1[0];
                    }
                    flag = true;
                    tmp9 = true !== first;
                  }
                  if (!tmp9) {
                    tmp9 = tmp7 !== tmp19.PIP;
                  }
                  if (!tmp9) {
                    tmpResult2 = tmp(tmp2[25]);
                    tmp11 = setMode;
                    tmp12 = tmpResult2.runOnJS(setMode)(tmp19.PANEL);
                  }
                }
              }
            }
            return;
          }
        }
        const obj5 = { cheapWorkletArrayShallowEqual: tmp(tmp2[26]).cheapWorkletArrayShallowEqual, TransitionStates: tmp(tmp2[55]).TransitionStates, VoicePanelModes, runOnJS: tmp(tmp2[25]).runOnJS, setMode };
        S.__closure = obj5;
        S.__workletHash = 4550985758962;
        S.__initData = __initData16;
        const animatedReaction = tmp(tmp2[25]).useAnimatedReaction(fn3, S);
      }
    }
  }
  const fn = function s() {
    const result = sharedValue.set(transitionState);
    if (transitionState === native.TransitionStates.YEETED) {
      state = AppFreezeStore.getState();
      const obj = { lockEnabled: false, key: null };
      const _HermesInternal = HermesInternal;
      obj.key = "voice-panel-freeze-" + channelId;
      const freezeLock = state.requestFreezeLock(obj);
      const _setTimeout = setTimeout;
      const timeout = setTimeout(transitionCleanUp, 500);
      return () => clearTimeout(closure_0);
    }
  };
  const items1 = [transitionState, sharedValue, transitionCleanUp, channelId];
  cResult[0] = channelId;
  cResult[1] = sharedValue;
  cResult[2] = transitionCleanUp;
  cResult[3] = transitionState;
  cResult[4] = fn;
  cResult[5] = items1;
  tmp6 = items1;
  tmp5 = fn;
}) : ((channelId) => {
  channelId = channelId.channelId;
  const transitionState = channelId.transitionState;
  const transitionCleanUp = channelId.transitionCleanUp;
  const connected = channelId.connected;
  const mode = channelId.mode;
  const setMode = channelId.setMode;
  const sharedValue = channelId(transitionCleanUp[25]).useSharedValue(transitionState);
  let items = [transitionState, sharedValue, transitionCleanUp, channelId];
  const layoutEffect = mode.useLayoutEffect(() => {
    const result = sharedValue.set(transitionState);
    if (transitionState === native.TransitionStates.YEETED) {
      state = AppFreezeStore.getState();
      const obj = { lockEnabled: false, key: null };
      const _HermesInternal = HermesInternal;
      obj.key = "voice-panel-freeze-" + channelId;
      const freezeLock = state.requestFreezeLock(obj);
      const _setTimeout = setTimeout;
      const timeout = setTimeout(transitionCleanUp, 500);
      return () => clearTimeout(closure_0);
    }
  }, items);
  const items1 = [channelId];
  const layoutEffect1 = mode.useLayoutEffect(() => () => {
    state = state.getState();
    const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "voice-panel-freeze-" + channelId });
  }, items1);
  let obj = channelId(transitionCleanUp[25]);
  const fn = function p() {
    const items = [connected.get(), mode.get(), sharedValue.get()];
    return items;
  };
  fn.__closure = { connected, mode, sharedTransitionState: sharedValue };
  fn.__workletHash = 6719060903835;
  fn.__initData = __initData17;
  const fn2 = function f(arg0, arg1) {
    if (!obj.cheapWorkletArrayShallowEqual(arg0, arg1)) {
      [tmp6, tmp7, tmp8] = arg0;
      if (tmp8 === tmp(4471).TransitionStates.YEETED) {
        if (tmp7 !== VoicePanelModes.DISMISSED) {
          tmp(4497).runOnJS(setMode)(tmp16.DISMISSED);
          const tmpResult = tmp(4497);
        }
      } else if (tmp7 === VoicePanelModes.DISMISSED) {
        let PANEL1;
        if (arg1 != null) {
          PANEL1 = arg1[1];
        }
        if (PANEL1 == null) {
          PANEL1 = tmp19.PANEL;
        }
        if (tmp19.PANEL !== PANEL1) {
          if (tmp19.PIP !== PANEL1) {
            let PANEL = tmp19.PANEL;
          }
          tmp(4497).runOnJS(setMode)(PANEL);
          const tmpResult3 = tmp(4497);
        }
        PANEL = PANEL1;
        if (!tmp6) {
          PANEL = tmp19.PANEL;
        }
      } else {
        let tmp9 = tmp6;
        if (!tmp6) {
          let first;
          if (arg1 != null) {
            first = arg1[0];
          }
          tmp9 = true !== first;
        }
        if (!tmp9) {
          tmp9 = tmp7 !== tmp19.PIP;
        }
        if (!tmp9) {
          tmp(4497).runOnJS(setMode)(tmp19.PANEL);
          const tmpResult4 = tmp(4497);
        }
      }
      const tmp5 = _slicedToArray(arg0, 3);
    }
  };
  const obj2 = channelId(transitionCleanUp[25]);
  fn2.__closure = { cheapWorkletArrayShallowEqual: channelId(transitionCleanUp[26]).cheapWorkletArrayShallowEqual, TransitionStates: channelId(transitionCleanUp[55]).TransitionStates, VoicePanelModes, runOnJS: channelId(transitionCleanUp[25]).runOnJS, setMode };
  fn2.__workletHash = 3114816421157;
  fn2.__initData = __initData18;
  const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
});
ReactCompilerGating = fn(558);
let closure_64 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(focused[23]).c(26);
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  ({ layoutManager, focused } = guildId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelRTCStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function s() {
      return ChannelRTCStore.getSelectedParticipantId(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let obj = guildId(focused[23]);
  const stateFromStores = guildId(focused[29]).useStateFromStores(first, tmp6);
  if (cResult[3] === channelId) {
    if (cResult[4] === guildId) {
      let tmp8 = cResult[5];
    }
    noop = tmp8;
    AppState = noop.useRef(undefined);
    if (cResult[6] === layoutManager) {
      if (cResult[7] === stateFromStores) {
        let tmp9 = cResult[8];
      }
      closure_6 = tmp9;
      if (cResult[9] === focused) {
        if (cResult[10] === stateFromStores) {
          if (cResult[11] === tmp9) {
            let tmp13 = cResult[12];
            let tmp14 = cResult[13];
          }
          const layoutEffect = obj3.useLayoutEffect(tmp13, tmp14);
          class I {
            constructor() {
              tmp2 = null;
              if (null != closure_3) {
                obj = { id: null };
                obj.id = tmp;
                tmp3 = closure_6;
                tmp4 = obj;
                merged = Object.assign(closure_6);
                tmp2 = obj;
              }
              obj2 = closure_0(closure_2[26]);
              tmp6 = tmp2;
              current = closure_5.current;
              tmp7 = closure_5;
              if (!obj2.cheapWorkletShallowEqual(tmp6, current)) {
                tmp7.current = tmp2;
                tmp8 = focused;
                result = focused.set(tmp2);
              }
              return;
            }
          }
          EmbeddedActivitiesStore = tmp17;
          if (cResult[14] === tmp17) {
            if (cResult[15] === stateFromStores) {
              if (cResult[16] === tmp8) {
                let tmp18 = cResult[17];
                let tmp19 = cResult[18];
              }
              const effect = obj3.useEffect(tmp18, tmp19);
              if (cResult[19] === channelId) {
                if (cResult[20] === tmp8) {
                  let tmp21 = cResult[21];
                  let tmp22 = cResult[22];
                }
                const effect1 = obj3.useEffect(tmp22, tmp21);
                if (cResult[23] === stateFromStores) {
                  if (cResult[24] === tmp8) {
                    let tmp25 = cResult[25];
                  }
                  return tmp25;
                }
                class I {
                  constructor() {
                    tmp2 = null;
                    if (null != closure_3) {
                      obj = { id: null };
                      obj.id = tmp;
                      tmp3 = closure_6;
                      tmp4 = obj;
                      merged = Object.assign(closure_6);
                      tmp2 = obj;
                    }
                    obj2 = closure_0(closure_2[26]);
                    tmp6 = tmp2;
                    current = closure_5.current;
                    tmp7 = closure_5;
                    if (!obj2.cheapWorkletShallowEqual(tmp6, current)) {
                      tmp7.current = tmp2;
                      tmp8 = focused;
                      result = focused.set(tmp2);
                    }
                    return;
                  }
                }
                tmp26[0] = tmp8;
                tmp26[1] = stateFromStores;
                class T {
                  constructor() {
                    if (null != closure_3) {
                      tmp = closure_7;
                      if (!closure_7) {
                        tmp2 = closure_4;
                        tmp3 = closure_4(null);
                      }
                    }
                    return;
                  }
                }
                cResult[23] = stateFromStores;
                cResult[24] = tmp8;
                cResult[25] = tmp26;
                tmp25 = tmp26;
              }
              class I {
                constructor() {
                  tmp2 = null;
                  if (null != closure_3) {
                    obj = { id: null };
                    obj.id = tmp;
                    tmp3 = closure_6;
                    tmp4 = obj;
                    merged = Object.assign(closure_6);
                    tmp2 = obj;
                  }
                  obj2 = closure_0(closure_2[26]);
                  tmp6 = tmp2;
                  current = closure_5.current;
                  tmp7 = closure_5;
                  if (!obj2.cheapWorkletShallowEqual(tmp6, current)) {
                    tmp7.current = tmp2;
                    tmp8 = focused;
                    result = focused.set(tmp2);
                  }
                  return;
                }
              }
              const items1 = [channelId, ];
              class T {
                constructor() {
                  if (null != closure_3) {
                    tmp = closure_7;
                    if (!closure_7) {
                      tmp2 = closure_4;
                      tmp3 = closure_4(null);
                    }
                  }
                  return;
                }
              }
              cResult[19] = channelId;
              cResult[20] = tmp8;
              cResult[21] = items1;
              cResult[22] = tmp23;
              tmp22 = tmp23;
              tmp21 = items1;
            }
          }
          class T {
            constructor() {
              if (null != closure_3) {
                tmp = closure_7;
                if (!closure_7) {
                  tmp2 = closure_4;
                  tmp3 = closure_4(null);
                }
              }
              return;
            }
          }
          const items2 = [stateFromStores, tmp17, tmp8];
          cResult[14] = tmp17;
          cResult[15] = stateFromStores;
          cResult[16] = tmp8;
          cResult[17] = T;
          cResult[18] = items2;
          tmp19 = items2;
          tmp18 = T;
        }
      }
      class I {
        constructor() {
          tmp2 = null;
          if (null != closure_3) {
            obj = { id: null };
            obj.id = tmp;
            tmp3 = closure_6;
            tmp4 = obj;
            merged = Object.assign(closure_6);
            tmp2 = obj;
          }
          obj2 = closure_0(closure_2[26]);
          tmp6 = tmp2;
          current = closure_5.current;
          tmp7 = closure_5;
          if (!obj2.cheapWorkletShallowEqual(tmp6, current)) {
            tmp7.current = tmp2;
            tmp8 = focused;
            result = focused.set(tmp2);
          }
          return;
        }
      }
      const items3 = [focused, , tmp9];
      cResult[9] = focused;
      cResult[10] = stateFromStores;
      cResult[11] = tmp9;
      cResult[12] = I;
      cResult[13] = items3;
      tmp14 = items3;
      tmp13 = I;
    }
    const targetDimensions = layoutManager.getTargetDimensions(tmp11);
    cResult[6] = layoutManager;
    cResult[7] = stateFromStores;
    cResult[8] = targetDimensions;
    tmp9 = targetDimensions;
  }
  const fn2 = function _(id2) {
    let result = null == id2;
    if (!result) {
      result = useIsVoicePanelParticipantFocusable.isVoicePanelParticipantFocusable(guildId, channelId, id2);
    }
    if (result) {
      const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channelId, id2);
    }
  };
  cResult[3] = channelId;
  cResult[4] = guildId;
  cResult[5] = fn2;
  tmp8 = fn2;
}) : ((guildId) => {
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  ({ layoutManager, focused } = guildId);
  let setFocused;
  const items = [ChannelRTCStore];
  const manualFocusedItem = guildId(focused[29]).useStateFromStores(items, () => ChannelRTCStore.getSelectedParticipantId(channelId));
  const items1 = [guildId, channelId];
  setFocused = setFocused.useCallback((id2) => {
    let result = null == id2;
    if (!result) {
      result = useIsVoicePanelParticipantFocusable.isVoicePanelParticipantFocusable(guildId, channelId, id2);
    }
    if (result) {
      const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channelId, id2);
    }
  }, items1);
  setFocused.useRef(undefined);
  const targetDimensions = layoutManager.getTargetDimensions(manualFocusedItem);
  const items2 = [focused, manualFocusedItem, targetDimensions];
  const layoutEffect = obj2.useLayoutEffect(() => {
    let tmp2 = null;
    if (null != manualFocusedItem) {
      const obj = { id: tmp };
      const merged = Object.assign(targetDimensions);
      tmp2 = obj;
    }
    const current = ref.current;
    if (!obj2.cheapWorkletShallowEqual(tmp2, current)) {
      ref.current = tmp2;
      const result = focused.set(tmp2);
    }
  }, items2);
  const tmp7 = channelId(focused[56])(guildId, channelId, manualFocusedItem);
  closure_7 = tmp7;
  const items3 = [manualFocusedItem, tmp7, setFocused];
  const effect = obj2.useEffect(() => {
    if (null != manualFocusedItem) {
      if (!closure_7) {
        setFocused(null);
      }
    }
  }, items3);
  const items4 = [channelId, setFocused];
  const effect1 = obj2.useEffect(() => () => {
    channel = channel.getChannel(channelId);
    let isGuildStageVoiceResult;
    if (channel != null) {
      isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    if (isGuildStageVoiceResult) {
      isGuildStageVoiceResult = voiceChannelId.getVoiceChannelId() === channelId;
    }
    if (!isGuildStageVoiceResult) {
      setFocused(null);
    }
  }, items4);
  return { setFocused, manualFocusedItem };
});
ReactCompilerGating = fn(558);
let closure_65 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(mode[23]).c(17);
  channelId = channelId.channelId;
  const isConnected = channelId.isConnected;
  mode = channelId.mode;
  const connected = channelId.connected;
  const transitionState = channelId.transitionState;
  const controlsSpecs = channelId.controlsSpecs;
  const setControlsMode = channelId.setControlsMode;
  if (cResult[0] !== channelId) {
    const fn = function s() {
      const voicePanelsPIP = VoicePanelStore.getState().voicePanelsPIP;
      return voicePanelsPIP.has(channelId) ? VoicePanelModes.PIP : VoicePanelModes.PANEL;
    };
    cResult[0] = channelId;
    cResult[1] = fn;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  const tmp3 = connected(transitionState.useState(tmp2), 2);
  const selectedMode = tmp3[0];
  closure_8 = tmp5;
  if (cResult[2] === connected) {
    if (cResult[3] === isConnected) {
      if (cResult[4] === mode) {
        if (cResult[5] === selectedMode) {
          if (cResult[6] === transitionState) {
            let tmp6 = cResult[7];
          }
          const layoutEffect = transitionState.useLayoutEffect(tmp6);
          if (cResult[8] === channelId) {
            if (cResult[9] === connected) {
              if (cResult[10] === controlsSpecs) {
                if (cResult[11] === mode) {
                  if (cResult[12] === setControlsMode) {
                    let tmp8 = cResult[13];
                  }
                  if (cResult[14] === tmp8) {
                    if (cResult[15] === selectedMode) {
                      let tmp9 = cResult[16];
                    }
                    return tmp9;
                  }
                  const obj3 = { selectedMode, setMode: tmp5, dismissPanel: tmp8 };
                  cResult[14] = tmp8;
                  cResult[15] = selectedMode;
                  cResult[16] = obj3;
                  tmp9 = obj3;
                }
              }
            }
          }
          const fn3 = function w() {
            if (controlsSpecs.get().mode === VoicePanelControlsModes.DRAWER) {
              const obj = { mode: tmp.FLOATING_DEFAULT };
              setControlsMode(obj);
              let flag = true;
            } else if (connected.get()) {
              let flag2 = mode.get() === VoicePanelModes.PANEL;
              if (flag2) {
                closure_8(tmp7.PIP);
                flag2 = true;
              }
              flag = flag2;
            } else {
              state = VoicePanelStore.getState();
              state.closeChannel(channelId);
              flag = true;
            }
            return flag;
          };
          cResult[8] = channelId;
          cResult[9] = connected;
          cResult[10] = controlsSpecs;
          cResult[11] = mode;
          cResult[12] = setControlsMode;
          cResult[13] = fn3;
          tmp8 = fn3;
        }
      }
    }
  }
  const fn2 = function v() {
    const result = mode.set(first);
    if (transitionState !== native.TransitionStates.YEETED) {
      const result1 = connected.set(isConnected);
    }
  };
  cResult[2] = connected;
  cResult[3] = isConnected;
  cResult[4] = mode;
  cResult[5] = selectedMode;
  cResult[6] = transitionState;
  cResult[7] = fn2;
  tmp6 = fn2;
}) : ((channelId) => {
  channelId = channelId.channelId;
  ({ isConnected: importDefault, mode } = channelId);
  const connected = channelId.connected;
  ({ transitionState: noop, controlsSpecs } = channelId);
  const setControlsMode = channelId.setControlsMode;
  const tmp = connected(noop.useState(() => {
    const voicePanelsPIP = VoicePanelStore.getState().voicePanelsPIP;
    return voicePanelsPIP.has(channelId) ? VoicePanelModes.PIP : VoicePanelModes.PANEL;
  }), 2);
  const selectedMode = tmp[0];
  closure_8 = tmp3;
  const layoutEffect = noop.useLayoutEffect(() => {
    const result = mode.set(first);
    if (noop !== native.TransitionStates.YEETED) {
      const result1 = connected.set(importDefault);
    }
  });
  const items = [channelId, connected, mode, controlsSpecs, setControlsMode];
  return {
    selectedMode,
    setMode: tmp[1],
    dismissPanel: noop.useCallback(() => {
      if (controlsSpecs.get().mode === VoicePanelControlsModes.DRAWER) {
        const obj = { mode: tmp.FLOATING_DEFAULT };
        setControlsMode(obj);
        let flag = true;
      } else if (connected.get()) {
        let flag2 = mode.get() === VoicePanelModes.PANEL;
        if (flag2) {
          closure_8(tmp7.PIP);
          flag2 = true;
        }
        flag = flag2;
      } else {
        state = VoicePanelStore.getState();
        state.closeChannel(channelId);
        flag = true;
      }
      return flag;
    }, items)
  };
});
ReactCompilerGating = fn(558);
let closure_66 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(selectedMode[23]).c(5);
  channelId = channelId.channelId;
  const isConnected = channelId.isConnected;
  selectedMode = channelId.selectedMode;
  if (cResult[0] === channelId) {
    if (cResult[1] === isConnected) {
      if (cResult[2] === selectedMode) {
        let tmp2 = cResult[3];
        let tmp3 = cResult[4];
      }
      const effect = noop.useEffect(tmp2, tmp3);
    }
  }
  const fn = function n() {
    let tmp2 = selectedMode !== VoicePanelModes.DISMISSED;
    if (tmp2) {
      tmp2 = isConnected;
    }
    if (tmp2) {
      const obj2 = { video_layout: collapsedCategories(selectedMode) };
      const obj = AnalyticsUtilsDefault;
      const merged = Object.assign(AppAnalyticsUtils.collectVoiceAnalyticsMetadata(channelId));
      obj.track(constants.VIDEO_LAYOUT_TOGGLED, obj2);
    }
  };
  const items = [selectedMode, channelId, isConnected];
  cResult[0] = channelId;
  cResult[1] = isConnected;
  cResult[2] = selectedMode;
  cResult[3] = fn;
  cResult[4] = items;
  tmp3 = items;
  tmp2 = fn;
}) : ((channelId) => {
  channelId = channelId.channelId;
  const isConnected = channelId.isConnected;
  const selectedMode = channelId.selectedMode;
  const items = [selectedMode, channelId, isConnected];
  const effect = noop.useEffect(() => {
    let tmp2 = selectedMode !== VoicePanelModes.DISMISSED;
    if (tmp2) {
      tmp2 = isConnected;
    }
    if (tmp2) {
      const obj2 = { video_layout: collapsedCategories(selectedMode) };
      const obj = AnalyticsUtilsDefault;
      const merged = Object.assign(AppAnalyticsUtils.collectVoiceAnalyticsMetadata(channelId));
      obj.track(constants.VIDEO_LAYOUT_TOGGLED, obj2);
    }
  }, items);
});
const __initData19 = { code: "function VoicePanelControllerTsx21(){const{mode,controlsSpecs}=this.__closure;return[mode.get(),controlsSpecs.get().mode];}" };
const __initData20 = { code: "function VoicePanelControllerTsx22(props,previous){const{cheapWorkletArrayShallowEqual,VoicePanelControlsModes,VoicePanelModes,runOnJS,dismissKeyboard}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined)){return;}const[currentMode,currentControlsMode]=props;if(currentControlsMode!==VoicePanelControlsModes.DRAWER||currentMode!==VoicePanelModes.PANEL||(previous===null||previous===void 0?void 0:previous[0])!==VoicePanelModes.PANEL){runOnJS(dismissKeyboard)();}}" };
const __initData21 = { code: "function VoicePanelControllerTsx23(){const{mode,controlsSpecs}=this.__closure;return[mode.get(),controlsSpecs.get().mode];}" };
const __initData22 = { code: "function VoicePanelControllerTsx24(props,previous){const{cheapWorkletArrayShallowEqual,VoicePanelControlsModes,VoicePanelModes,runOnJS,dismissKeyboard}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[currentMode,currentControlsMode]=props;if(currentControlsMode!==VoicePanelControlsModes.DRAWER||currentMode!==VoicePanelModes.PANEL||(previous===null||previous===void 0?void 0:previous[0])!==VoicePanelModes.PANEL){runOnJS(dismissKeyboard)();}}" };
ReactCompilerGating = fn(558);
let closure_71 = ReactCompilerGating.isReactCompilerEnabled() ? ((mode) => {
  mode = mode.mode;
  const controlsSpecs = mode.controlsSpecs;
  const fn = function s() {
    const items = [mode.get(), controlsSpecs.get().mode];
    return items;
  };
  fn.__closure = { mode, controlsSpecs };
  fn.__workletHash = 15944299050724;
  fn.__initData = __initData19;
  const fn2 = function n(arg0, arg1) {
    if (!obj.cheapWorkletArrayShallowEqual(arg0, arg1)) {
      let tmp8 = _slicedToArray(arg0, 2)[1] === constants2.DRAWER;
      if (tmp8) {
        tmp8 = tmp6 === constants.PANEL;
      }
      if (tmp8) {
        let first;
        if (arg1 != null) {
          first = arg1[0];
        }
        tmp8 = first === constants.PANEL;
      }
      if (!tmp8) {
        tmp(tmp2[25]).runOnJS(tmp(tmp2[59]).dismissKeyboard)();
        const tmpResult = tmp(tmp2[25]);
      }
      const tmp5 = _slicedToArray(arg0, 2);
    }
  };
  const obj = mode(4497);
  fn2.__closure = { cheapWorkletArrayShallowEqual: mode(9660).cheapWorkletArrayShallowEqual, VoicePanelControlsModes, VoicePanelModes, runOnJS: mode(4497).runOnJS, dismissKeyboard: mode(4625).dismissKeyboard };
  fn2.__workletHash = 7909814705601;
  fn2.__initData = __initData20;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
}) : ((mode) => {
  mode = mode.mode;
  const controlsSpecs = mode.controlsSpecs;
  const fn = function c() {
    const items = [mode.get(), controlsSpecs.get().mode];
    return items;
  };
  fn.__closure = { mode, controlsSpecs };
  fn.__workletHash = 15511932425510;
  fn.__initData = __initData21;
  const fn2 = function s(arg0, arg1) {
    if (!obj.cheapWorkletArrayShallowEqual(arg0, arg1)) {
      let tmp8 = _slicedToArray(arg0, 2)[1] === constants2.DRAWER;
      if (tmp8) {
        tmp8 = tmp6 === constants.PANEL;
      }
      if (tmp8) {
        let first;
        if (arg1 != null) {
          first = arg1[0];
        }
        tmp8 = first === constants.PANEL;
      }
      if (!tmp8) {
        tmp(tmp2[25]).runOnJS(tmp(tmp2[59]).dismissKeyboard)();
        const tmpResult = tmp(tmp2[25]);
      }
      const tmp5 = _slicedToArray(arg0, 2);
    }
  };
  const obj = mode(4497);
  fn2.__closure = { cheapWorkletArrayShallowEqual: mode(9660).cheapWorkletArrayShallowEqual, VoicePanelControlsModes, VoicePanelModes, runOnJS: mode(4497).runOnJS, dismissKeyboard: mode(4625).dismissKeyboard };
  fn2.__workletHash = 15888393599905;
  fn2.__initData = __initData22;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
});
ReactCompilerGating = fn(558);
let closure_72 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c() {
      return new Set();
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  first1 = _slicedToArray(noop.useState(first), 1)[0];
  if (cResult[1] === arg1) {
    if (cResult[2] === arg0) {
      if (cResult[3] === first1) {
        let tmp4 = cResult[4];
        let tmp5 = cResult[5];
      }
      const effect = noop.useEffect(tmp4, tmp5);
      return first1;
    }
  }
  const fn2 = function u() {
    if (closure_1) {
      closure_0 = closure_0(first1[60]).runAfterInteractions(() => {
        set.clear();
        for (const item10008 of closure_0) {
          let addResult = set.add(item10008.id);
          continue;
        }
      }, 100);
      return () => {
        if (closure_0 != null) {
          closure_0.cancel();
        }
      };
    } else {
      first1.clear();
    }
  };
  const items = [arg1, arg0, first1];
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = first1;
  cResult[4] = fn2;
  cResult[5] = items;
  tmp5 = items;
  tmp4 = fn2;
}) : ((arg0, arg1) => {
  closure_0 = arg0;
  closure_1 = arg1;
  const first = _slicedToArray(noop.useState(() => new Set()), 1)[0];
  const items = [arg1, arg0, first];
  const effect = noop.useEffect(() => {
    if (closure_1) {
      closure_0 = closure_0(first[60]).runAfterInteractions(() => {
        set.clear();
        for (const item10008 of closure_0) {
          let addResult = set.add(item10008.id);
          continue;
        }
      }, 100);
      return () => {
        if (closure_0 != null) {
          closure_0.cancel();
        }
      };
    } else {
      first.clear();
    }
  }, items);
  return first;
});
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelController.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(streamOutputSinkStack[23]).c(129);
  channelId = channelId.channelId;
  const guildId = channelId.guildId;
  ({ children, transitionState, transitionCleanUp } = channelId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [safeArea];
    const fn = function l() {
      return safeArea.getMode() === showControls.PUSH_TO_TALK;
    };
    cResult[0] = items1;
    cResult[1] = fn;
    tmp4 = items1;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = channelId(streamOutputSinkStack[23]);
  const stateFromStores = channelId(streamOutputSinkStack[29]).useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        tmp = guildId(closure_2[61]);
        tmp1 = new tmp(safeArea.getMediaEngine());
        return tmp1;
      }
    }
    cResult[2] = E;
    const tmp8 = E;
  } else {
    class E {
      constructor() {
        tmp = guildId(closure_2[61]);
        tmp1 = new tmp(safeArea.getMediaEngine());
        return tmp1;
      }
    }
  }
  streamOutputSinkStack = _slicedToArray(channelType.useState(tmp8), 1)[0];
  if (cResult[3] !== streamOutputSinkStack) {
    class A {
      constructor() {
        return () => streamOutputSinkStack.cleanUp();
      }
    }
    const items2 = [streamOutputSinkStack];
    cResult[3] = streamOutputSinkStack;
    cResult[4] = A;
    cResult[5] = items2;
    let tmp11 = items2;
    const tmp10 = A;
  } else {
    class A {
      constructor() {
        return () => streamOutputSinkStack.cleanUp();
      }
    }
    tmp11 = cResult[5];
  }
  const effect = channelType.useEffect(tmp10, tmp11);
  const tmpResult = channelId(streamOutputSinkStack[29]);
  ({ items, isConnected } = guildId(streamOutputSinkStack[62])(channelId, guildId));
  const tmp13 = guildId(streamOutputSinkStack[62])(channelId, guildId);
  _slicedToArray = closure_72(items, isConnected);
  const tmp15 = useCoreSharedState(channelId, isConnected, items, stateFromStores);
  channelType = tmp15.channelType;
  const connected = tmp15.connected;
  const contentDimensions = tmp15.contentDimensions;
  const dragScrolling = tmp15.dragScrolling;
  const focused = tmp15.focused;
  const isCall = tmp15.isCall;
  const layoutManager = tmp15.layoutManager;
  const mode = tmp15.mode;
  const preJoinContentSize = tmp15.preJoinContentSize;
  safeArea = tmp15.safeArea;
  const scrollPosition = tmp15.scrollPosition;
  const windowDimensions = tmp15.windowDimensions;
  const wrapperDimensions = tmp15.wrapperDimensions;
  const isFocusedVideoZoomed = tmp15.isFocusedVideoZoomed;
  const setIsFocusedVideoZoomed = tmp15.setIsFocusedVideoZoomed;
  const useReducedMotion = tmp15.useReducedMotion;
  const wrapperOffset = tmp15.wrapperOffset;
  const morphablePanelMode = tmp15.morphablePanelMode;
  const pipHandoff = tmp15.pipHandoff;
  const tmp16 = useControlsState(mode, isConnected, connected, stateFromStores);
  const generateStateLocker = tmp16.generateStateLocker;
  const controlsSpecs = tmp16.controlsSpecs;
  const showControls = tmp16.showControls;
  const hideControls = tmp16.hideControls;
  const setControlsMode = tmp16.setControlsMode;
  if (cResult[6] === channelId) {
    class A {
      constructor() {
        return () => streamOutputSinkStack.cleanUp();
      }
    }
  }
  cResult[6] = channelId;
  cResult[7] = connected;
  cResult[8] = controlsSpecs;
  cResult[9] = isConnected;
  cResult[10] = mode;
  cResult[11] = setControlsMode;
  cResult[12] = transitionState;
  cResult[13] = { channelId, isConnected, mode, connected, transitionState, controlsSpecs, setControlsMode };
}) : ((channelId) => {
  channelId = channelId.channelId;
  const guildId = channelId.guildId;
  const transitionState = channelId.transitionState;
  let streamOutputSinkStack;
  _slicedToArray = undefined;
  noop = undefined;
  connected = undefined;
  c7 = undefined;
  focused = undefined;
  c9 = undefined;
  layoutManager = undefined;
  c12 = undefined;
  safeArea = undefined;
  c14 = undefined;
  windowDimensions = undefined;
  c16 = undefined;
  c17 = undefined;
  c18 = undefined;
  c19 = undefined;
  c20 = undefined;
  c21 = undefined;
  c22 = undefined;
  c23 = undefined;
  controlsSpecs = undefined;
  c26 = undefined;
  setControlsMode = undefined;
  c31 = undefined;
  c34 = undefined;
  c35 = undefined;
  let dismissToPIPGestureRef;
  ({ children, transitionCleanUp } = channelId);
  const items1 = [safeArea];
  const stateFromStores = channelId(streamOutputSinkStack[29]).useStateFromStores(items1, () => safeArea.getMode() === showControls.PUSH_TO_TALK);
  streamOutputSinkStack = _slicedToArray(noop.useState(() => {
    const tmp = guildId(first[61]);
    return new guildId(first[61])(safeArea.getMediaEngine());
  }), 1)[0];
  const items2 = [streamOutputSinkStack];
  const effect = noop.useEffect(() => () => streamOutputSinkStack.cleanUp(), items2);
  let obj = channelId(streamOutputSinkStack[29]);
  let tmp = channelId;
  let tmp4 = _slicedToArray;
  ({ items, isConnected } = guildId(streamOutputSinkStack[62])(channelId, guildId));
  _slicedToArray = closure_72(items, isConnected);
  const tmp9 = useCoreSharedState(channelId, isConnected, items, stateFromStores);
  ({ channelType: c4, connected } = tmp9);
  const contentDimensions = tmp9.contentDimensions;
  ({ dragScrolling: c7, focused } = tmp9);
  ({ isCall: c9, layoutManager } = tmp9);
  const mode = tmp9.mode;
  ({ preJoinContentSize: c12, safeArea } = tmp9);
  ({ scrollPosition: c14, windowDimensions } = tmp9);
  ({ wrapperDimensions: c16, isFocusedVideoZoomed: c17, setIsFocusedVideoZoomed: c18, useReducedMotion: c19, wrapperOffset: c20, morphablePanelMode: c21, pipHandoff: c22 } = tmp9);
  const tmp10 = useControlsState(mode, isConnected, connected, stateFromStores);
  ({ generateStateLocker: c23, controlsSpecs } = tmp10);
  const showControls = tmp10.showControls;
  ({ hideControls: c26, setControlsMode } = tmp10);
  const tmp11 = closure_65({ channelId, isConnected, mode, connected, transitionState, controlsSpecs, setControlsMode });
  const selectedMode = tmp11.selectedMode;
  const setMode = tmp11.setMode;
  const dismissPanel = tmp11.dismissPanel;
  const tmp8 = guildId(streamOutputSinkStack[62])(channelId, guildId);
  ({ manualFocusedItem, setFocused: c31 } = closure_64({ guildId, channelId, layoutManager, focused }));
  const tmp12 = closure_64({ guildId, channelId, layoutManager, focused });
  const items3 = [c7];
  const stateFromStores1 = channelId(streamOutputSinkStack[29]).useStateFromStores(items3, () => {
    const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
    const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
    let tmp4 = null != connectedActivityLocation;
    const activityPanelMode = EmbeddedActivitiesStore.getActivityPanelMode();
    if (tmp4) {
      tmp4 = embeddedActivityLocationChannelId !== channelId;
    }
    if (tmp4) {
      tmp4 = activityPanelMode === ActivityPanelModes.PANEL;
    }
    return tmp4;
  });
  closure_57({ isConnected, windowDimensions, contentDimensions, safeArea, layoutManager, items, pushToTalk: stateFromStores });
  const items4 = [selectedMode, stateFromStores1];
  const layoutEffect = noop.useLayoutEffect(() => {
    if (tmp) {
      const result = EmbeddedActivitiesActionCreators.updateActivityPanelMode(ActivityPanelModes.PIP);
    }
  }, items4);
  closure_71({ mode, controlsSpecs });
  closure_63({ channelId, transitionState, transitionCleanUp, connected, mode, setMode });
  const tmp18 = guildId(streamOutputSinkStack[64])({ mode, controlsSpecs, safeArea, windowDimensions });
  const pipAvoidanceSpecs = tmp18;
  const obj3 = channelId(streamOutputSinkStack[29]);
  const obj5 = { channelId, connected: isConnected, focusedId: manualFocusedItem, layoutManager, mode: selectedMode, windowDimensions, pipAvoidanceSpecs: tmp18, safeArea };
  const controllerPIPState = channelId(streamOutputSinkStack[65]).useControllerPIPState(obj5);
  closure_45({ channelId, selectedMode, manualFocusedItem });
  closure_43({ channelId, focused, pipState: controllerPIPState, manuallyFocusedId: manualFocusedItem });
  dismissToPIPGestureRef({ channelId, focused, mode, connected });
  c31({ setControlsMode });
  closure_38({ showControls });
  guildId(streamOutputSinkStack[66])(channelId, mode, setMode, connected);
  guildId(streamOutputSinkStack[67])();
  closure_58({ isConnected, selectedMode, manualFocusedItem, isNonVoiceEmbeddedActivityInPanelMode: stateFromStores1 });
  closure_66({ channelId, isConnected, selectedMode });
  const obj4 = channelId(streamOutputSinkStack[65]);
  ({ showFloatingCTA: c34, setShowFloatingCTA: c35 } = closure_44(mode));
  dismissToPIPGestureRef = obj2.useRef(undefined);
  const obj6 = { value: tmp4(noop.useState(() => ({ channelId, channelType, connected, contentDimensions, controlsSpecs, dismissPanel, dismissToPIPGestureRef, dragScrolling, focused, generateStateLocker, guildId, hideControls, isCall, isFocusedVideoZoomed, layoutManager, mode, morphablePanelMode, mountedCards, pipAvoidanceSpecs, preJoinContentSize, safeArea, scrollPosition, setControlsMode, setFocused, setIsFocusedVideoZoomed, setMode, setShowFloatingCTA, showControls, showFloatingCTA, streamOutputSinkStack, usePIPState: VoicePanelPIPStateContext.usePIPState, useReducedMotion, windowDimensions, wrapperDimensions, wrapperOffset, pipHandoff })), 1)[0], children: null };
  const obj7 = { value: controllerPIPState, children: null };
  let tmp32 = guildId;
  if (guildId == null) {
    tmp32 = null;
  }
  obj7.children = dismissPanel(guildId(streamOutputSinkStack[69]).Provider, { value: tmp32, children });
  obj6.children = dismissPanel(tmp(streamOutputSinkStack[68]).VoicePanelPIPStateContext.Provider, obj7);
  return dismissPanel(guildId(streamOutputSinkStack[70]).Provider, obj6);
});
