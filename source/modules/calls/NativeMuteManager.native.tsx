// Module ID: 12796
// Function ID: 99573
// Name: NativeMuteManager
// Dependencies: [6, 7, 8876, 4177, 3, 4015, 686, 8882, 4179, 2]

// Module 12796 (NativeMuteManager)
import dispatcher from "dispatcher";
import getInputDeviceName from "getInputDeviceName";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import importDefaultResult from "_isNativeReflectConstruct";

const require = arg1;
importDefaultResult = new importDefaultResult("NativeMuteManager");
importDefaultResult.enableNativeLogger(true);
let tmp4 = (() => {
  class NativeMuteManager {
    constructor() {
      self = this;
      tmp = outer1_3(this, self);
      this.ignoreForNativeUnmute = false;
      this.needToUnmuteNative = false;
      this.ignoreForAudioRouteChange = false;
      timeout = new NativeMuteManager(outer1_2[5]).Timeout();
      this.audioRouteChangeIgnoreTimer = timeout;
      this.AUDIO_ROUTE_CHANGE_IGNORE_DURATION_MS = 300;
      this.handleAudioRouteChange = () => {
        const audioRouteChangeIgnoreTimer = self.audioRouteChangeIgnoreTimer;
        if (audioRouteChangeIgnoreTimer.isStarted()) {
          const audioRouteChangeIgnoreTimer2 = self.audioRouteChangeIgnoreTimer;
          audioRouteChangeIgnoreTimer2.stop();
        }
        self.ignoreForAudioRouteChange = true;
        const audioRouteChangeIgnoreTimer3 = self.audioRouteChangeIgnoreTimer;
        audioRouteChangeIgnoreTimer3.start(self.AUDIO_ROUTE_CHANGE_IGNORE_DURATION_MS, () => {
          outer1_0.ignoreForAudioRouteChange = false;
        });
      };
      addChangeListenerResult = outer1_5.addChangeListener(this.handleAudioRouteChange);
      obj = outer1_1(outer1_2[6]);
      subscription = obj.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
      return;
    }
  }
  let obj = {
    key: "nativeMuteChanged",
    value() {
      const self = this;
      if (!outer1_6.hasActiveCallKitCall()) {
        if (self.ignoreForNativeUnmute) {
          self.ignoreForNativeUnmute = false;
        } else if (!self.ignoreForAudioRouteChange) {
          self.needToUnmuteNative = true;
          outer1_7.log("Native mute changed > toggling mute");
          let obj = outer1_1(outer1_2[7]);
          obj = { playSoundEffect: false };
          obj.toggleSelfMute(obj);
        }
      }
    }
  };
  const items = [obj, , ];
  obj = {
    key: "updateNativeMute",
    value() {
      const self = this;
      if (!outer1_6.hasActiveCallKitCall()) {
        if (self.needToUnmuteNative) {
          self.needToUnmuteNative = false;
          self.ignoreForNativeUnmute = true;
          outer1_7.log("Update native mute > unmuting native");
          const voiceEngine = NativeMuteManager(outer1_2[8]).getVoiceEngine();
          const setNativeMuteState = voiceEngine.setNativeMuteState;
          if (null != setNativeMuteState) {
            setNativeMuteState.call(voiceEngine, false);
          }
          const obj = NativeMuteManager(outer1_2[8]);
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "handleVoiceChannelSelect",
    value(channelId) {
      if (null == channelId.channelId) {
        outer1_7.log("Leaving voice channel > unmuting native");
        const voiceEngine = NativeMuteManager(outer1_2[8]).getVoiceEngine();
        const setNativeMuteState = voiceEngine.setNativeMuteState;
        if (null != setNativeMuteState) {
          setNativeMuteState.call(voiceEngine, false);
        }
        const obj = NativeMuteManager(outer1_2[8]);
      }
    }
  };
  items[2] = obj;
  return callback(NativeMuteManager, items);
})();
tmp4 = new tmp4();
let closure_8 = tmp4;
let tmp6 = (() => {
  class NativeMuteManagerWrapper {
    constructor() {
      tmp = outer1_3(this, NativeMuteManagerWrapper);
      return;
    }
  }
  let obj = {
    key: "nativeMuteChanged",
    value(arg0) {
      outer1_8.nativeMuteChanged(arg0);
    }
  };
  const items = [obj, ];
  obj = {
    key: "updateNativeMute",
    value() {
      outer1_8.updateNativeMute();
    }
  };
  items[1] = obj;
  return callback(NativeMuteManagerWrapper, items);
})();
tmp6 = new tmp6();
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/calls/NativeMuteManager.native.tsx");

export default tmp6;
