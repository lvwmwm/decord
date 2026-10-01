// Module ID: 13112
// Function ID: 13113
// Name: UserSettingsGiftingBadgeProgress
// Dependencies: [32, 19, 17, 7637, 21, 4836, 576, 10208, 6583, 6603, 504, 7629, 4832, 1115, 2583, 10214, 5281, 10496, 10124, 13113, 10615, 2]
// Exports: default

// Module 13112 (UserSettingsGiftingBadgeProgress)
import nativeDefault from "native" /* 576 */;
import _modDef2583 from "module_2583" /* 2583 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6583 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import BadgeDirectoryStore2 from "BadgeDirectoryStore" /* 7637 */;
import utils_openGiftModal from "utils/openGiftModal" /* 10124 */;
import GiftingBadgesUtils from "GiftingBadgesUtils" /* 10208 */;
import GiftingBadgeIconDefault from "GiftingBadgeIcon" /* 10214 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const BadgeDirectoryStore = BadgeDirectoryStore2;
let dependencyMap, importDefault, key, singleRequirementProgress;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let unpackModuleId;
function GiftingBadgeIntro(analyticsLocation) {
  let GiftIcon;
  let Text;
  let closure_2;
  let intl;
  let intl2;
  let introGridItem;
  let items1;
  let obj5;
  let obj8;
  analyticsLocation = analyticsLocation.analyticsLocation;
  const tmp = closure_13();
  importDefault = tmp;
  let obj = analyticsLocation(10208);
  dependencyMap = obj.useIsGiftingBadgeComplexArtEnabled(UserSettingsGiftingBadgeProgress_str);
  const tmp5 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp5(AnalyticsLocationDefault.USER_SETTINGS_GIFT_INVENTORY).analyticsLocations;
  let obj2 = analyticsLocation(504);
  let items = [BadgeDirectoryStore];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    badgeById = badgeById.getBadgeById(analyticsLocation(closure_2[11]).BadgeId.GIFTING);
    let tiers;
    if (badgeById != null) {
      tiers = badgeById.tiers;
    }
    return tiers;
  });
  let tmp6 = null;
  if (null != stateFromStores) {
    let tmp7 = closure_10;
    let obj3 = { style: tmp.wrapper, children: items1 };
    let obj4 = { style: tmp.introContent, children: closure_9(Text, obj5) };
    obj5 = { variant: "text-xs/normal", color: "text-muted", children: intl.string(tmp4(2583)["4Yp0mI"]) };
    Text = tmp2(4832).Text;
    intl = tmp2(1115).intl;
    items1 = [closure_9(closure_6, obj4), , ];
    let obj6 = {
      style: tmp.introGrid,
      children: stateFromStores.map((name) => {
          let format;
          let items;
          let items1;
          let obj6;
          let qvx9E4;
          let tmpResult;
          const obj = GiftingBadgesUtils;
          const giftingBadgeTierIconUrl = obj.getGiftingBadgeTierIconUrl(name, closure_2);
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
          const Text = tmp(4832).Text;
          if (str == null) {
            str = "";
          }
          items1 = [React4(Text, { variant: "text-sm/semibold", color: "text-subtle", children: str }), ];
          const obj5 = { variant: "text-xs/normal", color: "text-muted", children: format(qvx9E4, obj6) };
          const Text2 = tmp(4832).Text;
          const intl = tmp(1115).intl;
          format = intl.format;
          obj6 = { count: closure_8(name) };
          qvx9E4 = _modDef2583.qvx9E4;
          items1[1] = React4(Text2, obj5);
          items[1] = authStore(metroRequire, obj4);
          return authStore(metroRequire, obj2, name.key);
        })
    };
    items1[1] = closure_9(closure_6, obj6);
    const obj7 = {
      variant: "primary",
      icon: closure_9(GiftIcon, obj8),
      text: intl2.string(_modDef2583.DZnomS),
      onPress() {
          const obj = utils_openGiftModal;
          const obj2 = { analyticsLocation, analyticsLocations };
          obj.openGiftModal(obj2);
        },
      grow: true
    };
    const Button = tmp2(5281).Button;
    obj8 = { size: "sm", color: nativeDefault.unsafe_rawColors.WHITE };
    GiftIcon = tmp2(10496).GiftIcon;
    intl2 = tmp2(1115).intl;
    items1[2] = closure_9(Button, obj7);
    tmp6 = closure_10(closure_6, obj3);
  }
  return tmp6;
}
({ Pressable: hasOwnProperty, View: metroRequire } = react_native);
let closure_8 = BadgeDirectoryStore2.getSingleRequirementThreshold;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
const UserSettingsGiftingBadgeProgress_str = "UserSettingsGiftingBadgeProgress";
let closure_13 = createStyles.createStyles(() => {
  const obj = { wrapper: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 }, progressContainer: { gap: nativeDefault.space.PX_8 }, progressRow: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 }, progressTitleText: { flex: 1 }, progressBarContainer: { paddingHorizontal: nativeDefault.space.PX_8 }, progressBarTrack: { height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" }, progressBarFill: { height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.unsafe_rawColors.BRAND_500 }, progressLabels: { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", minHeight: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_4 }, divider: { height: 1, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL }, dropdownRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, badgesRow: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", paddingVertical: nativeDefault.space.PX_4 }, badgeItem: { width: "33.33%", alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 }, badgeItemActive: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED }, badgeCopy: { alignItems: "center", gap: 2 }, footerText: { textAlign: "center", marginBottom: nativeDefault.space.PX_16 }, introContent: { paddingHorizontal: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4 }, introGrid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16 }, introGridItem: { width: "33.33%", alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 } };
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
  ({ width: "33.33%", alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 });
  return obj;
});
const result = size.fileFinishedImporting("modules/user_settings/premium/native/UserSettingsGiftingBadgeProgress.tsx");

export default function UserSettingsGiftingBadgeProgress(analyticsLocation) {
  let GiftIcon;
  let Text;
  let _undefined;
  let badgeItem;
  let badgeProgress;
  let c2;
  let currentTier;
  let giftsRemaining;
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
  let obj14;
  let obj18;
  let obj20;
  let str2;
  let tiers;
  let tmp11Result;
  let tmp3;
  analyticsLocation = analyticsLocation.analyticsLocation;
  dependencyMap = undefined;
  let analyticsLocations;
  currentTier = undefined;
  const tmp = closure_13();
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
  ({ nextTier, tiers, giftsRemaining } = stateFromStoresObject);
  let obj2 = analyticsLocation(10208);
  const isGiftingBadgeComplexArtEnabled = obj2.useIsGiftingBadgeComplexArtEnabled(UserSettingsGiftingBadgeProgress_str);
  if (0 === badgeProgress) {
    let obj3 = { analyticsLocation };
    return closure_9(GiftingBadgeIntro, obj3);
  } else {
    let formatToPlainString2Result;
    let ChevronSmallDownIcon;
    let tmp19 = closure_8(currentTier);
    const tmp25 = closure_8(nextTier);
    const tmp7Result = analyticsLocation(10208);
    const giftingBadgeProgressPercent = tmp7Result.getGiftingBadgeProgressPercent(badgeProgress, currentTier, nextTier);
    const tmp7Result3 = analyticsLocation(10208);
    let giftingBadgeTierIconUrl = tmp7Result3.getGiftingBadgeTierIconUrl(currentTier, isGiftingBadgeComplexArtEnabled);
    const tmp7Result4 = analyticsLocation(10208);
    const giftingBadgeTierIconUrl1 = tmp7Result4.getGiftingBadgeTierIconUrl(nextTier, isGiftingBadgeComplexArtEnabled);
    if (null != nextTier) {
      const intl2 = tmp7(1115).intl;
      const formatToPlainString2 = intl2.formatToPlainString;
      let obj4 = { count: giftsRemaining, nextTier: str2 };
      str2 = undefined;
      const XTX3OO = tmp4(2583).XTX3OO;
      if (nextTier != null) {
        str2 = nextTier.name;
      }
      if (str2 == null) {
        str2 = "";
      }
      formatToPlainString2Result = formatToPlainString2(XTX3OO, obj4);
    } else {
      let intl = tmp7(1115).intl;
      const formatToPlainString = intl.formatToPlainString;
      let str;
      const LnsdbK = tmp4(2583).LnsdbK;
      if (currentTier != null) {
        str = currentTier.name;
      }
      if (str == null) {
        str = "";
      }
      let obj5 = { currentTier: str };
      formatToPlainString2Result = formatToPlainString(LnsdbK, obj5);
    }
    let obj6 = { style: tmp.wrapper, children: items5 };
    let tmp13 = null != giftingBadgeTierIconUrl;
    const obj7 = { style: tmp.progressContainer, children: items2 };
    const obj8 = { style: tmp.progressRow, children: items1 };
    if (tmp13) {
      const obj9 = { icon: giftingBadgeTierIconUrl, size: 36, style: { margin: 4 } };
      tmp13 = closure_9(tmp4(10214), obj9);
    }
    items1 = [tmp13, , ];
    const obj10 = { style: tmp.progressTitleText, variant: "text-md/medium", color: "text-strong", children: formatToPlainString2Result };
    items1[1] = closure_9(analyticsLocation(4832).Text, obj10);
    let tmp15Result = null != giftingBadgeTierIconUrl1;
    if (tmp15Result) {
      const obj11 = { icon: giftingBadgeTierIconUrl1, size: 36, style: { margin: 4 } };
      tmp15Result = tmp15(tmp4(10214), obj11);
    }
    items1[2] = tmp15Result;
    items2 = [tmp11(tmp12, obj8), ];
    const obj12 = { style: tmp.progressBarContainer, children: items4 };
    const obj13 = { style: tmp.progressBarTrack, children: closure_9(closure_6, obj14) };
    obj14 = { style: items3 };
    items3 = [tmp.progressBarFill, ];
    const _HermesInternal = HermesInternal;
    items3[1] = { width: "" + giftingBadgeProgressPercent + "%" };
    const obj15 = { width: "" + giftingBadgeProgressPercent + "%" };
    items4 = [closure_9(tmp12, obj13), ];
    const obj16 = { style: tmp.progressLabels, children: closure_9(Text, obj18) };
    Text = tmp7(4832).Text;
    const intl3 = tmp7(1115).intl;
    let format = intl3.format;
    let tmp18 = tmp19;
    const iIpfQe = tmp4(2583).iIpfQe;
    if (null != nextTier) {
      tmp18 = tmp25;
    }
    const obj17 = { threshold: tmp18, count: tmp19 };
    if (null != nextTier) {
      tmp19 = badgeProgress;
    }
    obj18 = { variant: "text-xs/normal", color: "text-subtle", children: format(iIpfQe, obj17) };
    items4[1] = closure_9(closure_6, obj16);
    items2[1] = closure_10(closure_6, obj12);
    items5 = [tmp11(tmp12, obj7), , , , ];
    const obj19 = {
      variant: "primary",
      icon: closure_9(GiftIcon, obj20),
      text: intl4.string(_modDef2583.DZnomS),
      onPress() {
          const obj = utils_openGiftModal;
          const obj2 = { analyticsLocation, analyticsLocations };
          obj.openGiftModal(obj2);
        },
      grow: true
    };
    const Button = tmp7(5281).Button;
    obj20 = { size: "sm", color: nativeDefault.unsafe_rawColors.WHITE };
    GiftIcon = tmp7(10496).GiftIcon;
    intl4 = tmp7(1115).intl;
    items5[1] = closure_9(Button, obj19);
    const obj21 = { style: tmp.divider };
    items5[2] = closure_9(closure_6, obj21);
    const obj22 = {
      style: tmp.dropdownRow,
      onPress() {
          return c2((arg0) => !arg0);
        },
      children: items6
    };
    const obj23 = { variant: "text-sm/medium", color: "text-strong", children: intl5.string(_modDef2583.WZ4cXA) };
    let Text2 = tmp7(4832).Text;
    intl5 = tmp7(1115).intl;
    items6 = [closure_9(Text2, obj23), ];
    const tmp20 = isGiftingBadgeComplexArtEnabled;
    if (tmp11Result) {
      ChevronSmallDownIcon = tmp7(13113).ChevronSmallUpIcon;
    } else {
      ChevronSmallDownIcon = tmp7(10615).ChevronSmallDownIcon;
    }
    const obj24 = { color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
    items6[1] = closure_9(ChevronSmallDownIcon, obj24);
    items5[3] = closure_10(tmp20, obj22);
    if (tmp11Result) {
      const obj25 = { children: items7 };
      const obj26 = {
        style: tmp.badgesRow,
        children: tiers.map((key) => {
              let format;
              let items1;
              let items2;
              let obj6;
              let qvx9E4;
              let tmpResult;
              const obj = GiftingBadgesUtils;
              const giftingBadgeTierIconUrl = obj.getGiftingBadgeTierIconUrl(key, isGiftingBadgeComplexArtEnabled);
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
              const Text = tmp(4832).Text;
              if (str == null) {
                str = "";
              }
              items2 = [React4(Text, { variant: "text-sm/semibold", color: "text-strong", children: str }), ];
              const obj5 = { variant: "text-xs/normal", color: "text-subtle", children: format(qvx9E4, obj6) };
              const Text2 = tmp(4832).Text;
              const intl = tmp(1115).intl;
              format = intl.format;
              obj6 = { count: closure_8(key) };
              qvx9E4 = _modDef2583.qvx9E4;
              items2[1] = React4(Text2, obj5);
              items1[1] = authStore(metroRequire, obj4);
              return authStore(metroRequire, obj2, key.key);
            })
      };
      items7 = [closure_9(tmp12, obj26), ];
      const obj27 = { style: tmp.footerText, variant: "text-xs/normal", color: "text-muted", children: intl6.string(_modDef2583["4Yp0mI"]) };
      const Text3 = tmp7(4832).Text;
      intl6 = tmp7(1115).intl;
      items7[1] = closure_9(Text3, obj27);
      tmp11Result = closure_10(closure_11, obj25);
    }
    items5[4] = tmp11Result;
    return closure_10(closure_6, obj6);
  }
};
