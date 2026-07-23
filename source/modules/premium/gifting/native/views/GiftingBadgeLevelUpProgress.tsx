// Module ID: 9809
// Function ID: 76160
// Name: GiftingBadgeLevelUpProgress
// Dependencies: [31, 27, 8268, 33, 4130, 689, 9686, 4126, 1212, 2294, 2]
// Exports: default

// Module 9809 (GiftingBadgeLevelUpProgress)
import "result";
import { View } from "get ActivityIndicator";
import { getSingleRequirementThreshold as closure_4 } from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { gap: require("_createForOfIteratorHelperLoose").space.PX_4, width: "100%" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.barRow = obj1;
let obj2 = { flex: 1, height: 6, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" };
_createForOfIteratorHelperLoose.progressBarTrack = obj2;
_createForOfIteratorHelperLoose.progressBarFill = { height: 6, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
_createForOfIteratorHelperLoose.labels = { flexDirection: "row", justifyContent: "flex-end" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { height: 6, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeLevelUpProgress.tsx");

export default function GiftingBadgeLevelUpProgress(style) {
  let currentTier;
  let newTier;
  let progress;
  ({ progress, currentTier, newTier } = style);
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback(newTier);
  let num = 100;
  if (tmp2 > 0) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.min(Math.max(progress / tmp2 * 100, 0), 100);
  }
  let obj = { style: items };
  items = [tmp.container, style.style];
  obj = { style: tmp.barRow };
  let simple_icon_url;
  if (null != currentTier) {
    simple_icon_url = currentTier.simple_icon_url;
  }
  let tmp7 = null != simple_icon_url;
  if (tmp7) {
    obj = { icon: currentTier.simple_icon_url, size: 24 };
    tmp7 = callback2(importDefault(9686), obj);
  }
  const items1 = [tmp7, , ];
  const obj1 = { style: tmp.progressBarTrack };
  const obj2 = {};
  const items2 = [tmp.progressBarFill, ];
  const obj3 = { width: "" + num + "%" };
  items2[1] = obj3;
  obj2.style = items2;
  obj1.children = callback2(View, obj2);
  items1[1] = callback2(View, obj1);
  let tmp11 = null != newTier.simple_icon_url;
  if (tmp11) {
    const obj4 = { icon: newTier.simple_icon_url, size: 24 };
    tmp11 = callback2(importDefault(9686), obj4);
  }
  items1[2] = tmp11;
  obj.children = items1;
  const items3 = [closure_6(View, obj), ];
  const obj5 = { style: tmp.labels };
  const obj6 = { variant: "text-xs/normal", color: "text-muted" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj6.children = intl.format(importDefault(2294).iIpfQe, { count: progress, threshold: tmp2 });
  obj5.children = callback2(require(4126) /* Text */.Text, obj6);
  items3[1] = callback2(View, obj5);
  obj.children = items3;
  return closure_6(View, obj);
};
