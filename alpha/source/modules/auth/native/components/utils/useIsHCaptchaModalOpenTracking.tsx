// Module ID: 18315
// Function ID: 18316
// Name: useIsHCaptchaModalOpenTracking
// Dependencies: [19, 18263, 18264, 18260, 5345, 5344, 2]
// Exports: useIsHCaptchaModalOpenTracking

// Module 18315 (useIsHCaptchaModalOpenTracking)
import RootNavigationRef from "RootNavigationRef" /* 5345 */;
import RegistrationUIStore from "RegistrationUIStore" /* 18263 */;
import react from "react" /* 19 */;
import RegistrationConstants from "RegistrationConstants" /* 18264 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let closure_3 = RegistrationUIStore.doesRegistrationHaveIdentityType;
({ RegisterTransitionSteps: closure_4, RegistrationTransitionActionTypes: hasOwnProperty } = RegistrationConstants);
const result = size.fileFinishedImporting("modules/auth/native/components/utils/useIsHCaptchaModalOpenTracking.tsx");

export function useIsHCaptchaModalOpenTracking() {
  let constants2;
  let context;
  context = react.useContext(context(18260).TrackRegistrationContext);
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
