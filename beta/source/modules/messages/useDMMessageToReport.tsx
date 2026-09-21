// Module ID: 12756
// Function ID: 12757
// Name: useDMMessageToReport
// Dependencies: [558, 568, 12757, 12599, 12758, 2]

// Module 12756 (useDMMessageToReport)
import c from "c" /* 568 */;
import useLongestChannelMessageBeforeReply from "useLongestChannelMessageBeforeReply" /* 12599 */;
import useIsRelationshipTypeSpamReportable from "useIsRelationshipTypeSpamReportable" /* 12757 */;
import useMessageRequestPreview from "useMessageRequestPreview" /* 12758 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/useDMMessageToReport.tsx");

export const useDMMessageToReport = ReactCompilerGating.isReactCompilerEnabled() ? ((id, arg1, arg2) => {
  let isRelationshipTypeSpamReportable = arg2;
  const cResult = c.c(6);
  if (!arg2) {
    isRelationshipTypeSpamReportable = obj2.useIsRelationshipTypeSpamReportable(arg1);
  }
  obj2 = useIsRelationshipTypeSpamReportable;
  let longestChannelMessageBeforeReply = useLongestChannelMessageBeforeReply.useLongestChannelMessageBeforeReply(id.id, arg1);
  if (cResult[0] !== isRelationshipTypeSpamReportable) {
    const obj3 = { enabled: isRelationshipTypeSpamReportable };
    cResult[0] = isRelationshipTypeSpamReportable;
    cResult[1] = obj3;
    let tmp6 = obj3;
  } else {
    tmp6 = cResult[1];
  }
  const tmp2Result = useLongestChannelMessageBeforeReply;
  const messageRequestPreview = useMessageRequestPreview.useMessageRequestPreview(id, tmp6);
  const message = messageRequestPreview.message;
  ({ loaded, error } = messageRequestPreview);
  if (longestChannelMessageBeforeReply == null) {
    id = undefined;
    if (message != null) {
      const author = message.author;
      if (author != null) {
        id = author.id;
      }
    }
    let tmp9 = null;
    if (id === arg1) {
      tmp9 = message;
    }
    longestChannelMessageBeforeReply = tmp9;
  }
  if (cResult[2] === (null != longestChannelMessageBeforeReply || loaded || error)) {
    if (cResult[3] === isRelationshipTypeSpamReportable) {
      if (cResult[4] === longestChannelMessageBeforeReply) {
        let tmp11 = cResult[5];
      }
      return tmp11;
    }
  }
  const obj4 = { message: longestChannelMessageBeforeReply, isReportable: isRelationshipTypeSpamReportable, isLoaded: null != longestChannelMessageBeforeReply || loaded || error };
  cResult[2] = null != longestChannelMessageBeforeReply || loaded || error;
  cResult[3] = isRelationshipTypeSpamReportable;
  cResult[4] = longestChannelMessageBeforeReply;
  cResult[5] = obj4;
  tmp11 = obj4;
}) : ((id, arg1, arg2) => {
  let isRelationshipTypeSpamReportable = arg2;
  if (!arg2) {
    isRelationshipTypeSpamReportable = obj.useIsRelationshipTypeSpamReportable(arg1);
  }
  obj = useIsRelationshipTypeSpamReportable;
  const longestChannelMessageBeforeReply = useLongestChannelMessageBeforeReply.useLongestChannelMessageBeforeReply(id.id, arg1);
  const tmp2Result = useLongestChannelMessageBeforeReply;
  const messageRequestPreview = useMessageRequestPreview.useMessageRequestPreview(id, { enabled: isRelationshipTypeSpamReportable });
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
    if (id === arg1) {
      tmp8 = message;
    }
    tmp6 = tmp8;
  }
  return { message: tmp6, isReportable: isRelationshipTypeSpamReportable, isLoaded: null != tmp6 || loaded || error };
});
