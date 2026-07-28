// Module ID: 14979
// Function ID: 114069
// Dependencies: [31, 27, 33, 4165, 689, 5008, 5119, 11400, 2]

// Module 14979
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let obj = {};
obj = { position: "absolute", bottom: -3, right: -3, height: 22, width: 22, borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, backgroundColor: require("_createForOfIteratorHelperLoose").colors.STATUS_WARNING_BACKGROUND, borderWidth: 3, borderRadius: 11, justifyContent: "center", alignItems: "center", overflow: "hidden" };
obj.badgeImageContainer = obj;
_createForOfIteratorHelperLoose = { height: 16, width: 16, opacity: require("result").DARK_1_LIGHT_08, tintColor: require("_createForOfIteratorHelperLoose").colors.BLACK };
obj.badgeImage = _createForOfIteratorHelperLoose;
let closure_4 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("result").memo(function GuildsBarGeoRestrictedBadge(style) {
  const tmp = callback();
  let obj = { style: items, pointerEvents: "none" };
  items = [tmp.badgeImageContainer, style.style];
  obj = { source: importDefault(11400), style: tmp.badgeImage };
  obj.children = jsx(importDefault(5119), { source: importDefault(11400), style: tmp.badgeImage });
  return <View source={importDefault(11400)} style={tmp.badgeImage} />;
});
const result = require("jsxProd").fileFinishedImporting("modules/guilds_bar/native/GuildsBarGeoRestrictedBadge.tsx");

export default memoResult;
