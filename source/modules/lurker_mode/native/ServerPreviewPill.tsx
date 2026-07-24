// Module ID: 8627
// Function ID: 68399
// Name: ServerPreviewPill
// Dependencies: [31, 27, 33, 4130, 689, 4126, 1212, 2]
// Exports: default

// Module 8627 (ServerPreviewPill)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { position: "absolute", top: 16, left: 16, paddingHorizontal: 10, paddingVertical: 4, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, backgroundColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose.pill = _createForOfIteratorHelperLoose;
const obj1 = { color: require("_createForOfIteratorHelperLoose").colors.BLACK, textTransform: "uppercase", letterSpacing: 0.5 };
_createForOfIteratorHelperLoose.text = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/lurker_mode/native/ServerPreviewPill.tsx");

export default function ServerPreviewPill() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.pill, accessibilityRole: "text" };
  obj = { variant: "text-xs/bold", style: tmp.text };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.KNhFgD);
  obj.children = jsx(require(4126) /* Text */.Text, { variant: "text-xs/bold", style: tmp.text });
  return <View variant="text-xs/bold" style={tmp.text} />;
};
