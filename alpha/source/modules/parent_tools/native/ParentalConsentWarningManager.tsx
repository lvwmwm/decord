// Module ID: 18816
// Function ID: 18817
// Name: ParentalConsentWarningManager
// Dependencies: [5197, 7629, 16079, 7630, 1087, 16080, 5196, 18817, 2002, 7200, 18823, 2]

// Module 18816 (ParentalConsentWarningManager)
import Constants from "Constants" /* 1087 */;
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import ParentalConsentWarningTypes from "ParentalConsentWarningTypes" /* 16080 */;
import ParentalConsentWarningActionCreators from "ParentalConsentWarningActionCreators" /* 18823 */;
import ActionSheetStore from "ActionSheetStore" /* 5197 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7629 */;
import ParentalConsentWarningStore from "ParentalConsentWarningStore" /* 16079 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7630 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7200 */;
import size from "module_2" /* 2 */;

let c3;

let metroImportAll;
let metroImportDefault;
const f137414 = (link_status) => link_status.link_status === constants.ACTIVE && link_status.link_type === constants2.PARENT;
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
    tmp5 = !values.some(f137414);
  }
  if (tmp5) {
    tmp5 = !ActionSheetStore.isOpen();
  }
  if (tmp5) {
    const obj = { daysRemaining };
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(18817, dependencyMap.paths), "ParentalConsentWarningModal", obj);
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
        c3 = values.some(f137414);
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
          const someResult = linked_users.some(f137414);
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
