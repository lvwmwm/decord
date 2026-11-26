// Module ID: 7870
// Function ID: 7871
// Name: AgeVerificationActionCreators
// Dependencies: [5, 1387, 6827, 7871, 7872, 7840, 21, 7873, 6130, 7882, 2120, 7845, 7905, 7906, 1626, 6048, 7907, 1400, 1379, 7908, 7909, 572, 7910, 7922, 5722, 6828, 8080, 8081, 8082, 2]

// Module 7870 (AgeVerificationActionCreators)
import Fragment from "Fragment" /* 21 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import LinkingDefault from "Linking" /* 5722 */;
import useAlertStore from "useAlertStore" /* 6048 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6828 */;
import Constants from "Constants" /* 7840 */;
import AgeVerificationIncodeWebViewConstants from "AgeVerificationIncodeWebViewConstants" /* 7871 */;
import NativePermissionConstants from "NativePermissionConstants" /* 7872 */;
import ManualReviewDecidedTeenAlertModalDefault from "ManualReviewDecidedTeenAlertModal" /* 8080 */;
import ManualReviewPendingAlertModalDefault from "ManualReviewPendingAlertModal" /* 8081 */;
import ManualReviewFallbackAlertModalDefault from "ManualReviewFallbackAlertModal" /* 8082 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserStore from "UserStore" /* 1387 */;
import AgeVerificationConstants from "AgeVerificationConstants" /* 6827 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c3, c4;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
function openIncodeAgeVerificationModal(arg0) {
  let require;
  ({ onClose: require, onComplete: importDefault } = arg0);
  let combined;
  let WEBAPP_ENDPOINT;
  if (GLOBAL_ENV != null) {
    WEBAPP_ENDPOINT = GLOBAL_ENV.WEBAPP_ENDPOINT;
  }
  combined = null;
  if (null != WEBAPP_ENDPOINT) {
    let str = "";
    combined = null;
    if ("" !== WEBAPP_ENDPOINT) {
      const _URL = URL;
      const _HermesInternal = HermesInternal;
      let str2 = "https:";
      const self = this;
      const self2 = this;
      const uRL = new URL("https:" + WEBAPP_ENDPOINT);
      let tmp4 = uRL;
      const hostname = uRL.hostname;
      if ("localhost" !== hostname) {
        if ("127.0.0.1" !== hostname) {
          let obj = /^(10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/;
        }
        let tmp5 = closure_12;
        const _HermesInternal2 = HermesInternal;
        combined = "" + str2 + WEBAPP_ENDPOINT + closure_12;
      }
      str2 = "http:";
    }
  }
  let flag = null != combined;
  if (flag) {
    let tmp6 = _asyncToGenerator;
    let tmp7 = (async (arg0, value) => {
      let c2;
      let closure_1;
      let obj6;
      let tmp;
      let v1;
      if (c4 === 2) {
        c4 = 3;
        const str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: "+95" };
        }
      } else {
        try {
          c4 = 2;
          const tmp4 = c3;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_0 = tmp;
              combined = 1;
              c3 = 2;
              c4 = 1;
              const obj7 = { value: obj6.requestPermission(constants.CAMERA, { showAuthorizationError: true }), done: false };
              obj6 = tmp(combined[7]);
              return obj7;
            }
          } else {
            if (1 === tmp4) {
              combined = 0;
              const obj5 = tmp(combined[11]);
              obj5.showFailedToast(constants2.AGE_VERIFICATION_ERROR);
              closure_129_0();
            } else if (2 === tmp4) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                combined = 0;
                c4 = 3;
                const obj8 = { value, done: true };
                return obj8;
              } else {
                const obj2 = tmp(combined[8]);
                c3 = 3;
                c4 = 1;
                const obj9 = {
                  value: obj2.pushLazy(c3(async () => {
                              let c1;
                              let tmp;
                              await tmp(c2[10])(c2[9], c2.paths);
                              tmp = arg1.default;
                              return () => {
                                const obj = { webviewUrl, onClose, onComplete };
                                return closure_3_15(closure_1_0, obj);
                              };
                            }), {}, closure_1_5),
                  done: false
                };
                return obj9;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              combined = 0;
              c4 = 3;
              let obj = { value, done: true };
              return obj;
            } else {
              combined = 0;
            }
            c4 = 3;
            return { value: "HermesInternal", done: "+95" };
          }
        } catch (tmp21) {
          if (0 === combined) {
            c4 = 3;
            throw tmp21;
          } else {
            c3 = 1;
          }
        }
      }
    })();
    flag = true;
  }
  return flag;
}
function showAgeVerification(onClose) {
  let externalWindow;
  let method;
  let verificationVendorName;
  let webviewUrl;
  onClose = onClose.onClose;
  if (onClose === undefined) {
    onClose = function n() {

    };
  }
  let flag = onClose.shouldShowExpressiveModal;
  if (flag === undefined) {
    flag = false;
  }
  ({ externalWindow, webviewUrl } = onClose);
  ({ method, verificationVendorName } = onClose);
  let merged = Object.assign(onClose, Object.assign({ onClose: 0, shouldShowExpressiveModal: 0, method: 0, externalWindow: 0, webviewUrl: 0, verificationVendorName: 0, incodeParameters: 0 }));
  const tmp3 = webviewUrl;
  let obj = onClose(webviewUrl[14]);
  if (obj.isMetaQuest()) {
    const tmp2Result = onClose(tmp3[15]);
    tmp2Result.openAlert(closure_7, jsx(flag(tmp3[16]), {}), onClose);
    return true;
  } else {
    let flag2;
    if (method === onClose(tmp3[17]).AgeAssuranceMethod.AGE_KEY) {
      if (null != webviewUrl) {
        if ("" !== webviewUrl) {
          const tmp2Result6 = onClose(tmp3[18]);
          if (tmp2Result6.isAndroid()) {
            if (externalWindow == null) {
              externalWindow = null;
            }
            const tmp2Result7 = onClose(tmp3[12]);
            const result = tmp2Result7.openAgeVerificationCustomTab(webviewUrl, externalWindow);
            const nextPromise = result.then((result) => {
              const tmp = result;
              if (!tmp) {
                const obj = flag(webviewUrl[11]);
                obj.showFailedToast(constants.AGE_VERIFICATION_ERROR);
                fn();
              }
            });
            nextPromise.catch(() => {
              const obj = flag(webviewUrl[11]);
              obj.showFailedToast(constants.AGE_VERIFICATION_ERROR);
              fn();
            });
            return true;
          } else {
            const tmp2Result8 = onClose(tmp3[18]);
            if (tmp2Result8.isIOS()) {
              const tmp2Result9 = onClose(tmp3[13]);
              const result1 = tmp2Result9.openAgeVerificationAuthSession(webviewUrl);
              const nextPromise1 = result1.then((result) => {
                const tmp = result;
                if (!tmp) {
                  const obj = flag(webviewUrl[11]);
                  obj.showFailedToast(constants.AGE_VERIFICATION_ERROR);
                  fn();
                }
              });
              nextPromise1.catch(() => {
                const obj = flag(webviewUrl[11]);
                obj.showFailedToast(constants.AGE_VERIFICATION_ERROR);
                fn();
              });
              return true;
            }
          }
        }
      }
    }
    if (verificationVendorName === constants.INCODE) {
      const tmp2Result10 = onClose(tmp3[19]);
      if (tmp2Result10.isAgeVerificationIncodeEnabled(merged.entryPoint)) {
        const obj2 = { onClose, onComplete: merged.onComplete };
        flag2 = openIncodeAgeVerificationModal(obj2);
      }
      return flag2;
    }
    flag2 = null != webviewUrl;
    if (flag2) {
      const obj5 = flag(tmp3[8]);
      obj5.pushLazy(merged(function*() {
        let c1;
        let closure_0;
        let paths;
        let tmp;
        yield tmp(c2[10])(c2[20], c2.paths);
        tmp = arg1.default;
        return () => {
          merged = Object.assign(merged);
          return <closure_1_0 webviewUrl={webviewUrl} onClose={onClose} isExpressiveModalV2={isExpressiveModalV2} />;
        };
      }), {}, closure_5);
      flag2 = true;
    }
  }
}
function showManualReviewFallbackModal(AUTOMATED_UNDERAGE_APPEALS, arg1) {
  let closure_0;
  _require = arg1;
  const tmp = c18;
  if (!tmp) {
    c18 = true;
    const obj = require("useAlertStore");
    obj.openAlert(closure_9, jsx(ManualReviewFallbackAlertModalDefault, {}), () => {
      c18 = false;
      if (closure_0 != null) {
        tmp();
      }
    });
  }
}
({ AGE_VERIFICATION_MODAL_KEY: hasOwnProperty, AGE_VERIFICATION_GET_STARTED_MODAL_KEY: metroRequire, AGE_VERIFICATION_QUEST_UNSUPPORTED_ALERT_KEY: metroImportDefault, MANUAL_REVIEW_DECIDED_TEEN_ALERT_KEY: metroImportAll, MANUAL_REVIEW_FALLBACK_ALERT_KEY: c9, MANUAL_REVIEW_PENDING_ALERT_KEY: c10, VerificationVendorName: unpackModuleId } = AgeVerificationConstants);
let closure_12 = AgeVerificationIncodeWebViewConstants.AGE_VERIFICATION_INCODE_PATH;
const NativePermissionTypes = NativePermissionConstants.NativePermissionTypes;
const SafetyToastType = Constants.SafetyToastType;
const jsx = Fragment.jsx;
let c18 = false;
let obj = {
  showAgeVerification,
  showAgeVerificationGetStartedModal(entryPoint) {
    entryPoint = entryPoint.entryPoint;
    let onClose = entryPoint.onClose;
    let prop;
    let tmp = entryPoint;
    const tmp2 = prop;
    let obj = entryPoint(prop[14]);
    if (obj.isMetaQuest()) {
      const tmpResult = tmp(tmp2[15]);
      tmpResult.openAlert(closure_7, jsx(onClose(tmp2[16]), {}), onClose);
    } else {
      const tmpResult2 = tmp(tmp2[19]);
      if (tmpResult2.isAgeVerificationIncodeEnabled(entryPoint)) {
        let tmp5 = UserStore;
        const currentUser = UserStore.getCurrentUser();
        let tmp7 = null;
        prop = undefined;
        if (currentUser != null) {
          prop = currentUser.ageVerificationStatus;
        }
        function handleClose() {
          const obj = DispatcherDefault;
          const obj2 = { type: "CLOSE_AGE_VERIFICATION_MODAL", status: prop };
          obj.dispatch(obj2);
          if (onClose != null) {
            onClose();
          }
        }
        let tmp9 = onClose;
        let obj3 = onClose(tmp2[21]);
        obj3.dispatch({ type: "INITIATE_AGE_VERIFICATION" });
        let tmp11 = openIncodeAgeVerificationModal;
        let obj2 = {
          onClose: handleClose,
          onComplete() {

              }
        };
        let num = 0;
        if (!openIncodeAgeVerificationModal(obj2)) {
          let obj4 = { type: "CLOSE_AGE_VERIFICATION_MODAL", status: prop };
          const tmp9Result = tmp9(tmp2[21]);
          tmp9Result.dispatch(obj4);
          if (onClose != null) {
            onClose();
          }
        }
      } else {
        let tmp3 = _asyncToGenerator;
        let tmp4 = (async (arg0, value) => {
          let c2;
          let closure_0;
          let closure_1;
          let v3;
          if (c3 === 2) {
            c3 = 3;
            const str = "Generator functions may not be called on executing generators";
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "HermesInternal", done: "+95" };
            }
          } else {
            try {
              c3 = 2;
              const tmp3 = prop;
              if (0 === prop) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  onClose = tmp3;
                  entryPoint = tmp3;
                  const obj3 = entryPoint(prop[22]);
                  prop = 1;
                  c3 = 1;
                  const obj5 = { value: obj3.shouldShowManualReviewFallback(entryPoint), done: false };
                  return obj5;
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                if (value) {
                  showManualReviewFallbackModal(closure_129_0, closure_129_1);
                } else {
                  let obj = onClose(prop[8]);
                  obj.pushLazy(c3(async () => {
                    let c1;
                    let tmp;
                    await tmp(c2[10])(c2[23], c2.paths);
                    tmp = arg1.default;
                    return () => {
                      const obj = {
                        entryPoint,
                        onClose() {
                          let tmp;
                          if (closure_1_1 != null) {
                            tmp = closure_1_1();
                          }
                          return tmp;
                        }
                      };
                      return closure_3_15(closure_1_0, obj);
                    };
                  }), {}, closure_1_6);
                }
                c3 = 3;
                return { value: "HermesInternal", done: "+95" };
              }
            } catch (tmp19) {
              c3 = 3;
              throw tmp19;
            }
          }
        })();
      }
    }
  },
  showManualReviewWebview(verification_webview_url, onClose) {
    const obj = {
      webviewUrl: verification_webview_url,
      verificationVendorName: unpackModuleId.K_ID,
      entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.MANUAL_REVIEW,
      onComplete() {

      },
      onClose
    };
    return showAgeVerification(obj);
  },
  showManualReviewDecidedTeenModal(arg0) {
    let decidedPassed;
    let teenAgeRange;
    ({ teenAgeRange, decidedPassed } = arg0);
    const obj = useAlertStore;
    obj.openAlert(metroImportAll, jsx(ManualReviewDecidedTeenAlertModalDefault, { teenAgeRange, decidedPassed }));
  },
  showManualReviewPendingModal() {
    const obj = useAlertStore;
    obj.openAlert(authStore, jsx(ManualReviewPendingAlertModalDefault, {}));
  },
  showManualReviewFallbackModal,
  openUrl(arg0) {
    const obj = LinkingDefault;
    obj.openURL(arg0);
  }
};
let result = size.fileFinishedImporting("modules/age_assurance/AgeVerificationActionCreators.native.tsx");

export default obj;
