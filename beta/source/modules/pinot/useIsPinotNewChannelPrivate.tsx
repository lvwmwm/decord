// Module ID: 9169
// Function ID: 9170
// Name: useIsPinotNewChannelPrivate
// Dependencies: [5019, 5076, 5041, 504, 9166, 2]
// Exports: useIsPinotNewChannelPrivate

// Module 9169 (useIsPinotNewChannelPrivate)
import PinotEligibility from "PinotEligibility" /* 9166 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import GuildRoleStore from "GuildRoleStore" /* 5076 */;
import GuildStore from "GuildStore" /* 5041 */;
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
