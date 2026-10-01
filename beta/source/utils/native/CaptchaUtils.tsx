// Module ID: 17069
// Function ID: 17070
// Name: CaptchaUtils
// Dependencies: [19, 17, 2112, 1182, 1074, 21, 1241, 5179, 5184, 504, 1255, 1325, 17070, 5177, 5039, 17071, 1981, 2]
// Exports: InlineHcaptcha

// Module 17069 (CaptchaUtils)
import Fragment from "Fragment" /* 21 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import V8APIError from "V8APIError" /* 1325 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import SharedCaptchaUtils from "SharedCaptchaUtils" /* 5177 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 5179 */;
import MetricEvents from "MetricEvents" /* 5184 */;
import _modDef17070 from "module_17070" /* 17070 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

let NativeEventEmitter;
let NativeModules;
let c9;
let closure_4;
let metroImportAll;
let metroImportDefault;
let react = react_mod;
({ Keyboard: closure_4, NativeModules, NativeEventEmitter } = react_native);
({ CaptchaEvent: metroImportDefault, RECAPTCHA_SITE_KEY: metroImportAll, AnalyticEvents: c9 } = Constants);
const jsx = Fragment.jsx;
const CaptchaManager = NativeModules.CaptchaManager;
const nativeEventEmitter = new NativeEventEmitter(CaptchaManager);
let obj = {
  showCaptcha() {
    let RECAPTCHA = arg0;
    if (arg0 === undefined) {
      RECAPTCHA = V8APIError.CaptchaTypes.RECAPTCHA;
    }
    const self = this;
    React3.dismiss();
    const obj = AnalyticsUtilsDefault;
    obj.track(constants.OPEN_MODAL, { type: "CAPTCHA" });
    if (RECAPTCHA === V8APIError.CaptchaTypes.HCAPTCHA) {
      let showHcaptchaResult;
      if (null != arg1) {
        showHcaptchaResult = self.showHcaptcha(arg1, arg2);
      }
      return showHcaptchaResult;
    }
    showHcaptchaResult = self.showRecaptcha();
  },
  closeCaptcha() {
    CaptchaManager.closeCaptcha();
  },
  showHcaptcha(arg0, rqdata) {
    let paths;
    let closure_0 = arg0;
    const promise = new Promise((sitekey, arg1) => {
      let closure_1;
      let items;
      rqdata = arg1;
      let obj = sitekey(paths[10]);
      const v4Result = obj.v4();
      const captcha_flow_key = v4Result;
      let HCAPTCHA = sitekey(paths[11]).CaptchaTypes.HCAPTCHA;
      let obj2 = rqdata(paths[6]);
      let obj3 = { captcha_event_name: "initial-load", captcha_service: HCAPTCHA, sitekey, captcha_flow_key: v4Result };
      obj2.track(constants.CAPTCHA_EVENT, obj3);
      const tmp3 = rqdata(paths[7]);
      let obj4 = { name: sitekey(paths[8]).MetricEvents.CAPTCHA_EVENT, tags: items };
      let increment = tmp3.increment;
      items = ["event_name:" + "initial-load", "captcha_service:" + HCAPTCHA];
      increment(obj4);
      let obj5 = rqdata(paths[14]);
      let obj6 = {
        siteKey: sitekey,
        onMessage(nativeEvent) {
          let items;
          let items1;
          let data1;
          if (nativeEvent != null) {
            data1 = nativeEvent.nativeEvent.data;
          }
          if (null != data1) {
            const data = nativeEvent.nativeEvent.data;
            if (data !== SharedCaptchaUtils.CaptchaError.CANCEL) {
              if (data !== SharedCaptchaUtils.CaptchaError.ERROR) {
                if (data !== SharedCaptchaUtils.CaptchaError.EXPIRED) {
                  const HCAPTCHA2 = tmp18(1325).CaptchaTypes.HCAPTCHA;
                  const obj2 = { captcha_event_name: "verify", captcha_service: HCAPTCHA2, sitekey, captcha_flow_key };
                  const obj6 = AnalyticsUtilsDefault;
                  obj6.track(constants.CAPTCHA_EVENT, obj2);
                  const obj3 = { name: MetricEvents.MetricEvents.CAPTCHA_EVENT, tags: items };
                  const increment2 = MonitoringAgentDefault.increment;
                  MonitoringAgentDefault;
                  const _HermesInternal3 = HermesInternal;
                  items = ["event_name:" + "verify", ];
                  const _HermesInternal4 = HermesInternal;
                  items[1] = "captcha_service:" + HCAPTCHA2;
                  increment2(obj3);
                  sitekey(data);
                }
              }
            }
            const HCAPTCHA = tmp18(1325).CaptchaTypes.HCAPTCHA;
            const obj5 = { captcha_event_name: data, captcha_service: HCAPTCHA, sitekey, captcha_flow_key };
            const obj = AnalyticsUtilsDefault;
            obj.track(constants.CAPTCHA_EVENT, obj5);
            const obj7 = { name: MetricEvents.MetricEvents.CAPTCHA_EVENT, tags: items1 };
            const increment = MonitoringAgentDefault.increment;
            MonitoringAgentDefault;
            const _HermesInternal = HermesInternal;
            items1 = ["event_name:" + data, ];
            const _HermesInternal2 = HermesInternal;
            items1[1] = "captcha_service:" + HCAPTCHA;
            increment(obj7);
            const obj8 = { reason: data };
            const obj4 = AnalyticsUtilsDefault;
            obj4.track(constants.CAPTCHA_FAILED, obj8);
            closure_1(data);
          }
          const arr2 = ModalActionCreatorsDefault;
          arr2.pop();
        },
        rqdata
      };
      obj5.pushLazy(sitekey(paths[16])(paths[15], paths.paths), obj6, "hcaptcha");
    });
    return promise;
  },
  showRecaptcha() {
    let constants2;
    let theme;
    const self = this;
    const promise = new Promise((arg0, arg1) => {
      let items;
      let closure_0 = arg0;
      let closure_1 = arg1;
      let obj = self(dependencyMap[10]);
      const v4Result = obj.v4();
      const captcha_flow_key = v4Result;
      const HCAPTCHA = self(dependencyMap[11]).CaptchaTypes.HCAPTCHA;
      let obj2 = AnalyticsUtilsDefault;
      let obj3 = { captcha_event_name: "initial-load", captcha_service: HCAPTCHA, sitekey, captcha_flow_key: v4Result };
      obj2.track(constants2.CAPTCHA_EVENT, obj3);
      let tmp3 = MonitoringAgentDefault;
      let obj4 = { name: self(dependencyMap[8]).MetricEvents.CAPTCHA_EVENT, tags: items };
      let increment = tmp3.increment;
      items = ["event_name:" + "initial-load", "captcha_service:" + HCAPTCHA];
      increment(obj4);
      CaptchaManager.showCaptcha(sitekey, theme.theme, "https://cdn.discordapp.com/recaptcha/ios.html");
      nativeEventEmitter.addListener(constants.SOLVED, (arg0) => {
        let items;
        self.closeCaptcha();
        const RECAPTCHA = V8APIError.CaptchaTypes.RECAPTCHA;
        const obj = AnalyticsUtilsDefault;
        const obj2 = { captcha_event_name: "verify", captcha_service: RECAPTCHA, sitekey: metroImportAll, captcha_flow_key };
        obj.track(constants.CAPTCHA_EVENT, obj2);
        const tmp3 = MonitoringAgentDefault;
        const increment = tmp3.increment;
        const obj3 = { name: MetricEvents.MetricEvents.CAPTCHA_EVENT, tags: items };
        items = ["event_name:" + "verify", "captcha_service:" + RECAPTCHA];
        increment(obj3);
        closure_0(arg0);
      });
      nativeEventEmitter.addListener(constants.EXPIRED, () => {
        let items;
        self.closeCaptcha();
        const EXPIRED = SharedCaptchaUtils.CaptchaError.EXPIRED;
        const RECAPTCHA = V8APIError.CaptchaTypes.RECAPTCHA;
        const obj = AnalyticsUtilsDefault;
        const obj2 = { captcha_event_name: EXPIRED, captcha_service: RECAPTCHA, sitekey: metroImportAll, captcha_flow_key };
        obj.track(constants.CAPTCHA_EVENT, obj2);
        const tmp3 = MonitoringAgentDefault;
        const increment = tmp3.increment;
        const obj3 = { name: MetricEvents.MetricEvents.CAPTCHA_EVENT, tags: items };
        items = ["event_name:" + EXPIRED, "captcha_service:" + RECAPTCHA];
        increment(obj3);
        const obj4 = AnalyticsUtilsDefault;
        obj4.track(constants.CAPTCHA_FAILED, { reason: "expired" });
        closure_1(SharedCaptchaUtils.CaptchaError.EXPIRED);
      });
    });
    return promise;
  }
};
const result = size.fileFinishedImporting("utils/native/CaptchaUtils.tsx");

export default obj;
export const InlineHcaptcha = function InlineHcaptcha(siteKey) {
  let captcha_flow_key;
  let locale;
  siteKey = siteKey.siteKey;
  ({ onVerify: importDefault, onError: dependencyMap } = siteKey);
  const merged = Object.assign(siteKey, Object.assign({ siteKey: 0, onVerify: 0, onError: 0 }));
  let obj = siteKey(504);
  let items = [LocaleStore];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  let obj2 = siteKey(1255);
  const v4Result = obj2.v4();
  react = v4Result;
  let items1 = [v4Result, siteKey];
  const effect = react.useEffect(() => {
    let items;
    const HCAPTCHA = V8APIError.CaptchaTypes.HCAPTCHA;
    const obj = AnalyticsUtilsDefault;
    const obj2 = { captcha_event_name: "initial-load", captcha_service: HCAPTCHA, sitekey: siteKey, captcha_flow_key };
    obj.track(constants.CAPTCHA_EVENT, obj2);
    const tmp2 = MonitoringAgentDefault;
    const increment = tmp2.increment;
    const obj3 = { name: MetricEvents.MetricEvents.CAPTCHA_EVENT, tags: items };
    items = ["event_name:" + "initial-load", "captcha_service:" + HCAPTCHA];
    increment(obj3);
  }, items1);
  _modDef17070;
  const merged1 = Object.assign(merged);
  return <tmp5 siteKey={siteKey} onMessage={function onMessage(nativeEvent) {
    let items;
    let items1;
    if (null != nativeEvent.nativeEvent.data) {
      const data = nativeEvent.nativeEvent.data;
      if (data !== SharedCaptchaUtils.CaptchaError.CANCEL) {
        if (data !== SharedCaptchaUtils.CaptchaError.ERROR) {
          if (data !== SharedCaptchaUtils.CaptchaError.EXPIRED) {
            const HCAPTCHA2 = tmp11(1325).CaptchaTypes.HCAPTCHA;
            const obj2 = { captcha_event_name: "verify", captcha_service: HCAPTCHA2, sitekey: siteKey, captcha_flow_key };
            const obj6 = AnalyticsUtilsDefault;
            obj6.track(constants.CAPTCHA_EVENT, obj2);
            const obj3 = { name: MetricEvents.MetricEvents.CAPTCHA_EVENT, tags: items };
            const increment2 = MonitoringAgentDefault.increment;
            MonitoringAgentDefault;
            const _HermesInternal3 = HermesInternal;
            items = ["event_name:" + "verify", ];
            const _HermesInternal4 = HermesInternal;
            items[1] = "captcha_service:" + HCAPTCHA2;
            increment2(obj3);
            importDefault(data);
          }
        }
      }
      const HCAPTCHA = tmp11(1325).CaptchaTypes.HCAPTCHA;
      const obj5 = { captcha_event_name: data, captcha_service: HCAPTCHA, sitekey: siteKey, captcha_flow_key };
      const obj = AnalyticsUtilsDefault;
      obj.track(constants.CAPTCHA_EVENT, obj5);
      const obj7 = { name: MetricEvents.MetricEvents.CAPTCHA_EVENT, tags: items1 };
      const increment = MonitoringAgentDefault.increment;
      MonitoringAgentDefault;
      const _HermesInternal = HermesInternal;
      items1 = ["event_name:" + data, ];
      const _HermesInternal2 = HermesInternal;
      items1[1] = "captcha_service:" + HCAPTCHA;
      increment(obj7);
      const obj8 = { reason: data };
      const obj4 = AnalyticsUtilsDefault;
      obj4.track(constants.CAPTCHA_FAILED, obj8);
      if (dependencyMap != null) {
        dependencyMap(data);
      }
    }
  }} languageCode={stateFromStores} />;
};
