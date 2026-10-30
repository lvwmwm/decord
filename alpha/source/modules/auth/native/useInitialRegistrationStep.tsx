// Module ID: 17949
// Function ID: 17950
// Name: useInitialRegistrationStep
// Dependencies: [19, 502, 6736, 17933, 17932, 504, 6734, 2]
// Exports: default

// Module 17949 (useInitialRegistrationStep)
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6734 */;
import RegistrationStepsUtils from "RegistrationStepsUtils" /* 17932 */;
import RegistrationUIStore from "RegistrationUIStore" /* 17933 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ConsentStore from "ConsentStore" /* 6736 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const resetRegistration = RegistrationUIStore.resetRegistration;
const result = size.fileFinishedImporting("modules/auth/native/useInitialRegistrationStep.tsx");

export default function useInitialRegistrationStep(arg0) {
  let authenticationConsentRequired;
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ConsentStore];
  const stateFromStores = obj.useStateFromStores(items, () => authenticationConsentRequired.getAuthenticationConsentRequired());
  const items1 = [stateFromStores, arg0];
  const effect = react.useEffect(() => {
    const obj = RegistrationStepsUtils;
    const tmp2 = closure_0 === obj.getRegistrationSteps()[1] && null == stateFromStores;
    if (tmp2) {
      const obj2 = AuthenticationActionCreatorsDefault;
      const locationMetadata = obj2.getLocationMetadata();
    }
  }, items1);
  const items2 = [arg0];
  const effect1 = react.useEffect(() => {
    let authenticated;
    let obj = RegistrationStepsUtils;
    if (closure_0 === obj.getRegistrationSteps()[1]) {
      return () => {
        closure_1_6();
        if (!authenticated.isAuthenticated()) {
          const obj = stateFromStores(closure_1_2[6]);
          obj.loginReset();
        }
      };
    }
  }, items2);
};
