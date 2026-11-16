// Module ID: 18410
// Function ID: 18411
// Name: useIsHCaptchaModalOpenTracking
// Dependencies: [19, 18358, 18359, 18355, 5347, 5346, 2]
// Exports: useIsHCaptchaModalOpenTracking

// Module 18410 (useIsHCaptchaModalOpenTracking)
import RootNavigationRef from "RootNavigationRef" /* 5347 */;
import RegistrationUIStore from "RegistrationUIStore" /* 18358 */;
import react from "react" /* 19 */;
import RegistrationConstants from "RegistrationConstants" /* 18359 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let closure_3 = RegistrationUIStore.doesRegistrationHaveIdentityType;
({ RegisterTransitionSteps: closure_4, RegistrationTransitionActionTypes: hasOwnProperty } = RegistrationConstants);
const result = size.fileFinishedImporting("modules/auth/native/components/utils/useIsHCaptchaModalOpenTracking.tsx");

export function useIsHCaptchaModalOpenTracking() {
  let constants2;
  let context;
  context = react.useContext(context(18355).TrackRegistrationContext);
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
