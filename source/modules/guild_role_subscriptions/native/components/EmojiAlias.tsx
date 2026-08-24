// Module ID: 17060
// Function ID: 17061
// Name: EmojiAlias
// Dependencies: [19, 17, 21, 4668, 4739, 2]
// Exports: default

// Module 17060 (EmojiAlias)
import noopAll from "noop" /* 19 */;
import Text from "Text" /* 4739 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles({ emojiAlias: { alignItems: "center", flexDirection: "row" }, emojiColon: { width: 4 } });
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/EmojiAlias.tsx");

export default function EmojiAlias(arg0) {
  ({ name, style } = arg0);
  const tmp = callback3();
  let obj = { style: items, children: null };
  items = [tmp.emojiAlias, style];
  obj = { style: tmp.emojiColon, "aria-hidden": true, variant: "text-md/medium", color: "text-muted", children: ":" };
  const items1 = [callback(Text.Text, obj), callback(Text.Text, { lineClamp: 1, variant: "text-md/bold", color: "interactive-text-active", children: name }), ];
  obj = { style: tmp.emojiColon, "aria-hidden": true, variant: "text-md/medium", color: "text-muted", children: ":" };
  items1[2] = callback(Text.Text, obj);
  obj[1] = items1;
  return callback2(View, obj);
};
