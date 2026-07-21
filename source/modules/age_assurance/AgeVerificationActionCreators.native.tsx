// Module ID: 7530
// Function ID: 60240
// Name: openIncodeAgeVerificationModal
// Dependencies: []

// Module 7530 (openIncodeAgeVerificationModal)
function openIncodeAgeVerificationModal(arg0) {
  ({ onClose: closure_0, onComplete: closure_1 } = arg0);
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
          const obj = /^(10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/;
        }
        const _HermesInternal = HermesInternal;
        combined = "" + str3 + WEBAPP_ENDPOINT + closure_9;
      }
      str3 = "http:";
    }
  }
  const dependencyMap = combined;
  let flag = null != combined;
  if (flag) {
    callback(async () => {
      yield callback(closure_2[7]).requestPermission(closure_10.CAMERA, { showAuthorizationError: true });
      const obj = callback(closure_2[7]);
      yield callback(closure_2[8]).pushLazy(closure_3(async () => {
        let closure_0;
        closure_0 = yield closure_0(closure_2[10])(closure_2[9], closure_2.paths).default;
        return () => callback(closure_0, { webviewUrl: closure_2, onClose: closure_0, onComplete: closure_1 });
      }), {}, closure_5);
    })();
    flag = true;
  }
  return flag;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ AGE_VERIFICATION_MODAL_KEY: closure_5, AGE_VERIFICATION_GET_STARTED_MODAL_KEY: closure_6, AGE_VERIFICATION_QUEST_UNSUPPORTED_ALERT_KEY: closure_7, VerificationVendorName: closure_8 } = arg1(dependencyMap[2]));
let closure_9 = arg1(dependencyMap[3]).AGE_VERIFICATION_INCODE_PATH;
const NativePermissionTypes = arg1(dependencyMap[4]).NativePermissionTypes;
const SafetyToastType = arg1(dependencyMap[5]).SafetyToastType;
const jsx = arg1(dependencyMap[6]).jsx;
const obj = {
  showAgeVerification(onClose) {
    let shouldShowExpressiveModal;
    let webviewUrl;
    let fn = onClose.onClose;
    if (fn === undefined) {
      fn = function t() {

      };
    }
    const arg1 = fn;
    ({ shouldShowExpressiveModal, webviewUrl } = onClose);
    const importDefault = webviewUrl;
    let obj = { FAILED: null, width: null, backgroundColor: null, paddingHorizontal: null, paddingVertical: null };
    Object.setPrototypeOf(null);
    const merged = Object.assign(onClose, obj);
    const dependencyMap = merged;
    if (obj2.isMetaQuest()) {
      arg1(dependencyMap[13]).openAlert(closure_7, jsx(importDefault(dependencyMap[14]), {}), fn);
      let flag = true;
      const obj6 = arg1(dependencyMap[13]);
    } else {
      if (onClose.verificationVendorName === constants.INCODE) {
        if (obj3.isAgeVerificationIncodeEnabled(merged.entryPoint)) {
          obj = { onClose: fn, onComplete: merged.onComplete };
          flag = openIncodeAgeVerificationModal(obj);
        }
        const obj3 = arg1(dependencyMap[15]);
      }
      flag = null != webviewUrl;
      if (flag) {
        importDefault(dependencyMap[8]).pushLazy(callback(async () => {
          let closure_0;
          closure_0 = yield closure_0(closure_2[10])(closure_2[16], closure_2.paths).default;
          return () => {
            const merged = Object.assign(closure_2);
            return callback(closure_0, { webviewUrl: closure_1, onClose: closure_0 });
          };
        }), {}, closure_5);
        flag = true;
        const obj4 = importDefault(dependencyMap[8]);
      }
    }
    return flag;
  },
  showAgeVerificationGetStartedModal(entryPoint) {
    entryPoint = entryPoint.entryPoint;
    const arg1 = entryPoint;
    const onClose = entryPoint.onClose;
    const importDefault = onClose;
    let dependencyMap;
    let callback;
    let currentUser;
    function handleClose() {
      let obj = onClose(isAgeVerifiedResult[19]);
      obj = { type: "CLOSE_AGE_VERIFICATION_MODAL", status: prop };
      obj.dispatch(obj);
      if (null != onClose) {
        onClose();
      }
    }
    let obj = arg1(dependencyMap[12]);
    if (obj.isMetaQuest()) {
      let tmpResult = tmp(tmp2[13]);
      tmpResult.openAlert(closure_7, jsx(importDefault(tmp2[14]), {}), onClose);
    } else {
      tmpResult = tmp(tmp2[17]);
      let isAgeVerifiedResult = tmpResult.isAgeVerified();
      if (isAgeVerifiedResult) {
        isAgeVerifiedResult = arg1(dependencyMap[18]).hasAgeGatedFeatures();
        const obj3 = arg1(dependencyMap[18]);
      }
      dependencyMap = isAgeVerifiedResult;
      if (obj4.isAgeVerificationIncodeEnabled(entryPoint)) {
        currentUser = currentUser.getCurrentUser();
        let prop;
        if (null != currentUser) {
          prop = currentUser.ageVerificationStatus;
        }
        callback = prop;
        obj = { type: "INITIATE_AGE_VERIFICATION" };
        importDefault(dependencyMap[19]).dispatch(obj);
        obj = {
          onClose: handleClose,
          onComplete() {

              }
        };
        if (!openIncodeAgeVerificationModal(obj)) {
          handleClose();
        }
      } else {
        currentUser = arg1(dependencyMap[20]).isAgeVerificationExpressiveModalEverywhereEnabled(entryPoint);
        const obj5 = arg1(dependencyMap[20]);
        importDefault(dependencyMap[8]).pushLazy(callback(async () => {
          let closure_0;
          closure_0 = yield closure_0(closure_2[10])(closure_2[21], closure_2.paths).default;
          return () => callback(closure_0, { entryPoint: closure_0, isRetry: closure_2, useEmbeddedMethods: closure_4 });
        }), {}, closure_6);
        const obj6 = importDefault(dependencyMap[8]);
      }
      const obj4 = arg1(dependencyMap[15]);
    }
  },
  openUrl(arg0) {
    importDefault(dependencyMap[22]).openURL(arg0);
  }
};
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/age_assurance/AgeVerificationActionCreators.native.tsx");

export default obj;
