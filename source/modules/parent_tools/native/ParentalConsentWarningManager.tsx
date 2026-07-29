// Module ID: 16294
// Function ID: 16295
// Name: maybePresentModal
// Dependencies: [3882, 5793, 13898, 5794, 676, 13899, 4157, 16295, 1959, 5134, 16297, 2]

// Module 16294 (maybePresentModal)
import setContent from "setContent";
import freshTeenActivityWithMap from "freshTeenActivityWithMap";
import initialize from "initialize";
import items from "items";
import { AppStates } from "ME";
import "initialize";

let error;
let metroImportAll;
const require = arg1;
function maybePresentModal(daysRemaining) {
  daysRemaining = undefined;
  if (daysRemaining != null) {
    daysRemaining = daysRemaining.daysRemaining;
  }
  let hasItem;
  if (daysRemaining != null) {
    const surfaces = daysRemaining.surfaces;
    if (surfaces != null) {
      hasItem = surfaces.includes(require(13899) /* frozen */.ParentalConsentWarningSurface.MODAL);
    }
  }
  let tmp5 = true === hasItem && null != daysRemaining;
  if (tmp5) {
    tmp5 = daysRemaining >= 0;
  }
  if (tmp5) {
    tmp5 = !initialize.hasShownModalToday();
  }
  if (tmp5) {
    const _Object = Object;
    const values = Object.values(linkedUsers.getLinkedUsers());
    tmp5 = !values.some((link_status) => {
      let tmp = link_status.link_status === constants.ACTIVE;
      if (tmp) {
        tmp = link_status.link_type === constants2.PARENT;
      }
      return tmp;
    });
  }
  if (tmp5) {
    tmp5 = !open.isOpen();
  }
  if (tmp5) {
    const obj = { daysRemaining: null };
    obj[0] = daysRemaining;
    importDefault(4157).openLazy(require(1959) /* asyncRequireImpl */(16295, dependencyMap.paths), "ParentalConsentWarningModal", obj);
    const obj2 = importDefault(4157);
  }
}
({ UserLinkStatus: error, UserLinkType: metroImportAll } = items);
let prototype = function ParentalConsentWarningManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = {
    PARENTAL_CONSENT_WARNING_FETCH_SUCCESS(warning) {
      callback2(warning.warning);
    },
    POST_CONNECTION_OPEN() {
      const values = Object.values(linkedUsers.getLinkedUsers());
      let closure_3 = values.some((link_status) => {
        let tmp = link_status.link_status === constants.ACTIVE;
        if (tmp) {
          tmp = link_status.link_type === constants2.PARENT;
        }
        return tmp;
      });
      callback(16297).maybeFetchWarning();
      if (!initialize.shouldFetchToday()) {
        callback2(initialize.getWarning());
      }
    },
    APP_STATE_UPDATE(state) {
      if (state.state === constants.ACTIVE) {
        callback(16297).maybeFetchWarning();
        if (!initialize.shouldFetchToday()) {
          callback2(obj2.getWarning());
        }
        const obj = callback(16297);
        obj2 = initialize;
      }
    },
    CURRENT_USER_UPDATE(user) {
      user = user.user;
      if (undefined !== user.linked_users) {
        const linked_users = user.linked_users;
        const someResult = linked_users.some((link_status) => {
          let tmp = link_status.link_status === constants.ACTIVE;
          if (tmp) {
            tmp = link_status.link_type === constants2.PARENT;
          }
          return tmp;
        });
        let closure_3 = someResult;
        if (tmp) {
          if (someResult) {
            const warning = initialize.getWarning();
            let hasItem;
            if (warning != null) {
              const surfaces = warning.surfaces;
              if (surfaces != null) {
                hasItem = surfaces.includes(callback(13899).ParentalConsentWarningSurface.BANNER);
              }
            }
            if (true === hasItem) {
              callback(16297).forceFetchWarning();
              const obj2 = callback(16297);
            }
          } else {
            callback(16297).forceFetchWarning();
            const obj = callback(16297);
          }
        }
        tmp = undefined !== closure_3 && closure_3 !== someResult;
      }
    },
    LOGOUT() {
      let c3;
      callback(16297).resetFetchState();
    }
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp3 {
}
prototype = new prototype();
const result = require("initialize").fileFinishedImporting("modules/parent_tools/native/ParentalConsentWarningManager.tsx");

export default prototype;
