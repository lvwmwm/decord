// Module ID: 8511
// Function ID: 8512
// Name: useIsPinotNewChannelPrivate
// Dependencies: [4861, 4918, 4883, 504, 8508, 2]
// Exports: useIsPinotNewChannelPrivate

// Module 8511 (useIsPinotNewChannelPrivate)
import PinotEligibility from "PinotEligibility" /* 8508 */;
import ChannelStore from "ChannelStore" /* 4861 */;
import GuildRoleStore from "GuildRoleStore" /* 4918 */;
import GuildStore from "GuildStore" /* 4883 */;
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
