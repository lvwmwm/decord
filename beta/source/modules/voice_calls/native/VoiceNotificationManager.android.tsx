// Module ID: 14736
// Function ID: 14737
// Name: VoiceNotificationManager
// Dependencies: [32, 17, 2044, 4985, 4780, 2045, 1996, 4781, 4409, 1376, 1078, 580, 8005, 8003, 10294, 11194, 4911, 1119, 1986, 2]

// Module 14736 (VoiceNotificationManager)
import nativeDefault from "native" /* 580 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 8003 */;
import RTCConnectionUtilsDefault from "RTCConnectionUtils" /* 10294 */;
import _slicedToArray from "module_32" /* 32 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import ApplicationStore from "ApplicationStore" /* 4985 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4780 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import MediaEngineStore from "MediaEngineStore" /* 1996 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4781 */;
import RelationshipStore from "RelationshipStore" /* 4409 */;
import UserStore from "UserStore" /* 1376 */;
import LifecycleManager from "LifecycleManager" /* 1986 */;

let obj2 = fn;
const processColor = fn(17).processColor;
const InputModes = fn(1078).InputModes;
let closure_13 = processColor(nativeDefault.unsafe_rawColors.BRAND_500);
let closure_14 = processColor(nativeDefault.unsafe_rawColors.RED_NEW_46);
class VoiceNotificationManager {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.voiceServiceHandlerId = 9000;
    obj.state = { channelId: "T", connectionState: "cursor", selfMute: false, deafened: "sun_with_face", isPushToTalk: "full_moon_with_face", embeddedActivity: 0.5, isStreaming: "M8 7H6v1h2V7Z" };
    obj.handleVoiceStateChange = function handleVoiceStateChange() {
      const channelId = RTCConnectionStore.getChannelId();
      state = RTCConnectionStore.getState();
      if (!tmp3) {
        obj2 = {};
        const merged = Object.assign(obj.state);
        obj2.channelId = channelId;
        obj2.connectionState = state;
        obj.handleUpdate(obj2);
      }
    };
    obj.handleMediaEngineStateChange = function handleMediaEngineStateChange() {
      const tmp = MediaEngineStore.isSelfMute() || MediaEngineStore.isSelfMutedTemporarily();
      const tmp2 = MediaEngineStore.isSelfDeaf() || MediaEngineStore.isDeaf();
      let tmp4 = obj.state.selfMute === tmp;
      const mode = obj.getMode();
      if (tmp4) {
        tmp4 = obj2.state.deafened === tmp2;
      }
      if (tmp4) {
        tmp4 = obj2.state.isPushToTalk === tmp5;
      }
      if (!tmp4) {
        const obj3 = {};
        const merged = Object.assign(obj2.state);
        obj3.selfMute = tmp;
        obj3.deafened = tmp2;
        obj3.isPushToTalk = tmp5;
        obj2.handleUpdate(obj3);
      }
    };
    obj.handleEmbeddedActivityStateChange = function handleEmbeddedActivityStateChange() {
      if (null != obj.state.channelId) {
        obj2 = {};
        const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
        const merged = Object.assign(obj.state);
        obj2.embeddedActivity = currentEmbeddedActivity;
        obj.handleUpdate(obj2);
      }
    };
    obj.handleApplicationStreamStateChange = function handleApplicationStreamStateChange() {
      const tmp = null != ApplicationStreamingStore.getCurrentUserActiveStream();
      if (obj.state.isStreaming !== tmp) {
        obj2 = {};
        const merged = Object.assign(obj.state);
        obj2.isStreaming = tmp;
        obj.handleUpdate(obj2);
      }
    };
    obj.getIcon = function getIcon(arg0) {
      ({ deafened, selfMute, isPushToTalk } = arg0);
      const ServiceNotificationIcon = obj(dependencyMap[12]).ServiceNotificationIcon;
      if (deafened) {
        const items = [ServiceNotificationIcon.DEAFENED, closure_1_14];
        let items3 = items;
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
      if (null != connectionState.connectionState) {
        let updateServiceHandlerResult = obj;
        [tmp4, tmp5] = obj.getIcon(obj.state);
        const tmp3 = _slicedToArray(obj.getIcon(obj.state), 2);
        [tmp7, tmp8] = obj.getIcon(connectionState);
        if (obj.state.channelId === connectionState.channelId) {
          if (updateServiceHandlerResult.state.connectionState === connectionState.connectionState) {
            if (updateServiceHandlerResult.state.selfMute === connectionState.selfMute) {
              if (updateServiceHandlerResult.state.deafened === connectionState.deafened) {
                const embeddedActivity = updateServiceHandlerResult.state.embeddedActivity;
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
                  if (updateServiceHandlerResult.state.isStreaming === connectionState.isStreaming) {
                    if (tmp4 === tmp7) {
                      if (tmp5 === tmp8) {
                        updateServiceHandlerResult.state = connectionState;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        const embeddedActivity3 = connectionState.embeddedActivity;
        updateServiceHandlerResult.state = connectionState;
        ({ connectionState, selfMute, deafened, isStreaming } = connectionState);
        const channel = ChannelStore.getChannel(connectionState.channelId);
        if (null != channel) {
          let tmp16 = importDefault;
          let updateServiceHandler = dependencyMap;
          let str2 = "";
          if (null != embeddedActivity3) {
            let applicationId;
            if (embeddedActivity3 != null) {
              applicationId = embeddedActivity3.applicationId;
            }
            const application = ApplicationStore.getApplication(applicationId);
            let name;
            if (application != null) {
              name = application.name;
            }
            const _HermesInternal = HermesInternal;
            str2 = " - " + tmp16(11194)(name);
            const tmp16Result = tmp16(11194);
          }
          const obj3 = RTCConnectionUtilsDefault;
          obj = { title: null, content: null, priority: null, contentAction: null, auxiliaryActions: null, type: null, usesGateway: true, icon: null, color: null };
          const channelName = obj2(4911).computeChannelName(channel, UserStore, RelationshipStore);
          const intl = obj2(1119).intl;
          const obj5 = { callState: obj3.getStatus(connectionState).connectionStatusText };
          obj.title = intl.formatToPlainString(obj2(1119).t["aUT3+M"], obj5);
          const _HermesInternal2 = HermesInternal;
          obj.content = "" + channelName + str2;
          obj.priority = obj2(8005).ServiceNotificationPriority.HIGH;
          obj.contentAction = updateServiceHandlerResult.createAction(channel, "SelectVoiceChannel", undefined);
          const intl2 = obj2(1119).intl;
          const items = [updateServiceHandlerResult.createAction(channel, "Disconnect", intl2.string(obj2(1119).t["6vrfgt"])), , ];
          const intl3 = obj2(1119).intl;
          const string = intl3.string;
          const t = obj2(1119).t;
          if (selfMute) {
            let stringResult = string(t.YqAjXy);
          } else {
            stringResult = string(t.w4m945);
          }
          items[1] = updateServiceHandlerResult.createAction(channel, "ToggleSelfMute", stringResult);
          const intl4 = tmp23(1119).intl;
          const string2 = intl4.string;
          const t2 = tmp23(1119).t;
          if (deafened) {
            let string2Result = string2(t2["2US872"]);
          } else {
            string2Result = string2(t2.wjcRFX);
          }
          items[2] = updateServiceHandlerResult.createAction(channel, "ToggleDeafen", string2Result);
          obj.auxiliaryActions = items;
          const ServiceNotificationType = tmp23(8005).ServiceNotificationType;
          obj.type = isStreaming ? ServiceNotificationType.SCREEN_SHARE : ServiceNotificationType.VOICE_CALL;
          obj.icon = tmp7;
          obj.color = tmp8;
          tmp16 = tmp16(8003);
          updateServiceHandler = tmp16.updateServiceHandler;
          updateServiceHandlerResult = updateServiceHandler(updateServiceHandlerResult.voiceServiceHandlerId, obj);
          const obj4 = obj2(4911);
        } else {
          obj2 = ForegroundServiceManagerDefault;
          obj2.removeServiceHandler(updateServiceHandlerResult.voiceServiceHandlerId);
        }
        const tmp6 = _slicedToArray(obj.getIcon(connectionState), 2);
      } else {
        obj.state = connectionState;
      }
    };
    obj.createAction = function createAction(channel, Disconnect, intl2) {
      return { tag: "" + Disconnect + channel.id, taskName: Disconnect, title: intl2, data: { channelId: channel.id } };
    };
    return obj;
  }
}
const prototype = VoiceNotificationManager.prototype;
prototype["initialize"] = function initialize() {
  RTCConnectionStore.addChangeListener(this.handleVoiceStateChange);
  MediaEngineStore.addChangeListener(this.handleMediaEngineStateChange);
  EmbeddedActivitiesStore.addChangeListener(this.handleEmbeddedActivityStateChange);
  ApplicationStreamingStore.addChangeListener(this.handleApplicationStreamStateChange);
};
prototype["terminate"] = function terminate() {
  RTCConnectionStore.removeChangeListener(this.handleVoiceStateChange);
  MediaEngineStore.removeChangeListener(this.handleMediaEngineStateChange);
  EmbeddedActivitiesStore.removeChangeListener(this.handleEmbeddedActivityStateChange);
  ApplicationStreamingStore.removeChangeListener(this.handleApplicationStreamStateChange);
};
obj2 = Object.create(VoiceNotificationManager.prototype);
obj2.voiceServiceHandlerId = 9000;
obj2.state = { channelId: "T", connectionState: "cursor", selfMute: false, deafened: "sun_with_face", isPushToTalk: "full_moon_with_face", embeddedActivity: 0.5, isStreaming: "M8 7H6v1h2V7Z" };
obj2.handleVoiceStateChange = function handleVoiceStateChange() {
  const channelId = RTCConnectionStore.getChannelId();
  state = RTCConnectionStore.getState();
  if (!tmp3) {
    obj2 = {};
    const merged = Object.assign(obj.state);
    obj2.channelId = channelId;
    obj2.connectionState = state;
    obj.handleUpdate(obj2);
  }
};
obj2.handleMediaEngineStateChange = function handleMediaEngineStateChange() {
  const tmp = MediaEngineStore.isSelfMute() || MediaEngineStore.isSelfMutedTemporarily();
  const tmp2 = MediaEngineStore.isSelfDeaf() || MediaEngineStore.isDeaf();
  let tmp4 = obj.state.selfMute === tmp;
  const mode = obj.getMode();
  if (tmp4) {
    tmp4 = obj2.state.deafened === tmp2;
  }
  if (tmp4) {
    tmp4 = obj2.state.isPushToTalk === tmp5;
  }
  if (!tmp4) {
    const obj3 = {};
    const merged = Object.assign(obj2.state);
    obj3.selfMute = tmp;
    obj3.deafened = tmp2;
    obj3.isPushToTalk = tmp5;
    obj2.handleUpdate(obj3);
  }
};
obj2.handleEmbeddedActivityStateChange = function handleEmbeddedActivityStateChange() {
  if (null != obj.state.channelId) {
    obj2 = {};
    const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
    const merged = Object.assign(obj.state);
    obj2.embeddedActivity = currentEmbeddedActivity;
    obj.handleUpdate(obj2);
  }
};
obj2.handleApplicationStreamStateChange = function handleApplicationStreamStateChange() {
  const tmp = null != ApplicationStreamingStore.getCurrentUserActiveStream();
  if (obj.state.isStreaming !== tmp) {
    obj2 = {};
    const merged = Object.assign(obj.state);
    obj2.isStreaming = tmp;
    obj.handleUpdate(obj2);
  }
};
obj2.getIcon = function getIcon(arg0) {
  ({ deafened, selfMute, isPushToTalk } = arg0);
  const ServiceNotificationIcon = obj(dependencyMap[12]).ServiceNotificationIcon;
  if (deafened) {
    const items = [ServiceNotificationIcon.DEAFENED, closure_1_14];
    let items3 = items;
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
obj2.handleUpdate = function handleUpdate(connectionState) {
  if (null != connectionState.connectionState) {
    let updateServiceHandlerResult = obj;
    [tmp4, tmp5] = obj.getIcon(obj.state);
    const tmp3 = _slicedToArray(obj.getIcon(obj.state), 2);
    [tmp7, tmp8] = obj.getIcon(connectionState);
    if (obj.state.channelId === connectionState.channelId) {
      if (updateServiceHandlerResult.state.connectionState === connectionState.connectionState) {
        if (updateServiceHandlerResult.state.selfMute === connectionState.selfMute) {
          if (updateServiceHandlerResult.state.deafened === connectionState.deafened) {
            const embeddedActivity = updateServiceHandlerResult.state.embeddedActivity;
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
              if (updateServiceHandlerResult.state.isStreaming === connectionState.isStreaming) {
                if (tmp4 === tmp7) {
                  if (tmp5 === tmp8) {
                    updateServiceHandlerResult.state = connectionState;
                  }
                }
              }
            }
          }
        }
      }
    }
    const embeddedActivity3 = connectionState.embeddedActivity;
    updateServiceHandlerResult.state = connectionState;
    ({ connectionState, selfMute, deafened, isStreaming } = connectionState);
    const channel = ChannelStore.getChannel(connectionState.channelId);
    if (null != channel) {
      let tmp16 = importDefault;
      let updateServiceHandler = dependencyMap;
      let str2 = "";
      if (null != embeddedActivity3) {
        let applicationId;
        if (embeddedActivity3 != null) {
          applicationId = embeddedActivity3.applicationId;
        }
        const application = ApplicationStore.getApplication(applicationId);
        let name;
        if (application != null) {
          name = application.name;
        }
        const _HermesInternal = HermesInternal;
        str2 = " - " + tmp16(11194)(name);
        const tmp16Result = tmp16(11194);
      }
      const obj3 = RTCConnectionUtilsDefault;
      obj = { title: null, content: null, priority: null, contentAction: null, auxiliaryActions: null, type: null, usesGateway: true, icon: null, color: null };
      const channelName = obj2(4911).computeChannelName(channel, UserStore, RelationshipStore);
      const intl = obj2(1119).intl;
      const obj5 = { callState: obj3.getStatus(connectionState).connectionStatusText };
      obj.title = intl.formatToPlainString(obj2(1119).t["aUT3+M"], obj5);
      const _HermesInternal2 = HermesInternal;
      obj.content = "" + channelName + str2;
      obj.priority = obj2(8005).ServiceNotificationPriority.HIGH;
      obj.contentAction = updateServiceHandlerResult.createAction(channel, "SelectVoiceChannel", undefined);
      const intl2 = obj2(1119).intl;
      const items = [updateServiceHandlerResult.createAction(channel, "Disconnect", intl2.string(obj2(1119).t["6vrfgt"])), , ];
      const intl3 = obj2(1119).intl;
      const string = intl3.string;
      const t = obj2(1119).t;
      if (selfMute) {
        let stringResult = string(t.YqAjXy);
      } else {
        stringResult = string(t.w4m945);
      }
      items[1] = updateServiceHandlerResult.createAction(channel, "ToggleSelfMute", stringResult);
      const intl4 = tmp23(1119).intl;
      const string2 = intl4.string;
      const t2 = tmp23(1119).t;
      if (deafened) {
        let string2Result = string2(t2["2US872"]);
      } else {
        string2Result = string2(t2.wjcRFX);
      }
      items[2] = updateServiceHandlerResult.createAction(channel, "ToggleDeafen", string2Result);
      obj.auxiliaryActions = items;
      const ServiceNotificationType = tmp23(8005).ServiceNotificationType;
      obj.type = isStreaming ? ServiceNotificationType.SCREEN_SHARE : ServiceNotificationType.VOICE_CALL;
      obj.icon = tmp7;
      obj.color = tmp8;
      tmp16 = tmp16(8003);
      updateServiceHandler = tmp16.updateServiceHandler;
      updateServiceHandlerResult = updateServiceHandler(updateServiceHandlerResult.voiceServiceHandlerId, obj);
      const obj4 = obj2(4911);
    } else {
      obj2 = ForegroundServiceManagerDefault;
      obj2.removeServiceHandler(updateServiceHandlerResult.voiceServiceHandlerId);
    }
    const tmp6 = _slicedToArray(obj.getIcon(connectionState), 2);
  } else {
    obj.state = connectionState;
  }
};
obj2.createAction = function createAction(channel, Disconnect, intl2) {
  return { tag: "" + Disconnect + channel.id, taskName: Disconnect, title: intl2, data: { channelId: channel.id } };
};
class VoiceNotificationLifecycleManager extends tmp3 {
}
const prototype2 = VoiceNotificationLifecycleManager.prototype;
prototype2["_initialize"] = function _initialize() {
  obj2.initialize();
};
prototype2["_terminate"] = function _terminate() {
  obj2.terminate();
};
const voiceNotificationLifecycleManager = new VoiceNotificationLifecycleManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/native/VoiceNotificationManager.android.tsx");

export default voiceNotificationLifecycleManager;
