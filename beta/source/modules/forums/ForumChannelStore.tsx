// Module ID: 11483
// Function ID: 11484
// Name: ForumChannelStore
// Dependencies: [2045, 2055, 2054, 2056, 1248, 38, 7191, 560, 504, 2]
// Exports: useForumChannelStore, useForumChannelStoreApi

// Module 11483 (ForumChannelStore)
import _modDef38 from "module_38" /* 38 */;
import ThreadSortOrder from "ThreadSortOrder" /* 2054 */;
import ForumLayout from "ForumLayout" /* 2055 */;
import ThreadSearchTagSetting from "ThreadSearchTagSetting" /* 2056 */;
import ForumChannelAnalyticsManagerDefault from "ForumChannelAnalyticsManager" /* 7191 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function setChannelState(channelId, arg1) {
  let channelStates;
  const value = channelStates.get();
  const channelState = channelStates.getChannelState(channelId);
  channelStates = {};
  const merged = Object.assign(value.channelStates);
  const obj2 = {};
  const merged1 = Object.assign(channelState);
  const merged2 = Object.assign(arg1);
  channelStates[channelId] = obj2;
  const obj3 = channelStates(dependencyMap[4]);
  obj3.batchUpdates(() => {
    channelStates = { channelStates };
    return channelStates.set(channelStates);
  });
}
function getChannelState(channelId) {
  if (null == channelId) {
    return obj;
  } else {
    let tmp6 = obj.get().channelStates[channelId];
    if (null == tmp6) {
      const channel = ChannelStore.getChannel(channelId);
      _modDef38(null != channel, "[Forum Channel Store] The channel should not be missing.");
      obj = { layoutType: channel.getDefaultLayout(), sortOrder: channel.getDefaultSortOrder(), tagFilter: set, tagSetting: channel.getDefaultTagSetting() };
      tmp6 = obj;
    }
    return tmp6;
  }
}
function setTagFilter(id, set) {
  obj = { tagFilter: set };
  obj.setChannelState(id, obj);
  const obj2 = ForumChannelAnalyticsManagerDefault;
  obj2.setFilterTagIds(set);
}
function setSortOrder(channelId, sortOrder) {
  obj = { sortOrder };
  obj.setChannelState(channelId, obj);
  const obj2 = ForumChannelAnalyticsManagerDefault;
  obj2.setSortOrder(sortOrder);
}
function setLayoutType(channelId, c7) {
  obj = { layoutType: c7 };
  obj.setChannelState(channelId, obj);
  const obj2 = ForumChannelAnalyticsManagerDefault;
  obj2.setLayout(c7);
}
function setTagSetting(channelId, tagSetting) {
  obj = { tagSetting };
  obj.setChannelState(channelId, obj);
  const obj2 = ForumChannelAnalyticsManagerDefault;
  obj2.setTagSetting(tagSetting);
}
let set = new Set();
let obj = { layoutType: ForumLayout.ForumLayout.LIST, sortOrder: ThreadSortOrder.ThreadSortOrder.CREATION_DATE, tagFilter: set, tagSetting: ThreadSearchTagSetting.ThreadSearchTagSetting.MATCH_SOME };
function ForumChannelStoreState(set, get) {
  obj = Object.create(new.target.prototype);
  obj.channelStates = {};
  obj.setChannelState = setChannelState;
  obj.getChannelState = getChannelState;
  obj.toggleTagFilter = function toggleTagFilter(channelId, arg1) {
    set = new Set(obj.getChannelState(channelId).tagFilter);
    if (set.has(arg1)) {
      set.delete(arg1);
    } else {
      set.add(arg1);
    }
    obj.setTagFilter(channelId, set);
  };
  obj.setTagFilter = setTagFilter;
  obj.setSortOrder = setSortOrder;
  obj.setLayoutType = setLayoutType;
  obj.setTagSetting = setTagSetting;
  obj.set = set;
  obj.get = get;
  return obj;
}
let closure_7 = module_560.create((set, get) => {
  if (typeof ForumChannelStoreState === "function") {
    obj = Object.create(tmp.prototype);
    obj.channelStates = {};
    obj.setChannelState = setChannelState;
    obj.getChannelState = getChannelState;
    obj.toggleTagFilter = function toggleTagFilter(channelId, arg1) {
      set = new Set(obj.getChannelState(channelId).tagFilter);
      if (set.has(arg1)) {
        set.delete(arg1);
      } else {
        set.add(arg1);
      }
      obj.setTagFilter(channelId, set);
    };
    obj.setTagFilter = setTagFilter;
    obj.setSortOrder = setSortOrder;
    obj.setLayoutType = setLayoutType;
    obj.setTagSetting = setTagSetting;
    obj.set = set;
    obj.get = get;
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
const result = size.fileFinishedImporting("modules/forums/ForumChannelStore.tsx");

export const useForumChannelStore = function useForumChannelStore(parent_id) {
  let channelState;
  _require = parent_id;
  obj = closure_7();
  const items = [ChannelStore];
  const obj2 = require("get initialized");
  if (null == obj2.useStateFromStores(items, () => ChannelStore.getChannel(parent_id))) {
    channelState = obj;
  } else {
    channelState = obj.getChannelState(parent_id);
  }
  return channelState;
};
export function useForumChannelStoreApi() {
  return closure_7;
}
