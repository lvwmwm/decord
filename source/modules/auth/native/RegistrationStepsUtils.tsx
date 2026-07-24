// Module ID: 14777
// Function ID: 112638
// Name: getRegistrationSteps
// Dependencies: [5, 31, 13716, 5589, 14778, 14779, 653, 33, 480, 14780, 14786, 14787, 14799, 14800, 14806, 9231, 14808, 14809, 9278, 9275, 14813, 14814, 14818, 14819, 1832, 14789, 4029, 9236, 14826, 2]
// Exports: getAllAuthScreens, getNextRegistrationTransitionStep, handleNextOrSubmitRegistration

// Module 14777 (getRegistrationSteps)
import closure_3 from "RegistrationTransitionActionTypes";
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { usePromoEmailConsentStore } from "setPromoEmailConsentState";
import useRegistrationUIStore from "useRegistrationUIStore";
import RegistrationTransitionActionTypes from "RegistrationTransitionActionTypes";
import { AuthStates } from "ME";
import { jsx } from "jsxProd";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function getRegistrationSteps() {
  return items;
}
function headerTitle() {
  return null;
}
function getNextAuthState(WELCOME) {
  const arr = getRegistrationSteps();
  const index = arr.indexOf(WELCOME);
  if (-1 !== index) {
    if (index !== arr.length - 1) {
      return arr[index + 1];
    }
  }
}
function getPreviousAuthState(AGE_GATE) {
  const arr = getRegistrationSteps();
  const index = arr.indexOf(AGE_GATE);
  if (-1 !== index) {
    if (0 !== index) {
      return arr[index - 1];
    }
  }
}
function getPreviousRegistrationTransitionStep(AGE_GATE) {
  const tmp = getPreviousAuthState(AGE_GATE);
  if (null != tmp) {
    return callback2(tmp);
  }
}
function _handleNextOrSubmitRegistration() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function handleRegistrationSubmit(AGE_GATE, closure_0, context) {
  return _handleRegistrationSubmit(...arguments);
}
function _handleRegistrationSubmit() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ setRegistrationErrors: closure_6, setSubmitting: closure_7, useRegistrationUIStore: closure_8, clearRegistrationErrorMessage: closure_9 } = useRegistrationUIStore);
({ authStateToRegisterTransitionStep: closure_10, RegisterTransitionSteps: closure_11, RegistrationSteps: closure_12, RegistrationTransitionActionTypes: closure_13 } = RegistrationTransitionActionTypes);
const items = [, , , , ];
({ WELCOME: arr[0], REGISTER_IDENTITY: arr[1], REGISTER_DISPLAY_NAME: arr[2], REGISTER_ACCOUNT_INFORMATION: arr[3], AGE_GATE: arr[4] } = AuthStates);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/auth/native/RegistrationStepsUtils.tsx");

export { getRegistrationSteps };
export const getAllAuthScreens = function getAllAuthScreens() {
  let obj = {};
  obj = {
    ignoreKeyboard: true,
    fullscreen: true,
    impressionName: require(480) /* isThrottled */.ImpressionNames.USER_WELCOME,
    headerTitle,
    headerShown: false,
    render() {
      return outer1_15(outer1_1(outer1_2[9]), {});
    }
  };
  obj[AuthStates.WELCOME] = obj;
  obj = {
    ignoreKeyboard: true,
    fullscreen: true,
    impressionName: require(480) /* isThrottled */.ImpressionNames.USER_REGISTRATION,
    impressionProperties: { impression_group: require(480) /* isThrottled */.ImpressionGroups.USER_REGISTRATION_FLOW, step: constants.IDENTITY },
    headerTitle,
    headerLeft(arg0) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["destinationStep"] = outer1_21(outer1_14.REGISTER_IDENTITY);
      return outer1_15(outer1_0(outer1_2[10]).BackButtonWithTracking, obj);
    },
    render() {
      return outer1_15(outer1_0(outer1_2[11]).RegisterIdentity, {});
    }
  };
  obj[AuthStates.REGISTER_IDENTITY] = obj;
  const obj2 = { ignoreKeyboard: true, fullscreen: true, impressionName: require(480) /* isThrottled */.ImpressionNames.USER_REGISTRATION };
  const obj1 = { impression_group: require(480) /* isThrottled */.ImpressionGroups.USER_REGISTRATION_FLOW, step: constants.IDENTITY };
  obj2.impressionProperties = { impression_group: require(480) /* isThrottled */.ImpressionGroups.USER_REGISTRATION_FLOW, step: constants.DISPLAY_NAME };
  obj2.headerTitle = headerTitle;
  obj2.headerLeft = function headerLeft(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["destinationStep"] = outer1_21(outer1_14.REGISTER_DISPLAY_NAME);
    return outer1_15(outer1_0(outer1_2[10]).BackButtonWithTracking, obj);
  };
  obj2.render = function render() {
    return outer1_15(outer1_1(outer1_2[12]), {});
  };
  obj[AuthStates.REGISTER_DISPLAY_NAME] = obj2;
  const obj4 = { ignoreKeyboard: true, fullscreen: true, impressionName: require(480) /* isThrottled */.ImpressionNames.USER_REGISTRATION };
  const obj3 = { impression_group: require(480) /* isThrottled */.ImpressionGroups.USER_REGISTRATION_FLOW, step: constants.DISPLAY_NAME };
  obj4.impressionProperties = { impression_group: require(480) /* isThrottled */.ImpressionGroups.USER_REGISTRATION_FLOW, step: constants.ACCOUNT_INFORMATION };
  obj4.headerTitle = headerTitle;
  obj4.headerLeft = function headerLeft(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["destinationStep"] = outer1_21(outer1_14.REGISTER_ACCOUNT_INFORMATION);
    return outer1_15(outer1_0(outer1_2[10]).BackButtonWithTracking, obj);
  };
  obj4.render = function render() {
    return outer1_15(outer1_1(outer1_2[13]), {});
  };
  obj[AuthStates.REGISTER_ACCOUNT_INFORMATION] = obj4;
  const obj6 = { ignoreKeyboard: true, impressionName: require(480) /* isThrottled */.ImpressionNames.USER_VERIFY_PHONE };
  const obj5 = { impression_group: require(480) /* isThrottled */.ImpressionGroups.USER_REGISTRATION_FLOW, step: constants.ACCOUNT_INFORMATION };
  obj6.impressionProperties = { impression_group: require(480) /* isThrottled */.ImpressionGroups.USER_REGISTRATION_FLOW };
  obj6.headerTitle = headerTitle;
  obj6.headerLeft = function headerLeft(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["destinationStep"] = outer1_11.ACCOUNT_IDENTITY;
    return outer1_15(outer1_0(outer1_2[10]).BackButtonWithTracking, obj);
  };
  obj6.render = function render(arg0) {
    const merged = Object.assign(arg0);
    return outer1_15(outer1_1(outer1_2[14]), {});
  };
  obj[AuthStates.VERIFY_PHONE] = obj6;
  const obj8 = { ignoreKeyboard: true, fullscreen: true, impressionName: require(480) /* isThrottled */.ImpressionNames.USER_LOGIN };
  const obj7 = { impression_group: require(480) /* isThrottled */.ImpressionGroups.USER_REGISTRATION_FLOW };
  obj8.impressionProperties = { impression_group: require(480) /* isThrottled */.ImpressionGroups.USER_LOGIN_FLOW };
  obj8.headerTitle = headerTitle;
  obj8.render = function render() {
    return outer1_15(outer1_1(outer1_2[15]), {});
  };
  obj[AuthStates.LOGIN] = obj8;
  const obj10 = {
    fullscreen: true,
    ignoreKeyboard: true,
    headerTitle,
    headerShown: false,
    render() {
      return outer1_15(outer1_1(outer1_2[16]), { inContainer: true });
    }
  };
  obj[AuthStates.MFA] = obj10;
  const obj11 = {
    ignoreKeyboard: true,
    fullscreen: true,
    headerTitle,
    render(arg0) {
      const merged = Object.assign(arg0);
      return outer1_15(outer1_1(outer1_2[17]), {});
    }
  };
  obj[AuthStates.ACCOUNT_DISABLED_OR_DELETION_SCHEDULED] = obj11;
  obj[AuthStates.COUNTRY_SELECT] = {
    ignoreKeyboard: true,
    headerTitle,
    render(arg0, arg1) {
      let closure_0 = arg1;
      return outer1_15(outer1_1(outer1_2[18]), {
        onClose() {
          return arr.pop();
        },
        onCountrySelected(countryCode) {
          return outer2_1(outer2_2[19]).setCountryCode(countryCode);
        }
      });
    }
  };
  obj[AuthStates.EXTERNAL_LINK] = {
    ignoreKeyboard: true,
    headerTitle,
    render(arg0) {
      const merged = Object.assign(arg0);
      return outer1_15(outer1_1(outer1_2[20]), {});
    }
  };
  const obj12 = {
    ignoreKeyboard: true,
    fullscreen: true,
    impressionName: require(480) /* isThrottled */.ImpressionNames.USER_AGE_GATE,
    headerTitle,
    headerLeft(arg0) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["destinationStep"] = outer1_21(outer1_14.AGE_GATE);
      return outer1_15(outer1_0(outer1_2[10]).BackButtonWithTracking, obj);
    },
    render() {
      return outer1_15(outer1_1(outer1_2[21]), {});
    }
  };
  obj[AuthStates.AGE_GATE] = obj12;
  const obj13 = {
    ignoreKeyboard: true,
    fullscreen: true,
    impressionName: require(480) /* isThrottled */.ImpressionNames.USER_AGE_GATE_UNDERAGE,
    impressionProperties(existingUser) {
      return { impression_group: outer1_0(outer1_2[8]).ImpressionGroups.USER_REGISTRATION_FLOW, existing_user: existingUser.existingUser };
    },
    headerTitle,
    render(arg0, arg1) {
      let closure_0 = arg1;
      const merged = Object.assign(arg0);
      return outer1_15(outer1_1(outer1_2[22]), {
        onClose() {
          return closure_0.popToTop();
        }
      });
    }
  };
  obj[AuthStates.AGE_GATE_UNDERAGE] = obj13;
  const obj14 = {
    ignoreKeyboard: true,
    fullscreen: true,
    headerTitle,
    render() {
      return outer1_15(outer1_0(outer1_2[23]).CompanionRemoteAuth, {});
    }
  };
  obj[AuthStates.COMPANION_REMOTE_AUTH] = obj14;
  return obj;
};
export { getNextAuthState };
export { getPreviousAuthState };
export { getPreviousRegistrationTransitionStep };
export const getNextRegistrationTransitionStep = function getNextRegistrationTransitionStep(closure_0) {
  const tmp = getNextAuthState(closure_0);
  if (null != tmp) {
    return callback2(tmp);
  }
};
export const handleNextOrSubmitRegistration = function handleNextOrSubmitRegistration(REGISTER_DISPLAY_NAME, arg1, arg2) {
  return _handleNextOrSubmitRegistration(...arguments);
};
export { handleRegistrationSubmit };
