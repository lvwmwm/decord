// Module ID: 16539
// Function ID: 16540
// Name: ThreadListEmpty
// Dependencies: [19, 17, 21, 4836, 576, 1177, 11720, 4832, 1115, 5281, 2]

// Module 16539 (ThreadListEmpty)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4832 */;
import AssetRegistryDefault from "AssetRegistry" /* 11720 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let onCreateThreadPress;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: { flex: 1, justifyContent: "center", alignItems: "center" }, iconWrapper: obj2, title: { textAlign: "center", marginTop: 16, marginHorizontal: 16 }, subtext: { textAlign: "center", marginTop: 4, marginHorizontal: 16, marginBottom: 16 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, padding: 12 };
let closure_6 = createStyles.createStyles(obj);
const memoResult = react.memo((onCreateThreadPress) => {
  let Icon;
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj3;
  onCreateThreadPress = onCreateThreadPress.onCreateThreadPress;
  const tmp = closure_6();
  const obj = { style: tmp.container, children: items };
  const obj2 = { style: tmp.iconWrapper, children: React3(Icon, obj3) };
  obj3 = { source: AssetRegistryDefault, size: native.Icon.Sizes.MEDIUM };
  Icon = native.Icon;
  items = [React3(View, obj2), , , ];
  const obj4 = { style: tmp.title, accessibilityRole: "header", maxFontSizeMultiplier: 2, variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl.string(intl4.t.HgTQ8p) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items[1] = React3(Text, obj4);
  const obj5 = { style: tmp.subtext, maxFontSizeMultiplier: 2, variant: "text-sm/medium", color: "text-default", children: intl2.string(intl4.t.jmq9GC) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  items[2] = React3(Text2, obj5);
  let tmp4Result = null != onCreateThreadPress;
  const tmp2 = hasOwnProperty;
  const tmp3 = View;
  const tmp4 = React3;
  if (tmp4Result) {
    const obj6 = { onPress: onCreateThreadPress, text: intl3.string(intl4.t.rBIGBL) };
    const Button = tmp5(5281).Button;
    intl3 = tmp5(1115).intl;
    tmp4Result = tmp4(Button, obj6);
  }
  items[3] = tmp4Result;
  return tmp2(tmp3, obj);
});
const result = size.fileFinishedImporting("modules/threads/native/components/redesign/ThreadListEmpty.tsx");

export default memoResult;
