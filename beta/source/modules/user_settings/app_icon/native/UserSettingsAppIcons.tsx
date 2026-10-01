// Module ID: 15077
// Function ID: 15078
// Name: UserSettingsAppIcons
// Dependencies: [5, 19, 17, 1372, 1074, 8624, 21, 4836, 504, 12995, 1970, 6583, 8625, 8614, 8053, 15078, 9425, 8695, 8663, 1115, 2]

// Module 15077 (UserSettingsAppIcons)
import react_native from "react-native" /* 17 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6583 */;
import AppIconConstants from "AppIconConstants" /* 8624 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 8663 */;
import openPremiumModalDefault from "openPremiumModal" /* 8695 */;
import AppIconRowsDefault from "AppIconRows" /* 15078 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c1, c2, dependencyMap, importDefault;

let c10;
let c9;
let metroImportDefault;
let metroRequire;
let tmp6;
let unpackModuleId;
const NitroUpsellButtonDefault = tmp6(9425);
const View = react_native.View;
({ UpsellTypes: metroRequire, AnalyticsPages: metroImportDefault } = Constants);
const getIconById = AppIconConstants.getIconById;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles({ upsellButtonContainer: { padding: 0, position: "absolute", bottom: 56, width: 350, alignSelf: "center" } });
const memoResult = react.memo(() => {
  let closure_1;
  let intl;
  let obj6;
  let obj7;
  let obj9;
  let stateFromStores;
  let tmp6Result;
  let obj = function _onSelect() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let v3;
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
            } else {
              const tmp24 = closure_1_8(closure_0);
              const tmp22 = closure_0;
              if (null != tmp24) {
                const id = tmp24.id;
                if (id === tmp22) {
                  if (closure_2_1 !== id) {
                    if (tmp26) {
                      const tmp9 = dependencyMap;
                      if (!tmp9) {
                        const obj5 = { initialUpsellKey: constants.APP_ICONS, imageSource: tmp27 };
                        obj4 = c1(c2[13]);
                        const result = obj4.handleShowUpsellAlert(obj5);
                      }
                    }
                    let premiumType;
                    const setAppIcon2 = closure_0(c2[9]).setAppIcon;
                    const tmp16 = closure_0(c2[9]);
                    if (stateFromStores != null) {
                      premiumType = stateFromStores.premiumType;
                    }
                    c2 = 1;
                    c1 = 1;
                    const obj6 = { value: setAppIcon2(id, premiumType), done: false };
                    return obj6;
                  }
                } else {
                  const setAppIcon = closure_0(c2[9]).setAppIcon;
                  let premiumType1;
                  const tmp6 = closure_0(c2[9]);
                  const DEFAULT = closure_0(c2[12]).FreemiumAppIconIds.DEFAULT;
                  if (stateFromStores != null) {
                    premiumType1 = stateFromStores.premiumType;
                  }
                  c2 = 2;
                  c1 = 1;
                  const obj7 = { value: setAppIcon(DEFAULT, premiumType1), done: false };
                  return obj7;
                }
              }
            }
          } else if (1 === tmp3) {
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              const obj8 = { value, done: true };
              return obj8;
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
        } catch (tmp18) {
          c1 = 3;
          throw tmp18;
        }
      }
    });
    return obj(...arguments);
  };
  const tmp2 = stateFromStores;
  const tmp3 = dependencyMap;
  let tmp = closure_12();
  obj = stateFromStores(504);
  const items = [obj];
  stateFromStores = obj.useStateFromStores(items, () => obj.getCurrentUser());
  let obj2 = stateFromStores(12995);
  importDefault = obj2.useCurrentAppIcon();
  let obj3 = stateFromStores(1970);
  const isPremiumResult = obj3.isPremium(stateFromStores);
  dependencyMap = isPremiumResult;
  let tmp6 = importDefault;
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  let obj4 = { page: constants.APP_ICONS };
  let tmp9 = closure_9;
  let obj5 = { children: closure_9(obj4, obj6) };
  obj6 = { accessibilityRole: "radiogroup", children: closure_9(AppIconRowsDefault, obj7) };
  const Form = stateFromStores(8053).Form;
  obj7 = {
    onSelect(arg0) {
      return obj(...arguments);
    }
  };
  const children = [closure_9(Form, obj5), ];
  let tmp9Result = !isPremiumResult;
  const tmp10 = obj4;
  const tmp7 = closure_11;
  const tmp8 = closure_10;
  if (tmp9Result) {
    let obj8 = { style: tmp.upsellButtonContainer, children: tmp9(tmp6Result, obj9) };
    obj9 = {
      onPress() {
          obj = { analyticsLocation: obj4, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
          const tmp = openPremiumModalDefault;
          tmp(obj);
        },
      text: intl.string(tmp2(1115).t.M0rDSO)
    };
    tmp6Result = NitroUpsellButtonDefault;
    intl = tmp2(1115).intl;
    tmp9Result = tmp9(tmp10, obj8);
  }
  children[1] = tmp9Result;
  return tmp7(tmp8, { children });
});
let result = size.fileFinishedImporting("modules/user_settings/app_icon/native/UserSettingsAppIcons.tsx");

export default memoResult;
