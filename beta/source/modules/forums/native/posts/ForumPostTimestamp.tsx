// Module ID: 12296
// Function ID: 12297
// Name: ForumPostTimestamp
// Dependencies: [19, 12283, 21, 4788, 8161, 4784, 2]
// Exports: default

// Module 12296 (ForumPostTimestamp)
import ForumHooks from "ForumHooks" /* 8161 */;
import noop from "module_19" /* 19 */;

const Text_Text = tmp2(4784);
require = fn;
const useForumChannelStore = fn(12283).useForumChannelStore;
const jsx = fn(21).jsx;
const createStyles = fn(4788);
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
