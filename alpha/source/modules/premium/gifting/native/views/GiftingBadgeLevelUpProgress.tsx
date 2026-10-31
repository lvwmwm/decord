// Module ID: 14437
// Function ID: 14438
// Name: GiftingBadgeLevelUpProgress
// Dependencies: [19, 17, 8763, 21, 5014, 575, 10616, 10619, 5624, 1113, 2634, 2]
// Exports: default

// Module 14437 (GiftingBadgeLevelUpProgress)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef2634 from "module_2634" /* 2634 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8763 */;
import GiftingBadgesUtils from "GiftingBadgesUtils" /* 10616 */;
import GiftingBadgeIconDefault from "GiftingBadgeIcon" /* 10619 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
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
  let obj5;
  let obj9;
  let progress;
  ({ progress, currentTier, newTier } = style);
  style = style.style;
  const tmp = closure_7();
  const getGiftingBadgeTierIconUrl = GiftingBadgesUtils.getGiftingBadgeTierIconUrl;
  GiftingBadgesUtils;
  const giftingBadgeTierIconUrl = getGiftingBadgeTierIconUrl(currentTier);
  const tmp2Result = GiftingBadgesUtils;
  const giftingBadgeTierIconUrl1 = tmp2Result.getGiftingBadgeTierIconUrl(newTier);
  const tmp7 = closure_4(newTier);
  let num = 100;
  if (tmp7 > 0) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.min(Math.max(progress / tmp7 * 100, 0), 100);
  }
  const obj = { style: items, children: items3 };
  items = [tmp.container, style];
  let tmp11 = null != giftingBadgeTierIconUrl;
  const obj2 = { style: tmp.barRow, children: items1 };
  if (tmp11) {
    const obj3 = { icon: giftingBadgeTierIconUrl, size: 24 };
    tmp11 = hasOwnProperty(GiftingBadgeIconDefault, obj3);
  }
  items1 = [tmp11, , ];
  const obj4 = { style: tmp.progressBarTrack, children: hasOwnProperty(View, obj5) };
  obj5 = { style: items2 };
  items2 = [tmp.progressBarFill, { width: "" + num + "%" }];
  ({ width: "" + num + "%" });
  items1[1] = hasOwnProperty(View, obj4);
  let tmp14Result = null != giftingBadgeTierIconUrl1;
  if (tmp14Result) {
    const obj7 = { icon: giftingBadgeTierIconUrl1, size: 24 };
    tmp14Result = tmp14(GiftingBadgeIconDefault, obj7);
  }
  items1[2] = tmp14Result;
  items3 = [metroRequire(View, obj2), ];
  const obj8 = { style: tmp.labels, children: hasOwnProperty(Text, obj9) };
  obj9 = { variant: "text-xs/normal", color: "text-muted", children: intl.format(_modDef2634.iIpfQe, { count: progress, threshold: tmp7 }) };
  Text = tmp2(5624).Text;
  intl = tmp2(1113).intl;
  items3[1] = hasOwnProperty(View, obj8);
  return metroRequire(View, obj);
};
