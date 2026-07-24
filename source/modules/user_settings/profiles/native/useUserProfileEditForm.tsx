// Module ID: 13627
// Function ID: 104688
// Name: useUserProfileEditForm
// Dependencies: [29, 5, 31, 7930, 6855, 653, 566, 686, 9266, 9812, 9267, 9268, 13628, 7936, 4029, 3803, 12973, 2]
// Exports: default

// Module 13627 (useUserProfileEditForm)
import _objectWithoutProperties from "_objectWithoutProperties";
import ME from "ME";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { FormStates } from "ME";

const require = arg1;
let closure_3 = ["bannerOriginalMd5"];
const result = require("result").fileFinishedImporting("modules/user_settings/profiles/native/useUserProfileEditForm.tsx");

export default function useUserProfileEditForm() {
  let errors;
  let tryItOutChanges;
  let obj = pendingChanges(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ pendingChanges: outer1_7.getPendingChanges(), tryItOutChanges: outer1_7.getTryItOutChanges(), errors: outer1_7.getErrors() }));
  pendingChanges = stateFromStoresObject.pendingChanges;
  ({ tryItOutChanges, errors } = stateFromStoresObject);
  const items1 = [closure_8, _isNativeReflectConstruct];
  const stateFromStores = pendingChanges(566).useStateFromStores(items1, () => {
    let isSubmitting = outer1_7.getFormState() === outer1_9.SUBMITTING;
    if (!isSubmitting) {
      isSubmitting = outer1_8.isSubmitting;
    }
    return isSubmitting;
  });
  // CreateGeneratorClosureLongIndex (0x67)
  const items2 = [stateFromStores, pendingChanges];
  // CreateGeneratorClosureLongIndex (0x67)
  callback = React.useCallback(callback(React.useEffect(() => () => stateFromStores(outer2_2[7]).wait(pendingChanges(outer2_2[8]).resetAllPending), [])), items2);
  const items3 = [stateFromStores, pendingChanges.pendingAvatarDecoration];
  obj = { hasAvatarDecorationEdits: undefined !== pendingChanges.pendingAvatarDecoration, errors, isSubmitting: stateFromStores, handleSubmit: callback, handleSubmitAvatarDecoration: React.useCallback(callback(tmp), items3), resetPending: pendingChanges(9266).resetAllPending };
  const merged = Object.assign(pendingChanges);
  const merged1 = Object.assign(tryItOutChanges);
  return obj;
};
