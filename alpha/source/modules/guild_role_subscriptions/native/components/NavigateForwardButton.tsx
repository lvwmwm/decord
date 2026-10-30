// Module ID: 17141
// Function ID: 17142
// Name: NavigateForwardButton
// Dependencies: [19, 21, 5009, 575, 6974, 5619, 1188, 17142, 2]
// Exports: default

// Module 17141 (NavigateForwardButton)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 5619 */;
import Pressables from "Pressables" /* 6974 */;
import AssetRegistryDefault from "AssetRegistry" /* 17142 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { container: obj2, text: { flexGrow: 1 } };
obj2 = { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, flexDirection: "row", padding: 16 };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/NavigateForwardButton.tsx");

export default function NavigateForwardButton(arg0) {
  let items;
  let onPress;
  let text;
  ({ onPress, text } = arg0);
  const tmp = closure_5();
  const obj = { style: tmp.container, onPress, children: items };
  const PressableHighlight = Pressables.PressableHighlight;
  items = [, ];
  const obj2 = { style: tmp.text, variant: "text-md/semibold", color: "interactive-text-active", children: text };
  items[0] = _false(Text_Text.Text, obj2);
  const obj3 = { source: AssetRegistryDefault };
  const Icon = native.Icon;
  items[1] = _false(Icon, obj3);
  return React3(PressableHighlight, obj);
};
