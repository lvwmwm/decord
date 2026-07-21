// Module ID: 15915
// Function ID: 121931
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15915 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
const isStaticChannelRoute = arg1(dependencyMap[6]).isStaticChannelRoute;
let tmp2 = (arg0) => {
  class ForumManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_2(this, ForumManager);
      items1 = [...items];
      obj = closure_5(ForumManager);
      tmp2 = closure_4;
      if (closure_9()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.actions = { CHANNEL_PRELOAD: tmp2Result.handleChannelPreload };
      return tmp2Result;
    }
  }
  const arg1 = ForumManager;
  callback2(ForumManager, arg0);
  const items = [
    {
      key: "handleChannelPreload",
      value(channelId) {
        channelId = channelId.channelId;
        if (!callback3(channelId)) {
          const channel = channel.getChannel(channelId);
          if (tmp3) {
            ForumManager(closure_1[7]).preloadForumThreads(channel);
            const obj2 = ForumManager(closure_1[7]);
          }
          const tmp3 = null != channel && channel.isForumLikeChannel();
        }
      }
    }
  ];
  return callback(ForumManager, items);
}(importDefault(dependencyMap[8]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/forums/ForumManager.tsx");

export default tmp2;
