// Module ID: 7545
// Function ID: 7546
// Name: useInitiateAgeVerification
// Dependencies: [5, 32, 19, 1389, 1085, 7015, 504, 584, 7492, 7014, 558, 576, 7505, 2]

// Module 7545 (useInitiateAgeVerification)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import Constants2 from "Constants" /* 7015 */;
import AgeVerificationURLActionCreators from "AgeVerificationURLActionCreators" /* 7505 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1389 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
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
          return { value: "IconComponent", done: null };
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
            return { value: "IconComponent", done: null };
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
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useInitiateAgeVerification(arg0) {
  let classificationId;
  let entryPoint;
  let loading;
  let onComplete;
  let shouldShowExpressiveModal;
  let startVerification;
  let obj = classificationId(576);
  const cResult = obj.c(10);
  ({ onComplete, entryPoint, shouldShowExpressiveModal, classificationId } = arg0);
  const tmp2 = undefined !== shouldShowExpressiveModal && shouldShowExpressiveModal;
  let tmp3 = null;
  if (undefined !== classificationId) {
    tmp3 = classificationId;
  }
  classificationId = tmp3;
  if (cResult[0] === entryPoint) {
    if (cResult[1] === onComplete) {
      let tmp4;
      if (cResult[2] === tmp2) {
        tmp4 = cResult[3];
      }
      ({ loading, startVerification } = useAgeVerificationRunner(tmp4));
      useAgeVerificationRunner(tmp4);
      if (cResult[4] === tmp3) {
        let tmp7;
        if (cResult[5] === startVerification) {
          tmp7 = cResult[6];
        }
        if (cResult[7] === tmp7) {
          let tmp8;
          if (cResult[8] === loading) {
            tmp8 = cResult[9];
          }
          return tmp8;
        }
        const obj2 = { loading, initiateAgeVerification: tmp7 };
        cResult[7] = tmp7;
        cResult[8] = loading;
        cResult[9] = obj2;
        tmp8 = obj2;
      }
      const fn = function v(method, vendor) {
        startVerification = vendor;
        return startVerification(() => {
          const obj = { method, classificationId, vendor };
          const requestAgeVerification = AgeVerificationURLActionCreators.requestAgeVerification;
          AgeVerificationURLActionCreators;
          return requestAgeVerification(obj);
        });
      };
      cResult[4] = tmp3;
      cResult[5] = startVerification;
      cResult[6] = fn;
      tmp7 = fn;
    }
  }
  const obj3 = { onComplete, entryPoint, shouldShowExpressiveModal: tmp2 };
  cResult[0] = entryPoint;
  cResult[1] = onComplete;
  cResult[2] = tmp2;
  cResult[3] = obj3;
  tmp4 = obj3;
}) : (function useInitiateAgeVerification(shouldShowExpressiveModal) {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useInitiateAgeVerificationV2(arg0) {
  let entryPoint;
  let loading;
  let onComplete;
  let onMethodUnavailable;
  let startVerification;
  let obj = startVerification(576);
  const cResult = obj.c(9);
  ({ onComplete, entryPoint, onMethodUnavailable } = arg0);
  if (cResult[0] === entryPoint) {
    if (cResult[1] === onComplete) {
      let tmp2;
      let tmp5;
      if (cResult[2] === onMethodUnavailable) {
        tmp2 = cResult[3];
      }
      ({ loading, startVerification } = useAgeVerificationRunner(tmp2));
      useAgeVerificationRunner(tmp2);
      if (cResult[4] !== startVerification) {
        const fn = function c(arg0) {
          let closure_0 = arg0;
          return startVerification(() => {
            const obj = startVerification(closure_2_2[12]);
            return obj.requestAgeVerificationV2(closure_0.method, closure_0.vendor);
          }, arg0);
        };
        cResult[4] = startVerification;
        cResult[5] = fn;
        tmp5 = fn;
      } else {
        tmp5 = cResult[5];
      }
      if (cResult[6] === tmp5) {
        let tmp6;
        if (cResult[7] === loading) {
          tmp6 = cResult[8];
        }
        return tmp6;
      }
      const obj2 = { loading, initiateAgeVerificationV2: tmp5 };
      cResult[6] = tmp5;
      cResult[7] = loading;
      cResult[8] = obj2;
      tmp6 = obj2;
    }
  }
  const obj3 = { onComplete, entryPoint, shouldShowExpressiveModal: true, onMethodUnavailable };
  cResult[0] = entryPoint;
  cResult[1] = onComplete;
  cResult[2] = onMethodUnavailable;
  cResult[3] = obj3;
  tmp2 = obj3;
}) : (function useInitiateAgeVerificationV2(onComplete) {
  let items;
  let obj = { onComplete: onComplete.onComplete, entryPoint: onComplete.entryPoint, shouldShowExpressiveModal: true, onMethodUnavailable: onComplete.onMethodUnavailable };
  const tmp = useAgeVerificationRunner(obj);
  const startVerification = tmp.startVerification;
  const obj2 = {
    loading: tmp.loading,
    initiateAgeVerificationV2: react.useCallback((arg0) => {
      let closure_0 = arg0;
      return startVerification(() => {
        const obj = startVerification(closure_2_2[12]);
        return obj.requestAgeVerificationV2(closure_0.method, closure_0.vendor);
      }, arg0);
    }, items)
  };
  items = [startVerification];
  return obj2;
});
const result = size.fileFinishedImporting("modules/age_assurance/hooks/useInitiateAgeVerification.tsx");

export const useInitiateAgeVerification = tmp2;
export const useInitiateAgeVerificationV2 = tmp3;
