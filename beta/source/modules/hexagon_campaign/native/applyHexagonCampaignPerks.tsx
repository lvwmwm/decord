// Module ID: 17356
// Function ID: 17357
// Name: applyHexagonCampaignPerks
// Dependencies: [5, 1385, 16568, 5195, 1240, 15654, 17357, 5198, 17358, 16807, 17359, 5196, 17362, 17363, 2]
// Exports: applyHexagonCampaignPerks

// Module 17356 (applyHexagonCampaignPerks)
import ClientThemesConstants from "ClientThemesConstants" /* 1240 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5195 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserStore from "UserStore" /* 1385 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 16568 */;
import size from "module_2" /* 2 */;

let c5, constants;

let obj = function _applyHexagonCampaignPerks() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let analyticsLocations;
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let obj11;
    let obj14;
    let closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
      const str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        let closure_3;
        let premiumType;
        let isThemeSynced;
        let obj10;
        let previousPerkValues;
        let length;
        let closure_9;
        let obj17;
        let items;
        let updatePerk;
        c5 = 2;
        const tmp5 = analyticsLocations;
        if (0 === analyticsLocations) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            closure_3 = tmp5;
            let closure_2 = tmp;
            c0 = undefined;
            c1 = undefined;
            premiumType = undefined;
            isThemeSynced = undefined;
            ({ selection: c0, displayNameStyles: c1, premiumType: c2, isThemeSynced: c3, analyticsLocations: c4 } = closure_0);
            constants = undefined;
            obj10 = undefined;
            previousPerkValues = undefined;
            length = undefined;
            closure_9 = undefined;
            obj17 = undefined;
            let obj18;
            items = undefined;
            updatePerk = function updatePerk() {
              return obj(...arguments);
            };
            obj = function _updatePerk() {
              obj = premiumType(function*(arg0, value) {
                let obj5;
                closure_0 = arg0;
                if (c4 === 2) {
                  c4 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp3 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    const obj2 = { value, done: true };
                    return obj2;
                  } else {
                    return { value: "HermesInternal", done: "HermesInternal" };
                  }
                } else {
                  try {
                    c4 = 2;
                    if (0 === c3) {
                      if (arg0 === 1) {
                        c4 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c4 = 3;
                        const obj3 = { value, done: true };
                        return obj3;
                      } else {
                        c2 = 0;
                        value = undefined;
                        if (closure_2_9.includes(closure_0)) {
                          c4 = 3;
                          const obj4 = { value: obj5.restoreHexagonCampaignPerk(closure_0, obj18), done: true };
                          obj5 = closure_0(value[13]);
                          return obj4;
                        } else {
                          c3 = 1;
                          c4 = 1;
                          const obj6 = { value: obj17[closure_0](), done: false };
                          return obj6;
                        }
                      }
                    } else if (arg0 === 1) {
                      c4 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c4 = 3;
                      const obj7 = { value, done: true };
                      return obj7;
                    } else {
                      const tmp6 = value;
                      if (tmp6) {
                        obj = closure_0(value[9]);
                        const result = obj.markHexagonCampaignPerkApplied(closure_0);
                      }
                      c4 = 3;
                      const obj8 = { value, done: true };
                      return obj8;
                    }
                  } catch (tmp17) {
                    c4 = 3;
                    throw tmp17;
                  }
                }
              });
              return obj(...arguments);
            };
            analyticsLocations = 1;
            c5 = 1;
            return { value: "flexDirection", done: true };
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            let obj4 = { value, done: true };
            return obj4;
          } else {
            analyticsLocations = 2;
            c5 = 1;
            let obj8 = { value: obj14.fetchCurrentAppIcon(), done: false };
            obj14 = closure_131_0(closure_131_1[5]);
            return obj8;
          }
        } else {
          if (2 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              constants = value;
              obj10 = {};
              const CLIENT_THEME = closure_131_5.CLIENT_THEME;
              const obj20 = closure_131_0(closure_131_1[6]);
              obj10[CLIENT_THEME] = obj20.isHexagonCampaignClientThemeApplied();
              const APP_ICON = closure_131_5.APP_ICON;
              const obj21 = closure_131_0(closure_131_1[7]);
              obj10[APP_ICON] = obj21.isHexagonCampaignAppIcon(constants);
              const DISPLAY_NAME_STYLE = closure_131_5.DISPLAY_NAME_STYLE;
              const hasHexagonCampaignDisplayNameFont = closure_131_0(closure_131_1[7]).hasHexagonCampaignDisplayNameFont;
              const tmp74 = closure_131_0(closure_131_1[7]);
              const currentUser = closure_131_3.getCurrentUser();
              let displayNameStyles;
              if (currentUser != null) {
                displayNameStyles = currentUser.displayNameStyles;
              }
              const tmp17 = closure_3;
              obj10[DISPLAY_NAME_STYLE] = hasHexagonCampaignDisplayNameFont(displayNameStyles);
              previousPerkValues = closure_131_4.previousPerkValues;
              let obj5 = closure_131_0(closure_131_1[8]);
              let result = obj5.saveHexagonCampaignPreviousClientTheme();
              let obj6 = closure_131_0(closure_131_1[9]);
              const result1 = obj6.saveHexagonCampaignPreviousAppIcon(constants);
              let obj7 = closure_131_0(closure_131_1[9]);
              const result2 = obj7.saveHexagonCampaignPreviousDisplayNameStyles();
              const _Object = Object;
              const values = Object.values(closure_131_5);
              length = values.filter((item) => closure_1_0[item] && !closure_1_6[item]);
              const _Object2 = Object;
              const values2 = Object.values(closure_131_5);
              closure_9 = values2.filter((item) => !closure_1_0[item] && closure_1_6[item]);
              if (length.length > 0) {
                analyticsLocations = 4;
                c5 = 1;
                const obj12 = { value: obj11.ensureHexagonCampaignEnrollment(length[0]), done: false };
                obj11 = closure_131_0(closure_131_1[9]);
                return obj12;
              }
            }
          } else if (3 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj13 = { value, done: true };
              return obj13;
            } else {
              let tmp6 = value;
              const tmp9 = globalThis;
              const _Boolean = Boolean;
              value.didApply = value.every(Boolean);
              let fn = null;
              if (items.includes(closure_131_5.APP_ICON)) {
                fn = () => closure_1_12(constants.APP_ICON);
              }
              value.updateAppIcon = fn;
              c5 = 3;
              const obj15 = { value, done: true };
              return obj15;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj16 = { value, done: true };
            return obj16;
          } else if (!value) {
            c5 = 3;
            obj = { value: { didApply: false, updateAppIcon: null }, done: true };
            return obj;
          }
          obj17 = {};
          obj17[closure_131_5.CLIENT_THEME] = () => {
            obj = closure_0(closure_1[10]);
            obj.handleSaveTheme(closure_2_6, analyticsLocations, isThemeSynced);
            return Promise.resolve(true);
          };
          obj17[closure_131_5.APP_ICON] = () => {
            obj = closure_0(closure_1[5]);
            return obj.setAppIcon(closure_0(closure_1[11]).LimitedTimeAppIconIds.HEXAGON, premiumType, { showErrorToast: false });
          };
          obj17[closure_131_5.DISPLAY_NAME_STYLE] = () => {
            obj = closure_0(closure_1[12]);
            return obj.saveHexagonCampaignDisplayNameStyles(closure_1_1);
          };
          obj18 = { previousPerkValues, premiumType, isThemeSynced, analyticsLocations };
          items = [];
          HermesBuiltin.arraySpread(items, closure_9, HermesBuiltin.arraySpread(items, length, 0));
          value = {};
          const found = items.filter((item) => item !== constants.APP_ICON);
          analyticsLocations = 3;
          c5 = 1;
          const obj19 = { value: all(found.map(updatePerk)), done: false };
          return obj19;
        }
      } catch (tmp58) {
        c5 = 3;
        throw tmp58;
      }
    }
  });
  return obj(...arguments);
};
const HexagonCampaignPerk = HexagonCampaignConstants.HexagonCampaignPerk;
const HEXAGON_GRADIENT_PRESET = ClientThemesConstants.HEXAGON_GRADIENT_PRESET;
let result = size.fileFinishedImporting("modules/hexagon_campaign/native/applyHexagonCampaignPerks.tsx");

export function applyHexagonCampaignPerks() {
  return obj(...arguments);
}
