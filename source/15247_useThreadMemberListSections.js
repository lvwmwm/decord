// Module ID: 15247
// Function ID: 115124
// Name: useThreadMemberListSections
// Dependencies: []
// Exports: useThreadMemberListSections

// Module 15247 (useThreadMemberListSections)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const StatusTypes = arg1(dependencyMap[3]).StatusTypes;
let closure_7 = [];
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/threads/ThreadMemberListHooks.tsx");

export const useThreadMemberListSections = function useThreadMemberListSections(channelId, stateFromStores) {
  stateFromStores = channelId;
  const importDefault = stateFromStores;
  importDefault(dependencyMap[4])(() => {
    let id;
    if (null != arg1) {
      id = arg1.id;
    }
    if (null != id) {
      arg0(stateFromStores[5]).subscribeChannel(arg1.id, arg0, arg0(stateFromStores[6]).DEFAULT_RANGES);
      const obj = arg0(stateFromStores[5]);
    }
  });
  const items = [closure_4];
  stateFromStores = stateFromStores(dependencyMap[7]).useStateFromStores(items, () => {
    if (null != arg1) {
      let sortedRoles = tmp4.getSortedRoles(arg1.id);
    } else {
      sortedRoles = [];
    }
    return sortedRoles;
  });
  const dependencyMap = stateFromStores;
  const obj = stateFromStores(dependencyMap[7]);
  const items1 = [closure_5];
  const stateFromStoresObject = stateFromStores(dependencyMap[7]).useStateFromStoresObject(items1, () => ({ version: store.getMemberListVersion(arg0), members: store.getMemberListSections(arg0) }));
  const members = stateFromStoresObject.members;
  const React = members;
  closure_4 = tmp4;
  const items2 = [stateFromStores, members, stateFromStoresObject.version, null == stateFromStores];
  let memo = React.useMemo(() => {
    if (tmp4) {
      return closure_7;
    } else {
      const found = stateFromStores.filter((hoist) => hoist.hoist);
      const mapped = found.map((id) => ({ id: id.id, label: id.name }));
      let obj = { id: constants.ONLINE };
      const intl = arg0(stateFromStores[8]).intl;
      obj.label = intl.string(arg0(stateFromStores[8]).t.WbGtnH);
      obj = { id: constants.OFFLINE };
      const intl2 = arg0(stateFromStores[8]).intl;
      obj.label = intl2.string(arg0(stateFromStores[8]).t.Vv0abJ);
      mapped.push(obj, obj);
      return mapped.map((id) => {
        id = id.id;
        const obj = { label: id.label };
        let userIds;
        if (null != closure_3) {
          if (null != closure_3[id]) {
            userIds = tmp2.userIds;
          }
        }
        if (null == userIds) {
          userIds = [];
        }
        obj.userIds = userIds;
        obj.id = id;
        obj.roleId = id;
        return obj;
      });
    }
  }, items2);
  if (null == members) {
    memo = closure_7;
  }
  return memo;
};
