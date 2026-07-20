// Module ID: 12617
// Function ID: 97023
// Name: NativeMuteManager
// Dependencies: []

// Module 12617 (NativeMuteManager)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let importDefaultResult = importDefault(dependencyMap[4]);
importDefaultResult = new importDefaultResult("NativeMuteManager");
importDefaultResult.enableNativeLogger(true);
let tmp4 = () => {
  class NativeMuteManager {
    constructor() {
      NativeMuteManager = this;
      tmp = closure_3(this, NativeMuteManager);
      this.ignoreForNativeUnmute = false;
      this.needToUnmuteNative = false;
      this.ignoreForAudioRouteChange = false;
      timeout = new NativeMuteManager(closure_2[5]).Timeout();
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
          closure_0.ignoreForAudioRouteChange = false;
        });
      };
      addChangeListenerResult = closure_5.addChangeListener(this.handleAudioRouteChange);
      obj = closure_1(closure_2[6]);
      subscription = obj.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
      return;
    }
  }
  const arg1 = NativeMuteManager;
  let obj = {
    key: "nativeMuteChanged",
    value() {
      const self = this;
      if (!closure_6.hasActiveCallKitCall()) {
        if (self.ignoreForNativeUnmute) {
          self.ignoreForNativeUnmute = false;
        } else if (!self.ignoreForAudioRouteChange) {
          self.needToUnmuteNative = true;
          closure_7.log("Native mute changed > toggling mute");
          let obj = callback(closure_2[7]);
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
      if (!closure_6.hasActiveCallKitCall()) {
        if (self.needToUnmuteNative) {
          self.needToUnmuteNative = false;
          self.ignoreForNativeUnmute = true;
          closure_7.log("Update native mute > unmuting native");
          const voiceEngine = NativeMuteManager(closure_2[8]).getVoiceEngine();
          const setNativeMuteState = voiceEngine.setNativeMuteState;
          if (null != setNativeMuteState) {
            setNativeMuteState.call(voiceEngine, false);
          }
          const obj = NativeMuteManager(closure_2[8]);
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "handleVoiceChannelSelect",
    value(channelId) {
      if (null == channelId.channelId) {
        closure_7.log("Leaving voice channel > unmuting native");
        const voiceEngine = NativeMuteManager(closure_2[8]).getVoiceEngine();
        const setNativeMuteState = voiceEngine.setNativeMuteState;
        if (null != setNativeMuteState) {
          setNativeMuteState.call(voiceEngine, false);
        }
        const obj = NativeMuteManager(closure_2[8]);
      }
    }
  };
  items[2] = obj;
  return callback(NativeMuteManager, items);
}();
tmp4 = new tmp4();
let tmp6 = () => {
  class NativeMuteManagerWrapper {
    constructor() {
      tmp = closure_3(this, NativeMuteManagerWrapper);
      return;
    }
  }
  const arg1 = NativeMuteManagerWrapper;
  let obj = {
    key: "nativeMuteChanged",
    value(arg0) {
      closure_8.nativeMuteChanged(arg0);
    }
  };
  const items = [obj, ];
  obj = {
    key: "updateNativeMute",
    value() {
      closure_8.updateNativeMute();
    }
  };
  items[1] = obj;
  return callback(NativeMuteManagerWrapper, items);
}();
tmp6 = new tmp6();
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/calls/NativeMuteManager.native.tsx");

export default tmp6;
