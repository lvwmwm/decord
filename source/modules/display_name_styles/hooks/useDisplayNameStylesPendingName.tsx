// Module ID: 14273
// Function ID: 109594
// Name: useDisplayNameStylesPendingName
// Dependencies: [7930, 1917, 3969, 566, 2]
// Exports: useDisplayNameStylesPendingName

// Module 14273 (useDisplayNameStylesPendingName)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("conceal").fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesPendingName.tsx");

export const useDisplayNameStylesPendingName = function useDisplayNameStylesPendingName(stateFromStores, guildId) {
  const _require = stateFromStores;
  const importDefault = guildId;
  let name = importDefault(3969).useName(stateFromStores);
  const obj = importDefault(3969);
  const items = [_isNativeReflectConstruct, closure_4];
  const items1 = [guildId, stateFromStores];
  stateFromStores = _require(566).useStateFromStores(items, () => {
    const pendingChanges = outer1_3.getPendingChanges(closure_1);
    if (null != closure_1) {
      let pendingNickname = pendingChanges.pendingNickname;
      if (null == pendingNickname) {
        let id;
        if (null != stateFromStores) {
          id = stateFromStores.id;
        }
        pendingNickname = outer1_4.getNick(closure_1, id);
        const tmp3 = closure_1;
      }
      let pendingGlobalName = pendingNickname;
    } else {
      pendingGlobalName = pendingChanges.pendingGlobalName;
    }
    return pendingGlobalName;
  }, items1);
  if (null != stateFromStores) {
    name = stateFromStores;
  }
  let str = "";
  if (null != name) {
    str = name;
  }
  return str;
};
