// Module ID: 14763
// Function ID: 14764
// Name: ResubscribedAlert
// Dependencies: [19, 17, 21, 4836, 576, 5300, 1115, 14764, 1177, 4832, 2]
// Exports: default

// Module 14763 (ResubscribedAlert)
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4832 */;
import AlertDefault from "Alert" /* 5300 */;
import AssetRegistryDefault from "AssetRegistry" /* 14764 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
({ View: c3, Image: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: obj2, body: { alignItems: "center", textAlign: "center" }, centerText: { textAlign: "center" }, headerImage: { width: 87, height: 87 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/ResubscribedAlert.tsx");

export default function ResubscribedAlert(onClose) {
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj2;
  onClose = onClose.onClose;
  const tmp = closure_7();
  const obj = { confirmText: intl.string(intl4.t["NX+WJN"]), onConfirm: onClose, style: tmp.container, children: metroRequire(_false, obj2) };
  const tmp2 = AlertDefault;
  intl = intl4.intl;
  obj2 = { style: tmp.body, children: items };
  items = [, , , , ];
  const obj3 = { source: AssetRegistryDefault, style: tmp.headerImage };
  items[0] = hasOwnProperty(React3, obj3);
  items[1] = hasOwnProperty(native.Spacer, { size: 27 });
  const obj4 = { variant: "text-lg/semibold", color: "mobile-text-heading-primary", style: tmp.centerText, children: intl2.string(intl4.t.oPV2cy) };
  const Text = Text_Text.Text;
  intl2 = intl4.intl;
  items[2] = hasOwnProperty(Text, obj4);
  items[3] = hasOwnProperty(native.Spacer, { size: 12 });
  const obj5 = { variant: "text-md/normal", color: "mobile-text-heading-primary", style: tmp.centerText, children: intl3.string(intl4.t.DdRizV) };
  const Text2 = Text_Text.Text;
  intl3 = intl4.intl;
  items[4] = hasOwnProperty(Text2, obj5);
  return hasOwnProperty(tmp2, obj);
};
