// Module ID: 10467
// Function ID: 10468
// Name: OrbCheckoutAmountTag
// Dependencies: [17, 21, 4829, 576, 8290, 4825, 1115, 2]
// Exports: default

// Module 10467 (OrbCheckoutAmountTag)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4825 */;
import OrbsIcon from "OrbsIcon" /* 8290 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4829 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let obj = { orbAmountTag: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 }, orbsIcon: { width: 14, height: 14 } };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/virtual_currency/native/OrbCheckoutAmountTag.tsx");

export default function OrbCheckoutAmountTag(orbAmount) {
  orbAmount = orbAmount.orbAmount;
  const tmp = closure_5();
  const obj = { style: tmp.orbAmountTag, children: null };
  const items = [React3(OrbsIcon.OrbsIcon, { size: "custom", color: "icon-strong", style: tmp.orbsIcon }), ];
  if (null == orbAmount) {
    const intl2 = tmp5(1115).intl;
    let stringResult = intl2.string(tmp5(1115).t.pfChQr);
  } else {
    const intl = tmp5(1115).intl;
    const obj3 = { orbAmount };
    stringResult = intl.formatToPlainString(tmp5(1115).t.W4DfeF, obj3);
  }
  const obj4 = { variant: "text-md/semibold", accessibilityLabel: stringResult, children: null };
  let str = "--";
  if (null != orbAmount) {
    str = orbAmount;
  }
  obj4.children = str;
  items[1] = React3(Text_Text.Text, obj4);
  obj.children = items;
  return React4(View, obj);
};
