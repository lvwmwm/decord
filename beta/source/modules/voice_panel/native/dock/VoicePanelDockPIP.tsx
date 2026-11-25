// Module ID: 19325
// Function ID: 19326
// Name: VoicePanelDockPIP
// Dependencies: [32, 19, 6620, 1386, 11755, 19176, 11773, 5563, 5658, 21, 11764, 11754, 19238, 504, 10661, 19175, 1378, 11045, 5679, 19326, 5923, 1112, 3376, 5817, 19328, 5143, 19327, 6456, 5596, 9904, 5943, 19331, 19333, 19334, 19335, 4974, 1653, 5123, 1706, 2]

// Module 19325 (VoicePanelDockPIP)
import PlatformUtils from "PlatformUtils" /* 1378 */;
import _mod1653 from "module_1653" /* 1653 */;
import _mod1706 from "module_1706" /* 1706 */;
import timing_timing from "timing/timing" /* 5123 */;
import CallConstants from "CallConstants" /* 5563 */;
import Constants from "Constants" /* 5658 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11755 */;
import VoicePanelDockConstants from "VoicePanelDockConstants" /* 11773 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6620 */;
import UserStore from "UserStore" /* 1386 */;
import VoicePanelPIPConstants from "VoicePanelPIPConstants" /* 19176 */;
import Fragment from "Fragment" /* 21 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, constants, current, dependencyMap, flag, importDefault, set, set2;

let c9;
let closure_14;
let closure_15;
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
      targetDimensions = closure_16;
    }
    return targetDimensions;
  }), 2);
  [tmp3, c3] = tmp2;
  const items = [layoutManager, streamKey];
  const effect = react.useEffect(() => {
    const f139394 = (safeAreaState) => {
      let targetDimensions = closure_1_2.getTargetDimensions(closure_1_0);
      if (targetDimensions === closure_1_2.getDefaultTargetDimensions()) {
        targetDimensions = closure_2_16;
      }
      const obj = streamKey(layoutManager[14]);
      if (obj.cheapWorkletShallowEqual(safeAreaState, targetDimensions)) {
        targetDimensions = safeAreaState;
      }
      return targetDimensions;
    };
    _undefined(f139394);
    return layoutManager.subscribeFromItem(function updateTargetDimensions() {
      _undefined(f139394);
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
  const computePIPSize = streamKey(tmp[15]).computePIPSize;
  const tmp10 = streamKey(tmp[15]);
  if (!isWatching) {
    tmp3 = closure_16;
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
function getTileAccessibilityProps(onActivate) {
  let activateLabel;
  let hint;
  let label;
  let str;
  let tmp5;
  onActivate = onActivate.onActivate;
  const actions = onActivate.actions;
  const iter = onActivate.adjustable;
  const items = [];
  ({ label, hint, activateLabel } = onActivate);
  const obj = PlatformUtils;
  if (!obj.isIOS()) {
    let obj2 = { name: "activate", label: activateLabel };
    items.push(obj2);
    if (null != iter) {
      items.push({ name: "increment" }, { name: "decrement" });
    }
  }
  for (const item10026 of actions) {
    let obj4 = { name: null, label: null };
    ({ name: obj3.name, label: obj3.label } = item10026);
    let arr5 = items.push(obj4);
    continue;
  }
  const obj5 = {
    accessible: true,
    accessibilityLabel: label,
    accessibilityHint: hint,
    accessibilityRole: str,
    accessibilityValue: tmp5,
    accessibilityActions: items,
    onAccessibilityTap: onActivate,
    onAccessibilityAction(nativeEvent) {
      const actionName = nativeEvent.nativeEvent.actionName;
      if ("activate" === actionName) {
        onActivate();
      } else if ("increment" === actionName) {
        const obj3 = iter;
        if (iter != null) {
          obj3.onIncrement();
        }
      } else if ("decrement" === actionName) {
        const obj2 = iter;
        if (iter != null) {
          obj2.onDecrement();
        }
      } else {
        const found = actions.find((name) => name.name === actionName);
        if (found != null) {
          found.onAction();
        }
      }
    }
  };
  str = "button";
  if (null != iter) {
    str = "adjustable";
  }
  tmp5 = undefined;
  if (null != iter) {
    tmp5 = { text: iter.value };
    const obj9 = { text: iter.value };
  }
  return obj5;
}
function renderVoicePanelDockPIP(arg0, arg1, transitionState, transitionCleanUp) {
  const obj = { transitionState, transitionCleanUp };
  return map1(closure_23, obj, arg0);
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
({ PIP_FIRST_FRAME_DELAY_MS: metroImportAll, VoicePanelPIPModes: c9 } = VoicePanelPIPConstants);
const DOCK_FADE_TIMING = VoicePanelDockConstants.DOCK_FADE_TIMING;
const ParticipantTypes = CallConstants.ParticipantTypes;
let closure_12 = Constants.MAX_EMBEDDED_VOLUME_PERCEPTUAL;
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = Fragment);
let closure_16 = { width: 16, height: 9 };
let closure_19 = { code: "(function VoicePanelDockPIPTsx1(finished){let[scheduleOnRN,setHasFadedOut]=this.__closure;if(finished){scheduleOnRN(setHasFadedOut,true);}})" };
let closure_20 = { code: "(function VoicePanelDockPIPTsx2(){let[dockContentSwap]=this.__closure;return dockContentSwap.get()>0;})" };
let closure_21 = { code: "(function VoicePanelDockPIPTsx3(isSwapped,wasSwapped){let[pullOpacity,withTiming,DOCK_FADE_TIMING]=this.__closure;if(wasSwapped==null||isSwapped===wasSwapped)return;pullOpacity.set(withTiming(isSwapped?0:1,DOCK_FADE_TIMING));})" };
let closure_22 = { code: "(function VoicePanelDockPIPTsx4(){let[fadeOpacity,pullOpacity]=this.__closure;return fadeOpacity.get()*pullOpacity.get();})" };
let closure_23 = react.memo(function VoicePanelDockPIP(transitionCleanUp) {
  let HIDDEN;
  let VoicePanelPIPTiles;
  let closure_2;
  let isAutoWatchChannel;
  let isConnecting;
  let isWatching;
  let obj7;
  let obj9;
  let ownerId;
  let tmp100;
  let tmp101;
  let tmp103;
  let tmp104;
  let tmp105;
  let tmp17;
  let tmp59;
  let tmp60;
  let tmp73;
  let tmp74;
  let tmp96;
  let tmp97;
  let tmp98;
  let tmp99;
  transitionCleanUp = transitionCleanUp.transitionCleanUp;
  let panelLayoutCommitted;
  dependencyMap = undefined;
  let sharedValue;
  react = undefined;
  let first3;
  let obj = react;
  let tmp = panelLayoutCommitted;
  let tmp2 = dependencyMap;
  const transitionState = transitionCleanUp.transitionState;
  const context = react.useContext(panelLayoutCommitted(11754));
  const channelId = context.channelId;
  const tmp4 = transitionCleanUp;
  const dockContentSwap = context.dockContentSwap;
  let obj2 = transitionCleanUp(11764);
  const pIPState = obj2.usePIPState();
  const tmp6 = panelLayoutCommitted(19331)(channelId);
  let tmp7 = panelLayoutCommitted(19333)(channelId);
  const tmp8 = panelLayoutCommitted(19334)(tmp6);
  const showStream = tmp8.showStream;
  let c9;
  let CONTROLS;
  let isScreenReaderEnabled;
  let first;
  let closure_13;
  let first1;
  const onStreamReady = tmp8.onStreamReady;
  const context1 = react.useContext(panelLayoutCommitted(11754));
  const channelId2 = context1.channelId;
  const setMode = context1.setMode;
  const setFocused = context1.setFocused;
  const showControls = context1.showControls;
  let obj3 = transitionCleanUp(11764);
  const pIPState1 = obj3.usePIPState();
  const streamKey = tmp6.streamKey;
  ({ ownerId, isWatching, isConnecting, isAutoWatchChannel } = tmp6);
  let closure_6 = tmp11;
  constants = tmp12;
  let items = [first3];
  let items1 = [tmp11, channelId2, pIPState1.id];
  let stateFromStores = ownerId;
  const tmp13 = first3;
  const tmp4Result = tmp4(504);
  if (null == streamKey && tmp7) {
    stateFromStores = tmp4Result.useStateFromStores(items, () => {
      const tmp = user;
      if (tmp) {
        if (null != pIPState1.id) {
          const participant = first3.getParticipant(channelId2, tmp2.id);
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
  let tmp16 = sharedValue(obj.useState(tmp4(19328).VoicePanelDockPIPOverlayModes.HIDDEN), 2);
  [HIDDEN, tmp17] = tmp16;
  c9 = tmp17;
  let tmp18 = null;
  if (!(null == streamKey && tmp7)) {
    tmp18 = streamKey;
  }
  const tmp15Result = sharedValue(obj.useState(tmp18), 2);
  if (tmp15Result[0] !== tmp18) {
    const tmp20 = tmp15Result[1](tmp18);
    tmp17(tmp4(19328).VoicePanelDockPIPOverlayModes.HIDDEN);
  }
  if (!(null == streamKey && tmp7 || showStream)) {
    HIDDEN = tmp4(19328).VoicePanelDockPIPOverlayModes.HIDDEN;
  }
  CONTROLS = HIDDEN;
  const tmp22 = null == streamKey && tmp7 && HIDDEN === tmp4(19328).VoicePanelDockPIPOverlayModes.VOLUME;
  if (tmp22) {
    CONTROLS = tmp4(19328).VoicePanelDockPIPOverlayModes.CONTROLS;
    HIDDEN = CONTROLS;
  }
  const tmp4Result11 = tmp4(5143);
  isScreenReaderEnabled = tmp4Result11.useIsScreenReaderEnabled();
  const tmp15Result7 = sharedValue(obj.useState(false), 2);
  first = tmp15Result7[0];
  closure_13 = tmp26;
  const tmp15Result8 = sharedValue(obj.useState(false), 2);
  first1 = tmp15Result8[0];
  const tmp15Result9 = sharedValue(obj.useState(HIDDEN), 2);
  if (tmp15Result9[0] !== HIDDEN) {
    tmp15Result9[1](HIDDEN);
    tmp15Result7[1](false);
    tmp15Result8[1](false);
  }
  let items2 = [HIDDEN, first, first1, isScreenReaderEnabled];
  const effect = obj.useEffect(() => {
    let closure_0;
    if (CONTROLS !== channelId2(setFocused[24]).VoicePanelDockPIPOverlayModes.HIDDEN) {
      const tmp = first;
      if (!tmp) {
        const tmp2 = first1;
        if (!tmp2) {
          const tmp3 = isScreenReaderEnabled;
          if (!tmp3) {
            const _setTimeout = setTimeout;
            const timeout = setTimeout(() => _undefined(channelId2(setFocused[24]).VoicePanelDockPIPOverlayModes.HIDDEN), 3000);
            return () => clearTimeout(closure_0);
          }
        }
      }
    }
  }, items2);
  const callback = obj.useCallback(() => closure_13(true), []);
  const items3 = [tmp12];
  const callback1 = obj.useCallback(() => closure_13(false), []);
  const callback2 = obj.useCallback(() => {
    const tmp = closure_7;
    if (tmp) {
      const tmp2 = _undefined;
      _undefined((arg0) => {
        let HIDDEN;
        if (arg0 === channelId2(setFocused[24]).VoicePanelDockPIPOverlayModes.HIDDEN) {
          HIDDEN = tmp(tmp2[24]).VoicePanelDockPIPOverlayModes.CONTROLS;
        } else {
          HIDDEN = tmp(tmp2[24]).VoicePanelDockPIPOverlayModes.HIDDEN;
        }
        return HIDDEN;
      });
    }
  }, items3);
  const items4 = [tmp11, streamKey];
  const callback3 = obj.useCallback(() => {
    const tmp = _undefined((arg0) => {
      let VOLUME;
      if (arg0 === channelId2(setFocused[24]).VoicePanelDockPIPOverlayModes.VOLUME) {
        VOLUME = tmp(tmp2[24]).VoicePanelDockPIPOverlayModes.CONTROLS;
      } else {
        VOLUME = tmp(tmp2[24]).VoicePanelDockPIPOverlayModes.VOLUME;
      }
      return VOLUME;
    });
  }, []);
  const callback4 = obj.useCallback(() => {
    let intl;
    const tmp = user;
    if (tmp) {
      _undefined(transitionCleanUp(setFocused[24]).VoicePanelDockPIPOverlayModes.HIDDEN);
      const obj = transitionCleanUp(setFocused[26]);
      const result = obj.dismissVoicePanelDockVideoPIP();
    } else if (null != streamKey) {
      _undefined(transitionCleanUp(setFocused[24]).VoicePanelDockPIPOverlayModes.HIDDEN);
      const obj2 = transitionCleanUp(setFocused[27]);
      obj2.stopStream(tmp2);
      const obj3 = { icon: transitionCleanUp(setFocused[29]).ScreenIcon, text: intl.string(panelLayoutCommitted(setFocused[22]).gLoosj) };
      const showToast = transitionCleanUp(setFocused[28]).showToast;
      transitionCleanUp(setFocused[28]);
      intl = transitionCleanUp(setFocused[21]).intl;
      showToast(obj3);
    }
  }, items4);
  const items5 = [streamKey, setFocused, setMode, showControls];
  const callback5 = obj.useCallback(() => {
    _undefined(transitionCleanUp(setFocused[24]).VoicePanelDockPIPOverlayModes.HIDDEN);
    if (null != streamKey) {
      setFocused(tmp2);
    }
    showControls();
    setMode(constants.PANEL);
  }, items5);
  const items6 = [tmp11, pIPState1.id, streamKey, setFocused, setMode, showControls];
  const callback6 = obj.useCallback(() => {
    let id;
    _undefined(transitionCleanUp(setFocused[24]).VoicePanelDockPIPOverlayModes.HIDDEN);
    const tmp2 = user;
    if (tmp2) {
      id = pIPState1.id;
    } else {
      id = streamKey;
    }
    if (null != id) {
      setFocused(id);
    }
    showControls();
    setMode(constants.PANEL);
  }, items6);
  const items7 = [closure_6];
  const items8 = [stateFromStores];
  const tmp4Result12 = tmp4(504);
  const stateFromStores1 = tmp4Result12.useStateFromStores(items7, () => user.getUser(stateFromStores), items8);
  tmp(5943);
  let formatToPlainStringResult;
  if (null != stateFromStores) {
    let intl = tmp4(1112).intl;
    const formatToPlainString = intl.formatToPlainString;
    const tmpResult5 = tmp(3376);
    let obj4 = { username: tmp44 };
    formatToPlainStringResult = formatToPlainString(tmp11 ? tmpResult5.w1cTI7 : tmpResult5["g9x8/M"], obj4);
  }
  const ref = obj.useRef(null);
  const tmp48 = !(null == streamKey && tmp7) && !showStream && !isAutoWatchChannel;
  _require = tmp11;
  importDefault = tmp48;
  let tmp51;
  const tmp49 = isConnecting || isWatching;
  const tmpResult6 = tmp(11045);
  if (!(null == streamKey && tmp7)) {
    tmp51 = ownerId;
  }
  const tmpResult2Result = tmpResult6(tmp51, tmp4(5679).MediaEngineContextTypes.STREAM);
  const effectiveVolume = tmpResult2Result.effectiveVolume;
  const handleVolumeChange = tmpResult2Result.handleVolumeChange;
  let tmp54;
  const useVoicePanelDockWatchPromptActions = tmp4(19326).useVoicePanelDockWatchPromptActions;
  tmp4(19326);
  if (tmp48) {
    tmp54 = ownerId;
  }
  const voicePanelDockWatchPromptActions = useVoicePanelDockWatchPromptActions(tmp54, streamKey, tmp49);
  const handleWatch = voicePanelDockWatchPromptActions.handleWatch;
  const handleDismiss = voicePanelDockWatchPromptActions.handleDismiss;
  const constants2 = obj.useRef(tmp48);
  const items9 = [tmp48, ref];
  const effect1 = obj.useEffect(() => {
    current = ref2.current;
    ref2.current = current;
    if (current) {
      current = !current;
    }
    if (current) {
      const obj2 = { ref };
      const obj = transitionCleanUp(ref[20]);
      const result = obj.setAccessibilityFocus(obj2);
    }
  }, items9);
  const items10 = [tmp48, tmp11, formatToPlainStringResult, effectiveVolume, handleWatch, handleDismiss, handleVolumeChange, callback5, callback4, callback6];
  let tmp58 = tmp11;
  const memo = obj.useMemo(() => {
    let intl5;
    let intl6;
    let intl7;
    let intl8;
    let intl9;
    let items;
    let items1;
    let items2;
    let obj11;
    let setVolume;
    const tmp = setVolume;
    if (tmp) {
      const obj2 = { label, hint: intl6.string(closure_0(ref[21]).t["7Xq/nV"]), activateLabel: intl7.string(closure_0(ref[21]).t["7Xq/nV"]), onActivate: handleWatch, actions: items };
      intl6 = closure_0(ref[21]).intl;
      intl7 = closure_0(ref[21]).intl;
      const obj3 = { name: "watch", label: intl8.string(closure_0(ref[21]).t["7Xq/nV"]), onAction: handleWatch };
      intl8 = closure_0(ref[21]).intl;
      items = [obj3, ];
      const obj5 = { name: "dismiss", label: intl9.string(closure_0(ref[21]).t.WAI6xu), onAction: handleDismiss };
      intl9 = closure_0(ref[21]).intl;
      items[1] = obj5;
      return closure_1_18(obj2);
    } else {
      let stringResult;
      let formatToPlainStringResult;
      let formatToPlainStringResult1;
      const intl = closure_0(ref[21]).intl;
      const string = intl.string;
      const t = closure_0(ref[21]).t;
      const tmp2 = closure_0;
      if (closure_0) {
        stringResult = string(t.cpT0Cq);
      } else {
        stringResult = string(t.q3O3J8);
      }
      let obj = { name: "stopWatching", label: stringResult, onAction: callback4 };
      if (null != label) {
        const intl2 = closure_0(ref[21]).intl;
        const obj6 = { thing: label };
        formatToPlainStringResult = intl2.formatToPlainString(current(ref[22])["1CIzQl"], obj6);
      }
      if (null != label) {
        const intl4 = closure_0(ref[21]).intl;
        const obj7 = { targetName: label };
        formatToPlainStringResult1 = intl4.formatToPlainString(closure_0(ref[21]).t.OervdV, obj7);
      } else {
        const intl3 = closure_0(ref[21]).intl;
        formatToPlainStringResult1 = intl3.string(closure_0(ref[21]).t["77cRN4"]);
      }
      if (tmp2) {
        const obj8 = { label, hint: formatToPlainStringResult, activateLabel: formatToPlainStringResult1, onActivate: callback6, actions: items1 };
        const obj9 = { name: "openCall", label: intl5.string(current(ref[22]).MPtef8), onAction: callback5 };
        intl5 = closure_0(ref[21]).intl;
        items1 = [obj9, obj];
        return closure_1_18(obj8);
      } else {
        let _Math = Math;
        const obj4 = closure_0(ref[23]);
        const roundResult = round(obj4.amplitudeToPerceptual(effectiveVolume));
        closure_0 = roundResult;
        setVolume = function setVolume(arg0) {

        };
        const obj10 = { label, hint: formatToPlainStringResult, activateLabel: formatToPlainStringResult1, onActivate: callback6, adjustable: obj11, actions: items2 };
        const _HermesInternal = HermesInternal;
        items2 = [obj];
        obj11 = {
          value: "" + roundResult + "%",
          onIncrement() {
                if (typeof setVolume === "function") {
                  const _Math = Math;
                  const _Math2 = Math;
                  const obj = transitionCleanUp(closure_2[23]);
                  return handleVolumeChange(obj.perceptualToAmplitude(Math.min(closure_3_12, Math.max(0, tmp))));
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              },
          onDecrement() {
                if (typeof setVolume === "function") {
                  const _Math = Math;
                  const _Math2 = Math;
                  const obj = transitionCleanUp(closure_2[23]);
                  return handleVolumeChange(obj.perceptualToAmplitude(Math.min(closure_3_12, Math.max(0, tmp))));
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
        };
        return closure_1_18(obj10);
      }
    }
  }, items10);
  if (!(null == streamKey && tmp7)) {
    tmp58 = null != ownerId;
  }
  let obj5 = { hasTile: tmp58, showContent: tmp11 || isWatching, mainTileAccessibilityProps: memo, mainTileRef: ref, dragEnabled: HIDDEN !== tmp4(19328).VoicePanelDockPIPOverlayModes.VOLUME, resizeEnabled: tmp12, onMainTileTap: callback2, onStreamReady, showPushToTalk: false, onGesturePressedChange: tmp29, controlsOverlay: tmp59(tmp60, obj7) };
  let tmp62Result = null;
  tmp59 = closure_15;
  tmp60 = closure_14;
  if (!(null == streamKey && tmp7)) {
    tmp62Result = null;
    if (!isAutoWatchChannel) {
      tmp62Result = null;
      if (null != ownerId) {
        let obj6 = { ownerId, streamKey, isConnecting, hideContent: isWatching, visible: !showStream };
        const tmp62 = closure_13;
        const tmpResult7 = tmp(19326);
        if (!isConnecting) {
          isConnecting = isWatching;
        }
        tmp62Result = tmp62(tmpResult7, obj6);
      }
    }
  }
  const items11 = [tmp62Result, ];
  let str = "stream";
  const tmpResult8 = tmp(19328);
  if (null == streamKey && tmp7) {
    str = "video";
  }
  obj7 = { children: items11 };
  items11[1] = closure_13(tmpResult8, { kind: str, ownerId: stateFromStores, mode: HIDDEN, onToggleVolume: callback3, onInteractionStart: callback, onInteractionEnd: callback1, onStopWatching: callback4, onOpenCall: callback5 });
  const tmp4Result14 = tmp4(11764);
  const pIPState2 = tmp4Result14.usePIPState();
  let id = pIPState2.id;
  const mode = pIPState2.mode;
  const channelId3 = obj.useContext(tmp(11754)).channelId;
  let tmp67 = tmp(19238)();
  const items12 = [tmp13];
  const items13 = [channelId3, id];
  const tmp4Result15 = tmp4(504);
  let stateFromStores2 = tmp4Result15.useStateFromStores(items12, () => {
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
  }, items13);
  let tmp70 = mode === constants.IN_APP;
  if (tmp70) {
    if (!stateFromStores2) {
      if (tmp67) {
        tmp67 = null == tmp6.streamKey;
      }
      if (tmp67) {
        tmp67 = !tmp7;
      }
      stateFromStores2 = tmp67;
    }
    tmp70 = stateFromStores2;
  }
  const tmp4Result16 = tmp4(19335);
  panelLayoutCommitted = tmp4Result16.usePIPTileHandoff().panelLayoutCommitted;
  const tmp71 = transitionState === tmp4(4974).TransitionStates.YEETED;
  dependencyMap = tmp71;
  [tmp73, tmp74] = sharedValue(obj.useState(pIPState), 2);
  sharedValue(obj.useState(pIPState), 2);
  const tmp15Result11 = sharedValue(obj.useState(tmp70), 2);
  const first2 = tmp15Result11[0];
  let tmp78 = tmp71;
  const tmp77 = tmp15Result11[1];
  if (!tmp71) {
    tmp78 = tmp73 === pIPState;
  }
  if (!tmp78) {
    tmp74(pIPState);
  }
  const tmp80 = tmp71 || first2 === tmp70;
  if (!tmp80) {
    tmp77(tmp70);
  }
  let tmp84 = pIPState;
  const tmp82 = first2 || tmp73.mode === constants.IN_PANEL;
  const tmp83 = useVoicePanelDockPIPState;
  if (tmp71) {
    tmp84 = pIPState;
    if (tmp82) {
      tmp84 = tmp73;
    }
  }
  const tmp83Result = tmp83(tmp6, tmp7, tmp84, tmp8.showStream, first2);
  const tmp4Result17 = tmp4(1653);
  sharedValue = tmp4Result17.useSharedValue(0);
  react = obj.useRef(false);
  const tmp15Result12 = sharedValue(obj.useState(false), 2);
  first3 = tmp15Result12[0];
  closure_6 = tmp89;
  const tmp90 = !tmp71 && first3;
  if (tmp90) {
    tmp15Result12[1](false);
  }
  const items14 = [tmp71, sharedValue];
  const effect2 = obj.useEffect(() => {
    let tmp23;
    let tmp24;
    let tmp25;
    let tmp = closure_2;
    if (tmp) {
      set2 = sharedValue.set;
      const items = [closure_19, , ];
      const withTiming = timing_timing.withTiming;
      items[1] = _mod1706.scheduleOnRN;
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
        const obj2 = _mod1653;
        withDelayResult = obj2.withDelay(metroImportAll, withTimingResult);
      }
      const result = set(withDelayResult);
      tmp7.current = true;
    }
  }, items14);
  const items15 = [tmp71, first3, panelLayoutCommitted, transitionCleanUp];
  const effect3 = obj.useEffect(() => {
    const tmp = closure_2 && first3 && panelLayoutCommitted;
    if (tmp) {
      transitionCleanUp();
    }
  }, items15);
  const tmp4Result18 = tmp4(1653);
  const sharedValue1 = tmp4Result18.useSharedValue(1);
  const items16 = [closure_20, dockContentSwap];
  let c0;
  [tmp96, tmp97] = items16;
  const tmp4Result19 = tmp4(1653);
  class VoicePanelDockPIPTsx2 {
    constructor() {
      return _undefined.get() > 0;
    }
  }
  const items17 = [tmp97];
  VoicePanelDockPIPTsx2.__closure = items17;
  VoicePanelDockPIPTsx2.__workletHash = 14999017166726;
  VoicePanelDockPIPTsx2.__initData = tmp96;
  const items18 = [closure_21, sharedValue1, , ];
  const useAnimatedReaction = tmp4Result19.useAnimatedReaction;
  items18[2] = tmp4(5123).withTiming;
  items18[3] = DOCK_FADE_TIMING;
  c0 = undefined;
  let c1;
  let c2;
  [tmp98, tmp99, tmp100, tmp101] = items18;
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
  const items19 = [tmp99, tmp100, tmp101];
  VoicePanelDockPIPTsx3.__closure = items19;
  VoicePanelDockPIPTsx3.__workletHash = 320681970324;
  VoicePanelDockPIPTsx3.__initData = tmp98;
  const animatedReaction = useAnimatedReaction(VoicePanelDockPIPTsx2, VoicePanelDockPIPTsx3);
  const items20 = [closure_22, sharedValue, sharedValue1];
  c0 = undefined;
  c1 = undefined;
  [tmp103, tmp104, tmp105] = items20;
  const tmp4Result20 = tmp4(1653);
  class VoicePanelDockPIPTsx4 {
    constructor() {
      const value = _undefined.get();
      return value * _undefined2.get();
    }
  }
  const items21 = [tmp104, tmp105];
  VoicePanelDockPIPTsx4.__closure = items21;
  VoicePanelDockPIPTsx4.__workletHash = 5225188298385;
  VoicePanelDockPIPTsx4.__initData = tmp103;
  const derivedValue = tmp4Result20.useDerivedValue(VoicePanelDockPIPTsx4);
  let obj8 = { value: tmp83Result, children: closure_13(VoicePanelPIPTiles, obj9) };
  const Provider = tmp4(11764).VoicePanelPIPStateContext.Provider;
  let tmp107;
  VoicePanelPIPTiles = tmp4(19335).VoicePanelPIPTiles;
  if (tmp83Result.mode !== constants.IN_PANEL) {
    if (!first2) {
      tmp107 = obj5;
    }
  }
  obj9 = { opacity: derivedValue };
  const merged = Object.assign(tmp107);
  return closure_13(Provider, obj8);
});
const memoResult = react.memo(function VoicePanelDockPIPProvider() {
  let TransitionItem;
  let channelId2;
  let obj5;
  let tmp12;
  const tmp = dependencyMap;
  const channelId = react.useContext(channelId2(11754)).channelId;
  let tmp2 = channelId2(19331)(channelId);
  const tmp3 = channelId2(19333)(channelId);
  let id;
  channelId2 = undefined;
  const obj = id(11764);
  const pIPState = obj.usePIPState();
  id = pIPState.id;
  const mode = pIPState.mode;
  channelId2 = react.useContext(channelId2(11754)).channelId;
  let tmp6 = channelId2(19238)();
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
  const tmp4Result = id(11764);
  const tmp10 = useVoicePanelDockPIPState(tmp2, tmp3, tmp4Result.usePIPState(), tmp2.isWatching, tmp8);
  const obj3 = { value: tmp10, children: closure_13(TransitionItem, obj5) };
  const Provider = tmp4(11764).VoicePanelPIPStateContext.Provider;
  TransitionItem = tmp4(4974).TransitionItem;
  if (null != tmp10.mode) {
    tmp12 = { pipMode: tmp10.mode };
  }
  obj5 = { item: tmp12, renderItem: renderVoicePanelDockPIP };
  return closure_13(Provider, obj3);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockPIP.tsx");

export default memoResult;
