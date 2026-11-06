// Module ID: 19594
// Function ID: 19595
// Name: VoicePanelDockPIP
// Dependencies: [32, 19, 17, 6926, 1385, 11381, 19414, 5811, 6927, 21, 19503, 11380, 10227, 19413, 19595, 19603, 19604, 8000, 5868, 9693, 1113, 3184, 1652, 504, 6199, 11076, 11898, 5450, 19596, 19606, 7048, 19600, 19608, 5229, 2]

// Module 19594 (VoicePanelDockPIP)
import react_native from "react-native" /* 17 */;
import intl5 from "intl" /* 1113 */;
import _modDef3184 from "module_3184" /* 3184 */;
import native from "native" /* 5229 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5811 */;
import toastUtils from "toastUtils" /* 5868 */;
import FramesConstants from "FramesConstants" /* 6927 */;
import StreamActionCreators from "StreamActionCreators" /* 8000 */;
import ScreenIcon from "ScreenIcon" /* 9693 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 11076 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11381 */;
import EmbeddedActivitiesActionCreatorsAll from "EmbeddedActivitiesActionCreators" /* 11898 */;
import VoicePanelPIPConstants from "VoicePanelPIPConstants" /* 19414 */;
import VoicePanelDockPIPOverlay from "VoicePanelDockPIPOverlay" /* 19604 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import FramesStore from "FramesStore" /* 6926 */;
import UserStore from "UserStore" /* 1385 */;
import Fragment from "Fragment" /* 21 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let closure_14;
let map1;
function VoicePanelDockPIP(stream) {
  let GestureDetector;
  let GestureDetector3;
  let HIDDEN;
  let View2;
  let View4;
  let View7;
  let _undefined;
  let c6;
  let channelId;
  let containerGesture;
  let containerStyles;
  let gestureState;
  let guildId;
  let isConnecting;
  let isWatching;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items18;
  let mainPIPGesture;
  let mainPIPVisibilityStyles;
  let obj10;
  let obj13;
  let obj16;
  let obj17;
  let obj18;
  let obj6;
  let obj7;
  let pipWrapperStyles;
  let secondaryPIPGesture;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp31Result;
  let tmp4Result3;
  let tmp4Result4;
  stream = stream.stream;
  let setMode;
  let setFocused;
  let streamKey;
  let showStream;
  StyleSheet = undefined;
  let onMainTileTap;
  let callback2;
  let callback3;
  let name;
  let stateFromStores1;
  let callback4;
  let tmp = setMode;
  let tmp2 = streamKey;
  let obj = setMode(streamKey[14]);
  const voicePanelPIPStyles = obj.useVoicePanelPIPStyles();
  let obj2 = showStream;
  const context = showStream.useContext(setFocused(streamKey[11]));
  setMode = context.setMode;
  setFocused = context.setFocused;
  const showControls = context.showControls;
  ({ channelId, guildId } = context);
  let obj3 = setMode(streamKey[10]);
  const pIPState = obj3.usePIPState();
  streamKey = stream.streamKey;
  const ownerId = stream.ownerId;
  ({ isWatching, isConnecting } = stream);
  const tmp7 = setFocused(streamKey[15])(stream);
  showStream = tmp7.showStream;
  const onStreamReady = tmp7.onStreamReady;
  [HIDDEN, c6] = ownerId(showStream.useState(setMode(streamKey[16]).VoicePanelDockPIPOverlayModes.HIDDEN), 2);
  const tmp8 = ownerId(showStream.useState(setMode(streamKey[16]).VoicePanelDockPIPOverlayModes.HIDDEN), 2);
  if (!showStream) {
    HIDDEN = tmp(tmp2[16]).VoicePanelDockPIPOverlayModes.HIDDEN;
  }
  const tmpResult = tmp(tmp2[14]);
  const pIPTileHandoff = tmpResult.usePIPTileHandoff();
  const isMainPIPActive = pIPTileHandoff.isMainPIPActive;
  let tmp10 = isMainPIPActive;
  const cardArrivedInPIP = pIPTileHandoff.cardArrivedInPIP;
  if (!isMainPIPActive) {
    tmp10 = !pIPTileHandoff.panelLayoutCommitted;
  }
  let items = [showStream];
  onMainTileTap = obj2.useCallback(() => {
    const tmp = showStream;
    if (tmp) {
      const tmp2 = _undefined;
      _undefined((arg0) => {
        let HIDDEN;
        if (arg0 === setMode(streamKey[16]).VoicePanelDockPIPOverlayModes.HIDDEN) {
          HIDDEN = tmp(tmp2[16]).VoicePanelDockPIPOverlayModes.CONTROLS;
        } else {
          HIDDEN = tmp(tmp2[16]).VoicePanelDockPIPOverlayModes.HIDDEN;
        }
        return HIDDEN;
      });
    }
  }, items);
  const items1 = [streamKey];
  const callback1 = obj2.useCallback(() => {
    const tmp = _undefined((arg0) => {
      let VOLUME;
      if (arg0 === setMode(streamKey[16]).VoicePanelDockPIPOverlayModes.VOLUME) {
        VOLUME = tmp(tmp2[16]).VoicePanelDockPIPOverlayModes.CONTROLS;
      } else {
        VOLUME = tmp(tmp2[16]).VoicePanelDockPIPOverlayModes.VOLUME;
      }
      return VOLUME;
    });
  }, []);
  callback2 = obj2.useCallback(() => {
    let intl;
    if (null != streamKey) {
      _undefined(VoicePanelDockPIPOverlay.VoicePanelDockPIPOverlayModes.HIDDEN);
      const obj = StreamActionCreators;
      obj.stopStream(tmp);
      const obj2 = { icon: ScreenIcon.ScreenIcon, text: intl.string(_modDef3184.gLoosj) };
      const showToast = toastUtils.showToast;
      toastUtils;
      intl = intl5.intl;
      showToast(obj2);
    }
  }, items1);
  const items2 = [streamKey, setFocused, setMode, showControls];
  callback3 = obj2.useCallback(() => {
    _undefined(VoicePanelDockPIPOverlay.VoicePanelDockPIPOverlayModes.HIDDEN);
    if (null != streamKey) {
      setFocused(tmp2);
    }
    showControls();
    setMode(VoicePanelModes.PANEL);
  }, items2);
  const mode = pIPState.mode;
  let tmp16 = tmp10;
  const usePIPGesture = tmp(tmp2[14]).usePIPGesture;
  tmp(tmp2[14]);
  if (tmp10) {
    let tmp17 = !isMainPIPActive;
    if (isMainPIPActive) {
      tmp17 = cardArrivedInPIP;
    }
    tmp16 = tmp17;
  }
  let obj4 = { onMainTileTap, dragEnabled: HIDDEN !== tmp(tmp2[16]).VoicePanelDockPIPOverlayModes.VOLUME };
  const pIPGesture = usePIPGesture(mode, tmp10, tmp16, obj4);
  ({ pipWrapperStyles, containerStyles, mainPIPVisibilityStyles, mainPIPGesture, secondaryPIPGesture, containerGesture, gestureState } = pIPGesture);
  const tmpResult7 = tmp(tmp2[14]);
  const pIPLayoutTransition = tmpResult7.usePIPLayoutTransition(gestureState);
  const items3 = [closure_18, , ];
  const useAnimatedStyle = tmp(tmp2[22]).useAnimatedStyle;
  tmp(tmp2[22]);
  items3[1] = tmp(tmp2[13]).getVoicePanelPIPBorderRadius;
  items3[2] = pIPState;
  let c0;
  let c1;
  [tmp21, tmp22, tmp23] = items3;
  class VoicePanelDockPIPTsx1 {
    constructor() {
      const obj = { borderRadius: _undefined(_undefined2.width, _undefined2.height) };
      return obj;
    }
  }
  const items4 = [tmp22, tmp23];
  VoicePanelDockPIPTsx1.__closure = items4;
  VoicePanelDockPIPTsx1.__workletHash = 7333687277052;
  VoicePanelDockPIPTsx1.__initData = tmp21;
  const animatedStyle = useAnimatedStyle(VoicePanelDockPIPTsx1);
  const items5 = [callback2];
  const items6 = [ownerId];
  const tmpResult9 = tmp(tmp2[23]);
  const stateFromStores = tmpResult9.useStateFromStores(items5, () => UserStore.getUser(ownerId), items6);
  const tmp4Result = setFocused(tmp2[24]);
  name = tmp4Result.useName(guildId, channelId, stateFromStores);
  const items7 = [showStream, ownerId, name, callback3, callback2, onMainTileTap];
  const memo = obj2.useMemo(() => {
    let intl2;
    let intl3;
    let intl4;
    let items;
    let obj;
    const tmp = showStream;
    if (tmp) {
      let formatToPlainStringResult;
      if (null != ownerId) {
        const intl = intl5.intl;
        const obj2 = { username: name };
        formatToPlainStringResult = intl.formatToPlainString(_modDef3184["g9x8/M"], obj2);
      }
      const obj3 = {
        accessible: true,
        accessibilityRole: "button",
        accessibilityLabel: formatToPlainStringResult,
        accessibilityHint: intl2.string(_modDef3184.IJMHj5),
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
      intl2 = intl5.intl;
      items = [{ name: "activate" }, , ];
      const obj4 = { name: openCall, label: intl3.string(_modDef3184.MPtef8) };
      intl3 = intl5.intl;
      items[1] = obj4;
      const obj5 = { name: stopWatching, label: intl4.string(intl5.t.q3O3J8) };
      intl4 = intl5.intl;
      items[2] = obj5;
      obj = obj3;
    } else {
      obj = {};
    }
    return obj;
  }, items7);
  const items8 = [onMainTileTap];
  const tmpResult10 = tmp(tmp2[23]);
  stateFromStores1 = tmpResult10.useStateFromStores(items8, () => {
    const mainFrame = callback.getMainFrame();
    let id = null;
    if (callback4(mainFrame)) {
      id = mainFrame.id;
    }
    return id;
  });
  const items9 = [stateFromStores1];
  callback4 = obj2.useCallback(() => {
    if (null != stateFromStores1) {
      const obj2 = FramesActionCreatorsDefault;
      obj2.updateFramePanelMode(tmp, ActivityPanelModes.PANEL);
    } else {
      const obj = EmbeddedActivitiesActionCreatorsAll;
      const result = obj.updateActivityPanelMode(ActivityPanelModes.PANEL);
    }
  }, items9);
  const items10 = [callback4];
  const memo1 = obj2.useMemo(() => {
    let intl;
    let items;
    const obj = { accessible: true, accessibilityLabel: intl.string(intl5.t["3ejJer"]), accessibilityActions: items, onAccessibilityAction: callback4 };
    intl = intl5.intl;
    items = [{ name: "activate" }];
    return obj;
  }, items10);
  let obj5 = { pointerEvents: "box-none", style: items11, layout: pIPLayoutTransition, children: closure_13(GestureDetector, obj6) };
  items11 = [voicePanelPIPStyles.container, containerStyles];
  const View = tmp4(tmp2[22]).View;
  obj6 = { gesture: containerGesture, children: closure_14(View2, obj7) };
  GestureDetector = tmp(tmp2[27]).GestureDetector;
  let tmp32Result = null;
  obj7 = { pointerEvents: "box-none", style: voicePanelPIPStyles.multiPipContainer, layout: pIPLayoutTransition, children: items16 };
  View2 = tmp4(tmp2[22]).View;
  if (tmp10) {
    tmp32Result = null;
    if (null != ownerId) {
      const obj8 = { style: items12, pointerEvents: "box-none", layout: pIPLayoutTransition, children: items14 };
      items12 = [, , , ];
      ({ pipContentWrapper: arr13[0], inAppElevationShadow: arr13[1] } = voicePanelPIPStyles);
      items12[2] = pipWrapperStyles;
      items12[3] = mainPIPVisibilityStyles;
      const View3 = tmp4(tmp2[22]).View;
      const obj9 = { gesture: mainPIPGesture, children: closure_13(View4, obj10) };
      const GestureDetector2 = tmp(tmp2[27]).GestureDetector;
      obj10 = { style: items13, layout: pIPLayoutTransition, children: tmp31Result };
      items13 = [voicePanelPIPStyles.pipMask, animatedStyle];
      View4 = tmp4(tmp2[22]).View;
      const merged = Object.assign(memo);
      tmp31Result = null;
      if (isWatching) {
        const obj11 = { layoutTransition: pIPLayoutTransition, onStreamReady };
        tmp31Result = tmp31(tmp4(tmp2[28]), obj11);
      }
      items14 = [closure_13(GestureDetector2, obj9), , ];
      const obj12 = { style: items15, pointerEvents: "box-none", children: closure_13(tmp4Result3, obj13) };
      items15 = [voicePanelPIPStyles.pipMask, animatedStyle];
      const View5 = tmp4(tmp2[22]).View;
      obj13 = { ownerId, streamKey, isConnecting, visible: !showStream };
      tmp4Result3 = setFocused(tmp2[29]);
      if (!isConnecting) {
        isConnecting = isWatching;
      }
      items14[1] = closure_13(View5, obj12);
      const obj14 = { ownerId, mode: HIDDEN, onToggleVolume: callback1, onStopWatching: callback2, onOpenCall: callback3 };
      items14[2] = closure_13(setFocused(tmp2[16]), obj14);
      tmp32Result = tmp32(View3, obj8);
    }
  }
  items16 = [tmp32Result, ];
  let tmp31Result2 = null;
  if (pIPState.showSecondaryPIP) {
    const obj15 = { style: items17, children: closure_13(View7, obj16) };
    items17 = [, , ];
    ({ pipContentWrapper: arr18[0], inAppElevationShadow: arr18[1] } = voicePanelPIPStyles);
    items17[2] = pipWrapperStyles;
    const View6 = tmp4(tmp2[22]).View;
    const merged1 = Object.assign(memo1);
    obj16 = { style: items18, children: closure_13(GestureDetector3, obj17) };
    items18 = [voicePanelPIPStyles.pipMask, animatedStyle];
    View7 = tmp4(tmp2[22]).View;
    obj17 = { gesture: secondaryPIPGesture, children: closure_13(tmp4Result4, obj18) };
    GestureDetector3 = tmp(tmp2[27]).GestureDetector;
    obj18 = { style: StyleSheet.absoluteFill, children: closure_13(setFocused(tmp2[31]), {}) };
    tmp4Result4 = setFocused(tmp2[30]);
    tmp31Result2 = tmp31(View6, obj15);
  }
  items16[1] = tmp31Result2;
  return closure_13(View, obj5);
}
function renderVoicePanelDockPIPWrapper(arg0, arg1, transitionState, transitionCleanUp) {
  const obj = { transitionState, transitionCleanUp };
  return map1(closure_20, obj, arg0);
}
let StyleSheet = react_native.StyleSheet;
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const VoicePanelPIPModes = VoicePanelPIPConstants.VoicePanelPIPModes;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const isLaunched = FramesConstants.isLaunched;
({ jsx: map1, jsxs: closure_14 } = Fragment);
let closure_15 = { width: 16, height: 9 };
const openCall = "openCall";
const stopWatching = "stopWatching";
let closure_18 = { code: "(function VoicePanelDockPIPTsx1(){let[getVoicePanelPIPBorderRadius,pipState]=this.__closure;return{borderRadius:getVoicePanelPIPBorderRadius(pipState.width,pipState.height)};})" };
let closure_20 = react.memo(function VoicePanelDockPIPWrapper(transitionState) {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  const stream = transitionCleanUp(19608)(react.useContext(transitionCleanUp(11380)).channelId);
  const obj = transitionState(19595);
  const panelLayoutCommitted = obj.usePIPTileHandoff().panelLayoutCommitted;
  const items = [transitionState, panelLayoutCommitted, transitionCleanUp];
  const effect = react.useEffect(() => {
    const tmp = transitionState === native.TransitionStates.YEETED && panelLayoutCommitted;
    if (tmp) {
      transitionCleanUp();
    }
  }, items);
  return closure_13(VoicePanelDockPIP, { stream });
});
const memoResult = react.memo(function VoicePanelDockPIPProvider() {
  let TransitionItem;
  let _undefined;
  let c3;
  let obj5;
  let pIPState;
  let tmp14;
  let tmp6;
  let width;
  const f134761 = () => {
    let targetDimensions = layoutManager.getTargetDimensions(streamKey);
    if (targetDimensions === layoutManager.getDefaultTargetDimensions()) {
      targetDimensions = closure_15;
    }
    return targetDimensions;
  };
  let obj = width;
  const tmp2 = pIPState(19608)(width.useContext(pIPState(11380)).channelId);
  const streamKey = tmp2.streamKey;
  dependencyMap = undefined;
  let IN_APP;
  width = undefined;
  let height;
  let containerHeight;
  const isWatching = tmp2.isWatching;
  const obj2 = streamKey(19503);
  pIPState = obj2.usePIPState();
  const layoutManager = width.useContext(pIPState(11380)).layoutManager;
  [tmp6, c3] = IN_APP(width.useState(f134761), 2);
  const items = [layoutManager, streamKey];
  IN_APP(width.useState(f134761), 2);
  const effect = width.useEffect(() => {
    const f142229 = (safeAreaState) => {
      let targetDimensions = closure_1_2.getTargetDimensions(closure_1_0);
      if (targetDimensions === closure_1_2.getDefaultTargetDimensions()) {
        targetDimensions = closure_2_15;
      }
      const obj = streamKey(_undefined[12]);
      if (obj.cheapWorkletShallowEqual(safeAreaState, targetDimensions)) {
        targetDimensions = safeAreaState;
      }
      return targetDimensions;
    };
    _undefined(f142229);
    return layoutManager.subscribeFromItem(function updateTargetDimensions() {
      _undefined(f142229);
    });
  }, items);
  IN_APP = undefined;
  if (pIPState.mode === VoicePanelPIPModes.IN_APP) {
    if (null != streamKey) {
      IN_APP = tmp8.IN_APP;
    }
  }
  const computePIPSize = streamKey(19413).computePIPSize;
  streamKey(19413);
  if (!isWatching) {
    tmp6 = closure_15;
  }
  size = computePIPSize(tmp6, false, false, pIPState.showSecondaryPIP);
  width = size.width;
  height = size.height;
  containerHeight = size.containerHeight;
  const items1 = [pIPState, streamKey, IN_APP, width, height, containerHeight];
  const memo = obj.useMemo(() => {
    const obj = { id: streamKey, mode: IN_APP, width, height, containerHeight };
    const merged = Object.assign(pIPState);
    return obj;
  }, items1);
  const obj3 = { value: memo, children: closure_13(TransitionItem, obj5) };
  const Provider = tmp3(19503).VoicePanelPIPStateContext.Provider;
  TransitionItem = tmp3(5229).TransitionItem;
  if (null != memo.mode) {
    tmp14 = { pipMode: memo.mode };
  }
  obj5 = { item: tmp14, renderItem: renderVoicePanelDockPIPWrapper };
  return closure_13(Provider, obj3);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockPIP.tsx");

export default memoResult;
