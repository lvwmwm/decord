// Module ID: 16418
// Function ID: 16419
// Name: applyHexagonCampaignPerks
// Dependencies: [5, 4996, 1389, 15679, 4997, 9867, 1252, 7080, 14803, 4999, 16419, 15894, 16420, 9868, 2050, 2]
// Exports: applyHexagonCampaignPerks

// Module 16418 (applyHexagonCampaignPerks)
import ClientThemesConstants from "ClientThemesConstants" /* 1252 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 4997 */;
import UserSettingsAccountActionCreators from "UserSettingsAccountActionCreators" /* 7080 */;
import AppIconConstants from "AppIconConstants" /* 9867 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4996 */;
import UserStore from "UserStore" /* 1389 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 15679 */;
import size from "module_2" /* 2 */;

let c5;

function saveDisplayNameStyles() {
  return obj(...arguments);
}
let obj = function _saveDisplayNameStyles() {
  obj = _asyncToGenerator(async (displayNameStyles) => {
    let c2 = 0;
    let c3 = 0;
    return (async (arg0, value) => {
      let obj3;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              return { value, done: true };
            } else {
              closure_1 = tmp;
              displayNameStyles = undefined;
              c2 = 1;
              c3 = 1;
              const obj5 = { displayNameStyles };
              const obj6 = { value: obj3.saveProfileAndAccountChanges(obj5), done: false };
              obj3 = UserSettingsAccountActionCreators;
              return obj6;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            return { value, done: true };
          } else {
            displayNameStyles = value;
            let ok;
            if (displayNameStyles != null) {
              ok = displayNameStyles.ok;
            }
            c3 = 3;
            return { value: true === ok, done: true };
          }
        } catch (tmp11) {
          c3 = 3;
          throw tmp11;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _applyHexagonCampaignPerks() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let obj13;
    let obj16;
    let tmp;
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
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let closure_2;
        let currentUser;
        let obj10;
        let closure_8;
        let closure_9;
        let obj15;
        let closure_11;
        c5 = 2;
        const tmp5 = c4;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp5;
            closure_2 = tmp;
            c0 = undefined;
            c1 = undefined;
            c2 = undefined;
            c3 = undefined;
            ({ selection: c0, displayNameStyles: c1, premiumType: c2, isThemeSynced: c3, analyticsLocations: c4 } = closure_0);
            currentUser = undefined;
            obj10 = undefined;
            let previousPerkValues;
            closure_8 = undefined;
            closure_9 = undefined;
            obj15 = undefined;
            closure_11 = undefined;
            c4 = 1;
            c5 = 1;
            return { value: "Reflect", done: true };
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
            c4 = 2;
            c5 = 1;
            const obj8 = { value: obj16.fetchCurrentAppIcon(), done: false };
            obj16 = closure_131_0(closure_131_2[8]);
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
              currentUser = value;
              const CLIENT_THEME = closure_131_7.CLIENT_THEME;
              const gradientPreset = closure_131_4.gradientPreset;
              let id;
              const isHexagonCampaignClientThemePreset = closure_131_0(closure_131_2[9]).isHexagonCampaignClientThemePreset;
              const tmp68 = closure_131_0(closure_131_2[9]);
              if (gradientPreset != null) {
                id = gradientPreset.id;
              }
              obj10 = {};
              obj10[CLIENT_THEME] = isHexagonCampaignClientThemePreset(id);
              obj10[closure_131_7.APP_ICON] = closure_131_8(currentUser);
              const tmp15 = closure_131_7;
              const DISPLAY_NAME_STYLE = closure_131_7.DISPLAY_NAME_STYLE;
              const tmp18 = closure_131_0(closure_131_2[9]);
              const hasHexagonCampaignDisplayNameFont = tmp18.hasHexagonCampaignDisplayNameFont;
              currentUser = closure_131_5.getCurrentUser();
              let displayNameStyles;
              if (currentUser != null) {
                displayNameStyles = currentUser.displayNameStyles;
              }
              obj10[DISPLAY_NAME_STYLE] = hasHexagonCampaignDisplayNameFont(displayNameStyles);
              previousPerkValues = closure_131_6.previousPerkValues;
              let obj5 = closure_131_0(closure_131_2[10]);
              let result = obj5.saveHexagonCampaignPreviousClientTheme();
              let obj6 = closure_131_0(closure_131_2[10]);
              const result1 = obj6.saveHexagonCampaignPreviousAppIcon(currentUser);
              let obj7 = closure_131_0(closure_131_2[11]);
              const result2 = obj7.saveHexagonCampaignPreviousDisplayNameStyles();
              const _Object = Object;
              const values = Object.values(closure_131_7);
              closure_8 = values.filter((item) => closure_1_0[item] && !closure_1_6[item]);
              const _Object2 = Object;
              const values2 = Object.values(closure_131_7);
              closure_9 = values2.filter((item) => !closure_1_0[item] && closure_1_6[item]);
              if (closure_8.length > 0) {
                c4 = 4;
                c5 = 1;
                const obj11 = { value: obj13.ensureHexagonCampaignEnrollment(closure_8[0]), done: false };
                obj13 = closure_131_0(closure_131_2[11]);
                return obj11;
              }
            }
          } else if (3 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj12 = { value, done: true };
              return obj12;
            } else {
              let tmp6 = closure_2;
              closure_11 = value;
              const tmp8 = globalThis;
              const _Boolean = Boolean;
              c5 = 3;
              const obj14 = { value: closure_11.every(Boolean), done: true };
              return obj14;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else if (!value) {
            c5 = 3;
            return { value: false, done: true };
          }
          obj15 = {};
          const obj17 = {
            apply() {
                    obj = closure_0(closure_2[12]);
                    obj.handleSaveTheme(closure_2_9, closure_1_4, closure_1_3);
                    return Promise.resolve(true);
                  },
            restore() {
                    const handleSaveTheme = closure_0(closure_2[12]).handleSaveTheme;
                    closure_0(closure_2[12]);
                    let DEFAULT_HEXAGON_CAMPAIGN_CLIENT_THEME = closure_1_7.clientTheme;
                    const getHexagonCampaignClientThemeItem = closure_0(closure_2[10]).getHexagonCampaignClientThemeItem;
                    closure_0(closure_2[10]);
                    const tmp = closure_0;
                    const tmp2 = closure_2;
                    if (DEFAULT_HEXAGON_CAMPAIGN_CLIENT_THEME == null) {
                      DEFAULT_HEXAGON_CAMPAIGN_CLIENT_THEME = tmp(tmp2[10]).DEFAULT_HEXAGON_CAMPAIGN_CLIENT_THEME;
                    }
                    handleSaveTheme(getHexagonCampaignClientThemeItem(DEFAULT_HEXAGON_CAMPAIGN_CLIENT_THEME), closure_1_4, closure_1_3);
                    return Promise.resolve(true);
                  }
          };
          obj15[closure_131_7.CLIENT_THEME] = obj17;
          const obj18 = {
            apply() {
                    obj = closure_0(closure_2[8]);
                    return obj.setAppIcon(closure_0(closure_2[13]).LimitedTimeAppIconIds.HEXAGON, closure_1_2, { showErrorToast: false });
                  },
            restore() {
                    let DEFAULT_HEXAGON_CAMPAIGN_APP_ICON_ID = closure_1_7.appIconId;
                    const setAppIcon = closure_0(closure_2[8]).setAppIcon;
                    closure_0(closure_2[8]);
                    const tmp = closure_0;
                    const tmp2 = closure_2;
                    if (DEFAULT_HEXAGON_CAMPAIGN_APP_ICON_ID == null) {
                      DEFAULT_HEXAGON_CAMPAIGN_APP_ICON_ID = tmp(tmp2[10]).DEFAULT_HEXAGON_CAMPAIGN_APP_ICON_ID;
                    }
                    return setAppIcon(DEFAULT_HEXAGON_CAMPAIGN_APP_ICON_ID, closure_1_2, { showErrorToast: false });
                  }
          };
          obj15[closure_131_7.APP_ICON] = obj18;
          const obj19 = {
            apply() {
                    return closure_2_10(closure_1_1);
                  },
            restore() {
                    let obj2;
                    currentUser = currentUser.getCurrentUser();
                    let displayNameStyles;
                    const getHexagonCampaignRestoredDisplayNameStyles = closure_0(closure_2[9]).getHexagonCampaignRestoredDisplayNameStyles;
                    closure_0(closure_2[9]);
                    const tmp2 = closure_2_10;
                    const tmp3 = closure_2;
                    if (currentUser != null) {
                      displayNameStyles = currentUser.displayNameStyles;
                    }
                    obj = { currentDisplayNameStyles: displayNameStyles, previousDisplayNameStyles: closure_1_7.displayNameStyles, canUsePremiumProfileCustomization: obj2.canUsePremiumProfileCustomization(currentUser) };
                    obj2 = closure_1(tmp3[14]);
                    return tmp2(getHexagonCampaignRestoredDisplayNameStyles(obj));
                  }
          };
          obj15[closure_131_7.DISPLAY_NAME_STYLE] = obj19;
          let closure_1 = 0;
          const items = [];
          closure_1 = HermesBuiltin.arraySpread(items, closure_8.map((() => {
            closure_0 = closure_1_3(function*(arg0, value) {
              let obj4;
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
                  return { value: "IconComponent", done: null };
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
                      closure_2 = tmp4;
                      value = undefined;
                      c3 = 1;
                      c4 = 1;
                      const obj5 = { value: obj4.apply(), done: false };
                      obj4 = closure_1_10[closure_0];
                      return obj5;
                    }
                  } else if (arg0 === 1) {
                    c4 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c4 = 3;
                    const obj6 = { value, done: true };
                    return obj6;
                  } else {
                    const tmp6 = value;
                    if (tmp6) {
                      obj = closure_0(closure_2_2[11]);
                      const result = obj.markHexagonCampaignPerkApplied(closure_0);
                    }
                    c4 = 3;
                    const obj7 = { value, done: true };
                    return obj7;
                  }
                } catch (tmp15) {
                  c4 = 3;
                  throw tmp15;
                }
              }
            });
            return function() {
              return closure_0(...arguments);
            };
          })()), closure_1);
          closure_1 = HermesBuiltin.arraySpread(items, closure_9.map((item) => {
            obj = closure_1_10[item];
            return obj.restore();
          }), closure_1);
          c4 = 3;
          c5 = 1;
          const obj20 = { value: all(items), done: false };
          return obj20;
        }
      } catch (tmp59) {
        c5 = 3;
        throw tmp59;
      }
    }
  });
  return obj(...arguments);
};
const HexagonCampaignPerk = HexagonCampaignConstants.HexagonCampaignPerk;
const isHexagonCampaignAppIcon = AppIconConstants.isHexagonCampaignAppIcon;
const HEXAGON_GRADIENT_PRESET = ClientThemesConstants.HEXAGON_GRADIENT_PRESET;
let result = size.fileFinishedImporting("modules/hexagon_campaign/native/applyHexagonCampaignPerks.tsx");

export const applyHexagonCampaignPerks = function applyHexagonCampaignPerks() {
  return obj(...arguments);
};
