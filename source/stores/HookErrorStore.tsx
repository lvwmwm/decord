// Module ID: 4221
// Function ID: 36843
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 653, 566, 686, 2]

// Module 4221 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { MediaEngineHookTypes } from "ME";

function _isNativeReflectConstruct() {
  let initialize = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return initialize;
  }
  const result = _isNativeReflectConstruct();
}
let closure_6 = {};
let tmp2 = ((Store) => {
  class HookErrorStore {
    constructor() {
      self = this;
      tmp = HookErrorStore(this, HookErrorStore);
      obj = outer1_3(HookErrorStore);
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
  callback2(HookErrorStore, Store);
  const items = [
    {
      key: "getHookError",
      value(arg0) {
        return outer1_6[arg0];
      }
    }
  ];
  return callback(HookErrorStore, items);
})(require("initialize").Store);
tmp2.displayName = "HookErrorStore";
tmp2 = new tmp2(require("dispatcher"), {
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function handleSetGoLiveSource() {
    let closure_6 = {};
  },
  MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING: function handleSoundshareTransmitting() {
    delete tmp2[tmp];
  },
  MEDIA_ENGINE_SOUNDSHARE_FAILED: function handleSoundshareFailed(errorMessage) {
    closure_6[MediaEngineHookTypes.SOUND] = { errorMessage: errorMessage.errorMessage, errorCode: errorMessage.errorCode };
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/HookErrorStore.tsx");

export default tmp2;
