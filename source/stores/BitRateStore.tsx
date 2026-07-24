// Module ID: 4200
// Function ID: 36085
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4191, 566, 686, 2]

// Module 4200 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { DEFAULT_VOICE_BITRATE } from "DesktopSources";

function _isNativeReflectConstruct() {
  let initialize = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return initialize;
  }
  const result = _isNativeReflectConstruct();
}
let tmp2 = ((Store) => {
  class BitRateStore {
    constructor() {
      self = this;
      tmp = BitRateStore(this, BitRateStore);
      obj = outer1_3(BitRateStore);
      tmp2 = outer1_2;
      if (outer1_6()) {
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
  callback2(BitRateStore, Store);
  const items = [
    {
      key: "bitrate",
      get() {
        return outer1_5;
      }
    }
  ];
  return callback(BitRateStore, items);
})(require("initialize").Store);
tmp2.displayName = "BitRateStore";
tmp2 = new tmp2(require("dispatcher"), {
  SET_CHANNEL_BITRATE: function handleSetChannelBitrate(bitrate) {
    bitrate = bitrate.bitrate;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/BitRateStore.tsx");

export default tmp2;
