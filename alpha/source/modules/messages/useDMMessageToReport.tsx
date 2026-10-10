// Module ID: 12329
// Function ID: 12330
// Name: useDMMessageToReport
// Dependencies: [558, 576, 12330, 12331, 12332, 12168, 12333, 2]

// Module 12329 (useDMMessageToReport)
import react from "react" /* 576 */;
import useLongestChannelMessageBeforeReply from "useLongestChannelMessageBeforeReply" /* 12168 */;
import useIsRelationshipTypeSpamReportable from "useIsRelationshipTypeSpamReportable" /* 12330 */;
import getApplicationFromBotUserIdDefault from "getApplicationFromBotUserId" /* 12331 */;
import useMessageRequestPreview from "useMessageRequestPreview" /* 12333 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp5;
const useIsOwnedConjureApplicationDefault = tmp5(12332);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDMMessageToReport(id, arg1, arg2) {
  let error;
  let loaded;
  let message;
  let tmp14;
  const obj = react;
  const cResult = obj.c(6);
  const obj2 = useIsRelationshipTypeSpamReportable;
  let isRelationshipTypeSpamReportable = obj2.useIsRelationshipTypeSpamReportable(arg1);
  let tmp7 = null;
  const tmp6 = getApplicationFromBotUserIdDefault;
  if (arg2) {
    tmp7 = arg1;
  }
  const tmp6Result = tmp6(tmp7);
  useIsOwnedConjureApplicationDefault;
  if (arg2) {
    id = undefined;
    if (tmp6Result != null) {
      id = tmp6Result.id;
    }
    if (id == null) {
      id = arg1;
    }
  }
  if (arg2) {
    isRelationshipTypeSpamReportable = true !== tmp12;
  }
  const tmpResult = useLongestChannelMessageBeforeReply;
  let longestChannelMessageBeforeReply = tmpResult.useLongestChannelMessageBeforeReply(id.id, arg1);
  if (cResult[0] !== isRelationshipTypeSpamReportable) {
    const obj3 = { enabled: isRelationshipTypeSpamReportable };
    cResult[0] = isRelationshipTypeSpamReportable;
    cResult[1] = obj3;
    tmp14 = obj3;
  } else {
    tmp14 = cResult[1];
  }
  const tmpResult2 = useMessageRequestPreview;
  const messageRequestPreview = tmpResult2.useMessageRequestPreview(id, tmp14);
  ({ message, loaded, error } = messageRequestPreview);
  if (longestChannelMessageBeforeReply == null) {
    let id1;
    if (message != null) {
      const author = message.author;
      if (author != null) {
        id1 = author.id;
      }
    }
    let tmp17 = null;
    if (id1 === arg1) {
      tmp17 = message;
    }
    longestChannelMessageBeforeReply = tmp17;
  }
  if (cResult[2] === (null != longestChannelMessageBeforeReply || loaded || error)) {
    if (cResult[3] === isRelationshipTypeSpamReportable) {
      let tmp19;
      if (cResult[4] === longestChannelMessageBeforeReply) {
        tmp19 = cResult[5];
      }
      return tmp19;
    }
  }
  const obj4 = { message: longestChannelMessageBeforeReply, isReportable: isRelationshipTypeSpamReportable, isLoaded: null != longestChannelMessageBeforeReply || loaded || error };
  cResult[2] = null != longestChannelMessageBeforeReply || loaded || error;
  cResult[3] = isRelationshipTypeSpamReportable;
  cResult[4] = longestChannelMessageBeforeReply;
  cResult[5] = obj4;
  tmp19 = obj4;
}) : (function useDMMessageToReport(id, arg1, arg2) {
  let error;
  let loaded;
  const obj = useIsRelationshipTypeSpamReportable;
  let isRelationshipTypeSpamReportable = obj.useIsRelationshipTypeSpamReportable(arg1);
  let tmp6 = null;
  const tmp5 = getApplicationFromBotUserIdDefault;
  if (arg2) {
    tmp6 = arg1;
  }
  const tmp5Result = tmp5(tmp6);
  useIsOwnedConjureApplicationDefault;
  if (arg2) {
    id = undefined;
    if (tmp5Result != null) {
      id = tmp5Result.id;
    }
    if (id == null) {
      id = arg1;
    }
  }
  if (arg2) {
    isRelationshipTypeSpamReportable = true !== tmp11;
  }
  const tmpResult = useLongestChannelMessageBeforeReply;
  const longestChannelMessageBeforeReply = tmpResult.useLongestChannelMessageBeforeReply(id.id, arg1);
  const tmpResult2 = useMessageRequestPreview;
  const messageRequestPreview = tmpResult2.useMessageRequestPreview(id, { enabled: isRelationshipTypeSpamReportable });
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
    if (id1 === arg1) {
      tmp16 = message;
    }
    tmp14 = tmp16;
  }
  return { message: tmp14, isReportable: isRelationshipTypeSpamReportable, isLoaded: null != tmp14 || loaded || error };
});
const result = size.fileFinishedImporting("modules/messages/useDMMessageToReport.tsx");

export const useDMMessageToReport = tmp2;
