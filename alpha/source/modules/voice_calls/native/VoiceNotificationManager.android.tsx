// Module ID: 14536
// Function ID: 14537
// Name: VoiceNotificationManager
// Dependencies: [32, 17, 2062, 5436, 5893, 2063, 2011, 5108, 4717, 1389, 1085, 587, 9656, 9654, 10938, 10237, 5417, 1126, 2001, 2]

// Module 14536 (VoiceNotificationManager)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl5 from "intl" /* 1126 */;
import useChannelName from "useChannelName" /* 5417 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 9654 */;
import ForegroundServiceManagerTypes from "ForegroundServiceManagerTypes" /* 9656 */;
import getChannelCopyForEmbeddedActivityDefault from "getChannelCopyForEmbeddedActivity" /* 10237 */;
import RTCConnectionUtilsDefault from "RTCConnectionUtils" /* 10938 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2062 */;
import ApplicationStore from "ApplicationStore" /* 5436 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 5893 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import MediaEngineStore from "MediaEngineStore" /* 2011 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5108 */;
import RelationshipStore from "RelationshipStore" /* 4717 */;
import UserStore from "UserStore" /* 1389 */;
import LifecycleManager from "LifecycleManager" /* 2001 */;
import size from "module_2" /* 2 */;

function handleVoiceStateChange() {
  const channelId = RTCConnectionStore.getChannelId();
  const state = RTCConnectionStore.getState();
  const tmp4 = obj.state.channelId === channelId && obj.state.connectionState === state;
  if (!tmp4) {
    obj = { channelId, connectionState: state };
    const handleUpdate = tmp3.handleUpdate;
    const merged = Object.assign(tmp3.state);
    handleUpdate(obj);
  }
}
function handleEmbeddedActivityStateChange() {
  let currentEmbeddedActivity;
  if (null != obj.state.channelId) {
    obj = { embeddedActivity: currentEmbeddedActivity };
    currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
    const handleUpdate = tmp.handleUpdate;
    const merged = Object.assign(tmp.state);
    handleUpdate(obj);
  }
}
function handleApplicationStreamStateChange() {
  const tmp = null != ApplicationStreamingStore.getCurrentUserActiveStream();
  if (obj.state.isStreaming !== tmp) {
    obj = { isStreaming: tmp };
    const handleUpdate = tmp2.handleUpdate;
    const merged = Object.assign(tmp2.state);
    handleUpdate(obj);
  }
}
function createAction(channel, Disconnect, intl2) {
  obj = { tag: "" + Disconnect + channel.id, taskName: Disconnect, title: intl2, data: { channelId: channel.id } };
  return obj;
}
const processColor = react_native.processColor;
const InputModes = Constants.InputModes;
let closure_13 = processColor(nativeDefault.unsafe_rawColors.BRAND_500);
let closure_14 = processColor(nativeDefault.unsafe_rawColors.RED_NEW_46);
class VoiceNotificationManager {
  constructor() {
    let createAction;
    obj = Object.create(new.target.prototype);
    obj.voiceServiceHandlerId = 9000;
    obj.state = { channelId: "Symbol", connectionState: "data", selfMute: false, deafened: "user", isPushToTalk: "2024-06_rtc_pacer__simulcast", embeddedActivity: "RTC Pacer & Golive Simulcast", isStreaming: null };
    obj.handleVoiceStateChange = handleVoiceStateChange;
    obj.handleMediaEngineStateChange = function handleMediaEngineStateChange() {
      const tmp = MediaEngineStore.isSelfMute() || MediaEngineStore.isSelfMutedTemporarily();
      const tmp2 = MediaEngineStore.isSelfDeaf() || MediaEngineStore.isDeaf();
      let tmp5 = obj.state.selfMute === tmp;
      const mode = obj.getMode();
      const PUSH_TO_TALK = InputModes.PUSH_TO_TALK;
      if (tmp5) {
        tmp5 = tmp4.state.deafened === tmp2;
      }
      if (tmp5) {
        tmp5 = tmp4.state.isPushToTalk === tmp6;
      }
      if (!tmp5) {
        const handleUpdate = tmp4.handleUpdate;
        const obj2 = { selfMute: tmp, deafened: tmp2, isPushToTalk: mode === PUSH_TO_TALK };
        const merged = Object.assign(tmp4.state);
        handleUpdate(obj2);
      }
    };
    obj.handleEmbeddedActivityStateChange = handleEmbeddedActivityStateChange;
    obj.handleApplicationStreamStateChange = handleApplicationStreamStateChange;
    obj.getIcon = function getIcon(arg0) {
      let deafened;
      let isPushToTalk;
      let items3;
      let selfMute;
      ({ deafened, selfMute, isPushToTalk } = arg0);
      const ServiceNotificationIcon = obj(dependencyMap[12]).ServiceNotificationIcon;
      if (deafened) {
        const items = [ServiceNotificationIcon.DEAFENED, closure_1_14];
        items3 = items;
      } else if (selfMute) {
        const items1 = [ServiceNotificationIcon.MUTED, closure_1_14];
        items3 = items1;
      } else if (isPushToTalk) {
        const items2 = [ServiceNotificationIcon.DEFAULT, closure_1_13];
        items3 = items2;
      } else {
        items3 = [ServiceNotificationIcon.IDLE, closure_1_13];
      }
      return items3;
    };
    obj.handleUpdate = function handleUpdate(connectionState) {
      let ServiceNotificationType;
      let channelName;
      let deafened;
      let intl;
      let isStreaming;
      let items;
      let obj6;
      let selfMute;
      let tmp4;
      let tmp5;
      let tmp7;
      let tmp8;
      if (null != connectionState.connectionState) {
        [tmp4, tmp5] = obj.getIcon(obj.state);
        _slicedToArray(obj.getIcon(obj.state), 2);
        [tmp7, tmp8] = obj.getIcon(connectionState);
        _slicedToArray(obj.getIcon(connectionState), 2);
        if (obj.state.channelId === connectionState.channelId) {
          if (obj.state.connectionState === connectionState.connectionState) {
            if (obj.state.selfMute === connectionState.selfMute) {
              if (obj.state.deafened === connectionState.deafened) {
                const embeddedActivity = obj.state.embeddedActivity;
                let compositeInstanceId;
                if (embeddedActivity != null) {
                  compositeInstanceId = embeddedActivity.compositeInstanceId;
                }
                const embeddedActivity2 = connectionState.embeddedActivity;
                let compositeInstanceId1;
                if (embeddedActivity2 != null) {
                  compositeInstanceId1 = embeddedActivity2.compositeInstanceId;
                }
                if (compositeInstanceId === compositeInstanceId1) {
                  if (obj.state.isStreaming === connectionState.isStreaming) {
                    if (tmp4 === tmp7) {
                      if (tmp5 === tmp8) {
                        obj.state = connectionState;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        const embeddedActivity3 = connectionState.embeddedActivity;
        obj.state = connectionState;
        ({ connectionState, selfMute, deafened, isStreaming } = connectionState);
        const channel = ChannelStore.getChannel(connectionState.channelId);
        if (null != channel) {
          let stringResult;
          let string2Result;
          let str2 = "";
          const obj3 = RTCConnectionUtilsDefault;
          const connectionStatusText = obj3.getStatus(connectionState).connectionStatusText;
          if (null != embeddedActivity3) {
            let applicationId;
            const getApplication = ApplicationStore.getApplication;
            if (embeddedActivity3 != null) {
              applicationId = embeddedActivity3.applicationId;
            }
            const application = getApplication(applicationId);
            let name;
            const tmp16Result = getChannelCopyForEmbeddedActivityDefault;
            if (application != null) {
              name = application.name;
            }
            const _HermesInternal = HermesInternal;
            str2 = " - " + tmp16Result(name);
          }
          const obj5 = { title: intl.formatToPlainString(intl5.t["aUT3+M"], obj6), content: "" + channelName + str2, priority: ForegroundServiceManagerTypes.ServiceNotificationPriority.HIGH, contentAction: obj.createAction(channel, "SelectVoiceChannel", undefined), auxiliaryActions: items, type: isStreaming ? ServiceNotificationType.SCREEN_SHARE : ServiceNotificationType.VOICE_CALL, usesGateway: true, icon: tmp7, color: tmp8 };
          const obj4 = useChannelName;
          channelName = obj4.computeChannelName(channel, UserStore, RelationshipStore);
          intl = intl5.intl;
          const _HermesInternal2 = HermesInternal;
          const createAction = obj.createAction;
          obj6 = { callState: connectionStatusText };
          const intl2 = intl5.intl;
          items = [createAction(channel, "Disconnect", intl2.string(intl5.t["6vrfgt"])), , ];
          const createAction2 = obj.createAction;
          const intl3 = intl5.intl;
          const string = intl3.string;
          const t = intl5.t;
          if (selfMute) {
            stringResult = string(t.YqAjXy);
          } else {
            stringResult = string(t.w4m945);
          }
          items[1] = createAction2(channel, "ToggleSelfMute", stringResult);
          const createAction3 = obj.createAction;
          const intl4 = tmp24(1126).intl;
          const string2 = intl4.string;
          const t2 = tmp24(1126).t;
          if (deafened) {
            string2Result = string2(t2["2US872"]);
          } else {
            string2Result = string2(t2.wjcRFX);
          }
          items[2] = createAction3(channel, "ToggleDeafen", string2Result);
          ServiceNotificationType = tmp24(9656).ServiceNotificationType;
          const tmp16Result2 = ForegroundServiceManagerDefault;
          tmp16Result2.updateServiceHandler(obj.voiceServiceHandlerId, obj5);
        } else {
          const obj2 = ForegroundServiceManagerDefault;
          obj2.removeServiceHandler(obj.voiceServiceHandlerId);
        }
      } else {
        obj.state = connectionState;
      }
    };
    obj.createAction = createAction;
    return obj;
  }
  initialize() {
    RTCConnectionStore.addChangeListener(this.handleVoiceStateChange);
    MediaEngineStore.addChangeListener(this.handleMediaEngineStateChange);
    EmbeddedActivitiesStore.addChangeListener(this.handleEmbeddedActivityStateChange);
    ApplicationStreamingStore.addChangeListener(this.handleApplicationStreamStateChange);
  }
  terminate() {
    RTCConnectionStore.removeChangeListener(this.handleVoiceStateChange);
    MediaEngineStore.removeChangeListener(this.handleMediaEngineStateChange);
    EmbeddedActivitiesStore.removeChangeListener(this.handleEmbeddedActivityStateChange);
    ApplicationStreamingStore.removeChangeListener(this.handleApplicationStreamStateChange);
  }
}
const prototype = VoiceNotificationManager.prototype;
let obj = Object.create(VoiceNotificationManager.prototype);
obj.voiceServiceHandlerId = 9000;
obj.state = { channelId: "Symbol", connectionState: "data", selfMute: false, deafened: "user", isPushToTalk: "2024-06_rtc_pacer__simulcast", embeddedActivity: "RTC Pacer & Golive Simulcast", isStreaming: null };
obj.handleVoiceStateChange = handleVoiceStateChange;
obj.handleMediaEngineStateChange = function handleMediaEngineStateChange() {
  const tmp = MediaEngineStore.isSelfMute() || MediaEngineStore.isSelfMutedTemporarily();
  const tmp2 = MediaEngineStore.isSelfDeaf() || MediaEngineStore.isDeaf();
  let tmp5 = obj.state.selfMute === tmp;
  const mode = obj.getMode();
  const PUSH_TO_TALK = InputModes.PUSH_TO_TALK;
  if (tmp5) {
    tmp5 = tmp4.state.deafened === tmp2;
  }
  if (tmp5) {
    tmp5 = tmp4.state.isPushToTalk === tmp6;
  }
  if (!tmp5) {
    const handleUpdate = tmp4.handleUpdate;
    const obj2 = { selfMute: tmp, deafened: tmp2, isPushToTalk: mode === PUSH_TO_TALK };
    const merged = Object.assign(tmp4.state);
    handleUpdate(obj2);
  }
};
obj.handleEmbeddedActivityStateChange = handleEmbeddedActivityStateChange;
obj.handleApplicationStreamStateChange = handleApplicationStreamStateChange;
obj.getIcon = function getIcon(arg0) {
  let deafened;
  let isPushToTalk;
  let items3;
  let selfMute;
  ({ deafened, selfMute, isPushToTalk } = arg0);
  const ServiceNotificationIcon = obj(dependencyMap[12]).ServiceNotificationIcon;
  if (deafened) {
    const items = [ServiceNotificationIcon.DEAFENED, closure_1_14];
    items3 = items;
  } else if (selfMute) {
    const items1 = [ServiceNotificationIcon.MUTED, closure_1_14];
    items3 = items1;
  } else if (isPushToTalk) {
    const items2 = [ServiceNotificationIcon.DEFAULT, closure_1_13];
    items3 = items2;
  } else {
    items3 = [ServiceNotificationIcon.IDLE, closure_1_13];
  }
  return items3;
};
obj.handleUpdate = function handleUpdate(connectionState) {
  let ServiceNotificationType;
  let channelName;
  let deafened;
  let intl;
  let isStreaming;
  let items;
  let obj6;
  let selfMute;
  let tmp4;
  let tmp5;
  let tmp7;
  let tmp8;
  if (null != connectionState.connectionState) {
    [tmp4, tmp5] = obj.getIcon(obj.state);
    _slicedToArray(obj.getIcon(obj.state), 2);
    [tmp7, tmp8] = obj.getIcon(connectionState);
    _slicedToArray(obj.getIcon(connectionState), 2);
    if (obj.state.channelId === connectionState.channelId) {
      if (obj.state.connectionState === connectionState.connectionState) {
        if (obj.state.selfMute === connectionState.selfMute) {
          if (obj.state.deafened === connectionState.deafened) {
            const embeddedActivity = obj.state.embeddedActivity;
            let compositeInstanceId;
            if (embeddedActivity != null) {
              compositeInstanceId = embeddedActivity.compositeInstanceId;
            }
            const embeddedActivity2 = connectionState.embeddedActivity;
            let compositeInstanceId1;
            if (embeddedActivity2 != null) {
              compositeInstanceId1 = embeddedActivity2.compositeInstanceId;
            }
            if (compositeInstanceId === compositeInstanceId1) {
              if (obj.state.isStreaming === connectionState.isStreaming) {
                if (tmp4 === tmp7) {
                  if (tmp5 === tmp8) {
                    obj.state = connectionState;
                  }
                }
              }
            }
          }
        }
      }
    }
    const embeddedActivity3 = connectionState.embeddedActivity;
    obj.state = connectionState;
    ({ connectionState, selfMute, deafened, isStreaming } = connectionState);
    const channel = ChannelStore.getChannel(connectionState.channelId);
    if (null != channel) {
      let stringResult;
      let string2Result;
      let str2 = "";
      const obj3 = RTCConnectionUtilsDefault;
      const connectionStatusText = obj3.getStatus(connectionState).connectionStatusText;
      if (null != embeddedActivity3) {
        let applicationId;
        const getApplication = ApplicationStore.getApplication;
        if (embeddedActivity3 != null) {
          applicationId = embeddedActivity3.applicationId;
        }
        const application = getApplication(applicationId);
        let name;
        const tmp16Result = getChannelCopyForEmbeddedActivityDefault;
        if (application != null) {
          name = application.name;
        }
        const _HermesInternal = HermesInternal;
        str2 = " - " + tmp16Result(name);
      }
      const obj5 = { title: intl.formatToPlainString(intl5.t["aUT3+M"], obj6), content: "" + channelName + str2, priority: ForegroundServiceManagerTypes.ServiceNotificationPriority.HIGH, contentAction: obj.createAction(channel, "SelectVoiceChannel", undefined), auxiliaryActions: items, type: isStreaming ? ServiceNotificationType.SCREEN_SHARE : ServiceNotificationType.VOICE_CALL, usesGateway: true, icon: tmp7, color: tmp8 };
      const obj4 = useChannelName;
      channelName = obj4.computeChannelName(channel, UserStore, RelationshipStore);
      intl = intl5.intl;
      const _HermesInternal2 = HermesInternal;
      const createAction = obj.createAction;
      obj6 = { callState: connectionStatusText };
      const intl2 = intl5.intl;
      items = [createAction(channel, "Disconnect", intl2.string(intl5.t["6vrfgt"])), , ];
      const createAction2 = obj.createAction;
      const intl3 = intl5.intl;
      const string = intl3.string;
      const t = intl5.t;
      if (selfMute) {
        stringResult = string(t.YqAjXy);
      } else {
        stringResult = string(t.w4m945);
      }
      items[1] = createAction2(channel, "ToggleSelfMute", stringResult);
      const createAction3 = obj.createAction;
      const intl4 = tmp24(1126).intl;
      const string2 = intl4.string;
      const t2 = tmp24(1126).t;
      if (deafened) {
        string2Result = string2(t2["2US872"]);
      } else {
        string2Result = string2(t2.wjcRFX);
      }
      items[2] = createAction3(channel, "ToggleDeafen", string2Result);
      ServiceNotificationType = tmp24(9656).ServiceNotificationType;
      const tmp16Result2 = ForegroundServiceManagerDefault;
      tmp16Result2.updateServiceHandler(obj.voiceServiceHandlerId, obj5);
    } else {
      const obj2 = ForegroundServiceManagerDefault;
      obj2.removeServiceHandler(obj.voiceServiceHandlerId);
    }
  } else {
    obj.state = connectionState;
  }
};
obj.createAction = createAction;
class VoiceNotificationLifecycleManager extends LifecycleManager {
  _initialize() {
    obj.initialize();
  }
  _terminate() {
    obj.terminate();
  }
}
const prototype2 = VoiceNotificationLifecycleManager.prototype;
const voiceNotificationLifecycleManager = new VoiceNotificationLifecycleManager();
const result = size.fileFinishedImporting("modules/voice_calls/native/VoiceNotificationManager.android.tsx");

export default voiceNotificationLifecycleManager;
