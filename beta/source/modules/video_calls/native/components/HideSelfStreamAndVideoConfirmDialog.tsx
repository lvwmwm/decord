// Module ID: 17036
// Function ID: 17037
// Name: HideSelfStreamAndVideoConfirmDialog
// Dependencies: [19, 17, 17035, 21, 4836, 1115, 5300, 4832, 8659, 2]
// Exports: default

// Module 17036 (HideSelfStreamAndVideoConfirmDialog)
import react_native from "react-native" /* 17 */;
import AlertDefault from "Alert" /* 5300 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 8659 */;
import HideSelfStreamAndVideoConstants from "HideSelfStreamAndVideoConstants" /* 17035 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
const constants = HideSelfStreamAndVideoConstants.SelfStreamAndVideoAlertType;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ wrapper: { padding: 16 }, body: { paddingTop: 16 }, description: { lineHeight: 18 }, ctaLink: { paddingTop: 8, textAlign: "center", textDecorationLine: "underline" } });
let result = size.fileFinishedImporting("modules/video_calls/native/components/HideSelfStreamAndVideoConfirmDialog.tsx");

export default function HideSelfStreamAndVideoConfirmDialog(arg0) {
  let intl5;
  let intl6;
  let intl7;
  let items;
  let items1;
  let obj2;
  let onClose;
  let onConfirm;
  let stringResult;
  let stringResult1;
  let tmp6;
  let type;
  ({ type, onConfirm } = arg0);
  const merged = Object.assign(arg0, Object.assign({ type: 0, onConfirm: 0 }));
  const tmp2 = closure_7();
  const tmp3 = constants;
  if (type === constants.STREAM) {
    const intl2 = onConfirm(1115).intl;
    stringResult = intl2.string(onConfirm(1115).t["/lFMWr"]);
    tmp6 = onConfirm;
  } else {
    const intl = onConfirm(1115).intl;
    tmp6 = onConfirm;
    stringResult = intl.string(onConfirm(1115).t.xzxhZS);
  }
  if (type === tmp3.STREAM) {
    const intl4 = tmp6(1115).intl;
    stringResult1 = intl4.string(tmp6(1115).t.xaOX7d);
  } else {
    const intl3 = tmp6(1115).intl;
    stringResult1 = intl3.string(tmp6(1115).t.oU1p9O);
  }
  let obj = { title: stringResult, style: tmp2.wrapper, cancelText: intl5.string(tmp6(1115).t["ETE/oC"]), onCancel: onClose, confirmText: intl6.string(tmp6(1115).t["cY+Oob"]), onConfirm, children: closure_6(View, obj2) };
  const tmp12 = AlertDefault;
  const merged1 = Object.assign(merged);
  intl5 = tmp6(1115).intl;
  onClose = undefined;
  if (merged != null) {
    onClose = merged.onClose;
  }
  intl6 = tmp6(1115).intl;
  obj2 = { style: tmp2.body, children: items };
  items = [, ];
  const obj3 = { style: tmp2.description, variant: "text-sm/medium", children: stringResult1 };
  items[0] = closure_5(tmp6(4832).Text, obj3);
  const obj4 = {
    accessibilityRole: "link",
    style: items1,
    onPress() {
      const obj = UserSettingsActionCreatorsDefault;
      const result = obj.updatedUnsyncedSettings({ disableHideSelfStreamAndVideoConfirmationAlert: true });
      onConfirm();
    },
    variant: "text-sm/medium",
    children: intl7.string(tmp6(1115).t["JdIQ/Y"])
  };
  items1 = [, ];
  ({ ctaLink: arr2[0], description: arr2[1] } = tmp2);
  const Text = tmp6(4832).Text;
  intl7 = tmp6(1115).intl;
  items[1] = closure_5(Text, obj4);
  return closure_5(tmp12, obj);
};
