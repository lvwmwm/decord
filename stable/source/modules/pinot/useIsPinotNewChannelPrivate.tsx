// Module ID: 9056
// Function ID: 9057
// Name: useIsPinotNewChannelPrivate
// Dependencies: [4863, 4920, 4885, 504, 9053, 2]
// Exports: useIsPinotNewChannelPrivate

// Module 9056 (useIsPinotNewChannelPrivate)
import PinotEligibility from "PinotEligibility" /* 9053 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import GuildRoleStore from "GuildRoleStore" /* 4920 */;
import GuildStore from "GuildStore" /* 4885 */;
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
