// Module ID: 10673
// Function ID: 83179
// Name: VideoButton
// Dependencies: []
// Exports: default

// Module 10673 (VideoButton)
class VideoButton {
  constructor(arg0) {
    channel = global.channel;
    arg1 = channel;
    tmp = importDefault(dependencyMap[13])(channel);
    importDefault = tmp;
    obj = arg1(dependencyMap[14]);
    items = [];
    items[0] = closure_12;
    stateFromStores = obj.useStateFromStores(items, () => reactingToThermalState.isReactingToThermalState());
    importAll = stateFromStores;
    obj2 = arg1(dependencyMap[14]);
    items1 = [];
    items1[0] = closure_11;
    stateFromStores1 = obj2.useStateFromStores(items1, () => videoEnabled.isVideoEnabled());
    dependencyMap = stateFromStores1;
    obj3 = arg1(dependencyMap[16]);
    stageHasMedia = obj3.useStageHasMedia(channel.id);
    closure_4 = closure_4.useRef(null);
    items2 = [];
    items2[0] = stateFromStores1;
    memo = closure_4.useMemo(() => {
      const obj = { ref: closure_4 };
      let str = "unmute";
      if (stateFromStores1) {
        str = "mute";
      }
      obj.animation = str;
      return closure_14(channel(stateFromStores1[17]).CameraLottie, obj);
    }, items2);
    callback = closure_4.useCallback((channel) => {
      channel(stateFromStores1[18]).handleToggleVideo(channel);
      let tmp2 = null == ref;
      if (!tmp2) {
        const current = ref.current;
        tmp2 = null == current;
        const obj2 = current;
      }
      if (!tmp2) {
        obj2.play();
      }
    }, []);
    View = callback;
    items3 = [, , , ];
    items3[0] = channel;
    items3[1] = tmp;
    items3[2] = stateFromStores;
    items3[3] = callback;
    callback1 = closure_4.useCallback(() => {
      if (tmp) {
        if (stateFromStores) {
          const result = channel(stateFromStores1[19]).openIgnoreThermalStateAlert(() => callback(closure_0));
          const obj2 = channel(stateFromStores1[19]);
        } else {
          callback(channel);
        }
      } else {
        const result1 = channel(stateFromStores1[18]).showCameraDisabledAlert();
        const obj = channel(stateFromStores1[18]);
        const tmp = channel;
      }
    }, items3);
    tmp8 = jsx;
    obj = {};
    tmp9 = !tmp;
    if (!tmp9) {
      tmp10 = !stageHasMedia && importDefault(dependencyMap[15])(channel).reachedLimit;
      tmp9 = tmp10;
    }
    obj.appearsDisabled = tmp9;
    obj.isActive = stateFromStores1;
    obj.onPress = callback1;
    intl = arg1(dependencyMap[21]).intl;
    obj.accessibilityLabel = intl.string(arg1(dependencyMap[21]).t.HK4JIu);
    obj.source = importDefault(dependencyMap[22]);
    obj.isSmallSize = global.isSmallSize;
    obj.lottieComponent = memo;
    return tmp8(importAll(dependencyMap[20]).ToggledActionButton, obj);
  }
}
class ScreenshareButton {
  constructor(arg0) {
    ({ channel, isSmallSize } = global);
    tmp = importDefault(dependencyMap[23])(channel);
    ({ onPress, isFeatureEnabled, isActive, imgSource } = tmp);
    if (!isFeatureEnabled) {
      onPress = () => {

      };
    }
    obj = { appearsDisabled: !isFeatureEnabled, source: imgSource, isActive };
    intl = arg1(dependencyMap[21]).intl;
    obj.accessibilityLabel = intl.string(arg1(dependencyMap[21]).t.XF1nZz);
    obj.onPress = onPress;
    obj.isSmallSize = isSmallSize;
    return jsx(importAll(dependencyMap[20]).ToggledActionButton, obj);
  }
}
class AudioRouteButton {
  constructor(arg0) {
    channel = global.channel;
    arg1 = channel;
    obj = arg1(dependencyMap[18]);
    maskedSpeakerStates = obj.useMaskedSpeakerStates();
    importDefault = maskedSpeakerStates.toggleAudio;
    ({ isAudioRouteEnabled, routeSource } = maskedSpeakerStates);
    obj2 = arg1(dependencyMap[24]);
    closure_2 = obj2.useIsConnectedToVoiceChannel(channel);
    obj = {
      isActive: isAudioRouteEnabled,
      source: routeSource,
      onPress() {
            toggleAudio(channel.id, closure_2);
          }
    };
    intl = arg1(dependencyMap[21]).intl;
    obj.accessibilityLabel = intl.string(arg1(dependencyMap[21]).t.A/Ly/2);
    obj.isSmallSize = global.isSmallSize;
    return jsx(closure_2(dependencyMap[20]).ToggledActionButton, obj);
  }
}
class DisconnectCallButton {
  constructor(arg0) {
    arg1 = global.channel;
    obj = {};
    obj.source = importDefault(dependencyMap[25]);
    intl = arg1(dependencyMap[21]).intl;
    obj.accessibilityLabel = intl.string(arg1(dependencyMap[21]).t.6vrfgt);
    obj.isSmallSize = global.isSmallSize;
    obj.onPress = function onPress() {
      channel(closure_3[18]).handleDisconnect(channel);
    };
    return jsx(importAll(dependencyMap[20]).PrimaryActionButton, obj);
  }
}
class DisconnectStreamButton {
  constructor(arg0) {
    arg1 = global.channel;
    obj = arg1(dependencyMap[14]);
    items = [, ];
    items[0] = View;
    items[1] = closure_10;
    f83194 = obj.useStateFromStores(items, () => {
      const selectedParticipant = selectedParticipant.getSelectedParticipant(channel.id);
      if (null != selectedParticipant) {
        if (selectedParticipant.type !== constants.ACTIVITY) {
          let tmp4 = null;
        }
        return tmp4;
      }
      let id;
      if (null != selectedParticipant) {
        id = selectedParticipant.id;
      }
      tmp4 = id;
    });
    obj2 = arg1(dependencyMap[14]);
    items1 = [];
    items1[0] = closure_9;
    stateFromStores = obj2.useStateFromStores(items1, () => {
      let activeStreamForStreamKey = null;
      if (null != closure_1) {
        activeStreamForStreamKey = activeStreamForStreamKey.getActiveStreamForStreamKey(closure_1);
      }
      return activeStreamForStreamKey;
    });
    importAll = stateFromStores;
    tmp2 = null;
    if (null != stateFromStores) {
      tmp3 = jsx;
      tmp4 = importAll;
      tmp5 = dependencyMap;
      num = 20;
      obj = {};
      tmp6 = f83194;
      num2 = 26;
      obj.source = f83194(dependencyMap[26]);
      tmp7 = arg1;
      num3 = 21;
      intl = arg1(dependencyMap[21]).intl;
      obj.accessibilityLabel = intl.string(arg1(dependencyMap[21]).t.q3O3J8);
      obj.isSmallSize = global.isSmallSize;
      obj.onPress = function onPress() {
        const participant = callback(closure_3[27]).selectParticipant(channel.id, null);
        const obj = callback(closure_3[27]);
        const obj2 = channel(closure_3[28]);
        obj2.stopStream(channel(closure_3[29]).encodeStreamKey(stateFromStores));
      };
      tmp2 = jsx(importAll(dependencyMap[20]).PrimaryActionButton, obj);
    }
    return tmp2;
  }
}
function LeaveActivityButton(isSmallSize) {
  const obj = {};
  const intl = arg1(dependencyMap[21]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[21]).t.k0Aph0);
  obj.onPress = function onPress() {
    const currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
    let obj = callback(closure_3[30]);
    obj = {};
    let _location;
    if (null != currentEmbeddedActivity) {
      _location = currentEmbeddedActivity.location;
    }
    obj.location = _location;
    let applicationId;
    if (null != currentEmbeddedActivity) {
      applicationId = currentEmbeddedActivity.applicationId;
    }
    obj.applicationId = applicationId;
    obj.leaveActivity(obj);
  };
  obj.source = importDefault(dependencyMap[31]);
  obj.isSmallSize = isSmallSize.isSmallSize;
  return callback(importAll(dependencyMap[20]).PrimaryActionButton, obj);
}
function useActionBarSecondButtons(channel) {
  channel = channel.channel;
  let obj = arg1(dependencyMap[24]);
  let isConnectedToVoiceChannel = obj.useIsConnectedToVoiceChannel(channel);
  const tmp2 = importDefault(dependencyMap[32])();
  obj = {};
  let tmp3 = isConnectedToVoiceChannel;
  if (isConnectedToVoiceChannel) {
    tmp3 = !tmp2;
  }
  obj[obj2.AUDIO_ROUTE] = tmp3;
  obj[obj2.NONE] = true;
  let isActive = isConnectedToVoiceChannel;
  if (isConnectedToVoiceChannel) {
    isActive = !tmp2;
  }
  if (isActive) {
    isActive = importDefault(dependencyMap[23])(channel).isActive;
  }
  obj[obj2.SCREEN_SHARE_END] = isActive;
  if (isConnectedToVoiceChannel) {
    isConnectedToVoiceChannel = !tmp2;
  }
  obj[obj2.SCREEN_SHARE_START] = isConnectedToVoiceChannel;
  return obj;
}
function useActionBarSecondButton(channel) {
  channel = channel.channel;
  const tmp = useActionBarSecondButtons({ channel });
  if (tmp[closure_18.SCREEN_SHARE_END]) {
    let AUDIO_ROUTE = tmp3.SCREEN_SHARE_END;
  } else {
    if (!tmp[tmp3.AUDIO_ROUTE]) {
      AUDIO_ROUTE = tmp[closure_18.SCREEN_SHARE_START] ? tmp6.SCREEN_SHARE_START : tmp6.NONE;
    }
    AUDIO_ROUTE = obj2.AUDIO_ROUTE;
  }
  return AUDIO_ROUTE;
}
function useActionBarPrimaryButtons(channel) {
  channel = channel.channel;
  const arg1 = channel;
  let obj = arg1(dependencyMap[24]);
  const isConnectedToVoiceChannel = obj.useIsConnectedToVoiceChannel(channel);
  const items = [closure_7, closure_10];
  let closure_1 = arg1(dependencyMap[14]).useStateFromStores(items, () => {
    const selectedParticipant = selectedParticipant.getSelectedParticipant(channel.id);
    if (null != selectedParticipant) {
      if (selectedParticipant.type !== constants.ACTIVITY) {
        let tmp4 = null;
      }
      return tmp4;
    }
    let id;
    if (null != selectedParticipant) {
      id = selectedParticipant.id;
    }
    tmp4 = id;
  });
  const obj3 = arg1(dependencyMap[14]);
  const items1 = [closure_9];
  const stateFromStores = obj3.useStateFromStores(items1, () => {
    let activeStreamForStreamKey = null;
    if (null != closure_1) {
      activeStreamForStreamKey = activeStreamForStreamKey.getActiveStreamForStreamKey(closure_1);
    }
    return activeStreamForStreamKey;
  });
  const obj2 = arg1(dependencyMap[14]);
  const items2 = [closure_6];
  const stateFromStores1 = arg1(dependencyMap[14]).useStateFromStores(items2, () => null != currentEmbeddedActivity.getCurrentEmbeddedActivity());
  const obj4 = arg1(dependencyMap[14]);
  const items3 = [closure_8];
  const stateFromStoresObject = arg1(dependencyMap[14]).useStateFromStoresObject(items3, () => ({ awaitingRemote: null != store.getAwaitingRemoteSessionInfo(), remoteSessionId: store.getRemoteSessionId() }));
  let awaitingRemote = stateFromStoresObject.awaitingRemote;
  obj = { [closure_19.END_ACTIVITY]: stateFromStores1, [closure_19.END_CALL]: isConnectedToVoiceChannel };
  if (!awaitingRemote) {
    awaitingRemote = null != tmp5;
  }
  obj[obj3.END_REMOTE] = awaitingRemote;
  obj[obj3.END_STREAM] = null != stateFromStores;
  return obj;
}
function useActionBarPrimaryButton(channel) {
  const tmp = useActionBarPrimaryButtons({ channel: channel.channel });
  if (tmp[closure_19.END_STREAM]) {
    let END_REMOTE = tmp2.END_STREAM;
  } else if (tmp[tmp2.END_REMOTE]) {
    END_REMOTE = tmp3.END_REMOTE;
  } else {
    END_REMOTE = tmp[tmp3.END_ACTIVITY] ? tmp4.END_ACTIVITY : tmp4.END_CALL;
  }
  return END_REMOTE;
}
let closure_4 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
const ParticipantTypes = arg1(dependencyMap[9]).ParticipantTypes;
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = arg1(dependencyMap[10]));
let obj = arg1(dependencyMap[11]);
obj = {};
obj = { connectionsList: true, getItemCount: "/assets/images/native/icons/voice_calls", _voiceQualityPeriodicStatsSequenceId: 24, third_party_skus: 24, height: arg1(dependencyMap[12]).CALL_ACTION_BAR_HEIGHT };
obj.container = obj;
const tmp2 = arg1(dependencyMap[10]);
obj.containerForFiveButtonLayout = { height: arg1(dependencyMap[12]).FIVE_BUTTON_LAYOUT_ACTION_BAR_HEIGHT, paddingTop: arg1(dependencyMap[12]).FIVE_BUTTON_CONTAINER_PADDING_TOP, paddingBottom: arg1(dependencyMap[12]).FIVE_BUTTON_CONTAINER_PADDING_BOTTOM };
let closure_17 = obj.createStyles(obj);
const obj2 = { NONE: 0, [0]: "NONE", SCREEN_SHARE_START: 1, [1]: "SCREEN_SHARE_START", SCREEN_SHARE_END: 2, [2]: "SCREEN_SHARE_END", AUDIO_ROUTE: 3, [3]: "AUDIO_ROUTE" };
const obj3 = { END_STREAM: 0, [0]: "END_STREAM", END_ACTIVITY: 1, [1]: "END_ACTIVITY", END_CALL: 2, [2]: "END_CALL", END_REMOTE: 3, [3]: "END_REMOTE" };
const obj1 = { height: arg1(dependencyMap[12]).FIVE_BUTTON_LAYOUT_ACTION_BAR_HEIGHT, paddingTop: arg1(dependencyMap[12]).FIVE_BUTTON_CONTAINER_PADDING_TOP, paddingBottom: arg1(dependencyMap[12]).FIVE_BUTTON_CONTAINER_PADDING_BOTTOM };
const result = arg1(dependencyMap[40]).fileFinishedImporting("modules/video_calls/native/components/ChannelCallActionBar.tsx");

export default function ChannelCallActionBar(arg0) {
  let channel;
  let shouldShowConnectingScreen;
  ({ channel, shouldShowConnectingScreen } = arg0);
  if (shouldShowConnectingScreen === undefined) {
    shouldShowConnectingScreen = false;
  }
  const tmp = callback2();
  const tmp3 = useActionBarSecondButton({ channel });
  const tmp4 = useActionBarPrimaryButton({ channel });
  const tmp2 = importDefault(dependencyMap[32])();
  let obj = arg1(dependencyMap[36]);
  const isFiveButtonLayout = obj.useIsFiveButtonLayout(channel.id);
  obj = { value: importDefault(dependencyMap[34])(importDefault(dependencyMap[35]).CHANNEL_CALL_ACTION_BAR).analyticsLocations };
  obj = { pointerEvents: "box-none", style: isFiveButtonLayout ? tmp.containerForFiveButtonLayout : tmp.container };
  if (shouldShowConnectingScreen) {
    const obj1 = { channel };
    let tmp10Result = callback(arg1(dependencyMap[37]).CallConnectingActionBar, obj1);
  } else {
    const obj2 = {};
    let tmp12 = null;
    if (!tmp2) {
      const obj3 = { channel, isSmallSize: isFiveButtonLayout };
      tmp12 = callback(VideoButton, obj3);
    }
    const items = [tmp12, , , ];
    if (obj2.AUDIO_ROUTE === tmp3) {
      const obj4 = { isSmallSize: isFiveButtonLayout, channel };
      let tmp19 = callback(AudioRouteButton, obj4);
    } else {
      if (obj2.SCREEN_SHARE_START !== tmp3) {
        if (obj2.SCREEN_SHARE_END !== tmp3) {
          const NONE = obj2.NONE;
          tmp19 = null;
        }
      }
      const obj5 = { channel, isSmallSize: isFiveButtonLayout };
      tmp19 = callback(ScreenshareButton, obj5);
    }
    items[1] = tmp19;
    const obj6 = { channel, isSmallSize: isFiveButtonLayout };
    items[2] = callback(arg1(dependencyMap[38]).ChannelCallMicButton, obj6);
    if (obj3.END_REMOTE === tmp4) {
      const obj7 = { channel, isSmallSize: isFiveButtonLayout };
      let tmp30 = callback(arg1(dependencyMap[39]).DisconnectRemoteButton, obj7);
    } else if (obj3.END_STREAM === tmp4) {
      const obj8 = { channel, isSmallSize: isFiveButtonLayout };
      tmp30 = callback(DisconnectStreamButton, obj8);
    } else if (obj3.END_ACTIVITY === tmp4) {
      const obj9 = { isSmallSize: isFiveButtonLayout };
      tmp30 = callback(LeaveActivityButton, obj9);
    } else {
      tmp30 = null;
      if (obj3.END_CALL === tmp4) {
        const obj10 = { channel, isSmallSize: isFiveButtonLayout };
        tmp30 = callback(DisconnectCallButton, obj10);
      }
    }
    items[3] = tmp30;
    obj2.children = items;
    tmp10Result = closure_16(closure_15, obj2);
    const tmp10 = closure_16;
    const tmp11 = closure_15;
  }
  obj.children = tmp10Result;
  obj.children = callback(View, obj);
  return callback(arg1(dependencyMap[34]).AnalyticsLocationProvider, obj);
};
export { VideoButton };
export { ScreenshareButton };
export { AudioRouteButton };
export { DisconnectCallButton };
export { DisconnectStreamButton };
export const ActionBarSecondButton = obj2;
export { useActionBarSecondButtons };
export { useActionBarSecondButton };
export const ActionBarPrimaryButton = obj3;
export { useActionBarPrimaryButtons };
export { useActionBarPrimaryButton };
