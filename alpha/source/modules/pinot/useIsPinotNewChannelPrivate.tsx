// Module ID: 7654
// Function ID: 7655
// Name: useIsPinotNewChannelPrivate
// Dependencies: [4641, 4698, 4663, 504, 7651, 2]
// Exports: useIsPinotNewChannelPrivate

// Module 7654 (useIsPinotNewChannelPrivate)
import PinotEligibility from "PinotEligibility" /* 7651 */;
import ChannelStore from "ChannelStore" /* 4641 */;
import GuildRoleStore from "GuildRoleStore" /* 4698 */;
import GuildStore from "GuildStore" /* 4663 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const result = size.fileFinishedImporting("modules/pinot/useIsPinotNewChannelPrivate.tsx");

export function useIsPinotNewChannelPrivate(guildId, categoryId) {
  _require = guildId;
  dependencyMap = categoryId;
  let obj = require("get initialized");
  const items = [ChannelStore, GuildStore, GuildRoleStore];
  const items1 = [guildId, categoryId];
  return obj.useStateFromStores(items, () => {
    let channel;
    if (null != categoryId) {
      channel = ChannelStore.getChannel(tmp);
    } else {
      channel = GuildStore.getGuild(guildId);
    }
    let tmp6 = null != channel;
    if (tmp6) {
      const obj = PinotEligibility;
      tmp6 = !obj.everyoneHasAccess(channel);
    }
    return tmp6;
  }, items1);
}
