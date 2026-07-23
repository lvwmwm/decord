// Module ID: 9877
// Function ID: 76475
// Name: ForwardStaffToNonStaffWarningModal
// Dependencies: [33, 4475, 1212, 2]
// Exports: default

// Module 9877 (ForwardStaffToNonStaffWarningModal)
import jsxProd from "jsxProd";

let closure_2;
let closure_3;
let closure_4;
({ jsx: closure_2, Fragment: closure_3, jsxs: closure_4 } = jsxProd);
const result = require("getSystemLocale").fileFinishedImporting("modules/forwarding/native/ForwardStaffToNonStaffWarningModal.tsx");

export default function ForwardStaffToNonStaffWarningModal(arg0) {
  let onBack;
  let onConfirm;
  ({ onConfirm, onBack } = arg0);
  let obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.YrV3I9);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.content = intl2.string(require(1212) /* getSystemLocale */.t.MXSMtl);
  obj = {};
  obj = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.text = intl3.string(require(1212) /* getSystemLocale */.t.X7eUJq);
  obj.onPress = onConfirm;
  const items = [callback(require(4475) /* getAlertModalItemKey */.AlertActionButton, obj, "confirm"), ];
  const obj1 = { variant: "secondary" };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj1.text = intl4.string(require(1212) /* getSystemLocale */.t["13/7kX"]);
  obj1.onPress = onBack;
  items[1] = callback(require(4475) /* getAlertModalItemKey */.AlertActionButton, obj1, "back");
  obj.children = items;
  obj.actions = callback2(closure_3, obj);
  return callback(require(4475) /* getAlertModalItemKey */.AlertModal, obj);
};
