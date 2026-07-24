// Module ID: 7581
// Function ID: 60392
// Name: openIncodeAgeVerificationModal
// Dependencies: [5, 1849, 7582, 7584, 4344, 7563, 33, 4675, 4337, 7585, 1934, 7568, 1553, 4472, 7600, 7601, 7602, 4347, 3809, 686, 7603, 7604, 7615, 7616, 3827, 2]

// Module 7581 (openIncodeAgeVerificationModal)
import SafetyToastType from "SafetyToastType";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import set from "set";
import { AGE_VERIFICATION_INCODE_PATH as closure_9 } from "postToNativeWebView";
import { NativePermissionTypes } from "NativePermissionStatus";
import { SafetyToastType } from "SafetyToastType";
import { jsx } from "jsxProd";
import set from "set";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function openIncodeAgeVerificationModal(arg0) {
  let importDefault;
  let require;
  ({ onClose: require, onComplete: importDefault } = arg0);
  let WEBAPP_ENDPOINT;
  if (null != GLOBAL_ENV) {
    WEBAPP_ENDPOINT = GLOBAL_ENV.WEBAPP_ENDPOINT;
  }
  let combined = null;
  if (null != WEBAPP_ENDPOINT) {
    combined = null;
    if ("" !== WEBAPP_ENDPOINT) {
      const _URL = URL;
      const _HermesInternal2 = HermesInternal;
      let str3 = "https:";
      const uRL = new URL("https:" + WEBAPP_ENDPOINT);
      const hostname = uRL.hostname;
      if ("localhost" !== hostname) {
        if ("127.0.0.1" !== hostname) {
          let obj = /^(10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/;
        }
        const _HermesInternal = HermesInternal;
        combined = "" + str3 + WEBAPP_ENDPOINT + closure_9;
      }
      str3 = "http:";
    }
  }
  let flag = null != combined;
  if (flag) {
    callback(async () => {
      yield outer2_1(combined[7]).requestPermission(outer2_10.CAMERA, { showAuthorizationError: true });
      const obj = outer2_1(combined[7]);
      yield outer2_1(combined[8]).pushLazy(outer2_3(async () => {
        let closure_0;
        closure_0 = yield outer4_0(combined[10])(combined[9], combined.paths).default;
        return () => outer5_12(closure_0, { webviewUrl: outer4_2, onClose: outer4_0, onComplete: outer4_1 });
      }), {}, outer2_5);
    })();
    flag = true;
  }
  return flag;
}
({ AGE_VERIFICATION_MODAL_KEY: closure_5, AGE_VERIFICATION_GET_STARTED_MODAL_KEY: closure_6, AGE_VERIFICATION_QUEST_UNSUPPORTED_ALERT_KEY: closure_7, VerificationVendorName: closure_8 } = set);
const result = set.fileFinishedImporting("modules/age_assurance/AgeVerificationActionCreators.native.tsx");

export default {
  showAgeVerification(onClose) {
    let shouldShowExpressiveModal;
    let webviewUrl;
    let fn = onClose.onClose;
    if (fn === undefined) {
      fn = function n(arg0) {

      };
    }
    ({ shouldShowExpressiveModal, webviewUrl } = onClose);
    let obj = { onClose: 0, shouldShowExpressiveModal: 0, webviewUrl: 0, verificationVendorName: 0, incodeParameters: 0 };
    Object.setPrototypeOf(null);
    let merged = Object.assign(onClose, obj);
    if (obj2.isMetaQuest()) {
      fn(merged[13]).openAlert(closure_7, jsx(webviewUrl(merged[14]), {}), fn);
      let flag = true;
      const obj6 = fn(merged[13]);
    } else {
      if (onClose.verificationVendorName === constants.INCODE) {
        if (obj3.isAgeVerificationIncodeEnabled(merged.entryPoint)) {
          obj = { onClose: fn, onComplete: merged.onComplete };
          flag = openIncodeAgeVerificationModal(obj);
        }
        obj3 = fn(merged[15]);
      }
      flag = null != webviewUrl;
      if (flag) {
        webviewUrl(merged[8]).pushLazy(callback(async () => {
          let closure_0;
          closure_0 = yield fn(merged[10])(merged[16], merged.paths).default;
          return () => {
            const merged = Object.assign(outer2_2);
            return outer3_12(closure_0, { webviewUrl: outer2_1, onClose: outer2_0 });
          };
        }), {}, closure_5);
        flag = true;
        const obj4 = webviewUrl(merged[8]);
      }
    }
    return flag;
  },
  showAgeVerificationGetStartedModal(entryPoint) {
    entryPoint = entryPoint.entryPoint;
    const onClose = entryPoint.onClose;
    let dependencyMap;
    let prop;
    let currentUser;
    function handleClose() {
      let obj = onClose(_undefined[19]);
      obj = { type: "CLOSE_AGE_VERIFICATION_MODAL", status: prop };
      obj.dispatch(obj);
      if (null != onClose) {
        onClose();
      }
    }
    let obj = entryPoint(1553);
    if (obj.isMetaQuest()) {
      let tmpResult = tmp(4472);
      tmpResult.openAlert(closure_7, jsx(onClose(7600), {}), onClose);
    } else {
      tmpResult = tmp(4347);
      let isAgeVerifiedResult = tmpResult.isAgeVerified();
      if (isAgeVerifiedResult) {
        isAgeVerifiedResult = entryPoint(3809).hasAgeGatedFeatures();
        const obj3 = entryPoint(3809);
      }
      dependencyMap = isAgeVerifiedResult;
      if (obj4.isAgeVerificationIncodeEnabled(entryPoint)) {
        currentUser = currentUser.getCurrentUser();
        prop = undefined;
        if (null != currentUser) {
          prop = currentUser.ageVerificationStatus;
        }
        obj = { type: "INITIATE_AGE_VERIFICATION" };
        onClose(686).dispatch(obj);
        obj = {
          onClose: handleClose,
          onComplete() {

              }
        };
        if (!openIncodeAgeVerificationModal(obj)) {
          handleClose();
        }
      } else {
        if (!isAgeVerifiedResult) {
          if (obj5.isExpressiveModalV2Enabled(entryPoint)) {
            onClose(4337).pushLazy(prop(async () => {
              let closure_0;
              closure_0 = yield entryPoint(c2[10])(c2[21], c2.paths).default;
              return () => outer3_12(closure_0, {
                entryPoint: outer2_0,
                onClose() {
                  let tmp;
                  if (null != outer3_1) {
                    tmp = outer3_1();
                  }
                  return tmp;
                }
              });
            }), {}, closure_6);
            const obj6 = onClose(4337);
          }
          obj5 = entryPoint(7603);
        }
        currentUser = entryPoint(7615).isAgeVerificationExpressiveModalEverywhereEnabled(entryPoint);
        const obj7 = entryPoint(7615);
        onClose(4337).pushLazy(prop(async () => {
          let closure_0;
          closure_0 = yield entryPoint(c2[10])(c2[23], c2.paths).default;
          return () => outer3_12(closure_0, { entryPoint: outer2_0, isRetry: outer2_2, useEmbeddedMethods: outer2_4 });
        }), {}, closure_6);
        const obj8 = onClose(4337);
      }
      obj4 = entryPoint(7601);
    }
  },
  openUrl(arg0) {
    importDefault(3827).openURL(arg0);
  }
};
