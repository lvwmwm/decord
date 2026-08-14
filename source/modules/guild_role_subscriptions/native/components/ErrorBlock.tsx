// Module ID: 11667
// Function ID: 11668
// Name: ErrorBlock
// Dependencies: [19, 21, 11668, 2]
// Exports: default

// Module 11667 (ErrorBlock)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("MessageBlock").fileFinishedImporting("modules/guild_role_subscriptions/native/components/ErrorBlock.tsx");

export default function ErrorBlock(children) {
  const obj = { color: null, children: null };
  obj[0] = require(11668) /* MessageBlock */.MessageBlockColors.RED;
  obj[1] = children.children;
  return jsx(importDefault(11668), { color: null, children: null });
};
