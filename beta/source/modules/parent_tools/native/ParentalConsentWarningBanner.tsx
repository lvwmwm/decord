// Module ID: 16821
// Function ID: 16822
// Name: ParentalConsentWarningBanner
// Dependencies: [19, 17, 6958, 1074, 21, 576, 4836, 1613, 14402, 14401, 16822, 8960, 4531, 6972, 1241, 6959, 6800, 4832, 5293, 1115, 2487, 2]
// Exports: default

// Module 16821 (ParentalConsentWarningBanner)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import Text_Text from "Text/Text" /* 4832 */;
import openUserSettings from "openUserSettings" /* 6800 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 6958 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 6959 */;
import _modDef6972 from "module_6972" /* 6972 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let StyleSheet;
let c10;
let c9;
let closure_12;
let closure_4;
let map1;
let metroImportAll;
let obj2;
let obj3;
let rect;
let unpackModuleId;
({ Pressable: closure_4, StyleSheet } = react_native);
const View = react_native.View;
const FamilyCenterSubPages = FamilyCenterConstants.FamilyCenterSubPages;
({ AnalyticEvents: metroImportAll, UserSettingsSections: c9, VerticalGradient: c10 } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let closure_14 = 28 + nativeDefault.space.PX_16;
const locations = [0.5875, 1];
let createStyles = createStyles_mod;
let obj = { strip: rect, pressable: obj2, label: obj3, link: { textDecorationLine: "underline" } };
rect = { position: "absolute", top: 0, left: 0, right: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
obj2 = { flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16 };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { paddingRight: nativeDefault.space.PX_8 };
let closure_16 = createStyles(obj);
const result = size.fileFinishedImporting("modules/parent_tools/native/ParentalConsentWarningBanner.tsx");

export default function ParentalConsentWarningBanner(children) {
  let Text;
  let formatResult;
  let intl;
  let items5;
  let items6;
  let items7;
  let link;
  let obj13;
  let token;
  let daysRemaining;
  children = children.children;
  const tmp = closure_16();
  _require = tmp;
  const tmp4 = token(daysRemaining[7])();
  let obj = require("useParentalConsentWarning");
  const parentalConsentWarning = obj.useParentalConsentWarning();
  let obj2 = require("useIsParentalConsentBannerActive");
  const isParentalConsentBannerActive = obj2.useIsParentalConsentBannerActive();
  let obj3 = require("useIsOnMainSurface");
  let isOnMainSurface = obj3.useIsOnMainSurface();
  let obj4 = require("useGlobalStatusIndicatorState");
  const isVisible = obj4.useGlobalStatusIndicatorState().isVisible;
  let obj5 = require("useToken");
  token = obj5.useToken(token(daysRemaining[5]).colors.BACKGROUND_FEEDBACK_WARNING);
  let items = [token];
  daysRemaining = undefined;
  const memo = react.useMemo(() => {
    const items = [token, ];
    const obj = _modDef6972(token);
    const setAlphaResult = obj.setAlpha(0);
    items[1] = setAlphaResult.toRgbString();
    return items;
  }, items);
  if (parentalConsentWarning != null) {
    daysRemaining = parentalConsentWarning.daysRemaining;
  }
  if (daysRemaining == null) {
    daysRemaining = null;
  }
  if (isOnMainSurface) {
    isOnMainSurface = isParentalConsentBannerActive;
  }
  if (isOnMainSurface) {
    isOnMainSurface = !isVisible;
  }
  if (isOnMainSurface) {
    isOnMainSurface = null != daysRemaining;
  }
  if (isOnMainSurface) {
    isOnMainSurface = daysRemaining >= 0;
  }
  const items1 = [daysRemaining];
  const sum = tmp4.top + closure_14;
  const items2 = [tmp.link];
  const callback = obj6.useCallback(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { days_remaining: daysRemaining };
    obj.track(metroImportAll.PARENTAL_CONSENT_WARNING_BANNER_TAPPED, obj2);
    const obj3 = FamilyCenterActionCreatorsDefault;
    const tab = obj3.selectTab(FamilyCenterSubPages.REQUESTS);
    const obj4 = openUserSettings;
    const obj5 = { screen: constants.FAMILY_CENTER };
    obj4.openUserSettings(obj5);
  }, items1);
  const callback1 = obj6.useCallback((children, arg1) => {
    const obj = { variant: "text-sm/medium", color: "text-strong", style: link.link, children };
    return unpackModuleId(Text_Text.Text, obj, arg1);
  }, items2);
  const items3 = [StyleSheet.absoluteFill, ];
  let num2 = 0;
  const tmp12 = closure_14;
  const tmp17 = closure_13;
  const tmp20 = StyleSheet;
  if (isOnMainSurface) {
    num2 = tmp12;
  }
  items3[1] = { marginTop: num2 };
  const children1 = [closure_11(View, { style: items3, children }), ];
  let tmp16Result = null;
  if (isOnMainSurface) {
    tmp16Result = null;
    if (null != daysRemaining) {
      const obj7 = { style: items5, pointerEvents: "box-none", children: items6 };
      items5 = [tmp.strip, ];
      const obj8 = { height: sum };
      items5[1] = obj8;
      const obj10 = { pointerEvents: "none", style: tmp20.absoluteFill, colors: memo, locations, start: null, end: null };
      ({ START: obj9.start, END: obj9.end } = closure_10);
      items6 = [closure_11(token(daysRemaining[18]), obj10), ];
      const obj11 = { accessibilityRole: "button", accessibilityHint: intl.string(token(daysRemaining[20]).O2HKdA), onPress: callback, style: items7, children: closure_11(Text, obj13) };
      intl = tmp5(tmp3[19]).intl;
      items7 = [tmp.pressable, ];
      const obj12 = { paddingTop: tmp4.top + 8 };
      items7[1] = obj12;
      obj13 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, style: tmp.label, children: formatResult };
      Text = tmp5(tmp3[17]).Text;
      const tmp24 = closure_4;
      if (0 === daysRemaining) {
        const intl3 = tmp5(tmp3[19]).intl;
        const obj14 = { connectHook: callback1 };
        formatResult = intl3.format(tmp2(tmp3[20]).Gfqlpa, obj14);
      } else {
        const intl2 = tmp5(tmp3[19]).intl;
        const obj22 = { count: daysRemaining, connectHook: callback1 };
        formatResult = intl2.format(tmp2(tmp3[20]).ZBK5mM, obj22);
      }
      items6[1] = closure_11(tmp24, obj11);
      tmp16Result = tmp16(tmp19, obj7);
    }
  }
  children1[1] = tmp16Result;
  return closure_12(tmp17, { children: children1 });
};
