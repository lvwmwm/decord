// Module ID: 12636
// Function ID: 97630
// Name: Card
// Dependencies: [31, 27, 33, 4165, 689, 4161, 1212, 12637, 6597, 12638, 12533, 12639, 8262, 12640, 8647, 2]
// Exports: default

// Module 12636 (Card)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
function Card(arg0) {
  let IconComponent;
  let children;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.card };
  obj = { style: tmp.iconContainer };
  obj = { size: "lg", color: importDefault(689).unsafe_rawColors.GUILD_BOOSTING_PINK };
  ({ IconComponent, children } = arg0);
  obj.children = callback(IconComponent, obj);
  const items = [callback(View, obj), callback(require(4161) /* Text */.Text, { style: tmp.description, variant: "text-sm/medium", children })];
  obj.children = items;
  return callback2(View, obj);
}
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { minHeight: 124, width: 172, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, display: "flex", flexDirection: "column", alignItems: "center", margin: 5, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, paddingHorizontal: 13, paddingVertical: 16 };
_createForOfIteratorHelperLoose.card = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.description = { textAlign: "center" };
_createForOfIteratorHelperLoose.iconContainer = { height: 30, marginBottom: 10 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ container: { marginTop: 50, display: "flex", flexDirection: "column", alignItems: "center" }, title: { textAlign: "center", marginHorizontal: 34 }, recognitionCardsContainer: { marginTop: 15, display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap" } });
const result = require("jsxProd").fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingBoosterRecognitionCards.tsx");

export default function GuildBoostingMarketingBoosterRecognitionCards() {
  const tmp = callback3();
  let obj = { style: tmp.container };
  obj = { variant: "heading-xl/extrabold", style: tmp.title };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.IzKs3o);
  const items = [callback(require(4161) /* Text */.Text, obj), ];
  obj = { style: tmp.recognitionCardsContainer };
  const obj1 = { icon: importDefault(12637), IconComponent: require(6597) /* BoostGemIcon */.BoostGemIcon };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl2.string(require(1212) /* getSystemLocale */.t.TZigSO);
  const items1 = [callback(Card, obj1), , , ];
  const obj2 = { icon: importDefault(12638), IconComponent: require(12533) /* BoostTier3Icon */.BoostTier3Icon };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj2.children = intl3.string(require(1212) /* getSystemLocale */.t.hjQuV2);
  items1[1] = callback(Card, obj2);
  const obj3 = { icon: importDefault(12639), IconComponent: require(8262) /* ShieldUserIcon */.ShieldUserIcon };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj3.children = intl4.string(require(1212) /* getSystemLocale */.t["2RUcaM"]);
  items1[2] = callback(Card, obj3);
  const obj4 = { icon: importDefault(12640), IconComponent: require(8647) /* HeartIcon */.HeartIcon };
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj4.children = intl5.string(require(1212) /* getSystemLocale */.t.bJoZKV);
  items1[3] = callback(Card, obj4);
  obj.children = items1;
  items[1] = callback2(View, obj);
  obj.children = items;
  return callback2(View, obj);
};
