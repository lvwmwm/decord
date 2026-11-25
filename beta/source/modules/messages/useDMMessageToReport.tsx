// Module ID: 13488
// Function ID: 13489
// Name: useDMMessageToReport
// Dependencies: [13489, 13490, 10343, 13338, 13491, 2]
// Exports: useDMMessageToReport

// Module 13488 (useDMMessageToReport)
import useLongestChannelMessageBeforeReply from "useLongestChannelMessageBeforeReply" /* 13338 */;
import useIsRelationshipTypeSpamReportable from "useIsRelationshipTypeSpamReportable" /* 13489 */;
import getApplicationFromBotUserIdDefault from "getApplicationFromBotUserId" /* 13490 */;
import useMessageRequestPreview from "useMessageRequestPreview" /* 13491 */;
import size from "module_2" /* 2 */;

let tmp4;
const useIsOwnedConjureApplicationDefault = tmp4(10343);
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
