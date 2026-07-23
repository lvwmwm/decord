// Module ID: 11150
// Function ID: 86705
// Name: ForumPostListFooter
// Dependencies: [31, 27, 653, 33, 4130, 689, 11107, 11142, 11143, 10430, 2]
// Exports: default

// Module 11150 (ForumPostListFooter)
import "result";
import { View } from "get ActivityIndicator";
import { AnalyticsObjects } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { footer: { display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "flex-start" } };
_createForOfIteratorHelperLoose = { height: 4, width: 4, borderRadius: 2, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, marginHorizontal: 8 };
_createForOfIteratorHelperLoose.dot = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("ME").fileFinishedImporting("modules/forums/native/posts/list/ForumPostListFooter.tsx");

export default function ForumPostListFooter(parentChannel) {
  let firstMessage;
  let hasUnreads;
  let thread;
  ({ thread, firstMessage, hasUnreads } = parentChannel);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(11107) /* useTypingUserIds */;
  const typingUserIds = obj.useTypingUserIds(thread.id);
  let tmp2 = typingUserIds.length > 0;
  obj = { style: tmp.footer };
  const items = [callback(importDefault(11142), { thread, hasUnreads }), , ];
  if (tmp2) {
    obj = {};
    const obj1 = { style: tmp.dot };
    const items1 = [callback(View, obj1), ];
    const obj2 = { thread, typingUserIds, hasUnreads };
    items1[1] = callback(importDefault(11143), obj2);
    obj.children = items1;
    tmp2 = callback2(closure_6, obj);
  }
  items[1] = tmp2;
  let tmp11 = null != firstMessage;
  if (tmp11) {
    const obj3 = { thread, firstMessage, parentChannel: parentChannel.parentChannel, locationAnalyticsObject: AnalyticsObjects.FORUM_LIST_ITEM_FOOTER };
    tmp11 = callback(require(10430) /* MaxForumPostReactions */.MostCommonForumPostReaction, obj3);
  }
  items[2] = tmp11;
  obj.children = items;
  return callback2(View, obj);
};
