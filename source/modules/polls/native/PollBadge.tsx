// Module ID: 15365
// Function ID: 117291
// Name: PollBadge
// Dependencies: [31, 27, 33, 4130, 689, 1273, 15366, 4126, 1212, 2]
// Exports: default

// Module 15365 (PollBadge)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.round, paddingHorizontal: 8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED, flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.text = { marginLeft: 4, textTransform: "uppercase" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/polls/native/PollBadge.tsx");

export default function PollBadge(style) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: items };
  items = [tmp.container, style.style];
  obj = { size: require(1273) /* Button */.IconSizes.EXTRA_SMALL_10, source: importDefault(15366) };
  const items1 = [callback(require(1273) /* Button */.Icon, obj), ];
  obj = { style: tmp.text, variant: "text-xs/semibold" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.RgIi2B);
  items1[1] = callback(require(4126) /* Text */.Text, obj);
  obj.children = items1;
  return callback2(View, obj);
};
