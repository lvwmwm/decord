// Module ID: 17105
// Function ID: 17106
// Name: UserProfileHexagonCampaignDisplayNameStyleEditButton
// Dependencies: [32, 19, 17, 1072, 5331, 21, 5306, 575, 6015, 1113, 17106, 3125, 17085, 5341, 17107, 10064, 7918, 7937, 9579, 10954, 7620, 17108, 7428, 7533, 5893, 7456, 7955, 17100, 2]
// Exports: default

// Module 17105 (UserProfileHexagonCampaignDisplayNameStyleEditButton)
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 6015 */;
import openPremiumModalDefault from "openPremiumModal" /* 9579 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 10954 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5331 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let StyleSheet;
let c10;
let c9;
let closure_12;
let closure_14;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let unpackModuleId;
function showEnrollmentError() {
  let intl;
  const obj = { text: intl.string(intl2.t.F8FvUy) };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl2.intl;
  open("HEXAGON_CAMPAIGN_ENROLLMENT_ERROR", obj);
}
let react = react_mod;
({ View: hasOwnProperty, StyleSheet } = react_native);
({ AnalyticsObjects: metroRequire, AnalyticsPages: metroImportDefault, AnalyticsSections: metroImportAll, HorizontalGradient: c9 } = Constants);
({ HEXAGON_CAMPAIGN_DISPLAY_NAME_STYLES: c10, HexagonCampaignPerk: unpackModuleId, HexagonCampaignPerkAvailability: closure_12 } = HexagonCampaignConstants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
const colors = ["black", "black"];
const colors2 = ["black", "transparent"];
let createStyles = createStyles_mod;
let obj = { card: obj2, row: obj3, name: { flex: 1 }, nameMask: obj4, nameMaskOpaque: { flex: 1 }, nameMaskFade: obj5, nameMeasure: { position: "absolute", top: 0, left: 0, width: 10000, opacity: 0 }, nameMeasureText: { alignSelf: "flex-start" }, labelBadge: obj6 };
obj2 = { flexGrow: 1, flexShrink: 1, borderColor: nativeDefault.colors.BORDER_STRONG, borderWidth: 1, borderRadius: nativeDefault.radii.md, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_16 };
obj4 = { flexDirection: "row" };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj5 = { width: nativeDefault.space.PX_32 };
obj6 = { marginLeft: nativeDefault.space.PX_8 };
let closure_17 = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileHexagonCampaignDisplayNameStyleEditButton.tsx");

export default function UserProfileHexagonCampaignDisplayNameStyleEditButton(availability) {
  let _undefined;
  let _undefined2;
  let applyCampaignDisplayNameStyle;
  let c4;
  let c5;
  let closure_0;
  let disabled;
  let isEnrolling;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj13;
  let obj17;
  let obj18;
  let obj7;
  let obj8;
  let str;
  let tmp12;
  let tmp14;
  let tmp17Result;
  let tmp17Result4;
  let tmp29;
  let user;
  ({ user, disabled } = availability);
  availability = availability.availability;
  if (disabled === undefined) {
    disabled = false;
  }
  let isApplied;
  applyCampaignDisplayNameStyle = undefined;
  react = undefined;
  c5 = undefined;
  let callback2;
  let analyticsLocations;
  let callback3;
  let tmp = closure_17();
  _require = tmp2;
  let obj = require("useDisplayNameStylesPendingName");
  const displayNameStylesPendingName = obj.useDisplayNameStylesPendingName(user);
  const intl = require("intl").intl;
  const stringResult = intl.string(isApplied(applyCampaignDisplayNameStyle[11])["86GtGH"]);
  const useTrackHexagonCampaignContentViewed = require("HexagonCampaignAnalytics").useTrackHexagonCampaignContentViewed;
  require("HexagonCampaignAnalytics");
  const trackHexagonCampaignContentViewed = useTrackHexagonCampaignContentViewed(require("QuestTypes").QuestContent.DISPLAY_NAME_STYLES_SETTINGS, require("HexagonCampaignAnalytics").HexagonCampaignContentSurface.NON_NITRO_CARD, true);
  let obj2 = require("useHexagonCampaignDisplayNameStyleToggle");
  const hexagonCampaignDisplayNameStyleToggle = obj2.useHexagonCampaignDisplayNameStyleToggle(user, showEnrollmentError);
  isApplied = hexagonCampaignDisplayNameStyleToggle.isApplied;
  ({ isEnrolling, applyCampaignDisplayNameStyle } = hexagonCampaignDisplayNameStyleToggle);
  const removeCampaignDisplayNameStyle = hexagonCampaignDisplayNameStyleToggle.removeCampaignDisplayNameStyle;
  [tmp12, c4] = removeCampaignDisplayNameStyle(react.useState(0), 2);
  removeCampaignDisplayNameStyle(react.useState(0), 2);
  [tmp14, c5] = removeCampaignDisplayNameStyle(react.useState(0), 2);
  removeCampaignDisplayNameStyle(react.useState(0), 2);
  const callback = react.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const callback1 = react.useCallback((nativeEvent) => {
    _undefined2(nativeEvent.nativeEvent.layout.width);
  }, []);
  const obj4 = { userId: user.id, userName: displayNameStylesPendingName, pendingDisplayNameStyles, ignoreDisabledStylesSetting: true, variant: "heading-xxl/semibold", lineClamp: 1, ellipsizeMode: "clip" };
  const tmp19 = closure_13(isApplied(applyCampaignDisplayNameStyle[15]), obj4);
  const tmp18 = pendingDisplayNameStyles;
  if (!disabled) {
    disabled = isEnrolling;
  }
  const items = [applyCampaignDisplayNameStyle, removeCampaignDisplayNameStyle];
  callback2 = obj3.useCallback((arg0) => {
    const tmp = arg0;
    if (tmp) {
      applyCampaignDisplayNameStyle();
    } else {
      removeCampaignDisplayNameStyle();
    }
  }, items);
  const tmp6Result = isApplied(applyCampaignDisplayNameStyle[16]);
  analyticsLocations = tmp6Result(tmp6(tmp4[17]).EDIT_DISPLAY_NAME_STYLES_MODAL).analyticsLocations;
  const items1 = [analyticsLocations];
  callback3 = obj3.useCallback(() => {
    let obj2;
    const obj = { analyticsLocation: obj2, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
    obj2 = { page: metroImportDefault.USER_SETTINGS, section: metroImportAll.SETTINGS_DISPLAY_NAME_STYLES, object: metroRequire.PREMIUM_UPSELL_BUTTON };
    const tmp = openPremiumModalDefault;
    tmp(obj);
  }, items1);
  const items2 = [tmp2, isApplied, callback3, callback2];
  const callback4 = obj3.useCallback(() => {
    const tmp = closure_0;
    if (tmp) {
      callback3();
    } else {
      callback2(!isApplied);
    }
  }, items2);
  const obj5 = { label: stringResult, labelTrailing: tmp17Result, children: closure_14(c5, obj8) };
  tmp17Result = undefined;
  const Input = tmp3(tmp4[20]).Input;
  if (availability !== constants5.LOCKED) {
    const obj6 = { style: tmp.labelBadge, children: closure_13(isApplied(applyCampaignDisplayNameStyle[21]), obj7) };
    obj7 = { perk: constants4.DISPLAY_NAME_STYLE };
    tmp17Result = tmp17(c5, obj6);
  }
  const obj9 = { onPress: callback4, style: tmp.row, disabled, accessibilityRole: str, accessibilityLabel: stringResult, accessibilityState: tmp29, children: items5 };
  str = "switch";
  obj8 = { style: tmp.card, children: items6 };
  const PressableHighlight = tmp3(tmp4[22]).PressableHighlight;
  if (availability === constants5.LOCKED) {
    str = "button";
  }
  tmp29 = undefined;
  if (availability !== constants5.LOCKED) {
    tmp29 = { checked: isApplied, busy: isEnrolling };
    const obj10 = { checked: isApplied, busy: isEnrolling };
  }
  let tmp17Result3 = tmp19;
  const obj11 = { style: tmp.name, onLayout: callback, children: items4 };
  if (tmp12 > 0) {
    tmp17Result3 = tmp19;
    if (tmp14 > tmp12) {
      const obj12 = { maskElement: closure_14(c5, obj13), children: tmp19 };
      obj13 = { style: tmp.nameMask, children: items3 };
      items3 = [, ];
      const obj14 = { colors, style: tmp.nameMaskOpaque };
      const tmp6Result2 = isApplied(applyCampaignDisplayNameStyle[23]);
      items3[0] = closure_13(isApplied(applyCampaignDisplayNameStyle[24]), obj14);
      const obj15 = { colors: colors2, start: null, end: null, style: tmp.nameMaskFade };
      ({ START: obj19.start, END: obj19.end } = closure_9);
      items3[1] = closure_13(isApplied(applyCampaignDisplayNameStyle[24]), obj15);
      tmp17Result3 = tmp17(tmp6Result2, obj12);
    }
  }
  items4 = [tmp17Result3, ];
  const obj16 = { style: tmp.nameMeasure, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: closure_13(c5, obj17) };
  obj17 = { style: tmp.nameMeasureText, onLayout: callback1, children: closure_13(isApplied(applyCampaignDisplayNameStyle[15]), obj18) };
  obj18 = { userId: user.id, userName: displayNameStylesPendingName, pendingDisplayNameStyles: tmp18, ignoreDisabledStylesSetting: true, variant: "heading-xxl/semibold", lineClamp: 1 };
  items4[1] = closure_13(c5, obj16);
  items5 = [closure_14(c5, obj11), ];
  if (availability === constants5.LOCKED) {
    tmp17Result4 = tmp17(tmp3(tmp4[25]).TableRowArrow, {});
  } else {
    const obj35 = { "aria-hidden": true, value: isApplied, onValueChange: callback2, disabled };
    tmp17Result4 = tmp17(tmp3(tmp4[26]).FormSwitch, obj35);
  }
  items5[1] = tmp17Result4;
  items6 = [closure_14(PressableHighlight, obj9), closure_13(tmp6(tmp4[27]), { showLearnMore: true })];
  return closure_13(Input, obj5);
};
