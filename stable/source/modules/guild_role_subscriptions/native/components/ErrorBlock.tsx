// Module ID: 12797
// Function ID: 12798
// Name: ErrorBlock
// Dependencies: [19, 21, 12798, 2]
// Exports: default

// Module 12797 (ErrorBlock)
import Fragment from "Fragment" /* 21 */;
import MessageBlock from "MessageBlock" /* 12798 */;
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
