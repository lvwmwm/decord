// Module ID: 12180
// Function ID: 12181
// Name: ForumPostTimestamp
// Dependencies: [19, 12167, 21, 4790, 558, 568, 8166, 4786, 2]

// Module 12180 (ForumPostTimestamp)
import c from "c" /* 568 */;
import ForumHooks from "ForumHooks" /* 8166 */;
import noop from "module_19" /* 19 */;

const Text_Text = tmp(4786);
require = fn;
const useForumChannelStore = fn(12167).useForumChannelStore;
const jsx = fn(21).jsx;
const createStyles = fn(4790);
let closure_4 = createStyles.createStyles({ text: { lineHeight: 18, height: 18 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostTimestamp.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(7);
  ({ textStyle, thread } = arg0);
  ({ hasUnreads, format } = arg0);
  const tmp4 = closure_4();
  const lastActiveTimestamp = ForumHooks.useLastActiveTimestamp(thread, useForumChannelStore(thread.parent_id).sortOrder, format);
  let str = "text-muted";
  if (hasUnreads) {
    str = "text-default";
  }
  if (cResult[0] === tmp4.text) {
    if (cResult[1] === textStyle) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] === str) {
      if (cResult[4] === lastActiveTimestamp) {
        if (cResult[5] === tmp6) {
          let tmp7 = cResult[6];
        }
        return tmp7;
      }
    }
    const obj3 = { lineClamp: 1, variant: "text-xs/normal", color: str, style: tmp6, children: lastActiveTimestamp };
    const tmp9 = jsx(Text_Text.Text, { lineClamp: 1, variant: "text-xs/normal", color: str, style: tmp6, children: lastActiveTimestamp });
    cResult[3] = str;
    cResult[4] = lastActiveTimestamp;
    cResult[5] = tmp6;
    cResult[6] = tmp9;
    tmp7 = tmp9;
  }
  const items = [textStyle, tmp4.text];
  cResult[0] = tmp4.text;
  cResult[1] = textStyle;
  cResult[2] = items;
  tmp6 = items;
}) : ((thread) => {
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
});
