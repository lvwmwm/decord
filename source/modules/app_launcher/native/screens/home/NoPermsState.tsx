// Module ID: 11290
// Function ID: 11291
// Name: EmptyState
// Dependencies: [19, 17, 21, 4661, 712, 1363, 4310, 11291, 11292, 11224, 9566, 4734, 1236, 2]
// Exports: default

// Module 11290 (EmptyState)
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let c5;
let closure_6;
const require = arg1;
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, textContainer: null, image: null };
createCacheKey = { paddingVertical: 16, paddingHorizontal: 24, gap: 12, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.lg, alignItems: "center", justifyContent: "flex-start", display: "flex", flexDirection: "row" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexShrink: 1 };
createCacheKey[2] = { width: 64, height: 64 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/app_launcher/native/screens/home/NoPermsState.tsx");

export default function EmptyState() {
  const tmp = createCacheKey();
  let obj = require(1363) /* AccessibilityAnnouncer */;
  const tmp4 = importDefault;
  const tmp4Result = importDefault(obj.isThemeLight(importDefault(4310)()) ? 11291 : 11292);
  const logAppLauncherEmptyStateView = require(11224) /* handleApplicationSelected */.useLogAppLauncherEmptyStateView(tmp2(9566).AppLauncherEmptyStateType.HOME_NO_PERMISSIONS);
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.image, resizeMode: "contain", source: tmp4Result };
  const items = [callback(closure_4, obj), ];
  const obj1 = { style: tmp.textContainer, variant: "text-sm/medium", color: "text-muted", children: null };
  const intl = tmp2(1236).intl;
  obj1[3] = intl.string(require(1236) /* getSystemLocale */.t.uDnXXj);
  items[1] = callback(require(4734) /* Text */.Text, obj1);
  obj[1] = items;
  return callback2(closure_3, obj);
};
