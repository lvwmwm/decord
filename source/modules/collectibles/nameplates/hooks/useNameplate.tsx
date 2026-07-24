// Module ID: 9128
// Function ID: 71444
// Name: useNameplate
// Dependencies: [31, 1917, 566, 1873, 2]
// Exports: useNameplate

// Module 9128 (useNameplate)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/collectibles/nameplates/hooks/useNameplate.tsx");

export const useNameplate = function useNameplate(user) {
  user = user.user;
  const guildId = user.guildId;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = user(guildId[2]).useStateFromStores(items, () => {
    let member = null;
    if (null != guildId) {
      member = null;
      if (null != user) {
        member = outer1_3.getMember(guildId, user.id);
      }
    }
    return member;
  });
  const items1 = [stateFromStores, user];
  return stateFromStores.useMemo(() => {
    if (null != user) {
      let nameplate;
      if (null != stateFromStores) {
        const collectibles = stateFromStores.collectibles;
        if (null != collectibles) {
          nameplate = collectibles.nameplate;
        }
      }
      nameplate = user(guildId[3]).getNameplateData(nameplate);
      if (null == nameplate) {
        nameplate = user.nameplate;
      }
      return nameplate;
    }
  }, items1);
};
