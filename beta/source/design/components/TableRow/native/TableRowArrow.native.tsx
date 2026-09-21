// Module ID: 5829
// Function ID: 5830
// Name: TableRowArrow
// Dependencies: [19, 21, 4758, 580, 558, 568, 5190, 5830, 2]

// Module 5829 (TableRowArrow)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import IconDefault from "Icon" /* 5190 */;
import _modDef5830 from "module_5830" /* 5830 */;
import noop from "module_19" /* 19 */;

const Icon = tmp(5190);
require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4758);
let obj2 = { icon: null, iconColor: null };
let size = { width: nativeDefault.modules.mobile.TABLE_ROW_ARROW_WIDTH, height: 24, marginStart: nativeDefault.modules.mobile.TABLE_ROW_ARROW_MARGIN_START, marginEnd: nativeDefault.modules.mobile.TABLE_ROW_ARROW_MARGIN_END };
obj2.icon = size;
obj2.iconColor = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
size = fn(2);
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRowArrow.native.tsx");

export const TableRowArrow = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  const tmp4 = closure_4();
  if (cResult[0] === tmp4.icon) {
    if (cResult[1] === tmp4.iconColor.color) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  const obj2 = { style: tmp4.icon, color: tmp4.iconColor.color, source: null, size: null };
  obj2.source = _modDef5830;
  obj2.size = Icon.IconSizes.CUSTOM;
  const tmp7 = jsx(IconDefault, { style: tmp4.icon, color: tmp4.iconColor.color, source: null, size: null });
  cResult[0] = tmp4.icon;
  cResult[1] = tmp4.iconColor.color;
  cResult[2] = tmp7;
  tmp5 = tmp7;
}) : (() => {
  const tmp = closure_4();
  const obj = { style: tmp.icon, color: tmp.iconColor.color, source: _modDef5830, size: Icon.IconSizes.CUSTOM };
  return jsx(IconDefault, { style: tmp.icon, color: tmp.iconColor.color, source: _modDef5830, size: Icon.IconSizes.CUSTOM });
});
