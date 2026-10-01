// Module ID: 14766
// Function ID: 14767
// Name: NavigateForwardButton
// Dependencies: [19, 21, 4836, 576, 5435, 4832, 1177, 14767, 2]
// Exports: default

// Module 14766 (NavigateForwardButton)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4832 */;
import Pressables from "Pressables" /* 5435 */;
import AssetRegistryDefault from "AssetRegistry" /* 14767 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
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
