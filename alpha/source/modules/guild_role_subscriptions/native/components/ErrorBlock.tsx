// Module ID: 11908
// Function ID: 11909
// Name: ErrorBlock
// Dependencies: [19, 21, 11909, 2]
// Exports: default

// Module 11908 (ErrorBlock)
import MessageBlock from "MessageBlock" /* 11909 */;
import noop from "module_19" /* 19 */;

const MessageBlockDefault = MessageBlock;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/ErrorBlock.tsx");

export default function ErrorBlock(children) {
  const obj = { color: MessageBlock.MessageBlockColors.RED, children: children.children };
  return jsx(MessageBlockDefault, { color: MessageBlock.MessageBlockColors.RED, children: children.children });
};
