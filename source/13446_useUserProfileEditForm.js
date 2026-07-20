// Module ID: 13446
// Function ID: 102130
// Name: useUserProfileEditForm
// Dependencies: []
// Exports: default

// Module 13446 (useUserProfileEditForm)
let closure_3 = [];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importAll(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
const FormStates = arg1(dependencyMap[5]).FormStates;
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/user_settings/profiles/native/useUserProfileEditForm.tsx");

export default function useUserProfileEditForm() {
  let errors;
  let tryItOutChanges;
  let obj = arg1(dependencyMap[6]);
  const items = [closure_7];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ pendingChanges: store.getPendingChanges(), tryItOutChanges: store.getTryItOutChanges(), errors: store.getErrors() }));
  const pendingChanges = stateFromStoresObject.pendingChanges;
  const arg1 = pendingChanges;
  ({ tryItOutChanges, errors } = stateFromStoresObject);
  const items1 = [closure_8, closure_7];
  const stateFromStores = arg1(dependencyMap[6]).useStateFromStores(items1, () => {
    let isSubmitting = store.getFormState() === constants.SUBMITTING;
    if (!isSubmitting) {
      isSubmitting = isSubmitting.isSubmitting;
    }
    return isSubmitting;
  });
  const importDefault = stateFromStores;
  // CreateGeneratorClosureLongIndex (0x67)
  const items2 = [stateFromStores, pendingChanges];
  // CreateGeneratorClosureLongIndex (0x67)
  const callback = React.useCallback(callback(React.useEffect(() => () => callback2(closure_2[7]).wait(callback(closure_2[8]).resetAllPending), [])), items2);
  const items3 = [stateFromStores, pendingChanges.pendingAvatarDecoration];
  obj = { hasAvatarDecorationEdits: undefined !== pendingChanges.pendingAvatarDecoration, errors, isSubmitting: stateFromStores, handleSubmit: callback, handleSubmitAvatarDecoration: React.useCallback(callback(tmp), items3), resetPending: arg1(dependencyMap[8]).resetAllPending };
  const merged = Object.assign(pendingChanges);
  const merged1 = Object.assign(tryItOutChanges);
  return obj;
};
