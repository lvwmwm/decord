// Module ID: 19773
// Function ID: 19774
// Name: CreatorBenefitsSection
// Dependencies: [19, 17, 17071, 21, 5005, 587, 5012, 558, 576, 5242, 5271, 1125, 19774, 19778, 19782, 19786, 19790, 19794, 2]

// Module 19773 (CreatorBenefitsSection)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1125 */;
import shared from "shared" /* 5012 */;
import useThemeDefault from "useTheme" /* 5242 */;
import Text_Text from "Text/Text" /* 5271 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 17071 */;
import AvatarRoseExample from "AvatarRoseExample" /* 19774 */;
import AvatarLokyExample from "AvatarLokyExample" /* 19778 */;
import AvatarGraggleExample from "AvatarGraggleExample" /* 19782 */;
import AvatarMoatmonsturrExample from "AvatarMoatmonsturrExample" /* 19786 */;
import StarKeySpotIllustration from "StarKeySpotIllustration" /* 19790 */;
import StarCoinsSpotIllustration from "StarCoinsSpotIllustration" /* 19794 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
const View = react_native.View;
let closure_4 = GuildRoleSubscriptionsConstants.CREATOR_REVENUE_SHARE_PERCENTAGE;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { horizontalContainer: { flex: 1, flexDirection: "row" }, benefitAvatarContainer: obj2, benefitCard: obj3, benefitAvatar: { marginHorizontal: 8 }, benefitAvatars: { marginHorizontal: 24, marginBottom: 24, justifyContent: "space-between" }, benefitCardTitle: { marginStart: 24, marginEnd: 35, marginVertical: 24 }, earningMetricsShadowContainer: obj4, earningMetricsShadowContainerDarkMode: { shadowOpacity: 0.24 }, earningMetrics: obj5, earningMetricsDarkMode: { backgroundColor: "#2E3638" }, earningMetricsLightMode: obj6, greenTextDarkMode: obj7, greenTextLightMode: { color: nativeDefault.unsafe_rawColors.GREEN_400 }, starKeyIllo: { alignSelf: "flex-end", marginEnd: 16, marginBottom: 16 }, revenueShare: { fontSize: 50, lineHeight: 52 }, revenueShareContainer: { padding: 24 }, revenueShareIllo: { marginTop: 15, alignSelf: "flex-end" }, revenueShareDescription: { marginEnd: 120 } };
obj2 = { padding: 20, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = { marginVertical: 6, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm };
obj4 = { shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.16, shadowRadius: 16, elevation: 4 };
obj5 = { marginHorizontal: 24, marginBottom: 24, padding: 16, justifyContent: "space-between", alignItems: "center", borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj7 = { color: nativeDefault.unsafe_rawColors.GREEN_230 };
({ color: nativeDefault.unsafe_rawColors.GREEN_400 });
let closure_7 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function EarningPreview() {
  let intl;
  let items;
  let items1;
  const obj = react2;
  const cResult = obj.c(28);
  const tmp4 = useThemeDefault();
  const tmp5 = closure_7();
  if (cResult[0] === tmp5.earningMetricsShadowContainerDarkMode) {
    let tmp6;
    if (cResult[1] === tmp4) {
      tmp6 = cResult[2];
    }
    if (cResult[3] === tmp5.earningMetricsShadowContainer) {
      let tmp8;
      if (cResult[4] === tmp6) {
        tmp8 = cResult[5];
      }
      if (cResult[6] === tmp5.earningMetricsDarkMode) {
        if (cResult[7] === tmp5.earningMetricsLightMode) {
          let tmp9;
          if (cResult[8] === tmp4) {
            tmp9 = cResult[9];
          }
          if (cResult[10] === tmp5.earningMetrics) {
            if (cResult[11] === tmp5.horizontalContainer) {
              let tmp11;
              let tmp13;
              if (cResult[12] === tmp9) {
                tmp11 = cResult[13];
              }
              const _Symbol = Symbol;
              if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                const obj2 = { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: intl.string(intl3.t.TXPK7B) };
                const Text = tmp(5271).Text;
                intl = tmp(1125).intl;
                const tmp15 = hasOwnProperty(Text, obj2);
                cResult[14] = tmp15;
                tmp13 = tmp15;
              } else {
                tmp13 = cResult[14];
              }
              if (cResult[15] === tmp5) {
                let tmp16;
                let tmp18;
                let tmp20;
                let tmp25;
                if (cResult[16] === tmp4) {
                  tmp16 = cResult[17];
                }
                const _Symbol2 = Symbol;
                if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl2 = tmp(1125).intl;
                  const stringResult = intl2.string(intl3.t.LdjJG5);
                  cResult[18] = stringResult;
                  tmp18 = stringResult;
                } else {
                  tmp18 = cResult[18];
                }
                if (cResult[19] !== tmp16) {
                  const obj3 = { children: items };
                  items = [tmp13, ];
                  const obj4 = { style: tmp16, variant: "heading-lg/extrabold", children: tmp18 };
                  items[1] = hasOwnProperty(Text_Text.Text, obj4);
                  const tmp24 = metroRequire(View, obj3);
                  cResult[19] = tmp16;
                  cResult[20] = tmp24;
                  tmp20 = tmp24;
                } else {
                  tmp20 = cResult[20];
                }
                const _Symbol3 = Symbol;
                if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp27 = hasOwnProperty(AvatarRoseExample.AvatarRoseExample, { width: 54 });
                  cResult[21] = tmp27;
                  tmp25 = tmp27;
                } else {
                  tmp25 = cResult[21];
                }
                if (cResult[22] === tmp11) {
                  let tmp28;
                  if (cResult[23] === tmp20) {
                    tmp28 = cResult[24];
                  }
                  if (cResult[25] === tmp8) {
                    let tmp32;
                    if (cResult[26] === tmp28) {
                      tmp32 = cResult[27];
                    }
                    return tmp32;
                  }
                  const obj5 = { style: tmp8, children: tmp28 };
                  const tmp35 = hasOwnProperty(View, obj5);
                  cResult[25] = tmp8;
                  cResult[26] = tmp28;
                  cResult[27] = tmp35;
                  tmp32 = tmp35;
                }
                const obj6 = { style: tmp11, children: items1 };
                items1 = [tmp20, tmp25];
                const tmp31 = metroRequire(View, obj6);
                cResult[22] = tmp11;
                cResult[23] = tmp20;
                cResult[24] = tmp31;
                tmp28 = tmp31;
              }
              const tmpResult = shared;
              const tmp17 = tmpResult.isThemeDark(tmp4) ? tmp5.greenTextDarkMode : tmp5.greenTextLightMode;
              cResult[15] = tmp5;
              cResult[16] = tmp4;
              cResult[17] = tmp17;
              tmp16 = tmp17;
            }
          }
          const items2 = [, , ];
          ({ earningMetrics: arr2[0], horizontalContainer: arr2[1] } = tmp5);
          items2[2] = tmp9;
          cResult[10] = tmp5.earningMetrics;
          cResult[11] = tmp5.horizontalContainer;
          cResult[12] = tmp9;
          cResult[13] = items2;
          tmp11 = items2;
        }
      }
      const tmpResult3 = shared;
      const tmp10 = tmpResult3.isThemeDark(tmp4) ? tmp5.earningMetricsDarkMode : tmp5.earningMetricsLightMode;
      cResult[6] = tmp5.earningMetricsDarkMode;
      cResult[7] = tmp5.earningMetricsLightMode;
      cResult[8] = tmp4;
      cResult[9] = tmp10;
      tmp9 = tmp10;
    }
    const items3 = [tmp5.earningMetricsShadowContainer, tmp6];
    cResult[3] = tmp5.earningMetricsShadowContainer;
    cResult[4] = tmp6;
    cResult[5] = items3;
    tmp8 = items3;
  }
  const tmpResult4 = shared;
  const tmp7 = tmpResult4.isThemeDark(tmp4) && tmp5.earningMetricsShadowContainerDarkMode;
  cResult[0] = tmp5.earningMetricsShadowContainerDarkMode;
  cResult[1] = tmp4;
  cResult[2] = tmp7;
  tmp6 = tmp7;
}) : (function EarningPreview() {
  let intl;
  let intl2;
  let items3;
  let obj3;
  const tmp2 = useThemeDefault();
  const tmp3 = closure_7();
  const items = [tmp3.earningMetricsShadowContainer, ];
  const obj = shared;
  const obj2 = { style: items, children: metroRequire(View, obj3) };
  items[1] = obj.isThemeDark(tmp2) && tmp3.earningMetricsShadowContainerDarkMode;
  const items1 = [, , ];
  ({ earningMetrics: arr2[0], horizontalContainer: arr2[1] } = tmp3);
  obj.isThemeDark(tmp2) && tmp3.earningMetricsShadowContainerDarkMode;
  obj3 = { style: items1, children: items3 };
  const tmp6Result = shared;
  items1[2] = tmp6Result.isThemeDark(tmp2) ? tmp3.earningMetricsDarkMode : tmp3.earningMetricsLightMode;
  const obj4 = { variant: "text-sm/normal", color: "mobile-text-heading-primary", children: intl.string(intl3.t.TXPK7B) };
  const Text = tmp6(5271).Text;
  intl = tmp6(1125).intl;
  const items2 = [hasOwnProperty(Text, obj4), ];
  const Text2 = tmp6(5271).Text;
  const obj5 = { children: items2 };
  const tmp6Result2 = shared;
  const obj6 = { style: tmp6Result2.isThemeDark(tmp2) ? tmp3.greenTextDarkMode : tmp3.greenTextLightMode, variant: "heading-lg/extrabold", children: intl2.string(intl3.t.LdjJG5) };
  intl2 = tmp6(1125).intl;
  items2[1] = hasOwnProperty(Text2, obj6);
  items3 = [metroRequire(View, obj5), hasOwnProperty(AvatarRoseExample.AvatarRoseExample, { width: 54 })];
  return hasOwnProperty(View, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConsistentEarningBenefit() {
  let benefitCard;
  let benefitCardTitle;
  let first;
  let items;
  let items1;
  let tmp10;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(16);
  const tmp4 = closure_7();
  ({ benefitCard, benefitCardTitle } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1125).intl;
    const stringResult = intl.string(intl3.t["9CdmS8"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.benefitCardTitle) {
    const obj2 = { style: benefitCardTitle, variant: "heading-md/medium", color: "text-default", children: first };
    const tmp9 = hasOwnProperty(Text_Text.Text, obj2);
    cResult[1] = tmp4.benefitCardTitle;
    cResult[2] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp13 = hasOwnProperty(closure_8, {});
    cResult[3] = tmp13;
    tmp10 = tmp13;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === tmp4.benefitAvatars) {
    let tmp14;
    let tmp17;
    let tmp16;
    let tmp15;
    let tmp23;
    if (cResult[5] === tmp4.horizontalContainer) {
      tmp14 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { Avatar: AvatarLokyExample.AvatarLokyExample };
      const tmp20 = hasOwnProperty(closure_12, obj3);
      const obj4 = { Avatar: AvatarGraggleExample.AvatarGraggleExample };
      const tmp21 = hasOwnProperty(closure_12, obj4);
      const obj5 = { Avatar: AvatarMoatmonsturrExample.AvatarMoatmonsturrExample };
      const tmp22 = hasOwnProperty(closure_12, obj5);
      cResult[7] = tmp20;
      cResult[8] = tmp21;
      cResult[9] = tmp22;
      tmp17 = tmp22;
      tmp16 = tmp21;
      tmp15 = tmp20;
    } else {
      tmp15 = cResult[7];
      tmp16 = cResult[8];
      tmp17 = cResult[9];
    }
    if (cResult[10] !== tmp14) {
      const obj6 = { style: tmp14, children: items };
      items = [tmp15, tmp16, tmp17];
      const tmp26 = metroRequire(View, obj6);
      cResult[10] = tmp14;
      cResult[11] = tmp26;
      tmp23 = tmp26;
    } else {
      tmp23 = cResult[11];
    }
    if (cResult[12] === tmp4.benefitCard) {
      if (cResult[13] === tmp7) {
        let tmp27;
        if (cResult[14] === tmp23) {
          tmp27 = cResult[15];
        }
        return tmp27;
      }
    }
    const obj7 = { style: benefitCard, children: items1 };
    items1 = [tmp7, tmp10, tmp23];
    const tmp30 = metroRequire(View, obj7);
    cResult[12] = tmp4.benefitCard;
    cResult[13] = tmp7;
    cResult[14] = tmp23;
    cResult[15] = tmp30;
    tmp27 = tmp30;
  }
  const items2 = [, ];
  ({ horizontalContainer: arr[0], benefitAvatars: arr[1] } = tmp4);
  cResult[4] = tmp4.benefitAvatars;
  cResult[5] = tmp4.horizontalContainer;
  cResult[6] = items2;
  tmp14 = items2;
}) : (function ConsistentEarningBenefit() {
  let intl;
  let items;
  let items1;
  let items2;
  const tmp = closure_7();
  const obj = { style: tmp.benefitCard, children: items };
  const obj2 = { style: tmp.benefitCardTitle, variant: "heading-md/medium", color: "text-default", children: intl.string(intl3.t["9CdmS8"]) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  items = [hasOwnProperty(Text, obj2), hasOwnProperty(closure_8, {}), ];
  const obj3 = { style: items1, children: items2 };
  items1 = [, ];
  ({ horizontalContainer: arr2[0], benefitAvatars: arr2[1] } = tmp);
  items2 = [, , ];
  const obj4 = { Avatar: AvatarLokyExample.AvatarLokyExample };
  items2[0] = hasOwnProperty(closure_12, obj4);
  const obj5 = { Avatar: AvatarGraggleExample.AvatarGraggleExample };
  items2[1] = hasOwnProperty(closure_12, obj5);
  const obj6 = { Avatar: AvatarMoatmonsturrExample.AvatarMoatmonsturrExample };
  items2[2] = hasOwnProperty(closure_12, obj6);
  items[2] = metroRequire(View, obj3);
  return metroRequire(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function FollowerAwardBenefit() {
  let benefitCard;
  let benefitCardTitle;
  let first;
  let items;
  let tmp10;
  let tmp13;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(10);
  const tmp4 = closure_7();
  ({ benefitCard, benefitCardTitle } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1125).intl;
    const stringResult = intl.string(intl3.t.qsKRUQ);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.benefitCardTitle) {
    const obj2 = { style: benefitCardTitle, variant: "heading-md/medium", color: "text-default", children: first };
    const tmp9 = hasOwnProperty(Text_Text.Text, obj2);
    cResult[1] = tmp4.benefitCardTitle;
    cResult[2] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp12 = hasOwnProperty(StarKeySpotIllustration.StarKeySpotIllustration, { width: 160 });
    cResult[3] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== tmp4.starKeyIllo) {
    const obj3 = { style: tmp4.starKeyIllo, children: tmp10 };
    const tmp16 = hasOwnProperty(View, obj3);
    cResult[4] = tmp4.starKeyIllo;
    cResult[5] = tmp16;
    tmp13 = tmp16;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] === tmp4.benefitCard) {
    if (cResult[7] === tmp7) {
      let tmp17;
      if (cResult[8] === tmp13) {
        tmp17 = cResult[9];
      }
      return tmp17;
    }
  }
  const obj4 = { style: benefitCard, children: items };
  items = [tmp7, tmp13];
  const tmp18 = metroRequire(View, obj4);
  cResult[6] = tmp4.benefitCard;
  cResult[7] = tmp7;
  cResult[8] = tmp13;
  cResult[9] = tmp18;
  tmp17 = tmp18;
}) : (function FollowerAwardBenefit() {
  let intl;
  let items;
  const tmp = closure_7();
  const obj = { style: tmp.benefitCard, children: items };
  const obj2 = { style: tmp.benefitCardTitle, variant: "heading-md/medium", color: "text-default", children: intl.string(intl3.t.qsKRUQ) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  items = [hasOwnProperty(Text, obj2), ];
  const obj3 = { style: tmp.starKeyIllo, children: hasOwnProperty(StarKeySpotIllustration.StarKeySpotIllustration, { width: 160 }) };
  items[1] = hasOwnProperty(View, obj3);
  return metroRequire(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function RevenueShareBenefit() {
  let items;
  let items1;
  const obj = react2;
  const cResult = obj.c(20);
  const tmp4 = useThemeDefault();
  const tmp5 = closure_7();
  if (cResult[0] === tmp5.benefitCard) {
    let tmp6;
    if (cResult[1] === tmp5.revenueShareContainer) {
      tmp6 = cResult[2];
    }
    if (cResult[3] === tmp5) {
      let tmp8;
      if (cResult[4] === tmp4) {
        tmp8 = cResult[5];
      }
      if (cResult[6] === tmp5.revenueShare) {
        let tmp10;
        let tmp15;
        let tmp17;
        let tmp20;
        let tmp23;
        if (cResult[7] === tmp8) {
          tmp10 = cResult[8];
        }
        const _Symbol = Symbol;
        const revenueShareDescription = tmp5.revenueShareDescription;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1125).intl;
          const stringResult = intl.string(intl3.t.AewsXD);
          cResult[9] = stringResult;
          tmp15 = stringResult;
        } else {
          tmp15 = cResult[9];
        }
        if (cResult[10] !== tmp5.revenueShareDescription) {
          const obj2 = { style: revenueShareDescription, variant: "heading-md/medium", color: "text-default", children: tmp15 };
          const tmp19 = hasOwnProperty(Text_Text.Text, obj2);
          cResult[10] = tmp5.revenueShareDescription;
          cResult[11] = tmp19;
          tmp17 = tmp19;
        } else {
          tmp17 = cResult[11];
        }
        const _Symbol2 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp22 = hasOwnProperty(StarCoinsSpotIllustration.StarCoinsSpotIllustration, { width: 128 });
          cResult[12] = tmp22;
          tmp20 = tmp22;
        } else {
          tmp20 = cResult[12];
        }
        if (cResult[13] !== tmp5.revenueShareIllo) {
          const obj3 = { style: tmp5.revenueShareIllo, children: tmp20 };
          const tmp26 = hasOwnProperty(View, obj3);
          cResult[13] = tmp5.revenueShareIllo;
          cResult[14] = tmp26;
          tmp23 = tmp26;
        } else {
          tmp23 = cResult[14];
        }
        if (cResult[15] === tmp6) {
          if (cResult[16] === tmp10) {
            if (cResult[17] === tmp17) {
              let tmp27;
              if (cResult[18] === tmp23) {
                tmp27 = cResult[19];
              }
              return tmp27;
            }
          }
        }
        const obj4 = { style: tmp6, children: items };
        items = [tmp10, tmp17, tmp23];
        const tmp30 = metroRequire(View, obj4);
        cResult[15] = tmp6;
        cResult[16] = tmp10;
        cResult[17] = tmp17;
        cResult[18] = tmp23;
        cResult[19] = tmp30;
        tmp27 = tmp30;
      }
      const obj5 = { style: items1, variant: "heading-xxl/extrabold", color: "status-positive", children: `${closure_4}%` };
      items1 = [tmp7, tmp8];
      const tmp13 = hasOwnProperty(Text_Text.Text, obj5);
      cResult[6] = tmp5.revenueShare;
      cResult[7] = tmp8;
      cResult[8] = tmp13;
      tmp10 = tmp13;
    }
    const tmpResult = shared;
    const tmp9 = tmpResult.isThemeDark(tmp4) ? tmp5.greenTextDarkMode : tmp5.greenTextLightMode;
    cResult[3] = tmp5;
    cResult[4] = tmp4;
    cResult[5] = tmp9;
    tmp8 = tmp9;
  }
  const items2 = [, ];
  ({ benefitCard: arr[0], revenueShareContainer: arr[1] } = tmp5);
  cResult[0] = tmp5.benefitCard;
  cResult[1] = tmp5.revenueShareContainer;
  cResult[2] = items2;
  tmp6 = items2;
}) : (function RevenueShareBenefit() {
  let intl;
  let items;
  let items2;
  const tmp2 = useThemeDefault();
  const tmp3 = closure_7();
  const obj = { style: items, children: items2 };
  items = [, ];
  ({ benefitCard: arr[0], revenueShareContainer: arr[1] } = tmp3);
  const items1 = [tmp3.revenueShare, ];
  const Text = Text_Text.Text;
  const obj3 = { style: items1, variant: "heading-xxl/extrabold", color: "status-positive", children: `${closure_4}%` };
  const obj2 = shared;
  items1[1] = obj2.isThemeDark(tmp2) ? tmp3.greenTextDarkMode : tmp3.greenTextLightMode;
  items2 = [hasOwnProperty(Text, obj3), , ];
  const obj4 = { style: tmp3.revenueShareDescription, variant: "heading-md/medium", color: "text-default", children: intl.string(intl3.t.AewsXD) };
  const Text2 = tmp7(5271).Text;
  intl = tmp7(1125).intl;
  items2[1] = hasOwnProperty(Text2, obj4);
  const obj5 = { style: tmp3.revenueShareIllo, children: hasOwnProperty(StarCoinsSpotIllustration.StarCoinsSpotIllustration, { width: 128 }) };
  items2[2] = hasOwnProperty(View, obj5);
  return metroRequire(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function BenefitAvatar(Avatar) {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(8);
  Avatar = Avatar.Avatar;
  const tmp2 = closure_7();
  if (cResult[0] !== Avatar) {
    const tmp5 = hasOwnProperty(Avatar, { width: 40 });
    cResult[0] = Avatar;
    cResult[1] = tmp5;
    tmp3 = tmp5;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] === tmp2.benefitAvatar) {
    let tmp6;
    if (cResult[3] === tmp3) {
      tmp6 = cResult[4];
    }
    if (cResult[5] === tmp2.benefitAvatarContainer) {
      let tmp8;
      if (cResult[6] === tmp6) {
        tmp8 = cResult[7];
      }
      return tmp8;
    }
    const obj2 = { style: tmp2.benefitAvatarContainer, children: tmp6 };
    const tmp11 = hasOwnProperty(View, obj2);
    cResult[5] = tmp2.benefitAvatarContainer;
    cResult[6] = tmp6;
    cResult[7] = tmp11;
    tmp8 = tmp11;
  }
  const obj3 = { style: tmp2.benefitAvatar, children: tmp3 };
  const tmp7 = hasOwnProperty(View, obj3);
  cResult[2] = tmp2.benefitAvatar;
  cResult[3] = tmp3;
  cResult[4] = tmp7;
  tmp6 = tmp7;
}) : (function BenefitAvatar(Avatar) {
  let obj2;
  Avatar = Avatar.Avatar;
  const tmp = closure_7();
  const obj = { style: tmp.benefitAvatarContainer, children: hasOwnProperty(View, obj2) };
  obj2 = { style: tmp.benefitAvatar, children: hasOwnProperty(Avatar, { width: 40 }) };
  return hasOwnProperty(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function CreatorBenefitsSection() {
  let first;
  let items;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { children: items };
    items = [hasOwnProperty(closure_9, {}), hasOwnProperty(closure_10, {}), hasOwnProperty(closure_11, {})];
    const tmp9 = metroRequire(View, obj2);
    cResult[0] = tmp9;
    first = tmp9;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function CreatorBenefitsSection() {
  let items;
  const obj = { children: items };
  items = [hasOwnProperty(closure_9, {}), hasOwnProperty(closure_10, {}), hasOwnProperty(closure_11, {})];
  return metroRequire(View, obj);
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/welcome/CreatorBenefitsSection.tsx");

export default tmp5;
