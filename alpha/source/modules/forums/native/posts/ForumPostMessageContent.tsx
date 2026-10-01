// Module ID: 11716
// Function ID: 11717
// Name: ForumPostMessageContent
// Dependencies: [19, 21, 4845, 11717, 4841, 2]
// Exports: default

// Module 11716 (ForumPostMessageContent)
import Text_Text from "Text/Text" /* 4841 */;
import useNativeForumPostContentDefault from "useNativeForumPostContent" /* 11717 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4845);
let closure_4 = createStyles.createStyles({ text: { alignSelf: "flex-start" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostMessageContent.tsx");

export default function ForumPostMessageContent(senderModifier) {
  let num = senderModifier.lineClamp;
  ({ messageContent, message, isMessageDeleted, hasUnreads, messageLoaded } = senderModifier);
  if (num === undefined) {
    num = 2;
  }
  const tmp = closure_4();
  ({ content, style, variant } = useNativeForumPostContentDefault({ message, messageLoaded, messageContent, isMessageDeleted, senderModifier: senderModifier.senderModifier }));
  const obj = { variant, color: null, lineClamp: null, ellipsizeMode: "tail", includeFontPadding: true, style: null, children: null };
  let str = "text-muted";
  if (hasUnreads) {
    str = "text-default";
  }
  obj.color = str;
  obj.lineClamp = num;
  const items = [style, tmp.text];
  obj.style = items;
  obj.children = content;
  return jsx(Text_Text.Text, { variant, color: null, lineClamp: null, ellipsizeMode: "tail", includeFontPadding: true, style: null, children: null });
};
