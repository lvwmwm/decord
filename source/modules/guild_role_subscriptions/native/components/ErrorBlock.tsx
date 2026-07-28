// Module ID: 11359
// Function ID: 88161
// Name: ErrorBlock
// Dependencies: [31, 33, 11360, 2]
// Exports: default

// Module 11359 (ErrorBlock)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getContainerStyles").fileFinishedImporting("modules/guild_role_subscriptions/native/components/ErrorBlock.tsx");

export default function ErrorBlock(children) {
  const obj = { color: require(11360) /* getContainerStyles */.MessageBlockColors.RED, children: children.children };
  return jsx(importDefault(11360), { color: require(11360) /* getContainerStyles */.MessageBlockColors.RED, children: children.children });
};
