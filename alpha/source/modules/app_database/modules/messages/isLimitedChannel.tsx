// Module ID: 6900
// Function ID: 6901
// Name: isLimitedChannel
// Dependencies: [2044, 4750, 1074, 2]
// Exports: isLimitedChannel, isLimitedChannelId

// Module 6900 (isLimitedChannel)
import ChannelStore from "ChannelStore" /* 2044 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4750 */;

const ChannelTypes = fn(1074).ChannelTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_database/modules/messages/isLimitedChannel.tsx");

export const LIMITED_GUILD_MEMBER_THRESHOLD = 10000;
export const isLimitedChannel = function isLimitedChannel(basicChannel) {
  let guild_id;
  if (basicChannel != null) {
    guild_id = basicChannel.guild_id;
  }
  let num = GuildMemberCountStore.getMemberCount(guild_id);
  if (num == null) {
    num = 0;
  }
  let tmp3 = null != basicChannel;
  if (tmp3) {
    tmp3 = basicChannel.type !== ChannelTypes.DM;
  }
  if (tmp3) {
    tmp3 = basicChannel.type !== ChannelTypes.GROUP_DM;
  }
  if (tmp3) {
    tmp3 = num >= 10000;
  }
  return tmp3;
};
export const isLimitedChannelId = function isLimitedChannelId(arg0) {
  let str = arg0;
  if (arg0 == null) {
    str = "_";
  }
  const basicChannel = ChannelStore.getBasicChannel(str);
  let guild_id;
  if (basicChannel != null) {
    guild_id = basicChannel.guild_id;
  }
  let num = GuildMemberCountStore.getMemberCount(guild_id);
  if (num == null) {
    num = 0;
  }
  let tmp5 = null != basicChannel;
  if (tmp5) {
    tmp5 = basicChannel.type !== ChannelTypes.DM;
  }
  if (tmp5) {
    tmp5 = basicChannel.type !== ChannelTypes.GROUP_DM;
  }
  if (tmp5) {
    tmp5 = num >= 10000;
  }
  return tmp5;
};
