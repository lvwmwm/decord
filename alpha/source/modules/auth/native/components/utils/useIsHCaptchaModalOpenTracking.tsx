// Module ID: 15820
// Function ID: 15821
// Name: useIsHCaptchaModalOpenTracking
// Dependencies: [19, 15770, 15771, 15767, 4723, 4722, 2]
// Exports: useIsHCaptchaModalOpenTracking

// Module 15820 (useIsHCaptchaModalOpenTracking)
import RootNavigationRef from "RootNavigationRef" /* 4723 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = fn(15770).doesRegistrationHaveIdentityType;
const RegistrationConstants = fn(15771);
({ RegisterTransitionSteps: closure_4, RegistrationTransitionActionTypes: hasOwnProperty } = RegistrationConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/utils/useIsHCaptchaModalOpenTracking.tsx");

export const useIsHCaptchaModalOpenTracking = function useIsHCaptchaModalOpenTracking() {
  context = noop.useContext(context(15767).TrackRegistrationContext);
  const items = [context];
  const layoutEffect = noop.useLayoutEffect(() => {
    const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
    let current;
    if (rootNavigationRef != null) {
      current = rootNavigationRef.current;
    }
    if (null != current) {
      return rootNavigationRef.addListener("state", () => {
        let isModalOpenResult = context(dependencyMap[5]).isModalOpen("hcaptcha");
        if (isModalOpenResult) {
          isModalOpenResult = closure_2_3();
        }
        if (isModalOpenResult) {
          const obj2 = { step: constants.CAPTCHA, actionType: constants2.VIEWED };
          closure_1_0(obj2);
        }
      });
    }
  }, items);
};
