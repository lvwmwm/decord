// Module ID: 17138
// Function ID: 17139
// Name: ResubscribedAlert
// Dependencies: [19, 17, 21, 5009, 575, 6025, 1114, 5712, 17139, 1188, 5619, 2]
// Exports: default

// Module 17138 (ResubscribedAlert)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1114 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 5619 */;
import FastImageDefault from "FastImage" /* 5712 */;
import AlertDefault from "Alert" /* 6025 */;
import AssetRegistryDefault from "AssetRegistry" /* 17139 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
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
  const obj4 = { variant: "text-lg/semibold", color: "mobile-text-heading-primary", style: tmp.centerText, children: intl2.string(intl4.t.oPV2cy) };
  const Text = Text_Text.Text;
  intl2 = intl4.intl;
  items[2] = React3(Text, obj4);
  items[3] = React3(native.Spacer, { size: 12 });
  const obj5 = { variant: "text-md/normal", color: "mobile-text-heading-primary", style: tmp.centerText, children: intl3.string(intl4.t.DdRizV) };
  const Text2 = Text_Text.Text;
  intl3 = intl4.intl;
  items[4] = React3(Text2, obj5);
  return React3(tmp2, obj);
};
