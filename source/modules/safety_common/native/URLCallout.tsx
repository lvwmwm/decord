// Module ID: 12248
// Function ID: 95710
// Name: URLCallout
// Dependencies: [31, 27, 33, 4130, 689, 12249, 4126, 2]
// Exports: URLCallout

// Module 12248 (URLCallout)
import "result";
import { ScrollView } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
({ jsxs: closure_3, jsx: closure_4 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { maxHeight: 300, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, width: "100%", borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
_createForOfIteratorHelperLoose.linkCalloutContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.linkCalloutContainerText = { padding: require("_createForOfIteratorHelperLoose").space.PX_8, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12, textAlign: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { padding: require("_createForOfIteratorHelperLoose").space.PX_8, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12, textAlign: "center" };
const result = require("jsxProd").fileFinishedImporting("modules/safety_common/native/URLCallout.tsx");

export const URLCallout = function URLCallout(url) {
  let hostname;
  let protocol;
  let theRestOfTheUrl;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(12249) /* useUrlParts */;
  const urlParts = obj.useUrlParts(url.url);
  obj = { style: tmp.linkCalloutContainer };
  ({ protocol, hostname, theRestOfTheUrl } = urlParts);
  obj = { style: tmp.linkCalloutContainerText, variant: "text-md/normal" };
  const obj1 = { variant: "text-md/normal", color: "text-muted" };
  const items = [protocol, "//"];
  obj1.children = items;
  const items1 = [callback(require(4126) /* Text */.Text, obj1), , ];
  const obj2 = { variant: "text-md/semibold", color: "text-default", children: hostname };
  items1[1] = callback2(require(4126) /* Text */.Text, obj2);
  const obj3 = { variant: "text-md/normal", color: "text-muted", children: theRestOfTheUrl };
  items1[2] = callback2(require(4126) /* Text */.Text, obj3);
  obj.children = items1;
  obj.children = callback(require(4126) /* Text */.Text, obj);
  return callback2(ScrollView, obj);
};
