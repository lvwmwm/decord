// Module ID: 15828
// Function ID: 121012
// Name: trackCaptchaEvent
// Dependencies: []
// Exports: InlineHcaptcha

// Module 15828 (trackCaptchaEvent)
let NativeEventEmitter;
function trackCaptchaEvent(captcha_event_name, captcha_flow_key, sitekey, captcha_service) {
  let obj = importDefault(dependencyMap[6]);
  obj = { captcha_event_name, captcha_service, sitekey, captcha_flow_key };
  obj.track(constants.CAPTCHA_EVENT, obj);
  obj = { name: captcha_flow_key(dependencyMap[8]).MetricEvents.CAPTCHA_EVENT };
  const items = ["event_name:" + captcha_event_name, "captcha_service:" + captcha_service];
  obj.tags = items;
  importDefault(dependencyMap[7]).increment(obj);
}
let closure_3 = importAll(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
({ NativeEventEmitter, Keyboard: closure_4 } = tmp2);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
({ CaptchaEvent: closure_7, RECAPTCHA_SITE_KEY: closure_8, AnalyticEvents: closure_9 } = arg1(dependencyMap[4]));
const jsx = arg1(dependencyMap[5]).jsx;
const CaptchaManager = tmp2.NativeModules.CaptchaManager;
const nativeEventEmitter = new NativeEventEmitter(CaptchaManager);
const obj = {
  showCaptcha() {
    let RECAPTCHA = arg0;
    const self = this;
    if (arg0 === undefined) {
      RECAPTCHA = arg1(dependencyMap[11]).CaptchaTypes.RECAPTCHA;
    }
    closure_4.dismiss();
    importDefault(dependencyMap[6]).track(constants.OPEN_MODAL, { type: "CAPTCHA" });
    if (RECAPTCHA === arg1(dependencyMap[11]).CaptchaTypes.HCAPTCHA) {
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
    arg1 = arg0;
    const importDefault = arg1;
    return new Promise((arg0, arg1) => {
      let obj = arg0(v4Result[10]);
      const v4Result = obj.v4();
      callback("initial-load", v4Result, arg0, arg0(v4Result[11]).CaptchaTypes.HCAPTCHA);
      obj = {
        siteKey: arg0,
        onMessage(nativeEvent) {
          let data;
          if (null != nativeEvent) {
            data = nativeEvent.nativeEvent.data;
          }
          if (null != data) {
            data = nativeEvent.nativeEvent.data;
            if (data !== nativeEvent(v4Result[13]).CaptchaError.CANCEL) {
              if (data !== nativeEvent(v4Result[13]).CaptchaError.ERROR) {
                if (data !== nativeEvent(v4Result[13]).CaptchaError.EXPIRED) {
                  callback("verify", v4Result, nativeEvent, nativeEvent(v4Result[11]).CaptchaTypes.HCAPTCHA);
                  nativeEvent(data);
                }
              }
            }
            callback(data, v4Result, nativeEvent, nativeEvent(v4Result[11]).CaptchaTypes.HCAPTCHA);
            let obj = arg1(v4Result[6]);
            obj = { reason: data };
            obj.track(constants.CAPTCHA_FAILED, obj);
            arg1(data);
          }
          let arr = arg1(v4Result[14]);
          arr = arr.pop();
        },
        rqdata: arg1
      };
      arg1(v4Result[14]).pushLazy(arg0(v4Result[16])(v4Result[15], v4Result.paths), obj, "hcaptcha");
    });
  },
  showRecaptcha() {
    const arg1 = this;
    return new Promise((arg0, arg1) => {
      const self = arg0;
      const v4Result = self(v4Result[10]).v4();
      callback("initial-load", v4Result, closure_8, self(v4Result[11]).CaptchaTypes.HCAPTCHA);
      closure_11.showCaptcha(closure_8, theme.theme, "https://cdn.discordapp.com/recaptcha/ios.html");
      closure_12.addListener(constants.SOLVED, (arg0) => {
        arg0.closeCaptcha();
        callback("verify", v4Result, closure_8, arg0(v4Result[11]).CaptchaTypes.RECAPTCHA);
        arg0(arg0);
      });
      closure_12.addListener(constants.EXPIRED, () => {
        arg0.closeCaptcha();
        callback(arg0(v4Result[13]).CaptchaError.EXPIRED, v4Result, closure_8, arg0(v4Result[11]).CaptchaTypes.RECAPTCHA);
        arg1(v4Result[6]).track(constants.CAPTCHA_FAILED, { reason: "expired" });
        arg1(arg0(v4Result[13]).CaptchaError.EXPIRED);
      });
    });
  }
};
const tmp3 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("utils/native/CaptchaUtils.tsx");

export default obj;
export const InlineHcaptcha = function InlineHcaptcha(siteKey) {
  siteKey = siteKey.siteKey;
  const arg1 = siteKey;
  ({ onVerify: closure_1, onError: closure_2 } = siteKey);
  let obj = {};
  Object.setPrototypeOf(null);
  const merged = Object.assign(siteKey, obj);
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[9]).useStateFromStores(items, () => locale.locale);
  const obj2 = arg1(dependencyMap[9]);
  const v4Result = arg1(dependencyMap[10]).v4();
  const React = v4Result;
  const items1 = [v4Result, siteKey];
  const effect = React.useEffect(() => {
    callback3("initial-load", v4Result, siteKey, siteKey(closure_2[11]).CaptchaTypes.HCAPTCHA);
  }, items1);
  obj = {
    siteKey,
    onMessage(nativeEvent) {
      if (null != nativeEvent.nativeEvent.data) {
        const data = nativeEvent.nativeEvent.data;
        if (data !== siteKey(callback2[13]).CaptchaError.CANCEL) {
          if (data !== siteKey(callback2[13]).CaptchaError.ERROR) {
            if (data !== siteKey(callback2[13]).CaptchaError.EXPIRED) {
              callback3("verify", v4Result, siteKey, siteKey(callback2[11]).CaptchaTypes.HCAPTCHA);
              callback(data);
            }
          }
        }
        callback3(data, v4Result, siteKey, siteKey(callback2[11]).CaptchaTypes.HCAPTCHA);
        let obj = callback(callback2[6]);
        obj = { reason: data };
        obj.track(constants.CAPTCHA_FAILED, obj);
        if (null != callback2) {
          callback2(data);
        }
      }
    },
    languageCode: stateFromStores
  };
  const obj3 = arg1(dependencyMap[10]);
  const merged1 = Object.assign(merged);
  return jsx(importDefault(dependencyMap[12]), obj);
};
