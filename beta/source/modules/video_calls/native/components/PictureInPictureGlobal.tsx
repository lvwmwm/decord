// Module ID: 19412
// Function ID: 19413
// Name: PictureInPictureGlobal
// Dependencies: [32, 19, 17, 5018, 6931, 10050, 502, 2130, 1072, 5837, 21, 5170, 1187, 575, 11904, 504, 6939, 11897, 8041, 11903, 8877, 11906, 9010, 11948, 11952, 11960, 11973, 11982, 11893, 11949, 11902, 6961, 1652, 5402, 5746, 19413, 1627, 2]
// Exports: default

// Module 19412 (PictureInPictureGlobal)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5402 */;
import NavigatorConstants from "NavigatorConstants" /* 5746 */;
import CallConstants from "CallConstants" /* 5837 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 6939 */;
import isChannelFocused from "isChannelFocused" /* 6961 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 8041 */;
import useChatBottomManagerUIStore from "useChatBottomManagerUIStore" /* 10050 */;
import transitionToActivityDefault from "transitionToActivity" /* 11893 */;
import PictureInPictureDefault from "PictureInPicture" /* 11902 */;
import getPIPBottomOffsetForPIPMode from "getPIPBottomOffsetForPIPMode" /* 19413 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 5018 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6931 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 2130 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import native_mod from "native" /* 1187 */;
import size_mod from "module_2" /* 2 */;

const _modDef1652 = _mod1652;

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
let createStyles = createStyles_mod;
let obj = { container: { flex: 1, marginLeft: 12, marginRight: 12 }, elevationShadow: native.generateBoxShadowStyle(native.EIGHT_DP_ELEVATION_SHADOW_PARAMS), pip: obj2, background: obj3 };
createStyles = createStyles.createStyles;
native = native_mod;
obj2 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj3 = { backgroundColor: nativeDefault.colors.BLACK, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let closure_17 = createStyles(obj);
let closure_18 = react.memo(function PIPContent(channel) {
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
  let tmp = closure_17();
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
let closure_19 = react.memo(function PIPContentContainer(channel) {
  let tmp2;
  let tmp3;
  const f118425 = () => constants.TOP_RIGHT;
  channel = channel.channel;
  [tmp2, tmp3] = react.useState(f118425);
  const obj = { channel, preferredPosition: tmp2, onMove: tmp3, children: closure_15(closure_18, { channel }) };
  _slicedToArray(react.useState(f118425), 2);
  const tmp4 = PictureInPictureDefault;
  return closure_15(tmp4, obj);
});
let closure_20 = { code: "(function PictureInPictureGlobalTsx1(){let[withTiming,drawerState,STANDARD_EASING]=this.__closure;return withTiming(drawerState,{easing:STANDARD_EASING,duration:250});})" };
let closure_21 = { code: "(function PictureInPictureGlobalTsx2(){let[interpolate,animatedDrawerState,NAV_BAR_HEIGHT,PADDING,chatInputContainerHeight,PIP_AVOIDANCE_TAB_BAR_HEIGHT]=this.__closure;return{marginTop:interpolate(animatedDrawerState.get(),[0,1],[NAV_BAR_HEIGHT+PADDING,PADDING]),marginBottom:interpolate(animatedDrawerState.get(),[0,1],[chatInputContainerHeight+PADDING,PIP_AVOIDANCE_TAB_BAR_HEIGHT+PADDING])};})" };
let size = size_mod;
const result = size.fileFinishedImporting("modules/video_calls/native/components/PictureInPictureGlobal.tsx");

export default function PictureInPictureGlobal(channel) {
  let View;
  let items4;
  let items5;
  let obj3;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  channel = channel.channel;
  const tmp = closure_17();
  let obj = isChannelFocused;
  let num = 1;
  if (obj.useIsChannelFocused()) {
    num = 0;
  }
  let items = [closure_20, , , ];
  const tmp4 = closure_10();
  const useDerivedValue = _mod1652.useDerivedValue;
  _mod1652;
  items[1] = timing_timing.withTiming;
  items[2] = num;
  items[3] = native.STANDARD_EASING;
  let c0;
  let c1;
  let c2;
  [tmp6, tmp7, tmp8, tmp9] = items;
  class PictureInPictureGlobalTsx1 {
    constructor() {
      obj = { easing: closure_2, duration: 250 };
      return closure_0(closure_1, obj);
    }
  }
  let items1 = [tmp7, tmp8, tmp9];
  PictureInPictureGlobalTsx1.__closure = items1;
  PictureInPictureGlobalTsx1.__workletHash = 16919925230637;
  PictureInPictureGlobalTsx1.__initData = tmp6;
  const derivedValue = useDerivedValue(PictureInPictureGlobalTsx1);
  const items2 = [closure_21, , , , , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items2[1] = _mod1652.interpolate;
  items2[2] = derivedValue;
  items2[3] = NavigatorConstants.NAV_BAR_HEIGHT;
  items2[4] = 12;
  items2[5] = tmp4;
  items2[6] = getPIPBottomOffsetForPIPMode.PIP_AVOIDANCE_TAB_BAR_HEIGHT;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  let c3;
  let c4;
  let c5;
  [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items2;
  class PictureInPictureGlobalTsx2 {
    constructor() {
      obj = { marginTop: null, marginBottom: null };
      items = [, ];
      items[0] = closure_2 + closure_3;
      items[1] = closure_3;
      obj.marginTop = closure_0(closure_1.get(), [0, 1], items);
      items1 = [, ];
      items1[0] = closure_4 + closure_3;
      items1[1] = closure_5 + closure_3;
      obj.marginBottom = closure_0(closure_1.get(), [0, 1], items1);
      return obj;
    }
  }
  const items3 = [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18];
  PictureInPictureGlobalTsx2.__closure = items3;
  PictureInPictureGlobalTsx2.__workletHash = 6177116209527;
  PictureInPictureGlobalTsx2.__initData = tmp12;
  const animatedStyle = useAnimatedStyle(PictureInPictureGlobalTsx2);
  const rect = useSafeAreaInsetsDefault();
  const obj2 = { style: items4, pointerEvents: "box-none", children: closure_15(View, obj3) };
  items4 = [metroRequire.absoluteFill, { paddingLeft: rect.left, paddingRight: rect.right }];
  obj3 = { style: items5, pointerEvents: "box-none", children: closure_15(closure_19, { channel }) };
  items5 = [tmp.container, animatedStyle];
  View = _modDef1652.View;
  return closure_15(hasOwnProperty, obj2);
};
