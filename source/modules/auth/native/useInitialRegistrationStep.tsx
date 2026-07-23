// Module ID: 14746
// Function ID: 112495
// Name: isFirstStep
// Dependencies: [31, 1194, 5592, 14731, 14730, 566, 5590, 2]
// Exports: default

// Module 14746 (isFirstStep)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { resetRegistration } from "useRegistrationUIStore";

const require = arg1;
function isFirstStep(arg0) {
  return arg0 === require(14730) /* getRegistrationSteps */.getRegistrationSteps()[1];
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/auth/native/useInitialRegistrationStep.tsx");

export default function useInitialRegistrationStep(arg0) {
  const _require = arg0;
  const items = [closure_5];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_5.getAuthenticationConsentRequired());
  const items1 = [stateFromStores, arg0];
  const effect = React.useEffect(() => {
    let tmp = outer1_7(closure_0);
    if (tmp) {
      tmp = null == stateFromStores;
    }
    if (tmp) {
      const locationMetadata = stateFromStores(outer1_2[6]).getLocationMetadata();
      const obj = stateFromStores(outer1_2[6]);
    }
  }, items1);
  const items2 = [arg0];
  const effect1 = React.useEffect(() => outer1_7(closure_0) ? (() => {
    outer2_6();
    if (!outer2_4.isAuthenticated()) {
      stateFromStores(outer2_2[6]).loginReset();
      const obj = stateFromStores(outer2_2[6]);
    }
  }) : undefined, items2);
};
