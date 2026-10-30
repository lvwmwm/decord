// Module ID: 8011
// Function ID: 8012
// Name: useInitiateAgeVerification
// Dependencies: [5, 32, 19, 1384, 1072, 7484, 504, 572, 7947, 7490, 7960, 2]
// Exports: useInitiateAgeVerification, useInitiateAgeVerificationV2

// Module 8011 (useInitiateAgeVerification)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import Constants2 from "Constants" /* 7484 */;
import AgeVerificationURLActionCreators from "AgeVerificationURLActionCreators" /* 7960 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1384 */;
import size from "module_2" /* 2 */;

let code, v2;

function useAgeVerificationRunner(onComplete) {
  let closure_4;
  let first;
  onComplete = onComplete.onComplete;
  let entryPoint = onComplete.entryPoint;
  let flag = onComplete.shouldShowExpressiveModal;
  if (flag === undefined) {
    flag = false;
  }
  const onMethodUnavailable = onComplete.onMethodUnavailable;
  _slicedToArray = undefined;
  let current;
  let callback;
  let obj = current;
  [first, _slicedToArray] = current.useState(false);
  let obj2 = onComplete(flag[6]);
  const items = [callback];
  const stateFromStores = obj2.useStateFromStores(items, () => callback.getCurrentUser());
  let prop;
  const useRef = current.useRef;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  current = useRef(prop).current;
  const items1 = [current];
  callback = obj.useCallback(() => {
    const obj = DispatcherDefault;
    const obj2 = { type: "CLOSE_AGE_VERIFICATION_MODAL", status: current };
    obj.dispatch(obj2);
  }, items1);
  const useCallback = obj.useCallback;
  let closure_0 = onMethodUnavailable((onComplete, entryPoint) => {
    let closure_3;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0, value) {
      let externalWindow;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === v2) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              onComplete = entryPoint;
              entryPoint = undefined;
              tmp64(true);
              c5 = 2;
              const obj5 = closure_2_1(true[7]);
              obj5.dispatch({ type: "INITIATE_AGE_VERIFICATION" });
              code = onComplete();
              v2 = 3;
              c7 = 1;
              return { value: code, done: false };
            }
          } else if (1 === v2) {
            c5 = 0;
            code = tmp64(false);
            throw tmp64;
          } else {
            if (2 === v2) {
              c5 = 1;
              code = v2();
              if (null != tmp) {
                code = undefined;
                if (code != null) {
                  const body = code.body;
                  if (body != null) {
                    code = body.code;
                  }
                }
                if (code === constants.AGE_VERIFICATION_METHOD_UNAVAILABLE) {
                  const obj4 = closure_2_1(true[9]);
                  code = obj4.showFailedToast(constants2.AGE_VERIFICATION_METHOD_UNAVAILABLE);
                  tmp();
                }
              }
              code = closure_2_1(true[9]).showFailedToast;
              closure_2_1(true[9]);
              code(constants2.TIGGER_PAWTECT_ERROR);
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              tmp64(false);
              c7 = 3;
              return { value, done: true };
            } else {
              entryPoint = value;
              code = closure_2_1(true[8]).showAgeVerification;
              let method;
              closure_2_1(true[8]);
              if (onComplete != null) {
                method = onComplete.method;
              }
              const obj = { method, externalWindow, webviewUrl: entryPoint.verification_webview_url, verificationRequestId: entryPoint.verification_request_id, verificationVendorName: entryPoint.verification_vendor_name, incodeParameters: entryPoint.incode_parameters, onComplete, onClose: v2, onCancel: v2, entryPoint, shouldShowExpressiveModal: code };
              externalWindow = undefined;
              if (onComplete != null) {
                externalWindow = onComplete.externalWindow;
              }
              if (false === code(obj)) {
                const obj2 = closure_2_1(true[9]);
                code = obj2.showFailedToast(constants2.TIGGER_PAWTECT_ERROR);
                v2();
              }
              c5 = 1;
            }
            c5 = 0;
            tmp64(false);
            c7 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp64) {
          if (0 === c5) {
            c7 = 3;
            throw tmp64;
          } else if (1 === tmp66) {
            v2 = 1;
          } else {
            v2 = 2;
          }
        }
      }
    })();
  });
  const items2 = [onComplete, callback, flag, entryPoint, onMethodUnavailable];
  const obj3 = {
    loading: first,
    startVerification: useCallback(function() {
      return closure_0(...arguments);
    }, items2)
  };
  return obj3;
}
let _slicedToArray = _slicedToArray_mod;
const AbortCodes = Constants.AbortCodes;
const SafetyToastType = Constants2.SafetyToastType;
const result = size.fileFinishedImporting("modules/age_assurance/hooks/useInitiateAgeVerification.tsx");

export function useInitiateAgeVerification(shouldShowExpressiveModal) {
  let entryPoint;
  let items;
  let onComplete;
  let flag = shouldShowExpressiveModal.shouldShowExpressiveModal;
  ({ onComplete, entryPoint } = shouldShowExpressiveModal);
  if (flag === undefined) {
    flag = false;
  }
  let classificationId = shouldShowExpressiveModal.classificationId;
  if (classificationId === undefined) {
    classificationId = null;
  }
  const tmp2 = useAgeVerificationRunner({ onComplete, entryPoint, shouldShowExpressiveModal: flag });
  let startVerification = tmp2.startVerification;
  let obj = {
    loading: tmp2.loading,
    initiateAgeVerification: react.useCallback((method, vendor) => {
      startVerification = vendor;
      return startVerification(() => {
        const obj = { method, classificationId, vendor };
        const requestAgeVerification = AgeVerificationURLActionCreators.requestAgeVerification;
        AgeVerificationURLActionCreators;
        return requestAgeVerification(obj);
      });
    }, items)
  };
  items = [startVerification, classificationId];
  return obj;
}
export function useInitiateAgeVerificationV2(onComplete) {
  let items;
  let obj = { onComplete: onComplete.onComplete, entryPoint: onComplete.entryPoint, shouldShowExpressiveModal: true, onMethodUnavailable: onComplete.onMethodUnavailable };
  const tmp = useAgeVerificationRunner(obj);
  const startVerification = tmp.startVerification;
  const obj2 = {
    loading: tmp.loading,
    initiateAgeVerificationV2: react.useCallback((arg0) => {
      let closure_0 = arg0;
      return startVerification(() => {
        const obj = startVerification(closure_2_2[10]);
        return obj.requestAgeVerificationV2(closure_0.method, closure_0.vendor);
      }, arg0);
    }, items)
  };
  items = [startVerification];
  return obj2;
}
