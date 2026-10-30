// Module ID: 14398
// Function ID: 14399
// Name: GiftingBadgeProgress
// Dependencies: [19, 17, 8755, 21, 5009, 575, 10596, 10599, 5619, 1114, 2633, 2]
// Exports: default

// Module 14398 (GiftingBadgeProgress)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef2633 from "module_2633" /* 2633 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8755 */;
import GiftingBadgesUtils from "GiftingBadgesUtils" /* 10596 */;
import GiftingBadgeIconDefault from "GiftingBadgeIcon" /* 10599 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
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
  let obj9;
  let progress;
  let tmp16Result;
  ({ progress, nextTier, iconSize } = currentTier);
  currentTier = currentTier.currentTier;
  if (iconSize === undefined) {
    iconSize = 24;
  }
  const title = currentTier.title;
  const tmp = closure_8();
  const obj = GiftingBadgesUtils;
  const giftingBadgeTierIconUrl = obj.getGiftingBadgeTierIconUrl(currentTier);
  const obj2 = GiftingBadgesUtils;
  const giftingBadgeTierIconUrl1 = obj2.getGiftingBadgeTierIconUrl(nextTier);
  const tmp6 = closure_4(nextTier);
  let num2 = 100;
  const tmp7 = null != nextTier && tmp6 > 0;
  if (tmp7) {
    const _Math = Math;
    const _Math2 = Math;
    num2 = Math.min(Math.max(progress / tmp6 * 100, 0), 100);
  }
  let tmp11 = null != giftingBadgeTierIconUrl;
  const obj3 = { style: tmp.container, children: items };
  if (tmp11) {
    const obj4 = { icon: giftingBadgeTierIconUrl, size: iconSize };
    tmp11 = hasOwnProperty(GiftingBadgeIconDefault, obj4);
  }
  items = [tmp11, , ];
  let tmp14 = null != title;
  const obj5 = { style: tmp.content, children: items1 };
  if (tmp14) {
    const obj6 = { variant: "text-md/semibold", children: title };
    tmp14 = hasOwnProperty(tmp2(5619).Text, obj6);
  }
  items1 = [tmp14, hasOwnProperty(GiftingBadgeProgressBar, { percent: num2 }), ];
  const obj7 = { style: tmp.labels, children: tmp16Result };
  tmp16Result = null != nextTier;
  if (tmp16Result) {
    const obj8 = { variant: "text-xs/normal", color: "text-muted", children: intl.format(_modDef2633.iIpfQe, obj9) };
    const Text = tmp2(5619).Text;
    intl = tmp2(1114).intl;
    obj9 = { count: progress, threshold: tmp6 };
    tmp16Result = tmp16(Text, obj8);
  }
  items1[2] = hasOwnProperty(View, obj7);
  items[1] = metroRequire(View, obj5);
  let tmp16Result2 = null != giftingBadgeTierIconUrl1;
  if (tmp16Result2) {
    const obj10 = { icon: giftingBadgeTierIconUrl1, size: iconSize };
    tmp16Result2 = tmp16(GiftingBadgeIconDefault, obj10);
  }
  items[2] = tmp16Result2;
  return metroRequire(View, obj3);
};
