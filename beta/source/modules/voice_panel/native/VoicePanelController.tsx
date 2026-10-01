// Module ID: 16873
// Function ID: 16874
// Name: VoicePanelController
// Dependencies: [32, 19, 17, 4825, 2044, 4852, 7738, 8939, 8844, 2045, 1993, 4859, 2099, 5044, 11755, 11753, 1074, 2005, 8502, 4857, 11756, 21, 16874, 4566, 8853, 1091, 504, 4528, 8907, 1115, 16875, 16876, 9104, 8782, 16877, 1479, 1613, 16903, 11761, 11757, 10896, 12, 1255, 1110, 1248, 8926, 11516, 5180, 1241, 7780, 8805, 16833, 4540, 16904, 5037, 5016, 4701, 6459, 16905, 16906, 4458, 16907, 16908, 16915, 16838, 16916, 11754, 4718, 2]
// Exports: default

// Module 16873 (VoicePanelController)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import DurationsDefault from "Durations" /* 1091 */;
import Constants2 from "Constants" /* 2005 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4458 */;
import CallConstants from "CallConstants" /* 4857 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 8502 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 8782 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11756 */;
import VoicePanelPIPStateContext from "VoicePanelPIPStateContext" /* 16916 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4852 */;
import AppFreezeStore from "AppFreezeStore" /* 7738 */;
import SafeAreaDisabledStore from "SafeAreaDisabledStore" /* 8939 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 8844 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4859 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import VoicePanelStore from "VoicePanelStore" /* 5044 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11755 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11753 */;
import Constants from "Constants" /* 1074 */;
import size_mod from "module_2" /* 2 */;

let set;

let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let closure_25;
const AppState = react_native.AppState;
({ VoicePanelModes: closure_17, getAnalyticsNameForVoicePanelMode: closure_18 } = VoicePanelConstants);
({ CONTROLS_HEIGHT: closure_19, CONTROLS_HEIGHT_PTT: closure_20, CONTROLS_HIDE_TIMEOUT: closure_21, VoicePanelControlsModes: closure_22 } = VoicePanelControlsConstants);
({ AnalyticEvents: closure_23, ComponentActions: closure_24, InputModes: closure_25 } = Constants);
const OrientationLockState = Constants2.OrientationLockState;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const isActivityParticipant = CallConstants.isActivityParticipant;
const MorphablePanelModes = MorphablePanelConstants.MorphablePanelModes;
const jsx = Fragment.jsx;
let __initData = { code: "function VoicePanelControllerTsx1(){const{focused,mode,connected}=this.__closure;var _focused$get;return[(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,mode.get(),connected.get()];}" };
let closure_32 = { code: "function VoicePanelControllerTsx2(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,handleAnimatedReaction}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[focusedParticipantId,voicePanelMode,connectedValue]=props;runOnJS(handleAnimatedReaction)({focusedParticipantId:focusedParticipantId,voicePanelMode:voicePanelMode,connectedValue:connectedValue});}" };
let closure_33 = 5 * DurationsDefault.Millis.MINUTE;
let __initData2 = { code: "function VoicePanelControllerTsx3(){const{focused,pipState}=this.__closure;var _focused$get;return[(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,pipState.id];}" };
let closure_35 = { code: "function VoicePanelControllerTsx4(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,handleStateUpdates}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[focusedId,pipParticipantId]=props;runOnJS(handleStateUpdates)({focusedId:focusedId,pipParticipantId:pipParticipantId});}" };
let closure_36 = { code: "function VoicePanelControllerTsx5(value){const{isFocusedVideoZoomed}=this.__closure;isFocusedVideoZoomed.set(value);}" };
let __initData3 = { code: "function VoicePanelControllerTsx6(){const{mode,VoicePanelModes,MorphablePanelModes}=this.__closure;switch(mode.get()){case VoicePanelModes.PANEL:{return MorphablePanelModes.PANEL;}case VoicePanelModes.PIP:{return MorphablePanelModes.PIP;}default:{return MorphablePanelModes.UNDEFINED;}}}" };
const __initData4 = { code: "function VoicePanelControllerTsx7(){const{controlsSpecs,VoicePanelControlsModes,runOnJS,_queueHideControls}=this.__closure;const specs=controlsSpecs.get();if(specs.locked)return;if(specs.mode!==VoicePanelControlsModes.FLOATING_DEFAULT)return;runOnJS(_queueHideControls)();}" };
const __initData5 = { code: "function VoicePanelControllerTsx8(){const{mode}=this.__closure;return mode.get();}" };
const __initData6 = { code: "function VoicePanelControllerTsx9(value){const{VoicePanelModes,runOnJS,_queueHideControls,_clearHideControlsQueue}=this.__closure;if(value===VoicePanelModes.PANEL){runOnJS(_queueHideControls)();}else{runOnJS(_clearHideControlsQueue)();}}" };
const __initData7 = { code: "function VoicePanelControllerTsx10(){const{connected}=this.__closure;return connected.get();}" };
const __initData8 = { code: "function VoicePanelControllerTsx11(connected){const{updateSharedValueIfChanged,controlsSpecs,pushToTalk,CONTROLS_HEIGHT_PTT,CONTROLS_HEIGHT}=this.__closure;updateSharedValueIfChanged(controlsSpecs,{height:pushToTalk&&connected?CONTROLS_HEIGHT_PTT:CONTROLS_HEIGHT,pushToTalk:pushToTalk});}" };
let closure_43 = { code: "function VoicePanelControllerTsx12({windowState:windowState,safeAreaState:safeAreaState,contentState:contentState}){const{isConnected,cheapWorkletShallowEqual,contentDimensions,windowDimensions,safeArea,runOnJS,executeLayoutManagerEffect}=this.__closure;if(isConnected&&!cheapWorkletShallowEqual(contentDimensions.get(),contentState)){contentDimensions.set(contentState);}if(!cheapWorkletShallowEqual(windowDimensions.get(),windowState)){windowDimensions.set(windowState);}if(!cheapWorkletShallowEqual(safeArea.get(),safeAreaState)){safeArea.set(safeAreaState);}runOnJS(executeLayoutManagerEffect)();}" };
const __initData9 = { code: "function VoicePanelControllerTsx13(){const{connected,mode,sharedTransitionState}=this.__closure;return[connected.get(),mode.get(),sharedTransitionState.get()];}" };
const __initData10 = { code: "function VoicePanelControllerTsx14(props,previous){const{cheapWorkletArrayShallowEqual,TransitionStates,VoicePanelModes,runOnJS,setMode}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[isConnected,currentMode,currentTransitionState]=props;if(currentTransitionState===TransitionStates.YEETED){if(currentMode!==VoicePanelModes.DISMISSED){runOnJS(setMode)(VoicePanelModes.DISMISSED);}}else if(currentMode===VoicePanelModes.DISMISSED){var _previous$;let previousMode=(_previous$=previous===null||previous===void 0?void 0:previous[1])!==null&&_previous$!==void 0?_previous$:VoicePanelModes.PANEL;switch(previousMode){case VoicePanelModes.PANEL:case VoicePanelModes.PIP:if(!isConnected){previousMode=VoicePanelModes.PANEL;}break;default:previousMode=VoicePanelModes.PANEL;}runOnJS(setMode)(previousMode);}else if(!isConnected&&(previous===null||previous===void 0?void 0:previous[0])===true&&currentMode===VoicePanelModes.PIP){runOnJS(setMode)(VoicePanelModes.PANEL);}}" };
const __initData11 = { code: "function VoicePanelControllerTsx15(){const{mode,controlsSpecs}=this.__closure;return[mode.get(),controlsSpecs.get().mode];}" };
const __initData12 = { code: "function VoicePanelControllerTsx16(props,previous){const{cheapWorkletArrayShallowEqual,VoicePanelControlsModes,VoicePanelModes,runOnJS,dismissKeyboard}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[currentMode,currentControlsMode]=props;if(currentControlsMode!==VoicePanelControlsModes.DRAWER||currentMode!==VoicePanelModes.PANEL||(previous===null||previous===void 0?void 0:previous[0])!==VoicePanelModes.PANEL){runOnJS(dismissKeyboard)();}}" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelController.tsx");

export default function VoicePanelController(channelId) {
  let Provider2;
  let Provider3;
  let dismissPanel;
  let dismissToPIPGestureRef;
  let isConnected;
  let items;
  let obj27;
  let obj28;
  let pipAvoidanceSpecs;
  let tmp111;
  let tmpResult41;
  let transitionCleanUp;
  let transitionState;
  channelId = channelId.channelId;
  const guildId = channelId.guildId;
  ({ transitionState, transitionCleanUp } = channelId);
  let streamOutputSinkStack;
  let first1;
  let type;
  let sharedValue;
  let sharedValue11;
  let sharedValue5;
  let sharedValue6;
  let sharedValue7;
  let sharedValue3;
  let sharedValue4;
  let sharedValue2;
  let sharedValue21;
  let setIsFocusedVideoZoomed;
  let sharedValue10;
  let derivedValue;
  let first2;
  let callback3;
  let controlsSpecs;
  let callback5;
  let callback4;
  let callback6;
  let setControlsMode;
  let first4;
  let setMode;
  __initData = undefined;
  let callback7;
  let stateFromStores2;
  __initData2 = undefined;
  let sharedValue13;
  let callback12;
  __initData3 = undefined;
  let tmp = channelId;
  let tmp2 = streamOutputSinkStack;
  const children = channelId.children;
  let obj = channelId(streamOutputSinkStack[26]);
  const items1 = [sharedValue3];
  let tmp3 = sharedValue3;
  const stateFromStores = obj.useStateFromStores(items1, () => sharedValue3.getMode() === callback5.PUSH_TO_TALK);
  let obj2 = type;
  let tmp5 = first1;
  streamOutputSinkStack = first1(type.useState(() => {
    const tmp = guildId(first[58]);
    const tmp2 = new tmp(sharedValue3.getMediaEngine());
    return tmp2;
  }), 1)[0];
  const items2 = [streamOutputSinkStack];
  const effect = type.useEffect(() => () => streamOutputSinkStack.cleanUp(), items2);
  let tmp8 = guildId;
  let tmp9 = guildId(streamOutputSinkStack[59])(channelId, guildId);
  ({ items, isConnected } = tmp9);
  first1 = undefined;
  first1 = first1(type.useState(() => {
    set = new Set();
    return set;
  }), 1)[0];
  const items3 = [isConnected, items, first1];
  const effect1 = type.useEffect(() => {
    const tmp = isConnected;
    if (tmp) {
      let obj = items(first1[57]);
      let closure_0 = obj.runAfterInteractions(() => {
        set.clear();
        for (const item10008 of closure_0) {
          let addResult = set.add(item10008.id);
          continue;
        }
      }, 100);
      return () => {
        const obj = closure_0;
        if (closure_0 != null) {
          obj.cancel();
        }
      };
    } else {
      let tmp2 = first1;
      first1.clear();
    }
  }, items3);
  let sharedValue1;
  size = undefined;
  let rect;
  let sharedValue8;
  let sharedValue9;
  let first3;
  let channel = sharedValue7.getChannel(channelId);
  let flag;
  if (channel != null) {
    flag = channel.isDM();
  }
  if (flag == null) {
    flag = false;
  }
  type = undefined;
  if (channel != null) {
    type = channel.type;
  }
  let tmpResult = tmp(tmp2[23]);
  sharedValue = tmpResult.useSharedValue(isConnected);
  const tmpResult34 = tmp(tmp2[23]);
  sharedValue1 = tmpResult34.useSharedValue(sharedValue8.PANEL);
  const tmpResult35 = tmp(tmp2[35]);
  size = tmpResult35.getWindowDimensions();
  const size1 = { width: size.width, height: size.height, landscape: size.width > size.height };
  const tmpResult36 = tmp(tmp2[23]);
  sharedValue2 = tmpResult36.useSharedValue(size1);
  const tmpResult37 = tmp(tmp2[36]);
  rect = tmpResult37.getSafeAreaInsets();
  let obj3 = {};
  const useSharedValue = tmp(tmp2[23]).useSharedValue;
  tmp(tmp2[23]);
  let merged = Object.assign(rect);
  sharedValue3 = useSharedValue(obj3);
  let obj4 = { windowWidth: size.width, connected: isConnected, safeAreaLeft: rect.left, safeAreaRight: rect.right };
  const tmpResult39 = tmp(tmp2[37]);
  const maxPanelWidth = tmpResult39.getMaxPanelWidth(obj4);
  let obj5 = { drawerHeight: size.height, drawerWidth: maxPanelWidth, drawerX: tmpResult41.getPanelX(size.width, maxPanelWidth), drawerY: size.height, pipX: -1, pipY: -1, animated: true, mode: sharedValue8.PANEL };
  const useSharedValue2 = tmp(tmp2[23]).useSharedValue;
  tmp(tmp2[23]);
  tmpResult41 = tmp(tmp2[37]);
  sharedValue21 = useSharedValue2(obj5);
  const tmpResult42 = tmp(tmp2[23]);
  sharedValue4 = tmpResult42.useSharedValue(0);
  const tmpResult43 = tmp(tmp2[23]);
  sharedValue5 = tmpResult43.useSharedValue(false);
  const tmpResult44 = tmp(tmp2[23]);
  sharedValue6 = tmpResult44.useSharedValue(null);
  const tmpResult45 = tmp(tmp2[23]);
  sharedValue7 = tmpResult45.useSharedValue(0);
  first2 = tmp5(obj2.useState(() => {
    const tmp = new guildId(first[38])();
    return tmp;
  }), 1)[0];
  const tmpResult46 = tmp(tmp2[23]);
  sharedValue8 = tmpResult46.useSharedValue(false);
  let fn = function h(arg0) {
    const result = sharedValue8.set(arg0);
  };
  fn.__closure = { isFocusedVideoZoomed: sharedValue8 };
  fn.__workletHash = 13885070318174;
  fn.__initData = callback12;
  const items4 = [sharedValue8];
  setIsFocusedVideoZoomed = obj2.useCallback(fn, items4);
  const tmpResult47 = tmp(tmp2[23]);
  sharedValue9 = tmpResult47.useSharedValue(sharedValue11.useReducedMotion);
  const items5 = [sharedValue9];
  const effect2 = obj2.useEffect(() => {
    function onChange() {
      const result = sharedValue9.set(sharedValue8.useReducedMotion);
    }
    let result = sharedValue8.addReactChangeListener(onChange);
    return () => {
      const result = sharedValue11.removeReactChangeListener(onChange);
    };
  }, items5);
  const tmpResult48 = tmp(tmp2[23]);
  sharedValue10 = tmpResult48.useSharedValue({ gestureActive: false, x: 0, y: 0 });
  const fn2 = function q() {
    const value = sharedValue1.get();
    if (sharedValue8.PANEL === value) {
      return first4.PANEL;
    } else if (tmp2.PIP === value) {
      return first4.PIP;
    } else {
      return first4.UNDEFINED;
    }
  };
  let obj6 = { mode: sharedValue1, VoicePanelModes: sharedValue8, MorphablePanelModes: first4 };
  fn2.__closure = obj6;
  fn2.__workletHash = 931249605381;
  fn2.__initData = __initData3;
  const tmpResult49 = tmp(tmp2[23]);
  derivedValue = tmpResult49.useDerivedValue(fn2);
  first3 = tmp5(obj2.useState(() => {
    const obj = new guildId(first[39])(channelId);
    const obj2 = { windowWidth: size.width, windowHeight: size.height, safeAreaLeft: rect.left, safeAreaRight: rect.right, safeAreaTop: rect.top, safeAreaBottom: rect.bottom, controlBarSize: stateFromStores ? sharedValue10 : sharedValue9 };
    obj.updateState(items, obj2);
    return obj;
  }), 1)[0];
  const items6 = [first3];
  const layoutEffect = obj2.useLayoutEffect(() => () => first3.cleanUp(), items6);
  const tmpResult50 = tmp(tmp2[23]);
  sharedValue11 = tmpResult50.useSharedValue(first3.getContentDimensions());
  let closure_4;
  let closure_5;
  let callback1;
  let callback2;
  let cancelControlsDebounce;
  setControlsMode = undefined;
  let closure_10;
  tmp(tmp2[23]);
  const obj7 = { mode: first2.FLOATING_DEFAULT, locked: false, height: null, pushToTalk: null };
  if (stateFromStores) {
    let tmp39;
    if (isConnected) {
      tmp39 = sharedValue10;
    }
    obj7.height = tmp39;
    obj7.pushToTalk = stateFromStores;
    const tmp37Result = tmp37(obj7);
    closure_4 = tmp37Result;
    closure_5 = obj2.useRef(-1);
    callback1 = obj2.useCallback(() => {
      if (-1 !== ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
        ref.current = -1;
      }
    }, []);
    const items7 = [tmp37Result, callback1, sharedValue1];
    callback2 = obj2.useCallback(() => {
      let tmp2;
      callback1();
      if (-1 === ref.current) {
        const _setTimeout = setTimeout;
        tmp2.current = setTimeout(() => {
          callback1();
          if (sharedValue1.get() === constants.PANEL) {
            let locked = closure_1_4.get().mode !== constants2.FLOATING_DEFAULT;
            const tmp2 = constants2;
            if (!locked) {
              locked = obj.get().locked;
            }
            if (!locked) {
              const obj2 = { mode: tmp2.HIDDEN };
              isConnected(sharedValue[40])(closure_1_4, obj2);
            }
          }
        }, derivedValue);
      }
    }, items7);
    const items8 = [tmp37Result, callback2];
    const memo = obj2.useMemo(() => {
      let obj = isConnected(sharedValue[41]);
      let closure_0 = obj.debounce(function _setControlsMode(mode, returnMode) {
        const obj = { mode, returnMode };
        isConnected(sharedValue[40])(closure_1_4, obj);
        callback2();
      }, 200);
      let obj2 = {
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
            FLOATING_DEFAULT = first2.FLOATING_DEFAULT;
          }
          if (debounce) {
            closure_0(mode, FLOATING_DEFAULT);
          } else {
            closure_0.cancel();
            const obj2 = { mode, returnMode: FLOATING_DEFAULT };
            guildId(first[40])(closure_4, obj2);
            callback2();
          }
        }
      };
      return obj2;
    }, items8);
    cancelControlsDebounce = memo.cancelControlsDebounce;
    setControlsMode = memo.setControlsMode;
    const _Set = Set;
    const self = this;
    const self2 = this;
    const useRef = obj2.useRef;
    set = new Set();
    closure_10 = useRef(set);
    const items9 = [tmp37Result, callback2, callback1];
    const items10 = [setControlsMode];
    callback3 = obj2.useCallback((arg0) => {
      let v4Result = arg0;
      if (arg0 == null) {
        let tmp2 = sharedValue1;
        let obj = sharedValue1(sharedValue[42]);
        v4Result = obj.v4();
      }
      sharedValue1 = v4Result;
      return {
        lock(mode) {
          const current = ref.current;
          const tmp2 = v4Result;
          if (!current.has(v4Result)) {
            callback1();
            const current2 = tmp.current;
            current2.add(tmp2);
            const obj = { locked: ref.current.size > 0 };
            if (null != mode) {
              obj.mode = mode;
            }
            guildId(first[40])(closure_4, obj);
          }
        },
        unlock(mode) {
          const current = ref.current;
          const tmp2 = v4Result;
          if (current.has(v4Result)) {
            const current2 = tmp.current;
            current2.delete(tmp2);
            const obj = { locked: ref.current.size > 0 };
            if (null != mode) {
              obj.mode = mode;
            }
            guildId(first[40])(closure_4, obj);
            callback2();
          }
        }
      };
    }, items9);
    const items11 = [setControlsMode, tmp37Result];
    callback4 = obj2.useCallback(() => {
      let obj = arg0;
      if (arg0 === undefined) {
        obj = { debounce: false };
      }
      const obj2 = { mode: first2.HIDDEN, debounce: obj.debounce };
      setControlsMode(obj2);
    }, items10);
    callback5 = obj2.useCallback(() => {
      let obj = arg0;
      if (arg0 === undefined) {
        obj = {};
      }
      let debounce = obj.debounce;
      if (debounce === undefined) {
        debounce = false;
      }
      let mode = closure_4.get().returnMode;
      const tmp = setControlsMode;
      if (mode == null) {
        mode = first2.FLOATING_DEFAULT;
      }
      return tmp({ mode, debounce });
    }, items11);
    const fn3 = function l() {
      const value = closure_4.get();
      if (!value.locked) {
        if (value.mode === first2.FLOATING_DEFAULT) {
          const obj = channelId(first[23]);
          obj.runOnJS(callback2)();
        }
      }
    };
    const useCallback = obj2.useCallback;
    fn3.__closure = { controlsSpecs: tmp37Result, VoicePanelControlsModes: first2, runOnJS: tmp(tmp2[23]).runOnJS, _queueHideControls: callback2 };
    fn3.__workletHash = 11728765250899;
    fn3.__initData = __initData4;
    const items12 = [tmp37Result, callback2];
    const obj8 = { controlsSpecs: tmp37Result, VoicePanelControlsModes: first2, runOnJS: tmp(tmp2[23]).runOnJS, _queueHideControls: callback2 };
    callback6 = useCallback(fn3, items12);
    const fn4 = function h() {
      return sharedValue1.get();
    };
    const obj9 = { mode: sharedValue1 };
    fn4.__closure = obj9;
    fn4.__workletHash = 974064852045;
    fn4.__initData = __initData5;
    const fn5 = function u(arg0) {
      if (arg0 === sharedValue8.PANEL) {
        const obj2 = channelId(first[23]);
        obj2.runOnJS(callback2)();
      } else {
        const obj = channelId(first[23]);
        obj.runOnJS(callback1)();
      }
    };
    const obj10 = { VoicePanelModes: sharedValue8, runOnJS: tmp(tmp2[23]).runOnJS, _queueHideControls: callback2, _clearHideControlsQueue: callback1 };
    const useAnimatedReaction = tmp(tmp2[23]).useAnimatedReaction;
    tmp(tmp2[23]);
    fn5.__closure = obj10;
    fn5.__workletHash = 14878725055629;
    fn5.__initData = __initData6;
    const animatedReaction = useAnimatedReaction(fn4, fn5);
    const items13 = [stateFromStores, tmp37Result, isConnected];
    const layoutEffect1 = obj2.useLayoutEffect(() => {
      if (stateFromStores) {
        let tmp5;
        const tmp4 = isConnected;
        if (tmp4) {
          tmp5 = sharedValue10;
        }
        const obj = { height: tmp5, pushToTalk: tmp3 };
        tmp(tmp2, obj);
      }
      tmp5 = sharedValue9;
    }, items13);
    const fn6 = function f() {
      return sharedValue.get();
    };
    const obj11 = { connected: sharedValue };
    fn6.__closure = obj11;
    fn6.__workletHash = 16839042645652;
    fn6.__initData = __initData7;
    const tmpResult53 = tmp(tmp2[23]);
    class S {
      constructor(arg0) {
        if (stateFromStores) {
          let tmp5;
          const tmp4 = arg0;
          if (tmp4) {
            tmp5 = sharedValue10;
          }
          const obj = { height: tmp5, pushToTalk: tmp3 };
          tmp(tmp2, obj);
        }
        tmp5 = sharedValue9;
      }
    }
    const useAnimatedReaction2 = tmpResult53.useAnimatedReaction;
    let tmp60 = sharedValue9;
    S.__closure = { updateSharedValueIfChanged: tmp8(tmp2[40]), controlsSpecs: tmp37Result, pushToTalk: stateFromStores, CONTROLS_HEIGHT_PTT: sharedValue10, CONTROLS_HEIGHT: sharedValue9 };
    S.__workletHash = 8961429796283;
    S.__initData = __initData8;
    const obj12 = { updateSharedValueIfChanged: tmp8(tmp2[40]), controlsSpecs: tmp37Result, pushToTalk: stateFromStores, CONTROLS_HEIGHT_PTT: sharedValue10, CONTROLS_HEIGHT: sharedValue9 };
    const animatedReaction2 = useAnimatedReaction2(fn6, S);
    const items14 = [cancelControlsDebounce, callback1];
    const layoutEffect2 = obj2.useLayoutEffect(() => () => {
      cancelControlsDebounce();
      callback1();
    }, items14);
    const items15 = [setControlsMode];
    const effect3 = obj2.useEffect(() => {
      function closeTiV() {
        const obj = { mode: constants2.FLOATING_DEFAULT };
        setControlsMode(obj);
      }
      let ComponentDispatch = sharedValue1(sharedValue[43]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(constants3.VOICE_PANEL_TIV_CLOSE, closeTiV);
      return () => {
        const ComponentDispatch = channelId(first[43]).ComponentDispatch;
        ComponentDispatch.unsubscribe(constants.VOICE_PANEL_TIV_CLOSE, closeTiV);
      };
    }, items15);
    controlsSpecs = tmp37Result;
    const tmp5Result = tmp5(obj2.useState(() => {
      const voicePanelsPIP = sharedValue21.getState().voicePanelsPIP;
      return voicePanelsPIP.has(channelId) ? sharedValue8.PIP : sharedValue8.PANEL;
    }), 2);
    first4 = tmp5Result[0];
    const layoutEffect3 = obj2.useLayoutEffect(() => {
      const result = sharedValue1.set(first4);
      if (transitionState !== channelId(first[52]).TransitionStates.YEETED) {
        const result1 = sharedValue.set(isConnected);
      }
    });
    const items16 = [channelId, sharedValue, sharedValue1, tmp37Result, setControlsMode];
    setMode = tmp67;
    __initData = obj2.useCallback(() => {
      if (closure_5.get().mode === first2.DRAWER) {
        const obj = { mode: tmp.FLOATING_DEFAULT };
        setControlsMode(obj);
        flag = true;
      } else if (sharedValue.get()) {
        let flag2 = sharedValue1.get() === sharedValue8.PANEL;
        if (flag2) {
          closure_8(tmp7.PIP);
          flag2 = true;
        }
        flag = flag2;
      } else {
        const state = sharedValue21.getState();
        state.closeChannel(channelId);
        flag = true;
      }
      return flag;
    }, items16);
    const items17 = [sharedValue6];
    const tmpResult54 = tmp(tmp2[26]);
    const stateFromStores1 = tmpResult54.useStateFromStores(items17, () => sharedValue6.getSelectedParticipantId(channelId));
    const items18 = [guildId, channelId];
    callback7 = obj2.useCallback((id2) => {
      let result = null == id2;
      if (!result) {
        const obj = channelId(first[53]);
        result = obj.isVoicePanelParticipantFocusable(guildId, channelId, id2);
      }
      if (result) {
        const obj2 = guildId(first[54]);
        const participant = obj2.selectParticipant(channelId, id2);
      }
    }, items18);
    closure_5 = obj2.useRef(undefined);
    const getTargetDimensions = first3.getTargetDimensions;
    const targetDimensions = getTargetDimensions(stateFromStores1);
    const items19 = [sharedValue6, stateFromStores1, targetDimensions];
    const layoutEffect4 = obj2.useLayoutEffect(() => {
      let tmp2 = null;
      if (null != stateFromStores1) {
        const obj = { id: tmp };
        const merged = Object.assign(targetDimensions);
        tmp2 = obj;
      }
      const cheapWorkletShallowEqual = channelId(first[24]).cheapWorkletShallowEqual;
      channelId(first[24]);
      const current = ref.current;
      const tmp7 = tmp2;
      const tmp8 = ref;
      if (!cheapWorkletShallowEqual(tmp7, current)) {
        tmp8.current = tmp2;
        const result = sharedValue6.set(tmp2);
      }
    }, items19);
    const tmp75 = tmp8(tmp2[53])(guildId, channelId, stateFromStores1);
    let closure_7 = tmp75;
    const items20 = [stateFromStores1, tmp75, callback7];
    const effect4 = obj2.useEffect(() => {
      if (null != stateFromStores1) {
        const tmp = closure_7;
        if (!tmp) {
          callback7(null);
        }
      }
    }, items20);
    const items21 = [channelId, callback7];
    const effect5 = obj2.useEffect(() => () => {
      channel = channel.getChannel(channelId);
      let isGuildStageVoiceResult;
      const tmp = channelId;
      if (channel != null) {
        isGuildStageVoiceResult = channel.isGuildStageVoice();
      }
      if (isGuildStageVoiceResult) {
        isGuildStageVoiceResult = voiceChannelId.getVoiceChannelId() === tmp;
      }
      if (!isGuildStageVoiceResult) {
        callback7(null);
      }
    }, items21);
    const items22 = [sharedValue5];
    const tmpResult55 = tmp(tmp2[26]);
    stateFromStores2 = tmpResult55.useStateFromStores(items22, () => {
      const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
      const obj = embeddedActivityLocationUtils;
      const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
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
    let c13;
    const tmp5Result3 = tmp5(obj2.useState(() => {
      let height;
      let width;
      const obj = channelId(first[35]);
      const windowDimensions = obj.getWindowDimensions();
      ({ width, height } = windowDimensions);
      size = { width, height, landscape: width > height };
      return size;
    }), 2);
    const first5 = tmp5Result3[0];
    let closure_6 = tmp82;
    const useState = obj2.useState;
    const tmpResult56 = tmp(tmp2[36]);
    const tmp5Result4 = tmp5(useState(tmpResult56.getSafeAreaInsets()), 2);
    const first6 = tmp5Result4[0];
    let closure_8 = tmp85;
    const tmpResult57 = tmp(tmp2[39]);
    const managerSubscription = tmpResult57.useManagerSubscription(first3);
    const obj13 = { timeout: -1, layoutKey: managerSubscription, connected: isConnected, windowState: first5, safeAreaState: first6, contentDimensions: { width: 0, height: 0 } };
    const ref = obj2.useRef(obj13);
    streamOutputSinkStack = tmp82;
    let closure_3 = tmp85;
    const items23 = [ref, isConnected, tmp5Result3[1], tmp5Result4[1]];
    const layoutEffect5 = obj2.useLayoutEffect(() => {
      let tmp;
      if (ref.current.connected !== isConnected) {
        ref.current.connected = tmp;
        let tmp2 = closure_2;
        closure_2((safeAreaState) => {
          let height;
          let width;
          let windowState = safeAreaState;
          const obj = isConnected(closure_2[35]);
          const windowDimensions = obj.getWindowDimensions();
          ({ width, height } = windowDimensions);
          ref.current.windowState = { width, height, landscape: width > height };
          const obj2 = isConnected(closure_2[24]);
          const tmp2 = ref;
          if (!obj2.cheapWorkletShallowEqual(safeAreaState, ref.current.windowState)) {
            windowState = tmp2.current.windowState;
          }
          return windowState;
        });
        closure_3((safeAreaState) => {
          const current = ref.current;
          const obj = isConnected(closure_2[36]);
          current.safeAreaState = obj.getSafeAreaInsets();
          const obj2 = isConnected(closure_2[24]);
          const tmp = ref;
          if (!obj2.cheapWorkletShallowEqual(safeAreaState, ref.current.safeAreaState)) {
            safeAreaState = tmp.current.safeAreaState;
          }
          return safeAreaState;
        });
      }
    }, items23);
    const callback8 = obj2.useCallback(() => {
      clearTimeout(ref.current.timeout);
      ref.current.timeout = setTimeout(() => {
        clearTimeout(ref.current.timeout);
        let obj = sharedValue2(sharedValue11[44]);
        obj.batchUpdates(() => {
          let tmp = closure_1_6((current) => {
            let windowState = current;
            const obj = closure_2_0(closure_2_2[24]);
            const tmp = ref;
            if (!obj.cheapWorkletShallowEqual(ref.current.windowState, current)) {
              windowState = tmp.current.windowState;
            }
            return windowState;
          });
          closure_1_8((current) => {
            let safeAreaState = current;
            const obj = closure_2_0(closure_2_2[24]);
            const tmp = ref;
            if (!obj.cheapWorkletShallowEqual(ref.current.safeAreaState, current)) {
              safeAreaState = tmp.current.safeAreaState;
            }
            return safeAreaState;
          });
        });
      }, 60);
    }, []);
    const items24 = [callback8];
    const layoutEffect6 = obj2.useLayoutEffect(() => {
      let height;
      let width;
      let tmp = sharedValue3;
      let closure_0 = sharedValue3(sharedValue11[45])(function updateSafeAreas(current) {
        const obj = sharedValue2(sharedValue11[24]);
        const tmp = ref;
        if (!obj.cheapWorkletShallowEqual(ref.current.safeAreaState, current)) {
          current = tmp.current;
          const obj2 = {};
          const merged = Object.assign(current);
          current.safeAreaState = obj2;
          callback8();
        }
      });
      let obj = sharedValue2(sharedValue11[36]);
      const safeAreaInsets = obj.getSafeAreaInsets();
      let obj2 = sharedValue2(sharedValue11[24]);
      if (!obj2.cheapWorkletShallowEqual(ref.current.safeAreaState, safeAreaInsets)) {
        let obj3 = {};
        let current = tmp5.current;
        let merged = Object.assign(safeAreaInsets);
        current.safeAreaState = obj3;
        callback8();
      }
      function updateWindowDimensions() {
        let height;
        let width;
        let windowDimensions = arg0;
        if (arg0 === undefined) {
          const obj = sharedValue2(sharedValue11[35]);
          windowDimensions = obj.getWindowDimensions();
        }
        ({ width, height } = windowDimensions);
        size = { width, height, landscape: width > height };
        const obj3 = sharedValue2(sharedValue11[24]);
        const tmp4 = ref;
        if (!obj3.cheapWorkletShallowEqual(ref.current.windowState, size)) {
          tmp4.current.windowState = size;
          callback8();
        }
      }
      let closure_1 = tmp(tmp2[46])(updateWindowDimensions);
      const tmp3Result = sharedValue2(sharedValue11[35]);
      let windowDimensions = tmp3Result.getWindowDimensions();
      ({ width, height } = windowDimensions);
      size = { width, height, landscape: width > height };
      const tmp3Result2 = sharedValue2(sharedValue11[24]);
      if (!tmp3Result2.cheapWorkletShallowEqual(ref.current.windowState, size)) {
        ref.current.windowState = size;
        callback8();
      }
      return () => {
        closure_0();
        closure_1();
      };
    }, items24);
    let id = obj2.useId();
    const items25 = [isConnected, id];
    const layoutEffect7 = obj2.useLayoutEffect(() => {
      let key;
      const tmp = isConnected;
      if (tmp) {
        let state = first3.getState();
        let obj = { key: id, lockEnabled: true };
        let safeAreaDisableLock = state.requestSafeAreaDisableLock(obj);
        return () => {
          const state = ref.getState();
          const obj = { key, lockEnabled: false };
          const safeAreaDisableLock = state.requestSafeAreaDisableLock(obj);
        };
      }
    }, items25);
    const obj14 = { windowWidth: null, windowHeight: null, safeAreaLeft: null, safeAreaRight: null, safeAreaTop: null, safeAreaBottom: null, controlBarSize: tmp60 };
    ({ width: obj37.windowWidth, height: obj37.windowHeight } = first5);
    ({ left: obj37.safeAreaLeft, right: obj37.safeAreaRight, top: obj37.safeAreaTop, bottom: obj37.safeAreaBottom } = first6);
    const updateState = first3.updateState;
    const tmp59 = sharedValue10;
    const tmp78 = sharedValue5;
    if (stateFromStores) {
      tmp60 = tmp59;
    }
    const updateStateResult = updateState(items, obj14);
    c13 = updateStateResult;
    const items26 = [sharedValue11, updateStateResult, managerSubscription, first3, sharedValue3, first6, sharedValue2, first5, isConnected];
    const layoutEffect8 = obj2.useLayoutEffect(() => {
      function executeLayoutManagerEffect() {
        return first3.handleLayoutEffect();
      }
      ref.current.layoutKey = managerSubscription;
      let obj = sharedValue2(sharedValue11[23]);
      const fn = function t(arg0) {
        let safeAreaState;
        let windowState;
        ({ windowState, safeAreaState, contentState } = arg0);
        let tmp = isConnected;
        if (tmp) {
          const obj = channelId(first[24]);
          tmp = !obj.cheapWorkletShallowEqual(sharedValue11.get(), contentState);
        }
        if (tmp) {
          const result = sharedValue11.set(contentState);
        }
        const obj2 = channelId(first[24]);
        const obj3 = sharedValue2;
        if (!obj2.cheapWorkletShallowEqual(sharedValue2.get(), windowState)) {
          const result1 = obj3.set(windowState);
        }
        const obj4 = channelId(first[24]);
        const obj5 = sharedValue3;
        if (!obj4.cheapWorkletShallowEqual(sharedValue3.get(), safeAreaState)) {
          const result2 = obj5.set(safeAreaState);
        }
        const obj6 = channelId(first[23]);
        obj6.runOnJS(executeLayoutManagerEffect)();
      };
      let obj2 = { isConnected, cheapWorkletShallowEqual: sharedValue2(sharedValue11[24]).cheapWorkletShallowEqual, contentDimensions: sharedValue11, windowDimensions: executeLayoutManagerEffect, safeArea: sharedValue3, runOnJS: sharedValue2(sharedValue11[23]).runOnJS, executeLayoutManagerEffect };
      fn.__closure = obj2;
      fn.__workletHash = 5348227953265;
      fn.__initData = __initData;
      let obj3 = { windowState: first5, safeAreaState: first6, contentState };
      let tmp = obj.runOnUI(fn)(obj3);
    }, items26);
    const items27 = [first3];
    const effect6 = obj2.useEffect(() => {
      let c0;
      function checkDimensions() {
        let tmp = c3;
        if (!tmp) {
          let tmp3 = sharedValue11;
          let obj = sharedValue2(sharedValue11[35]);
          size = obj.getWindowDimensions();
          const width = size.width;
          const height = size.height;
          let window_height = height;
          let tmp4 = checkDimensions;
          const result = checkDimensions.checkDimensionsMismatch(width, height);
          const wasDirty = result;
          if (null != result) {
            const _setTimeout = setTimeout;
            window_height = setTimeout(() => {
              let height;
              const obj = channelId(first[35]);
              const windowDimensions = obj.getWindowDimensions();
              ({ width, height } = windowDimensions);
              let tmp4 = width === width;
              const tmp = first;
              const tmp3 = width;
              if (tmp4) {
                tmp4 = window_height === height;
              }
              if (tmp4) {
                if (null != first3.checkDimensionsMismatch(width, height)) {
                  c3 = true;
                  const obj4 = { layout_width: null, layout_height: null, window_width: tmp3, window_height, was_dirty: wasDirty.wasDirty };
                  ({ staleWidth: obj3.layout_width, staleHeight: obj3.layout_height } = wasDirty);
                  const obj2 = guildId(tmp[48]);
                  obj2.track(callback3.VOICE_PANEL_LAYOUT_DESYNC, obj4);
                  c1 = null;
                }
              }
            }, 250);
          }
        }
      }
      if (!sharedValue2(sharedValue11[47]).isStable) {
        let tmp = globalThis;
        let _setInterval = setInterval;
        let interval = setInterval(checkDimensions, 1000);
        let c1 = null;
        let tmp3 = first5;
        let closure_2 = first5.addEventListener("change", (event) => {
          let interval;
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
        let c3 = false;
        return () => {
          clearInterval(c0);
          clearTimeout(c1);
          closure_2.remove();
        };
      }
    }, items27);
    const layoutEffect9 = obj2.useLayoutEffect(() => () => clearTimeout(ref.current.timeout), []);
    const items28 = [first4, stateFromStores2];
    const layoutEffect10 = obj2.useLayoutEffect(() => {
      const tmp = first4 === sharedValue8.PANEL && stateFromStores2;
      if (tmp) {
        const obj = EmbeddedActivitiesActionCreators;
        const result = obj.updateActivityPanelMode(ActivityPanelModes.PIP);
      }
    }, items28);
    const fn7 = function c() {
      const items = [sharedValue1.get(), closure_1.get().mode];
      return items;
    };
    const obj15 = { mode: sharedValue1, controlsSpecs: tmp37Result };
    fn7.__closure = obj15;
    fn7.__workletHash = 2821493173859;
    fn7.__initData = __initData11;
    const fn8 = function s(arg0, arg1) {
      let first;
      const cheapWorkletArrayShallowEqual = channelId(first[24]).cheapWorkletArrayShallowEqual;
      channelId(first[24]);
      const tmp4 = arg1;
      if (!cheapWorkletArrayShallowEqual(arg0, tmp4)) {
        let tmp9 = first1(arg0, 2)[1] === first2.DRAWER;
        first1(arg0, 2);
        if (tmp9) {
          tmp9 = tmp7 === sharedValue8.PANEL;
        }
        if (tmp9) {
          first = undefined;
          if (arg1 != null) {
            first = arg1[0];
          }
          tmp9 = first === sharedValue8.PANEL;
        }
        if (!tmp9) {
          const tmpResult = channelId(first[23]);
          tmpResult.runOnJS(channelId(first[56]).dismissKeyboard)();
        }
      }
    };
    const obj16 = { cheapWorkletArrayShallowEqual: tmp(tmp2[24]).cheapWorkletArrayShallowEqual, VoicePanelControlsModes: first2, VoicePanelModes: sharedValue8, runOnJS: tmp(tmp2[23]).runOnJS, dismissKeyboard: tmp(tmp2[56]).dismissKeyboard };
    const useAnimatedReaction3 = tmp(tmp2[23]).useAnimatedReaction;
    tmp(tmp2[23]);
    fn8.__closure = obj16;
    fn8.__workletHash = 6506973979360;
    fn8.__initData = __initData12;
    const animatedReaction3 = useAnimatedReaction3(fn7, fn8);
    closure_5 = tmp67;
    const tmpResult59 = tmp(tmp2[23]);
    const sharedValue12 = tmpResult59.useSharedValue(transitionState);
    const items29 = [transitionState, sharedValue12, transitionCleanUp, channelId];
    const layoutEffect11 = obj2.useLayoutEffect(() => {
      const result = sharedValue12.set(transitionState);
      if (transitionState === channelId(first[52]).TransitionStates.YEETED) {
        state = flag.getState();
        const _HermesInternal = HermesInternal;
        const requestFreezeLock = state.requestFreezeLock;
        const obj = { lockEnabled: false, key: "voice-panel-freeze-" + channelId };
        const freezeLock = requestFreezeLock(obj);
        const _setTimeout = setTimeout;
        const timeout = setTimeout(transitionCleanUp, 500);
        return () => clearTimeout(closure_0);
      }
    }, items29);
    const items30 = [channelId];
    const layoutEffect12 = obj2.useLayoutEffect(() => () => {
      state = state.getState();
      const obj = { lockEnabled: false, key: "voice-panel-freeze-" + channelId };
      const freezeLock = state.requestFreezeLock(obj);
    }, items30);
    const fn9 = function p() {
      const items = [sharedValue.get(), sharedValue1.get(), sharedValue12.get()];
      return items;
    };
    const obj17 = { connected: sharedValue, mode: sharedValue1, sharedTransitionState: sharedValue12 };
    fn9.__closure = obj17;
    fn9.__workletHash = 10141598131153;
    fn9.__initData = __initData9;
    const fn10 = function f(arg0, arg1) {
      let first;
      let tmp7;
      let tmp8;
      let tmp9;
      const cheapWorkletArrayShallowEqual = channelId(first[24]).cheapWorkletArrayShallowEqual;
      channelId(first[24]);
      const tmp4 = arg1;
      if (!cheapWorkletArrayShallowEqual(arg0, tmp4)) {
        [tmp7, tmp8, tmp9] = first1(arg0, 3);
        first1(arg0, 3);
        if (tmp9 === channelId(first[52]).TransitionStates.YEETED) {
          if (tmp8 !== sharedValue8.DISMISSED) {
            const tmpResult = channelId(first[23]);
            tmpResult.runOnJS(closure_5)(tmp17.DISMISSED);
          }
        } else if (tmp8 === sharedValue8.DISMISSED) {
          let PANEL;
          let PANEL1;
          if (arg1 != null) {
            PANEL1 = arg1[1];
          }
          if (PANEL1 == null) {
            PANEL1 = tmp20.PANEL;
          }
          if (sharedValue8.PANEL !== PANEL1) {
            if (sharedValue8.PIP !== PANEL1) {
              PANEL = tmp20.PANEL;
            }
            const tmpResult3 = channelId(first[23]);
            tmpResult3.runOnJS(closure_5)(PANEL);
          }
          PANEL = PANEL1;
          if (!tmp7) {
            PANEL = tmp20.PANEL;
          }
        } else {
          let tmp10 = tmp7;
          if (!tmp10) {
            first = undefined;
            if (arg1 != null) {
              first = arg1[0];
            }
            tmp10 = true !== first;
          }
          if (!tmp10) {
            tmp10 = tmp8 !== tmp20.PIP;
          }
          if (!tmp10) {
            const tmpResult4 = channelId(first[23]);
            tmpResult4.runOnJS(closure_5)(sharedValue8.PANEL);
          }
        }
      }
    };
    const obj18 = { cheapWorkletArrayShallowEqual: tmp(tmp2[24]).cheapWorkletArrayShallowEqual, TransitionStates: tmp(tmp2[52]).TransitionStates, VoicePanelModes: sharedValue8, runOnJS: tmp(tmp2[23]).runOnJS, setMode: tmp5Result[1] };
    const useAnimatedReaction4 = tmp(tmp2[23]).useAnimatedReaction;
    tmp(tmp2[23]);
    fn10.__closure = obj18;
    fn10.__workletHash = 5550443413922;
    fn10.__initData = __initData10;
    const animatedReaction4 = useAnimatedReaction4(fn9, fn10);
    const obj19 = { mode: sharedValue1, controlsSpecs: tmp37Result, safeArea: sharedValue3, windowDimensions: sharedValue2 };
    const tmp109 = tmp8(tmp2[61])(obj19);
    __initData2 = tmp109;
    const obj20 = { channelId, connected: isConnected, focusedId: tmp111, layoutManager: first3, mode: first4, windowDimensions: sharedValue2, pipAvoidanceSpecs: tmp109, safeArea: sharedValue3 };
    const useControllerPIPState = tmp(tmp2[62]).useControllerPIPState;
    tmp(tmp2[62]);
    const controllerPIPState = useControllerPIPState(obj20);
    streamOutputSinkStack = obj2.useRef(null);
    const items31 = [first4, stateFromStores1, channelId];
    const layoutEffect13 = obj2.useLayoutEffect(() => {
      const rTCConnection = sharedValue4.getRTCConnection();
      let tmp = null != rTCConnection;
      const obj = sharedValue4;
      if (tmp) {
        tmp = obj.getChannelId() === channelId;
      }
      if (tmp) {
        const tmp3 = ref;
        if (ref.current !== sharedValue8.PIP) {
          if (first4 === sharedValue8.PIP) {
            rTCConnection.setPipOpen(true);
          }
        }
        const tmp7 = tmp3.current === tmp4.PIP && first4 !== tmp4.PIP;
        if (tmp7) {
          rTCConnection.setPipOpen(false);
        }
      }
    }, items31);
    const layoutEffect14 = obj2.useLayoutEffect(() => {
      ref.current = first4;
    });
    const items32 = [channelId];
    const callback9 = obj2.useCallback((arg0) => {
      let focusedId;
      let intl;
      let pipParticipantId;
      ({ focusedId, pipParticipantId } = arg0);
      const result = sharedValue1.shouldReactToSeriousThermalStateWhenActivityFocused();
      let tmp3 = null != focusedId;
      const result1 = sharedValue1.consumedRequestToRespondToSeriousThermalState();
      if (tmp3) {
        tmp3 = setControlsMode(sharedValue6.getParticipant(channelId, focusedId));
      }
      let participant;
      if (null != pipParticipantId) {
        participant = sharedValue6.getParticipant(channelId, pipParticipantId);
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
            const isVideoEnabledResult = sharedValue3.isVideoEnabled();
            const tmp15 = isVideoEnabledResult || tmp11;
            if (tmp15) {
              const obj = { key: "EMBEDDED_ACTIVITIES_VIDEO_DISABLED_FOR_THERMAL_STATE", icon: guildId(first[30]), content: intl.string(channelId(first[29]).t.O2IlPT), disableAnimations: true, toastDurationMs: 3000 };
              const open = guildId(first[27]).open;
              guildId(first[27]);
              intl = channelId(first[29]).intl;
              open(obj);
              const obj2 = channelId(first[31]);
              const result2 = obj2.trackActivityThermalStateNoticeShown();
            }
            if (isVideoEnabledResult) {
              const obj3 = guildId(first[32]);
              obj3.setVideoEnabled(false);
            }
            const obj4 = channelId(first[33]);
            const result3 = obj4.consumeRequestToReactToSeriousThermalState();
          }
        }
      }
    }, items32);
    const items33 = [stateFromStores1, controllerPIPState, callback9, channelId];
    const effect7 = obj2.useEffect(() => {
      let id;
      const items = [sharedValue1, sharedValue6];
      const batchedStoreListener = new channelId(controllerPIPState[26]).BatchedStoreListener(items, () => {
        const obj = { focusedId: stateFromStores1, pipParticipantId: id.id };
        callback9(obj);
      });
      batchedStoreListener.attach("thermal-state-reactions-" + batchedStoreListener);
      return () => batchedStoreListener.detach();
    }, items33);
    const fn11 = function f() {
      const value = sharedValue6.get();
      let id;
      if (value != null) {
        id = value.id;
      }
      const items = [id, controllerPIPState.id];
      return items;
    };
    const obj21 = { focused: sharedValue6, pipState: controllerPIPState };
    fn11.__closure = obj21;
    fn11.__workletHash = 94735519164;
    fn11.__initData = __initData2;
    const fn12 = function h(arg0, arg1) {
      let tmp7;
      let tmp8;
      const cheapWorkletArrayShallowEqual = channelId(first[24]).cheapWorkletArrayShallowEqual;
      channelId(first[24]);
      const tmp = arg1;
      const tmp2 = channelId;
      const tmp3 = first;
      if (!cheapWorkletArrayShallowEqual(arg0, tmp)) {
        [tmp7, tmp8] = first1(arg0, 2);
        first1(arg0, 2);
        const obj = { focusedId: tmp7, pipParticipantId: tmp8 };
        const tmp2Result = tmp2(tmp3[23]);
        tmp2Result.runOnJS(callback9)(obj);
      }
    };
    const obj22 = { cheapWorkletArrayShallowEqual: tmp(tmp2[24]).cheapWorkletArrayShallowEqual, runOnJS: tmp(tmp2[23]).runOnJS, handleStateUpdates: callback9 };
    const useAnimatedReaction5 = tmp(tmp2[23]).useAnimatedReaction;
    tmp(tmp2[23]);
    fn12.__closure = obj22;
    fn12.__workletHash = 15246095289306;
    fn12.__initData = sharedValue13;
    const animatedReaction5 = useAnimatedReaction5(fn11, fn12);
    const items34 = [channelId];
    const callback10 = obj2.useCallback((arg0) => {
      let connectedValue;
      let focusedParticipantId;
      ({ focusedParticipantId, connectedValue } = arg0);
      if (connectedValue) {
        connectedValue = tmp === sharedValue8.PANEL;
      }
      const tmp3 = null != focusedParticipantId && setControlsMode(sharedValue6.getParticipant(channelId, focusedParticipantId)) && connectedValue;
      const state = sharedValue21.getState();
      state.setIsActivityFocused(tmp3);
    }, items34);
    const obj23 = { focused: sharedValue6, mode: sharedValue1, connected: sharedValue };
    tmp123.__closure = obj23;
    tmp123.__workletHash = 16641161683997;
    tmp123.__initData = __initData;
    const fn13 = function h(arg0, arg1) {
      let tmp7;
      let tmp8;
      let tmp9;
      const cheapWorkletArrayShallowEqual = channelId(first[24]).cheapWorkletArrayShallowEqual;
      channelId(first[24]);
      const tmp = arg1;
      const tmp2 = channelId;
      const tmp3 = first;
      if (!cheapWorkletArrayShallowEqual(arg0, tmp)) {
        [tmp7, tmp8, tmp9] = first1(arg0, 3);
        first1(arg0, 3);
        const obj = { focusedParticipantId: tmp7, voicePanelMode: tmp8, connectedValue: tmp9 };
        const tmp2Result = tmp2(tmp3[23]);
        tmp2Result.runOnJS(callback10)(obj);
      }
    };
    const obj24 = { cheapWorkletArrayShallowEqual: tmp(tmp2[24]).cheapWorkletArrayShallowEqual, runOnJS: tmp(tmp2[23]).runOnJS, handleAnimatedReaction: callback10 };
    const useAnimatedReaction6 = tmp(tmp2[23]).useAnimatedReaction;
    tmp(tmp2[23]);
    fn13.__closure = obj24;
    fn13.__workletHash = 15290799116693;
    fn13.__initData = callback7;
    const animatedReaction6 = useAnimatedReaction6(tmp123, fn13);
    const items35 = [setControlsMode];
    const callback11 = obj2.useCallback(() => {
      const obj = { mode: first2.FLOATING_DEFAULT };
      setControlsMode(obj);
    }, items35);
    const obj25 = { onTransition: callback11 };
    tmp8(tmp2[22])(obj25);
    obj2.useRef(0);
    const items36 = [tmp3];
    const tmpResult64 = tmp(tmp2[26]);
    const stateFromStores3 = tmpResult64.useStateFromStores(items36, () => sharedValue3.getSpeakingWhileMuted());
    const items37 = [stateFromStores3, callback5];
    const effect8 = obj2.useEffect(() => {
      let intl;
      const tmp = stateFromStores3;
      if (tmp) {
        const _performance = performance;
        if (performance.now() - ref.current >= stateFromStores2) {
          const _performance2 = performance;
          tmp3.current = performance.now();
          callback5();
          const obj = { key: "SPEAKING_WHILE_MUTED", icon: guildId(first[28]), content: intl.string(channelId(first[29]).t["29gnR4"]), toastDurationMs: 3000 };
          const open = guildId(first[27]).open;
          guildId(first[27]);
          intl = channelId(first[29]).intl;
          open(obj);
        }
      }
    }, items37);
    tmp8(tmp2[63])(channelId, sharedValue1, tmp5Result[1], sharedValue);
    tmp8(tmp2[64])();
    const items38 = [tmp78];
    const tmpResult65 = tmp(tmp2[26]);
    const stateFromStoresObject = tmpResult65.useStateFromStoresObject(items38, () => {
      let UNLOCKED;
      const currentEmbeddedActivity = sharedValue5.getCurrentEmbeddedActivity();
      let applicationId;
      const obj = sharedValue5;
      if (currentEmbeddedActivity != null) {
        applicationId = currentEmbeddedActivity.applicationId;
      }
      let compositeInstanceId;
      if (currentEmbeddedActivity != null) {
        compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
      }
      const obj2 = { applicationId, instanceId: compositeInstanceId, activityOrientationLockState: UNLOCKED };
      if (null != applicationId) {
        let UNLOCKED2 = obj.getOrientationLockStateForApp(applicationId);
        if (UNLOCKED2 == null) {
          UNLOCKED2 = callback4.UNLOCKED;
        }
        UNLOCKED = UNLOCKED2;
      } else {
        UNLOCKED = callback4.UNLOCKED;
      }
      return obj2;
    });
    let applicationId = stateFromStoresObject.applicationId;
    const activityOrientationLockState = stateFromStoresObject.activityOrientationLockState;
    const instanceId = stateFromStoresObject.instanceId;
    const items39 = [applicationId, isConnected, first4, activityOrientationLockState, stateFromStores1, stateFromStores2, instanceId];
    const layoutEffect15 = obj2.useLayoutEffect(() => {
      let tmp = stateFromStores2;
      if (!tmp) {
        const channel = sharedValue7.getChannel(sharedValue2.getVoiceChannelId());
        let isGuildStageVoiceResult;
        if (channel != null) {
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        tmp = isGuildStageVoiceResult;
      }
      if (!tmp) {
        if (first4 === sharedValue8.PANEL) {
          const tmp8 = isConnected;
          if (tmp8) {
            if (null != applicationId) {
              const obj = { applicationId: tmp12, instanceId };
              const obj3 = channelId(first[50]);
              const tmp16 = first;
              if (stateFromStores1 === obj3.getEmbeddedActivityParticipantId(obj)) {
                guildId(tmp16[51])(activityOrientationLockState);
              }
            }
            const obj5 = channelId(first[49]);
            obj5.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
          }
        }
        const obj2 = channelId(first[49]);
        const result = obj2.restoreDefaultOrientation();
      }
    }, items39);
    const layoutEffect16 = obj2.useLayoutEffect(() => {
      let voiceChannelId;
      return () => {
        channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
        let isGuildStageVoiceResult;
        if (channel != null) {
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        if (!isGuildStageVoiceResult) {
          const obj2 = channelId(streamOutputSinkStack[49]);
          const result = obj2.restoreDefaultOrientation();
        }
      };
    }, []);
    const items40 = [first4, channelId, isConnected];
    const effect9 = obj2.useEffect(() => {
      let tmp2 = first4 !== sharedValue8.DISMISSED;
      const tmp = first4;
      if (tmp2) {
        tmp2 = isConnected;
      }
      if (tmp2) {
        const obj = { video_layout: callback(tmp) };
        const track = guildId(first[48]).track;
        const VIDEO_LAYOUT_TOGGLED = callback3.VIDEO_LAYOUT_TOGGLED;
        guildId(first[48]);
        const obj2 = channelId(first[55]);
        const merged = Object.assign(obj2.collectVoiceAnalyticsMetadata(channelId));
        track(VIDEO_LAYOUT_TOGGLED, obj);
      }
    }, items40);
    let closure_1 = obj2.useRef(-1);
    const tmpResult66 = tmp(tmp2[23]);
    sharedValue13 = tmpResult66.useSharedValue(null);
    const items41 = [sharedValue1, sharedValue13];
    callback12 = obj2.useCallback((arg0) => {
      if (sharedValue1.get() === sharedValue8.PANEL) {
        let result = sharedValue13.set(arg0);
        if (null != arg0) {
          const _clearTimeout = clearTimeout;
          clearTimeout(ref.current);
          const _setTimeout = setTimeout;
          ref.current = setTimeout(() => {
            const result = sharedValue13.set(null);
          }, channelId(first[34]).FLOATING_CTA_HIDE_TIMEOUT);
        }
      }
    }, items41);
    const layoutEffect17 = obj2.useLayoutEffect(() => () => clearTimeout(ref.current), []);
    __initData3 = obj2.useRef(undefined);
    const obj26 = {
      value: tmp5(obj2.useState(() => {
          const obj = { channelId, channelType: type, connected: sharedValue, contentDimensions: sharedValue11, controlsSpecs, dismissPanel, dismissToPIPGestureRef, dragScrolling: sharedValue5, focused: sharedValue6, generateStateLocker: callback3, guildId, hideControls: callback4, isCall: flag, isFocusedVideoZoomed: sharedValue8, layoutManager: first3, mode: sharedValue1, morphablePanelMode: derivedValue, mountedCards: first1, pipAvoidanceSpecs, preJoinContentSize: sharedValue7, refreshIdleTimeout: callback6, safeArea: sharedValue3, scrollPosition: sharedValue4, setControlsMode, setFocused: callback7, setIsFocusedVideoZoomed, setMode, setShowFloatingCTA: callback12, showControls: callback5, showFloatingCTA: sharedValue13, streamOutputSinkStack, usePIPState: VoicePanelPIPStateContext.usePIPState, useReducedMotion: sharedValue9, windowDimensions: sharedValue2, wrapperDimensions: sharedValue21, wrapperOffset: sharedValue10, pipHandoff: first2 };
          return obj;
        }), 1)[0],
      children: setMode(Provider2, obj27)
    };
    const Provider = tmp8(tmp2[66]).Provider;
    obj27 = { value: controllerPIPState, children: setMode(Provider3, obj28) };
    Provider2 = tmp(tmp2[65]).VoicePanelPIPStateContext.Provider;
    let tmp145 = guildId;
    Provider3 = tmp8(tmp2[67]).Provider;
    tmp111 = stateFromStores1;
    if (guildId == null) {
      tmp145 = null;
    }
    obj28 = { value: tmp145, children };
    return setMode(Provider, obj26);
  }
  tmp39 = sharedValue9;
};
