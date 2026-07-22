// Module ID: 13271
// Function ID: 100684
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 13271 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const processColor = arg1(dependencyMap[6]).processColor;
let closure_9 = importDefault(dependencyMap[7]);
let closure_10 = importDefault(dependencyMap[8]);
let closure_11 = importDefault(dependencyMap[9]);
let closure_12 = importDefault(dependencyMap[10]);
let closure_13 = importDefault(dependencyMap[11]);
let closure_14 = importDefault(dependencyMap[12]);
let closure_15 = importDefault(dependencyMap[13]);
let closure_16 = importDefault(dependencyMap[14]);
const InputModes = arg1(dependencyMap[15]).InputModes;
let closure_18 = processColor(importDefault(dependencyMap[16]).unsafe_rawColors.BRAND_500);
let closure_19 = processColor(importDefault(dependencyMap[16]).unsafe_rawColors.RED_NEW_46);
let tmp2 = () => {
  class VoiceNotificationManager {
    constructor() {
      VoiceNotificationManager = this;
      tmp = closure_7(this, VoiceNotificationManager);
      this.voiceServiceHandlerId = 9000;
      obj = { "Bool(false)": "sm", "Bool(false)": null, "Bool(false)": "numeric", "Bool(false)": null, "Bool(false)": "ms", "Bool(false)": true, "Bool(false)": false };
      obj.channelId = undefined;
      obj.connectionState = undefined;
      obj.embeddedActivity = undefined;
      this.state = obj;
      this.handleVoiceStateChange = () => {
        const channelId = store.getChannelId();
        const state = store.getState();
        let tmp3 = self.state.channelId === channelId;
        if (tmp3) {
          tmp3 = self.state.connectionState === state;
        }
        if (!tmp3) {
          const obj = {};
          const merged = Object.assign(self.state);
          obj["channelId"] = channelId;
          obj["connectionState"] = state;
          self.handleUpdate(obj);
        }
      };
      this.handleMediaEngineStateChange = () => {
        let isSelfMuteResult = closure_13.isSelfMute();
        if (!isSelfMuteResult) {
          isSelfMuteResult = closure_13.isSelfMutedTemporarily();
        }
        let isSelfDeafResult = closure_13.isSelfDeaf();
        if (!isSelfDeafResult) {
          isSelfDeafResult = closure_13.isDeaf();
        }
        const tmp5 = closure_13.getMode() === constants.PUSH_TO_TALK;
        let tmp6 = self.state.selfMute === isSelfMuteResult;
        if (tmp6) {
          tmp6 = self.state.deafened === isSelfDeafResult;
        }
        if (tmp6) {
          tmp6 = self.state.isPushToTalk === tmp5;
        }
        if (!tmp6) {
          const obj = {};
          const merged = Object.assign(self.state);
          obj["selfMute"] = isSelfMuteResult;
          obj["deafened"] = isSelfDeafResult;
          obj["isPushToTalk"] = tmp5;
          self.handleUpdate(obj);
        }
      };
      this.handleEmbeddedActivityStateChange = () => {
        if (null != self.state.channelId) {
          const obj = {};
          const currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
          const merged = Object.assign(self.state);
          obj["embeddedActivity"] = currentEmbeddedActivity;
          self.handleUpdate(obj);
        }
      };
      this.handleApplicationStreamStateChange = () => {
        const tmp = null != currentUserActiveStream.getCurrentUserActiveStream();
        if (self.state.isStreaming !== tmp) {
          const obj = {};
          const merged = Object.assign(self.state);
          obj["isStreaming"] = tmp;
          self.handleUpdate(obj);
        }
      };
      this.getIcon = (arg0) => {
        let deafened;
        let isPushToTalk;
        let selfMute;
        ({ deafened, selfMute, isPushToTalk } = arg0);
        const ServiceNotificationIcon = self(closure_2[17]).ServiceNotificationIcon;
        if (deafened) {
          const items = [ServiceNotificationIcon.DEAFENED, closure_19];
          let items3 = items;
        } else if (selfMute) {
          const items1 = [ServiceNotificationIcon.MUTED, closure_19];
          items3 = items1;
        } else if (isPushToTalk) {
          const items2 = [ServiceNotificationIcon.DEFAULT, closure_18];
          items3 = items2;
        } else {
          items3 = [ServiceNotificationIcon.IDLE, closure_18];
        }
        return items3;
      };
      this.handleUpdate = (connectionState) => {
        let deafened;
        let isStreaming;
        let obj;
        let selfMute;
        let tmp5;
        let tmp6;
        let tmp8;
        if (null != connectionState.connectionState) {
          [tmp5, tmp6] = callback2(self.getIcon(self.state), 2);
          const tmp4 = callback2(self.getIcon(self.state), 2);
          [tmp8, obj] = callback2(self.getIcon(connectionState), 2);
          if (self.state.channelId === connectionState.channelId) {
            if (self.state.connectionState === connectionState.connectionState) {
              if (self.state.selfMute === connectionState.selfMute) {
                if (self.state.deafened === connectionState.deafened) {
                  const embeddedActivity = self.state.embeddedActivity;
                  let compositeInstanceId;
                  if (null != embeddedActivity) {
                    compositeInstanceId = embeddedActivity.compositeInstanceId;
                  }
                  const embeddedActivity2 = connectionState.embeddedActivity;
                  let compositeInstanceId1;
                  if (null != embeddedActivity2) {
                    compositeInstanceId1 = embeddedActivity2.compositeInstanceId;
                  }
                  if (compositeInstanceId === compositeInstanceId1) {
                    if (self.state.isStreaming === connectionState.isStreaming) {
                      if (tmp5 === tmp8) {
                        if (tmp6 === obj) {
                          self.state = connectionState;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          const embeddedActivity3 = connectionState.embeddedActivity;
          self.state = connectionState;
          ({ connectionState, selfMute, deafened, isStreaming } = connectionState);
          const channel = channel.getChannel(connectionState.channelId);
          if (null != channel) {
            let str2 = "";
            if (null != embeddedActivity3) {
              let applicationId;
              if (null != embeddedActivity3) {
                applicationId = embeddedActivity3.applicationId;
              }
              const application = application.getApplication(applicationId);
              let name;
              if (null != application) {
                name = application.name;
              }
              const _HermesInternal = HermesInternal;
              str2 = " - " + callback(closure_2[20])(name);
              const tmp28 = callback(closure_2[20]);
            }
            const obj3 = callback(closure_2[19]);
            obj = {};
            const channelName = self(closure_2[21]).computeChannelName(channel, closure_16, closure_15);
            const intl = self(closure_2[22]).intl;
            obj = { callState: obj3.getStatus(connectionState).connectionStatusText };
            obj.title = intl.formatToPlainString(self(closure_2[22]).t.aUT3+M, obj);
            const _HermesInternal2 = HermesInternal;
            obj.content = "" + channelName + str2;
            obj.priority = self(closure_2[17]).ServiceNotificationPriority.HIGH;
            obj.contentAction = self.createAction(channel, "SelectVoiceChannel", undefined);
            const intl2 = self(closure_2[22]).intl;
            const items = [self.createAction(channel, "Disconnect", intl2.string(self(closure_2[22]).t.6vrfgt)), , ];
            const intl3 = self(closure_2[22]).intl;
            const string = intl3.string;
            const t = self(closure_2[22]).t;
            if (selfMute) {
              let stringResult = string(t.YqAjXy);
            } else {
              stringResult = string(t.w4m945);
            }
            items[1] = self.createAction(channel, "ToggleSelfMute", stringResult);
            const intl4 = self(closure_2[22]).intl;
            const string2 = intl4.string;
            const t2 = self(closure_2[22]).t;
            if (deafened) {
              let string2Result = string2(t2.2US872);
            } else {
              string2Result = string2(t2.wjcRFX);
            }
            items[2] = self.createAction(channel, "ToggleDeafen", string2Result);
            obj.auxiliaryActions = items;
            const ServiceNotificationType = self(closure_2[17]).ServiceNotificationType;
            obj.type = isStreaming ? ServiceNotificationType.SCREEN_SHARE : ServiceNotificationType.VOICE_CALL;
            obj.usesGateway = true;
            obj.icon = tmp8;
            obj.color = obj;
            obj = callback(closure_2[18]);
            obj.updateServiceHandler(self.voiceServiceHandlerId, obj);
            const obj4 = self(closure_2[21]);
          } else {
            callback(closure_2[18]).removeServiceHandler(self.voiceServiceHandlerId);
            const obj2 = callback(closure_2[18]);
          }
          const tmp7 = callback2(self.getIcon(connectionState), 2);
        } else {
          self.state = connectionState;
        }
      };
      this.createAction = (channelId, taskName, title) => {
        let obj = { tag: "" + taskName + channelId.id, taskName, title, data: obj };
        obj = { channelId: channelId.id };
        return obj;
      };
      return;
    }
  }
  const arg1 = VoiceNotificationManager;
  let obj = {
    key: "initialize",
    value() {
      closure_14.addChangeListener(this.handleVoiceStateChange);
      closure_13.addChangeListener(this.handleMediaEngineStateChange);
      closure_9.addChangeListener(this.handleEmbeddedActivityStateChange);
      closure_11.addChangeListener(this.handleApplicationStreamStateChange);
    }
  };
  const items = [obj, ];
  obj = {
    key: "terminate",
    value() {
      closure_14.removeChangeListener(this.handleVoiceStateChange);
      closure_13.removeChangeListener(this.handleMediaEngineStateChange);
      closure_9.removeChangeListener(this.handleEmbeddedActivityStateChange);
      closure_11.removeChangeListener(this.handleApplicationStreamStateChange);
    }
  };
  items[1] = obj;
  return callback2(VoiceNotificationManager, items);
}();
tmp2 = new tmp2();
let tmp4 = (arg0) => {
  class VoiceNotificationLifecycleManager {
    constructor() {
      self = this;
      tmp = closure_7(this, VoiceNotificationLifecycleManager);
      obj = closure_4(VoiceNotificationLifecycleManager);
      tmp2 = closure_3;
      if (closure_21()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_4;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_4(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = VoiceNotificationLifecycleManager;
  callback(VoiceNotificationLifecycleManager, arg0);
  let obj = {
    key: "_initialize",
    value() {
      closure_20.initialize();
    }
  };
  const items = [obj, ];
  obj = {
    key: "_terminate",
    value() {
      closure_20.terminate();
    }
  };
  items[1] = obj;
  return callback2(VoiceNotificationLifecycleManager, items);
}(importDefault(dependencyMap[23]));
tmp4 = new tmp4();
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/voice_calls/native/VoiceNotificationManager.android.tsx");

export default tmp4;
