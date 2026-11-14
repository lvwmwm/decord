// Module ID: 20052
// Function ID: 20053
// Name: VoicePanelDockPIP
// Dependencies: [32, 19, 7016, 1388, 11985, 19909, 12009, 5983, 21, 11995, 11984, 19965, 504, 11333, 19908, 20053, 20055, 6862, 6016, 10467, 1113, 3253, 6351, 20056, 20057, 20059, 20060, 20061, 5377, 1655, 5548, 1708, 2]

// Module 20052 (VoicePanelDockPIP)
import _mod1655 from "module_1655" /* 1655 */;
import _mod1708 from "module_1708" /* 1708 */;
import timing_timing from "timing/timing" /* 5548 */;
import CallConstants from "CallConstants" /* 5983 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11985 */;
import VoicePanelDockConstants from "VoicePanelDockConstants" /* 12009 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 7016 */;
import UserStore from "UserStore" /* 1388 */;
import VoicePanelPIPConstants from "VoicePanelPIPConstants" /* 19909 */;
import Fragment from "Fragment" /* 21 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let constants, dependencyMap, flag, importDefault, set, set2;

let c9;
let closure_12;
let closure_14;
let map1;
let metroImportAll;
function useVoicePanelDockPIPState(streamKey, arg1, tmp4Result, isWatching, stateFromStores) {
  let _undefined;
  let c3;
  let closure_1;
  let closure_4;
  let tmp3;
  streamKey = streamKey.streamKey;
  importDefault = tmp4Result;
  let layoutManager;
  _slicedToArray = undefined;
  react = undefined;
  let closure_5;
  let IN_APP;
  let width;
  let height;
  let containerHeight;
  let obj = react;
  let tmp = layoutManager;
  layoutManager = react.useContext(require("VoicePanelStateContext")).layoutManager;
  let tmp2 = _slicedToArray(react.useState(() => {
    let targetDimensions = layoutManager.getTargetDimensions(streamKey);
    if (targetDimensions === layoutManager.getDefaultTargetDimensions()) {
      targetDimensions = closure_15;
    }
    return targetDimensions;
  }), 2);
  [tmp3, c3] = tmp2;
  const items = [layoutManager, streamKey];
  const effect = react.useEffect(() => {
    const f144348 = (safeAreaState) => {
      let targetDimensions = closure_1_2.getTargetDimensions(closure_1_0);
      if (targetDimensions === closure_1_2.getDefaultTargetDimensions()) {
        targetDimensions = closure_2_15;
      }
      const obj = streamKey(layoutManager[13]);
      if (obj.cheapWorkletShallowEqual(safeAreaState, targetDimensions)) {
        targetDimensions = safeAreaState;
      }
      return targetDimensions;
    };
    _undefined(f144348);
    return layoutManager.subscribeFromItem(function updateTargetDimensions() {
      _undefined(f144348);
    });
  }, items);
  let tmp6 = tmp4Result.mode !== containerHeight.IN_PANEL;
  if (tmp6) {
    tmp6 = !stateFromStores;
  }
  react = tmp6;
  closure_5 = tmp8;
  IN_APP = undefined;
  if (tmp4Result.mode === containerHeight.IN_APP) {
    if (null != streamKey) {
      IN_APP = tmp5.IN_APP;
    }
  }
  const computePIPSize = streamKey(tmp[14]).computePIPSize;
  const tmp10 = streamKey(tmp[14]);
  if (!isWatching) {
    tmp3 = closure_15;
  }
  size = computePIPSize(tmp3, false, false, tmp4Result.showSecondaryPIP);
  width = size.width;
  height = size.height;
  containerHeight = size.containerHeight;
  const items1 = [tmp6, tmp8, tmp4Result, streamKey, IN_APP, width, height, containerHeight];
  return obj.useMemo(() => {
    let tmp2;
    const tmp = closure_4;
    if (tmp) {
      let tmp12;
      const obj = {};
      const merged = Object.assign(importDefault);
      if (closure_5) {
        obj.mode = IN_APP;
        tmp12 = obj;
      } else {
        obj.id = streamKey;
        obj.mode = IN_APP;
        obj.width = width;
        obj.height = height;
        obj.containerHeight = containerHeight;
        tmp12 = obj;
      }
      tmp2 = tmp12;
    } else {
      tmp2 = importDefault;
    }
    return tmp2;
  }, items1);
}
function renderVoicePanelDockPIP(arg0, arg1, transitionState, transitionCleanUp) {
  const obj = { transitionState, transitionCleanUp };
  return authStore2(closure_23, obj, arg0);
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
({ PIP_FIRST_FRAME_DELAY_MS: metroImportAll, VoicePanelPIPModes: c9 } = VoicePanelPIPConstants);
const DOCK_FADE_TIMING = VoicePanelDockConstants.DOCK_FADE_TIMING;
const ParticipantTypes = CallConstants.ParticipantTypes;
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = Fragment);
let closure_15 = { width: 16, height: 9 };
const openCall = "openCall";
const stopWatching = "stopWatching";
let closure_19 = { code: "(function VoicePanelDockPIPTsx1(finished){let[scheduleOnRN,setHasFadedOut]=this.__closure;if(finished){scheduleOnRN(setHasFadedOut,true);}})" };
let closure_20 = { code: "(function VoicePanelDockPIPTsx2(){let[dockContentSwap]=this.__closure;return dockContentSwap.get()>0;})" };
let closure_21 = { code: "(function VoicePanelDockPIPTsx3(isSwapped,wasSwapped){let[pullOpacity,withTiming,DOCK_FADE_TIMING]=this.__closure;if(wasSwapped==null||isSwapped===wasSwapped)return;pullOpacity.set(withTiming(isSwapped?0:1,DOCK_FADE_TIMING));})" };
let closure_22 = { code: "(function VoicePanelDockPIPTsx4(){let[fadeOpacity,pullOpacity]=this.__closure;return fadeOpacity.get()*pullOpacity.get();})" };
let closure_23 = react.memo(function VoicePanelDockPIP(transitionCleanUp) {
  let HIDDEN;
  let VoicePanelPIPTiles;
  let c9;
  let closure_2;
  let constants2;
  let isConnecting;
  let isWatching;
  let name2;
  let obj6;
  let obj8;
  let ownerId;
  let ref;
  let tmp25;
  let tmp26;
  let tmp39;
  let tmp40;
  let tmp62;
  let tmp63;
  let tmp64;
  let tmp65;
  let tmp66;
  let tmp67;
  let tmp69;
  let tmp70;
  let tmp71;
  transitionCleanUp = transitionCleanUp.transitionCleanUp;
  let panelLayoutCommitted;
  dependencyMap = undefined;
  let sharedValue;
  react = undefined;
  let first1;
  let obj = react;
  let tmp = panelLayoutCommitted;
  let tmp2 = dependencyMap;
  const transitionState = transitionCleanUp.transitionState;
  const context = react.useContext(panelLayoutCommitted(11984));
  const channelId = context.channelId;
  const tmp4 = transitionCleanUp;
  const dockContentSwap = context.dockContentSwap;
  let obj2 = transitionCleanUp(11995);
  const pIPState = obj2.usePIPState();
  const tmp6 = panelLayoutCommitted(20057)(channelId);
  let tmp7 = panelLayoutCommitted(20059)(channelId);
  const tmp8 = panelLayoutCommitted(20060)(tmp6);
  const showStream = tmp8.showStream;
  c9 = undefined;
  let callback;
  let callback2;
  let callback3;
  let name;
  const onStreamReady = tmp8.onStreamReady;
  const context1 = react.useContext(panelLayoutCommitted(11984));
  const channelId2 = context1.channelId;
  const setMode = context1.setMode;
  const setFocused = context1.setFocused;
  const showControls = context1.showControls;
  const guildId = context1.guildId;
  let obj3 = transitionCleanUp(11995);
  const pIPState1 = obj3.usePIPState();
  const streamKey = tmp6.streamKey;
  ({ ownerId, isWatching, isConnecting } = tmp6);
  let closure_6 = tmp11;
  constants = tmp12;
  let items = [first1];
  let items1 = [tmp11, channelId2, pIPState1.id];
  let stateFromStores = ownerId;
  const tmp13 = first1;
  const tmp4Result = tmp4(504);
  if (null == streamKey && tmp7) {
    stateFromStores = tmp4Result.useStateFromStores(items, () => {
      const tmp = user;
      if (tmp) {
        if (null != pIPState1.id) {
          const participant = first1.getParticipant(channelId2, tmp2.id);
          let type;
          if (participant != null) {
            type = participant.type;
          }
          let id;
          if (type === constants2.USER) {
            id = participant.user.id;
          }
          return id;
        }
      }
    }, items1);
  }
  let tmp16 = sharedValue(obj.useState(tmp4(20053).VoicePanelDockPIPOverlayModes.HIDDEN), 2);
  [HIDDEN, c9] = tmp16;
  if (!(null == streamKey && tmp7 || showStream)) {
    HIDDEN = tmp4(20053).VoicePanelDockPIPOverlayModes.HIDDEN;
  }
  const items2 = [tmp12];
  callback = obj.useCallback(() => {
    const tmp = closure_7;
    if (tmp) {
      const tmp2 = _undefined;
      _undefined((arg0) => {
        let HIDDEN;
        if (arg0 === channelId2(setFocused[15]).VoicePanelDockPIPOverlayModes.HIDDEN) {
          HIDDEN = tmp(tmp2[15]).VoicePanelDockPIPOverlayModes.CONTROLS;
        } else {
          HIDDEN = tmp(tmp2[15]).VoicePanelDockPIPOverlayModes.HIDDEN;
        }
        return HIDDEN;
      });
    }
  }, items2);
  const items3 = [tmp11, streamKey];
  const callback1 = obj.useCallback(() => {
    const tmp = _undefined((arg0) => {
      let VOLUME;
      if (arg0 === channelId2(setFocused[15]).VoicePanelDockPIPOverlayModes.VOLUME) {
        VOLUME = tmp(tmp2[15]).VoicePanelDockPIPOverlayModes.CONTROLS;
      } else {
        VOLUME = tmp(tmp2[15]).VoicePanelDockPIPOverlayModes.VOLUME;
      }
      return VOLUME;
    });
  }, []);
  callback2 = obj.useCallback(() => {
    let intl;
    const tmp = user;
    if (tmp) {
      _undefined(transitionCleanUp(setFocused[15]).VoicePanelDockPIPOverlayModes.HIDDEN);
      const obj = transitionCleanUp(setFocused[16]);
      const result = obj.dismissVoicePanelDockVideoPIP();
    } else if (null != streamKey) {
      _undefined(transitionCleanUp(setFocused[15]).VoicePanelDockPIPOverlayModes.HIDDEN);
      const obj2 = transitionCleanUp(setFocused[17]);
      obj2.stopStream(tmp2);
      const obj3 = { icon: transitionCleanUp(setFocused[19]).ScreenIcon, text: intl.string(panelLayoutCommitted(setFocused[21]).gLoosj) };
      const showToast = transitionCleanUp(setFocused[18]).showToast;
      transitionCleanUp(setFocused[18]);
      intl = transitionCleanUp(setFocused[20]).intl;
      showToast(obj3);
    }
  }, items3);
  const items4 = [streamKey, setFocused, setMode, showControls];
  callback3 = obj.useCallback(() => {
    _undefined(transitionCleanUp(setFocused[15]).VoicePanelDockPIPOverlayModes.HIDDEN);
    if (null != streamKey) {
      setFocused(tmp2);
    }
    showControls();
    setMode(constants.PANEL);
  }, items4);
  const items5 = [closure_6];
  const items6 = [stateFromStores];
  const tmp4Result9 = tmp4(504);
  const stateFromStores1 = tmp4Result9.useStateFromStores(items5, () => user.getUser(stateFromStores), items6);
  const tmpResult = tmp(6351);
  name = tmpResult.useName(guildId, channelId2, stateFromStores1);
  const items7 = [tmp12, tmp11, stateFromStores, name, callback3, callback2, callback];
  let tmp24 = tmp11;
  const memo = obj.useMemo(() => {
    let intl3;
    let items;
    let obj;
    let string;
    let string2Result;
    let tmp17;
    const tmp = closure_7;
    if (tmp) {
      let formatToPlainStringResult;
      if (null != stateFromStores) {
        const intl = transitionCleanUp(setFocused[20]).intl;
        const formatToPlainString = intl.formatToPlainString;
        const tmp10 = panelLayoutCommitted(setFocused[21]);
        const obj2 = { username: name };
        formatToPlainStringResult = formatToPlainString(user ? tmp10.w1cTI7 : tmp10["g9x8/M"], obj2);
      }
      const obj3 = {
        accessible: true,
        accessibilityRole: "button",
        accessibilityLabel: formatToPlainStringResult,
        accessibilityHint: string(user ? tmp17.qlWFBD : tmp17.IJMHj5),
        accessibilityActions: items,
        onAccessibilityAction(nativeEvent) {
            const actionName = nativeEvent.nativeEvent.actionName;
            if (name === actionName) {
              callback3();
            } else if (name2 === actionName) {
              callback2();
            } else {
              callback();
            }
          }
      };
      const intl2 = transitionCleanUp(setFocused[20]).intl;
      string = intl2.string;
      tmp17 = panelLayoutCommitted(setFocused[21]);
      items = [{ name: "activate" }, , ];
      const obj4 = { name, label: intl3.string(panelLayoutCommitted(setFocused[21]).MPtef8) };
      intl3 = transitionCleanUp(setFocused[20]).intl;
      items[1] = obj4;
      const obj5 = { name: name2, label: string2Result };
      const intl4 = transitionCleanUp(setFocused[20]).intl;
      const string2 = intl4.string;
      const t = transitionCleanUp(setFocused[20]).t;
      const tmp14 = user;
      if (tmp14) {
        string2Result = string2(t.cpT0Cq);
      } else {
        string2Result = string2(t.q3O3J8);
      }
      items[2] = obj5;
      obj = obj3;
    } else {
      obj = {};
    }
    return obj;
  }, items7);
  if (!(null == streamKey && tmp7)) {
    tmp24 = null != ownerId;
  }
  let obj4 = { hasTile: tmp24, showContent: tmp11 || isWatching, mainTileAccessibilityProps: memo, dragEnabled: HIDDEN !== tmp4(20053).VoicePanelDockPIPOverlayModes.VOLUME, resizeEnabled: tmp12, onMainTileTap: callback, onStreamReady, showPushToTalk: false, controlsOverlay: tmp25(tmp26, obj6) };
  let tmp28Result = null;
  tmp25 = closure_14;
  tmp26 = closure_13;
  if (!(null == streamKey && tmp7)) {
    tmp28Result = null;
    if (null != ownerId) {
      let obj5 = { ownerId, streamKey, isConnecting, visible: !showStream };
      const tmp28 = closure_12;
      const tmpResult3 = tmp(20056);
      if (!isConnecting) {
        isConnecting = isWatching;
      }
      tmp28Result = tmp28(tmpResult3, obj5);
    }
  }
  const items8 = [tmp28Result, ];
  let str = "stream";
  const tmpResult4 = tmp(20053);
  if (null == streamKey && tmp7) {
    str = "video";
  }
  obj6 = { children: items8 };
  items8[1] = closure_12(tmpResult4, { kind: str, ownerId: stateFromStores, mode: HIDDEN, onToggleVolume: callback1, onStopWatching: callback2, onOpenCall: callback3 });
  const tmp4Result10 = tmp4(11995);
  const pIPState2 = tmp4Result10.usePIPState();
  let id = pIPState2.id;
  const mode = pIPState2.mode;
  const channelId3 = obj.useContext(tmp(11984)).channelId;
  let tmp33 = tmp(19965)();
  const items9 = [tmp13];
  const items10 = [channelId3, id];
  const tmp4Result11 = tmp4(504);
  let stateFromStores2 = tmp4Result11.useStateFromStores(items9, () => {
    let tmp2 = null != id;
    if (tmp2) {
      const participant = ChannelRTCStore.getParticipant(channelId2, tmp);
      let type;
      if (participant != null) {
        type = participant.type;
      }
      tmp2 = type === ParticipantTypes.ACTIVITY;
    }
    return tmp2;
  }, items10);
  let tmp36 = mode === constants.IN_APP;
  if (tmp36) {
    if (!stateFromStores2) {
      if (tmp33) {
        tmp33 = null == tmp6.streamKey;
      }
      if (tmp33) {
        tmp33 = !tmp7;
      }
      stateFromStores2 = tmp33;
    }
    tmp36 = stateFromStores2;
  }
  const tmp4Result12 = tmp4(20061);
  panelLayoutCommitted = tmp4Result12.usePIPTileHandoff().panelLayoutCommitted;
  const tmp37 = transitionState === tmp4(5377).TransitionStates.YEETED;
  dependencyMap = tmp37;
  [tmp39, tmp40] = sharedValue(obj.useState(pIPState), 2);
  sharedValue(obj.useState(pIPState), 2);
  const tmp15Result3 = sharedValue(obj.useState(tmp36), 2);
  const first = tmp15Result3[0];
  let tmp44 = tmp37;
  const tmp43 = tmp15Result3[1];
  if (!tmp37) {
    tmp44 = tmp39 === pIPState;
  }
  if (!tmp44) {
    tmp40(pIPState);
  }
  const tmp46 = tmp37 || first === tmp36;
  if (!tmp46) {
    tmp43(tmp36);
  }
  let tmp50 = pIPState;
  const tmp48 = first || tmp39.mode === constants.IN_PANEL;
  const tmp49 = useVoicePanelDockPIPState;
  if (tmp37) {
    tmp50 = pIPState;
    if (tmp48) {
      tmp50 = tmp39;
    }
  }
  const tmp49Result = tmp49(tmp6, tmp7, tmp50, tmp8.showStream, first);
  const tmp4Result13 = tmp4(1655);
  sharedValue = tmp4Result13.useSharedValue(0);
  react = obj.useRef(false);
  const tmp15Result4 = sharedValue(obj.useState(false), 2);
  first1 = tmp15Result4[0];
  closure_6 = tmp55;
  const tmp56 = !tmp37 && first1;
  if (tmp56) {
    tmp15Result4[1](false);
  }
  const items11 = [tmp37, sharedValue];
  const effect = obj.useEffect(() => {
    let tmp23;
    let tmp24;
    let tmp25;
    let tmp = closure_2;
    if (tmp) {
      set2 = sharedValue.set;
      const items = [closure_19, , ];
      const withTiming = timing_timing.withTiming;
      items[1] = _mod1708.scheduleOnRN;
      items[2] = closure_6;
      let c0;
      let c1;
      [tmp23, tmp24, tmp25] = items;
      class VoicePanelDockPIPTsx1 {
        constructor(arg0) {
          tmp = arg0;
          if (tmp) {
            tmp2 = closure_0;
            tmp3 = closure_1;
            flag = true;
            tmp4 = closure_0(closure_1, true);
          }
          return;
        }
      }
      const items1 = [tmp24, tmp25];
      VoicePanelDockPIPTsx1.__closure = items1;
      VoicePanelDockPIPTsx1.__workletHash = 16103844528487;
      VoicePanelDockPIPTsx1.__initData = tmp23;
      set2(withTiming(0, DOCK_FADE_TIMING, "respect-motion-settings", VoicePanelDockPIPTsx1));
    } else {
      const obj = timing_timing;
      const withTimingResult = obj.withTiming(1, DOCK_FADE_TIMING);
      let withDelayResult = withTimingResult;
      set = sharedValue.set;
      const tmp7 = ref;
      if (!ref.current) {
        const obj2 = _mod1655;
        withDelayResult = obj2.withDelay(metroImportAll, withTimingResult);
      }
      const result = set(withDelayResult);
      tmp7.current = true;
    }
  }, items11);
  const items12 = [tmp37, first1, panelLayoutCommitted, transitionCleanUp];
  const effect1 = obj.useEffect(() => {
    const tmp = closure_2 && first1 && panelLayoutCommitted;
    if (tmp) {
      transitionCleanUp();
    }
  }, items12);
  const tmp4Result14 = tmp4(1655);
  const sharedValue1 = tmp4Result14.useSharedValue(1);
  const items13 = [closure_20, dockContentSwap];
  let c0;
  [tmp62, tmp63] = items13;
  const tmp4Result15 = tmp4(1655);
  class VoicePanelDockPIPTsx2 {
    constructor() {
      return _undefined.get() > 0;
    }
  }
  const items14 = [tmp63];
  VoicePanelDockPIPTsx2.__closure = items14;
  VoicePanelDockPIPTsx2.__workletHash = 14999017166726;
  VoicePanelDockPIPTsx2.__initData = tmp62;
  const items15 = [closure_21, sharedValue1, , ];
  const useAnimatedReaction = tmp4Result15.useAnimatedReaction;
  items15[2] = tmp4(5548).withTiming;
  items15[3] = DOCK_FADE_TIMING;
  c0 = undefined;
  let c1;
  let c2;
  [tmp64, tmp65, tmp66, tmp67] = items15;
  class VoicePanelDockPIPTsx3 {
    constructor(arg0, arg1) {
      const tmp = null != arg1 && arg0 !== arg1;
      if (tmp) {
        let num = 1;
        set = _undefined.set;
        const tmp3 = c1;
        if (arg0) {
          num = 0;
        }
        const result = set(tmp3(num, c2));
      }
    }
  }
  const items16 = [tmp65, tmp66, tmp67];
  VoicePanelDockPIPTsx3.__closure = items16;
  VoicePanelDockPIPTsx3.__workletHash = 320681970324;
  VoicePanelDockPIPTsx3.__initData = tmp64;
  const animatedReaction = useAnimatedReaction(VoicePanelDockPIPTsx2, VoicePanelDockPIPTsx3);
  const items17 = [closure_22, sharedValue, sharedValue1];
  c0 = undefined;
  c1 = undefined;
  [tmp69, tmp70, tmp71] = items17;
  const tmp4Result16 = tmp4(1655);
  class VoicePanelDockPIPTsx4 {
    constructor() {
      const value = _undefined.get();
      return value * _undefined2.get();
    }
  }
  const items18 = [tmp70, tmp71];
  VoicePanelDockPIPTsx4.__closure = items18;
  VoicePanelDockPIPTsx4.__workletHash = 5225188298385;
  VoicePanelDockPIPTsx4.__initData = tmp69;
  const derivedValue = tmp4Result16.useDerivedValue(VoicePanelDockPIPTsx4);
  const obj7 = { value: tmp49Result, children: closure_12(VoicePanelPIPTiles, obj8) };
  const Provider = tmp4(11995).VoicePanelPIPStateContext.Provider;
  let tmp73;
  VoicePanelPIPTiles = tmp4(20061).VoicePanelPIPTiles;
  if (tmp49Result.mode !== constants.IN_PANEL) {
    if (!first) {
      tmp73 = obj4;
    }
  }
  obj8 = { opacity: derivedValue };
  const merged = Object.assign(tmp73);
  return closure_12(Provider, obj7);
});
const memoResult = react.memo(function VoicePanelDockPIPProvider() {
  let TransitionItem;
  let channelId2;
  let obj5;
  let tmp12;
  const tmp = dependencyMap;
  const channelId = react.useContext(channelId2(11984)).channelId;
  let tmp2 = channelId2(20057)(channelId);
  const tmp3 = channelId2(20059)(channelId);
  let id;
  channelId2 = undefined;
  const obj = id(11995);
  const pIPState = obj.usePIPState();
  id = pIPState.id;
  const mode = pIPState.mode;
  channelId2 = react.useContext(channelId2(11984)).channelId;
  let tmp6 = channelId2(19965)();
  const items = [ChannelRTCStore];
  const items1 = [channelId2, id];
  const obj2 = id(504);
  let stateFromStores = obj2.useStateFromStores(items, () => {
    let tmp2 = null != id;
    if (tmp2) {
      const participant = ChannelRTCStore.getParticipant(channelId2, tmp);
      let type;
      if (participant != null) {
        type = participant.type;
      }
      tmp2 = type === ParticipantTypes.ACTIVITY;
    }
    return tmp2;
  }, items1);
  let tmp8 = mode === constants.IN_APP;
  if (tmp8) {
    if (!stateFromStores) {
      if (tmp6) {
        tmp6 = null == tmp2.streamKey;
      }
      if (tmp6) {
        tmp6 = !tmp3;
      }
      stateFromStores = tmp6;
    }
    tmp8 = stateFromStores;
  }
  const tmp4Result = id(11995);
  const tmp10 = useVoicePanelDockPIPState(tmp2, tmp3, tmp4Result.usePIPState(), tmp2.isWatching, tmp8);
  const obj3 = { value: tmp10, children: closure_12(TransitionItem, obj5) };
  const Provider = tmp4(11995).VoicePanelPIPStateContext.Provider;
  TransitionItem = tmp4(5377).TransitionItem;
  if (null != tmp10.mode) {
    tmp12 = { pipMode: tmp10.mode };
  }
  obj5 = { item: tmp12, renderItem: renderVoicePanelDockPIP };
  return closure_12(Provider, obj3);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockPIP.tsx");

export default memoResult;
