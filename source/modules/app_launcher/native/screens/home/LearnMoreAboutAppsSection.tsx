// Module ID: 11244
// Function ID: 87571
// Name: LearnMoreAboutAppsSection
// Dependencies: [31, 27, 653, 33, 4130, 689, 3827, 1920, 1212, 11245, 8226, 4126, 4660, 2]
// Exports: default

// Module 11244 (LearnMoreAboutAppsSection)
import result from "result";
import { View } from "get ActivityIndicator";
import { HelpdeskArticles } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_32, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_64 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.body = { textAlign: "center" };
_createForOfIteratorHelperLoose.divider = { height: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj2 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, paddingVertical: 12, paddingHorizontal: 16, minHeight: 48, justifyContent: "center", alignItems: "center" };
const merged = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_LOW);
_createForOfIteratorHelperLoose.linkButton = obj2;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { height: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("ME").fileFinishedImporting("modules/app_launcher/native/screens/home/LearnMoreAboutAppsSection.tsx");

export default function LearnMoreAboutAppsSection(visible) {
  const tmp = _createForOfIteratorHelperLoose();
  const callback = React.useCallback(() => {
    const obj = outer1_1(outer1_2[6]);
    obj.openURL(outer1_1(outer1_2[7]).getAppsSupportURL(outer1_5.APPS_LEARN_MORE));
  }, []);
  const intl = require(1212) /* getSystemLocale */.intl;
  const stringResult = intl.string(require(1212) /* getSystemLocale */.t["kw8/Ec"]);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  const stringResult1 = intl2.string(require(1212) /* getSystemLocale */.t.GZoV1O);
  const intl3 = require(1212) /* getSystemLocale */.intl;
  let obj = { sectionName: null, numItems: 1, numVisibleItems: 1 };
  const formatToPlainStringResult = intl3.formatToPlainString(require(1212) /* getSystemLocale */.t.xx5Sug, { sectionTitle: stringResult, sectionBody: stringResult1 });
  obj.sectionName = require(8226) /* AppLauncherEntrypoint */.AppLauncherSectionName.NEW_TO_APPS;
  obj.viewed = visible.visible;
  obj = { style: tmp.container };
  obj = { style: tmp.divider };
  const items = [callback(View, obj), , , , , ];
  const obj1 = { accessibilityRole: "header", variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: stringResult };
  items[1] = callback(require(4126) /* Text */.Text, obj1);
  const obj2 = { variant: "text-xs/normal", color: "text-default", style: tmp.body, children: stringResult1 };
  items[2] = callback(require(4126) /* Text */.Text, obj2);
  items[3] = callback(View, { style: tmp.divider });
  const obj4 = { style: tmp.linkButton, onPress: callback, accessibilityRole: "link", accessibilityLabel: formatToPlainStringResult };
  const obj5 = { variant: "text-md/semibold", color: "mobile-text-heading-primary" };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj5.children = intl4.string(require(1212) /* getSystemLocale */.t.Ye51oT);
  obj4.children = callback(require(4126) /* Text */.Text, obj5);
  items[4] = callback(require(4660) /* PressableBase */.PressableHighlight, obj4);
  items[5] = callback(View, { style: tmp.divider });
  obj.children = items;
  obj.children = callback2(View, obj);
  return callback(importDefault(11245), obj);
};
