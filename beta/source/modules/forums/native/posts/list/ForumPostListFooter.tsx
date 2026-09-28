// Module ID: 11507
// Function ID: 11508
// Name: ForumPostListFooter
// Dependencies: [19, 17, 1074, 21, 4836, 576, 11448, 6690, 11500, 11508, 11501, 10958, 2]
// Exports: default

// Module 11507 (ForumPostListFooter)
import nativeDefault from "native" /* 576 */;
import GameInvitesChannelUtils from "GameInvitesChannelUtils" /* 6690 */;
import useTypingUsersIds from "useTypingUsersIds" /* 11448 */;
import ForumPostMessageCountDefault from "ForumPostMessageCount" /* 11500 */;
import noop from "module_19" /* 19 */;

const ForumPostReactions = tmp2(10958);
require = fn;
const View = fn(17).View;
const AnalyticsObjects = fn(1074).AnalyticsObjects;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4836);
const obj2 = { footer: { display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "flex-start" }, dot: null };
let size = { height: 4, width: 4, borderRadius: 2, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginHorizontal: 8 };
obj2.dot = size;
let closure_8 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/list/ForumPostListFooter.tsx");

export default function ForumPostListFooter(parentChannel) {
  ({ thread, firstMessage, hasUnreads } = parentChannel);
  const tmp = closure_8();
  const typingUserIds = useTypingUsersIds.useTypingUserIds(thread.id);
  let tmp6Result = typingUserIds.length > 0;
  let isGameInvitesPost = GameInvitesChannelUtils.useIsGameInvitesPost(thread);
  const obj3 = { style: tmp.footer, children: null };
  const items = [hasOwnProperty(ForumPostMessageCountDefault, { thread, hasUnreads }), , , ];
  if (isGameInvitesPost) {
    const obj4 = { channel: thread };
    isGameInvitesPost = tmp8(tmp9(11508), obj4);
  }
  items[1] = isGameInvitesPost;
  if (tmp6Result) {
    const obj5 = { children: null };
    const obj6 = { style: tmp.dot };
    const items1 = [tmp8(tmp7, obj6), ];
    const obj7 = { thread, typingUserIds, hasUnreads };
    items1[1] = tmp8(tmp9(11501), obj7);
    obj5.children = items1;
    tmp6Result = tmp6(timestampProducer, obj5);
  }
  items[2] = tmp6Result;
  let tmp8Result = null != firstMessage;
  if (tmp8Result) {
    const obj8 = { thread, firstMessage, parentChannel: parentChannel.parentChannel, locationAnalyticsObject: AnalyticsObjects.FORUM_LIST_ITEM_FOOTER };
    tmp8Result = tmp8(ForumPostReactions.MostCommonForumPostReaction, obj8);
  }
  items[3] = tmp8Result;
  obj3.children = items;
  return React5(View, obj3);
};
