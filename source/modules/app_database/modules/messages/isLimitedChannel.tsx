// Module ID: 6712
// Function ID: 52159
// Name: isLimitedChannel
// Dependencies: []
// Exports: isLimitedChannelId

// Module 6712 (isLimitedChannel)
function isLimitedChannel(basicChannel) {
  let guild_id;
  if (null != basicChannel) {
    guild_id = basicChannel.guild_id;
  }
  const memberCount = memberCount.getMemberCount(guild_id);
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
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
const ChannelTypes = arg1(dependencyMap[2]).ChannelTypes;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/app_database/modules/messages/isLimitedChannel.tsx");

export const LIMITED_GUILD_MEMBER_THRESHOLD = 10000;
export { isLimitedChannel };
export const isLimitedChannelId = function isLimitedChannelId(arg0) {
  let str = "_";
  if (null != arg0) {
    str = arg0;
  }
  return isLimitedChannel(basicChannel.getBasicChannel(str));
};
