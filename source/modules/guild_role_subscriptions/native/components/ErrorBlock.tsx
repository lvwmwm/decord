// Module ID: 11320
// Function ID: 88037
// Name: ErrorBlock
// Dependencies: [31, 33, 11321, 2]
// Exports: default

// Module 11320 (ErrorBlock)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getContainerStyles").fileFinishedImporting("modules/guild_role_subscriptions/native/components/ErrorBlock.tsx");

export default function ErrorBlock(children) {
  const obj = { color: require(11321) /* getContainerStyles */.MessageBlockColors.RED, children: children.children };
  return jsx(importDefault(11321), { color: require(11321) /* getContainerStyles */.MessageBlockColors.RED, children: children.children });
};
