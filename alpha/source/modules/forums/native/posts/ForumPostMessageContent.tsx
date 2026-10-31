// Module ID: 13771
// Function ID: 13772
// Name: ForumPostMessageContent
// Dependencies: [19, 21, 5014, 13772, 5624, 2]
// Exports: default

// Module 13771 (ForumPostMessageContent)
import Fragment from "Fragment" /* 21 */;
import Text_Text from "Text/Text" /* 5624 */;
import useNativeForumPostContentDefault from "useNativeForumPostContent" /* 13772 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ text: { alignSelf: "flex-start" } });
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostMessageContent.tsx");

export default function ForumPostMessageContent(lineClamp) {
  let content;
  let hasUnreads;
  let isMessageDeleted;
  let items;
  let message;
  let messageContent;
  let messageLoaded;
  let str;
  let style;
  let variant;
  let num = lineClamp.lineClamp;
  ({ messageContent, message, isMessageDeleted, hasUnreads, messageLoaded } = lineClamp);
  if (num === undefined) {
    num = 2;
  }
  const senderModifier = lineClamp.senderModifier;
  const tmp = closure_4();
  ({ content, style, variant } = useNativeForumPostContentDefault({ message, messageLoaded, messageContent, isMessageDeleted, senderModifier }));
  const obj = { variant, color: str, lineClamp: num, ellipsizeMode: "tail", includeFontPadding: true, style: items, children: content };
  str = "text-muted";
  useNativeForumPostContentDefault({ message, messageLoaded, messageContent, isMessageDeleted, senderModifier });
  const Text = Text_Text.Text;
  const tmp3 = jsx;
  if (hasUnreads) {
    str = "text-default";
  }
  items = [style, tmp.text];
  return tmp3(Text, obj);
};
