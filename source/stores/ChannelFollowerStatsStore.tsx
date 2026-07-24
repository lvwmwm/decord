// Module ID: 9893
// Function ID: 76517
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 9893 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let dispatcher = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return dispatcher;
  }
  const result = _isNativeReflectConstruct();
}
let closure_5 = { FAILED: "failed", SUCCEEDED: "succeeded" };
let closure_6 = {};
let tmp2 = ((Store) => {
  class ChannelFollowerStatsStore {
    constructor() {
      self = this;
      tmp = ChannelFollowerStatsStore(this, ChannelFollowerStatsStore);
      obj = outer1_3(ChannelFollowerStatsStore);
      tmp2 = outer1_2;
      if (outer1_7()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(ChannelFollowerStatsStore, Store);
  const items = [
    {
      key: "getFollowerStatsForChannel",
      value(arg0) {
        return outer1_6[arg0];
      }
    }
  ];
  return callback(ChannelFollowerStatsStore, items);
})(require("initialize").Store);
tmp2.displayName = "ChannelFollowerStatsStore";
tmp2 = new tmp2(require("dispatcher"), {
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
    const obj = { loadingStatus: constants.FAILED, lastFetched: Date.now(), channelsFollowing: 0, guildMembers: 0, guildsFollowing: 0, usersSeenEver: 0, subscribersGainedSinceLastPost: 0, subscribersLostSinceLastPost: 0 };
    closure_6[channelId.channelId] = obj;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/ChannelFollowerStatsStore.tsx");

export default tmp2;
