// Module ID: 10567
// Function ID: 82487
// Name: CameraPreview
// Dependencies: [57, 31, 27, 1347, 4143, 9349, 4149, 1194, 10568, 10240, 10241, 653, 4148, 33, 5217, 3991, 1273, 566, 10569, 10559, 10577, 10560, 4663, 1557, 10575, 8347, 8328, 10570, 5084, 4131, 10584, 1212, 10585, 10587, 10588, 10572, 10243, 10561, 10645, 10646, 2]
// Exports: default

// Module 10567 (CameraPreview)
import _slicedToArray from "_slicedToArray";
import getSystemLocale from "getSystemLocale";
import get_ActivityIndicator from "PictureInPicturePositions";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { useBestActiveChatInputContainerHeight as closure_9 } from "getChatInputContainerHeight";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import { useChannelCallStore } from "resetFocusTimer";
import BOX_MODE_ACTIONSHEET_WIDTH from "BOX_MODE_ACTIONSHEET_WIDTH";
import { ApplicationStreamStates } from "ME";
import ParticipantTypes from "ParticipantTypes";
import jsxProd from "PopoutMenuRow";

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_5;
let closure_6;
const require = arg1;
function CameraPreview(arg0) {
  let c15;
  let channel;
  let left;
  let nonSelfPipParticipant;
  let participantScreenIsFocused;
  let right;
  let selfParticipant;
  let tmp22;
  ({ channel, participantScreenIsFocused } = arg0);
  let callback;
  let c10;
  let first;
  let closure_12;
  let first1;
  let closure_14;
  c15 = undefined;
  ({ nonSelfPipParticipant, selfParticipant } = arg0);
  let obj = participantScreenIsFocused(566);
  let items = [closure_12];
  const stateFromStores = obj.useStateFromStores(items, () => lib.isReactingToThermalState());
  const tmp2 = reveal(stateFromStores(10569)(), 2);
  const dependencyMap = tmp3;
  reveal = React.useContext(participantScreenIsFocused(10559).RevealContext).reveal;
  const tmp4 = stateFromStores(10577)();
  React = tmp4;
  const tmp5 = callback();
  let closure_5 = tmp5;
  const tmp6 = stateFromStores(10560)(channel.id);
  let closure_6 = tmp6;
  let obj1 = participantScreenIsFocused(4663);
  const isScreenLandscape = obj1.useIsScreenLandscape();
  const rect = stateFromStores(1557)();
  const bottom = rect.bottom;
  const top = rect.top;
  ({ left, right } = rect);
  let obj2 = participantScreenIsFocused(10575);
  obj = { channelId: channel.id };
  let isViewingActivity = obj2.useIsViewingActivity(obj);
  let obj4 = participantScreenIsFocused(566);
  const items1 = [closure_12];
  const tmp9 = obj4.useStateFromStores(items1, () => lib.getVoiceCallOverlayLayoutStates())[constants.CAMERA_PREVIEW_PICTURE_IN_PICTURE];
  const OrientationType = participantScreenIsFocused(8347).OrientationType;
  const tmp10 = isScreenLandscape ? OrientationType.LANDSCAPE : OrientationType.PORTRAIT;
  callback = tmp10;
  let tmp11 = stateFromStores(8328)(tmp10);
  if (null == tmp11) {
    let screenOrientation;
    if (null != tmp9) {
      screenOrientation = tmp9.screenOrientation;
    }
    tmp11 = screenOrientation;
  }
  c10 = tmp11;
  const items2 = [tmp10, tmp11, tmp6, tmp2[1]];
  const effect = React.useEffect(() => {
    let tmp = null != c10;
    if (tmp) {
      tmp = c10 !== c9;
    }
    if (tmp) {
      tmp = closure_6;
    }
    if (tmp) {
      tmp3(participantScreenIsFocused(tmp3[27]).DEFAULT_PIP_POSITION);
    }
  }, items2);
  const tmp14 = reveal(React.useState(top + closure_16), 2);
  first = tmp14[0];
  closure_12 = tmp14[1];
  const tmp16 = reveal(React.useState(bottom + closure_16), 2);
  first1 = tmp16[0];
  closure_14 = tmp16[1];
  const items3 = [reveal, tmp5, participantScreenIsFocused, tmp4, top, bottom];
  const effect1 = React.useEffect(() => {
    let sum = top + outer1_16;
    let sum1 = bottom + outer1_16;
    if (participantScreenIsFocused) {
      if (reveal) {
        sum = participantScreenIsFocused(tmp3[28]).NAV_BAR_HEIGHT + top + outer1_16;
      }
      if (reveal) {
        sum1 = getSystemLocale + bottom + outer1_16;
      }
      let sum2 = sum1;
      let tmp7 = sum;
    } else {
      sum2 = closure_5 + bottom + outer1_16;
      tmp7 = sum;
    }
    lib(tmp7);
    callback(sum2);
  }, items3);
  let obj5 = participantScreenIsFocused(3991);
  function te() {
    const obj = { marginTop: participantScreenIsFocused(tmp3[29]).withTiming(first, outer1_25) };
    const obj2 = participantScreenIsFocused(tmp3[29]);
    obj.marginBottom = participantScreenIsFocused(tmp3[29]).withTiming(first1, outer1_25);
    return obj;
  }
  obj = { withTiming: participantScreenIsFocused(4131).withTiming, marginTopState: first, TIMING_CONFIG: obj, marginBottomState: first1 };
  te.__closure = obj;
  te.__workletHash = 17411027531876;
  te.__initData = closure_27;
  const animatedStyle = obj5.useAnimatedStyle(te);
  const ref = React.useRef(null);
  [tmp22, c15] = reveal(React.useState(null), 2);
  if (constants2.HIDE_PIP === tmp22) {
    obj1 = {};
    const intl2 = participantScreenIsFocused(1212).intl;
    obj1.text = intl2.string(participantScreenIsFocused(1212).t.L3I0Jr);
    obj1.onClick = function handleHidePip() {
      const result = participantScreenIsFocused(tmp3[30]).setPipEnabledWhileFocusedOnActivityOrStream(false);
    };
    const items4 = [obj1];
    let items6 = items4;
  } else if (constants2.HANDLE_THERMAL_EVENT === tmp22) {
    obj2 = {};
    const intl = participantScreenIsFocused(1212).intl;
    obj2.text = intl.string(participantScreenIsFocused(1212).t["1fRDnT"]);
    obj2.onClick = participantScreenIsFocused(10585).openIgnoreThermalStateAlert;
    const items5 = [obj2];
    items6 = items5;
  } else {
    items6 = [];
  }
  const obj3 = {};
  let tmp31 = null;
  if (null != tmp22) {
    obj4 = { gesture: tmp28 };
    obj5 = { style: closure_5.absoluteFill };
    obj4.children = callback2(closure_6, obj5);
    tmp31 = callback2(participantScreenIsFocused(5217).GestureDetector, obj4);
  }
  const items7 = [tmp31, ];
  const obj6 = { style: closure_5.absoluteFill, pointerEvents: "box-none" };
  const obj7 = { style: items8, pointerEvents: "box-none" };
  items8 = [{ flex: 1, marginLeft: left + c15, marginRight: right + c15 }, animatedStyle];
  const obj9 = { channel, preferredPosition: tmp2[0], onMove: tmp2[1], isInCallScreen: true, marginTop: first, marginBottom: first1 };
  const obj8 = { flex: 1, marginLeft: left + c15, marginRight: right + c15 };
  const tmp21 = reveal(React.useState(null), 2);
  const tmp29 = closure_23;
  const tmp30 = closure_22;
  const tmp38 = callback2;
  const tmp39 = closure_6;
  const tmp40 = callback2;
  const tmp41 = callback2;
  const obj10 = { ref };
  const tmp42 = stateFromStores(10570);
  const tmp43 = callback2;
  if (isViewingActivity) {
    isViewingActivity = stateFromStores;
  }
  obj10.disabled = !isViewingActivity;
  obj10.trigger = callback2(stateFromStores(10588), { channel, selfParticipant, pipParticipant: nonSelfPipParticipant });
  obj10.rows = items6;
  obj10.onOpen = function onOpen() {
    _undefined(stateFromStores ? outer1_26.HANDLE_THERMAL_EVENT : outer1_26.HIDE_PIP);
  };
  obj10.onClose = function onClose() {
    _undefined(null);
  };
  obj9.children = tmp43(stateFromStores(10587), obj10);
  obj7.children = tmp41(tmp42, obj9);
  let str = "portrait";
  if (isScreenLandscape) {
    str = "landscape";
  }
  obj6.children = tmp40(stateFromStores(3991).View, obj7, str);
  items7[1] = tmp38(tmp39, obj6);
  obj3.children = items7;
  return tmp29(tmp30, obj3);
}
({ StyleSheet: closure_5, View: closure_6 } = get_ActivityIndicator);
({ VoiceChatDrawerState: closure_14, VOICE_CALL_OVERLAY_HORIZONTAL_MARGIN: closure_15, VOICE_CALL_OVERLAY_VERTICAL_MARGIN: closure_16, VoiceCallOverlayType: closure_17 } = BOX_MODE_ACTIONSHEET_WIDTH);
({ ParticipantTypes: closure_19, isStreamParticipant: closure_20 } = ParticipantTypes);
({ jsx: closure_21, Fragment: closure_22, jsxs: closure_23 } = jsxProd);
let closure_24 = { code: "function CameraPreviewTsx1(){const{closeFunc,runOnJS}=this.__closure;if(closeFunc!=null){runOnJS(closeFunc)();}}" };
let obj = { duration: 250, easing: require("Button").STANDARD_EASING };
let closure_26 = { HIDE_PIP: "HIDE_PIP", HANDLE_THERMAL_EVENT: "HANDLE_THERMAL_EVENT" };
let closure_27 = { code: "function CameraPreviewTsx2(){const{withTiming,marginTopState,TIMING_CONFIG,marginBottomState}=this.__closure;return{marginTop:withTiming(marginTopState,TIMING_CONFIG),marginBottom:withTiming(marginBottomState,TIMING_CONFIG)};}" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/video_calls/native/components/CameraPreview.tsx");

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
  let dependencyMap;
  let c3;
  let id;
  let tmp = flag(10243)(channel);
  dependencyMap = tmp;
  let obj = channel(566);
  let items = [_isNativeReflectConstruct, closure_11, closure_10];
  let stateFromStores = obj.useStateFromStores(items, () => {
    const id = outer1_11.getId();
    const currentUserActiveStream = outer1_10.getCurrentUserActiveStream();
    let tmp2 = null != currentUserActiveStream;
    if (tmp2) {
      tmp2 = currentUserActiveStream.state === outer1_18.ACTIVE;
    }
    const streamParticipants = outer1_8.getStreamParticipants(id.id);
    const found = streamParticipants.find((user) => user.user.id === closure_0 && closure_1);
    if (null != _undefined) {
      if (null != found) {
        if (_undefined.id === found.id) {
          let tmp7 = null;
        }
        return tmp7;
      }
    }
    tmp7 = found;
  });
  let tmp3 = useChannelCallStore((voiceChatDrawerState) => {
    voiceChatDrawerState = voiceChatDrawerState.voiceChatDrawerState;
    let tmp = voiceChatDrawerState === outer1_14.OPEN;
    if (!tmp) {
      tmp = voiceChatDrawerState === outer1_14.OPENING;
    }
    return tmp;
  });
  const items1 = [_isNativeReflectConstruct, _createForOfIteratorHelperLoose];
  const stateFromStores1 = channel(566).useStateFromStores(items1, () => {
    const currentEmbeddedActivity = outer1_7.getCurrentEmbeddedActivity();
    let found = null;
    if (null != currentEmbeddedActivity) {
      const participants = outer1_8.getParticipants(currentEmbeddedActivity.id);
      found = participants.find((id) => {
        let obj = channel(table[37]);
        obj = { applicationId: currentEmbeddedActivity.applicationId, instanceId: currentEmbeddedActivity.compositeInstanceId };
        return id.id === obj.getEmbeddedActivityParticipantId(obj);
      });
    }
    return found;
  });
  let tmp5 = null != stateFromStores1;
  if (tmp5) {
    id = undefined;
    if (null != tmp) {
      id = tmp.id;
    }
    let id1;
    if (null != stateFromStores1) {
      id1 = stateFromStores1.id;
    }
    tmp5 = id === id1;
  }
  if (tmp5) {
    tmp5 = !tmp3;
  }
  c3 = tmp5;
  let tmp8 = null;
  if (!tmp5) {
    tmp8 = stateFromStores1;
  }
  const obj2 = channel(566);
  const isStreamFocused = channel(10645).useIsStreamFocused(channel.id);
  const obj3 = channel(10645);
  obj = { channelId: channel.id };
  const isViewingActivity = channel(10575).useIsViewingActivity(obj);
  const obj4 = channel(10575);
  const items2 = [_isNativeReflectConstruct, closure_11];
  const stateFromStores2 = channel(566).useStateFromStores(items2, () => {
    const id = outer1_11.getId();
    const participant = outer1_8.getParticipant(channel.id, id);
    let streamId;
    if (null != participant) {
      streamId = participant.streamId;
    }
    if (null == streamId) {
      if (!c3) {
        return null;
      }
    }
    if (flag) {
      let tmp6 = null != _undefined;
      if (tmp6) {
        let id1;
        if (null != _undefined) {
          id1 = _undefined.id;
        }
        tmp6 = id1 !== id;
      }
      if (null == _undefined) {
        if (!channel.isGuildStageVoice()) {
          return tmp13;
        }
        tmp13 = participant;
      }
      tmp13 = null;
    } else {
      return participant;
    }
  });
  const obj6 = channel(566);
  const items3 = [closure_11, _isNativeReflectConstruct];
  let stateFromStores3 = channel(566).useStateFromStores(items3, () => {
    const tmp = outer1_20(_undefined);
    let type;
    if (null != _undefined) {
      type = _undefined.type;
    }
    if (tmp) {
      let streamId;
      if (null != _undefined) {
        streamId = _undefined.streamId;
      }
      if (null != streamId) {
        if (!flag) {
          let found = _undefined;
        }
        let streamId1;
        if (null != found) {
          streamId1 = found.streamId;
        }
        let tmp22 = null;
        if (null != streamId1) {
          tmp22 = found;
        }
        return tmp22;
      }
    }
    if (tmp) {
      let id;
      if (null != _undefined) {
        id = _undefined.user.id;
      }
      if (id !== outer1_11.getId()) {
        const participant = outer1_8.getParticipant(channel.id, _undefined.user.id);
        found = participant;
        if (tmp20) {
          found = null;
        }
        tmp20 = null != participant && participant.localVideoDisabled;
      }
    }
    if (type === outer1_19.USER) {
      const streamParticipants = outer1_8.getStreamParticipants(channel.id);
      found = streamParticipants.find((user) => user.user.id === outer1_2.user.id);
    }
  });
  id = channel.id;
  const obj7 = channel(566);
  const items4 = [_isNativeReflectConstruct];
  let tmp13 = (function useOtherPipParticipant(channel, flag, arg2) {
    let closure_0 = channel;
    const items = [outer1_8];
    const stateFromStores = channel(_undefined[17]).useStateFromStores(items, () => outer2_8.getSelectedParticipant(id.id));
    const tmp2 = flag(_undefined[35])(channel.id);
    let tmp3 = null;
    if (null != tmp2) {
      tmp3 = null;
      if (tmp2.user.id !== outer1_11.getId()) {
        if (!flag) {
          let id;
          if (null != stateFromStores) {
            id = stateFromStores.id;
          }
          tmp3 = null;
          if (tmp2.id !== id) {
            tmp3 = tmp2;
          }
        } else {
          tmp3 = null;
        }
      }
    }
    return tmp3;
  })(channel, flag, channel(566).useStateFromStores(items4, () => {
    let tmp = null != id;
    if (tmp) {
      tmp = null != outer1_8.getSelectedParticipant(id);
    }
    return tmp;
  }));
  if (null != tmp8) {
    stateFromStores = tmp8;
  }
  if (null != stateFromStores) {
    stateFromStores3 = stateFromStores;
  }
  if (null != stateFromStores3) {
    tmp13 = stateFromStores3;
  }
  let tmp14 = null;
  if (stateFromStores2 !== tmp13) {
    tmp14 = stateFromStores2;
  }
  const obj8 = channel(566);
  const items5 = [closure_12];
  const stateFromStores4 = channel(566).useStateFromStores(items5, () => outer1_12.isPipEnabledWhileFocusedOnActivityOrStream());
  if (flag2) {
    flag2 = channel.isGuildStageVoice();
  }
  flag(10646)(channel);
  if (tmp5) {
    if (!stateFromStores4) {
      let tmp17 = null;
    }
    return tmp17;
  }
  if (null != tmp14) {
    tmp17 = null;
    if (!flag2) {
      obj = { channel, participantScreenIsFocused: flag, nonSelfPipParticipant: tmp13, selfParticipant: tmp14 };
      tmp17 = callback2(CameraPreview, obj);
    }
  } else {
    tmp17 = null;
  }
};
