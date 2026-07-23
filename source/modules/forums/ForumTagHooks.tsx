// Module ID: 5654
// Function ID: 48358
// Name: useAvailableTags
// Dependencies: [31, 1348, 3758, 482, 566, 1327, 5655, 2]
// Exports: useSomeAppliedTags, useVisibleAppliedForumTags

// Module 5654 (useAvailableTags)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { Permissions } from "sum";

const require = arg1;
function useAvailableTags(parent_id) {
  parent_id = undefined;
  if (null != parent_id) {
    parent_id = parent_id.parent_id;
  }
  const items = [_isNativeReflectConstruct];
  const items1 = [parent_id];
  return parent_id(566).useStateFromStoresObject(items, () => {
    const channel = outer1_3.getChannel(parent_id);
    let availableTags;
    if (null != channel) {
      availableTags = channel.availableTags;
    }
    if (null == availableTags) {
      availableTags = [];
    }
    return availableTags.reduce((arg0, id) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj[id.id] = id;
      return obj;
    }, {});
  }, items1);
}
function useAppliedTags(thread) {
  let closure_0 = thread;
  const tmp = useAvailableTags(thread);
  const dependencyMap = tmp;
  const items = [tmp, thread];
  return React.useMemo(() => {
    let found;
    if (null != thread) {
      const appliedTags = thread.appliedTags;
      if (null != appliedTags) {
        const mapped = appliedTags.map((arg0) => outer1_1[arg0]);
        if (null != mapped) {
          found = mapped.filter(thread(tmp[5]).isNotNullish);
        }
      }
    }
    if (null == found) {
      found = outer1_6;
    }
    let result = found;
    if (null != thread) {
      result = found;
      if (thread.isModeratorReportChannel()) {
        result = thread(tmp[6]).sortedModeratorReportTags(found);
        const obj = thread(tmp[6]);
      }
    }
    return result;
  }, items);
}
function useVisibleForumTags(parentChannel) {
  const _require = parentChannel;
  let availableTags;
  let items = [closure_4];
  stateFromStores = _require(stateFromStores[4]).useStateFromStores(items, () => outer1_4.can(outer1_5.MANAGE_THREADS, closure_0));
  const items1 = [stateFromStores, ];
  if (null != parentChannel) {
    availableTags = parentChannel.availableTags;
  }
  items1[1] = availableTags;
  return React.useMemo(() => {
    let availableTags;
    if (null != parentChannel) {
      availableTags = parentChannel.availableTags;
    }
    if (null == availableTags) {
      availableTags = [];
    }
    const items = [...availableTags];
    if (!stateFromStores) {
      const found = items.filter((moderated) => !moderated.moderated);
    }
    return found;
  }, items1);
}
let closure_6 = [];
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/forums/ForumTagHooks.tsx");

export { useAvailableTags };
export { useAppliedTags };
export const useSomeAppliedTags = function useSomeAppliedTags(thread, arg1) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 1;
  }
  let c1;
  const tmp = useAppliedTags(thread);
  c1 = tmp;
  let items = [tmp, num];
  return React.useMemo(() => {
    const items = [_undefined.slice(0, num), Math.max(0, _undefined.length - num)];
    return items;
  }, items);
};
export { useVisibleForumTags };
export const useVisibleAppliedForumTags = function useVisibleAppliedForumTags(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  const items = [_isNativeReflectConstruct];
  const items1 = [arg0];
  const tmp = useVisibleForumTags(_require(566).useStateFromStores(items, () => {
    let parent_id;
    if (null != moderatorReportChannel) {
      parent_id = moderatorReportChannel.parent_id;
    }
    return outer1_3.getChannel(parent_id);
  }, items1));
  const React = tmp;
  const items2 = [arg1, tmp, arg0];
  return React.useMemo(() => {
    const found = closure_1.filter((arg0) => outer1_2.includes(arg0));
    let result = found;
    if (null != moderatorReportChannel) {
      result = found;
      if (moderatorReportChannel.isModeratorReportChannel()) {
        result = moderatorReportChannel(closure_1[6]).sortedModeratorReportTags(found);
        const obj = moderatorReportChannel(closure_1[6]);
      }
    }
    return result;
  }, items2);
};
