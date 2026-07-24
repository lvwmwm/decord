// Module ID: 9719
// Function ID: 75605
// Name: GiftingBadgeInfoActionSheet
// Dependencies: [31, 27, 4122, 8312, 653, 33, 4130, 689, 1557, 566, 8309, 675, 5187, 4126, 1212, 2294, 9720, 2]
// Exports: default

// Module 9719 (GiftingBadgeInfoActionSheet)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { getSingleRequirementThreshold as closure_7 } from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_9;
let require = arg1;
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { alignItems: "center", paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.headerContainer = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj1 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.title = { textAlign: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj2 = { textAlign: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.description = { textAlign: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj4 = { flexDirection: "row", flexWrap: "wrap", rowGap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.tierCards = obj4;
let obj5 = { width: "33.33%", alignItems: "center", padding: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.tierCard = obj5;
let obj3 = { textAlign: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.iconWrapper = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj6 = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_8 };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/gifting/native/GiftingBadgeInfoActionSheet.tsx");

export default function GiftingBadgeInfoActionSheet() {
  const tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  let obj = require(566) /* initialize */;
  let items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getBadgeById(tmp(outer1_2[10]).BadgeId.GIFTING));
  let obj1 = require(566) /* initialize */;
  const items1 = [_isNativeReflectConstruct];
  const importDefault = obj1.useStateFromStores(items1, () => outer1_5.useReducedMotion);
  const effect = React.useEffect(() => {
    callback(outer1_2[11]).track(outer1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
  }, []);
  obj = { scrollable: false, startExpanded: true };
  obj = {};
  const items2 = [tmp.container, ];
  obj1 = { paddingBottom: importDefault(1557)().bottom + importDefault(689).space.PX_16 };
  items2[1] = obj1;
  obj.style = items2;
  let obj2 = { style: tmp.headerContainer };
  let obj3 = { style: tmp.title, variant: "heading-xl/semibold", color: "text-strong", accessibilityRole: "header" };
  let intl = require(1212) /* getSystemLocale */.intl;
  obj3.children = intl.string(importDefault(2294)["0MB2C6"]);
  const items3 = [callback(require(4126) /* Text */.Text, obj3), ];
  const obj4 = { style: tmp.description, variant: "text-md/medium", color: "text-default" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj4.children = intl2.string(importDefault(2294).k9sNVH);
  items3[1] = callback(require(4126) /* Text */.Text, obj4);
  obj2.children = items3;
  const items4 = [callback2(View, obj2), ];
  const obj5 = { style: tmp.tierCards };
  let mapped;
  if (null != stateFromStores) {
    const tiers = stateFromStores.tiers;
    if (null != tiers) {
      mapped = tiers.map((complex_icon_static_url) => {
        if (callback) {
          let simple_icon_url2 = complex_icon_static_url.complex_icon_static_url;
          if (null == simple_icon_url2) {
            simple_icon_url2 = complex_icon_static_url.simple_icon_url;
          }
          let simple_icon_url = simple_icon_url2;
        } else {
          simple_icon_url = complex_icon_static_url.complex_icon_animated_url;
          if (null == simple_icon_url) {
            simple_icon_url = complex_icon_static_url.complex_icon_static_url;
          }
          if (null == simple_icon_url) {
            simple_icon_url = complex_icon_static_url.simple_icon_url;
          }
        }
        const tmp3 = outer1_7(complex_icon_static_url);
        let obj = { style: tmp.tierCard };
        let tmp6 = null != simple_icon_url;
        if (tmp6) {
          obj = { style: tmp.iconWrapper };
          obj = { icon: simple_icon_url, size: 58 };
          obj.children = outer1_9(callback(outer1_2[16]), obj);
          tmp6 = outer1_9(outer1_4, obj);
        }
        const items = [tmp6, , ];
        const obj1 = { variant: "text-lg/semibold", color: "text-strong", children: complex_icon_static_url.name };
        items[1] = outer1_9(tmp(outer1_2[13]).Text, obj1);
        let tmp12 = null != tmp3;
        if (tmp12) {
          const obj2 = { variant: "text-md/normal", color: "text-subtle" };
          const intl = tmp(outer1_2[14]).intl;
          const obj3 = { count: tmp3 };
          obj2.children = intl.formatToPlainString(callback(outer1_2[15]).qvx9E4, obj3);
          tmp12 = outer1_9(tmp(outer1_2[13]).Text, obj2);
        }
        items[2] = tmp12;
        obj.children = items;
        return outer1_10(outer1_4, obj, complex_icon_static_url.key);
      });
    }
  }
  obj5.children = mapped;
  items4[1] = callback(View, obj5);
  obj.children = items4;
  obj.children = callback2(View, obj);
  return callback(require(5187) /* Background */.BottomSheet, obj);
};
