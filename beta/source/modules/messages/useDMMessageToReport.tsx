// Module ID: 12874
// Function ID: 12875
// Name: useDMMessageToReport
// Dependencies: [12875, 12733, 12876, 2]
// Exports: useDMMessageToReport

// Module 12874 (useDMMessageToReport)
import useLongestChannelMessageBeforeReply from "useLongestChannelMessageBeforeReply" /* 12733 */;
import useIsRelationshipTypeSpamReportable from "useIsRelationshipTypeSpamReportable" /* 12875 */;
import useMessageRequestPreview from "useMessageRequestPreview" /* 12876 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/useDMMessageToReport.tsx");

export const useDMMessageToReport = function useDMMessageToReport(channel, id, arg2) {
  let isRelationshipTypeSpamReportable = arg2;
  if (!arg2) {
    isRelationshipTypeSpamReportable = obj.useIsRelationshipTypeSpamReportable(id);
  }
  obj = useIsRelationshipTypeSpamReportable;
  const longestChannelMessageBeforeReply = useLongestChannelMessageBeforeReply.useLongestChannelMessageBeforeReply(channel.id, id);
  const tmp2Result = useLongestChannelMessageBeforeReply;
  const messageRequestPreview = useMessageRequestPreview.useMessageRequestPreview(channel, { enabled: isRelationshipTypeSpamReportable });
  const message = messageRequestPreview.message;
  let tmp6 = longestChannelMessageBeforeReply;
  ({ loaded, error } = messageRequestPreview);
  if (longestChannelMessageBeforeReply == null) {
    id = undefined;
    if (message != null) {
      const author = message.author;
      if (author != null) {
        id = author.id;
      }
    }
    let tmp8 = null;
    if (id === id) {
      tmp8 = message;
    }
    tmp6 = tmp8;
  }
  return { message: tmp6, isReportable: isRelationshipTypeSpamReportable, isLoaded: null != tmp6 || loaded || error };
};
