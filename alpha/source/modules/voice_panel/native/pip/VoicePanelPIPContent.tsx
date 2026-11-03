// Module ID: 19446
// Function ID: 19447
// Name: VoicePanelPIPContent
// Dependencies: [32, 19, 17, 4989, 6963, 11842, 6834, 502, 4990, 1385, 11360, 19273, 1072, 5801, 11831, 21, 5141, 575, 1652, 5710, 11359, 19352, 11911, 1108, 5207, 19362, 7086, 19272, 563, 2148, 1493, 1705, 11931, 19269, 6008, 11365, 1187, 9650, 11917, 11362, 19270, 5994, 19447, 5996, 2]

// Module 19446 (VoicePanelPIPContent)
import nativeDefault from "native" /* 575 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import useWindowDimensions from "useWindowDimensions" /* 1493 */;
import _mod1652 from "module_1652" /* 1652 */;
import EmbeddedActivityOrientationLockState from "EmbeddedActivityOrientationLockState" /* 2148 */;
import native from "native" /* 5207 */;
import LinearGradientDefault from "LinearGradient" /* 5710 */;
import ExternalPipDefault from "ExternalPip" /* 5994 */;
import NativeViewDefault from "NativeView" /* 7086 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11359 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11360 */;
import VoicePanelCardLayoutManager from "VoicePanelCardLayoutManager" /* 11362 */;
import Constants2 from "Constants" /* 11831 */;
import VideoRendererNativeComponentDefault from "VideoRendererNativeComponent" /* 11911 */;
import AssetRegistryDefault from "AssetRegistry" /* 11917 */;
import useUserTileBackgroundDefault from "useUserTileBackground" /* 19269 */;
import VideoActionCreators from "VideoActionCreators" /* 19270 */;
import VoicePanelPIPUtils from "VoicePanelPIPUtils" /* 19272 */;
import VoicePanelPIPConstants from "VoicePanelPIPConstants" /* 19273 */;
import VoicePanelStreamOutputSinkStack from "VoicePanelStreamOutputSinkStack" /* 19352 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4989 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6963 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 11842 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6834 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4990 */;
import UserStore from "UserStore" /* 1385 */;
import Constants from "Constants" /* 1072 */;
import CallConstants from "CallConstants" /* 5801 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

const module_1652 = _mod1652;
let dependencyMap, importDefault, nativeEvent, str, str2;

let StyleSheet;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_21;
let closure_22;
let hasOwnProperty;
let obj2;
let size;
let size1;
function VideoStream(streamId) {
  streamId = streamId.streamId;
  const streamOutputSinkStack = react.useContext(VoicePanelStateContextDefault).streamOutputSinkStack;
  const obj = VoicePanelStreamOutputSinkStack;
  const setHasActiveVideoOutputSink = obj.useSetHasActiveVideoOutputSink(streamOutputSinkStack);
  const items = [setHasActiveVideoOutputSink, streamId];
  const effect = react.useEffect(() => {
    if (null != streamId) {
      setHasActiveVideoOutputSink(tmp, true);
      return () => {
        setHasActiveVideoOutputSink(streamId, false);
      };
    }
  }, items);
  const obj2 = {};
  const tmp3 = VideoRendererNativeComponentDefault;
  const merged = Object.assign(streamId);
  return closure_21(tmp3, obj2);
}
function markContentReady() {
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(constants2.VOICE_PANEL_PIP_CONTENT_READY);
}
function InnerStroke(style) {
  let items;
  style = style.style;
  let height;
  let obj = style(height[25]);
  size = obj.usePIPState();
  const width = size.width;
  height = size.height;
  const tmp = closure_23();
  const innerStroke = tmp;
  let obj2 = {
    style: react.useMemo(() => {
      let obj2;
      const items = [innerStroke.innerStroke, , ];
      const obj = { borderRadius: obj2.getVoicePanelPIPBorderRadius(width, height) + 1 };
      items[1] = obj;
      items[2] = style;
      obj2 = VoicePanelPIPUtils;
      return items;
    }, items)
  };
  items = [width, height, tmp.innerStroke, style];
  const tmp2 = width(height[26]);
  return closure_21(tmp2, obj2);
}
function ActivityInVoice(participantId) {
  let closure_4;
  let items13;
  let items14;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let transitionCleanUp;
  let transitionState;
  participantId = participantId.participantId;
  ({ transitionState, transitionCleanUp } = participantId);
  let channelId;
  let layoutManager;
  let first;
  react = undefined;
  let callback;
  let closure_8;
  const layoutTransition = participantId.layoutTransition;
  let tmp = closure_23();
  let obj = react;
  const items = [transitionState, transitionCleanUp];
  const effect = react.useEffect(() => {
    let closure_0;
    let timeout;
    function handleVideoReady() {
      clearTimeout(closure_0);
      const timerId = setTimeout(() => {
        let tmp;
        if (handleVideoReady != null) {
          tmp = handleVideoReady();
        }
        return tmp;
      }, 17);
    }
    let tmp = transitionState;
    const tmp2 = closure_1_2;
    if (timeout === transitionState(closure_1_2[24]).TransitionStates.YEETED) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        let tmp;
        if (handleVideoReady != null) {
          tmp = handleVideoReady();
        }
        return tmp;
      }, 500);
      let ComponentDispatch = tmp(tmp2[23]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(constants.VOICE_PANEL_PIP_CONTENT_READY, handleVideoReady);
      return () => {
        const ComponentDispatch = participantId(c2[23]).ComponentDispatch;
        ComponentDispatch.unsubscribe(constants.VOICE_PANEL_PIP_CONTENT_READY, handleVideoReady);
        clearTimeout(closure_0);
      };
    }
  }, items);
  const tmp5 = transitionState === participantId(layoutManager[24]).TransitionStates.YEETED ? tmp.onTop : tmp.onBottom;
  const context = obj.useContext(channelId(tmp4[20]));
  channelId = context.channelId;
  layoutManager = context.layoutManager;
  const windowDimensions = context.windowDimensions;
  const items1 = [ChannelStore];
  const tmp3Result = participantId(layoutManager[28]);
  const stateFromStores = tmp3Result.useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  const tmp9 = first(obj.useState(transitionState === participantId(layoutManager[24]).TransitionStates.MOUNTED), 2);
  first = tmp9[0];
  react = tmp9[1];
  const items2 = [closure_8];
  const items3 = [channelId, participantId];
  const tmp3Result4 = participantId(layoutManager[28]);
  const stateFromStores1 = tmp3Result4.useStateFromStores(items2, () => {
    const participant = ChannelRTCStore.getParticipant(channelId, participantId);
    let applicationId = participantId;
    const tmp = participantId;
    if (null != participant) {
      applicationId = tmp;
      if (participant.type === constants.ACTIVITY) {
        applicationId = participant.applicationId;
      }
    }
    return applicationId;
  }, items3);
  const items4 = [callback];
  const items5 = [stateFromStores1];
  const tmp3Result5 = participantId(layoutManager[28]);
  const stateFromStores2 = tmp3Result5.useStateFromStores(items4, () => EmbeddedActivitiesStore.getPipOrientationLockStateForApp(stateFromStores1), items5);
  const items6 = [layoutManager, stateFromStores2, stateFromStores1];
  callback = obj.useCallback((width) => {
    if (EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.LANDSCAPE === stateFromStores2) {
      layoutManager.setTargetDimensions(stateFromStores1, 16, 9);
    } else if (EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.PORTRAIT === stateFromStores2) {
      layoutManager.setTargetDimensions(stateFromStores1, 9, 16);
    } else if (EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.UNLOCKED === stateFromStores2) {
      let num2 = 9;
      const setTargetDimensions = layoutManager.setTargetDimensions;
      const tmp7 = stateFromStores1;
      if (width.width > width.height) {
        num2 = 16;
      }
      let num3 = 16;
      if (width.width > width.height) {
        num3 = 9;
      }
      setTargetDimensions(tmp7, num2, num3);
    }
  }, items6);
  const items7 = [callback];
  const layoutEffect = obj.useLayoutEffect(() => {
    const obj = useWindowDimensions;
    size = obj.getWindowDimensions();
    const obj2 = { landscape: size.width > size.height };
    const merged = Object.assign(size);
    callback(obj2);
  }, items7);
  const items8 = [closure_28, windowDimensions];
  let c0;
  [tmp16, tmp17] = items8;
  const tmp3Result6 = participantId(layoutManager[18]);
  class VoicePanelPIPContentTsx1 {
    constructor() {
      return _undefined.get();
    }
  }
  const items9 = [tmp17];
  VoicePanelPIPContentTsx1.__closure = items9;
  VoicePanelPIPContentTsx1.__workletHash = 16564210571233;
  VoicePanelPIPContentTsx1.__initData = tmp16;
  const items10 = [closure_29, , ];
  const useAnimatedReaction = tmp3Result6.useAnimatedReaction;
  items10[1] = participantId(layoutManager[31]).scheduleOnRN;
  items10[2] = callback;
  c0 = undefined;
  let c1;
  [tmp18, tmp19, tmp20] = items10;
  class VoicePanelPIPContentTsx2 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        _undefined(c1, arg0);
      }
    }
  }
  const items11 = [tmp19, tmp20];
  VoicePanelPIPContentTsx2.__closure = items11;
  VoicePanelPIPContentTsx2.__workletHash = 16707903249569;
  VoicePanelPIPContentTsx2.__initData = tmp18;
  const animatedReaction = useAnimatedReaction(VoicePanelPIPContentTsx1, VoicePanelPIPContentTsx2);
  let tmp22 = null;
  closure_8 = tmp23;
  const items12 = [null != stateFromStores, first];
  const effect1 = obj.useEffect(() => {
    let closure_0;
    if (!first) {
      const tmp2 = closure_8;
      if (tmp2) {
        let ComponentDispatch = participantId(layoutManager[23]).ComponentDispatch;
        ComponentDispatch.dispatch(constants.VOICE_PANEL_PIP_CONTENT_READY);
      }
    }
    if (first) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        closure_1_4(false);
        const ComponentDispatch = participantId(layoutManager[23]).ComponentDispatch;
        ComponentDispatch.dispatch(constants.VOICE_PANEL_PIP_CONTENT_READY);
      }, 500);
      return () => {
        clearTimeout(closure_0);
      };
    }
  }, items12);
  if (!first) {
    let tmp28;
    if (null != stateFromStores) {
      let obj2 = { style: items13, children: items14 };
      items13 = [tmp.activity, tmp5];
      items14 = [, ];
      const obj3 = { channel: stateFromStores, layoutMode: ActivityLayoutMode.PIP };
      const tmp6Result = channelId(layoutManager[26]);
      items14[0] = closure_21(channelId(layoutManager[32]), obj3);
      items14[1] = closure_21(InnerStroke, {});
      tmp28 = closure_22(tmp6Result, obj2);
    } else {
      const obj4 = { participantId: AuthenticationStore.getId(), layoutTransition };
      tmp28 = closure_21(User, obj4);
    }
    tmp22 = tmp28;
  }
  return tmp22;
}
function User(participantId) {
  let AvatarSizes;
  let Icon;
  let avatarURL;
  let backgroundColor;
  let c6;
  let closure_2;
  let consumedRequestToRespondToSeriousThermalState;
  let focused;
  let gradientStops;
  let guildId;
  let isReactingToThermalState;
  let items16;
  let layoutManager;
  let mode;
  let obj11;
  let obj5;
  let tmp17;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp3Result12;
  let tmp49Result;
  let tmp56;
  let transitionCleanUp;
  let transitionState;
  let userAvatarDecoration;
  participantId = participantId.participantId;
  ({ transitionState, transitionCleanUp } = participantId);
  dependencyMap = undefined;
  layoutManager = undefined;
  backgroundColor = undefined;
  StyleSheet = undefined;
  let canRenderParticipantVideo;
  const layoutTransition = participantId.layoutTransition;
  let tmp = closure_23();
  importDefault = tmp;
  let obj = layoutManager;
  let items = [transitionState, transitionCleanUp];
  const effect = layoutManager.useEffect(() => {
    let closure_0;
    let timeout;
    function handleVideoReady() {
      clearTimeout(closure_0);
      const timerId = setTimeout(() => {
        let tmp;
        if (handleVideoReady != null) {
          tmp = handleVideoReady();
        }
        return tmp;
      }, 17);
    }
    let tmp = transitionState;
    const tmp2 = closure_1_2;
    if (timeout === transitionState(closure_1_2[24]).TransitionStates.YEETED) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        let tmp;
        if (handleVideoReady != null) {
          tmp = handleVideoReady();
        }
        return tmp;
      }, 500);
      let ComponentDispatch = tmp(tmp2[23]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(constants.VOICE_PANEL_PIP_CONTENT_READY, handleVideoReady);
      return () => {
        const ComponentDispatch = participantId(c2[23]).ComponentDispatch;
        ComponentDispatch.unsubscribe(constants.VOICE_PANEL_PIP_CONTENT_READY, handleVideoReady);
        clearTimeout(closure_0);
      };
    }
  }, items);
  let tmp3 = participantId;
  let tmp4 = dependencyMap;
  let tmp5 = transitionState === participantId(5207).TransitionStates.YEETED ? tmp.onTop : tmp.onBottom;
  dependencyMap = tmp5;
  const context = obj.useContext(VoicePanelStateContextDefault);
  const channelId = context.channelId;
  ({ guildId, focused, mode, layoutManager } = context);
  const items1 = [ChannelRTCStore];
  const tmp3Result = tmp3(563);
  const stateFromStores = tmp3Result.useStateFromStores(items1, () => {
    const participant = ChannelRTCStore.getParticipant(channelId, participantId);
    let type;
    if (participant != null) {
      type = participant.type;
    }
    let tmp3;
    if (type === constants2.USER) {
      tmp3 = participant;
    }
    return tmp3;
  });
  let user1;
  if (stateFromStores != null) {
    user1 = stateFromStores.user;
  }
  if (user1 == null) {
    user1 = UserStore.getCurrentUser();
  }
  let id;
  const tmp6Result = useUserTileBackgroundDefault;
  if (user1 != null) {
    id = user1.id;
  }
  const obj2 = { userId: id, guildId, avatarURI: avatarURL, location: "VoicePanelPIPContent-native" };
  avatarURL = undefined;
  if (user1 != null) {
    avatarURL = user1.getAvatarURL(guildId, 80, false);
  }
  ({ gradientStops, backgroundColor } = tmp6Result(obj2));
  const items2 = [tmp, tmp5, backgroundColor];
  tmp6Result(obj2);
  const memo = obj.useMemo(() => {
    const items = [user.user, closure_2, ];
    const obj = { backgroundColor };
    items[2] = obj;
    return items;
  }, items2);
  [tmp17, c6] = channelId(obj.useState(false), 2);
  channelId(obj.useState(false), 2);
  let id1;
  const useSurfaceDirectRendererExperiment = tmp3(6008).useSurfaceDirectRendererExperiment;
  tmp3(6008);
  if (stateFromStores != null) {
    const user = stateFromStores.user;
    if (user != null) {
      id1 = user.id;
    }
  }
  const items3 = [channelId];
  const surfaceDirectRendererExperiment = useSurfaceDirectRendererExperiment(id1, { location: "VoicePanelPIPContent" });
  const callback = obj.useCallback((arg0, arg1) => {
    let participant;
    if (null != arg0) {
      participant = ChannelRTCStore.getParticipant(channelId, arg0);
    }
    let tmp5 = null != participant;
    const tmp4 = c6;
    if (tmp5) {
      tmp5 = closure_19(participant);
    }
    if (tmp5) {
      tmp5 = arg1 === VoicePanelModes.PANEL;
    }
    tmp4(tmp5);
  }, items3);
  const items4 = [closure_31, focused];
  let c0;
  [tmp23, tmp24] = items4;
  const tmp3Result8 = tmp3(1652);
  class VoicePanelPIPContentTsx3 {
    constructor() {
      const value = _undefined.get();
      let id;
      if (value != null) {
        id = value.id;
      }
      return id;
    }
  }
  const items5 = [tmp24];
  VoicePanelPIPContentTsx3.__closure = items5;
  VoicePanelPIPContentTsx3.__workletHash = 6441718203964;
  VoicePanelPIPContentTsx3.__initData = tmp23;
  const items6 = [closure_32, , , ];
  const useAnimatedReaction = tmp3Result8.useAnimatedReaction;
  items6[1] = tmp3(1705).scheduleOnRN;
  items6[2] = callback;
  items6[3] = mode;
  c0 = undefined;
  let c1;
  let c2;
  [tmp25, tmp26, tmp27, tmp28] = items6;
  class VoicePanelPIPContentTsx4 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        _undefined(c1, arg0, _undefined2.get());
      }
    }
  }
  const items7 = [tmp26, tmp27, tmp28];
  VoicePanelPIPContentTsx4.__closure = items7;
  VoicePanelPIPContentTsx4.__workletHash = 16332434412117;
  VoicePanelPIPContentTsx4.__initData = tmp25;
  const animatedReaction = useAnimatedReaction(VoicePanelPIPContentTsx3, VoicePanelPIPContentTsx4);
  const items8 = [closure_33, mode];
  c0 = undefined;
  [tmp31, tmp32] = items8;
  const tmp3Result9 = tmp3(1652);
  class VoicePanelPIPContentTsx5 {
    constructor() {
      return _undefined.get();
    }
  }
  const items9 = [tmp32];
  VoicePanelPIPContentTsx5.__closure = items9;
  VoicePanelPIPContentTsx5.__workletHash = 15346107869093;
  VoicePanelPIPContentTsx5.__initData = tmp31;
  const items10 = [closure_34, , , ];
  const useAnimatedReaction2 = tmp3Result9.useAnimatedReaction;
  items10[1] = tmp3(1705).scheduleOnRN;
  items10[2] = callback;
  items10[3] = focused;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp33, tmp34, tmp35, tmp36] = items10;
  class VoicePanelPIPContentTsx6 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        const value = _undefined.get();
        let id;
        const tmp = c0;
        const tmp2 = c1;
        if (value != null) {
          id = value.id;
        }
        tmp(tmp2, id, arg0);
      }
    }
  }
  const items11 = [tmp34, tmp35, tmp36];
  VoicePanelPIPContentTsx6.__closure = items11;
  VoicePanelPIPContentTsx6.__workletHash = 11281785981647;
  VoicePanelPIPContentTsx6.__initData = tmp33;
  const animatedReaction2 = useAnimatedReaction2(VoicePanelPIPContentTsx5, VoicePanelPIPContentTsx6);
  const items12 = [ChannelCallLifecycleStore];
  const tmp3Result10 = tmp3(563);
  const stateFromStoresObject = tmp3Result10.useStateFromStoresObject(items12, () => {
    const obj = { isReactingToThermalState: ChannelCallLifecycleStore.isReactingToThermalState(), consumedRequestToRespondToSeriousThermalState: ChannelCallLifecycleStore.consumedRequestToRespondToSeriousThermalState() };
    return obj;
  });
  const items13 = [layoutManager, participantId];
  ({ isReactingToThermalState, consumedRequestToRespondToSeriousThermalState } = stateFromStoresObject);
  const callback1 = obj.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    layoutManager.setTargetDimensions(participantId, nativeEvent.width, nativeEvent.height);
  }, items13);
  const tmp3Result11 = tmp3(11365);
  canRenderParticipantVideo = tmp3Result11.useCanRenderParticipantVideo(stateFromStores);
  if (canRenderParticipantVideo) {
    canRenderParticipantVideo = !(tmp17 && isReactingToThermalState);
  }
  const items14 = [canRenderParticipantVideo];
  const effect1 = obj.useEffect(() => {
    const tmp = canRenderParticipantVideo;
    if (!tmp) {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(constants.VOICE_PANEL_PIP_CONTENT_READY);
    }
  }, items14);
  const obj3 = { style: null, children: null };
  const tmp43 = closure_22;
  const tmp6Result4 = NativeViewDefault;
  if (canRenderParticipantVideo) {
    const items15 = [, ];
    ({ blackBackground: arr17[0], user: arr17[1] } = tmp);
    obj3.style = items15;
    const obj4 = { style: tmp5, participantId, children: closure_21(VideoStream, obj5) };
    obj5 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, streamId: stateFromStores.streamId, style: items16, onSize: callback1, onReady: markContentReady };
    items16 = [tmp.video, undefined];
    const items17 = [closure_21(AnimatedVideoWrapper, obj4), closure_21(InnerStroke, {})];
    obj3.children = items17;
    tmp56 = obj3;
  } else {
    obj3.style = memo;
    let tmp45 = null;
    if (null != gradientStops) {
      const obj6 = { colors: gradientStops, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, style: StyleSheet.absoluteFill, layout: layoutTransition, pointerEvents: "none" };
      tmp45 = closure_21(LinearGradient, obj6);
    }
    const items18 = [tmp45, , , ];
    const obj7 = { style: tmp.avatarWrapper, children: tmp49Result };
    tmp49Result = null;
    const tmp6Result5 = NativeViewDefault;
    if (null != user1) {
      const obj8 = { source: tmp3Result12.getCachedSourceFromURI(user1.getAvatarURL(guildId, 80, false)), size: tmp17 ? AvatarSizes.LARGE : AvatarSizes.XLARGE, avatarDecoration: userAvatarDecoration };
      const Avatar = tmp3(1187).Avatar;
      tmp3Result12 = tmp3(9650);
      AvatarSizes = tmp3(1187).AvatarSizes;
      userAvatarDecoration = undefined;
      if (stateFromStores != null) {
        userAvatarDecoration = stateFromStores.userAvatarDecoration;
      }
      tmp49Result = tmp49(Avatar, obj8);
    }
    items18[1] = closure_21(tmp6Result5, obj7);
    const obj9 = { style: tmp.userOpacity };
    items18[2] = closure_21(InnerStroke, obj9);
    let tmp49Result2 = null;
    if (tmp17) {
      tmp49Result2 = null;
      if (consumedRequestToRespondToSeriousThermalState) {
        const obj10 = { style: tmp.thermalAlertIconContainer, children: closure_21(Icon, obj11) };
        obj11 = { style: tmp.thermalAlertIcon, source: AssetRegistryDefault, color: tmp.thermalAlertIcon.color };
        const tmp6Result6 = NativeViewDefault;
        Icon = tmp3(1187).Icon;
        tmp49Result2 = tmp49(tmp6Result6, obj10);
      }
    }
    items18[3] = tmp49Result2;
    obj3.children = items18;
    tmp56 = obj3;
  }
  return tmp43(tmp6Result4, tmp56);
}
function AnimatedVideoWrapper(arg0) {
  let children;
  let items2;
  let participantId;
  let style;
  let tmp4;
  let tmp5;
  ({ participantId, style, children } = arg0);
  const layoutManager = react.useContext(VoicePanelStateContextDefault).layoutManager;
  const obj = VoicePanelCardLayoutManager;
  const targetDimensionsSubscription = obj.useTargetDimensionsSubscription(participantId, layoutManager);
  const items = [closure_36, targetDimensionsSubscription];
  let c0;
  [tmp4, tmp5] = items;
  const obj2 = _mod1652;
  class VoicePanelPIPContentTsx7 {
    constructor() {
      value = closure_0.get();
      ({ width, height } = value);
      str = "100%";
      str2 = "auto";
      if (height < width) {
        str = "auto";
        str2 = "100%";
      }
      size = { position: "absolute", aspectRatio: width / height, width: str, height: str2 };
      return size;
    }
  }
  const items1 = [tmp5];
  VoicePanelPIPContentTsx7.__closure = items1;
  VoicePanelPIPContentTsx7.__workletHash = 2684111713049;
  VoicePanelPIPContentTsx7.__initData = tmp4;
  const animatedStyle = obj2.useAnimatedStyle(VoicePanelPIPContentTsx7);
  const obj3 = { style: items2, children };
  items2 = [style, animatedStyle];
  return closure_21(module_1652.View, obj3);
}
function Stream(participantId) {
  let c2;
  let layoutManager;
  let obj5;
  let tmp23;
  let transitionCleanUp;
  let transitionState;
  participantId = participantId.participantId;
  ({ transitionState, transitionCleanUp } = participantId);
  dependencyMap = undefined;
  layoutManager = undefined;
  let streamId;
  let c5;
  let callback2;
  const layoutTransition = participantId.layoutTransition;
  let tmp = closure_23();
  let tmp2 = participantId;
  let tmp3 = dependencyMap;
  let obj = participantId(19362);
  const mode = obj.usePIPState().mode;
  const items = [transitionState, transitionCleanUp];
  const effect = streamId.useEffect(() => {
    let closure_0;
    let timeout;
    function handleVideoReady() {
      clearTimeout(closure_0);
      const timerId = setTimeout(() => {
        let tmp;
        if (handleVideoReady != null) {
          tmp = handleVideoReady();
        }
        return tmp;
      }, 17);
    }
    let tmp = transitionState;
    const tmp2 = closure_1_2;
    if (timeout === transitionState(closure_1_2[24]).TransitionStates.YEETED) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        let tmp;
        if (handleVideoReady != null) {
          tmp = handleVideoReady();
        }
        return tmp;
      }, 500);
      let ComponentDispatch = tmp(tmp2[23]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(constants.VOICE_PANEL_PIP_CONTENT_READY, handleVideoReady);
      return () => {
        const ComponentDispatch = participantId(c2[23]).ComponentDispatch;
        ComponentDispatch.unsubscribe(constants.VOICE_PANEL_PIP_CONTENT_READY, handleVideoReady);
        clearTimeout(closure_0);
      };
    }
  }, items);
  let tmp5 = transitionState === participantId(5207).TransitionStates.YEETED ? tmp.onTop : tmp.onBottom;
  const context = obj2.useContext(mode(11359));
  ({ channelId: c2, layoutManager } = context);
  const items1 = [callback2];
  const tmp2Result = tmp2(563);
  const stateFromStoresObject = tmp2Result.useStateFromStoresObject(items1, () => {
    let tmp5;
    const participant = ChannelRTCStore.getParticipant(c2, participantId);
    streamId = undefined;
    if (null != participant && participant.type === constants2.STREAM) {
      streamId = participant.streamId;
    }
    const obj = { streamId, userId: tmp5 };
    tmp5 = undefined;
    if (null != participant && participant.type === constants2.STREAM) {
      const user = participant.user;
      let id;
      if (user != null) {
        id = user.id;
      }
      tmp5 = id;
    }
    return obj;
  });
  streamId = stateFromStoresObject.streamId;
  const userId = stateFromStoresObject.userId;
  const tmp2Result3 = tmp2(6008);
  const surfaceDirectRendererExperiment = tmp2Result3.useSurfaceDirectRendererExperiment(userId, { location: "VoicePanelPIPContent.Stream" });
  const items2 = [ApplicationStreamingStore];
  const tmp2Result4 = tmp2(563);
  const stateFromStores = tmp2Result4.useStateFromStores(items2, () => {
    const activeStreamForStreamKey = ApplicationStreamingStore.getActiveStreamForStreamKey(participantId);
    let state;
    if (activeStreamForStreamKey != null) {
      state = activeStreamForStreamKey.state;
    }
    return state;
  });
  const items3 = [layoutManager, participantId];
  const callback = obj2.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    layoutManager.setTargetDimensions(participantId, nativeEvent.width, nativeEvent.height);
  }, items3);
  const value = c5.get();
  c5 = value;
  const ref = obj2.useRef(0);
  const ref2 = obj2.useRef(0);
  const items4 = [streamId, value, mode];
  const items5 = [streamId, value, mode];
  const callback1 = obj2.useCallback((nativeEvent) => {
    let height;
    let width;
    if (null != streamId) {
      ({ width, height } = nativeEvent.nativeEvent.layout);
      let tmp3 = width === ref.current;
      const tmp12 = ref;
      if (tmp3) {
        tmp3 = height === ref2.current;
      }
      if (!tmp3) {
        tmp12.current = width;
        ref2.current = height;
        if (mode === VoicePanelPIPModes.IN_APP) {
          size = { width: width * c5, height: height * c5 };
          const obj = VideoActionCreators;
          obj.updateVideoSize(tmp, size, 1);
        }
      }
    }
  }, items4);
  callback2 = obj2.useCallback((arg0) => {
    let tmp2 = null == streamId;
    const tmp = streamId;
    if (!tmp2) {
      tmp2 = arg0;
    }
    if (!tmp2) {
      tmp2 = mode !== VoicePanelPIPModes.IN_APP;
    }
    if (!tmp2) {
      size = { width: ref.current * c5, height: ref2.current * c5 };
      const obj = VideoActionCreators;
      obj.updateVideoSize(tmp, size, 1);
    }
  }, items5);
  const items6 = [callback2];
  const effect1 = obj2.useEffect(() => {
    let obj = ExternalPipDefault;
    let closure_0 = obj.addOnPipModeChangedListener(callback2);
    return () => {
      const obj = closure_0;
      if (closure_0 != null) {
        obj.remove();
      }
    };
  }, items6);
  let closure_9 = tmp15;
  const items7 = [null != streamId];
  const effect2 = obj2.useEffect(() => {
    const tmp = closure_9;
    if (tmp) {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(constants.VOICE_PANEL_PIP_CONTENT_READY);
    }
  }, items7);
  if (stateFromStores === constants.ENDED) {
    const obj3 = { style: tmp.streamEmptyImage, resizeMode: "contain" };
    tmp23 = closure_21(tmp2(19447).StreamEnded, obj3);
  } else {
    tmp23 = null;
    if (stateFromStores !== tmp17.FAILED) {
      let tmp18Result;
      if (null != streamId) {
        const obj4 = { style: tmp5, participantId, children: closure_21(VideoStream, obj5) };
        obj5 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, streamId, style: tmp.video, onSize: callback, onLayout: callback1 };
        tmp18Result = tmp18(AnimatedVideoWrapper, obj4);
      } else {
        const obj6 = { participantId, layoutTransition };
        tmp18Result = tmp18(User, obj6);
      }
      tmp23 = tmp18Result;
    }
  }
  return tmp23;
}
function getFocusedKey(id) {
  return id.id;
}
function areParticipantsEqual(arg0, arg1) {
  if (arg0.length !== arg1.length) {
    return false;
  } else if (0 === arg0.length) {
    return true;
  } else {
    let num2 = 0;
    const iter = arg0[Symbol.iterator]();
    while (iter !== undefined) {
      let tmp6 = arg1[num2];
      let id1;
      let id = iter.next().id;
      if (tmp6 != null) {
        id1 = tmp6.id;
      }
      if (id !== id1) {
        iter.return();
        let flag = false;
        return false;
      } else {
        num2 = num2 + 1;
        continue;
      }
    }
    return true;
  }
}
let react = react_mod;
({ PixelRatio: hasOwnProperty, StyleSheet } = react_native);
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const VoicePanelPIPModes = VoicePanelPIPConstants.VoicePanelPIPModes;
({ ApplicationStreamStates: closure_16, ComponentActions: closure_17 } = Constants);
({ ParticipantTypes: closure_18, isActivityParticipant: closure_19 } = CallConstants);
const ActivityLayoutMode = Constants2.ActivityLayoutMode;
({ jsx: closure_21, jsxs: closure_22 } = Fragment);
let createStyles = createStyles_mod;
let obj = { contentWrapper: { position: "absolute", width: "100%", height: "100%", overflow: "hidden", alignItems: "center", justifyContent: "center" }, userOpacity: { opacity: 0.1 }, activity: { position: "absolute", width: "100%", height: "100%" }, user: { position: "absolute", width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }, video: { position: "absolute", width: "100%", height: "100%" }, avatarWrapper: { position: "relative", width: "56%", height: "56%", alignItems: "center", justifyContent: "center" }, thermalAlertIconContainer: size, thermalAlertIcon: size1, onTop: { zIndex: 1 }, onBottom: { zIndex: 0 }, streamEmptyImage: { width: "50%" }, emptyPip: obj2, innerStroke: { position: "absolute", top: -1, left: -1, bottom: -1, right: -1, borderWidth: 2, borderColor: "white", zIndex: 1, opacity: 0.3 }, blackBackground: { backgroundColor: "black" } };
size = { width: 22, height: 22, backgroundColor: "rgba(78, 80, 88, 0.48)", borderRadius: nativeDefault.radii.round, justifyContent: "center", alignItems: "center", position: "absolute", top: 6, left: 6 };
createStyles = createStyles.createStyles;
size1 = { width: 14, height: 14, color: nativeDefault.colors.WHITE };
obj2 = { backgroundColor: nativeDefault.colors.BLACK };
let merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_23 = createStyles(obj);
const LinearGradient = module_1652.createAnimatedComponent(LinearGradientDefault);
let closure_28 = { code: "(function VoicePanelPIPContentTsx1(){let[windowDimensions]=this.__closure;return windowDimensions.get();})" };
let closure_29 = { code: "(function VoicePanelPIPContentTsx2(windowDimensionsVal,previousWindowDimensionsVal){let[scheduleOnRN,handleTargetAspectRatioParams]=this.__closure;if(windowDimensionsVal!==previousWindowDimensionsVal){scheduleOnRN(handleTargetAspectRatioParams,windowDimensionsVal);}})" };
let closure_31 = { code: "(function VoicePanelPIPContentTsx3(){let[focused]=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;})" };
let closure_32 = { code: "(function VoicePanelPIPContentTsx4(focusedParticipantId,previousFocusedParticipantId){let[scheduleOnRN,updateIsActivityFocused,mode]=this.__closure;if(focusedParticipantId!==previousFocusedParticipantId){scheduleOnRN(updateIsActivityFocused,focusedParticipantId,mode.get());}})" };
let closure_33 = { code: "(function VoicePanelPIPContentTsx5(){let[mode]=this.__closure;return mode.get();})" };
let closure_34 = { code: "(function VoicePanelPIPContentTsx6(modeVal,previousModeVal){let[scheduleOnRN,updateIsActivityFocused,focused]=this.__closure;if(modeVal!==previousModeVal){var _focused$get;scheduleOnRN(updateIsActivityFocused,(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,modeVal);}})" };
let closure_36 = { code: "(function VoicePanelPIPContentTsx7(){let[targetDimensions]=this.__closure;const{width:targetWidth,height:targetHeight}=targetDimensions.get();let height='100%';let width='100%';if(targetHeight<targetWidth){width='auto';}else{height='auto';}return{position:'absolute',aspectRatio:targetWidth/targetHeight,width:width,height:height};})" };
let closure_39 = react.memo(function EmptyPIP(transitionState) {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  const items = [transitionState, transitionCleanUp];
  const tmp = closure_23();
  const effect = react.useEffect(() => {
    if (transitionState === native.TransitionStates.YEETED) {
      transitionCleanUp();
    }
  }, items);
  const obj = { style: tmp.emptyPip };
  return closure_21(transitionCleanUp(7086), obj);
});
const memoResult = react.memo(function VoicePanelPIPContent(layoutTransition) {
  let obj4;
  let obj5;
  layoutTransition = layoutTransition.layoutTransition;
  let channelId;
  let id;
  let height;
  channelId = height.useContext(channelId(id[20])).channelId;
  let obj = layoutTransition(id[25]);
  size = obj.usePIPState();
  id = size.id;
  const width = size.width;
  height = size.height;
  let tmp = closure_23();
  const contentWrapper = tmp;
  const id1 = AuthenticationStore.getId();
  let obj2 = layoutTransition(id[28]);
  let items = [ChannelRTCStore];
  let items1 = [id, channelId, id1];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    let USER;
    let tmp = id;
    if (null != id) {
      const participant = ChannelRTCStore.getParticipant(channelId, tmp);
      let type;
      if (participant != null) {
        type = participant.type;
      }
      USER = type;
    } else {
      USER = constants.USER;
    }
    if (USER == null) {
      USER = constants.USER;
    }
    if (tmp == null) {
      tmp = id1;
    }
    const items = [{ id: tmp, type: USER }];
    return items;
  }, items1, areParticipantsEqual);
  const items2 = [width, height, tmp.contentWrapper];
  const items3 = [layoutTransition];
  const memo = height.useMemo(() => {
    let obj2;
    const items = [contentWrapper.contentWrapper, ];
    const obj = { borderRadius: obj2.getVoicePanelPIPBorderRadius(width, height) };
    items[1] = obj;
    const items1 = [items];
    obj2 = VoicePanelPIPUtils;
    return items1;
  }, items2);
  const callback = height.useCallback((arg0, id, transitionState, transitionCleanUp) => {
    if ("--voice-panel-pip-empty" === id.id) {
      const obj2 = { transitionState, transitionCleanUp };
      return closure_21(closure_39, obj2, arg0);
    } else {
      const obj3 = { participantId: id.id, transitionState, transitionCleanUp, layoutTransition };
      const type = id.type;
      if (constants.ACTIVITY === type) {
        const obj4 = {};
        const merged = Object.assign(obj3);
        return closure_21(ActivityInVoice, obj4, arg0);
      } else if (constants.STREAM === type) {
        const obj5 = {};
        const merged1 = Object.assign(obj3);
        return closure_21(Stream, obj5, arg0);
      } else {
        if (constants.USER !== type) {
          const HIDDEN_STREAM = tmp19.HIDDEN_STREAM;
        }
        const obj = {};
        const merged2 = Object.assign(obj3);
        return closure_21(User, obj, arg0);
      }
    }
  }, items3);
  let obj3 = { style: memo, pointerEvents: "none", nativeID: obj4.getExternalPipTileNativeId("pip", stateFromStores[0].id), children: closure_21(layoutTransition(id[24]).TransitionGroup, obj5) };
  const tmp6 = channelId(id[26]);
  obj4 = layoutTransition(id[43]);
  obj5 = { items: stateFromStores, renderItem: callback, getItemKey: getFocusedKey };
  return closure_21(tmp6, obj3);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPContent.tsx");

export default memoResult;
