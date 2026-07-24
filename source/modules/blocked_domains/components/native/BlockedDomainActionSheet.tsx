// Module ID: 12247
// Function ID: 95707
// Name: BlockedDomainActionSheet
// Dependencies: [31, 33, 4130, 689, 5187, 4541, 5807, 4126, 1212, 12248, 4543, 4098, 2]
// Exports: default

// Module 12247 (BlockedDomainActionSheet)
import "result";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.title = { textAlign: "center" };
_createForOfIteratorHelperLoose.warningMessage = { textAlign: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/blocked_domains/components/native/BlockedDomainActionSheet.tsx");

export default function BlockedDomainActionSheet(url) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { startExpanded: true };
  obj = { spacing: 16, justify: "center", align: "center", style: tmp.container };
  obj = { spacing: 8, justify: "center", align: "center" };
  const items = [callback(require(5807) /* AccountAgeTier10LargeBadge */.TrafficConeSpotIllustration, {}), , ];
  const obj1 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl.string(require(1212) /* getSystemLocale */.t["2B3wj8"]);
  items[1] = callback(require(4126) /* Text */.Text, obj1);
  const obj2 = { style: tmp.warningMessage, variant: "text-md/medium" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj2.children = intl2.format(require(1212) /* getSystemLocale */.t.jnHyYU, {});
  items[2] = callback(require(4126) /* Text */.Text, obj2);
  obj.children = items;
  const items1 = [callback2(require(4541) /* Stack */.Stack, obj), callback(require(12248) /* URLCallout */.URLCallout, { url: url.url }), ];
  const obj3 = { grow: true };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj3.text = intl3.string(require(1212) /* getSystemLocale */.t["/g10LC"]);
  obj3.onPress = function onPress() {
    return outer1_1(outer1_2[11]).hideActionSheet();
  };
  items1[2] = callback(require(4543) /* Button */.Button, obj3);
  obj.children = items1;
  obj.children = callback2(require(4541) /* Stack */.Stack, obj);
  return callback(require(5187) /* Background */.BottomSheet, obj);
};
