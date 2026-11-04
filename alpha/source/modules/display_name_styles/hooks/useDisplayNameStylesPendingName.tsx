// Module ID: 16732
// Function ID: 16733
// Name: useDisplayNameStylesPendingName
// Dependencies: [8872, 5053, 5195, 504, 2]
// Exports: useDisplayNameStylesPendingName

// Module 16732 (useDisplayNameStylesPendingName)
import UserUtilsDefault from "UserUtils" /* 5195 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8872 */;
import GuildMemberStore from "GuildMemberStore" /* 5053 */;
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
