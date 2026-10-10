// Module ID: 11689
// Function ID: 11690
// Name: ForumPostTimestamp
// Dependencies: [19, 11675, 21, 5092, 558, 576, 9326, 5088, 2]

// Module 11689 (ForumPostTimestamp)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import ForumHooks from "ForumHooks" /* 9326 */;
import ForumChannelStore from "ForumChannelStore" /* 11675 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const Text_Text = tmp(5088);
const useForumChannelStore = ForumChannelStore.useForumChannelStore;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ text: { lineHeight: 18, height: 18 } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ForumPostTimestamp(arg0) {
  let format;
  let hasUnreads;
  let textStyle;
  let thread;
  const obj = react2;
  const cResult = obj.c(7);
  ({ textStyle, thread } = arg0);
  ({ hasUnreads, format } = arg0);
  const tmp4 = closure_4();
  const sortOrder = useForumChannelStore(thread.parent_id).sortOrder;
  const obj2 = ForumHooks;
  const lastActiveTimestamp = obj2.useLastActiveTimestamp(thread, sortOrder, format);
  let str = "text-muted";
  if (hasUnreads) {
    str = "text-default";
  }
  if (cResult[0] === tmp4.text) {
    let tmp6;
    if (cResult[1] === textStyle) {
      tmp6 = cResult[2];
    }
    if (cResult[3] === str) {
      if (cResult[4] === lastActiveTimestamp) {
        let tmp7;
        if (cResult[5] === tmp6) {
          tmp7 = cResult[6];
        }
        return tmp7;
      }
    }
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
}) : (function ForumPostTimestamp(thread) {
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
  return jsx(Text_Text.Text, { lineClamp: 1, variant: "text-xs/normal", color: str, style: items, children: lastActiveTimestamp });
});
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostTimestamp.tsx");

export default tmp3;
