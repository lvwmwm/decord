// Module ID: 10475
// Function ID: 81262
// Name: IgnoreThermalStateAlert
// Dependencies: [31, 33, 4131, 4562, 1212, 5668, 4127, 2]
// Exports: IgnoreThermalStateAlert

// Module 10475 (IgnoreThermalStateAlert)
import "result";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
let closure_5 = _createForOfIteratorHelperLoose.createStyles({ text: { marginTop: 16, lineHeight: 20, textAlign: "center" }, header: { textAlign: "center" } });
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/activities/native/IgnoreThermalStateAlert.tsx");

export const IgnoreThermalStateAlert = function IgnoreThermalStateAlert(onConfirm) {
  onConfirm = onConfirm.onConfirm;
  let obj = Object.create(null);
  obj.onConfirm = 0;
  const merged = Object.assign(onConfirm, obj);
  const tmp3 = callback3();
  obj = {};
  const merged1 = Object.assign(merged);
  const intl = onConfirm(1212).intl;
  obj["cancelText"] = intl.string(onConfirm(1212).t["1fRDnT"]);
  obj["onCancel"] = function onCancel() {
    if (null != onConfirm) {
      onConfirm();
    }
    const result = onConfirm(outer1_2[5]).disregardSeriousThermalState();
  };
  const intl2 = onConfirm(1212).intl;
  obj["confirmText"] = intl2.string(onConfirm(1212).t.oEAioF);
  obj = { style: tmp3.header, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary" };
  const intl3 = onConfirm(1212).intl;
  obj.children = intl3.string(onConfirm(1212).t.v5X4fZ);
  const items = [callback(onConfirm(4127).Text, obj), ];
  const obj1 = { style: tmp3.text, variant: "text-md/medium" };
  const intl4 = onConfirm(1212).intl;
  obj1.children = intl4.string(onConfirm(1212).t.VOgTjy);
  items[1] = callback(onConfirm(4127).Text, obj1);
  obj["children"] = items;
  return callback2(importDefault(4562), obj);
};
