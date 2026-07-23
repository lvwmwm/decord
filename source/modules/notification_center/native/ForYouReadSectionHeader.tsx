// Module ID: 15162
// Function ID: 115469
// Name: ForYouReadSectionHeader
// Dependencies: [31, 27, 33, 4130, 689, 4126, 1212, 2]
// Exports: ForYouReadSectionHeader

// Module 15162 (ForYouReadSectionHeader)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
const View = get_ActivityIndicator.View;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { borderTopWidth: get_ActivityIndicator.StyleSheet.hairlineWidth, borderTopColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, marginVertical: 8, paddingHorizontal: 24 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.textHeader = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE, marginTop: 20 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj1 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE, marginTop: 20 };
const result = require("jsxProd").fileFinishedImporting("modules/notification_center/native/ForYouReadSectionHeader.tsx");

export const ForYouReadSectionHeader = function ForYouReadSectionHeader() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.container };
  obj = { style: tmp.textHeader, variant: "text-sm/semibold" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.hftC1K);
  obj.children = jsx(require(4126) /* Text */.Text, { style: tmp.textHeader, variant: "text-sm/semibold" });
  return <View style={tmp.textHeader} variant="text-sm/semibold" />;
};
