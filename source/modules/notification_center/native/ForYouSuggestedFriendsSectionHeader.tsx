// Module ID: 15165
// Function ID: 115475
// Name: ForYouSuggestedFriendsSectionHeader
// Dependencies: [31, 27, 33, 4130, 689, 4126, 1212, 2]
// Exports: default

// Module 15165 (ForYouSuggestedFriendsSectionHeader)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { borderTopWidth: 1, borderTopColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, marginTop: 12, marginBottom: 8, paddingHorizontal: 24, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.noDivider = { borderTopWidth: 0, marginTop: 0 };
_createForOfIteratorHelperLoose.text = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj1 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("jsxProd").fileFinishedImporting("modules/notification_center/native/ForYouSuggestedFriendsSectionHeader.tsx");

export default function ForYouSuggestedFriendsSectionHeader(showDivider) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = {};
  const items = [tmp.container, ];
  let noDivider = !showDivider.showDivider;
  if (noDivider) {
    noDivider = tmp.noDivider;
  }
  items[1] = noDivider;
  obj.style = items;
  obj = { style: tmp.text, color: "text-muted", variant: "text-sm/semibold" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t["1uAmCw"]);
  obj.children = jsx(require(4126) /* Text */.Text, { style: tmp.text, color: "text-muted", variant: "text-sm/semibold" });
  return <View style={tmp.text} color="text-muted" variant="text-sm/semibold" />;
};
