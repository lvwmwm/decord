// Module ID: 10582
// Function ID: 10583
// Name: GiftingBadgeProgressBanner
// Dependencies: [19, 17, 21, 587, 5005, 558, 576, 7313, 1272, 6016, 10573, 1125, 2632, 5271, 2]

// Module 10582 (GiftingBadgeProgressBanner)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1272 */;
import _modDef2632 from "module_2632" /* 2632 */;
import Text_Text from "Text/Text" /* 5271 */;
import useTrackImpressionDefault from "useTrackImpression" /* 6016 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7313 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function GiftingBadgeProgressBanner(arg0) {
  let analyticsLocation;
  let giftsToNextTier;
  let items2;
  let nextTierIcon;
  let nextTierName;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(21);
  ({ giftsToNextTier, nextTierName, nextTierIcon, analyticsLocation } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] !== analyticsLocation) {
    let items1;
    if (null != analyticsLocation) {
      const items = [analyticsLocation];
      items1 = items;
    } else {
      items1 = [];
    }
    cResult[0] = analyticsLocation;
    cResult[1] = items1;
    tmp5 = items1;
  } else {
    tmp5 = cResult[1];
  }
  const tmp8 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp8(...tmp5).analyticsLocations;
  if (cResult[2] === analyticsLocations) {
    if (cResult[3] === giftsToNextTier) {
      let tmp9;
      let tmp11;
      let tmp13;
      if (cResult[4] === nextTierName) {
        tmp9 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { trackOnInitialLoad: true };
        cResult[6] = obj2;
        tmp11 = obj2;
      } else {
        tmp11 = cResult[6];
      }
      useTrackImpressionDefault(tmp9, tmp11);
      const container = tmp4.container;
      if (cResult[7] !== nextTierIcon) {
        let tmp15 = null != nextTierIcon;
        if (tmp15) {
          const obj3 = { icon: nextTierIcon, size: PX_40 };
          tmp15 = React3(tmp7(10573), obj3);
        }
        cResult[7] = nextTierIcon;
        cResult[8] = tmp15;
        tmp13 = tmp15;
      } else {
        tmp13 = cResult[8];
      }
      if (cResult[9] === tmp4.iconContainer) {
        let tmp18;
        if (cResult[10] === tmp13) {
          tmp18 = cResult[11];
        }
        if (cResult[12] === giftsToNextTier) {
          let tmp22;
          let tmp24;
          if (cResult[13] === nextTierName) {
            tmp22 = cResult[14];
          }
          if (cResult[15] !== tmp22) {
            const obj4 = { variant: "text-md/semibold", children: tmp22 };
            const tmp26 = React3(Text_Text.Text, obj4);
            cResult[15] = tmp22;
            cResult[16] = tmp26;
            tmp24 = tmp26;
          } else {
            tmp24 = cResult[16];
          }
          if (cResult[17] === tmp4.container) {
            if (cResult[18] === tmp18) {
              let tmp27;
              if (cResult[19] === tmp24) {
                tmp27 = cResult[20];
              }
              return tmp27;
            }
          }
          const obj5 = { style: container, children: items2 };
          items2 = [tmp18, tmp24];
          const tmp30 = hasOwnProperty(View, obj5);
          cResult[17] = tmp4.container;
          cResult[18] = tmp18;
          cResult[19] = tmp24;
          cResult[20] = tmp30;
          tmp27 = tmp30;
        }
        const intl = tmp(1125).intl;
        const obj6 = { giftsRemaining: giftsToNextTier, nextTier: nextTierName };
        const formatToPlainStringResult = intl.formatToPlainString(_modDef2632["0+xfd9"], obj6);
        cResult[12] = giftsToNextTier;
        cResult[13] = nextTierName;
        cResult[14] = formatToPlainStringResult;
        tmp22 = formatToPlainStringResult;
      }
      const obj7 = { style: tmp4.iconContainer, children: tmp13 };
      const tmp21 = React3(View, obj7);
      cResult[9] = tmp4.iconContainer;
      cResult[10] = tmp13;
      cResult[11] = tmp21;
      tmp18 = tmp21;
    }
  }
  const obj8 = { name: discord_common_AnalyticsUtils.ImpressionNames.GIFTING_BADGE_PROGRESS_BANNER, type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, properties: { gifts_to_next_tier: giftsToNextTier, next_tier: nextTierName, location_stack: analyticsLocations } };
  cResult[2] = analyticsLocations;
  cResult[3] = giftsToNextTier;
  cResult[4] = nextTierName;
  cResult[5] = obj8;
  tmp9 = obj8;
}) : (function GiftingBadgeProgressBanner(arg0) {
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
    tmp10Result = tmp10(tmp2(10573), obj4);
  }
  items2 = [React3(View, obj3), ];
  const obj5 = { variant: "text-md/semibold", children: intl.formatToPlainString(_modDef2632["0+xfd9"], { giftsRemaining: giftsToNextTier, nextTier: nextTierName }) };
  const Text = tmp6(5271).Text;
  intl = tmp6(1125).intl;
  items2[1] = React3(Text, obj5);
  return tmp8(View, obj2);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeProgressBanner.tsx");

export default tmp6;
