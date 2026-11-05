// Module ID: 15468
// Function ID: 15469
// Name: PaymentFlowWarningMessage
// Dependencies: [19, 17, 21, 5143, 575, 6916, 1187, 5763, 2]
// Exports: default

// Module 15468 (PaymentFlowWarningMessage)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import Text_Text from "Text/Text" /* 5763 */;
import LegacyTokens from "LegacyTokens" /* 6916 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5143 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: obj2, icon: { marginRight: 10 }, text: { flexShrink: 1 } };
obj2 = { padding: 10, marginVertical: 5, borderRadius: nativeDefault.radii.xs, display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: LegacyTokens.DARK_PRIMARY_630_LIGHT_PRIMARY_230 };
let closure_6 = createStyles.createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/billing/native/PaymentFlowWarningMessage.tsx");

export default function PaymentFlowWarningMessage(children) {
  let items;
  const tmp = closure_6();
  const obj = { style: tmp.container, children: items };
  size = { style: tmp.icon, color: nativeDefault.unsafe_rawColors.YELLOW_300, width: 16, height: 16 };
  const WarningCircle = native.WarningCircle;
  items = [React3(WarningCircle, size), ];
  const obj2 = { variant: "body-sm/medium", style: tmp.text, children: children.message };
  items[1] = React3(Text_Text.Text, obj2);
  return hasOwnProperty(View, obj);
};
