// Module ID: 12223
// Function ID: 12224
// Name: ErrorBlock
// Dependencies: [19, 21, 12224, 2]
// Exports: default

// Module 12223 (ErrorBlock)
import noopAll from "noop" /* 19 */;
import MessageBlock from "MessageBlock" /* 12224 */;
import MessageBlockDefault from "MessageBlock" /* 12224 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/ErrorBlock.tsx");

export default function ErrorBlock(children) {
  const obj = { color: MessageBlock.MessageBlockColors.RED, children: children.children };
  return jsx(MessageBlockDefault, { color: MessageBlock.MessageBlockColors.RED, children: children.children });
};
