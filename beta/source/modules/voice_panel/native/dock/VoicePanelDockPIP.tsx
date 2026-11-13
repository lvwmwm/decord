// Module ID: 19720
// Function ID: 19721
// Name: VoicePanelDockPIP
// Dependencies: [32, 19, 17, 6931, 6934, 1385, 11395, 19524, 11413, 5813, 5837, 6935, 21, 19613, 11394, 10242, 19523, 19721, 19729, 504, 19730, 19732, 8011, 5870, 9708, 1113, 3184, 1652, 5402, 6205, 11093, 11921, 5452, 19722, 19733, 7056, 19726, 19734, 19736, 5231, 1705, 2]

// Module 19720 (VoicePanelDockPIP)
import react_native from "react-native" /* 17 */;
import intl5 from "intl" /* 1113 */;
import _mod1705 from "module_1705" /* 1705 */;
import _modDef3184 from "module_3184" /* 3184 */;
import timing_timing from "timing/timing" /* 5402 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5813 */;
import CallConstants from "CallConstants" /* 5837 */;
import toastUtils from "toastUtils" /* 5870 */;
import FramesConstants from "FramesConstants" /* 6935 */;
import StreamActionCreators from "StreamActionCreators" /* 8011 */;
import ScreenIcon from "ScreenIcon" /* 9708 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 11093 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11395 */;
import VoicePanelDockConstants from "VoicePanelDockConstants" /* 11413 */;
import EmbeddedActivitiesActionCreatorsAll from "EmbeddedActivitiesActionCreators" /* 11921 */;
import VoicePanelPIPConstants from "VoicePanelPIPConstants" /* 19524 */;
import VoicePanelDockPIPOverlay from "VoicePanelDockPIPOverlay" /* 19730 */;
import VoicePanelDockActionCreators from "VoicePanelDockActionCreators" /* 19732 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6931 */;
import FramesStore from "FramesStore" /* 6934 */;
import UserStore from "UserStore" /* 1385 */;
import Fragment from "Fragment" /* 21 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, flag, set, tmp4;

let closure_16;
let closure_17;
function VoicePanelDockPIP(stream) {
  let GestureDetector;
  let GestureDetector3;
  let HIDDEN;
  let View2;
  let View4;
  let View7;
  let _undefined;
  let c9;
  let containerGesture;
  let containerStyles;
  let dockContentSwap;
  let exitOpacity;
  let gestureState;
  let guildId;
  let isConnecting;
  let isWatching;
  let items19;
  let items20;
  let items21;
  let items22;
  let items23;
  let items24;
  let items25;
  let items26;
  let items27;
  let mainPIPGesture;
  let mainPIPVisibilityStyles;
  let obj10;
  let obj13;
  let obj16;
  let obj17;
  let obj18;
  let obj6;
  let obj7;
  let ownerId;
  let pipWrapperStyles;
  let secondaryPIPGesture;
  let showVideo;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp38;
  let tmp39;
  let tmp40;
  let tmp48Result;
  let tmp4Result4;
  let tmp4Result6;
  stream = stream.stream;
  let channelId;
  let setMode;
  let showControls;
  let streamKey;
  showVideo = undefined;
  let closure_7;
  let stateFromStores;
  c9 = undefined;
  let onMainTileTap;
  let callback2;
  let callback3;
  let name;
  let stateFromStores2;
  let callback4;
  let tmp = channelId;
  let tmp2 = showControls;
  ({ showVideo, exitOpacity } = stream);
  let obj = channelId(showControls[17]);
  const voicePanelPIPStyles = obj.useVoicePanelPIPStyles();
  let obj2 = streamKey;
  const context = streamKey.useContext(setMode(showControls[14]));
  channelId = context.channelId;
  setMode = context.setMode;
  const setFocused = context.setFocused;
  showControls = context.showControls;
  ({ dockContentSwap, guildId } = context);
  let obj3 = channelId(showControls[13]);
  const pIPState = obj3.usePIPState();
  streamKey = stream.streamKey;
  ({ ownerId, isWatching, isConnecting } = stream);
  const tmp7 = setMode(showControls[18])(stream);
  const showStream = tmp7.showStream;
  let tmp8 = null == streamKey;
  const onStreamReady = tmp7.onStreamReady;
  if (tmp8) {
    tmp8 = showVideo;
  }
  showVideo = tmp8;
  closure_7 = tmp9;
  let items = [closure_7];
  const items1 = [tmp8, channelId, pIPState.id];
  stateFromStores = ownerId;
  const tmpResult = tmp(tmp2[19]);
  if (tmp8) {
    stateFromStores = tmpResult.useStateFromStores(items, () => {
      const tmp = showVideo;
      if (tmp) {
        if (null != pIPState.id) {
          const participant = ChannelRTCStore.getParticipant(channelId, tmp2.id);
          let type;
          if (participant != null) {
            type = participant.type;
          }
          let id;
          if (type === ParticipantTypes.USER) {
            id = participant.user.id;
          }
          return id;
        }
      }
    }, items1);
  }
  [HIDDEN, c9] = pIPState(obj2.useState(tmp(tmp2[20]).VoicePanelDockPIPOverlayModes.HIDDEN), 2);
  const tmp11 = pIPState(obj2.useState(tmp(tmp2[20]).VoicePanelDockPIPOverlayModes.HIDDEN), 2);
  if (!(tmp8 || showStream)) {
    HIDDEN = tmp(tmp2[20]).VoicePanelDockPIPOverlayModes.HIDDEN;
  }
  const tmpResult10 = tmp(tmp2[17]);
  const pIPTileHandoff = tmpResult10.usePIPTileHandoff();
  const isMainPIPActive = pIPTileHandoff.isMainPIPActive;
  let tmp13 = isMainPIPActive;
  const cardArrivedInPIP = pIPTileHandoff.cardArrivedInPIP;
  if (!isMainPIPActive) {
    tmp13 = !pIPTileHandoff.panelLayoutCommitted;
  }
  const items2 = [tmp9];
  onMainTileTap = obj2.useCallback(() => {
    const tmp = closure_7;
    if (tmp) {
      const tmp2 = _undefined;
      _undefined((arg0) => {
        let HIDDEN;
        if (arg0 === channelId(showControls[20]).VoicePanelDockPIPOverlayModes.HIDDEN) {
          HIDDEN = tmp(tmp2[20]).VoicePanelDockPIPOverlayModes.CONTROLS;
        } else {
          HIDDEN = tmp(tmp2[20]).VoicePanelDockPIPOverlayModes.HIDDEN;
        }
        return HIDDEN;
      });
    }
  }, items2);
  const items3 = [tmp8, streamKey];
  const callback1 = obj2.useCallback(() => {
    const tmp = _undefined((arg0) => {
      let VOLUME;
      if (arg0 === channelId(showControls[20]).VoicePanelDockPIPOverlayModes.VOLUME) {
        VOLUME = tmp(tmp2[20]).VoicePanelDockPIPOverlayModes.CONTROLS;
      } else {
        VOLUME = tmp(tmp2[20]).VoicePanelDockPIPOverlayModes.VOLUME;
      }
      return VOLUME;
    });
  }, []);
  callback2 = obj2.useCallback(() => {
    let intl;
    const tmp = showVideo;
    if (tmp) {
      _undefined(VoicePanelDockPIPOverlay.VoicePanelDockPIPOverlayModes.HIDDEN);
      const obj = VoicePanelDockActionCreators;
      const result = obj.dismissVoicePanelDockVideoPIP();
    } else if (null != streamKey) {
      _undefined(VoicePanelDockPIPOverlay.VoicePanelDockPIPOverlayModes.HIDDEN);
      const obj2 = StreamActionCreators;
      obj2.stopStream(tmp2);
      const obj3 = { icon: ScreenIcon.ScreenIcon, text: intl.string(_modDef3184.gLoosj) };
      const showToast = toastUtils.showToast;
      toastUtils;
      intl = intl5.intl;
      showToast(obj3);
    }
  }, items3);
  const items4 = [streamKey, setFocused, setMode, showControls];
  callback3 = obj2.useCallback(() => {
    _undefined(VoicePanelDockPIPOverlay.VoicePanelDockPIPOverlayModes.HIDDEN);
    if (null != streamKey) {
      setFocused(tmp2);
    }
    showControls();
    setMode(VoicePanelModes.PANEL);
  }, items4);
  const mode = pIPState.mode;
  let tmp19 = tmp13;
  const usePIPGesture = tmp(tmp2[17]).usePIPGesture;
  tmp(tmp2[17]);
  if (tmp13) {
    let tmp20 = !isMainPIPActive;
    if (isMainPIPActive) {
      tmp20 = cardArrivedInPIP;
    }
    tmp19 = tmp20;
  }
  let obj4 = { onMainTileTap, dragEnabled: HIDDEN !== tmp(tmp2[20]).VoicePanelDockPIPOverlayModes.VOLUME, fadeInTiming: callback3 };
  const pIPGesture = usePIPGesture(mode, tmp13, tmp19, obj4);
  ({ pipWrapperStyles, containerStyles, mainPIPVisibilityStyles, mainPIPGesture, secondaryPIPGesture, containerGesture, gestureState } = pIPGesture);
  const tmpResult12 = tmp(tmp2[17]);
  const pIPLayoutTransition = tmpResult12.usePIPLayoutTransition(gestureState);
  const items5 = [closure_21, , ];
  const useAnimatedStyle = tmp(tmp2[27]).useAnimatedStyle;
  tmp(tmp2[27]);
  items5[1] = tmp(tmp2[16]).getVoicePanelPIPBorderRadius;
  items5[2] = pIPState;
  let c0;
  let c1;
  [tmp25, tmp26, tmp27] = items5;
  const tmp21 = callback3;
  class VoicePanelDockPIPTsx1 {
    constructor() {
      const obj = { borderRadius: _undefined(_undefined2.width, _undefined2.height) };
      return obj;
    }
  }
  const items6 = [tmp26, tmp27];
  VoicePanelDockPIPTsx1.__closure = items6;
  VoicePanelDockPIPTsx1.__workletHash = 7333687277052;
  VoicePanelDockPIPTsx1.__initData = tmp25;
  const animatedStyle = useAnimatedStyle(VoicePanelDockPIPTsx1);
  const tmpResult14 = tmp(tmp2[27]);
  const sharedValue = tmpResult14.useSharedValue(1);
  const items7 = [closure_22, dockContentSwap];
  c0 = undefined;
  [tmp31, tmp32] = items7;
  const tmpResult15 = tmp(tmp2[27]);
  class VoicePanelDockPIPTsx2 {
    constructor() {
      return _undefined.get() > 0;
    }
  }
  const items8 = [tmp32];
  VoicePanelDockPIPTsx2.__closure = items8;
  VoicePanelDockPIPTsx2.__workletHash = 14999017166726;
  VoicePanelDockPIPTsx2.__initData = tmp31;
  const items9 = [closure_23, sharedValue, , ];
  const useAnimatedReaction = tmpResult15.useAnimatedReaction;
  items9[2] = tmp(tmp2[28]).withTiming;
  items9[3] = tmp21;
  c0 = undefined;
  c1 = undefined;
  let c2;
  [tmp33, tmp34, tmp35, tmp36] = items9;
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
  const items10 = [tmp34, tmp35, tmp36];
  VoicePanelDockPIPTsx3.__closure = items10;
  VoicePanelDockPIPTsx3.__workletHash = 320681970324;
  VoicePanelDockPIPTsx3.__initData = tmp33;
  const animatedReaction = useAnimatedReaction(VoicePanelDockPIPTsx2, VoicePanelDockPIPTsx3);
  const items11 = [closure_24, exitOpacity, sharedValue];
  c0 = undefined;
  c1 = undefined;
  [tmp38, tmp39, tmp40] = items11;
  const tmpResult16 = tmp(tmp2[27]);
  class VoicePanelDockPIPTsx4 {
    constructor() {
      let value;
      const obj = { opacity: value * _undefined2.get() };
      value = _undefined.get();
      return obj;
    }
  }
  const items12 = [tmp39, tmp40];
  VoicePanelDockPIPTsx4.__closure = items12;
  VoicePanelDockPIPTsx4.__workletHash = 11406654493812;
  VoicePanelDockPIPTsx4.__initData = tmp38;
  const animatedStyle1 = tmpResult16.useAnimatedStyle(VoicePanelDockPIPTsx4);
  const items13 = [c9];
  const items14 = [stateFromStores];
  const tmpResult17 = tmp(tmp2[19]);
  const stateFromStores1 = tmpResult17.useStateFromStores(items13, () => UserStore.getUser(stateFromStores), items14);
  const tmp4Result = setMode(tmp2[29]);
  name = tmp4Result.useName(guildId, channelId, stateFromStores1);
  const items15 = [tmp9, tmp8, stateFromStores, name, callback3, callback2, onMainTileTap];
  const memo = obj2.useMemo(() => {
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
        const intl = intl5.intl;
        const formatToPlainString = intl.formatToPlainString;
        const tmp10 = _modDef3184;
        const obj2 = { username: name };
        formatToPlainStringResult = formatToPlainString(showVideo ? tmp10.w1cTI7 : tmp10["g9x8/M"], obj2);
      }
      const obj3 = {
        accessible: true,
        accessibilityRole: "button",
        accessibilityLabel: formatToPlainStringResult,
        accessibilityHint: string(showVideo ? tmp17.qlWFBD : tmp17.IJMHj5),
        accessibilityActions: items,
        onAccessibilityAction(nativeEvent) {
            const actionName = nativeEvent.nativeEvent.actionName;
            if (openCall === actionName) {
              callback3();
            } else if (stopWatching === actionName) {
              callback2();
            } else {
              onMainTileTap();
            }
          }
      };
      const intl2 = intl5.intl;
      string = intl2.string;
      tmp17 = _modDef3184;
      items = [{ name: "activate" }, , ];
      const obj4 = { name: openCall, label: intl3.string(_modDef3184.MPtef8) };
      intl3 = intl5.intl;
      items[1] = obj4;
      const obj5 = { name: stopWatching, label: string2Result };
      const intl4 = intl5.intl;
      const string2 = intl4.string;
      const t = intl5.t;
      const tmp14 = showVideo;
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
  }, items15);
  const items16 = [stateFromStores];
  const tmpResult18 = tmp(tmp2[19]);
  stateFromStores2 = tmpResult18.useStateFromStores(items16, () => {
    const mainFrame = stateFromStores.getMainFrame();
    let id = null;
    if (callback4(mainFrame)) {
      id = mainFrame.id;
    }
    return id;
  });
  const items17 = [stateFromStores2];
  callback4 = obj2.useCallback(() => {
    if (null != stateFromStores2) {
      const obj2 = FramesActionCreatorsDefault;
      obj2.updateFramePanelMode(tmp, ActivityPanelModes.PANEL);
    } else {
      const obj = EmbeddedActivitiesActionCreatorsAll;
      const result = obj.updateActivityPanelMode(ActivityPanelModes.PANEL);
    }
  }, items17);
  const items18 = [callback4];
  const memo1 = obj2.useMemo(() => {
    let intl;
    let items;
    const obj = { accessible: true, accessibilityLabel: intl.string(intl5.t["3ejJer"]), accessibilityActions: items, onAccessibilityAction: callback4 };
    intl = intl5.intl;
    items = [{ name: "activate" }];
    return obj;
  }, items18);
  let obj5 = { pointerEvents: "box-none", style: items19, layout: pIPLayoutTransition, children: closure_16(GestureDetector, obj6) };
  items19 = [voicePanelPIPStyles.container, containerStyles];
  const View = tmp4(tmp2[27]).View;
  obj6 = { gesture: containerGesture, children: closure_17(View2, obj7) };
  GestureDetector = tmp(tmp2[32]).GestureDetector;
  obj7 = { pointerEvents: "box-none", style: items20, layout: pIPLayoutTransition, children: items25 };
  items20 = [voicePanelPIPStyles.multiPipContainer, animatedStyle1];
  let tmp49Result = null;
  View2 = tmp4(tmp2[27]).View;
  if (tmp13) {
    if (tmp8) {
      const obj8 = { style: items21, pointerEvents: "box-none", layout: pIPLayoutTransition, children: items23 };
      items21 = [, , , ];
      ({ pipContentWrapper: arr22[0], inAppElevationShadow: arr22[1] } = voicePanelPIPStyles);
      items21[2] = pipWrapperStyles;
      items21[3] = mainPIPVisibilityStyles;
      const View3 = tmp4(tmp2[27]).View;
      const obj9 = { gesture: mainPIPGesture, children: closure_16(View4, obj10) };
      const GestureDetector2 = tmp(tmp2[32]).GestureDetector;
      obj10 = { style: items22, layout: pIPLayoutTransition, children: tmp48Result };
      items22 = [voicePanelPIPStyles.pipMask, animatedStyle];
      View4 = tmp4(tmp2[27]).View;
      const merged = Object.assign(memo);
      if (tmp8) {
        const obj11 = { layoutTransition: pIPLayoutTransition, onStreamReady };
        tmp48Result = tmp48(tmp4(tmp2[33]), obj11);
      } else {
        tmp48Result = null;
      }
      items23 = [closure_16(GestureDetector2, obj9), , ];
      let tmp48Result3 = null;
      if (!tmp8) {
        tmp48Result3 = null;
        if (null != ownerId) {
          const obj12 = { style: items24, pointerEvents: "box-none", children: closure_16(tmp4Result4, obj13) };
          items24 = [voicePanelPIPStyles.pipMask, animatedStyle];
          const View5 = tmp4(tmp2[27]).View;
          obj13 = { ownerId, streamKey, isConnecting, visible: !showStream };
          tmp4Result4 = setMode(tmp2[34]);
          if (!isConnecting) {
            isConnecting = isWatching;
          }
          tmp48Result3 = tmp48(View5, obj12);
        }
      }
      items23[1] = tmp48Result3;
      let str = "stream";
      const tmp4Result5 = setMode(tmp2[20]);
      if (tmp8) {
        str = "video";
      }
      const obj14 = { kind: str, ownerId: stateFromStores, mode: HIDDEN, onToggleVolume: callback1, onStopWatching: callback2, onOpenCall: callback3 };
      items23[2] = closure_16(tmp4Result5, obj14);
      tmp49Result = tmp49(View3, obj8);
    } else {
      tmp49Result = null;
    }
  }
  items25 = [tmp49Result, ];
  let tmp48Result4 = null;
  if (pIPState.showSecondaryPIP) {
    const obj15 = { style: items26, children: closure_16(View7, obj16) };
    items26 = [, , ];
    ({ pipContentWrapper: arr27[0], inAppElevationShadow: arr27[1] } = voicePanelPIPStyles);
    items26[2] = pipWrapperStyles;
    const View6 = tmp4(tmp2[27]).View;
    const merged1 = Object.assign(memo1);
    obj16 = { style: items27, children: closure_16(GestureDetector3, obj17) };
    items27 = [voicePanelPIPStyles.pipMask, animatedStyle];
    View7 = tmp4(tmp2[27]).View;
    obj17 = { gesture: secondaryPIPGesture, children: closure_16(tmp4Result6, obj18) };
    GestureDetector3 = tmp(tmp2[32]).GestureDetector;
    obj18 = { style: showVideo.absoluteFill, children: closure_16(setMode(tmp2[36]), {}) };
    tmp4Result6 = setMode(tmp2[35]);
    tmp48Result4 = tmp48(View6, obj15);
  }
  items25[1] = tmp48Result4;
  return closure_16(View, obj5);
}
function renderVoicePanelDockPIPWrapper(arg0, arg1, transitionState, transitionCleanUp) {
  const obj = { transitionState, transitionCleanUp };
  return authStore4(closure_27, obj, arg0);
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const StyleSheet = react_native.StyleSheet;
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const VoicePanelPIPModes = VoicePanelPIPConstants.VoicePanelPIPModes;
const DOCK_FADE_TIMING = VoicePanelDockConstants.DOCK_FADE_TIMING;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const ParticipantTypes = CallConstants.ParticipantTypes;
const isLaunched = FramesConstants.isLaunched;
({ jsx: closure_16, jsxs: closure_17 } = Fragment);
let closure_18 = { width: 16, height: 9 };
const openCall = "openCall";
const stopWatching = "stopWatching";
let closure_21 = { code: "(function VoicePanelDockPIPTsx1(){let[getVoicePanelPIPBorderRadius,pipState]=this.__closure;return{borderRadius:getVoicePanelPIPBorderRadius(pipState.width,pipState.height)};})" };
let closure_22 = { code: "(function VoicePanelDockPIPTsx2(){let[dockContentSwap]=this.__closure;return dockContentSwap.get()>0;})" };
let closure_23 = { code: "(function VoicePanelDockPIPTsx3(isSwapped,wasSwapped){let[pullOpacity,withTiming,DOCK_FADE_TIMING]=this.__closure;if(wasSwapped==null||isSwapped===wasSwapped)return;pullOpacity.set(withTiming(isSwapped?0:1,DOCK_FADE_TIMING));})" };
let closure_24 = { code: "(function VoicePanelDockPIPTsx4(){let[exitOpacity,pullOpacity]=this.__closure;return{opacity:exitOpacity.get()*pullOpacity.get()};})" };
let closure_26 = { code: "(function VoicePanelDockPIPTsx5(finished){let[scheduleOnRN,setHasFadedOut]=this.__closure;if(finished){scheduleOnRN(setHasFadedOut,true);}})" };
let closure_27 = react.memo(function VoicePanelDockPIPWrapper(transitionCleanUp) {
  let closure_5;
  transitionCleanUp = transitionCleanUp.transitionCleanUp;
  let panelLayoutCommitted;
  let exitOpacity;
  let first;
  react = undefined;
  const transitionState = transitionCleanUp.transitionState;
  const channelId = react.useContext(panelLayoutCommitted(exitOpacity[14])).channelId;
  const stream = panelLayoutCommitted(exitOpacity[37])(channelId);
  const showVideo = panelLayoutCommitted(exitOpacity[38])(channelId);
  const obj2 = transitionCleanUp(exitOpacity[17]);
  panelLayoutCommitted = obj2.usePIPTileHandoff().panelLayoutCommitted;
  const tmp3 = transitionState === transitionCleanUp(exitOpacity[39]).TransitionStates.YEETED;
  let closure_2 = tmp3;
  const obj3 = transitionCleanUp(exitOpacity[27]);
  exitOpacity = obj3.useSharedValue(1);
  const tmp5 = first(react.useState(false), 2);
  first = tmp5[0];
  react = tmp7;
  const tmp8 = !tmp3 && first;
  if (tmp8) {
    tmp5[1](false);
  }
  let items = [tmp3, exitOpacity];
  const effect = obj.useEffect(() => {
    let tmp10;
    let tmp11;
    let tmp12;
    let tmp = exitOpacity;
    const withTiming = timing_timing.withTiming;
    if (closure_2) {
      const items = [closure_26, _mod1705.scheduleOnRN, closure_5];
      let c0;
      let c1;
      [tmp10, tmp11, tmp12] = items;
      class VoicePanelDockPIPTsx5 {
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
      const items1 = [tmp11, tmp12];
      VoicePanelDockPIPTsx5.__closure = items1;
      VoicePanelDockPIPTsx5.__workletHash = 17012667928419;
      VoicePanelDockPIPTsx5.__initData = tmp10;
      const result = set(withTiming(0, tmp3, "respect-motion-settings", VoicePanelDockPIPTsx5));
    } else {
      const result1 = set(withTiming(1, tmp3));
    }
  }, items);
  let items1 = [tmp3, first, panelLayoutCommitted, transitionCleanUp];
  const effect1 = obj.useEffect(() => {
    const tmp = closure_2 && first && panelLayoutCommitted;
    if (tmp) {
      transitionCleanUp();
    }
  }, items1);
  return closure_16(VoicePanelDockPIP, { stream, showVideo, exitOpacity });
});
const memoResult = react.memo(function VoicePanelDockPIPProvider() {
  let IN_APP;
  let TransitionItem;
  let _undefined;
  let c3;
  let closure_4;
  let obj5;
  let pIPState;
  let tmp14;
  let tmp7;
  const f135645 = () => {
    let targetDimensions = layoutManager.getTargetDimensions(streamKey);
    if (targetDimensions === layoutManager.getDefaultTargetDimensions()) {
      targetDimensions = closure_18;
    }
    return targetDimensions;
  };
  let obj = IN_APP;
  const channelId = IN_APP.useContext(pIPState(11394)).channelId;
  const tmp2 = pIPState(19734)(channelId);
  const streamKey = tmp2.streamKey;
  pIPState = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  IN_APP = undefined;
  let width;
  let height;
  let containerHeight;
  const isWatching = tmp2.isWatching;
  const tmp3 = pIPState(19736)(channelId);
  const obj2 = streamKey(19613);
  pIPState = obj2.usePIPState();
  const layoutManager = IN_APP.useContext(pIPState(11394)).layoutManager;
  [tmp7, c3] = _slicedToArray(IN_APP.useState(f135645), 2);
  const items = [layoutManager, streamKey];
  const tmp6 = _slicedToArray(IN_APP.useState(f135645), 2);
  const effect = IN_APP.useEffect(() => {
    const f143155 = (safeAreaState) => {
      let targetDimensions = closure_1_2.getTargetDimensions(closure_1_0);
      if (targetDimensions === closure_1_2.getDefaultTargetDimensions()) {
        targetDimensions = closure_2_18;
      }
      const obj = streamKey(_undefined[15]);
      if (obj.cheapWorkletShallowEqual(safeAreaState, targetDimensions)) {
        targetDimensions = safeAreaState;
      }
      return targetDimensions;
    };
    _undefined(f143155);
    return layoutManager.subscribeFromItem(function updateTargetDimensions() {
      _undefined(f143155);
    });
  }, items);
  _slicedToArray = tmp9;
  IN_APP = undefined;
  if (pIPState.mode === VoicePanelPIPModes.IN_APP) {
    if (null != streamKey) {
      IN_APP = VoicePanelPIPModes.IN_APP;
    }
  }
  const computePIPSize = tmp4(19523).computePIPSize;
  streamKey(19523);
  if (!isWatching) {
    tmp7 = closure_18;
  }
  size = computePIPSize(tmp7, false, false, pIPState.showSecondaryPIP);
  width = size.width;
  height = size.height;
  containerHeight = size.containerHeight;
  const items1 = [null == streamKey && tmp3, pIPState, streamKey, IN_APP, width, height, containerHeight];
  const memo = obj.useMemo(() => {
    let tmp7;
    const obj = {};
    const merged = Object.assign(pIPState);
    if (closure_4) {
      obj.mode = IN_APP;
      tmp7 = obj;
    } else {
      obj.id = streamKey;
      obj.mode = IN_APP;
      obj.width = width;
      obj.height = height;
      obj.containerHeight = containerHeight;
      tmp7 = obj;
    }
    return tmp7;
  }, items1);
  const obj3 = { value: memo, children: closure_16(TransitionItem, obj5) };
  const Provider = tmp4(19613).VoicePanelPIPStateContext.Provider;
  TransitionItem = tmp4(5231).TransitionItem;
  if (null != memo.mode) {
    tmp14 = { pipMode: memo.mode };
  }
  obj5 = { item: tmp14, renderItem: renderVoicePanelDockPIPWrapper };
  return closure_16(Provider, obj3);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockPIP.tsx");

export default memoResult;
