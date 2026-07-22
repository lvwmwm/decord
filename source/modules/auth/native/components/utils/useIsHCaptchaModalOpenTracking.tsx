// Module ID: 14665
// Function ID: 110578
// Name: useIsHCaptchaModalOpenTracking
// Dependencies: []
// Exports: useIsHCaptchaModalOpenTracking

// Module 14665 (useIsHCaptchaModalOpenTracking)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = arg1(dependencyMap[1]).doesRegistrationHaveIdentityType;
({ RegisterTransitionSteps: closure_4, RegistrationTransitionActionTypes: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/auth/native/components/utils/useIsHCaptchaModalOpenTracking.tsx");

export const useIsHCaptchaModalOpenTracking = function useIsHCaptchaModalOpenTracking() {
  const context = React.useContext(arg1(dependencyMap[3]).TrackRegistrationContext);
  const arg1 = context;
  const items = [context];
  const layoutEffect = React.useLayoutEffect(() => {
    const rootNavigationRef = context(closure_1[4]).getRootNavigationRef();
    let current;
    if (null != rootNavigationRef) {
      current = rootNavigationRef.current;
    }
    if (null != current) {
      return rootNavigationRef.addListener("state", () => {
        let obj = callback(closure_1[5]);
        let isModalOpenResult = obj.isModalOpen("hcaptcha");
        if (isModalOpenResult) {
          isModalOpenResult = callback2();
        }
        if (isModalOpenResult) {
          obj = { step: constants.CAPTCHA, actionType: constants2.VIEWED };
          callback(obj);
        }
      });
    }
    const obj = context(closure_1[4]);
  }, items);
};
