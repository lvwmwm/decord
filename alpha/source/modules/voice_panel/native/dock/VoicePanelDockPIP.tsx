// Module ID: 19708
// Function ID: 19709
// Name: VoicePanelDockPIP
// Dependencies: [32, 19, 17, 6901, 6904, 1385, 11372, 19515, 5783, 5807, 6905, 21, 19604, 11371, 10216, 19514, 19709, 19717, 504, 19718, 19720, 7982, 5840, 9681, 1113, 3184, 1652, 6175, 11070, 11898, 5422, 19710, 19721, 7026, 19714, 19722, 19724, 5201, 2]

// Module 19708 (VoicePanelDockPIP)
import react_native from "react-native" /* 17 */;
import intl5 from "intl" /* 1113 */;
import _modDef3184 from "module_3184" /* 3184 */;
import native from "native" /* 5201 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5783 */;
import CallConstants from "CallConstants" /* 5807 */;
import toastUtils from "toastUtils" /* 5840 */;
import FramesConstants from "FramesConstants" /* 6905 */;
import StreamActionCreators from "StreamActionCreators" /* 7982 */;
import ScreenIcon from "ScreenIcon" /* 9681 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 11070 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11372 */;
import EmbeddedActivitiesActionCreatorsAll from "EmbeddedActivitiesActionCreators" /* 11898 */;
import VoicePanelPIPConstants from "VoicePanelPIPConstants" /* 19515 */;
import VoicePanelDockPIPOverlay from "VoicePanelDockPIPOverlay" /* 19718 */;
import VoicePanelDockActionCreators from "VoicePanelDockActionCreators" /* 19720 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6901 */;
import FramesStore from "FramesStore" /* 6904 */;
import UserStore from "UserStore" /* 1385 */;
import Fragment from "Fragment" /* 21 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let closure_15;
let closure_16;
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
  let gestureState;
  let isConnecting;
  let isWatching;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items18;
  let items19;
  let items20;
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
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp34Result;
  let tmp4Result4;
  let tmp4Result6;
  stream = stream.stream;
  let channelId;
  let setMode;
  let showControls;
  let streamKey;
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
  let showVideo = stream.showVideo;
  let obj = channelId(showControls[16]);
  const voicePanelPIPStyles = obj.useVoicePanelPIPStyles();
  let obj2 = streamKey;
  const context = streamKey.useContext(setMode(showControls[13]));
  channelId = context.channelId;
  setMode = context.setMode;
  const setFocused = context.setFocused;
  showControls = context.showControls;
  const guildId = context.guildId;
  let obj3 = channelId(showControls[12]);
  const pIPState = obj3.usePIPState();
  streamKey = stream.streamKey;
  ({ ownerId, isWatching, isConnecting } = stream);
  const tmp7 = setMode(showControls[17])(stream);
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
  const tmpResult = tmp(tmp2[18]);
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
  [HIDDEN, c9] = pIPState(obj2.useState(tmp(tmp2[19]).VoicePanelDockPIPOverlayModes.HIDDEN), 2);
  const tmp11 = pIPState(obj2.useState(tmp(tmp2[19]).VoicePanelDockPIPOverlayModes.HIDDEN), 2);
  if (!(tmp8 || showStream)) {
    HIDDEN = tmp(tmp2[19]).VoicePanelDockPIPOverlayModes.HIDDEN;
  }
  const tmpResult7 = tmp(tmp2[16]);
  const pIPTileHandoff = tmpResult7.usePIPTileHandoff();
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
        if (arg0 === channelId(showControls[19]).VoicePanelDockPIPOverlayModes.HIDDEN) {
          HIDDEN = tmp(tmp2[19]).VoicePanelDockPIPOverlayModes.CONTROLS;
        } else {
          HIDDEN = tmp(tmp2[19]).VoicePanelDockPIPOverlayModes.HIDDEN;
        }
        return HIDDEN;
      });
    }
  }, items2);
  const items3 = [tmp8, streamKey];
  const callback1 = obj2.useCallback(() => {
    const tmp = _undefined((arg0) => {
      let VOLUME;
      if (arg0 === channelId(showControls[19]).VoicePanelDockPIPOverlayModes.VOLUME) {
        VOLUME = tmp(tmp2[19]).VoicePanelDockPIPOverlayModes.CONTROLS;
      } else {
        VOLUME = tmp(tmp2[19]).VoicePanelDockPIPOverlayModes.VOLUME;
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
  const usePIPGesture = tmp(tmp2[16]).usePIPGesture;
  tmp(tmp2[16]);
  if (tmp13) {
    let tmp20 = !isMainPIPActive;
    if (isMainPIPActive) {
      tmp20 = cardArrivedInPIP;
    }
    tmp19 = tmp20;
  }
  let obj4 = { onMainTileTap, dragEnabled: HIDDEN !== tmp(tmp2[19]).VoicePanelDockPIPOverlayModes.VOLUME };
  const pIPGesture = usePIPGesture(mode, tmp13, tmp19, obj4);
  ({ pipWrapperStyles, containerStyles, mainPIPVisibilityStyles, mainPIPGesture, secondaryPIPGesture, containerGesture, gestureState } = pIPGesture);
  const tmpResult9 = tmp(tmp2[16]);
  const pIPLayoutTransition = tmpResult9.usePIPLayoutTransition(gestureState);
  const items5 = [closure_20, , ];
  const useAnimatedStyle = tmp(tmp2[26]).useAnimatedStyle;
  tmp(tmp2[26]);
  items5[1] = tmp(tmp2[15]).getVoicePanelPIPBorderRadius;
  items5[2] = pIPState;
  let c0;
  let c1;
  [tmp24, tmp25, tmp26] = items5;
  class VoicePanelDockPIPTsx1 {
    constructor() {
      const obj = { borderRadius: _undefined(_undefined2.width, _undefined2.height) };
      return obj;
    }
  }
  const items6 = [tmp25, tmp26];
  VoicePanelDockPIPTsx1.__closure = items6;
  VoicePanelDockPIPTsx1.__workletHash = 7333687277052;
  VoicePanelDockPIPTsx1.__initData = tmp24;
  const animatedStyle = useAnimatedStyle(VoicePanelDockPIPTsx1);
  const items7 = [c9];
  const items8 = [stateFromStores];
  const tmpResult11 = tmp(tmp2[18]);
  const stateFromStores1 = tmpResult11.useStateFromStores(items7, () => UserStore.getUser(stateFromStores), items8);
  const tmp4Result = setMode(tmp2[27]);
  name = tmp4Result.useName(guildId, channelId, stateFromStores1);
  const items9 = [tmp9, tmp8, stateFromStores, name, callback3, callback2, onMainTileTap];
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
  }, items9);
  const items10 = [stateFromStores];
  const tmpResult12 = tmp(tmp2[18]);
  stateFromStores2 = tmpResult12.useStateFromStores(items10, () => {
    const mainFrame = stateFromStores.getMainFrame();
    let id = null;
    if (stateFromStores2(mainFrame)) {
      id = mainFrame.id;
    }
    return id;
  });
  const items11 = [stateFromStores2];
  callback4 = obj2.useCallback(() => {
    if (null != stateFromStores2) {
      const obj2 = FramesActionCreatorsDefault;
      obj2.updateFramePanelMode(tmp, ActivityPanelModes.PANEL);
    } else {
      const obj = EmbeddedActivitiesActionCreatorsAll;
      const result = obj.updateActivityPanelMode(ActivityPanelModes.PANEL);
    }
  }, items11);
  const items12 = [callback4];
  const memo1 = obj2.useMemo(() => {
    let intl;
    let items;
    const obj = { accessible: true, accessibilityLabel: intl.string(intl5.t["3ejJer"]), accessibilityActions: items, onAccessibilityAction: callback4 };
    intl = intl5.intl;
    items = [{ name: "activate" }];
    return obj;
  }, items12);
  let obj5 = { pointerEvents: "box-none", style: items13, layout: pIPLayoutTransition, children: callback4(GestureDetector, obj6) };
  items13 = [voicePanelPIPStyles.container, containerStyles];
  const View = tmp4(tmp2[26]).View;
  obj6 = { gesture: containerGesture, children: closure_16(View2, obj7) };
  GestureDetector = tmp(tmp2[30]).GestureDetector;
  let tmp35Result = null;
  obj7 = { pointerEvents: "box-none", style: voicePanelPIPStyles.multiPipContainer, layout: pIPLayoutTransition, children: items18 };
  View2 = tmp4(tmp2[26]).View;
  if (tmp13) {
    if (tmp8) {
      const obj8 = { style: items14, pointerEvents: "box-none", layout: pIPLayoutTransition, children: items16 };
      items14 = [, , , ];
      ({ pipContentWrapper: arr15[0], inAppElevationShadow: arr15[1] } = voicePanelPIPStyles);
      items14[2] = pipWrapperStyles;
      items14[3] = mainPIPVisibilityStyles;
      const View3 = tmp4(tmp2[26]).View;
      const obj9 = { gesture: mainPIPGesture, children: callback4(View4, obj10) };
      const GestureDetector2 = tmp(tmp2[30]).GestureDetector;
      obj10 = { style: items15, layout: pIPLayoutTransition, children: tmp34Result };
      items15 = [voicePanelPIPStyles.pipMask, animatedStyle];
      View4 = tmp4(tmp2[26]).View;
      const merged = Object.assign(memo);
      if (tmp8) {
        const obj11 = { layoutTransition: pIPLayoutTransition, onStreamReady };
        tmp34Result = tmp34(tmp4(tmp2[31]), obj11);
      } else {
        tmp34Result = null;
      }
      items16 = [callback4(GestureDetector2, obj9), , ];
      let tmp34Result3 = null;
      if (!tmp8) {
        tmp34Result3 = null;
        if (null != ownerId) {
          const obj12 = { style: items17, pointerEvents: "box-none", children: callback4(tmp4Result4, obj13) };
          items17 = [voicePanelPIPStyles.pipMask, animatedStyle];
          const View5 = tmp4(tmp2[26]).View;
          obj13 = { ownerId, streamKey, isConnecting, visible: !showStream };
          tmp4Result4 = setMode(tmp2[32]);
          if (!isConnecting) {
            isConnecting = isWatching;
          }
          tmp34Result3 = tmp34(View5, obj12);
        }
      }
      items16[1] = tmp34Result3;
      let str = "stream";
      const tmp4Result5 = setMode(tmp2[19]);
      if (tmp8) {
        str = "video";
      }
      const obj14 = { kind: str, ownerId: stateFromStores, mode: HIDDEN, onToggleVolume: callback1, onStopWatching: callback2, onOpenCall: callback3 };
      items16[2] = callback4(tmp4Result5, obj14);
      tmp35Result = tmp35(View3, obj8);
    } else {
      tmp35Result = null;
    }
  }
  items18 = [tmp35Result, ];
  let tmp34Result4 = null;
  if (pIPState.showSecondaryPIP) {
    const obj15 = { style: items19, children: callback4(View7, obj16) };
    items19 = [, , ];
    ({ pipContentWrapper: arr20[0], inAppElevationShadow: arr20[1] } = voicePanelPIPStyles);
    items19[2] = pipWrapperStyles;
    const View6 = tmp4(tmp2[26]).View;
    const merged1 = Object.assign(memo1);
    obj16 = { style: items20, children: callback4(GestureDetector3, obj17) };
    items20 = [voicePanelPIPStyles.pipMask, animatedStyle];
    View7 = tmp4(tmp2[26]).View;
    obj17 = { gesture: secondaryPIPGesture, children: callback4(tmp4Result6, obj18) };
    GestureDetector3 = tmp(tmp2[30]).GestureDetector;
    obj18 = { style: showVideo.absoluteFill, children: callback4(setMode(tmp2[34]), {}) };
    tmp4Result6 = setMode(tmp2[33]);
    tmp34Result4 = tmp34(View6, obj15);
  }
  items18[1] = tmp34Result4;
  return callback4(View, obj5);
}
function renderVoicePanelDockPIPWrapper(arg0, arg1, transitionState, transitionCleanUp) {
  const obj = { transitionState, transitionCleanUp };
  return clientStatuses(closure_22, obj, arg0);
}
let _slicedToArray = _slicedToArray_mod;
const StyleSheet = react_native.StyleSheet;
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const VoicePanelPIPModes = VoicePanelPIPConstants.VoicePanelPIPModes;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const ParticipantTypes = CallConstants.ParticipantTypes;
const isLaunched = FramesConstants.isLaunched;
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
let closure_17 = { width: 16, height: 9 };
const openCall = "openCall";
const stopWatching = "stopWatching";
let closure_20 = { code: "(function VoicePanelDockPIPTsx1(){let[getVoicePanelPIPBorderRadius,pipState]=this.__closure;return{borderRadius:getVoicePanelPIPBorderRadius(pipState.width,pipState.height)};})" };
let closure_22 = react.memo(function VoicePanelDockPIPWrapper(transitionState) {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  const channelId = react.useContext(transitionCleanUp(11371)).channelId;
  const stream = transitionCleanUp(19722)(channelId);
  const showVideo = transitionCleanUp(19724)(channelId);
  const obj = transitionState(19709);
  const panelLayoutCommitted = obj.usePIPTileHandoff().panelLayoutCommitted;
  const items = [transitionState, panelLayoutCommitted, transitionCleanUp];
  const effect = react.useEffect(() => {
    const tmp = transitionState === native.TransitionStates.YEETED && panelLayoutCommitted;
    if (tmp) {
      transitionCleanUp();
    }
  }, items);
  return closure_15(VoicePanelDockPIP, { stream, showVideo });
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
  const f135703 = () => {
    let targetDimensions = layoutManager.getTargetDimensions(streamKey);
    if (targetDimensions === layoutManager.getDefaultTargetDimensions()) {
      targetDimensions = closure_17;
    }
    return targetDimensions;
  };
  let obj = IN_APP;
  const channelId = IN_APP.useContext(pIPState(11371)).channelId;
  const tmp2 = pIPState(19722)(channelId);
  const streamKey = tmp2.streamKey;
  pIPState = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  IN_APP = undefined;
  let width;
  let height;
  let containerHeight;
  const isWatching = tmp2.isWatching;
  const tmp3 = pIPState(19724)(channelId);
  const obj2 = streamKey(19604);
  pIPState = obj2.usePIPState();
  const layoutManager = IN_APP.useContext(pIPState(11371)).layoutManager;
  [tmp7, c3] = _slicedToArray(IN_APP.useState(f135703), 2);
  const items = [layoutManager, streamKey];
  const tmp6 = _slicedToArray(IN_APP.useState(f135703), 2);
  const effect = IN_APP.useEffect(() => {
    const f143218 = (safeAreaState) => {
      let targetDimensions = closure_1_2.getTargetDimensions(closure_1_0);
      if (targetDimensions === closure_1_2.getDefaultTargetDimensions()) {
        targetDimensions = closure_2_17;
      }
      const obj = streamKey(_undefined[14]);
      if (obj.cheapWorkletShallowEqual(safeAreaState, targetDimensions)) {
        targetDimensions = safeAreaState;
      }
      return targetDimensions;
    };
    _undefined(f143218);
    return layoutManager.subscribeFromItem(function updateTargetDimensions() {
      _undefined(f143218);
    });
  }, items);
  _slicedToArray = tmp9;
  IN_APP = undefined;
  if (pIPState.mode === VoicePanelPIPModes.IN_APP) {
    if (null != streamKey) {
      IN_APP = VoicePanelPIPModes.IN_APP;
    }
  }
  const computePIPSize = tmp4(19514).computePIPSize;
  streamKey(19514);
  if (!isWatching) {
    tmp7 = closure_17;
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
  const obj3 = { value: memo, children: closure_15(TransitionItem, obj5) };
  const Provider = tmp4(19604).VoicePanelPIPStateContext.Provider;
  TransitionItem = tmp4(5201).TransitionItem;
  if (null != memo.mode) {
    tmp14 = { pipMode: memo.mode };
  }
  obj5 = { item: tmp14, renderItem: renderVoicePanelDockPIPWrapper };
  return closure_15(Provider, obj3);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockPIP.tsx");

export default memoResult;
