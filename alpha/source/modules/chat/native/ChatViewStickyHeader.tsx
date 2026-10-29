// Module ID: 10999
// Function ID: 11000
// Name: ChatViewStickyHeader
// Dependencies: [32, 19, 11000, 21, 558, 576, 11001, 11006, 11010, 11011, 11032, 11038, 11062, 11067, 11086, 11111, 11114, 2]

// Module 10999 (ChatViewStickyHeader)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 11000 */;
import useStrangerDangerWarning from "useStrangerDangerWarning" /* 11001 */;
import useInappropriateConversationBannerForChannel from "useInappropriateConversationBannerForChannel" /* 11006 */;
import useLikelyAtoWarning from "useLikelyAtoWarning" /* 11010 */;
import LikelyAtoWarningBannerDefault from "LikelyAtoWarningBanner" /* 11011 */;
import StrangerDangerWarningBannerDefault from "StrangerDangerWarningBanner" /* 11032 */;
import InappropriateConversationWarningBannerDefault from "InappropriateConversationWarningBanner" /* 11038 */;
import useUnreadSettingNoticeDefault from "useUnreadSettingNotice" /* 11062 */;
import PinotLazy from "PinotLazy" /* 11067 */;
import ChatBannerDefault from "ChatBanner" /* 11114 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let metroRequire;
const LOCATION_CONTEXT_MOBILE = Constants.LOCATION_CONTEXT_MOBILE;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChatViewStickyHeaderAccountSafetyWarnings(arg0) {
  let channelId;
  let senderId;
  let tmp10;
  const obj = react2;
  const cResult = obj.c(12);
  ({ channelId, senderId } = arg0);
  const obj2 = useStrangerDangerWarning;
  const strangerDangerWarning = obj2.useStrangerDangerWarning(channelId);
  const obj3 = useInappropriateConversationBannerForChannel;
  const inappropriateConversationBannerForChannel = obj3.useInappropriateConversationBannerForChannel(channelId, LOCATION_CONTEXT_MOBILE);
  const obj4 = useLikelyAtoWarning;
  const likelyAtoWarning = obj4.useLikelyAtoWarning(channelId);
  if (null != likelyAtoWarning) {
    if (cResult[0] === channelId) {
      if (cResult[1] === likelyAtoWarning.id) {
        let tmp15;
        if (cResult[2] === senderId) {
          tmp15 = cResult[3];
        }
        tmp10 = tmp15;
      }
    }
    const obj5 = { channelId, warningId: likelyAtoWarning.id, senderId };
    const tmp18 = metroRequire(LikelyAtoWarningBannerDefault, obj5);
    cResult[0] = channelId;
    cResult[1] = likelyAtoWarning.id;
    cResult[2] = senderId;
    cResult[3] = tmp18;
    tmp15 = tmp18;
  } else if (null != strangerDangerWarning) {
    if (cResult[4] === channelId) {
      if (cResult[5] === senderId) {
        let tmp11;
        if (cResult[6] === strangerDangerWarning.id) {
          tmp11 = cResult[7];
        }
        tmp10 = tmp11;
      }
    }
    const obj6 = { channelId, warningId: strangerDangerWarning.id, senderId };
    const tmp14 = metroRequire(StrangerDangerWarningBannerDefault, obj6);
    cResult[4] = channelId;
    cResult[5] = senderId;
    cResult[6] = strangerDangerWarning.id;
    cResult[7] = tmp14;
    tmp11 = tmp14;
  } else {
    tmp10 = null;
    if (null != inappropriateConversationBannerForChannel) {
      if (cResult[8] === channelId) {
        if (cResult[9] === inappropriateConversationBannerForChannel.id) {
          let tmp6;
          if (cResult[10] === senderId) {
            tmp6 = cResult[11];
          }
          tmp10 = tmp6;
        }
      }
      const obj7 = { channelId, warningId: inappropriateConversationBannerForChannel.id, senderId };
      const tmp9 = metroRequire(InappropriateConversationWarningBannerDefault, obj7);
      cResult[8] = channelId;
      cResult[9] = inappropriateConversationBannerForChannel.id;
      cResult[10] = senderId;
      cResult[11] = tmp9;
      tmp6 = tmp9;
    }
  }
  return tmp10;
}) : (function ChatViewStickyHeaderAccountSafetyWarnings(arg0) {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function StickyHeader(channel) {
  let clearUnreadsNotice;
  let closure_129_1;
  let items;
  let showUnreadsNotice;
  let tmp5;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(23);
  channel = channel.channel;
  const scrollToNewMessages = channel.scrollToNewMessages;
  const ref = channel.ref;
  [tmp5, closure_129_1] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  ({ showUnreadsNotice, clearUnreadsNotice } = useUnreadSettingNoticeDefault(channel));
  useUnreadSettingNoticeDefault(channel);
  const obj3 = PinotLazy;
  const pinotMemberNotice = obj3.usePinotMemberNotice(channel, "mobile_chat_sticky_header");
  const obj2 = react;
  if (cResult[0] !== channel) {
    const fn = function t() {
      let forumPost;
      return {
        onChatViewScrolled(isFirstMessageVisible) {
          isFirstMessageVisible = isFirstMessageVisible.isFirstMessageVisible;
          if (forumPost.isForumPost()) {
            closure_1_1(!isFirstMessageVisible);
          }
        }
      };
    };
    cResult[0] = channel;
    cResult[1] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[1];
  }
  const imperativeHandle = obj2.useImperativeHandle(ref, tmp9);
  if (cResult[2] === pinotMemberNotice.dismiss) {
    let tmp11;
    if (cResult[3] === pinotMemberNotice.visible) {
      tmp11 = cResult[4];
    }
    if (cResult[5] === channel) {
      let tmp14;
      let tmp17;
      if (cResult[6] === tmp5) {
        tmp14 = cResult[7];
      }
      if (cResult[8] !== channel) {
        let tmp18 = null;
        if (channel.isDM()) {
          const obj4 = { channelId: channel.id, senderId: channel.getRecipientId() };
          tmp18 = metroRequire(closure_9, obj4);
        }
        cResult[8] = channel;
        cResult[9] = tmp18;
        tmp17 = tmp18;
      } else {
        tmp17 = cResult[9];
      }
      if (cResult[10] === channel) {
        if (cResult[11] === clearUnreadsNotice) {
          let tmp21;
          if (cResult[12] === showUnreadsNotice) {
            tmp21 = cResult[13];
          }
          if (cResult[14] === channel) {
            let tmp24;
            if (cResult[15] === scrollToNewMessages) {
              tmp24 = cResult[16];
            }
            if (cResult[17] === tmp11) {
              if (cResult[18] === tmp14) {
                if (cResult[19] === tmp17) {
                  if (cResult[20] === tmp21) {
                    let tmp27;
                    if (cResult[21] === tmp24) {
                      tmp27 = cResult[22];
                    }
                    return tmp27;
                  }
                }
              }
            }
            const obj5 = { children: items };
            items = [tmp11, tmp14, tmp17, tmp21, tmp24];
            const tmp30 = metroImportAll(metroImportDefault, obj5);
            cResult[17] = tmp11;
            cResult[18] = tmp14;
            cResult[19] = tmp17;
            cResult[20] = tmp21;
            cResult[21] = tmp24;
            cResult[22] = tmp30;
            tmp27 = tmp30;
          }
          const obj6 = { channel, handleScrollToNewMessages: scrollToNewMessages };
          const tmp26 = metroRequire(ChatBannerDefault, obj6);
          cResult[14] = channel;
          cResult[15] = scrollToNewMessages;
          cResult[16] = tmp26;
          tmp24 = tmp26;
        }
      }
      let tmp22 = null;
      if (showUnreadsNotice) {
        const obj7 = { channel, clearUnreadsNotice };
        tmp22 = metroRequire(tmp6(11111), obj7);
      }
      cResult[10] = channel;
      cResult[11] = clearUnreadsNotice;
      cResult[12] = showUnreadsNotice;
      cResult[13] = tmp22;
      tmp21 = tmp22;
    }
    let tmp15 = null;
    if (channel.isForumPost()) {
      tmp15 = null;
      if (tmp5) {
        const obj8 = { channel };
        tmp15 = metroRequire(tmp6(11086), obj8);
      }
    }
    cResult[5] = channel;
    cResult[6] = tmp5;
    cResult[7] = tmp15;
    tmp14 = tmp15;
  }
  let tmp12 = null;
  if (pinotMemberNotice.visible) {
    const obj9 = { onDismiss: pinotMemberNotice.dismiss };
    tmp12 = metroRequire(PinotLazy.PinotMemberNoticeBar, obj9);
  }
  cResult[2] = pinotMemberNotice.dismiss;
  cResult[3] = pinotMemberNotice.visible;
  cResult[4] = tmp12;
  tmp11 = tmp12;
}) : (function StickyHeader(channel) {
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
    const obj2 = { onDismiss: pinotMemberNotice.dismiss };
    tmp11 = metroRequire(PinotLazy.PinotMemberNoticeBar, obj2);
  }
  const items = [tmp11, , , , ];
  let tmp13 = null;
  if (channel.isForumPost()) {
    tmp13 = null;
    if (first) {
      const obj3 = { channel };
      tmp13 = metroRequire(tmp3(11086), obj3);
    }
  }
  items[1] = tmp13;
  let tmp15 = null;
  if (channel.isDM()) {
    const obj4 = { channelId: channel.id, senderId: channel.getRecipientId() };
    tmp15 = metroRequire(closure_9, obj4);
  }
  items[2] = tmp15;
  let tmp18 = null;
  if (showUnreadsNotice) {
    const obj5 = { channel, clearUnreadsNotice };
    tmp18 = metroRequire(tmp3(11111), obj5);
  }
  const obj6 = { children: items };
  items[3] = tmp18;
  items[4] = metroRequire(ChatBannerDefault, { channel, handleScrollToNewMessages: scrollToNewMessages });
  return tmp9(tmp10, obj6);
}));
const result = size.fileFinishedImporting("modules/chat/native/ChatViewStickyHeader.tsx");

export default memoResult;
