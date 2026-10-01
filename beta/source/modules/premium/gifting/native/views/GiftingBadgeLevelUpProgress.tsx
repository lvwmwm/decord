// Module ID: 10498
// Function ID: 10499
// Name: GiftingBadgeLevelUpProgress
// Dependencies: [19, 17, 7637, 21, 4836, 576, 10208, 10214, 4832, 1115, 2583, 2]
// Exports: default

// Module 10498 (GiftingBadgeLevelUpProgress)
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
const View = react_native.View;
let closure_4 = BadgeDirectoryStore.getSingleRequirementThreshold;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, barRow: obj3, progressBarTrack: obj4, progressBarFill: obj5, labels: { flexDirection: "row", justifyContent: "flex-end" } };
obj2 = { gap: nativeDefault.space.PX_4, width: "100%" };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj4 = { flex: 1, height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" };
obj5 = { height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeLevelUpProgress.tsx");

export default function GiftingBadgeLevelUpProgress(style) {
  let Text;
  let currentTier;
  let intl;
  let items;
  let items1;
  let items2;
  let items3;
  let newTier;
  let obj10;
  let obj6;
  let progress;
  ({ progress, currentTier, newTier } = style);
  style = style.style;
  const tmp = closure_7();
  const obj = GiftingBadgesUtils;
  const isGiftingBadgeComplexArtEnabled = obj.useIsGiftingBadgeComplexArtEnabled("GiftingBadgeLevelUpProgress");
  const getGiftingBadgeTierIconUrl = GiftingBadgesUtils.getGiftingBadgeTierIconUrl;
  GiftingBadgesUtils;
  const giftingBadgeTierIconUrl = getGiftingBadgeTierIconUrl(currentTier, isGiftingBadgeComplexArtEnabled);
  const tmp2Result = GiftingBadgesUtils;
  const giftingBadgeTierIconUrl1 = tmp2Result.getGiftingBadgeTierIconUrl(newTier, isGiftingBadgeComplexArtEnabled);
  const tmp8 = closure_4(newTier);
  let num = 100;
  if (tmp8 > 0) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.min(Math.max(progress / tmp8 * 100, 0), 100);
  }
  const obj2 = { style: items, children: items3 };
  items = [tmp.container, style];
  let tmp12 = null != giftingBadgeTierIconUrl;
  const obj3 = { style: tmp.barRow, children: items1 };
  if (tmp12) {
    const obj4 = { icon: giftingBadgeTierIconUrl, size: 24 };
    tmp12 = hasOwnProperty(GiftingBadgeIconDefault, obj4);
  }
  items1 = [tmp12, , ];
  const obj5 = { style: tmp.progressBarTrack, children: hasOwnProperty(View, obj6) };
  obj6 = { style: items2 };
  items2 = [tmp.progressBarFill, { width: "" + num + "%" }];
  ({ width: "" + num + "%" });
  items1[1] = hasOwnProperty(View, obj5);
  let tmp15Result = null != giftingBadgeTierIconUrl1;
  if (tmp15Result) {
    const obj8 = { icon: giftingBadgeTierIconUrl1, size: 24 };
    tmp15Result = tmp15(GiftingBadgeIconDefault, obj8);
  }
  items1[2] = tmp15Result;
  items3 = [metroRequire(View, obj3), ];
  const obj9 = { style: tmp.labels, children: hasOwnProperty(Text, obj10) };
  obj10 = { variant: "text-xs/normal", color: "text-muted", children: intl.format(_modDef2583.iIpfQe, { count: progress, threshold: tmp8 }) };
  Text = tmp2(4832).Text;
  intl = tmp2(1115).intl;
  items3[1] = hasOwnProperty(View, obj9);
  return metroRequire(View, obj2);
};
