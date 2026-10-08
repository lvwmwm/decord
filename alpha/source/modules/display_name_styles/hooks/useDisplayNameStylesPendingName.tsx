// Module ID: 15432
// Function ID: 15433
// Name: useDisplayNameStylesPendingName
// Dependencies: [8260, 2124, 558, 576, 4922, 504, 2]

// Module 15432 (useDisplayNameStylesPendingName)
import UserUtilsDefault from "UserUtils" /* 4922 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8260 */;
import GuildMemberStore from "GuildMemberStore" /* 2124 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDisplayNameStylesPendingName(id, arg1) {
  let closure_1;
  let first;
  _require = id;
  importDefault = arg1;
  let tmp = _require;
  const obj = require("react");
  const cResult = obj.c(7);
  const obj2 = UserUtilsDefault;
  const name = obj2.useName(id);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileSettingsStore, GuildMemberStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    let tmp11;
    id = undefined;
    const tmp8 = cResult[2];
    if (id != null) {
      id = id.id;
    }
    if (tmp8 === id) {
      tmp11 = cResult[3];
    }
    if (cResult[4] === arg1) {
      let tmp13;
      if (cResult[5] === id) {
        tmp13 = cResult[6];
      }
      const tmpResult = tmp(504);
      let str = tmpResult.useStateFromStores(first, tmp11, tmp13);
      if (str == null) {
        str = name;
      }
      if (str == null) {
        str = "";
      }
      return str;
    }
    const items1 = [arg1, id];
    cResult[4] = arg1;
    cResult[5] = id;
    cResult[6] = items1;
    tmp13 = items1;
  }
  cResult[1] = arg1;
  let id1;
  if (id != null) {
    id1 = id.id;
  }
  const fn = function o() {
    let pendingGlobalName;
    const pendingChanges = UserProfileSettingsStore.getPendingChanges(closure_1);
    const tmp = closure_1;
    if (null != closure_1) {
      let pendingNickname = pendingChanges.pendingNickname;
      if (pendingNickname == null) {
        id = undefined;
        const getNick = GuildMemberStore.getNick;
        if (id != null) {
          id = id.id;
        }
        pendingNickname = getNick(tmp, id);
      }
      pendingGlobalName = pendingNickname;
    } else {
      pendingGlobalName = pendingChanges.pendingGlobalName;
    }
    return pendingGlobalName;
  };
  cResult[2] = id1;
  cResult[3] = fn;
  tmp11 = fn;
}) : (function useDisplayNameStylesPendingName(arg0, arg1) {
  let closure_1;
  _require = arg0;
  importDefault = arg1;
  const obj = UserUtilsDefault;
  const name = obj.useName(arg0);
  const items = [UserProfileSettingsStore, GuildMemberStore];
  const items1 = [arg1, arg0];
  const obj2 = require("get initialized");
  let str = obj2.useStateFromStores(items, () => {
    let pendingGlobalName;
    const pendingChanges = UserProfileSettingsStore.getPendingChanges(closure_1);
    const tmp = closure_1;
    if (null != closure_1) {
      let pendingNickname = pendingChanges.pendingNickname;
      if (pendingNickname == null) {
        id = undefined;
        const getNick = GuildMemberStore.getNick;
        if (id != null) {
          id = id.id;
        }
        pendingNickname = getNick(tmp, id);
      }
      pendingGlobalName = pendingNickname;
    } else {
      pendingGlobalName = pendingChanges.pendingGlobalName;
    }
    return pendingGlobalName;
  }, items1);
  if (str == null) {
    str = name;
  }
  if (str == null) {
    str = "";
  }
  return str;
});
const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesPendingName.tsx");

export const useDisplayNameStylesPendingName = tmp2;
