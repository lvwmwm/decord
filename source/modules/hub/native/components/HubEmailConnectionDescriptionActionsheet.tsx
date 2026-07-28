// Module ID: 11810
// Function ID: 91548
// Name: HubEmailConnectionDescriptionActionsheet
// Dependencies: [31, 33, 4165, 5221, 5220, 1212, 4161, 2]
// Exports: default

// Module 11810 (HubEmailConnectionDescriptionActionsheet)
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
  const items = [callback(require(5220) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj), , ];
  obj = { style: tmp.description, variant: "text-sm/medium", color: "text-default" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.children = intl2.string(require(1212) /* getSystemLocale */.t.O1k9XX);
  items[1] = callback(require(4161) /* Text */.Text, obj);
  const obj1 = { style: tmp.description, variant: "text-sm/medium", color: "text-default" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl3.string(require(1212) /* getSystemLocale */.t.FV5dvh);
  items[2] = callback(require(4161) /* Text */.Text, obj1);
  obj.children = items;
  return callback2(require(5221) /* Background */.BottomSheet, obj);
};
