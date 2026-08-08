// Module ID: 11593
// Function ID: 11594
// Name: ErrorBlock
// Dependencies: [19, 21, 11594, 2]
// Exports: default

// Module 11593 (ErrorBlock)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("MessageBlock").fileFinishedImporting("modules/guild_role_subscriptions/native/components/ErrorBlock.tsx");

export default function ErrorBlock(children) {
  const obj = { color: null, children: null };
  obj[0] = require(11594) /* MessageBlock */.MessageBlockColors.RED;
  obj[1] = children.children;
  return jsx(importDefault(11594), { color: null, children: null });
};
