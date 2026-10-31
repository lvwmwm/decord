// Module ID: 19156
// Function ID: 19157
// Name: VoicePanelController
// Dependencies: [32, 19, 17, 5015, 4862, 6843, 8864, 11847, 11704, 4863, 2006, 5764, 4917, 6875, 11223, 11221, 1072, 5657, 5681, 11224, 21, 19157, 5095, 10089, 1089, 504, 5712, 1113, 9242, 14898, 19158, 5915, 11725, 19159, 1491, 1625, 19184, 11231, 19185, 11225, 11227, 12, 1266, 1108, 1259, 11245, 12812, 6541, 1252, 2019, 8903, 6851, 19121, 5080, 19186, 5759, 5207, 5760, 7207, 19187, 19188, 14206, 4935, 19189, 19190, 19195, 19196, 19123, 19197, 11222, 5224, 2]
// Exports: default

// Module 19156 (VoicePanelController)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import DurationsDefault from "Durations" /* 1089 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4935 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5657 */;
import CallConstants from "CallConstants" /* 5681 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11224 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 11725 */;
import VoicePanelPIPStateContext from "VoicePanelPIPStateContext" /* 19197 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import EmbeddedActivitiesStore_mod from "EmbeddedActivitiesStore" /* 4862 */;
import ChannelRTCStore_mod from "ChannelRTCStore" /* 6843 */;
import AppFreezeStore from "AppFreezeStore" /* 8864 */;
import SafeAreaDisabledStore from "SafeAreaDisabledStore" /* 11847 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 11704 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import MediaEngineStore from "MediaEngineStore" /* 2006 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5764 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4917 */;
import VoicePanelStore from "VoicePanelStore" /* 6875 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11223 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11221 */;
import Constants from "Constants" /* 1072 */;
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
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const AppState = react_native.AppState;
let EmbeddedActivitiesStore = EmbeddedActivitiesStore_mod;
let ChannelRTCStore = ChannelRTCStore_mod;
({ VoicePanelModes: closure_17, getAnalyticsNameForVoicePanelMode: closure_18 } = VoicePanelConstants);
({ CONTROLS_HEIGHT: closure_19, CONTROLS_HEIGHT_PTT: closure_20, CONTROLS_HIDE_TIMEOUT: closure_21, VoicePanelControlsModes: closure_22 } = VoicePanelControlsConstants);
({ AnalyticEvents: closure_23, ComponentActions: closure_24, InputModes: closure_25 } = Constants);
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const isActivityParticipant = CallConstants.isActivityParticipant;
const MorphablePanelModes = MorphablePanelConstants.MorphablePanelModes;
const jsx = Fragment.jsx;
let closure_30 = { code: "function VoicePanelControllerTsx1(){const{focused,mode,connected}=this.__closure;var _focused$get;return[(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,mode.get(),connected.get()];}" };
let closure_31 = { code: "function VoicePanelControllerTsx2(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,handleAnimatedReaction}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[focusedParticipantId,voicePanelMode,connectedValue]=props;runOnJS(handleAnimatedReaction)({focusedParticipantId:focusedParticipantId,voicePanelMode:voicePanelMode,connectedValue:connectedValue});}" };
const MINUTE = DurationsDefault.Millis.MINUTE;
let __initData = { code: "function VoicePanelControllerTsx3(){const{focused,pipState}=this.__closure;var _focused$get;return[(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,pipState.id];}" };
let closure_34 = { code: "function VoicePanelControllerTsx4(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,handleStateUpdates}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[focusedId,pipParticipantId]=props;runOnJS(handleStateUpdates)({focusedId:focusedId,pipParticipantId:pipParticipantId});}" };
let closure_35 = { code: "function VoicePanelControllerTsx5(value){const{isFocusedVideoZoomed}=this.__closure;isFocusedVideoZoomed.set(value);}" };
let __initData2 = { code: "function VoicePanelControllerTsx6(){const{mode,VoicePanelModes,MorphablePanelModes}=this.__closure;switch(mode.get()){case VoicePanelModes.PANEL:{return MorphablePanelModes.PANEL;}case VoicePanelModes.PIP:{return MorphablePanelModes.PIP;}default:{return MorphablePanelModes.UNDEFINED;}}}" };
let closure_37 = { code: "function VoicePanelControllerTsx7(){const{controlsSpecs,VoicePanelControlsModes,runOnJS,_queueHideControls}=this.__closure;const specs=controlsSpecs.get();if(specs.locked)return;if(specs.mode!==VoicePanelControlsModes.FLOATING_DEFAULT)return;runOnJS(_queueHideControls)();}" };
let closure_38 = { code: "function VoicePanelControllerTsx8(){const{mode}=this.__closure;return mode.get();}" };
let __initData3 = { code: "function VoicePanelControllerTsx9(value){const{VoicePanelModes,runOnJS,_queueHideControls,_clearHideControlsQueue}=this.__closure;if(value===VoicePanelModes.PANEL){runOnJS(_queueHideControls)();}else{runOnJS(_clearHideControlsQueue)();}}" };
const __initData4 = { code: "function VoicePanelControllerTsx10(){const{connected}=this.__closure;return connected.get();}" };
const __initData5 = { code: "function VoicePanelControllerTsx11(connected){const{updateSharedValueIfChanged,controlsSpecs,pushToTalk,CONTROLS_HEIGHT_PTT,CONTROLS_HEIGHT}=this.__closure;updateSharedValueIfChanged(controlsSpecs,{height:pushToTalk&&connected?CONTROLS_HEIGHT_PTT:CONTROLS_HEIGHT,pushToTalk:pushToTalk});}" };
let closure_42 = { code: "function VoicePanelControllerTsx12({windowState:windowState,safeAreaState:safeAreaState,contentState:contentState}){const{isConnected,cheapWorkletShallowEqual,contentDimensions,windowDimensions,safeArea,runOnJS,executeLayoutManagerEffect}=this.__closure;if(isConnected&&!cheapWorkletShallowEqual(contentDimensions.get(),contentState)){contentDimensions.set(contentState);}if(!cheapWorkletShallowEqual(windowDimensions.get(),windowState)){windowDimensions.set(windowState);}if(!cheapWorkletShallowEqual(safeArea.get(),safeAreaState)){safeArea.set(safeAreaState);}runOnJS(executeLayoutManagerEffect)();}" };
const __initData6 = { code: "function VoicePanelControllerTsx13(){const{connected,mode,sharedTransitionState}=this.__closure;return[connected.get(),mode.get(),sharedTransitionState.get()];}" };
const __initData7 = { code: "function VoicePanelControllerTsx14(props,previous){const{cheapWorkletArrayShallowEqual,TransitionStates,VoicePanelModes,runOnJS,setMode,isDockEnabled}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[isConnected,currentMode,currentTransitionState]=props;if(currentTransitionState===TransitionStates.YEETED){if(currentMode!==VoicePanelModes.DISMISSED){runOnJS(setMode)(VoicePanelModes.DISMISSED);}}else if(currentMode===VoicePanelModes.DISMISSED){var _previous$;let previousMode=(_previous$=previous===null||previous===void 0?void 0:previous[1])!==null&&_previous$!==void 0?_previous$:VoicePanelModes.PANEL;switch(previousMode){case VoicePanelModes.PANEL:case VoicePanelModes.PIP:if(!isConnected){previousMode=VoicePanelModes.PANEL;}break;default:previousMode=VoicePanelModes.PANEL;}runOnJS(setMode)(previousMode);}else if(!isDockEnabled&&!isConnected&&(previous===null||previous===void 0?void 0:previous[0])===true&&currentMode===VoicePanelModes.PIP){runOnJS(setMode)(VoicePanelModes.PANEL);}}" };
const __initData8 = { code: "function VoicePanelControllerTsx15(){const{mode,controlsSpecs}=this.__closure;return[mode.get(),controlsSpecs.get().mode];}" };
const __initData9 = { code: "function VoicePanelControllerTsx16(props,previous){const{cheapWorkletArrayShallowEqual,VoicePanelControlsModes,VoicePanelModes,runOnJS,dismissKeyboard}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[currentMode,currentControlsMode]=props;if(currentControlsMode!==VoicePanelControlsModes.DRAWER||currentMode!==VoicePanelModes.PANEL||(previous===null||previous===void 0?void 0:previous[0])!==VoicePanelModes.PANEL){runOnJS(dismissKeyboard)();}}" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelController.tsx");

export default function VoicePanelController(channelId) {
  let PANEL;
  let Provider2;
  let Provider3;
  let beginDockEntry;
  let callback;
  let dismissPanel;
  let dismissToPIPGestureRef;
  let dockJoinMorphOrigin;
  let isConnected;
  let items;
  let obj30;
  let obj31;
  let obj7;
  let pipAvoidanceSpecs;
  let tmp123;
  let tmp19;
  let tmpResult43;
  let transitionCleanUp;
  let transitionState;
  const f116846 = () => {
    const tmp3 = first2;
    if (!tmp3) {
      let PIP;
      const voicePanelsPIP = sharedValue2.getState().voicePanelsPIP;
      if (!voicePanelsPIP.has(tmp)) {
        PIP = sharedValue3.PANEL;
      }
      return PIP;
    }
    PIP = sharedValue3.PIP;
  };
  channelId = channelId.channelId;
  const guildId = channelId.guildId;
  ({ transitionState, transitionCleanUp } = channelId);
  let streamOutputSinkStack;
  let first1;
  let first2;
  let type;
  let sharedValue;
  let sharedValue11;
  let sharedValue5;
  let sharedValue6;
  let sharedValue7;
  let sharedValue21;
  let sharedValue4;
  let sharedValue2;
  let sharedValue3;
  let CONTROLS_HEIGHT;
  let sharedValue10;
  let derivedValue;
  let first4;
  let closure_24;
  let callback3;
  let controlsSpecs;
  let callback5;
  let callback4;
  let callback6;
  let setControlsMode;
  let first6;
  let callback7;
  __initData = undefined;
  let callback8;
  let stateFromStores2;
  __initData2 = undefined;
  let sharedValue13;
  let callback13;
  __initData3 = undefined;
  let tmp = channelId;
  let tmp2 = streamOutputSinkStack;
  const children = channelId.children;
  let obj = channelId(streamOutputSinkStack[25]);
  let tmp3 = sharedValue7;
  const items1 = [sharedValue7];
  const stateFromStores = obj.useStateFromStores(items1, () => sharedValue7.getMode() === callback3.PUSH_TO_TALK);
  let obj2 = first2;
  let tmp5 = first1;
  streamOutputSinkStack = first1(first2.useState(() => {
    const tmp = guildId(first[59]);
    const tmp2 = new tmp(sharedValue7.getMediaEngine());
    return tmp2;
  }), 1)[0];
  const items2 = [streamOutputSinkStack];
  const effect = first2.useEffect(() => () => streamOutputSinkStack.cleanUp(), items2);
  let tmp8 = guildId;
  let tmp9 = guildId(streamOutputSinkStack[60])(channelId, guildId);
  ({ items, isConnected } = tmp9);
  first1 = undefined;
  first1 = first1(first2.useState(() => {
    set = new Set();
    return set;
  }), 1)[0];
  const items3 = [isConnected, items, first1];
  const effect1 = first2.useEffect(() => {
    const tmp = isConnected;
    if (tmp) {
      let obj = items(first1[58]);
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
  const useState = first2.useState;
  let obj3 = channelId(streamOutputSinkStack[61]);
  first2 = first1(useState(obj3.useIsMobileRTCV2Enabled("VoicePanelController")), 1)[0];
  const items4 = [channelId, first2];
  const layoutEffect = first2.useLayoutEffect(() => {
    const tmp = first2;
    if (tmp) {
      let state = VoicePanelStore.getState();
      const result = state.setChannelPanelWithDock(channelId, true);
      return () => {
        const state = sharedValue2.getState();
        return state.setChannelPanelWithDock(channelId, false);
      };
    }
  }, items4);
  let sharedValue1;
  size = undefined;
  let rect;
  let sharedValue8;
  let sharedValue9;
  let first5;
  let channel = sharedValue1.getChannel(channelId);
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
  let tmpResult = tmp(tmp2[22]);
  sharedValue = tmpResult.useSharedValue(isConnected);
  const first3 = tmp5(obj2.useState(() => {
    let tmp2 = first2;
    if (tmp2) {
      if (!tmp) {
        let tmp6;
        let PIP;
        const voicePanelsPIP = sharedValue2.getState().voicePanelsPIP;
        if (!voicePanelsPIP.has(tmp3)) {
          tmp6 = sharedValue3;
          PIP = sharedValue3.PANEL;
        }
        tmp2 = PIP === tmp6.PIP;
      }
      PIP = sharedValue3.PIP;
      tmp6 = sharedValue3;
    }
    return tmp2;
  }), 1)[0];
  const tmp18 = sharedValue3;
  const useSharedValue = tmp(tmp2[22]).useSharedValue;
  tmp(tmp2[22]);
  if (first3) {
    PANEL = tmp18.PIP;
    tmp19 = tmp18;
  } else {
    PANEL = tmp18.PANEL;
    tmp19 = tmp18;
  }
  sharedValue1 = useSharedValue(PANEL);
  const tmpResult37 = tmp(tmp2[34]);
  size = tmpResult37.getWindowDimensions();
  const size1 = { width: size.width, height: size.height, landscape: size.width > size.height };
  const tmpResult38 = tmp(tmp2[22]);
  sharedValue2 = tmpResult38.useSharedValue(size1);
  const tmpResult39 = tmp(tmp2[35]);
  rect = tmpResult39.getSafeAreaInsets();
  let obj4 = {};
  const useSharedValue2 = tmp(tmp2[22]).useSharedValue;
  tmp(tmp2[22]);
  let merged = Object.assign(rect);
  sharedValue21 = useSharedValue2(obj4);
  let obj5 = { windowWidth: size.width, connected: isConnected, safeAreaLeft: rect.left, safeAreaRight: rect.right };
  const tmpResult41 = tmp(tmp2[36]);
  const maxPanelWidth = tmpResult41.getMaxPanelWidth(obj5);
  const useSharedValue3 = tmp(tmp2[22]).useSharedValue;
  tmp(tmp2[22]);
  if (first3) {
    let obj6 = { drawerHeight: null, drawerWidth: null, drawerX: 0, drawerY: 0, pipX: -1, pipY: -1, animated: false, mode: tmp19.PIP };
    ({ height: obj15.drawerHeight, width: obj15.drawerWidth } = size);
    obj7 = obj6;
  } else {
    obj7 = { drawerHeight: size.height, drawerWidth: maxPanelWidth, drawerX: tmpResult43.getPanelX(size.width, maxPanelWidth), drawerY: size.height, pipX: -1, pipY: -1, animated: true, mode: tmp19.PANEL };
    tmpResult43 = tmp(tmp2[36]);
  }
  sharedValue3 = useSharedValue3(obj7);
  const tmpResult44 = tmp(tmp2[22]);
  sharedValue4 = tmpResult44.useSharedValue(0);
  const tmpResult45 = tmp(tmp2[22]);
  sharedValue5 = tmpResult45.useSharedValue(false);
  const tmpResult46 = tmp(tmp2[22]);
  sharedValue6 = tmpResult46.useSharedValue(null);
  const tmpResult47 = tmp(tmp2[22]);
  sharedValue7 = tmpResult47.useSharedValue(0);
  first4 = tmp5(obj2.useState(() => {
    const tmp = new guildId(first[37])();
    return tmp;
  }), 1)[0];
  const tmpResult48 = tmp(tmp2[22]);
  sharedValue8 = tmpResult48.useSharedValue(false);
  class S {
    constructor(arg0) {
      const result = sharedValue8.set(arg0);
    }
  }
  S.__closure = { isFocusedVideoZoomed: sharedValue8 };
  S.__workletHash = 13885070318174;
  S.__initData = stateFromStores2;
  const items5 = [sharedValue8];
  CONTROLS_HEIGHT = obj2.useCallback(S, items5);
  const tmpResult49 = tmp(tmp2[22]);
  sharedValue9 = tmpResult49.useSharedValue(sharedValue.useReducedMotion);
  const items6 = [sharedValue9];
  const effect2 = obj2.useEffect(() => {
    function onChange() {
      const result = sharedValue9.set(size.useReducedMotion);
    }
    let result = size.addReactChangeListener(onChange);
    return () => {
      const result = sharedValue.removeReactChangeListener(onChange);
    };
  }, items6);
  const tmpResult50 = tmp(tmp2[22]);
  sharedValue10 = tmpResult50.useSharedValue({ gestureActive: false, x: 0, y: 0 });
  const tmp38 = tmp8(tmp2[38])({ isDockEnabled: first2, mountsMinimized: first3, mode: sharedValue1, connected: sharedValue, safeArea: sharedValue21, wrapperOffset: sharedValue10, wrapperDimensions: sharedValue3 });
  let fn = function z() {
    const value = sharedValue1.get();
    if (sharedValue3.PANEL === value) {
      return callback4.PANEL;
    } else if (tmp2.PIP === value) {
      return callback4.PIP;
    } else {
      return callback4.UNDEFINED;
    }
  };
  const obj8 = { mode: sharedValue1, VoicePanelModes: tmp19, MorphablePanelModes: callback4 };
  fn.__closure = obj8;
  fn.__workletHash = 931249605381;
  fn.__initData = __initData2;
  const tmpResult51 = tmp(tmp2[22]);
  derivedValue = tmpResult51.useDerivedValue(fn);
  first5 = tmp5(obj2.useState(() => {
    const obj = new guildId(first[39])(channelId);
    obj.updateItems(items);
    const obj2 = { windowWidth: size.width, windowHeight: size.height, safeAreaLeft: rect.left, safeAreaRight: rect.right, safeAreaTop: rect.top, safeAreaBottom: rect.bottom, controlBarSize: stateFromStores ? sharedValue9 : callback };
    obj.updateProps(obj2);
    return obj;
  }), 1)[0];
  const items7 = [first5];
  const layoutEffect1 = obj2.useLayoutEffect(() => () => first5.cleanUp(), items7);
  const tmpResult52 = tmp(tmp2[22]);
  sharedValue11 = tmpResult52.useSharedValue(first5.getContentDimensions());
  closure_24 = tmp38;
  react = undefined;
  let closure_5;
  let callback1;
  let callback2;
  let cancelControlsDebounce;
  setControlsMode = undefined;
  let closure_10;
  tmp(tmp2[22]);
  const obj9 = { mode: derivedValue.FLOATING_DEFAULT, locked: false, height: null, pushToTalk: null };
  if (stateFromStores) {
    let tmp45;
    if (isConnected) {
      tmp45 = sharedValue9;
    }
    obj9.height = tmp45;
    obj9.pushToTalk = stateFromStores;
    const tmp43Result = tmp43(obj9);
    react = tmp43Result;
    closure_5 = obj2.useRef(-1);
    callback1 = obj2.useCallback(() => {
      if (-1 !== ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
        ref.current = -1;
      }
    }, []);
    const items8 = [tmp43Result, callback1, sharedValue1];
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
        }, sharedValue10);
      }
    }, items8);
    const items9 = [tmp43Result, callback2];
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
            FLOATING_DEFAULT = derivedValue.FLOATING_DEFAULT;
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
    }, items9);
    cancelControlsDebounce = memo.cancelControlsDebounce;
    setControlsMode = memo.setControlsMode;
    const _Set = Set;
    const self = this;
    const self2 = this;
    const useRef = obj2.useRef;
    set = new Set();
    closure_10 = useRef(set);
    const items10 = [tmp43Result, callback2, callback1];
    const items11 = [setControlsMode];
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
    }, items10);
    const items12 = [setControlsMode, tmp43Result];
    callback4 = obj2.useCallback(() => {
      let obj = arg0;
      if (arg0 === undefined) {
        obj = { debounce: false };
      }
      const obj2 = { mode: derivedValue.HIDDEN, debounce: obj.debounce };
      setControlsMode(obj2);
    }, items11);
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
        mode = derivedValue.FLOATING_DEFAULT;
      }
      return tmp({ mode, debounce });
    }, items12);
    const fn2 = function l() {
      const value = closure_4.get();
      if (!value.locked) {
        if (value.mode === derivedValue.FLOATING_DEFAULT) {
          const obj = channelId(first[22]);
          obj.runOnJS(callback2)();
        }
      }
    };
    const useCallback = obj2.useCallback;
    fn2.__closure = { controlsSpecs: tmp43Result, VoicePanelControlsModes: derivedValue, runOnJS: tmp(tmp2[22]).runOnJS, _queueHideControls: callback2 };
    fn2.__workletHash = 11728765250899;
    fn2.__initData = sharedValue13;
    const items13 = [tmp43Result, callback2];
    const obj10 = { controlsSpecs: tmp43Result, VoicePanelControlsModes: derivedValue, runOnJS: tmp(tmp2[22]).runOnJS, _queueHideControls: callback2 };
    callback6 = useCallback(fn2, items13);
    const fn3 = function h() {
      return sharedValue1.get();
    };
    const obj11 = { mode: sharedValue1 };
    fn3.__closure = obj11;
    fn3.__workletHash = 974064852045;
    fn3.__initData = callback13;
    const fn4 = function u(arg0) {
      if (arg0 === sharedValue3.PANEL) {
        const obj2 = channelId(first[22]);
        obj2.runOnJS(callback2)();
      } else {
        const obj = channelId(first[22]);
        obj.runOnJS(callback1)();
      }
    };
    const obj12 = { VoicePanelModes: tmp19, runOnJS: tmp(tmp2[22]).runOnJS, _queueHideControls: callback2, _clearHideControlsQueue: callback1 };
    const useAnimatedReaction = tmp(tmp2[22]).useAnimatedReaction;
    tmp(tmp2[22]);
    fn4.__closure = obj12;
    fn4.__workletHash = 14878725055629;
    fn4.__initData = __initData3;
    const animatedReaction = useAnimatedReaction(fn3, fn4);
    const items14 = [stateFromStores, tmp43Result, isConnected];
    const layoutEffect2 = obj2.useLayoutEffect(() => {
      if (stateFromStores) {
        let tmp5;
        const tmp4 = isConnected;
        if (tmp4) {
          tmp5 = sharedValue9;
        }
        const obj = { height: tmp5, pushToTalk: tmp3 };
        tmp(tmp2, obj);
      }
      tmp5 = callback;
    }, items14);
    const fn5 = function f() {
      return sharedValue.get();
    };
    const obj13 = { connected: sharedValue };
    fn5.__closure = obj13;
    fn5.__workletHash = 16839042645652;
    fn5.__initData = __initData4;
    const tmpResult55 = tmp(tmp2[22]);
    class S {
      constructor(arg0) {
        const result = sharedValue8.set(arg0);
      }
    }
    const useAnimatedReaction2 = tmpResult55.useAnimatedReaction;
    let tmp67 = CONTROLS_HEIGHT;
    tmp65.__closure = { updateSharedValueIfChanged: tmp8(tmp2[40]), controlsSpecs: tmp43Result, pushToTalk: stateFromStores, CONTROLS_HEIGHT_PTT: sharedValue9, CONTROLS_HEIGHT };
    tmp65.__workletHash = 8961429796283;
    tmp65.__initData = __initData5;
    const obj14 = { updateSharedValueIfChanged: tmp8(tmp2[40]), controlsSpecs: tmp43Result, pushToTalk: stateFromStores, CONTROLS_HEIGHT_PTT: sharedValue9, CONTROLS_HEIGHT };
    const animatedReaction2 = useAnimatedReaction2(fn5, tmp65);
    const items15 = [cancelControlsDebounce, callback1];
    const layoutEffect3 = obj2.useLayoutEffect(() => () => {
      cancelControlsDebounce();
      callback1();
    }, items15);
    const items16 = [setControlsMode];
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
    }, items16);
    controlsSpecs = tmp43Result;
    ({ beginDockEntry, dockJoinMorphOrigin } = tmp38);
    first6 = tmp5(obj2.useState(f116846), 2)[0];
    let closure_9 = tmp74;
    react = tmp74;
    const tmp5Result = tmp5(obj2.useState(f116846), 2);
    obj2.useRef(isConnected);
    const items17 = [channelId, dockJoinMorphOrigin, isConnected, first2, , sharedValue3];
    const layoutEffect4 = obj2.useLayoutEffect(() => {
      const tmp = first2;
      if (tmp) {
        const tmp2 = isConnected;
        if (tmp2) {
          if (!ref.current) {
            tmp3.current = true;
            if (null == sharedValue5.getSelectedParticipantId(channelId)) {
              const value = sharedValue3.get();
              size = { x: null, y: null, width: null, height: null };
              ({ drawerX: obj.x, drawerY: obj.y, drawerWidth: obj.width, drawerHeight: obj.height } = value);
              const result = dockJoinMorphOrigin.set(size);
              closure_4(sharedValue3.PIP);
            }
          }
        }
      }
    }, items17);
    const items18 = [beginDockEntry, first3];
    const layoutEffect5 = obj2.useLayoutEffect(() => {
      const tmp = first3;
      if (tmp) {
        beginDockEntry();
      }
    }, items18);
    const items19 = [sharedValue1];
    callback7 = obj2.useCallback((arg0) => {
      const tmp2 = arg0 === sharedValue3.PANEL && sharedValue1.get() === tmp.PIP;
      if (tmp2) {
        const obj = channelId(first[56]);
        obj.dismissKeyboard();
      }
      closure_9(arg0);
    }, items19);
    const layoutEffect6 = obj2.useLayoutEffect(() => {
      const result = sharedValue1.set(first6);
      if (transitionState !== channelId(first[53]).TransitionStates.YEETED) {
        const result1 = sharedValue.set(isConnected);
      }
    });
    const items20 = [channelId, sharedValue, sharedValue1, tmp43Result, setControlsMode, callback7];
    __initData = obj2.useCallback(() => {
      if (closure_5.get().mode === derivedValue.DRAWER) {
        const obj = { mode: tmp.FLOATING_DEFAULT };
        setControlsMode(obj);
        flag = true;
      } else if (sharedValue.get()) {
        let flag2 = sharedValue1.get() === sharedValue3.PANEL;
        if (flag2) {
          callback7(tmp7.PIP);
          flag2 = true;
        }
        flag = flag2;
      } else {
        const state = sharedValue2.getState();
        state.closeChannel(channelId);
        flag = true;
      }
      return flag;
    }, items20);
    const items21 = [sharedValue5];
    const tmpResult56 = tmp(tmp2[25]);
    const stateFromStores1 = tmpResult56.useStateFromStores(items21, () => sharedValue5.getSelectedParticipantId(channelId));
    const items22 = [guildId, channelId];
    callback8 = obj2.useCallback((id2) => {
      let result = null == id2;
      if (!result) {
        const obj = channelId(first[54]);
        result = obj.isVoicePanelParticipantFocusable(guildId, channelId, id2);
      }
      if (result) {
        const obj2 = guildId(first[55]);
        const participant = obj2.selectParticipant(channelId, id2);
      }
    }, items22);
    closure_5 = obj2.useRef(undefined);
    const getTargetDimensions = first5.getTargetDimensions;
    const targetDimensions = getTargetDimensions(stateFromStores1);
    const items23 = [sharedValue6, stateFromStores1, targetDimensions];
    const layoutEffect7 = obj2.useLayoutEffect(() => {
      let tmp2 = null;
      if (null != stateFromStores1) {
        const obj = { id: tmp };
        const merged = Object.assign(targetDimensions);
        tmp2 = obj;
      }
      const cheapWorkletShallowEqual = channelId(first[23]).cheapWorkletShallowEqual;
      channelId(first[23]);
      const current = ref.current;
      const tmp7 = tmp2;
      const tmp8 = ref;
      if (!cheapWorkletShallowEqual(tmp7, current)) {
        tmp8.current = tmp2;
        const result = sharedValue6.set(tmp2);
      }
    }, items23);
    const tmp85 = tmp8(tmp2[54])(guildId, channelId, stateFromStores1);
    EmbeddedActivitiesStore = tmp85;
    const items24 = [stateFromStores1, tmp85, callback8];
    const effect4 = obj2.useEffect(() => {
      if (null != stateFromStores1) {
        const tmp = closure_7;
        if (!tmp) {
          callback8(null);
        }
      }
    }, items24);
    const items25 = [channelId, callback8];
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
        callback8(null);
      }
    }, items25);
    const items26 = [sharedValue11];
    const tmpResult57 = tmp(tmp2[25]);
    stateFromStores2 = tmpResult57.useStateFromStores(items26, () => {
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
    const tmp90 = first2 && transitionState === tmp(tmp2[53]).TransitionStates.YEETED;
    const tmp5Result3 = tmp5(obj2.useState(() => {
      let height;
      let width;
      const obj = channelId(first[34]);
      const windowDimensions = obj.getWindowDimensions();
      ({ width, height } = windowDimensions);
      size = { width, height, landscape: width > height };
      return size;
    }), 2);
    const first7 = tmp5Result3[0];
    let closure_6 = tmp93;
    const useState2 = obj2.useState;
    const tmpResult58 = tmp(tmp2[35]);
    const tmp5Result4 = tmp5(useState2(tmpResult58.getSafeAreaInsets()), 2);
    const first8 = tmp5Result4[0];
    ChannelRTCStore = tmp96;
    const tmpResult59 = tmp(tmp2[39]);
    const managerSubscription = tmpResult59.useManagerSubscription(first5);
    const obj16 = { timeout: -1, layoutKey: managerSubscription, connected: isConnected, windowState: first7, safeAreaState: first8, contentDimensions: { width: 0, height: 0 } };
    const ref = obj2.useRef(obj16);
    streamOutputSinkStack = tmp93;
    _slicedToArray = tmp96;
    const items27 = [ref, isConnected, tmp5Result3[1], tmp5Result4[1]];
    const layoutEffect8 = obj2.useLayoutEffect(() => {
      let tmp;
      if (ref.current.connected !== isConnected) {
        ref.current.connected = tmp;
        let tmp2 = closure_2;
        closure_2((safeAreaState) => {
          let height;
          let width;
          let windowState = safeAreaState;
          const obj = isConnected(closure_2[34]);
          const windowDimensions = obj.getWindowDimensions();
          ({ width, height } = windowDimensions);
          ref.current.windowState = { width, height, landscape: width > height };
          const obj2 = isConnected(closure_2[23]);
          const tmp2 = ref;
          if (!obj2.cheapWorkletShallowEqual(safeAreaState, ref.current.windowState)) {
            windowState = tmp2.current.windowState;
          }
          return windowState;
        });
        closure_3((safeAreaState) => {
          const current = ref.current;
          const obj = isConnected(closure_2[35]);
          current.safeAreaState = obj.getSafeAreaInsets();
          const obj2 = isConnected(closure_2[23]);
          const tmp = ref;
          if (!obj2.cheapWorkletShallowEqual(safeAreaState, ref.current.safeAreaState)) {
            safeAreaState = tmp.current.safeAreaState;
          }
          return safeAreaState;
        });
      }
    }, items27);
    const callback9 = obj2.useCallback(() => {
      clearTimeout(ref.current.timeout);
      ref.current.timeout = setTimeout(() => {
        clearTimeout(ref.current.timeout);
        let obj = sharedValue2(sharedValue11[44]);
        obj.batchUpdates(() => {
          let tmp = closure_1_6((current) => {
            let windowState = current;
            const obj = closure_2_0(closure_2_2[23]);
            const tmp = ref;
            if (!obj.cheapWorkletShallowEqual(ref.current.windowState, current)) {
              windowState = tmp.current.windowState;
            }
            return windowState;
          });
          closure_1_8((current) => {
            let safeAreaState = current;
            const obj = closure_2_0(closure_2_2[23]);
            const tmp = ref;
            if (!obj.cheapWorkletShallowEqual(ref.current.safeAreaState, current)) {
              safeAreaState = tmp.current.safeAreaState;
            }
            return safeAreaState;
          });
        });
      }, 60);
    }, []);
    const items28 = [callback9];
    const layoutEffect9 = obj2.useLayoutEffect(() => {
      let height;
      let width;
      let tmp = sharedValue21;
      let closure_0 = sharedValue21(sharedValue11[45])(function updateSafeAreas(current) {
        const obj = sharedValue2(sharedValue11[23]);
        const tmp = ref;
        if (!obj.cheapWorkletShallowEqual(ref.current.safeAreaState, current)) {
          current = tmp.current;
          const obj2 = {};
          const merged = Object.assign(current);
          current.safeAreaState = obj2;
          callback9();
        }
      });
      let obj = sharedValue2(sharedValue11[35]);
      const safeAreaInsets = obj.getSafeAreaInsets();
      let obj2 = sharedValue2(sharedValue11[23]);
      if (!obj2.cheapWorkletShallowEqual(ref.current.safeAreaState, safeAreaInsets)) {
        let obj3 = {};
        let current = tmp5.current;
        let merged = Object.assign(safeAreaInsets);
        current.safeAreaState = obj3;
        callback9();
      }
      function updateWindowDimensions() {
        let height;
        let width;
        let windowDimensions = arg0;
        if (arg0 === undefined) {
          const obj = sharedValue2(sharedValue11[34]);
          windowDimensions = obj.getWindowDimensions();
        }
        ({ width, height } = windowDimensions);
        size = { width, height, landscape: width > height };
        const obj3 = sharedValue2(sharedValue11[23]);
        const tmp4 = ref;
        if (!obj3.cheapWorkletShallowEqual(ref.current.windowState, size)) {
          tmp4.current.windowState = size;
          callback9();
        }
      }
      let closure_1 = tmp(tmp2[46])(updateWindowDimensions);
      const tmp3Result = sharedValue2(sharedValue11[34]);
      let windowDimensions = tmp3Result.getWindowDimensions();
      ({ width, height } = windowDimensions);
      size = { width, height, landscape: width > height };
      const tmp3Result2 = sharedValue2(sharedValue11[23]);
      if (!tmp3Result2.cheapWorkletShallowEqual(ref.current.windowState, size)) {
        ref.current.windowState = size;
        callback9();
      }
      return () => {
        closure_0();
        closure_1();
      };
    }, items28);
    let id = obj2.useId();
    const items29 = [isConnected, id];
    const layoutEffect10 = obj2.useLayoutEffect(() => {
      let key;
      const tmp = isConnected;
      if (tmp) {
        let state = flag.getState();
        let obj = { key: id, lockEnabled: true };
        let safeAreaDisableLock = state.requestSafeAreaDisableLock(obj);
        return () => {
          const state = ref.getState();
          const obj = { key, lockEnabled: false };
          const safeAreaDisableLock = state.requestSafeAreaDisableLock(obj);
        };
      }
    }, items29);
    const tmp66 = sharedValue9;
    const tmp88 = sharedValue11;
    if (!tmp90) {
      first5.updateItems(items);
    }
    const obj17 = { windowWidth: null, windowHeight: null, safeAreaLeft: null, safeAreaRight: null, safeAreaTop: null, safeAreaBottom: null, controlBarSize: tmp67 };
    ({ width: obj38.windowWidth, height: obj38.windowHeight } = first7);
    ({ left: obj38.safeAreaLeft, right: obj38.safeAreaRight, top: obj38.safeAreaTop, bottom: obj38.safeAreaBottom } = first8);
    const updateProps = first5.updateProps;
    if (stateFromStores) {
      tmp67 = tmp66;
    }
    const items30 = [sharedValue11, updateProps(obj17), managerSubscription, first5, sharedValue21, first8, sharedValue2, first7, isConnected];
    const updatePropsResult = updateProps(obj17);
    const layoutEffect11 = obj2.useLayoutEffect(() => {
      function executeLayoutManagerEffect() {
        return first5.handleLayoutEffect();
      }
      ref.current.layoutKey = managerSubscription;
      let obj = sharedValue2(sharedValue11[22]);
      const fn = function t(arg0) {
        let safeAreaState;
        let windowState;
        ({ windowState, safeAreaState, contentState } = arg0);
        let tmp = isConnected;
        if (tmp) {
          const obj = channelId(first[23]);
          tmp = !obj.cheapWorkletShallowEqual(sharedValue11.get(), contentState);
        }
        if (tmp) {
          const result = sharedValue11.set(contentState);
        }
        const obj2 = channelId(first[23]);
        const obj3 = sharedValue2;
        if (!obj2.cheapWorkletShallowEqual(sharedValue2.get(), windowState)) {
          const result1 = obj3.set(windowState);
        }
        const obj4 = channelId(first[23]);
        const obj5 = sharedValue21;
        if (!obj4.cheapWorkletShallowEqual(sharedValue21.get(), safeAreaState)) {
          const result2 = obj5.set(safeAreaState);
        }
        const obj6 = channelId(first[22]);
        obj6.runOnJS(executeLayoutManagerEffect)();
      };
      let obj2 = { isConnected, cheapWorkletShallowEqual: sharedValue2(sharedValue11[23]).cheapWorkletShallowEqual, contentDimensions: sharedValue11, windowDimensions: executeLayoutManagerEffect, safeArea: sharedValue21, runOnJS: sharedValue2(sharedValue11[22]).runOnJS, executeLayoutManagerEffect };
      fn.__closure = obj2;
      fn.__workletHash = 5348227953265;
      fn.__initData = __initData;
      let obj3 = { windowState: first7, safeAreaState: first8, contentState };
      let tmp = obj.runOnUI(fn)(obj3);
    }, items30);
    const items31 = [first5];
    const effect6 = obj2.useEffect(() => {
      let c0;
      function checkDimensions() {
        let tmp = c3;
        if (!tmp) {
          let tmp3 = sharedValue11;
          let obj = sharedValue2(sharedValue11[34]);
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
              const obj = channelId(first[34]);
              const windowDimensions = obj.getWindowDimensions();
              ({ width, height } = windowDimensions);
              let tmp4 = width === width;
              const tmp = first;
              const tmp3 = width;
              if (tmp4) {
                tmp4 = window_height === height;
              }
              if (tmp4) {
                if (null != first5.checkDimensionsMismatch(width, height)) {
                  c3 = true;
                  const obj4 = { layout_width: null, layout_height: null, window_width: tmp3, window_height, was_dirty: wasDirty.wasDirty };
                  ({ staleWidth: obj3.layout_width, staleHeight: obj3.layout_height } = wasDirty);
                  const obj2 = guildId(tmp[48]);
                  obj2.track(first4.VOICE_PANEL_LAYOUT_DESYNC, obj4);
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
        let tmp3 = first7;
        let closure_2 = first7.addEventListener("change", (event) => {
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
    }, items31);
    const layoutEffect12 = obj2.useLayoutEffect(() => () => clearTimeout(ref.current.timeout), []);
    const items32 = [first6, stateFromStores2];
    const layoutEffect13 = obj2.useLayoutEffect(() => {
      const tmp = first6 === sharedValue3.PANEL && stateFromStores2;
      if (tmp) {
        const obj = EmbeddedActivitiesActionCreators;
        const result = obj.updateActivityPanelMode(ActivityPanelModes.PIP);
      }
    }, items32);
    let closure_1 = tmp43Result;
    const fn6 = function c() {
      const items = [sharedValue1.get(), closure_1.get().mode];
      return items;
    };
    const obj18 = { mode: sharedValue1, controlsSpecs: tmp43Result };
    fn6.__closure = obj18;
    fn6.__workletHash = 2821493173859;
    fn6.__initData = __initData8;
    const fn7 = function s(arg0, arg1) {
      let first;
      const cheapWorkletArrayShallowEqual = channelId(first[23]).cheapWorkletArrayShallowEqual;
      channelId(first[23]);
      const tmp4 = arg1;
      if (!cheapWorkletArrayShallowEqual(arg0, tmp4)) {
        let tmp9 = first1(arg0, 2)[1] === derivedValue.DRAWER;
        first1(arg0, 2);
        if (tmp9) {
          tmp9 = tmp7 === sharedValue3.PANEL;
        }
        if (tmp9) {
          first = undefined;
          if (arg1 != null) {
            first = arg1[0];
          }
          tmp9 = first === sharedValue3.PANEL;
        }
        if (!tmp9) {
          const tmpResult = channelId(first[22]);
          tmpResult.runOnJS(channelId(first[56]).dismissKeyboard)();
        }
      }
    };
    const obj19 = { cheapWorkletArrayShallowEqual: tmp(tmp2[23]).cheapWorkletArrayShallowEqual, VoicePanelControlsModes: derivedValue, VoicePanelModes: tmp19, runOnJS: tmp(tmp2[22]).runOnJS, dismissKeyboard: tmp(tmp2[56]).dismissKeyboard };
    const useAnimatedReaction3 = tmp(tmp2[22]).useAnimatedReaction;
    tmp(tmp2[22]);
    fn7.__closure = obj19;
    fn7.__workletHash = 6506973979360;
    fn7.__initData = __initData9;
    const animatedReaction3 = useAnimatedReaction3(fn6, fn7);
    const tmpResult61 = tmp(tmp2[22]);
    const sharedValue12 = tmpResult61.useSharedValue(transitionState);
    const items33 = [transitionState, sharedValue12, transitionCleanUp, channelId];
    const layoutEffect14 = obj2.useLayoutEffect(() => {
      const result = sharedValue12.set(transitionState);
      if (transitionState === channelId(first[53]).TransitionStates.YEETED) {
        state = sharedValue6.getState();
        const _HermesInternal = HermesInternal;
        const requestFreezeLock = state.requestFreezeLock;
        const obj = { lockEnabled: false, key: "voice-panel-freeze-" + channelId };
        const freezeLock = requestFreezeLock(obj);
        const _setTimeout = setTimeout;
        const timeout = setTimeout(transitionCleanUp, 500);
        return () => clearTimeout(closure_0);
      }
    }, items33);
    const items34 = [channelId];
    const layoutEffect15 = obj2.useLayoutEffect(() => () => {
      state = state.getState();
      const obj = { lockEnabled: false, key: "voice-panel-freeze-" + channelId };
      const freezeLock = state.requestFreezeLock(obj);
    }, items34);
    const tmpResult62 = tmp(tmp2[22]);
    class E {
      constructor() {
        const items = [sharedValue.get(), sharedValue1.get(), sharedValue12.get()];
        return items;
      }
    }
    const obj20 = { connected: sharedValue, mode: sharedValue1, sharedTransitionState: sharedValue12 };
    E.__closure = obj20;
    E.__workletHash = 10141598131153;
    E.__initData = __initData6;
    const fn8 = function p(arg0, arg1) {
      let first;
      let tmp7;
      let tmp8;
      let tmp9;
      const cheapWorkletArrayShallowEqual = channelId(first[23]).cheapWorkletArrayShallowEqual;
      channelId(first[23]);
      const tmp4 = arg1;
      if (!cheapWorkletArrayShallowEqual(arg0, tmp4)) {
        [tmp7, tmp8, tmp9] = first1(arg0, 3);
        first1(arg0, 3);
        if (tmp9 === channelId(first[53]).TransitionStates.YEETED) {
          if (tmp8 !== sharedValue3.DISMISSED) {
            const tmpResult = channelId(first[22]);
            tmpResult.runOnJS(callback7)(tmp17.DISMISSED);
          }
        } else if (tmp8 === sharedValue3.DISMISSED) {
          let PANEL;
          let PANEL1;
          if (arg1 != null) {
            PANEL1 = arg1[1];
          }
          if (PANEL1 == null) {
            PANEL1 = tmp20.PANEL;
          }
          if (sharedValue3.PANEL !== PANEL1) {
            if (sharedValue3.PIP !== PANEL1) {
              PANEL = tmp20.PANEL;
            }
            const tmpResult3 = channelId(first[22]);
            tmpResult3.runOnJS(callback7)(PANEL);
          }
          PANEL = PANEL1;
          if (!tmp7) {
            PANEL = tmp20.PANEL;
          }
        } else {
          let tmp10 = first2 || tmp7;
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
            const tmpResult4 = channelId(first[22]);
            tmpResult4.runOnJS(callback7)(sharedValue3.PANEL);
          }
        }
      }
    };
    const useAnimatedReaction4 = tmpResult62.useAnimatedReaction;
    fn8.__closure = { cheapWorkletArrayShallowEqual: tmp(tmp2[23]).cheapWorkletArrayShallowEqual, TransitionStates: tmp(tmp2[53]).TransitionStates, VoicePanelModes: tmp19, runOnJS: tmp(tmp2[22]).runOnJS, setMode: callback7, isDockEnabled: first2 };
    fn8.__workletHash = 3038003117263;
    fn8.__initData = __initData7;
    const obj21 = { cheapWorkletArrayShallowEqual: tmp(tmp2[23]).cheapWorkletArrayShallowEqual, TransitionStates: tmp(tmp2[53]).TransitionStates, VoicePanelModes: tmp19, runOnJS: tmp(tmp2[22]).runOnJS, setMode: callback7, isDockEnabled: first2 };
    const animatedReaction4 = useAnimatedReaction4(E, fn8);
    const obj22 = { mode: sharedValue1, controlsSpecs: tmp43Result, safeArea: sharedValue21, windowDimensions: sharedValue2, dockHeight: tmp38.dockHeight };
    const tmp121 = tmp8(tmp2[63])(obj22);
    __initData2 = tmp121;
    const obj23 = { channelId, connected: isConnected, focusedId: tmp123, layoutManager: first5, mode: first6, windowDimensions: sharedValue2, pipAvoidanceSpecs: tmp121, safeArea: sharedValue21 };
    const useControllerPIPState = tmp(tmp2[64]).useControllerPIPState;
    tmp(tmp2[64]);
    const controllerPIPState = useControllerPIPState(obj23);
    obj2.useRef(null);
    const items35 = [first6, stateFromStores1, channelId];
    const layoutEffect16 = obj2.useLayoutEffect(() => {
      const rTCConnection = sharedValue21.getRTCConnection();
      let tmp = null != rTCConnection;
      const obj = sharedValue21;
      if (tmp) {
        tmp = obj.getChannelId() === channelId;
      }
      if (tmp) {
        const tmp3 = ref;
        if (ref.current !== sharedValue3.PIP) {
          if (first6 === sharedValue3.PIP) {
            rTCConnection.setPipOpen(true);
          }
        }
        const tmp7 = tmp3.current === tmp4.PIP && first6 !== tmp4.PIP;
        if (tmp7) {
          rTCConnection.setPipOpen(false);
        }
      }
    }, items35);
    const layoutEffect17 = obj2.useLayoutEffect(() => {
      ref.current = first6;
    });
    const items36 = [channelId];
    const callback10 = obj2.useCallback((arg0) => {
      let focusedId;
      let intl;
      let pipParticipantId;
      ({ focusedId, pipParticipantId } = arg0);
      const result = first5.shouldReactToSeriousThermalStateWhenActivityFocused();
      let tmp3 = null != focusedId;
      const result1 = first5.consumedRequestToRespondToSeriousThermalState();
      if (tmp3) {
        tmp3 = callback5(sharedValue5.getParticipant(channelId, focusedId));
      }
      let participant;
      if (null != pipParticipantId) {
        participant = sharedValue5.getParticipant(channelId, pipParticipantId);
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
            const isVideoEnabledResult = sharedValue7.isVideoEnabled();
            const tmp15 = isVideoEnabledResult || tmp11;
            if (tmp15) {
              const obj = { text: intl.string(channelId(first[27]).t.O2IlPT), icon: channelId(first[29]).VideoSlashIcon };
              const open = guildId(first[26]).open;
              guildId(first[26]);
              intl = channelId(first[27]).intl;
              open("EMBEDDED_ACTIVITIES_VIDEO_DISABLED_FOR_THERMAL_STATE", obj);
              const obj2 = channelId(first[30]);
              const result2 = obj2.trackActivityThermalStateNoticeShown();
            }
            if (isVideoEnabledResult) {
              const obj3 = guildId(first[31]);
              obj3.setVideoEnabled(false);
            }
            const obj4 = channelId(first[32]);
            const result3 = obj4.consumeRequestToReactToSeriousThermalState();
          }
        }
      }
    }, items36);
    const items37 = [stateFromStores1, controllerPIPState, callback10, channelId];
    const effect7 = obj2.useEffect(() => {
      let id;
      const items = [first5, sharedValue5];
      const batchedStoreListener = new channelId(controllerPIPState[25]).BatchedStoreListener(items, () => {
        const obj = { focusedId: stateFromStores1, pipParticipantId: id.id };
        callback10(obj);
      });
      batchedStoreListener.attach("thermal-state-reactions-" + batchedStoreListener);
      return () => batchedStoreListener.detach();
    }, items37);
    const fn9 = function f() {
      const value = sharedValue6.get();
      let id;
      if (value != null) {
        id = value.id;
      }
      const items = [id, controllerPIPState.id];
      return items;
    };
    const obj24 = { focused: sharedValue6, pipState: controllerPIPState };
    fn9.__closure = obj24;
    fn9.__workletHash = 94735519164;
    fn9.__initData = __initData;
    const fn10 = function h(arg0, arg1) {
      let tmp7;
      let tmp8;
      const cheapWorkletArrayShallowEqual = channelId(first[23]).cheapWorkletArrayShallowEqual;
      channelId(first[23]);
      const tmp = arg1;
      const tmp2 = channelId;
      const tmp3 = first;
      if (!cheapWorkletArrayShallowEqual(arg0, tmp)) {
        [tmp7, tmp8] = first1(arg0, 2);
        first1(arg0, 2);
        const obj = { focusedId: tmp7, pipParticipantId: tmp8 };
        const tmp2Result = tmp2(tmp3[22]);
        tmp2Result.runOnJS(callback10)(obj);
      }
    };
    const obj25 = { cheapWorkletArrayShallowEqual: tmp(tmp2[23]).cheapWorkletArrayShallowEqual, runOnJS: tmp(tmp2[22]).runOnJS, handleStateUpdates: callback10 };
    const useAnimatedReaction5 = tmp(tmp2[22]).useAnimatedReaction;
    tmp(tmp2[22]);
    fn10.__closure = obj25;
    fn10.__workletHash = 15246095289306;
    fn10.__initData = callback8;
    const animatedReaction5 = useAnimatedReaction5(fn9, fn10);
    const items38 = [channelId];
    const callback11 = obj2.useCallback((arg0) => {
      let connectedValue;
      let focusedParticipantId;
      ({ focusedParticipantId, connectedValue } = arg0);
      if (connectedValue) {
        connectedValue = tmp === sharedValue3.PANEL;
      }
      const tmp3 = null != focusedParticipantId && callback5(sharedValue5.getParticipant(channelId, focusedParticipantId)) && connectedValue;
      const state = sharedValue2.getState();
      state.setIsActivityFocused(tmp3);
    }, items38);
    const obj26 = { focused: sharedValue6, mode: sharedValue1, connected: sharedValue };
    tmp135.__closure = obj26;
    tmp135.__workletHash = 16641161683997;
    tmp135.__initData = setControlsMode;
    const fn11 = function h(arg0, arg1) {
      let tmp7;
      let tmp8;
      let tmp9;
      const cheapWorkletArrayShallowEqual = channelId(first[23]).cheapWorkletArrayShallowEqual;
      channelId(first[23]);
      const tmp = arg1;
      const tmp2 = channelId;
      const tmp3 = first;
      if (!cheapWorkletArrayShallowEqual(arg0, tmp)) {
        [tmp7, tmp8, tmp9] = first1(arg0, 3);
        first1(arg0, 3);
        const obj = { focusedParticipantId: tmp7, voicePanelMode: tmp8, connectedValue: tmp9 };
        const tmp2Result = tmp2(tmp3[22]);
        tmp2Result.runOnJS(callback11)(obj);
      }
    };
    const obj27 = { cheapWorkletArrayShallowEqual: tmp(tmp2[23]).cheapWorkletArrayShallowEqual, runOnJS: tmp(tmp2[22]).runOnJS, handleAnimatedReaction: callback11 };
    const useAnimatedReaction6 = tmp(tmp2[22]).useAnimatedReaction;
    tmp(tmp2[22]);
    fn11.__closure = obj27;
    fn11.__workletHash = 15290799116693;
    fn11.__initData = first6;
    const animatedReaction6 = useAnimatedReaction6(tmp135, fn11);
    const items39 = [setControlsMode];
    const callback12 = obj2.useCallback(() => {
      const obj = { mode: derivedValue.FLOATING_DEFAULT };
      setControlsMode(obj);
    }, items39);
    const obj28 = { onTransition: callback12 };
    tmp8(tmp2[21])(obj28);
    obj2.useRef(false);
    streamOutputSinkStack = obj2.useRef(0);
    const items40 = [tmp3];
    const tmpResult66 = tmp(tmp2[25]);
    const stateFromStores3 = tmpResult66.useStateFromStores(items40, () => sharedValue7.getSpeakingWhileMuted());
    const items41 = [tmp3];
    const tmpResult67 = tmp(tmp2[25]);
    const stateFromStores4 = tmpResult67.useStateFromStores(items41, () => sharedValue7.isMute());
    const items42 = [sharedValue21];
    const items43 = [];
    const tmpResult68 = tmp(tmp2[25]);
    items43[0] = tmpResult68.useStateFromStores(items42, () => sharedValue21.getRTCConnectionId());
    const effect8 = obj2.useEffect(() => {
      ref2.current = performance.now();
      ref.current = false;
    }, items43);
    const items44 = [stateFromStores4];
    const effect9 = obj2.useEffect(() => {
      const tmp = stateFromStores4;
      if (tmp) {
        const _performance = performance;
        ref2.current = performance.now();
      } else {
        ref.current = false;
      }
    }, items44);
    const items45 = [stateFromStores3, callback5];
    const effect10 = obj2.useEffect(() => {
      let intl;
      const tmp = stateFromStores3 && !ref.current;
      if (tmp) {
        const _performance = performance;
        if (performance.now() - ref2.current >= callback7) {
          ref.current = true;
          callback5();
          const obj = { text: intl.string(channelId(first[27]).t["29gnR4"]), icon: channelId(first[28]).MicrophoneSlashIcon, duration: 3 * guildId(first[24]).Millis.SECOND };
          const open = guildId(first[26]).open;
          guildId(first[26]);
          intl = channelId(first[27]).intl;
          open("SPEAKING_WHILE_MUTED", obj);
        }
      }
    }, items45);
    tmp8(tmp2[65])(channelId, sharedValue1, callback7, sharedValue);
    tmp8(tmp2[66])(first2, sharedValue1, callback7);
    tmp8(tmp2[67])();
    const items46 = [tmp88];
    const tmpResult69 = tmp(tmp2[25]);
    const stateFromStoresObject = tmpResult69.useStateFromStoresObject(items46, () => {
      let UNLOCKED;
      const currentEmbeddedActivity = sharedValue11.getCurrentEmbeddedActivity();
      let applicationId;
      const obj = sharedValue11;
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
          UNLOCKED2 = channelId(first[49]).EmbeddedActivityOrientationLockState.UNLOCKED;
        }
        UNLOCKED = UNLOCKED2;
      } else {
        UNLOCKED = channelId(first[49]).EmbeddedActivityOrientationLockState.UNLOCKED;
      }
      return obj2;
    });
    let applicationId = stateFromStoresObject.applicationId;
    const activityOrientationLockState = stateFromStoresObject.activityOrientationLockState;
    const instanceId = stateFromStoresObject.instanceId;
    const items47 = [applicationId, isConnected, first6, activityOrientationLockState, stateFromStores1, stateFromStores2, instanceId];
    const layoutEffect18 = obj2.useLayoutEffect(() => {
      let tmp = stateFromStores2;
      if (!tmp) {
        const channel = sharedValue1.getChannel(sharedValue4.getVoiceChannelId());
        let isGuildStageVoiceResult;
        if (channel != null) {
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        tmp = isGuildStageVoiceResult;
      }
      if (!tmp) {
        if (first6 === sharedValue3.PANEL) {
          const tmp8 = isConnected;
          if (tmp8) {
            if (null != applicationId) {
              const obj = { applicationId: tmp12, instanceId };
              const obj3 = channelId(first[51]);
              const tmp16 = first;
              if (stateFromStores1 === obj3.getEmbeddedActivityParticipantId(obj)) {
                guildId(tmp16[52])(activityOrientationLockState);
              }
            }
            const obj5 = channelId(first[50]);
            obj5.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
          }
        }
        const obj2 = channelId(first[50]);
        const result = obj2.restoreDefaultOrientation();
      }
    }, items47);
    const layoutEffect19 = obj2.useLayoutEffect(() => {
      let voiceChannelId;
      return () => {
        channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
        let isGuildStageVoiceResult;
        if (channel != null) {
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        if (!isGuildStageVoiceResult) {
          const obj2 = channelId(streamOutputSinkStack[50]);
          const result = obj2.restoreDefaultOrientation();
        }
      };
    }, []);
    const items48 = [first6, channelId, isConnected];
    const effect11 = obj2.useEffect(() => {
      let tmp2 = first6 !== sharedValue3.DISMISSED;
      const tmp = first6;
      if (tmp2) {
        tmp2 = isConnected;
      }
      if (tmp2) {
        const obj = { video_layout: sharedValue8(tmp) };
        const track = guildId(first[48]).track;
        const VIDEO_LAYOUT_TOGGLED = first4.VIDEO_LAYOUT_TOGGLED;
        guildId(first[48]);
        const obj2 = channelId(first[57]);
        const merged = Object.assign(obj2.collectVoiceAnalyticsMetadata(channelId));
        track(VIDEO_LAYOUT_TOGGLED, obj);
      }
    }, items48);
    closure_1 = obj2.useRef(-1);
    const tmpResult70 = tmp(tmp2[22]);
    sharedValue13 = tmpResult70.useSharedValue(null);
    const items49 = [sharedValue1, sharedValue13];
    callback13 = obj2.useCallback((arg0) => {
      if (sharedValue1.get() === sharedValue3.PANEL) {
        let result = sharedValue13.set(arg0);
        if (null != arg0) {
          const _clearTimeout = clearTimeout;
          clearTimeout(ref.current);
          const _setTimeout = setTimeout;
          ref.current = setTimeout(() => {
            const result = sharedValue13.set(null);
          }, channelId(first[33]).FLOATING_CTA_HIDE_TIMEOUT);
        }
      }
    }, items49);
    const layoutEffect20 = obj2.useLayoutEffect(() => () => clearTimeout(ref.current), []);
    __initData3 = obj2.useRef(undefined);
    const obj29 = {
      value: tmp5(obj2.useState(() => {
          const obj = { channelId, channelType: type, committedMode: closure_24.committedMode, connected: sharedValue, contentDimensions: sharedValue11, controlsSpecs, dismissPanel, dismissToPIPGestureRef, dockContentSwap: closure_24.dockContentSwap, dockEntryProgress: closure_24.dockEntryProgress, dockHeight: closure_24.dockHeight, dockJoinMorphOrigin: closure_24.dockJoinMorphOrigin, dockMinimizeProgress: closure_24.dockMinimizeProgress, dockPressProgress: closure_24.dockPressProgress, dockPressed: closure_24.dockPressed, dragScrolling: sharedValue5, focused: sharedValue6, generateStateLocker: callback3, guildId, handleDockSheetLayout: closure_24.handleDockSheetLayout, hideControls: callback4, isCall: flag, isDockConnected: closure_24.isDockConnected, isDockEnabled: first2, isDockExpanding: closure_24.isDockExpanding, isFocusedVideoZoomed: sharedValue8, layoutManager: first5, mode: sharedValue1, morphablePanelMode: derivedValue, mountedCards: first1, pipAvoidanceSpecs, preJoinContentSize: sharedValue7, refreshIdleTimeout: callback6, safeArea: sharedValue21, scrollPosition: sharedValue4, setControlsMode, setFocused: callback8, setIsFocusedVideoZoomed, setMode: callback7, setShowFloatingCTA: callback13, sheetExitProgress: closure_24.sheetExitProgress, showControls: callback5, showFloatingCTA: sharedValue13, streamOutputSinkStack, usePIPState: VoicePanelPIPStateContext.usePIPState, useReducedMotion: sharedValue9, windowDimensions: sharedValue2, wrapperDimensions: sharedValue3, wrapperOffset: sharedValue10, pipHandoff: first4 };
          return obj;
        }), 1)[0],
      children: callback6(Provider2, obj30)
    };
    const Provider = tmp8(tmp2[69]).Provider;
    obj30 = { value: controllerPIPState, children: callback6(Provider3, obj31) };
    Provider2 = tmp(tmp2[68]).VoicePanelPIPStateContext.Provider;
    let tmp162 = guildId;
    Provider3 = tmp8(tmp2[70]).Provider;
    tmp123 = stateFromStores1;
    if (guildId == null) {
      tmp162 = null;
    }
    obj31 = { value: tmp162, children };
    return callback6(Provider, obj29);
  }
  tmp45 = CONTROLS_HEIGHT;
};
