// Module ID: 14607
// Function ID: 110110
// Name: getRegistrationSteps
// Dependencies: []
// Exports: getAllAuthScreens, getNextRegistrationTransitionStep, handleNextOrSubmitRegistration

// Module 14607 (getRegistrationSteps)
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
  const _handleNextOrSubmitRegistration = obj;
  return obj(...arguments);
}
function handleRegistrationSubmit(AGE_GATE, closure_0, context) {
  return _handleRegistrationSubmit(...arguments);
}
function _handleRegistrationSubmit() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _handleRegistrationSubmit = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const usePromoEmailConsentStore = arg1(dependencyMap[3]).usePromoEmailConsentStore;
({ setRegistrationErrors: closure_6, setSubmitting: closure_7, useRegistrationUIStore: closure_8, clearRegistrationErrorMessage: closure_9 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
({ authStateToRegisterTransitionStep: closure_10, RegisterTransitionSteps: closure_11, RegistrationSteps: closure_12, RegistrationTransitionActionTypes: closure_13 } = arg1(dependencyMap[5]));
const AuthStates = arg1(dependencyMap[6]).AuthStates;
const jsx = arg1(dependencyMap[7]).jsx;
const items = [, , , , ];
({ WELCOME: arr[0], REGISTER_IDENTITY: arr[1], REGISTER_DISPLAY_NAME: arr[2], REGISTER_ACCOUNT_INFORMATION: arr[3], AGE_GATE: arr[4] } = AuthStates);
const tmp4 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[29]).fileFinishedImporting("modules/auth/native/RegistrationStepsUtils.tsx");

export { getRegistrationSteps };
export const getAllAuthScreens = function getAllAuthScreens() {
  let obj = {};
  obj = {
    impressionName: arg1(dependencyMap[8]).ImpressionNames.USER_WELCOME,
    headerTitle,
    render() {
      return callback3(callback2(closure_2[9]), {});
    }
  };
  obj[AuthStates.WELCOME] = obj;
  obj = {
    1364605794: null,
    -1805531015: null,
    impressionName: arg1(dependencyMap[8]).ImpressionNames.USER_REGISTRATION,
    impressionProperties: { impression_group: arg1(dependencyMap[8]).ImpressionGroups.USER_REGISTRATION_FLOW, step: constants.IDENTITY },
    headerTitle,
    headerLeft(arg0) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["destinationStep"] = callback4(constants2.REGISTER_IDENTITY);
      return callback3(callback(closure_2[10]).BackButtonWithTracking, obj);
    },
    render() {
      return callback3(callback(closure_2[11]).RegisterIdentity, {});
    }
  };
  obj[AuthStates.REGISTER_IDENTITY] = obj;
  const obj2 = { 1364605794: null, -1805531015: null, impressionName: arg1(dependencyMap[8]).ImpressionNames.USER_REGISTRATION };
  const obj1 = { impression_group: arg1(dependencyMap[8]).ImpressionGroups.USER_REGISTRATION_FLOW, step: constants.IDENTITY };
  obj2.impressionProperties = { impression_group: arg1(dependencyMap[8]).ImpressionGroups.USER_REGISTRATION_FLOW, step: constants.DISPLAY_NAME };
  obj2.headerTitle = headerTitle;
  obj2.headerLeft = function headerLeft(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["destinationStep"] = callback4(constants2.REGISTER_DISPLAY_NAME);
    return callback3(callback(closure_2[10]).BackButtonWithTracking, obj);
  };
  obj2.render = function render() {
    return callback3(callback2(closure_2[12]), {});
  };
  obj[AuthStates.REGISTER_DISPLAY_NAME] = obj2;
  const obj4 = { 1364605794: null, -1805531015: null, impressionName: arg1(dependencyMap[8]).ImpressionNames.USER_REGISTRATION };
  const obj3 = { impression_group: arg1(dependencyMap[8]).ImpressionGroups.USER_REGISTRATION_FLOW, step: constants.DISPLAY_NAME };
  obj4.impressionProperties = { impression_group: arg1(dependencyMap[8]).ImpressionGroups.USER_REGISTRATION_FLOW, step: constants.ACCOUNT_INFORMATION };
  obj4.headerTitle = headerTitle;
  obj4.headerLeft = function headerLeft(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["destinationStep"] = callback4(constants2.REGISTER_ACCOUNT_INFORMATION);
    return callback3(callback(closure_2[10]).BackButtonWithTracking, obj);
  };
  obj4.render = function render() {
    return callback3(callback2(closure_2[13]), {});
  };
  obj[AuthStates.REGISTER_ACCOUNT_INFORMATION] = obj4;
  const obj6 = { ignoreKeyboard: true, impressionName: arg1(dependencyMap[8]).ImpressionNames.USER_VERIFY_PHONE };
  const obj5 = { impression_group: arg1(dependencyMap[8]).ImpressionGroups.USER_REGISTRATION_FLOW, step: constants.ACCOUNT_INFORMATION };
  obj6.impressionProperties = { impression_group: arg1(dependencyMap[8]).ImpressionGroups.USER_REGISTRATION_FLOW };
  obj6.headerTitle = headerTitle;
  obj6.headerLeft = function headerLeft(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["destinationStep"] = constants.ACCOUNT_IDENTITY;
    return callback3(callback(closure_2[10]).BackButtonWithTracking, obj);
  };
  obj6.render = function render(arg0) {
    const merged = Object.assign(arg0);
    return callback3(callback2(closure_2[14]), {});
  };
  obj[AuthStates.VERIFY_PHONE] = obj6;
  const obj8 = { 1364605794: null, -1805531015: null, impressionName: arg1(dependencyMap[8]).ImpressionNames.USER_LOGIN };
  const obj7 = { impression_group: arg1(dependencyMap[8]).ImpressionGroups.USER_REGISTRATION_FLOW };
  obj8.impressionProperties = { impression_group: arg1(dependencyMap[8]).ImpressionGroups.USER_LOGIN_FLOW };
  obj8.headerTitle = headerTitle;
  obj8.render = function render() {
    return callback3(callback2(closure_2[15]), {});
  };
  obj[AuthStates.LOGIN] = obj8;
  obj[AuthStates.MFA] = {
    headerTitle,
    render() {
      return callback3(callback2(closure_2[16]), { inContainer: true });
    }
  };
  const obj10 = {
    1364605794: null,
    -1805531015: null,
    headerTitle,
    render(arg0) {
      const merged = Object.assign(arg0);
      return callback3(callback2(closure_2[17]), {});
    }
  };
  obj[AuthStates.ACCOUNT_DISABLED_OR_DELETION_SCHEDULED] = obj10;
  obj[AuthStates.COUNTRY_SELECT] = {
    ignoreKeyboard: true,
    headerTitle,
    render(arg0, arg1) {
      return callback3(callback2(closure_2[18]), {
        onClose() {
          return arg1.pop();
        },
        onCountrySelected(countryCode) {
          return callback(closure_2[19]).setCountryCode(countryCode);
        }
      });
    }
  };
  obj[AuthStates.EXTERNAL_LINK] = {
    ignoreKeyboard: true,
    headerTitle,
    render(arg0) {
      const merged = Object.assign(arg0);
      return callback3(callback2(closure_2[20]), {});
    }
  };
  const obj11 = {
    1364605794: null,
    -1805531015: null,
    impressionName: arg1(dependencyMap[8]).ImpressionNames.USER_AGE_GATE,
    headerTitle,
    headerLeft(arg0) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["destinationStep"] = callback4(constants2.AGE_GATE);
      return callback3(callback(closure_2[10]).BackButtonWithTracking, obj);
    },
    render() {
      return callback3(callback2(closure_2[21]), {});
    }
  };
  obj[AuthStates.AGE_GATE] = obj11;
  const obj12 = {
    1364605794: null,
    -1805531015: null,
    impressionName: arg1(dependencyMap[8]).ImpressionNames.USER_AGE_GATE_UNDERAGE,
    impressionProperties(existingUser) {
      return { impression_group: callback(closure_2[8]).ImpressionGroups.USER_REGISTRATION_FLOW, existing_user: existingUser.existingUser };
    },
    headerTitle,
    render(arg0, arg1) {
      const merged = Object.assign(arg0);
      return callback3(callback2(closure_2[22]), {
        onClose() {
          return arg1.popToTop();
        }
      });
    }
  };
  obj[AuthStates.AGE_GATE_UNDERAGE] = obj12;
  const obj13 = {
    1364605794: null,
    -1805531015: null,
    headerTitle,
    render() {
      return callback3(callback(closure_2[23]).CompanionRemoteAuth, {});
    }
  };
  obj[AuthStates.COMPANION_REMOTE_AUTH] = obj13;
  return obj;
};
export { getNextAuthState };
export { getPreviousAuthState };
export { getPreviousRegistrationTransitionStep };
export const getNextRegistrationTransitionStep = function getNextRegistrationTransitionStep(WELCOME) {
  const tmp = getNextAuthState(WELCOME);
  if (null != tmp) {
    return callback2(tmp);
  }
};
export const handleNextOrSubmitRegistration = function handleNextOrSubmitRegistration(REGISTER_DISPLAY_NAME, arg1, arg2) {
  return _handleNextOrSubmitRegistration(...arguments);
};
export { handleRegistrationSubmit };
