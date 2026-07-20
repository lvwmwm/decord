// Module ID: 12628
// Function ID: 97216
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12628 (_isNativeReflectConstruct)
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
const AUTO = arg1(dependencyMap[5]).VideoQualityMode.AUTO;
let tmp2 = (Store) => {
  class VideoQualityModeStore {
    constructor() {
      self = this;
      tmp = VideoQualityModeStore(this, VideoQualityModeStore);
      obj = closure_3(VideoQualityModeStore);
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
  let closure_0 = VideoQualityModeStore;
  callback2(VideoQualityModeStore, Store);
  const items = [
    {
      key: "mode",
      get() {
        return closure_5;
      }
    }
  ];
  return callback(VideoQualityModeStore, items);
}(importDefault(dependencyMap[6]).Store);
tmp2.displayName = "VideoQualityModeStore";
tmp2 = new tmp2(importDefault(dependencyMap[7]), {
  SET_CHANNEL_VIDEO_QUALITY_MODE: function handleSetChannelVideoQualityMode(mode) {
    const AUTO = mode.mode;
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("stores/VideoQualityModeStore.tsx");

export default tmp2;
