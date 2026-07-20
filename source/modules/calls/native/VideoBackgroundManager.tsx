// Module ID: 7875
// Function ID: 62701
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7875 (_isNativeReflectConstruct)
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
let closure_5 = importDefault(dependencyMap[5]);
let tmp2 = (arg0) => {
  class VideoBackgroundManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_1(this, VideoBackgroundManager);
      items1 = [...items];
      obj = closure_3(VideoBackgroundManager);
      tmp2 = closure_2;
      if (closure_6()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, items1, closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      VideoBackgroundManager = tmp2Result;
      tmp2Result.previousSelectedVoiceChannelId = closure_5.getVoiceChannelId();
      tmp2Result.cachedDominantColors = {};
      tmp2Result._handleSelectVoiceChannel = (channelId) => {
        channelId = channelId.channelId;
        if (tmp2Result.previousSelectedVoiceChannelId !== channelId) {
          tmp2Result.cachedDominantColors = {};
        }
        tmp2Result.previousSelectedVoiceChannelId = channelId;
      };
      tmp2Result.actions = { VOICE_CHANNEL_SELECT: tmp2Result._handleSelectVoiceChannel };
      return tmp2Result;
    }
  }
  const callback = VideoBackgroundManager;
  callback2(VideoBackgroundManager, arg0);
  return callback(VideoBackgroundManager);
}(importDefault(dependencyMap[6]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/calls/native/VideoBackgroundManager.tsx");

export default tmp2;
