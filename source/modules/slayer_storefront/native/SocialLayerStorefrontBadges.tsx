// Module ID: 9733
// Function ID: 75731
// Name: ExclusiveBadge
// Dependencies: []
// Exports: ExclusiveBadge

// Module 9733 (ExclusiveBadge)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { gap: importDefault(dependencyMap[4]).space.PX_4, borderRadius: importDefault(dependencyMap[4]).radii.round, paddingHorizontal: importDefault(dependencyMap[4]).space.PX_8, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BRAND };
obj.exclusiveBadge = obj;
const obj1 = { textTransform: "uppercase", fontSize: importDefault(dependencyMap[4]).space.PX_12 };
const tmp3 = arg1(dependencyMap[2]);
const obj5 = arg1(dependencyMap[5]);
const space = importDefault(dependencyMap[4]).space;
obj1.lineHeight = arg1(dependencyMap[5]).isAndroid() ? space.PX_12 : space.PX_16;
obj.exclusiveBadgeText = obj1;
let closure_6 = obj.createStyles(obj);
const isAndroidResult = arg1(dependencyMap[5]).isAndroid();
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontBadges.tsx");

export const ExclusiveBadge = function ExclusiveBadge() {
  const tmp = callback3();
  let obj = { style: tmp.exclusiveBadge };
  obj = { size: "xs", color: importDefault(dependencyMap[4]).colors.WHITE };
  const items = [callback(arg1(dependencyMap[6]).ClydeIcon, obj), ];
  obj = { hasMaxConnections: true, isBoostOnlySubscription: true, style: tmp.exclusiveBadgeText };
  const intl = arg1(dependencyMap[8]).intl;
  obj.children = intl.string(arg1(dependencyMap[8]).t.RiDMFz);
  items[1] = callback(arg1(dependencyMap[7]).Text, obj);
  obj.children = items;
  return callback2(View, obj);
};
