// Module ID: 10608
// Function ID: 10609
// Name: GiftingBadgeProgressBanner
// Dependencies: [19, 17, 21, 575, 5009, 7320, 6023, 1261, 10599, 5619, 1114, 2633, 2]
// Exports: default

// Module 10608 (GiftingBadgeProgressBanner)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1261 */;
import _modDef2633 from "module_2633" /* 2633 */;
import useTrackImpressionDefault from "useTrackImpression" /* 6023 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7320 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let size;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const PX_40 = nativeDefault.space.PX_40;
let createStyles = createStyles_mod;
let obj = { container: obj2, iconContainer: size };
obj2 = { flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderStyle: "solid", borderColor: nativeDefault.colors.BORDER_MUTED };
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
size = { alignItems: "center", justifyContent: "center", width: PX_40, height: PX_40, marginInlineEnd: nativeDefault.space.PX_8 };
let closure_7 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeProgressBanner.tsx");

export default function GiftingBadgeProgressBanner(arg0) {
  let analyticsLocation;
  let giftsToNextTier;
  let intl;
  let items1;
  let items2;
  let nextTierIcon;
  let nextTierName;
  let tmp10Result;
  ({ giftsToNextTier, nextTierName, nextTierIcon, analyticsLocation } = arg0);
  const tmp = closure_7();
  const tmp4 = useAnalyticsLocationsDefault;
  if (null != analyticsLocation) {
    const items = [analyticsLocation];
    items1 = items;
  } else {
    items1 = [];
  }
  const analyticsLocations = tmp4(...items1).analyticsLocations;
  const obj = { name: discord_common_AnalyticsUtils.ImpressionNames.GIFTING_BADGE_PROGRESS_BANNER, type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, properties: { gifts_to_next_tier: giftsToNextTier, next_tier: nextTierName, location_stack: analyticsLocations } };
  const tmp2Result = useTrackImpressionDefault;
  tmp2Result(obj, { trackOnInitialLoad: true });
  const obj3 = { style: tmp.iconContainer, children: tmp10Result };
  tmp10Result = null != nextTierIcon;
  const obj2 = { style: tmp.container, children: items2 };
  const tmp8 = hasOwnProperty;
  if (tmp10Result) {
    const obj4 = { icon: nextTierIcon, size: PX_40 };
    tmp10Result = tmp10(tmp2(10599), obj4);
  }
  items2 = [React3(View, obj3), ];
  const obj5 = { variant: "text-md/semibold", children: intl.formatToPlainString(_modDef2633["0+xfd9"], { giftsRemaining: giftsToNextTier, nextTier: nextTierName }) };
  const Text = tmp6(5619).Text;
  intl = tmp6(1114).intl;
  items2[1] = React3(Text, obj5);
  return tmp8(View, obj2);
};
