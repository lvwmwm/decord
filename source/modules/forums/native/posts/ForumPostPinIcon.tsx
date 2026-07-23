// Module ID: 11127
// Function ID: 86610
// Name: ForumPostPinIcon
// Dependencies: [31, 27, 33, 4130, 689, 1273, 11128, 2]
// Exports: default

// Module 11127 (ForumPostPinIcon)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.round, width: 23, height: 23, marginEnd: 4, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
_createForOfIteratorHelperLoose.pin = _createForOfIteratorHelperLoose;
const obj1 = { height: 14, width: 14, tintColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose.pinIcon = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/forums/native/posts/ForumPostPinIcon.tsx");

export default function ForumPostPinIcon(containerStyle) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: items };
  items = [tmp.pin, containerStyle.containerStyle];
  obj = { source: importDefault(11128), style: tmp.pinIcon };
  obj.children = jsx(require(1273) /* Button */.Icon, { source: importDefault(11128), style: tmp.pinIcon });
  return <View source={importDefault(11128)} style={tmp.pinIcon} />;
};
