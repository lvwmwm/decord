// Module ID: 17215
// Function ID: 17216
// Name: RedesignNewUserManager
// Dependencies: [12174, 5871, 6539, 9275, 17216, 5039, 17218, 1981, 17217, 1364, 4692, 2]

// Module 17215 (RedesignNewUserManager)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4692 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9275 */;
import ContactSyncModalStore from "ContactSyncModalStore" /* 12174 */;
import NewUserStore from "NewUserStore" /* 5871 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6539 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ initialize: c3, ContactSyncModes: closure_4 } = ContactSyncModalStore);
class RedesignNewUserManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult._onboardingStepIndex = -1;
    applyArgumentsResult._lastShownStepIndex = -1;
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN() {
        return require.handleConnectionOpen();
      },
      ONBOARDING_START() {
        return require.handleOnboardingStart();
      }
    };
    applyArgumentsResult.startOnboarding = function startOnboarding() {
      let paths;
      const tmp = require;
      const tmp2 = dependencyMap;
      let obj = instant_invite_InstantInviteUtils;
      closure_1_3(obj.hasDeferredInvite() ? tmp3.ONBOARDING_INVITE : tmp3.ONBOARDING);
      let tmpResult = tmp(tmp2[4]);
      const nextOnboardingStep = tmpResult.getNextOnboardingStep(false, -1, -1);
      nextOnboardingStep.then((result) => {
        let lastShownStepIndex;
        let onboardingStepIndex;
        ({ lastShownStepIndex, onboardingStepIndex } = result);
        const obj = closure_1_0(paths[4]);
        const keyForOnboardingStep = obj.getKeyForOnboardingStep(onboardingStepIndex);
        if (null != keyForOnboardingStep) {
          const pushLazy = closure_1_1(paths[5]).pushLazy;
          const tmp11 = closure_1_1(paths[5]);
          const obj2 = { initialRouteName: keyForOnboardingStep, initialOnboardingStepIndex: onboardingStepIndex };
          const tmp12 = closure_1_0(paths[7])(paths[6], paths.paths);
          const NEW_USER_MODAL_KEY = tmp(tmp2[8]).NEW_USER_MODAL_KEY;
          let str = "card";
          const tmpResult = closure_1_0(paths[9]);
          if (tmpResult.isAndroid()) {
            str = "transparentModal";
          }
          const obj3 = { fullScreenGestureEnabled: false, presentation: str, animation: "slide_from_bottom" };
          pushLazy(tmp12, obj2, NEW_USER_MODAL_KEY, obj3);
        }
      });
    };
    applyArgumentsResult.handleOnboardingStart = function handleOnboardingStart() {
      require.startOnboarding();
    };
    applyArgumentsResult.handleConnectionOpen = function handleConnectionOpen() {
      if (null != NewUserStore.getType()) {
        const obj = NavigationRouteUtils;
        if (!obj.isModalOpen()) {
          require.startOnboarding();
        }
      }
    };
    return applyArgumentsResult;
  }
}
const redesignNewUserManager = new RedesignNewUserManager();
const result = size.fileFinishedImporting("modules/nuf/native/RedesignNewUserManager.tsx");

export default redesignNewUserManager;
