// Module ID: 4742
// Function ID: 4743
// Name: PermissionsAlertModal
// Dependencies: [19, 21, 4533, 4533, 1236, 2]
// Exports: default

// Module 4742 (PermissionsAlertModal)
import "noop";
import jsxProd from "jsxProd";

let c3;
let obj1;
const require = arg1;
({ jsx: obj1, jsxs: c3 } = jsxProd);
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/native_permissions/mobile/PermissionsAlertModal.tsx");

export default function PermissionsAlertModal(arg0) {
  let body;
  let onConfirm;
  let title;
  ({ title, body, onConfirm } = arg0);
  let obj = { title, content: body, actions: null };
  obj = { children: null };
  obj = { onPress: onConfirm, text: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t.jVcuVY);
  const items = [callback(require(4533) /* getAlertModalItemKey */.AlertActionButton, obj, "confirm"), ];
  const obj1 = { variant: "secondary", text: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj1[1] = intl2.string(require(1236) /* getSystemLocale */.t.cpT0Cq);
  items[1] = callback(require(4533) /* getAlertModalItemKey */.AlertActionButton, obj1, "close");
  obj[0] = items;
  obj[2] = callback2(require(4533) /* getAlertModalItemKey */.AlertActions, obj);
  return callback(require(4533) /* getAlertModalItemKey */.AlertModal, obj);
};
