// Module ID: 7653
// Function ID: 7654
// Name: useIsPinotNewChannelPrivate
// Dependencies: [4643, 4700, 4665, 504, 7650, 2]
// Exports: useIsPinotNewChannelPrivate

// Module 7653 (useIsPinotNewChannelPrivate)
import PinotEligibility from "PinotEligibility" /* 7650 */;
import ChannelStore from "ChannelStore" /* 4643 */;
import GuildRoleStore from "GuildRoleStore" /* 4700 */;
import GuildStore from "GuildStore" /* 4665 */;
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
