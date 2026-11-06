// Module ID: 18399
// Function ID: 18400
// Name: useFirstGloballyViewbleGuildChannelId
// Dependencies: [5100, 1083, 504, 5107, 2]
// Exports: useFirstGloballyViewbleGuildChannelId

// Module 18399 (useFirstGloballyViewbleGuildChannelId)
import Constants from "Constants" /* 1083 */;
import PermissionUtilsAll from "PermissionUtils" /* 5107 */;
import GuildChannelStore from "GuildChannelStore" /* 5100 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/permissions/useFirstGloballyViewbleGuildChannelId.tsx");

export function useFirstGloballyViewbleGuildChannelId(guildId) {
  _require = guildId;
  const obj = require("get initialized");
  const items = [GuildChannelStore];
  const items1 = [guildId];
  return obj.useStateFromStores(items, () => {
    if (null != guildId) {
      const selectableChannels = GuildChannelStore.getSelectableChannels(tmp);
      for (const item10010 of selectableChannels) {
        let channel = item10010.channel;
        let obj2 = PermissionUtilsAll;
        if (obj2.canEveryone(Permissions.VIEW_CHANNEL, channel)) {
          let id = channel.id;
          obj.return();
          return id;
        }
      }
      let id1;
      if (selectableChannels != null) {
        const first = selectableChannels[0];
        if (first != null) {
          id1 = first.channel.id;
        }
      }
      return id1;
    }
  }, items1);
}
