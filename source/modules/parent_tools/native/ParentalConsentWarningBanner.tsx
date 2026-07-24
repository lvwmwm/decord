// Module ID: 15726
// Function ID: 121226
// Name: StyleSheet
// Dependencies: [31, 27, 6770, 653, 33, 689, 4130, 1557, 13820, 13819, 15727, 10660, 3834, 6784, 675, 6771, 5796, 4126, 4554, 1212, 2198, 2]
// Exports: default

// Module 15726 (StyleSheet)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { FamilyCenterSubPages } from "items";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let StyleSheet;
let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_4;
let closure_8;
let closure_9;
let require = arg1;
({ Pressable: closure_4, StyleSheet } = get_ActivityIndicator);
const View = get_ActivityIndicator.View;
({ AnalyticEvents: closure_8, UserSettingsSections: closure_9, VerticalGradient: closure_10 } = ME);
({ jsx: closure_11, jsxs: closure_12, Fragment: closure_13 } = jsxProd);
let closure_14 = 28 + require("_createForOfIteratorHelperLoose").space.PX_16;
let closure_15 = [0.5875, 1];
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { position: "absolute", top: 0, left: 0, right: 0, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose.strip = _createForOfIteratorHelperLoose;
let obj1 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj1["flexDirection"] = "row";
obj1["alignItems"] = "center";
obj1["justifyContent"] = "center";
obj1["paddingHorizontal"] = require("_createForOfIteratorHelperLoose").space.PX_12;
obj1["paddingBottom"] = require("_createForOfIteratorHelperLoose").space.PX_16;
_createForOfIteratorHelperLoose.pressable = obj1;
_createForOfIteratorHelperLoose.label = { paddingRight: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.link = { textDecorationLine: "underline" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { paddingRight: require("_createForOfIteratorHelperLoose").space.PX_8 };
const result = require("items").fileFinishedImporting("modules/parent_tools/native/ParentalConsentWarningBanner.tsx");

export default function ParentalConsentWarningBanner(children) {
  let dependencyMap;
  const tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  const tmp2 = token(1557)();
  let obj = require(13820) /* useParentalConsentWarning */;
  const parentalConsentWarning = obj.useParentalConsentWarning();
  let obj1 = require(13819) /* useIsParentalConsentBannerActive */;
  const isParentalConsentBannerActive = obj1.useIsParentalConsentBannerActive();
  let obj2 = require(15727) /* getActiveRoute */;
  const isOnMainSurface = obj2.useIsOnMainSurface();
  let obj3 = require(10660) /* useGlobalStatusIndicatorState */;
  let obj4 = require(3834) /* map */;
  token = obj4.useToken(token(689).colors.BACKGROUND_FEEDBACK_WARNING);
  let items = [token];
  let daysRemaining;
  const memo = React.useMemo(() => {
    const items = [token, ];
    const obj = token(_undefined[13])(token);
    items[1] = token(_undefined[13])(token).setAlpha(0).toRgbString();
    return items;
  }, items);
  if (null != parentalConsentWarning) {
    daysRemaining = parentalConsentWarning.daysRemaining;
  }
  let tmp9 = null;
  if (null != daysRemaining) {
    tmp9 = daysRemaining;
  }
  dependencyMap = tmp9;
  let tmp10 = isOnMainSurface;
  if (isOnMainSurface) {
    tmp10 = isParentalConsentBannerActive;
  }
  if (tmp10) {
    tmp10 = !obj3.useGlobalStatusIndicatorState().isVisible;
  }
  if (tmp10) {
    tmp10 = null != tmp9;
  }
  if (tmp10) {
    tmp10 = tmp9 >= 0;
  }
  const items1 = [tmp9];
  const sum = tmp2.top + closure_14;
  const items2 = [tmp.link];
  const callback = React.useCallback(() => {
    let obj = token(_undefined[14]);
    obj = { days_remaining: _undefined };
    obj.track(outer1_8.PARENTAL_CONSENT_WARNING_BANNER_TAPPED, obj);
    const tab = token(_undefined[15]).selectTab(outer1_7.REQUESTS);
    const obj3 = token(_undefined[15]);
    obj = { screen: outer1_9.FAMILY_CENTER };
    tmp(_undefined[16]).openUserSettings(obj);
  }, items1);
  const callback1 = React.useCallback((children) => {
    const obj = { variant: "text-sm/medium", color: "text-strong", style: tmp.link, children };
    return outer1_11(tmp(_undefined[17]).Text, obj, arg1);
  }, items2);
  obj = {};
  obj = {};
  const items3 = [StyleSheet.absoluteFill, ];
  obj1 = {};
  let num2 = 0;
  if (tmp10) {
    num2 = closure_14;
  }
  obj1.marginTop = num2;
  items3[1] = obj1;
  obj.style = items3;
  obj.children = children.children;
  const items4 = [callback(View, obj), ];
  let tmp18 = null;
  if (tmp10) {
    tmp18 = null;
    if (null != tmp9) {
      obj2 = {};
      const items5 = [tmp.strip, ];
      obj3 = { height: sum };
      items5[1] = obj3;
      obj2.style = items5;
      obj2.pointerEvents = "box-none";
      obj4 = { pointerEvents: "none", style: StyleSheet.absoluteFill, colors: memo, locations: closure_15 };
      ({ START: obj11.start, END: obj11.end } = closure_10);
      const items6 = [callback(token(4554), obj4), ];
      let obj5 = { accessibilityRole: "button" };
      let num4 = 19;
      const intl = require(1212) /* getSystemLocale */.intl;
      obj5.accessibilityHint = intl.string(token(2198).O2HKdA);
      obj5.onPress = callback;
      const items7 = [tmp.pressable, ];
      const obj6 = { paddingTop: tmp2.top + 8 };
      items7[1] = obj6;
      obj5.style = items7;
      let obj7 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, style: tmp.label };
      if (0 === tmp9) {
        const intl3 = require(dependencyMap[num4]).intl;
        num4 = intl3.format;
        const obj8 = { connectHook: callback1 };
        let num4Result = num4(token(2198).Gfqlpa, obj8);
      } else {
        const intl2 = require(dependencyMap[num4]).intl;
        const obj9 = { count: tmp9, connectHook: callback1 };
        num4Result = intl2.format(token(2198).ZBK5mM, obj9);
      }
      obj7.children = num4Result;
      obj7 = tmp21(require(4126) /* Text */.Text, obj7);
      obj5.children = obj7;
      obj5 = tmp21(closure_4, obj5);
      items6[1] = obj5;
      obj2.children = items6;
      closure_12(View, obj2);
      const tmp19 = closure_12;
      const tmp20 = View;
      const tmp27 = closure_4;
    }
  }
  items4[1] = tmp18;
  obj.children = items4;
  return closure_12(closure_13, obj);
};
