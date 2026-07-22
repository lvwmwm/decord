// Module ID: 16378
// Function ID: 126377
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16378 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function checkChannelOpened() {
  const channelId = channelId.getChannelId();
  if (null != channelId) {
    const state = state.getState();
    const channels = state.channels;
    if (!channels.has(channelId)) {
      state.openChannel(channelId);
    }
  }
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[5]);
let closure_6 = importDefault(dependencyMap[6]);
let tmp2 = (arg0) => {
  class VoicePanelManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_1(this, VoicePanelManager);
      items1 = [...items];
      obj = closure_3(VoicePanelManager);
      tmp2 = closure_2;
      if (closure_7()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, items1, closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.actions = {
        VOICE_CHANNEL_SELECT() {
              callback();
            },
        RTC_CONNECTION_STATE() {
              callback();
            }
      };
      return tmp2Result;
    }
  }
  const callback = VoicePanelManager;
  callback2(VoicePanelManager, arg0);
  return callback(VoicePanelManager);
}(importDefault(dependencyMap[7]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/voice_panel/VoicePanelManager.native.tsx");

export default tmp2;
