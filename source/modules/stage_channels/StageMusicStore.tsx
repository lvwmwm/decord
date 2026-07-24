// Module ID: 10675
// Function ID: 83322
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 10675 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let dispatcher = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return dispatcher;
  }
  const result = _isNativeReflectConstruct();
}
let c5 = false;
let c6 = false;
let tmp2 = ((DeviceSettingsStore) => {
  class StageMusicStore {
    constructor() {
      self = this;
      tmp = StageMusicStore(this, StageMusicStore);
      obj = outer1_3(StageMusicStore);
      tmp2 = outer1_2;
      if (outer1_7()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(StageMusicStore, DeviceSettingsStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      if (null != arg0) {
        const outer1_5 = arg0;
      }
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "isMuted",
    value() {
      return outer1_5;
    }
  };
  items[1] = obj;
  obj = {
    key: "shouldPlay",
    value() {
      return outer1_6;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getUserAgnosticState",
    value() {
      return outer1_5;
    }
  };
  return callback(StageMusicStore, items);
})(require("initialize").DeviceSettingsStore);
tmp2.displayName = "StageMusicStore";
tmp2.persistKey = "StageMusicStore";
tmp2 = new tmp2(require("dispatcher"), {
  STAGE_MUSIC_MUTE: function handleMute(muted) {
    muted = muted.muted;
    let c6 = false;
  },
  STAGE_MUSIC_PLAY: function handlePlay(play) {
    play = play.play;
  },
  VOICE_CHANNEL_SELECT: function handleConnect() {
    let c6 = false;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/stage_channels/StageMusicStore.tsx");

export default tmp2;
