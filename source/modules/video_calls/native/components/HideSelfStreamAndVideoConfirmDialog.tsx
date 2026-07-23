// Module ID: 15887
// Function ID: 122750
// Name: HideSelfStreamAndVideoConfirmDialog
// Dependencies: [31, 27, 15886, 33, 4130, 1212, 4561, 4126, 7955, 2]
// Exports: default

// Module 15887 (HideSelfStreamAndVideoConfirmDialog)
import "result";
import { View } from "get ActivityIndicator";
import { SelfStreamAndVideoAlertType as closure_4 } from "SelfStreamAndVideoAlertType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ wrapper: { padding: 16 }, body: { paddingTop: 16 }, description: { lineHeight: 18 }, ctaLink: { paddingTop: 8, textAlign: "center", textDecorationLine: "underline" } });
let result = require("SelfStreamAndVideoAlertType").fileFinishedImporting("modules/video_calls/native/components/HideSelfStreamAndVideoConfirmDialog.tsx");

export default function HideSelfStreamAndVideoConfirmDialog(arg0) {
  let onConfirm;
  let type;
  ({ type, onConfirm } = arg0);
  let obj = Object.create(null);
  obj.type = 0;
  obj.onConfirm = 0;
  const merged = Object.assign(arg0, obj);
  const tmp3 = callback3();
  if (type === constants.STREAM) {
    const intl2 = onConfirm(1212).intl;
    let stringResult = intl2.string(onConfirm(1212).t["/lFMWr"]);
  } else {
    const intl = onConfirm(1212).intl;
    stringResult = intl.string(onConfirm(1212).t.xzxhZS);
  }
  if (type === constants.STREAM) {
    const intl4 = onConfirm(1212).intl;
    let stringResult1 = intl4.string(onConfirm(1212).t.xaOX7d);
  } else {
    const intl3 = onConfirm(1212).intl;
    stringResult1 = intl3.string(onConfirm(1212).t.oU1p9O);
  }
  obj = {};
  const merged1 = Object.assign(merged);
  obj["title"] = stringResult;
  obj["style"] = tmp3.wrapper;
  const intl5 = onConfirm(1212).intl;
  obj["cancelText"] = intl5.string(onConfirm(1212).t["ETE/oC"]);
  let onClose;
  if (null != merged) {
    onClose = merged.onClose;
  }
  obj["onCancel"] = onClose;
  const intl6 = onConfirm(1212).intl;
  obj["confirmText"] = intl6.string(onConfirm(1212).t["cY+Oob"]);
  obj["onConfirm"] = onConfirm;
  obj = { style: tmp3.body };
  const obj1 = { style: tmp3.description, variant: "text-sm/medium", children: stringResult1 };
  const items = [callback(onConfirm(4126).Text, obj1), ];
  const obj2 = {
    accessibilityRole: "link",
    style: items1,
    onPress() {
      const result = outer1_1(outer1_2[8]).updatedUnsyncedSettings({ disableHideSelfStreamAndVideoConfirmationAlert: true });
      onConfirm();
    },
    variant: "text-sm/medium"
  };
  items1 = [, ];
  ({ ctaLink: arr2[0], description: arr2[1] } = tmp3);
  const intl7 = onConfirm(1212).intl;
  obj2.children = intl7.string(onConfirm(1212).t["JdIQ/Y"]);
  items[1] = callback(onConfirm(4126).Text, obj2);
  obj.children = items;
  obj["children"] = callback2(View, obj);
  return callback(importDefault(4561), obj);
};
