// Module ID: 7684
// Function ID: 7685
// Name: useIsPinotNewChannelPrivate
// Dependencies: [4672, 4729, 4694, 504, 7681, 2]
// Exports: useIsPinotNewChannelPrivate

// Module 7684 (useIsPinotNewChannelPrivate)
import PinotEligibility from "PinotEligibility" /* 7681 */;
import ChannelStore from "ChannelStore" /* 4672 */;
import GuildRoleStore from "GuildRoleStore" /* 4729 */;
import GuildStore from "GuildStore" /* 4694 */;
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
