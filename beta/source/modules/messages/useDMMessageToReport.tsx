// Module ID: 11999
// Function ID: 12000
// Name: useDMMessageToReport
// Dependencies: [558, 576, 12000, 11837, 12001, 2]

// Module 11999 (useDMMessageToReport)
import react from "react" /* 576 */;
import useLongestChannelMessageBeforeReply from "useLongestChannelMessageBeforeReply" /* 11837 */;
import useIsRelationshipTypeSpamReportable from "useIsRelationshipTypeSpamReportable" /* 12000 */;
import useMessageRequestPreview from "useMessageRequestPreview" /* 12001 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let id;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((id, arg1, arg2) => {
  let error;
  let loaded;
  let tmp6;
  let isRelationshipTypeSpamReportable = arg2;
  const obj = react;
  const cResult = obj.c(6);
  const obj2 = useIsRelationshipTypeSpamReportable;
  if (!arg2) {
    isRelationshipTypeSpamReportable = obj2.useIsRelationshipTypeSpamReportable(arg1);
  }
  const tmp2Result = useLongestChannelMessageBeforeReply;
  let longestChannelMessageBeforeReply = tmp2Result.useLongestChannelMessageBeforeReply(id.id, arg1);
  if (cResult[0] !== isRelationshipTypeSpamReportable) {
    const obj3 = { enabled: isRelationshipTypeSpamReportable };
    cResult[0] = isRelationshipTypeSpamReportable;
    cResult[1] = obj3;
    tmp6 = obj3;
  } else {
    tmp6 = cResult[1];
  }
  const tmp2Result2 = useMessageRequestPreview;
  const messageRequestPreview = tmp2Result2.useMessageRequestPreview(id, tmp6);
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
      let tmp11;
      if (cResult[4] === longestChannelMessageBeforeReply) {
        tmp11 = cResult[5];
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
  let error;
  let loaded;
  let isRelationshipTypeSpamReportable = arg2;
  const obj = useIsRelationshipTypeSpamReportable;
  if (!arg2) {
    isRelationshipTypeSpamReportable = obj.useIsRelationshipTypeSpamReportable(arg1);
  }
  const tmp2Result = useLongestChannelMessageBeforeReply;
  const longestChannelMessageBeforeReply = tmp2Result.useLongestChannelMessageBeforeReply(id.id, arg1);
  const tmp2Result2 = useMessageRequestPreview;
  const messageRequestPreview = tmp2Result2.useMessageRequestPreview(id, { enabled: isRelationshipTypeSpamReportable });
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
const result = size.fileFinishedImporting("modules/messages/useDMMessageToReport.tsx");

export const useDMMessageToReport = tmp2;
