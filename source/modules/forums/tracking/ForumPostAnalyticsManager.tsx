// Module ID: 7010
// Function ID: 56249
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7010 (_isNativeReflectConstruct)
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
let closure_10 = importDefault(dependencyMap[7]);
let tmp2 = (arg0) => {
  class ForumPostAnalyticsManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, ForumPostAnalyticsManager);
      items1 = [...items];
      obj = closure_6(ForumPostAnalyticsManager);
      tmp2 = closure_5;
      if (closure_11()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      ForumPostAnalyticsManager = tmp2Result;
      tmp2Result.readStateSnapshots = {};
      tmp2Result.actions = {
        CHANNEL_SELECT(arg0) {
              return tmp2Result.handleChannelSelect(arg0);
            },
        THREAD_CREATE(arg0) {
              return tmp2Result.handleThreadCreate(arg0);
            }
      };
      tmp2Result.handleChannelSelect = (channelId) => {
        channelId = channelId.channelId;
        if (null != channelId) {
          const channel = channel.getChannel(channelId);
          if (tmp2) {
            tmp2Result.readStateSnapshots = {};
            tmp2Result.processForumChannel(channel.guild_id, channelId);
          }
          const tmp2 = null != channel && channel.isForumLikeChannel();
        }
      };
      tmp2Result.processForumChannel = (arg0, arg1) => {
        const threadsForParent = threadsForParent.getThreadsForParent(arg0, arg1);
        const keys = callback(closure_2[8]).keys(threadsForParent);
        const item = keys.forEach((channelId) => {
          const forumPostReadStatesById = lib(closure_2[9]).getForumPostReadStatesById(channelId);
          if (null != forumPostReadStatesById) {
            lib.readStateSnapshots[channelId] = forumPostReadStatesById;
          }
        });
      };
      tmp2Result.getReadStateSnapshotAnalytics = (arg0) => tmp2Result.readStateSnapshots[arg0];
      return tmp2Result;
    }
  }
  const arg1 = ForumPostAnalyticsManager;
  callback2(ForumPostAnalyticsManager, arg0);
  const items = [
    {
      key: "handleThreadCreate",
      value(channel) {
        channel = channel.channel;
        if (channel.isForumPost()) {
          const self = this;
          const obj = {};
          const tmp2 = channel.ownerId !== id.getId();
          obj.isNew = tmp2;
          obj.hasUnreads = tmp2;
          this.readStateSnapshots[channel.id] = obj;
        }
      }
    }
  ];
  return callback(ForumPostAnalyticsManager, items);
}(importDefault(dependencyMap[10]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/forums/tracking/ForumPostAnalyticsManager.tsx");

export default tmp2;
