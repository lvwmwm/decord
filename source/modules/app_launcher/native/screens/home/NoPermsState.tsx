// Module ID: 11233
// Function ID: 87447
// Name: EmptyState
// Dependencies: [31, 27, 33, 4130, 689, 3976, 4066, 11234, 11235, 11171, 8182, 4126, 1212, 2]
// Exports: default

// Module 11233 (EmptyState)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ View: closure_3, Image: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingVertical: 16, paddingHorizontal: 24, gap: 12, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, alignItems: "center", justifyContent: "flex-start", display: "flex", flexDirection: "row" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.textContainer = { flexShrink: 1 };
_createForOfIteratorHelperLoose.image = { width: 64, height: 64 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/app_launcher/native/screens/home/NoPermsState.tsx");

export default function EmptyState() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(3976) /* AccessibilityAnnouncer */;
  if (obj.isThemeLight(importDefault(4066)())) {
    let tmp4 = 11234;
  } else {
    tmp4 = 11235;
  }
  let obj1 = require(11171) /* handleApplicationSelected */;
  const logAppLauncherEmptyStateView = obj1.useLogAppLauncherEmptyStateView(require(8182) /* AppLauncherEntrypoint */.AppLauncherEmptyStateType.HOME_NO_PERMISSIONS);
  obj = { style: tmp.container };
  obj = { style: tmp.image, resizeMode: "contain", source: importDefault(tmp4) };
  const items = [callback(closure_4, obj), ];
  obj1 = { style: tmp.textContainer, variant: "text-sm/medium", color: "text-muted" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl.string(require(1212) /* getSystemLocale */.t.uDnXXj);
  items[1] = callback(require(4126) /* Text */.Text, obj1);
  obj.children = items;
  return callback2(closure_3, obj);
};
