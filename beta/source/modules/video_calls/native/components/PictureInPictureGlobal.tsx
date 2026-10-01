// Module ID: 16732
// Function ID: 16733
// Name: PictureInPictureGlobal
// Dependencies: [32, 19, 17, 2044, 4852, 8843, 502, 1993, 1074, 4857, 21, 4836, 1177, 576, 8848, 504, 8805, 8838, 5043, 8847, 5438, 8850, 7780, 8868, 8872, 8880, 8900, 8911, 8828, 8869, 8846, 9549, 4566, 4837, 5994, 16733, 1613, 2]
// Exports: default

// Module 16732 (PictureInPictureGlobal)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import CallConstants from "CallConstants" /* 4857 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 5043 */;
import NavigatorConstants from "NavigatorConstants" /* 5994 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 8805 */;
import transitionToActivityDefault from "transitionToActivity" /* 8828 */;
import useChatBottomManagerUIStore from "useChatBottomManagerUIStore" /* 8843 */;
import PictureInPictureDefault from "PictureInPicture" /* 8846 */;
import getPIPBottomOffsetForPIPMode from "getPIPBottomOffsetForPIPMode" /* 16733 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4852 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import native_mod from "native" /* 1177 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let closure_15;
let closure_16;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let native;
let obj2;
let obj3;
({ View: hasOwnProperty, StyleSheet: metroRequire, TouchableOpacity: metroImportDefault } = react_native);
let closure_10 = useChatBottomManagerUIStore.useBestActiveChatInputContainerHeight;
const PictureInPicturePositions = Constants.PictureInPicturePositions;
const ParticipantTypes = CallConstants.ParticipantTypes;
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
let c17 = 12;
let createStyles = createStyles_mod;
let obj = { container: { flex: 1, marginLeft: 12, marginRight: 12 }, elevationShadow: native.generateBoxShadowStyle(native.EIGHT_DP_ELEVATION_SHADOW_PARAMS), pip: obj2, background: obj3 };
createStyles = createStyles.createStyles;
native = native_mod;
obj2 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj3 = { backgroundColor: nativeDefault.colors.BLACK, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let closure_18 = createStyles(obj);
let closure_19 = react.memo((channel) => {
  let callback;
  let items7;
  let items8;
  let obj11;
  let tmp28;
  channel = channel.channel;
  let stateFromStores1;
  let onDoubleTap;
  let shouldForcePipOrientation;
  let isScreenLandscape;
  let width;
  let height;
  let tmp = closure_18();
  let tmp2 = stateFromStores1;
  let tmp4 = stateFromStores1(onDoubleTap[14])(channel.id);
  let obj = channel(onDoubleTap[15]);
  const items = [ChannelRTCStore, ];
  const obj2 = AuthenticationStore;
  items[1] = AuthenticationStore;
  const stateFromStores = obj.useStateFromStores(items, () => {
    let id;
    const streamParticipants = ChannelRTCStore.getStreamParticipants(channel.id);
    return streamParticipants.find((user) => user.user.id === id.getId());
  });
  let obj3 = channel(onDoubleTap[15]);
  const items1 = [ChannelRTCStore, EmbeddedActivitiesStore];
  stateFromStores1 = obj3.useStateFromStores(items1, () => {
    const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
    let participant = null;
    if (null != currentEmbeddedActivity) {
      const getParticipant = ChannelRTCStore.getParticipant;
      const id = channel.id;
      const obj3 = { applicationId: null, instanceId: null };
      ({ applicationId: obj2.applicationId, compositeInstanceId: obj2.instanceId } = currentEmbeddedActivity);
      const obj = ChannelRTCParticipants;
      participant = getParticipant(id, obj.getEmbeddedActivityParticipantId(obj3));
    }
    return participant;
  });
  let tmp10 = stateFromStores1;
  const tmp6 = ChannelRTCStore;
  const tmp9 = stateFromStores1(onDoubleTap[17])(channel.id);
  if (null != tmp4) {
    tmp10 = stateFromStores1;
    if (tmp4.user.id !== obj2.getId()) {
      tmp10 = tmp4;
    }
  }
  if (tmp9) {
    tmp10 = stateFromStores1;
  }
  stateFromStores1 = tmp10;
  const items2 = [MediaEngineStore];
  const items3 = [tmp10];
  const tmp5Result = channel(onDoubleTap[15]);
  const stateFromStores2 = tmp5Result.useStateFromStores(items2, () => {
    const isLocalVideoDisabledResult = null != stateFromStores1 && MediaEngineStore.isLocalVideoDisabled(tmp.id);
    return isLocalVideoDisabledResult;
  }, items3);
  const items4 = [tmp6, obj2];
  const tmp5Result4 = channel(onDoubleTap[15]);
  const stateFromStores3 = tmp5Result4.useStateFromStores(items4, () => {
    const participant = ChannelRTCStore.getParticipant(channel.id, AuthenticationStore.getId());
    let tmp2 = null;
    if (null != participant) {
      tmp2 = null;
      if (participant.type === ParticipantTypes.USER) {
        tmp2 = null;
        if (null != participant.streamId) {
          tmp2 = participant;
        }
      }
    }
    return tmp2;
  });
  const items5 = [channel];
  onDoubleTap = isScreenLandscape.useCallback(() => {
    const obj = PrivateChannelCallUtils;
    obj.openGuildVoiceModal(channel, "PIP");
  }, items5);
  const tmp5Result5 = channel(onDoubleTap[19]);
  shouldForcePipOrientation = tmp5Result5.useShouldForcePipOrientation({ channel });
  const tmp5Result6 = channel(onDoubleTap[20]);
  isScreenLandscape = tmp5Result6.useIsScreenLandscape();
  const obj4 = { channelId: channel.id, forcedOrientation: shouldForcePipOrientation };
  size = tmp2(tmp3[21])(obj4);
  width = size.width;
  height = size.height;
  const items6 = [shouldForcePipOrientation, isScreenLandscape, height, width];
  let type;
  const memo = isScreenLandscape.useMemo(() => {
    let str;
    size = { height, width, flexDirection: str };
    const tmp = isScreenLandscape;
    if (tmp) {
      str = "row";
    } else {
      str = "column";
    }
    return size;
  }, items6);
  if (tmp10 != null) {
    type = tmp10.type;
  }
  const tmp19 = type === ParticipantTypes.ACTIVITY && tmp2(onDoubleTap[23])(tmp10.applicationId) && null == stateFromStores;
  let type1;
  if (tmp10 != null) {
    type1 = tmp10.type;
  }
  if (ParticipantTypes.HIDDEN_STREAM !== type1) {
    let tmp21;
    if (ParticipantTypes.STREAM !== type1) {
      if (ParticipantTypes.USER === type1) {
        let tmp22 = null;
        if (!stateFromStores2) {
          const obj5 = { participant: tmp10, avatarSize: channel(onDoubleTap[12]).AvatarSizes.PROFILE, resizeMode: channel(onDoubleTap[25]).ResizeMode.COVER, onSingleTap: onDoubleTap, onDoubleTap };
          const tmp2Result = tmp2(onDoubleTap[26]);
          tmp22 = closure_15(tmp2Result, obj5);
        }
        tmp21 = tmp22;
      } else {
        tmp21 = null;
        if (ParticipantTypes.ACTIVITY === type1) {
          const obj6 = {
            participant: tmp10,
            channel,
            onSingleTap() {
                      const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
                      if (null != currentEmbeddedActivity) {
                        let _location;
                        const guild_id = channel.guild_id;
                        const tmp4 = transitionToActivityDefault;
                        if (currentEmbeddedActivity != null) {
                          _location = currentEmbeddedActivity.location;
                        }
                        tmp4(guild_id, _location);
                      }
                      callback();
                    }
          };
          tmp21 = closure_15(tmp2(tmp3[27]), obj6);
        }
      }
    }
    const obj8 = { style: items7, children: items8 };
    items7 = [, , ];
    ({ pip: arr8[0], elevationShadow: arr8[1] } = tmp);
    items7[2] = memo;
    let tmp26Result = null != stateFromStores3;
    const obj7 = { style: tmp.background, children: closure_15(tmp28, obj11) };
    tmp28 = closure_7;
    const tmp29 = closure_16;
    if (tmp26Result) {
      tmp26Result = !tmp19;
    }
    if (tmp26Result) {
      const obj9 = { participant: stateFromStores3, avatarSize: channel(onDoubleTap[12]).AvatarSizes.PROFILE, resizeMode: channel(onDoubleTap[25]).ResizeMode.COVER, onSingleTap: onDoubleTap };
      const tmp2Result3 = tmp2(onDoubleTap[26]);
      tmp26Result = tmp26(tmp2Result3, obj9);
    }
    items8 = [tmp26Result, , ];
    let tmp26Result2 = null != stateFromStores && !tmp19;
    if (tmp26Result2) {
      const obj10 = { onSingleTap: onDoubleTap };
      tmp26Result2 = tmp26(tmp2(tmp3[29]), obj10);
    }
    items8[1] = tmp26Result2;
    const tmp33 = (null == stateFromStores3 || null == stateFromStores || null == stateFromStores1) && tmp21;
    items8[2] = tmp33;
    obj11 = { activeOpacity: 0.7, children: tmp29(width, obj8) };
    return closure_15(width, obj7);
  }
  const obj12 = { resizeMode: channel(onDoubleTap[25]).ResizeMode.CONTAIN, participant: tmp10, onSingleTap: onDoubleTap, onDoubleTap };
  const tmp2Result4 = tmp2(onDoubleTap[24]);
  tmp21 = closure_15(tmp2Result4, obj12);
});
let closure_20 = react.memo((channel) => {
  let tmp2;
  let tmp3;
  const f105976 = () => constants.TOP_RIGHT;
  channel = channel.channel;
  [tmp2, tmp3] = react.useState(f105976);
  const obj = { channel, preferredPosition: tmp2, onMove: tmp3, children: closure_15(closure_19, { channel }) };
  _slicedToArray(react.useState(f105976), 2);
  const tmp4 = PictureInPictureDefault;
  return closure_15(tmp4, obj);
});
const __initData = { code: "function PictureInPictureGlobalTsx1(){const{withTiming,drawerState,STANDARD_EASING}=this.__closure;return withTiming(drawerState,{easing:STANDARD_EASING,duration:250});}" };
const __initData2 = { code: "function PictureInPictureGlobalTsx2(){const{interpolate,animatedDrawerState,NAV_BAR_HEIGHT,PADDING,chatInputContainerHeight,PIP_AVOIDANCE_TAB_BAR_HEIGHT}=this.__closure;return{marginTop:interpolate(animatedDrawerState.get(),[0,1],[NAV_BAR_HEIGHT+PADDING,PADDING]),marginBottom:interpolate(animatedDrawerState.get(),[0,1],[chatInputContainerHeight+PADDING,PIP_AVOIDANCE_TAB_BAR_HEIGHT+PADDING])};}" };
let size = size_mod;
const result = size.fileFinishedImporting("modules/video_calls/native/components/PictureInPictureGlobal.tsx");

export default function PictureInPictureGlobal(channel) {
  let View;
  let closure_1;
  let items;
  let items1;
  let obj5;
  let num;
  importDefault = undefined;
  let derivedValue;
  channel = channel.channel;
  const tmp3 = derivedValue;
  const tmp = closure_18();
  let obj = num(derivedValue[31]);
  num = 1;
  if (obj.useIsChannelFocused()) {
    num = 0;
  }
  const tmp4 = closure_10();
  importDefault = tmp4;
  const fn = function n() {
    const obj = timing;
    const obj2 = { easing: native.STANDARD_EASING, duration: 250 };
    return obj.withTiming(num, obj2);
  };
  const tmp2Result = num(tmp3[32]);
  let obj2 = { withTiming: tmp2(tmp3[33]).withTiming, drawerState: num, STANDARD_EASING: tmp2(tmp3[12]).STANDARD_EASING };
  fn.__closure = obj2;
  fn.__workletHash = 5168896066356;
  fn.__initData = __initData;
  derivedValue = tmp2Result.useDerivedValue(fn);
  const fn2 = function o() {
    let interpolate;
    let interpolate2;
    let items;
    let items1;
    let value;
    let value2;
    const obj = { marginTop: interpolate(value, [0, 1], items), marginBottom: interpolate2(value2, [0, 1], items1) };
    interpolate = ReanimatedRexport.interpolate;
    ReanimatedRexport;
    value = derivedValue.get();
    items = [NavigatorConstants.NAV_BAR_HEIGHT + c17, c17];
    interpolate2 = ReanimatedRexport.interpolate;
    items1 = [closure_1 + c17, ];
    ReanimatedRexport;
    value2 = derivedValue.get();
    items1[1] = getPIPBottomOffsetForPIPMode.PIP_AVOIDANCE_TAB_BAR_HEIGHT + c17;
    return obj;
  };
  const tmp2Result2 = num(tmp3[32]);
  fn2.__closure = { interpolate: num(tmp3[32]).interpolate, animatedDrawerState: derivedValue, NAV_BAR_HEIGHT: num(tmp3[34]).NAV_BAR_HEIGHT, PADDING, chatInputContainerHeight: tmp4, PIP_AVOIDANCE_TAB_BAR_HEIGHT: num(tmp3[35]).PIP_AVOIDANCE_TAB_BAR_HEIGHT };
  fn2.__workletHash = 8833756900366;
  fn2.__initData = __initData2;
  ({ interpolate: num(tmp3[32]).interpolate, animatedDrawerState: derivedValue, NAV_BAR_HEIGHT: num(tmp3[34]).NAV_BAR_HEIGHT, PADDING, chatInputContainerHeight: tmp4, PIP_AVOIDANCE_TAB_BAR_HEIGHT: num(tmp3[35]).PIP_AVOIDANCE_TAB_BAR_HEIGHT });
  const animatedStyle = tmp2Result2.useAnimatedStyle(fn2);
  const rect = require("useSafeAreaInsets")();
  const obj4 = { style: items, pointerEvents: "box-none", children: closure_15(View, obj5) };
  items = [absoluteFill.absoluteFill, { paddingLeft: rect.left, paddingRight: rect.right }];
  obj5 = { style: items1, pointerEvents: "box-none", children: closure_15(closure_20, { channel }) };
  items1 = [tmp.container, animatedStyle];
  View = require("ReanimatedRexport").View;
  return closure_15(closure_5, obj4);
};
