// Module ID: 10365
// Function ID: 80024
// Name: ChatViewStickyHeaderAccountSafetyWarnings
// Dependencies: [57, 31, 10098, 33, 10366, 10370, 10371, 10372, 10382, 10389, 10390, 10392, 10394, 10397, 2]

// Module 10365 (ChatViewStickyHeaderAccountSafetyWarnings)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { LOCATION_CONTEXT_MOBILE } from "LOCATION_CONTEXT_MOBILE";
import jsxProd from "jsxProd";

let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function ChatViewStickyHeaderAccountSafetyWarnings(arg0) {
  let channelId;
  let senderId;
  ({ channelId, senderId } = arg0);
  let obj = require(10366) /* useStrangerDangerWarning */;
  const strangerDangerWarning = obj.useStrangerDangerWarning(channelId);
  let obj1 = require(10370) /* useInappropriateConversationBannerForChannel */;
  const inappropriateConversationBannerForChannel = obj1.useInappropriateConversationBannerForChannel(channelId, LOCATION_CONTEXT_MOBILE);
  const likelyAtoWarning = require(10371) /* useLikelyAtoWarning */.useLikelyAtoWarning(channelId);
  if (null != likelyAtoWarning) {
    obj = { channelId, warningId: likelyAtoWarning.id, senderId };
    let tmp4 = callback2(importDefault(10372), obj);
  } else if (null != strangerDangerWarning) {
    obj = { channelId, warningId: strangerDangerWarning.id, senderId };
    tmp4 = callback2(importDefault(10382), obj);
  } else {
    tmp4 = null;
    if (null != inappropriateConversationBannerForChannel) {
      obj1 = { channelId, warningId: inappropriateConversationBannerForChannel.id, senderId };
      tmp4 = callback2(importDefault(10389), obj1);
    }
  }
  return tmp4;
}
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const memoResult = importAllResult.memo(importAllResult.forwardRef((handleScrollToNewMessages) => {
  let clearUnreadsNotice;
  let showUnreadsNotice;
  const channel = handleScrollToNewMessages.channel;
  const tmp = callback(importAllResult.useState(false), 2);
  const importDefault = tmp[1];
  ({ showUnreadsNotice, clearUnreadsNotice } = importDefault(10390)(channel));
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ({
    onChatViewScrolled(isFirstMessageVisible) {
      if (outer1_0.isForumPost()) {
        outer1_1(!isFirstMessageVisible.isFirstMessageVisible);
      }
    }
  }));
  let obj = {};
  let tmp6 = null;
  if (channel.isForumPost()) {
    tmp6 = null;
    if (tmp[0]) {
      obj = { channel };
      tmp6 = callback2(importDefault(10392), obj);
    }
  }
  const items = [tmp6, , , ];
  let tmp10 = null;
  if (channel.isDM()) {
    obj = { channelId: channel.id, senderId: channel.getRecipientId() };
    tmp10 = callback2(ChatViewStickyHeaderAccountSafetyWarnings, obj);
  }
  items[1] = tmp10;
  let tmp13 = null;
  if (showUnreadsNotice) {
    const obj1 = { channel, clearUnreadsNotice };
    tmp13 = callback2(importDefault(10394), obj1);
  }
  items[2] = tmp13;
  items[3] = callback2(importDefault(10397), { channel, handleScrollToNewMessages: handleScrollToNewMessages.scrollToNewMessages });
  obj.children = items;
  return closure_8(closure_7, obj);
}));
const result = require("LOCATION_CONTEXT_MOBILE").fileFinishedImporting("modules/chat/native/ChatViewStickyHeader.tsx");

export default memoResult;
