// Module ID: 15466
// Function ID: 119061
// Name: handleConfirm
// Dependencies: [5, 31, 33, 8923, 4475, 1212, 4475, 2]
// Exports: default

// Module 15466 (handleConfirm)
import getSystemLocale from "getSystemLocale";
import "result";
import jsxProd from "jsxProd";

let closure_4;
let closure_5;
const require = arg1;
function handleConfirm() {
  return _handleConfirm(...arguments);
}
function _handleConfirm() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/friends/components/ClearAllIncomingRequestsAlertModal.tsx");

export default function ClearAllIncomingRequestsAlertModal(incomingRequestCount) {
  let obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.z2pFjo);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.content = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t["0nTvEw"], { incomingRequestCount: incomingRequestCount.incomingRequestCount });
  obj = {};
  obj = { variant: "destructive", onPress: handleConfirm };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.text = intl3.string(require(1212) /* getSystemLocale */.t["cY+Oob"]);
  const items = [callback2(require(4475) /* getAlertModalItemKey */.AlertActionButton, obj, "confirm"), ];
  const obj1 = { variant: "secondary" };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj1.text = intl4.string(require(1212) /* getSystemLocale */.t["ETE/oC"]);
  items[1] = callback2(require(4475) /* getAlertModalItemKey */.AlertActionButton, obj1, "cancel");
  obj.children = items;
  obj.actions = callback3(require(4475) /* getAlertModalItemKey */.AlertActions, obj);
  return callback2(require(4475) /* getAlertModalItemKey */.AlertModal, obj);
};
