// Module ID: 19725
// Function ID: 19726
// Name: VoicePanelDockPIP
// Dependencies: [32, 19, 6931, 1385, 11395, 19582, 11412, 5837, 21, 19650, 11394, 19638, 504, 10242, 19581, 19726, 19727, 19729, 8011, 5870, 9708, 1113, 3184, 6205, 19730, 19731, 19733, 19734, 5231, 1652, 5402, 1705, 2]

// Module 19725 (VoicePanelDockPIP)
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import timing_timing from "timing/timing" /* 5402 */;
import CallConstants from "CallConstants" /* 5837 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11395 */;
import VoicePanelDockConstants from "VoicePanelDockConstants" /* 11412 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6931 */;
import UserStore from "UserStore" /* 1385 */;
import VoicePanelPIPConstants from "VoicePanelPIPConstants" /* 19582 */;
import Fragment from "Fragment" /* 21 */;
import size_mod from "module_2" /* 2 */;

let constants, dependencyMap, flag, set, set2;

let c9;
let closure_12;
let closure_14;
let map1;
let metroImportAll;
function renderVoicePanelDockPIP(arg0, arg1, transitionState, transitionCleanUp) {
  const obj = { transitionState, transitionCleanUp };
  return authStore2(closure_22, obj, arg0);
}
let react = react_mod;
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
({ PIP_FIRST_FRAME_DELAY_MS: metroImportAll, VoicePanelPIPModes: c9 } = VoicePanelPIPConstants);
const DOCK_FADE_TIMING = VoicePanelDockConstants.DOCK_FADE_TIMING;
const ParticipantTypes = CallConstants.ParticipantTypes;
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = Fragment);
let closure_15 = { width: 16, height: 9 };
const openCall = "openCall";
const stopWatching = "stopWatching";
let closure_18 = { code: "(function VoicePanelDockPIPTsx1(finished){let[scheduleOnRN,setHasFadedOut]=this.__closure;if(finished){scheduleOnRN(setHasFadedOut,true);}})" };
let closure_19 = { code: "(function VoicePanelDockPIPTsx2(){let[dockContentSwap]=this.__closure;return dockContentSwap.get()>0;})" };
let closure_20 = { code: "(function VoicePanelDockPIPTsx3(isSwapped,wasSwapped){let[pullOpacity,withTiming,DOCK_FADE_TIMING]=this.__closure;if(wasSwapped==null||isSwapped===wasSwapped)return;pullOpacity.set(withTiming(isSwapped?0:1,DOCK_FADE_TIMING));})" };
let closure_21 = { code: "(function VoicePanelDockPIPTsx4(){let[fadeOpacity,pullOpacity]=this.__closure;return fadeOpacity.get()*pullOpacity.get();})" };
let closure_22 = react.memo(function VoicePanelDockPIP(transitionCleanUp) {
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
  let tmp60;
  let tmp61;
  let tmp62;
  let tmp63;
  let tmp64;
  let tmp65;
  let tmp67;
  let tmp68;
  let tmp69;
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
  const context = react.useContext(panelLayoutCommitted(11394));
  const channelId = context.channelId;
  const tmp4 = transitionCleanUp;
  const dockContentSwap = context.dockContentSwap;
  let obj2 = transitionCleanUp(19650);
  const pIPState = obj2.usePIPState();
  const tmp6 = panelLayoutCommitted(19731)(channelId);
  let tmp7 = panelLayoutCommitted(19733)(channelId);
  let closure_6;
  constants = undefined;
  let stateFromStores;
  c9 = undefined;
  let callback;
  let callback2;
  let callback3;
  let name;
  const context1 = react.useContext(panelLayoutCommitted(11394));
  const channelId2 = context1.channelId;
  const setMode = context1.setMode;
  const setFocused = context1.setFocused;
  const showControls = context1.showControls;
  const guildId = context1.guildId;
  let obj3 = transitionCleanUp(19650);
  const pIPState1 = obj3.usePIPState();
  const streamKey = tmp6.streamKey;
  ({ ownerId, isWatching, isConnecting } = tmp6);
  let tmp10 = panelLayoutCommitted(19726)(tmp6);
  const showStream = tmp10.showStream;
  let tmp11 = null == streamKey;
  const onStreamReady = tmp10.onStreamReady;
  if (tmp11) {
    tmp11 = tmp7;
  }
  closure_6 = tmp11;
  constants = tmp12;
  let items = [first1];
  let items1 = [tmp11, channelId2, pIPState1.id];
  stateFromStores = ownerId;
  const tmp13 = first1;
  const tmp4Result = tmp4(504);
  if (tmp11) {
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
  let tmp16 = sharedValue(obj.useState(tmp4(19727).VoicePanelDockPIPOverlayModes.HIDDEN), 2);
  [HIDDEN, c9] = tmp16;
  if (!(tmp11 || showStream)) {
    HIDDEN = tmp4(19727).VoicePanelDockPIPOverlayModes.HIDDEN;
  }
  const items2 = [tmp12];
  callback = obj.useCallback(() => {
    const tmp = closure_7;
    if (tmp) {
      const tmp2 = _undefined;
      _undefined((arg0) => {
        let HIDDEN;
        if (arg0 === channelId2(setFocused[16]).VoicePanelDockPIPOverlayModes.HIDDEN) {
          HIDDEN = tmp(tmp2[16]).VoicePanelDockPIPOverlayModes.CONTROLS;
        } else {
          HIDDEN = tmp(tmp2[16]).VoicePanelDockPIPOverlayModes.HIDDEN;
        }
        return HIDDEN;
      });
    }
  }, items2);
  const items3 = [tmp11, streamKey];
  const callback1 = obj.useCallback(() => {
    const tmp = _undefined((arg0) => {
      let VOLUME;
      if (arg0 === channelId2(setFocused[16]).VoicePanelDockPIPOverlayModes.VOLUME) {
        VOLUME = tmp(tmp2[16]).VoicePanelDockPIPOverlayModes.CONTROLS;
      } else {
        VOLUME = tmp(tmp2[16]).VoicePanelDockPIPOverlayModes.VOLUME;
      }
      return VOLUME;
    });
  }, []);
  callback2 = obj.useCallback(() => {
    let intl;
    const tmp = user;
    if (tmp) {
      _undefined(transitionCleanUp(setFocused[16]).VoicePanelDockPIPOverlayModes.HIDDEN);
      const obj = transitionCleanUp(setFocused[17]);
      const result = obj.dismissVoicePanelDockVideoPIP();
    } else if (null != streamKey) {
      _undefined(transitionCleanUp(setFocused[16]).VoicePanelDockPIPOverlayModes.HIDDEN);
      const obj2 = transitionCleanUp(setFocused[18]);
      obj2.stopStream(tmp2);
      const obj3 = { icon: transitionCleanUp(setFocused[20]).ScreenIcon, text: intl.string(panelLayoutCommitted(setFocused[22]).gLoosj) };
      const showToast = transitionCleanUp(setFocused[19]).showToast;
      transitionCleanUp(setFocused[19]);
      intl = transitionCleanUp(setFocused[21]).intl;
      showToast(obj3);
    }
  }, items3);
  const items4 = [streamKey, setFocused, setMode, showControls];
  callback3 = obj.useCallback(() => {
    _undefined(transitionCleanUp(setFocused[16]).VoicePanelDockPIPOverlayModes.HIDDEN);
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
  const tmpResult = tmp(6205);
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
        const intl = transitionCleanUp(setFocused[21]).intl;
        const formatToPlainString = intl.formatToPlainString;
        const tmp10 = panelLayoutCommitted(setFocused[22]);
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
      const intl2 = transitionCleanUp(setFocused[21]).intl;
      string = intl2.string;
      tmp17 = panelLayoutCommitted(setFocused[22]);
      items = [{ name: "activate" }, , ];
      const obj4 = { name, label: intl3.string(panelLayoutCommitted(setFocused[22]).MPtef8) };
      intl3 = transitionCleanUp(setFocused[21]).intl;
      items[1] = obj4;
      const obj5 = { name: name2, label: string2Result };
      const intl4 = transitionCleanUp(setFocused[21]).intl;
      const string2 = intl4.string;
      const t = transitionCleanUp(setFocused[21]).t;
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
  if (!tmp11) {
    tmp24 = null != ownerId;
  }
  let obj4 = { hasTile: tmp24, showContent: tmp11 || isWatching, mainTileAccessibilityProps: memo, dragEnabled: HIDDEN !== tmp4(19727).VoicePanelDockPIPOverlayModes.VOLUME, resizeEnabled: null == streamKey || isWatching, onMainTileTap: callback, onStreamReady, showPushToTalk: false, controlsOverlay: tmp25(tmp26, obj6) };
  let tmp28Result = null;
  tmp25 = closure_14;
  tmp26 = closure_13;
  if (!tmp11) {
    tmp28Result = null;
    if (null != ownerId) {
      let obj5 = { ownerId, streamKey, isConnecting, visible: !showStream };
      const tmp28 = closure_12;
      const tmpResult3 = tmp(19730);
      if (!isConnecting) {
        isConnecting = isWatching;
      }
      tmp28Result = tmp28(tmpResult3, obj5);
    }
  }
  const items8 = [tmp28Result, ];
  let str = "stream";
  const tmpResult4 = tmp(19727);
  if (tmp11) {
    str = "video";
  }
  obj6 = { children: items8 };
  items8[1] = closure_12(tmpResult4, { kind: str, ownerId: stateFromStores, mode: HIDDEN, onToggleVolume: callback1, onStopWatching: callback2, onOpenCall: callback3 });
  const tmp4Result10 = tmp4(19650);
  const pIPState2 = tmp4Result10.usePIPState();
  let id = pIPState2.id;
  const mode = pIPState2.mode;
  const channelId3 = obj.useContext(tmp(11394)).channelId;
  let tmp33 = tmp(19638)();
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
  const tmp4Result12 = tmp4(19734);
  panelLayoutCommitted = tmp4Result12.usePIPTileHandoff().panelLayoutCommitted;
  const tmp37 = transitionState === tmp4(5231).TransitionStates.YEETED;
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
  let tmp49 = pIPState;
  const tmp48 = first || tmp39.mode === constants.IN_PANEL;
  if (tmp37) {
    tmp49 = pIPState;
    if (tmp48) {
      tmp49 = tmp39;
    }
  }
  const tmp4Result13 = tmp4(1652);
  sharedValue = tmp4Result13.useSharedValue(0);
  react = obj.useRef(false);
  const tmp15Result4 = sharedValue(obj.useState(false), 2);
  first1 = tmp15Result4[0];
  closure_6 = tmp53;
  const tmp54 = !tmp37 && first1;
  if (tmp54) {
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
      const items = [closure_18, , ];
      const withTiming = timing_timing.withTiming;
      items[1] = _mod1705.scheduleOnRN;
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
        const obj2 = _mod1652;
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
  const tmp4Result14 = tmp4(1652);
  const sharedValue1 = tmp4Result14.useSharedValue(1);
  const items13 = [closure_19, dockContentSwap];
  let c0;
  [tmp60, tmp61] = items13;
  const tmp4Result15 = tmp4(1652);
  class VoicePanelDockPIPTsx2 {
    constructor() {
      return _undefined.get() > 0;
    }
  }
  const items14 = [tmp61];
  VoicePanelDockPIPTsx2.__closure = items14;
  VoicePanelDockPIPTsx2.__workletHash = 14999017166726;
  VoicePanelDockPIPTsx2.__initData = tmp60;
  const items15 = [closure_20, sharedValue1, , ];
  const useAnimatedReaction = tmp4Result15.useAnimatedReaction;
  items15[2] = tmp4(5402).withTiming;
  items15[3] = DOCK_FADE_TIMING;
  c0 = undefined;
  let c1;
  let c2;
  [tmp62, tmp63, tmp64, tmp65] = items15;
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
  const items16 = [tmp63, tmp64, tmp65];
  VoicePanelDockPIPTsx3.__closure = items16;
  VoicePanelDockPIPTsx3.__workletHash = 320681970324;
  VoicePanelDockPIPTsx3.__initData = tmp62;
  const animatedReaction = useAnimatedReaction(VoicePanelDockPIPTsx2, VoicePanelDockPIPTsx3);
  const items17 = [closure_21, sharedValue, sharedValue1];
  c0 = undefined;
  c1 = undefined;
  [tmp67, tmp68, tmp69] = items17;
  const tmp4Result16 = tmp4(1652);
  class VoicePanelDockPIPTsx4 {
    constructor() {
      const value = _undefined.get();
      return value * _undefined2.get();
    }
  }
  const items18 = [tmp68, tmp69];
  VoicePanelDockPIPTsx4.__closure = items18;
  VoicePanelDockPIPTsx4.__workletHash = 5225188298385;
  VoicePanelDockPIPTsx4.__initData = tmp67;
  const derivedValue = tmp4Result16.useDerivedValue(VoicePanelDockPIPTsx4);
  const obj7 = { value: tmp49, children: closure_12(VoicePanelPIPTiles, obj8) };
  const Provider = tmp4(19650).VoicePanelPIPStateContext.Provider;
  let tmp71;
  VoicePanelPIPTiles = tmp4(19734).VoicePanelPIPTiles;
  if (tmp49.mode !== constants.IN_PANEL) {
    if (!first) {
      tmp71 = obj4;
    }
  }
  obj8 = { opacity: derivedValue };
  const merged = Object.assign(tmp71);
  return closure_12(Provider, obj7);
});
const memoResult = react.memo(function VoicePanelDockPIPProvider() {
  let TransitionItem;
  let c3;
  let channelId2;
  let obj6;
  let tmp14;
  let tmp22;
  const f135684 = () => {
    let targetDimensions = layoutManager.getTargetDimensions(streamKey);
    if (targetDimensions === layoutManager.getDefaultTargetDimensions()) {
      targetDimensions = closure_2_15;
    }
    return targetDimensions;
  };
  let obj = react;
  let tmp2 = dependencyMap;
  let tmp = channelId2;
  const channelId = react.useContext(channelId2(11394)).channelId;
  const tmp3 = channelId2(19731)(channelId);
  const tmp4 = channelId2(19733)(channelId);
  let id;
  channelId2 = undefined;
  const obj2 = id(19650);
  const pIPState = obj2.usePIPState();
  id = pIPState.id;
  const mode = pIPState.mode;
  channelId2 = react.useContext(channelId2(11394)).channelId;
  let tmp7 = channelId2(19638)();
  const items = [ChannelRTCStore];
  const items1 = [channelId2, id];
  const obj3 = id(504);
  let stateFromStores = obj3.useStateFromStores(items, () => {
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
  let tmp10 = mode === constants.IN_APP;
  if (tmp10) {
    if (!stateFromStores) {
      if (tmp7) {
        tmp7 = null == tmp3.streamKey;
      }
      if (tmp7) {
        tmp7 = !tmp4;
      }
      stateFromStores = tmp7;
    }
    tmp10 = stateFromStores;
  }
  const streamKey = tmp3.streamKey;
  c3 = undefined;
  let width;
  let height;
  let containerHeight;
  const isWatching = tmp3.isWatching;
  const tmp5Result = id(19650);
  const pIPState1 = tmp5Result.usePIPState();
  const layoutManager = obj.useContext(tmp(11394)).layoutManager;
  [tmp14, c3] = _slicedToArray(obj.useState(f135684), 2);
  const items2 = [layoutManager, streamKey];
  const tmp13 = _slicedToArray(obj.useState(f135684), 2);
  const effect = obj.useEffect(() => {
    const f143209 = (safeAreaState) => {
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
    _undefined(f143209);
    return layoutManager.subscribeFromItem(function updateTargetDimensions() {
      _undefined(f143209);
    });
  }, items2);
  let closure_4 = tmp16;
  let closure_5 = tmp17;
  let IN_APP;
  if (pIPState1.mode === constants.IN_APP) {
    if (null != streamKey) {
      IN_APP = tmp9.IN_APP;
    }
  }
  const computePIPSize = tmp5(19581).computePIPSize;
  id(19581);
  if (!isWatching) {
    tmp14 = closure_15;
  }
  size = computePIPSize(tmp14, false, false, pIPState1.showSecondaryPIP);
  width = size.width;
  height = size.height;
  containerHeight = size.containerHeight;
  const items3 = [pIPState1.mode !== tmp9.IN_PANEL && !tmp10, null == streamKey && tmp4, pIPState1, streamKey, IN_APP, width, height, containerHeight];
  const memo = obj.useMemo(() => {
    let tmp2;
    const tmp = closure_4;
    if (tmp) {
      let tmp12;
      const obj = {};
      const merged = Object.assign(pIPState1);
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
      tmp2 = pIPState1;
    }
    return tmp2;
  }, items3);
  const obj4 = { value: memo, children: closure_12(TransitionItem, obj6) };
  const Provider = tmp5(19650).VoicePanelPIPStateContext.Provider;
  TransitionItem = tmp5(5231).TransitionItem;
  if (null != memo.mode) {
    tmp22 = { pipMode: memo.mode };
  }
  obj6 = { item: tmp22, renderItem: renderVoicePanelDockPIP };
  return closure_12(Provider, obj4);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockPIP.tsx");

export default memoResult;
