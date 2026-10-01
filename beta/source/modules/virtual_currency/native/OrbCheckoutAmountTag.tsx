// Module ID: 10478
// Function ID: 10479
// Name: OrbCheckoutAmountTag
// Dependencies: [17, 21, 4836, 576, 8298, 4832, 1115, 2]
// Exports: default

// Module 10478 (OrbCheckoutAmountTag)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import OrbsIcon from "OrbsIcon" /* 8298 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { orbAmountTag: obj2, orbsIcon: { width: 14, height: 14 } };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/virtual_currency/native/OrbCheckoutAmountTag.tsx");

export default function OrbCheckoutAmountTag(orbAmount) {
  let items;
  let str;
  let stringResult;
  orbAmount = orbAmount.orbAmount;
  const tmp = closure_5();
  const obj = { style: tmp.orbAmountTag, children: items };
  items = [, ];
  const obj2 = { size: "custom", color: "icon-strong", style: tmp.orbsIcon };
  items[0] = _false(OrbsIcon.OrbsIcon, obj2);
  const Text = Text_Text.Text;
  const tmp2 = React3;
  const tmp3 = View;
  const tmp4 = _false;
  if (null == orbAmount) {
    const intl2 = tmp5(1115).intl;
    stringResult = intl2.string(tmp5(1115).t.pfChQr);
  } else {
    const intl = tmp5(1115).intl;
    const obj3 = { orbAmount };
    stringResult = intl.formatToPlainString(tmp5(1115).t.W4DfeF, obj3);
  }
  const obj4 = { variant: "text-md/semibold", accessibilityLabel: stringResult, children: str };
  str = "--";
  if (null != orbAmount) {
    str = orbAmount;
  }
  items[1] = tmp4(Text, obj4);
  return tmp2(tmp3, obj);
};
