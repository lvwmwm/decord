// Module ID: 18157
// Function ID: 18158
// Name: UserSettingsAppIcons
// Dependencies: [5, 32, 19, 17, 1388, 1072, 11179, 5331, 21, 5306, 504, 15314, 2110, 7918, 17084, 6015, 1113, 17085, 5341, 5332, 5334, 5336, 9579, 10954, 11170, 8106, 18158, 10074, 2]

// Module 18157 (UserSettingsAppIcons)
import react_native from "react-native" /* 17 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5331 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7918 */;
import openPremiumModalDefault from "openPremiumModal" /* 9579 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 10954 */;
import AppIconConstants from "AppIconConstants" /* 11179 */;
import AppIconRowsDefault from "AppIconRows" /* 18158 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1388 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let c1, c2, c7, c8, closure_1, closure_2, dependencyMap, importDefault;

let c9;
let closure_12;
let closure_14;
let map1;
let metroImportAll;
let tmp6;
const NitroUpsellButtonDefault = tmp6(10074);
const View = react_native.View;
({ UpsellTypes: metroImportAll, AnalyticsPages: c9 } = Constants);
const getIconById = AppIconConstants.getIconById;
const HexagonCampaignPerk = HexagonCampaignConstants.HexagonCampaignPerk;
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = Fragment);
let closure_15 = createStyles.createStyles({ upsellButtonContainer: { padding: 0, position: "absolute", bottom: 56, width: 350, alignSelf: "center" } });
const memoResult = react.memo(function UserSettingsAppIcons() {
  let intl;
  let obj6;
  let obj7;
  let obj9;
  let stateFromStores;
  let tmp6Result;
  let tmp8;
  function setPending(current) {
    closure_6.current = current;
    react(current);
  }
  let obj = function _selectHexagonCampaignAppIcon() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let intl;
      let items;
      let obj11;
      let obj8;
      let closure_0 = arg0;
      if (c8 === 2) {
        c8 = 3;
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
        let c5;
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_4 = tmp;
              let closure_3 = tmp4;
              setPending(closure_0);
              c5 = 1;
              c7 = 2;
              c8 = 1;
              obj4 = { value: obj11.ensureHexagonCampaignEnrollment(constants.APP_ICON), done: false };
              obj11 = closure_0(closure_2[14]);
              return obj4;
            }
          } else if (1 === c7) {
            c5 = 0;
            closure_132_7(null);
            throw closure_6;
          } else if (2 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              closure_132_7(null);
              c8 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else if (value) {
              const tmp51 = closure_0(closure_2[14]);
              closure_2 = tmp51;
              closure_1 = tmp51.saveHexagonCampaignPreviousAppIcon;
              c7 = 3;
              c8 = 1;
              const obj6 = { value: obj8.fetchCurrentAppIcon(), done: false };
              obj8 = closure_0(closure_2[11]);
              return obj6;
            } else {
              const obj7 = { text: intl.string(closure_0(closure_2[16]).t.F8FvUy) };
              const open = closure_1(closure_2[15]).open;
              const tmp40 = closure_1(closure_2[15]);
              intl = closure_0(closure_2[16]).intl;
              open("HEXAGON_CAMPAIGN_ENROLLMENT_ERROR", obj7);
              c5 = 0;
              closure_132_7(null);
              c8 = 3;
              const obj9 = { value: undefined, done: true };
              return obj9;
            }
          } else if (3 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              closure_132_7(null);
              c8 = 3;
              const obj10 = { value, done: true };
              return obj10;
            } else {
              closure_1(value);
              let premiumType;
              const setAppIcon = closure_0(closure_2[11]).setAppIcon;
              const tmp32 = closure_0(closure_2[11]);
              const tmp33 = closure_0;
              if (closure_132_0 != null) {
                premiumType = closure_132_0.premiumType;
              }
              c7 = 4;
              c8 = 1;
              const obj12 = { value: setAppIcon(tmp33, premiumType), done: false };
              return obj12;
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            closure_132_7(null);
            c8 = 3;
            const obj13 = { value, done: true };
            return obj13;
          } else {
            if (value) {
              obj = closure_0(closure_2[14]);
              const result = obj.markHexagonCampaignPerkApplied(constants.APP_ICON);
              const obj14 = { perks: items, content: closure_0(closure_2[18]).QuestContent.APP_ICON_SETTINGS, contentSurface: closure_0(closure_2[17]).HexagonCampaignContentSurface.APP_ICON_PICKER };
              items = [constants.APP_ICON];
              const trackHexagonCampaignPerkAction = closure_0(closure_2[17]).trackHexagonCampaignPerkAction;
              const tmp12 = closure_0(closure_2[17]);
              const result1 = trackHexagonCampaignPerkAction(obj14);
            }
            c5 = 0;
            closure_132_7(null);
            c8 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp68) {
          closure_6 = tmp68;
          if (0 === c5) {
            c8 = 3;
            throw tmp68;
          } else {
            c7 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  obj = function _onSelect() {
    let analyticsLocation;
    let ref;
    obj = _asyncToGenerator(async (arg0, value) => {
      let v3;
      function selectHexagonCampaignAppIcon(id) {
        return constants(...arguments);
      }
      let closure_0 = arg0;
      if (c1 === 2) {
        c1 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c1 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else if (null == ref.current) {
              const tmp31 = closure_1_10(closure_0);
              if (null != tmp31) {
                const id = tmp31.id;
                if (id === closure_0) {
                  const obj6 = closure_0(c2[20]);
                  if (obj6.isHexagonCampaignAppIcon(id)) {
                    const tmp8Result = closure_0(c2[21]);
                    if (tmp8Result.isHexagonCampaignPerkExpiredForCurrentUser(constants2.APP_ICON)) {
                      obj4 = { analyticsLocation, analyticsLocations, premiumFeatureCardOrder: closure_0(c2[23]).PremiumFeatureCardOrder.TIER_2_LEADING };
                      const tmp19 = c1(c2[22]);
                      tmp19(obj4);
                    }
                  }
                  if (closure_2_1 !== id) {
                    if (tmp32) {
                      const tmp12 = dependencyMap;
                      if (!tmp12) {
                        const obj5 = { initialUpsellKey: constants.APP_ICONS, imageSource: tmp33 };
                        const obj8 = c1(c2[24]);
                        const result = obj8.handleShowUpsellAlert(obj5);
                      }
                    }
                    const tmp8Result3 = closure_0(c2[20]);
                    if (tmp8Result3.isHexagonCampaignAppIcon(id)) {
                      c2 = 1;
                      c1 = 1;
                      const obj7 = { value: selectHexagonCampaignAppIcon(id), done: false };
                      return obj7;
                    } else {
                      let premiumType;
                      const setAppIcon2 = closure_0(c2[11]).setAppIcon;
                      const tmp8Result4 = closure_0(c2[11]);
                      if (stateFromStores != null) {
                        premiumType = stateFromStores.premiumType;
                      }
                      c2 = 2;
                      c1 = 1;
                      const obj9 = { value: setAppIcon2(id, premiumType), done: false };
                      return obj9;
                    }
                  }
                } else {
                  const setAppIcon = closure_0(c2[11]).setAppIcon;
                  let premiumType1;
                  const tmp6 = closure_0(c2[11]);
                  const DEFAULT = closure_0(c2[19]).FreemiumAppIconIds.DEFAULT;
                  if (stateFromStores != null) {
                    premiumType1 = stateFromStores.premiumType;
                  }
                  c2 = 3;
                  c1 = 1;
                  const obj10 = { value: setAppIcon(DEFAULT, premiumType1), done: false };
                  return obj10;
                }
              }
            }
          } else if (1 === c2) {
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              const obj11 = { value, done: true };
              return obj11;
            }
          } else if (2 === c2) {
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              const obj12 = { value, done: true };
              return obj12;
            } else {
              c1 = 3;
              const obj13 = { value: undefined, done: true };
              return obj13;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value, done: true };
            return obj;
          }
          c1 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp23) {
          c1 = 3;
          throw tmp23;
        }
      }
    });
    return obj(...arguments);
  };
  const tmp2 = stateFromStores;
  const tmp3 = dependencyMap;
  let tmp = closure_15();
  obj = stateFromStores(504);
  let items = [setPending];
  stateFromStores = obj.useStateFromStores(items, () => setPending.getCurrentUser());
  let obj2 = stateFromStores(15314);
  importDefault = obj2.useCurrentAppIcon();
  let obj3 = stateFromStores(2110);
  const isPremiumResult = obj3.isPremium(stateFromStores);
  dependencyMap = isPremiumResult;
  let tmp6 = importDefault;
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  let obj4 = { page: obj.APP_ICONS };
  const tmp7 = obj4(react.useState(null), 2);
  [tmp8, react] = tmp7;
  let closure_6 = react.useRef(null);
  let obj5 = { children: closure_12(closure_6, obj6) };
  obj6 = { accessibilityRole: "radiogroup", children: closure_12(AppIconRowsDefault, obj7) };
  const Form = stateFromStores(8106).Form;
  let tmp12 = closure_6;
  obj7 = {
    onSelect(arg0) {
      return obj(...arguments);
    },
    pendingAppIconId: tmp8
  };
  const children = [closure_12(Form, obj5), ];
  let tmp11Result = !isPremiumResult;
  const tmp10 = closure_13;
  const tmp9 = closure_14;
  if (tmp11Result) {
    let obj8 = { style: tmp.upsellButtonContainer, children: tmp11(tmp6Result, obj9) };
    obj9 = {
      onPress() {
          obj = { analyticsLocation: obj4, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
          const tmp = openPremiumModalDefault;
          tmp(obj);
        },
      text: intl.string(tmp2(1113).t.M0rDSO)
    };
    tmp6Result = NitroUpsellButtonDefault;
    intl = tmp2(1113).intl;
    tmp11Result = tmp11(tmp12, obj8);
  }
  children[1] = tmp11Result;
  return tmp9(tmp10, { children });
});
let result = size.fileFinishedImporting("modules/user_settings/app_icon/native/UserSettingsAppIcons.tsx");

export default memoResult;
