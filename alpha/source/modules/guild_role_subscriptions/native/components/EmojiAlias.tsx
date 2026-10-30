// Module ID: 19899
// Function ID: 19900
// Name: EmojiAlias
// Dependencies: [19, 17, 21, 5009, 5619, 2]
// Exports: default

// Module 19899 (EmojiAlias)
import react_native from "react-native" /* 17 */;
import Text_Text from "Text/Text" /* 5619 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles({ emojiAlias: { alignItems: "center", flexDirection: "row" }, emojiColon: { width: 4 } });
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/EmojiAlias.tsx");

export default function EmojiAlias(arg0) {
  let children;
  let items;
  let items1;
  let style;
  ({ children, style } = arg0);
  const tmp = closure_5();
  const obj = { style: items, children: items1 };
  items = [tmp.emojiAlias, style];
  items1 = [, , ];
  const obj2 = { style: tmp.emojiColon, "aria-hidden": true, variant: "text-md/medium", color: "text-muted", children: ":" };
  items1[0] = _false(Text_Text.Text, obj2);
  items1[1] = _false(Text_Text.Text, { lineClamp: 1, variant: "text-md/medium", color: "mobile-text-heading-primary", children });
  const obj3 = { style: tmp.emojiColon, "aria-hidden": true, variant: "text-md/medium", color: "text-muted", children: ":" };
  items1[2] = _false(Text_Text.Text, obj3);
  return React3(View, obj);
};
