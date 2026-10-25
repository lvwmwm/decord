// Module ID: 15856
// Function ID: 15857
// Name: HexagonActionCreators
// Dependencies: [5, 1392, 4996, 3, 1104, 1297, 4998, 584, 2]
// Exports: clearHexagonCampaignAppliedPerks, ensureHexagonCampaignEnrollment, getPendingHexagonCampaignEnrollment, markHexagonCampaignDisplayNameStylesVisited, markHexagonCampaignPerkApplied, saveHexagonCampaignPreviousDisplayNameStyles, saveHexagonCampaignPreviousPerkValues

// Module 15856 (HexagonActionCreators)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import DurationsDefault from "Durations" /* 1104 */;
import HTTPUtils from "HTTPUtils" /* 1297 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 4996 */;
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 4998 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserStore from "UserStore" /* 1392 */;
import size from "module_2" /* 2 */;

let c0, c1, c2, c5, c6, closure_3;

function enrollInHexagonCampaign() {
  return obj(...arguments);
}
let obj = function _enrollInHexagonCampaign() {
  let url;
  obj = _asyncToGenerator(async (arg0, value) => {
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
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
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const HTTP = HTTPUtils.HTTP;
            const obj4 = { url, rejectWithError: true };
            c1 = 1;
            c0 = 1;
            const obj5 = { value: HTTP.post(obj4), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c0 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp7) {
        c0 = 3;
        throw tmp7;
      }
    }
  });
  return obj(...arguments);
};
obj = function _enrollAndWaitForHexagonCampaignPerk() {
  obj = _asyncToGenerator(async (arg0, value) => {
    function waitForHexagonCampaignPerk(CLIENT_THEME) {
      let resolveResult;
      closure_0 = CLIENT_THEME;
      obj = closure_0(closure_2[6]);
      if (obj.isEnrolledInHexagonCampaign(closure_4.getCurrentUser(), CLIENT_THEME)) {
        resolveResult = _Promise.resolve(true);
      } else {
        const self = this;
        const self2 = this;
        resolveResult = new _Promise((arg0) => {
          let currentUser;
          closure_0 = arg0;
          function handleUserStoreChange() {
            obj = closure_0(closure_2[6]);
            if (obj.isEnrolledInHexagonCampaign(currentUser.getCurrentUser(), closure_0)) {
              const _clearTimeout = clearTimeout;
              clearTimeout(closure_2);
              closure_3_4.removeChangeListener(handleUserStoreChange);
              closure_0(true);
            }
          }
          const timeout = setTimeout(() => {
            closure_3_4.removeChangeListener(handleUserStoreChange);
            closure_0(false);
          }, closure_1_7);
          closure_1_4.addChangeListener(handleUserStoreChange);
        });
      }
      return resolveResult;
    }
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
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
      let c4;
      try {
        let closure_2;
        let closure_1;
        c6 = 2;
        const tmp4 = c5;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp;
            closure_1 = undefined;
            c4 = 1;
            c5 = 3;
            c6 = 1;
            const obj4 = { value: enrollInHexagonCampaign(), done: false };
            return obj4;
          }
        } else if (1 === tmp4) {
          c4 = 0;
          closure_2 = closure_3;
          const _HermesInternal2 = HermesInternal;
          closure_130_6.warn("Failed to enroll in the Hexagon campaign: " + closure_2);
          c6 = 3;
          return { value: false, done: true };
        } else if (2 === tmp4) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_1 = value;
            const tmp8 = closure_1;
            if (!tmp8) {
              const _HermesInternal = HermesInternal;
              closure_130_6.warn("Timed out waiting for the Hexagon campaign " + closure_0 + " perk to sync");
            }
            c6 = 3;
            return { value: true, done: true };
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          c4 = 0;
          c5 = 2;
          c6 = 1;
          obj = { value: waitForHexagonCampaignPerk(closure_0), done: false };
          return obj;
        }
      } catch (tmp22) {
        closure_3 = tmp22;
        if (0 === c4) {
          c6 = 3;
          throw tmp22;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _enrollAndClearPendingHexagonCampaignEnrollment() {
  obj = _asyncToGenerator(async (arg0, value) => {
    function enrollAndWaitForHexagonCampaignPerk() {
      return closure_1_11(...arguments);
    }
    let closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
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
      let c4;
      try {
        c5 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            c4 = 1;
            c2 = 2;
            c5 = 1;
            const obj4 = { value: enrollAndWaitForHexagonCampaignPerk(closure_0), done: false };
            return obj4;
          }
        } else if (1 === tmp4) {
          c4 = 0;
          let c10 = null;
          throw closure_3;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c10 = null;
          c5 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          c4 = 0;
          c10 = null;
          c5 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp11) {
        closure_3 = tmp11;
        if (0 === c4) {
          c5 = 3;
          throw tmp11;
        } else {
          c2 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
let closure_5 = HexagonCampaignConstants.HEXAGON_CAMPAIGN_ENROLL_ENDPOINT;
const tmp2 = new LoggerDefault("HexagonActionCreators");
let closure_6 = tmp2;
const result = 5 * DurationsDefault.Millis.SECOND;
const metroImportDefault = result;
let closure_10 = null;
const result1 = size.fileFinishedImporting("modules/hexagon_campaign/HexagonActionCreators.tsx");

export const HEXAGON_CAMPAIGN_PERK_SYNC_TIMEOUT_MS = result;
export { enrollInHexagonCampaign };
export const ensureHexagonCampaignEnrollment = function ensureHexagonCampaignEnrollment(DISPLAY_NAME_STYLE) {
  let resolved;
  function enrollAndClearPendingHexagonCampaignEnrollment() {
    return obj(...arguments);
  }
  obj = HexagonCampaignUtils;
  if (obj.isEnrolledInHexagonCampaign(UserStore.getCurrentUser(), DISPLAY_NAME_STYLE)) {
    resolved = Promise.resolve(true);
  } else {
    if (null == closure_10) {
      closure_10 = enrollAndClearPendingHexagonCampaignEnrollment(DISPLAY_NAME_STYLE);
    }
    resolved = closure_10;
  }
  return resolved;
};
export function getPendingHexagonCampaignEnrollment() {
  return closure_10;
}
export const markHexagonCampaignPerkApplied = function markHexagonCampaignPerkApplied(DISPLAY_NAME_STYLE) {
  obj = DispatcherDefault;
  const obj2 = { type: "HEXAGON_CAMPAIGN_PERK_APPLIED", perk: DISPLAY_NAME_STYLE };
  obj.dispatch(obj2);
};
export const clearHexagonCampaignAppliedPerks = function clearHexagonCampaignAppliedPerks() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "HEXAGON_CAMPAIGN_APPLIED_PERKS_CLEARED" });
};
export const markHexagonCampaignDisplayNameStylesVisited = function markHexagonCampaignDisplayNameStylesVisited() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "HEXAGON_CAMPAIGN_DISPLAY_NAME_STYLES_VISITED" });
};
export const saveHexagonCampaignPreviousPerkValues = function saveHexagonCampaignPreviousPerkValues(previousPerkValues) {
  obj = DispatcherDefault;
  const obj2 = { type: "HEXAGON_CAMPAIGN_PREVIOUS_PERK_VALUES_SAVED", previousPerkValues };
  obj.dispatch(obj2);
};
export const saveHexagonCampaignPreviousDisplayNameStyles = function saveHexagonCampaignPreviousDisplayNameStyles() {
  const currentUser = UserStore.getCurrentUser();
  let displayNameStyles;
  if (currentUser != null) {
    displayNameStyles = currentUser.displayNameStyles;
  }
  if (displayNameStyles == null) {
    displayNameStyles = null;
  }
  obj = HexagonCampaignUtils;
  if (!obj.hasHexagonCampaignDisplayNameFont(displayNameStyles)) {
    const obj4 = { type: "HEXAGON_CAMPAIGN_PREVIOUS_PERK_VALUES_SAVED", previousPerkValues: { displayNameStyles } };
    const obj3 = DispatcherDefault;
    obj3.dispatch(obj4);
  }
};
