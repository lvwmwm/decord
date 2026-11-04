// Module ID: 14384
// Function ID: 14385
// Name: useDMMessageToReport
// Dependencies: [14385, 14386, 12560, 14241, 14387, 2]
// Exports: useDMMessageToReport

// Module 14384 (useDMMessageToReport)
import useLongestChannelMessageBeforeReply from "useLongestChannelMessageBeforeReply" /* 14241 */;
import useIsRelationshipTypeSpamReportable from "useIsRelationshipTypeSpamReportable" /* 14385 */;
import getApplicationFromBotUserIdDefault from "getApplicationFromBotUserId" /* 14386 */;
import useMessageRequestPreview from "useMessageRequestPreview" /* 14387 */;
import size from "module_2" /* 2 */;

let tmp4;
const useIsOwnedConjureApplicationDefault = tmp4(12560);
const result = size.fileFinishedImporting("modules/messages/useDMMessageToReport.tsx");

export function useDMMessageToReport(channel, id, arg2) {
  let error;
  let loaded;
  const obj = useIsRelationshipTypeSpamReportable;
  let isRelationshipTypeSpamReportable = obj.useIsRelationshipTypeSpamReportable(id);
  let tmp6 = null;
  const tmp5 = getApplicationFromBotUserIdDefault;
  if (arg2) {
    tmp6 = id;
  }
  const tmp5Result = tmp5(tmp6);
  useIsOwnedConjureApplicationDefault;
  if (arg2) {
    id = undefined;
    if (tmp5Result != null) {
      id = tmp5Result.id;
    }
  }
  if (arg2) {
    isRelationshipTypeSpamReportable = true !== tmp11;
  }
  const tmpResult = useLongestChannelMessageBeforeReply;
  const longestChannelMessageBeforeReply = tmpResult.useLongestChannelMessageBeforeReply(channel.id, id);
  const tmpResult2 = useMessageRequestPreview;
  const messageRequestPreview = tmpResult2.useMessageRequestPreview(channel, { enabled: isRelationshipTypeSpamReportable });
  const message = messageRequestPreview.message;
  let tmp14 = longestChannelMessageBeforeReply;
  ({ loaded, error } = messageRequestPreview);
  if (longestChannelMessageBeforeReply == null) {
    let id1;
    if (message != null) {
      const author = message.author;
      if (author != null) {
        id1 = author.id;
      }
    }
    let tmp16 = null;
    if (id1 === id) {
      tmp16 = message;
    }
    tmp14 = tmp16;
  }
  return { message: tmp14, isReportable: isRelationshipTypeSpamReportable, isLoaded: null != tmp14 || loaded || error };
}
