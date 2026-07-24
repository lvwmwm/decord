// Module ID: 12899
// Function ID: 100167
// Name: filterOutMessageRequestsAndSpam
// Dependencies: [5602, 5603, 21, 2]
// Exports: filterOutMessageRequestsAndSpam, filterOutMessageRequestsAndSpamById, isMessageRequestOrSpamRequest, shouldShowMessageRequests

// Module 12899 (filterOutMessageRequestsAndSpam)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";

const result = require("DISCORD_EPOCH").fileFinishedImporting("modules/message_request/MessageRequestUtils.tsx");

export const filterOutMessageRequestsAndSpam = function filterOutMessageRequestsAndSpam(arg0) {
  let importDefault;
  let tmp = arg1;
  if (arg1 === undefined) {
    let items = [_isNativeReflectConstruct, closure_3];
    tmp = items;
  }
  [importDefault, ] = tmp;
  return (function channelArrayToObject(arr2) {
    return Array.from(arr2).reduce((arg0, arg1) => {
      let tmp;
      [r10006, tmp] = arg1;
      return Object.assign(arg0, { [r10006]: tmp });
    }, {});
  })((function channelRecordToArray(arg0) {
    let closure_0 = arg0;
    const keys = nextResult(nextResult1[2]).keys(arg0);
    return keys.map((arg0) => {
      const items = [arg0, table[arg0]];
      return items;
    });
  })(arg0).filter((arg0) => {
    let tmp2;
    [, tmp2] = arg0;
    const tmp3 = !nextResult.isMessageRequest(tmp2.id);
    let tmp4 = tmp3;
    if (tmp3) {
      tmp4 = !nextResult1.isSpam(tmp.id);
    }
    return tmp4;
  }));
};
export const filterOutMessageRequestsAndSpamById = function filterOutMessageRequestsAndSpamById(unreadPrivateChannelIds, items) {
  let importDefault;
  let tmp = items;
  if (items === undefined) {
    items = [_isNativeReflectConstruct, closure_3];
    tmp = items;
  }
  [importDefault, ] = tmp;
  return unreadPrivateChannelIds.filter((id) => {
    let tmp = !nextResult.isMessageRequest(id);
    if (tmp) {
      tmp = !nextResult1.isSpam(id);
    }
    return tmp;
  });
};
export const isMessageRequestOrSpamRequest = function isMessageRequestOrSpamRequest(channelId, items) {
  let obj;
  let obj2;
  let tmp = items;
  if (items === undefined) {
    items = [_isNativeReflectConstruct, closure_3];
    tmp = items;
  }
  [obj, obj2] = tmp;
  return obj.isMessageRequest(channelId) || obj2.isSpam(channelId);
};
export const shouldShowMessageRequests = function shouldShowMessageRequests() {
  let obj;
  let obj2;
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [_isNativeReflectConstruct, closure_3];
    tmp = items;
  }
  [obj, obj2] = tmp;
  const spamChannelsCount = obj2.getSpamChannelsCount();
  return obj.getMessageRequestsCount() > 0 || spamChannelsCount > 0;
};
