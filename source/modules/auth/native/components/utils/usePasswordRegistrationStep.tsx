// Module ID: 14621
// Function ID: 110293
// Name: usePasswordRegistrationStep
// Dependencies: []
// Exports: usePasswordRegistrationStep

// Module 14621 (usePasswordRegistrationStep)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const useRegistrationUIStore = arg1(dependencyMap[3]).useRegistrationUIStore;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/auth/native/components/utils/usePasswordRegistrationStep.tsx");

export const usePasswordRegistrationStep = function usePasswordRegistrationStep() {
  const password = useRegistrationUIStore((registrationOptions) => registrationOptions.registrationOptions).password;
  let str = "";
  if (null != password) {
    str = password;
  }
  const tmp3 = callback2(React.useState(str), 2);
  const first = tmp3[0];
  const arg1 = first;
  const tmp6 = importDefault(dependencyMap[4])("password", useRegistrationUIStore((errors) => errors.errors));
  const importDefault = tmp6;
  let obj = arg1(dependencyMap[5]);
  const passwordScore = obj.usePasswordScore(first);
  const passwordValid = passwordScore.passwordValid;
  const dependencyMap = passwordValid;
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
        tmp4 = null != tmp6;
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
