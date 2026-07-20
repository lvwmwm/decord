// Module ID: 15991
// Function ID: 122703
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15991 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ initialize: closure_8, ContactSyncModes: closure_9 } = arg1(dependencyMap[5]));
let closure_10 = importDefault(dependencyMap[6]);
let tmp3 = (arg0) => {
  class RedesignNewUserManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, RedesignNewUserManager);
      items1 = [...items];
      obj = closure_6(RedesignNewUserManager);
      tmp2 = closure_5;
      if (closure_11()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      RedesignNewUserManager = tmp2Result;
      tmp2Result._onboardingStepIndex = -1;
      tmp2Result._lastShownStepIndex = -1;
      tmp2Result.actions = {
        POST_CONNECTION_OPEN() {
              return tmp2Result.handleConnectionOpen();
            },
        ONBOARDING_START() {
              return tmp2Result.handleOnboardingStart();
            }
      };
      tmp2Result.startOnboarding = () => {
        callback(tmp2Result(closure_2[7]).hasDeferredInvite() ? closure_9.ONBOARDING_INVITE : closure_9.ONBOARDING);
        const obj = tmp2Result(closure_2[7]);
        const nextOnboardingStep = tmp2Result(closure_2[8]).getNextOnboardingStep(false, -1, -1);
        nextOnboardingStep.then((arg0) => {
          let lastShownStepIndex;
          let onboardingStepIndex;
          ({ lastShownStepIndex, onboardingStepIndex } = arg0);
          let obj = callback(paths[8]);
          const keyForOnboardingStep = obj.getKeyForOnboardingStep(onboardingStepIndex);
          if (null != keyForOnboardingStep) {
            const obj2 = callback2(paths[9]);
            const tmp11 = callback(paths[11])(paths[10], paths.paths);
            obj = { initialRouteName: keyForOnboardingStep, initialOnboardingStepIndex: onboardingStepIndex };
            const NEW_USER_MODAL_KEY = callback(paths[12]).NEW_USER_MODAL_KEY;
            obj = {};
            let str = "card";
            if (obj5.isAndroid()) {
              str = "transparentModal";
            }
            obj.presentation = str;
            obj2.pushLazy(tmp11, obj, NEW_USER_MODAL_KEY, obj);
            const obj5 = callback(paths[13]);
          }
        });
      };
      tmp2Result.handleOnboardingStart = () => {
        tmp2Result.startOnboarding();
      };
      tmp2Result.handleConnectionOpen = () => {
        if (null != type.getType()) {
          if (!obj.isModalOpen()) {
            tmp2Result.startOnboarding();
          }
          const obj = tmp2Result(closure_2[14]);
        }
      };
      return tmp2Result;
    }
  }
  const arg1 = RedesignNewUserManager;
  callback2(RedesignNewUserManager, arg0);
  return callback(RedesignNewUserManager);
}(importDefault(dependencyMap[15]));
tmp3 = new tmp3();
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/nuf/native/RedesignNewUserManager.tsx");

export default tmp3;
