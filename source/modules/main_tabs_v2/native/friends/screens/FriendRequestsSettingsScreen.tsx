// Module ID: 15606
// Function ID: 15607
// Name: FriendRequestsSettingsScreen
// Dependencies: [19, 17, 21, 4189, 712, 4719, 15607, 2]
// Exports: default

// Module 15606 (FriendRequestsSettingsScreen)
import "noop";
import { ScrollView } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let c5;
({ jsx: c3, Fragment: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, flex: 1, paddingTop: require("Themes").space.PX_16, paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/FriendRequestsSettingsScreen.tsx");

export default function FriendRequestsSettingsScreen() {
  let obj = { children: null };
  const items = [callback(importDefault(4719), { absolute: true }), ];
  obj = { style: createCacheKey().container, children: callback(importDefault(15607), {}) };
  items[1] = callback(ScrollView, obj);
  obj[0] = items;
  return callback2(closure_4, obj);
};
