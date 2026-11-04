// Module ID: 12562
// Function ID: 12563
// Name: ErrorBlock
// Dependencies: [19, 21, 12563, 2]
// Exports: default

// Module 12562 (ErrorBlock)
import Fragment from "Fragment" /* 21 */;
import MessageBlock from "MessageBlock" /* 12563 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const MessageBlockDefault = MessageBlock;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/ErrorBlock.tsx");

export default function ErrorBlock(children) {
  children = children.children;
  MessageBlockDefault;
  return <tmp color={MessageBlock.MessageBlockColors.RED}>{children}</tmp>;
};
