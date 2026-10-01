// Module ID: 10904
// Function ID: 10905
// Name: ChatViewStickyHeader
// Dependencies: [32, 19, 10905, 21, 10906, 10432, 10909, 10910, 10925, 10931, 10955, 10957, 10961, 10964, 2]

// Module 10904 (ChatViewStickyHeader)
import useInappropriateConversationBannerForChannel from "useInappropriateConversationBannerForChannel" /* 10432 */;
import Constants from "Constants" /* 10905 */;
import useStrangerDangerWarning from "useStrangerDangerWarning" /* 10906 */;
import useLikelyAtoWarning from "useLikelyAtoWarning" /* 10909 */;
import LikelyAtoWarningBannerDefault from "LikelyAtoWarningBanner" /* 10910 */;
import StrangerDangerWarningBannerDefault from "StrangerDangerWarningBanner" /* 10925 */;
import InappropriateConversationWarningBannerDefault from "InappropriateConversationWarningBanner" /* 10931 */;
import useUnreadSettingNoticeDefault from "useUnreadSettingNotice" /* 10955 */;
import ChatBannerDefault from "ChatBanner" /* 10964 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let channel;

let metroImportAll;
let metroImportDefault;
let metroRequire;
function ChatViewStickyHeaderAccountSafetyWarnings(arg0) {
  let channelId;
  let senderId;
  let tmp5;
  ({ channelId, senderId } = arg0);
  const obj = useStrangerDangerWarning;
  const strangerDangerWarning = obj.useStrangerDangerWarning(channelId);
  const obj2 = useInappropriateConversationBannerForChannel;
  const inappropriateConversationBannerForChannel = obj2.useInappropriateConversationBannerForChannel(channelId, LOCATION_CONTEXT_MOBILE);
  const obj3 = useLikelyAtoWarning;
  const likelyAtoWarning = obj3.useLikelyAtoWarning(channelId);
  if (null != likelyAtoWarning) {
    const obj4 = { channelId, warningId: likelyAtoWarning.id, senderId };
    tmp5 = metroRequire(LikelyAtoWarningBannerDefault, obj4);
  } else if (null != strangerDangerWarning) {
    const obj5 = { channelId, warningId: strangerDangerWarning.id, senderId };
    tmp5 = metroRequire(StrangerDangerWarningBannerDefault, obj5);
  } else {
    tmp5 = null;
    if (null != inappropriateConversationBannerForChannel) {
      const obj6 = { channelId, warningId: inappropriateConversationBannerForChannel.id, senderId };
      tmp5 = metroRequire(InappropriateConversationWarningBannerDefault, obj6);
    }
  }
  return tmp5;
}
const LOCATION_CONTEXT_MOBILE = Constants.LOCATION_CONTEXT_MOBILE;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
const memoResult = react.memo(react.forwardRef((channel, ref) => {
  let clearUnreadsNotice;
  let closure_1;
  let first;
  let showUnreadsNotice;
  channel = channel.channel;
  closure_1 = undefined;
  const scrollToNewMessages = channel.scrollToNewMessages;
  [first, closure_1] = react.useState(false);
  ({ showUnreadsNotice, clearUnreadsNotice } = useUnreadSettingNoticeDefault(channel));
  useUnreadSettingNoticeDefault(channel);
  const imperativeHandle = react.useImperativeHandle(ref, () => {
    let forumPost;
    return {
      onChatViewScrolled(isFirstMessageVisible) {
        isFirstMessageVisible = isFirstMessageVisible.isFirstMessageVisible;
        if (forumPost.isForumPost()) {
          closure_1_1(!isFirstMessageVisible);
        }
      }
    };
  });
  let tmp9 = null;
  const tmp7 = metroImportAll;
  const tmp8 = metroImportDefault;
  if (channel.isForumPost()) {
    tmp9 = null;
    if (first) {
      const obj = { channel };
      tmp9 = metroRequire(tmp3(10957), obj);
    }
  }
  const items = [tmp9, , , ];
  let tmp11 = null;
  if (channel.isDM()) {
    const obj2 = { channelId: channel.id, senderId: channel.getRecipientId() };
    tmp11 = metroRequire(ChatViewStickyHeaderAccountSafetyWarnings, obj2);
  }
  items[1] = tmp11;
  let tmp14 = null;
  if (showUnreadsNotice) {
    const obj3 = { channel, clearUnreadsNotice };
    tmp14 = metroRequire(tmp3(10961), obj3);
  }
  const obj4 = { children: items };
  items[2] = tmp14;
  items[3] = metroRequire(ChatBannerDefault, { channel, handleScrollToNewMessages: scrollToNewMessages });
  return tmp7(tmp8, obj4);
}));
const result = size.fileFinishedImporting("modules/chat/native/ChatViewStickyHeader.tsx");

export default memoResult;
