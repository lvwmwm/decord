// Module ID: 10213
// Function ID: 10214
// Name: GiftingBadgeInfoActionSheet
// Dependencies: [19, 17, 4825, 7637, 1074, 21, 4836, 576, 1613, 504, 7629, 1241, 6571, 4832, 1115, 2583, 10208, 10214, 2]
// Exports: default

// Module 10213 (GiftingBadgeInfoActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import _modDef2583 from "module_2583" /* 2583 */;
import Text_Text from "Text/Text" /* 4832 */;
import BadgeDirectoryStore2 from "BadgeDirectoryStore" /* 7637 */;
import GiftingBadgesUtils from "GiftingBadgesUtils" /* 10208 */;
import GiftingBadgeIconDefault from "GiftingBadgeIcon" /* 10214 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const BadgeDirectoryStore = BadgeDirectoryStore2;
let BottomSheet, _require, importDefault;

let c10;
let c9;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
const View = react_native.View;
let closure_7 = BadgeDirectoryStore2.getSingleRequirementThreshold;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, headerContainer: obj3, title: obj4, description: obj5, tierCards: obj6, tierCard: obj7, iconWrapper: obj8 };
obj2 = { alignItems: "center", paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_8 };
obj4 = { textAlign: "center", marginBottom: nativeDefault.space.PX_8 };
obj5 = { textAlign: "center", marginBottom: nativeDefault.space.PX_16 };
obj6 = { flexDirection: "row", flexWrap: "wrap", rowGap: nativeDefault.space.PX_8 };
obj7 = { width: "33.33%", alignItems: "center", padding: nativeDefault.space.PX_8 };
obj8 = { paddingVertical: nativeDefault.space.PX_8 };
let closure_11 = createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/gifting/native/GiftingBadgeInfoActionSheet.tsx");

export default function GiftingBadgeInfoActionSheet() {
  let badgeById;
  let closure_0;
  let closure_1;
  let intl;
  let intl2;
  let items2;
  let items3;
  let items4;
  let mapped;
  let useReducedMotion;
  let tmp = closure_11();
  _require = tmp;
  const bottom = useSafeAreaInsetsDefault().bottom;
  let obj = require("get initialized");
  let items = [BadgeDirectoryStore];
  const stateFromStores = obj.useStateFromStores(items, () => badgeById.getBadgeById(closure_0(dependencyMap[10]).BadgeId.GIFTING));
  let obj2 = require("get initialized");
  const items1 = [AccessibilityStore];
  importDefault = obj2.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  const effect = react.useEffect(() => {
    const obj = closure_1(dependencyMap[11]);
    obj.track(constants.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
  }, []);
  let tmp4 = closure_9;
  const tmp6 = View;
  let obj3 = { style: items2, children: items4 };
  items2 = [tmp.container, ];
  let obj4 = { paddingBottom: bottom + nativeDefault.space.PX_16 };
  BottomSheet = require("Sheet/BottomSheet").BottomSheet;
  let tmp5 = closure_10;
  items2[1] = obj4;
  let obj5 = { style: tmp.headerContainer, children: items3 };
  let obj6 = { style: tmp.title, variant: "heading-xl/semibold", color: "text-strong", accessibilityRole: "header", children: intl.string(_modDef2583["0MB2C6"]) };
  let Text = require("Text/Text").Text;
  intl = require("intl").intl;
  items3 = [closure_9(Text, obj6), ];
  let obj7 = { style: tmp.description, variant: "text-md/medium", color: "text-default", children: intl2.string(_modDef2583.k9sNVH) };
  const Text2 = require("Text/Text").Text;
  intl2 = require("intl").intl;
  items3[1] = closure_9(Text2, obj7);
  items4 = [closure_10(View, obj5), ];
  const obj8 = { style: tmp.tierCards, children: mapped };
  mapped = undefined;
  if (stateFromStores != null) {
    const tiers = stateFromStores.tiers;
    if (tiers != null) {
      mapped = tiers.map((children) => {
        let intl;
        let items;
        let obj2;
        let obj4;
        let obj7;
        let simple_icon_url;
        const tmp = closure_1;
        if (tmp) {
          let simple_icon_url2 = children.complex_icon_static_url;
          if (simple_icon_url2 == null) {
            simple_icon_url2 = children.simple_icon_url;
          }
          simple_icon_url = simple_icon_url2;
        } else {
          simple_icon_url = children.complex_icon_animated_url;
          if (simple_icon_url == null) {
            simple_icon_url = children.complex_icon_static_url;
          }
          if (simple_icon_url == null) {
            simple_icon_url = children.simple_icon_url;
          }
        }
        const tmp4 = closure_7(children);
        const obj = { style: closure_0.tierCard, accessible: true, accessibilityLabel: obj2.getGiftingBadgeAccessibilityLabel(children), children: items };
        let tmp10 = null != simple_icon_url;
        obj2 = GiftingBadgesUtils;
        const tmp5 = authStore;
        const tmp7 = closure_0;
        if (tmp10) {
          const obj3 = { style: tmp7.iconWrapper, children: React4(GiftingBadgeIconDefault, obj4) };
          obj4 = { icon: simple_icon_url, size: 58 };
          tmp10 = React4(tmp6, obj3);
        }
        items = [tmp10, , ];
        const obj5 = { variant: "text-lg/semibold", color: "text-strong", children: children.name };
        items[1] = React4(Text_Text.Text, obj5);
        let tmp13Result = null != tmp4;
        const tmp13 = React4;
        if (tmp13Result) {
          const obj6 = { variant: "text-md/normal", color: "text-subtle", children: intl.formatToPlainString(_modDef2583.qvx9E4, obj7) };
          const Text = tmp8(4832).Text;
          intl = tmp8(1115).intl;
          obj7 = { count: tmp4 };
          tmp13Result = tmp13(Text, obj6);
        }
        items[2] = tmp13Result;
        return tmp5(View, obj, children.key);
      });
    }
  }
  const obj9 = { scrollable: false, startExpanded: true, children: tmp5(tmp6, obj3) };
  items4[1] = tmp4(tmp6, obj8);
  return tmp4(BottomSheet, obj9);
};
