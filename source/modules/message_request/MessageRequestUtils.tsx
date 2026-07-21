// Module ID: 12726
// Function ID: 97655
// Name: filterOutMessageRequestsAndSpam
// Dependencies: []
// Exports: filterOutMessageRequestsAndSpam, filterOutMessageRequestsAndSpamById, isMessageRequestOrSpamRequest, shouldShowMessageRequests

// Module 12726 (filterOutMessageRequestsAndSpam)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/message_request/MessageRequestUtils.tsx");

export const filterOutMessageRequestsAndSpam = function filterOutMessageRequestsAndSpam(arg0) {
  let dependencyMap;
  let importDefault;
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [closure_2, closure_3];
    tmp = items;
  }
  [importDefault, dependencyMap] = tmp;
  return function channelArrayToObject(arr2) {
    return Array.from(arr2).reduce((arg0, arg1) => {
      let tmp;
      [r10006, tmp] = arg1;
      return Object.assign(arg0, { [r10006]: tmp });
    }, {});
  }(function channelRecordToArray(arg0) {
    const keys = arg0(nextResult1[2]).keys(arg0);
    return keys.map((arg0) => {
      const items = [arg0, arg0[arg0]];
      return items;
    });
  }(arg0).filter((arg0) => {
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
  let dependencyMap;
  let importDefault;
  let tmp = items;
  if (items === undefined) {
    items = [closure_2, closure_3];
    tmp = items;
  }
  [importDefault, dependencyMap] = tmp;
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
    items = [closure_2, closure_3];
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
    const items = [closure_2, closure_3];
    tmp = items;
  }
  [obj, obj2] = tmp;
  const spamChannelsCount = obj2.getSpamChannelsCount();
  return obj.getMessageRequestsCount() > 0 || spamChannelsCount > 0;
};
