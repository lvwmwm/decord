// Module ID: 8674
// Function ID: 68608
// Name: GameProfileRankPill
// Dependencies: [31, 27, 33, 4130, 689, 7508, 4126, 1212, 2]
// Exports: default

// Module 8674 (GameProfileRankPill)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { flex: 1, flexDirection: "row", alignItems: "flex-end" } };
_createForOfIteratorHelperLoose = { flexDirection: "row", backgroundColor: require("_createForOfIteratorHelperLoose").colors.WHITE, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
const merged = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_LOW);
_createForOfIteratorHelperLoose.gameRankPill = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/game_profile/native/components/GameProfileRankPill.tsx");

export default function GameProfileRankPill(arg0) {
  let compact;
  let rank;
  ({ rank, compact } = arg0);
  if (compact === undefined) {
    compact = false;
  }
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.container };
  obj = { style: tmp.gameRankPill };
  obj = { size: "xxs", color: importDefault(689).colors.BLACK };
  const items = [callback(require(7508) /* TrophyIcon */.TrophyIcon, obj), ];
  const obj1 = { variant: "text-xs/bold", color: "text-overlay-dark" };
  const intl = require(1212) /* getSystemLocale */.intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = require(1212) /* getSystemLocale */.t;
  if (compact) {
    const obj2 = { rank };
    let str = formatToPlainString(t.UA6RoE, obj2);
  } else {
    const obj3 = { rank };
    str = formatToPlainString(t.ehZXlZ, obj3);
  }
  obj1.children = str.toUpperCase();
  items[1] = callback(require(4126) /* Text */.Text, obj1);
  obj.children = items;
  obj.children = closure_5(View, obj);
  return callback(View, obj);
};
