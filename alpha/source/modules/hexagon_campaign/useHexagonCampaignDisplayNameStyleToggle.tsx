// Module ID: 16984
// Function ID: 16985
// Name: useHexagonCampaignDisplayNameStyleToggle
// Dependencies: [5, 32, 19, 1385, 5268, 8475, 6687, 5271, 5836, 9331, 16961, 2]
// Exports: useHexagonCampaignDisplayNameStyleToggle

// Module 16984 (useHexagonCampaignDisplayNameStyleToggle)
import useDisplayNameStylesDefault from "useDisplayNameStyles" /* 6687 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 9331 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1385 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5268 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c3, c4, dependencyMap, importDefault, ref;

let metroImportAll;
let metroImportDefault;
let _asyncToGenerator = _asyncToGenerator_mod;
({ HEXAGON_CAMPAIGN_DISPLAY_NAME_STYLES: metroImportDefault, HexagonCampaignPerk: metroImportAll } = HexagonCampaignConstants);
let result = size.fileFinishedImporting("modules/hexagon_campaign/useHexagonCampaignDisplayNameStyleToggle.tsx");

export function useHexagonCampaignDisplayNameStyleToggle(user, showEnrollmentError) {
  let callback;
  let closure_3;
  let items;
  let tmp6;
  _require = showEnrollmentError;
  const tmp = _require;
  let obj = require("ProfileCustomizationUtils");
  let obj2 = { userId: user.id, pendingDisplayNameStyles: obj.useGuildMemberOrUserPendingDisplayNameStyles(user).pendingDisplayNameStyles, ignoreDisabledStylesSetting: true };
  const tmp3 = useDisplayNameStylesDefault(obj2);
  let result = null != tmp3;
  if (result) {
    const tmpResult = tmp(5271);
    result = tmpResult.isHexagonCampaignDisplayNameStyle(tmp3);
  }
  let tmp5 = _slicedToArray(react.useState(false), 2);
  [tmp6, importDefault] = tmp5;
  dependencyMap = react.useRef(false);
  _asyncToGenerator = react.useRef(true);
  const tmpResult2 = tmp(5836);
  const unmountEffect = tmpResult2.useUnmountEffect(() => {
    closure_3.current = false;
  });
  let obj3 = {
    isApplied: result,
    isEnrolling: tmp6,
    applyCampaignDisplayNameStyle: react.useCallback(_asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let closure_1;
      let obj7;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj4 = { value, done: true };
          return obj4;
        } else {
          return { value: "HermesInternal", done: null };
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
              const obj6 = { value, done: true };
              return obj6;
            } else {
              importDefault = tmp;
              showEnrollmentError = undefined;
              if (ref.current) {
                c4 = 3;
                return { value: false, done: true };
              } else {
                ref.current = true;
                importDefault(true);
                showEnrollmentError = false;
                ref = 1;
                c3 = 2;
                c4 = 1;
                const obj8 = { value: obj7.ensureHexagonCampaignEnrollment(constants.DISPLAY_NAME_STYLE), done: false };
                obj7 = showEnrollmentError(ref[10]);
                return obj8;
              }
            }
          } else {
            if (1 === c3) {
              ref = 0;
              showEnrollmentError = false;
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              ref = 0;
              c4 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              showEnrollmentError = value;
              ref = 0;
            }
            let current = closure_129_3.current;
            if (current) {
              let flag;
              closure_129_2.current = false;
              closure_129_1(false);
              if (showEnrollmentError) {
                const obj2 = showEnrollmentError(ref[10]);
                const result = obj2.saveHexagonCampaignPreviousDisplayNameStyles();
                const obj9 = { displayNameStyles };
                const obj3 = showEnrollmentError(ref[9]);
                obj3.setPendingChanges(obj9);
                const obj5 = showEnrollmentError(ref[10]);
                const result1 = obj5.markHexagonCampaignPerkApplied(constants.DISPLAY_NAME_STYLE);
                flag = true;
              } else {
                flag = false;
                if (closure_129_0 != null) {
                  closure_129_0();
                  flag = false;
                }
              }
              current = flag;
            }
            c4 = 3;
            const obj10 = { value: current, done: true };
            return obj10;
          }
        } catch (tmp35) {
          if (0 === ref) {
            c4 = 3;
            throw tmp35;
          } else {
            c3 = 1;
          }
        }
      }
    }), items),
    removeCampaignDisplayNameStyle: callback
  };
  callback = react.useCallback(() => {
    if (!ref.current) {
      const currentUser = UserStore.getCurrentUser();
      let displayNameStyles;
      if (currentUser != null) {
        displayNameStyles = currentUser.displayNameStyles;
      }
      let tmp8 = null;
      const setPendingChanges = UserProfileSettingsActionCreators.setPendingChanges;
      UserProfileSettingsActionCreators;
      const tmp5 = require;
      if (null != displayNameStyles) {
        tmp8 = null;
        const tmp5Result = tmp5(5271);
        if (!tmp5Result.isHexagonCampaignDisplayNameStyle(displayNameStyles)) {
          tmp8 = displayNameStyles;
        }
      }
      const obj = { displayNameStyles: tmp8 };
      setPendingChanges(obj);
    }
  }, []);
  items = [showEnrollmentError];
  return obj3;
}
