// Module ID: 11125
// Function ID: 86594
// Name: set
// Dependencies: [7, 6, 1348, 1358, 1357, 1359, 682, 44, 7014, 621, 566, 2]
// Exports: useForumChannelStore, useForumChannelStoreApi

// Module 11125 (set)
import batchUpdates from "batchUpdates";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import keys from "keys";
import set from "_isNativeReflectConstruct";

const require = arg1;
let set = new Set();
let obj = { layoutType: require("set").ForumLayout.LIST, sortOrder: require("set").ThreadSortOrder.CREATION_DATE, tagFilter: set, tagSetting: require("set").ThreadSearchTagSetting.MATCH_SOME };
class ForumChannelStoreState {
  constructor(arg0, arg1) {
    self = this;
    tmp = c3(this, ForumChannelStoreState);
    this.set = global;
    this.get = arg1;
    this.channelStates = {};
    this.setChannelState = (arg0, arg1) => {
      const value = obj.get();
      const channelState = obj.getChannelState(arg0);
      obj = {};
      const merged = Object.assign(value.channelStates);
      obj = {};
      const merged1 = Object.assign(channelState);
      const merged2 = Object.assign(arg1);
      obj[arg0] = obj;
      self(outer1_2[6]).batchUpdates(() => {
        obj = { channelStates: obj };
        return obj.set(obj);
      });
    };
    this.getChannelState = (channelId) => {
      if (null == channelId) {
        return outer1_6;
      } else {
        let tmp6 = self.get().channelStates[channelId];
        if (null == tmp6) {
          const channel = outer1_4.getChannel(channelId);
          outer1_1(outer1_2[7])(null != channel, "[Forum Channel Store] The channel should not be missing.");
          const obj = { layoutType: channel.getDefaultLayout(), sortOrder: channel.getDefaultSortOrder(), tagFilter: outer1_5, tagSetting: channel.getDefaultTagSetting() };
          tmp6 = obj;
        }
        return tmp6;
      }
    };
    this.toggleTagFilter = (arg0, arg1) => {
      const set = new Set(self.getChannelState(arg0).tagFilter);
      if (set.has(arg1)) {
        set.delete(arg1);
      } else {
        set.add(arg1);
      }
      self.setTagFilter(arg0, set);
    };
    this.setTagFilter = (arg0, tagFilter) => {
      self.setChannelState(arg0, { tagFilter });
      outer1_1(outer1_2[8]).setFilterTagIds(tagFilter);
    };
    this.setSortOrder = (arg0, sortOrder) => {
      self.setChannelState(arg0, { sortOrder });
      outer1_1(outer1_2[8]).setSortOrder(sortOrder);
    };
    this.setLayoutType = (arg0, layoutType) => {
      self.setChannelState(arg0, { layoutType });
      outer1_1(outer1_2[8]).setLayout(layoutType);
    };
    this.setTagSetting = (arg0, tagSetting) => {
      self.setChannelState(arg0, { tagSetting });
      outer1_1(outer1_2[8]).setTagSetting(tagSetting);
    };
    return;
  }
}
let closure_7 = require("invariant")(ForumChannelStoreState);
let closure_8 = keys.create((arg0, arg1) => new closure_7(arg0, arg1));
const result = set.fileFinishedImporting("modules/forums/ForumChannelStore.tsx");

export const useForumChannelStore = function useForumChannelStore(parent_id) {
  const _require = parent_id;
  const obj = callback2();
  const items = [_isNativeReflectConstruct];
  if (null == obj2.useStateFromStores(items, () => outer1_4.getChannel(closure_0))) {
    let channelState = obj;
  } else {
    channelState = obj.getChannelState(parent_id);
  }
  return channelState;
};
export function useForumChannelStoreApi() {
  return closure_8;
}
