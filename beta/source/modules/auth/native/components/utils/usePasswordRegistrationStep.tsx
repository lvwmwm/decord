// Module ID: 15592
// Function ID: 15593
// Name: usePasswordRegistrationStep
// Dependencies: [5, 32, 19, 15570, 6376, 15593, 1115, 15581, 2]
// Exports: usePasswordRegistrationStep

// Module 15592 (usePasswordRegistrationStep)
import RegistrationUIStore from "RegistrationUIStore" /* 15570 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c1, c4, importDefault;

const useRegistrationUIStore = RegistrationUIStore.useRegistrationUIStore;
const result = size.fileFinishedImporting("modules/auth/native/components/utils/usePasswordRegistrationStep.tsx");

export const usePasswordRegistrationStep = function usePasswordRegistrationStep() {
  let closure_1;
  let password;
  let passwordValid;
  let tmp4;
  let tmp = useRegistrationUIStore;
  let obj = react;
  let str = useRegistrationUIStore((registrationOptions) => registrationOptions.registrationOptions).password;
  const useState = react.useState;
  if (str == null) {
    str = "";
  }
  [password, tmp4] = useState(str);
  const tmpResult = tmp((errors) => errors.errors);
  const tmp6 = require("getError")("password", tmpResult);
  importDefault = tmp6;
  let obj2 = password(passwordValid[5]);
  const passwordScore1 = obj2.usePasswordScore(password);
  passwordValid = passwordScore1.passwordValid;
  const items = [password, tmp6, passwordValid];
  const passwordScore = passwordScore1.passwordScore;
  const memo = obj.useMemo(() => {
    let tmp = null == first || "" === arr;
    if (!tmp) {
      tmp = arr.length < 8 || null != closure_1 || false === passwordValid;
      const tmp2 = arr.length < 8 || null != closure_1 || false === passwordValid;
    }
    return tmp;
  }, items);
  const items1 = [password, tmp6];
  let obj3 = {
    password,
    setPassword: tmp4,
    passwordScore,
    preventSubmitPassword: memo,
    validatePassword: obj.useCallback(_asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let closure_2;
      let obj3;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c3;
        try {
          c4 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              if (null != first) {
                if ("" !== first) {
                  if (first.length < 8) {
                    const intl2 = tmp(passwordValid[6]).intl;
                    c4 = 3;
                    const obj5 = { value: intl2.string(tmp(passwordValid[6]).t.DfaKHr), done: true };
                    return obj5;
                  } else if (null != closure_1) {
                    c4 = 3;
                    const obj6 = { value: tmp11, done: true };
                    return obj6;
                  } else {
                    c3 = 1;
                    c1 = 2;
                    c4 = 1;
                    const obj7 = { value: obj3.scorePassword(first), done: false };
                    obj3 = tmp(passwordValid[7]);
                    return obj7;
                  }
                }
              }
              const intl3 = tmp(passwordValid[6]).intl;
              c4 = 3;
              const obj8 = { value: intl3.string(tmp(passwordValid[6]).t.R98xD5), done: true };
              return obj8;
            }
          } else {
            if (1 === tmp4) {
              c3 = 0;
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c4 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else if (false === value.valid) {
              const intl = tmp(passwordValid[6]).intl;
              c3 = 0;
              c4 = 3;
              const obj = { value: intl.string(tmp(passwordValid[6]).t.DfaKHr), done: true };
              return obj;
            } else {
              c3 = 0;
            }
            c4 = 3;
            return { value: null, done: true };
          }
        } catch (tmp22) {
          passwordValid = tmp22;
          if (0 === c3) {
            c4 = 3;
            throw tmp22;
          } else {
            c1 = 1;
          }
        }
      }
    }), items1)
  };
  return obj3;
};
