// Module ID: 10607
// Function ID: 82736
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10607 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let tmp2 = (arg0) => {
  class ChannelCallModalManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, ChannelCallModalManager);
      items1 = [...items];
      obj = closure_6(ChannelCallModalManager);
      tmp2 = closure_5;
      if (closure_10()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      ChannelCallModalManager = tmp2Result;
      tmp2Result.inVoiceChannel = false;
      tmp2Result.handleCloseModal = () => {
        const channel = tmp2Result.channel;
        const currentUser = currentUser.getCurrentUser();
        let isInChannelResult = null != channel && null != currentUser;
        if (isInChannelResult) {
          isInChannelResult = inChannel.isInChannel(channel.id, currentUser.id);
        }
        let inVoiceChannel = null != channel;
        if (inVoiceChannel) {
          inVoiceChannel = tmp2Result.inVoiceChannel;
        }
        if (inVoiceChannel) {
          inVoiceChannel = tmp2Result.inVoiceChannel !== isInChannelResult;
        }
        if (inVoiceChannel) {
          callback(closure_2[7]).wait(() => {
            const result = channel(closure_2[8]).dismissVoiceChannelScreens(channel);
          });
          tmp2Result.terminate();
          const obj = callback(closure_2[7]);
        }
        channel.inVoiceChannel = isInChannelResult;
      };
      return tmp2Result;
    }
  }
  const arg1 = ChannelCallModalManager;
  callback2(ChannelCallModalManager, arg0);
  let obj = {
    key: "_initialize",
    value(channel) {
      const self = this;
      this.channel = channel;
      const currentUser = currentUser.getCurrentUser();
      let isInChannelResult = null != channel && null != currentUser;
      if (isInChannelResult) {
        isInChannelResult = closure_9.isInChannel(channel.id, currentUser.id);
      }
      self.inVoiceChannel = isInChannelResult;
      closure_9.addChangeListener(self.handleCloseModal);
    }
  };
  const items = [obj, ];
  obj = {
    key: "_terminate",
    value() {
      closure_9.removeChangeListener(this.handleCloseModal);
    }
  };
  items[1] = obj;
  return callback(ChannelCallModalManager, items);
}(importDefault(dependencyMap[9]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/video_calls/native/components/ChannelCallModalManager.tsx");

export default tmp2;
