// Module ID: 18221
// Function ID: 18222
// Name: ParentalConsentWarningManager
// Dependencies: [4802, 7254, 15151, 7255, 1085, 15152, 5056, 18222, 2000, 6808, 18228, 2]

// Module 18221 (ParentalConsentWarningManager)
import Constants from "Constants" /* 1085 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import ParentalConsentWarningTypes from "ParentalConsentWarningTypes" /* 15152 */;
import ParentalConsentWarningActionCreators from "ParentalConsentWarningActionCreators" /* 18228 */;
import ActionSheetStore from "ActionSheetStore" /* 4802 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7254 */;
import ParentalConsentWarningStore from "ParentalConsentWarningStore" /* 15151 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7255 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6808 */;
import size from "module_2" /* 2 */;

let c3;

let metroImportAll;
let metroImportDefault;
const f133908 = (link_status) => link_status.link_status === constants.ACTIVE && link_status.link_type === constants2.PARENT;
function maybePresentModal(daysRemaining) {
  daysRemaining = undefined;
  if (daysRemaining != null) {
    daysRemaining = daysRemaining.daysRemaining;
  }
  let hasItem;
  if (daysRemaining != null) {
    const surfaces = daysRemaining.surfaces;
    if (surfaces != null) {
      hasItem = surfaces.includes(ParentalConsentWarningTypes.ParentalConsentWarningSurface.MODAL);
    }
  }
  let tmp5 = true === hasItem && null != daysRemaining && daysRemaining >= 0 && !ParentalConsentWarningStore.hasShownModalToday();
  if (tmp5) {
    const _Object = Object;
    const values = Object.values(FamilyCenterStore.getLinkedUsers());
    tmp5 = !values.some(f133908);
  }
  if (tmp5) {
    tmp5 = !ActionSheetStore.isOpen();
  }
  if (tmp5) {
    const obj = { daysRemaining };
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(18222, dependencyMap.paths), "ParentalConsentWarningModal", obj);
  }
}
({ UserLinkStatus: metroImportDefault, UserLinkType: metroImportAll } = FamilyCenterConstants);
const AppStates = Constants.AppStates;
class ParentalConsentWarningManager extends AutomaticLifecycleManager {
  constructor() {
    let linkedUsers;
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = {
      PARENTAL_CONSENT_WARNING_FETCH_SUCCESS(warning) {
        maybePresentModal(warning.warning);
      },
      POST_CONNECTION_OPEN() {
        const values = Object.values(linkedUsers.getLinkedUsers());
        c3 = values.some(f133908);
        const obj2 = ParentalConsentWarningActionCreators;
        obj2.maybeFetchWarning();
        const obj3 = ParentalConsentWarningStore;
        if (!ParentalConsentWarningStore.shouldFetchToday()) {
          maybePresentModal(obj3.getWarning());
        }
      },
      APP_STATE_UPDATE(state) {
        if (state.state === constants.ACTIVE) {
          const obj = ParentalConsentWarningActionCreators;
          obj.maybeFetchWarning();
          const obj2 = ParentalConsentWarningStore;
          if (!ParentalConsentWarningStore.shouldFetchToday()) {
            maybePresentModal(obj2.getWarning());
          }
        }
      },
      CURRENT_USER_UPDATE(user) {
        let constants2;
        user = user.user;
        if (undefined !== user.linked_users) {
          const linked_users = user.linked_users;
          const someResult = linked_users.some(f133908);
          c3 = someResult;
          const tmp = undefined !== c3 && c3 !== someResult;
          if (tmp) {
            if (someResult) {
              const warning = ParentalConsentWarningStore.getWarning();
              let hasItem;
              if (warning != null) {
                const surfaces = warning.surfaces;
                if (surfaces != null) {
                  hasItem = surfaces.includes(ParentalConsentWarningTypes.ParentalConsentWarningSurface.BANNER);
                }
              }
              if (true === hasItem) {
                const obj2 = ParentalConsentWarningActionCreators;
                obj2.forceFetchWarning();
              }
            } else {
              const obj = ParentalConsentWarningActionCreators;
              obj.forceFetchWarning();
            }
          }
        }
      },
      LOGOUT() {
        c3 = undefined;
        const obj = ParentalConsentWarningActionCreators;
        obj.resetFetchState();
      }
    };
    return applyArgumentsResult;
  }
}
const parentalConsentWarningManager = new ParentalConsentWarningManager();
const result = size.fileFinishedImporting("modules/parent_tools/native/ParentalConsentWarningManager.tsx");

export default parentalConsentWarningManager;
