// Module ID: 17581
// Function ID: 17582
// Name: RedesignNewUserManager
// Dependencies: [12326, 502, 2044, 5949, 17582, 4737, 4736, 17585, 6613, 9481, 17586, 5093, 17587, 1987, 1369, 2]

// Module 17581 (RedesignNewUserManager)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4736 */;
import RootNavigationRef from "RootNavigationRef" /* 4737 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9481 */;
import isFullScreenVerificationModalRequiredDefault from "isFullScreenVerificationModalRequired" /* 17582 */;
import NewUserUtils from "NewUserUtils" /* 17586 */;
import ContactSyncModalStore from "ContactSyncModalStore" /* 12326 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 2044 */;
import NewUserStore from "NewUserStore" /* 5949 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6613 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ initialize: c3, ContactSyncModes: closure_4 } = ContactSyncModalStore);
class RedesignNewUserManager extends AutomaticLifecycleManager {
  constructor() {
    let action;
    let id;
    const f131149 = (item) => {
      const obj = closure_1_0(closure_1_2[6]);
      const coerceModalRouteResult = obj.coerceModalRoute(item);
      let key;
      const tmp = closure_1_0;
      const tmp2 = closure_1_2;
      if (coerceModalRouteResult != null) {
        const params = coerceModalRouteResult.params;
        if (params != null) {
          const modal = params.modal;
          if (modal != null) {
            key = modal.key;
          }
        }
      }
      return key === tmp(tmp2[7]).NEW_USER_MODAL_KEY;
    };
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult._onboardingStepIndex = -1;
    applyArgumentsResult._lastShownStepIndex = -1;
    applyArgumentsResult._resumeAfterVerificationUserId = null;
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN() {
        return require.handleConnectionOpen();
      },
      ONBOARDING_START() {
        return require.handleOnboardingStart();
      },
      USER_REQUIRED_ACTION_UPDATE(requiredAction) {
        return require.handleRequiredActionUpdate(requiredAction);
      }
    };
    applyArgumentsResult.startOnboarding = function startOnboarding() {
      let tmp = dependencyMap;
      let tmp2 = isFullScreenVerificationModalRequiredDefault;
      let tmp3 = require;
      if (tmp2(UserRequiredActionStore.getAction(), "nuf-verification-gate")) {
        tmp3._resumeAfterVerificationUserId = AuthenticationStore.getId();
      } else {
        const tmp4 = null;
        tmp3._resumeAfterVerificationUserId = null;
        let obj = instant_invite_InstantInviteUtils;
        const tmp6 = React3;
        _false(obj.hasDeferredInvite() ? tmp6.ONBOARDING_INVITE : tmp6.ONBOARDING);
        const tmp5Result = NewUserUtils;
        const nextOnboardingStep = tmp5Result.getNextOnboardingStep(false, -1, -1);
        nextOnboardingStep.then((result) => {
          let lastShownStepIndex;
          let onboardingStepIndex;
          ({ lastShownStepIndex, onboardingStepIndex } = result);
          let tmp2 = dependencyMap;
          let tmp = importDefault;
          const tmp3 = isFullScreenVerificationModalRequiredDefault;
          if (tmp3(action.getAction(), "nuf-verification-gate")) {
            closure_1_0._resumeAfterVerificationUserId = id.getId();
          } else {
            let obj = require("RootNavigationRef");
            const rootNavigationRef = obj.getRootNavigationRef();
            let someResult = !(null == rootNavigationRef || !rootNavigationRef.isReady());
            null == rootNavigationRef || !rootNavigationRef.isReady();
            if (someResult) {
              const routes = rootNavigationRef.getRootState().routes;
              someResult = routes.some(f131149);
            }
            if (!someResult) {
              const tmp4Result = require("NewUserUtils");
              const keyForOnboardingStep = tmp4Result.getKeyForOnboardingStep(onboardingStepIndex);
              if (null != keyForOnboardingStep) {
                const pushLazy = tmp(tmp2[11]).pushLazy;
                const tmpResult = tmp(tmp2[11]);
                const obj2 = { initialRouteName: keyForOnboardingStep, initialOnboardingStepIndex: onboardingStepIndex };
                const tmp18 = require("asyncRequire")(tmp2[12], tmp2.paths);
                const NEW_USER_MODAL_KEY = tmp4(tmp2[7]).NEW_USER_MODAL_KEY;
                let str = "card";
                const tmp4Result2 = require("PlatformUtils");
                if (tmp4Result2.isAndroid()) {
                  str = "transparentModal";
                }
                const obj3 = { fullScreenGestureEnabled: false, presentation: str, animation: "slide_from_bottom" };
                pushLazy(tmp18, obj2, NEW_USER_MODAL_KEY, obj3);
              }
            }
          }
        });
      }
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
    applyArgumentsResult.handleRequiredActionUpdate = function handleRequiredActionUpdate(requiredAction) {
      if (null == requiredAction.requiredAction) {
        const tmp2 = null != require._resumeAfterVerificationUserId && obj3._resumeAfterVerificationUserId === AuthenticationStore.getId() || null != NewUserStore.getType();
        if (tmp2) {
          const obj = RootNavigationRef;
          const rootNavigationRef = obj.getRootNavigationRef();
          let someResult = !(null == rootNavigationRef || !rootNavigationRef.isReady());
          null == rootNavigationRef || !rootNavigationRef.isReady();
          if (someResult) {
            const routes = rootNavigationRef.getRootState().routes;
            someResult = routes.some(f131149);
          }
          if (!someResult) {
            require.startOnboarding();
          }
        }
      }
    };
    return applyArgumentsResult;
  }
}
const redesignNewUserManager = new RedesignNewUserManager();
const result = size.fileFinishedImporting("modules/nuf/native/RedesignNewUserManager.tsx");

export default redesignNewUserManager;
