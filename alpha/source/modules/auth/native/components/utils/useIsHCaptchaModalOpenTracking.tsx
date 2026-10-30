// Module ID: 17984
// Function ID: 17985
// Name: useIsHCaptchaModalOpenTracking
// Dependencies: [19, 17933, 17934, 17930, 5194, 5193, 2]
// Exports: useIsHCaptchaModalOpenTracking

// Module 17984 (useIsHCaptchaModalOpenTracking)
import RootNavigationRef from "RootNavigationRef" /* 5194 */;
import RegistrationUIStore from "RegistrationUIStore" /* 17933 */;
import react from "react" /* 19 */;
import RegistrationConstants from "RegistrationConstants" /* 17934 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let closure_3 = RegistrationUIStore.doesRegistrationHaveIdentityType;
({ RegisterTransitionSteps: closure_4, RegistrationTransitionActionTypes: hasOwnProperty } = RegistrationConstants);
const result = size.fileFinishedImporting("modules/auth/native/components/utils/useIsHCaptchaModalOpenTracking.tsx");

export function useIsHCaptchaModalOpenTracking() {
  let constants2;
  let context;
  context = react.useContext(context(17930).TrackRegistrationContext);
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
