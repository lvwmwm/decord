// Module ID: 16178
// Function ID: 125367
// Name: RedesignSkipAvatarUploadAlertModal
// Dependencies: [31, 33, 4475, 1212, 4475, 2]
// Exports: default

// Module 16178 (RedesignSkipAvatarUploadAlertModal)
import "result";
import jsxProd from "jsxProd";

let closure_2;
let closure_3;
const require = arg1;
({ jsx: closure_2, jsxs: closure_3 } = jsxProd);
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/avatar/native/components/RedesignSkipAvatarUploadAlertModal.tsx");

export default function RedesignSkipAvatarUploadAlertModal(onConfirm) {
  let obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.DnKHuV);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.content = intl2.string(require(1212) /* getSystemLocale */.t["1EPySE"]);
  obj = {};
  obj = { onPress: onConfirm.onConfirm };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.text = intl3.string(require(1212) /* getSystemLocale */.t.nhJ8OC);
  const items = [callback(require(4475) /* getAlertModalItemKey */.AlertActionButton, obj, "confirm"), ];
  const obj1 = { variant: "secondary" };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj1.text = intl4.string(require(1212) /* getSystemLocale */.t["7eZ3ji"]);
  items[1] = callback(require(4475) /* getAlertModalItemKey */.AlertActionButton, obj1, "add-profile-picture");
  obj.children = items;
  obj.actions = callback2(require(4475) /* getAlertModalItemKey */.AlertActions, obj);
  return callback(require(4475) /* getAlertModalItemKey */.AlertModal, obj);
};
