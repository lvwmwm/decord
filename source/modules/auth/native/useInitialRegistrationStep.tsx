// Module ID: 14631
// Function ID: 110331
// Name: isFirstStep
// Dependencies: []
// Exports: default

// Module 14631 (isFirstStep)
function isFirstStep(arg0) {
  return arg0 === arg1(dependencyMap[4]).getRegistrationSteps()[1];
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const resetRegistration = arg1(dependencyMap[3]).resetRegistration;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/auth/native/useInitialRegistrationStep.tsx");

export default function useInitialRegistrationStep(arg0) {
  const arg1 = arg0;
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[5]).useStateFromStores(items, () => authenticationConsentRequired.getAuthenticationConsentRequired());
  const importDefault = stateFromStores;
  const items1 = [stateFromStores, arg0];
  const effect = React.useEffect(() => {
    let tmp = callback(arg0);
    if (tmp) {
      tmp = null == stateFromStores;
    }
    if (tmp) {
      const locationMetadata = stateFromStores(closure_2[6]).getLocationMetadata();
      const obj = stateFromStores(closure_2[6]);
    }
  }, items1);
  const items2 = [arg0];
  const effect1 = React.useEffect(() => callback(arg0) ? () => {
    callback2();
    if (!authenticated.isAuthenticated()) {
      callback(closure_2[6]).loginReset();
      const obj = callback(closure_2[6]);
    }
  } : undefined, items2);
};
