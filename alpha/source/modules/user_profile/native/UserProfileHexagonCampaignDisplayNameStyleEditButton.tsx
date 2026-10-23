// Module ID: 15849
// Function ID: 15850
// Name: UserProfileHexagonCampaignDisplayNameStyleEditButton
// Dependencies: [5, 32, 19, 17, 1392, 1087, 4994, 21, 4969, 587, 558, 576, 15850, 1128, 2928, 8653, 6365, 4996, 10660, 5261, 8651, 15828, 5661, 7251, 7276, 9791, 9792, 15851, 6964, 5256, 6910, 7294, 6906, 15844, 7007, 2]

// Module 15849 (UserProfileHexagonCampaignDisplayNameStyleEditButton)
import nativeDefault from "native" /* 587 */;
import _modDef2928 from "module_2928" /* 2928 */;
import LinearGradientDefault from "LinearGradient" /* 5256 */;
import useDisplayNameStylesDefault from "useDisplayNameStyles" /* 6365 */;
import _modDef6964 from "module_6964" /* 6964 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7251 */;
import openPremiumModalDefault from "openPremiumModal" /* 9791 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 9792 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 10660 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1392 */;
import Constants from "Constants" /* 1087 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 4994 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4969 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0, currentUser, dependencyMap, displayNameStyles, importDefault, pendingDisplayNameStyles, ref;

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
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileHexagonCampaignDisplayNameStyleEditButton(availability) {
  let closure_3;
  let closure_5;
  let disabled;
  let tmp19;
  let tmp35;
  let user;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(66);
  ({ user, disabled } = availability);
  let tmp4 = undefined !== disabled;
  availability = availability.availability;
  if (tmp4) {
    tmp4 = disabled;
  }
  closure_19();
  _require = tmp6;
  const tmpResult = tmp(15850);
  const displayNameStylesPendingName = tmpResult.useDisplayNameStylesPendingName(user);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let intl = tmp(1128).intl;
    const stringResult = intl.string(_modDef2928["86GtGH"]);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  const tmpResult4 = tmp(8653);
  pendingDisplayNameStyles = tmpResult4.useGuildMemberOrUserPendingDisplayNameStyles(user).pendingDisplayNameStyles;
  if (cResult[1] === pendingDisplayNameStyles) {
    let tmp11;
    let tmp14;
    if (cResult[2] === user.id) {
      tmp11 = cResult[3];
    }
    const tmp13 = useDisplayNameStylesDefault(tmp11);
    if (cResult[4] !== tmp13) {
      let result = null != tmp13;
      if (result) {
        const tmpResult5 = tmp(4996);
        result = tmpResult5.isHexagonCampaignDisplayNameStyle(tmp13);
      }
      cResult[4] = tmp13;
      cResult[5] = result;
      tmp14 = result;
    } else {
      tmp14 = cResult[5];
    }
    importDefault = tmp14;
    let obj6 = react;
    let tmp18 = _slicedToArray(react.useState(0), 2);
    [tmp19, dependencyMap] = tmp18;
    const tmp20 = _slicedToArray(react.useState(0), 2);
    _asyncToGenerator = tmp20[1];
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class G {
        constructor(nativeEvent) {
          dependencyMap(nativeEvent.nativeEvent.layout.width);
        }
      }
      cResult[6] = G;
    } else {
      class G {
        constructor(nativeEvent) {
          dependencyMap(nativeEvent.nativeEvent.layout.width);
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class J {
        constructor(nativeEvent) {
          closure_3(nativeEvent.nativeEvent.layout.width);
        }
      }
      cResult[7] = J;
    } else {
      class J {
        constructor(nativeEvent) {
          closure_3(nativeEvent.nativeEvent.layout.width);
        }
      }
    }
    if (cResult[8] === displayNameStylesPendingName) {
      let tmp29;
      let tmp32;
      class J {
        constructor(nativeEvent) {
          closure_3(nativeEvent.nativeEvent.layout.width);
        }
      }
      [r10115, _slicedToArray] = _slicedToArray(obj6.useState(false), 2);
      _slicedToArray(obj6.useState(false), 2);
      react = obj6.useRef(false);
      let closure_6 = obj6.useRef(true);
      const _Symbol3 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class J {
          constructor(nativeEvent) {
            closure_3(nativeEvent.nativeEvent.layout.width);
          }
        }
        cResult[11] = tmp30;
        tmp29 = tmp30;
      } else {
        class J {
          constructor(nativeEvent) {
            closure_3(nativeEvent.nativeEvent.layout.width);
          }
        }
      }
      const tmpResult6 = tmp(5261);
      const unmountEffect = tmpResult6.useUnmountEffect(tmp29);
      if (!tmp4) {
        class J {
          constructor(nativeEvent) {
            closure_3(nativeEvent.nativeEvent.layout.width);
          }
        }
      }
      const _Symbol4 = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class J {
          constructor(nativeEvent) {
            closure_3(nativeEvent.nativeEvent.layout.width);
          }
        }
        _require = _asyncToGenerator(async (arg0, value) => {
          let intl;
          let obj9;
          let tmp51;
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
              return { value: "IconComponent", done: null };
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
                  closure_1 = tmp51;
                  closure_0 = undefined;
                  if (!ref.current) {
                    if (closure_0) {
                      ref.current = true;
                      c4(true);
                      c3 = 1;
                      c4 = 2;
                      ref = 1;
                      const obj8 = { value: obj9.ensureHexagonCampaignEnrollment(constants.DISPLAY_NAME_STYLE), done: false };
                      obj9 = closure_0(dependencyMap[21]);
                      return obj8;
                    } else {
                      currentUser = currentUser.getCurrentUser();
                      displayNameStyles = undefined;
                      if (currentUser != null) {
                        displayNameStyles = currentUser.displayNameStyles;
                      }
                      const setPendingChanges = closure_0(dependencyMap[20]).setPendingChanges;
                      const tmp40 = closure_0(dependencyMap[20]);
                      if (null == displayNameStyles) {
                        displayNameStyles = null;
                      } else {
                        const obj7 = closure_0(dependencyMap[17]);
                      }
                      const obj10 = { displayNameStyles };
                      setPendingChanges(obj10);
                    }
                  }
                }
              } else {
                if (1 === tmp4) {
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
                    const obj3 = closure_0(dependencyMap[21]);
                    const result = obj3.saveHexagonCampaignPreviousDisplayNameStyles();
                    const obj11 = { displayNameStyles };
                    const obj4 = closure_0(dependencyMap[20]);
                    obj4.setPendingChanges(obj11);
                    const obj6 = closure_0(dependencyMap[21]);
                    const result1 = obj6.markHexagonCampaignPerkApplied(constants.DISPLAY_NAME_STYLE);
                  } else {
                    const obj12 = { text: intl.string(closure_0(dependencyMap[13]).t.F8FvUy) };
                    const open = closure_2_1(dependencyMap[22]).open;
                    const tmp18 = closure_2_1(dependencyMap[22]);
                    intl = closure_0(dependencyMap[13]).intl;
                    open("HEXAGON_CAMPAIGN_ENROLLMENT_ERROR", obj12);
                  }
                }
              }
              ref = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp50) {
              tmp51 = c3;
              if (0 === c3) {
                ref = 3;
                throw tmp50;
              } else {
                c4 = 1;
              }
            }
          }
        });
        function t9() {
          return closure_0(...arguments);
        }
        cResult[12] = t9;
        tmp32 = t9;
      } else {
        class J {
          constructor(nativeEvent) {
            closure_3(nativeEvent.nativeEvent.layout.width);
          }
        }
      }
      t9 = tmp32;
      const tmp12Result = useAnalyticsLocationsDefault;
      const analyticsLocations = tmp12Result(tmp12(7276).EDIT_DISPLAY_NAME_STYLES_MODAL).analyticsLocations;
      if (cResult[13] !== analyticsLocations) {
        class J {
          constructor(nativeEvent) {
            closure_3(nativeEvent.nativeEvent.layout.width);
          }
        }
        cResult[13] = analyticsLocations;
        cResult[14] = tmp35;
      } else {
        class J {
          constructor(nativeEvent) {
            closure_3(nativeEvent.nativeEvent.layout.width);
          }
        }
      }
      tmp35 = tmp34;
      if (cResult[15] === tmp34) {
        class J {
          constructor(nativeEvent) {
            closure_3(nativeEvent.nativeEvent.layout.width);
          }
        }
      }
      function ue() {
        const tmp = closure_0;
        if (tmp) {
          tmp35();
        } else {
          t9(!closure_1);
        }
      }
      cResult[15] = tmp34;
      cResult[16] = tmp14;
      cResult[17] = availability === constants5.LOCKED;
      cResult[18] = ue;
    }
    let obj2 = { userId: user.id, userName: displayNameStylesPendingName, pendingDisplayNameStyles, ignoreDisabledStylesSetting: true, variant: "heading-xxl/semibold", lineClamp: 1, ellipsizeMode: "clip" };
    const tmp27 = closure_15(UsernameWithEffectsDefault, obj2);
    cResult[8] = displayNameStylesPendingName;
    cResult[9] = user.id;
    cResult[10] = tmp27;
  }
  let obj3 = { userId: user.id, pendingDisplayNameStyles, ignoreDisabledStylesSetting: true };
  cResult[1] = pendingDisplayNameStyles;
  cResult[2] = user.id;
  cResult[3] = obj3;
  tmp11 = obj3;
}) : (function UserProfileHexagonCampaignDisplayNameStyleEditButton(availability) {
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
  let obj7;
  let obj9;
  let str;
  let tmp11;
  let tmp13;
  let tmp16Result;
  let tmp16Result4;
  let tmp20;
  let tmp31;
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
  const stringResult = intl.string(_modDef2928["86GtGH"]);
  let obj2 = require("ProfileCustomizationUtils");
  let obj3 = { userId: user.id, pendingDisplayNameStyles: obj2.useGuildMemberOrUserPendingDisplayNameStyles(user).pendingDisplayNameStyles, ignoreDisabledStylesSetting: true };
  const tmp8 = useDisplayNameStylesDefault(obj3);
  let result = null != tmp8;
  if (result) {
    const tmp3Result = tmp3(4996);
    result = tmp3Result.isHexagonCampaignDisplayNameStyle(tmp8);
  }
  importDefault = result;
  let obj5 = react;
  [tmp11, c2] = _slicedToArray(react.useState(0), 2);
  const tmp10 = _slicedToArray(react.useState(0), 2);
  [tmp13, c3] = _slicedToArray(react.useState(0), 2);
  const tmp12 = _slicedToArray(react.useState(0), 2);
  const callback = react.useCallback((nativeEvent) => {
    _undefined2(nativeEvent.nativeEvent.layout.width);
  }, []);
  const callback1 = react.useCallback((nativeEvent) => {
    _undefined22(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj4 = { userId: user.id, userName: displayNameStylesPendingName, pendingDisplayNameStyles, ignoreDisabledStylesSetting: true, variant: "heading-xxl/semibold", lineClamp: 1, ellipsizeMode: "clip" };
  let tmp18 = closure_15(tmp6(10660), obj4);
  [tmp20, c4] = _slicedToArray(react.useState(false), 2);
  const tmp19 = _slicedToArray(react.useState(false), 2);
  react = react.useRef(false);
  closure_6 = react.useRef(true);
  const tmp3Result2 = tmp3(5261);
  const unmountEffect = tmp3Result2.useUnmountEffect(() => {
    closure_6.current = false;
  });
  const tmp17 = pendingDisplayNameStyles;
  if (!disabled) {
    disabled = tmp20;
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
        return { value: "IconComponent", done: null };
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
              const obj12 = { text: intl.string(closure_0(_undefined[13]).t.F8FvUy) };
              const open = _undefined(_undefined[22]).open;
              const tmp18 = _undefined(_undefined[22]);
              intl = closure_0(_undefined[13]).intl;
              open("HEXAGON_CAMPAIGN_ENROLLMENT_ERROR", obj12);
            }
          }
        }
        ref = 3;
        return { value: "IconComponent", done: null };
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
  analyticsLocations = tmp6Result(tmp6(7276).EDIT_DISPLAY_NAME_STYLES_MODAL).analyticsLocations;
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
  let obj6 = { label: stringResult, labelTrailing: tmp16(closure_6, obj7), children: closure_16(closure_6, obj9) };
  obj7 = { style: tmp.labelBadge, children: tmp16Result };
  const Input = tmp3(7007).Input;
  if (availability === constants5.LOCKED) {
    tmp16Result = tmp16(tmp3(tmp27).HexagonCampaignExtendPerkBadge, {});
  } else {
    let obj8 = { perk: constants4.DISPLAY_NAME_STYLE };
    tmp16Result = tmp16(tmp6(tmp27), obj8);
  }
  obj9 = { style: tmp.card, children: items5 };
  let obj10 = { onPress: callback4, style: tmp.row, disabled, accessibilityRole: str, accessibilityLabel: stringResult, accessibilityState: tmp31, children: items4 };
  str = "switch";
  const PressableHighlight = tmp3(6906).PressableHighlight;
  if (availability === constants5.LOCKED) {
    str = "button";
  }
  tmp31 = undefined;
  if (availability !== constants5.LOCKED) {
    let obj11 = { checked: result, busy: tmp20 };
    tmp31 = obj11;
  }
  let obj12 = { style: tmp.name, onLayout: callback, children: items3 };
  let tmp16Result3 = tmp18;
  if (tmp11 > 0) {
    tmp16Result3 = tmp18;
    if (tmp13 > tmp11) {
      const obj13 = { maskElement: closure_16(closure_6, obj14), children: tmp18 };
      obj14 = { style: tmp.nameMask, children: items2 };
      items2 = [, ];
      const obj15 = { colors, style: tmp.nameMaskOpaque };
      const tmp6Result2 = _modDef6964;
      items2[0] = closure_15(LinearGradientDefault, obj15);
      const obj16 = { colors: colors2, start: null, end: null, style: tmp.nameMaskFade };
      ({ START: obj22.start, END: obj22.end } = closure_11);
      items2[1] = closure_15(LinearGradientDefault, obj16);
      tmp16Result3 = tmp16(tmp6Result2, obj13);
    }
  }
  items3 = [tmp16Result3, ];
  const obj17 = { style: tmp.nameMeasure, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: closure_15(closure_6, obj18) };
  obj18 = { style: tmp.nameMeasureText, onLayout: callback1, children: closure_15(UsernameWithEffectsDefault, obj19) };
  obj19 = { userId: user.id, userName: displayNameStylesPendingName, pendingDisplayNameStyles: tmp17, ignoreDisabledStylesSetting: true, variant: "heading-xxl/semibold", lineClamp: 1 };
  items3[1] = closure_15(closure_6, obj17);
  items4 = [closure_16(closure_6, obj12), ];
  if (availability === constants5.LOCKED) {
    tmp16Result4 = tmp16(tmp3(6910).TableRowArrow, {});
  } else {
    const obj20 = { "aria-hidden": true, value: result, onValueChange: callback2, disabled };
    tmp16Result4 = tmp16(tmp3(7294).FormSwitch, obj20);
  }
  items4[1] = tmp16Result4;
  items5 = [closure_16(PressableHighlight, obj10), tmp16(tmp6(15844), { showLearnMore: true })];
  return closure_15(Input, obj6);
});
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileHexagonCampaignDisplayNameStyleEditButton.tsx");

export default tmp8;
