// Module ID: 9062
// Function ID: 71154
// Name: AcceptRequestConfirmationModal
// Dependencies: [31, 27, 33, 4130, 689, 4561, 1212, 4470, 4126, 2]
// Exports: default

// Module 9062 (AcceptRequestConfirmationModal)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { textAlign: "center", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.bodyText = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.text = { textAlign: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/people/strangers/native/AcceptRequestConfirmationModal.tsx");

export default function AcceptRequestConfirmationModal(onConfirm) {
  onConfirm = onConfirm.onConfirm;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = {};
  const intl = onConfirm(1212).intl;
  obj.confirmText = intl.string(onConfirm(1212).t.MMlhsr);
  const intl2 = onConfirm(1212).intl;
  obj.cancelText = intl2.string(onConfirm(1212).t["ETE/oC"]);
  obj.onConfirm = function onConfirm() {
    onConfirm();
    outer1_1(outer1_2[7]).close();
  };
  obj.onCancel = onConfirm.onCancel;
  obj = { style: tmp.bodyText };
  obj = { variant: "heading-lg/bold", color: "text-strong", style: tmp.text };
  const intl3 = onConfirm(1212).intl;
  obj.children = intl3.string(onConfirm(1212).t.eJzSDT);
  const items = [callback(onConfirm(4126).Text, obj), ];
  const obj1 = { variant: "text-md/medium", color: "text-subtle", style: tmp.text };
  const intl4 = onConfirm(1212).intl;
  obj1.children = intl4.string(onConfirm(1212).t.GB4jUw);
  items[1] = callback(onConfirm(4126).Text, obj1);
  obj.children = items;
  obj.children = callback2(View, obj);
  return callback(importDefault(4561), obj);
};
