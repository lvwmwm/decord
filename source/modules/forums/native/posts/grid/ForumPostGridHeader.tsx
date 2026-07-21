// Module ID: 11115
// Function ID: 86545
// Name: ForumPostGridHeader
// Dependencies: []
// Exports: default

// Module 11115 (ForumPostGridHeader)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const ForumTimestampFormats = arg1(dependencyMap[2]).ForumTimestampFormats;
const ChannelFlags = arg1(dependencyMap[3]).ChannelFlags;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
let closure_8 = arg1(dependencyMap[5]).createStyles({ pinIcon: { marginEnd: 8 }, container: {}, details: { -9223372036854775808: true, "Null": true, "Null": true }, timestampText: { flex: 1 } });
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/forums/native/posts/grid/ForumPostGridHeader.tsx");

export default function ForumPostGridHeader(arg0) {
  let hasUnreads;
  let isNew;
  let thread;
  ({ thread, hasUnreads, isNew } = arg0);
  const tmp = callback2();
  const hasFlagResult = thread.hasFlag(ChannelFlags.PINNED);
  let obj = { style: tmp.container };
  obj = { style: tmp.details };
  let tmp5 = hasFlagResult;
  if (hasFlagResult) {
    obj = { containerStyle: tmp.pinIcon };
    tmp5 = callback(importDefault(dependencyMap[6]), obj);
  }
  const items = [tmp5, callback(arg1(dependencyMap[7]).ForumPostAuthor, { thread, hasUnreads }), callback(importDefault(dependencyMap[8]), { thread, hasUnreads, format: ForumTimestampFormats.POSTED_DURATION_AGO, textStyle: tmp.timestampText }), ];
  if (isNew) {
    isNew = callback(importDefault(dependencyMap[9]), {});
  }
  items[3] = isNew;
  obj.children = items;
  const items1 = [closure_7(View, obj), callback(importDefault(dependencyMap[10]), { title: thread.name, hasUnreads })];
  obj.children = items1;
  return closure_7(View, obj);
};
