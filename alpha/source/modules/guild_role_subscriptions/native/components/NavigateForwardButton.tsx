// Module ID: 15316
// Function ID: 15317
// Name: NavigateForwardButton
// Dependencies: [19, 21, 5090, 587, 558, 576, 5086, 1200, 15317, 6189, 2]

// Module 15316 (NavigateForwardButton)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import Text_Text from "Text/Text" /* 5086 */;
import Pressables from "Pressables" /* 6189 */;
import AssetRegistryDefault from "AssetRegistry" /* 15317 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { container: obj2, text: { flexGrow: 1 } };
obj2 = { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, flexDirection: "row", padding: 16 };
let closure_5 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function NavigateForwardButton(arg0) {
  let items;
  let onPress;
  let text;
  const obj = react2;
  const cResult = obj.c(8);
  ({ onPress, text } = arg0);
  const tmp4 = closure_5();
  if (cResult[0] === tmp4.text) {
    let tmp5;
    let tmp8;
    if (cResult[1] === text) {
      tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { source: AssetRegistryDefault };
      const Icon = tmp(1200).Icon;
      const tmp11 = _false(Icon, obj2);
      cResult[3] = tmp11;
      tmp8 = tmp11;
    } else {
      tmp8 = cResult[3];
    }
    if (cResult[4] === onPress) {
      if (cResult[5] === tmp4.container) {
        let tmp12;
        if (cResult[6] === tmp5) {
          tmp12 = cResult[7];
        }
        return tmp12;
      }
    }
    const obj3 = { style: tmp4.container, onPress, children: items };
    items = [tmp5, tmp8];
    const tmp14 = React3(Pressables.PressableHighlight, obj3);
    cResult[4] = onPress;
    cResult[5] = tmp4.container;
    cResult[6] = tmp5;
    cResult[7] = tmp14;
    tmp12 = tmp14;
  }
  const obj4 = { style: tmp4.text, variant: "text-md/semibold", color: "interactive-text-active", children: text };
  const tmp6 = _false(Text_Text.Text, obj4);
  cResult[0] = tmp4.text;
  cResult[1] = text;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function NavigateForwardButton(arg0) {
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
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/NavigateForwardButton.tsx");

export default tmp4;
