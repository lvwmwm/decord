// Module ID: 15457
// Function ID: 15458
// Name: UserSettingsGiftingBadgeProgress
// Dependencies: [32, 19, 17, 8763, 21, 5014, 575, 7326, 7351, 504, 8755, 5624, 1113, 2634, 10616, 10619, 5634, 13350, 10558, 15458, 11413, 2]
// Exports: default

// Module 15457 (UserSettingsGiftingBadgeProgress)
import nativeDefault from "native" /* 575 */;
import _modDef2634 from "module_2634" /* 2634 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7326 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7351 */;
import BadgeDirectoryStore2 from "BadgeDirectoryStore" /* 8763 */;
import utils_openGiftModal from "utils/openGiftModal" /* 10558 */;
import GiftingBadgesUtils from "GiftingBadgesUtils" /* 10616 */;
import GiftingBadgeIconDefault from "GiftingBadgeIcon" /* 10619 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
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
  let obj = analyticsLocation(analyticsLocations[9]);
  let items = [BadgeDirectoryStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    badgeById = badgeById.getBadgeById(analyticsLocation(analyticsLocations[10]).BadgeId.GIFTING);
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
    obj4 = { variant: "text-xs/normal", color: "text-muted", children: intl.string(tmp2(analyticsLocations[13])["4Yp0mI"]) };
    Text = tmp5(tmp3[11]).Text;
    intl = tmp5(tmp3[12]).intl;
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
          const Text = tmp(5624).Text;
          if (str == null) {
            str = "";
          }
          items1 = [React4(Text, { variant: "text-sm/semibold", color: "text-subtle", children: str }), ];
          const obj5 = { variant: "text-xs/normal", color: "text-muted", children: format(qvx9E4, obj6) };
          const Text2 = tmp(5624).Text;
          const intl = tmp(1113).intl;
          format = intl.format;
          obj6 = { count: closure_8(name) };
          qvx9E4 = _modDef2634.qvx9E4;
          items1[1] = React4(Text2, obj5);
          items[1] = authStore(metroRequire, obj4);
          return authStore(metroRequire, obj2, name.key);
        })
    };
    items1[1] = closure_9(closure_6, obj5);
    let obj6 = {
      variant: "primary",
      icon: closure_9(GiftIcon, obj7),
      text: intl2.string(tmp2(analyticsLocations[13]).DZnomS),
      onPress() {
          const obj = utils_openGiftModal;
          const obj2 = { analyticsLocation, analyticsLocations };
          obj.openGiftModal(obj2);
        },
      grow: true
    };
    const Button = tmp5(tmp3[16]).Button;
    obj7 = { size: "sm", color: require("native").unsafe_rawColors.WHITE };
    GiftIcon = tmp5(tmp3[17]).GiftIcon;
    intl2 = tmp5(tmp3[12]).intl;
    items1[2] = closure_9(Button, obj6);
    tmp6 = closure_10(closure_6, obj2);
  }
  return tmp6;
}
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
const result = size.fileFinishedImporting("modules/user_settings/premium/native/UserSettingsGiftingBadgeProgress.tsx");

export default function UserSettingsGiftingBadgeProgress(analyticsLocation) {
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
    singleRequirementProgress = singleRequirementProgress.getSingleRequirementProgress(analyticsLocation(c2[10]).BadgeId.GIFTING);
    let num;
    if (singleRequirementProgress != null) {
      num = singleRequirementProgress.current;
    }
    if (num == null) {
      num = 0;
    }
    const obj2 = { badgeProgress: num, currentTier: singleRequirementProgress.getCurrentTier(analyticsLocation(c2[10]).BadgeId.GIFTING), nextTier: singleRequirementProgress.getNextTier(analyticsLocation(c2[10]).BadgeId.GIFTING), giftsRemaining: singleRequirementProgress.getRemainingToNextTier(analyticsLocation(c2[10]).BadgeId.GIFTING), tiers };
    const badgeById = obj.getBadgeById(tmp(tmp2[10]).BadgeId.GIFTING);
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
    return closure_9(GiftingBadgeIntro, obj2);
  } else {
    let formatToPlainString2Result;
    let ChevronSmallDownIcon;
    let tmp19 = closure_8(currentTier);
    const tmp25 = closure_8(nextTier);
    const tmp7Result = analyticsLocation(10616);
    const giftingBadgeProgressPercent = tmp7Result.getGiftingBadgeProgressPercent(badgeProgress, currentTier, nextTier);
    const tmp7Result3 = analyticsLocation(10616);
    let giftingBadgeTierIconUrl = tmp7Result3.getGiftingBadgeTierIconUrl(currentTier);
    const tmp7Result4 = analyticsLocation(10616);
    const giftingBadgeTierIconUrl1 = tmp7Result4.getGiftingBadgeTierIconUrl(nextTier);
    if (null != nextTier) {
      const intl2 = tmp7(1113).intl;
      const formatToPlainString2 = intl2.formatToPlainString;
      let obj3 = { count: tmp9, nextTier: str2 };
      str2 = undefined;
      const XTX3OO = tmp4(2634).XTX3OO;
      if (nextTier != null) {
        str2 = nextTier.name;
      }
      if (str2 == null) {
        str2 = "";
      }
      formatToPlainString2Result = formatToPlainString2(XTX3OO, obj3);
    } else {
      let intl = tmp7(1113).intl;
      const formatToPlainString = intl.formatToPlainString;
      let str;
      const LnsdbK = tmp4(2634).LnsdbK;
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
      tmp13 = closure_9(tmp4(10619), obj8);
    }
    items1 = [tmp13, , ];
    const obj9 = { style: tmp.progressTitleText, variant: "text-md/medium", color: "text-strong", children: formatToPlainString2Result };
    items1[1] = closure_9(analyticsLocation(5624).Text, obj9);
    let tmp15Result = null != giftingBadgeTierIconUrl1;
    if (tmp15Result) {
      const obj10 = { icon: giftingBadgeTierIconUrl1, size: 36, style: { margin: 4 } };
      tmp15Result = tmp15(tmp4(10619), obj10);
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
    Text = tmp7(5624).Text;
    const intl3 = tmp7(1113).intl;
    let format = intl3.format;
    let tmp18 = tmp19;
    const iIpfQe = tmp4(2634).iIpfQe;
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
      text: intl4.string(_modDef2634.DZnomS),
      onPress() {
          const obj = utils_openGiftModal;
          const obj2 = { analyticsLocation, analyticsLocations };
          obj.openGiftModal(obj2);
        },
      grow: true
    };
    const Button = tmp7(5634).Button;
    obj19 = { size: "sm", color: nativeDefault.unsafe_rawColors.WHITE };
    GiftIcon = tmp7(13350).GiftIcon;
    intl4 = tmp7(1113).intl;
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
    const obj22 = { variant: "text-sm/medium", color: "text-strong", children: intl5.string(_modDef2634.WZ4cXA) };
    let Text2 = tmp7(5624).Text;
    intl5 = tmp7(1113).intl;
    items6 = [closure_9(Text2, obj22), ];
    const tmp20 = closure_5;
    if (tmp11Result) {
      ChevronSmallDownIcon = tmp7(15458).ChevronSmallUpIcon;
    } else {
      ChevronSmallDownIcon = tmp7(11413).ChevronSmallDownIcon;
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
              const Text = tmp(5624).Text;
              if (str == null) {
                str = "";
              }
              items2 = [React4(Text, { variant: "text-sm/semibold", color: "text-strong", children: str }), ];
              const obj5 = { variant: "text-xs/normal", color: "text-subtle", children: format(qvx9E4, obj6) };
              const Text2 = tmp(5624).Text;
              const intl = tmp(1113).intl;
              format = intl.format;
              obj6 = { count: closure_8(key) };
              qvx9E4 = _modDef2634.qvx9E4;
              items2[1] = React4(Text2, obj5);
              items1[1] = authStore(metroRequire, obj4);
              return authStore(metroRequire, obj2, key.key);
            })
      };
      items7 = [closure_9(tmp12, obj25), ];
      const obj26 = { style: tmp.footerText, variant: "text-xs/normal", color: "text-muted", children: intl6.string(_modDef2634["4Yp0mI"]) };
      const Text3 = tmp7(5624).Text;
      intl6 = tmp7(1113).intl;
      items7[1] = closure_9(Text3, obj26);
      tmp11Result = closure_10(closure_11, obj24);
    }
    items5[4] = tmp11Result;
    return closure_10(closure_6, obj5);
  }
};
