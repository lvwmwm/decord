// Module ID: 16906
// Function ID: 16907
// Name: VoiceNotificationManager
// Dependencies: [32, 17, 5154, 2165, 5173, 6820, 5155, 5177, 2133, 6071, 5248, 1388, 1072, 575, 8859, 8857, 13080, 10859, 5954, 1113, 16907, 15561, 2123, 2]

// Module 16906 (VoiceNotificationManager)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl4 from "intl" /* 1113 */;
import useChannelName from "useChannelName" /* 5954 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 8857 */;
import ForegroundServiceManagerTypes from "ForegroundServiceManagerTypes" /* 8859 */;
import getChannelCopyForEmbeddedActivityDefault from "getChannelCopyForEmbeddedActivity" /* 10859 */;
import RTCConnectionUtilsDefault from "RTCConnectionUtils" /* 13080 */;
import getChannelIcon from "getChannelIcon" /* 15561 */;
import AndroidCallWifiLockExperiment from "AndroidCallWifiLockExperiment" /* 16907 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_native from "react-native" /* 17 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 5154 */;
import ApplicationStore from "ApplicationStore" /* 2165 */;
import GuildRecord from "GuildRecord" /* 5173 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6820 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import GuildStore from "GuildStore" /* 5177 */;
import MediaEngineStore from "MediaEngineStore" /* 2133 */;
import RTCConnectionStore from "RTCConnectionStore" /* 6071 */;
import RelationshipStore from "RelationshipStore" /* 5248 */;
import UserStore from "UserStore" /* 1388 */;
import LifecycleManager from "LifecycleManager" /* 2123 */;
import size from "module_2" /* 2 */;

let closure_4;
let metroImportAll;
let metroImportDefault;
let processColor;
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
function createAction(channel, SelectVoiceChannel, stringResult) {
  obj = { tag: "" + SelectVoiceChannel + channel.id, taskName: SelectVoiceChannel, title: stringResult, data: { channelId: channel.id } };
  return obj;
}
({ Image: closure_4, processColor } = react_native);
({ getGuildAcronym: metroImportDefault, getGuildIconURL: metroImportAll } = GuildRecord);
const InputModes = Constants.InputModes;
let closure_17 = processColor(nativeDefault.unsafe_rawColors.BRAND_500);
let closure_18 = processColor(nativeDefault.unsafe_rawColors.RED_NEW_46);
class VoiceNotificationManager {
  constructor() {
    let createAction;
    obj = Object.create(new.target.prototype);
    obj.voiceServiceHandlerId = 9000;
    obj.state = { channelId: "s", connectionState: "container", selfMute: false, deafened: 0, isPushToTalk: 0, embeddedActivity: 0, isStreaming: 0 };
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
    obj.getIcon = function getIcon(state) {
      let deafened;
      let isPushToTalk;
      let items3;
      let selfMute;
      ({ deafened, selfMute, isPushToTalk } = state);
      const ServiceNotificationIcon = obj(dependencyMap[14]).ServiceNotificationIcon;
      if (deafened) {
        const items = [ServiceNotificationIcon.DEAFENED, closure_1_18];
        items3 = items;
      } else if (selfMute) {
        const items1 = [ServiceNotificationIcon.MUTED, closure_1_18];
        items3 = items1;
      } else if (isPushToTalk) {
        const items2 = [ServiceNotificationIcon.DEFAULT, closure_1_17];
        items3 = items2;
      } else {
        items3 = [ServiceNotificationIcon.IDLE, closure_1_17];
      }
      return items3;
    };
    obj.handleUpdate = function handleUpdate(connectionState) {
      let ServiceNotificationType;
      let createAction3;
      let deafened;
      let intl3;
      let isStreaming;
      let items;
      let obj5;
      let selfMute;
      let tmp24Result;
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
          const obj4 = { title: obj5.computeChannelName(channel, UserStore, RelationshipStore), content: "" + connectionStatusText + str2, priority: ForegroundServiceManagerTypes.ServiceNotificationPriority.HIGH, contentAction: obj.createAction(channel, "SelectVoiceChannel", undefined), auxiliaryActions: items, type: isStreaming ? ServiceNotificationType.SCREEN_SHARE : ServiceNotificationType.VOICE_CALL, usesGateway: true, icon: tmp7, color: tmp8, acquireWifiLock: tmp24Result.shouldAcquireCallWifiLock(), hangUpAction: createAction3(channel, "Disconnect", intl3.string(intl4.t["6vrfgt"])), callIcon: obj.getCallIcon(channel) };
          const _HermesInternal2 = HermesInternal;
          const createAction = obj.createAction;
          obj5 = useChannelName;
          const intl = intl4.intl;
          const string = intl.string;
          const t = intl4.t;
          if (selfMute) {
            stringResult = string(t.YqAjXy);
          } else {
            stringResult = string(t.w4m945);
          }
          items = [createAction(channel, "ToggleSelfMute", stringResult), ];
          const createAction2 = obj.createAction;
          const intl2 = tmp24(1113).intl;
          const string2 = intl2.string;
          const t2 = tmp24(1113).t;
          if (deafened) {
            string2Result = string2(t2["2US872"]);
          } else {
            string2Result = string2(t2.wjcRFX);
          }
          items[1] = createAction2(channel, "ToggleDeafen", string2Result);
          ServiceNotificationType = tmp24(8859).ServiceNotificationType;
          createAction3 = obj.createAction;
          tmp24Result = AndroidCallWifiLockExperiment;
          intl3 = tmp24(1113).intl;
          const tmp16Result2 = ForegroundServiceManagerDefault;
          tmp16Result2.updateServiceHandler(obj.voiceServiceHandlerId, obj4);
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
  getCallIcon(channel) {
    let channelIconURL;
    let tmp8;
    const guild = GuildStore.getGuild(channel.guild_id);
    if (null != guild) {
      channelIconURL = metroImportAll(guild, 128);
    } else {
      obj = getChannelIcon;
      channelIconURL = obj.getChannelIconURL(channel, 128);
    }
    let tmp6 = channelIconURL;
    if (typeof channelIconURL === "number") {
      const assetSource = React3.resolveAssetSource(channelIconURL);
      let uri;
      if (assetSource != null) {
        uri = assetSource.uri;
      }
      tmp6 = uri;
    }
    const obj2 = { url: tmp6, text: tmp8 };
    tmp8 = undefined;
    if (null != guild) {
      tmp8 = metroImportDefault(guild);
    }
    return obj2;
  }
}
const prototype = VoiceNotificationManager.prototype;
let obj = Object.create(VoiceNotificationManager.prototype);
obj.voiceServiceHandlerId = 9000;
obj.state = { channelId: "s", connectionState: "container", selfMute: false, deafened: 0, isPushToTalk: 0, embeddedActivity: 0, isStreaming: 0 };
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
obj.getIcon = function getIcon(state) {
  let deafened;
  let isPushToTalk;
  let items3;
  let selfMute;
  ({ deafened, selfMute, isPushToTalk } = state);
  const ServiceNotificationIcon = obj(dependencyMap[14]).ServiceNotificationIcon;
  if (deafened) {
    const items = [ServiceNotificationIcon.DEAFENED, closure_1_18];
    items3 = items;
  } else if (selfMute) {
    const items1 = [ServiceNotificationIcon.MUTED, closure_1_18];
    items3 = items1;
  } else if (isPushToTalk) {
    const items2 = [ServiceNotificationIcon.DEFAULT, closure_1_17];
    items3 = items2;
  } else {
    items3 = [ServiceNotificationIcon.IDLE, closure_1_17];
  }
  return items3;
};
obj.handleUpdate = function handleUpdate(connectionState) {
  let ServiceNotificationType;
  let createAction3;
  let deafened;
  let intl3;
  let isStreaming;
  let items;
  let obj5;
  let selfMute;
  let tmp24Result;
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
      const obj4 = { title: obj5.computeChannelName(channel, UserStore, RelationshipStore), content: "" + connectionStatusText + str2, priority: ForegroundServiceManagerTypes.ServiceNotificationPriority.HIGH, contentAction: obj.createAction(channel, "SelectVoiceChannel", undefined), auxiliaryActions: items, type: isStreaming ? ServiceNotificationType.SCREEN_SHARE : ServiceNotificationType.VOICE_CALL, usesGateway: true, icon: tmp7, color: tmp8, acquireWifiLock: tmp24Result.shouldAcquireCallWifiLock(), hangUpAction: createAction3(channel, "Disconnect", intl3.string(intl4.t["6vrfgt"])), callIcon: obj.getCallIcon(channel) };
      const _HermesInternal2 = HermesInternal;
      const createAction = obj.createAction;
      obj5 = useChannelName;
      const intl = intl4.intl;
      const string = intl.string;
      const t = intl4.t;
      if (selfMute) {
        stringResult = string(t.YqAjXy);
      } else {
        stringResult = string(t.w4m945);
      }
      items = [createAction(channel, "ToggleSelfMute", stringResult), ];
      const createAction2 = obj.createAction;
      const intl2 = tmp24(1113).intl;
      const string2 = intl2.string;
      const t2 = tmp24(1113).t;
      if (deafened) {
        string2Result = string2(t2["2US872"]);
      } else {
        string2Result = string2(t2.wjcRFX);
      }
      items[1] = createAction2(channel, "ToggleDeafen", string2Result);
      ServiceNotificationType = tmp24(8859).ServiceNotificationType;
      createAction3 = obj.createAction;
      tmp24Result = AndroidCallWifiLockExperiment;
      intl3 = tmp24(1113).intl;
      const tmp16Result2 = ForegroundServiceManagerDefault;
      tmp16Result2.updateServiceHandler(obj.voiceServiceHandlerId, obj4);
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
