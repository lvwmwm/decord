// Module ID: 4685
// Function ID: 40823
// Name: PermissionsAlertModal
// Dependencies: [31, 33, 4475, 4475, 1212, 2]
// Exports: default

// Module 4685 (PermissionsAlertModal)
import "result";
import jsxProd from "jsxProd";

let closure_2;
let closure_3;
const require = arg1;
({ jsx: closure_2, jsxs: closure_3 } = jsxProd);
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/native_permissions/mobile/PermissionsAlertModal.tsx");

export default function PermissionsAlertModal(arg0) {
  let body;
  let onConfirm;
  let title;
  ({ title, body, onConfirm } = arg0);
  let obj = { title, content: body };
  obj = {};
  obj = { onPress: onConfirm };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.text = intl.string(require(1212) /* getSystemLocale */.t.jVcuVY);
  const items = [callback(require(4475) /* getAlertModalItemKey */.AlertActionButton, obj, "confirm"), ];
  const obj1 = { variant: "secondary" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj1.text = intl2.string(require(1212) /* getSystemLocale */.t.cpT0Cq);
  items[1] = callback(require(4475) /* getAlertModalItemKey */.AlertActionButton, obj1, "close");
  obj.children = items;
  obj.actions = callback2(require(4475) /* getAlertModalItemKey */.AlertActions, obj);
  return callback(require(4475) /* getAlertModalItemKey */.AlertModal, obj);
};
