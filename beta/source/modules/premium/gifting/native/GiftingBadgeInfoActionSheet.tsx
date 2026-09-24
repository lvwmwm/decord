// Module ID: 11081
// Function ID: 11082
// Name: GiftingBadgeInfoActionSheet
// Dependencies: [19, 17, 4782, 8498, 1078, 21, 4790, 580, 558, 568, 1616, 8490, 504, 1245, 1119, 2582, 4786, 11082, 7429, 2]

// Module 11081 (GiftingBadgeInfoActionSheet)
import nativeDefault from "native" /* 580 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1616 */;
import _modDef2582 from "module_2582" /* 2582 */;
import Text_Text from "Text/Text" /* 4786 */;
import GiftingBadgeIconDefault from "GiftingBadgeIcon" /* 11082 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4782 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8498 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
let closure_7 = fn(8498).getSingleRequirementThreshold;
const AnalyticEvents = fn(1078).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4790);
let obj2 = { container: { alignItems: "center", paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 }, headerContainer: null, title: null, description: null, tierCards: null, tierCard: null, iconWrapper: null };
let obj3 = { alignItems: "center", paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.headerContainer = { paddingHorizontal: nativeDefault.space.PX_8 };
const obj4 = { paddingHorizontal: nativeDefault.space.PX_8 };
obj2.title = { textAlign: "center", marginBottom: nativeDefault.space.PX_8 };
let obj5 = { textAlign: "center", marginBottom: nativeDefault.space.PX_8 };
obj2.description = { textAlign: "center", marginBottom: nativeDefault.space.PX_16 };
let obj6 = { textAlign: "center", marginBottom: nativeDefault.space.PX_16 };
obj2.tierCards = { flexDirection: "row", flexWrap: "wrap", rowGap: nativeDefault.space.PX_8 };
let obj7 = { flexDirection: "row", flexWrap: "wrap", rowGap: nativeDefault.space.PX_8 };
obj2.tierCard = { width: "33.33%", alignItems: "center", padding: nativeDefault.space.PX_8 };
let obj8 = { width: "33.33%", alignItems: "center", padding: nativeDefault.space.PX_8 };
obj2.iconWrapper = { paddingVertical: nativeDefault.space.PX_8 };
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj9 = { paddingVertical: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/gifting/native/GiftingBadgeInfoActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(33);
  const tmp4 = closure_11();
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [BadgeDirectoryStore];
    const fn = function x() {
      return badgeById.getBadgeById(closure_0(8490).BadgeId.GIFTING);
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp6, tmp7);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [AccessibilityStore];
    class C {
      constructor() {
        return closure_1_5.useReducedMotion;
      }
    }
    cResult[2] = items1;
    cResult[3] = C;
    let tmp11 = C;
    let tmp10 = items1;
  } else {
    tmp10 = cResult[2];
    tmp11 = cResult[3];
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp10, tmp11);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        obj = closure_1(closure_1_2[13]);
        trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
        return;
      }
    }
    const items2 = [];
    class C {
      constructor() {
        return closure_1_5.useReducedMotion;
      }
    }
    cResult[5] = items2;
    let tmp15 = items2;
    const tmp14 = T;
  } else {
    class T {
      constructor() {
        obj = closure_1(closure_1_2[13]);
        trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
        return;
      }
    }
    tmp15 = cResult[5];
  }
  const effect = noop.useEffect(tmp14, tmp15);
  const sum = stateFromStores1(1616)().bottom + tmp5(580).space.PX_16;
  if (cResult[6] !== sum) {
    class T {
      constructor() {
        obj = closure_1(closure_1_2[13]);
        trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
        return;
      }
    }
    tmp19[0] = sum;
    class C {
      constructor() {
        return closure_1_5.useReducedMotion;
      }
    }
    cResult[7] = tmp19;
  } else {
    class T {
      constructor() {
        obj = closure_1(closure_1_2[13]);
        trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
        return;
      }
    }
  }
  if (cResult[8] === tmp4.container) {
    class T {
      constructor() {
        obj = closure_1(closure_1_2[13]);
        trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
        return;
      }
    }
    const _Symbol = Symbol;
    class C {
      constructor() {
        return closure_1_5.useReducedMotion;
      }
    }
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class T {
        constructor() {
          obj = closure_1(closure_1_2[13]);
          trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
          return;
        }
      }
      const stringResult = obj4.string(tmp5(2582)["0MB2C6"]);
      class C {
        constructor() {
          return closure_1_5.useReducedMotion;
        }
      }
      cResult[11] = stringResult;
    } else {
      class T {
        constructor() {
          obj = closure_1(closure_1_2[13]);
          trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
          return;
        }
      }
    }
    if (cResult[12] !== tmp4.title) {
      class T {
        constructor() {
          obj = closure_1(closure_1_2[13]);
          trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
          return;
        }
      }
      let obj2 = { style: tmp20, variant: "heading-xl/semibold", color: "text-strong", accessibilityRole: "header", children: null };
      class C {
        constructor() {
          return closure_1_5.useReducedMotion;
        }
      }
      const tmp24 = closure_9(tmp(4786).Text, obj2);
      cResult[12] = tmp4.title;
      cResult[13] = tmp24;
    } else {
      class T {
        constructor() {
          obj = closure_1(closure_1_2[13]);
          trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
          return;
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class T {
        constructor() {
          obj = closure_1(closure_1_2[13]);
          trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
          return;
        }
      }
      const stringResult1 = obj6.string(tmp5(2582).k9sNVH);
      class C {
        constructor() {
          return closure_1_5.useReducedMotion;
        }
      }
      cResult[14] = stringResult1;
    } else {
      class T {
        constructor() {
          obj = closure_1(closure_1_2[13]);
          trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
          return;
        }
      }
    }
    if (cResult[15] !== tmp4.description) {
      class T {
        constructor() {
          obj = closure_1(closure_1_2[13]);
          trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
          return;
        }
      }
      let obj3 = { style: tmp4.description, variant: "text-md/medium", color: "text-default", children: null };
      class C {
        constructor() {
          return closure_1_5.useReducedMotion;
        }
      }
      const tmp28 = closure_9(tmp(4786).Text, obj3);
      cResult[15] = tmp4.description;
      cResult[16] = tmp28;
    } else {
      class T {
        constructor() {
          obj = closure_1(closure_1_2[13]);
          trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
          return;
        }
      }
    }
    if (cResult[17] === tmp4.headerContainer) {
      class T {
        constructor() {
          obj = closure_1(closure_1_2[13]);
          trackResult = obj.track(closure_1_8.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
          return;
        }
      }
    }
    let obj5 = { style: tmp4.headerContainer, children: null };
    const items3 = [tmp23, tmp27];
    obj5.children = items3;
    const tmp32 = closure_10(View, obj5);
    cResult[17] = tmp4.headerContainer;
    cResult[18] = tmp23;
    cResult[19] = tmp27;
    cResult[20] = tmp32;
  }
  const items4 = [tmp4.container, tmp18];
  cResult[8] = tmp4.container;
  cResult[9] = tmp18;
  cResult[10] = items4;
}) : (() => {
  const tmp = closure_11();
  _require = tmp;
  let items = [BadgeDirectoryStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => badgeById.getBadgeById(closure_0(8490).BadgeId.GIFTING));
  let obj = require("initialize");
  const items1 = [AccessibilityStore];
  importDefault = require("initialize").useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  const effect = noop.useEffect(() => {
    closure_1(1245).track(constants.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
  }, []);
  let obj3 = { style: null, children: null };
  const items2 = [tmp.container, ];
  let obj2 = require("initialize");
  items2[1] = { paddingBottom: useSafeAreaInsetsDefault().bottom + nativeDefault.space.PX_16 };
  obj3.style = items2;
  let obj5 = { style: tmp.headerContainer, children: null };
  let obj6 = { style: tmp.title, variant: "heading-xl/semibold", color: "text-strong", accessibilityRole: "header", children: null };
  let intl = require("util").intl;
  obj6.children = intl.string(_modDef2582["0MB2C6"]);
  const items3 = [closure_9(require("Text/Text").Text, obj6), ];
  const obj7 = { style: tmp.description, variant: "text-md/medium", color: "text-default", children: null };
  const intl2 = require("util").intl;
  obj7.children = intl2.string(_modDef2582.k9sNVH);
  items3[1] = closure_9(require("Text/Text").Text, obj7);
  obj5.children = items3;
  const items4 = [closure_10(View, obj5), ];
  const obj8 = { style: tmp.tierCards, children: null };
  let mapped;
  if (stateFromStores != null) {
    const tiers = stateFromStores.tiers;
    if (tiers != null) {
      mapped = tiers.map((children) => {
        if (closure_1) {
          let simple_icon_url2 = children.complex_icon_static_url;
          if (simple_icon_url2 == null) {
            simple_icon_url2 = children.simple_icon_url;
          }
          let simple_icon_url = simple_icon_url2;
        } else {
          simple_icon_url = children.complex_icon_animated_url;
          if (simple_icon_url == null) {
            simple_icon_url = children.complex_icon_static_url;
          }
          if (simple_icon_url == null) {
            simple_icon_url = children.simple_icon_url;
          }
        }
        const tmp3 = closure_7(children);
        const obj = { style: closure_0.tierCard, children: null };
        let tmp7 = null != simple_icon_url;
        if (tmp7) {
          const obj2 = { style: tmp6.iconWrapper, children: null };
          const obj3 = { icon: simple_icon_url, size: 58 };
          obj2.children = options(GiftingBadgeIconDefault, obj3);
          tmp7 = options(tmp5, obj2);
        }
        const items = [tmp7, options(Text_Text.Text, { variant: "text-lg/semibold", color: "text-strong", children: children.name }), ];
        let tmp11Result = null != tmp3;
        if (tmp11Result) {
          const obj5 = { variant: "text-md/normal", color: "text-subtle", children: null };
          const intl = tmp12(1119).intl;
          const obj6 = { count: tmp3 };
          obj5.children = intl.formatToPlainString(_modDef2582.qvx9E4, obj6);
          tmp11Result = options(tmp12(4786).Text, obj5);
        }
        items[2] = tmp11Result;
        obj.children = items;
        return v65535(View, obj, children.key);
      });
    }
  }
  const obj9 = { scrollable: false, startExpanded: true, children: null };
  obj8.children = mapped;
  items4[1] = closure_9(View, obj8);
  obj3.children = items4;
  obj9.children = closure_10(View, obj3);
  return closure_9(require("Sheet/BottomSheet").BottomSheet, obj9);
});
