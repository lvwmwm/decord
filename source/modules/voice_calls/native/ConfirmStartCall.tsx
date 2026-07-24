// Module ID: 10142
// Function ID: 78462
// Name: ConfirmStartCall
// Dependencies: [31, 33, 4475, 1212, 4475, 4472, 2]
// Exports: confirmStartCall

// Module 10142 (ConfirmStartCall)
import "result";
import jsxProd from "jsxProd";

let closure_2;
let closure_3;
const require = arg1;
function ConfirmStartCall(onConfirm) {
  let obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.HlAPoq);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.content = intl2.string(require(1212) /* getSystemLocale */.t["cRW4D/"]);
  obj = {};
  obj = { variant: "active" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.text = intl3.string(require(1212) /* getSystemLocale */.t.rimG2R);
  obj.onPress = onConfirm.onConfirm;
  const items = [callback(require(4475) /* getAlertModalItemKey */.AlertActionButton, obj, "confirm"), ];
  const obj1 = { variant: "secondary" };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj1.text = intl4.string(require(1212) /* getSystemLocale */.t["ETE/oC"]);
  items[1] = callback(require(4475) /* getAlertModalItemKey */.AlertActionButton, obj1, "cancel");
  obj.children = items;
  obj.actions = callback2(require(4475) /* getAlertModalItemKey */.AlertActions, obj);
  return callback(require(4475) /* getAlertModalItemKey */.AlertModal, obj);
}
({ jsx: closure_2, jsxs: closure_3 } = jsxProd);
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/voice_calls/native/ConfirmStartCall.tsx");

export const confirmStartCall = function confirmStartCall(fn) {
  let obj = require(4472) /* useAlertStore */;
  obj = { onConfirm: fn };
  obj.openAlert("start-voice-call", callback(ConfirmStartCall, obj));
};
