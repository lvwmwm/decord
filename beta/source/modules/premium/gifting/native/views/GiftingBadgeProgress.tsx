// Module ID: 10497
// Function ID: 10498
// Name: GiftingBadgeProgress
// Dependencies: [19, 17, 7637, 21, 4836, 576, 10208, 10214, 4832, 1115, 2583, 2]
// Exports: default

// Module 10497 (GiftingBadgeProgress)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import _modDef2583 from "module_2583" /* 2583 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 7637 */;
import GiftingBadgesUtils from "GiftingBadgesUtils" /* 10208 */;
import GiftingBadgeIconDefault from "GiftingBadgeIcon" /* 10214 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
function GiftingBadgeProgressBar(percent) {
  let items;
  let obj2;
  percent = percent.percent;
  const tmp = closure_8();
  const obj = { style: tmp.progressBarTrack, children: hasOwnProperty(View, obj2) };
  obj2 = { style: items };
  items = [tmp.progressBarFill, { width: "" + Math.min(Math.max(percent, 0), 100) + "%" }];
  ({ width: "" + Math.min(Math.max(percent, 0), 100) + "%" });
  return hasOwnProperty(View, obj);
}
const View = react_native.View;
let closure_4 = BadgeDirectoryStore.getSingleRequirementThreshold;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, content: obj3, progressBarTrack: obj4, progressBarFill: obj5, labels: obj6 };
obj2 = { flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4 };
obj4 = { height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" };
obj5 = { height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj6 = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", minHeight: nativeDefault.space.PX_16 };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeProgress.tsx");

export default function GiftingBadgeProgress(currentTier) {
  let iconSize;
  let intl;
  let items;
  let items1;
  let nextTier;
  let obj10;
  let progress;
  let tmp17Result;
  ({ progress, nextTier, iconSize } = currentTier);
  currentTier = currentTier.currentTier;
  if (iconSize === undefined) {
    iconSize = 24;
  }
  const title = currentTier.title;
  const tmp = closure_8();
  const obj = GiftingBadgesUtils;
  const isGiftingBadgeComplexArtEnabled = obj.useIsGiftingBadgeComplexArtEnabled("GiftingBadgeProgress");
  const obj2 = GiftingBadgesUtils;
  const giftingBadgeTierIconUrl = obj2.getGiftingBadgeTierIconUrl(currentTier, isGiftingBadgeComplexArtEnabled);
  const obj3 = GiftingBadgesUtils;
  const giftingBadgeTierIconUrl1 = obj3.getGiftingBadgeTierIconUrl(nextTier, isGiftingBadgeComplexArtEnabled);
  const tmp7 = closure_4(nextTier);
  let num2 = 100;
  const tmp8 = null != nextTier && tmp7 > 0;
  if (tmp8) {
    const _Math = Math;
    const _Math2 = Math;
    num2 = Math.min(Math.max(progress / tmp7 * 100, 0), 100);
  }
  let tmp12 = null != giftingBadgeTierIconUrl;
  const obj4 = { style: tmp.container, children: items };
  if (tmp12) {
    const obj5 = { icon: giftingBadgeTierIconUrl, size: iconSize };
    tmp12 = hasOwnProperty(GiftingBadgeIconDefault, obj5);
  }
  items = [tmp12, , ];
  let tmp15 = null != title;
  const obj6 = { style: tmp.content, children: items1 };
  if (tmp15) {
    const obj7 = { variant: "text-md/semibold", children: title };
    tmp15 = hasOwnProperty(tmp2(4832).Text, obj7);
  }
  items1 = [tmp15, hasOwnProperty(GiftingBadgeProgressBar, { percent: num2 }), ];
  const obj8 = { style: tmp.labels, children: tmp17Result };
  tmp17Result = null != nextTier;
  if (tmp17Result) {
    const obj9 = { variant: "text-xs/normal", color: "text-muted", children: intl.format(_modDef2583.iIpfQe, obj10) };
    const Text = tmp2(4832).Text;
    intl = tmp2(1115).intl;
    obj10 = { count: progress, threshold: tmp7 };
    tmp17Result = tmp17(Text, obj9);
  }
  items1[2] = hasOwnProperty(View, obj8);
  items[1] = metroRequire(View, obj6);
  let tmp17Result2 = null != giftingBadgeTierIconUrl1;
  if (tmp17Result2) {
    const obj11 = { icon: giftingBadgeTierIconUrl1, size: iconSize };
    tmp17Result2 = tmp17(GiftingBadgeIconDefault, obj11);
  }
  items[2] = tmp17Result2;
  return metroRequire(View, obj4);
};
