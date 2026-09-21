// Module ID: 16518
// Function ID: 16519
// Name: ServerPreviewPill
// Dependencies: [19, 17, 21, 4758, 580, 558, 568, 1119, 4754, 2]

// Module 16518 (ServerPreviewPill)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import Text_Text from "Text/Text" /* 4754 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4758);
let obj2 = { pill: { paddingHorizontal: 10, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.WHITE }, text: null };
const obj3 = { paddingHorizontal: 10, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.WHITE };
obj2.text = { color: nativeDefault.colors.BLACK, textTransform: "uppercase", letterSpacing: 0.5 };
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj4 = { color: nativeDefault.colors.BLACK, textTransform: "uppercase", letterSpacing: 0.5 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/lurker_mode/native/ServerPreviewPill.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(6);
  const tmp4 = closure_4();
  ({ pill, text } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1119).intl;
    const stringResult = intl.string(tmp(1119).t.KNhFgD);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.text) {
    const obj2 = { variant: "text-xs/bold", style: text, children: first };
    const tmp9 = jsx(tmp(4754).Text, { variant: "text-xs/bold", style: text, children: first });
    cResult[1] = tmp4.text;
    cResult[2] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === tmp4.pill) {
    if (cResult[4] === tmp7) {
      let tmp10 = cResult[5];
    }
    return tmp10;
  }
  const tmp11 = <View style={pill} accessibilityRole="text">{tmp7}</View>;
  cResult[3] = tmp4.pill;
  cResult[4] = tmp7;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : (() => {
  const tmp = closure_4();
  const obj = { style: tmp.pill, accessibilityRole: "text", children: null };
  const obj2 = { variant: "text-xs/bold", style: tmp.text, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.KNhFgD);
  obj.children = jsx(Text_Text.Text, { variant: "text-xs/bold", style: tmp.text, children: null });
  return <View style={tmp.pill} accessibilityRole="text">{null}</View>;
});
