// Module ID: 13089
// Function ID: 13090
// Name: ErrorBlock
// Dependencies: [19, 21, 13090, 2]
// Exports: default

// Module 13089 (ErrorBlock)
import Fragment from "Fragment" /* 21 */;
import MessageBlock from "MessageBlock" /* 13090 */;
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
