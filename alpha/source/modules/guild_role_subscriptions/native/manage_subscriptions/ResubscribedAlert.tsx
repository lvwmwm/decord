// Module ID: 17519
// Function ID: 17520
// Name: ResubscribedAlert
// Dependencies: [19, 17, 21, 5140, 575, 6162, 1113, 5842, 17520, 1187, 5751, 2]
// Exports: default

// Module 17519 (ResubscribedAlert)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import Text_Text from "Text/Text" /* 5751 */;
import FastImageDefault from "FastImage" /* 5842 */;
import AlertDefault from "Alert" /* 6162 */;
import AssetRegistryDefault from "AssetRegistry" /* 17520 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: obj2, body: { alignItems: "center", textAlign: "center" }, centerText: { textAlign: "center" }, headerImage: { width: 87, height: 87 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/ResubscribedAlert.tsx");

export default function ResubscribedAlert(onClose) {
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj2;
  onClose = onClose.onClose;
  const tmp = closure_6();
  const obj = { confirmText: intl.string(intl4.t["NX+WJN"]), onConfirm: onClose, style: tmp.container, children: hasOwnProperty(View, obj2) };
  const tmp2 = AlertDefault;
  intl = intl4.intl;
  obj2 = { style: tmp.body, children: items };
  const obj3 = { source: AssetRegistryDefault, style: tmp.headerImage };
  const tmp3 = FastImageDefault;
  items = [React3(tmp3, obj3), React3(native.Spacer, { size: 27 }), , , ];
  const obj4 = { variant: "body-lg/semibold", color: "mobile-text-heading-primary", style: tmp.centerText, children: intl2.string(intl4.t.oPV2cy) };
  const Text = Text_Text.Text;
  intl2 = intl4.intl;
  items[2] = React3(Text, obj4);
  items[3] = React3(native.Spacer, { size: 12 });
  const obj5 = { variant: "body-md/normal", color: "mobile-text-heading-primary", style: tmp.centerText, children: intl3.string(intl4.t.DdRizV) };
  const Text2 = Text_Text.Text;
  intl3 = intl4.intl;
  items[4] = React3(Text2, obj5);
  return React3(tmp2, obj);
};
