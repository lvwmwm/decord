// Module ID: 10635
// Function ID: 83067
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10635 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = false;
let closure_6 = false;
let tmp2 = (DeviceSettingsStore) => {
  class StageMusicStore {
    constructor() {
      self = this;
      tmp = StageMusicStore(this, StageMusicStore);
      obj = closure_3(StageMusicStore);
      tmp2 = closure_2;
      if (closure_7()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = StageMusicStore;
  callback2(StageMusicStore, DeviceSettingsStore);
  let obj = {
    key: "initialize",
    value(arg0) {

    }
  };
  const items = [obj, , , ];
  obj = {
    key: "isMuted",
    value() {
      return closure_5;
    }
  };
  items[1] = obj;
  obj = {
    key: "shouldPlay",
    value() {
      return closure_6;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getUserAgnosticState",
    value() {
      return closure_5;
    }
  };
  return callback(StageMusicStore, items);
}(importDefault(dependencyMap[5]).DeviceSettingsStore);
tmp2.displayName = "StageMusicStore";
tmp2.persistKey = "StageMusicStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
  STAGE_MUSIC_MUTE: function handleMute(muted) {
    muted = muted.muted;
    let closure_6 = false;
  },
  STAGE_MUSIC_PLAY: function handlePlay(play) {
    play = play.play;
  },
  VOICE_CHANNEL_SELECT: function handleConnect() {
    let closure_6 = false;
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/stage_channels/StageMusicStore.tsx");

export default tmp2;
