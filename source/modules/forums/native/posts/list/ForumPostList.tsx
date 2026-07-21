// Module ID: 11135
// Function ID: 86622
// Name: ForumPostList
// Dependencies: []
// Exports: default

// Module 11135 (ForumPostList)
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const ChannelFlags = arg1(dependencyMap[3]).ChannelFlags;
({ jsx: closure_6, jsxs: closure_7, Fragment: closure_8 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
let closure_9 = arg1(dependencyMap[5]).createStyles({ header: { "Null": 8, "Bool(true)": null, "Bool(true)": "\u270A\u{1F3FF}", "Bool(true)": true }, content: { right: false, type: false } });
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/forums/native/posts/list/ForumPostList.tsx");

export default function ForumPostList(arg0) {
  let firstMessage;
  let firstMessageLoaded;
  let hasUnreads;
  let isEmbed;
  let isLocalDeviceMedia;
  let isNew;
  let media;
  let messageContent;
  let parentChannel;
  let senderModifier;
  let thread;
  ({ firstMessage, hasUnreads, thread } = arg0);
  ({ messageContent, firstMessageLoaded, isNew, media, isEmbed, isLocalDeviceMedia, parentChannel, senderModifier } = arg0);
  const tmp = callback3();
  let obj = arg1(dependencyMap[6]);
  const tmp2 = callback(obj.useSomeAppliedTags(thread, 2), 2);
  const first = tmp2[0];
  const hasFlagResult = thread.hasFlag(ChannelFlags.PINNED);
  obj = {};
  obj = { style: tmp.content };
  let tmp8Result = hasFlagResult;
  if (!hasFlagResult) {
    tmp8Result = 0 !== first.length;
  }
  if (tmp8Result) {
    const obj1 = { style: tmp.header };
    let tmp10 = hasFlagResult;
    if (hasFlagResult) {
      tmp10 = callback2(importDefault(dependencyMap[7]), {});
    }
    const items = [tmp10, ];
    let tmp14 = 0 !== first.length;
    if (tmp14) {
      const obj2 = { appliedTags: first, additionalTagsCount: tmp2[1], hasUnreads };
      tmp14 = callback2(arg1(dependencyMap[8]).ForumPostAppliedTagPills, obj2);
    }
    items[1] = tmp14;
    obj1.children = items;
    tmp8Result = closure_7(View, obj1);
    const tmp8 = closure_7;
    const tmp9 = View;
  }
  const items1 = [tmp8Result, callback2(importDefault(dependencyMap[9]), { thread, firstMessage, hasUnreads, isNew, messageContent, media, isEmbed, isLocalDeviceMedia, firstMessageLoaded, senderModifier })];
  obj.children = items1;
  const items2 = [closure_7(View, obj), callback2(importDefault(dependencyMap[10]), { thread, firstMessage, hasUnreads, parentChannel })];
  obj.children = items2;
  return closure_7(closure_8, obj);
};
