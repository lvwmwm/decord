// Module ID: 4196
// Function ID: 36052
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4196 (_isNativeReflectConstruct)
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
const DEFAULT_VOICE_BITRATE = arg1(dependencyMap[5]).DEFAULT_VOICE_BITRATE;
let tmp2 = (Store) => {
  class BitRateStore {
    constructor() {
      self = this;
      tmp = BitRateStore(this, BitRateStore);
      obj = closure_3(BitRateStore);
      tmp2 = closure_2;
      if (closure_6()) {
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
  let closure_0 = BitRateStore;
  callback2(BitRateStore, Store);
  const items = [
    {
      key: "bitrate",
      get() {
        return closure_5;
      }
    }
  ];
  return callback(BitRateStore, items);
}(importDefault(dependencyMap[6]).Store);
tmp2.displayName = "BitRateStore";
tmp2 = new tmp2(importDefault(dependencyMap[7]), {
  SET_CHANNEL_BITRATE: function handleSetChannelBitrate(bitrate) {
    const DEFAULT_VOICE_BITRATE = bitrate.bitrate;
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("stores/BitRateStore.tsx");

export default tmp2;
