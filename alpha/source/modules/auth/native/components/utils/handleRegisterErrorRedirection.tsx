// Module ID: 16413
// Function ID: 16414
// Name: handleRegisterErrorRedirection
// Dependencies: [16364, 1074, 1094, 7288, 16362, 16371, 2]
// Exports: default

// Module 16413 (handleRegisterErrorRedirection)
import Constants from "Constants" /* 1074 */;
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import getErrorDefault from "getError" /* 7288 */;
import RegistrationStepsUtils from "RegistrationStepsUtils" /* 16362 */;
import RegistrationUtils from "RegistrationUtils" /* 16371 */;
import RegistrationConstants from "RegistrationConstants" /* 16364 */;
import size from "module_2" /* 2 */;

function getRedirectStepForErrorKey(arg0) {
  if ("email" !== arg0) {
    if ("phoneToken" !== arg0) {
      if ("global_name" === arg0) {
        return ConstantsIOS.AuthStates.REGISTER_DISPLAY_NAME;
      } else {
        if ("username" !== arg0) {
          if ("password" !== arg0) {
            return null;
          }
        }
        return ConstantsIOS.AuthStates.REGISTER_ACCOUNT_INFORMATION;
      }
    }
  }
  return ConstantsIOS.AuthStates.REGISTER_IDENTITY;
}
({ RegisterTransitionSteps: c3, RegistrationTransitionActionTypes: closure_4, authStateToRegisterTransitionStep: hasOwnProperty } = RegistrationConstants);
const AbortCodes = Constants.AbortCodes;
let closure_7 = { [ConstantsIOS.AuthStates.REGISTER_IDENTITY]: ["email", "phoneToken"], [ConstantsIOS.AuthStates.REGISTER_DISPLAY_NAME]: ["global_name"], [ConstantsIOS.AuthStates.REGISTER_ACCOUNT_INFORMATION]: ["username", "password"] };
const result = size.fileFinishedImporting("modules/auth/native/components/utils/handleRegisterErrorRedirection.tsx");

export default function handleRegisterErrorRedirection(navigate, fn, code, step) {
  if (null == getErrorDefault("date_of_birth", code)) {
    const _Number = Number;
    if (Number(code.code) !== AbortCodes.UNDER_MINIMUM_AGE) {
      const registrationSteps = RegistrationStepsUtils.getRegistrationSteps();
      const obj8 = registrationSteps[Symbol.iterator]();
      while (obj8 !== undefined) {
        let items = closure_7[tmp4];
        if (items == null) {
          items = [];
        }
        for (const item10023 of items) {
          let tmp9 = item10023;
          let tmp13 = getErrorDefault(item10023, arg2);
          if (null != tmp13) {
            let tmp17 = getRedirectStepForErrorKey(tmp9);
            let tmp18 = tmp17;
            if (null != tmp17) {
              let obj2 = { step: null, actionType: null, details: null };
              obj2.step = hasOwnProperty(tmp18);
              obj2.actionType = constants2.RESPONSE_ERROR;
              let items1 = [tmp14, ];
              let obj3 = RegistrationUtils;
              items1[1] = obj3.getCommonErrorDetails(arg2.error_code);
              obj2.details = items1;
              let tmp25 = arg1(obj2);
              let navigateResult = arg0.navigate(tmp18);
              obj.return();
              obj8.return();
            }
          }
          continue;
        }
        continue;
      }
      if (tmp29) {
        const obj4 = { step, actionType: constants2.RESPONSE_ERROR, details: null };
        const items2 = [RegistrationUtils.getCommonErrorDetails(code.error_code)];
        obj4.details = items2;
        fn(obj4);
      }
    }
  }
  fn({ step: constants.AGE_GATE_UNDERAGE, actionType: constants2.VIEWED });
  navigate.push(ConstantsIOS.AuthStates.AGE_GATE_UNDERAGE, { fromRegister: true, disableSwipe: true });
};
