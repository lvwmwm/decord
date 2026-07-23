// Module ID: 12218
// Function ID: 95461
// Name: SuspiciousDownloadActionSheet
// Dependencies: [31, 33, 4130, 689, 1557, 5187, 4541, 5807, 4126, 1212, 4543, 4098, 3821, 2]
// Exports: default

// Module 12218 (SuspiciousDownloadActionSheet)
import "result";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { padding: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.title = { textAlign: "center" };
_createForOfIteratorHelperLoose.body = { textAlign: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/suspicious_downloads/native/SuspiciousDownloadActionSheet.tsx");

export default function SuspiciousDownloadActionSheet(href) {
  href = href.href;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { startExpanded: true };
  obj = { spacing: 16, justify: "center", align: "center" };
  const items = [tmp.container, { paddingBottom: importDefault(1557)().bottom }];
  obj.style = items;
  obj = { spacing: 8, justify: "center", align: "center" };
  const items1 = [callback(href(5807).TrafficConeSpotIllustration, {}), , ];
  const obj1 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary" };
  const intl = href(1212).intl;
  obj1.children = intl.string(href(1212).t.XtDo9Z);
  items1[1] = callback(href(4126).Text, obj1);
  const obj2 = { style: tmp.body, variant: "text-md/medium" };
  const intl2 = href(1212).intl;
  obj2.children = intl2.string(href(1212).t.L9yFko);
  items1[2] = callback(href(4126).Text, obj2);
  obj.children = items1;
  const items2 = [callback2(href(4541).Stack, obj), ];
  const obj3 = { spacing: 8 };
  const obj4 = {};
  const intl3 = href(1212).intl;
  obj4.text = intl3.string(href(1212).t.j7Vi2i);
  obj4.onPress = function onPress() {
    return outer1_1(outer1_2[11]).hideActionSheet();
  };
  const items3 = [callback(href(4543).Button, obj4), ];
  const obj5 = {};
  const intl4 = href(1212).intl;
  obj5.text = intl4.string(href(1212).t["/bHu89"]);
  obj5.onPress = function onPress() {
    outer1_1(outer1_2[11]).hideActionSheet();
    outer1_1(outer1_2[12])(href, true);
  };
  obj5.variant = "secondary";
  items3[1] = callback(href(4543).Button, obj5);
  obj3.children = items3;
  items2[1] = callback2(href(4541).Stack, obj3);
  obj.children = items2;
  obj.children = callback2(href(4541).Stack, obj);
  return callback(href(5187).BottomSheet, obj);
};
