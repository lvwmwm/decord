// Module ID: 5051
// Function ID: 43717
// Name: QuarantineModeInfoAlert
// Dependencies: [31, 653, 33, 4130, 5052, 689, 4561, 1273, 1212, 4126, 2]
// Exports: default

// Module 5051 (QuarantineModeInfoAlert)
import "result";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = {};
const merged = Object.assign(require("createTextStyle")(require("ME").Fonts.PRIMARY_BOLD, require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
_createForOfIteratorHelperLoose["textAlign"] = "center";
_createForOfIteratorHelperLoose["marginVertical"] = 12;
_createForOfIteratorHelperLoose.header = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.text = { textAlign: "center", marginVertical: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/quarantine/native/QuarantineModeInfoAlert.tsx");

export default function QuarantineModeInfoAlert(onClose) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { onClose: onClose.onClose };
  obj = { style: tmp.header };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.EouHwv);
  const items = [callback(require(1273) /* Button */.LegacyText, obj), ];
  obj = { style: tmp.text, variant: "text-md/medium" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.children = intl2.string(require(1212) /* getSystemLocale */.t.zNPBMA);
  items[1] = callback(require(4126) /* Text */.Text, obj);
  obj.children = items;
  return callback2(importDefault(4561), obj);
};
