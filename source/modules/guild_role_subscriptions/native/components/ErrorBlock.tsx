// Module ID: 11321
// Function ID: 88042
// Name: ErrorBlock
// Dependencies: [31, 33, 11322, 2]
// Exports: default

// Module 11321 (ErrorBlock)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getContainerStyles").fileFinishedImporting("modules/guild_role_subscriptions/native/components/ErrorBlock.tsx");

export default function ErrorBlock(children) {
  const obj = { color: require(11322) /* getContainerStyles */.MessageBlockColors.RED, children: children.children };
  return jsx(importDefault(11322), { color: require(11322) /* getContainerStyles */.MessageBlockColors.RED, children: children.children });
};
