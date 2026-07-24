// Module ID: 16488
// Function ID: 128470
// Name: EmojiAlias
// Dependencies: [31, 27, 33, 4130, 4126, 2]
// Exports: default

// Module 16488 (EmojiAlias)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
let closure_5 = _createForOfIteratorHelperLoose.createStyles({ emojiAlias: { alignItems: "center", flexDirection: "row" }, emojiColon: { width: 4 } });
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/components/EmojiAlias.tsx");

export default function EmojiAlias(arg0) {
  let name;
  let style;
  ({ name, style } = arg0);
  const tmp = callback3();
  let obj = { style: items };
  items = [tmp.emojiAlias, style];
  obj = { style: tmp.emojiColon, "aria-hidden": true, variant: "text-md/medium", color: "text-muted", children: ":" };
  const items1 = [callback(require(4126) /* Text */.Text, obj), , ];
  obj = { lineClamp: 1, variant: "text-md/bold", color: "interactive-text-active", children: name };
  items1[1] = callback(require(4126) /* Text */.Text, obj);
  const obj1 = { style: tmp.emojiColon, "aria-hidden": true, variant: "text-md/medium", color: "text-muted", children: ":" };
  items1[2] = callback(require(4126) /* Text */.Text, obj1);
  obj.children = items1;
  return callback2(View, obj);
};
