// Module ID: 10366
// Function ID: 80029
// Name: ChatViewStickyHeaderAccountSafetyWarnings
// Dependencies: [57, 31, 10098, 33, 10367, 10371, 10372, 10373, 10383, 10390, 10391, 10393, 10395, 10398, 2]

// Module 10366 (ChatViewStickyHeaderAccountSafetyWarnings)
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
  let obj = require(10367) /* useStrangerDangerWarning */;
  const strangerDangerWarning = obj.useStrangerDangerWarning(channelId);
  let obj1 = require(10371) /* useInappropriateConversationBannerForChannel */;
  const inappropriateConversationBannerForChannel = obj1.useInappropriateConversationBannerForChannel(channelId, LOCATION_CONTEXT_MOBILE);
  const likelyAtoWarning = require(10372) /* useLikelyAtoWarning */.useLikelyAtoWarning(channelId);
  if (null != likelyAtoWarning) {
    obj = { channelId, warningId: likelyAtoWarning.id, senderId };
    let tmp4 = callback2(importDefault(10373), obj);
  } else if (null != strangerDangerWarning) {
    obj = { channelId, warningId: strangerDangerWarning.id, senderId };
    tmp4 = callback2(importDefault(10383), obj);
  } else {
    tmp4 = null;
    if (null != inappropriateConversationBannerForChannel) {
      obj1 = { channelId, warningId: inappropriateConversationBannerForChannel.id, senderId };
      tmp4 = callback2(importDefault(10390), obj1);
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
  ({ showUnreadsNotice, clearUnreadsNotice } = importDefault(10391)(channel));
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
      tmp6 = callback2(importDefault(10393), obj);
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
    tmp13 = callback2(importDefault(10395), obj1);
  }
  items[2] = tmp13;
  items[3] = callback2(importDefault(10398), { channel, handleScrollToNewMessages: handleScrollToNewMessages.scrollToNewMessages });
  obj.children = items;
  return closure_8(closure_7, obj);
}));
const result = require("LOCATION_CONTEXT_MOBILE").fileFinishedImporting("modules/chat/native/ChatViewStickyHeader.tsx");

export default memoResult;
