// Module ID: 11608
// Function ID: 90169
// Name: useDMMessageToReport
// Dependencies: []
// Exports: useDMMessageToReport

// Module 11608 (useDMMessageToReport)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/messages/useDMMessageToReport.tsx");

export const useDMMessageToReport = function useDMMessageToReport(channel, id, arg2) {
  let error;
  let loaded;
  let isRelationshipTypeSpamReportable = arg2;
  let obj = require(dependencyMap[0]);
  if (!arg2) {
    isRelationshipTypeSpamReportable = obj.useIsRelationshipTypeSpamReportable(id);
  }
  const longestChannelMessageBeforeReply = require(dependencyMap[1]).useLongestChannelMessageBeforeReply(channel.id, id);
  const obj2 = require(dependencyMap[1]);
  obj = { enabled: isRelationshipTypeSpamReportable };
  const messageRequestPreview = require(dependencyMap[2]).useMessageRequestPreview(channel, obj);
  const message = messageRequestPreview.message;
  let tmp4 = longestChannelMessageBeforeReply;
  ({ loaded, error } = messageRequestPreview);
  if (null == longestChannelMessageBeforeReply) {
    id = undefined;
    if (null != message) {
      const author = message.author;
      if (null != author) {
        id = author.id;
      }
    }
    let tmp6 = null;
    if (id === id) {
      tmp6 = message;
    }
    tmp4 = tmp6;
  }
  obj = { message: tmp4, isReportable: isRelationshipTypeSpamReportable, isLoaded: null != tmp4 || loaded || error };
  return obj;
};
