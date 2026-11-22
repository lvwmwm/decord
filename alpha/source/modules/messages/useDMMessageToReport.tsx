// Module ID: 13485
// Function ID: 13486
// Name: useDMMessageToReport
// Dependencies: [13486, 13487, 10338, 13335, 13488, 2]
// Exports: useDMMessageToReport

// Module 13485 (useDMMessageToReport)
import useLongestChannelMessageBeforeReply from "useLongestChannelMessageBeforeReply" /* 13335 */;
import useIsRelationshipTypeSpamReportable from "useIsRelationshipTypeSpamReportable" /* 13486 */;
import getApplicationFromBotUserIdDefault from "getApplicationFromBotUserId" /* 13487 */;
import useMessageRequestPreview from "useMessageRequestPreview" /* 13488 */;
import size from "module_2" /* 2 */;

let tmp4;
const useIsOwnedConjureApplicationDefault = tmp4(10338);
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
