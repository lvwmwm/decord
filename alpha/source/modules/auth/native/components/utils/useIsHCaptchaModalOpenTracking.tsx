// Module ID: 17376
// Function ID: 17377
// Name: useIsHCaptchaModalOpenTracking
// Dependencies: [19, 17324, 17325, 17321, 4971, 4970, 2]
// Exports: useIsHCaptchaModalOpenTracking

// Module 17376 (useIsHCaptchaModalOpenTracking)
import RootNavigationRef from "RootNavigationRef" /* 4971 */;
import RegistrationUIStore from "RegistrationUIStore" /* 17324 */;
import react from "react" /* 19 */;
import RegistrationConstants from "RegistrationConstants" /* 17325 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let closure_3 = RegistrationUIStore.doesRegistrationHaveIdentityType;
({ RegisterTransitionSteps: closure_4, RegistrationTransitionActionTypes: hasOwnProperty } = RegistrationConstants);
const result = size.fileFinishedImporting("modules/auth/native/components/utils/useIsHCaptchaModalOpenTracking.tsx");

export function useIsHCaptchaModalOpenTracking() {
  let constants2;
  let context;
  context = react.useContext(context(17321).TrackRegistrationContext);
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
