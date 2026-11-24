// Module ID: 11427
// Function ID: 11428
// Name: OrbCheckoutAmountTag
// Dependencies: [17, 21, 4917, 575, 9324, 5508, 1112, 2]
// Exports: default

// Module 11427 (OrbCheckoutAmountTag)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5508 */;
import OrbsIcon from "OrbsIcon" /* 9324 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4917 */;
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
    const intl2 = tmp5(1112).intl;
    stringResult = intl2.string(tmp5(1112).t.pfChQr);
  } else {
    const intl = tmp5(1112).intl;
    const obj3 = { orbAmount };
    stringResult = intl.formatToPlainString(tmp5(1112).t.W4DfeF, obj3);
  }
  const obj4 = { variant: "body-md/semibold", accessibilityLabel: stringResult, children: str };
  str = "--";
  if (null != orbAmount) {
    str = orbAmount;
  }
  items[1] = tmp4(Text, obj4);
  return tmp2(tmp3, obj);
};
