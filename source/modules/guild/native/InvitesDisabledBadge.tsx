// Module ID: 15318
// Function ID: 15319
// Dependencies: [19, 17, 21, 4285, 712, 1297, 11998, 2]

// Module 15318
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

const require = arg1;
let obj = { pause: { alignContent: "center", justifyContent: "center", width: 10, height: 10 }, pauseBackground: null, pauseRing: null };
obj = { borderRadius: 20, backgroundColor: require("Themes").colors.BACKGROUND_MOD_STRONG, padding: require("Button").BADGE_PADDING, height: 16, width: 16, alignContent: "center", justifyContent: "center" };
obj[1] = obj;
createCacheKey = { borderRadius: 20, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, position: "absolute", bottom: -require("Button").BADGE_PADDING, right: -require("Button").BADGE_PADDING, padding: require("Button").BADGE_PADDING, height: 22, width: 22, alignContent: "center", justifyContent: "center" };
obj[2] = createCacheKey;
let closure_5 = createCacheKey.createStyles(obj);
const memoResult = require("noop").memo(function InvitesDisabledBadge(style) {
  const tmp = callback();
  let obj = { style: items, children: null };
  items = [tmp.pauseRing, style.style];
  obj = { style: tmp.pauseBackground, children: null };
  obj = { style: tmp.pause, themedColor: null, source: null };
  obj[1] = importDefault(712).colors.INTERACTIVE_TEXT_ACTIVE;
  obj[2] = importDefault(11998);
  obj[1] = jsx(require(1297) /* Button */.ThemedIcon, { style: tmp.pause, themedColor: null, source: null });
  obj[1] = <View style={tmp.pause} themedColor={null} source={null} />;
  return <View style={tmp.pause} themedColor={null} source={null} />;
});
const result = require("jsxProd").fileFinishedImporting("modules/guild/native/InvitesDisabledBadge.tsx");

export default memoResult;
