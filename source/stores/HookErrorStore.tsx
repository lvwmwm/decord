// Module ID: 4217
// Function ID: 36803
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4217 (_isNativeReflectConstruct)
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
const MediaEngineHookTypes = arg1(dependencyMap[5]).MediaEngineHookTypes;
let closure_6 = {};
let tmp2 = (Store) => {
  class HookErrorStore {
    constructor() {
      self = this;
      tmp = HookErrorStore(this, HookErrorStore);
      obj = closure_3(HookErrorStore);
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
  let closure_0 = HookErrorStore;
  callback2(HookErrorStore, Store);
  const items = [
    {
      key: "getHookError",
      value(arg0) {
        return closure_6[arg0];
      }
    }
  ];
  return callback(HookErrorStore, items);
}(importDefault(dependencyMap[6]).Store);
tmp2.displayName = "HookErrorStore";
tmp2 = new tmp2(importDefault(dependencyMap[7]), {
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function handleSetGoLiveSource() {
    let closure_6 = {};
  },
  MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING: function handleSoundshareTransmitting() {
    delete r1[r0];
  },
  MEDIA_ENGINE_SOUNDSHARE_FAILED: function handleSoundshareFailed(errorMessage) {
    closure_6[MediaEngineHookTypes.SOUND] = { errorMessage: errorMessage.errorMessage, errorCode: errorMessage.errorCode };
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("stores/HookErrorStore.tsx");

export default tmp2;
