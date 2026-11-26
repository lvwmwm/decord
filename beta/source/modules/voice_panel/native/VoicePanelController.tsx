// Module ID: 19232
// Function ID: 19233
// Name: VoicePanelController
// Dependencies: [32, 19, 17, 4914, 4761, 6620, 4818, 10020, 10845, 10652, 502, 4762, 2131, 4845, 5654, 4816, 5561, 6495, 11755, 11753, 1071, 5539, 5563, 11756, 21, 19233, 1653, 10661, 1706, 1088, 504, 19234, 10990, 5595, 1112, 9684, 14521, 19235, 5809, 10676, 19236, 1494, 1628, 19240, 11762, 19241, 11757, 11759, 12, 1268, 1107, 1262, 10821, 12908, 6366, 1255, 10860, 2145, 9431, 6629, 19193, 4974, 19243, 5649, 5098, 5650, 7189, 19244, 19245, 12833, 4834, 19246, 19247, 19252, 19253, 19195, 11764, 11754, 5115, 2]
// Exports: default

// Module 19232 (VoicePanelController)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import DurationsDefault from "Durations" /* 1088 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4834 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5539 */;
import CallConstants from "CallConstants" /* 5563 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 10676 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11756 */;
import VoicePanelPIPStateContext from "VoicePanelPIPStateContext" /* 11764 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4914 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4761 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6620 */;
import ImpersonateStore from "ImpersonateStore" /* 4818 */;
import AppFreezeStore from "AppFreezeStore" /* 10020 */;
import SafeAreaDisabledStore from "SafeAreaDisabledStore" /* 10845 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 10652 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4762 */;
import MediaEngineStore from "MediaEngineStore" /* 2131 */;
import PermissionStore from "PermissionStore" /* 4845 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5654 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4816 */;
import VoiceStateStore from "VoiceStateStore" /* 5561 */;
import VoicePanelStore from "VoicePanelStore" /* 6495 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11755 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11753 */;
import Constants from "Constants" /* 1071 */;
import size_mod from "module_2" /* 2 */;

let constants2, dependencyMap, importDefault, set;

let closure_21;
let closure_22;
let closure_23;
let closure_24;
let closure_25;
let closure_26;
let closure_27;
let closure_28;
let closure_29;
let _slicedToArray = _slicedToArray_mod;
const AppState = react_native.AppState;
({ VoicePanelModes: closure_21, getAnalyticsNameForVoicePanelMode: closure_22 } = VoicePanelConstants);
({ CONTROLS_HEIGHT: closure_23, CONTROLS_HEIGHT_PTT: closure_24, CONTROLS_HIDE_TIMEOUT: closure_25, VoicePanelControlsModes: closure_26 } = VoicePanelControlsConstants);
({ AnalyticEvents: closure_27, ComponentActions: closure_28, InputModes: closure_29 } = Constants);
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const isActivityParticipant = CallConstants.isActivityParticipant;
const MorphablePanelModes = MorphablePanelConstants.MorphablePanelModes;
const jsx = Fragment.jsx;
let closure_34 = { code: "(function VoicePanelControllerTsx1(){let[focused,mode,connected]=this.__closure;var _focused$get;return[(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,mode.get(),connected.get()];})" };
let closure_35 = { code: "(function VoicePanelControllerTsx2(props,previous){let[cheapWorkletArrayShallowEqual,scheduleOnRN,handleAnimatedReaction]=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[focusedParticipantId,voicePanelMode,connectedValue]=props;scheduleOnRN(handleAnimatedReaction,{focusedParticipantId:focusedParticipantId,voicePanelMode:voicePanelMode,connectedValue:connectedValue});})" };
const MINUTE = DurationsDefault.Millis.MINUTE;
let closure_37 = { code: "(function VoicePanelControllerTsx3(){let[focused,pipState]=this.__closure;var _focused$get;return[(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,pipState.id];})" };
let closure_38 = { code: "(function VoicePanelControllerTsx4(props,previous){let[cheapWorkletArrayShallowEqual,scheduleOnRN,handleStateUpdates]=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[focusedId,pipParticipantId]=props;scheduleOnRN(handleStateUpdates,{focusedId:focusedId,pipParticipantId:pipParticipantId});})" };
let closure_39 = { code: "(function VoicePanelControllerTsx5(value){let[isFocusedVideoZoomed]=this.__closure;isFocusedVideoZoomed.set(value);})" };
let closure_40 = { code: "(function VoicePanelControllerTsx6(){let[mode,VoicePanelModes,MorphablePanelModes]=this.__closure;switch(mode.get()){case VoicePanelModes.PANEL:{return MorphablePanelModes.PANEL;}case VoicePanelModes.PIP:{return MorphablePanelModes.PIP;}default:{return MorphablePanelModes.UNDEFINED;}}})" };
let closure_41 = { code: "(function VoicePanelControllerTsx7(){let[controlsSpecs,VoicePanelControlsModes,scheduleOnRN,_queueHideControls]=this.__closure;const specs=controlsSpecs.get();if(specs.locked)return;if(specs.mode!==VoicePanelControlsModes.FLOATING_DEFAULT)return;scheduleOnRN(_queueHideControls);})" };
let closure_42 = { code: "(function VoicePanelControllerTsx8(){let[mode]=this.__closure;return mode.get();})" };
let closure_43 = { code: "(function VoicePanelControllerTsx9(value){let[VoicePanelModes,scheduleOnRN,_queueHideControls,_clearHideControlsQueue]=this.__closure;if(value===VoicePanelModes.PANEL){scheduleOnRN(_queueHideControls);}else{scheduleOnRN(_clearHideControlsQueue);}})" };
let closure_44 = { code: "(function VoicePanelControllerTsx10(){let[connected]=this.__closure;return connected.get();})" };
let closure_45 = { code: "(function VoicePanelControllerTsx11(connected){let[updateSharedValueIfChanged,controlsSpecs,pushToTalk,CONTROLS_HEIGHT_PTT,CONTROLS_HEIGHT]=this.__closure;updateSharedValueIfChanged(controlsSpecs,{height:pushToTalk&&connected?CONTROLS_HEIGHT_PTT:CONTROLS_HEIGHT,pushToTalk:pushToTalk});})" };
let closure_46 = { code: "(function VoicePanelControllerTsx12({windowState:windowState,safeAreaState:safeAreaState,contentState:contentState}){let[isConnected,cheapWorkletShallowEqual,contentDimensions,windowDimensions,safeArea,scheduleOnRN,executeLayoutManagerEffect]=this.__closure;if(isConnected&&!cheapWorkletShallowEqual(contentDimensions.get(),contentState)){contentDimensions.set(contentState);}if(!cheapWorkletShallowEqual(windowDimensions.get(),windowState)){windowDimensions.set(windowState);}if(!cheapWorkletShallowEqual(safeArea.get(),safeAreaState)){safeArea.set(safeAreaState);}scheduleOnRN(executeLayoutManagerEffect);})" };
let closure_47 = { code: "(function VoicePanelControllerTsx13(){let[connected,mode,sharedTransitionState]=this.__closure;return[connected.get(),mode.get(),sharedTransitionState.get()];})" };
let closure_48 = { code: "(function VoicePanelControllerTsx14(props,previous){let[cheapWorkletArrayShallowEqual,TransitionStates,VoicePanelModes,scheduleOnRN,setMode,isDockEnabled]=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[isConnected,currentMode,currentTransitionState]=props;if(currentTransitionState===TransitionStates.YEETED){if(currentMode!==VoicePanelModes.DISMISSED){scheduleOnRN(setMode,VoicePanelModes.DISMISSED);}}else if(currentMode===VoicePanelModes.DISMISSED){var _previous$;let previousMode=(_previous$=previous===null||previous===void 0?void 0:previous[1])!==null&&_previous$!==void 0?_previous$:VoicePanelModes.PANEL;switch(previousMode){case VoicePanelModes.PANEL:case VoicePanelModes.PIP:if(!isConnected){previousMode=VoicePanelModes.PANEL;}break;default:previousMode=VoicePanelModes.PANEL;}scheduleOnRN(setMode,previousMode);}else if(!isDockEnabled&&!isConnected&&(previous===null||previous===void 0?void 0:previous[0])===true&&currentMode===VoicePanelModes.PIP){scheduleOnRN(setMode,VoicePanelModes.PANEL);}})" };
let closure_49 = { code: "(function VoicePanelControllerTsx15(){let[mode,controlsSpecs]=this.__closure;return[mode.get(),controlsSpecs.get().mode];})" };
let closure_50 = { code: "(function VoicePanelControllerTsx16(props,previous){let[cheapWorkletArrayShallowEqual,VoicePanelControlsModes,VoicePanelModes,scheduleOnRN,dismissKeyboard]=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[currentMode,currentControlsMode]=props;if(currentControlsMode!==VoicePanelControlsModes.DRAWER||currentMode!==VoicePanelModes.PANEL||(previous===null||previous===void 0?void 0:previous[0])!==VoicePanelModes.PANEL){scheduleOnRN(dismissKeyboard);}})" };
let closure_51 = { code: "(function VoicePanelControllerTsx17(){let[dockHeight,dockActivityHideProgress]=this.__closure;return dockHeight.get()*(1-dockActivityHideProgress.get());})" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelController.tsx");

export default function VoicePanelController(channelId) {
  let PANEL;
  let Provider2;
  let Provider3;
  let beginDockEntry;
  let controlsSpecs;
  let dockActivityHideProgress;
  let dockHeight;
  let dockJoinMorphOrigin;
  let isConnected;
  let items;
  let obj16;
  let obj17;
  let obj7;
  let tmp145;
  let tmp146;
  let tmp147;
  let tmp150;
  let tmp151;
  let tmp152;
  let tmp153;
  let tmp154;
  let tmp155;
  let tmp163;
  let tmp164;
  let tmp165;
  let tmp166;
  let tmp169;
  let tmp170;
  let tmp171;
  let tmp172;
  let tmp173;
  let tmp174;
  let tmp175;
  let tmp179;
  let tmp180;
  let tmp181;
  let tmp185;
  let tmp194;
  let tmp195;
  let tmp196;
  let tmp199;
  let tmp20;
  let tmp200;
  let tmp201;
  let tmp202;
  let tmp208;
  let tmp209;
  let tmp210;
  let tmp211;
  let tmp214;
  let tmp215;
  let tmp216;
  let tmp217;
  let tmp35;
  let tmp36;
  let tmp42;
  let tmp43;
  let tmp44;
  let tmp45;
  let tmp65;
  let tmp66;
  let tmp67;
  let tmp68;
  let tmp69;
  let tmp74;
  let tmp75;
  let tmp78;
  let tmp79;
  let tmp80;
  let tmp81;
  let tmp82;
  let tmp88;
  let tmp89;
  let tmp94;
  let tmp95;
  let tmp96;
  let tmp97;
  let tmp98;
  let tmp99;
  let tmpResult44;
  let transitionCleanUp;
  let transitionState;
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
  let sharedValue1;
  let sharedValue7;
  let sharedValue21;
  let sharedValue4;
  let sharedValue2;
  let sharedValue3;
  let sharedValue8;
  let callback;
  let sharedValue10;
  let derivedValue;
  let first4;
  let closure_24;
  let callback3;
  constants2 = undefined;
  let callback5;
  let callback4;
  let callback6;
  let setControlsMode;
  let first6;
  let callback7;
  let dismissPanel;
  let callback8;
  let stateFromStores2;
  let pipAvoidanceSpecs;
  let sharedValue13;
  let callback13;
  let dismissToPIPGestureRef;
  let dockPTTPortalHostName;
  let dockPTTMeasureHostRef;
  let tmp = channelId;
  let tmp2 = streamOutputSinkStack;
  const children = channelId.children;
  let obj = channelId(streamOutputSinkStack[30]);
  let tmp3 = sharedValue4;
  let items1 = [sharedValue4];
  const stateFromStores = obj.useStateFromStores(items1, () => sharedValue4.getMode() === callback6.PUSH_TO_TALK);
  let obj2 = first2;
  let tmp5 = first1;
  streamOutputSinkStack = first1(first2.useState(() => {
    const tmp = guildId(first[67]);
    const tmp2 = new tmp(sharedValue4.getMediaEngine());
    return tmp2;
  }), 1)[0];
  const items2 = [streamOutputSinkStack];
  const effect = first2.useEffect(() => () => streamOutputSinkStack.cleanUp(), items2);
  let tmp8 = guildId;
  const tmp9 = guildId(streamOutputSinkStack[68])(channelId, guildId);
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
      let obj = items(first1[66]);
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
  let obj3 = channelId(streamOutputSinkStack[69]);
  first2 = first1(useState(obj3.useIsMobileRTCV2Enabled("VoicePanelController")), 1)[0];
  const items4 = [channelId, first2];
  const layoutEffect = first2.useLayoutEffect(() => {
    const tmp = first2;
    if (tmp) {
      let state = VoicePanelStore.getState();
      const result = state.setChannelPanelWithDock(channelId, true);
      return () => {
        const state = sharedValue9.getState();
        return state.setChannelPanelWithDock(channelId, false);
      };
    }
  }, items4);
  size = undefined;
  let rect;
  let sharedValue9;
  let first5;
  let channel = sharedValue21.getChannel(channelId);
  let flag;
  const tmp14 = sharedValue21;
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
  const tmpResult = tmp(tmp2[26]);
  sharedValue = tmpResult.useSharedValue(isConnected);
  const first3 = tmp5(obj2.useState(() => {
    let tmp2 = first2;
    if (tmp2) {
      if (!tmp) {
        let tmp6;
        let PIP;
        const voicePanelsPIP = sharedValue9.getState().voicePanelsPIP;
        if (!voicePanelsPIP.has(tmp3)) {
          tmp6 = sharedValue10;
          PIP = sharedValue10.PANEL;
        }
        tmp2 = PIP === tmp6.PIP;
      }
      PIP = sharedValue10.PIP;
      tmp6 = sharedValue10;
    }
    return tmp2;
  }), 1)[0];
  const useSharedValue = tmp(tmp2[26]).useSharedValue;
  tmp(tmp2[26]);
  if (first3) {
    PANEL = tmp19.PIP;
    tmp20 = tmp19;
  } else {
    PANEL = tmp19.PANEL;
    tmp20 = tmp19;
  }
  sharedValue1 = useSharedValue(PANEL);
  const tmpResult38 = tmp(tmp2[41]);
  size = tmpResult38.getWindowDimensions();
  const size1 = { width: size.width, height: size.height, landscape: size.width > size.height };
  const tmpResult39 = tmp(tmp2[26]);
  sharedValue2 = tmpResult39.useSharedValue(size1);
  const tmpResult40 = tmp(tmp2[42]);
  rect = tmpResult40.getSafeAreaInsets();
  let obj4 = {};
  const useSharedValue2 = tmp(tmp2[26]).useSharedValue;
  tmp(tmp2[26]);
  let merged = Object.assign(rect);
  sharedValue21 = useSharedValue2(obj4);
  const obj5 = { windowWidth: size.width, connected: isConnected, safeAreaLeft: rect.left, safeAreaRight: rect.right };
  const tmpResult42 = tmp(tmp2[43]);
  const maxPanelWidth = tmpResult42.getMaxPanelWidth(obj5);
  const useSharedValue3 = tmp(tmp2[26]).useSharedValue;
  tmp(tmp2[26]);
  if (first3) {
    let obj6 = { drawerHeight: null, drawerWidth: null, drawerX: 0, drawerY: 0, pipX: -1, pipY: -1, animated: false, mode: tmp20.PIP };
    ({ height: obj15.drawerHeight, width: obj15.drawerWidth } = size);
    obj7 = obj6;
  } else {
    obj7 = { drawerHeight: size.height, drawerWidth: maxPanelWidth, drawerX: tmpResult44.getPanelX(size.width, maxPanelWidth), drawerY: size.height, pipX: -1, pipY: -1, animated: true, mode: tmp20.PANEL };
    tmpResult44 = tmp(tmp2[43]);
  }
  sharedValue3 = useSharedValue3(obj7);
  const tmpResult45 = tmp(tmp2[26]);
  sharedValue4 = tmpResult45.useSharedValue(0);
  const tmpResult46 = tmp(tmp2[26]);
  sharedValue5 = tmpResult46.useSharedValue(false);
  const tmpResult47 = tmp(tmp2[26]);
  sharedValue6 = tmpResult47.useSharedValue(null);
  const tmpResult48 = tmp(tmp2[26]);
  sharedValue7 = tmpResult48.useSharedValue(0);
  first4 = tmp5(obj2.useState(() => {
    const tmp = new guildId(first[44])();
    return tmp;
  }), 1)[0];
  const tmpResult49 = tmp(tmp2[26]);
  sharedValue8 = tmpResult49.useSharedValue(false);
  const items5 = [dismissToPIPGestureRef, sharedValue8];
  let c0;
  [tmp35, tmp36] = items5;
  class VoicePanelControllerTsx5 {
    constructor(arg0) {
      const result = _undefined.set(arg0);
    }
  }
  const items6 = [tmp36];
  VoicePanelControllerTsx5.__closure = items6;
  VoicePanelControllerTsx5.__workletHash = 1592214518983;
  VoicePanelControllerTsx5.__initData = tmp35;
  const items7 = [sharedValue8];
  callback = obj2.useCallback(VoicePanelControllerTsx5, items7);
  const tmpResult50 = tmp(tmp2[26]);
  sharedValue9 = tmpResult50.useSharedValue(sharedValue.useReducedMotion);
  const items8 = [sharedValue9];
  const effect2 = obj2.useEffect(() => {
    function onChange() {
      const result = sharedValue9.set(rect.useReducedMotion);
    }
    let result = rect.addReactChangeListener(onChange);
    return () => {
      const result = sharedValue.removeReactChangeListener(onChange);
    };
  }, items8);
  const tmpResult51 = tmp(tmp2[26]);
  sharedValue10 = tmpResult51.useSharedValue({ gestureActive: false, x: 0, y: 0 });
  const tmp41 = tmp8(tmp2[45])({ isDockEnabled: first2, mountsMinimized: first3, mode: sharedValue1, connected: sharedValue, safeArea: sharedValue21, wrapperOffset: sharedValue10, wrapperDimensions: sharedValue3 });
  const items9 = [dockPTTPortalHostName, sharedValue1, tmp20, callback7];
  c0 = undefined;
  let c1;
  let c2;
  [tmp42, tmp43, tmp44, tmp45] = items9;
  const tmpResult52 = tmp(tmp2[26]);
  class VoicePanelControllerTsx6 {
    constructor() {
      const value = _undefined.get();
      if (_undefined2.PANEL === value) {
        return _undefined3.PANEL;
      } else if (tmp2.PIP === value) {
        return _undefined3.PIP;
      } else {
        return _undefined3.UNDEFINED;
      }
    }
  }
  const items10 = [tmp43, tmp44, tmp45];
  VoicePanelControllerTsx6.__closure = items10;
  VoicePanelControllerTsx6.__workletHash = 447322024316;
  VoicePanelControllerTsx6.__initData = tmp42;
  derivedValue = tmpResult52.useDerivedValue(VoicePanelControllerTsx6);
  first5 = tmp5(obj2.useState(() => {
    const obj = new guildId(first[46])(channelId);
    obj.updateItems(items);
    const obj2 = { windowWidth: size.width, windowHeight: size.height, safeAreaLeft: rect.left, safeAreaRight: rect.right, safeAreaTop: rect.top, safeAreaBottom: rect.bottom, controlBarSize: stateFromStores ? closure_24 : first4 };
    obj.updateProps(obj2);
    return obj;
  }), 1)[0];
  const items11 = [first5];
  const layoutEffect1 = obj2.useLayoutEffect(() => () => first5.cleanUp(), items11);
  const tmpResult53 = tmp(tmp2[26]);
  sharedValue11 = tmpResult53.useSharedValue(first5.getContentDimensions());
  closure_24 = tmp41;
  _slicedToArray = undefined;
  let closure_4;
  let callback1;
  let callback2;
  let cancelControlsDebounce;
  setControlsMode = undefined;
  let closure_9;
  tmp(tmp2[26]);
  const obj8 = { mode: constants2.FLOATING_DEFAULT, locked: false, height: null, pushToTalk: null };
  if (stateFromStores) {
    let tmp52;
    if (isConnected) {
      tmp52 = closure_24;
    }
    obj8.height = tmp52;
    obj8.pushToTalk = stateFromStores;
    const tmp50Result = tmp50(obj8);
    _slicedToArray = tmp50Result;
    closure_4 = obj2.useRef(-1);
    callback1 = obj2.useCallback(() => {
      if (-1 !== ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
        ref.current = -1;
      }
    }, []);
    const items12 = [tmp50Result, callback1, sharedValue1];
    callback2 = obj2.useCallback(() => {
      let tmp2;
      callback1();
      if (-1 === ref.current) {
        const _setTimeout = setTimeout;
        tmp2.current = setTimeout(() => {
          callback1();
          if (sharedValue1.get() === constants.PANEL) {
            let locked = closure_1_3.get().mode !== constants2.FLOATING_DEFAULT;
            const tmp2 = constants2;
            if (!locked) {
              locked = obj.get().locked;
            }
            if (!locked) {
              const obj2 = { mode: tmp2.HIDDEN };
              isConnected(stateFromStores[47])(closure_1_3, obj2);
            }
          }
        }, callback3);
      }
    }, items12);
    const items13 = [tmp50Result, callback2];
    const memo = obj2.useMemo(() => {
      let obj = isConnected(stateFromStores[48]);
      let closure_0 = obj.debounce(function _setControlsMode(mode, returnMode) {
        const obj = { mode, returnMode };
        isConnected(stateFromStores[47])(closure_1_3, obj);
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
            FLOATING_DEFAULT = constants.FLOATING_DEFAULT;
          }
          if (debounce) {
            closure_0(mode, FLOATING_DEFAULT);
          } else {
            closure_0.cancel();
            const obj2 = { mode, returnMode: FLOATING_DEFAULT };
            guildId(first[47])(closure_3, obj2);
            callback2();
          }
        }
      };
      return obj2;
    }, items13);
    cancelControlsDebounce = memo.cancelControlsDebounce;
    setControlsMode = memo.setControlsMode;
    const _Set = Set;
    const self = this;
    const self2 = this;
    const useRef = obj2.useRef;
    set = new Set();
    closure_9 = useRef(set);
    const items14 = [tmp50Result, callback2, callback1];
    const items15 = [setControlsMode];
    callback3 = obj2.useCallback((arg0) => {
      let v4Result = arg0;
      if (arg0 == null) {
        let tmp2 = sharedValue1;
        let obj = sharedValue1(stateFromStores[49]);
        v4Result = obj.v4();
      }
      sharedValue1 = v4Result;
      return {
        lock(FLOATING_DEFAULT) {
          const current = ref.current;
          const tmp2 = v4Result;
          if (!current.has(v4Result)) {
            callback1();
            const current2 = tmp.current;
            current2.add(tmp2);
            const obj = { locked: ref.current.size > 0 };
            if (null != FLOATING_DEFAULT) {
              obj.mode = FLOATING_DEFAULT;
            }
            guildId(first[47])(closure_3, obj);
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
            guildId(first[47])(closure_3, obj);
            callback2();
          }
        }
      };
    }, items14);
    const items16 = [setControlsMode, tmp50Result];
    callback4 = obj2.useCallback(() => {
      let obj = arg0;
      if (arg0 === undefined) {
        obj = { debounce: false };
      }
      const obj2 = { mode: constants2.HIDDEN, debounce: obj.debounce };
      setControlsMode(obj2);
    }, items15);
    callback5 = obj2.useCallback(() => {
      let obj = arg0;
      if (arg0 === undefined) {
        obj = {};
      }
      let debounce = obj.debounce;
      if (debounce === undefined) {
        debounce = false;
      }
      let mode = closure_3.get().returnMode;
      const tmp = setControlsMode;
      if (mode == null) {
        mode = constants2.FLOATING_DEFAULT;
      }
      return tmp({ mode, debounce });
    }, items16);
    const items17 = [dockPTTMeasureHostRef, tmp50Result, constants2, , ];
    const useCallback = obj2.useCallback;
    items17[3] = tmp(tmp2[28]).scheduleOnRN;
    items17[4] = callback2;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    let c3;
    [tmp65, tmp66, tmp67, tmp68, tmp69] = items17;
    class VoicePanelControllerTsx7 {
      constructor() {
        const value = _undefined.get();
        if (!value.locked) {
          if (value.mode === _undefined2.FLOATING_DEFAULT) {
            _undefined3(c3);
          }
        }
      }
    }
    const items18 = [tmp66, tmp67, tmp68, tmp69];
    VoicePanelControllerTsx7.__closure = items18;
    VoicePanelControllerTsx7.__workletHash = 216796253323;
    VoicePanelControllerTsx7.__initData = tmp65;
    const items19 = [tmp50Result, callback2];
    callback6 = useCallback(VoicePanelControllerTsx7, items19);
    const items20 = [closure_42, sharedValue1];
    c0 = undefined;
    [tmp74, tmp75] = items20;
    const tmpResult55 = tmp(tmp2[26]);
    class VoicePanelControllerTsx8 {
      constructor() {
        return _undefined.get();
      }
    }
    const items21 = [tmp75];
    VoicePanelControllerTsx8.__closure = items21;
    VoicePanelControllerTsx8.__workletHash = 6699398210324;
    VoicePanelControllerTsx8.__initData = tmp74;
    const items22 = [closure_43, tmp20, , , ];
    const useAnimatedReaction = tmpResult55.useAnimatedReaction;
    items22[2] = tmp(tmp2[28]).scheduleOnRN;
    items22[3] = callback2;
    items22[4] = callback1;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    [tmp78, tmp79, tmp80, tmp81, tmp82] = items22;
    class VoicePanelControllerTsx9 {
      constructor(arg0) {
        if (arg0 === _undefined.PANEL) {
          _undefined2(c2);
        } else {
          _undefined2(c3);
        }
      }
    }
    const items23 = [tmp79, tmp80, tmp81, tmp82];
    VoicePanelControllerTsx9.__closure = items23;
    VoicePanelControllerTsx9.__workletHash = 10393098854365;
    VoicePanelControllerTsx9.__initData = tmp78;
    const animatedReaction = useAnimatedReaction(VoicePanelControllerTsx8, VoicePanelControllerTsx9);
    const items24 = [stateFromStores, tmp50Result, isConnected];
    const layoutEffect2 = obj2.useLayoutEffect(() => {
      if (stateFromStores) {
        let tmp5;
        const tmp4 = isConnected;
        if (tmp4) {
          tmp5 = closure_24;
        }
        const obj = { height: tmp5, pushToTalk: tmp3 };
        tmp(tmp2, obj);
      }
      tmp5 = first4;
    }, items24);
    const items25 = [closure_44, sharedValue];
    c0 = undefined;
    [tmp88, tmp89] = items25;
    const tmpResult56 = tmp(tmp2[26]);
    class VoicePanelControllerTsx10 {
      constructor() {
        return _undefined.get();
      }
    }
    const items26 = [tmp89];
    VoicePanelControllerTsx10.__closure = items26;
    VoicePanelControllerTsx10.__workletHash = 739056177037;
    VoicePanelControllerTsx10.__initData = tmp88;
    const items27 = [closure_45, , , , , ];
    const useAnimatedReaction2 = tmpResult56.useAnimatedReaction;
    items27[1] = tmp8(tmp2[47]);
    items27[2] = tmp50Result;
    items27[3] = stateFromStores;
    items27[4] = closure_24;
    let tmp92 = first4;
    items27[5] = first4;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    let c4;
    [tmp94, tmp95, tmp96, tmp97, tmp98, tmp99] = items27;
    class VoicePanelControllerTsx11 {
      constructor(arg0) {
        if (c2) {
          let tmp5;
          const tmp4 = arg0;
          if (tmp4) {
            tmp5 = c3;
          }
          const obj = { height: tmp5, pushToTalk: tmp3 };
          tmp(tmp2, obj);
        }
        tmp5 = c4;
      }
    }
    const items28 = [tmp95, tmp96, tmp97, tmp98, tmp99];
    VoicePanelControllerTsx11.__closure = items28;
    VoicePanelControllerTsx11.__workletHash = 17384584861986;
    VoicePanelControllerTsx11.__initData = tmp94;
    const animatedReaction2 = useAnimatedReaction2(VoicePanelControllerTsx10, VoicePanelControllerTsx11);
    const items29 = [cancelControlsDebounce, ];
    const tmp91 = closure_24;
    class VoicePanelControllerTsx5 {
      constructor(arg0) {
        const result = _undefined.set(arg0);
      }
    }
    const layoutEffect3 = obj2.useLayoutEffect(() => () => {
      cancelControlsDebounce();
      callback1();
    }, items29);
    const items30 = [setControlsMode];
    const effect3 = obj2.useEffect(() => {
      function closeTiV() {
        const obj = { mode: constants2.FLOATING_DEFAULT };
        setControlsMode(obj);
      }
      let ComponentDispatch = sharedValue1(stateFromStores[50]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(constants3.VOICE_PANEL_TIV_CLOSE, closeTiV);
      return () => {
        const ComponentDispatch = channelId(first[50]).ComponentDispatch;
        ComponentDispatch.unsubscribe(callback4.VOICE_PANEL_TIV_CLOSE, closeTiV);
      };
    }, items30);
    constants2 = tmp50Result;
    ({ beginDockEntry, dockJoinMorphOrigin } = tmp41);
    let closure_5 = tmp50Result;
    callback7 = undefined;
    const tmp5Result = tmp5(obj2.useState(() => {
      const tmp3 = first2;
      if (!tmp3) {
        let PIP;
        const voicePanelsPIP = sharedValue9.getState().voicePanelsPIP;
        if (!voicePanelsPIP.has(tmp)) {
          PIP = sharedValue10.PANEL;
        }
        return PIP;
      }
      PIP = sharedValue10.PIP;
    }), 2);
    first6 = tmp5Result[0];
    let closure_10 = tmp105;
    closure_4 = tmp105;
    let closure_8 = obj2.useRef(isConnected);
    class VoicePanelControllerTsx6 {
      constructor() {
        const value = _undefined.get();
        if (_undefined2.PANEL === value) {
          return _undefined3.PANEL;
        } else if (tmp2.PIP === value) {
          return _undefined3.PIP;
        } else {
          return _undefined3.UNDEFINED;
        }
      }
    }
    tmp106[0] = channelId;
    tmp106[1] = dockJoinMorphOrigin;
    tmp106[2] = isConnected;
    tmp106[3] = first2;
    tmp106[4] = tmp5Result[1];
    tmp106[5] = sharedValue3;
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
              closure_4(sharedValue10.PIP);
            }
          }
        }
      }
    }, tmp106);
    const items31 = [beginDockEntry, first3];
    const layoutEffect5 = obj2.useLayoutEffect(() => {
      const tmp = first3;
      if (tmp) {
        beginDockEntry();
      }
    }, items31);
    const items32 = [sharedValue1, first4];
    callback7 = obj2.useCallback((arg0) => {
      if (arg0 === sharedValue10.PANEL) {
        if (sharedValue1.get() === tmp.PIP) {
          const obj = channelId(first[64]);
          obj.dismissKeyboard();
          const cardThaw2 = first4.cardThaw;
        }
        closure_10(arg0);
      }
      const cardThaw = first4.cardThaw;
      cardThaw.cancel();
    }, items32);
    const layoutEffect6 = obj2.useLayoutEffect(() => {
      const result = sharedValue1.set(first6);
      if (transitionState !== channelId(first[61]).TransitionStates.YEETED) {
        const result1 = sharedValue.set(isConnected);
      }
    });
    const items33 = [channelId, sharedValue, sharedValue1, tmp50Result, setControlsMode, callback7];
    dismissPanel = obj2.useCallback(() => {
      if (closure_5.get().mode === constants2.DRAWER) {
        const obj = { mode: tmp.FLOATING_DEFAULT };
        setControlsMode(obj);
        flag = true;
      } else if (sharedValue.get()) {
        let flag2 = sharedValue1.get() === sharedValue10.PANEL;
        if (flag2) {
          callback7(tmp7.PIP);
          flag2 = true;
        }
        flag = flag2;
      } else {
        const state = sharedValue9.getState();
        state.closeChannel(channelId);
        flag = true;
      }
      return flag;
    }, items33);
    const items34 = [sharedValue5];
    const tmpResult57 = tmp(tmp2[30]);
    const stateFromStores1 = tmpResult57.useStateFromStores(items34, () => sharedValue5.getSelectedParticipantId(channelId));
    const items35 = [guildId, channelId];
    callback8 = obj2.useCallback((id2) => {
      let result = null == id2;
      if (!result) {
        const obj = channelId(first[62]);
        result = obj.isVoicePanelParticipantFocusable(guildId, channelId, id2);
      }
      if (result) {
        const obj2 = guildId(first[63]);
        const participant = obj2.selectParticipant(channelId, id2);
      }
    }, items35);
    closure_5 = obj2.useRef(undefined);
    const getTargetDimensions = first5.getTargetDimensions;
    const targetDimensions = getTargetDimensions(stateFromStores1);
    const items36 = [sharedValue6, stateFromStores1, targetDimensions];
    const layoutEffect7 = obj2.useLayoutEffect(() => {
      let tmp2 = null;
      if (null != stateFromStores1) {
        const obj = { id: tmp };
        const merged = Object.assign(targetDimensions);
        tmp2 = obj;
      }
      const cheapWorkletShallowEqual = channelId(first[27]).cheapWorkletShallowEqual;
      channelId(first[27]);
      const current = ref.current;
      const tmp7 = tmp2;
      const tmp8 = ref;
      if (!cheapWorkletShallowEqual(tmp7, current)) {
        tmp8.current = tmp2;
        const result = sharedValue6.set(tmp2);
      }
    }, items36);
    const tmp117 = tmp8(tmp2[62])(guildId, channelId, stateFromStores1);
    let closure_7 = tmp117;
    const items37 = [stateFromStores1, tmp117, callback8];
    const effect4 = obj2.useEffect(() => {
      if (null != stateFromStores1) {
        const tmp = closure_7;
        if (!tmp) {
          callback8(null);
        }
      }
    }, items37);
    const items38 = [channelId, callback8];
    const effect5 = obj2.useEffect(() => () => {
      channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
      let isGuildStageVoiceResult;
      const obj = voiceChannelId;
      if (channel != null) {
        isGuildStageVoiceResult = channel.isGuildStageVoice();
      }
      let tmp2 = true === isGuildStageVoiceResult;
      if (tmp2) {
        const obj3 = guildId(sharedValue6[56]);
        tmp2 = !obj3.isStageUnifiedCall(channel, "VoicePanelController");
      }
      if (tmp2) {
        tmp2 = obj.getVoiceChannelId() === channelId;
      }
      if (!tmp2) {
        callback8(null);
      }
    }, items38);
    const items39 = [sharedValue11];
    const tmpResult58 = tmp(tmp2[30]);
    stateFromStores2 = tmpResult58.useStateFromStores(items39, () => {
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
    const tmp122 = first2 && transitionState === tmp(tmp2[61]).TransitionStates.YEETED;
    const tmp5Result3 = tmp5(obj2.useState(() => {
      let height;
      let width;
      const obj = channelId(first[41]);
      const windowDimensions = obj.getWindowDimensions();
      ({ width, height } = windowDimensions);
      size = { width, height, landscape: width > height };
      return size;
    }), 2);
    const first7 = tmp5Result3[0];
    let closure_6 = tmp125;
    const useState2 = obj2.useState;
    const tmpResult59 = tmp(tmp2[42]);
    const tmp5Result4 = tmp5(useState2(tmpResult59.getSafeAreaInsets()), 2);
    const first8 = tmp5Result4[0];
    closure_8 = tmp128;
    const tmpResult60 = tmp(tmp2[46]);
    const managerSubscription = tmpResult60.useManagerSubscription(first5);
    const obj9 = { timeout: -1, layoutKey: managerSubscription, connected: isConnected, windowState: first7, safeAreaState: first8, contentDimensions: { width: 0, height: 0 } };
    const ref = obj2.useRef(obj9);
    dependencyMap = tmp125;
    _slicedToArray = tmp128;
    const items40 = [ref, isConnected, tmp5Result3[1], tmp5Result4[1]];
    const layoutEffect8 = obj2.useLayoutEffect(() => {
      let tmp;
      if (ref.current.connected !== isConnected) {
        ref.current.connected = tmp;
        let tmp2 = closure_2;
        closure_2((safeAreaState) => {
          let height;
          let width;
          let windowState = safeAreaState;
          const obj = isConnected(closure_2[41]);
          const windowDimensions = obj.getWindowDimensions();
          ({ width, height } = windowDimensions);
          ref.current.windowState = { width, height, landscape: width > height };
          const obj2 = isConnected(closure_2[27]);
          const tmp2 = ref;
          if (!obj2.cheapWorkletShallowEqual(safeAreaState, ref.current.windowState)) {
            windowState = tmp2.current.windowState;
          }
          return windowState;
        });
        closure_3((safeAreaState) => {
          const current = ref.current;
          const obj = isConnected(closure_2[42]);
          current.safeAreaState = obj.getSafeAreaInsets();
          const obj2 = isConnected(closure_2[27]);
          const tmp = ref;
          if (!obj2.cheapWorkletShallowEqual(safeAreaState, ref.current.safeAreaState)) {
            safeAreaState = tmp.current.safeAreaState;
          }
          return safeAreaState;
        });
      }
    }, items40);
    const callback9 = obj2.useCallback(() => {
      clearTimeout(ref.current.timeout);
      ref.current.timeout = setTimeout(() => {
        clearTimeout(ref.current.timeout);
        let obj = sharedValue2(sharedValue11[51]);
        obj.batchUpdates(() => {
          let tmp = closure_1_6((current) => {
            let windowState = current;
            const obj = closure_2_0(closure_2_2[27]);
            const tmp = ref;
            if (!obj.cheapWorkletShallowEqual(ref.current.windowState, current)) {
              windowState = tmp.current.windowState;
            }
            return windowState;
          });
          closure_1_8((current) => {
            let safeAreaState = current;
            const obj = closure_2_0(closure_2_2[27]);
            const tmp = ref;
            if (!obj.cheapWorkletShallowEqual(ref.current.safeAreaState, current)) {
              safeAreaState = tmp.current.safeAreaState;
            }
            return safeAreaState;
          });
        });
      }, 60);
    }, []);
    const items41 = [callback9];
    const layoutEffect9 = obj2.useLayoutEffect(() => {
      let height;
      let width;
      let tmp = sharedValue21;
      let closure_0 = sharedValue21(sharedValue11[52])(function updateSafeAreas(current) {
        const obj = sharedValue2(sharedValue11[27]);
        const tmp = ref;
        if (!obj.cheapWorkletShallowEqual(ref.current.safeAreaState, current)) {
          current = tmp.current;
          const obj2 = {};
          const merged = Object.assign(current);
          current.safeAreaState = obj2;
          callback9();
        }
      });
      let obj = sharedValue2(sharedValue11[42]);
      const safeAreaInsets = obj.getSafeAreaInsets();
      let obj2 = sharedValue2(sharedValue11[27]);
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
          const obj = sharedValue2(sharedValue11[41]);
          windowDimensions = obj.getWindowDimensions();
        }
        ({ width, height } = windowDimensions);
        size = { width, height, landscape: width > height };
        const obj3 = sharedValue2(sharedValue11[27]);
        const tmp4 = ref;
        if (!obj3.cheapWorkletShallowEqual(ref.current.windowState, size)) {
          tmp4.current.windowState = size;
          callback9();
        }
      }
      let closure_1 = tmp(tmp2[53])(updateWindowDimensions);
      const tmp3Result = sharedValue2(sharedValue11[41]);
      let windowDimensions = tmp3Result.getWindowDimensions();
      ({ width, height } = windowDimensions);
      size = { width, height, landscape: width > height };
      const tmp3Result2 = sharedValue2(sharedValue11[27]);
      if (!tmp3Result2.cheapWorkletShallowEqual(ref.current.windowState, size)) {
        ref.current.windowState = size;
        callback9();
      }
      return () => {
        closure_0();
        closure_1();
      };
    }, items41);
    let id = obj2.useId();
    const items42 = [isConnected, id];
    const layoutEffect10 = obj2.useLayoutEffect(() => {
      let key;
      const tmp = isConnected;
      if (tmp) {
        let state = first5.getState();
        let obj = { key: id, lockEnabled: true };
        let safeAreaDisableLock = state.requestSafeAreaDisableLock(obj);
        return () => {
          const state = callback9.getState();
          const obj = { key, lockEnabled: false };
          const safeAreaDisableLock = state.requestSafeAreaDisableLock(obj);
        };
      }
    }, items42);
    const tmp120 = sharedValue11;
    if (!tmp122) {
      first5.updateItems(items);
    }
    const obj10 = { windowWidth: null, windowHeight: null, safeAreaLeft: null, safeAreaRight: null, safeAreaTop: null, safeAreaBottom: null, controlBarSize: tmp92 };
    ({ width: obj32.windowWidth, height: obj32.windowHeight } = first7);
    ({ left: obj32.safeAreaLeft, right: obj32.safeAreaRight, top: obj32.safeAreaTop, bottom: obj32.safeAreaBottom } = first8);
    const updateProps = first5.updateProps;
    if (stateFromStores) {
      tmp92 = tmp91;
    }
    const updatePropsResult = updateProps(obj10);
    const items43 = [sharedValue11, updatePropsResult, managerSubscription, first5, sharedValue21, first8, sharedValue2, first7, isConnected];
    const layoutEffect11 = obj2.useLayoutEffect(() => {
      let tmp2;
      let tmp3;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      ref.current.layoutKey = managerSubscription;
      let tmp = channelId(first[28]);
      const items = [closure_2_46, isConnected, , , , , , ];
      const scheduleOnUI = tmp.scheduleOnUI;
      items[2] = channelId(first[27]).cheapWorkletShallowEqual;
      items[3] = sharedValue11;
      items[4] = sharedValue2;
      items[5] = sharedValue21;
      items[6] = channelId(first[28]).scheduleOnRN;
      items[7] = function executeLayoutManagerEffect() {
        return first5.handleLayoutEffect();
      };
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9] = items;
      class VoicePanelControllerTsx12 {
        constructor(arg0) {
          let contentState;
          let safeAreaState;
          let windowState;
          ({ windowState, safeAreaState, contentState } = arg0);
          const tmp = c0 && !_undefined(_undefined2.get(), contentState);
          if (tmp) {
            const result = _undefined2.set(contentState);
          }
          const obj = _undefined3;
          const tmp6 = _undefined;
          if (!_undefined(_undefined3.get(), windowState)) {
            const result1 = obj.set(windowState);
          }
          const obj2 = _undefined4;
          if (!tmp6(_undefined4.get(), safeAreaState)) {
            const result2 = obj2.set(safeAreaState);
          }
          _undefined5(c6);
        }
      }
      const items1 = [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9];
      VoicePanelControllerTsx12.__closure = items1;
      VoicePanelControllerTsx12.__workletHash = 2580994334793;
      VoicePanelControllerTsx12.__initData = tmp2;
      let obj = { windowState: first7, safeAreaState: first8, contentState: updatePropsResult };
      scheduleOnUI(VoicePanelControllerTsx12, obj);
    }, items43);
    const items44 = [first5];
    const effect6 = obj2.useEffect(() => {
      let c0;
      function checkDimensions() {
        let tmp = c3;
        if (!tmp) {
          let tmp3 = sharedValue11;
          let obj = sharedValue2(sharedValue11[41]);
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
              const obj = channelId(first[41]);
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
                  const obj2 = guildId(tmp[55]);
                  obj2.track(callback5.VOICE_PANEL_LAYOUT_DESYNC, obj4);
                  c1 = null;
                }
              }
            }, 250);
          }
        }
      }
      if (!sharedValue2(sharedValue11[54]).isStable) {
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
    }, items44);
    const layoutEffect12 = obj2.useLayoutEffect(() => () => clearTimeout(ref.current.timeout), []);
    const items45 = [first6, stateFromStores2];
    const layoutEffect13 = obj2.useLayoutEffect(() => {
      const tmp = first6 === sharedValue10.PANEL && stateFromStores2;
      if (tmp) {
        const obj = EmbeddedActivitiesActionCreators;
        const result = obj.updateActivityPanelMode(ActivityPanelModes.PIP);
      }
    }, items45);
    const items46 = [closure_49, sharedValue1, tmp50Result];
    c0 = undefined;
    c1 = undefined;
    [tmp145, tmp146, tmp147] = items46;
    const tmpResult61 = tmp(tmp2[26]);
    class VoicePanelControllerTsx15 {
      constructor() {
        const items = [_undefined.get(), _undefined2.get().mode];
        return items;
      }
    }
    const items47 = [tmp146, tmp147];
    VoicePanelControllerTsx15.__closure = items47;
    VoicePanelControllerTsx15.__workletHash = 14860349997978;
    VoicePanelControllerTsx15.__initData = tmp145;
    const items48 = [closure_50, , , , , ];
    const useAnimatedReaction3 = tmpResult61.useAnimatedReaction;
    items48[1] = tmp(tmp2[27]).cheapWorkletArrayShallowEqual;
    items48[2] = constants2;
    items48[3] = tmp20;
    items48[4] = tmp(tmp2[28]).scheduleOnRN;
    items48[5] = tmp(tmp2[64]).dismissKeyboard;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    [tmp150, tmp151, tmp152, tmp153, tmp154, tmp155] = items48;
    class VoicePanelControllerTsx16 {
      constructor(arg0, arg1) {
        const tmp = c0;
        const tmp2 = arg1;
        if (!tmp(arg0, tmp2)) {
          let tmp7 = first1(arg0, 2)[1] === _undefined.DRAWER;
          first1(arg0, 2);
          if (tmp7) {
            tmp7 = tmp5 === _undefined2.PANEL;
          }
          if (tmp7) {
            let first;
            if (arg1 != null) {
              first = arg1[0];
            }
            tmp7 = first === _undefined2.PANEL;
          }
          if (!tmp7) {
            _undefined3(c4);
          }
        }
      }
    }
    const items49 = [tmp151, tmp152, tmp153, tmp154, tmp155];
    VoicePanelControllerTsx16.__closure = items49;
    VoicePanelControllerTsx16.__workletHash = 10128574886488;
    VoicePanelControllerTsx16.__initData = tmp150;
    const animatedReaction3 = useAnimatedReaction3(VoicePanelControllerTsx15, VoicePanelControllerTsx16);
    const tmpResult62 = tmp(tmp2[26]);
    const sharedValue12 = tmpResult62.useSharedValue(transitionState);
    const items50 = [transitionState, sharedValue12, transitionCleanUp, channelId];
    const layoutEffect14 = obj2.useLayoutEffect(() => {
      const result = sharedValue12.set(transitionState);
      if (transitionState === channelId(first[61]).TransitionStates.YEETED) {
        state = flag.getState();
        const _HermesInternal = HermesInternal;
        const requestFreezeLock = state.requestFreezeLock;
        const obj = { lockEnabled: false, key: "voice-panel-freeze-" + channelId };
        const freezeLock = requestFreezeLock(obj);
        const _setTimeout = setTimeout;
        const timeout = setTimeout(transitionCleanUp, 500);
        return () => clearTimeout(closure_0);
      }
    }, items50);
    const items51 = [channelId];
    const layoutEffect15 = obj2.useLayoutEffect(() => () => {
      state = state.getState();
      const obj = { lockEnabled: false, key: "voice-panel-freeze-" + channelId };
      const freezeLock = state.requestFreezeLock(obj);
    }, items51);
    const items52 = [closure_47, sharedValue, sharedValue1, sharedValue12];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    [tmp163, tmp164, tmp165, tmp166] = items52;
    const tmpResult63 = tmp(tmp2[26]);
    class VoicePanelControllerTsx13 {
      constructor() {
        const items = [_undefined.get(), _undefined2.get(), _undefined3.get()];
        return items;
      }
    }
    const items53 = [tmp164, tmp165, tmp166];
    VoicePanelControllerTsx13.__closure = items53;
    VoicePanelControllerTsx13.__workletHash = 15466493412616;
    VoicePanelControllerTsx13.__initData = tmp163;
    const items54 = [closure_48, , , , , , ];
    const useAnimatedReaction4 = tmpResult63.useAnimatedReaction;
    items54[1] = tmp(tmp2[27]).cheapWorkletArrayShallowEqual;
    items54[2] = tmp(tmp2[61]).TransitionStates;
    items54[3] = tmp20;
    items54[4] = tmp(tmp2[28]).scheduleOnRN;
    items54[5] = callback7;
    items54[6] = first2;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    let c5;
    [tmp169, tmp170, tmp171, tmp172, tmp173, tmp174, tmp175] = items54;
    class VoicePanelControllerTsx14 {
      constructor(arg0, arg1) {
        let tmp5;
        let tmp6;
        const tmp = c0;
        const tmp2 = arg1;
        if (!tmp(arg0, tmp2)) {
          const tmp4 = first1(arg0, 3);
          [tmp5, tmp6] = tmp4;
          if (tmp4[2] === _undefined.YEETED) {
            if (tmp6 !== _undefined2.DISMISSED) {
              _undefined3(c4, tmp17.DISMISSED);
            }
          } else if (tmp6 === _undefined2.DISMISSED) {
            let PANEL;
            let PANEL1;
            if (arg1 != null) {
              PANEL1 = arg1[1];
            }
            if (PANEL1 == null) {
              PANEL1 = tmp21.PANEL;
            }
            if (_undefined2.PANEL !== PANEL1) {
              if (_undefined2.PIP !== PANEL1) {
                PANEL = tmp21.PANEL;
              }
              _undefined3(c4, PANEL);
            }
            PANEL = PANEL1;
            if (!tmp5) {
              PANEL = tmp21.PANEL;
            }
          } else {
            let tmp8 = c5 || tmp5;
            if (!tmp8) {
              let first;
              if (arg1 != null) {
                first = arg1[0];
              }
              tmp8 = true !== first;
            }
            if (!tmp8) {
              tmp8 = tmp6 !== tmp21.PIP;
            }
            if (!tmp8) {
              _undefined3(c4, _undefined2.PANEL);
            }
          }
        }
      }
    }
    const items55 = [tmp170, tmp171, tmp172, tmp173, tmp174, tmp175];
    VoicePanelControllerTsx14.__closure = items55;
    VoicePanelControllerTsx14.__workletHash = 7078889270075;
    VoicePanelControllerTsx14.__initData = tmp169;
    const animatedReaction4 = useAnimatedReaction4(VoicePanelControllerTsx13, VoicePanelControllerTsx14);
    ({ dockHeight, dockActivityHideProgress } = tmp41);
    const items56 = [closure_51, dockHeight, dockActivityHideProgress];
    c0 = undefined;
    c1 = undefined;
    [tmp179, tmp180, tmp181] = items56;
    const tmpResult64 = tmp(tmp2[26]);
    class VoicePanelControllerTsx17 {
      constructor() {
        const value = _undefined.get();
        return value * (1 - _undefined2.get());
      }
    }
    const items57 = [tmp180, tmp181];
    VoicePanelControllerTsx17.__closure = items57;
    VoicePanelControllerTsx17.__workletHash = 14193694933288;
    VoicePanelControllerTsx17.__initData = tmp179;
    const derivedValue1 = tmpResult64.useDerivedValue(VoicePanelControllerTsx17);
    const obj11 = { mode: sharedValue1, controlsSpecs: tmp50Result, safeArea: sharedValue21, windowDimensions: sharedValue2, dockHeight: derivedValue1 };
    const tmp183 = tmp8(tmp2[71])(obj11);
    pipAvoidanceSpecs = tmp183;
    const obj12 = { channelId, connected: isConnected, focusedId: tmp185, layoutManager: first5, mode: first6, windowDimensions: sharedValue2, pipAvoidanceSpecs: tmp183, safeArea: sharedValue21 };
    const useControllerPIPState = tmp(tmp2[72]).useControllerPIPState;
    tmp(tmp2[72]);
    const controllerPIPState = useControllerPIPState(obj12);
    dependencyMap = obj2.useRef(null);
    const items58 = [first6, stateFromStores1, channelId];
    const layoutEffect16 = obj2.useLayoutEffect(() => {
      const rTCConnection = sharedValue3.getRTCConnection();
      let tmp = null != rTCConnection;
      const obj = sharedValue3;
      if (tmp) {
        tmp = obj.getChannelId() === channelId;
      }
      if (tmp) {
        const tmp3 = ref;
        if (ref.current !== sharedValue10.PIP) {
          if (first6 === sharedValue10.PIP) {
            rTCConnection.setPipOpen(true);
          }
        }
        const tmp7 = tmp3.current === tmp4.PIP && first6 !== tmp4.PIP;
        if (tmp7) {
          rTCConnection.setPipOpen(false);
        }
      }
    }, items58);
    const layoutEffect17 = obj2.useLayoutEffect(() => {
      ref.current = first6;
    });
    const items59 = [channelId];
    const callback10 = obj2.useCallback((arg0) => {
      let focusedId;
      let intl;
      let pipParticipantId;
      ({ focusedId, pipParticipantId } = arg0);
      const result = sharedValue1.shouldReactToSeriousThermalStateWhenActivityFocused();
      let tmp3 = null != focusedId;
      const result1 = sharedValue1.consumedRequestToRespondToSeriousThermalState();
      if (tmp3) {
        tmp3 = first6(sharedValue5.getParticipant(channelId, focusedId));
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
            const isVideoEnabledResult = sharedValue4.isVideoEnabled();
            const tmp15 = isVideoEnabledResult || tmp11;
            if (tmp15) {
              const obj = { text: intl.string(channelId(first[34]).t.O2IlPT), icon: channelId(first[36]).VideoSlashIcon };
              const open = guildId(first[33]).open;
              guildId(first[33]);
              intl = channelId(first[34]).intl;
              open("EMBEDDED_ACTIVITIES_VIDEO_DISABLED_FOR_THERMAL_STATE", obj);
              const obj2 = channelId(first[37]);
              const result2 = obj2.trackActivityThermalStateNoticeShown();
            }
            if (isVideoEnabledResult) {
              const obj3 = guildId(first[38]);
              obj3.setVideoEnabled(false);
            }
            const obj4 = channelId(first[39]);
            const result3 = obj4.consumeRequestToReactToSeriousThermalState();
          }
        }
      }
    }, items59);
    const items60 = [stateFromStores1, controllerPIPState, callback10, channelId];
    const effect7 = obj2.useEffect(() => {
      let id;
      const items = [sharedValue1, sharedValue5];
      const batchedStoreListener = new channelId(stateFromStores1[30]).BatchedStoreListener(items, () => {
        const obj = { focusedId: stateFromStores1, pipParticipantId: id.id };
        callback10(obj);
      });
      batchedStoreListener.attach("thermal-state-reactions-" + batchedStoreListener);
      return () => batchedStoreListener.detach();
    }, items60);
    const items61 = [sharedValue13, sharedValue6, controllerPIPState];
    c0 = undefined;
    c1 = undefined;
    [tmp194, tmp195, tmp196] = items61;
    tmp185 = stateFromStores1;
    const tmpResult66 = tmp(tmp2[26]);
    class VoicePanelControllerTsx3 {
      constructor() {
        const value = _undefined.get();
        let id;
        if (value != null) {
          id = value.id;
        }
        const items = [id, _undefined2.id];
        return items;
      }
    }
    const items62 = [tmp195, tmp196];
    VoicePanelControllerTsx3.__closure = items62;
    VoicePanelControllerTsx3.__workletHash = 6486564518565;
    VoicePanelControllerTsx3.__initData = tmp194;
    const items63 = [callback13, , , ];
    const useAnimatedReaction5 = tmpResult66.useAnimatedReaction;
    items63[1] = tmp(tmp2[27]).cheapWorkletArrayShallowEqual;
    items63[2] = tmp(tmp2[28]).scheduleOnRN;
    items63[3] = callback10;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    [tmp199, tmp200, tmp201, tmp202] = items63;
    class VoicePanelControllerTsx4 {
      constructor(arg0, arg1) {
        const tmp = arg1;
        const tmp2 = c0;
        if (!tmp2(arg0, tmp)) {
          const obj = { focusedId: null, pipParticipantId: null };
          [obj.focusedId, obj.pipParticipantId] = first1(arg0, 2);
          first1(arg0, 2);
          _undefined(c2, obj);
        }
      }
    }
    const items64 = [tmp200, tmp201, tmp202];
    VoicePanelControllerTsx4.__closure = items64;
    VoicePanelControllerTsx4.__workletHash = 13500285487054;
    VoicePanelControllerTsx4.__initData = tmp199;
    const animatedReaction5 = useAnimatedReaction5(VoicePanelControllerTsx3, VoicePanelControllerTsx4);
    const items65 = [channelId];
    const callback11 = obj2.useCallback((arg0) => {
      let connectedValue;
      let focusedParticipantId;
      ({ focusedParticipantId, connectedValue } = arg0);
      if (connectedValue) {
        connectedValue = tmp === sharedValue10.PANEL;
      }
      const tmp3 = null != focusedParticipantId && first6(sharedValue5.getParticipant(channelId, focusedParticipantId)) && connectedValue;
      const state = sharedValue9.getState();
      state.setIsActivityFocused(tmp3);
    }, items65);
    const items66 = [callback8, sharedValue6, sharedValue1, sharedValue];
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    [tmp208, tmp209, tmp210, tmp211] = items66;
    const tmpResult67 = tmp(tmp2[26]);
    class VoicePanelControllerTsx1 {
      constructor() {
        const value = _undefined.get();
        let id;
        if (value != null) {
          id = value.id;
        }
        const items = [id, _undefined2.get(), _undefined3.get()];
        return items;
      }
    }
    const items67 = [tmp209, tmp210, tmp211];
    VoicePanelControllerTsx1.__closure = items67;
    VoicePanelControllerTsx1.__workletHash = 7885006587204;
    VoicePanelControllerTsx1.__initData = tmp208;
    const items68 = [stateFromStores2, , , ];
    const useAnimatedReaction6 = tmpResult67.useAnimatedReaction;
    items68[1] = tmp(tmp2[27]).cheapWorkletArrayShallowEqual;
    items68[2] = tmp(tmp2[28]).scheduleOnRN;
    items68[3] = callback11;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    [tmp214, tmp215, tmp216, tmp217] = items68;
    class VoicePanelControllerTsx2 {
      constructor(arg0, arg1) {
        const tmp = arg1;
        const tmp2 = c0;
        if (!tmp2(arg0, tmp)) {
          const obj = { focusedParticipantId: null, voicePanelMode: null, connectedValue: null };
          [obj.focusedParticipantId, obj.voicePanelMode, obj.connectedValue] = first1(arg0, 3);
          first1(arg0, 3);
          _undefined(c2, obj);
        }
      }
    }
    const items69 = [tmp215, tmp216, tmp217];
    VoicePanelControllerTsx2.__closure = items69;
    VoicePanelControllerTsx2.__workletHash = 229994875745;
    VoicePanelControllerTsx2.__initData = tmp214;
    const animatedReaction6 = useAnimatedReaction6(VoicePanelControllerTsx1, VoicePanelControllerTsx2);
    const items70 = [setControlsMode];
    const callback12 = obj2.useCallback(() => {
      const obj = { mode: constants.FLOATING_DEFAULT };
      setControlsMode(obj);
    }, items70);
    const obj13 = { onTransition: callback12 };
    tmp8(tmp2[25])(obj13);
    obj2.useRef(false);
    dependencyMap = obj2.useRef(0);
    const items71 = [tmp3, sharedValue3, tmp14, callback, sharedValue7, sharedValue2, sharedValue6];
    const tmpResult68 = tmp(tmp2[30]);
    const stateFromStores3 = tmpResult68.useStateFromStores(items71, () => {
      channelId = sharedValue3.getChannelId();
      let channel = null;
      if (null != channelId) {
        channel = sharedValue21.getChannel(channelId);
      }
      let speakingWhileMuted = sharedValue4.getSpeakingWhileMuted();
      const tmp4 = sharedValue4;
      if (speakingWhileMuted) {
        let voiceStateForChannel = null;
        const tmp7 = first;
        const tmp8 = guildId(first[31]);
        if (null != channel) {
          voiceStateForChannel = VoiceStateStore.getVoiceStateForChannel(channel.id);
        }
        const obj2 = { channel, AuthenticationStore: sharedValue7, VoiceStateStore, MediaEngineStore: tmp4, PermissionStore: sharedValue2, ImpersonateStore: sharedValue6 };
        const obj = channelId(tmp7[32]);
        speakingWhileMuted = tmp8(channel, voiceStateForChannel, obj.getMuteStates(obj2).suppress);
      }
      return speakingWhileMuted;
    });
    const items72 = [tmp3];
    const tmpResult69 = tmp(tmp2[30]);
    const stateFromStores4 = tmpResult69.useStateFromStores(items72, () => sharedValue4.isMute());
    const items73 = [sharedValue3];
    const items74 = [];
    const tmpResult70 = tmp(tmp2[30]);
    items74[0] = tmpResult70.useStateFromStores(items73, () => sharedValue3.getRTCConnectionId());
    const effect8 = obj2.useEffect(() => {
      ref2.current = performance.now();
      ref.current = false;
    }, items74);
    const items75 = [stateFromStores4];
    const effect9 = obj2.useEffect(() => {
      const tmp = stateFromStores4;
      if (tmp) {
        const _performance = performance;
        ref2.current = performance.now();
      } else {
        ref.current = false;
      }
    }, items75);
    const items76 = [stateFromStores3, callback5];
    const effect10 = obj2.useEffect(() => {
      let intl;
      const tmp = stateFromStores3 && !ref.current;
      if (tmp) {
        const _performance = performance;
        if (performance.now() - ref2.current >= pipAvoidanceSpecs) {
          ref.current = true;
          callback5();
          const obj = { text: intl.string(channelId(first[34]).t["29gnR4"]), icon: channelId(first[35]).MicrophoneSlashIcon, duration: 3 * guildId(first[29]).Millis.SECOND };
          const open = guildId(first[33]).open;
          guildId(first[33]);
          intl = channelId(first[34]).intl;
          open("SPEAKING_WHILE_MUTED", obj);
        }
      }
    }, items76);
    tmp8(tmp2[73])(channelId, sharedValue1, callback7, sharedValue);
    tmp8(tmp2[74])(first2, sharedValue1, callback7);
    tmp8(tmp2[75])();
    const items77 = [tmp120];
    const tmpResult71 = tmp(tmp2[30]);
    const stateFromStoresObject = tmpResult71.useStateFromStoresObject(items77, () => {
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
          UNLOCKED2 = channelId(first[57]).EmbeddedActivityOrientationLockState.UNLOCKED;
        }
        UNLOCKED = UNLOCKED2;
      } else {
        UNLOCKED = channelId(first[57]).EmbeddedActivityOrientationLockState.UNLOCKED;
      }
      return obj2;
    });
    let applicationId = stateFromStoresObject.applicationId;
    const activityOrientationLockState = stateFromStoresObject.activityOrientationLockState;
    const instanceId = stateFromStoresObject.instanceId;
    const items78 = [applicationId, isConnected, first6, activityOrientationLockState, stateFromStores1, stateFromStores2, instanceId];
    const layoutEffect18 = obj2.useLayoutEffect(() => {
      let tmp = stateFromStores2;
      if (!tmp) {
        const channel = sharedValue21.getChannel(sharedValue8.getVoiceChannelId());
        let isGuildStageVoiceResult;
        if (channel != null) {
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        let tmp6 = true === isGuildStageVoiceResult;
        if (tmp6) {
          const obj2 = channelId(first[56]);
          tmp6 = !obj2.isStageUnifiedCall(channel, "VoicePanelController");
        }
        tmp = tmp6;
      }
      if (!tmp) {
        if (first6 === sharedValue10.PANEL) {
          const tmp11 = isConnected;
          if (tmp11) {
            if (null != applicationId) {
              const obj = { applicationId: tmp15, instanceId };
              const obj4 = channelId(first[59]);
              if (stateFromStores1 === obj4.getEmbeddedActivityParticipantId(obj)) {
                guildId(first[60])(activityOrientationLockState);
              }
            }
            const obj6 = channelId(first[58]);
            obj6.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
          }
        }
        const obj3 = channelId(first[58]);
        const result = obj3.restoreDefaultOrientation();
      }
    }, items78);
    const layoutEffect19 = obj2.useLayoutEffect(() => {
      let voiceChannelId;
      return () => {
        channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
        let isGuildStageVoiceResult;
        if (channel != null) {
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        let tmp2 = true === isGuildStageVoiceResult;
        if (tmp2) {
          const obj2 = channelId(streamOutputSinkStack[56]);
          tmp2 = !obj2.isStageUnifiedCall(channel, "VoicePanelController");
        }
        if (!tmp2) {
          const obj3 = channelId(streamOutputSinkStack[58]);
          const result = obj3.restoreDefaultOrientation();
        }
      };
    }, []);
    const items79 = [first6, channelId, isConnected, first2];
    const effect11 = obj2.useEffect(() => {
      let tmp2 = first6 !== sharedValue10.DISMISSED;
      const tmp = first6;
      if (tmp2) {
        tmp2 = isConnected;
      }
      if (tmp2) {
        const obj = { video_layout: derivedValue(tmp, first2) };
        const track = guildId(first[55]).track;
        const VIDEO_LAYOUT_TOGGLED = callback5.VIDEO_LAYOUT_TOGGLED;
        guildId(first[55]);
        const obj2 = channelId(first[65]);
        const merged = Object.assign(obj2.collectVoiceAnalyticsMetadata(channelId));
        track(VIDEO_LAYOUT_TOGGLED, obj);
      }
    }, items79);
    importDefault = obj2.useRef(-1);
    const tmpResult72 = tmp(tmp2[26]);
    sharedValue13 = tmpResult72.useSharedValue(null);
    const items80 = [sharedValue1, sharedValue13];
    callback13 = obj2.useCallback((arg0) => {
      if (sharedValue1.get() === sharedValue10.PANEL) {
        let result = sharedValue13.set(arg0);
        if (null != arg0) {
          const _clearTimeout = clearTimeout;
          clearTimeout(ref.current);
          const _setTimeout = setTimeout;
          ref.current = setTimeout(() => {
            const result = sharedValue13.set(null);
          }, channelId(first[40]).FLOATING_CTA_HIDE_TIMEOUT);
        }
      }
    }, items80);
    const layoutEffect20 = obj2.useLayoutEffect(() => () => clearTimeout(ref.current), []);
    dismissToPIPGestureRef = obj2.useRef(undefined);
    let _HermesInternal = HermesInternal;
    dockPTTPortalHostName = "voice-panel-dock-ptt-" + obj2.useId();
    dockPTTMeasureHostRef = obj2.useRef(null);
    const obj14 = {
      value: tmp5(obj2.useState(() => {
          const obj = { channelId, channelType: type, committedMode: closure_24.committedMode, connected: sharedValue, contentDimensions: sharedValue11, controlsSpecs, dismissPanel, dismissToPIPGestureRef, dockContentSwap: closure_24.dockContentSwap, dockRestLeft: closure_24.dockRestLeft, dockRestWidth: closure_24.dockRestWidth, dockSlotWidth: closure_24.dockSlotWidth, dockSheetWidth: closure_24.dockSheetWidth, dockSheetLeft: closure_24.dockSheetLeft, dockTouched: closure_24.dockTouched, isDockInLayout: closure_24.isDockInLayout, isDockSlotEmpty: closure_24.isDockSlotEmpty, dockEntryProgress: closure_24.dockEntryProgress, dockHeight: closure_24.dockHeight, dockJoinMorphOrigin: closure_24.dockJoinMorphOrigin, dockMinimizeProgress: closure_24.dockMinimizeProgress, dockPressProgress: closure_24.dockPressProgress, dockPressed: closure_24.dockPressed, dockPTTPortalHostName, dockPTTMeasureHostRef, dragScrolling: sharedValue5, focused: sharedValue6, generateStateLocker: callback3, guildId, handleDockSheetLayout: closure_24.handleDockSheetLayout, hideControls: callback4, isCall: flag, isDockConnected: closure_24.isDockConnected, isDockEnabled: first2, isDockExpanding: closure_24.isDockExpanding, isFocusedVideoZoomed: sharedValue8, layoutManager: first5, mode: sharedValue1, morphablePanelMode: derivedValue, mountedCards: first1, pipAvoidanceSpecs, preJoinContentSize: sharedValue7, refreshIdleTimeout: callback6, safeArea: sharedValue21, scrollPosition: sharedValue4, setControlsMode, setFocused: callback8, setIsFocusedVideoZoomed, setMode: callback7, setShowFloatingCTA: callback13, sheetExitProgress: closure_24.sheetExitProgress, showControls: callback5, showFloatingCTA: sharedValue13, streamOutputSinkStack, usePIPState: VoicePanelPIPStateContext.usePIPState, useReducedMotion: sharedValue9, windowDimensions: sharedValue2, wrapperDimensions: sharedValue3, wrapperOffset: sharedValue10, pipHandoff: first4 };
          return obj;
        }), 1)[0],
      children: dismissPanel(Provider2, obj16)
    };
    const Provider = tmp8(tmp2[77]).Provider;
    obj16 = { value: controllerPIPState, children: dismissPanel(Provider3, obj17) };
    Provider2 = tmp(tmp2[76]).VoicePanelPIPStateContext.Provider;
    let tmp246 = guildId;
    Provider3 = tmp8(tmp2[78]).Provider;
    if (guildId == null) {
      tmp246 = null;
    }
    obj17 = { value: tmp246, children };
    return dismissPanel(Provider, obj14);
  }
  tmp52 = first4;
};
