// Module ID: 14641
// Function ID: 110406
// Name: useUsernameRegistrationStep
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: useUsernameRegistrationStep

// Module 14641 (useUsernameRegistrationStep)
import closure_3 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";
import closure_5 from "__exportStarResult1";
import { useRegistrationUIStore } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

({ authStateToRegisterTransitionStep: closure_7, RegistrationTransitionActionTypes: closure_8 } = require("__exportStarResult1"));
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/auth/native/components/utils/useUsernameRegistrationStep.tsx");

export const useUsernameRegistrationStep = function useUsernameRegistrationStep(REGISTER_ACCOUNT_INFORMATION) {
  const arg1 = REGISTER_ACCOUNT_INFORMATION;
  const context = React.useContext(arg1(dependencyMap[5]).TrackRegistrationContext);
  const importDefault = context;
  let obj = arg1(dependencyMap[6]);
  const navigation = obj.useNavigation();
  const dependencyMap = navigation;
  let username = useRegistrationUIStore((registrationOptions) => registrationOptions.registrationOptions).username;
  if (null == username) {
    username = closure_5.registrationUsernameSuggestion();
  }
  let str = "";
  if (null != username) {
    str = username;
  }
  const tmp5 = callback(React.useState(str), 2);
  const first = tmp5[0];
  let callback = first;
  const tmp8 = importDefault(dependencyMap[7])("username", useRegistrationUIStore((errors) => errors.errors));
  const tmp7 = useRegistrationUIStore((errors) => errors.errors);
  const usernameStatus = arg1(dependencyMap[8]).useUsernameStatus(first, true, true);
  let React = usernameStatus;
  let tmp10 = usernameStatus;
  if (null != tmp8) {
    obj = { type: arg1(dependencyMap[9]).NameValidationState.ERROR, message: tmp8 };
    React = obj;
    tmp10 = obj;
  }
  const items = [tmp10, navigation, context, REGISTER_ACCOUNT_INFORMATION];
  const items1 = [first, tmp10];
  callback = React.useCallback((arg0) => {
    let type;
    if (null != obj) {
      type = obj.type;
    }
    if (type === arg0(navigation[9]).NameValidationState.ERROR) {
      let obj = { step: callback(arg0), actionType: constants.INPUT_ERROR };
      const items = [obj.message];
      obj.details = items;
      context(obj);
    }
    if (arg0) {
      const result = arg0(navigation[10]).handleRegistrationSubmit(arg0, navigation, context);
      const obj5 = arg0(navigation[10]);
    } else {
      obj = { step: callback(arg0), toStep: arg0(navigation[10]).getNextRegistrationTransitionStep(arg0), actionType: constants.SUCCESS };
      context(obj);
      const obj3 = arg0(navigation[10]);
      navigation.push(arg0(navigation[10]).getNextAuthState(arg0));
      const obj4 = arg0(navigation[10]);
    }
  }, items);
  const items2 = [first, , ];
  let message;
  const memo = React.useMemo(() => {
    let tmp = null == first;
    if (!tmp) {
      tmp = "" === first;
    }
    if (!tmp) {
      let type;
      if (null != obj) {
        type = obj.type;
      }
      tmp = type === arg0(navigation[9]).NameValidationState.ERROR;
    }
    return tmp;
  }, items1);
  if (null != tmp10) {
    message = tmp10.message;
  }
  items2[1] = message;
  let type;
  if (null != tmp10) {
    type = tmp10.type;
  }
  items2[2] = type;
  obj = {
    username: first,
    setUsername: tmp5[1],
    usernameStatus: tmp10,
    transitionToNextStepOrSubmit: callback,
    preventSubmitUsername: memo,
    validateUsername: React.useCallback(() => {
      if (null != first) {
        if ("" !== first) {
          let type;
          if (null != obj) {
            type = obj.type;
          }
          let message = null;
          if (type === arg0(navigation[9]).NameValidationState.ERROR) {
            message = obj.message;
          }
        }
        return message;
      }
      const intl = arg0(navigation[11]).intl;
      message = intl.string(arg0(navigation[11]).t.GPfy3L);
    }, items2)
  };
  return obj;
};
