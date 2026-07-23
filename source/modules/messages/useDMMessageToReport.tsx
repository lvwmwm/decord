// Module ID: 11626
// Function ID: 90266
// Name: useDMMessageToReport
// Dependencies: [11627, 11483, 11628, 2]
// Exports: useDMMessageToReport

// Module 11626 (useDMMessageToReport)
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/messages/useDMMessageToReport.tsx");

export const useDMMessageToReport = function useDMMessageToReport(channel, id, arg2) {
  let error;
  let loaded;
  let isRelationshipTypeSpamReportable = arg2;
  let obj = require(11627) /* useIsRelationshipTypeSpamReportable */;
  if (!arg2) {
    isRelationshipTypeSpamReportable = obj.useIsRelationshipTypeSpamReportable(id);
  }
  const longestChannelMessageBeforeReply = require(11483) /* _createForOfIteratorHelperLoose */.useLongestChannelMessageBeforeReply(channel.id, id);
  const obj2 = require(11483) /* _createForOfIteratorHelperLoose */;
  obj = { enabled: isRelationshipTypeSpamReportable };
  const messageRequestPreview = require(11628) /* _createForOfIteratorHelperLoose */.useMessageRequestPreview(channel, obj);
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
