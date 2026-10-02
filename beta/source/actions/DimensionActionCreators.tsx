// Module ID: 10483
// Function ID: 10484
// Name: DimensionActionCreators
// Dependencies: [585, 2]

// Module 10483 (DimensionActionCreators)
import DispatcherDefault from "Dispatcher" /* 585 */;
import size from "module_2" /* 2 */;

let obj = {
  updateChannelDimensions(id, eventTimestamp, scrollTop, scrollHeight, offsetHeight, fn) {
    const obj = DispatcherDefault;
    const obj2 = { type: "UPDATE_CHANNEL_DIMENSIONS", channelId: id, timestamp: eventTimestamp, scrollTop, scrollHeight, offsetHeight };
    obj.dispatch(obj2);
    if (fn != null) {
      fn();
    }
  },
  updateChannelListScroll(guildId, scrollTop) {
    let items = arg2;
    if (arg2 === undefined) {
      items = [];
    }
    const obj = DispatcherDefault;
    const obj2 = { type: "UPDATE_CHANNEL_LIST_DIMENSIONS", guildId, scrollTop, channelIds: items };
    obj.dispatch(obj2);
  },
  channelListScrollTo(guildId, dMFromUserId) {
    const obj = DispatcherDefault;
    const obj2 = { type: "UPDATE_CHANNEL_LIST_DIMENSIONS", guildId, scrollTo: dMFromUserId, channelIds: [] };
    obj.dispatch(obj2);
  },
  clearChannelListScrollTo(guildId) {
    const obj = DispatcherDefault;
    const obj2 = { type: "UPDATE_CHANNEL_LIST_DIMENSIONS", guildId, scrollTo: null, channelIds: [] };
    obj.dispatch(obj2);
  },
  clearChannelDimensions(channelId, fn) {
    const result = this.updateChannelDimensions(channelId, Date.now(), null, null, null, fn);
  },
  updateGuildListScrollTo(scrollTop) {
    const obj = DispatcherDefault;
    const obj2 = { type: "UPDATE_GUILD_LIST_DIMENSIONS", scrollTop };
    obj.dispatch(obj2);
  }
};
let result = size.fileFinishedImporting("actions/DimensionActionCreators.tsx");

export default obj;
