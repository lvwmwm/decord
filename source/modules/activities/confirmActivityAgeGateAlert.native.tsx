// Module ID: 10850
// Function ID: 84220
// Name: ConfirmActivityGateContent
// Dependencies: [31, 27, 33, 4130, 689, 10851, 4126, 1212, 4470, 1273, 2]
// Exports: confirmActivityAgeGateAlert

// Module 10850 (ConfirmActivityGateContent)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
function ConfirmActivityGateContent(children) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.alertContainer };
  const items = [callback(importDefault(10851), {}), ];
  obj = { style: tmp.alertBodyText, variant: "text-md/normal", children: children.description };
  items[1] = callback(require(4126) /* Text */.Text, obj);
  obj.children = items;
  return callback2(View, obj);
}
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = { alertContainer: { display: "flex", alignItems: "center", padding: 8 } };
_createForOfIteratorHelperLoose = { fontSize: 16, lineHeight: 24, color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT, textAlign: "center" };
_createForOfIteratorHelperLoose.alertBodyText = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/activities/confirmActivityAgeGateAlert.native.tsx");

export const confirmActivityAgeGateAlert = function confirmActivityAgeGateAlert(arg0) {
  let application;
  let onAgree;
  let onDisagree;
  ({ application, onAgree, onDisagree } = arg0);
  const intl = require(1212) /* getSystemLocale */.intl;
  let obj = { applicationName: application.name };
  const formatToPlainStringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.OgmIqy, obj);
  obj = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.title = intl2.string(require(1212) /* getSystemLocale */.t.SSDPOF);
  obj.children = callback(ConfirmActivityGateContent, { description: formatToPlainStringResult });
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.cancelText = intl3.string(require(1212) /* getSystemLocale */.t.hg1uxn);
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj.confirmText = intl4.string(require(1212) /* getSystemLocale */.t.wVq7uo);
  obj.onConfirm = onAgree;
  obj.onCancel = onDisagree;
  obj.confirmColor = require(1273) /* Button */.ButtonColors.RED;
  return Promise.resolve(importDefault(4470).show(obj));
};
