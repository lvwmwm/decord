// Module ID: 14879
// Function ID: 113502
// Dependencies: [31, 27, 33, 4130, 689, 1273, 11786, 2]

// Module 14879
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

const require = arg1;
let obj = { pause: { alignContent: "center", justifyContent: "center", width: 10, height: 10 } };
obj = { borderRadius: 20, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG, padding: require("Button").BADGE_PADDING, height: 16, width: 16, alignContent: "center", justifyContent: "center" };
obj.pauseBackground = obj;
_createForOfIteratorHelperLoose = { borderRadius: 20, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, position: "absolute", bottom: -require("Button").BADGE_PADDING, right: -require("Button").BADGE_PADDING, padding: require("Button").BADGE_PADDING, height: 22, width: 22, alignContent: "center", justifyContent: "center" };
obj.pauseRing = _createForOfIteratorHelperLoose;
let closure_5 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("result").memo(function InvitesDisabledBadge(style) {
  const tmp = callback();
  let obj = { style: items };
  items = [tmp.pauseRing, style.style];
  obj = { style: tmp.pauseBackground };
  obj = { style: tmp.pause, themedColor: importDefault(689).colors.INTERACTIVE_TEXT_ACTIVE, source: importDefault(11786) };
  obj.children = jsx(require(1273) /* Button */.ThemedIcon, { style: tmp.pause, themedColor: importDefault(689).colors.INTERACTIVE_TEXT_ACTIVE, source: importDefault(11786) });
  obj.children = <View style={tmp.pause} themedColor={importDefault(689).colors.INTERACTIVE_TEXT_ACTIVE} source={importDefault(11786)} />;
  return <View style={tmp.pause} themedColor={importDefault(689).colors.INTERACTIVE_TEXT_ACTIVE} source={importDefault(11786)} />;
});
const result = require("jsxProd").fileFinishedImporting("modules/guild/native/InvitesDisabledBadge.tsx");

export default memoResult;
