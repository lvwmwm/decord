// Module ID: 11413
// Function ID: 11414
// Name: ChatViewStickyHeader
// Dependencies: [32, 19, 11414, 21, 11415, 11420, 11424, 11425, 11444, 11450, 11474, 11477, 11507, 11511, 11514, 2]

// Module 11413 (ChatViewStickyHeader)
import Constants from "Constants" /* 11414 */;
import useStrangerDangerWarning from "useStrangerDangerWarning" /* 11415 */;
import useInappropriateConversationBannerForChannel from "useInappropriateConversationBannerForChannel" /* 11420 */;
import useLikelyAtoWarning from "useLikelyAtoWarning" /* 11424 */;
import LikelyAtoWarningBannerDefault from "LikelyAtoWarningBanner" /* 11425 */;
import StrangerDangerWarningBannerDefault from "StrangerDangerWarningBanner" /* 11444 */;
import InappropriateConversationWarningBannerDefault from "InappropriateConversationWarningBanner" /* 11450 */;
import useUnreadSettingNoticeDefault from "useUnreadSettingNotice" /* 11474 */;
import PinotLazy from "PinotLazy" /* 11477 */;
import ChatBannerDefault from "ChatBanner" /* 11514 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

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
const memoResult = react.memo(function StickyHeader(channel) {
  let clearUnreadsNotice;
  let closure_1;
  let first;
  let ref;
  let scrollToNewMessages;
  let showUnreadsNotice;
  channel = channel.channel;
  closure_1 = undefined;
  ({ scrollToNewMessages, ref } = channel);
  [first, closure_1] = react.useState(false);
  ({ showUnreadsNotice, clearUnreadsNotice } = useUnreadSettingNoticeDefault(channel));
  useUnreadSettingNoticeDefault(channel);
  const obj = PinotLazy;
  const pinotMemberNotice = obj.usePinotMemberNotice(channel, "mobile_chat_sticky_header");
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
  let tmp11 = null;
  const tmp10 = metroImportDefault;
  const tmp9 = metroImportAll;
  if (pinotMemberNotice.visible) {
    const obj2 = { channel, onDismiss: pinotMemberNotice.dismiss };
    tmp11 = metroRequire(PinotLazy.PinotMemberNoticeBar, obj2);
  }
  const items = [tmp11, , , , ];
  let tmp13 = null;
  if (channel.isForumPost()) {
    tmp13 = null;
    if (first) {
      const obj3 = { channel };
      tmp13 = metroRequire(tmp3(11507), obj3);
    }
  }
  items[1] = tmp13;
  let tmp15 = null;
  if (channel.isDM()) {
    const obj4 = { channelId: channel.id, senderId: channel.getRecipientId() };
    tmp15 = metroRequire(ChatViewStickyHeaderAccountSafetyWarnings, obj4);
  }
  items[2] = tmp15;
  let tmp18 = null;
  if (showUnreadsNotice) {
    const obj5 = { channel, clearUnreadsNotice };
    tmp18 = metroRequire(tmp3(11511), obj5);
  }
  const obj6 = { children: items };
  items[3] = tmp18;
  items[4] = metroRequire(ChatBannerDefault, { channel, handleScrollToNewMessages: scrollToNewMessages });
  return tmp9(tmp10, obj6);
});
const result = size.fileFinishedImporting("modules/chat/native/ChatViewStickyHeader.tsx");

export default memoResult;
