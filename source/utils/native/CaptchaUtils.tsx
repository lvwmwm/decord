// Module ID: 15964
// Function ID: 123296
// Name: trackCaptchaEvent
// Dependencies: [31, 27, 1921, 1278, 653, 33, 675, 6837, 6842, 566, 491, 562, 15965, 9446, 4337, 15966, 1934, 2]
// Exports: InlineHcaptcha

// Module 15964 (trackCaptchaEvent)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import ME from "ME";
import { jsx } from "jsxProd";

let NativeEventEmitter;
let closure_4;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function trackCaptchaEvent(captcha_event_name, captcha_flow_key, sitekey, captcha_service) {
  let obj = importDefault(675);
  obj = { captcha_event_name, captcha_service, sitekey, captcha_flow_key };
  obj.track(constants.CAPTCHA_EVENT, obj);
  obj = { name: require(6842) /* set */.MetricEvents.CAPTCHA_EVENT };
  const items = ["event_name:" + captcha_event_name, "captcha_service:" + captcha_service];
  obj.tags = items;
  importDefault(6837).increment(obj);
}
({ NativeEventEmitter, Keyboard: closure_4 } = get_ActivityIndicator);
({ CaptchaEvent: closure_7, RECAPTCHA_SITE_KEY: closure_8, AnalyticEvents: closure_9 } = ME);
const CaptchaManager = get_ActivityIndicator.NativeModules.CaptchaManager;
const nativeEventEmitter = new NativeEventEmitter(CaptchaManager);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("utils/native/CaptchaUtils.tsx");

export default {
  showCaptcha() {
    let RECAPTCHA = arg0;
    const self = this;
    if (arg0 === undefined) {
      RECAPTCHA = require(562) /* _isNativeReflectConstruct */.CaptchaTypes.RECAPTCHA;
    }
    closure_4.dismiss();
    importDefault(675).track(constants.OPEN_MODAL, { type: "CAPTCHA" });
    if (RECAPTCHA === require(562) /* _isNativeReflectConstruct */.CaptchaTypes.HCAPTCHA) {
      if (null != arg1) {
        let showHcaptchaResult = self.showHcaptcha(arg1, arg2);
      }
      return showHcaptchaResult;
    }
    showHcaptchaResult = self.showRecaptcha();
  },
  closeCaptcha() {
    CaptchaManager.closeCaptcha();
  },
  showHcaptcha(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    return new Promise((arg0, arg1) => {
      const callback = arg0;
      const callback2 = arg1;
      let obj = callback(outer1_2[10]);
      const v4Result = obj.v4();
      let closure_2 = v4Result;
      outer1_13("initial-load", v4Result, callback, callback(outer1_2[11]).CaptchaTypes.HCAPTCHA);
      obj = {
        siteKey: callback,
        onMessage(nativeEvent) {
          let data;
          if (null != nativeEvent) {
            data = nativeEvent.nativeEvent.data;
          }
          if (null != data) {
            data = nativeEvent.nativeEvent.data;
            if (data !== callback(outer2_2[13]).CaptchaError.CANCEL) {
              if (data !== callback(outer2_2[13]).CaptchaError.ERROR) {
                if (data !== callback(outer2_2[13]).CaptchaError.EXPIRED) {
                  outer2_13("verify", closure_2, callback, callback(outer2_2[11]).CaptchaTypes.HCAPTCHA);
                  callback(data);
                }
              }
            }
            outer2_13(data, closure_2, callback, callback(outer2_2[11]).CaptchaTypes.HCAPTCHA);
            let obj = callback2(outer2_2[6]);
            obj = { reason: data };
            obj.track(outer2_9.CAPTCHA_FAILED, obj);
            callback2(data);
          }
          let arr = callback2(outer2_2[14]);
          arr = arr.pop();
        },
        rqdata: callback2
      };
      callback2(outer1_2[14]).pushLazy(callback(outer1_2[16])(outer1_2[15], outer1_2.paths), obj, "hcaptcha");
    });
  },
  showRecaptcha() {
    const self = this;
    return new Promise((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      const v4Result = self(outer1_2[10]).v4();
      let closure_2 = v4Result;
      outer1_13("initial-load", v4Result, outer1_8, self(outer1_2[11]).CaptchaTypes.HCAPTCHA);
      outer1_11.showCaptcha(outer1_8, outer1_6.theme, "https://cdn.discordapp.com/recaptcha/ios.html");
      outer1_12.addListener(outer1_7.SOLVED, (arg0) => {
        lib.closeCaptcha();
        outer2_13("verify", closure_2, outer2_8, self(outer2_2[11]).CaptchaTypes.RECAPTCHA);
        lib(arg0);
      });
      outer1_12.addListener(outer1_7.EXPIRED, () => {
        lib.closeCaptcha();
        outer2_13(self(outer2_2[13]).CaptchaError.EXPIRED, closure_2, outer2_8, self(outer2_2[11]).CaptchaTypes.RECAPTCHA);
        outer2_1(outer2_2[6]).track(outer2_9.CAPTCHA_FAILED, { reason: "expired" });
        callback(self(outer2_2[13]).CaptchaError.EXPIRED);
      });
    });
  }
};
export const InlineHcaptcha = function InlineHcaptcha(siteKey) {
  let dependencyMap;
  let importDefault;
  siteKey = siteKey.siteKey;
  ({ onVerify: importDefault, onError: dependencyMap } = siteKey);
  let obj = { siteKey: 0, onVerify: 0, onError: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(siteKey, obj);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = siteKey(566).useStateFromStores(items, () => outer1_5.locale);
  const obj2 = siteKey(566);
  const v4Result = siteKey(491).v4();
  const items1 = [v4Result, siteKey];
  const effect = v4Result.useEffect(() => {
    outer1_13("initial-load", result, siteKey, siteKey(outer1_2[11]).CaptchaTypes.HCAPTCHA);
  }, items1);
  obj = {
    siteKey,
    onMessage(nativeEvent) {
      if (null != nativeEvent.nativeEvent.data) {
        const data = nativeEvent.nativeEvent.data;
        if (data !== siteKey(outer1_2[13]).CaptchaError.CANCEL) {
          if (data !== siteKey(outer1_2[13]).CaptchaError.ERROR) {
            if (data !== siteKey(outer1_2[13]).CaptchaError.EXPIRED) {
              outer1_13("verify", result, siteKey, siteKey(outer1_2[11]).CaptchaTypes.HCAPTCHA);
              callback(data);
            }
          }
        }
        outer1_13(data, result, siteKey, siteKey(outer1_2[11]).CaptchaTypes.HCAPTCHA);
        let obj = outer1_1(outer1_2[6]);
        obj = { reason: data };
        obj.track(outer1_9.CAPTCHA_FAILED, obj);
        if (null != callback2) {
          callback2(data);
        }
      }
    },
    languageCode: stateFromStores
  };
  const obj3 = siteKey(491);
  const merged1 = Object.assign(merged);
  return jsx(importDefault(15965), {
    siteKey,
    onMessage(nativeEvent) {
      if (null != nativeEvent.nativeEvent.data) {
        const data = nativeEvent.nativeEvent.data;
        if (data !== siteKey(outer1_2[13]).CaptchaError.CANCEL) {
          if (data !== siteKey(outer1_2[13]).CaptchaError.ERROR) {
            if (data !== siteKey(outer1_2[13]).CaptchaError.EXPIRED) {
              outer1_13("verify", result, siteKey, siteKey(outer1_2[11]).CaptchaTypes.HCAPTCHA);
              callback(data);
            }
          }
        }
        outer1_13(data, result, siteKey, siteKey(outer1_2[11]).CaptchaTypes.HCAPTCHA);
        let obj = outer1_1(outer1_2[6]);
        obj = { reason: data };
        obj.track(outer1_9.CAPTCHA_FAILED, obj);
        if (null != callback2) {
          callback2(data);
        }
      }
    },
    languageCode: stateFromStores
  });
};
