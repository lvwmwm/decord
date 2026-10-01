// Module ID: 6693
// Function ID: 6694
// Name: ForumTagHooks
// Dependencies: [19, 2045, 4469, 1085, 504, 1370, 6694, 2]
// Exports: useAppliedTags, useAvailableTags, useSomeAppliedTags, useVisibleAppliedForumTags, useVisibleForumTags

// Module 6693 (ForumTagHooks)
import Constants from "Constants" /* 1085 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import ReportToModUtils from "ReportToModUtils" /* 6694 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, channel, dependencyMap;

const Permissions = Constants.Permissions;
let closure_6 = [];
let result = size.fileFinishedImporting("modules/forums/ForumTagHooks.tsx");

export const useAvailableTags = function useAvailableTags(parent_id) {
  parent_id = undefined;
  if (parent_id != null) {
    parent_id = parent_id.parent_id;
  }
  const items = [ChannelStore];
  const items1 = [parent_id];
  const obj = parent_id(504);
  return obj.useStateFromStoresObject(items, () => {
    channel = channel.getChannel(parent_id);
    let availableTags;
    if (channel != null) {
      availableTags = channel.availableTags;
    }
    if (availableTags == null) {
      availableTags = [];
    }
    return availableTags.reduce((acc, id) => {
      const obj = {};
      const merged = Object.assign(acc);
      obj[id.id] = id;
      return obj;
    }, {});
  }, items1);
};
export const useAppliedTags = function useAppliedTags(thread) {
  let stateFromStoresObject;
  _require = thread;
  let parent_id;
  if (thread != null) {
    parent_id = thread.parent_id;
  }
  const items = [ChannelStore];
  const items1 = [parent_id];
  const obj = require("get initialized");
  stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    channel = channel.getChannel(parent_id);
    let availableTags;
    if (channel != null) {
      availableTags = channel.availableTags;
    }
    if (availableTags == null) {
      availableTags = [];
    }
    return availableTags.reduce((acc, id) => {
      const obj = {};
      const merged = Object.assign(acc);
      obj[id.id] = id;
      return obj;
    }, {});
  }, items1);
  const items2 = [stateFromStoresObject, thread];
  return react.useMemo(() => {
    let found;
    if (thread != null) {
      const appliedTags = obj.appliedTags;
      if (appliedTags != null) {
        const mapped = appliedTags.map((item) => stateFromStoresObject[item]);
        if (mapped != null) {
          found = mapped.filter(GlobalUtils.isNotNullish);
        }
      }
    }
    if (found == null) {
      found = closure_6;
    }
    let result;
    if (thread != null) {
      result = obj.isModeratorReportChannel();
    }
    let result1 = found;
    if (result) {
      const obj2 = ReportToModUtils;
      result1 = obj2.sortedModeratorReportTags(found);
    }
    return result1;
  }, items2);
};
export const useSomeAppliedTags = function useSomeAppliedTags(thread, arg1) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 1;
  }
  let memo;
  _require = thread;
  let stateFromStoresObject;
  let parent_id;
  if (thread != null) {
    parent_id = thread.parent_id;
  }
  let obj = require("get initialized");
  let items = [ChannelStore];
  const items1 = [parent_id];
  stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    channel = channel.getChannel(parent_id);
    let availableTags;
    if (channel != null) {
      availableTags = channel.availableTags;
    }
    if (availableTags == null) {
      availableTags = [];
    }
    return availableTags.reduce((acc, id) => {
      const obj = {};
      const merged = Object.assign(acc);
      obj[id.id] = id;
      return obj;
    }, {});
  }, items1);
  const items2 = [stateFromStoresObject, thread];
  memo = react.useMemo(() => {
    let found;
    if (thread != null) {
      const appliedTags = obj.appliedTags;
      if (appliedTags != null) {
        const mapped = appliedTags.map((item) => stateFromStoresObject[item]);
        if (mapped != null) {
          found = mapped.filter(GlobalUtils.isNotNullish);
        }
      }
    }
    if (found == null) {
      found = closure_6;
    }
    let result;
    if (thread != null) {
      result = obj.isModeratorReportChannel();
    }
    let result1 = found;
    if (result) {
      const obj2 = ReportToModUtils;
      result1 = obj2.sortedModeratorReportTags(found);
    }
    return result1;
  }, items2);
  const items3 = [memo, num];
  return react.useMemo(() => {
    const items = [memo.slice(0, num), Math.max(0, memo.length - num)];
    return items;
  }, items3);
};
export const useVisibleForumTags = function useVisibleForumTags(parentChannel) {
  let stateFromStores;
  _require = parentChannel;
  const items = [PermissionStore];
  const obj = require("get initialized");
  stateFromStores = obj.useStateFromStores(items, () => PermissionStore.can(constants.MANAGE_THREADS, stateFromStores));
  const items1 = [stateFromStores, ];
  let availableTags;
  const useMemo = react.useMemo;
  if (parentChannel != null) {
    availableTags = parentChannel.availableTags;
  }
  items1[1] = availableTags;
  return useMemo(() => {
    let found;
    let availableTags;
    if (stateFromStores != null) {
      availableTags = stateFromStores.availableTags;
    }
    if (availableTags == null) {
      availableTags = [];
    }
    const items = [...availableTags];
    if (!stateFromStores1) {
      found = items.filter((moderated) => !moderated.moderated);
    }
    return found;
  }, items1);
};
export const useVisibleAppliedForumTags = function useVisibleAppliedForumTags(arg0, arg1) {
  let closure_1;
  let memo;
  _require = arg0;
  dependencyMap = arg1;
  let obj = require("get initialized");
  let items = [ChannelStore];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => {
    parent_id = undefined;
    const getChannel = ChannelStore.getChannel;
    if (parent_id != null) {
      parent_id = parent_id.parent_id;
    }
    return getChannel(parent_id);
  }, items1);
  let obj2 = require("get initialized");
  const items2 = [PermissionStore];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => PermissionStore.can(constants.MANAGE_THREADS, stateFromStores));
  const items3 = [stateFromStores1, ];
  let availableTags;
  const useMemo = memo.useMemo;
  const obj3 = memo;
  if (stateFromStores != null) {
    availableTags = stateFromStores.availableTags;
  }
  items3[1] = availableTags;
  memo = useMemo(() => {
    let found;
    let availableTags;
    if (stateFromStores != null) {
      availableTags = stateFromStores.availableTags;
    }
    if (availableTags == null) {
      availableTags = [];
    }
    const items = [...availableTags];
    if (!stateFromStores1) {
      found = items.filter((moderated) => !moderated.moderated);
    }
    return found;
  }, items3);
  const items4 = [arg1, memo, arg0];
  return obj3.useMemo(() => {
    const found = closure_1.filter((item) => memo.includes(item));
    let result;
    const obj = parent_id;
    if (parent_id != null) {
      result = obj.isModeratorReportChannel();
    }
    let result1 = found;
    if (result) {
      const obj2 = ReportToModUtils;
      result1 = obj2.sortedModeratorReportTags(found);
    }
    return result1;
  }, items4);
};
