// Module ID: 10684
// Function ID: 83253
// Name: VideoButton
// Dependencies: [31, 27, 1347, 4143, 4144, 4149, 1194, 4177, 10539, 4148, 33, 4130, 10548, 10685, 566, 8842, 4950, 10686, 8836, 10556, 10549, 1212, 10688, 10689, 10214, 10705, 10706, 4323, 4309, 4194, 10525, 10707, 5652, 9056, 5464, 5484, 10552, 10708, 10732, 10742, 2]
// Exports: default

// Module 10684 (VideoButton)
import registerAsset from "registerAsset";
import { View } from "module_4323";
import closure_6 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import { ParticipantTypes } from "ParticipantTypes";
import jsxProd from "isVideoMode";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_14;
let closure_15;
let closure_16;
const require = arg1;
class VideoButton {
  constructor(arg0) {
    channel = global.channel;
    tmp = require("useHasVideoPermission")(channel);
    closure_1 = tmp;
    obj = require("initialize");
    items = [];
    items[0] = c12;
    stateFromStores = obj.useStateFromStores(items, () => outer1_12.isReactingToThermalState());
    closure_2 = stateFromStores;
    obj2 = require("initialize");
    items1 = [];
    items1[0] = c11;
    stateFromStores1 = obj2.useStateFromStores(items1, () => outer1_11.isVideoEnabled());
    useStateFromStores = stateFromStores1;
    obj3 = require("useStageHasStream");
    stageHasMedia = obj3.useStageHasMedia(channel.id);
    c4 = c4.useRef(null);
    items2 = [];
    items2[0] = stateFromStores1;
    memo = c4.useMemo(() => {
      const obj = { ref: registerAsset };
      let str = "unmute";
      if (stateFromStores1) {
        str = "mute";
      }
      obj.animation = str;
      return outer1_14(channel(stateFromStores1[17]).CameraLottie, obj);
    }, items2);
    callback = c4.useCallback((channel) => {
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
    callback1 = c4.useCallback(() => {
      if (closure_1) {
        if (stateFromStores) {
          const result = channel(stateFromStores1[19]).openIgnoreThermalStateAlert(() => outer1_5(outer1_0));
          const obj2 = channel(stateFromStores1[19]);
        } else {
          callback(channel);
        }
      } else {
        const result1 = channel(stateFromStores1[18]).showCameraDisabledAlert();
        const obj = channel(stateFromStores1[18]);
      }
    }, items3);
    tmp8 = jsx;
    obj = {};
    tmp9 = !tmp;
    if (!tmp9) {
      tmp10 = !stageHasMedia && require("useChannelVideoLimit")(channel).reachedLimit;
      tmp9 = tmp10;
    }
    obj.appearsDisabled = tmp9;
    obj.isActive = stateFromStores1;
    obj.onPress = callback1;
    intl = require("getSystemLocale").intl;
    obj.accessibilityLabel = intl.string(require("getSystemLocale").t.HK4JIu);
    obj.source = require("registerAsset");
    obj.isSmallSize = global.isSmallSize;
    obj.lottieComponent = memo;
    return tmp8(require("ActionButton").ToggledActionButton, obj);
  }
}
class ScreenshareButton {
  constructor(arg0) {
    ({ channel, isSmallSize } = global);
    tmp = require("handleCloseScreenshare")(channel);
    ({ onPress, isFeatureEnabled, isActive, imgSource } = tmp);
    if (!isFeatureEnabled) {
      onPress = () => {

      };
    }
    obj = { appearsDisabled: !isFeatureEnabled, source: imgSource, isActive };
    intl = require("getSystemLocale").intl;
    obj.accessibilityLabel = intl.string(require("getSystemLocale").t.XF1nZz);
    obj.onPress = onPress;
    obj.isSmallSize = isSmallSize;
    return jsx(require("ActionButton").ToggledActionButton, obj);
  }
}
class AudioRouteButton {
  constructor(arg0) {
    channel = global.channel;
    obj = require("_handleToggleVideo");
    maskedSpeakerStates = obj.useMaskedSpeakerStates();
    toggleAudio = maskedSpeakerStates.toggleAudio;
    ({ isAudioRouteEnabled, routeSource } = maskedSpeakerStates);
    obj2 = require("useIsConnectedToVoiceChannelForId");
    c2 = obj2.useIsConnectedToVoiceChannel(channel);
    obj = {
      isActive: isAudioRouteEnabled,
      source: routeSource,
      onPress() {
            toggleAudio(channel.id, closure_2);
          }
    };
    intl = require("getSystemLocale").intl;
    obj.accessibilityLabel = intl.string(require("getSystemLocale").t["A/Ly/2"]);
    obj.isSmallSize = global.isSmallSize;
    return jsx(require("ActionButton").ToggledActionButton, obj);
  }
}
class DisconnectCallButton {
  constructor(arg0) {
    channel = global.channel;
    obj = {};
    obj.source = require("registerAsset");
    intl = require("getSystemLocale").intl;
    obj.accessibilityLabel = intl.string(require("getSystemLocale").t["6vrfgt"]);
    obj.isSmallSize = global.isSmallSize;
    obj.onPress = function onPress() {
      channel(outer1_3[18]).handleDisconnect(channel);
    };
    return jsx(require("ActionButton").PrimaryActionButton, obj);
  }
}
class DisconnectStreamButton {
  constructor(arg0) {
    channel = global.channel;
    obj = require("initialize");
    items = [, ];
    items[0] = View;
    items[1] = c10;
    f83268 = obj.useStateFromStores(items, () => {
      const selectedParticipant = outer1_7.getSelectedParticipant(channel.id);
      if (null != selectedParticipant) {
        if (selectedParticipant.type !== outer1_13.ACTIVITY) {
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
    obj2 = require("initialize");
    items1 = [];
    items1[0] = c9;
    stateFromStores = obj2.useStateFromStores(items1, () => {
      let activeStreamForStreamKey = null;
      if (null != closure_1) {
        activeStreamForStreamKey = outer1_9.getActiveStreamForStreamKey(closure_1);
      }
      return activeStreamForStreamKey;
    });
    channel = stateFromStores;
    tmp2 = null;
    if (null != stateFromStores) {
      tmp3 = jsx;
      tmp4 = channel;
      tmp5 = closure_3;
      num = 20;
      obj = {};
      tmp6 = f83268;
      num2 = 26;
      obj.source = require("registerAsset");
      tmp7 = channel;
      num3 = 21;
      intl = require("getSystemLocale").intl;
      obj.accessibilityLabel = intl.string(require("getSystemLocale").t.q3O3J8);
      obj.isSmallSize = global.isSmallSize;
      obj.onPress = function onPress() {
        const participant = callback(outer1_3[27]).selectParticipant(channel.id, null);
        const obj = callback(outer1_3[27]);
        const obj2 = channel(outer1_3[28]);
        obj2.stopStream(channel(outer1_3[29]).encodeStreamKey(stateFromStores));
      };
      tmp2 = jsx(require("ActionButton").PrimaryActionButton, obj);
    }
    return tmp2;
  }
}
function LeaveActivityButton(isSmallSize) {
  let obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.k0Aph0);
  obj.onPress = function onPress() {
    const currentEmbeddedActivity = outer1_6.getCurrentEmbeddedActivity();
    let obj = outer1_1(outer1_3[30]);
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
  obj.source = importDefault(10707);
  obj.isSmallSize = isSmallSize.isSmallSize;
  return callback(importAll(10549).PrimaryActionButton, obj);
}
function useActionBarSecondButtons(channel) {
  channel = channel.channel;
  let obj = require(10214) /* useIsConnectedToVoiceChannelForId */;
  let isConnectedToVoiceChannel = obj.useIsConnectedToVoiceChannel(channel);
  const tmp2 = importDefault(5652)();
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
    isActive = importDefault(10689)(channel).isActive;
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
  if (tmp[obj2.SCREEN_SHARE_END]) {
    let AUDIO_ROUTE = tmp3.SCREEN_SHARE_END;
  } else {
    if (!tmp[tmp3.AUDIO_ROUTE]) {
      AUDIO_ROUTE = tmp[obj2.SCREEN_SHARE_START] ? tmp6.SCREEN_SHARE_START : tmp6.NONE;
    }
    AUDIO_ROUTE = obj2.AUDIO_ROUTE;
  }
  return AUDIO_ROUTE;
}
function useActionBarPrimaryButtons(channel) {
  channel = channel.channel;
  let obj = channel(10214);
  const isConnectedToVoiceChannel = obj.useIsConnectedToVoiceChannel(channel);
  const items = [_isNativeReflectConstruct, closure_10];
  let closure_1 = channel(566).useStateFromStores(items, () => {
    const selectedParticipant = outer1_7.getSelectedParticipant(channel.id);
    if (null != selectedParticipant) {
      if (selectedParticipant.type !== outer1_13.ACTIVITY) {
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
  const obj3 = channel(566);
  const items1 = [closure_9];
  const stateFromStores = obj3.useStateFromStores(items1, () => {
    let activeStreamForStreamKey = null;
    if (null != closure_1) {
      activeStreamForStreamKey = outer1_9.getActiveStreamForStreamKey(closure_1);
    }
    return activeStreamForStreamKey;
  });
  const obj2 = channel(566);
  const items2 = [closure_6];
  const stateFromStores1 = channel(566).useStateFromStores(items2, () => null != outer1_6.getCurrentEmbeddedActivity());
  const obj4 = channel(566);
  const items3 = [closure_8];
  const stateFromStoresObject = channel(566).useStateFromStoresObject(items3, () => ({ awaitingRemote: null != outer1_8.getAwaitingRemoteSessionInfo(), remoteSessionId: outer1_8.getRemoteSessionId() }));
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
  if (tmp[obj3.END_STREAM]) {
    let END_REMOTE = tmp2.END_STREAM;
  } else if (tmp[tmp2.END_REMOTE]) {
    END_REMOTE = tmp3.END_REMOTE;
  } else {
    END_REMOTE = tmp[tmp3.END_ACTIVITY] ? tmp4.END_ACTIVITY : tmp4.END_CALL;
  }
  return END_REMOTE;
}
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { height: require("sum").CALL_ACTION_BAR_HEIGHT, justifyContent: "center", alignItems: "center", flexDirection: "row" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { height: require("sum").FIVE_BUTTON_LAYOUT_ACTION_BAR_HEIGHT, paddingHorizontal: 16, paddingTop: require("sum").FIVE_BUTTON_CONTAINER_PADDING_TOP, paddingBottom: require("sum").FIVE_BUTTON_CONTAINER_PADDING_BOTTOM, justifyContent: "center", flexDirection: "row" };
_createForOfIteratorHelperLoose.containerForFiveButtonLayout = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { NONE: 0, [0]: "NONE", SCREEN_SHARE_START: 1, [1]: "SCREEN_SHARE_START", SCREEN_SHARE_END: 2, [2]: "SCREEN_SHARE_END", AUDIO_ROUTE: 3, [3]: "AUDIO_ROUTE" };
let obj3 = { END_STREAM: 0, [0]: "END_STREAM", END_ACTIVITY: 1, [1]: "END_ACTIVITY", END_CALL: 2, [2]: "END_CALL", END_REMOTE: 3, [3]: "END_REMOTE" };
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/video_calls/native/components/ChannelCallActionBar.tsx");

export default function ChannelCallActionBar(arg0) {
  let channel;
  let shouldShowConnectingScreen;
  ({ channel, shouldShowConnectingScreen } = arg0);
  if (shouldShowConnectingScreen === undefined) {
    shouldShowConnectingScreen = false;
  }
  const tmp = _createForOfIteratorHelperLoose();
  const tmp3 = useActionBarSecondButton({ channel });
  const tmp4 = useActionBarPrimaryButton({ channel });
  const tmp2 = importDefault(5652)();
  let obj = require(10552) /* useIsFiveButtonLayout */;
  const isFiveButtonLayout = obj.useIsFiveButtonLayout(channel.id);
  obj = { value: importDefault(5464)(importDefault(5484).CHANNEL_CALL_ACTION_BAR).analyticsLocations };
  obj = { pointerEvents: "box-none", style: isFiveButtonLayout ? tmp.containerForFiveButtonLayout : tmp.container };
  if (shouldShowConnectingScreen) {
    const obj1 = { channel };
    let tmp10Result = callback(require(10708) /* VoiceSettingsActionSheet */.CallConnectingActionBar, obj1);
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
    items[2] = callback(require(10732) /* ChannelCallMicButton */.ChannelCallMicButton, obj6);
    if (obj3.END_REMOTE === tmp4) {
      const obj7 = { channel, isSmallSize: isFiveButtonLayout };
      let tmp30 = callback(require(10742) /* DisconnectRemoteButton */.DisconnectRemoteButton, obj7);
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
  return callback(require(5464) /* mergeLocations */.AnalyticsLocationProvider, obj);
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
