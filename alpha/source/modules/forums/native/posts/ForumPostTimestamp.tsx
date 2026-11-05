// Module ID: 14008
// Function ID: 14009
// Name: ForumPostTimestamp
// Dependencies: [19, 13994, 21, 5143, 10023, 5763, 2]
// Exports: default

// Module 14008 (ForumPostTimestamp)
import Fragment from "Fragment" /* 21 */;
import ForumHooks from "ForumHooks" /* 10023 */;
import ForumChannelStore from "ForumChannelStore" /* 13994 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5143 */;
import size from "module_2" /* 2 */;

let tmp2;
const Text_Text = tmp2(5763);
const useForumChannelStore = ForumChannelStore.useForumChannelStore;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ text: { lineHeight: 18, height: 18 } });
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostTimestamp.tsx");

export default function ForumPostTimestamp(thread) {
  let format;
  let hasUnreads;
  let textStyle;
  thread = thread.thread;
  ({ textStyle, hasUnreads, format } = thread);
  const tmp = closure_4();
  const sortOrder = useForumChannelStore(thread.parent_id).sortOrder;
  let str = "text-muted";
  const obj = ForumHooks;
  const lastActiveTimestamp = obj.useLastActiveTimestamp(thread, sortOrder, format);
  if (hasUnreads) {
    str = "text-default";
  }
  const items = [textStyle, tmp.text];
  return jsx(Text_Text.Text, { lineClamp: 1, variant: "body-xs/normal", color: str, style: items, children: lastActiveTimestamp });
};
