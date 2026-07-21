// Module ID: 13341
// Function ID: 101416
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 13341 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function pauseCurrentAudioPlayer(arg0) {
  if (obj.isAndroid()) {
    importDefault(dependencyMap[9]).pauseCurrentPlayer(arg0);
    const obj2 = importDefault(dependencyMap[9]);
  } else {
    const DCDAudioPlayerManager = closure_9.DCDAudioPlayerManager;
    if (null != DCDAudioPlayerManager) {
      DCDAudioPlayerManager.pauseCurrentPlayer(arg0);
    }
  }
}
function playCurrentAudioPlayer() {
  if (obj.isAndroid()) {
    const result = importDefault(dependencyMap[9]).maybePlayCurrentPlayer();
    const obj2 = importDefault(dependencyMap[9]);
  } else {
    const DCDAudioPlayerManager = closure_9.DCDAudioPlayerManager;
    if (null != DCDAudioPlayerManager) {
      const result1 = DCDAudioPlayerManager.maybePlayCurrentPlayer();
    }
  }
}
function handleVoiceMessageDeleted(arg0) {
  if (obj.isAndroid()) {
    const result = importDefault(dependencyMap[9]).handleVoiceMessageDeleted(arg0);
    const obj2 = importDefault(dependencyMap[9]);
  } else {
    const DCDAudioPlayerManager = closure_9.DCDAudioPlayerManager;
    if (null != DCDAudioPlayerManager) {
      const result1 = DCDAudioPlayerManager.handleVoiceMessageDeleted(arg0);
    }
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ AppState: closure_8, NativeModules: closure_9 } = arg1(dependencyMap[5]));
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
let tmp3 = (arg0) => {
  class VoiceMessagesPlaybackManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, VoiceMessagesPlaybackManager);
      items1 = [...items];
      obj = closure_6(VoiceMessagesPlaybackManager);
      tmp2 = closure_5;
      if (closure_12()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      VoiceMessagesPlaybackManager = tmp2Result;
      tmp2Result.appState = closure_8.currentState;
      tmp2Result.handleSetPrefersReducedMotion = (prefersReducedMotion) => {
        const obj = tmp2Result(closure_2[8]);
        if (obj.isAndroid()) {
          const result = callback(closure_2[10]).handleSetPrefersReducedMotion(prefersReducedMotion.prefersReducedMotion);
          const obj2 = callback(closure_2[10]);
        } else {
          const DCDAccessibilityManager = obj.DCDAccessibilityManager;
          const result1 = DCDAccessibilityManager.handleSetPrefersReducedMotion(prefersReducedMotion.prefersReducedMotion);
        }
      };
      tmp2Result.handleMessageDelete = (arg0) => {
        let channelId;
        let id;
        ({ id, channelId } = arg0);
        const tmp = channelId === currentlySelectedChannelId.getCurrentlySelectedChannelId();
        if (tmp2) {
          if (null != callback4) {
            callback4(id);
          }
        }
      };
      tmp2Result.handleLogout = () => {
        callback2(false);
      };
      tmp2Result.handleAppStateChanged = (state) => {
        state = state.state;
        if (obj.isAndroid()) {
          const appState = tmp2Result.appState;
          tmp2Result.appState = state;
          if ("active" === state) {
            if ("active" !== appState) {
              callback3();
            }
          }
          if (tmp2) {
            callback2(true);
          }
          const tmp2 = "active" !== state && "active" === appState;
        }
      };
      return tmp2Result;
    }
  }
  const arg1 = VoiceMessagesPlaybackManager;
  callback2(VoiceMessagesPlaybackManager, arg0);
  let obj = {
    key: "_terminate",
    value() {
      callback(closure_2[11]).unsubscribe("LOGOUT", this.handleLogout);
      const obj = callback(closure_2[11]);
      callback(closure_2[11]).unsubscribe("MESSAGE_DELETE", this.handleMessageDelete);
      const obj2 = callback(closure_2[11]);
      callback(closure_2[11]).unsubscribe("APP_STATE_UPDATE", this.handleAppStateChanged);
      const obj3 = callback(closure_2[11]);
      callback(closure_2[11]).unsubscribe("ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION", this.handleSetPrefersReducedMotion);
    }
  };
  const items = [obj, ];
  obj = {
    key: "_initialize",
    value() {
      let obj = callback(closure_2[11]);
      const subscription = obj.subscribe("LOGOUT", this.handleLogout);
      const subscription1 = callback(closure_2[11]).subscribe("MESSAGE_DELETE", this.handleMessageDelete);
      const obj2 = callback(closure_2[11]);
      const subscription2 = callback(closure_2[11]).subscribe("APP_STATE_UPDATE", this.handleAppStateChanged);
      const obj3 = callback(closure_2[11]);
      const subscription3 = callback(closure_2[11]).subscribe("ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION", this.handleSetPrefersReducedMotion);
      obj = { type: "ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION", prefersReducedMotion: obj.rawPrefersReducedMotion };
      const result = this.handleSetPrefersReducedMotion(obj);
    }
  };
  items[1] = obj;
  return callback(VoiceMessagesPlaybackManager, items);
}(importDefault(dependencyMap[12]));
tmp3 = new tmp3();
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/voice_messages/native/VoiceMessagesPlaybackManager.tsx");

export default tmp3;
export { pauseCurrentAudioPlayer };
export { playCurrentAudioPlayer };
export { handleVoiceMessageDeleted };
