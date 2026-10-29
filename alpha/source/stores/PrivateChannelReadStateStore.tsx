// Module ID: 15558
// Function ID: 15559
// Name: PrivateChannelReadStateStore
// Dependencies: [4861, 4857, 6829, 4908, 7382, 2039, 504, 584, 2]

// Module 15558 (PrivateChannelReadStateStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import FunctionUtils from "FunctionUtils" /* 2039 */;
import ChannelRecord from "ChannelRecord" /* 4861 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import ReadStateStore from "ReadStateStore" /* 6829 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4908 */;
import PrivateChannelSortStore from "PrivateChannelSortStore" /* 7382 */;
import size from "module_2" /* 2 */;

const f125903 = (item) => mentionCount.getMentionCount(item) > 0;
function rebuildUnreads() {
  const privateChannelIds = PrivateChannelSortStore.getPrivateChannelIds();
  found = privateChannelIds.filter(f125903);
  if (found.length > 20) {
    found.length = 20;
  }
  const obj = FunctionUtils;
  const result = obj.areArraysShallowlyEqual(found, found);
  let flag = !result;
  if (flag) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    new Set(found);
    flag = true;
  }
  return flag;
}
function handleConnectionOpen() {
  const privateChannelIds = PrivateChannelSortStore.getPrivateChannelIds();
  found = privateChannelIds.filter(f125903);
  if (found.length > 20) {
    found.length = 20;
  }
  const obj = FunctionUtils;
  const result = obj.areArraysShallowlyEqual(found, found);
  let flag = !result;
  if (flag) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    new Set(found);
    flag = true;
  }
  return flag;
}
function handleGenericUpdate(channelId) {
  const channel = ChannelStore.getChannel(channelId.channelId);
  let tmp4 = !(null == channel || !isPrivate(channel.type));
  const tmp2 = null == channel || !isPrivate(channel.type);
  if (tmp4) {
    const privateChannelIds = PrivateChannelSortStore.getPrivateChannelIds();
    found = privateChannelIds.filter(f125903);
    if (found.length > 20) {
      found.length = 20;
    }
    const obj = FunctionUtils;
    const result = obj.areArraysShallowlyEqual(found, found);
    let flag = !result;
    if (flag) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      new Set(found);
      flag = true;
    }
    tmp4 = flag;
  }
  return tmp4;
}
const isPrivate = ChannelRecord.isPrivate;
let found = [];
let set = new Set();
const Store = get_initializedDefault.Store;
class PrivateChannelReadStateStore extends Store {
  initialize() {
    this.waitFor(PrivateChannelSortStore, ChannelStore, SelectedChannelStore, ReadStateStore);
  }
  getUnreadPrivateChannelIds() {
    return found;
  }
}
const prototype = PrivateChannelReadStateStore.prototype;
PrivateChannelReadStateStore.displayName = "PrivateChannelReadStateStore";
let obj = {
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  MESSAGE_CREATE: handleGenericUpdate,
  MESSAGE_ACK: handleGenericUpdate,
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    const channel = ChannelStore.getChannel(channelId.channelId);
    let tmp4 = !(null == channel || !isPrivate(channel.type));
    const tmp2 = null == channel || !isPrivate(channel.type);
    if (tmp4) {
      const privateChannelIds = PrivateChannelSortStore.getPrivateChannelIds();
      found = privateChannelIds.filter(f125903);
      if (found.length > 20) {
        found.length = 20;
      }
      const obj = FunctionUtils;
      const result = obj.areArraysShallowlyEqual(found, found);
      let flag = !result;
      if (flag) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        new Set(found);
        flag = true;
      }
      tmp4 = flag;
    }
    return tmp4;
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    let hasItem = set.has(channel.channel.id);
    if (hasItem) {
      const privateChannelIds = PrivateChannelSortStore.getPrivateChannelIds();
      found = privateChannelIds.filter(f125903);
      if (found.length > 20) {
        found.length = 20;
      }
      const obj = FunctionUtils;
      const result = obj.areArraysShallowlyEqual(found, found);
      let flag = !result;
      if (flag) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        flag = true;
        set = new Set(found);
      }
      hasItem = flag;
    }
    return hasItem;
  },
  WINDOW_FOCUS: function handleWindowFocus() {
    const channel = ChannelStore.getChannel(SelectedChannelStore.getChannelId());
    let tmp4 = !(null == channel || !isPrivate(channel.type));
    const tmp2 = null == channel || !isPrivate(channel.type);
    if (tmp4) {
      const privateChannelIds = PrivateChannelSortStore.getPrivateChannelIds();
      found = privateChannelIds.filter(f125903);
      if (found.length > 20) {
        found.length = 20;
      }
      const obj = FunctionUtils;
      const result = obj.areArraysShallowlyEqual(found, found);
      let flag = !result;
      if (flag) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        new Set(found);
        flag = true;
      }
      tmp4 = flag;
    }
    return tmp4;
  },
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    let mentionCount;
    channel = ChannelStore.getChannel(channel.channel.id);
    let tmp4 = !(null == channel || !isPrivate(channel.type));
    const tmp2 = null == channel || !isPrivate(channel.type);
    if (tmp4) {
      const privateChannelIds = PrivateChannelSortStore.getPrivateChannelIds();
      found = privateChannelIds.filter(f125903);
      if (found.length > 20) {
        found.length = 20;
      }
      const obj = FunctionUtils;
      const result = obj.areArraysShallowlyEqual(found, found);
      let flag = !result;
      if (flag) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        new Set(found);
        flag = true;
      }
      tmp4 = flag;
    }
    return tmp4;
  },
  CHANNEL_UPDATES: function handleChannelUpdates(arg0) {
    let flag = false;
    const iter = arg0.channels[Symbol.iterator]();
    while (iter !== undefined) {
      let channel = ChannelStore.getChannel(iter.next().id);
      let tmp4 = null != channel;
      if (tmp4) {
        tmp4 = isPrivate(tmp3.type);
      }
      if (tmp4) {
        flag = true;
      }
      continue;
    }
    const tmp7 = flag && rebuildUnreads();
    return tmp7;
  }
};
const privateChannelReadStateStore = new PrivateChannelReadStateStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/PrivateChannelReadStateStore.tsx");

export default privateChannelReadStateStore;
