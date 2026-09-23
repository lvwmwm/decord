// Module ID: 9732
// Function ID: 9733
// Name: CameraPreview
// Dependencies: [32, 19, 17, 2041, 4843, 9733, 4849, 502, 9734, 9719, 9720, 1074, 4848, 21, 6983, 4559, 1177, 504, 9735, 9727, 9744, 9728, 5428, 1612, 9741, 8678, 8618, 9736, 5985, 4828, 9752, 1115, 9753, 9755, 9756, 9738, 9722, 9695, 9821, 9822, 2]
// Exports: default

// Module 9732 (CameraPreview)
import ReanimatedRexport from "ReanimatedRexport" /* 4559 */;
import timing from "timing" /* 4828 */;
import NavigatorConstants from "NavigatorConstants" /* 5985 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6983 */;
import PictureInPicture from "PictureInPicture" /* 9736 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2041 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4843 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4849 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 9734 */;

require = fn;
function CameraPreview(arg0) {
  ({ channel, participantScreenIsFocused } = arg0);
  let reveal;
  noop = undefined;
  closure_9 = undefined;
  let screenOrientation;
  let marginTop;
  closure_12 = undefined;
  let first1;
  closure_14 = undefined;
  c15 = undefined;
  ({ nonSelfPipParticipant, selfParticipant } = arg0);
  const TIMING_CONFIG = participantScreenIsFocused(504);
  const items = [closure_12];
  const stateFromStores = TIMING_CONFIG.useStateFromStores(items, () => closure_12.isReactingToThermalState());
  const tmp6 = reveal(stateFromStores(9735)(), 2);
  dependencyMap = tmp7;
  reveal = noop.useContext(participantScreenIsFocused(9727).RevealContext).reveal;
  let tmp8 = stateFromStores(9744)();
  noop = tmp8;
  let tmp9 = closure_9();
  closure_5 = tmp9;
  const tmp10 = stateFromStores(9728)(channel.id);
  closure_6 = tmp10;
  const isScreenLandscape = participantScreenIsFocused(5428).useIsScreenLandscape();
  const rect = stateFromStores(1612)();
  const bottom = rect.bottom;
  const top = rect.top;
  ({ left, right } = rect);
  const obj3 = participantScreenIsFocused(5428);
  let isViewingActivity = participantScreenIsFocused(9741).useIsViewingActivity({ channelId: channel.id });
  const obj4 = participantScreenIsFocused(9741);
  const obj5 = { channelId: channel.id };
  const items1 = [closure_12];
  const tmp13 = participantScreenIsFocused(504).useStateFromStores(items1, () => closure_12.getVoiceCallOverlayLayoutStates())[constants.CAMERA_PREVIEW_PICTURE_IN_PICTURE];
  const OrientationType = participantScreenIsFocused(8678).OrientationType;
  const tmp14 = isScreenLandscape ? OrientationType.LANDSCAPE : OrientationType.PORTRAIT;
  closure_9 = tmp14;
  const tmp15 = stateFromStores(8618)(tmp14);
  let tmp16 = tmp15;
  if (tmp15 == null) {
    screenOrientation = undefined;
    if (tmp13 != null) {
      screenOrientation = tmp13.screenOrientation;
    }
    tmp16 = screenOrientation;
  }
  screenOrientation = tmp16;
  const items2 = [tmp14, tmp16, tmp10, tmp6[1]];
  const effect = obj2.useEffect(() => {
    let tmp2 = null != screenOrientation;
    if (tmp2) {
      tmp2 = tmp !== closure_9;
    }
    if (tmp2) {
      tmp2 = closure_6;
    }
    if (tmp2) {
      dependencyMap(PictureInPicture.DEFAULT_PIP_POSITION);
    }
  }, items2);
  const tmp5Result = reveal(noop.useState(top + closure_16), 2);
  marginTop = tmp5Result[0];
  closure_12 = tmp5Result[1];
  const tmp5Result3 = reveal(noop.useState(bottom + closure_16), 2);
  first1 = tmp5Result3[0];
  closure_14 = tmp5Result3[1];
  const items3 = [reveal, tmp9, participantScreenIsFocused, tmp8, top, bottom];
  const effect1 = obj2.useEffect(() => {
    let sum = top + value2;
    let sum1 = bottom + value2;
    if (participantScreenIsFocused) {
      if (reveal) {
        sum = NavigatorConstants.NAV_BAR_HEIGHT + tmp + tmp2;
      }
      if (tmp9) {
        sum1 = closure_4 + tmp4 + tmp2;
      }
      let sum2 = sum1;
      let tmp8 = sum;
      tmp9 = reveal;
    } else {
      sum2 = closure_5 + tmp4 + tmp2;
      tmp8 = sum;
    }
    closure_12(tmp8);
    closure_14(sum2);
  }, items3);
  const obj6 = participantScreenIsFocused(504);
  function ee() {
    obj = { marginTop: timing.withTiming(first, obj), marginBottom: null };
    obj.marginBottom = timing.withTiming(first1, obj);
    return obj;
  }
  const tmpResult = participantScreenIsFocused(4559);
  ee.__closure = { withTiming: participantScreenIsFocused(4828).withTiming, marginTopState: marginTop, TIMING_CONFIG, marginBottomState: first1 };
  ee.__workletHash = 17411027531876;
  ee.__initData = __initData;
  const animatedStyle = tmpResult.useAnimatedStyle(ee);
  const ref = noop.useRef(null);
  const obj7 = { withTiming: participantScreenIsFocused(4828).withTiming, marginTopState: marginTop, TIMING_CONFIG, marginBottomState: first1 };
  [tmp27, c15] = reveal(noop.useState(null), 2);
  if (constants3.HIDE_PIP === tmp27) {
    const obj8 = { text: null, onClick: null };
    function handleHidePip() {
      const result = participantScreenIsFocused(9752).setPipEnabledWhileFocusedOnActivityOrStream(false);
    }
    const intl2 = tmp(1115).intl;
    obj8.text = intl2.string(tmp(1115).t.L3I0Jr);
    obj8.onClick = handleHidePip;
    const items4 = [obj8];
    let items6 = items4;
  } else if (tmp28.HANDLE_THERMAL_EVENT === tmp27) {
    const obj9 = { text: null, onClick: null };
    const intl = tmp(1115).intl;
    obj9.text = intl.string(tmp(1115).t["1fRDnT"]);
    obj9.onClick = tmp(9753).openIgnoreThermalStateAlert;
    const items5 = [obj9];
    items6 = items5;
  } else {
    items6 = [];
  }
  closure_129_0 = ref;
  [][0] = ref;
  let tmp32 = null;
  if (null != tmp27) {
    const obj10 = { gesture: tmp29, children: null };
    const obj11 = { style: closure_5.absoluteFill };
    obj10.children = closure_21(closure_6, obj11);
    tmp32 = closure_21(tmp(6983).GestureDetector, obj10);
  }
  const items7 = [tmp32, ];
  const obj12 = { style: closure_5.absoluteFill, pointerEvents: "box-none", children: null };
  const obj13 = { style: null, pointerEvents: "box-none", children: null };
  const items8 = [{ flex: 1, marginLeft: left + c15, marginRight: right + c15 }, animatedStyle];
  obj13.style = items8;
  const obj15 = { channel, preferredPosition: tmp6[0], onMove: tmp6[1], isInCallScreen: true, marginTop, marginBottom: first1, children: null };
  const obj14 = { flex: 1, marginLeft: left + c15, marginRight: right + c15 };
  const tmp30 = closure_23;
  const tmp31 = closure_22;
  const tmp37 = closure_6;
  const tmp5Result4 = reveal(noop.useState(null), 2);
  const obj16 = { ref, disabled: null, trigger: null, rows: null, onOpen: null, onClose: null };
  const tmp4Result = stateFromStores(9736);
  if (isViewingActivity) {
    isViewingActivity = stateFromStores;
  }
  obj16.disabled = !isViewingActivity;
  obj16.trigger = closure_21(stateFromStores(9756), { channel, selfParticipant, pipParticipant: nonSelfPipParticipant });
  obj16.rows = items6;
  obj16.onOpen = function onOpen() {
    _undefined(stateFromStores ? constants.HANDLE_THERMAL_EVENT : constants.HIDE_PIP);
  };
  obj16.onClose = function onClose() {
    _undefined(null);
  };
  obj15.children = closure_21(stateFromStores(9755), obj16);
  obj13.children = closure_21(tmp4Result, obj15);
  let str = "portrait";
  if (isScreenLandscape) {
    str = "landscape";
  }
  const obj17 = { children: null };
  obj12.children = closure_21(stateFromStores(4559).View, obj13, str);
  items7[1] = closure_21(tmp37, obj12);
  obj17.children = items7;
  return tmp30(tmp31, obj17);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
let closure_9 = fn(9733).useBestActiveChatInputContainerHeight;
const useChannelCallStore = fn(9719).useChannelCallStore;
const ChannelCallConstants = fn(9720);
({ VoiceChatDrawerState: closure_14, VOICE_CALL_OVERLAY_HORIZONTAL_MARGIN: closure_15, VOICE_CALL_OVERLAY_VERTICAL_MARGIN: closure_16, VoiceCallOverlayType: closure_17 } = ChannelCallConstants);
const ApplicationStreamStates = fn(1074).ApplicationStreamStates;
const CallConstants = fn(4848);
({ ParticipantTypes: closure_19, isStreamParticipant: closure_20 } = CallConstants);
const jsxProd = fn(21);
({ jsx: closure_21, Fragment: closure_22, jsxs: closure_23 } = jsxProd);
let closure_24 = { code: "function CameraPreviewTsx1(){const{closeFunc,runOnJS}=this.__closure;if(closeFunc!=null){runOnJS(closeFunc)();}}" };
let obj = { duration: 250, easing: fn(1177).STANDARD_EASING };
const constants3 = { HIDE_PIP: "HIDE_PIP", HANDLE_THERMAL_EVENT: "HANDLE_THERMAL_EVENT" };
const __initData = { code: "function CameraPreviewTsx2(){const{withTiming,marginTopState,TIMING_CONFIG,marginBottomState}=this.__closure;return{marginTop:withTiming(marginTopState,TIMING_CONFIG),marginBottom:withTiming(marginBottomState,TIMING_CONFIG)};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/CameraPreview.tsx");

export default function CameraPreviewContainer(channel) {
  channel = channel.channel;
  let flag = channel.participantScreenIsFocused;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = channel.isChannelCallModalOpen;
  if (flag2 === undefined) {
    flag2 = false;
  }
  closure_3 = undefined;
  let id;
  const tmp3 = flag(9722)(channel);
  dependencyMap = tmp3;
  const items = [ChannelRTCStore, AuthenticationStore, ApplicationStreamingStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => {
    const id2 = AuthenticationStore.getId();
    const currentUserActiveStream = ApplicationStreamingStore.getCurrentUserActiveStream();
    let tmp2 = null != currentUserActiveStream;
    if (tmp2) {
      tmp2 = currentUserActiveStream.state === ApplicationStreamStates.ACTIVE;
    }
    closure_1 = tmp2;
    const streamParticipants = ChannelRTCStore.getStreamParticipants(channel.id);
    const found = streamParticipants.find((user) => user.user.id === closure_0 && closure_1);
    if (null != id) {
      if (null != found) {
        if (id.id === found.id) {
          let tmp6 = null;
        }
        return tmp6;
      }
    }
    tmp6 = found;
  });
  obj = channel(504);
  const tmp7 = useChannelCallStore((voiceChatDrawerState) => {
    voiceChatDrawerState = voiceChatDrawerState.voiceChatDrawerState;
    return voiceChatDrawerState === constants.OPEN || voiceChatDrawerState === constants.OPENING;
  });
  const items1 = [ChannelRTCStore, EmbeddedActivitiesStore];
  const stateFromStores1 = channel(504).useStateFromStores(items1, () => {
    const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
    let found = null;
    if (null != currentEmbeddedActivity) {
      const participants = ChannelRTCStore.getParticipants(channel.id);
      found = participants.find((id) => id.id === channel(closure_2[37]).getEmbeddedActivityParticipantId({ applicationId: currentEmbeddedActivity.applicationId, instanceId: currentEmbeddedActivity.compositeInstanceId }));
    }
    return found;
  });
  let tmp9 = null != stateFromStores1;
  if (tmp9) {
    id = undefined;
    if (tmp3 != null) {
      id = tmp3.id;
    }
    let id1;
    if (stateFromStores1 != null) {
      id1 = stateFromStores1.id;
    }
    tmp9 = id === id1;
  }
  if (tmp9) {
    tmp9 = !tmp7;
  }
  closure_3 = tmp9;
  let tmp12 = null;
  if (!tmp9) {
    tmp12 = stateFromStores1;
  }
  const obj3 = channel(504);
  const isStreamFocused = channel(9821).useIsStreamFocused(channel.id);
  const tmp4Result = channel(9821);
  const isViewingActivity = channel(9741).useIsViewingActivity({ channelId: channel.id });
  const obj4 = { channelId: channel.id };
  const tmp4Result7 = channel(9741);
  const items2 = [ChannelRTCStore, AuthenticationStore];
  const stateFromStores2 = channel(504).useStateFromStores(items2, () => {
    id = AuthenticationStore.getId();
    const participant = ChannelRTCStore.getParticipant(channel.id, id);
    let streamId;
    if (participant != null) {
      streamId = participant.streamId;
    }
    if (null == streamId) {
      if (!closure_3) {
        return null;
      }
    }
    if (flag) {
      let tmp6 = null != closure_2;
      if (tmp6) {
        let id1;
        if (tmp5 != null) {
          id1 = tmp5.id;
        }
        tmp6 = id1 !== id;
      }
      if (null == closure_2) {
        if (!obj2.isGuildStageVoice()) {
          const participants = ChannelRTCStore.getParticipants(obj2.id);
          let found = participants;
          if (participants.length <= 4) {
            found = participants.filter((user) => {
              let tmp = closure_2_20(user);
              if (tmp) {
                tmp = user.user.id === id;
              }
              return !tmp;
            });
          }
          let tmp8 = found.length > 1;
          if (tmp8) {
            tmp8 = found.length <= 3;
          }
          return tmp9;
        }
        tmp9 = participant;
      }
      tmp9 = null;
    } else {
      return participant;
    }
  });
  const tmp4Result8 = channel(504);
  const items3 = [AuthenticationStore, ChannelRTCStore];
  id = channel.id;
  const stateFromStores3 = channel(504).useStateFromStores(items3, () => {
    const tmp2 = closure_2_20(user);
    let type;
    if (user != null) {
      type = tmp.type;
    }
    if (tmp2) {
      let streamId;
      if (tmp != null) {
        streamId = tmp.streamId;
      }
      if (null != streamId) {
        let found = tmp;
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
      if (tmp != null) {
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
    if (type === constants2.USER) {
      const streamParticipants = ChannelRTCStore.getStreamParticipants(channel.id);
      found = streamParticipants.find((user) => user.user.id === user.user.id);
    }
  });
  const tmp4Result9 = channel(504);
  const items4 = [ChannelRTCStore];
  closure_129_0 = channel;
  const stateFromStores4 = channel(504).useStateFromStores(items4, () => {
    let tmp2 = null != id;
    if (tmp2) {
      tmp2 = null != ChannelRTCStore.getSelectedParticipant(tmp);
    }
    return tmp2;
  });
  const tmp4Result10 = channel(504);
  const items5 = [ChannelRTCStore];
  const stateFromStores5 = channel(504).useStateFromStores(items5, () => ChannelRTCStore.getSelectedParticipant(channel.id));
  const tmp19 = flag(9738)(channel.id);
  let tmp20 = null;
  if (null != tmp19) {
    tmp20 = null;
    if (tmp19.user.id !== obj2.getId()) {
      if (!flag) {
        let id2;
        if (stateFromStores5 != null) {
          id2 = stateFromStores5.id;
        }
        tmp20 = null;
        if (tmp19.id !== id2) {
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
  const tmp4Result11 = channel(504);
  const items6 = [ChannelCallLifecycleStore];
  const stateFromStores6 = channel(504).useStateFromStores(items6, () => pipEnabledWhileFocusedOnActivityOrStream.isPipEnabledWhileFocusedOnActivityOrStream());
  if (flag2) {
    flag2 = channel.isGuildStageVoice();
  }
  flag(9822)(channel);
  if (tmp9) {
    if (!stateFromStores6) {
      let tmp25 = null;
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
