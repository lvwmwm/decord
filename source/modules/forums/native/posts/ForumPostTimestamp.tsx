// Module ID: 11127
// Function ID: 86607
// Name: ForumPostTimestamp
// Dependencies: []
// Exports: default

// Module 11127 (ForumPostTimestamp)
importAll(dependencyMap[0]);
const useForumChannelStore = arg1(dependencyMap[1]).useForumChannelStore;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_4 = arg1(dependencyMap[3]).createStyles({ text: { -9223372036854775808: false, 0: false } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/forums/native/posts/ForumPostTimestamp.tsx");

export default function ForumPostTimestamp(thread) {
  let format;
  let hasUnreads;
  let textStyle;
  thread = thread.thread;
  ({ textStyle, hasUnreads, format } = thread);
  let obj = arg1(dependencyMap[4]);
  let str = "text-muted";
  const lastActiveTimestamp = obj.useLastActiveTimestamp(thread, useForumChannelStore(thread.parent_id).sortOrder, format);
  if (hasUnreads) {
    str = "text-default";
  }
  obj = { color: str };
  const items = [textStyle, callback().text];
  obj.style = items;
  obj.children = lastActiveTimestamp;
  return jsx(arg1(dependencyMap[5]).Text, obj);
};
