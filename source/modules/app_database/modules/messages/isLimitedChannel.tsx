// Module ID: 6717
// Function ID: 52232
// Name: isLimitedChannel
// Dependencies: [1348, 4051, 653, 2]
// Exports: isLimitedChannelId

// Module 6717 (isLimitedChannel)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_1 from "_isNativeReflectConstruct";
import { ChannelTypes } from "ME";

function isLimitedChannel(basicChannel) {
  let guild_id;
  if (null != basicChannel) {
    guild_id = basicChannel.guild_id;
  }
  memberCount = memberCount.getMemberCount(guild_id);
  let num = 0;
  if (null != memberCount) {
    num = memberCount;
  }
  let tmp4 = null != basicChannel;
  if (tmp4) {
    tmp4 = basicChannel.type !== ChannelTypes.DM;
  }
  if (tmp4) {
    tmp4 = basicChannel.type !== ChannelTypes.GROUP_DM;
  }
  if (tmp4) {
    tmp4 = num >= 10000;
  }
  return tmp4;
}
const result = require("ME").fileFinishedImporting("modules/app_database/modules/messages/isLimitedChannel.tsx");

export const LIMITED_GUILD_MEMBER_THRESHOLD = 10000;
export { isLimitedChannel };
export const isLimitedChannelId = function isLimitedChannelId(arg0) {
  let str = "_";
  if (null != arg0) {
    str = arg0;
  }
  return isLimitedChannel(basicChannel.getBasicChannel(str));
};
