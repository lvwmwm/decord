// Module ID: 10768
// Function ID: 10769
// Name: BadgeTierGrid
// Dependencies: [19, 17, 21, 4836, 576, 4832, 1115, 10659, 10766, 5409, 2]
// Exports: default

// Module 10768 (BadgeTierGrid)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import BadgeUtils from "BadgeUtils" /* 10659 */;
import BadgeArtImageDefault from "BadgeArtImage" /* 10766 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let owned;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { section: obj2, grid: obj3, item: obj4, progressLabel: obj5, icon: obj6, dimmedIcon: { opacity: 0.4 }, subtitleRow: { flexDirection: "row", alignItems: "center", gap: 2 }, centeredText: { textAlign: "center" } };
obj2 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16 };
obj4 = { width: "33.333%", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_8 };
obj5 = { marginTop: nativeDefault.space.PX_8 };
obj6 = { marginBottom: nativeDefault.space.PX_4 };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/badges/native/BadgeTierGrid.tsx");

export default function BadgeTierGrid(badge) {
  let intl;
  let isViewerOnUpgradeableNitro;
  let items;
  let obj3;
  let targetUsername;
  let tiers;
  badge = badge.badge;
  let isViewingOtherUser = badge.isViewingOtherUser;
  ({ targetUsername, isViewerOnUpgradeableNitro: dependencyMap } = badge);
  let tmp = closure_6();
  const item = tmp;
  let obj = { style: tmp.section, children: items };
  const tmp2 = closure_5;
  if (isViewingOtherUser) {
    isViewingOtherUser = null != targetUsername;
  }
  if (isViewingOtherUser) {
    const tmp5 = closure_4;
    const tmp6 = badge;
    const tmp7 = dependencyMap;
    let obj2 = { variant: "text-sm/medium", color: "text-default", style: tmp.progressLabel, children: intl.formatToPlainString(badge(1115).t.KyTwIh, obj3) };
    let Text = badge(4832).Text;
    intl = badge(1115).intl;
    obj3 = { username: targetUsername };
    isViewingOtherUser = closure_4(Text, obj2);
  }
  items = [isViewingOtherUser, ];
  let obj4 = {
    style: tmp.grid,
    accessibilityRole: "list",
    children: tiers.map((owned) => {
      let items1;
      let items2;
      let items3;
      owned = owned.owned;
      let dimmedIcon = !owned;
      if (dimmedIcon) {
        dimmedIcon = badge.owned;
      }
      let complex_icon_static_url = owned.simple_icon_url;
      if (complex_icon_static_url == null) {
        complex_icon_static_url = owned.complex_icon_static_url;
      }
      const obj = BadgeUtils;
      const obj2 = { tier: owned, isUnlocked: owned, isViewingOtherUser, isViewerOnUpgradeableNitro: dependencyMap };
      const tierRowSubtitle = obj.getTierRowSubtitle(obj2);
      const intl = intl2.intl;
      const string = intl.string;
      const t = intl2.t;
      const items = [owned.name, tierRowSubtitle, string(owned ? t.sTFApF : t.uHtDcT)];
      const found = items.filter((item) => null != item && "" !== item);
      let tmp9Result = null != complex_icon_static_url;
      const obj3 = { style: item.item, accessible: true, accessibilityLabel: found.join(", "), children: items2 };
      if (tmp9Result) {
        const obj4 = { url: complex_icon_static_url, height: 32, style: items1 };
        items1 = [item.icon, ];
        const tmp11 = BadgeArtImageDefault;
        const tmp9 = React3;
        if (dimmedIcon) {
          dimmedIcon = tmp7.dimmedIcon;
        }
        items1[1] = dimmedIcon;
        tmp9Result = tmp9(tmp11, obj4);
      }
      items2 = [tmp9Result, , ];
      let tmp13Result = null != owned.name;
      if (tmp13Result) {
        let str = "text-muted";
        const Text = tmp2(4832).Text;
        const tmp13 = React3;
        if (owned) {
          str = "text-default";
        }
        const obj5 = { variant: "text-sm/semibold", color: str, style: item.centeredText, children: owned.name };
        tmp13Result = tmp13(Text, obj5);
      }
      items2[1] = tmp13Result;
      let tmp5Result = "" !== tierRowSubtitle;
      if (tmp5Result) {
        let tmp15 = !owned;
        const obj6 = { style: item.subtitleRow, children: items3 };
        if (tmp15) {
          const obj7 = { size: "xxs", color: nativeDefault.colors.ICON_MUTED };
          const LockIcon = tmp2(5409).LockIcon;
          tmp15 = React3(LockIcon, obj7);
        }
        items3 = [tmp15, ];
        let str2 = "text-muted";
        const Text2 = tmp2(4832).Text;
        const tmp18 = React3;
        if (owned) {
          str2 = "text-default";
        }
        const obj8 = { variant: "text-sm/normal", color: str2, style: item.centeredText, children: tierRowSubtitle };
        items3[1] = tmp18(Text2, obj8);
        tmp5Result = tmp5(tmp6, obj6);
      }
      items2[2] = tmp5Result;
      return hasOwnProperty(View, obj3, owned.key);
    })
  };
  tiers = badge.tiers;
  const tmp8 = closure_4;
  if (tiers == null) {
    tiers = [];
  }
  items[1] = tmp8(item, obj4);
  return tmp2(item, obj);
};
