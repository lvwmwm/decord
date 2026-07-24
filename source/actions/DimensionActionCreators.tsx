// Module ID: 9918
// Function ID: 76753
// Name: dispatcher
// Dependencies: [686, 2]

// Module 9918 (dispatcher)
let result = require("set").fileFinishedImporting("actions/DimensionActionCreators.tsx");

export default {
  updateChannelDimensions(id, eventTimestamp, scrollTop, scrollHeight, offsetHeight, arg5) {
    let obj = importDefault(686);
    obj = { type: "UPDATE_CHANNEL_DIMENSIONS", channelId: id, timestamp: eventTimestamp, scrollTop, scrollHeight, offsetHeight };
    obj.dispatch(obj);
    if (null != arg5) {
      arg5();
    }
  },
  updateChannelListScroll(guildId, scrollTop) {
    let items = arg2;
    if (arg2 === undefined) {
      items = [];
    }
    let obj = importDefault(686);
    obj = { type: "UPDATE_CHANNEL_LIST_DIMENSIONS", guildId, scrollTop, channelIds: items };
    obj.dispatch(obj);
  },
  channelListScrollTo(closure_12, dMFromUserId) {
    let obj = importDefault(686);
    obj = { type: "UPDATE_CHANNEL_LIST_DIMENSIONS", guildId: closure_12, scrollTo: dMFromUserId, channelIds: [] };
    obj.dispatch(obj);
  },
  clearChannelListScrollTo(guildId) {
    let obj = importDefault(686);
    obj = { type: "UPDATE_CHANNEL_LIST_DIMENSIONS", guildId, scrollTo: null, channelIds: [] };
    obj.dispatch(obj);
  },
  clearChannelDimensions(channelId) {
    const result = this.updateChannelDimensions(channelId, Date.now(), null, null, null, arg1);
  },
  updateGuildListScrollTo(scrollTop) {
    let obj = importDefault(686);
    obj = { type: "UPDATE_GUILD_LIST_DIMENSIONS", scrollTop };
    obj.dispatch(obj);
  }
};
