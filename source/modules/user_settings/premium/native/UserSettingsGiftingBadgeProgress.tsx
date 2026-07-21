// Module ID: 12382
// Function ID: 94653
// Name: GiftingBadgeIntro
// Dependencies: []
// Exports: default

// Module 12382 (GiftingBadgeIntro)
function GiftingBadgeIntro(analyticsLocation) {
  const arg1 = analyticsLocation.analyticsLocation;
  const tmp = callback5(importDefault(dependencyMap[7])("UserSettingsGiftingBadgeProgress"));
  const importDefault = tmp;
  const dependencyMap = importDefault(dependencyMap[8])(importDefault(dependencyMap[9]).USER_SETTINGS_GIFT_INVENTORY).analyticsLocations;
  let obj = arg1(dependencyMap[10]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tiers;
    const badgeById = badgeById.getBadgeById(analyticsLocation(analyticsLocations[11]).BadgeId.GIFTING);
    if (null != badgeById) {
      tiers = badgeById.tiers;
    }
    return tiers;
  });
  let tmp3 = null;
  if (null != stateFromStores) {
    obj = { style: tmp.wrapper };
    obj = { style: tmp.introContent };
    const obj1 = {};
    const intl = arg1(dependencyMap[13]).intl;
    obj1.children = intl.string(importDefault(dependencyMap[14]).4Yp0mI);
    obj.children = callback3(arg1(dependencyMap[12]).Text, obj1);
    const items1 = [callback3(closure_6, obj), , ];
    const obj2 = {
      style: tmp.introGrid,
      children: stateFromStores.map((simple_icon_url) => {
          let obj = { style: tmp.introGridItem };
          let tmp3 = null != simple_icon_url.simple_icon_url;
          if (tmp3) {
            obj = { icon: simple_icon_url.simple_icon_url, size: 44 };
            tmp3 = callback2(tmp(analyticsLocations[15]), obj);
          }
          const items = [tmp3, ];
          obj = { style: tmp.badgeCopy };
          const obj1 = {};
          const name = simple_icon_url.name;
          let str = "";
          if (null != name) {
            str = name;
          }
          obj1.children = str;
          const items1 = [callback2(analyticsLocation(analyticsLocations[12]).Text, obj1), ];
          const obj2 = {};
          const intl = analyticsLocation(analyticsLocations[13]).intl;
          const obj3 = { count: callback(simple_icon_url) };
          obj2.children = intl.format(closure_10(analyticsLocations[14]).qvx9E4, obj3);
          items1[1] = callback2(analyticsLocation(analyticsLocations[12]).Text, obj2);
          obj.children = items1;
          items[1] = closure_10(closure_6, obj);
          obj.children = items;
          return closure_10(closure_6, obj, simple_icon_url.key);
        })
    };
    items1[1] = callback3(closure_6, obj2);
    const obj3 = { variant: "primary" };
    const obj4 = { size: "sm", color: importDefault(dependencyMap[6]).unsafe_rawColors.WHITE };
    obj3.icon = callback3(arg1(dependencyMap[17]).GiftIcon, obj4);
    const intl2 = arg1(dependencyMap[13]).intl;
    obj3.text = intl2.string(importDefault(dependencyMap[14]).DZnomS);
    obj3.onPress = function onPress() {
      let obj = analyticsLocation(analyticsLocations[18]);
      obj = { analyticsLocation, analyticsLocations };
      obj.openGiftModal(obj);
    };
    obj3.grow = true;
    items1[2] = callback3(arg1(dependencyMap[16]).Button, obj3);
    obj.children = items1;
    tmp3 = callback4(closure_6, obj);
  }
  return tmp3;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ Pressable: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = arg1(dependencyMap[3]).getSingleRequirementThreshold;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
let closure_12 = arg1(dependencyMap[5]).createStyles((arg0) => {
  let obj = {};
  obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_MUTED };
  let num = 0;
  if (arg0) {
    num = importDefault(dependencyMap[6]).radii.md;
  }
  obj.borderRadius = num;
  obj.padding = importDefault(dependencyMap[6]).space.PX_16;
  obj.gap = importDefault(dependencyMap[6]).space.PX_16;
  obj.wrapper = obj;
  obj = { gap: importDefault(dependencyMap[6]).space.PX_8 };
  obj.progressContainer = obj;
  obj.progressRow = { gap: importDefault(dependencyMap[6]).space.PX_4 };
  obj.progressTitleText = { flex: 1 };
  const obj1 = { gap: importDefault(dependencyMap[6]).space.PX_4 };
  obj.progressBarContainer = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_8 };
  const obj2 = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_8 };
  obj.progressBarTrack = { height: 6, borderRadius: importDefault(dependencyMap[6]).radii.round, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" };
  const obj3 = { height: 6, borderRadius: importDefault(dependencyMap[6]).radii.round, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" };
  obj.progressBarFill = { height: 6, borderRadius: importDefault(dependencyMap[6]).radii.round, backgroundColor: importDefault(dependencyMap[6]).unsafe_rawColors.BRAND_500 };
  const obj5 = { bottom: true, left: true, padding: true, minHeight: importDefault(dependencyMap[6]).space.PX_16, marginTop: importDefault(dependencyMap[6]).space.PX_4 };
  obj.progressLabels = obj5;
  const obj4 = { height: 6, borderRadius: importDefault(dependencyMap[6]).radii.round, backgroundColor: importDefault(dependencyMap[6]).unsafe_rawColors.BRAND_500 };
  obj.divider = { height: 1, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_NORMAL };
  obj.dropdownRow = { padding: "Next", paddingBottom: null, flexDirection: null };
  const obj7 = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, paddingVertical: importDefault(dependencyMap[6]).space.PX_4 };
  obj.badgesRow = obj7;
  const obj8 = { -2080373617: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000033995391313658985, 1392510095: 9126805507, -1949266993: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002495254851323827, padding: importDefault(dependencyMap[6]).space.PX_8, gap: importDefault(dependencyMap[6]).space.PX_8 };
  obj.badgeItem = obj8;
  const obj6 = { height: 1, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_NORMAL };
  obj.badgeItemActive = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_MUTED, borderRadius: importDefault(dependencyMap[6]).radii.md, borderWidth: 1, borderColor: importDefault(dependencyMap[6]).colors.BORDER_MUTED };
  obj.badgeCopy = {};
  const obj9 = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_MUTED, borderRadius: importDefault(dependencyMap[6]).radii.md, borderWidth: 1, borderColor: importDefault(dependencyMap[6]).colors.BORDER_MUTED };
  obj.footerText = { textAlign: "center", marginBottom: importDefault(dependencyMap[6]).space.PX_16 };
  const obj10 = { textAlign: "center", marginBottom: importDefault(dependencyMap[6]).space.PX_16 };
  obj.introContent = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_8, gap: importDefault(dependencyMap[6]).space.PX_4 };
  const obj12 = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, paddingVertical: importDefault(dependencyMap[6]).space.PX_4, paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16 };
  obj.introGrid = obj12;
  const obj13 = { -2080373617: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000033995391313658985, 1392510095: 9126805507, -1949266993: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002495254851323827, padding: importDefault(dependencyMap[6]).space.PX_8, gap: importDefault(dependencyMap[6]).space.PX_8 };
  obj.introGridItem = obj13;
  return obj;
});
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/user_settings/premium/native/UserSettingsGiftingBadgeProgress.tsx");

export default function UserSettingsGiftingBadgeProgress(analyticsLocation) {
  let badgeProgress;
  let currentTier;
  let nextTier;
  let tiers;
  analyticsLocation = analyticsLocation.analyticsLocation;
  const arg1 = analyticsLocation;
  const tmp = callback5(importDefault(closure_2[7])("UserSettingsGiftingBadgeProgress"));
  const importDefault = tmp;
  const tmp2 = callback(React.useState(false), 2);
  let first = tmp2[0];
  closure_2 = tmp2[1];
  const callback = importDefault(closure_2[8])(importDefault(closure_2[9]).USER_SETTINGS_GIFT_INVENTORY).analyticsLocations;
  let obj = arg1(closure_2[10]);
  const items = [closure_7];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = {};
    const singleRequirementProgress = store.getSingleRequirementProgress(analyticsLocation(closure_2[11]).BadgeId.GIFTING);
    let current;
    if (null != singleRequirementProgress) {
      current = singleRequirementProgress.current;
    }
    let num = 0;
    if (null != current) {
      num = current;
    }
    obj.badgeProgress = num;
    obj.currentTier = store.getCurrentTier(analyticsLocation(closure_2[11]).BadgeId.GIFTING);
    obj.nextTier = store.getNextTier(analyticsLocation(closure_2[11]).BadgeId.GIFTING);
    obj.giftsRemaining = store.getRemainingToNextTier(analyticsLocation(closure_2[11]).BadgeId.GIFTING);
    const badgeById = store.getBadgeById(analyticsLocation(closure_2[11]).BadgeId.GIFTING);
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
  const React = currentTier;
  ({ nextTier, tiers } = stateFromStoresObject);
  if (0 === badgeProgress) {
    obj = { analyticsLocation };
    return callback3(GiftingBadgeIntro, obj);
  } else {
    let tmp49 = callback2(currentTier);
    const tmp77 = callback2(nextTier);
    const giftingBadgeProgressPercent = arg1(closure_2[19]).getGiftingBadgeProgressPercent(badgeProgress, currentTier, nextTier);
    if (null != nextTier) {
      const intl2 = arg1(closure_2[13]).intl;
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
      let formatToPlainStringResult = intl2.formatToPlainString(importDefault(closure_2[14]).XTX3OO, obj);
    } else {
      const intl = arg1(closure_2[13]).intl;
      const obj1 = {};
      let name1;
      if (null != currentTier) {
        name1 = currentTier.name;
      }
      let str = "";
      if (null != name1) {
        str = name1;
      }
      obj1.currentTier = str;
      formatToPlainStringResult = intl.formatToPlainString(importDefault(closure_2[14]).LnsdbK, obj1);
    }
    const obj2 = { style: tmp.wrapper };
    const obj3 = { style: tmp.progressContainer };
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
      tmp23 = callback3(importDefault(closure_2[15]), obj5);
    }
    const items1 = [tmp23, , ];
    const obj7 = { "Null": 0.184, "Null": 1, "Null": "auto", style: tmp.progressTitleText, children: formatToPlainStringResult };
    items1[1] = callback3(arg1(closure_2[12]).Text, obj7);
    let simple_icon_url1;
    if (null != nextTier) {
      simple_icon_url1 = nextTier.simple_icon_url;
    }
    let tmp31 = null != simple_icon_url1;
    if (tmp31) {
      const obj8 = { icon: nextTier.simple_icon_url, size: 36 };
      const obj9 = { margin: 4 };
      obj8.style = obj9;
      tmp31 = callback3(importDefault(closure_2[15]), obj8);
    }
    items1[2] = tmp31;
    obj4.children = items1;
    const items2 = [callback4(closure_6, obj4), ];
    const obj10 = { style: tmp.progressBarContainer };
    const obj11 = { style: tmp.progressBarTrack };
    const obj12 = {};
    const items3 = [tmp.progressBarFill, ];
    const obj13 = {};
    const _HermesInternal = HermesInternal;
    obj13.width = "" + giftingBadgeProgressPercent + "%";
    items3[1] = obj13;
    obj12.style = items3;
    obj11.children = callback3(closure_6, obj12);
    const items4 = [callback3(closure_6, obj11), ];
    const obj14 = { style: tmp.progressLabels };
    const obj15 = {};
    const intl3 = arg1(closure_2[13]).intl;
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
    obj15.children = intl3.format(importDefault(closure_2[14]).iIpfQe, obj16);
    obj14.children = callback3(arg1(closure_2[12]).Text, obj15);
    items4[1] = callback3(closure_6, obj14);
    obj10.children = items4;
    items2[1] = callback4(closure_6, obj10);
    obj3.children = items2;
    const items5 = [callback4(closure_6, obj3), , , , ];
    const obj17 = { variant: "primary" };
    const obj18 = { size: "sm", color: importDefault(closure_2[6]).unsafe_rawColors.WHITE };
    obj17.icon = callback3(arg1(closure_2[17]).GiftIcon, obj18);
    const intl4 = arg1(closure_2[13]).intl;
    obj17.text = intl4.string(importDefault(closure_2[14]).DZnomS);
    obj17.onPress = function onPress() {
      let obj = analyticsLocation(closure_2[18]);
      obj = { analyticsLocation, analyticsLocations };
      obj.openGiftModal(obj);
    };
    obj17.grow = true;
    items5[1] = callback3(arg1(closure_2[16]).Button, obj17);
    const obj19 = { style: tmp.divider };
    items5[2] = callback3(closure_6, obj19);
    const obj20 = {
      style: tmp.dropdownRow,
      onPress() {
          return callback((arg0) => !arg0);
        }
    };
    const obj21 = {};
    const intl5 = arg1(closure_2[13]).intl;
    obj21.children = intl5.string(importDefault(closure_2[14]).WZ4cXA);
    const items6 = [callback3(arg1(closure_2[12]).Text, obj21), ];
    if (first) {
      let ChevronSmallDownIcon = tmp61(tmp62[20]).ChevronSmallUpIcon;
    } else {
      ChevronSmallDownIcon = tmp61(tmp62[21]).ChevronSmallDownIcon;
    }
    const obj22 = { color: importDefault(closure_2[6]).colors.INTERACTIVE_ICON_DEFAULT };
    items6[1] = callback3(ChevronSmallDownIcon, obj22);
    obj20.children = items6;
    items5[3] = callback4(closure_5, obj20);
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
                tmp6 = callback3(tmp(closure_2[15]), obj);
              }
              const items1 = [tmp6, ];
              obj = { style: tmp.badgeCopy };
              const obj1 = {};
              const name = key.name;
              let str = "";
              if (null != name) {
                str = name;
              }
              obj1.children = str;
              const items2 = [callback3(analyticsLocation(closure_2[12]).Text, obj1), ];
              const obj2 = {};
              const intl = analyticsLocation(closure_2[13]).intl;
              const obj3 = { count: callback2(key) };
              obj2.children = intl.format(closure_10(closure_2[14]).qvx9E4, obj3);
              items2[1] = callback3(analyticsLocation(closure_2[12]).Text, obj2);
              obj.children = items2;
              items1[1] = closure_10(closure_6, obj);
              obj.children = items1;
              return closure_10(closure_6, obj, key.key);
            })
      };
      const items7 = [callback3(closure_6, obj24), ];
      const obj25 = { style: tmp.footerText };
      const intl6 = arg1(closure_2[13]).intl;
      obj25.children = intl6.string(importDefault(closure_2[14]).4Yp0mI);
      items7[1] = callback3(arg1(closure_2[12]).Text, obj25);
      obj23.children = items7;
      first = callback4(closure_11, obj23);
    }
    items5[4] = first;
    obj2.children = items5;
    return callback4(closure_6, obj2);
  }
  const tmp4 = importDefault(closure_2[8]);
};
