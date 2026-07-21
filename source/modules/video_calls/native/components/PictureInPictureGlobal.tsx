// Module ID: 15468
// Function ID: 117997
// Name: PictureInPictureGlobal
// Dependencies: []
// Exports: default

// Module 15468 (PictureInPictureGlobal)
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ View: closure_5, StyleSheet: closure_6, TouchableOpacity: closure_7 } = arg1(dependencyMap[2]));
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = arg1(dependencyMap[5]).useBestActiveChatInputContainerHeight;
let closure_11 = importDefault(dependencyMap[6]);
let closure_12 = importDefault(dependencyMap[7]);
const PictureInPicturePositions = arg1(dependencyMap[8]).PictureInPicturePositions;
const ParticipantTypes = arg1(dependencyMap[9]).ParticipantTypes;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_15, jsxs: closure_16 } = arg1(dependencyMap[10]));
let obj1 = arg1(dependencyMap[11]);
let obj = { container: { "Null": 0.1, "Null": 1418472223133344700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007293658201766086 } };
const tmp3 = arg1(dependencyMap[10]);
obj.elevationShadow = arg1(dependencyMap[12]).generateBoxShadowStyle(arg1(dependencyMap[12]).EIGHT_DP_ELEVATION_SHADOW_PARAMS);
obj = { borderRadius: importDefault(dependencyMap[13]).radii.sm, overflow: "hidden" };
obj.pip = obj;
obj1 = { backgroundColor: importDefault(dependencyMap[13]).colors.BLACK, borderRadius: importDefault(dependencyMap[13]).radii.sm, overflow: "hidden" };
obj.background = obj1;
let closure_17 = obj1.createStyles(obj);
let closure_18 = importAllResult.memo((channel) => {
  channel = channel.channel;
  const arg1 = channel;
  let importDefault;
  let dependencyMap;
  let closure_3;
  let importAllResult;
  let width;
  let height;
  const tmp = callback4();
  const tmp2 = importDefault(dependencyMap[14])(channel.id);
  let obj = arg1(dependencyMap[15]);
  const items = [closure_9, id];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const streamParticipants = store2.getStreamParticipants(channel.id);
    return streamParticipants.find((user) => user.user.id === id.getId());
  });
  let obj1 = arg1(dependencyMap[15]);
  const items1 = [closure_9, closure_8];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    const currentEmbeddedActivity = store.getCurrentEmbeddedActivity();
    let participant = null;
    if (null != currentEmbeddedActivity) {
      let obj = channel(callback[16]);
      obj = {};
      ({ applicationId: obj2.applicationId, compositeInstanceId: obj2.instanceId } = currentEmbeddedActivity);
      participant = store2.getParticipant(channel.id, obj.getEmbeddedActivityParticipantId(obj));
    }
    return participant;
  });
  let tmp6 = stateFromStores1;
  if (null != tmp2) {
    tmp6 = stateFromStores1;
    if (tmp2.user.id !== id.getId()) {
      tmp6 = tmp2;
    }
  }
  if (tmp5) {
    tmp6 = stateFromStores1;
  }
  importDefault = tmp6;
  let obj2 = arg1(dependencyMap[15]);
  const items2 = [closure_12];
  const items3 = [tmp6];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => {
    let isLocalVideoDisabledResult = null != tmp6;
    if (isLocalVideoDisabledResult) {
      isLocalVideoDisabledResult = localVideoDisabled.isLocalVideoDisabled(tmp6.id);
    }
    return isLocalVideoDisabledResult;
  }, items3);
  let obj3 = arg1(dependencyMap[15]);
  const items4 = [closure_9, id];
  const stateFromStores3 = obj3.useStateFromStores(items4, () => {
    const participant = store2.getParticipant(channel.id, id.getId());
    let tmp2 = null;
    if (null != participant) {
      tmp2 = null;
      if (participant.type === constants.USER) {
        tmp2 = null;
        if (null != participant.streamId) {
          tmp2 = participant;
        }
      }
    }
    return tmp2;
  });
  const items5 = [channel];
  const callback = importAllResult.useCallback(() => {
    channel(callback[18]).openGuildVoiceModal(channel, "PIP");
  }, items5);
  dependencyMap = callback;
  let obj4 = arg1(dependencyMap[19]);
  const shouldForcePipOrientation = obj4.useShouldForcePipOrientation({ channel });
  closure_3 = shouldForcePipOrientation;
  let obj5 = arg1(dependencyMap[20]);
  const isScreenLandscape = obj5.useIsScreenLandscape();
  importAllResult = isScreenLandscape;
  obj = { channelId: channel.id, forcedOrientation: shouldForcePipOrientation };
  const size = importDefault(dependencyMap[21])(obj);
  width = size.width;
  height = size.height;
  const items6 = [shouldForcePipOrientation, isScreenLandscape, height, width];
  let type;
  const memo = importAllResult.useMemo(() => {
    const obj = { height, width };
    if (isScreenLandscape) {
      let str = "row";
    } else {
      str = "column";
    }
    obj.flexDirection = str;
    return obj;
  }, items6);
  if (null != tmp6) {
    type = tmp6.type;
  }
  let tmp15 = type === ParticipantTypes.ACTIVITY;
  if (tmp15) {
    tmp15 = importDefault(dependencyMap[23])(tmp6.applicationId);
  }
  if (tmp15) {
    tmp15 = null == stateFromStores;
  }
  let type1;
  if (null != tmp6) {
    type1 = tmp6.type;
  }
  if (ParticipantTypes.HIDDEN_STREAM !== type1) {
    if (ParticipantTypes.STREAM !== type1) {
      if (ParticipantTypes.USER === type1) {
        let tmp21 = null;
        if (!stateFromStores2) {
          obj = { participant: tmp6, avatarSize: arg1(dependencyMap[12]).AvatarSizes.PROFILE, resizeMode: arg1(dependencyMap[25]).ResizeMode.COVER, onSingleTap: callback, onDoubleTap: callback };
          tmp21 = callback3(importDefault(dependencyMap[26]), obj);
          const tmp25 = importDefault(dependencyMap[26]);
        }
        let tmp20 = tmp21;
      } else {
        tmp20 = null;
        if (ParticipantTypes.ACTIVITY === type1) {
          obj1 = {
            participant: tmp6,
            channel,
            onSingleTap() {
                      const currentEmbeddedActivity = store.getCurrentEmbeddedActivity();
                      if (null != currentEmbeddedActivity) {
                        let _location;
                        if (null != currentEmbeddedActivity) {
                          _location = currentEmbeddedActivity.location;
                        }
                        tmp6(callback[28])(channel.guild_id, _location);
                        const tmp4 = tmp6(callback[28]);
                      }
                      callback();
                    }
          };
          tmp20 = callback3(importDefault(dependencyMap[27]), obj1);
        }
      }
    }
    obj2 = { style: tmp.background };
    obj3 = { activeOpacity: 0.7 };
    obj4 = {};
    const items7 = [, , ];
    ({ pip: arr8[0], elevationShadow: arr8[1] } = tmp);
    items7[2] = memo;
    obj4.style = items7;
    let tmp32 = null != stateFromStores3;
    if (tmp32) {
      tmp32 = !tmp15;
    }
    if (tmp32) {
      obj5 = { participant: stateFromStores3, avatarSize: arg1(dependencyMap[12]).AvatarSizes.PROFILE, resizeMode: arg1(dependencyMap[25]).ResizeMode.COVER, onSingleTap: callback };
      tmp32 = callback3(importDefault(dependencyMap[26]), obj5);
      const tmp36 = importDefault(dependencyMap[26]);
    }
    const items8 = [tmp32, , ];
    let tmp38 = null != stateFromStores && !tmp15;
    if (tmp38) {
      const obj6 = { onSingleTap: callback };
      tmp38 = callback3(importDefault(dependencyMap[29]), obj6);
    }
    items8[1] = tmp38;
    items8[2] = (null == stateFromStores3 || null == stateFromStores || null == stateFromStores1) && tmp20;
    obj4.children = items8;
    obj3.children = closure_16(width, obj4);
    obj2.children = callback3(closure_7, obj3);
    return callback3(width, obj2);
  }
  const obj7 = {};
  const tmp5 = importDefault(dependencyMap[17])(channel.id);
  obj7.resizeMode = arg1(dependencyMap[25]).ResizeMode.CONTAIN;
  obj7.participant = tmp6;
  obj7.onSingleTap = callback;
  obj7.onDoubleTap = callback;
  tmp20 = callback3(importDefault(dependencyMap[24]), obj7);
});
let closure_19 = importAllResult.memo((channel) => {
  let tmp2;
  let tmp3;
  channel = channel.channel;
  [tmp2, tmp3] = callback(importAllResult.useState(() => constants.TOP_RIGHT), 2);
  const obj = { channel, preferredPosition: tmp2, onMove: tmp3 };
  const tmp = callback(importAllResult.useState(() => constants.TOP_RIGHT), 2);
  obj.children = callback3(closure_18, { channel });
  return callback3(importDefault(dependencyMap[30]), obj);
});
let closure_20 = { code: "function PictureInPictureGlobalTsx1(){const{withTiming,drawerState,STANDARD_EASING}=this.__closure;return withTiming(drawerState,{easing:STANDARD_EASING,duration:250});}" };
let closure_21 = { code: "function PictureInPictureGlobalTsx2(){const{interpolate,animatedDrawerState,NAV_BAR_HEIGHT,PADDING,chatInputContainerHeight,PIP_AVOIDANCE_TAB_BAR_HEIGHT}=this.__closure;return{marginTop:interpolate(animatedDrawerState.get(),[0,1],[NAV_BAR_HEIGHT+PADDING,PADDING]),marginBottom:interpolate(animatedDrawerState.get(),[0,1],[chatInputContainerHeight+PADDING,PIP_AVOIDANCE_TAB_BAR_HEIGHT+PADDING])};}" };
const obj4 = arg1(dependencyMap[12]);
const result = arg1(dependencyMap[37]).fileFinishedImporting("modules/video_calls/native/components/PictureInPictureGlobal.tsx");

export default function PictureInPictureGlobal(channel) {
  let arg1;
  let importDefault;
  let dependencyMap;
  let obj = arg1(dependencyMap[31]);
  let num = 1;
  if (obj.useIsChannelFocused()) {
    num = 0;
  }
  arg1 = num;
  const tmp2 = callback2();
  importDefault = tmp2;
  let obj1 = arg1(dependencyMap[32]);
  const fn = function n() {
    let obj = num(derivedValue[33]);
    obj = { easing: num(derivedValue[12]).STANDARD_EASING, duration: 250 };
    return obj.withTiming(num, obj);
  };
  obj = { withTiming: arg1(dependencyMap[33]).withTiming, drawerState: num, STANDARD_EASING: arg1(dependencyMap[12]).STANDARD_EASING };
  fn.__closure = obj;
  fn.__workletHash = 5168896066356;
  fn.__initData = closure_20;
  const derivedValue = obj1.useDerivedValue(fn);
  dependencyMap = derivedValue;
  const tmp = callback4();
  const fn2 = function o() {
    const obj = {};
    let value = derivedValue.get();
    const items = [num(derivedValue[34]).NAV_BAR_HEIGHT + 12, 12];
    obj.marginTop = num(derivedValue[32]).interpolate(value, ["replace", "then"], items);
    const obj2 = num(derivedValue[32]);
    const items1 = [tmp2 + 12, ];
    value = derivedValue.get();
    items1[1] = num(derivedValue[35]).PIP_AVOIDANCE_TAB_BAR_HEIGHT + 12;
    obj.marginBottom = num(derivedValue[32]).interpolate(value, ["replace", "then"], items1);
    return obj;
  };
  obj = { interpolate: arg1(dependencyMap[32]).interpolate, animatedDrawerState: derivedValue, NAV_BAR_HEIGHT: arg1(dependencyMap[34]).NAV_BAR_HEIGHT, PADDING: 12, chatInputContainerHeight: tmp2, PIP_AVOIDANCE_TAB_BAR_HEIGHT: arg1(dependencyMap[35]).PIP_AVOIDANCE_TAB_BAR_HEIGHT };
  fn2.__closure = obj;
  fn2.__workletHash = 8833756900366;
  fn2.__initData = closure_21;
  const animatedStyle = arg1(dependencyMap[32]).useAnimatedStyle(fn2);
  const rect = importDefault(dependencyMap[36])();
  obj1 = { style: items, pointerEvents: "box-none" };
  const items = [absoluteFill.absoluteFill, { paddingLeft: rect.left, paddingRight: rect.right }];
  const obj2 = { style: items1, pointerEvents: "box-none" };
  const items1 = [tmp.container, animatedStyle];
  obj2.children = callback3(closure_19, { channel: channel.channel });
  obj1.children = callback3(importDefault(dependencyMap[32]).View, obj2);
  return callback3(closure_5, obj1);
};
