// Module ID: 15707
// Function ID: 15708
// Name: FavoritesEmptyState
// Dependencies: [19, 17, 21, 4285, 712, 5948, 4693, 4281, 1236, 3030, 2]
// Exports: default

// Module 15707 (FavoritesEmptyState)
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, text: null };
createCacheKey = { flex: 1, alignItems: "center", justifyContent: "center", gap: require("Themes").space.PX_16, paddingHorizontal: require("Themes").space.PX_48 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/favorites/native/FavoritesEmptyState.tsx");

export default function FavoritesEmptyState() {
  const tmp = createCacheKey();
  let obj = { style: tmp.container, children: null };
  const items = [callback(require(5948) /* AccountAgeTier10LargeBadge */.FavoritesSpotIllustration, { width: 192, height: 108 }), ];
  obj = { spacing: null, align: "center", children: null };
  obj[0] = importDefault(712).space.PX_8;
  obj = { variant: "heading-md/bold", color: "mobile-text-heading-primary", style: tmp.text, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl.string(importDefault(3030)["wh+Rz1"]);
  const items1 = [callback(require(4281) /* Text */.Heading, obj), ];
  const obj1 = { variant: "text-md/medium", color: "text-default", style: tmp.text, children: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj1[3] = intl2.string(importDefault(3030)["+SuGKb"]);
  items1[1] = callback(require(4281) /* Text */.Text, obj1);
  obj[2] = items1;
  items[1] = callback2(require(4693) /* Stack */.Stack, obj);
  obj[1] = items;
  return callback2(View, obj);
};
