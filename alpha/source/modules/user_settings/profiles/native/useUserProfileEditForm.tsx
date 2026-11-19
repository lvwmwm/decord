// Module ID: 15765
// Function ID: 15766
// Name: useUserProfileEditForm
// Dependencies: [109, 5, 32, 19, 8013, 6837, 10084, 1388, 1072, 4817, 504, 7283, 15766, 9302, 4820, 7290, 15767, 6440, 7293, 15768, 6228, 1113, 8790, 572, 15769, 6835, 8023, 14503, 4617, 10096, 6839, 8017, 15042, 2]
// Exports: default

// Module 15765 (useUserProfileEditForm)
import Constants from "Constants" /* 1072 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 4817 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8013 */;
import UserProfileStore from "UserProfileStore" /* 6837 */;
import WidgetStore from "WidgetStore" /* 10084 */;
import UserStore from "UserStore" /* 1388 */;
import size from "module_2" /* 2 */;

let c13, c3, isSubmitting;

let closure_3 = ["bannerOriginalMd5"];
const FormStates = Constants.FormStates;
const HexagonCampaignPerk = HexagonCampaignConstants.HexagonCampaignPerk;
let result = size.fileFinishedImporting("modules/user_settings/profiles/native/useUserProfileEditForm.tsx");

export default function useUserProfileEditForm() {
  let callback1;
  let isSubmitting2;
  let isWaitingForHexagonCampaignEnrollment;
  let pendingChanges;
  let tryItOutChanges;
  const tmp = pendingChanges;
  const tmp2 = isWaitingForHexagonCampaignEnrollment;
  let obj = pendingChanges(isWaitingForHexagonCampaignEnrollment[10]);
  const items = [UserProfileSettingsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { pendingChanges: UserProfileSettingsStore.getPendingChanges(), tryItOutChanges: UserProfileSettingsStore.getTryItOutChanges(), errors: UserProfileSettingsStore.getErrors() };
    return obj;
  });
  pendingChanges = stateFromStoresObject.pendingChanges;
  ({ tryItOutChanges, errors } = stateFromStoresObject);
  let obj2 = pendingChanges(isWaitingForHexagonCampaignEnrollment[10]);
  const items1 = [UserProfileStore, UserProfileSettingsStore, WidgetStore];
  let stateFromStores = obj2.useStateFromStores(items1, () => {
    isSubmitting = UserProfileSettingsStore.getFormState() === constants.SUBMITTING || isSubmitting.isSubmitting || isSubmitting2.isSubmitting;
    return isSubmitting;
  });
  [isWaitingForHexagonCampaignEnrollment, closure_3] = react.useState(false);
  const pendingAvatarDecoration = pendingChanges.pendingAvatarDecoration;
  const effect = react.useEffect(() => pendingChanges(first[11]).resetAllPending, []);
  const items2 = [stateFromStores, isWaitingForHexagonCampaignEnrollment];
  const callback = react.useCallback(_asyncToGenerator(async (arg0, value) => {
    let c11;
    let c12;
    if (c13 === 2) {
      c13 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: "+60" };
      }
    } else {
      c13 = 2;
    }
  }), items2);
  const items3 = [stateFromStores, pendingChanges.pendingAvatarDecoration];
  let obj3 = { hasAvatarDecorationEdits: undefined !== pendingAvatarDecoration, errors, isSubmitting: stateFromStores, isWaitingForHexagonCampaignEnrollment, handleSubmit: callback, handleSubmitAvatarDecoration: callback1, resetPending: tmp(tmp2[11]).resetAllPending };
  callback1 = react.useCallback(_asyncToGenerator(async (arg0, value) => {
    let c2;
    let closure_0;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "+60" };
      }
    } else {
      try {
        let tmp4;
        c3 = 2;
        if (0 === isWaitingForHexagonCampaignEnrollment) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_1 = tmp;
            tmp4 = undefined;
            const tmp19 = stateFromStores;
            if (!tmp19) {
              const obj5 = { avatarDecoration: pendingChanges.pendingAvatarDecoration };
              const obj3 = tmp4(isWaitingForHexagonCampaignEnrollment[11]);
              isWaitingForHexagonCampaignEnrollment = 1;
              c3 = 1;
              const obj6 = { value: obj3.saveProfileAndAccountChanges(obj5), done: false };
              return obj6;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          tmp4 = value;
          let ok;
          if (tmp4 != null) {
            ok = tmp4.ok;
          }
          if (ok) {
            const obj = tmp4(isWaitingForHexagonCampaignEnrollment[11]);
            const result = obj.resetPendingAccountChanges();
          }
        }
        c3 = 3;
        return { value: "HermesInternal", done: "+60" };
      } catch (tmp15) {
        c3 = 3;
        throw tmp15;
      }
    }
  }), items3);
  if (!stateFromStores) {
    stateFromStores = isWaitingForHexagonCampaignEnrollment;
  }
  const merged = Object.assign(pendingChanges);
  const merged1 = Object.assign(tryItOutChanges);
  return obj3;
};
