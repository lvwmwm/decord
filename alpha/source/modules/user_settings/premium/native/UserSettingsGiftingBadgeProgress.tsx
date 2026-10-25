// Module ID: 14884
// Function ID: 14885
// Name: UserSettingsGiftingBadgeProgress
// Dependencies: [32, 19, 17, 8681, 21, 4971, 587, 558, 576, 7253, 7278, 8673, 504, 5234, 1128, 2632, 10502, 10505, 12886, 5244, 10446, 14885, 11077, 2]

// Module 14884 (UserSettingsGiftingBadgeProgress)
import nativeDefault from "native" /* 587 */;
import _modDef2632 from "module_2632" /* 2632 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7253 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7278 */;
import BadgeDirectoryStore2 from "BadgeDirectoryStore" /* 8681 */;
import utils_openGiftModal from "utils/openGiftModal" /* 10446 */;
import GiftingBadgesUtils from "GiftingBadgesUtils" /* 10502 */;
import GiftingBadgeIconDefault from "GiftingBadgeIcon" /* 10505 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4971 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const BadgeDirectoryStore = BadgeDirectoryStore2;
let dependencyMap, importDefault, singleRequirementProgress;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let unpackModuleId;
({ Pressable: hasOwnProperty, View: metroRequire } = react_native);
let closure_8 = BadgeDirectoryStore2.getSingleRequirementThreshold;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles(() => {
  const obj = { wrapper: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 }, progressContainer: { gap: nativeDefault.space.PX_8 }, progressRow: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 }, progressTitleText: { flex: 1 }, progressBarContainer: { paddingHorizontal: nativeDefault.space.PX_8 }, progressBarTrack: { height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" }, progressBarFill: { height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.unsafe_rawColors.BRAND_500 }, progressLabels: { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", minHeight: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_4 }, divider: { height: 1, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL }, dropdownRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, badgesRow: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", paddingVertical: nativeDefault.space.PX_4 }, badgeItem: { width: "33.33%", alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 }, badgeItemActive: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED }, badgeCopy: { alignItems: "center", gap: 2 }, footerText: { textAlign: "center", marginBottom: nativeDefault.space.PX_16 }, introContent: { paddingHorizontal: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4 }, introGrid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16 }, introGridItem: { width: "33.33%", alignItems: "center", justifyContent: "center", paddingVertical: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 } };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 });
  ({ gap: nativeDefault.space.PX_8 });
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 });
  ({ paddingHorizontal: nativeDefault.space.PX_8 });
  ({ height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" });
  ({ height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.unsafe_rawColors.BRAND_500 });
  ({ flexDirection: "row", justifyContent: "flex-end", alignItems: "center", minHeight: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_4 });
  ({ height: 1, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL });
  ({ flexDirection: "row", flexWrap: "wrap", justifyContent: "center", paddingVertical: nativeDefault.space.PX_4 });
  ({ width: "33.33%", alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 });
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED });
  ({ textAlign: "center", marginBottom: nativeDefault.space.PX_16 });
  ({ paddingHorizontal: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4 });
  ({ flexDirection: "row", flexWrap: "wrap", justifyContent: "center", paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16 });
  ({ width: "33.33%", alignItems: "center", justifyContent: "center", paddingVertical: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function GiftingBadgeIntro(analyticsLocation) {
  let analyticsLocations;
  let intl;
  let introGridItem;
  let items1;
  let tmp7;
  let tmp8;
  const tmp = analyticsLocation;
  let obj = analyticsLocation(analyticsLocations[8]);
  const cResult = obj.c(25);
  analyticsLocation = analyticsLocation.analyticsLocation;
  const tmp4 = closure_12();
  importDefault = tmp4;
  let tmp6 = require("useAnalyticsLocations");
  analyticsLocations = tmp6(require("AnalyticsLocation").USER_SETTINGS_GIFT_INVENTORY).analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [BadgeDirectoryStore];
    const fn = function o() {
      badgeById = badgeById.getBadgeById(analyticsLocation(analyticsLocations[11]).BadgeId.GIFTING);
      let tiers;
      if (badgeById != null) {
        tiers = badgeById.tiers;
      }
      return tiers;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  let tmpResult = tmp(tmp2[12]);
  const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
  if (null == stateFromStores) {
    return null;
  } else {
    let tmp10;
    let tmp13;
    let tmp18;
    const _Symbol2 = Symbol;
    const wrapper = tmp4.wrapper;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      let obj2 = { variant: "text-xs/normal", color: "text-muted", children: intl.string(tmp5(tmp2[15])["4Yp0mI"]) };
      let Text = tmp(tmp2[13]).Text;
      intl = tmp(tmp2[14]).intl;
      const tmp12 = closure_9(Text, obj2);
      cResult[2] = tmp12;
      tmp10 = tmp12;
    } else {
      tmp10 = cResult[2];
    }
    if (cResult[3] !== tmp4.introContent) {
      let obj3 = { style: tmp4.introContent, children: tmp10 };
      const tmp16 = closure_9(closure_6, obj3);
      cResult[3] = tmp4.introContent;
      cResult[4] = tmp16;
      tmp13 = tmp16;
    } else {
      tmp13 = cResult[4];
    }
    if (cResult[5] === tmp4.badgeCopy) {
      if (cResult[6] === tmp4.introGridItem) {
        if (cResult[7] === stateFromStores) {
          tmp18 = cResult[8];
        }
        if (cResult[12] === tmp4.introGrid) {
          let tmp21;
          let tmp26;
          let tmp25;
          if (cResult[13] === tmp18) {
            tmp21 = cResult[14];
          }
          const _Symbol = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            let obj4 = { size: "sm", color: tmp5(tmp2[6]).unsafe_rawColors.WHITE };
            const GiftIcon = tmp(tmp2[18]).GiftIcon;
            const tmp28 = closure_9(GiftIcon, obj4);
            const intl2 = tmp(tmp2[14]).intl;
            const stringResult = intl2.string(require("module_2632").DZnomS);
            cResult[15] = stringResult;
            cResult[16] = tmp28;
            tmp26 = tmp28;
            tmp25 = stringResult;
          } else {
            tmp25 = cResult[15];
            tmp26 = cResult[16];
          }
          if (cResult[17] === analyticsLocation) {
            let tmp30;
            if (cResult[18] === analyticsLocations) {
              tmp30 = cResult[19];
            }
            if (cResult[20] === tmp4.wrapper) {
              if (cResult[21] === tmp30) {
                if (cResult[22] === tmp13) {
                  let tmp33;
                  if (cResult[23] === tmp21) {
                    tmp33 = cResult[24];
                  }
                  return tmp33;
                }
              }
            }
            let obj5 = { style: wrapper, children: items1 };
            items1 = [tmp13, tmp21, tmp30];
            const tmp36 = closure_10(closure_6, obj5);
            cResult[20] = tmp4.wrapper;
            cResult[21] = tmp30;
            cResult[22] = tmp13;
            cResult[23] = tmp21;
            cResult[24] = tmp36;
            tmp33 = tmp36;
          }
          let obj6 = {
            variant: "primary",
            icon: tmp26,
            text: tmp25,
            onPress() {
                      const obj = utils_openGiftModal;
                      const obj2 = { analyticsLocation, analyticsLocations };
                      obj.openGiftModal(obj2);
                    },
            grow: true
          };
          const tmp32 = closure_9(tmp(analyticsLocations[19]).Button, obj6);
          cResult[17] = analyticsLocation;
          cResult[18] = analyticsLocations;
          cResult[19] = tmp32;
          tmp30 = tmp32;
        }
        const obj7 = { style: tmp17, children: tmp18 };
        const tmp24 = closure_9(closure_6, obj7);
        cResult[12] = tmp4.introGrid;
        cResult[13] = tmp18;
        cResult[14] = tmp24;
        tmp21 = tmp24;
      }
    }
    if (cResult[9] === tmp4.badgeCopy) {
      let tmp19;
      if (cResult[10] === tmp4.introGridItem) {
        tmp19 = cResult[11];
      }
      const mapped = stateFromStores.map(tmp19);
      cResult[5] = tmp4.badgeCopy;
      cResult[6] = tmp4.introGridItem;
      cResult[7] = stateFromStores;
      cResult[8] = mapped;
      tmp18 = mapped;
    }
    const fn2 = function v(name) {
      let format;
      let items;
      let items1;
      let obj6;
      let qvx9E4;
      let tmpResult;
      const obj = GiftingBadgesUtils;
      const giftingBadgeTierIconUrl = obj.getGiftingBadgeTierIconUrl(name);
      let tmp7 = null != giftingBadgeTierIconUrl;
      const obj2 = { style: introGridItem.introGridItem, children: items };
      const tmp6 = introGridItem;
      if (tmp7) {
        const obj3 = { icon: giftingBadgeTierIconUrl, size: 44 };
        tmp7 = React4(GiftingBadgeIconDefault, obj3);
      }
      items = [tmp7, ];
      const obj4 = { style: tmp6.badgeCopy, accessible: true, accessibilityLabel: tmpResult.getGiftingBadgeAccessibilityLabel(name), children: items1 };
      let str = name.name;
      tmpResult = GiftingBadgesUtils;
      const Text = tmp(5234).Text;
      if (str == null) {
        str = "";
      }
      items1 = [React4(Text, { variant: "text-sm/semibold", color: "text-subtle", children: str }), ];
      const obj5 = { variant: "text-xs/normal", color: "text-muted", children: format(qvx9E4, obj6) };
      const Text2 = tmp(5234).Text;
      const intl = tmp(1128).intl;
      format = intl.format;
      obj6 = { count: closure_8(name) };
      qvx9E4 = _modDef2632.qvx9E4;
      items1[1] = React4(Text2, obj5);
      items[1] = authStore(metroRequire, obj4);
      return authStore(metroRequire, obj2, name.key);
    };
    cResult[9] = tmp4.badgeCopy;
    cResult[10] = tmp4.introGridItem;
    cResult[11] = fn2;
    tmp19 = fn2;
  }
}) : (function GiftingBadgeIntro(analyticsLocation) {
  let GiftIcon;
  let Text;
  let intl;
  let intl2;
  let introGridItem;
  let items1;
  let obj4;
  let obj7;
  analyticsLocation = analyticsLocation.analyticsLocation;
  let analyticsLocations;
  const tmp = closure_12();
  importDefault = tmp;
  const tmp4 = require("useAnalyticsLocations");
  analyticsLocations = tmp4(require("AnalyticsLocation").USER_SETTINGS_GIFT_INVENTORY).analyticsLocations;
  let obj = analyticsLocation(analyticsLocations[12]);
  let items = [BadgeDirectoryStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    badgeById = badgeById.getBadgeById(analyticsLocation(analyticsLocations[11]).BadgeId.GIFTING);
    let tiers;
    if (badgeById != null) {
      tiers = badgeById.tiers;
    }
    return tiers;
  });
  let tmp6 = null;
  if (null != stateFromStores) {
    let tmp7 = closure_10;
    let obj2 = { style: tmp.wrapper, children: items1 };
    let obj3 = { style: tmp.introContent, children: closure_9(Text, obj4) };
    obj4 = { variant: "text-xs/normal", color: "text-muted", children: intl.string(tmp2(analyticsLocations[15])["4Yp0mI"]) };
    Text = tmp5(tmp3[13]).Text;
    intl = tmp5(tmp3[14]).intl;
    items1 = [closure_9(closure_6, obj3), , ];
    let obj5 = {
      style: tmp.introGrid,
      children: stateFromStores.map((name) => {
          let format;
          let items;
          let items1;
          let obj6;
          let qvx9E4;
          let tmpResult;
          const obj = GiftingBadgesUtils;
          const giftingBadgeTierIconUrl = obj.getGiftingBadgeTierIconUrl(name);
          let tmp7 = null != giftingBadgeTierIconUrl;
          const obj2 = { style: introGridItem.introGridItem, children: items };
          const tmp6 = introGridItem;
          if (tmp7) {
            const obj3 = { icon: giftingBadgeTierIconUrl, size: 44 };
            tmp7 = React4(GiftingBadgeIconDefault, obj3);
          }
          items = [tmp7, ];
          const obj4 = { style: tmp6.badgeCopy, accessible: true, accessibilityLabel: tmpResult.getGiftingBadgeAccessibilityLabel(name), children: items1 };
          let str = name.name;
          tmpResult = GiftingBadgesUtils;
          const Text = tmp(5234).Text;
          if (str == null) {
            str = "";
          }
          items1 = [React4(Text, { variant: "text-sm/semibold", color: "text-subtle", children: str }), ];
          const obj5 = { variant: "text-xs/normal", color: "text-muted", children: format(qvx9E4, obj6) };
          const Text2 = tmp(5234).Text;
          const intl = tmp(1128).intl;
          format = intl.format;
          obj6 = { count: closure_8(name) };
          qvx9E4 = _modDef2632.qvx9E4;
          items1[1] = React4(Text2, obj5);
          items[1] = authStore(metroRequire, obj4);
          return authStore(metroRequire, obj2, name.key);
        })
    };
    items1[1] = closure_9(closure_6, obj5);
    let obj6 = {
      variant: "primary",
      icon: closure_9(GiftIcon, obj7),
      text: intl2.string(tmp2(analyticsLocations[15]).DZnomS),
      onPress() {
          const obj = utils_openGiftModal;
          const obj2 = { analyticsLocation, analyticsLocations };
          obj.openGiftModal(obj2);
        },
      grow: true
    };
    const Button = tmp5(tmp3[19]).Button;
    obj7 = { size: "sm", color: require("native").unsafe_rawColors.WHITE };
    GiftIcon = tmp5(tmp3[18]).GiftIcon;
    intl2 = tmp5(tmp3[14]).intl;
    items1[2] = closure_9(Button, obj6);
    tmp6 = closure_10(closure_6, obj2);
  }
  return tmp6;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserSettingsGiftingBadgeProgress(analyticsLocation) {
  let analyticsLocations;
  let badgeItem;
  let badgeProgress;
  let currentTier;
  let giftsRemaining;
  let intl5;
  let intl6;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let nextTier;
  let progressContainer;
  let str4;
  let tiers;
  let tmp10;
  let tmp6;
  let tmp9;
  let wrapper;
  const tmp = analyticsLocation;
  const tmp2 = dependencyMap;
  let obj = analyticsLocation(576);
  const cResult = obj.c(115);
  analyticsLocation = analyticsLocation.analyticsLocation;
  const tmp4 = closure_12();
  importDefault = tmp4;
  [tmp6, dependencyMap] = analyticsLocations(currentTier.useState(false), 2);
  const tmp5 = analyticsLocations(currentTier.useState(false), 2);
  let tmp8 = useAnalyticsLocationsDefault;
  analyticsLocations = tmp8(AnalyticsLocationDefault.USER_SETTINGS_GIFT_INVENTORY).analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [BadgeDirectoryStore];
    const fn = function f() {
      let tiers;
      singleRequirementProgress = singleRequirementProgress.getSingleRequirementProgress(analyticsLocation(dependencyMap[11]).BadgeId.GIFTING);
      let num;
      if (singleRequirementProgress != null) {
        num = singleRequirementProgress.current;
      }
      if (num == null) {
        num = 0;
      }
      const obj2 = { badgeProgress: num, currentTier: singleRequirementProgress.getCurrentTier(analyticsLocation(dependencyMap[11]).BadgeId.GIFTING), nextTier: singleRequirementProgress.getNextTier(analyticsLocation(dependencyMap[11]).BadgeId.GIFTING), giftsRemaining: singleRequirementProgress.getRemainingToNextTier(analyticsLocation(dependencyMap[11]).BadgeId.GIFTING), tiers };
      const badgeById = obj.getBadgeById(tmp(tmp2[11]).BadgeId.GIFTING);
      tiers = undefined;
      if (badgeById != null) {
        tiers = badgeById.tiers;
      }
      if (tiers == null) {
        tiers = [];
      }
      return obj2;
    };
    let num = 0;
    cResult[0] = items;
    cResult[1] = fn;
    tmp9 = items;
    tmp10 = fn;
  } else {
    [tmp9, tmp10] = cResult;
  }
  let tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp9, tmp10);
  ({ badgeProgress, currentTier } = stateFromStoresObject);
  ({ nextTier, giftsRemaining, tiers } = stateFromStoresObject);
  if (0 === badgeProgress) {
    let tmp116;
    if (cResult[2] !== analyticsLocation) {
      let obj2 = { analyticsLocation };
      const tmp119 = closure_9(closure_13, obj2);
      cResult[2] = analyticsLocation;
      cResult[3] = tmp119;
      tmp116 = tmp119;
    } else {
      tmp116 = cResult[3];
    }
    return tmp116;
  } else {
    let tmp27;
    let tmp24;
    let tmp23;
    let tmp22;
    let tmp21;
    let tmp20;
    let str2;
    let str;
    let tmp19;
    let tmp18;
    let tmp17;
    let tmp16;
    let tmp15;
    let tmp14;
    let tmp13;
    if (cResult[4] === badgeProgress) {
      if (cResult[5] === currentTier) {
        if (cResult[6] === giftsRemaining) {
          if (cResult[7] === nextTier) {
            if (cResult[8] === tmp4.progressBarContainer) {
              if (cResult[9] === tmp4.progressBarFill) {
                if (cResult[10] === tmp4.progressBarTrack) {
                  if (cResult[11] === tmp4.progressContainer) {
                    if (cResult[12] === tmp4.progressLabels) {
                      if (cResult[13] === tmp4.progressRow) {
                        if (cResult[14] === tmp4.progressTitleText) {
                          if (cResult[15] === tmp4.wrapper) {
                            tmp13 = cResult[16];
                            tmp14 = cResult[17];
                            tmp15 = cResult[18];
                            tmp16 = cResult[19];
                            tmp17 = cResult[20];
                            tmp18 = cResult[21];
                            tmp19 = cResult[22];
                            str = cResult[23];
                            str2 = cResult[24];
                            tmp20 = cResult[25];
                            tmp21 = cResult[26];
                            tmp22 = cResult[27];
                            tmp23 = cResult[28];
                            tmp24 = cResult[29];
                          }
                          if (cResult[65] === tmp13) {
                            if (cResult[66] === str) {
                              if (cResult[67] === str2) {
                                let tmp68;
                                if (cResult[68] === tmp20) {
                                  tmp68 = cResult[69];
                                }
                                if (cResult[70] === tmp14) {
                                  if (cResult[71] === tmp68) {
                                    let tmp71;
                                    if (cResult[72] === tmp21) {
                                      tmp71 = cResult[73];
                                    }
                                    if (cResult[74] === tmp15) {
                                      if (cResult[75] === tmp71) {
                                        if (cResult[76] === tmp22) {
                                          let tmp74;
                                          if (cResult[77] === tmp23) {
                                            tmp74 = cResult[78];
                                          }
                                          if (cResult[79] === tmp16) {
                                            if (cResult[80] === tmp18) {
                                              if (cResult[81] === tmp74) {
                                                let tmp77;
                                                let tmp81;
                                                let tmp80;
                                                if (cResult[82] === tmp24) {
                                                  tmp77 = cResult[83];
                                                }
                                                const _Symbol = Symbol;
                                                if (cResult[84] === Symbol.for("react.memo_cache_sentinel")) {
                                                  let obj3 = { size: "sm", color: nativeDefault.unsafe_rawColors.WHITE };
                                                  const GiftIcon = tmp(12886).GiftIcon;
                                                  const tmp83 = closure_9(GiftIcon, obj3);
                                                  const intl4 = tmp(1128).intl;
                                                  const stringResult = intl4.string(_modDef2632.DZnomS);
                                                  cResult[84] = tmp83;
                                                  cResult[85] = stringResult;
                                                  tmp81 = stringResult;
                                                  tmp80 = tmp83;
                                                } else {
                                                  tmp80 = cResult[84];
                                                  tmp81 = cResult[85];
                                                }
                                                if (cResult[86] === analyticsLocation) {
                                                  let tmp85;
                                                  let tmp88;
                                                  let tmp92;
                                                  let tmp93;
                                                  let tmp96;
                                                  if (cResult[87] === analyticsLocations) {
                                                    tmp85 = cResult[88];
                                                  }
                                                  if (cResult[89] !== tmp4.divider) {
                                                    let obj4 = { style: tmp4.divider };
                                                    const tmp91 = closure_9(closure_6, obj4);
                                                    cResult[89] = tmp4.divider;
                                                    cResult[90] = tmp91;
                                                    tmp88 = tmp91;
                                                  } else {
                                                    tmp88 = cResult[90];
                                                  }
                                                  const _Symbol2 = Symbol;
                                                  if (cResult[91] === Symbol.for("react.memo_cache_sentinel")) {
                                                    const fn2 = function $() {
                                                      return dependencyMap((arg0) => !arg0);
                                                    };
                                                    cResult[91] = fn2;
                                                    tmp92 = fn2;
                                                  } else {
                                                    tmp92 = cResult[91];
                                                  }
                                                  const _Symbol3 = Symbol;
                                                  if (cResult[92] === Symbol.for("react.memo_cache_sentinel")) {
                                                    let obj5 = { variant: "text-sm/medium", color: "text-strong", children: intl5.string(_modDef2632.WZ4cXA) };
                                                    let Text2 = tmp(5234).Text;
                                                    intl5 = tmp(1128).intl;
                                                    const tmp95 = closure_9(Text2, obj5);
                                                    cResult[92] = tmp95;
                                                    tmp93 = tmp95;
                                                  } else {
                                                    tmp93 = cResult[92];
                                                  }
                                                  if (cResult[93] !== tmp6) {
                                                    let ChevronSmallDownIcon;
                                                    const tmp97 = closure_9;
                                                    if (tmp6) {
                                                      ChevronSmallDownIcon = tmp(14885).ChevronSmallUpIcon;
                                                    } else {
                                                      ChevronSmallDownIcon = tmp(11077).ChevronSmallDownIcon;
                                                    }
                                                    let obj6 = { color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
                                                    const tmp97Result = tmp97(ChevronSmallDownIcon, obj6);
                                                    cResult[93] = tmp6;
                                                    cResult[94] = tmp97Result;
                                                    tmp96 = tmp97Result;
                                                  } else {
                                                    tmp96 = cResult[94];
                                                  }
                                                  if (cResult[95] === tmp4.dropdownRow) {
                                                    let tmp99;
                                                    if (cResult[96] === tmp96) {
                                                      tmp99 = cResult[97];
                                                    }
                                                    let key;
                                                    const tmp103 = cResult[98];
                                                    if (currentTier != null) {
                                                      key = currentTier.key;
                                                    }
                                                    if (tmp103 === key) {
                                                      if (cResult[99] === tmp6) {
                                                        if (cResult[100] === tmp4.badgeCopy) {
                                                          if (cResult[101] === tmp4.badgeItem) {
                                                            if (cResult[102] === tmp4.badgeItemActive) {
                                                              if (cResult[103] === tmp4.badgesRow) {
                                                                if (cResult[104] === tmp4.footerText) {
                                                                  let tmp106;
                                                                  if (cResult[105] === tiers) {
                                                                    tmp106 = cResult[106];
                                                                  }
                                                                  if (cResult[107] === tmp17) {
                                                                    if (cResult[108] === tmp19) {
                                                                      if (cResult[109] === tmp77) {
                                                                        if (cResult[110] === tmp85) {
                                                                          if (cResult[111] === tmp88) {
                                                                            if (cResult[112] === tmp99) {
                                                                              let tmp113;
                                                                              if (cResult[113] === tmp106) {
                                                                                tmp113 = cResult[114];
                                                                              }
                                                                              return tmp113;
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                  const obj7 = { style: tmp19, children: items1 };
                                                                  items1 = [tmp77, tmp85, tmp88, tmp99, tmp106];
                                                                  const tmp115 = closure_10(tmp17, obj7);
                                                                  cResult[107] = tmp17;
                                                                  cResult[108] = tmp19;
                                                                  cResult[109] = tmp77;
                                                                  cResult[110] = tmp85;
                                                                  cResult[111] = tmp88;
                                                                  cResult[112] = tmp99;
                                                                  cResult[113] = tmp106;
                                                                  cResult[114] = tmp115;
                                                                  tmp113 = tmp115;
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                    let tmp107 = tmp6;
                                                    if (tmp107) {
                                                      const obj8 = { children: items2 };
                                                      const obj9 = {
                                                        style: tmp4.badgesRow,
                                                        children: tiers.map((key) => {
                                                                                                              let format;
                                                                                                              let items1;
                                                                                                              let items2;
                                                                                                              let obj6;
                                                                                                              let qvx9E4;
                                                                                                              let tmpResult;
                                                                                                              const obj = GiftingBadgesUtils;
                                                                                                              const giftingBadgeTierIconUrl = obj.getGiftingBadgeTierIconUrl(key);
                                                                                                              const items = [badgeItem.badgeItem, ];
                                                                                                              let key1;
                                                                                                              key = key.key;
                                                                                                              if (currentTier != null) {
                                                                                                                key1 = currentTier.key;
                                                                                                              }
                                                                                                              const obj2 = { style: items, children: items1 };
                                                                                                              const tmp8 = key === key1 && badgeItem.badgeItemActive;
                                                                                                              items[1] = tmp8;
                                                                                                              let tmp9 = null != giftingBadgeTierIconUrl;
                                                                                                              if (tmp9) {
                                                                                                                const obj3 = { icon: giftingBadgeTierIconUrl, size: 36 };
                                                                                                                tmp9 = React4(GiftingBadgeIconDefault, obj3);
                                                                                                              }
                                                                                                              items1 = [tmp9, ];
                                                                                                              const obj4 = { style: badgeItem.badgeCopy, accessible: true, accessibilityLabel: tmpResult.getGiftingBadgeAccessibilityLabel(key), children: items2 };
                                                                                                              let str = key.name;
                                                                                                              tmpResult = GiftingBadgesUtils;
                                                                                                              const Text = tmp(5234).Text;
                                                                                                              if (str == null) {
                                                                                                                str = "";
                                                                                                              }
                                                                                                              items2 = [React4(Text, { variant: "text-sm/semibold", color: "text-strong", children: str }), ];
                                                                                                              const obj5 = { variant: "text-xs/normal", color: "text-subtle", children: format(qvx9E4, obj6) };
                                                                                                              const Text2 = tmp(5234).Text;
                                                                                                              const intl = tmp(1128).intl;
                                                                                                              format = intl.format;
                                                                                                              obj6 = { count: closure_8(key) };
                                                                                                              qvx9E4 = _modDef2632.qvx9E4;
                                                                                                              items2[1] = React4(Text2, obj5);
                                                                                                              items1[1] = authStore(metroRequire, obj4);
                                                                                                              return authStore(metroRequire, obj2, key.key);
                                                                                                            })
                                                      };
                                                      items2 = [closure_9(closure_6, obj9), ];
                                                      const obj10 = { style: tmp4.footerText, variant: "text-xs/normal", color: "text-muted", children: intl6.string(_modDef2632["4Yp0mI"]) };
                                                      const Text3 = tmp(5234).Text;
                                                      intl6 = tmp(1128).intl;
                                                      items2[1] = closure_9(Text3, obj10);
                                                      tmp107 = closure_10(closure_11, obj8);
                                                    }
                                                    let key1;
                                                    if (currentTier != null) {
                                                      key1 = currentTier.key;
                                                    }
                                                    cResult[98] = key1;
                                                    cResult[99] = tmp6;
                                                    cResult[100] = tmp4.badgeCopy;
                                                    cResult[101] = tmp4.badgeItem;
                                                    cResult[102] = tmp4.badgeItemActive;
                                                    cResult[103] = tmp4.badgesRow;
                                                    cResult[104] = tmp4.footerText;
                                                    cResult[105] = tiers;
                                                    cResult[106] = tmp107;
                                                    tmp106 = tmp107;
                                                  }
                                                  const obj11 = { style: tmp4.dropdownRow, onPress: tmp92, children: items3 };
                                                  items3 = [tmp93, tmp96];
                                                  const tmp102 = closure_10(closure_5, obj11);
                                                  cResult[95] = tmp4.dropdownRow;
                                                  cResult[96] = tmp96;
                                                  cResult[97] = tmp102;
                                                  tmp99 = tmp102;
                                                }
                                                const obj12 = {
                                                  variant: "primary",
                                                  icon: tmp80,
                                                  text: tmp81,
                                                  onPress() {
                                                                                                  const obj = utils_openGiftModal;
                                                                                                  const obj2 = { analyticsLocation, analyticsLocations };
                                                                                                  obj.openGiftModal(obj2);
                                                                                                },
                                                  grow: true
                                                };
                                                const tmp87 = closure_9(tmp(5244).Button, obj12);
                                                cResult[86] = analyticsLocation;
                                                cResult[87] = analyticsLocations;
                                                cResult[88] = tmp87;
                                                tmp85 = tmp87;
                                              }
                                            }
                                          }
                                          const obj13 = { style: tmp24, children: items4 };
                                          items4 = [tmp18, tmp74];
                                          const tmp79 = closure_10(tmp16, obj13);
                                          cResult[79] = tmp16;
                                          cResult[80] = tmp18;
                                          cResult[81] = tmp74;
                                          cResult[82] = tmp24;
                                          cResult[83] = tmp79;
                                          tmp77 = tmp79;
                                        }
                                      }
                                    }
                                    const obj14 = { style: tmp22, children: items5 };
                                    items5 = [tmp23, tmp71];
                                    const tmp76 = closure_10(tmp15, obj14);
                                    cResult[74] = tmp15;
                                    cResult[75] = tmp71;
                                    cResult[76] = tmp22;
                                    cResult[77] = tmp23;
                                    cResult[78] = tmp76;
                                    tmp74 = tmp76;
                                  }
                                }
                                const obj15 = { style: tmp21, children: tmp68 };
                                const tmp73 = closure_9(tmp14, obj15);
                                cResult[70] = tmp14;
                                cResult[71] = tmp68;
                                cResult[72] = tmp21;
                                cResult[73] = tmp73;
                                tmp71 = tmp73;
                              }
                            }
                          }
                          const obj16 = { variant: str, color: str2, children: tmp20 };
                          const tmp70 = closure_9(tmp13, obj16);
                          cResult[65] = tmp13;
                          cResult[66] = str;
                          cResult[67] = str2;
                          cResult[68] = tmp20;
                          cResult[69] = tmp70;
                          tmp68 = tmp70;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    let tmp26 = closure_8(currentTier);
    const tmp25 = closure_8;
    if (cResult[30] !== nextTier) {
      const tmp25Result = tmp25(nextTier);
      cResult[30] = nextTier;
      cResult[31] = tmp25Result;
      tmp27 = tmp25Result;
    } else {
      tmp27 = cResult[31];
    }
    if (cResult[32] === badgeProgress) {
      if (cResult[33] === currentTier) {
        let tmp29;
        let tmp31;
        let tmp33;
        let tmp37;
        let tmp46;
        if (cResult[34] === nextTier) {
          tmp29 = cResult[35];
        }
        if (cResult[36] !== currentTier) {
          const tmpResult4 = tmp(10502);
          let giftingBadgeTierIconUrl = tmpResult4.getGiftingBadgeTierIconUrl(currentTier);
          cResult[36] = currentTier;
          cResult[37] = giftingBadgeTierIconUrl;
          tmp31 = giftingBadgeTierIconUrl;
        } else {
          tmp31 = cResult[37];
        }
        if (cResult[38] !== nextTier) {
          const tmpResult5 = tmp(10502);
          const giftingBadgeTierIconUrl1 = tmpResult5.getGiftingBadgeTierIconUrl(nextTier);
          cResult[38] = nextTier;
          cResult[39] = giftingBadgeTierIconUrl1;
          tmp33 = giftingBadgeTierIconUrl1;
        } else {
          tmp33 = cResult[39];
        }
        if (null != nextTier) {
          if (cResult[40] === giftsRemaining) {
            let tmp42;
            let name;
            const tmp40 = cResult[41];
            if (nextTier != null) {
              name = nextTier.name;
            }
            if (tmp40 === name) {
              tmp42 = cResult[42];
            }
            tmp37 = tmp42;
          }
          const intl2 = tmp(1128).intl;
          const formatToPlainString2 = intl2.formatToPlainString;
          const obj17 = { count: giftsRemaining, nextTier: str4 };
          str4 = undefined;
          const XTX3OO = tmp7(2632).XTX3OO;
          if (nextTier != null) {
            str4 = nextTier.name;
          }
          if (str4 == null) {
            str4 = "";
          }
          const formatToPlainString2Result = formatToPlainString2(XTX3OO, obj17);
          cResult[40] = giftsRemaining;
          let name1;
          if (nextTier != null) {
            name1 = nextTier.name;
          }
          cResult[41] = name1;
          cResult[42] = formatToPlainString2Result;
          tmp42 = formatToPlainString2Result;
        } else {
          let name2;
          const tmp120 = cResult[43];
          if (currentTier != null) {
            name2 = currentTier.name;
          }
          if (tmp120 !== name2) {
            let intl = tmp(1128).intl;
            const formatToPlainString = intl.formatToPlainString;
            let str3;
            const LnsdbK = tmp7(2632).LnsdbK;
            if (currentTier != null) {
              str3 = currentTier.name;
            }
            if (str3 == null) {
              str3 = "";
            }
            const obj18 = { currentTier: str3 };
            const formatToPlainStringResult = formatToPlainString(LnsdbK, obj18);
            let name3;
            if (currentTier != null) {
              name3 = currentTier.name;
            }
            cResult[43] = name3;
            cResult[44] = formatToPlainStringResult;
            tmp37 = formatToPlainStringResult;
          } else {
            tmp37 = cResult[44];
          }
        }
        ({ wrapper, progressContainer } = tmp4);
        if (cResult[45] !== tmp31) {
          let tmp47 = null != tmp31;
          if (tmp47) {
            const obj19 = { icon: tmp31, size: 36, style: { margin: 4 } };
            tmp47 = closure_9(tmp7(10505), obj19);
          }
          cResult[45] = tmp31;
          cResult[46] = tmp47;
          tmp46 = tmp47;
        } else {
          tmp46 = cResult[46];
        }
        if (cResult[47] === tmp4.progressTitleText) {
          let tmp49;
          let tmp52;
          if (cResult[48] === tmp37) {
            tmp49 = cResult[49];
          }
          if (cResult[50] !== tmp33) {
            let tmp53 = null != tmp33;
            if (tmp53) {
              const obj20 = { icon: tmp33, size: 36, style: { margin: 4 } };
              tmp53 = closure_9(tmp7(10505), obj20);
            }
            cResult[50] = tmp33;
            cResult[51] = tmp53;
            tmp52 = tmp53;
          } else {
            tmp52 = cResult[51];
          }
          if (cResult[52] === tmp4.progressRow) {
            if (cResult[53] === tmp46) {
              if (cResult[54] === tmp49) {
                let tmp55;
                let tmp59;
                if (cResult[55] === tmp52) {
                  tmp55 = cResult[56];
                }
                const progressBarContainer = tmp4.progressBarContainer;
                const _HermesInternal = HermesInternal;
                const combined = "" + tmp29 + "%";
                if (cResult[57] !== combined) {
                  const obj21 = { width: combined };
                  cResult[57] = combined;
                  cResult[58] = obj21;
                  tmp59 = obj21;
                } else {
                  tmp59 = cResult[58];
                }
                if (cResult[59] === tmp4.progressBarFill) {
                  let tmp60;
                  if (cResult[60] === tmp59) {
                    tmp60 = cResult[61];
                  }
                  if (cResult[62] === tmp4.progressBarTrack) {
                    let tmp63;
                    if (cResult[63] === tmp60) {
                      tmp63 = cResult[64];
                    }
                    const progressLabels = tmp4.progressLabels;
                    let Text = tmp(5234).Text;
                    const intl3 = tmp(1128).intl;
                    let format = intl3.format;
                    let tmp66 = tmp26;
                    const iIpfQe = tmp7(2632).iIpfQe;
                    if (null != nextTier) {
                      tmp66 = tmp27;
                    }
                    const obj22 = { threshold: tmp66, count: tmp26 };
                    if (null != nextTier) {
                      tmp26 = badgeProgress;
                    }
                    const formatResult = format(iIpfQe, obj22);
                    cResult[4] = badgeProgress;
                    cResult[5] = currentTier;
                    cResult[6] = giftsRemaining;
                    cResult[7] = nextTier;
                    cResult[8] = tmp4.progressBarContainer;
                    cResult[9] = tmp4.progressBarFill;
                    cResult[10] = tmp4.progressBarTrack;
                    cResult[11] = tmp4.progressContainer;
                    cResult[12] = tmp4.progressLabels;
                    cResult[13] = tmp4.progressRow;
                    cResult[14] = tmp4.progressTitleText;
                    cResult[15] = tmp4.wrapper;
                    cResult[16] = Text;
                    cResult[17] = closure_6;
                    cResult[18] = closure_6;
                    cResult[19] = closure_6;
                    cResult[20] = closure_6;
                    cResult[21] = tmp55;
                    cResult[22] = wrapper;
                    cResult[23] = "text-xs/normal";
                    cResult[24] = "text-subtle";
                    cResult[25] = formatResult;
                    cResult[26] = progressLabels;
                    cResult[27] = progressBarContainer;
                    cResult[28] = tmp63;
                    cResult[29] = progressContainer;
                    tmp24 = progressContainer;
                    tmp23 = tmp63;
                    tmp22 = progressBarContainer;
                    tmp21 = progressLabels;
                    tmp20 = formatResult;
                    str2 = "text-subtle";
                    str = "text-xs/normal";
                    tmp19 = wrapper;
                    tmp18 = tmp55;
                    tmp17 = tmp45;
                    tmp16 = tmp45;
                    tmp15 = tmp45;
                    tmp14 = tmp45;
                    tmp13 = Text;
                  }
                  const obj23 = { style: tmp4.progressBarTrack, children: tmp60 };
                  const tmp65 = closure_9(closure_6, obj23);
                  cResult[62] = tmp4.progressBarTrack;
                  cResult[63] = tmp60;
                  cResult[64] = tmp65;
                  tmp63 = tmp65;
                }
                const obj24 = { style: items6 };
                items6 = [tmp4.progressBarFill, tmp59];
                const tmp62 = closure_9(closure_6, obj24);
                cResult[59] = tmp4.progressBarFill;
                cResult[60] = tmp59;
                cResult[61] = tmp62;
                tmp60 = tmp62;
              }
            }
          }
          const obj25 = { style: tmp4.progressRow, children: items7 };
          items7 = [tmp46, tmp49, tmp52];
          const tmp57 = closure_10(closure_6, obj25);
          cResult[52] = tmp4.progressRow;
          cResult[53] = tmp46;
          cResult[54] = tmp49;
          cResult[55] = tmp52;
          cResult[56] = tmp57;
          tmp55 = tmp57;
        }
        const obj26 = { style: tmp4.progressTitleText, variant: "text-md/medium", color: "text-strong", children: tmp37 };
        const tmp51 = closure_9(tmp(5234).Text, obj26);
        cResult[47] = tmp4.progressTitleText;
        cResult[48] = tmp37;
        cResult[49] = tmp51;
        tmp49 = tmp51;
      }
    }
    const tmpResult6 = tmp(10502);
    const giftingBadgeProgressPercent = tmpResult6.getGiftingBadgeProgressPercent(badgeProgress, currentTier, nextTier);
    cResult[32] = badgeProgress;
    cResult[33] = currentTier;
    cResult[34] = nextTier;
    cResult[35] = giftingBadgeProgressPercent;
    tmp29 = giftingBadgeProgressPercent;
  }
}) : (function UserSettingsGiftingBadgeProgress(analyticsLocation) {
  let GiftIcon;
  let Text;
  let _undefined;
  let badgeItem;
  let badgeProgress;
  let c2;
  let currentTier;
  let intl4;
  let intl5;
  let intl6;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let nextTier;
  let obj13;
  let obj17;
  let obj19;
  let str2;
  let tiers;
  let tmp11Result;
  let tmp3;
  let tmp9;
  analyticsLocation = analyticsLocation.analyticsLocation;
  dependencyMap = undefined;
  let analyticsLocations;
  currentTier = undefined;
  const tmp = closure_12();
  importDefault = tmp;
  const tmp2 = analyticsLocations(currentTier.useState(false), 2);
  [tmp3, c2] = tmp2;
  const tmp6 = useAnalyticsLocationsDefault;
  analyticsLocations = tmp6(AnalyticsLocationDefault.USER_SETTINGS_GIFT_INVENTORY).analyticsLocations;
  let obj = analyticsLocation(504);
  let items = [BadgeDirectoryStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let tiers;
    singleRequirementProgress = singleRequirementProgress.getSingleRequirementProgress(analyticsLocation(c2[11]).BadgeId.GIFTING);
    let num;
    if (singleRequirementProgress != null) {
      num = singleRequirementProgress.current;
    }
    if (num == null) {
      num = 0;
    }
    const obj2 = { badgeProgress: num, currentTier: singleRequirementProgress.getCurrentTier(analyticsLocation(c2[11]).BadgeId.GIFTING), nextTier: singleRequirementProgress.getNextTier(analyticsLocation(c2[11]).BadgeId.GIFTING), giftsRemaining: singleRequirementProgress.getRemainingToNextTier(analyticsLocation(c2[11]).BadgeId.GIFTING), tiers };
    const badgeById = obj.getBadgeById(tmp(tmp2[11]).BadgeId.GIFTING);
    tiers = undefined;
    if (badgeById != null) {
      tiers = badgeById.tiers;
    }
    if (tiers == null) {
      tiers = [];
    }
    return obj2;
  });
  ({ badgeProgress, currentTier } = stateFromStoresObject);
  ({ nextTier, tiers } = stateFromStoresObject);
  if (0 === badgeProgress) {
    let obj2 = { analyticsLocation };
    return closure_9(closure_13, obj2);
  } else {
    let formatToPlainString2Result;
    let ChevronSmallDownIcon;
    let tmp19 = closure_8(currentTier);
    const tmp25 = closure_8(nextTier);
    const tmp7Result = analyticsLocation(10502);
    const giftingBadgeProgressPercent = tmp7Result.getGiftingBadgeProgressPercent(badgeProgress, currentTier, nextTier);
    const tmp7Result3 = analyticsLocation(10502);
    let giftingBadgeTierIconUrl = tmp7Result3.getGiftingBadgeTierIconUrl(currentTier);
    const tmp7Result4 = analyticsLocation(10502);
    const giftingBadgeTierIconUrl1 = tmp7Result4.getGiftingBadgeTierIconUrl(nextTier);
    if (null != nextTier) {
      const intl2 = tmp7(1128).intl;
      const formatToPlainString2 = intl2.formatToPlainString;
      let obj3 = { count: tmp9, nextTier: str2 };
      str2 = undefined;
      const XTX3OO = tmp4(2632).XTX3OO;
      if (nextTier != null) {
        str2 = nextTier.name;
      }
      if (str2 == null) {
        str2 = "";
      }
      formatToPlainString2Result = formatToPlainString2(XTX3OO, obj3);
    } else {
      let intl = tmp7(1128).intl;
      const formatToPlainString = intl.formatToPlainString;
      let str;
      const LnsdbK = tmp4(2632).LnsdbK;
      if (currentTier != null) {
        str = currentTier.name;
      }
      if (str == null) {
        str = "";
      }
      let obj4 = { currentTier: str };
      formatToPlainString2Result = formatToPlainString(LnsdbK, obj4);
    }
    let obj5 = { style: tmp.wrapper, children: items5 };
    let obj6 = { style: tmp.progressContainer, children: items2 };
    let tmp13 = null != giftingBadgeTierIconUrl;
    const obj7 = { style: tmp.progressRow, children: items1 };
    if (tmp13) {
      const obj8 = { icon: giftingBadgeTierIconUrl, size: 36, style: { margin: 4 } };
      tmp13 = closure_9(tmp4(10505), obj8);
    }
    items1 = [tmp13, , ];
    const obj9 = { style: tmp.progressTitleText, variant: "text-md/medium", color: "text-strong", children: formatToPlainString2Result };
    items1[1] = closure_9(analyticsLocation(5234).Text, obj9);
    let tmp15Result = null != giftingBadgeTierIconUrl1;
    if (tmp15Result) {
      const obj10 = { icon: giftingBadgeTierIconUrl1, size: 36, style: { margin: 4 } };
      tmp15Result = tmp15(tmp4(10505), obj10);
    }
    items1[2] = tmp15Result;
    items2 = [tmp11(tmp12, obj7), ];
    const obj11 = { style: tmp.progressBarContainer, children: items4 };
    const obj12 = { style: tmp.progressBarTrack, children: closure_9(closure_6, obj13) };
    obj13 = { style: items3 };
    items3 = [tmp.progressBarFill, ];
    const _HermesInternal = HermesInternal;
    items3[1] = { width: "" + giftingBadgeProgressPercent + "%" };
    const obj14 = { width: "" + giftingBadgeProgressPercent + "%" };
    items4 = [closure_9(tmp12, obj12), ];
    const obj15 = { style: tmp.progressLabels, children: closure_9(Text, obj17) };
    Text = tmp7(5234).Text;
    const intl3 = tmp7(1128).intl;
    let format = intl3.format;
    let tmp18 = tmp19;
    const iIpfQe = tmp4(2632).iIpfQe;
    if (null != nextTier) {
      tmp18 = tmp25;
    }
    const obj16 = { threshold: tmp18, count: tmp19 };
    if (null != nextTier) {
      tmp19 = badgeProgress;
    }
    obj17 = { variant: "text-xs/normal", color: "text-subtle", children: format(iIpfQe, obj16) };
    items4[1] = closure_9(closure_6, obj15);
    items2[1] = closure_10(closure_6, obj11);
    items5 = [tmp11(tmp12, obj6), , , , ];
    const obj18 = {
      variant: "primary",
      icon: closure_9(GiftIcon, obj19),
      text: intl4.string(_modDef2632.DZnomS),
      onPress() {
          const obj = utils_openGiftModal;
          const obj2 = { analyticsLocation, analyticsLocations };
          obj.openGiftModal(obj2);
        },
      grow: true
    };
    const Button = tmp7(5244).Button;
    obj19 = { size: "sm", color: nativeDefault.unsafe_rawColors.WHITE };
    GiftIcon = tmp7(12886).GiftIcon;
    intl4 = tmp7(1128).intl;
    items5[1] = closure_9(Button, obj18);
    const obj20 = { style: tmp.divider };
    items5[2] = closure_9(closure_6, obj20);
    const obj21 = {
      style: tmp.dropdownRow,
      onPress() {
          return c2((arg0) => !arg0);
        },
      children: items6
    };
    const obj22 = { variant: "text-sm/medium", color: "text-strong", children: intl5.string(_modDef2632.WZ4cXA) };
    let Text2 = tmp7(5234).Text;
    intl5 = tmp7(1128).intl;
    items6 = [closure_9(Text2, obj22), ];
    const tmp20 = closure_5;
    if (tmp11Result) {
      ChevronSmallDownIcon = tmp7(14885).ChevronSmallUpIcon;
    } else {
      ChevronSmallDownIcon = tmp7(11077).ChevronSmallDownIcon;
    }
    const obj23 = { color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
    items6[1] = closure_9(ChevronSmallDownIcon, obj23);
    items5[3] = closure_10(tmp20, obj21);
    if (tmp11Result) {
      const obj24 = { children: items7 };
      const obj25 = {
        style: tmp.badgesRow,
        children: tiers.map((key) => {
              let format;
              let items1;
              let items2;
              let obj6;
              let qvx9E4;
              let tmpResult;
              const obj = GiftingBadgesUtils;
              const giftingBadgeTierIconUrl = obj.getGiftingBadgeTierIconUrl(key);
              const items = [badgeItem.badgeItem, ];
              let key1;
              key = key.key;
              if (currentTier != null) {
                key1 = currentTier.key;
              }
              const obj2 = { style: items, children: items1 };
              const tmp8 = key === key1 && badgeItem.badgeItemActive;
              items[1] = tmp8;
              let tmp9 = null != giftingBadgeTierIconUrl;
              if (tmp9) {
                const obj3 = { icon: giftingBadgeTierIconUrl, size: 36 };
                tmp9 = React4(GiftingBadgeIconDefault, obj3);
              }
              items1 = [tmp9, ];
              const obj4 = { style: badgeItem.badgeCopy, accessible: true, accessibilityLabel: tmpResult.getGiftingBadgeAccessibilityLabel(key), children: items2 };
              let str = key.name;
              tmpResult = GiftingBadgesUtils;
              const Text = tmp(5234).Text;
              if (str == null) {
                str = "";
              }
              items2 = [React4(Text, { variant: "text-sm/semibold", color: "text-strong", children: str }), ];
              const obj5 = { variant: "text-xs/normal", color: "text-subtle", children: format(qvx9E4, obj6) };
              const Text2 = tmp(5234).Text;
              const intl = tmp(1128).intl;
              format = intl.format;
              obj6 = { count: closure_8(key) };
              qvx9E4 = _modDef2632.qvx9E4;
              items2[1] = React4(Text2, obj5);
              items1[1] = authStore(metroRequire, obj4);
              return authStore(metroRequire, obj2, key.key);
            })
      };
      items7 = [closure_9(tmp12, obj25), ];
      const obj26 = { style: tmp.footerText, variant: "text-xs/normal", color: "text-muted", children: intl6.string(_modDef2632["4Yp0mI"]) };
      const Text3 = tmp7(5234).Text;
      intl6 = tmp7(1128).intl;
      items7[1] = closure_9(Text3, obj26);
      tmp11Result = closure_10(closure_11, obj24);
    }
    items5[4] = tmp11Result;
    return closure_10(closure_6, obj5);
  }
});
const result = size.fileFinishedImporting("modules/user_settings/premium/native/UserSettingsGiftingBadgeProgress.tsx");

export default tmp4;
