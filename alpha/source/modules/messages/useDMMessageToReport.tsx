// Module ID: 14116
// Function ID: 14117
// Name: useDMMessageToReport
// Dependencies: [14117, 14118, 12176, 13973, 14119, 2]
// Exports: useDMMessageToReport

// Module 14116 (useDMMessageToReport)
import useLongestChannelMessageBeforeReply from "useLongestChannelMessageBeforeReply" /* 13973 */;
import useIsRelationshipTypeSpamReportable from "useIsRelationshipTypeSpamReportable" /* 14117 */;
import getApplicationFromBotUserIdDefault from "getApplicationFromBotUserId" /* 14118 */;
import useMessageRequestPreview from "useMessageRequestPreview" /* 14119 */;
import size from "module_2" /* 2 */;

let tmp4;
const useIsOwnedConjureApplicationDefault = tmp4(12176);
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
