// Module ID: 9402
// Function ID: 9403
// Name: ChannelCallActionBar
// Dependencies: [19, 17, 2044, 4852, 4853, 4858, 502, 1993, 8844, 4857, 4861, 21, 4836, 8854, 9403, 504, 9103, 5729, 9404, 9097, 8863, 8855, 1115, 9407, 9408, 8833, 9430, 9431, 5037, 4978, 4888, 8765, 9432, 6689, 9260, 6583, 6603, 8858, 9433, 9462, 9472, 2]
// Exports: default, useActionBarPrimaryButton, useActionBarSecondButtons

// Module 9402 (ChannelCallActionBar)
import react_native from "react-native" /* 17 */;
import intl2 from "intl" /* 1115 */;
import CallConstants from "CallConstants" /* 4857 */;
import Constants from "Constants" /* 4861 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4888 */;
import StreamActionCreators from "StreamActionCreators" /* 4978 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5037 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 6583 */;
import useIsRemoteDefault from "useIsRemote" /* 6689 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 8765 */;
import VoiceChatHooks from "VoiceChatHooks" /* 8833 */;
import useActionBarHeight from "useActionBarHeight" /* 8854 */;
import CallBarActionAll from "CallBarAction" /* 8855 */;
import useIsFiveButtonLayout from "useIsFiveButtonLayout" /* 8858 */;
import openIgnoreThermalStateAlert from "openIgnoreThermalStateAlert" /* 8863 */;
import CallsUtils from "CallsUtils" /* 9097 */;
import CameraLottie2 from "CameraLottie" /* 9404 */;
import useScreenshareUtilsDefault from "useScreenshareUtils" /* 9408 */;
import AssetRegistryDefault from "AssetRegistry" /* 9430 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9431 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 9432 */;
import ChannelCallMicButton from "ChannelCallMicButton" /* 9462 */;
import react from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4852 */;
import GameConsoleStore from "GameConsoleStore" /* 4853 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4858 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 8844 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const useAnalyticsLocationsDefault = useAnalyticsLocations;
let importDefault;

let closure_15;
let closure_16;
let closure_17;
let obj2;
let obj3;
class VideoButton {
  constructor(channel) {
    let closure_1;
    let intl;
    let reactingToThermalState;
    channel = channel.channel;
    importDefault = undefined;
    let stateFromStores1;
    let tmp2 = stateFromStores1;
    const isSmallSize = channel.isSmallSize;
    let tmp = importDefault;
    const tmp3 = require("useHasVideoPermission")(channel);
    importDefault = tmp3;
    let obj = channel(stateFromStores1[15]);
    const items = [ChannelCallLifecycleStore];
    const stateFromStores = obj.useStateFromStores(items, () => reactingToThermalState.isReactingToThermalState());
    let obj2 = channel(stateFromStores1[15]);
    const items1 = [MediaEngineStore];
    stateFromStores1 = obj2.useStateFromStores(items1, () => MediaEngineStore.isVideoEnabled());
    const items2 = [MediaEngineStore];
    const obj3 = channel(stateFromStores1[15]);
    const stateFromStores2 = obj3.useStateFromStores(items2, () => MediaEngineStore.supports(constants.VIDEO));
    const reachedLimit = require("useChannelVideoLimit")(channel).reachedLimit;
    obj4 = channel(stateFromStores1[17]);
    const stageHasMedia = obj4.useStageHasMedia(channel.id);
    const ref = stateFromStores2.useRef(null);
    const items3 = [stateFromStores1];
    const memo = stateFromStores2.useMemo(() => {
      let str;
      const obj = { ref, animation: str };
      str = "unmute";
      const CameraLottie = CameraLottie2.CameraLottie;
      const tmp = closure_15;
      if (stateFromStores1) {
        str = "mute";
      }
      return tmp(CameraLottie, obj);
    }, items3);
    const callback = stateFromStores2.useCallback((channel) => {
      const obj = CallsUtils;
      obj.handleToggleVideo(channel);
      if (ref != null) {
        const current = ref.current;
        if (current != null) {
          current.play();
        }
      }
    }, []);
    const items4 = [channel, stateFromStores2, tmp3, stateFromStores, callback];
    const callback1 = stateFromStores2.useCallback(() => {
      const tmp = stateFromStores2;
      if (tmp) {
        const tmp2 = closure_1;
        if (tmp2) {
          const tmp6 = stateFromStores;
          if (tmp6) {
            const obj2 = openIgnoreThermalStateAlert;
            const result = obj2.openIgnoreThermalStateAlert(() => callback(channel));
          } else {
            callback(channel);
          }
        } else {
          const obj = CallsUtils;
          const result1 = obj.showCameraDisabledAlert();
        }
      }
    }, items4);
    let tmp13 = !stateFromStores2;
    const ToggledActionButton = stateFromStores(stateFromStores1[21]).ToggledActionButton;
    const tmp12 = closure_15;
    if (stateFromStores2) {
      tmp13 = !tmp3;
    }
    if (!tmp13) {
      tmp13 = !stageHasMedia && reachedLimit;
    }
    obj5 = { appearsDisabled: tmp13, isActive: stateFromStores1, onPress: callback1, accessibilityLabel: intl.string(channel(tmp2[22]).t.HK4JIu), source: tmp(tmp2[23]), isSmallSize, lottieComponent: memo };
    intl = tmp4(tmp2[22]).intl;
    return tmp12(ToggledActionButton, obj5);
  }
}
class ScreenshareButton {
  constructor(arg0) {
    let channel;
    let imgSource;
    let intl;
    let isActive;
    let isFeatureEnabled;
    let isSmallSize;
    let onPress;
    ({ channel, isSmallSize } = arg0);
    ({ onPress, isFeatureEnabled, isActive, imgSource } = useScreenshareUtilsDefault(channel));
    useScreenshareUtilsDefault(channel);
    if (!isFeatureEnabled) {
      onPress = () => {

      };
    }
    const obj = { appearsDisabled: !isFeatureEnabled, source: imgSource, isActive, accessibilityLabel: intl.string(intl2.t.XF1nZz), onPress, isSmallSize };
    const ToggledActionButton = CallBarActionAll.ToggledActionButton;
    intl = intl2.intl;
    return closure_15(ToggledActionButton, obj);
  }
}
class AudioRouteButton {
  constructor(channel) {
    let c1;
    let intl;
    let isAudioRouteEnabled;
    let routeSource;
    channel = channel.channel;
    c1 = undefined;
    const isSmallSize = channel.isSmallSize;
    const obj = CallsUtils;
    const maskedSpeakerStates = obj.useMaskedSpeakerStates();
    ({ toggleAudio: c1, isAudioRouteEnabled, routeSource } = maskedSpeakerStates);
    const obj2 = VoiceChatHooks;
    let closure_2 = obj2.useIsConnectedToVoiceChannel(channel);
    const obj3 = {
      isActive: isAudioRouteEnabled,
      source: routeSource,
      onPress() {
        _undefined(channel.id, closure_2);
      },
      accessibilityLabel: intl.string(intl2.t["A/Ly/2"]),
      isSmallSize
    };
    const ToggledActionButton = CallBarActionAll.ToggledActionButton;
    intl = intl2.intl;
    return closure_15(ToggledActionButton, obj3);
  }
}
class DisconnectCallButton {
  constructor(channel) {
    let intl;
    channel = channel.channel;
    const isSmallSize = channel.isSmallSize;
    let obj = {
      source: AssetRegistryDefault,
      accessibilityLabel: intl.string(channel(1115).t["6vrfgt"]),
      isSmallSize,
      onPress() {
        const obj = CallsUtils;
        obj.handleDisconnect(channel);
      }
    };
    const PrimaryActionButton = CallBarActionAll.PrimaryActionButton;
    intl = channel(1115).intl;
    return closure_15(PrimaryActionButton, obj);
  }
}
class DisconnectStreamButton {
  constructor(channel) {
    let closure_1;
    let intl;
    channel = channel.channel;
    const tmp = channel;
    const isSmallSize = channel.isSmallSize;
    let obj = channel(504);
    const items = [ChannelRTCStore, AuthenticationStore];
    importDefault = obj.useStateFromStores(items, () => {
      const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channel.id);
      if (null != selectedParticipant) {
        let tmp4;
        if (selectedParticipant.type !== ParticipantTypes.ACTIVITY) {
          tmp4 = null;
        }
        return tmp4;
      }
      let id;
      if (selectedParticipant != null) {
        id = selectedParticipant.id;
      }
      tmp4 = id;
    });
    let obj2 = channel(504);
    const items1 = [ApplicationStreamingStore];
    const stateFromStores = obj2.useStateFromStores(items1, () => {
      let activeStreamForStreamKey = null;
      if (null != closure_1) {
        activeStreamForStreamKey = ApplicationStreamingStore.getActiveStreamForStreamKey(tmp);
      }
      return activeStreamForStreamKey;
    });
    let tmp4 = null;
    if (null != stateFromStores) {
      const obj3 = {
        source: AssetRegistryDefault2,
        accessibilityLabel: intl.string(tmp(1115).t.q3O3J8),
        isSmallSize,
        onPress() {
            const obj = ChannelRTCActionCreatorsDefault;
            const participant = obj.selectParticipant(channel.id, null);
            const stopStream = StreamActionCreators.stopStream;
            StreamActionCreators;
            const obj2 = StreamKeyUtils;
            stopStream(obj2.encodeStreamKey(stateFromStores));
          }
      };
      const PrimaryActionButton = stateFromStores(8855).PrimaryActionButton;
      intl = tmp(1115).intl;
      tmp4 = closure_15(PrimaryActionButton, obj3);
    }
    return tmp4;
  }
}
function LeaveActivityButton(isSmallSize) {
  let intl;
  isSmallSize = isSmallSize.isSmallSize;
  let obj = {
    accessibilityLabel: intl.string(intl2.t.k0Aph0),
    onPress() {
      let applicationId;
      currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
      let _location;
      const leaveActivity = EmbeddedActivitiesNativeManagerDefault.leaveActivity;
      EmbeddedActivitiesNativeManagerDefault;
      if (currentEmbeddedActivity != null) {
        _location = currentEmbeddedActivity.location;
      }
      const obj = { location: _location, applicationId };
      applicationId = undefined;
      if (currentEmbeddedActivity != null) {
        applicationId = currentEmbeddedActivity.applicationId;
      }
      leaveActivity(obj);
    },
    source: AssetRegistryDefault3,
    isSmallSize
  };
  const PrimaryActionButton = CallBarActionAll.PrimaryActionButton;
  intl = intl2.intl;
  return closure_15(PrimaryActionButton, obj);
}
function useActionBarSecondButton(channel) {
  let AUDIO_ROUTE2;
  channel = channel.channel;
  const obj = VoiceChatHooks;
  let isConnectedToVoiceChannel = obj.useIsConnectedToVoiceChannel(channel);
  const isActive = useScreenshareUtilsDefault(channel).isActive;
  const tmp2 = useIsRemoteDefault();
  let tmp4 = isConnectedToVoiceChannel;
  const AUDIO_ROUTE = obj4.AUDIO_ROUTE;
  if (isConnectedToVoiceChannel) {
    tmp4 = !tmp2;
  }
  const obj2 = {};
  obj2[AUDIO_ROUTE] = tmp4;
  obj2[obj4.NONE] = true;
  let tmp5 = isConnectedToVoiceChannel;
  const SCREEN_SHARE_END = tmp3.SCREEN_SHARE_END;
  if (isConnectedToVoiceChannel) {
    tmp5 = !tmp2;
  }
  if (tmp5) {
    tmp5 = isActive;
  }
  obj2[SCREEN_SHARE_END] = tmp5;
  const SCREEN_SHARE_START = tmp3.SCREEN_SHARE_START;
  if (isConnectedToVoiceChannel) {
    isConnectedToVoiceChannel = !tmp2;
  }
  obj2[SCREEN_SHARE_START] = isConnectedToVoiceChannel;
  if (obj2[obj4.SCREEN_SHARE_END]) {
    AUDIO_ROUTE2 = tmp3.SCREEN_SHARE_END;
  } else {
    if (!obj2[obj4.AUDIO_ROUTE]) {
      AUDIO_ROUTE2 = obj2[tmp3.SCREEN_SHARE_START] ? tmp3.SCREEN_SHARE_START : tmp3.NONE;
    }
    AUDIO_ROUTE2 = tmp3.AUDIO_ROUTE;
  }
  return AUDIO_ROUTE2;
}
function useActionBarPrimaryButtons(channel) {
  let currentEmbeddedActivity;
  channel = channel.channel;
  let obj = channel(8833);
  const isConnectedToVoiceChannel = obj.useIsConnectedToVoiceChannel(channel);
  const items = [ChannelRTCStore, AuthenticationStore];
  const obj2 = channel(504);
  let closure_1 = obj2.useStateFromStores(items, () => {
    const selectedParticipant = ChannelRTCStore.getSelectedParticipant(channel.id);
    if (null != selectedParticipant) {
      let tmp4;
      if (selectedParticipant.type !== ParticipantTypes.ACTIVITY) {
        tmp4 = null;
      }
      return tmp4;
    }
    let id;
    if (selectedParticipant != null) {
      id = selectedParticipant.id;
    }
    tmp4 = id;
  });
  const items1 = [ApplicationStreamingStore];
  const obj3 = channel(504);
  const stateFromStores = obj3.useStateFromStores(items1, () => {
    let activeStreamForStreamKey = null;
    if (null != closure_1) {
      activeStreamForStreamKey = ApplicationStreamingStore.getActiveStreamForStreamKey(tmp);
    }
    return activeStreamForStreamKey;
  });
  const items2 = [EmbeddedActivitiesStore];
  obj4 = channel(504);
  const stateFromStores1 = obj4.useStateFromStores(items2, () => null != currentEmbeddedActivity.getCurrentEmbeddedActivity());
  obj5 = channel(504);
  const items3 = [GameConsoleStore];
  const stateFromStoresObject = obj5.useStateFromStoresObject(items3, () => {
    const obj = { awaitingRemote: null != GameConsoleStore.getAwaitingRemoteSessionInfo(), remoteSessionId: GameConsoleStore.getRemoteSessionId() };
    return obj;
  });
  let awaitingRemote = stateFromStoresObject.awaitingRemote;
  const obj6 = { [closure_27.END_ACTIVITY]: stateFromStores1, [closure_27.END_CALL]: isConnectedToVoiceChannel };
  const END_REMOTE = obj5.END_REMOTE;
  const tmp6 = obj5;
  if (!awaitingRemote) {
    awaitingRemote = null != tmp5;
  }
  obj6[END_REMOTE] = awaitingRemote;
  obj6[tmp6.END_STREAM] = null != stateFromStores;
  return obj6;
}
const View = react_native.View;
const ParticipantTypes = CallConstants.ParticipantTypes;
const Features = Constants.Features;
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, containerForFiveButtonLayout: obj3 };
obj2 = { height: useActionBarHeight.CALL_ACTION_BAR_HEIGHT, justifyContent: "center", alignItems: "center", flexDirection: "row" };
createStyles = createStyles.createStyles;
obj3 = { height: useActionBarHeight.FIVE_BUTTON_LAYOUT_ACTION_BAR_HEIGHT, paddingHorizontal: 16, paddingTop: useActionBarHeight.FIVE_BUTTON_CONTAINER_PADDING_TOP, paddingBottom: useActionBarHeight.FIVE_BUTTON_CONTAINER_PADDING_BOTTOM, justifyContent: "center", flexDirection: "row" };
let closure_18 = createStyles(obj);
let obj4 = { NONE: 0, [0]: "NONE", SCREEN_SHARE_START: 1, [1]: "SCREEN_SHARE_START", SCREEN_SHARE_END: 2, [2]: "SCREEN_SHARE_END", AUDIO_ROUTE: 3, [3]: "AUDIO_ROUTE" };
let obj5 = { END_STREAM: 0, [0]: "END_STREAM", END_ACTIVITY: 1, [1]: "END_ACTIVITY", END_CALL: 2, [2]: "END_CALL", END_REMOTE: 3, [3]: "END_REMOTE" };
let result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallActionBar.tsx");

export default function ChannelCallActionBar(arg0) {
  let END_REMOTE;
  let channel;
  let obj3;
  let shouldShowConnectingScreen;
  let tmp12;
  let tmp13Result;
  ({ channel, shouldShowConnectingScreen } = arg0);
  if (shouldShowConnectingScreen === undefined) {
    shouldShowConnectingScreen = false;
  }
  const tmp = closure_18();
  const tmp4 = useIsRemoteDefault();
  const tmp5 = useActionBarSecondButton({ channel });
  const tmp6 = useActionBarPrimaryButtons({ channel });
  if (tmp6[obj5.END_STREAM]) {
    END_REMOTE = tmp7.END_STREAM;
  } else if (tmp6[obj5.END_REMOTE]) {
    END_REMOTE = tmp7.END_REMOTE;
  } else {
    END_REMOTE = tmp6[tmp7.END_ACTIVITY] ? tmp7.END_ACTIVITY : tmp7.END_CALL;
  }
  const tmp2Result = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp2Result(tmp2(6603).CHANNEL_CALL_ACTION_BAR).analyticsLocations;
  const obj = useIsFiveButtonLayout;
  const isFiveButtonLayout = obj.useIsFiveButtonLayout(channel.id);
  const obj2 = { value: analyticsLocations, children: closure_15(tmp12, obj3) };
  obj3 = { pointerEvents: "box-none", style: isFiveButtonLayout ? tmp.containerForFiveButtonLayout : tmp.container, children: tmp13Result };
  const AnalyticsLocationProvider = useAnalyticsLocations.AnalyticsLocationProvider;
  tmp12 = View;
  if (shouldShowConnectingScreen) {
    obj4 = { channel };
    tmp13Result = tmp11(tmp9(9433).CallConnectingActionBar, obj4);
  } else {
    let tmp11Result5;
    let tmp11Result6;
    let tmp11Result4 = null;
    const tmp13 = closure_17;
    const tmp14 = authStore3;
    if (!tmp4) {
      obj5 = { channel, isSmallSize: isFiveButtonLayout };
      tmp11Result4 = tmp11(VideoButton, obj5);
    }
    const items = [tmp11Result4, , , ];
    if (obj4.AUDIO_ROUTE === tmp5) {
      const obj6 = { isSmallSize: isFiveButtonLayout, channel };
      tmp11Result5 = tmp11(AudioRouteButton, obj6);
    } else {
      if (obj4.SCREEN_SHARE_START !== tmp5) {
        if (obj4.SCREEN_SHARE_END !== tmp5) {
          const NONE = tmp17.NONE;
          tmp11Result5 = null;
        }
      }
      const obj7 = { channel, isSmallSize: isFiveButtonLayout };
      tmp11Result5 = tmp11(ScreenshareButton, obj7);
    }
    items[1] = tmp11Result5;
    const obj8 = { channel, isSmallSize: isFiveButtonLayout };
    items[2] = closure_15(ChannelCallMicButton.ChannelCallMicButton, obj8);
    if (obj5.END_REMOTE === END_REMOTE) {
      const obj9 = { channel, isSmallSize: isFiveButtonLayout };
      tmp11Result6 = tmp11(tmp9(9472).DisconnectRemoteButton, obj9);
    } else if (obj5.END_STREAM === END_REMOTE) {
      const obj10 = { channel, isSmallSize: isFiveButtonLayout };
      tmp11Result6 = tmp11(DisconnectStreamButton, obj10);
    } else if (obj5.END_ACTIVITY === END_REMOTE) {
      const obj11 = { isSmallSize: isFiveButtonLayout };
      tmp11Result6 = tmp11(LeaveActivityButton, obj11);
    } else {
      tmp11Result6 = null;
      if (obj5.END_CALL === END_REMOTE) {
        const obj12 = { channel, isSmallSize: isFiveButtonLayout };
        tmp11Result6 = tmp11(DisconnectCallButton, obj12);
      }
    }
    const obj13 = { children: items };
    items[3] = tmp11Result6;
    tmp13Result = tmp13(tmp14, obj13);
  }
  return closure_15(AnalyticsLocationProvider, obj2);
};
export { VideoButton };
export { ScreenshareButton };
export { AudioRouteButton };
export { DisconnectCallButton };
export { DisconnectStreamButton };
export const ActionBarSecondButton = obj4;
export const useActionBarSecondButtons = function useActionBarSecondButtons(channel) {
  channel = channel.channel;
  const obj = VoiceChatHooks;
  let isConnectedToVoiceChannel = obj.useIsConnectedToVoiceChannel(channel);
  const isActive = useScreenshareUtilsDefault(channel).isActive;
  const tmp2 = useIsRemoteDefault();
  let tmp4 = isConnectedToVoiceChannel;
  const AUDIO_ROUTE = obj4.AUDIO_ROUTE;
  if (isConnectedToVoiceChannel) {
    tmp4 = !tmp2;
  }
  const obj2 = {};
  obj2[AUDIO_ROUTE] = tmp4;
  obj2[obj4.NONE] = true;
  let tmp5 = isConnectedToVoiceChannel;
  const SCREEN_SHARE_END = tmp3.SCREEN_SHARE_END;
  if (isConnectedToVoiceChannel) {
    tmp5 = !tmp2;
  }
  if (tmp5) {
    tmp5 = isActive;
  }
  obj2[SCREEN_SHARE_END] = tmp5;
  const SCREEN_SHARE_START = tmp3.SCREEN_SHARE_START;
  if (isConnectedToVoiceChannel) {
    isConnectedToVoiceChannel = !tmp2;
  }
  obj2[SCREEN_SHARE_START] = isConnectedToVoiceChannel;
  return obj2;
};
export { useActionBarSecondButton };
export const ActionBarPrimaryButton = obj5;
export { useActionBarPrimaryButtons };
export const useActionBarPrimaryButton = function useActionBarPrimaryButton(channel) {
  let END_REMOTE;
  const obj = { channel: channel.channel };
  const tmp = useActionBarPrimaryButtons(obj);
  if (tmp[obj5.END_STREAM]) {
    END_REMOTE = tmp2.END_STREAM;
  } else if (tmp[obj5.END_REMOTE]) {
    END_REMOTE = tmp2.END_REMOTE;
  } else {
    END_REMOTE = tmp[tmp2.END_ACTIVITY] ? tmp2.END_ACTIVITY : tmp2.END_CALL;
  }
  return END_REMOTE;
};
