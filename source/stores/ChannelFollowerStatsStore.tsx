// Module ID: 9848
// Function ID: 76242
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 9848 (_isNativeReflectConstruct)
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
let closure_5 = { FAILED: "failed", SUCCEEDED: "succeeded" };
let closure_6 = {};
let tmp2 = (Store) => {
  class ChannelFollowerStatsStore {
    constructor() {
      self = this;
      tmp = ChannelFollowerStatsStore(this, ChannelFollowerStatsStore);
      obj = closure_3(ChannelFollowerStatsStore);
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
  let closure_0 = ChannelFollowerStatsStore;
  callback2(ChannelFollowerStatsStore, Store);
  const items = [
    {
      key: "getFollowerStatsForChannel",
      value(arg0) {
        return closure_6[arg0];
      }
    }
  ];
  return callback(ChannelFollowerStatsStore, items);
}(importDefault(dependencyMap[5]).Store);
tmp2.displayName = "ChannelFollowerStatsStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_6 = {};
  },
  CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS: function handleFollowerStatsFetchSuccess(stats) {
    stats = stats.stats;
    if (null == stats) {
      stats = {};
    }
    ({ channels_following: obj2.channelsFollowing, guild_members: obj2.guildMembers, guilds_following: obj2.guildsFollowing, users_seen_ever: obj2.usersSeenEver, subscribers_gained_since_last_post: obj2.subscribersGainedSinceLastPost, subscribers_lost_since_last_post: obj2.subscribersLostSinceLastPost } = stats);
    closure_6[stats.channelId] = { loadingStatus: constants.SUCCEEDED, lastFetched: Date.now() };
  },
  CHANNEL_FOLLOWER_STATS_FETCH_FAILURE: function handleFollowerStatsFetchFailure(channelId) {
    closure_6[channelId.channelId] = { loadingStatus: constants.FAILED, lastFetched: Date.now() };
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("stores/ChannelFollowerStatsStore.tsx");

export default tmp2;
