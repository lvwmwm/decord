// Module ID: 9208
// Function ID: 9209
// Name: useIsPinotNewChannelPrivate
// Dependencies: [4992, 5049, 5014, 504, 9205, 2]
// Exports: useIsPinotNewChannelPrivate

// Module 9208 (useIsPinotNewChannelPrivate)
import PinotEligibility from "PinotEligibility" /* 9205 */;
import ChannelStore from "ChannelStore" /* 4992 */;
import GuildRoleStore from "GuildRoleStore" /* 5049 */;
import GuildStore from "GuildStore" /* 5014 */;
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
