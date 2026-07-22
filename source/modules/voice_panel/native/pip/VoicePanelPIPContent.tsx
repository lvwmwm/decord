// Module ID: 15726
// Function ID: 120224
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 15726 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  const arg1 = streamId;
  let obj = arg1(dependencyMap[19]);
  const setHasActiveVideoOutputSink = obj.useSetHasActiveVideoOutputSink(importAllResult.useContext(importDefault(dependencyMap[18])).streamOutputSinkStack);
  const importDefault = setHasActiveVideoOutputSink;
  const items = [setHasActiveVideoOutputSink, streamId];
  const effect = importAllResult.useEffect(() => {
    if (null != streamId) {
      setHasActiveVideoOutputSink(streamId, true);
      return () => {
        callback(closure_0, false);
      };
    }
  }, items);
  obj = {};
  const merged = Object.assign(streamId);
  return callback2(importDefault(dependencyMap[20]), obj);
}
function markContentReady() {
  const ComponentDispatch = arg1(dependencyMap[21]).ComponentDispatch;
  ComponentDispatch.dispatch(constants2.VOICE_PANEL_PIP_CONTENT_READY);
}
function useTransitionStyles(items9, transitionState, transitionCleanUp) {
  const importDefault = transitionCleanUp;
  const items = [transitionState, transitionCleanUp];
  const effect = importAllResult.useEffect(() => {
    function handleVideoReady() {
      clearTimeout(closure_0);
      const timerId = setTimeout(() => {
        let tmp;
        if (null != callback) {
          tmp = callback();
        }
        return tmp;
      }, 17);
    }
    const arg2 = handleVideoReady;
    if (transitionState === transitionState(closure_2[22]).TransitionStates.YEETED) {
      const _setTimeout = setTimeout;
      const transitionState = setTimeout(() => {
        let tmp;
        if (null != handleVideoReady) {
          tmp = handleVideoReady();
        }
        return tmp;
      }, 500);
      const ComponentDispatch = transitionState(closure_2[21]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(constants.VOICE_PANEL_PIP_CONTENT_READY, handleVideoReady);
      return () => {
        const ComponentDispatch = callback(closure_2[21]).ComponentDispatch;
        ComponentDispatch.unsubscribe(constants.VOICE_PANEL_PIP_CONTENT_READY, handleVideoReady);
        clearTimeout(callback);
      };
    }
  }, items);
  return transitionState === transitionState(dependencyMap[22]).TransitionStates.YEETED ? items9.onTop : items9.onBottom;
}
function InnerStroke(style) {
  style = style.style;
  const arg1 = style;
  let obj = arg1(dependencyMap[23]);
  const size = obj.usePIPState();
  const width = size.width;
  const importDefault = width;
  const height = size.height;
  const dependencyMap = height;
  const tmp = callback4();
  let closure_3 = tmp;
  obj = {};
  const items = [width, height, tmp.innerStroke, style];
  obj.style = importAllResult.useMemo(() => {
    const items = [tmp.innerStroke, , ];
    const obj = { borderRadius: style(height[25]).getVoicePanelPIPBorderRadius(width, height) + 1 };
    items[1] = obj;
    items[2] = style;
    return items;
  }, items);
  return callback2(importDefault(dependencyMap[24]), obj);
}
function ActivityInVoice(participantId) {
  participantId = participantId.participantId;
  const arg1 = participantId;
  const transitionState = participantId.transitionState;
  let items9 = callback4();
  let tmp = useTransitionStyles(items9, transitionState, participantId.transitionCleanUp);
  const context = importAllResult.useContext(importDefault(dependencyMap[18]));
  const channelId = context.channelId;
  const importDefault = channelId;
  const layoutManager = context.layoutManager;
  const dependencyMap = layoutManager;
  const windowDimensions = context.windowDimensions;
  let callback = windowDimensions;
  let obj = arg1(dependencyMap[26]);
  const items = [closure_11];
  let PIP = obj.useStateFromStores(items, () => channel.getChannel(channelId));
  const tmp3 = callback(importAllResult.useState(transitionState === arg1(dependencyMap[22]).TransitionStates.MOUNTED), 2);
  const first = tmp3[0];
  let closure_5 = tmp3[1];
  let obj1 = arg1(dependencyMap[26]);
  const items1 = [closure_7];
  const items2 = [channelId, participantId];
  const stateFromStores = obj1.useStateFromStores(items1, () => {
    const participant = stateFromStores1.getParticipant(channelId, participantId);
    if (null != participant) {
      if (participant.type === constants2.ACTIVITY) {
        let applicationId = participant.applicationId;
      }
      return applicationId;
    }
    applicationId = participantId;
  }, items2);
  let closure_6 = stateFromStores;
  let obj2 = arg1(dependencyMap[26]);
  const items3 = [closure_6];
  const items4 = [stateFromStores];
  const stateFromStores1 = obj2.useStateFromStores(items3, () => stateFromStores.getPipOrientationLockStateForApp(stateFromStores), items4);
  closure_7 = stateFromStores1;
  const items5 = [layoutManager, stateFromStores1, stateFromStores];
  callback = importAllResult.useCallback((width) => {
    if (constants.LANDSCAPE === stateFromStores1) {
      layoutManager.setTargetDimensions(stateFromStores, 16, 9);
    } else if (constants.PORTRAIT === tmp2) {
      layoutManager.setTargetDimensions(stateFromStores, 9, 16);
    } else if (constants.UNLOCKED === tmp2) {
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
  let closure_8 = callback;
  const items6 = [callback];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
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
  obj = { runOnJS: arg1(dependencyMap[28]).runOnJS, handleTargetAspectRatioParams: callback };
  fn2.__closure = obj;
  fn2.__workletHash = 10001753822389;
  fn2.__initData = closure_25;
  const animatedReaction = arg1(dependencyMap[28]).useAnimatedReaction(fn, fn2);
  let closure_9 = tmp10;
  const items7 = [null != PIP, first];
  const effect = importAllResult.useEffect(() => {
    if (!first) {
      if (tmp10) {
        callback();
      }
    }
    if (first) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        callback(false);
        callback2();
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
    items9 = [callback2(importDefault(dependencyMap[29]), obj1), ];
    tmp = callback2;
    items9[1] = callback2(InnerStroke, {});
    obj.children = items9;
    let tmp15 = callback3(importDefault(dependencyMap[24]), obj);
    const tmp19 = importDefault(dependencyMap[24]);
  } else {
    obj2 = { participantId: store.getId() };
    tmp15 = callback2(User, obj2);
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
  const arg1 = participantId;
  let closure_7;
  let closure_8;
  let closure_9;
  let closure_10;
  ({ transitionState, transitionCleanUp } = participantId);
  const tmp = callback4();
  const importDefault = tmp;
  const tmp2 = useTransitionStyles(tmp, transitionState, transitionCleanUp);
  const dependencyMap = tmp2;
  const context = importAllResult.useContext(importDefault(dependencyMap[18]));
  const channelId = context.channelId;
  let callback = channelId;
  ({ guildId, focused } = context);
  const mode = context.mode;
  const PixelRatio = mode;
  const layoutManager = context.layoutManager;
  let closure_6 = layoutManager;
  let obj = arg1(dependencyMap[26]);
  const items = [closure_7];
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
    if (type === constants2.USER) {
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
  let obj1 = arg1(dependencyMap[30]);
  let avatarURL;
  if (null != user) {
    avatarURL = user.getAvatarURL(guildId, 80, false);
  }
  const dominantColorFromImage = obj1.useDominantColorFromImage(avatarURL);
  closure_7 = dominantColorFromImage;
  const items1 = [tmp, tmp2, dominantColorFromImage];
  const memo = importAllResult.useMemo(() => {
    const items = [tmp.user, tmp2, { backgroundColor: dominantColorFromImage }];
    return items;
  }, items1);
  const tmp10 = callback(focused.useState(false), 2);
  const first = tmp10[0];
  closure_8 = tmp10[1];
  let obj2 = arg1(dependencyMap[31]);
  let id;
  if (null != stateFromStores) {
    user = stateFromStores.user;
    if (null != user) {
      id = user.id;
    }
  }
  const items2 = [channelId];
  const surfaceDirectRendererExperiment = obj2.useSurfaceDirectRendererExperiment(id, { location: "VoicePanelPIPContent" });
  callback = importAllResult.useCallback((arg0, arg1) => {
    let participant;
    if (null != arg0) {
      participant = dominantColorFromImage.getParticipant(channelId, arg0);
    }
    let tmp5 = null != participant;
    if (tmp5) {
      tmp5 = callback(participant);
    }
    if (tmp5) {
      tmp5 = arg1 === constants.PANEL;
    }
    closure_8(tmp5);
  }, items2);
  closure_9 = callback;
  let obj3 = arg1(dependencyMap[28]);
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
  obj = { runOnJS: arg1(dependencyMap[28]).runOnJS, updateIsActivityFocused: callback, mode };
  fn2.__closure = obj;
  fn2.__workletHash = 5971237403457;
  fn2.__initData = closure_27;
  const animatedReaction = obj3.useAnimatedReaction(fn, fn2);
  let obj5 = arg1(dependencyMap[28]);
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
        tmp2 = closure_2;
        num = 28;
        obj = participantId(closure_2[28]);
        tmp3 = closure_9;
        tmp5 = focused;
        runOnJSResult = obj.runOnJS(closure_9);
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
  obj = { runOnJS: arg1(dependencyMap[28]).runOnJS, updateIsActivityFocused: callback, focused };
  S.__closure = obj;
  S.__workletHash = 12552370107483;
  S.__initData = closure_29;
  const animatedReaction1 = obj5.useAnimatedReaction(fn3, S);
  let obj7 = arg1(dependencyMap[26]);
  const items3 = [closure_8];
  const stateFromStoresObject = obj7.useStateFromStoresObject(items3, () => ({ isReactingToThermalState: closure_8.isReactingToThermalState(), consumedRequestToRespondToSeriousThermalState: closure_8.consumedRequestToRespondToSeriousThermalState() }));
  const items4 = [layoutManager, participantId];
  ({ isReactingToThermalState, consumedRequestToRespondToSeriousThermalState } = stateFromStoresObject);
  const callback1 = importAllResult.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    layoutManager.setTargetDimensions(participantId, nativeEvent.width, nativeEvent.height);
  }, items4);
  let obj8 = arg1(dependencyMap[32]);
  let canRenderParticipantVideo = obj8.useCanRenderParticipantVideo(stateFromStores);
  if (canRenderParticipantVideo) {
    let tmp20 = first;
    if (first) {
      tmp20 = isReactingToThermalState;
    }
    canRenderParticipantVideo = !tmp20;
  }
  closure_10 = canRenderParticipantVideo;
  const items5 = [canRenderParticipantVideo];
  const effect = importAllResult.useEffect(() => {
    if (!canRenderParticipantVideo) {
      callback2();
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
    obj2.children = callback2(VideoStream, obj3);
    const items8 = [callback2(AnimatedVideoWrapper, obj2), callback2(InnerStroke, {})];
    obj1.children = items8;
    let tmp44 = obj1;
  } else {
    obj1.style = memo;
    const obj4 = { style: tmp.avatarWrapper };
    let tmp29Result = null;
    if (null != user) {
      obj5 = { source: arg1(dependencyMap[30]).getCachedSourceFromURI(user.getAvatarURL(guildId, 80, false)) };
      const AvatarSizes = arg1(dependencyMap[33]).AvatarSizes;
      obj5.size = first ? AvatarSizes.LARGE : AvatarSizes.XLARGE;
      let userAvatarDecoration;
      if (null != stateFromStores) {
        userAvatarDecoration = stateFromStores.userAvatarDecoration;
      }
      obj5.avatarDecoration = userAvatarDecoration;
      tmp29Result = callback2(arg1(dependencyMap[33]).Avatar, obj5);
      const obj13 = arg1(dependencyMap[30]);
      const tmp29 = callback2;
    }
    obj4.children = tmp29Result;
    const items9 = [callback2(importDefault(dependencyMap[24]), obj4), , ];
    const obj6 = { style: tmp.userOpacity };
    items9[1] = callback2(InnerStroke, obj6);
    let tmp37 = null;
    if (first) {
      tmp37 = null;
      if (consumedRequestToRespondToSeriousThermalState) {
        obj7 = { style: tmp.thermalAlertIconContainer };
        obj8 = { style: tmp.thermalAlertIcon, source: importDefault(dependencyMap[34]), color: tmp.thermalAlertIcon.color };
        obj7.children = callback2(arg1(dependencyMap[33]).Icon, obj8);
        tmp37 = callback2(importDefault(dependencyMap[24]), obj7);
        const tmp41 = importDefault(dependencyMap[24]);
      }
    }
    items9[2] = tmp37;
    obj1.children = items9;
    tmp44 = obj1;
    const tmp24 = callback2;
    const tmp27 = importDefault(dependencyMap[24]);
  }
  return closure_22(importDefault(dependencyMap[24]), tmp44);
}
function AnimatedVideoWrapper(arg0) {
  let children;
  let participantId;
  let style;
  ({ participantId, style, children } = arg0);
  const targetDimensionsSubscription = arg1(dependencyMap[35]).useTargetDimensionsSubscription(participantId, importAllResult.useContext(importDefault(dependencyMap[18])).layoutManager);
  const arg1 = targetDimensionsSubscription;
  const obj = arg1(dependencyMap[35]);
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
  const animatedStyle = arg1(dependencyMap[28]).useAnimatedStyle(fn);
  style = [, ];
  style[0] = style;
  style[1] = animatedStyle;
  return callback2(importDefault(dependencyMap[36]), { style, children });
}
function Stream(participantId) {
  let layoutManager;
  let transitionCleanUp;
  let transitionState;
  participantId = participantId.participantId;
  const arg1 = participantId;
  ({ transitionState, transitionCleanUp } = participantId);
  const tmp = callback4();
  let obj = arg1(dependencyMap[23]);
  const mode = obj.usePIPState().mode;
  const importDefault = mode;
  const context = importAllResult.useContext(importDefault(dependencyMap[18]));
  ({ channelId: closure_2, layoutManager } = context);
  let closure_3 = layoutManager;
  let obj1 = arg1(dependencyMap[26]);
  const items = [closure_7];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => {
    const participant = ref2.getParticipant(closure_2, participantId);
    let tmp2 = null != participant;
    if (tmp2) {
      tmp2 = participant.type === constants2.STREAM;
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
  const streamId = stateFromStoresObject.streamId;
  let obj2 = arg1(dependencyMap[31]);
  const surfaceDirectRendererExperiment = obj2.useSurfaceDirectRendererExperiment(stateFromStoresObject.userId, { location: "VoicePanelPIPContent.Stream" });
  let obj3 = arg1(dependencyMap[26]);
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
  const callback = importAllResult.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    layoutManager.setTargetDimensions(participantId, nativeEvent.width, nativeEvent.height);
  }, items2);
  const value = PixelRatio.get();
  const PixelRatio = value;
  let closure_6 = importAllResult.useRef(0);
  closure_7 = importAllResult.useRef(0);
  const items3 = [streamId, value, mode];
  const items4 = [streamId, value, mode];
  const callback1 = importAllResult.useCallback((nativeEvent) => {
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
        if (mode === constants.IN_APP) {
          let obj = participantId(closure_2[37]);
          obj = { width: width * value, height: height * value };
          obj.updateVideoSize(streamId, obj, 1);
        }
      }
    }
  }, items3);
  const callback2 = importAllResult.useCallback((arg0) => {
    let tmp = null == streamId || arg0;
    if (!tmp) {
      tmp = mode !== constants.IN_APP;
    }
    if (!tmp) {
      let obj = participantId(closure_2[37]);
      obj = { width: ref.current * value, height: ref2.current * value };
      obj.updateVideoSize(streamId, obj, 1);
    }
  }, items4);
  let closure_8 = callback2;
  const items5 = [callback2];
  const effect = importAllResult.useEffect(() => {
    let closure_0 = mode(closure_2[38]).addOnPipModeChangedListener(callback2);
    return () => {
      if (null != closure_0) {
        closure_0.remove();
      }
    };
  }, items5);
  closure_9 = tmp12;
  const items6 = [null != streamId];
  const effect1 = importAllResult.useEffect(() => {
    if (tmp12) {
      callback();
    }
  }, items6);
  if (stateFromStores === constants.ENDED) {
    obj = { style: tmp.streamEmptyImage, resizeMode: "contain" };
    let tmp14Result = callback2(arg1(dependencyMap[39]).StreamEnded, obj);
  } else if (stateFromStores === constants.FAILED) {
    obj = { style: tmp.streamEmptyImage, resizeMode: "contain" };
    tmp14Result = callback2(arg1(dependencyMap[40]).StreamFailed, obj);
  } else if (tmp12) {
    obj1 = { style: tmp2, participantId };
    obj2 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, streamId, style: tmp.video, onSize: callback, onLayout: callback1 };
    obj1.children = callback2(VideoStream, obj2);
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
    return callback2(closure_31, obj, arg0);
  } else {
    obj = { participantId: id.id, transitionState, transitionCleanUp };
    const type = id.type;
    if (constants4.ACTIVITY === type) {
      const obj1 = {};
      const merged = Object.assign(obj);
      return callback2(ActivityInVoice, obj1, arg0);
    } else if (constants4.STREAM === type) {
      const obj2 = {};
      const merged1 = Object.assign(obj);
      return callback2(Stream, obj2, arg0);
    } else {
      if (constants4.USER !== type) {
        const HIDDEN_STREAM = constants4.HIDDEN_STREAM;
      }
      obj = {};
      const merged2 = Object.assign(obj);
      return callback2(User, obj, arg0);
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
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[2]);
const PixelRatio = tmp2.PixelRatio;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
const VoicePanelModes = arg1(dependencyMap[10]).VoicePanelModes;
const VoicePanelPIPModes = arg1(dependencyMap[11]).VoicePanelPIPModes;
({ ApplicationStreamStates: closure_15, ComponentActions: closure_16 } = arg1(dependencyMap[12]));
const tmp3 = arg1(dependencyMap[12]);
({ ActivityLayoutMode: closure_17, OrientationLockState: closure_18 } = arg1(dependencyMap[13]));
const tmp4 = arg1(dependencyMap[13]);
({ ParticipantTypes: closure_19, isActivityParticipant: closure_20 } = arg1(dependencyMap[14]));
const tmp5 = arg1(dependencyMap[14]);
({ jsx: closure_21, jsxs: closure_22 } = arg1(dependencyMap[15]));
let obj1 = arg1(dependencyMap[16]);
let obj = { contentWrapper: { "Bool(false)": "<string:1879048940>", "Bool(false)": "<string:1090519974>", "Bool(false)": "<string:3305112303>", "Bool(false)": "<string:1006633715>", "Bool(false)": "<string:1140851439>", "Bool(false)": "<string:1124074223>" }, userOpacity: { opacity: 0.1 }, activity: { "Null": null, "Null": null, "Null": null }, user: { status: null, constructor: null, borderRadius: null, position: null, top: null }, video: { "Null": null, "Null": null, "Null": null }, avatarWrapper: {} };
obj = { "Null": "icon-large", "Null": "connected-ptt", "Null": true, "Null": "/assets/images/native/icons", "Null": 24, "Null": 24, "Null": null, "Null": "e0e70b148b33d67bf7c7b1d0419e39c9", "Null": "ic_lock", borderRadius: importDefault(dependencyMap[17]).radii.round };
obj.thermalAlertIconContainer = obj;
obj1 = { "Null": "<string:1912602975>", "Null": "height", color: importDefault(dependencyMap[17]).colors.WHITE };
obj.thermalAlertIcon = obj1;
obj.onTop = { zIndex: 1 };
obj.onBottom = { zIndex: 0 };
obj.streamEmptyImage = { width: "50%" };
const obj2 = {};
const merged = Object.assign(tmp2.StyleSheet.absoluteFillObject);
obj2["backgroundColor"] = importDefault(dependencyMap[17]).colors.BLACK;
obj.emptyPip = obj2;
obj.innerStroke = { sgn-GB: 819400577182898300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, sgn-GR: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002121995791, sgn-IE: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000619304471593264, sgn-IT: 278528, sgn-JP: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001327944972994, sgn-MX: 11572258931318333000000000000000000000000, sgn-NI: -507136757751708340000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006312423328644716, "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007291122671433504 };
obj.blackBackground = { backgroundColor: "black" };
let closure_23 = obj1.createStyles(obj);
let closure_24 = { code: "function VoicePanelPIPContentTsx1(){const{windowDimensions}=this.__closure;return windowDimensions.get();}" };
let closure_25 = { code: "function VoicePanelPIPContentTsx2(windowDimensionsVal,previousWindowDimensionsVal){const{runOnJS,handleTargetAspectRatioParams}=this.__closure;if(windowDimensionsVal!==previousWindowDimensionsVal){runOnJS(handleTargetAspectRatioParams)(windowDimensionsVal);}}" };
let closure_26 = { code: "function VoicePanelPIPContentTsx3(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}" };
let closure_27 = { code: "function VoicePanelPIPContentTsx4(focusedParticipantId,previousFocusedParticipantId){const{runOnJS,updateIsActivityFocused,mode}=this.__closure;if(focusedParticipantId!==previousFocusedParticipantId){runOnJS(updateIsActivityFocused)(focusedParticipantId,mode.get());}}" };
let closure_28 = { code: "function VoicePanelPIPContentTsx5(){const{mode}=this.__closure;return mode.get();}" };
let closure_29 = { code: "function VoicePanelPIPContentTsx6(modeVal,previousModeVal){const{runOnJS,updateIsActivityFocused,focused}=this.__closure;if(modeVal!==previousModeVal){var _focused$get;runOnJS(updateIsActivityFocused)((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,modeVal);}}" };
let closure_30 = { code: "function VoicePanelPIPContentTsx7(){const{targetDimensions}=this.__closure;const{width:targetWidth,height:targetHeight}=targetDimensions.get();let height='100%';let width='100%';if(targetHeight<targetWidth){width='auto';}else{height='auto';}return{position:'absolute',aspectRatio:targetWidth/targetHeight,width:width,height:height};}" };
let closure_31 = importAllResult.memo(function EmptyPIP(transitionState) {
  transitionState = transitionState.transitionState;
  const arg1 = transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  const importDefault = transitionCleanUp;
  const items = [transitionState, transitionCleanUp];
  const effect = importAllResult.useEffect(() => {
    if (transitionState === transitionState(closure_2[22]).TransitionStates.YEETED) {
      transitionCleanUp();
    }
  }, items);
  const tmp = callback4();
  return callback2(importDefault(dependencyMap[24]), { style: callback4().emptyPip });
});
const tmp6 = arg1(dependencyMap[15]);
const memoResult = importAllResult.memo(function VoicePanelPIPContent() {
  const channelId = importAllResult.useContext(importDefault(dependencyMap[18])).channelId;
  const arg1 = channelId;
  let obj = arg1(dependencyMap[23]);
  const size = obj.usePIPState();
  let id = size.id;
  const importDefault = id;
  const width = size.width;
  const dependencyMap = width;
  const height = size.height;
  let closure_3 = height;
  const tmp = callback4();
  id = store.getId();
  const PixelRatio = id;
  const items = [closure_7];
  const items1 = [id, channelId, id];
  const items2 = [width, height, tmp.contentWrapper];
  const stateFromStores = arg1(dependencyMap[26]).useStateFromStores(items, () => {
    let tmp = id;
    if (null != id) {
      const participant = participant.getParticipant(channelId, tmp);
      let type;
      if (null != participant) {
        type = participant.type;
      }
      let USER = type;
    } else {
      USER = constants.USER;
    }
    if (null == USER) {
      USER = constants.USER;
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
  const obj2 = arg1(dependencyMap[26]);
  obj = { items: stateFromStores, renderItem: renderFocusedParticipant, getItemKey: getFocusedKey };
  obj.children = callback2(arg1(dependencyMap[22]).TransitionGroup, obj);
  return callback2(importDefault(dependencyMap[24]), obj);
});
const result = arg1(dependencyMap[41]).fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPContent.tsx");

export default memoResult;
