// Module ID: 9727
// Function ID: 75634
// Name: GiftingBadgeProgressBanner
// Dependencies: [31, 27, 33, 4130, 689, 5462, 8604, 480, 9720, 4126, 1212, 2294, 2]
// Exports: default

// Module 9727 (GiftingBadgeProgressBanner)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "row", alignItems: "center", padding: require("_createForOfIteratorHelperLoose").space.PX_8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderWidth: 1, borderStyle: "solid", borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_MUTED };
const merged = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_LOW);
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { alignItems: "center", justifyContent: "center", padding: require("_createForOfIteratorHelperLoose").space.PX_8, marginInlineEnd: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.iconContainer = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeProgressBanner.tsx");

export default function GiftingBadgeProgressBanner(arg0) {
  let analyticsLocation;
  let giftsToNextTier;
  let nextTierIcon;
  let nextTierName;
  ({ giftsToNextTier, nextTierName, nextTierIcon, analyticsLocation } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  if (null != analyticsLocation) {
    const items = [analyticsLocation];
    let items1 = items;
  } else {
    items1 = [];
  }
  let obj = {};
  const tmp2 = importDefault(5462);
  obj.name = require(480) /* isThrottled */.ImpressionNames.GIFTING_BADGE_PROGRESS_BANNER;
  obj.type = require(480) /* isThrottled */.ImpressionTypes.VIEW;
  obj.properties = { gifts_to_next_tier: giftsToNextTier, next_tier: nextTierName, location_stack: tmp2(...items1).analyticsLocations };
  importDefault(8604)(obj, { trackOnInitialLoad: true });
  obj = { style: tmp.container };
  obj = { style: tmp.iconContainer };
  let tmp8 = null != nextTierIcon;
  if (tmp8) {
    const obj1 = { icon: nextTierIcon, size: 24 };
    tmp8 = callback(importDefault(9720), obj1);
  }
  obj.children = tmp8;
  const items2 = [callback(View, obj), ];
  const obj2 = { variant: "text-md/semibold" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj2.children = intl.formatToPlainString(importDefault(2294)["0+xfd9"], { giftsRemaining: giftsToNextTier, nextTier: nextTierName });
  items2[1] = callback(require(4126) /* Text */.Text, obj2);
  obj.children = items2;
  return closure_5(View, obj);
};
