// Module ID: 11358
// Function ID: 88381
// Name: ErrorBlock
// Dependencies: [31, 33, 11359, 2]
// Exports: default

// Module 11358 (ErrorBlock)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getContainerStyles").fileFinishedImporting("modules/guild_role_subscriptions/native/components/ErrorBlock.tsx");

export default function ErrorBlock(children) {
  const obj = { color: require(11359) /* getContainerStyles */.MessageBlockColors.RED, children: children.children };
  return jsx(importDefault(11359), { color: require(11359) /* getContainerStyles */.MessageBlockColors.RED, children: children.children });
};
