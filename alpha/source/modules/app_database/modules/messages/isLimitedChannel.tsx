// Module ID: 7652
// Function ID: 7653
// Name: isLimitedChannel
// Dependencies: [4857, 5231, 1084, 2]
// Exports: isLimitedChannel, isLimitedChannelId

// Module 7652 (isLimitedChannel)
import Constants from "Constants" /* 1084 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 5231 */;
import size from "module_2" /* 2 */;

const ChannelTypes = Constants.ChannelTypes;
const result = size.fileFinishedImporting("modules/app_database/modules/messages/isLimitedChannel.tsx");

export const LIMITED_GUILD_MEMBER_THRESHOLD = 10000;
export function isLimitedChannel(basicChannel) {
  let guild_id;
  const getMemberCount = GuildMemberCountStore.getMemberCount;
  if (basicChannel != null) {
    guild_id = basicChannel.guild_id;
  }
  let num = getMemberCount(guild_id);
  if (num == null) {
    num = 0;
  }
  return null != basicChannel && basicChannel.type !== ChannelTypes.DM && basicChannel.type !== ChannelTypes.GROUP_DM && num >= 10000;
}
export function isLimitedChannelId(arg0) {
  let str = arg0;
  const getBasicChannel = ChannelStore.getBasicChannel;
  if (arg0 == null) {
    str = "_";
  }
  const basicChannel = getBasicChannel(str);
  let guild_id;
  const getMemberCount = GuildMemberCountStore.getMemberCount;
  if (basicChannel != null) {
    guild_id = basicChannel.guild_id;
  }
  let num = getMemberCount(guild_id);
  if (num == null) {
    num = 0;
  }
  return null != basicChannel && basicChannel.type !== ChannelTypes.DM && basicChannel.type !== ChannelTypes.GROUP_DM && num >= 10000;
}
