// Module ID: 11501
// Function ID: 11502
// Name: EmptyState
// Dependencies: [19, 17, 21, 4303, 712, 11441, 9555, 11502, 4299, 1236, 2]
// Exports: default

// Module 11501 (EmptyState)
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, textContainer: null };
createCacheKey = { padding: 16, gap: 16, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("Themes").radii.lg, alignItems: "center", justifyContent: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/app_launcher/native/screens/home/EmptyState.tsx");

export default function EmptyState() {
  const tmp = createCacheKey();
  let obj = require(11441) /* handleApplicationSelected */;
  const logAppLauncherEmptyStateView = obj.useLogAppLauncherEmptyStateView(require(9555) /* AppLauncherEntrypoint */.AppLauncherEmptyStateType.HOME_EMPTY);
  obj = { style: tmp.container, children: null };
  const items = [callback(importDefault(11502), {}), ];
  obj = { style: tmp.textContainer, variant: "text-md/semibold", color: "text-default", children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl.string(require(1236) /* getSystemLocale */.t["V7+xhH"]);
  items[1] = callback(require(4299) /* Text */.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
};
