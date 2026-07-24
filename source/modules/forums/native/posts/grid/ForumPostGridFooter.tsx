// Module ID: 11171
// Function ID: 86945
// Name: ForumPostGridFooter
// Dependencies: [31, 27, 653, 33, 4130, 689, 11134, 11172, 11173, 10459, 2]
// Exports: default

// Module 11171 (ForumPostGridFooter)
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
_createForOfIteratorHelperLoose = { footer: { display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "flex-start", marginTop: 12 } };
_createForOfIteratorHelperLoose = { height: 4, width: 4, borderRadius: 2, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, marginHorizontal: 8 };
_createForOfIteratorHelperLoose.dot = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("ME").fileFinishedImporting("modules/forums/native/posts/grid/ForumPostGridFooter.tsx");

export default function ForumPostGridFooter(parentChannel) {
  let firstMessage;
  let hasUnreads;
  let thread;
  ({ thread, firstMessage, hasUnreads } = parentChannel);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(11134) /* useTypingUserIds */;
  const typingUserIds = obj.useTypingUserIds(thread.id);
  let tmp2 = typingUserIds.length > 0;
  obj = { style: tmp.footer };
  const items = [callback(importDefault(11172), { thread, hasUnreads }), , ];
  if (tmp2) {
    obj = {};
    const obj1 = { style: tmp.dot };
    const items1 = [callback(View, obj1), ];
    const obj2 = { thread, typingUserIds, hasUnreads };
    items1[1] = callback(importDefault(11173), obj2);
    obj.children = items1;
    tmp2 = callback2(closure_6, obj);
  }
  items[1] = tmp2;
  let tmp11 = null != firstMessage;
  if (tmp11) {
    const obj3 = { thread, firstMessage, parentChannel: parentChannel.parentChannel, locationAnalyticsObject: AnalyticsObjects.FORUM_GRID_ITEM_FOOTER };
    tmp11 = callback(require(10459) /* MaxForumPostReactions */.MostCommonForumPostReaction, obj3);
  }
  items[2] = tmp11;
  obj.children = items;
  return callback2(View, obj);
};
