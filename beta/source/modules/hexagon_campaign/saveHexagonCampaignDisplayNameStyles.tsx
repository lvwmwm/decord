// Module ID: 17634
// Function ID: 17635
// Name: saveHexagonCampaignDisplayNameStyles
// Dependencies: [5, 7800, 2]
// Exports: saveHexagonCampaignDisplayNameStyles

// Module 17634 (saveHexagonCampaignDisplayNameStyles)
import UserSettingsAccountActionCreators from "UserSettingsAccountActionCreators" /* 7800 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let closure_1, displayNameStyles;

let obj = function _saveHexagonCampaignDisplayNameStyles() {
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
          return { value: "HermesInternal", done: null };
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
const result = size.fileFinishedImporting("modules/hexagon_campaign/saveHexagonCampaignDisplayNameStyles.tsx");

export function saveHexagonCampaignDisplayNameStyles() {
  return obj(...arguments);
}
