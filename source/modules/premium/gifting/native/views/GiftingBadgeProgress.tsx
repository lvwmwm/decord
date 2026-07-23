// Module ID: 9808
// Function ID: 76157
// Name: GiftingBadgeProgressBar
// Dependencies: [31, 27, 8268, 33, 4130, 689, 9686, 4126, 1212, 2294, 2]
// Exports: default

// Module 9808 (GiftingBadgeProgressBar)
import "result";
import { View } from "get ActivityIndicator";
import { getSingleRequirementThreshold as closure_4 } from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
function GiftingBadgeProgressBar(percent) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.progressBarTrack };
  obj = {};
  const items = [tmp.progressBarFill, ];
  obj = { width: "" + Math.min(Math.max(percent.percent, 0), 100) + "%" };
  items[1] = obj;
  obj.style = items;
  obj.children = callback2(View, obj);
  return callback2(View, obj);
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "row", alignItems: "center", padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.content = { flex: 1, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
let obj1 = { flex: 1, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.progressBarTrack = { height: 6, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" };
let obj2 = { height: 6, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" };
_createForOfIteratorHelperLoose.progressBarFill = { height: 6, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
let obj4 = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", minHeight: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.labels = obj4;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { height: 6, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeProgress.tsx");

export default function GiftingBadgeProgress(title) {
  let currentTier;
  let iconSize;
  let nextTier;
  let progress;
  ({ progress, currentTier, nextTier, iconSize } = title);
  if (iconSize === undefined) {
    iconSize = 24;
  }
  title = title.title;
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback(nextTier);
  let tmp3 = null != nextTier;
  if (tmp3) {
    tmp3 = tmp2 > 0;
  }
  let num2 = 100;
  if (tmp3) {
    const _Math = Math;
    const _Math2 = Math;
    num2 = Math.min(Math.max(progress / tmp2 * 100, 0), 100);
  }
  let obj = { style: tmp.container };
  let simple_icon_url;
  if (null != currentTier) {
    simple_icon_url = currentTier.simple_icon_url;
  }
  let tmp8 = null != simple_icon_url;
  if (tmp8) {
    obj = { icon: currentTier.simple_icon_url, size: iconSize };
    tmp8 = callback2(importDefault(9686), obj);
  }
  const items = [tmp8, , ];
  obj = { style: tmp.content };
  let tmp14 = null != title;
  if (tmp14) {
    const obj1 = { variant: "text-md/semibold", children: title };
    tmp14 = callback2(require(4126) /* Text */.Text, obj1);
  }
  const items1 = [tmp14, , ];
  const obj2 = { percent: num2 };
  items1[1] = callback2(GiftingBadgeProgressBar, obj2);
  const obj3 = { style: tmp.labels };
  let tmp20 = null != nextTier;
  if (tmp20) {
    const obj4 = { variant: "text-xs/normal", color: "text-muted" };
    const intl = require(1212) /* getSystemLocale */.intl;
    const obj5 = { count: progress, threshold: tmp2 };
    obj4.children = intl.format(importDefault(2294).iIpfQe, obj5);
    tmp20 = callback2(require(4126) /* Text */.Text, obj4);
  }
  obj3.children = tmp20;
  items1[2] = callback2(View, obj3);
  obj.children = items1;
  items[1] = closure_6(View, obj);
  let simple_icon_url1;
  if (null != nextTier) {
    simple_icon_url1 = nextTier.simple_icon_url;
  }
  let tmp26 = null != simple_icon_url1;
  if (tmp26) {
    const obj6 = { icon: nextTier.simple_icon_url, size: iconSize };
    tmp26 = callback2(importDefault(9686), obj6);
  }
  items[2] = tmp26;
  obj.children = items;
  return closure_6(View, obj);
};
