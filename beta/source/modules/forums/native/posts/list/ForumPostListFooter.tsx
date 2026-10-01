// Module ID: 11507
// Function ID: 11508
// Name: ForumPostListFooter
// Dependencies: [19, 17, 1074, 21, 4836, 576, 11448, 6690, 11500, 11508, 11501, 10958, 2]
// Exports: default

// Module 11507 (ForumPostListFooter)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import GameInvitesChannelUtils from "GameInvitesChannelUtils" /* 6690 */;
import useTypingUsersIds from "useTypingUsersIds" /* 11448 */;
import ForumPostMessageCountDefault from "ForumPostMessageCount" /* 11500 */;
import ForumPostTypingUsersDefault from "ForumPostTypingUsers" /* 11501 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let size;
let tmp2;
const ForumPostReactions = tmp2(10958);
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
    isGameInvitesPost = tmp8(tmp9(11508), obj4);
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
