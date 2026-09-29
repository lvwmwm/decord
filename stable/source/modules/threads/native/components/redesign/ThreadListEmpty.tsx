// Module ID: 17186
// Function ID: 17187
// Name: ThreadListEmpty
// Dependencies: [19, 17, 21, 4788, 576, 1177, 12520, 4784, 1115, 5218, 2]

// Module 17186 (ThreadListEmpty)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4784 */;
import _modDef12520 from "module_12520" /* 12520 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4788);
let obj = { container: { flex: 1, justifyContent: "center", alignItems: "center" }, iconWrapper: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, padding: 12 }, title: { textAlign: "center", marginTop: 16, marginHorizontal: 16 }, subtext: { textAlign: "center", marginTop: 4, marginHorizontal: 16, marginBottom: 16 } };
let closure_6 = createStyles.createStyles(obj);
const obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, padding: 12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/threads/native/components/redesign/ThreadListEmpty.tsx");

export default noop.memo((onCreateThreadPress) => {
  onCreateThreadPress = onCreateThreadPress.onCreateThreadPress;
  const tmp = closure_6();
  const obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.iconWrapper, children: React4(native.Icon, { source: _modDef12520, size: native.Icon.Sizes.MEDIUM }) };
  const items = [React4(View, obj2), , , ];
  const obj4 = { style: tmp.title, accessibilityRole: "header", maxFontSizeMultiplier: 2, variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t.HgTQ8p);
  items[1] = React4(Text_Text.Text, obj4);
  const obj5 = { style: tmp.subtext, maxFontSizeMultiplier: 2, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = util.intl;
  obj5.children = intl2.string(util.t.jmq9GC);
  items[2] = React4(Text_Text.Text, obj5);
  let tmp4Result = null != onCreateThreadPress;
  if (tmp4Result) {
    const obj6 = { onPress: onCreateThreadPress, text: null };
    const intl3 = tmp5(1115).intl;
    obj6.text = intl3.string(tmp5(1115).t.rBIGBL);
    tmp4Result = React4(tmp5(5218).Button, obj6);
  }
  items[3] = tmp4Result;
  obj.children = items;
  return hasOwnProperty(View, obj);
});
