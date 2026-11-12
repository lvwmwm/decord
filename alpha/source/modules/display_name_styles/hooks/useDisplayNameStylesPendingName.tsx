// Module ID: 16983
// Function ID: 16984
// Name: useDisplayNameStylesPendingName
// Dependencies: [8476, 5155, 5309, 504, 2]
// Exports: useDisplayNameStylesPendingName

// Module 16983 (useDisplayNameStylesPendingName)
import UserUtilsDefault from "UserUtils" /* 5309 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8476 */;
import GuildMemberStore from "GuildMemberStore" /* 5155 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesPendingName.tsx");

export function useDisplayNameStylesPendingName(stateFromStores, guildId) {
  _require = stateFromStores;
  importDefault = guildId;
  const obj = UserUtilsDefault;
  const name = obj.useName(stateFromStores);
  const items = [UserProfileSettingsStore, GuildMemberStore];
  const items1 = [guildId, stateFromStores];
  const obj2 = require("get initialized");
  let str = obj2.useStateFromStores(items, () => {
    const pendingChanges = UserProfileSettingsStore.getPendingChanges(guildId);
    const tmp = guildId;
    if (null == guildId) {
      return pendingChanges.pendingGlobalName;
    } else {
      let pendingNickname = pendingChanges.pendingNickname;
      let tmp3 = null;
      if ("" !== pendingNickname) {
        if (pendingNickname == null) {
          let id;
          const getNick = GuildMemberStore.getNick;
          if (stateFromStores != null) {
            id = stateFromStores.id;
          }
          pendingNickname = getNick(tmp, id);
        }
        tmp3 = pendingNickname;
      }
      return tmp3;
    }
  }, items1);
  if (str == null) {
    str = name;
  }
  if (str == null) {
    str = "";
  }
  return str;
}
