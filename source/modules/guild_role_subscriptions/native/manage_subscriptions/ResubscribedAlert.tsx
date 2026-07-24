// Module ID: 14157
// Function ID: 108858
// Name: ResubscribedAlert
// Dependencies: [31, 27, 33, 4130, 689, 4561, 1212, 14158, 1273, 4126, 2]
// Exports: default

// Module 14157 (ResubscribedAlert)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ View: closure_3, Image: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.body = { alignItems: "center", textAlign: "center" };
_createForOfIteratorHelperLoose.centerText = { textAlign: "center" };
_createForOfIteratorHelperLoose.headerImage = { width: 87, height: 87 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/ResubscribedAlert.tsx");

export default function ResubscribedAlert(onClose) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.confirmText = intl.string(require(1212) /* getSystemLocale */.t["NX+WJN"]);
  obj.onConfirm = onClose.onClose;
  obj.style = tmp.container;
  obj = { style: tmp.body };
  obj = { source: importDefault(14158), style: tmp.headerImage };
  const items = [callback(closure_4, obj), callback(require(1273) /* Button */.Spacer, { size: 27 }), , , ];
  const obj1 = { variant: "text-lg/semibold", color: "mobile-text-heading-primary", style: tmp.centerText };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl2.string(require(1212) /* getSystemLocale */.t.oPV2cy);
  items[2] = callback(require(4126) /* Text */.Text, obj1);
  items[3] = callback(require(1273) /* Button */.Spacer, { size: 12 });
  const obj2 = { variant: "text-md/normal", color: "mobile-text-heading-primary", style: tmp.centerText };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj2.children = intl3.string(require(1212) /* getSystemLocale */.t.DdRizV);
  items[4] = callback(require(4126) /* Text */.Text, obj2);
  obj.children = items;
  obj.children = callback2(closure_3, obj);
  return callback(importDefault(4561), obj);
};
