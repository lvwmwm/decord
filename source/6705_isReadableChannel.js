// Module ID: 6705
// Function ID: 52107
// Name: isReadableChannel
// Dependencies: []
// Exports: isReadableChannelId

// Module 6705 (isReadableChannel)
let BasicPermissions;
function isReadableChannel(basicChannel) {
  let tmp = null != basicChannel;
  if (tmp) {
    let tmp3 = basicChannel.type === constants.DM;
    if (!tmp3) {
      tmp3 = basicChannel.type === constants.GROUP_DM;
    }
    if (!tmp3) {
      let canBasicChannelResult = isTextChannel(basicChannel.type);
      if (canBasicChannelResult) {
        canBasicChannelResult = closure_2.canBasicChannel(closure_4, basicChannel);
      }
      tmp3 = canBasicChannelResult;
    }
    tmp = tmp3;
  }
  return tmp;
}
const isTextChannel = require(dependencyMap[0]).isTextChannel;
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
const _module = require(dependencyMap[3]);
({ ChannelTypes: closure_3, BasicPermissions } = _module);
let closure_4 = BasicPermissions.VIEW_CHANNEL | BasicPermissions.READ_MESSAGE_HISTORY;
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/app_database/modules/messages/isReadableChannel.tsx");

export { isReadableChannel };
export const isReadableChannelId = function isReadableChannelId(channelId) {
  let tmp = null != channelId;
  if (tmp) {
    tmp = isReadableChannel(basicChannel.getBasicChannel(channelId));
  }
  return tmp;
};
