// Module ID: 15429
// Function ID: 117721
// Name: useThreadMemberListSections
// Dependencies: [31, 1910, 7095, 482, 4559, 5688, 5664, 566, 1212, 2]
// Exports: useThreadMemberListSections

// Module 15429 (useThreadMemberListSections)
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { StatusTypes } from "sum";

const require = arg1;
let closure_7 = [];
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/threads/ThreadMemberListHooks.tsx");

export const useThreadMemberListSections = function useThreadMemberListSections(channelId, stateFromStores) {
  const _require = channelId;
  const importDefault = stateFromStores;
  importDefault(stateFromStores[4])(() => {
    let id;
    if (null != stateFromStores) {
      id = stateFromStores.id;
    }
    if (null != id) {
      channelId(stateFromStores[5]).subscribeChannel(stateFromStores.id, channelId, channelId(stateFromStores[6]).DEFAULT_RANGES);
      const obj = channelId(stateFromStores[5]);
    }
  });
  const items = [_createForOfIteratorHelperLoose];
  stateFromStores = _require(stateFromStores[7]).useStateFromStores(items, () => {
    if (null != stateFromStores) {
      let sortedRoles = tmp4.getSortedRoles(stateFromStores.id);
    } else {
      sortedRoles = [];
    }
    return sortedRoles;
  });
  let obj = _require(stateFromStores[7]);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStoresObject = _require(stateFromStores[7]).useStateFromStoresObject(items1, () => ({ version: outer1_5.getMemberListVersion(closure_0), members: outer1_5.getMemberListSections(closure_0) }));
  const members = stateFromStoresObject.members;
  _createForOfIteratorHelperLoose = tmp4;
  const items2 = [stateFromStores, members, stateFromStoresObject.version, null == stateFromStores];
  let memo = members.useMemo(() => {
    if (_createForOfIteratorHelperLoose) {
      return outer1_7;
    } else {
      const found = stateFromStores.filter((hoist) => hoist.hoist);
      const mapped = found.map((id) => ({ id: id.id, label: id.name }));
      let obj = { id: outer1_6.ONLINE };
      const intl = channelId(stateFromStores[8]).intl;
      obj.label = intl.string(channelId(stateFromStores[8]).t.WbGtnH);
      obj = { id: outer1_6.OFFLINE };
      const intl2 = channelId(stateFromStores[8]).intl;
      obj.label = intl2.string(channelId(stateFromStores[8]).t.Vv0abJ);
      mapped.push(obj, obj);
      return mapped.map((id) => {
        id = id.id;
        const obj = { label: id.label };
        let userIds;
        if (null != outer1_3) {
          if (null != outer1_3[id]) {
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
