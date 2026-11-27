// Module ID: 19647
// Function ID: 19648
// Name: CaptchaUtils
// Dependencies: [19, 17, 2189, 1191, 1071, 21, 1256, 5811, 5816, 504, 1269, 1338, 19648, 5809, 19649, 6130, 19650, 2120, 2]
// Exports: InlineHcaptcha

// Module 19647 (CaptchaUtils)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import V8APIError from "V8APIError" /* 1338 */;
import SharedCaptchaUtils from "SharedCaptchaUtils" /* 5809 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 5811 */;
import MetricEvents from "MetricEvents" /* 5816 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import _modDef19648 from "module_19648" /* 19648 */;
import react_nativeDefault from "react-native" /* 19649 */;
import react_mod from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2189 */;
import ThemeStore from "ThemeStore" /* 1191 */;
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let react = react_mod;
const Keyboard = react_native.Keyboard;
({ RECAPTCHA_SITE_KEY: metroImportDefault, AnalyticEvents: metroImportAll } = Constants);
const jsx = Fragment.jsx;
let obj = {
  showCaptcha() {
    let RECAPTCHA = arg0;
    if (arg0 === undefined) {
      RECAPTCHA = V8APIError.CaptchaTypes.RECAPTCHA;
    }
    const self = this;
    Keyboard.dismiss();
    const obj = AnalyticsUtilsDefault;
    obj.track(metroImportAll.OPEN_MODAL, { type: "CAPTCHA" });
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
    const obj = react_nativeDefault;
    obj.closeCaptcha();
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
      let obj5 = rqdata(paths[15]);
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
                  const HCAPTCHA2 = tmp18(1338).CaptchaTypes.HCAPTCHA;
                  const obj2 = { captcha_event_name: "verify", captcha_service: HCAPTCHA2, sitekey, captcha_flow_key };
                  const obj6 = AnalyticsUtilsDefault;
                  obj6.track(metroImportAll.CAPTCHA_EVENT, obj2);
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
            const HCAPTCHA = tmp18(1338).CaptchaTypes.HCAPTCHA;
            const obj5 = { captcha_event_name: data, captcha_service: HCAPTCHA, sitekey, captcha_flow_key };
            const obj = AnalyticsUtilsDefault;
            obj.track(metroImportAll.CAPTCHA_EVENT, obj5);
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
            obj4.track(metroImportAll.CAPTCHA_FAILED, obj8);
            closure_1(data);
          }
          const arr2 = ModalActionCreatorsDefault;
          arr2.pop();
        },
        rqdata
      };
      obj5.pushLazy(sitekey(paths[17])(paths[16], paths.paths), obj6, "hcaptcha");
    });
    return promise;
  },
  showRecaptcha() {
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
      obj2.track(constants.CAPTCHA_EVENT, obj3);
      let tmp3 = MonitoringAgentDefault;
      let obj4 = { name: self(dependencyMap[8]).MetricEvents.CAPTCHA_EVENT, tags: items };
      let increment = tmp3.increment;
      items = ["event_name:" + "initial-load", "captcha_service:" + HCAPTCHA];
      increment(obj4);
      const obj5 = react_nativeDefault;
      obj5.showCaptcha(sitekey, theme.theme, "https://cdn.discordapp.com/recaptcha/ios.html");
      const obj6 = react_nativeDefault;
      obj6.onSolved((arg0) => {
        let items;
        self.closeCaptcha();
        const RECAPTCHA = V8APIError.CaptchaTypes.RECAPTCHA;
        const obj = AnalyticsUtilsDefault;
        const obj2 = { captcha_event_name: "verify", captcha_service: RECAPTCHA, sitekey: metroImportDefault, captcha_flow_key };
        obj.track(metroImportAll.CAPTCHA_EVENT, obj2);
        const tmp3 = MonitoringAgentDefault;
        const increment = tmp3.increment;
        const obj3 = { name: MetricEvents.MetricEvents.CAPTCHA_EVENT, tags: items };
        items = ["event_name:" + "verify", "captcha_service:" + RECAPTCHA];
        increment(obj3);
        closure_0(arg0);
      });
      const obj7 = react_nativeDefault;
      obj7.onExpired(() => {
        let items;
        self.closeCaptcha();
        const EXPIRED = SharedCaptchaUtils.CaptchaError.EXPIRED;
        const RECAPTCHA = V8APIError.CaptchaTypes.RECAPTCHA;
        const obj = AnalyticsUtilsDefault;
        const obj2 = { captcha_event_name: EXPIRED, captcha_service: RECAPTCHA, sitekey: metroImportDefault, captcha_flow_key };
        obj.track(metroImportAll.CAPTCHA_EVENT, obj2);
        const tmp3 = MonitoringAgentDefault;
        const increment = tmp3.increment;
        const obj3 = { name: MetricEvents.MetricEvents.CAPTCHA_EVENT, tags: items };
        items = ["event_name:" + EXPIRED, "captcha_service:" + RECAPTCHA];
        increment(obj3);
        const obj4 = AnalyticsUtilsDefault;
        obj4.track(metroImportAll.CAPTCHA_FAILED, { reason: "expired" });
        closure_1(SharedCaptchaUtils.CaptchaError.EXPIRED);
      });
    });
    return promise;
  }
};
const result = size.fileFinishedImporting("utils/native/CaptchaUtils.tsx");

export default obj;
export function InlineHcaptcha(siteKey) {
  let captcha_flow_key;
  let locale;
  siteKey = siteKey.siteKey;
  ({ onVerify: importDefault, onError: dependencyMap } = siteKey);
  const merged = Object.assign(siteKey, Object.assign({ siteKey: 0, onVerify: 0, onError: 0 }));
  let obj = siteKey(504);
  let items = [LocaleStore];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  let obj2 = siteKey(1269);
  const v4Result = obj2.v4();
  react = v4Result;
  let items1 = [v4Result, siteKey];
  const effect = react.useEffect(() => {
    let items;
    const HCAPTCHA = V8APIError.CaptchaTypes.HCAPTCHA;
    const obj = AnalyticsUtilsDefault;
    const obj2 = { captcha_event_name: "initial-load", captcha_service: HCAPTCHA, sitekey: siteKey, captcha_flow_key };
    obj.track(metroImportAll.CAPTCHA_EVENT, obj2);
    const tmp2 = MonitoringAgentDefault;
    const increment = tmp2.increment;
    const obj3 = { name: MetricEvents.MetricEvents.CAPTCHA_EVENT, tags: items };
    items = ["event_name:" + "initial-load", "captcha_service:" + HCAPTCHA];
    increment(obj3);
  }, items1);
  _modDef19648;
  const merged1 = Object.assign(merged);
  return <tmp5 siteKey={siteKey} onMessage={function onMessage(nativeEvent) {
    let items;
    let items1;
    if (null != nativeEvent.nativeEvent.data) {
      const data = nativeEvent.nativeEvent.data;
      if (data !== SharedCaptchaUtils.CaptchaError.CANCEL) {
        if (data !== SharedCaptchaUtils.CaptchaError.ERROR) {
          if (data !== SharedCaptchaUtils.CaptchaError.EXPIRED) {
            const HCAPTCHA2 = tmp11(1338).CaptchaTypes.HCAPTCHA;
            const obj2 = { captcha_event_name: "verify", captcha_service: HCAPTCHA2, sitekey: siteKey, captcha_flow_key };
            const obj6 = AnalyticsUtilsDefault;
            obj6.track(metroImportAll.CAPTCHA_EVENT, obj2);
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
      const HCAPTCHA = tmp11(1338).CaptchaTypes.HCAPTCHA;
      const obj5 = { captcha_event_name: data, captcha_service: HCAPTCHA, sitekey: siteKey, captcha_flow_key };
      const obj = AnalyticsUtilsDefault;
      obj.track(metroImportAll.CAPTCHA_EVENT, obj5);
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
      obj4.track(metroImportAll.CAPTCHA_FAILED, obj8);
      if (dependencyMap != null) {
        dependencyMap(data);
      }
    }
  }} languageCode={stateFromStores} />;
}
