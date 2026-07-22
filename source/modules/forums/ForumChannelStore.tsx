// Module ID: 11115
// Function ID: 86544
// Name: set
// Dependencies: []
// Exports: useForumChannelStore, useForumChannelStoreApi

// Module 11115 (set)
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const set = new Set();
const obj = { layoutType: arg1(dependencyMap[3]).ForumLayout.LIST, sortOrder: arg1(dependencyMap[4]).ThreadSortOrder.CREATION_DATE, tagFilter: set, tagSetting: arg1(dependencyMap[5]).ThreadSearchTagSetting.MATCH_SOME };
class ForumChannelStoreState {
  constructor(arg0, arg1) {
    arg1 = this;
    tmp = closure_3(this, ForumChannelStoreState);
    this.set = global;
    this.get = arg1;
    this.channelStates = {};
    this.setChannelState = (arg0, arg1) => {
      const value = self.get();
      const channelState = self.getChannelState(arg0);
      let obj = {};
      const merged = Object.assign(value.channelStates);
      const self = obj;
      obj = {};
      const merged1 = Object.assign(channelState);
      const merged2 = Object.assign(arg1);
      obj[arg0] = obj;
      self(closure_2[6]).batchUpdates(() => {
        const obj = { channelStates: obj };
        return obj.set(obj);
      });
    };
    this.getChannelState = (channelId) => {
      if (null == channelId) {
        return closure_6;
      } else {
        let tmp6 = self.get().channelStates[channelId];
        if (null == tmp6) {
          const channel = channel.getChannel(channelId);
          callback(closure_2[7])(null != channel, "[Forum Channel Store] The channel should not be missing.");
          const obj = { layoutType: channel.getDefaultLayout(), sortOrder: channel.getDefaultSortOrder(), tagFilter: closure_5, tagSetting: channel.getDefaultTagSetting() };
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
      callback(closure_2[8]).setFilterTagIds(tagFilter);
    };
    this.setSortOrder = (arg0, sortOrder) => {
      self.setChannelState(arg0, { sortOrder });
      callback(closure_2[8]).setSortOrder(sortOrder);
    };
    this.setLayoutType = (arg0, layoutType) => {
      self.setChannelState(arg0, { layoutType });
      callback(closure_2[8]).setLayout(layoutType);
    };
    this.setTagSetting = (arg0, tagSetting) => {
      self.setChannelState(arg0, { tagSetting });
      callback(closure_2[8]).setTagSetting(tagSetting);
    };
    return;
  }
}
let closure_7 = importDefault(dependencyMap[0])(ForumChannelStoreState);
const importDefaultResult = importDefault(dependencyMap[0]);
let closure_8 = arg1(dependencyMap[9]).create((arg0, arg1) => new closure_7(arg0, arg1));
const obj2 = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/forums/ForumChannelStore.tsx");

export const useForumChannelStore = function useForumChannelStore(parent_id) {
  const arg1 = parent_id;
  const obj = callback2();
  const items = [closure_4];
  if (null == obj2.useStateFromStores(items, () => channel.getChannel(arg0))) {
    let channelState = obj;
  } else {
    channelState = obj.getChannelState(parent_id);
  }
  return channelState;
};
export function useForumChannelStoreApi() {
  return closure_8;
}
