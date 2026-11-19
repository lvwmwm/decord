// Module ID: 17549
// Function ID: 17550
// Name: useIsHCaptchaModalOpenTracking
// Dependencies: [19, 17497, 17498, 17494, 4969, 4968, 2]
// Exports: useIsHCaptchaModalOpenTracking

// Module 17549 (useIsHCaptchaModalOpenTracking)
import RootNavigationRef from "RootNavigationRef" /* 4969 */;
import RegistrationUIStore from "RegistrationUIStore" /* 17497 */;
import react from "react" /* 19 */;
import RegistrationConstants from "RegistrationConstants" /* 17498 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let closure_3 = RegistrationUIStore.doesRegistrationHaveIdentityType;
({ RegisterTransitionSteps: closure_4, RegistrationTransitionActionTypes: hasOwnProperty } = RegistrationConstants);
const result = size.fileFinishedImporting("modules/auth/native/components/utils/useIsHCaptchaModalOpenTracking.tsx");

export function useIsHCaptchaModalOpenTracking() {
  let constants2;
  let context;
  context = react.useContext(context(17494).TrackRegistrationContext);
  const items = [context];
  const layoutEffect = react.useLayoutEffect(() => {
    let obj = RootNavigationRef;
    const rootNavigationRef = obj.getRootNavigationRef();
    let current;
    if (rootNavigationRef != null) {
      current = rootNavigationRef.current;
    }
    if (null != current) {
      return rootNavigationRef.addListener("state", () => {
        const obj = context(dependencyMap[5]);
        const isModalOpenResult = obj.isModalOpen("hcaptcha") && closure_2_3();
        if (isModalOpenResult) {
          const obj2 = { step: constants.CAPTCHA, actionType: constants2.VIEWED };
          closure_1_0(obj2);
        }
      });
    }
  }, items);
}
