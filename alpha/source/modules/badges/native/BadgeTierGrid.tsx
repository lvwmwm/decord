// Module ID: 11444
// Function ID: 11445
// Name: BadgeTierGrid
// Dependencies: [19, 17, 21, 5009, 575, 5619, 1114, 10048, 11423, 11415, 8659, 2]
// Exports: default

// Module 11444 (BadgeTierGrid)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
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
let obj = { section: obj2, grid: obj3, row: { flexDirection: "row", justifyContent: "center" }, item: obj4, progressLabel: obj5, icon: obj6, dimmedIcon: { opacity: 0.4 }, subtitleRow: { flexDirection: "row", alignItems: "center", gap: 2 }, centeredText: { textAlign: "center" } };
obj2 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj4 = { width: "33.333333333333336%", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_8 };
obj5 = { marginTop: nativeDefault.space.PX_8 };
obj6 = { marginBottom: nativeDefault.space.PX_4 };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/badges/native/BadgeTierGrid.tsx");

export default function BadgeTierGrid(badge) {
  let intl;
  let items;
  let obj3;
  let targetUsername;
  let tmp9Result;
  badge = badge.badge;
  let isViewingOtherUser = badge.isViewingOtherUser;
  ({ targetUsername, isViewerOnUpgradeableNitro: dependencyMap } = badge);
  let tmp = closure_6();
  const row = tmp;
  const tmp3 = row;
  let obj = { style: tmp.section, children: items };
  const tmp2 = closure_5;
  if (isViewingOtherUser) {
    isViewingOtherUser = null != targetUsername;
  }
  if (isViewingOtherUser) {
    const tmp5 = closure_4;
    const tmp6 = badge;
    const tmp7 = dependencyMap;
    let obj2 = { variant: "text-sm/medium", color: "text-default", style: tmp.progressLabel, children: intl.formatToPlainString(badge(1114).t.KyTwIh, obj3) };
    let Text = badge(5619).Text;
    intl = badge(1114).intl;
    obj3 = { username: targetUsername };
    isViewingOtherUser = closure_4(Text, obj2);
  }
  items = [isViewingOtherUser, ];
  let obj4 = {
    style: tmp.grid,
    accessibilityRole: "list",
    children: tmp9Result.map((arr) => {
      let isViewerOnUpgradeableNitro;
      let item;
      let obj = {
        style: row.row,
        collapsable: false,
        children: arr.map((owned) => {
          let items1;
          let items2;
          let items3;
          owned = owned.owned;
          let dimmedIcon = !owned;
          if (dimmedIcon) {
            dimmedIcon = owned.owned;
          }
          let complex_icon_static_url = owned.simple_icon_url;
          if (complex_icon_static_url == null) {
            complex_icon_static_url = owned.complex_icon_static_url;
          }
          const obj = badge(dependencyMap[8]);
          const obj2 = { tier: owned, isUnlocked: owned, isViewingOtherUser, isViewerOnUpgradeableNitro };
          const tierRowSubtitle = obj.getTierRowSubtitle(obj2);
          const intl = badge(dependencyMap[6]).intl;
          const string = intl.string;
          const t = badge(dependencyMap[6]).t;
          const items = [owned.name, tierRowSubtitle, string(owned ? t.sTFApF : t.uHtDcT)];
          const found = items.filter((item) => null != item && "" !== item);
          let tmp9Result = null != complex_icon_static_url;
          const obj3 = { style: item.item, accessible: true, accessibilityLabel: found.join(", "), children: items2 };
          if (tmp9Result) {
            const obj4 = { url: complex_icon_static_url, height: 32, style: items1 };
            items1 = [item.icon, ];
            const tmp11 = isViewingOtherUser(dependencyMap[9]);
            const tmp9 = closure_2_4;
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
            const Text = tmp2(tmp3[5]).Text;
            const tmp13 = closure_2_4;
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
              const obj7 = { size: "xxs", color: isViewingOtherUser(dependencyMap[4]).colors.ICON_MUTED };
              const LockIcon = tmp2(tmp3[10]).LockIcon;
              tmp15 = closure_2_4(LockIcon, obj7);
            }
            items3 = [tmp15, ];
            let str2 = "text-muted";
            const Text2 = tmp2(tmp3[5]).Text;
            const tmp18 = closure_2_4;
            if (owned) {
              str2 = "text-default";
            }
            const obj8 = { variant: "text-sm/normal", color: str2, style: item.centeredText, children: tierRowSubtitle };
            items3[1] = tmp18(Text2, obj8);
            tmp5Result = tmp5(tmp6, obj6);
          }
          items2[2] = tmp5Result;
          return closure_2_5(row, obj3, owned.key);
        })
      };
      return React3(View, obj, arr[0].key);
    })
  };
  let tiers = badge.tiers;
  let tmp9 = isViewingOtherUser(10048);
  const tmp8 = closure_4;
  if (tiers == null) {
    tiers = [];
  }
  tmp9Result = tmp9(tiers, 3);
  items[1] = tmp8(tmp3, obj4);
  return tmp2(tmp3, obj);
};
