// Module ID: 14827
// Function ID: 113063
// Name: useIsHCaptchaModalOpenTracking
// Dependencies: [31, 14778, 14779, 14776, 3982, 3981, 2]
// Exports: useIsHCaptchaModalOpenTracking

// Module 14827 (useIsHCaptchaModalOpenTracking)
import result from "result";
import { doesRegistrationHaveIdentityType as closure_3 } from "useRegistrationUIStore";
import RegistrationTransitionActionTypes from "RegistrationTransitionActionTypes";

let closure_4;
let closure_5;
const require = arg1;
({ RegisterTransitionSteps: closure_4, RegistrationTransitionActionTypes: closure_5 } = RegistrationTransitionActionTypes);
const result = require("RegistrationTransitionActionTypes").fileFinishedImporting("modules/auth/native/components/utils/useIsHCaptchaModalOpenTracking.tsx");

export const useIsHCaptchaModalOpenTracking = function useIsHCaptchaModalOpenTracking() {
  context = React.useContext(context(14776).TrackRegistrationContext);
  const items = [context];
  const layoutEffect = React.useLayoutEffect(() => {
    const rootNavigationRef = context(outer1_1[4]).getRootNavigationRef();
    let current;
    if (null != rootNavigationRef) {
      current = rootNavigationRef.current;
    }
    if (null != current) {
      return rootNavigationRef.addListener("state", () => {
        let obj = context(outer2_1[5]);
        let isModalOpenResult = obj.isModalOpen("hcaptcha");
        if (isModalOpenResult) {
          isModalOpenResult = outer2_3();
        }
        if (isModalOpenResult) {
          obj = { step: outer2_4.CAPTCHA, actionType: outer2_5.VIEWED };
          outer1_0(obj);
        }
      });
    }
    let obj = context(outer1_1[4]);
  }, items);
};
