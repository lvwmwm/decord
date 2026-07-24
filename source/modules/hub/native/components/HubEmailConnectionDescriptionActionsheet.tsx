// Module ID: 11794
// Function ID: 91587
// Name: HubEmailConnectionDescriptionActionsheet
// Dependencies: [31, 33, 4130, 5187, 5186, 1212, 4126, 2]
// Exports: default

// Module 11794 (HubEmailConnectionDescriptionActionsheet)
import "result";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_2;
let closure_3;
const require = arg1;
({ jsx: closure_2, jsxs: closure_3 } = jsxProd);
let closure_4 = _createForOfIteratorHelperLoose.createStyles({ description: { marginBottom: 8 } });
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/hub/native/components/HubEmailConnectionDescriptionActionsheet.tsx");

export default function HubEmailConnectionDescriptionActionsheet() {
  const tmp = callback3();
  let obj = {};
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t["48kg+O"]);
  const items = [callback(require(5186) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj), , ];
  obj = { style: tmp.description, variant: "text-sm/medium", color: "text-default" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.children = intl2.string(require(1212) /* getSystemLocale */.t.O1k9XX);
  items[1] = callback(require(4126) /* Text */.Text, obj);
  const obj1 = { style: tmp.description, variant: "text-sm/medium", color: "text-default" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl3.string(require(1212) /* getSystemLocale */.t.FV5dvh);
  items[2] = callback(require(4126) /* Text */.Text, obj1);
  obj.children = items;
  return callback2(require(5187) /* Background */.BottomSheet, obj);
};
