// Module ID: 16989
// Function ID: 16990
// Name: VoicePanelPIPContent
// Dependencies: [32, 19, 17, 2044, 4852, 8844, 4858, 502, 2045, 1372, 11755, 16913, 1074, 2005, 4857, 21, 4836, 576, 4566, 5293, 11754, 16905, 8893, 1110, 4540, 16916, 5901, 16912, 563, 1479, 8915, 8289, 7697, 8881, 8899, 1177, 8905, 11757, 6494, 16828, 8886, 8877, 2]

// Module 16989 (VoicePanelPIPContent)
import nativeDefault from "native" /* 576 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1110 */;
import useWindowDimensions from "useWindowDimensions" /* 1479 */;
import native from "native" /* 4540 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4566 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import NativeViewDefault from "NativeView" /* 5901 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 6494 */;
import useProfileTileGradientDefault from "useProfileTileGradient" /* 7697 */;
import ExternalPipDefault from "ExternalPip" /* 8886 */;
import VideoRendererNativeComponentDefault from "VideoRendererNativeComponent" /* 8893 */;
import AssetRegistryDefault from "AssetRegistry" /* 8905 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11754 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11755 */;
import VoicePanelCardLayoutManager from "VoicePanelCardLayoutManager" /* 11757 */;
import VideoActionCreators from "VideoActionCreators" /* 16828 */;
import VoicePanelStreamOutputSinkStack from "VoicePanelStreamOutputSinkStack" /* 16905 */;
import VoicePanelPIPUtils from "VoicePanelPIPUtils" /* 16912 */;
import VoicePanelPIPConstants from "VoicePanelPIPConstants" /* 16913 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4852 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 8844 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4858 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import UserStore from "UserStore" /* 1372 */;
import Constants_mod from "Constants" /* 1074 */;
import Constants_mod2 from "Constants" /* 2005 */;
import CallConstants from "CallConstants" /* 4857 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const ReanimatedRexport = ReanimatedRexport2;
let dependencyMap, importDefault, nativeEvent;

let StyleSheet;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
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
  return authStore5(tmp3, obj2);
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
  const tmp = closure_24();
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
  return closure_22(tmp2, obj2);
}
function ActivityInVoice(participantId) {
  let items10;
  let items9;
  let transitionCleanUp;
  let transitionState;
  participantId = participantId.participantId;
  ({ transitionState, transitionCleanUp } = participantId);
  let channelId;
  let layoutManager;
  let first;
  let stateFromStores2;
  let handleTargetAspectRatioParams;
  let closure_9;
  const layoutTransition = participantId.layoutTransition;
  let tmp = closure_24();
  let obj = first;
  const items = [transitionState, transitionCleanUp];
  const effect = first.useEffect(() => {
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
  let tmp6 = channelId;
  const tmp5 = transitionState === participantId(layoutManager[24]).TransitionStates.YEETED ? tmp.onTop : tmp.onBottom;
  const context = obj.useContext(channelId(tmp4[20]));
  channelId = context.channelId;
  layoutManager = context.layoutManager;
  const windowDimensions = context.windowDimensions;
  const items1 = [ChannelStore];
  const tmp3Result = participantId(layoutManager[28]);
  const stateFromStores = tmp3Result.useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  const tmp9 = windowDimensions(obj.useState(transitionState === participantId(layoutManager[24]).TransitionStates.MOUNTED), 2);
  first = tmp9[0];
  let closure_5 = tmp9[1];
  const items2 = [handleTargetAspectRatioParams];
  const items3 = [channelId, participantId];
  const tmp3Result4 = participantId(layoutManager[28]);
  const stateFromStores1 = tmp3Result4.useStateFromStores(items2, () => {
    const participant = ChannelRTCStore.getParticipant(channelId, participantId);
    let applicationId = participantId;
    const tmp = participantId;
    if (null != participant) {
      applicationId = tmp;
      if (participant.type === constants2.ACTIVITY) {
        applicationId = participant.applicationId;
      }
    }
    return applicationId;
  }, items3);
  const items4 = [stateFromStores2];
  const items5 = [stateFromStores1];
  const tmp3Result5 = participantId(layoutManager[28]);
  stateFromStores2 = tmp3Result5.useStateFromStores(items4, () => EmbeddedActivitiesStore.getPipOrientationLockStateForApp(stateFromStores1), items5);
  const items6 = [layoutManager, stateFromStores2, stateFromStores1];
  handleTargetAspectRatioParams = obj.useCallback((width) => {
    if (constants.LANDSCAPE === stateFromStores2) {
      layoutManager.setTargetDimensions(stateFromStores1, 16, 9);
    } else if (constants.PORTRAIT === stateFromStores2) {
      layoutManager.setTargetDimensions(stateFromStores1, 9, 16);
    } else if (constants.UNLOCKED === stateFromStores2) {
      let num2 = 9;
      const setTargetDimensions = layoutManager.setTargetDimensions;
      const tmp6 = stateFromStores1;
      if (width.width > width.height) {
        num2 = 16;
      }
      let num3 = 16;
      if (width.width > width.height) {
        num3 = 9;
      }
      setTargetDimensions(tmp6, num2, num3);
    }
  }, items6);
  const items7 = [handleTargetAspectRatioParams];
  const layoutEffect = obj.useLayoutEffect(() => {
    const obj = useWindowDimensions;
    size = obj.getWindowDimensions();
    const obj2 = { landscape: size.width > size.height };
    const merged = Object.assign(size);
    callback(obj2);
  }, items7);
  const tmp3Result6 = participantId(layoutManager[18]);
  class P {
    constructor() {
      return windowDimensions.get();
    }
  }
  P.__closure = { windowDimensions };
  P.__workletHash = 20962628184;
  P.__initData = __initData;
  const fn = function h(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport2;
      obj.runOnJS(callback)(arg0);
    }
  };
  let obj2 = { runOnJS: tmp3(tmp4[18]).runOnJS, handleTargetAspectRatioParams };
  fn.__closure = obj2;
  fn.__workletHash = 10001753822389;
  fn.__initData = __initData2;
  const animatedReaction = tmp3Result6.useAnimatedReaction(P, fn);
  let tmp16 = null;
  closure_9 = tmp17;
  const items8 = [null != stateFromStores, first];
  const effect1 = obj.useEffect(() => {
    let closure_0;
    if (!first) {
      const tmp2 = closure_9;
      if (tmp2) {
        let ComponentDispatch = participantId(layoutManager[23]).ComponentDispatch;
        ComponentDispatch.dispatch(constants.VOICE_PANEL_PIP_CONTENT_READY);
      }
    }
    if (first) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        closure_1_5(false);
        const ComponentDispatch = participantId(layoutManager[23]).ComponentDispatch;
        ComponentDispatch.dispatch(constants.VOICE_PANEL_PIP_CONTENT_READY);
      }, 500);
      return () => {
        clearTimeout(closure_0);
      };
    }
  }, items8);
  if (!first) {
    let tmp22;
    if (null != stateFromStores) {
      const obj3 = { style: items9, children: items10 };
      items9 = [tmp.activity, tmp5];
      items10 = [, ];
      const obj4 = { channel: stateFromStores, layoutMode: constants3.PIP };
      const tmp6Result = tmp6(layoutManager[26]);
      items10[0] = closure_22(tmp6(layoutManager[30]), obj4);
      items10[1] = closure_22(InnerStroke, {});
      tmp22 = closure_23(tmp6Result, obj3);
    } else {
      const obj5 = { participantId: AuthenticationStore.getId(), layoutTransition };
      tmp22 = closure_22(User, obj5);
    }
    tmp16 = tmp22;
  }
  return tmp16;
}
function User(participantId) {
  let AvatarSizes;
  let Icon;
  let _undefined;
  let c9;
  let closure_2;
  let consumedRequestToRespondToSeriousThermalState;
  let focused;
  let guildId;
  let isReactingToThermalState;
  let items8;
  let obj12;
  let obj6;
  let tmp19;
  let tmp37Result;
  let tmp3Result14;
  let tmp44;
  let transitionCleanUp;
  let transitionState;
  let userAvatarDecoration;
  participantId = participantId.participantId;
  ({ transitionState, transitionCleanUp } = participantId);
  dependencyMap = undefined;
  focused = undefined;
  let dominantColorFromImage;
  let closure_8;
  c9 = undefined;
  let updateIsActivityFocused;
  let canRenderParticipantVideo;
  const layoutTransition = participantId.layoutTransition;
  let tmp = closure_24();
  importDefault = tmp;
  let obj = focused;
  let items = [transitionState, transitionCleanUp];
  const effect = focused.useEffect(() => {
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
  let tmp5 = transitionState === participantId(4540).TransitionStates.YEETED ? tmp.onTop : tmp.onBottom;
  dependencyMap = tmp5;
  const context = obj.useContext(VoicePanelStateContextDefault);
  const channelId = context.channelId;
  ({ guildId, focused } = context);
  const mode = context.mode;
  const layoutManager = context.layoutManager;
  const items1 = [closure_8];
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
  let avatarURL;
  const useDominantColorFromImage = tmp3(8289).useDominantColorFromImage;
  tmp3(8289);
  if (user1 != null) {
    avatarURL = user1.getAvatarURL(guildId, 80, false);
  }
  dominantColorFromImage = useDominantColorFromImage(avatarURL);
  let id;
  const tmp6Result = useProfileTileGradientDefault;
  if (user1 != null) {
    id = user1.id;
  }
  const tmp6ResultResult = tmp6Result({ userId: id, guildId, location: "VoicePanelPIPContent-native" });
  closure_8 = tmp6ResultResult;
  const items2 = [tmp, tmp5, dominantColorFromImage, tmp6ResultResult];
  const memo = obj.useMemo(() => {
    const items = [user.user, closure_2, ];
    let tmp = null;
    if (null == closure_8) {
      tmp = { backgroundColor: dominantColorFromImage };
      const obj = { backgroundColor: dominantColorFromImage };
    }
    items[2] = tmp;
    return items;
  }, items2);
  [tmp19, c9] = channelId(obj.useState(false), 2);
  channelId(obj.useState(false), 2);
  let id1;
  const useSurfaceDirectRendererExperiment = tmp3(8881).useSurfaceDirectRendererExperiment;
  tmp3(8881);
  if (stateFromStores != null) {
    const user = stateFromStores.user;
    if (user != null) {
      id1 = user.id;
    }
  }
  const items3 = [channelId];
  const surfaceDirectRendererExperiment = useSurfaceDirectRendererExperiment(id1, { location: "VoicePanelPIPContent" });
  updateIsActivityFocused = obj.useCallback((arg0, arg1) => {
    let participant;
    if (null != arg0) {
      participant = ChannelRTCStore.getParticipant(channelId, arg0);
    }
    let tmp5 = null != participant;
    const tmp4 = c9;
    if (tmp5) {
      tmp5 = closure_21(participant);
    }
    if (tmp5) {
      tmp5 = arg1 === VoicePanelModes.PANEL;
    }
    tmp4(tmp5);
  }, items3);
  const tmp3Result10 = tmp3(4566);
  class I {
    constructor() {
      const value = focused.get();
      let id;
      if (value != null) {
        id = value.id;
      }
      return id;
    }
  }
  I.__closure = { focused };
  I.__workletHash = 3980010676581;
  I.__initData = __initData3;
  class S {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = ReanimatedRexport2;
        const runOnJSResult = obj.runOnJS(callback);
        runOnJSResult(arg0, mode.get());
      }
    }
  }
  S.__closure = { runOnJS: tmp3(4566).runOnJS, updateIsActivityFocused, mode };
  S.__workletHash = 5971237403457;
  S.__initData = __initData4;
  ({ runOnJS: tmp3(4566).runOnJS, updateIsActivityFocused, mode });
  const animatedReaction = tmp3Result10.useAnimatedReaction(I, S);
  const fn = function v() {
    return mode.get();
  };
  fn.__closure = { mode };
  fn.__workletHash = 8288240256860;
  fn.__initData = __initData5;
  const fn2 = function y(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport2;
      const runOnJSResult = obj.runOnJS(callback);
      const value = focused.get();
      let id;
      if (value != null) {
        id = value.id;
      }
      runOnJSResult(id, arg0);
    }
  };
  const tmp3Result11 = tmp3(4566);
  fn2.__closure = { runOnJS: tmp3(4566).runOnJS, updateIsActivityFocused, focused };
  fn2.__workletHash = 12552370107483;
  fn2.__initData = __initData6;
  ({ runOnJS: tmp3(4566).runOnJS, updateIsActivityFocused, focused });
  const animatedReaction1 = tmp3Result11.useAnimatedReaction(fn, fn2);
  const items4 = [c9];
  const tmp3Result12 = tmp3(563);
  const stateFromStoresObject = tmp3Result12.useStateFromStoresObject(items4, () => {
    const obj = { isReactingToThermalState: _undefined.isReactingToThermalState(), consumedRequestToRespondToSeriousThermalState: _undefined.consumedRequestToRespondToSeriousThermalState() };
    return obj;
  });
  const items5 = [layoutManager, participantId];
  ({ isReactingToThermalState, consumedRequestToRespondToSeriousThermalState } = stateFromStoresObject);
  const callback1 = obj.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    layoutManager.setTargetDimensions(participantId, nativeEvent.width, nativeEvent.height);
  }, items5);
  const tmp3Result13 = tmp3(8899);
  canRenderParticipantVideo = tmp3Result13.useCanRenderParticipantVideo(stateFromStores);
  if (canRenderParticipantVideo) {
    canRenderParticipantVideo = !(tmp19 && isReactingToThermalState);
  }
  const items6 = [canRenderParticipantVideo];
  const effect1 = obj.useEffect(() => {
    const tmp = canRenderParticipantVideo;
    if (!tmp) {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(constants.VOICE_PANEL_PIP_CONTENT_READY);
    }
  }, items6);
  const obj4 = { style: null, children: null };
  const tmp31 = closure_23;
  const tmp6Result4 = NativeViewDefault;
  if (canRenderParticipantVideo) {
    const items7 = [, ];
    ({ blackBackground: arr9[0], user: arr9[1] } = tmp);
    obj4.style = items7;
    const obj5 = { style: tmp5, participantId, children: closure_22(VideoStream, obj6) };
    obj6 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, streamId: stateFromStores.streamId, style: items8, onSize: callback1, onReady: markContentReady };
    items8 = [tmp.video, undefined];
    const items9 = [closure_22(AnimatedVideoWrapper, obj5), closure_22(InnerStroke, {})];
    obj4.children = items9;
    tmp44 = obj4;
  } else {
    obj4.style = memo;
    let tmp33 = null;
    if (null != tmp6ResultResult) {
      const obj7 = { colors: tmp6ResultResult, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, style: layoutManager.absoluteFill, layout: layoutTransition, pointerEvents: "none" };
      tmp33 = closure_22(LinearGradient, obj7);
    }
    const items10 = [tmp33, , , ];
    const obj8 = { style: tmp.avatarWrapper, children: tmp37Result };
    tmp37Result = null;
    const tmp6Result5 = NativeViewDefault;
    if (null != user1) {
      const obj9 = { source: tmp3Result14.getCachedSourceFromURI(user1.getAvatarURL(guildId, 80, false)), size: tmp19 ? AvatarSizes.LARGE : AvatarSizes.XLARGE, avatarDecoration: userAvatarDecoration };
      const Avatar = tmp3(1177).Avatar;
      tmp3Result14 = tmp3(8289);
      AvatarSizes = tmp3(1177).AvatarSizes;
      userAvatarDecoration = undefined;
      if (stateFromStores != null) {
        userAvatarDecoration = stateFromStores.userAvatarDecoration;
      }
      tmp37Result = tmp37(Avatar, obj9);
    }
    items10[1] = closure_22(tmp6Result5, obj8);
    const obj10 = { style: tmp.userOpacity };
    items10[2] = closure_22(InnerStroke, obj10);
    let tmp37Result2 = null;
    if (tmp19) {
      tmp37Result2 = null;
      if (consumedRequestToRespondToSeriousThermalState) {
        const obj11 = { style: tmp.thermalAlertIconContainer, children: closure_22(Icon, obj12) };
        obj12 = { style: tmp.thermalAlertIcon, source: AssetRegistryDefault, color: tmp.thermalAlertIcon.color };
        const tmp6Result6 = NativeViewDefault;
        Icon = tmp3(1177).Icon;
        tmp37Result2 = tmp37(tmp6Result6, obj11);
      }
    }
    items10[3] = tmp37Result2;
    obj4.children = items10;
    tmp44 = obj4;
  }
  return tmp31(tmp6Result4, tmp44);
}
function AnimatedVideoWrapper(arg0) {
  let children;
  let items;
  let participantId;
  let style;
  ({ participantId, style, children } = arg0);
  const layoutManager = react.useContext(VoicePanelStateContextDefault).layoutManager;
  const obj = VoicePanelCardLayoutManager;
  const targetDimensionsSubscription = obj.useTargetDimensionsSubscription(participantId, layoutManager);
  const fn = function u() {
    let height;
    let width;
    const value = targetDimensionsSubscription.get();
    ({ width, height } = value);
    let str = "100%";
    let str2 = "auto";
    if (height < width) {
      str = "auto";
      str2 = "100%";
    }
    size = { position: "absolute", aspectRatio: width / height, width: str, height: str2 };
    return size;
  };
  fn.__closure = { targetDimensions: targetDimensionsSubscription };
  fn.__workletHash = 10377220209728;
  fn.__initData = __initData7;
  const obj2 = ReanimatedRexport2;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj3 = { style: items, children };
  items = [style, animatedStyle];
  return authStore5(ReanimatedNativeViewDefault, obj3);
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
  let tmp = closure_24();
  let tmp2 = participantId;
  let tmp3 = dependencyMap;
  let obj = participantId(16916);
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
  let tmp5 = transitionState === participantId(4540).TransitionStates.YEETED ? tmp.onTop : tmp.onBottom;
  const context = obj2.useContext(mode(11754));
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
  const tmp2Result3 = tmp2(8881);
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
    tmp23 = closure_22(tmp2(8877).StreamEnded, obj3);
  } else {
    tmp23 = null;
    if (stateFromStores !== tmp17.FAILED) {
      let tmp18Result;
      if (null != streamId) {
        const obj4 = { style: tmp5, participantId, children: closure_22(VideoStream, obj5) };
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
({ PixelRatio: hasOwnProperty, StyleSheet } = react_native);
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const VoicePanelPIPModes = VoicePanelPIPConstants.VoicePanelPIPModes;
let Constants = Constants_mod2;
({ ApplicationStreamStates: closure_16, ComponentActions: closure_17 } = Constants);
Constants = Constants_mod2;
({ ActivityLayoutMode: closure_18, OrientationLockState: closure_19 } = Constants);
({ ParticipantTypes: closure_20, isActivityParticipant: closure_21 } = CallConstants);
({ jsx: closure_22, jsxs: closure_23 } = Fragment);
let createStyles = createStyles_mod;
let obj = { contentWrapper: { position: "absolute", width: "100%", height: "100%", overflow: "hidden", alignItems: "center", justifyContent: "center" }, userOpacity: { opacity: 0.1 }, activity: { position: "absolute", width: "100%", height: "100%" }, user: { position: "absolute", width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }, video: { position: "absolute", width: "100%", height: "100%" }, avatarWrapper: { position: "relative", width: "56%", height: "56%", alignItems: "center", justifyContent: "center" }, thermalAlertIconContainer: size, thermalAlertIcon: size1, onTop: { zIndex: 1 }, onBottom: { zIndex: 0 }, streamEmptyImage: { width: "50%" }, emptyPip: obj2, innerStroke: { position: "absolute", top: -1, left: -1, bottom: -1, right: -1, borderWidth: 2, borderColor: "white", zIndex: 1, opacity: 0.3 }, blackBackground: { backgroundColor: "black" } };
size = { width: 22, height: 22, backgroundColor: "rgba(78, 80, 88, 0.48)", borderRadius: nativeDefault.radii.round, justifyContent: "center", alignItems: "center", position: "absolute", top: 6, left: 6 };
createStyles = createStyles.createStyles;
size1 = { width: 14, height: 14, color: nativeDefault.colors.WHITE };
obj2 = { backgroundColor: nativeDefault.colors.BLACK };
let merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_24 = createStyles(obj);
const LinearGradient = ReanimatedRexport.createAnimatedComponent(LinearGradientDefault);
const __initData = { code: "function VoicePanelPIPContentTsx1(){const{windowDimensions}=this.__closure;return windowDimensions.get();}" };
const __initData2 = { code: "function VoicePanelPIPContentTsx2(windowDimensionsVal,previousWindowDimensionsVal){const{runOnJS,handleTargetAspectRatioParams}=this.__closure;if(windowDimensionsVal!==previousWindowDimensionsVal){runOnJS(handleTargetAspectRatioParams)(windowDimensionsVal);}}" };
const __initData3 = { code: "function VoicePanelPIPContentTsx3(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}" };
const __initData4 = { code: "function VoicePanelPIPContentTsx4(focusedParticipantId,previousFocusedParticipantId){const{runOnJS,updateIsActivityFocused,mode}=this.__closure;if(focusedParticipantId!==previousFocusedParticipantId){runOnJS(updateIsActivityFocused)(focusedParticipantId,mode.get());}}" };
const __initData5 = { code: "function VoicePanelPIPContentTsx5(){const{mode}=this.__closure;return mode.get();}" };
const __initData6 = { code: "function VoicePanelPIPContentTsx6(modeVal,previousModeVal){const{runOnJS,updateIsActivityFocused,focused}=this.__closure;if(modeVal!==previousModeVal){var _focused$get;runOnJS(updateIsActivityFocused)((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,modeVal);}}" };
const __initData7 = { code: "function VoicePanelPIPContentTsx7(){const{targetDimensions}=this.__closure;const{width:targetWidth,height:targetHeight}=targetDimensions.get();let height='100%';let width='100%';if(targetHeight<targetWidth){width='auto';}else{height='auto';}return{position:'absolute',aspectRatio:targetWidth/targetHeight,width:width,height:height};}" };
let closure_40 = react.memo(function EmptyPIP(transitionState) {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  const items = [transitionState, transitionCleanUp];
  const tmp = closure_24();
  const effect = react.useEffect(() => {
    if (transitionState === native.TransitionStates.YEETED) {
      transitionCleanUp();
    }
  }, items);
  const obj = { style: tmp.emptyPip };
  return closure_22(transitionCleanUp(5901), obj);
});
const memoResult = react.memo(function VoicePanelPIPContent(layoutTransition) {
  let obj4;
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
  let tmp = closure_24();
  const contentWrapper = tmp;
  const id1 = AuthenticationStore.getId();
  let obj2 = layoutTransition(id[28]);
  let items = [ChannelRTCStore];
  let items1 = [id, channelId, id1];
  const items2 = [width, height, tmp.contentWrapper];
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
      return authStore5(closure_40, obj2, arg0);
    } else {
      const obj3 = { participantId: id.id, transitionState, transitionCleanUp, layoutTransition };
      const type = id.type;
      if (constants.ACTIVITY === type) {
        const obj4 = {};
        const merged = Object.assign(obj3);
        return authStore5(ActivityInVoice, obj4, arg0);
      } else if (constants.STREAM === type) {
        const obj5 = {};
        const merged1 = Object.assign(obj3);
        return authStore5(Stream, obj5, arg0);
      } else {
        if (constants.USER !== type) {
          const HIDDEN_STREAM = tmp19.HIDDEN_STREAM;
        }
        const obj = {};
        const merged2 = Object.assign(obj3);
        return authStore5(User, obj, arg0);
      }
    }
  }, items3);
  let obj3 = { style: memo, pointerEvents: "none", children: closure_22(layoutTransition(id[24]).TransitionGroup, obj4) };
  obj4 = { items: stateFromStores, renderItem: callback, getItemKey: getFocusedKey };
  const tmp6 = channelId(id[26]);
  return closure_22(tmp6, obj3);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPContent.tsx");

export default memoResult;
