// Module ID: 9801
// Function ID: 76095
// Name: GiftingBadgeLevelUpProgress
// Dependencies: []
// Exports: default

// Module 9801 (GiftingBadgeLevelUpProgress)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = arg1(dependencyMap[2]).getSingleRequirementThreshold;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { gap: importDefault(dependencyMap[5]).space.PX_4, width: "100%" };
obj.container = obj;
const tmp3 = arg1(dependencyMap[3]);
obj.barRow = { gap: importDefault(dependencyMap[5]).space.PX_8 };
const obj1 = { gap: importDefault(dependencyMap[5]).space.PX_8 };
obj.progressBarTrack = { borderRadius: importDefault(dependencyMap[5]).radii.round, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_NORMAL };
const obj2 = { borderRadius: importDefault(dependencyMap[5]).radii.round, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_NORMAL };
obj.progressBarFill = { height: 6, borderRadius: importDefault(dependencyMap[5]).radii.round, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BRAND };
obj.labels = { 1449229240: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000042439915824, 371666258: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004243991583 };
let closure_7 = obj.createStyles(obj);
const obj3 = { height: 6, borderRadius: importDefault(dependencyMap[5]).radii.round, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BRAND };
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeLevelUpProgress.tsx");

export default function GiftingBadgeLevelUpProgress(style) {
  let currentTier;
  let newTier;
  let progress;
  ({ progress, currentTier, newTier } = style);
  const tmp = callback3();
  const tmp2 = callback(newTier);
  let num = 100;
  if (tmp2 > 0) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.min(Math.max(progress / tmp2 * 100, 0), 100);
  }
  let obj = { style: items };
  const items = [tmp.container, style.style];
  obj = { style: tmp.barRow };
  let simple_icon_url;
  if (null != currentTier) {
    simple_icon_url = currentTier.simple_icon_url;
  }
  let tmp7 = null != simple_icon_url;
  if (tmp7) {
    obj = { icon: currentTier.simple_icon_url, size: 24 };
    tmp7 = callback2(importDefault(dependencyMap[6]), obj);
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
    tmp11 = callback2(importDefault(dependencyMap[6]), obj4);
  }
  items1[2] = tmp11;
  obj.children = items1;
  const items3 = [closure_6(View, obj), ];
  const obj5 = { style: tmp.labels };
  const obj6 = {};
  const intl = arg1(dependencyMap[8]).intl;
  obj6.children = intl.format(importDefault(dependencyMap[9]).iIpfQe, { count: progress, threshold: tmp2 });
  obj5.children = callback2(arg1(dependencyMap[7]).Text, obj6);
  items3[1] = callback2(View, obj5);
  obj.children = items3;
  return closure_6(View, obj);
};
