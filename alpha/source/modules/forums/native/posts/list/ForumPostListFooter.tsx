// Module ID: 14523
// Function ID: 14524
// Name: ForumPostListFooter
// Dependencies: [19, 17, 1072, 21, 5243, 575, 14464, 14520, 14515, 14524, 14516, 12260, 2]
// Exports: default

// Module 14523 (ForumPostListFooter)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import useTypingUsersIds from "useTypingUsersIds" /* 14464 */;
import ForumPostMessageCountDefault from "ForumPostMessageCount" /* 14515 */;
import ForumPostTypingUsersDefault from "ForumPostTypingUsers" /* 14516 */;
import GameInvitesChannelUtils from "GameInvitesChannelUtils" /* 14520 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let size;
let tmp2;
const ForumPostReactions = tmp2(12260);
const View = react_native.View;
const AnalyticsObjects = Constants.AnalyticsObjects;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { footer: { display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "flex-start" }, dot: size };
size = { height: 4, width: 4, borderRadius: 2, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginHorizontal: 8 };
let closure_8 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/forums/native/posts/list/ForumPostListFooter.tsx");

export default function ForumPostListFooter(parentChannel) {
  let firstMessage;
  let hasUnreads;
  let items;
  let items1;
  let thread;
  ({ thread, firstMessage, hasUnreads } = parentChannel);
  parentChannel = parentChannel.parentChannel;
  const tmp = closure_8();
  const obj = useTypingUsersIds;
  const typingUserIds = obj.useTypingUserIds(thread.id);
  let tmp6Result = typingUserIds.length > 0;
  const obj2 = GameInvitesChannelUtils;
  let isGameInvitesPost = obj2.useIsGameInvitesPost(thread);
  const obj3 = { style: tmp.footer, children: items };
  items = [hasOwnProperty(ForumPostMessageCountDefault, { thread, hasUnreads }), , , ];
  if (isGameInvitesPost) {
    const obj4 = { channel: thread };
    isGameInvitesPost = tmp8(tmp9(14524), obj4);
  }
  items[1] = isGameInvitesPost;
  if (tmp6Result) {
    const obj5 = { children: items1 };
    const obj6 = { style: tmp.dot };
    items1 = [hasOwnProperty(View, obj6), ];
    const obj7 = { thread, typingUserIds, hasUnreads };
    items1[1] = hasOwnProperty(ForumPostTypingUsersDefault, obj7);
    tmp6Result = tmp6(metroRequire, obj5);
  }
  items[2] = tmp6Result;
  let tmp8Result = null != firstMessage;
  if (tmp8Result) {
    const obj8 = { thread, firstMessage, parentChannel, locationAnalyticsObject: AnalyticsObjects.FORUM_LIST_ITEM_FOOTER };
    tmp8Result = tmp8(ForumPostReactions.MostCommonForumPostReaction, obj8);
  }
  items[3] = tmp8Result;
  return metroImportDefault(View, obj3);
};
