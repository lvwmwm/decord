// Module ID: 16431
// Function ID: 16432
// Name: UserProfileHexagonCampaignDisplayNameStyleEditButton
// Dependencies: [5, 32, 19, 17, 1384, 1072, 5034, 21, 5009, 575, 16432, 1114, 2931, 16411, 6778, 8729, 6433, 5036, 10752, 5588, 8727, 16410, 5707, 7320, 7345, 9884, 9885, 7077, 16433, 6974, 7032, 5582, 6978, 7364, 16426, 2]
// Exports: default

// Module 16431 (UserProfileHexagonCampaignDisplayNameStyleEditButton)
import nativeDefault from "native" /* 575 */;
import _modDef2931 from "module_2931" /* 2931 */;
import LinearGradientDefault from "LinearGradient" /* 5582 */;
import useDisplayNameStylesDefault from "useDisplayNameStyles" /* 6433 */;
import _modDef7032 from "module_7032" /* 7032 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7320 */;
import openPremiumModalDefault from "openPremiumModal" /* 9884 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 9885 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 10752 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1384 */;
import Constants from "Constants" /* 1072 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5034 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0, currentUser, dependencyMap, displayNameStyles, importDefault, ref;

let StyleSheet;
let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let map1;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let unpackModuleId;
let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ View: metroRequire, StyleSheet } = react_native);
({ AnalyticsObjects: metroImportAll, AnalyticsPages: c9, AnalyticsSections: c10, HorizontalGradient: unpackModuleId } = Constants);
({ HEXAGON_CAMPAIGN_DISPLAY_NAME_STYLES: closure_12, HexagonCampaignPerk: map1, HexagonCampaignPerkAvailability: closure_14 } = HexagonCampaignConstants);
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
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
let closure_19 = createStyles(obj);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileHexagonCampaignDisplayNameStyleEditButton.tsx");

export default function UserProfileHexagonCampaignDisplayNameStyleEditButton(availability) {
  let _undefined;
  let _undefined2;
  let _undefined22;
  let c2;
  let c3;
  let c4;
  let closure_5;
  let disabled;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj14;
  let obj18;
  let obj19;
  let obj8;
  let obj9;
  let str;
  let tmp13;
  let tmp15;
  let tmp18Result;
  let tmp18Result4;
  let tmp22;
  let tmp33;
  let user;
  ({ user, disabled } = availability);
  availability = availability.availability;
  if (disabled === undefined) {
    disabled = false;
  }
  importDefault = undefined;
  dependencyMap = undefined;
  _asyncToGenerator = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let closure_6;
  let callback2;
  let analyticsLocations;
  let callback3;
  let tmp = closure_19();
  _require = tmp2;
  const tmp3 = _require;
  const tmp4 = dependencyMap;
  let obj = require("useDisplayNameStylesPendingName");
  const displayNameStylesPendingName = obj.useDisplayNameStylesPendingName(user);
  let intl = require("intl").intl;
  const stringResult = intl.string(_modDef2931["86GtGH"]);
  const useTrackHexagonCampaignContentViewed = require("HexagonCampaignAnalytics").useTrackHexagonCampaignContentViewed;
  const tmp8 = require("HexagonCampaignAnalytics");
  const trackHexagonCampaignContentViewed = useTrackHexagonCampaignContentViewed(require("QuestTypes").QuestContent.DISPLAY_NAME_STYLES_SETTINGS, require("HexagonCampaignAnalytics").HexagonCampaignContentSurface.NON_NITRO_CARD, true);
  let obj2 = require("ProfileCustomizationUtils");
  let obj3 = { userId: user.id, pendingDisplayNameStyles: obj2.useGuildMemberOrUserPendingDisplayNameStyles(user).pendingDisplayNameStyles, ignoreDisabledStylesSetting: true };
  const tmp10 = useDisplayNameStylesDefault(obj3);
  let result = null != tmp10;
  if (result) {
    const tmp3Result = tmp3(5036);
    result = tmp3Result.isHexagonCampaignDisplayNameStyle(tmp10);
  }
  importDefault = result;
  let obj5 = react;
  [tmp13, c2] = _slicedToArray(react.useState(0), 2);
  const tmp12 = _slicedToArray(react.useState(0), 2);
  [tmp15, c3] = _slicedToArray(react.useState(0), 2);
  const tmp14 = _slicedToArray(react.useState(0), 2);
  const callback = react.useCallback((nativeEvent) => {
    _undefined2(nativeEvent.nativeEvent.layout.width);
  }, []);
  let tmp18 = closure_15;
  const callback1 = react.useCallback((nativeEvent) => {
    _undefined22(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj4 = { userId: user.id, userName: displayNameStylesPendingName, pendingDisplayNameStyles, ignoreDisabledStylesSetting: true, variant: "heading-xxl/semibold", lineClamp: 1, ellipsizeMode: "clip" };
  const tmp20 = closure_15(UsernameWithEffectsDefault, obj4);
  [tmp22, c4] = _slicedToArray(react.useState(false), 2);
  const tmp21 = _slicedToArray(react.useState(false), 2);
  react = react.useRef(false);
  closure_6 = react.useRef(true);
  const tmp3Result2 = tmp3(5588);
  const unmountEffect = tmp3Result2.useUnmountEffect(() => {
    closure_6.current = false;
  });
  const tmp19 = pendingDisplayNameStyles;
  if (!disabled) {
    disabled = tmp22;
  }
  const useCallback = obj5.useCallback;
  _require = _asyncToGenerator(async (arg0, value) => {
    let intl;
    let obj9;
    let v1;
    closure_0 = arg0;
    if (ref === 2) {
      ref = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        ref = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            ref = 3;
            throw value;
          } else if (arg0 === 2) {
            ref = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            closure_0 = undefined;
            if (!ref.current) {
              if (closure_0) {
                ref.current = true;
                c4(true);
                closure_0 = false;
                c3 = 1;
                c4 = 2;
                ref = 1;
                const obj8 = { value: obj9.ensureHexagonCampaignEnrollment(constants.DISPLAY_NAME_STYLE), done: false };
                obj9 = closure_0(_undefined[21]);
                return obj8;
              } else {
                currentUser = currentUser.getCurrentUser();
                displayNameStyles = undefined;
                if (currentUser != null) {
                  displayNameStyles = currentUser.displayNameStyles;
                }
                const setPendingChanges = closure_0(_undefined[20]).setPendingChanges;
                const tmp40 = closure_0(_undefined[20]);
                if (null == displayNameStyles) {
                  displayNameStyles = null;
                } else {
                  const obj7 = closure_0(_undefined[17]);
                }
                const obj10 = { displayNameStyles };
                setPendingChanges(obj10);
              }
            }
          }
        } else {
          if (1 === c4) {
            c3 = 0;
            closure_0 = false;
          } else if (arg0 === 1) {
            ref = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            ref = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_0 = value;
            c3 = 0;
          }
          if (ref2.current) {
            ref.current = false;
            c4(false);
            if (closure_0) {
              const obj3 = closure_0(_undefined[21]);
              const result = obj3.saveHexagonCampaignPreviousDisplayNameStyles();
              const obj11 = { displayNameStyles };
              const obj4 = closure_0(_undefined[20]);
              obj4.setPendingChanges(obj11);
              const obj6 = closure_0(_undefined[21]);
              const result1 = obj6.markHexagonCampaignPerkApplied(constants.DISPLAY_NAME_STYLE);
            } else {
              const obj12 = { text: intl.string(closure_0(_undefined[11]).t.F8FvUy) };
              const open = _undefined(_undefined[22]).open;
              const tmp18 = _undefined(_undefined[22]);
              intl = closure_0(_undefined[11]).intl;
              open("HEXAGON_CAMPAIGN_ENROLLMENT_ERROR", obj12);
            }
          }
        }
        ref = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp50) {
        if (0 === c3) {
          ref = 3;
          throw tmp50;
        } else {
          c4 = 1;
        }
      }
    }
  });
  callback2 = useCallback(function() {
    return closure_0(...arguments);
  }, []);
  const tmp6Result = useAnalyticsLocationsDefault;
  analyticsLocations = tmp6Result(tmp6(7345).EDIT_DISPLAY_NAME_STYLES_MODAL).analyticsLocations;
  const items = [analyticsLocations];
  callback3 = obj5.useCallback(() => {
    let obj2;
    const obj = { analyticsLocation: obj2, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
    obj2 = { page: callback3.USER_SETTINGS, section: constants.SETTINGS_DISPLAY_NAME_STYLES, object: metroImportAll.PREMIUM_UPSELL_BUTTON };
    const tmp = openPremiumModalDefault;
    tmp(obj);
  }, items);
  const items1 = [tmp2, result, callback3, callback2];
  const callback4 = obj5.useCallback(() => {
    const tmp = closure_0;
    if (tmp) {
      callback3();
    } else {
      callback2(!c1);
    }
  }, items1);
  let obj6 = { label: stringResult, labelTrailing: tmp18Result, children: tmp31(tmp32, obj9) };
  tmp18Result = undefined;
  const Input = tmp3(7077).Input;
  if (availability !== constants5.LOCKED) {
    let obj7 = { style: tmp.labelBadge, children: tmp18(tmp6(16433), obj8) };
    obj8 = { perk: constants4.DISPLAY_NAME_STYLE };
    tmp18Result = tmp18(closure_6, obj7);
  }
  obj9 = { style: tmp.card, children: items5 };
  let obj10 = { onPress: callback4, style: tmp.row, disabled, accessibilityRole: str, accessibilityLabel: stringResult, accessibilityState: tmp33, children: items4 };
  str = "switch";
  const PressableHighlight = tmp3(6974).PressableHighlight;
  if (availability === constants5.LOCKED) {
    str = "button";
  }
  tmp33 = undefined;
  if (availability !== constants5.LOCKED) {
    let obj11 = { checked: result, busy: tmp22 };
    tmp33 = obj11;
  }
  let obj12 = { style: tmp.name, onLayout: callback, children: items3 };
  let tmp18Result3 = tmp20;
  if (tmp13 > 0) {
    tmp18Result3 = tmp20;
    if (tmp15 > tmp13) {
      const obj13 = { maskElement: closure_16(closure_6, obj14), children: tmp20 };
      obj14 = { style: tmp.nameMask, children: items2 };
      items2 = [, ];
      const obj15 = { colors, style: tmp.nameMaskOpaque };
      const tmp6Result2 = _modDef7032;
      items2[0] = tmp18(LinearGradientDefault, obj15);
      const obj16 = { colors: colors2, start: null, end: null, style: tmp.nameMaskFade };
      ({ START: obj22.start, END: obj22.end } = closure_11);
      items2[1] = tmp18(LinearGradientDefault, obj16);
      tmp18Result3 = tmp18(tmp6Result2, obj13);
    }
  }
  items3 = [tmp18Result3, ];
  const obj17 = { style: tmp.nameMeasure, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp18(closure_6, obj18) };
  obj18 = { style: tmp.nameMeasureText, onLayout: callback1, children: tmp18(UsernameWithEffectsDefault, obj19) };
  obj19 = { userId: user.id, userName: displayNameStylesPendingName, pendingDisplayNameStyles: tmp19, ignoreDisabledStylesSetting: true, variant: "heading-xxl/semibold", lineClamp: 1 };
  items3[1] = tmp18(closure_6, obj17);
  items4 = [tmp31(tmp32, obj12), ];
  if (availability === constants5.LOCKED) {
    tmp18Result4 = tmp18(tmp3(6978).TableRowArrow, {});
  } else {
    const obj20 = { "aria-hidden": true, value: result, onValueChange: callback2, disabled };
    tmp18Result4 = tmp18(tmp3(7364).FormSwitch, obj20);
  }
  items4[1] = tmp18Result4;
  items5 = [tmp31(PressableHighlight, obj10), tmp18(tmp6(16426), { showLearnMore: true })];
  return tmp18(Input, obj6);
};
