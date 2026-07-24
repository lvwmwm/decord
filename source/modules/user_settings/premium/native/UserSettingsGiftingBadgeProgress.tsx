// Module ID: 12556
// Function ID: 97183
// Name: GiftingBadgeIntro
// Dependencies: [57, 31, 27, 8312, 33, 4130, 689, 1324, 5462, 5482, 566, 8309, 4126, 1212, 2294, 9720, 4543, 8812, 9713, 12557, 12559, 8570, 2]
// Exports: default

// Module 12556 (GiftingBadgeIntro)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { getSingleRequirementThreshold as closure_8 } from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_5;
let closure_6;
let closure_9;
const require = arg1;
function GiftingBadgeIntro(analyticsLocation) {
  analyticsLocation = analyticsLocation.analyticsLocation;
  const tmp = callback4(importDefault(analyticsLocations[7])("UserSettingsGiftingBadgeProgress"));
  importDefault = tmp;
  analyticsLocations = importDefault(analyticsLocations[8])(importDefault(analyticsLocations[9]).USER_SETTINGS_GIFT_INVENTORY).analyticsLocations;
  let obj = analyticsLocation(analyticsLocations[10]);
  let items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tiers;
    const badgeById = outer1_7.getBadgeById(analyticsLocation(analyticsLocations[11]).BadgeId.GIFTING);
    if (null != badgeById) {
      tiers = badgeById.tiers;
    }
    return tiers;
  });
  let tmp3 = null;
  if (null != stateFromStores) {
    obj = { style: tmp.wrapper };
    obj = { style: tmp.introContent };
    let obj1 = { variant: "text-xs/normal", color: "text-muted" };
    let intl = analyticsLocation(analyticsLocations[13]).intl;
    obj1.children = intl.string(importDefault(analyticsLocations[14])["4Yp0mI"]);
    obj.children = callback2(analyticsLocation(analyticsLocations[12]).Text, obj1);
    let items1 = [callback2(closure_6, obj), , ];
    let obj2 = {
      style: tmp.introGrid,
      children: stateFromStores.map((simple_icon_url) => {
          let obj = { style: tmp.introGridItem };
          let tmp3 = null != simple_icon_url.simple_icon_url;
          if (tmp3) {
            obj = { icon: simple_icon_url.simple_icon_url, size: 44 };
            tmp3 = outer1_9(tmp(analyticsLocations[15]), obj);
          }
          const items = [tmp3, ];
          obj = { style: tmp.badgeCopy };
          const obj1 = { variant: "text-sm/semibold", color: "text-subtle" };
          const name = simple_icon_url.name;
          let str = "";
          if (null != name) {
            str = name;
          }
          obj1.children = str;
          const items1 = [outer1_9(analyticsLocation(analyticsLocations[12]).Text, obj1), ];
          const obj2 = { variant: "text-xs/normal", color: "text-muted" };
          const intl = analyticsLocation(analyticsLocations[13]).intl;
          const obj3 = { count: outer1_8(simple_icon_url) };
          obj2.children = intl.format(outer1_10(analyticsLocations[14]).qvx9E4, obj3);
          items1[1] = outer1_9(analyticsLocation(analyticsLocations[12]).Text, obj2);
          obj.children = items1;
          items[1] = outer1_10(outer1_6, obj);
          obj.children = items;
          return outer1_10(outer1_6, obj, simple_icon_url.key);
        })
    };
    items1[1] = callback2(closure_6, obj2);
    let obj3 = { variant: "primary" };
    const obj4 = { size: "sm", color: importDefault(analyticsLocations[6]).unsafe_rawColors.WHITE };
    obj3.icon = callback2(analyticsLocation(analyticsLocations[17]).GiftIcon, obj4);
    const intl2 = analyticsLocation(analyticsLocations[13]).intl;
    obj3.text = intl2.string(importDefault(analyticsLocations[14]).DZnomS);
    obj3.onPress = function onPress() {
      let obj = analyticsLocation(analyticsLocations[18]);
      obj = { analyticsLocation, analyticsLocations };
      obj.openGiftModal(obj);
    };
    obj3.grow = true;
    items1[2] = callback2(analyticsLocation(analyticsLocations[16]).Button, obj3);
    obj.children = items1;
    tmp3 = callback3(closure_6, obj);
  }
  return tmp3;
}
({ Pressable: closure_5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = jsxProd);
let closure_12 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { backgroundColor: importDefault(689).colors.BACKGROUND_MOD_MUTED };
  let num = 0;
  if (arg0) {
    num = importDefault(689).radii.md;
  }
  obj.borderRadius = num;
  obj.padding = importDefault(689).space.PX_16;
  obj.gap = importDefault(689).space.PX_16;
  obj.wrapper = obj;
  obj = { gap: importDefault(689).space.PX_8 };
  obj.progressContainer = obj;
  const obj1 = { flexDirection: "row", alignItems: "center", gap: importDefault(689).space.PX_4 };
  obj.progressRow = obj1;
  obj.progressTitleText = { flex: 1 };
  obj.progressBarContainer = { paddingHorizontal: importDefault(689).space.PX_8 };
  const obj2 = { paddingHorizontal: importDefault(689).space.PX_8 };
  obj.progressBarTrack = { height: 6, borderRadius: importDefault(689).radii.round, backgroundColor: importDefault(689).colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" };
  const obj3 = { height: 6, borderRadius: importDefault(689).radii.round, backgroundColor: importDefault(689).colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" };
  obj.progressBarFill = { height: 6, borderRadius: importDefault(689).radii.round, backgroundColor: importDefault(689).unsafe_rawColors.BRAND_500 };
  const obj5 = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", minHeight: importDefault(689).space.PX_16, marginTop: importDefault(689).space.PX_4 };
  obj.progressLabels = obj5;
  const obj4 = { height: 6, borderRadius: importDefault(689).radii.round, backgroundColor: importDefault(689).unsafe_rawColors.BRAND_500 };
  obj.divider = { height: 1, backgroundColor: importDefault(689).colors.BACKGROUND_MOD_NORMAL };
  obj.dropdownRow = { flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
  const obj7 = { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", paddingVertical: importDefault(689).space.PX_4 };
  obj.badgesRow = obj7;
  const obj8 = { width: "33.33%", alignItems: "center", justifyContent: "center", padding: importDefault(689).space.PX_8, gap: importDefault(689).space.PX_8 };
  obj.badgeItem = obj8;
  const obj6 = { height: 1, backgroundColor: importDefault(689).colors.BACKGROUND_MOD_NORMAL };
  obj.badgeItemActive = { backgroundColor: importDefault(689).colors.BACKGROUND_MOD_MUTED, borderRadius: importDefault(689).radii.md, borderWidth: 1, borderColor: importDefault(689).colors.BORDER_MUTED };
  obj.badgeCopy = { alignItems: "center", gap: 2 };
  const obj9 = { backgroundColor: importDefault(689).colors.BACKGROUND_MOD_MUTED, borderRadius: importDefault(689).radii.md, borderWidth: 1, borderColor: importDefault(689).colors.BORDER_MUTED };
  obj.footerText = { textAlign: "center", marginBottom: importDefault(689).space.PX_16 };
  const obj10 = { textAlign: "center", marginBottom: importDefault(689).space.PX_16 };
  obj.introContent = { paddingHorizontal: importDefault(689).space.PX_8, gap: importDefault(689).space.PX_4 };
  const obj12 = { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", paddingVertical: importDefault(689).space.PX_4, paddingHorizontal: importDefault(689).space.PX_16 };
  obj.introGrid = obj12;
  const obj13 = { width: "33.33%", alignItems: "center", justifyContent: "center", padding: importDefault(689).space.PX_8, gap: importDefault(689).space.PX_8 };
  obj.introGridItem = obj13;
  return obj;
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/premium/native/UserSettingsGiftingBadgeProgress.tsx");

export default function UserSettingsGiftingBadgeProgress(analyticsLocation) {
  let badgeProgress;
  let currentTier;
  let nextTier;
  let tiers;
  analyticsLocation = analyticsLocation.analyticsLocation;
  const tmp = callback4(importDefault(1324)("UserSettingsGiftingBadgeProgress"));
  importDefault = tmp;
  const tmp2 = analyticsLocations(currentTier.useState(false), 2);
  let first = tmp2[0];
  const dependencyMap = tmp2[1];
  analyticsLocations = importDefault(5462)(importDefault(5482).USER_SETTINGS_GIFT_INVENTORY).analyticsLocations;
  let obj = analyticsLocation(566);
  let items = [_isNativeReflectConstruct];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = {};
    const singleRequirementProgress = outer1_7.getSingleRequirementProgress(analyticsLocation(8309).BadgeId.GIFTING);
    let current;
    if (null != singleRequirementProgress) {
      current = singleRequirementProgress.current;
    }
    let num = 0;
    if (null != current) {
      num = current;
    }
    obj.badgeProgress = num;
    obj.currentTier = outer1_7.getCurrentTier(analyticsLocation(8309).BadgeId.GIFTING);
    obj.nextTier = outer1_7.getNextTier(analyticsLocation(8309).BadgeId.GIFTING);
    obj.giftsRemaining = outer1_7.getRemainingToNextTier(analyticsLocation(8309).BadgeId.GIFTING);
    const badgeById = outer1_7.getBadgeById(analyticsLocation(8309).BadgeId.GIFTING);
    let tiers;
    if (null != badgeById) {
      tiers = badgeById.tiers;
    }
    if (null == tiers) {
      tiers = [];
    }
    obj.tiers = tiers;
    return obj;
  });
  ({ badgeProgress, currentTier } = stateFromStoresObject);
  ({ nextTier, tiers } = stateFromStoresObject);
  if (0 === badgeProgress) {
    obj = { analyticsLocation };
    return callback2(GiftingBadgeIntro, obj);
  } else {
    let tmp49 = callback(currentTier);
    const tmp77 = callback(nextTier);
    const giftingBadgeProgressPercent = analyticsLocation(12557).getGiftingBadgeProgressPercent(badgeProgress, currentTier, nextTier);
    if (null != nextTier) {
      const intl2 = analyticsLocation(1212).intl;
      obj = { count: tmp6 };
      let name;
      if (null != nextTier) {
        name = nextTier.name;
      }
      let str2 = "";
      if (null != name) {
        str2 = name;
      }
      obj.nextTier = str2;
      let formatToPlainStringResult = intl2.formatToPlainString(importDefault(2294).XTX3OO, obj);
    } else {
      let intl = analyticsLocation(1212).intl;
      let obj1 = {};
      let name1;
      if (null != currentTier) {
        name1 = currentTier.name;
      }
      let str = "";
      if (null != name1) {
        str = name1;
      }
      obj1.currentTier = str;
      formatToPlainStringResult = intl.formatToPlainString(importDefault(2294).LnsdbK, obj1);
    }
    let obj2 = { style: tmp.wrapper };
    let obj3 = { style: tmp.progressContainer };
    const obj4 = { style: tmp.progressRow };
    let simple_icon_url;
    if (null != currentTier) {
      simple_icon_url = currentTier.simple_icon_url;
    }
    let tmp23 = null != simple_icon_url;
    if (tmp23) {
      const obj5 = { icon: currentTier.simple_icon_url, size: 36 };
      const obj6 = { margin: 4 };
      obj5.style = obj6;
      tmp23 = callback2(importDefault(9720), obj5);
    }
    let items1 = [tmp23, , ];
    const obj7 = { style: tmp.progressTitleText, variant: "text-md/medium", color: "text-strong", children: formatToPlainStringResult };
    items1[1] = callback2(analyticsLocation(4126).Text, obj7);
    let simple_icon_url1;
    if (null != nextTier) {
      simple_icon_url1 = nextTier.simple_icon_url;
    }
    let tmp31 = null != simple_icon_url1;
    if (tmp31) {
      const obj8 = { icon: nextTier.simple_icon_url, size: 36 };
      const obj9 = { margin: 4 };
      obj8.style = obj9;
      tmp31 = callback2(importDefault(9720), obj8);
    }
    items1[2] = tmp31;
    obj4.children = items1;
    let items2 = [callback3(closure_6, obj4), ];
    const obj10 = { style: tmp.progressBarContainer };
    const obj11 = { style: tmp.progressBarTrack };
    const obj12 = {};
    const items3 = [tmp.progressBarFill, ];
    const obj13 = {};
    const _HermesInternal = HermesInternal;
    obj13.width = "" + giftingBadgeProgressPercent + "%";
    items3[1] = obj13;
    obj12.style = items3;
    obj11.children = callback2(closure_6, obj12);
    const items4 = [callback2(closure_6, obj11), ];
    const obj14 = { style: tmp.progressLabels };
    const obj15 = { variant: "text-xs/normal", color: "text-subtle" };
    const intl3 = analyticsLocation(1212).intl;
    const obj16 = {};
    let tmp48 = tmp49;
    if (null != nextTier) {
      tmp48 = tmp77;
    }
    obj16.threshold = tmp48;
    if (null != nextTier) {
      tmp49 = badgeProgress;
    }
    obj16.count = tmp49;
    obj15.children = intl3.format(importDefault(2294).iIpfQe, obj16);
    obj14.children = callback2(analyticsLocation(4126).Text, obj15);
    items4[1] = callback2(closure_6, obj14);
    obj10.children = items4;
    items2[1] = callback3(closure_6, obj10);
    obj3.children = items2;
    const items5 = [callback3(closure_6, obj3), , , , ];
    const obj17 = { variant: "primary" };
    const obj18 = { size: "sm", color: importDefault(689).unsafe_rawColors.WHITE };
    obj17.icon = callback2(analyticsLocation(8812).GiftIcon, obj18);
    const intl4 = analyticsLocation(1212).intl;
    obj17.text = intl4.string(importDefault(2294).DZnomS);
    obj17.onPress = function onPress() {
      let obj = analyticsLocation(9713);
      obj = { analyticsLocation, analyticsLocations };
      obj.openGiftModal(obj);
    };
    obj17.grow = true;
    items5[1] = callback2(analyticsLocation(4543).Button, obj17);
    const obj19 = { style: tmp.divider };
    items5[2] = callback2(closure_6, obj19);
    const obj20 = {
      style: tmp.dropdownRow,
      onPress() {
          return dependencyMap((arg0) => !arg0);
        }
    };
    const obj21 = { variant: "text-sm/medium", color: "text-strong" };
    const intl5 = analyticsLocation(1212).intl;
    obj21.children = intl5.string(importDefault(2294).WZ4cXA);
    const items6 = [callback2(analyticsLocation(4126).Text, obj21), ];
    if (first) {
      let ChevronSmallDownIcon = tmp61(12559).ChevronSmallUpIcon;
    } else {
      ChevronSmallDownIcon = tmp61(8570).ChevronSmallDownIcon;
    }
    const obj22 = { color: importDefault(689).colors.INTERACTIVE_ICON_DEFAULT };
    items6[1] = callback2(ChevronSmallDownIcon, obj22);
    obj20.children = items6;
    items5[3] = callback3(closure_5, obj20);
    if (first) {
      const obj23 = {};
      const obj24 = {
        style: tmp.badgesRow,
        children: tiers.map((key) => {
              let obj = {};
              const items = [tmp.badgeItem, ];
              key = undefined;
              if (null != currentTier) {
                key = currentTier.key;
              }
              let badgeItemActive = key.key === key;
              if (badgeItemActive) {
                badgeItemActive = tmp.badgeItemActive;
              }
              items[1] = badgeItemActive;
              obj.style = items;
              let tmp6 = null != key.simple_icon_url;
              if (tmp6) {
                obj = { icon: key.simple_icon_url, size: 36 };
                tmp6 = outer1_9(tmp(9720), obj);
              }
              const items1 = [tmp6, ];
              obj = { style: tmp.badgeCopy };
              const obj1 = { variant: "text-sm/semibold", color: "text-strong" };
              const name = key.name;
              let str = "";
              if (null != name) {
                str = name;
              }
              obj1.children = str;
              const items2 = [outer1_9(analyticsLocation(4126).Text, obj1), ];
              const obj2 = { variant: "text-xs/normal", color: "text-subtle" };
              const intl = analyticsLocation(1212).intl;
              const obj3 = { count: outer1_8(key) };
              obj2.children = intl.format(outer1_10(2294).qvx9E4, obj3);
              items2[1] = outer1_9(analyticsLocation(4126).Text, obj2);
              obj.children = items2;
              items1[1] = outer1_10(outer1_6, obj);
              obj.children = items1;
              return outer1_10(outer1_6, obj, key.key);
            })
      };
      const items7 = [callback2(closure_6, obj24), ];
      const obj25 = { style: tmp.footerText, variant: "text-xs/normal", color: "text-muted" };
      const intl6 = analyticsLocation(1212).intl;
      obj25.children = intl6.string(importDefault(2294)["4Yp0mI"]);
      items7[1] = callback2(analyticsLocation(4126).Text, obj25);
      obj23.children = items7;
      first = callback3(closure_11, obj23);
    }
    items5[4] = first;
    obj2.children = items5;
    return callback3(closure_6, obj2);
  }
  const tmp4 = importDefault(5462);
};
