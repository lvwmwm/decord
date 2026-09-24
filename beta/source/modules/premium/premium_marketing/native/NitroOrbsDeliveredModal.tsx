// Module ID: 13651
// Function ID: 13652
// Name: NitroOrbsDeliveredModal
// Dependencies: [32, 19, 17, 1078, 1080, 21, 4790, 580, 558, 568, 7820, 7461, 7658, 11948, 7403, 7476, 13652, 4786, 1119, 5220, 2]

// Module 13651 (NitroOrbsDeliveredModal)
import nativeDefault from "native" /* 580 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7461 */;
import openUserSettings from "openUserSettings" /* 7658 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7820 */;
import _modDef13652 from "module_13652" /* 13652 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, Image: metroRequire, StyleSheet } = get_ActivityIndicator);
const View = get_ActivityIndicator.View;
const UserSettingsSections = fn(1078).UserSettingsSections;
let closure_10 = fn(1080).CollectiblesMobileShopScreen;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4790);
let obj2 = { root: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, background: StyleSheet.absoluteFillObject, loading: null, main: null, header: null, body: null, orbGraphic: null, title: null, description: null, footer: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.loading = { justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.main = { flex: 1 };
let obj4 = { justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.header = { alignItems: "flex-start", paddingHorizontal: nativeDefault.space.PX_16 };
let obj5 = { alignItems: "flex-start", paddingHorizontal: nativeDefault.space.PX_16 };
obj2.body = { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_32 };
let size = { width: 280, height: 157.5, marginBottom: nativeDefault.space.PX_32 };
obj2.orbGraphic = size;
let obj6 = { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_32 };
obj2.title = { textAlign: "center", marginBottom: nativeDefault.space.PX_12 };
obj2.description = { textAlign: "center" };
let obj7 = { textAlign: "center", marginBottom: nativeDefault.space.PX_12 };
obj2.footer = { gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_16 };
let closure_13 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj8 = { gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_16 };
size = fn(2);
let result = size.fileFinishedImporting("modules/premium/premium_marketing/native/NitroOrbsDeliveredModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = onClose(568).c(28);
  ({ orbsAmount, onClose } = arg0);
  const tmp4 = closure_13();
  if (cResult[0] !== onClose) {
    const fn = function u() {
      onClose();
      const obj = CollectiblesActionCreators;
      const result = obj.openCollectiblesShopMobile({ screen: constants.ORBS, analyticsLocations: [], analyticsSource: AnalyticsLocationDefault.PREMIUM_MARKETING });
    };
    cResult[0] = onClose;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== onClose) {
    const fn2 = function _() {
      onClose();
      openUserSettings.openUserSettings({ screen: UserSettingsSections.PREMIUM });
    };
    cResult[2] = onClose;
    cResult[3] = fn2;
    let tmp6 = fn2;
  } else {
    tmp6 = cResult[3];
  }
  let obj = onClose(568);
  [tmp8, importDefault] = noop.useState(false);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        return closure_1(true);
      }
    }
    cResult[4] = C;
    const tmp9 = C;
  } else {
    class C {
      constructor() {
        return closure_1(true);
      }
    }
  }
  if (cResult[5] !== tmp4.background) {
    class C {
      constructor() {
        return closure_1(true);
      }
    }
    const obj2 = { style: StyleSheet.absoluteFill, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
    const obj3 = { style: tmp4.background, onReady: tmp9 };
    obj2.children = closure_11(tmp(11948).OrbsRewardBackground, obj3);
    const tmp13 = closure_11(View, obj2);
    cResult[5] = tmp4.background;
    cResult[6] = tmp13;
  } else {
    class C {
      constructor() {
        return closure_1(true);
      }
    }
  }
  if (cResult[7] === tmp8) {
    class C {
      constructor() {
        return closure_1(true);
      }
    }
    if (cResult[10] === tmp6) {
      class C {
        constructor() {
          return closure_1(true);
        }
      }
    }
    let tmp18 = tmp8;
    if (tmp8) {
      class C {
        constructor() {
          return closure_1(true);
        }
      }
      const rect = { style: tmp4.main, top: true, bottom: true, left: true, right: true, children: null };
      const obj4 = { style: tmp4.header, children: null };
      const obj5 = { onPress: onClose, variant: "overlay" };
      obj4.children = closure_11(tmp(7476).ActionSheetCloseButton, obj5);
      const items = [closure_11(View, obj4), , ];
      const obj6 = { style: tmp4.body, children: null };
      const obj7 = { source: _modDef13652, style: tmp4.orbGraphic, resizeMode: "contain" };
      const items1 = [closure_11(closure_6, obj7), ];
      const obj8 = { children: null };
      const obj9 = { variant: "heading-lg/bold", color: "text-overlay-light", style: tmp4.title, children: null };
      const intl = tmp(1119).intl;
      const obj10 = { orbAmount: orbsAmount };
      obj9.children = intl.formatToPlainString(tmp(1119).t["O2/Bj8"], obj10);
      const items2 = [closure_11(tmp(4786).Text, obj9), ];
      const obj11 = { variant: "text-md/normal", color: "text-overlay-light", style: tmp4.description, children: null };
      const intl2 = tmp(1119).intl;
      const obj12 = { orbAmount: orbsAmount };
      obj11.children = intl2.format(tmp(1119).t.qiZPb6, obj12);
      items2[1] = closure_11(tmp(4786).Text, obj11);
      obj8.children = items2;
      items1[1] = closure_12(View, obj8);
      obj6.children = items1;
      items[1] = closure_12(View, obj6);
      const obj13 = { style: tmp4.footer, children: null };
      const obj14 = { text: null, variant: "primary", size: "lg", onPress: null };
      const intl3 = tmp(1119).intl;
      obj14.text = intl3.string(tmp(1119).t.OhOWfI);
      obj14.onPress = tmp5;
      const items3 = [closure_11(tmp(5220).Button, obj14), ];
      const obj15 = { text: null, variant: "secondary-overlay", size: "lg", onPress: null };
      const intl4 = tmp(1119).intl;
      obj15.text = intl4.string(tmp(1119).t.CvXwDY);
      obj15.onPress = tmp6;
      items3[1] = closure_11(tmp(5220).Button, obj15);
      obj13.children = items3;
      items[2] = closure_12(View, obj13);
      rect.children = items;
      tmp18 = closure_12(tmp(7403).SafeAreaPaddingView, rect);
    }
    cResult[10] = tmp6;
    cResult[11] = tmp5;
    cResult[12] = tmp8;
    cResult[13] = onClose;
    cResult[14] = orbsAmount;
    cResult[15] = tmp4.body;
    cResult[16] = tmp4.description;
    cResult[17] = tmp4.footer;
    cResult[18] = tmp4.header;
    cResult[19] = tmp4.main;
    cResult[20] = tmp4.orbGraphic;
    cResult[21] = tmp4.title;
    cResult[22] = tmp18;
  }
  let tmp14 = !tmp8;
  if (!tmp8) {
    class C {
      constructor() {
        return closure_1(true);
      }
    }
    const obj16 = { style: tmp4.loading, children: closure_11(closure_5, { animating: true }) };
    tmp14 = closure_11(View, obj16);
  }
  cResult[7] = tmp8;
  cResult[8] = tmp4.loading;
  cResult[9] = tmp14;
}) : ((arg0) => {
  ({ orbsAmount, onClose } = arg0);
  importDefault = undefined;
  const tmp = closure_13();
  const items = [onClose];
  const items1 = [onClose];
  const callback = noop.useCallback(() => {
    onClose();
    const obj = CollectiblesActionCreators;
    const result = obj.openCollectiblesShopMobile({ screen: constants.ORBS, analyticsLocations: [], analyticsSource: AnalyticsLocationDefault.PREMIUM_MARKETING });
  }, items);
  const callback1 = noop.useCallback(() => {
    onClose();
    openUserSettings.openUserSettings({ screen: UserSettingsSections.PREMIUM });
  }, items1);
  [tmp5, c1] = noop.useState(false);
  let obj = { style: tmp.root, children: null };
  const obj2 = { style: StyleSheet.absoluteFill, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  const callback2 = noop.useCallback(() => _undefined(true), []);
  obj2.children = closure_11(onClose(11948).OrbsRewardBackground, { style: tmp.background, onReady: callback2 });
  const items2 = [closure_11(View, obj2), , ];
  let tmp9Result = !tmp7Result;
  if (!tmp7Result) {
    const obj4 = { style: tmp.loading, children: tmp9(closure_5, { animating: true }) };
    tmp9Result = tmp9(tmp8, obj4);
  }
  items2[1] = tmp9Result;
  if (tmp7Result) {
    const rect = { style: tmp.main, top: true, bottom: true, left: true, right: true, children: null };
    const obj5 = { style: tmp.header, children: null };
    const obj6 = { onPress: onClose, variant: "overlay" };
    obj5.children = tmp9(tmp10(7476).ActionSheetCloseButton, obj6);
    const items3 = [tmp9(tmp8, obj5), , ];
    const obj7 = { style: tmp.body, children: null };
    const obj8 = { source: _modDef13652, style: tmp.orbGraphic, resizeMode: "contain" };
    const items4 = [tmp9(closure_6, obj8), ];
    const obj9 = { children: null };
    const obj10 = { variant: "heading-lg/bold", color: "text-overlay-light", style: tmp.title, children: null };
    const intl = tmp10(1119).intl;
    const obj11 = { orbAmount: orbsAmount };
    obj10.children = intl.formatToPlainString(tmp10(1119).t["O2/Bj8"], obj11);
    const items5 = [tmp9(tmp10(4786).Text, obj10), ];
    const obj12 = { variant: "text-md/normal", color: "text-overlay-light", style: tmp.description, children: null };
    const intl2 = tmp10(1119).intl;
    const obj13 = { orbAmount: orbsAmount };
    obj12.children = intl2.format(tmp10(1119).t.qiZPb6, obj13);
    items5[1] = tmp9(tmp10(4786).Text, obj12);
    obj9.children = items5;
    items4[1] = tmp7(tmp8, obj9);
    obj7.children = items4;
    items3[1] = tmp7(tmp8, obj7);
    const obj14 = { style: tmp.footer, children: null };
    const obj15 = { text: null, variant: "primary", size: "lg", onPress: null };
    const intl3 = tmp10(1119).intl;
    obj15.text = intl3.string(tmp10(1119).t.OhOWfI);
    obj15.onPress = callback;
    const items6 = [tmp9(tmp10(5220).Button, obj15), ];
    const obj16 = { text: null, variant: "secondary-overlay", size: "lg", onPress: null };
    const intl4 = tmp10(1119).intl;
    obj16.text = intl4.string(tmp10(1119).t.CvXwDY);
    obj16.onPress = callback1;
    items6[1] = tmp9(tmp10(5220).Button, obj16);
    obj14.children = items6;
    items3[2] = tmp7(tmp8, obj14);
    rect.children = items3;
    tmp7Result = tmp7(tmp10(7403).SafeAreaPaddingView, rect);
  }
  items2[2] = tmp7Result;
  obj.children = items2;
  return closure_12(View, obj);
});
