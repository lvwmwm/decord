// Module ID: 7773
// Function ID: 7774
// Name: useIsPinotNewChannelPrivate
// Dependencies: [4762, 4819, 4784, 504, 7770, 2]
// Exports: useIsPinotNewChannelPrivate

// Module 7773 (useIsPinotNewChannelPrivate)
import PinotEligibility from "PinotEligibility" /* 7770 */;
import ChannelStore from "ChannelStore" /* 4762 */;
import GuildRoleStore from "GuildRoleStore" /* 4819 */;
import GuildStore from "GuildStore" /* 4784 */;
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
