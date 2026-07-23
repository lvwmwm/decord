// Module ID: 15843
// Function ID: 122397
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 27, 1347, 4143, 10539, 4149, 1194, 1348, 1849, 10015, 15770, 653, 4155, 4148, 33, 4130, 689, 10014, 15764, 10586, 1207, 4476, 15774, 5517, 15769, 624, 1450, 3991, 10601, 8213, 10575, 10020, 1273, 8479, 10017, 7589, 15686, 10233, 10568, 10571, 2]

// Module 15843 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import importAllResult from "ANDROID_SURFACE_DIRECT_RENDERER_EXPERIMENT";
import get_ActivityIndicator from "useWindowDimensions";
import closure_6 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import { VoicePanelModes } from "VoicePanelModes";
import { VoicePanelPIPModes } from "VoicePanelPIPModes";
import ME from "ME";
import items3 from "items3";
import ParticipantTypes from "ParticipantTypes";
import jsxProd from "Button";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function VideoStream(streamId) {
  streamId = streamId.streamId;
  let obj = streamId(15764);
  setHasActiveVideoOutputSink = obj.useSetHasActiveVideoOutputSink(importAllResult.useContext(setHasActiveVideoOutputSink(10014)).streamOutputSinkStack);
  const items = [setHasActiveVideoOutputSink, streamId];
  const effect = importAllResult.useEffect(() => {
    if (null != streamId) {
      setHasActiveVideoOutputSink(streamId, true);
      return () => {
        outer1_1(outer1_0, false);
      };
    }
  }, items);
  obj = {};
  const merged = Object.assign(streamId);
  return callback(setHasActiveVideoOutputSink(10586), obj);
}
function markContentReady() {
  const ComponentDispatch = require(1207) /* reportDevtoolsEvent */.ComponentDispatch;
  ComponentDispatch.dispatch(constants2.VOICE_PANEL_PIP_CONTENT_READY);
}
function useTransitionStyles(items9, transitionState, transitionCleanUp) {
  const _require = transitionState;
  let closure_1 = transitionCleanUp;
  const items = [transitionState, transitionCleanUp];
  const effect = importAllResult.useEffect(() => {
    function handleVideoReady() {
      clearTimeout(closure_0);
      const timerId = setTimeout(() => {
        let tmp;
        if (null != handleVideoReady) {
          tmp = handleVideoReady();
        }
        return tmp;
      }, 17);
    }
    if (transitionState === transitionState(outer1_2[22]).TransitionStates.YEETED) {
      const _setTimeout = setTimeout;
      transitionState = setTimeout(() => {
        let tmp;
        if (null != handleVideoReady) {
          tmp = handleVideoReady();
        }
        return tmp;
      }, 500);
      let ComponentDispatch = transitionState(outer1_2[21]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(outer1_16.VOICE_PANEL_PIP_CONTENT_READY, handleVideoReady);
      return () => {
        const ComponentDispatch = callback(outer2_2[21]).ComponentDispatch;
        ComponentDispatch.unsubscribe(outer2_16.VOICE_PANEL_PIP_CONTENT_READY, handleVideoReady);
        clearTimeout(callback);
      };
    }
  }, items);
  return transitionState === _require(4476).TransitionStates.YEETED ? items9.onTop : items9.onBottom;
}
function InnerStroke(style) {
  style = style.style;
  let obj = style(height[23]);
  const size = obj.usePIPState();
  const width = size.width;
  height = size.height;
  const tmp = callback3();
  let _slicedToArray = tmp;
  obj = {};
  let items = [width, height, tmp.innerStroke, style];
  obj.style = importAllResult.useMemo(() => {
    const items = [tmp.innerStroke, , ];
    const obj = { borderRadius: style(height[25]).getVoicePanelPIPBorderRadius(width, height) + 1 };
    items[1] = obj;
    items[2] = style;
    return items;
  }, items);
  return callback(width(height[24]), obj);
}
function ActivityInVoice(participantId) {
  participantId = participantId.participantId;
  const transitionState = participantId.transitionState;
  let items9 = callback3();
  let tmp = useTransitionStyles(items9, transitionState, participantId.transitionCleanUp);
  const context = first.useContext(channelId(layoutManager[18]));
  channelId = context.channelId;
  layoutManager = context.layoutManager;
  const windowDimensions = context.windowDimensions;
  let obj = participantId(layoutManager[26]);
  const items = [closure_11];
  let PIP = obj.useStateFromStores(items, () => outer1_11.getChannel(channelId));
  const tmp3 = windowDimensions(first.useState(transitionState === participantId(layoutManager[22]).TransitionStates.MOUNTED), 2);
  first = tmp3[0];
  let closure_5 = tmp3[1];
  let obj1 = participantId(layoutManager[26]);
  const items1 = [stateFromStores1];
  const items2 = [channelId, participantId];
  const stateFromStores = obj1.useStateFromStores(items1, () => {
    const participant = stateFromStores1.getParticipant(channelId, participantId);
    if (null != participant) {
      if (participant.type === outer1_19.ACTIVITY) {
        let applicationId = participant.applicationId;
      }
      return applicationId;
    }
    applicationId = participantId;
  }, items2);
  let obj2 = participantId(layoutManager[26]);
  const items3 = [stateFromStores];
  const items4 = [stateFromStores];
  stateFromStores1 = obj2.useStateFromStores(items3, () => stateFromStores.getPipOrientationLockStateForApp(stateFromStores), items4);
  const items5 = [layoutManager, stateFromStores1, stateFromStores];
  const callback = first.useCallback((width) => {
    if (outer1_18.LANDSCAPE === stateFromStores1) {
      layoutManager.setTargetDimensions(stateFromStores, 16, 9);
    } else if (outer1_18.PORTRAIT === tmp2) {
      layoutManager.setTargetDimensions(stateFromStores, 9, 16);
    } else if (outer1_18.UNLOCKED === tmp2) {
      let num2 = 9;
      if (tmp) {
        num2 = 16;
      }
      let num3 = 16;
      if (tmp) {
        num3 = 9;
      }
      layoutManager.setTargetDimensions(stateFromStores, num2, num3);
      const tmp7 = stateFromStores;
    }
  }, items5);
  const items6 = [callback];
  const layoutEffect = first.useLayoutEffect(() => {
    let obj = participantId(layoutManager[27]);
    const size = obj.getWindowDimensions();
    obj = {};
    const merged = Object.assign(size);
    obj["landscape"] = size.width > size.height;
    callback(obj);
  }, items6);
  const fn = function c() {
    return windowDimensions.get();
  };
  fn.__closure = { windowDimensions };
  fn.__workletHash = 20962628184;
  fn.__initData = closure_24;
  const fn2 = function u(arg0, arg1) {
    if (arg0 !== arg1) {
      participantId(layoutManager[28]).runOnJS(callback)(arg0);
      const obj = participantId(layoutManager[28]);
    }
  };
  obj = { runOnJS: participantId(layoutManager[28]).runOnJS, handleTargetAspectRatioParams: callback };
  fn2.__closure = obj;
  fn2.__workletHash = 10001753822389;
  fn2.__initData = closure_25;
  const animatedReaction = participantId(layoutManager[28]).useAnimatedReaction(fn, fn2);
  let closure_9 = tmp10;
  const items7 = [null != PIP, first];
  const effect = first.useEffect(() => {
    if (!first) {
      if (closure_9) {
        outer1_35();
      }
    }
    if (first) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        outer1_5(false);
        outer2_35();
      }, 500);
      return () => {
        clearTimeout(closure_0);
      };
    }
  }, items7);
  if (first) {
    return null;
  } else if (tmp10) {
    obj = {};
    const items8 = [items9.activity, tmp];
    obj.style = items8;
    obj1 = { channel: PIP };
    PIP = constants3.PIP;
    obj1.layoutMode = PIP;
    items9 = [callback(channelId(layoutManager[29]), obj1), ];
    tmp = callback;
    items9[1] = callback(InnerStroke, {});
    obj.children = items9;
    let tmp15 = callback2(channelId(layoutManager[24]), obj);
    const tmp19 = channelId(layoutManager[24]);
  } else {
    obj2 = { participantId: store.getId() };
    tmp15 = callback(User, obj2);
  }
}
function User(participantId) {
  let consumedRequestToRespondToSeriousThermalState;
  let focused;
  let guildId;
  let isReactingToThermalState;
  let transitionCleanUp;
  let transitionState;
  participantId = participantId.participantId;
  let dominantColorFromImage;
  let closure_8;
  let callback;
  let canRenderParticipantVideo;
  ({ transitionState, transitionCleanUp } = participantId);
  const tmp = callback3();
  const importDefault = tmp;
  let tmp2 = useTransitionStyles(tmp, transitionState, transitionCleanUp);
  const dependencyMap = tmp2;
  const context = focused.useContext(importDefault(10014));
  const channelId = context.channelId;
  ({ guildId, focused } = context);
  const mode = context.mode;
  const layoutManager = context.layoutManager;
  let obj = participantId(624);
  let items = [dominantColorFromImage];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const participant = dominantColorFromImage.getParticipant(channelId, participantId);
    let tmp2;
    if (null != participant) {
      tmp2 = participant;
    }
    let type;
    if (null != tmp2) {
      type = tmp2.type;
    }
    let tmp4;
    if (type === outer1_19.USER) {
      tmp4 = tmp2;
    }
    return tmp4;
  });
  let user;
  if (null != stateFromStores) {
    user = stateFromStores.user;
  }
  if (null == user) {
    user = currentUser.getCurrentUser();
  }
  let obj1 = participantId(8213);
  let avatarURL;
  if (null != user) {
    avatarURL = user.getAvatarURL(guildId, 80, false);
  }
  dominantColorFromImage = obj1.useDominantColorFromImage(avatarURL);
  const items1 = [tmp, tmp2, dominantColorFromImage];
  const memo = focused.useMemo(() => {
    const items = [tmp.user, closure_2, { backgroundColor: dominantColorFromImage }];
    return items;
  }, items1);
  const tmp10 = channelId(focused.useState(false), 2);
  const first = tmp10[0];
  closure_8 = tmp10[1];
  let obj2 = participantId(10575);
  let id;
  if (null != stateFromStores) {
    user = stateFromStores.user;
    if (null != user) {
      id = user.id;
    }
  }
  const items2 = [channelId];
  const surfaceDirectRendererExperiment = obj2.useSurfaceDirectRendererExperiment(id, { location: "VoicePanelPIPContent" });
  callback = focused.useCallback((arg0, arg1) => {
    let participant;
    if (null != arg0) {
      participant = dominantColorFromImage.getParticipant(channelId, arg0);
    }
    let tmp5 = null != participant;
    if (tmp5) {
      tmp5 = outer1_20(participant);
    }
    if (tmp5) {
      tmp5 = arg1 === outer1_13.PANEL;
    }
    closure_8(tmp5);
  }, items2);
  let obj3 = participantId(3991);
  const fn = function p() {
    const value = focused.get();
    let id;
    if (null != value) {
      id = value.id;
    }
    return id;
  };
  fn.__closure = { focused };
  fn.__workletHash = 3980010676581;
  fn.__initData = closure_26;
  const fn2 = function l(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = participantId(tmp2[28]);
      participantId(tmp2[28]).runOnJS(callback)(arg0, mode.get());
      const runOnJSResult = participantId(tmp2[28]).runOnJS(callback);
    }
  };
  obj = { runOnJS: participantId(3991).runOnJS, updateIsActivityFocused: callback, mode };
  fn2.__closure = obj;
  fn2.__workletHash = 5971237403457;
  fn2.__initData = closure_27;
  const animatedReaction = obj3.useAnimatedReaction(fn, fn2);
  let obj5 = participantId(3991);
  const fn3 = function f() {
    return mode.get();
  };
  fn3.__closure = { mode };
  fn3.__workletHash = 8288240256860;
  fn3.__initData = closure_28;
  class S {
    constructor(arg0, arg1) {
      if (participantId !== arg1) {
        tmp = participantId;
        tmp2 = outer1_2;
        num = 28;
        obj = participantId(outer1_2[28]);
        tmp3 = c9;
        tmp5 = focused;
        runOnJSResult = obj.runOnJS(c9);
        value = focused.get();
        tmp7 = null;
        id = undefined;
        if (null != value) {
          id = value.id;
        }
        tmp4Result = runOnJSResult(id, participantId);
      }
      return;
    }
  }
  obj = { runOnJS: participantId(3991).runOnJS, updateIsActivityFocused: callback, focused };
  S.__closure = obj;
  S.__workletHash = 12552370107483;
  S.__initData = closure_29;
  const animatedReaction1 = obj5.useAnimatedReaction(fn3, S);
  let obj7 = participantId(624);
  const items3 = [closure_8];
  const stateFromStoresObject = obj7.useStateFromStoresObject(items3, () => ({ isReactingToThermalState: closure_8.isReactingToThermalState(), consumedRequestToRespondToSeriousThermalState: closure_8.consumedRequestToRespondToSeriousThermalState() }));
  const items4 = [layoutManager, participantId];
  ({ isReactingToThermalState, consumedRequestToRespondToSeriousThermalState } = stateFromStoresObject);
  const callback1 = focused.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    layoutManager.setTargetDimensions(participantId, nativeEvent.width, nativeEvent.height);
  }, items4);
  let obj8 = participantId(10020);
  canRenderParticipantVideo = obj8.useCanRenderParticipantVideo(stateFromStores);
  if (canRenderParticipantVideo) {
    let tmp20 = first;
    if (first) {
      tmp20 = isReactingToThermalState;
    }
    canRenderParticipantVideo = !tmp20;
  }
  const items5 = [canRenderParticipantVideo];
  const effect = focused.useEffect(() => {
    if (!canRenderParticipantVideo) {
      outer1_35();
    }
  }, items5);
  obj1 = {};
  if (canRenderParticipantVideo) {
    const items6 = [, ];
    ({ blackBackground: arr8[0], user: arr8[1] } = tmp);
    obj1.style = items6;
    obj2 = { style: tmp2, participantId };
    obj3 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, streamId: stateFromStores.streamId };
    const items7 = [tmp.video, undefined];
    obj3.style = items7;
    obj3.onSize = callback1;
    obj3.onReady = markContentReady;
    obj2.children = callback(VideoStream, obj3);
    const items8 = [callback(AnimatedVideoWrapper, obj2), callback(InnerStroke, {})];
    obj1.children = items8;
    let tmp44 = obj1;
  } else {
    obj1.style = memo;
    const obj4 = { style: tmp.avatarWrapper };
    let tmp29Result = null;
    if (null != user) {
      obj5 = { source: participantId(8213).getCachedSourceFromURI(user.getAvatarURL(guildId, 80, false)) };
      const AvatarSizes = participantId(1273).AvatarSizes;
      obj5.size = first ? AvatarSizes.LARGE : AvatarSizes.XLARGE;
      let userAvatarDecoration;
      if (null != stateFromStores) {
        userAvatarDecoration = stateFromStores.userAvatarDecoration;
      }
      obj5.avatarDecoration = userAvatarDecoration;
      tmp29Result = callback(participantId(1273).Avatar, obj5);
      const obj13 = participantId(8213);
      const tmp29 = callback;
    }
    obj4.children = tmp29Result;
    const items9 = [callback(importDefault(5517), obj4), , ];
    const obj6 = { style: tmp.userOpacity };
    items9[1] = callback(InnerStroke, obj6);
    let tmp37 = null;
    if (first) {
      tmp37 = null;
      if (consumedRequestToRespondToSeriousThermalState) {
        obj7 = { style: tmp.thermalAlertIconContainer };
        obj8 = { style: tmp.thermalAlertIcon, source: importDefault(8479), color: tmp.thermalAlertIcon.color };
        obj7.children = callback(participantId(1273).Icon, obj8);
        tmp37 = callback(importDefault(5517), obj7);
        const tmp41 = importDefault(5517);
      }
    }
    items9[2] = tmp37;
    obj1.children = items9;
    tmp44 = obj1;
    const tmp24 = callback;
    const tmp27 = importDefault(5517);
  }
  return closure_22(importDefault(5517), tmp44);
}
function AnimatedVideoWrapper(arg0) {
  let children;
  let participantId;
  let style;
  ({ participantId, style, children } = arg0);
  targetDimensionsSubscription = targetDimensionsSubscription(10017).useTargetDimensionsSubscription(participantId, importAllResult.useContext(importDefault(10014)).layoutManager);
  let obj = targetDimensionsSubscription(10017);
  const fn = function a() {
    let height;
    let width;
    const value = targetDimensionsSubscription.get();
    ({ width, height } = value);
    let str = "auto";
    let str2 = "100%";
    if (height < width) {
      str = "100%";
      str2 = "auto";
    }
    const obj = { position: "absolute", aspectRatio: width / height, width: str2, height: str };
    return obj;
  };
  fn.__closure = { targetDimensions: targetDimensionsSubscription };
  fn.__workletHash = 10377220209728;
  fn.__initData = closure_30;
  const animatedStyle = targetDimensionsSubscription(3991).useAnimatedStyle(fn);
  style = [, ];
  style[0] = style;
  style[1] = animatedStyle;
  return callback(importDefault(7589), { style, children });
}
function Stream(participantId) {
  let dependencyMap;
  let layoutManager;
  let transitionCleanUp;
  let transitionState;
  participantId = participantId.participantId;
  ({ transitionState, transitionCleanUp } = participantId);
  let tmp = callback3();
  let obj = participantId(15774);
  const mode = obj.usePIPState().mode;
  const context = streamId.useContext(mode(10014));
  ({ channelId: dependencyMap, layoutManager } = context);
  let obj1 = participantId(624);
  const items = [_isNativeReflectConstruct];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => {
    const participant = ref2.getParticipant(closure_2, participantId);
    let tmp2 = null != participant;
    if (tmp2) {
      tmp2 = participant.type === outer1_19.STREAM;
    }
    const obj = {};
    let streamId;
    if (tmp2) {
      streamId = participant.streamId;
    }
    obj.streamId = streamId;
    let tmp5;
    if (tmp2) {
      const user = participant.user;
      let id;
      if (null != user) {
        id = user.id;
      }
      tmp5 = id;
    }
    obj.userId = tmp5;
    return obj;
  });
  streamId = stateFromStoresObject.streamId;
  let obj2 = participantId(10575);
  const surfaceDirectRendererExperiment = obj2.useSurfaceDirectRendererExperiment(stateFromStoresObject.userId, { location: "VoicePanelPIPContent.Stream" });
  let obj3 = participantId(624);
  const items1 = [closure_9];
  const stateFromStores = obj3.useStateFromStores(items1, () => {
    const activeStreamForStreamKey = tmp12.getActiveStreamForStreamKey(participantId);
    let state;
    if (null != activeStreamForStreamKey) {
      state = activeStreamForStreamKey.state;
    }
    return state;
  });
  const items2 = [layoutManager, participantId];
  const callback = streamId.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    layoutManager.setTargetDimensions(participantId, nativeEvent.width, nativeEvent.height);
  }, items2);
  const value = PixelRatio.get();
  PixelRatio = value;
  let closure_6 = streamId.useRef(0);
  _isNativeReflectConstruct = streamId.useRef(0);
  const items3 = [streamId, value, mode];
  const items4 = [streamId, value, mode];
  const callback1 = streamId.useCallback((nativeEvent) => {
    let height;
    let width;
    if (null != streamId) {
      ({ width, height } = nativeEvent.nativeEvent.layout);
      let tmp2 = width === ref.current;
      if (tmp2) {
        tmp2 = height === ref2.current;
      }
      if (!tmp2) {
        ref.current = width;
        ref2.current = height;
        if (mode === outer1_14.IN_APP) {
          let obj = participantId(outer1_2[37]);
          obj = { width: width * closure_5, height: height * closure_5 };
          obj.updateVideoSize(streamId, obj, 1);
        }
      }
    }
  }, items3);
  const callback2 = streamId.useCallback((arg0) => {
    let tmp = null == streamId || arg0;
    if (!tmp) {
      tmp = mode !== outer1_14.IN_APP;
    }
    if (!tmp) {
      let obj = participantId(outer1_2[37]);
      obj = { width: ref.current * closure_5, height: ref2.current * closure_5 };
      obj.updateVideoSize(streamId, obj, 1);
    }
  }, items4);
  const items5 = [callback2];
  const effect = streamId.useEffect(() => {
    let closure_0 = mode(outer1_2[38]).addOnPipModeChangedListener(callback2);
    return () => {
      if (null != closure_0) {
        closure_0.remove();
      }
    };
  }, items5);
  closure_9 = tmp12;
  const items6 = [null != streamId];
  const effect1 = streamId.useEffect(() => {
    if (closure_9) {
      outer1_35();
    }
  }, items6);
  if (stateFromStores === constants.ENDED) {
    obj = { style: tmp.streamEmptyImage, resizeMode: "contain" };
    let tmp14Result = callback(participantId(10568).StreamEnded, obj);
  } else if (stateFromStores === constants.FAILED) {
    obj = { style: tmp.streamEmptyImage, resizeMode: "contain" };
    tmp14Result = callback(participantId(10571).StreamFailed, obj);
  } else if (tmp12) {
    obj1 = { style: tmp2, participantId };
    obj2 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, streamId, style: tmp.video, onSize: callback, onLayout: callback1 };
    obj1.children = callback(VideoStream, obj2);
    tmp14Result = tmp14(AnimatedVideoWrapper, obj1);
  } else {
    obj3 = { participantId };
    tmp14Result = tmp14(User, obj3);
  }
  return tmp14Result;
}
function getFocusedKey(id) {
  return id.id;
}
function renderFocusedParticipant(arg0, id, transitionState, transitionCleanUp) {
  if ("--voice-panel-pip-empty" === id.id) {
    let obj = { transitionState, transitionCleanUp };
    return callback(closure_31, obj, arg0);
  } else {
    obj = { participantId: id.id, transitionState, transitionCleanUp };
    const type = id.type;
    if (constants4.ACTIVITY === type) {
      const obj1 = {};
      const merged = Object.assign(obj);
      return callback(ActivityInVoice, obj1, arg0);
    } else if (constants4.STREAM === type) {
      const obj2 = {};
      const merged1 = Object.assign(obj);
      return callback(Stream, obj2, arg0);
    } else {
      if (constants4.USER !== type) {
        const HIDDEN_STREAM = constants4.HIDDEN_STREAM;
      }
      obj = {};
      const merged2 = Object.assign(obj);
      return callback(User, obj, arg0);
    }
  }
}
function areParticipantsEqual(arg0, arg1) {
  if (arg0.length !== arg1.length) {
    return false;
  } else if (0 === arg0.length) {
    return true;
  } else {
    const tmp2 = _createForOfIteratorHelperLoose(arg0);
    let iter = tmp2();
    let num2 = 0;
    if (!iter.done) {
      while (true) {
        let tmp4 = arg1[num2];
        let id;
        if (null != tmp4) {
          id = tmp4.id;
        }
        if (iter.value.id !== id) {
          break;
        } else {
          num2 = num2 + 1;
          let iter2 = tmp2();
          iter = iter2;
        }
      }
      return false;
    }
    return true;
  }
}
let PixelRatio = get_ActivityIndicator.PixelRatio;
({ ApplicationStreamStates: closure_15, ComponentActions: closure_16 } = ME);
({ ActivityLayoutMode: closure_17, OrientationLockState: closure_18 } = items3);
({ ParticipantTypes: closure_19, isActivityParticipant: closure_20 } = ParticipantTypes);
({ jsx: closure_21, jsxs: closure_22 } = jsxProd);
let obj = { contentWrapper: { position: "absolute", width: "100%", height: "100%", overflow: "hidden", alignItems: "center", justifyContent: "center" }, userOpacity: { opacity: 0.1 }, activity: { position: "absolute", width: "100%", height: "100%" }, user: { position: "absolute", width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }, video: { position: "absolute", width: "100%", height: "100%" }, avatarWrapper: { position: "relative", width: "56%", height: "56%", alignItems: "center", justifyContent: "center" } };
obj = { width: 22, height: 22, backgroundColor: "rgba(78, 80, 88, 0.48)", borderRadius: require("_createForOfIteratorHelperLoose").radii.round, justifyContent: "center", alignItems: "center", position: "absolute", top: 6, left: 6 };
obj.thermalAlertIconContainer = obj;
_createForOfIteratorHelperLoose = { width: 14, height: 14, color: require("_createForOfIteratorHelperLoose").colors.WHITE };
obj.thermalAlertIcon = _createForOfIteratorHelperLoose;
obj.onTop = { zIndex: 1 };
obj.onBottom = { zIndex: 0 };
obj.streamEmptyImage = { width: "50%" };
let obj2 = {};
let merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
obj2["backgroundColor"] = require("_createForOfIteratorHelperLoose").colors.BLACK;
obj.emptyPip = obj2;
obj.innerStroke = { position: "absolute", top: -1, left: -1, bottom: -1, right: -1, borderWidth: 2, borderColor: "white", zIndex: 1, opacity: 0.3 };
obj.blackBackground = { backgroundColor: "black" };
let closure_23 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_24 = { code: "function VoicePanelPIPContentTsx1(){const{windowDimensions}=this.__closure;return windowDimensions.get();}" };
let closure_25 = { code: "function VoicePanelPIPContentTsx2(windowDimensionsVal,previousWindowDimensionsVal){const{runOnJS,handleTargetAspectRatioParams}=this.__closure;if(windowDimensionsVal!==previousWindowDimensionsVal){runOnJS(handleTargetAspectRatioParams)(windowDimensionsVal);}}" };
let closure_26 = { code: "function VoicePanelPIPContentTsx3(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}" };
let closure_27 = { code: "function VoicePanelPIPContentTsx4(focusedParticipantId,previousFocusedParticipantId){const{runOnJS,updateIsActivityFocused,mode}=this.__closure;if(focusedParticipantId!==previousFocusedParticipantId){runOnJS(updateIsActivityFocused)(focusedParticipantId,mode.get());}}" };
let closure_28 = { code: "function VoicePanelPIPContentTsx5(){const{mode}=this.__closure;return mode.get();}" };
let closure_29 = { code: "function VoicePanelPIPContentTsx6(modeVal,previousModeVal){const{runOnJS,updateIsActivityFocused,focused}=this.__closure;if(modeVal!==previousModeVal){var _focused$get;runOnJS(updateIsActivityFocused)((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,modeVal);}}" };
let closure_30 = { code: "function VoicePanelPIPContentTsx7(){const{targetDimensions}=this.__closure;const{width:targetWidth,height:targetHeight}=targetDimensions.get();let height='100%';let width='100%';if(targetHeight<targetWidth){width='auto';}else{height='auto';}return{position:'absolute',aspectRatio:targetWidth/targetHeight,width:width,height:height};}" };
let closure_31 = importAllResult.memo(function EmptyPIP(transitionState) {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  const items = [transitionState, transitionCleanUp];
  const effect = importAllResult.useEffect(() => {
    if (transitionState === transitionState(outer1_2[22]).TransitionStates.YEETED) {
      transitionCleanUp();
    }
  }, items);
  const tmp = callback3();
  return callback(transitionCleanUp(5517), { style: callback3().emptyPip });
});
const memoResult = importAllResult.memo(function VoicePanelPIPContent() {
  const channelId = importAllResult.useContext(id(width[18])).channelId;
  let obj = channelId(width[23]);
  const size = obj.usePIPState();
  id = size.id;
  width = size.width;
  const height = size.height;
  let tmp = callback3();
  id = store.getId();
  let items = [_isNativeReflectConstruct];
  let items1 = [id, channelId, id];
  const items2 = [width, height, tmp.contentWrapper];
  const stateFromStores = channelId(width[26]).useStateFromStores(items, () => {
    let tmp = id;
    if (null != id) {
      const participant = outer1_7.getParticipant(channelId, tmp);
      let type;
      if (null != participant) {
        type = participant.type;
      }
      let USER = type;
    } else {
      USER = outer1_19.USER;
    }
    if (null == USER) {
      USER = outer1_19.USER;
    }
    const obj = {};
    if (null == tmp) {
      tmp = id;
    }
    obj.id = tmp;
    obj.type = USER;
    const items = [obj];
    return items;
  }, items1, areParticipantsEqual);
  const memo = importAllResult.useMemo(() => {
    const items = [tmp.contentWrapper, ];
    const obj = { borderRadius: channelId(width[25]).getVoicePanelPIPBorderRadius(width, height) };
    items[1] = obj;
    const items1 = [items];
    return items1;
  }, items2);
  obj = { style: memo, pointerEvents: "none" };
  const obj2 = channelId(width[26]);
  obj = { items: stateFromStores, renderItem: renderFocusedParticipant, getItemKey: getFocusedKey };
  obj.children = callback(channelId(width[22]).TransitionGroup, obj);
  return callback(id(width[24]), obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPContent.tsx");

export default memoResult;
