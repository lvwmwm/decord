// Module ID: 14882
// Function ID: 14883
// Name: useDisplayNameStylesPendingName
// Dependencies: [7605, 2108, 4678, 504, 2]
// Exports: useDisplayNameStylesPendingName

// Module 14882 (useDisplayNameStylesPendingName)
import UserUtilsDefault from "UserUtils" /* 4678 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 7605 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesPendingName.tsx");

export const useDisplayNameStylesPendingName = function useDisplayNameStylesPendingName(stateFromStores, guildId) {
  _require = stateFromStores;
  importDefault = guildId;
  const obj = UserUtilsDefault;
  const name = obj.useName(stateFromStores);
  const items = [UserProfileSettingsStore, GuildMemberStore];
  const items1 = [guildId, stateFromStores];
  const obj2 = require("get initialized");
  let str = obj2.useStateFromStores(items, () => {
    let pendingGlobalName;
    const pendingChanges = UserProfileSettingsStore.getPendingChanges(guildId);
    const tmp = guildId;
    if (null != guildId) {
      let pendingNickname = pendingChanges.pendingNickname;
      if (pendingNickname == null) {
        let id;
        const getNick = GuildMemberStore.getNick;
        if (stateFromStores != null) {
          id = stateFromStores.id;
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
};
