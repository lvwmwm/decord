// Module ID: 15210
// Function ID: 115793
// Name: ForYouRecentActivitySectionHeader
// Dependencies: [31, 27, 33, 4130, 689, 4126, 1212, 2]
// Exports: ForYouRecentActivitySectionHeader

// Module 15210 (ForYouRecentActivitySectionHeader)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.textHeader = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj1 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
const result = require("jsxProd").fileFinishedImporting("modules/notification_center/native/ForYouRecentActivitySectionHeader.tsx");

export const ForYouRecentActivitySectionHeader = function ForYouRecentActivitySectionHeader() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.container };
  obj = { style: tmp.textHeader, color: "text-muted", variant: "text-sm/semibold", accessibilityRole: "header" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.yM9Krm);
  obj.children = jsx(require(4126) /* Text */.Text, { style: tmp.textHeader, color: "text-muted", variant: "text-sm/semibold", accessibilityRole: "header" });
  return <View style={tmp.textHeader} color="text-muted" variant="text-sm/semibold" accessibilityRole="header" />;
};
