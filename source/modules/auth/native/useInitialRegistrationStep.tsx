// Module ID: 15783
// Function ID: 15784
// Name: useInitialRegistrationStep
// Dependencies: [19, 1215, 6062, 15768, 15767, 586, 6060, 2]
// Exports: default

// Module 15783 (useInitialRegistrationStep)
import closure_3 from "noop" /* 19 */;
import closure_4 from "fetchFingerprint" /* 1215 */;
import closure_5 from "hasConsented" /* 6062 */;
import { resetRegistration } from "useRegistrationUIStore" /* 15768 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/auth/native/useInitialRegistrationStep.tsx");

export default function useInitialRegistrationStep(arg0) {
  const _require = arg0;
  const items = [closure_5];
  const stateFromStores = _require(586).useStateFromStores(items, () => authenticationConsentRequired.getAuthenticationConsentRequired());
  const items1 = [stateFromStores, arg0];
  const effect = React.useEffect(() => {
    let tmp2 = callback === callback(closure_1_2[4]).getRegistrationSteps()[1];
    if (tmp2) {
      tmp2 = null == stateFromStores;
    }
    if (tmp2) {
      const locationMetadata = stateFromStores(closure_1_2[6]).getLocationMetadata();
      const obj2 = stateFromStores(closure_1_2[6]);
    }
  }, items1);
  const items2 = [arg0];
  const effect1 = React.useEffect(() => {
    if (callback === obj.getRegistrationSteps()[1]) {
      return () => {
        callback2();
        if (!authenticated.isAuthenticated()) {
          callback(table[6]).loginReset();
          const obj = callback(table[6]);
        }
      };
    }
    obj = callback(closure_1_2[4]);
  }, items2);
};
