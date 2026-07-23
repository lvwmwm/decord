// Module ID: 14754
// Function ID: 112554
// Name: usePasswordRegistrationStep
// Dependencies: [5, 57, 31, 14731, 9209, 14755, 1212, 14742, 2]
// Exports: usePasswordRegistrationStep

// Module 14754 (usePasswordRegistrationStep)
import PasswordScore from "PasswordScore";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { useRegistrationUIStore } from "useRegistrationUIStore";

const require = arg1;
const result = require("result").fileFinishedImporting("modules/auth/native/components/utils/usePasswordRegistrationStep.tsx");

export const usePasswordRegistrationStep = function usePasswordRegistrationStep() {
  const password = useRegistrationUIStore((registrationOptions) => registrationOptions.registrationOptions).password;
  let str = "";
  if (null != password) {
    str = password;
  }
  const tmp3 = callback2(React.useState(str), 2);
  const first = tmp3[0];
  const tmp6 = importDefault(passwordValid[4])("password", useRegistrationUIStore((errors) => errors.errors));
  importDefault = tmp6;
  let obj = first(passwordValid[5]);
  const passwordScore = obj.usePasswordScore(first);
  passwordValid = passwordScore.passwordValid;
  const items = [first, tmp6, passwordValid];
  // CreateGeneratorClosureLongIndex (0x67)
  const memo = React.useMemo(() => {
    let tmp = null == first;
    if (!tmp) {
      tmp = "" === first;
    }
    if (!tmp) {
      let tmp4 = first.length < 8;
      if (!tmp4) {
        tmp4 = null != closure_1;
      }
      if (!tmp4) {
        tmp4 = false === passwordValid;
      }
      tmp = tmp4;
    }
    return tmp;
  }, items);
  const items1 = [first, tmp6];
  obj = { password: first, setPassword: tmp3[1], passwordScore: passwordScore.passwordScore, preventSubmitPassword: memo, validatePassword: React.useCallback(callback(tmp), items1) };
  return obj;
};
