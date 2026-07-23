// Module ID: 11329
// Function ID: 88141
// Name: ErrorBlock
// Dependencies: [31, 33, 11330, 2]
// Exports: default

// Module 11329 (ErrorBlock)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getContainerStyles").fileFinishedImporting("modules/guild_role_subscriptions/native/components/ErrorBlock.tsx");

export default function ErrorBlock(children) {
  const obj = { color: require(11330) /* getContainerStyles */.MessageBlockColors.RED, children: children.children };
  return jsx(importDefault(11330), { color: require(11330) /* getContainerStyles */.MessageBlockColors.RED, children: children.children });
};
