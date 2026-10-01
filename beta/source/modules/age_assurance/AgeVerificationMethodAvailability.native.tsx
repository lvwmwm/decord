// Module ID: 7889
// Function ID: 7890
// Name: AgeVerificationMethodAvailability
// Dependencies: [5, 32, 19, 1380, 1364, 7890, 7891, 2]
// Exports: getAvailableMethodsV2, useAvailableMethodsV2

// Module 7889 (AgeVerificationMethodAvailability)
import PlatformUtils from "PlatformUtils" /* 1364 */;
import GoogleWalletActionCreators from "GoogleWalletActionCreators" /* 7891 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c5, c6, method;

let tmp;
const AppStoreAgeSignalSupport = tmp(7890);
function filterByAvailability(arr, arg1) {
  ({ googleWallet: require, appStoreSignal: dependencyMap } = arg1);
  return arr.filter((method) => {
    method = method.method;
    const tmp = first;
    const tmp2 = memo;
    if (first(memo[3]).AgeAssuranceMethod.GOOGLE_WALLET === method) {
      return closure_0;
    } else if (tmp(tmp2[3]).AgeAssuranceMethod.OS_SIGNAL === method) {
      return closure_1;
    } else {
      return true;
    }
  });
}
function isAppStoreSignalAvailable() {
  obj = PlatformUtils;
  let isIOSResult = obj.isIOS();
  if (isIOSResult) {
    const tmpResult = AppStoreAgeSignalSupport;
    isIOSResult = tmpResult.isAppStoreAgeSignalSupported();
  }
  return isIOSResult;
}
let obj = function _getAvailableMethodsV() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj3;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
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
      try {
        let closure_4;
        let closure_2;
        let closure_1;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_3 = tmp;
            closure_4 = filterByAvailability;
            closure_2 = closure_0;
            closure_1 = {};
            c5 = 1;
            c6 = 1;
            const obj5 = { value: obj3.checkGoogleWalletAvailable(), done: false };
            obj3 = GoogleWalletActionCreators;
            return obj5;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_1.googleWallet = value;
          closure_1.appStoreSignal = closure_131_6();
          c6 = 3;
          obj = { value: closure_4(closure_2, closure_1), done: true };
          return obj;
        }
      } catch (tmp14) {
        c6 = 3;
        throw tmp14;
      }
    }
  });
  return obj(...arguments);
};
let result = size.fileFinishedImporting("modules/age_assurance/AgeVerificationMethodAvailability.native.tsx");

export const useAvailableMethodsV2 = function useAvailableMethodsV2(methods) {
  let memo;
  let tmp = memo(react.useState(false), 2);
  const first = tmp[0];
  let closure_2 = tmp[1];
  const effect = react.useEffect(() => {
    let c0 = false;
    obj = methods(first[6]);
    const result = obj.checkGoogleWalletAvailable();
    result.then((result) => {
      const tmp = c0;
      if (!tmp) {
        closure_2(result);
      }
    });
    return () => {
      c0 = true;
    };
  }, []);
  memo = react.useMemo(() => {
    obj = methods(first[4]);
    let isIOSResult = obj.isIOS();
    const tmp = methods;
    const tmp2 = first;
    if (isIOSResult) {
      const tmpResult = tmp(tmp2[5]);
      isIOSResult = tmpResult.isAppStoreAgeSignalSupported();
    }
    return isIOSResult;
  }, []);
  const items = [methods, first, memo];
  return react.useMemo(() => {
    methods = first;
    return methods.filter((method) => {
      method = method.method;
      const tmp = first;
      const tmp2 = memo;
      if (first(memo[3]).AgeAssuranceMethod.GOOGLE_WALLET === method) {
        return closure_0;
      } else if (tmp(tmp2[3]).AgeAssuranceMethod.OS_SIGNAL === method) {
        return closure_1;
      } else {
        return true;
      }
    });
  }, items);
};
export const getAvailableMethodsV2 = function getAvailableMethodsV2() {
  return obj(...arguments);
};
