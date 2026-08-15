// Module ID: 15955
// Function ID: 15956
// Name: FavoritesEmptyState
// Dependencies: [19, 17, 21, 4661, 712, 9979, 11959, 4342, 9983, 2007, 9982, 5447, 4733, 4734, 1236, 3079, 4745, 11932, 2]
// Exports: default

// Module 15955 (FavoritesEmptyState)
import noop from "noop";
import { View } from "PlusMediumIcon";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, text: null };
createCacheKey = { flex: 1, alignItems: "center", justifyContent: "center", gap: require("Themes").space.PX_16, paddingHorizontal: require("Themes").space.PX_48 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/favorites/native/FavoritesEmptyState.tsx");

export default function FavoritesEmptyState() {
  const tmp = createCacheKey();
  let obj = require(9979) /* useFavoritesAccess */;
  const callback = React.useCallback(() => {
    callback2(paths[6])({ source: "favorites_empty_state" });
  }, []);
  obj = { style: tmp.container, children: null };
  const callback1 = React.useCallback(() => {
    const obj = callback2(paths[7]);
    obj.openLazy(callback(paths[9])(paths[8], paths.paths), callback(paths[10]).FAVORITES_UPSELL_SHEET_KEY, { source: "favorites_empty_sidebar" });
  }, []);
  const items = [callback(require(5447) /* AccountAgeTier10LargeBadge */.FavoritesSpotIllustration, { width: 192, height: 108 }), , ];
  obj = { spacing: null, align: "center", children: null };
  obj[0] = importDefault(712).space.PX_8;
  const obj1 = { variant: "heading-md/bold", color: "mobile-text-heading-primary", style: tmp.text, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj1[3] = intl.string(importDefault(3079)["wh+Rz1"]);
  const items1 = [callback(require(4734) /* Text */.Heading, obj1), ];
  const obj2 = { variant: "text-md/medium", color: "text-default", style: tmp.text, children: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj2[3] = intl2.string(importDefault(3079)["+SuGKb"]);
  items1[1] = callback(require(4734) /* Text */.Text, obj2);
  obj[2] = items1;
  items[1] = callback2(require(4733) /* Stack */.Stack, obj);
  if (obj.useFavoritesAccess("favorites_empty_state").hasAccess) {
    const obj3 = { variant: "primary", text: null, icon: null, onPress: null };
    const intl4 = tmp2(1236).intl;
    obj3[1] = intl4.string(tmp9(3079)["6kk0gM"]);
    obj3[2] = tmp8(tmp2(11932).PlusMediumIcon, {});
    obj3[3] = callback;
    let obj4 = obj3;
  } else {
    obj4 = { variant: "primary", text: null, onPress: null };
    const intl3 = tmp2(1236).intl;
    obj4[1] = intl3.string(tmp9(3079).yYVbdv);
    obj4[2] = callback1;
  }
  items[2] = callback(require(4745) /* Button */.Button, obj4);
  obj[1] = items;
  return callback2(View, obj);
};
