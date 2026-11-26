// Module ID: 8553
// Function ID: 8554
// Name: useIsPinotNewChannelPrivate
// Dependencies: [4892, 4949, 4914, 504, 8550, 2]
// Exports: useIsPinotNewChannelPrivate

// Module 8553 (useIsPinotNewChannelPrivate)
import PinotEligibility from "PinotEligibility" /* 8550 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import GuildRoleStore from "GuildRoleStore" /* 4949 */;
import GuildStore from "GuildStore" /* 4914 */;
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
