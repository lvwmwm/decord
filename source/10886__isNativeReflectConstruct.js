// Module ID: 10886
// Function ID: 84632
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10886 (_isNativeReflectConstruct)
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
let tmp2 = (Store) => {
  class SpotifyProtocolStore {
    constructor() {
      self = this;
      tmp = SpotifyProtocolStore(this, SpotifyProtocolStore);
      obj = closure_3(SpotifyProtocolStore);
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
  let closure_0 = SpotifyProtocolStore;
  callback2(SpotifyProtocolStore, Store);
  const items = [
    {
      key: "isProtocolRegistered",
      value() {
        return closure_5;
      }
    }
  ];
  return callback(SpotifyProtocolStore, items);
}(importDefault(dependencyMap[5]).Store);
tmp2.displayName = "SpotifyProtocolStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
  SPOTIFY_SET_PROTOCOL_REGISTERED: function handleSetProtocolRegistered(isRegistered) {
    isRegistered = isRegistered.isRegistered;
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/spotify/SpotifyProtocolStore.tsx");

export default tmp2;
