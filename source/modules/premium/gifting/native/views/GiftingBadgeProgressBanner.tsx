// Module ID: 9685
// Function ID: 75368
// Name: GiftingBadgeProgressBanner
// Dependencies: []
// Exports: default

// Module 9685 (GiftingBadgeProgressBanner)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { "Null": 1, "Null": 58, "Null": 58, flexDirection: "row", flexWrap: 15, justifyContent: "center", nameplate: "center", padding: importDefault(dependencyMap[4]).space.PX_8, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[4]).radii.sm, borderColor: importDefault(dependencyMap[4]).colors.BORDER_MUTED };
const merged = Object.assign(importDefault(dependencyMap[4]).shadows.SHADOW_LOW);
obj.container = obj;
const obj1 = { "Null": null, "Null": null, padding: importDefault(dependencyMap[4]).space.PX_8, marginInlineEnd: importDefault(dependencyMap[4]).space.PX_8 };
obj.iconContainer = obj1;
let closure_6 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeProgressBanner.tsx");

export default function GiftingBadgeProgressBanner(arg0) {
  let analyticsLocation;
  let giftsToNextTier;
  let nextTierIcon;
  let nextTierName;
  ({ giftsToNextTier, nextTierName, nextTierIcon, analyticsLocation } = arg0);
  const tmp = callback2();
  if (null != analyticsLocation) {
    const items = [analyticsLocation];
    let items1 = items;
  } else {
    items1 = [];
  }
  let obj = {};
  const tmp2 = importDefault(dependencyMap[5]);
  obj.name = arg1(dependencyMap[7]).ImpressionNames.GIFTING_BADGE_PROGRESS_BANNER;
  obj.type = arg1(dependencyMap[7]).ImpressionTypes.VIEW;
  obj.properties = { gifts_to_next_tier: giftsToNextTier, next_tier: nextTierName, location_stack: tmp2(...items1).analyticsLocations };
  importDefault(dependencyMap[6])(obj, { trackOnInitialLoad: true });
  obj = { style: tmp.container };
  obj = { style: tmp.iconContainer };
  let tmp8 = null != nextTierIcon;
  if (tmp8) {
    const obj1 = { icon: nextTierIcon, size: 24 };
    tmp8 = callback(importDefault(dependencyMap[8]), obj1);
  }
  obj.children = tmp8;
  const items2 = [callback(View, obj), ];
  const obj2 = { variant: "text-md/semibold" };
  const intl = arg1(dependencyMap[10]).intl;
  obj2.children = intl.formatToPlainString(importDefault(dependencyMap[11]).0+xfd9, { giftsRemaining: giftsToNextTier, nextTier: nextTierName });
  items2[1] = callback(arg1(dependencyMap[9]).Text, obj2);
  obj.children = items2;
  return closure_5(View, obj);
};
