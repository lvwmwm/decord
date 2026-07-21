// Module ID: 10527
// Function ID: 82221
// Name: CameraPreview
// Dependencies: []
// Exports: default

// Module 10527 (CameraPreview)
function CameraPreview(arg0) {
  let channel;
  let left;
  let nonSelfPipParticipant;
  let participantScreenIsFocused;
  let right;
  let selfParticipant;
  let tmp22;
  ({ channel, participantScreenIsFocused } = arg0);
  const arg1 = participantScreenIsFocused;
  let callback2;
  let closure_10;
  let closure_11;
  let closure_12;
  let useChannelCallStore;
  let closure_14;
  let closure_15;
  ({ nonSelfPipParticipant, selfParticipant } = arg0);
  let obj = arg1(dependencyMap[17]);
  const items = [closure_12];
  const stateFromStores = obj.useStateFromStores(items, () => lib.isReactingToThermalState());
  const importDefault = stateFromStores;
  const tmp2 = callback(importDefault(dependencyMap[18])(), 2);
  const dependencyMap = tmp3;
  const reveal = React.useContext(arg1(dependencyMap[19]).RevealContext).reveal;
  const callback = reveal;
  const tmp4 = importDefault(dependencyMap[20])();
  const React = tmp4;
  const tmp5 = callback2();
  const tmp6 = importDefault(dependencyMap[21])(channel.id);
  let obj1 = arg1(dependencyMap[22]);
  const isScreenLandscape = obj1.useIsScreenLandscape();
  const rect = importDefault(dependencyMap[23])();
  const bottom = rect.bottom;
  let closure_7 = bottom;
  const top = rect.top;
  let closure_8 = top;
  ({ left, right } = rect);
  let obj2 = arg1(dependencyMap[24]);
  obj = { channelId: channel.id };
  let isViewingActivity = obj2.useIsViewingActivity(obj);
  let obj4 = arg1(dependencyMap[17]);
  const items1 = [closure_12];
  const tmp9 = obj4.useStateFromStores(items1, () => lib.getVoiceCallOverlayLayoutStates())[closure_17.CAMERA_PREVIEW_PICTURE_IN_PICTURE];
  const OrientationType = arg1(dependencyMap[25]).OrientationType;
  const tmp10 = isScreenLandscape ? OrientationType.LANDSCAPE : OrientationType.PORTRAIT;
  callback2 = tmp10;
  let tmp11 = importDefault(dependencyMap[26])(tmp10);
  if (null == tmp11) {
    let screenOrientation;
    if (null != tmp9) {
      screenOrientation = tmp9.screenOrientation;
    }
    tmp11 = screenOrientation;
  }
  closure_10 = tmp11;
  const items2 = [tmp10, tmp11, tmp6, tmp2[1]];
  const effect = React.useEffect(() => {
    let tmp = null != tmp11;
    if (tmp) {
      tmp = tmp11 !== tmp10;
    }
    if (tmp) {
      tmp = tmp6;
    }
    if (tmp) {
      tmp3(participantScreenIsFocused(tmp3[27]).DEFAULT_PIP_POSITION);
      const tmp6 = tmp3;
    }
  }, items2);
  const tmp14 = callback(React.useState(top + closure_16), 2);
  const first = tmp14[0];
  closure_11 = first;
  closure_12 = tmp14[1];
  const tmp16 = callback(React.useState(bottom + closure_16), 2);
  const first1 = tmp16[0];
  useChannelCallStore = first1;
  closure_14 = tmp16[1];
  const items3 = [reveal, tmp5, participantScreenIsFocused, tmp4, top, bottom];
  const effect1 = React.useEffect(() => {
    let sum = top + closure_16;
    let sum1 = bottom + closure_16;
    if (participantScreenIsFocused) {
      if (reveal) {
        sum = participantScreenIsFocused(tmp3[28]).NAV_BAR_HEIGHT + top + closure_16;
      }
      if (reveal) {
        sum1 = tmp4 + bottom + closure_16;
      }
      let sum2 = sum1;
      let tmp7 = sum;
    } else {
      sum2 = tmp5 + bottom + closure_16;
      tmp7 = sum;
    }
    lib(tmp7);
    callback(sum2);
  }, items3);
  let obj5 = arg1(dependencyMap[15]);
  function te() {
    const obj = { marginTop: participantScreenIsFocused(tmp3[29]).withTiming(first, closure_25) };
    const obj2 = participantScreenIsFocused(tmp3[29]);
    obj.marginBottom = participantScreenIsFocused(tmp3[29]).withTiming(first1, closure_25);
    return obj;
  }
  obj = { withTiming: arg1(dependencyMap[29]).withTiming, marginTopState: first, TIMING_CONFIG: obj, marginBottomState: first1 };
  te.__closure = obj;
  te.__workletHash = 17411027531876;
  te.__initData = closure_27;
  const animatedStyle = obj5.useAnimatedStyle(te);
  const ref = React.useRef(null);
  [tmp22, closure_15] = callback(React.useState(null), 2);
  if (constants.HIDE_PIP === tmp22) {
    obj1 = {};
    const intl2 = arg1(dependencyMap[31]).intl;
    obj1.text = intl2.string(arg1(dependencyMap[31]).t.L3I0Jr);
    obj1.onClick = function handleHidePip() {
      const result = participantScreenIsFocused(tmp3[30]).setPipEnabledWhileFocusedOnActivityOrStream(false);
    };
    const items4 = [obj1];
    let items6 = items4;
  } else if (constants.HANDLE_THERMAL_EVENT === tmp22) {
    obj2 = {};
    const intl = arg1(dependencyMap[31]).intl;
    obj2.text = intl.string(arg1(dependencyMap[31]).t.1fRDnT);
    obj2.onClick = arg1(dependencyMap[32]).openIgnoreThermalStateAlert;
    const items5 = [obj2];
    items6 = items5;
  } else {
    items6 = [];
  }
  const obj3 = {};
  let tmp31 = null;
  if (null != tmp22) {
    obj4 = { gesture: tmp28 };
    obj5 = { style: tmp5.absoluteFill };
    obj4.children = callback3(tmp6, obj5);
    tmp31 = callback3(arg1(dependencyMap[14]).GestureDetector, obj4);
  }
  const items7 = [tmp31, ];
  const obj6 = { style: tmp5.absoluteFill, pointerEvents: "box-none" };
  const obj7 = { style: items8, pointerEvents: "box-none" };
  const items8 = [{ flex: 1, marginLeft: left + closure_15, marginRight: right + closure_15 }, animatedStyle];
  const obj9 = { channel, preferredPosition: tmp2[0], onMove: tmp2[1], isInCallScreen: true, marginTop: first, marginBottom: first1 };
  const obj8 = { flex: 1, marginLeft: left + closure_15, marginRight: right + closure_15 };
  const tmp21 = callback(React.useState(null), 2);
  const tmp29 = closure_23;
  const tmp30 = closure_22;
  const tmp38 = callback3;
  const tmp39 = tmp6;
  const tmp40 = callback3;
  const tmp41 = callback3;
  const obj10 = { ref };
  const tmp42 = importDefault(dependencyMap[27]);
  const tmp43 = callback3;
  if (isViewingActivity) {
    isViewingActivity = stateFromStores;
  }
  obj10.disabled = !isViewingActivity;
  obj10.trigger = callback3(importDefault(dependencyMap[34]), { channel, selfParticipant, pipParticipant: nonSelfPipParticipant });
  obj10.rows = items6;
  obj10.onOpen = function onOpen() {
    _undefined(stateFromStores ? closure_26.HANDLE_THERMAL_EVENT : closure_26.HIDE_PIP);
  };
  obj10.onClose = function onClose() {
    _undefined(null);
  };
  obj9.children = tmp43(importDefault(dependencyMap[33]), obj10);
  obj7.children = tmp41(tmp42, obj9);
  let str = "portrait";
  if (isScreenLandscape) {
    str = "landscape";
  }
  obj6.children = tmp40(importDefault(dependencyMap[15]).View, obj7, str);
  items7[1] = tmp38(tmp39, obj6);
  obj3.children = items7;
  return tmp29(tmp30, obj3);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ StyleSheet: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = arg1(dependencyMap[5]).useBestActiveChatInputContainerHeight;
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
const useChannelCallStore = arg1(dependencyMap[9]).useChannelCallStore;
const tmp2 = arg1(dependencyMap[2]);
({ VoiceChatDrawerState: closure_14, VOICE_CALL_OVERLAY_HORIZONTAL_MARGIN: closure_15, VOICE_CALL_OVERLAY_VERTICAL_MARGIN: closure_16, VoiceCallOverlayType: closure_17 } = arg1(dependencyMap[10]));
const ApplicationStreamStates = arg1(dependencyMap[11]).ApplicationStreamStates;
const tmp3 = arg1(dependencyMap[10]);
({ ParticipantTypes: closure_19, isStreamParticipant: closure_20 } = arg1(dependencyMap[12]));
const tmp4 = arg1(dependencyMap[12]);
({ jsx: closure_21, Fragment: closure_22, jsxs: closure_23 } = arg1(dependencyMap[13]));
let closure_24 = { code: "function CameraPreviewTsx1(){const{closeFunc,runOnJS}=this.__closure;if(closeFunc!=null){runOnJS(closeFunc)();}}" };
const obj = { duration: 250, easing: arg1(dependencyMap[16]).STANDARD_EASING };
let closure_26 = { HIDE_PIP: "HIDE_PIP", HANDLE_THERMAL_EVENT: "HANDLE_THERMAL_EVENT" };
let closure_27 = { code: "function CameraPreviewTsx2(){const{withTiming,marginTopState,TIMING_CONFIG,marginBottomState}=this.__closure;return{marginTop:withTiming(marginTopState,TIMING_CONFIG),marginBottom:withTiming(marginBottomState,TIMING_CONFIG)};}" };
const tmp5 = arg1(dependencyMap[13]);
const result = arg1(dependencyMap[40]).fileFinishedImporting("modules/video_calls/native/components/CameraPreview.tsx");

export default function CameraPreviewContainer(channel) {
  channel = channel.channel;
  const arg1 = channel;
  let flag = channel.participantScreenIsFocused;
  if (flag === undefined) {
    flag = true;
  }
  const importDefault = flag;
  let flag2 = channel.isChannelCallModalOpen;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let dependencyMap;
  let closure_3;
  let id2;
  const tmp = importDefault(dependencyMap[36])(channel);
  dependencyMap = tmp;
  let obj = arg1(dependencyMap[17]);
  const items = [closure_8, closure_11, closure_10];
  let stateFromStores = obj.useStateFromStores(items, () => {
    const id = store2.getId();
    const currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
    let tmp2 = null != currentUserActiveStream;
    if (tmp2) {
      tmp2 = currentUserActiveStream.state === constants2.ACTIVE;
    }
    const streamParticipants = store.getStreamParticipants(id.id);
    const found = streamParticipants.find((user) => user.user.id === closure_0 && tmp2);
    if (null != tmp) {
      if (null != found) {
        if (tmp.id === found.id) {
          let tmp7 = null;
        }
        return tmp7;
      }
    }
    tmp7 = found;
  });
  const tmp3 = useChannelCallStore((voiceChatDrawerState) => {
    voiceChatDrawerState = voiceChatDrawerState.voiceChatDrawerState;
    let tmp = voiceChatDrawerState === constants.OPEN;
    if (!tmp) {
      tmp = voiceChatDrawerState === constants.OPENING;
    }
    return tmp;
  });
  const items1 = [closure_8, closure_7];
  const stateFromStores1 = arg1(dependencyMap[17]).useStateFromStores(items1, () => {
    const currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
    const channel = currentEmbeddedActivity;
    let found = null;
    if (null != currentEmbeddedActivity) {
      const participants = store.getParticipants(channel.id);
      found = participants.find((id) => {
        let obj = currentEmbeddedActivity(closure_2[37]);
        obj = { applicationId: currentEmbeddedActivity.applicationId, instanceId: currentEmbeddedActivity.compositeInstanceId };
        return id.id === obj.getEmbeddedActivityParticipantId(obj);
      });
    }
    return found;
  });
  let tmp5 = null != stateFromStores1;
  if (tmp5) {
    let id;
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
  closure_3 = tmp5;
  let tmp8 = null;
  if (!tmp5) {
    tmp8 = stateFromStores1;
  }
  const obj2 = arg1(dependencyMap[17]);
  const isStreamFocused = arg1(dependencyMap[38]).useIsStreamFocused(channel.id);
  const obj3 = arg1(dependencyMap[38]);
  obj = { channelId: channel.id };
  const isViewingActivity = arg1(dependencyMap[24]).useIsViewingActivity(obj);
  const obj4 = arg1(dependencyMap[24]);
  const items2 = [closure_8, closure_11];
  const stateFromStores2 = arg1(dependencyMap[17]).useStateFromStores(items2, () => {
    const id = store2.getId();
    const participant = store.getParticipant(channel.id, id);
    let streamId;
    if (null != participant) {
      streamId = participant.streamId;
    }
    if (null == streamId) {
      if (!tmp5) {
        return null;
      }
    }
    if (flag) {
      let tmp6 = null != tmp;
      if (tmp6) {
        let id1;
        if (null != tmp) {
          id1 = tmp.id;
        }
        tmp6 = id1 !== id;
      }
      if (null == tmp) {
        if (!channel.isGuildStageVoice()) {
          return tmp13;
        }
        let tmp13 = participant;
      }
      tmp13 = null;
    } else {
      return participant;
    }
  });
  const obj6 = arg1(dependencyMap[17]);
  const items3 = [closure_11, closure_8];
  let stateFromStores3 = arg1(dependencyMap[17]).useStateFromStores(items3, () => {
    const tmp = callback(tmp);
    let type;
    if (null != tmp) {
      type = tmp.type;
    }
    if (tmp) {
      let streamId;
      if (null != tmp) {
        streamId = tmp.streamId;
      }
      if (null != streamId) {
        if (!flag) {
          let found = tmp;
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
      if (null != tmp) {
        id = tmp.user.id;
      }
      if (id !== store2.getId()) {
        const participant = store.getParticipant(channel.id, tmp.user.id);
        found = participant;
        if (tmp20) {
          found = null;
        }
        const tmp20 = null != participant && participant.localVideoDisabled;
      }
    }
    if (type === constants3.USER) {
      const streamParticipants = store.getStreamParticipants(channel.id);
      found = streamParticipants.find((user) => user.user.id === user.user.id);
    }
  });
  id2 = channel.id;
  const obj7 = arg1(dependencyMap[17]);
  const items4 = [closure_8];
  let tmp13 = function useOtherPipParticipant(channel, flag, arg2) {
    const items = [closure_8];
    const stateFromStores = channel(tmp[17]).useStateFromStores(items, () => selectedParticipant.getSelectedParticipant(arg0.id));
    const tmp2 = flag(tmp[35])(channel.id);
    let tmp3 = null;
    if (null != tmp2) {
      tmp3 = null;
      if (tmp2.user.id !== store2.getId()) {
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
  }(channel, flag, arg1(dependencyMap[17]).useStateFromStores(items4, () => {
    let tmp = null != id;
    if (tmp) {
      tmp = null != store.getSelectedParticipant(id);
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
  const obj8 = arg1(dependencyMap[17]);
  const items5 = [closure_12];
  const stateFromStores4 = arg1(dependencyMap[17]).useStateFromStores(items5, () => pipEnabledWhileFocusedOnActivityOrStream.isPipEnabledWhileFocusedOnActivityOrStream());
  if (flag2) {
    flag2 = channel.isGuildStageVoice();
  }
  importDefault(dependencyMap[39])(channel);
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
      tmp17 = callback3(CameraPreview, obj);
    }
  } else {
    tmp17 = null;
  }
};
