// Module ID: 11901
// Function ID: 11902
// Name: CameraPreview
// Dependencies: [32, 19, 17, 4989, 6978, 10074, 6849, 502, 11902, 11181, 11182, 1072, 5815, 21, 5428, 1705, 1187, 504, 11903, 11898, 11911, 11899, 8914, 1627, 11909, 9044, 6867, 11904, 5722, 1652, 5378, 11920, 1113, 11921, 11948, 11949, 11906, 11184, 6986, 12041, 12042, 2]
// Exports: default

// Module 11901 (CameraPreview)
import Constants from "Constants" /* 1072 */;
import native from "native" /* 1187 */;
import NavigatorConstants from "NavigatorConstants" /* 5722 */;
import useChatBottomManagerUIStore from "useChatBottomManagerUIStore" /* 10074 */;
import ChannelCallStore from "ChannelCallStore" /* 11181 */;
import PictureInPicture from "PictureInPicture" /* 11904 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4989 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6978 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6849 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 11902 */;
import ChannelCallConstants from "ChannelCallConstants" /* 11182 */;
import CallConstants from "CallConstants" /* 5815 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let dependencyMap, voiceChatDrawerState;

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
  let _undefined2;
  let _undefined3;
  let c11;
  let c12;
  let c13;
  let channel;
  let closure_2;
  let closure_4;
  let handleHidePip;
  let intl;
  let intl2;
  let items10;
  let items8;
  let left;
  let nonSelfPipParticipant;
  let obj10;
  let obj12;
  let obj14;
  let obj15;
  let participantScreenIsFocused;
  let right;
  let selfParticipant;
  let str;
  let tmp21;
  let tmp23;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp34;
  let tmp4Result;
  let tmp4Result2;
  ({ channel, participantScreenIsFocused } = arg0);
  dependencyMap = undefined;
  let reveal;
  react = undefined;
  closure_9 = undefined;
  let screenOrientation;
  c11 = undefined;
  c12 = undefined;
  c13 = undefined;
  const tmp = participantScreenIsFocused;
  let tmp2 = dependencyMap;
  ({ nonSelfPipParticipant, selfParticipant } = arg0);
  obj = participantScreenIsFocused(504);
  const items = [c12];
  const stateFromStores = obj.useStateFromStores(items, () => _undefined2.isReactingToThermalState());
  const tmp4 = stateFromStores;
  let tmp6 = reveal(stateFromStores(11903)(), 2);
  dependencyMap = tmp8;
  const first = tmp6[0];
  reveal = react.useContext(participantScreenIsFocused(11898).RevealContext).reveal;
  const tmp9 = stateFromStores(11911)();
  react = tmp9;
  const tmp10 = closure_9();
  let closure_5 = tmp10;
  const tmp11 = stateFromStores(11899)(channel.id);
  let closure_6 = tmp11;
  const obj3 = participantScreenIsFocused(8914);
  const isScreenLandscape = obj3.useIsScreenLandscape();
  const rect = stateFromStores(1627)();
  const bottom = rect.bottom;
  const top = rect.top;
  ({ left, right } = rect);
  const obj4 = participantScreenIsFocused(11909);
  const obj5 = { channelId: channel.id };
  let isViewingActivity = obj4.useIsViewingActivity(obj5);
  const items1 = [c12];
  const obj6 = participantScreenIsFocused(504);
  const tmp14 = obj6.useStateFromStores(items1, () => _undefined2.getVoiceCallOverlayLayoutStates())[constants.CAMERA_PREVIEW_PICTURE_IN_PICTURE];
  const OrientationType = participantScreenIsFocused(9044).OrientationType;
  const tmp15 = isScreenLandscape ? OrientationType.LANDSCAPE : OrientationType.PORTRAIT;
  closure_9 = tmp15;
  const tmp16 = tmp4(6867)(tmp15);
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
  [tmp21, c11] = reveal(react.useState(top + closure_16), 2);
  reveal(react.useState(top + closure_16), 2);
  [tmp23, c12] = reveal(react.useState(bottom + closure_16), 2);
  const items3 = [reveal, tmp10, participantScreenIsFocused, tmp9, top, bottom];
  reveal(react.useState(bottom + closure_16), 2);
  const effect1 = obj2.useEffect(() => {
    let sum2;
    let sum3;
    let sum = top + authStore4;
    let sum1 = bottom + authStore4;
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
    _undefined(sum2);
    _undefined2(sum3);
  }, items3);
  const items4 = [closure_27, , , , ];
  const useAnimatedStyle = tmp(1652).useAnimatedStyle;
  tmp(1652);
  items4[1] = tmp(5378).withTiming;
  items4[2] = tmp21;
  items4[3] = obj;
  items4[4] = tmp23;
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp26, tmp27, tmp28, tmp29, tmp30] = items4;
  class CameraPreviewTsx2 {
    constructor() {
      obj = { marginTop: _undefined(c1, c2), marginBottom: _undefined(c3, c2) };
      return obj;
    }
  }
  const items5 = [tmp27, tmp28, tmp29, tmp30];
  CameraPreviewTsx2.__closure = items5;
  CameraPreviewTsx2.__workletHash = 12303259660253;
  CameraPreviewTsx2.__initData = tmp26;
  const animatedStyle = useAnimatedStyle(CameraPreviewTsx2);
  const ref = obj2.useRef(null);
  [tmp34, c13] = reveal(react.useState(null), 2);
  reveal(react.useState(null), 2);
  if (constants3.HIDE_PIP === tmp34) {
    const obj7 = { text: intl2.string(tmp(1113).t.L3I0Jr), onClick: handleHidePip };
    handleHidePip = function handleHidePip() {
      obj = participantScreenIsFocused(closure_2[31]);
      const result = obj.setPipEnabledWhileFocusedOnActivityOrStream(false);
    };
    intl2 = tmp(1113).intl;
    const items6 = [obj7];
    items8 = items6;
  } else if (tmp35.HANDLE_THERMAL_EVENT === tmp34) {
    const obj8 = { text: intl.string(tmp(1113).t["1fRDnT"]), onClick: tmp(11921).openIgnoreThermalStateAlert };
    intl = tmp(1113).intl;
    const items7 = [obj8];
    items8 = items7;
  } else {
    items8 = [];
  }
  [][0] = ref;
  let tmp39 = null;
  const tmp37 = closure_23;
  const tmp38 = closure_22;
  if (null != tmp34) {
    const obj9 = { gesture: tmp36, children: closure_21(closure_6, obj10) };
    obj10 = { style: closure_5.absoluteFill };
    const GestureDetector = tmp(5428).GestureDetector;
    tmp39 = closure_21(GestureDetector, obj9);
  }
  const items9 = [tmp39, ];
  const obj11 = { style: closure_5.absoluteFill, pointerEvents: "box-none", children: closure_21(View, obj12, str) };
  obj12 = { style: items10, pointerEvents: "box-none", children: closure_21(tmp4Result, obj14) };
  items10 = [, ];
  const obj13 = { flex: 1, marginLeft: left + closure_15, marginRight: right + closure_15 };
  items10[0] = obj13;
  items10[1] = animatedStyle;
  View = tmp4(1652).View;
  obj14 = { channel, preferredPosition: first, onMove: tmp6[1], isInCallScreen: true, marginTop: tmp21, marginBottom: tmp23, children: closure_21(tmp4Result2, obj15) };
  obj15 = {
    ref,
    disabled: !isViewingActivity,
    trigger: closure_21(tmp4(11949), { channel, selfParticipant, pipParticipant: nonSelfPipParticipant }),
    rows: items8,
    onOpen() {
      _undefined3(stateFromStores ? constants3.HANDLE_THERMAL_EVENT : constants3.HIDE_PIP);
    },
    onClose() {
      _undefined3(null);
    }
  };
  tmp4Result = tmp4(11904);
  const tmp44 = closure_6;
  tmp4Result2 = tmp4(11948);
  if (isViewingActivity) {
    isViewingActivity = stateFromStores;
  }
  str = "portrait";
  if (isScreenLandscape) {
    str = "landscape";
  }
  const obj16 = { children: items9 };
  items9[1] = closure_21(tmp44, obj11);
  return tmp37(tmp38, obj16);
}
let react = react_mod;
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
let closure_9 = useChatBottomManagerUIStore.useBestActiveChatInputContainerHeight;
const useChannelCallStore = ChannelCallStore.useChannelCallStore;
({ VoiceChatDrawerState: closure_14, VOICE_CALL_OVERLAY_HORIZONTAL_MARGIN: closure_15, VOICE_CALL_OVERLAY_VERTICAL_MARGIN: closure_16, VoiceCallOverlayType: closure_17 } = ChannelCallConstants);
const ApplicationStreamStates = Constants.ApplicationStreamStates;
({ ParticipantTypes: closure_19, isStreamParticipant: closure_20 } = CallConstants);
({ jsx: closure_21, Fragment: closure_22, jsxs: closure_23 } = Fragment);
let closure_24 = { code: "(function CameraPreviewTsx1(){let[closeFunc,scheduleOnRN]=this.__closure;if(closeFunc!=null){scheduleOnRN(closeFunc);}})" };
let obj = { duration: 250, easing: native.STANDARD_EASING };
const constants3 = { HIDE_PIP: "HIDE_PIP", HANDLE_THERMAL_EVENT: "HANDLE_THERMAL_EVENT" };
let closure_27 = { code: "(function CameraPreviewTsx2(){let[withTiming,marginTopState,TIMING_CONFIG,marginBottomState]=this.__closure;return{marginTop:withTiming(marginTopState,TIMING_CONFIG),marginBottom:withTiming(marginBottomState,TIMING_CONFIG)};})" };
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
  const tmp3 = flag(11184)(channel);
  dependencyMap = tmp3;
  let tmp4 = channel;
  obj = channel(504);
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
        obj = channel(closure_2_2[38]);
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
  const tmp4Result = tmp4(12041);
  const isStreamFocused = tmp4Result.useIsStreamFocused(channel.id);
  const obj4 = { channelId: channel.id };
  const tmp4Result7 = tmp4(11909);
  const isViewingActivity = tmp4Result7.useIsViewingActivity(obj4);
  const items2 = [tmp5, obj2];
  const tmp4Result8 = tmp4(504);
  const stateFromStores2 = tmp4Result8.useStateFromStores(items2, () => {
    let tmp10;
    id = AuthenticationStore.getId();
    const participant = ChannelRTCStore.getParticipant(channel.id, id);
    let streamId;
    obj = ChannelRTCStore;
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
  const tmp19 = tmp(11906)(channel.id);
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
  tmp(12042)(channel);
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
