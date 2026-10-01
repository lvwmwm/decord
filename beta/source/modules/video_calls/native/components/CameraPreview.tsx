// Module ID: 8842
// Function ID: 8843
// Name: CameraPreview
// Dependencies: [32, 19, 17, 2044, 4852, 8843, 4858, 502, 8844, 8829, 8830, 1074, 4857, 21, 6073, 4566, 1177, 504, 8845, 8837, 8854, 8838, 5438, 1613, 8851, 7780, 7720, 8846, 5994, 4837, 8862, 1115, 8863, 8865, 8866, 8848, 8832, 8805, 8935, 8936, 2]
// Exports: default

// Module 8842 (CameraPreview)
import Constants from "Constants" /* 1074 */;
import native from "native" /* 1177 */;
import timing from "timing" /* 4837 */;
import NavigatorConstants from "NavigatorConstants" /* 5994 */;
import ChannelCallStore from "ChannelCallStore" /* 8829 */;
import useChatBottomManagerUIStore from "useChatBottomManagerUIStore" /* 8843 */;
import PictureInPicture from "PictureInPicture" /* 8846 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4852 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4858 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 8844 */;
import ChannelCallConstants from "ChannelCallConstants" /* 8830 */;
import CallConstants from "CallConstants" /* 4857 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let closure_12, dependencyMap, voiceChatDrawerState;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let hasOwnProperty;
let metroRequire;
function CameraPreview(arg0) {
  let View;
  let _undefined;
  let c15;
  let channel;
  let closure_2;
  let closure_4;
  let handleHidePip;
  let intl;
  let intl2;
  let items6;
  let items8;
  let left;
  let nonSelfPipParticipant;
  let obj11;
  let obj13;
  let obj15;
  let obj16;
  let participantScreenIsFocused;
  let right;
  let selfParticipant;
  let str;
  let tmp28;
  let tmp4Result;
  let tmp4Result2;
  ({ channel, participantScreenIsFocused } = arg0);
  dependencyMap = undefined;
  let reveal;
  react = undefined;
  closure_9 = undefined;
  let screenOrientation;
  let first1;
  closure_12 = undefined;
  let first2;
  let closure_14;
  c15 = undefined;
  const tmp = participantScreenIsFocused;
  let tmp2 = dependencyMap;
  ({ nonSelfPipParticipant, selfParticipant } = arg0);
  TIMING_CONFIG = participantScreenIsFocused(504);
  const items = [closure_12];
  const stateFromStores = TIMING_CONFIG.useStateFromStores(items, () => closure_12.isReactingToThermalState());
  const tmp4 = stateFromStores;
  let tmp6 = reveal(stateFromStores(8845)(), 2);
  dependencyMap = tmp8;
  let obj2 = react;
  const first = tmp6[0];
  reveal = react.useContext(participantScreenIsFocused(8837).RevealContext).reveal;
  const tmp9 = stateFromStores(8854)();
  react = tmp9;
  const tmp10 = closure_9();
  let closure_5 = tmp10;
  const tmp11 = stateFromStores(8838)(channel.id);
  let closure_6 = tmp11;
  let obj3 = participantScreenIsFocused(5438);
  const isScreenLandscape = obj3.useIsScreenLandscape();
  const rect = stateFromStores(1613)();
  const bottom = rect.bottom;
  const top = rect.top;
  ({ left, right } = rect);
  const obj4 = participantScreenIsFocused(8851);
  const obj5 = { channelId: channel.id };
  let isViewingActivity = obj4.useIsViewingActivity(obj5);
  const items1 = [closure_12];
  const obj6 = participantScreenIsFocused(504);
  const tmp14 = obj6.useStateFromStores(items1, () => closure_12.getVoiceCallOverlayLayoutStates())[constants.CAMERA_PREVIEW_PICTURE_IN_PICTURE];
  const OrientationType = participantScreenIsFocused(7780).OrientationType;
  const tmp15 = isScreenLandscape ? OrientationType.LANDSCAPE : OrientationType.PORTRAIT;
  closure_9 = tmp15;
  const tmp16 = tmp4(7720)(tmp15);
  let tmp17 = tmp16;
  if (tmp16 == null) {
    screenOrientation = undefined;
    if (tmp14 != null) {
      screenOrientation = tmp14.screenOrientation;
    }
    tmp17 = screenOrientation;
  }
  screenOrientation = tmp17;
  const items2 = [tmp15, tmp17, tmp11, tmp8];
  const effect = obj2.useEffect(() => {
    const tmp2 = null != screenOrientation && tmp !== closure_9 && closure_6;
    if (tmp2) {
      closure_2(PictureInPicture.DEFAULT_PIP_POSITION);
    }
  }, items2);
  const tmp5Result = reveal(obj2.useState(top + closure_16), 2);
  first1 = tmp5Result[0];
  closure_12 = tmp5Result[1];
  const tmp5Result3 = reveal(obj2.useState(bottom + closure_16), 2);
  first2 = tmp5Result3[0];
  closure_14 = tmp5Result3[1];
  const items3 = [reveal, tmp10, participantScreenIsFocused, tmp9, top, bottom];
  const effect1 = obj2.useEffect(() => {
    let sum2;
    let sum3;
    let sum = top + authStore3;
    let sum1 = bottom + authStore3;
    const tmp6 = participantScreenIsFocused;
    if (tmp6) {
      if (reveal) {
        sum = NavigatorConstants.NAV_BAR_HEIGHT + tmp + tmp2;
      }
      if (reveal) {
        sum1 = closure_4 + tmp4 + tmp2;
      }
      sum3 = sum1;
      sum2 = sum;
    } else {
      sum2 = NavigatorConstants.NAV_BAR_HEIGHT + tmp2;
      sum3 = closure_5 + tmp4 + tmp2;
    }
    closure_12(sum2);
    closure_14(sum3);
  }, items3);
  function ee() {
    let obj;
    let obj2;
    let obj3;
    obj = { marginTop: obj2.withTiming(first1, obj), marginBottom: obj3.withTiming(first2, obj) };
    obj2 = timing;
    obj3 = timing;
    return obj;
  }
  const tmpResult = tmp(4566);
  ee.__closure = { withTiming: tmp(4837).withTiming, marginTopState: first1, TIMING_CONFIG, marginBottomState: first2 };
  ee.__workletHash = 17411027531876;
  ee.__initData = __initData;
  ({ withTiming: tmp(4837).withTiming, marginTopState: first1, TIMING_CONFIG, marginBottomState: first2 });
  const animatedStyle = tmpResult.useAnimatedStyle(ee);
  const ref = obj2.useRef(null);
  [tmp28, c15] = reveal(obj2.useState(null), 2);
  reveal(obj2.useState(null), 2);
  if (constants3.HIDE_PIP === tmp28) {
    const obj8 = { text: intl2.string(tmp(1115).t.L3I0Jr), onClick: handleHidePip };
    handleHidePip = function handleHidePip() {
      const obj = participantScreenIsFocused(closure_2[30]);
      const result = obj.setPipEnabledWhileFocusedOnActivityOrStream(false);
    };
    intl2 = tmp(1115).intl;
    const items4 = [obj8];
    items6 = items4;
  } else if (tmp29.HANDLE_THERMAL_EVENT === tmp28) {
    const obj9 = { text: intl.string(tmp(1115).t["1fRDnT"]), onClick: tmp(8863).openIgnoreThermalStateAlert };
    intl = tmp(1115).intl;
    const items5 = [obj9];
    items6 = items5;
  } else {
    items6 = [];
  }
  [][0] = ref;
  let tmp33 = null;
  const tmp31 = closure_23;
  const tmp32 = closure_22;
  if (null != tmp28) {
    const obj10 = { gesture: tmp30, children: closure_21(closure_6, obj11) };
    obj11 = { style: closure_5.absoluteFill };
    const GestureDetector = tmp(6073).GestureDetector;
    tmp33 = closure_21(GestureDetector, obj10);
  }
  const items7 = [tmp33, ];
  const obj12 = { style: closure_5.absoluteFill, pointerEvents: "box-none", children: closure_21(View, obj13, str) };
  obj13 = { style: items8, pointerEvents: "box-none", children: closure_21(tmp4Result, obj15) };
  items8 = [, ];
  const obj14 = { flex: 1, marginLeft: left + c15, marginRight: right + c15 };
  items8[0] = obj14;
  items8[1] = animatedStyle;
  View = tmp4(4566).View;
  obj15 = { channel, preferredPosition: first, onMove: tmp6[1], isInCallScreen: true, marginTop: first1, marginBottom: first2, children: closure_21(tmp4Result2, obj16) };
  obj16 = {
    ref,
    disabled: !isViewingActivity,
    trigger: closure_21(tmp4(8866), { channel, selfParticipant, pipParticipant: nonSelfPipParticipant }),
    rows: items6,
    onOpen() {
      _undefined(stateFromStores ? constants3.HANDLE_THERMAL_EVENT : constants3.HIDE_PIP);
    },
    onClose() {
      _undefined(null);
    }
  };
  tmp4Result = tmp4(8846);
  const tmp38 = closure_6;
  tmp4Result2 = tmp4(8865);
  if (isViewingActivity) {
    isViewingActivity = stateFromStores;
  }
  str = "portrait";
  if (isScreenLandscape) {
    str = "landscape";
  }
  const obj17 = { children: items7 };
  items7[1] = closure_21(tmp38, obj12);
  return tmp31(tmp32, obj17);
}
let react = react_mod;
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
let closure_9 = useChatBottomManagerUIStore.useBestActiveChatInputContainerHeight;
const useChannelCallStore = ChannelCallStore.useChannelCallStore;
({ VoiceChatDrawerState: closure_14, VOICE_CALL_OVERLAY_HORIZONTAL_MARGIN: closure_15, VOICE_CALL_OVERLAY_VERTICAL_MARGIN: closure_16, VoiceCallOverlayType: closure_17 } = ChannelCallConstants);
const ApplicationStreamStates = Constants.ApplicationStreamStates;
({ ParticipantTypes: closure_19, isStreamParticipant: closure_20 } = CallConstants);
({ jsx: closure_21, Fragment: closure_22, jsxs: closure_23 } = Fragment);
let closure_24 = { code: "function CameraPreviewTsx1(){const{closeFunc,runOnJS}=this.__closure;if(closeFunc!=null){runOnJS(closeFunc)();}}" };
let TIMING_CONFIG = { duration: 250, easing: native.STANDARD_EASING };
const constants3 = { HIDE_PIP: "HIDE_PIP", HANDLE_THERMAL_EVENT: "HANDLE_THERMAL_EVENT" };
const __initData = { code: "function CameraPreviewTsx2(){const{withTiming,marginTopState,TIMING_CONFIG,marginBottomState}=this.__closure;return{marginTop:withTiming(marginTopState,TIMING_CONFIG),marginBottom:withTiming(marginBottomState,TIMING_CONFIG)};}" };
let result = size.fileFinishedImporting("modules/video_calls/native/components/CameraPreview.tsx");

export default function CameraPreviewContainer(channel) {
  let pipEnabledWhileFocusedOnActivityOrStream;
  let selectedParticipant;
  let tmp25;
  channel = channel.channel;
  let flag = channel.participantScreenIsFocused;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = channel.isChannelCallModalOpen;
  if (flag2 === undefined) {
    flag2 = false;
  }
  dependencyMap = undefined;
  let closure_3;
  let id;
  let tmp = flag;
  let tmp2 = dependencyMap;
  const tmp3 = flag(8832)(channel);
  dependencyMap = tmp3;
  let tmp4 = channel;
  let obj = channel(504);
  let tmp5 = ChannelRTCStore;
  const items = [ChannelRTCStore, , ];
  let obj2 = AuthenticationStore;
  items[1] = AuthenticationStore;
  items[2] = ApplicationStreamingStore;
  const stateFromStores = obj.useStateFromStores(items, () => {
    const id2 = AuthenticationStore.getId();
    const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
    let closure_1 = null != currentUserActiveStream && currentUserActiveStream.state === ApplicationStreamStates.ACTIVE;
    const tmp2 = null != currentUserActiveStream && currentUserActiveStream.state === ApplicationStreamStates.ACTIVE;
    const streamParticipants = ChannelRTCStore.getStreamParticipants(channel.id);
    const found = streamParticipants.find((user) => user.user.id === closure_0 && closure_1);
    if (null != id) {
      if (null != found) {
        let tmp6;
        if (id.id === found.id) {
          tmp6 = null;
        }
        return tmp6;
      }
    }
    tmp6 = found;
  });
  let tmp7 = useChannelCallStore((voiceChatDrawerState) => {
    voiceChatDrawerState = voiceChatDrawerState.voiceChatDrawerState;
    return voiceChatDrawerState === constants.OPEN || voiceChatDrawerState === constants.OPENING;
  });
  const items1 = [ChannelRTCStore, EmbeddedActivitiesStore];
  const obj3 = channel(504);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => {
    const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
    let found = null;
    if (null != currentEmbeddedActivity) {
      const participants = ChannelRTCStore.getParticipants(channel.id);
      found = participants.find((id) => {
        id = id.id;
        const obj = channel(closure_2_2[37]);
        const obj2 = { applicationId: currentEmbeddedActivity.applicationId, instanceId: currentEmbeddedActivity.compositeInstanceId };
        return id === obj.getEmbeddedActivityParticipantId(obj2);
      });
    }
    return found;
  });
  let tmp9 = null != stateFromStores1;
  if (tmp9) {
    let id1;
    if (tmp3 != null) {
      id1 = tmp3.id;
    }
    let id2;
    if (stateFromStores1 != null) {
      id2 = stateFromStores1.id;
    }
    tmp9 = id1 === id2;
  }
  if (tmp9) {
    tmp9 = !tmp7;
  }
  closure_3 = tmp9;
  let tmp12 = null;
  if (!tmp9) {
    tmp12 = stateFromStores1;
  }
  const tmp4Result = tmp4(8935);
  const isStreamFocused = tmp4Result.useIsStreamFocused(channel.id);
  const obj4 = { channelId: channel.id };
  const tmp4Result7 = tmp4(8851);
  const isViewingActivity = tmp4Result7.useIsViewingActivity(obj4);
  const items2 = [tmp5, obj2];
  const tmp4Result8 = tmp4(504);
  const stateFromStores2 = tmp4Result8.useStateFromStores(items2, () => {
    let tmp10;
    id = AuthenticationStore.getId();
    const participant = ChannelRTCStore.getParticipant(channel.id, id);
    let streamId;
    const obj = ChannelRTCStore;
    if (participant != null) {
      streamId = participant.streamId;
    }
    if (null == streamId) {
      const tmp4 = closure_3;
      if (!tmp4) {
        return null;
      }
    }
    const tmp5 = flag;
    if (tmp5) {
      let tmp7 = null != closure_2;
      if (tmp7) {
        let id1;
        if (closure_2 != null) {
          id1 = tmp6.id;
        }
        tmp7 = id1 !== id;
      }
      if (null == closure_2) {
        if (!channel.isGuildStageVoice()) {
          const participants = obj.getParticipants(obj2.id);
          let found = participants;
          if (participants.length <= 4) {
            found = participants.filter((user) => {
              const tmp = closure_2_20(user) && user.user.id === id;
              return !tmp;
            });
          }
          return tmp10;
        }
        tmp10 = participant;
      }
      tmp10 = null;
    } else {
      return participant;
    }
  });
  const items3 = [obj2, tmp5];
  id = channel.id;
  const tmp4Result9 = tmp4(504);
  const stateFromStores3 = tmp4Result9.useStateFromStores(items3, () => {
    let found;
    const tmp2 = closure_20(user);
    let type;
    if (user != null) {
      type = tmp.type;
    }
    if (tmp2) {
      let streamId;
      if (user != null) {
        streamId = tmp.streamId;
      }
      if (null != streamId) {
        found = tmp;
      }
      let streamId1;
      if (found != null) {
        streamId1 = found.streamId;
      }
      let tmp17 = null;
      if (null != streamId1) {
        tmp17 = found;
      }
      return tmp17;
    }
    if (tmp2) {
      id = undefined;
      if (user != null) {
        id = tmp.user.id;
      }
      if (id !== AuthenticationStore.getId()) {
        const participant = ChannelRTCStore.getParticipant(channel.id, tmp.user.id);
        let localVideoDisabled;
        if (participant != null) {
          localVideoDisabled = participant.localVideoDisabled;
        }
        found = participant;
        if (localVideoDisabled) {
          found = null;
        }
      }
    }
    if (type === constants.USER) {
      const streamParticipants = ChannelRTCStore.getStreamParticipants(channel.id);
      found = streamParticipants.find((user) => user.user.id === user.user.id);
    }
  });
  const items4 = [tmp5];
  const tmp4Result10 = tmp4(504);
  const stateFromStores4 = tmp4Result10.useStateFromStores(items4, () => {
    const tmp2 = null != id && null != ChannelRTCStore.getSelectedParticipant(tmp);
    return tmp2;
  });
  const items5 = [tmp5];
  const tmp4Result11 = tmp4(504);
  const stateFromStores5 = tmp4Result11.useStateFromStores(items5, () => selectedParticipant.getSelectedParticipant(channel.id));
  const tmp19 = tmp(8848)(channel.id);
  let tmp20 = null;
  if (null != tmp19) {
    tmp20 = null;
    if (tmp19.user.id !== obj2.getId()) {
      if (!flag) {
        let id3;
        id = tmp19.id;
        if (stateFromStores5 != null) {
          id3 = stateFromStores5.id;
        }
        tmp20 = null;
        if (id !== id3) {
          tmp20 = tmp19;
        }
      } else {
        tmp20 = null;
      }
    }
  }
  if (tmp12 == null) {
    tmp12 = stateFromStores;
  }
  if (tmp12 == null) {
    tmp12 = stateFromStores3;
  }
  if (tmp12 == null) {
    tmp12 = tmp20;
  }
  let tmp22 = null;
  if (stateFromStores2 !== tmp12) {
    tmp22 = stateFromStores2;
  }
  const items6 = [ChannelCallLifecycleStore];
  const tmp4Result12 = tmp4(504);
  const stateFromStores6 = tmp4Result12.useStateFromStores(items6, () => pipEnabledWhileFocusedOnActivityOrStream.isPipEnabledWhileFocusedOnActivityOrStream());
  if (flag2) {
    flag2 = channel.isGuildStageVoice();
  }
  if (flag2) {
    flag2 = flag;
  }
  tmp(8936)(channel);
  if (tmp9) {
    if (!stateFromStores6) {
      tmp25 = null;
    }
    return tmp25;
  }
  if (null != tmp22) {
    tmp25 = null;
    if (!flag2) {
      const obj5 = { channel, participantScreenIsFocused: flag, nonSelfPipParticipant: tmp12, selfParticipant: tmp22 };
      tmp25 = closure_21(CameraPreview, obj5);
    }
  } else {
    tmp25 = null;
  }
};
