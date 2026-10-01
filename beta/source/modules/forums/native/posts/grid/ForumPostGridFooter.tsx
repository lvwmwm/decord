// Module ID: 11499
// Function ID: 11500
// Name: ForumPostGridFooter
// Dependencies: [19, 17, 1074, 21, 4836, 576, 11448, 11500, 11501, 10958, 2]
// Exports: default

// Module 11499 (ForumPostGridFooter)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import useTypingUsersIds from "useTypingUsersIds" /* 11448 */;
import ForumPostMessageCountDefault from "ForumPostMessageCount" /* 11500 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let size;
let tmp2;
let tmp8;
const ForumPostReactions = tmp2(10958);
const ForumPostTypingUsersDefault = tmp8(11501);
const View = react_native.View;
const AnalyticsObjects = Constants.AnalyticsObjects;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { footer: { display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "flex-start", marginTop: 12 }, dot: size };
size = { height: 4, width: 4, borderRadius: 2, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginHorizontal: 8 };
let closure_8 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/forums/native/posts/grid/ForumPostGridFooter.tsx");

export default function ForumPostGridFooter(parentChannel) {
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
  let tmp5Result = typingUserIds.length > 0;
  const obj2 = { style: tmp.footer, children: items };
  items = [hasOwnProperty(ForumPostMessageCountDefault, { thread, hasUnreads }), , ];
  if (tmp5Result) {
    const obj3 = { children: items1 };
    const obj4 = { style: tmp.dot };
    items1 = [hasOwnProperty(View, obj4), ];
    const obj5 = { thread, typingUserIds, hasUnreads };
    items1[1] = hasOwnProperty(ForumPostTypingUsersDefault, obj5);
    tmp5Result = tmp5(metroRequire, obj3);
  }
  items[1] = tmp5Result;
  let tmp7Result = null != firstMessage;
  if (tmp7Result) {
    const obj6 = { thread, firstMessage, parentChannel, locationAnalyticsObject: AnalyticsObjects.FORUM_GRID_ITEM_FOOTER };
    tmp7Result = tmp7(ForumPostReactions.MostCommonForumPostReaction, obj6);
  }
  items[2] = tmp7Result;
  return metroImportDefault(View, obj2);
};
