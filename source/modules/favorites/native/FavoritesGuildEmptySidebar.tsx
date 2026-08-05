// Module ID: 15249
// Function ID: 15250
// Name: FavoritesGuildEmptySidebar
// Dependencies: [19, 17, 21, 4255, 712, 4663, 4251, 1236, 3001, 4760, 4780, 4751, 2]
// Exports: default

// Module 15249 (FavoritesGuildEmptySidebar)
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { copy: null, divider: null, placeholderRows: null, placeholderRow: null, placeholderBar: null, placeholderBarShort: null, placeholderBarLong: null };
createCacheKey = { paddingTop: require("Themes").space.PX_16, paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 1, marginTop: require("Themes").space.PX_12, marginHorizontal: require("Themes").space.PX_16, backgroundColor: require("Themes").colors.BORDER_SUBTLE };
let obj1 = { height: 1, marginTop: require("Themes").space.PX_12, marginHorizontal: require("Themes").space.PX_16, backgroundColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey[2] = { paddingTop: require("Themes").space.PX_8 };
const obj2 = { paddingTop: require("Themes").space.PX_8 };
createCacheKey[3] = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8, paddingVertical: require("Themes").space.PX_8, paddingHorizontal: require("Themes").space.PX_16 };
let obj3 = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8, paddingVertical: require("Themes").space.PX_8, paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[4] = { height: require("Themes").space.PX_8, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.BACKGROUND_MOD_NORMAL };
let obj4 = { height: require("Themes").space.PX_8, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.BACKGROUND_MOD_NORMAL };
createCacheKey[5] = { width: require("Themes").space.PX_80 };
let obj5 = { width: require("Themes").space.PX_80 };
createCacheKey[6] = { width: require("Themes").space.PX_128 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj6 = { width: require("Themes").space.PX_128 };
const result = require("jsxProd").fileFinishedImporting("modules/favorites/native/FavoritesGuildEmptySidebar.tsx");

export default function FavoritesGuildEmptySidebar() {
  const tmp = createCacheKey();
  let obj = { spacing: null, children: null };
  obj[0] = importDefault(712).space.PX_8;
  obj = { spacing: null, style: null, children: null };
  obj[0] = importDefault(712).space.PX_8;
  obj[1] = tmp.copy;
  obj = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(importDefault(3001)["1n0TGE"]);
  const items = [callback(require(4251) /* Text */.Heading, obj), ];
  const obj1 = { variant: "text-sm/medium", color: "text-muted", children: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj1[2] = intl2.string(importDefault(3001).YoVmse);
  items[1] = callback(require(4251) /* Text */.Text, obj1);
  obj[2] = items;
  const items1 = [callback2(require(4663) /* Stack */.Stack, obj), callback(View, { style: tmp.divider }), ];
  const obj3 = { style: tmp.placeholderRows, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  const obj4 = { style: tmp.placeholderRow, children: null };
  const obj5 = { size: "sm", color: null };
  obj5[1] = importDefault(712).colors.ICON_MUTED;
  const items2 = [callback(require(4760) /* TextIcon */.TextIcon, obj5), ];
  const items3 = [, ];
  ({ placeholderBar: arr4[0], placeholderBarShort: arr4[1] } = tmp);
  items2[1] = callback(View, { style: items3 });
  obj4[1] = items2;
  const items4 = [callback2(View, obj4), , ];
  const obj6 = { style: tmp.placeholderRow, children: null };
  const obj7 = { size: "sm", color: null };
  obj7[1] = importDefault(712).colors.ICON_MUTED;
  const items5 = [callback(require(4780) /* VoiceNormalIcon */.VoiceNormalIcon, obj7), ];
  const items6 = [, ];
  ({ placeholderBar: arr7[0], placeholderBarLong: arr7[1] } = tmp);
  items5[1] = callback(View, { style: items6 });
  obj6[1] = items5;
  items4[1] = callback2(View, obj6);
  const obj8 = { style: tmp.placeholderRow, children: null };
  const obj9 = { size: "sm", color: null };
  obj9[1] = importDefault(712).colors.ICON_MUTED;
  const items7 = [callback(require(4751) /* ChatIcon */.ChatIcon, obj9), ];
  const items8 = [, ];
  ({ placeholderBar: arr9[0], placeholderBarShort: arr9[1] } = tmp);
  items7[1] = callback(View, { style: items8 });
  obj8[1] = items7;
  items4[2] = callback2(View, obj8);
  obj3[3] = items4;
  items1[2] = callback2(View, obj3);
  obj[1] = items1;
  return callback2(require(4663) /* Stack */.Stack, obj);
};
