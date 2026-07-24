// Module ID: 13438
// Function ID: 103167
// Name: _isNativeReflectConstruct
// Dependencies: [15, 17, 18, 57, 6, 7, 27, 1347, 4167, 4149, 1348, 4177, 4202, 3767, 1849, 653, 689, 6999, 6998, 10797, 9118, 4320, 1212, 4530, 2]

// Module 13438 (_isNativeReflectConstruct)
import ME from "ME";
import ServiceNotificationPriority from "ServiceNotificationPriority";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import getActivityIndicator from "get ActivityIndicator";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { processColor } from "get ActivityIndicator";
import closure_9 from "_createForOfIteratorHelperLoose";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import { InputModes } from "ME";
import tmp4 from "LifecycleManager";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_18 = processColor(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_500);
let closure_19 = processColor(require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_NEW_46);
let tmp2 = (() => {
  class VoiceNotificationManager {
    constructor() {
      self = this;
      tmp = outer1_7(this, self);
      this.voiceServiceHandlerId = 9000;
      obj = { channelId: null, connectionState: null, selfMute: false, deafened: false, isPushToTalk: false, embeddedActivity: null, isStreaming: false };
      obj.channelId = undefined;
      obj.connectionState = undefined;
      obj.embeddedActivity = undefined;
      this.state = obj;
      this.handleVoiceStateChange = () => {
        const channelId = outer2_14.getChannelId();
        const state = outer2_14.getState();
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
        let isSelfMuteResult = outer2_13.isSelfMute();
        if (!isSelfMuteResult) {
          isSelfMuteResult = outer2_13.isSelfMutedTemporarily();
        }
        let isSelfDeafResult = outer2_13.isSelfDeaf();
        if (!isSelfDeafResult) {
          isSelfDeafResult = outer2_13.isDeaf();
        }
        const tmp5 = outer2_13.getMode() === outer2_17.PUSH_TO_TALK;
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
          const currentEmbeddedActivity = outer2_9.getCurrentEmbeddedActivity();
          const merged = Object.assign(self.state);
          obj["embeddedActivity"] = currentEmbeddedActivity;
          self.handleUpdate(obj);
        }
      };
      this.handleApplicationStreamStateChange = () => {
        const tmp = null != outer2_11.getCurrentUserActiveStream();
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
        const ServiceNotificationIcon = VoiceNotificationManager(outer2_2[17]).ServiceNotificationIcon;
        if (deafened) {
          const items = [ServiceNotificationIcon.DEAFENED, outer2_19];
          let items3 = items;
        } else if (selfMute) {
          const items1 = [ServiceNotificationIcon.MUTED, outer2_19];
          items3 = items1;
        } else if (isPushToTalk) {
          const items2 = [ServiceNotificationIcon.DEFAULT, outer2_18];
          items3 = items2;
        } else {
          items3 = [ServiceNotificationIcon.IDLE, outer2_18];
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
          [tmp5, tmp6] = outer2_6(self.getIcon(self.state), 2);
          const tmp4 = outer2_6(self.getIcon(self.state), 2);
          [tmp8, obj] = outer2_6(self.getIcon(connectionState), 2);
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
          const channel = outer2_12.getChannel(connectionState.channelId);
          if (null != channel) {
            let str2 = "";
            if (null != embeddedActivity3) {
              let applicationId;
              if (null != embeddedActivity3) {
                applicationId = embeddedActivity3.applicationId;
              }
              const application = outer2_10.getApplication(applicationId);
              let name;
              if (null != application) {
                name = application.name;
              }
              const _HermesInternal = HermesInternal;
              str2 = " - " + outer2_1(outer2_2[20])(name);
              const tmp28 = outer2_1(outer2_2[20]);
            }
            const obj3 = outer2_1(outer2_2[19]);
            obj = {};
            const channelName = VoiceNotificationManager(outer2_2[21]).computeChannelName(channel, outer2_16, outer2_15);
            const intl = VoiceNotificationManager(outer2_2[22]).intl;
            obj = { callState: obj3.getStatus(connectionState).connectionStatusText };
            obj.title = intl.formatToPlainString(VoiceNotificationManager(outer2_2[22]).t["aUT3+M"], obj);
            const _HermesInternal2 = HermesInternal;
            obj.content = "" + channelName + str2;
            obj.priority = VoiceNotificationManager(outer2_2[17]).ServiceNotificationPriority.HIGH;
            obj.contentAction = self.createAction(channel, "SelectVoiceChannel", undefined);
            const intl2 = VoiceNotificationManager(outer2_2[22]).intl;
            const items = [self.createAction(channel, "Disconnect", intl2.string(VoiceNotificationManager(outer2_2[22]).t["6vrfgt"])), , ];
            const intl3 = VoiceNotificationManager(outer2_2[22]).intl;
            const string = intl3.string;
            const t = VoiceNotificationManager(outer2_2[22]).t;
            if (selfMute) {
              let stringResult = string(t.YqAjXy);
            } else {
              stringResult = string(t.w4m945);
            }
            items[1] = self.createAction(channel, "ToggleSelfMute", stringResult);
            const intl4 = VoiceNotificationManager(outer2_2[22]).intl;
            const string2 = intl4.string;
            const t2 = VoiceNotificationManager(outer2_2[22]).t;
            if (deafened) {
              let string2Result = string2(t2["2US872"]);
            } else {
              string2Result = string2(t2.wjcRFX);
            }
            items[2] = self.createAction(channel, "ToggleDeafen", string2Result);
            obj.auxiliaryActions = items;
            const ServiceNotificationType = VoiceNotificationManager(outer2_2[17]).ServiceNotificationType;
            obj.type = isStreaming ? ServiceNotificationType.SCREEN_SHARE : ServiceNotificationType.VOICE_CALL;
            obj.usesGateway = true;
            obj.icon = tmp8;
            obj.color = obj;
            obj = outer2_1(outer2_2[18]);
            obj.updateServiceHandler(self.voiceServiceHandlerId, obj);
            const obj4 = VoiceNotificationManager(outer2_2[21]);
          } else {
            outer2_1(outer2_2[18]).removeServiceHandler(self.voiceServiceHandlerId);
            const obj2 = outer2_1(outer2_2[18]);
          }
          const tmp7 = outer2_6(self.getIcon(connectionState), 2);
        } else {
          self.state = connectionState;
        }
      };
      this.createAction = (channelId, taskName, title) => {
        obj = { tag: "" + taskName + channelId.id, taskName, title, data: obj };
        obj = { channelId: channelId.id };
        return obj;
      };
      return;
    }
  }
  let obj = {
    key: "initialize",
    value() {
      outer1_14.addChangeListener(this.handleVoiceStateChange);
      outer1_13.addChangeListener(this.handleMediaEngineStateChange);
      outer1_9.addChangeListener(this.handleEmbeddedActivityStateChange);
      outer1_11.addChangeListener(this.handleApplicationStreamStateChange);
    }
  };
  let items = [obj, ];
  obj = {
    key: "terminate",
    value() {
      outer1_14.removeChangeListener(this.handleVoiceStateChange);
      outer1_13.removeChangeListener(this.handleMediaEngineStateChange);
      outer1_9.removeChangeListener(this.handleEmbeddedActivityStateChange);
      outer1_11.removeChangeListener(this.handleApplicationStreamStateChange);
    }
  };
  items[1] = obj;
  return callback2(VoiceNotificationManager, items);
})();
tmp2 = new tmp2();
let closure_20 = tmp2;
tmp4 = new tmp4();
let result = require("_inherits").fileFinishedImporting("modules/voice_calls/native/VoiceNotificationManager.android.tsx");

export default tmp4;
