// Module ID: 10385
// Function ID: 80066
// Name: ChatViewStickyHeaderAccountSafetyWarnings
// Dependencies: []

// Module 10385 (ChatViewStickyHeaderAccountSafetyWarnings)
function ChatViewStickyHeaderAccountSafetyWarnings(arg0) {
  let channelId;
  let senderId;
  ({ channelId, senderId } = arg0);
  let obj = arg1(dependencyMap[4]);
  const strangerDangerWarning = obj.useStrangerDangerWarning(channelId);
  let obj1 = arg1(dependencyMap[5]);
  const inappropriateConversationBannerForChannel = obj1.useInappropriateConversationBannerForChannel(channelId, LOCATION_CONTEXT_MOBILE);
  const likelyAtoWarning = arg1(dependencyMap[6]).useLikelyAtoWarning(channelId);
  if (null != likelyAtoWarning) {
    obj = { channelId, warningId: likelyAtoWarning.id, senderId };
    let tmp4 = callback2(importDefault(dependencyMap[7]), obj);
  } else if (null != strangerDangerWarning) {
    obj = { channelId, warningId: strangerDangerWarning.id, senderId };
    tmp4 = callback2(importDefault(dependencyMap[8]), obj);
  } else {
    tmp4 = null;
    if (null != inappropriateConversationBannerForChannel) {
      obj1 = { channelId, warningId: inappropriateConversationBannerForChannel.id, senderId };
      tmp4 = callback2(importDefault(dependencyMap[9]), obj1);
    }
  }
  return tmp4;
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const LOCATION_CONTEXT_MOBILE = arg1(dependencyMap[2]).LOCATION_CONTEXT_MOBILE;
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo(importAllResult.forwardRef((handleScrollToNewMessages) => {
  let clearUnreadsNotice;
  let showUnreadsNotice;
  const channel = handleScrollToNewMessages.channel;
  const arg1 = channel;
  const tmp = callback(importAllResult.useState(false), 2);
  const importDefault = tmp[1];
  ({ showUnreadsNotice, clearUnreadsNotice } = importDefault(dependencyMap[10])(channel));
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ({
    onChatViewScrolled(isFirstMessageVisible) {
      if (forumPost.isForumPost()) {
        callback(!isFirstMessageVisible.isFirstMessageVisible);
      }
    }
  }));
  let obj = {};
  let tmp6 = null;
  if (channel.isForumPost()) {
    tmp6 = null;
    if (tmp[0]) {
      obj = { channel };
      tmp6 = callback2(importDefault(dependencyMap[11]), obj);
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
    tmp13 = callback2(importDefault(dependencyMap[12]), obj1);
  }
  items[2] = tmp13;
  items[3] = callback2(importDefault(dependencyMap[13]), { channel, handleScrollToNewMessages: handleScrollToNewMessages.scrollToNewMessages });
  obj.children = items;
  return closure_8(closure_7, obj);
}));
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/chat/native/ChatViewStickyHeader.tsx");

export default memoResult;
