// Module ID: 15640
// Function ID: 120536
// Name: PictureInPictureGlobal
// Dependencies: [57, 31, 27, 1347, 4143, 9349, 1194, 4177, 653, 4148, 33, 4130, 1273, 689, 10572, 566, 10561, 10560, 4341, 10571, 4663, 10574, 8347, 10589, 10593, 10603, 10619, 10626, 10556, 10590, 10570, 10259, 3991, 4131, 5084, 15641, 1557, 2]
// Exports: default

// Module 15640 (PictureInPictureGlobal)
import _slicedToArray from "_slicedToArray";
import importAllResult from "getFocusedChannelId";
import get_ActivityIndicator from "ActivityTileInner";
import closure_8 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { useBestActiveChatInputContainerHeight as closure_10 } from "getChatInputContainerHeight";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import { PictureInPicturePositions } from "ME";
import { ParticipantTypes } from "ParticipantTypes";
import jsxProd from "withTiming";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import Button from "Button";

let closure_15;
let closure_16;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ View: closure_5, StyleSheet: closure_6, TouchableOpacity: closure_7 } = get_ActivityIndicator);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
let obj = { container: { flex: 1, marginLeft: 12, marginRight: 12 } };
obj.elevationShadow = Button.generateBoxShadowStyle(require("Button").EIGHT_DP_ELEVATION_SHADOW_PARAMS);
obj = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden" };
obj.pip = obj;
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BLACK, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden" };
obj.background = _createForOfIteratorHelperLoose;
let closure_17 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_18 = importAllResult.memo((channel) => {
  channel = channel.channel;
  let importDefault;
  let callback;
  let shouldForcePipOrientation;
  let isScreenLandscape;
  let width;
  let height;
  const tmp = callback4();
  let tmp2 = importDefault(callback[14])(channel.id);
  let obj = channel(callback[15]);
  const items = [_isNativeReflectConstruct, id];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const streamParticipants = outer1_9.getStreamParticipants(channel.id);
    return streamParticipants.find((user) => user.user.id === outer2_11.getId());
  });
  let obj1 = channel(callback[15]);
  const items1 = [_isNativeReflectConstruct, closure_8];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    const currentEmbeddedActivity = outer1_8.getCurrentEmbeddedActivity();
    let participant = null;
    if (null != currentEmbeddedActivity) {
      let obj = channel(callback[16]);
      obj = {};
      ({ applicationId: obj2.applicationId, compositeInstanceId: obj2.instanceId } = currentEmbeddedActivity);
      participant = outer1_9.getParticipant(channel.id, obj.getEmbeddedActivityParticipantId(obj));
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
  let obj2 = channel(callback[15]);
  const items2 = [closure_12];
  const items3 = [tmp6];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => {
    let isLocalVideoDisabledResult = null != _undefined;
    if (isLocalVideoDisabledResult) {
      isLocalVideoDisabledResult = outer1_12.isLocalVideoDisabled(_undefined.id);
    }
    return isLocalVideoDisabledResult;
  }, items3);
  let obj3 = channel(callback[15]);
  const items4 = [_isNativeReflectConstruct, id];
  const stateFromStores3 = obj3.useStateFromStores(items4, () => {
    const participant = outer1_9.getParticipant(channel.id, outer1_11.getId());
    let tmp2 = null;
    if (null != participant) {
      tmp2 = null;
      if (participant.type === outer1_14.USER) {
        tmp2 = null;
        if (null != participant.streamId) {
          tmp2 = participant;
        }
      }
    }
    return tmp2;
  });
  const items5 = [channel];
  callback = isScreenLandscape.useCallback(() => {
    channel(callback[18]).openGuildVoiceModal(channel, "PIP");
  }, items5);
  let obj4 = channel(callback[19]);
  shouldForcePipOrientation = obj4.useShouldForcePipOrientation({ channel });
  let obj5 = channel(callback[20]);
  isScreenLandscape = obj5.useIsScreenLandscape();
  obj = { channelId: channel.id, forcedOrientation: shouldForcePipOrientation };
  const size = importDefault(callback[21])(obj);
  width = size.width;
  height = size.height;
  const items6 = [shouldForcePipOrientation, isScreenLandscape, height, width];
  let type;
  const memo = isScreenLandscape.useMemo(() => {
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
    tmp15 = importDefault(callback[23])(tmp6.applicationId);
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
          obj = { participant: tmp6, avatarSize: channel(callback[12]).AvatarSizes.PROFILE, resizeMode: channel(callback[25]).ResizeMode.COVER, onSingleTap: callback, onDoubleTap: callback };
          tmp21 = callback3(importDefault(callback[26]), obj);
          const tmp25 = importDefault(callback[26]);
        }
        let tmp20 = tmp21;
      } else {
        tmp20 = null;
        if (ParticipantTypes.ACTIVITY === type1) {
          obj1 = {
            participant: tmp6,
            channel,
            onSingleTap() {
                      const currentEmbeddedActivity = outer1_8.getCurrentEmbeddedActivity();
                      if (null != currentEmbeddedActivity) {
                        let _location;
                        if (null != currentEmbeddedActivity) {
                          _location = currentEmbeddedActivity.location;
                        }
                        _undefined(callback[28])(channel.guild_id, _location);
                        const tmp4 = _undefined(callback[28]);
                      }
                      callback();
                    }
          };
          tmp20 = callback3(importDefault(callback[27]), obj1);
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
      obj5 = { participant: stateFromStores3, avatarSize: channel(callback[12]).AvatarSizes.PROFILE, resizeMode: channel(callback[25]).ResizeMode.COVER, onSingleTap: callback };
      tmp32 = callback3(importDefault(callback[26]), obj5);
      const tmp36 = importDefault(callback[26]);
    }
    const items8 = [tmp32, , ];
    let tmp38 = null != stateFromStores && !tmp15;
    if (tmp38) {
      const obj6 = { onSingleTap: callback };
      tmp38 = callback3(importDefault(callback[29]), obj6);
    }
    items8[1] = tmp38;
    items8[2] = (null == stateFromStores3 || null == stateFromStores || null == stateFromStores1) && tmp20;
    obj4.children = items8;
    obj3.children = closure_16(width, obj4);
    obj2.children = callback3(closure_7, obj3);
    return callback3(width, obj2);
  }
  const obj7 = {};
  tmp5 = importDefault(callback[17])(channel.id);
  obj7.resizeMode = channel(callback[25]).ResizeMode.CONTAIN;
  obj7.participant = tmp6;
  obj7.onSingleTap = callback;
  obj7.onDoubleTap = callback;
  tmp20 = callback3(importDefault(callback[24]), obj7);
});
let closure_19 = importAllResult.memo((channel) => {
  let tmp2;
  let tmp3;
  channel = channel.channel;
  [tmp2, tmp3] = callback(importAllResult.useState(() => outer1_13.TOP_RIGHT), 2);
  const obj = { channel, preferredPosition: tmp2, onMove: tmp3 };
  const tmp = callback(importAllResult.useState(() => outer1_13.TOP_RIGHT), 2);
  obj.children = callback3(closure_18, { channel });
  return callback3(importDefault(10570), obj);
});
let closure_20 = { code: "function PictureInPictureGlobalTsx1(){const{withTiming,drawerState,STANDARD_EASING}=this.__closure;return withTiming(drawerState,{easing:STANDARD_EASING,duration:250});}" };
let closure_21 = { code: "function PictureInPictureGlobalTsx2(){const{interpolate,animatedDrawerState,NAV_BAR_HEIGHT,PADDING,chatInputContainerHeight,PIP_AVOIDANCE_TAB_BAR_HEIGHT}=this.__closure;return{marginTop:interpolate(animatedDrawerState.get(),[0,1],[NAV_BAR_HEIGHT+PADDING,PADDING]),marginBottom:interpolate(animatedDrawerState.get(),[0,1],[chatInputContainerHeight+PADDING,PIP_AVOIDANCE_TAB_BAR_HEIGHT+PADDING])};}" };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/video_calls/native/components/PictureInPictureGlobal.tsx");

export default function PictureInPictureGlobal(channel) {
  let num;
  let importDefault;
  let derivedValue;
  let obj = num(derivedValue[31]);
  num = 1;
  if (obj.useIsChannelFocused()) {
    num = 0;
  }
  const tmp2 = callback2();
  importDefault = tmp2;
  let obj1 = num(derivedValue[32]);
  const fn = function n() {
    let obj = num(derivedValue[33]);
    obj = { easing: num(derivedValue[12]).STANDARD_EASING, duration: 250 };
    return obj.withTiming(num, obj);
  };
  obj = { withTiming: num(derivedValue[33]).withTiming, drawerState: num, STANDARD_EASING: num(derivedValue[12]).STANDARD_EASING };
  fn.__closure = obj;
  fn.__workletHash = 5168896066356;
  fn.__initData = closure_20;
  derivedValue = obj1.useDerivedValue(fn);
  const tmp = callback4();
  const fn2 = function o() {
    const obj = {};
    let value = derivedValue.get();
    const items = [num(derivedValue[34]).NAV_BAR_HEIGHT + 12, 12];
    obj.marginTop = num(derivedValue[32]).interpolate(value, [0, 1], items);
    const obj2 = num(derivedValue[32]);
    const items1 = [c1 + 12, ];
    value = derivedValue.get();
    items1[1] = num(derivedValue[35]).PIP_AVOIDANCE_TAB_BAR_HEIGHT + 12;
    obj.marginBottom = num(derivedValue[32]).interpolate(value, [0, 1], items1);
    return obj;
  };
  obj = { interpolate: num(derivedValue[32]).interpolate, animatedDrawerState: derivedValue, NAV_BAR_HEIGHT: num(derivedValue[34]).NAV_BAR_HEIGHT, PADDING: 12, chatInputContainerHeight: tmp2, PIP_AVOIDANCE_TAB_BAR_HEIGHT: num(derivedValue[35]).PIP_AVOIDANCE_TAB_BAR_HEIGHT };
  fn2.__closure = obj;
  fn2.__workletHash = 8833756900366;
  fn2.__initData = closure_21;
  const animatedStyle = num(derivedValue[32]).useAnimatedStyle(fn2);
  const rect = importDefault(derivedValue[36])();
  obj1 = { style: items, pointerEvents: "box-none" };
  items = [absoluteFill.absoluteFill, { paddingLeft: rect.left, paddingRight: rect.right }];
  let obj2 = { style: items1, pointerEvents: "box-none" };
  items1 = [tmp.container, animatedStyle];
  obj2.children = callback3(closure_19, { channel: channel.channel });
  obj1.children = callback3(importDefault(derivedValue[32]).View, obj2);
  return callback3(closure_5, obj1);
};
