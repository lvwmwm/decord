// Module ID: 5650
// Function ID: 48323
// Name: useAvailableTags
// Dependencies: []
// Exports: useSomeAppliedTags, useVisibleAppliedForumTags

// Module 5650 (useAvailableTags)
function useAvailableTags(parent_id) {
  parent_id = undefined;
  if (null != parent_id) {
    parent_id = parent_id.parent_id;
  }
  const arg1 = parent_id;
  const items = [closure_3];
  const items1 = [parent_id];
  return arg1(dependencyMap[4]).useStateFromStoresObject(items, () => {
    const channel = channel.getChannel(parent_id);
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
  const arg1 = thread;
  const tmp = useAvailableTags(thread);
  const dependencyMap = tmp;
  const items = [tmp, thread];
  return React.useMemo((self) => {
    let found;
    if (null != self) {
      const appliedTags = self.appliedTags;
      if (null != appliedTags) {
        const mapped = appliedTags.map((arg0) => closure_1[arg0]);
        if (null != mapped) {
          found = mapped.filter(self(tmp[5]).isNotNullish);
        }
      }
    }
    if (null == found) {
      found = closure_6;
    }
    let result = found;
    if (null != self) {
      result = found;
      if (self.isModeratorReportChannel()) {
        result = self(tmp[6]).sortedModeratorReportTags(found);
        const obj = self(tmp[6]);
      }
    }
    return result;
  }, items);
}
function useVisibleForumTags(parentChannel) {
  const arg1 = parentChannel;
  let availableTags;
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => closure_4.can(constants.MANAGE_THREADS, arg0));
  const dependencyMap = stateFromStores;
  const items1 = [stateFromStores, ];
  if (null != parentChannel) {
    availableTags = parentChannel.availableTags;
  }
  items1[1] = availableTags;
  return React.useMemo(() => {
    let availableTags;
    if (null != arg0) {
      availableTags = arg0.availableTags;
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
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const Permissions = arg1(dependencyMap[3]).Permissions;
let closure_6 = [];
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/forums/ForumTagHooks.tsx");

export { useAvailableTags };
export { useAppliedTags };
export const useSomeAppliedTags = function useSomeAppliedTags(thread, arg1) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 1;
  }
  arg1 = num;
  let dependencyMap;
  const tmp = useAppliedTags(thread);
  dependencyMap = tmp;
  const items = [tmp, num];
  return React.useMemo(() => {
    const items = [tmp.slice(0, num), Math.max(0, tmp.length - num)];
    return items;
  }, items);
};
export { useVisibleForumTags };
export const useVisibleAppliedForumTags = function useVisibleAppliedForumTags(arg0, arg1) {
  arg1 = arg0;
  const dependencyMap = arg1;
  const items = [closure_3];
  const items1 = [arg0];
  const tmp = useVisibleForumTags(arg1(dependencyMap[4]).useStateFromStores(items, () => {
    let parent_id;
    if (null != arg0) {
      parent_id = arg0.parent_id;
    }
    return channel.getChannel(parent_id);
  }, items1));
  const React = tmp;
  const items2 = [arg1, tmp, arg0];
  return React.useMemo(() => {
    const found = arg1.filter((arg0) => closure_2.includes(arg0));
    let result = found;
    if (null != arg0) {
      result = found;
      if (arg0.isModeratorReportChannel()) {
        result = arg0(arg1[6]).sortedModeratorReportTags(found);
        const obj = arg0(arg1[6]);
      }
    }
    return result;
  }, items2);
};
