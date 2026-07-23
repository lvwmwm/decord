// Module ID: 11446
// Function ID: 89068
// Name: DescriptionEllipsis
// Dependencies: [31, 27, 33, 4130, 689, 2]
// Exports: default

// Module 11446 (DescriptionEllipsis)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_1;
let closure_2;
({ jsx: closure_1, jsxs: closure_2 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, justifyContent: "center", alignItems: "center", flexDirection: "row", borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, marginTop: 4, height: 12, width: 24 };
_createForOfIteratorHelperLoose.topicEllipsis = _createForOfIteratorHelperLoose;
const obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED, borderRadius: 2, margin: 1, height: 4, width: 4 };
_createForOfIteratorHelperLoose.topicEllipsisDot = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("components_native/common/DescriptionEllipsis.tsx");

export default function DescriptionEllipsis(dotStyle) {
  dotStyle = dotStyle.dotStyle;
  const tmp = _createForOfIteratorHelperLoose();
  const obj = { style: items };
  items = [tmp.topicEllipsis, dotStyle.style];
  const items1 = [tmp.topicEllipsisDot, dotStyle];
  const items2 = [callback(View, { style: items1 }), , ];
  const items3 = [tmp.topicEllipsisDot, dotStyle];
  items2[1] = callback(View, { style: items3 });
  const items4 = [tmp.topicEllipsisDot, dotStyle];
  items2[2] = callback(View, { style: items4 });
  obj.children = items2;
  return callback2(View, obj);
};
