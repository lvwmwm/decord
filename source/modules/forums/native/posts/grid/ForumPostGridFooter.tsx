// Module ID: 11130
// Function ID: 86601
// Name: ForumPostGridFooter
// Dependencies: []
// Exports: default

// Module 11130 (ForumPostGridFooter)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const AnalyticsObjects = arg1(dependencyMap[2]).AnalyticsObjects;
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { footer: {} };
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE };
obj.dot = obj;
let closure_8 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/forums/native/posts/grid/ForumPostGridFooter.tsx");

export default function ForumPostGridFooter(parentChannel) {
  let firstMessage;
  let hasUnreads;
  let thread;
  ({ thread, firstMessage, hasUnreads } = parentChannel);
  const tmp = callback3();
  let obj = arg1(dependencyMap[6]);
  const typingUserIds = obj.useTypingUserIds(thread.id);
  let tmp2 = typingUserIds.length > 0;
  obj = { style: tmp.footer };
  const items = [callback(importDefault(dependencyMap[7]), { thread, hasUnreads }), , ];
  if (tmp2) {
    obj = {};
    const obj1 = { style: tmp.dot };
    const items1 = [callback(View, obj1), ];
    const obj2 = { thread, typingUserIds, hasUnreads };
    items1[1] = callback(importDefault(dependencyMap[8]), obj2);
    obj.children = items1;
    tmp2 = callback2(closure_6, obj);
  }
  items[1] = tmp2;
  let tmp11 = null != firstMessage;
  if (tmp11) {
    const obj3 = { thread, firstMessage, parentChannel: parentChannel.parentChannel, locationAnalyticsObject: AnalyticsObjects.FORUM_GRID_ITEM_FOOTER };
    tmp11 = callback(arg1(dependencyMap[9]).MostCommonForumPostReaction, obj3);
  }
  items[2] = tmp11;
  obj.children = items;
  return callback2(View, obj);
};
