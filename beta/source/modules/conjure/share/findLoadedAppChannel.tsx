// Module ID: 11718
// Function ID: 11719
// Name: findLoadedAppChannel
// Dependencies: [4989, 5072, 1072, 2]
// Exports: default

// Module 11718 (findLoadedAppChannel)
import ChannelStore from "ChannelStore" /* 4989 */;
import PermissionStore from "PermissionStore" /* 5072 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
function isViewableAppChannel(channel, arg1) {
  const canResult = null != channel && channel.type === constants.GUILD_APP && channel.application_id === arg1 && PermissionStore.can(constants2.VIEW_CHANNEL, channel);
  return canResult;
}
({ ChannelTypes: c2, Permissions: c3 } = Constants);
const result = size.fileFinishedImporting("modules/conjure/share/findLoadedAppChannel.tsx");

export default function findLoadedAppChannel(guildId, arg1, channelId) {
  const channel = ChannelStore.getChannel(channelId);
  let guild_id;
  const obj = ChannelStore;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  if (guild_id === guildId) {
    if (isViewableAppChannel(channel, arg1)) {
      return { guildId, channelId };
    }
  }
  let tmp4 = null;
  const values = Object.values(obj.getMutableGuildChannelsForGuild(guildId));
  const iter = values[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp7 = nextResult;
    let tmp9 = null == tmp4;
    if (!tmp9) {
      tmp9 = tmp7.position < tmp4.position;
    }
    if (tmp9) {
      tmp9 = isViewableAppChannel(tmp7, arg1);
    }
    if (tmp9) {
      tmp4 = nextResult;
    }
    continue;
  }
  let tmp14 = null;
  if (null != tmp4) {
    tmp14 = { guildId, channelId: tmp4.id };
    const obj3 = { guildId, channelId: tmp4.id };
  }
  return tmp14;
};
