// Module ID: 9800
// Function ID: 76103
// Name: GiftingBadgeProgressBar
// Dependencies: []
// Exports: default

// Module 9800 (GiftingBadgeProgressBar)
function GiftingBadgeProgressBar(percent) {
  const tmp = callback3();
  let obj = { style: tmp.progressBarTrack };
  obj = {};
  const items = [tmp.progressBarFill, ];
  obj = { width: "" + Math.min(Math.max(percent.percent, 0), 100) + "%" };
  items[1] = obj;
  obj.style = items;
  obj.children = callback2(View, obj);
  return callback2(View, obj);
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = arg1(dependencyMap[2]).getSingleRequirementThreshold;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { "Null": 7, "Null": 370, padding: importDefault(dependencyMap[5]).space.PX_16 };
obj.container = obj;
const tmp3 = arg1(dependencyMap[3]);
obj.content = { flex: 1, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_8, gap: importDefault(dependencyMap[5]).space.PX_4 };
const obj1 = { flex: 1, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_8, gap: importDefault(dependencyMap[5]).space.PX_4 };
obj.progressBarTrack = { height: 6, borderRadius: importDefault(dependencyMap[5]).radii.round, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" };
const obj2 = { height: 6, borderRadius: importDefault(dependencyMap[5]).radii.round, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" };
obj.progressBarFill = { height: 6, borderRadius: importDefault(dependencyMap[5]).radii.round, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BRAND };
const obj4 = { top: true, bottom: true, left: true, minHeight: importDefault(dependencyMap[5]).space.PX_16 };
obj.labels = obj4;
let closure_7 = obj.createStyles(obj);
const obj3 = { height: 6, borderRadius: importDefault(dependencyMap[5]).radii.round, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BRAND };
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeProgress.tsx");

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
  const tmp = callback3();
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
    tmp8 = callback2(importDefault(dependencyMap[6]), obj);
  }
  const items = [tmp8, , ];
  obj = { style: tmp.content };
  let tmp14 = null != title;
  if (tmp14) {
    const obj1 = { variant: "text-md/semibold", children: title };
    tmp14 = callback2(arg1(dependencyMap[7]).Text, obj1);
  }
  const items1 = [tmp14, , ];
  const obj2 = { percent: num2 };
  items1[1] = callback2(GiftingBadgeProgressBar, obj2);
  const obj3 = { style: tmp.labels };
  let tmp20 = null != nextTier;
  if (tmp20) {
    const obj4 = {};
    const intl = arg1(dependencyMap[8]).intl;
    const obj5 = { count: progress, threshold: tmp2 };
    obj4.children = intl.format(importDefault(dependencyMap[9]).iIpfQe, obj5);
    tmp20 = callback2(arg1(dependencyMap[7]).Text, obj4);
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
    tmp26 = callback2(importDefault(dependencyMap[6]), obj6);
  }
  items[2] = tmp26;
  obj.children = items;
  return closure_6(View, obj);
};
