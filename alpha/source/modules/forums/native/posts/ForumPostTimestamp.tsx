// Module ID: 11496
// Function ID: 11497
// Name: ForumPostTimestamp
// Dependencies: [19, 11483, 21, 4836, 7310, 4832, 2]
// Exports: default

// Module 11496 (ForumPostTimestamp)
import ForumHooks from "ForumHooks" /* 7310 */;
import noop from "module_19" /* 19 */;

const Text_Text = tmp2(4832);
require = fn;
const useForumChannelStore = fn(11483).useForumChannelStore;
const jsx = fn(21).jsx;
const createStyles = fn(4836);
let closure_4 = createStyles.createStyles({ text: { lineHeight: 18, height: 18 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostTimestamp.tsx");

export default function ForumPostTimestamp(thread) {
  thread = thread.thread;
  ({ textStyle, hasUnreads, format } = thread);
  const tmp = closure_4();
  let str = "text-muted";
  const lastActiveTimestamp = ForumHooks.useLastActiveTimestamp(thread, useForumChannelStore(thread.parent_id).sortOrder, format);
  if (hasUnreads) {
    str = "text-default";
  }
  const obj2 = { lineClamp: 1, variant: "text-xs/normal", color: str, style: null, children: lastActiveTimestamp };
  const items = [textStyle, tmp.text];
  obj2.style = items;
  return jsx(Text_Text.Text, { lineClamp: 1, variant: "text-xs/normal", color: str, style: null, children: lastActiveTimestamp });
};
