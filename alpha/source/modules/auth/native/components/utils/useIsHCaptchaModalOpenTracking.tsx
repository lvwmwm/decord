// Module ID: 18702
// Function ID: 18703
// Name: useIsHCaptchaModalOpenTracking
// Dependencies: [19, 18650, 18651, 18647, 5483, 5482, 2]
// Exports: useIsHCaptchaModalOpenTracking

// Module 18702 (useIsHCaptchaModalOpenTracking)
import RootNavigationRef from "RootNavigationRef" /* 5483 */;
import RegistrationUIStore from "RegistrationUIStore" /* 18650 */;
import react from "react" /* 19 */;
import RegistrationConstants from "RegistrationConstants" /* 18651 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let closure_3 = RegistrationUIStore.doesRegistrationHaveIdentityType;
({ RegisterTransitionSteps: closure_4, RegistrationTransitionActionTypes: hasOwnProperty } = RegistrationConstants);
const result = size.fileFinishedImporting("modules/auth/native/components/utils/useIsHCaptchaModalOpenTracking.tsx");

export function useIsHCaptchaModalOpenTracking() {
  let constants2;
  let context;
  context = react.useContext(context(18647).TrackRegistrationContext);
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
