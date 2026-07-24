// Module ID: 9482
// Function ID: 73828
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 162, 9483, 9484, 2]
// Exports: emitCaptchaDistributionMetric, extractCaptchaPropsFromResponse

// Module 9482 (_isNativeReflectConstruct)
import CAPTCHA_SERVE_VOLUME_DISTRIBUTION_AGGREGATION_WINDOW_MS from "CAPTCHA_SERVE_VOLUME_DISTRIBUTION_AGGREGATION_WINDOW_MS";
import closure_1 from "useCaptchaStore";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import useCaptchaStore from "useCaptchaStore";
import { CAPTCHA_SERVE_VOLUME_DISTRIBUTION_AGGREGATION_WINDOW_MS as closure_8 } from "CAPTCHA_SERVE_VOLUME_DISTRIBUTION_AGGREGATION_WINDOW_MS";
import importDefaultResult from "_wrapNativeSuper";

let closure_5;
let closure_6;
let closure_7;
function _isNativeReflectConstruct() {
  let CAPTCHA_SERVE_VOLUME_DISTRIBUTION_AGGREGATION_WINDOW_MS = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return CAPTCHA_SERVE_VOLUME_DISTRIBUTION_AGGREGATION_WINDOW_MS;
  }
  const result = _isNativeReflectConstruct();
}
({ incrementCaptchaServeVolume: closure_5, flushCaptchaServeVolume: closure_6, isCaptchaStoreVolumeEmpty: closure_7 } = useCaptchaStore);
const tmp4 = ((arg0) => {
  class CaptchaCancelError {
    constructor() {
      self = this;
      tmp = outer1_1(this, CaptchaCancelError);
      items = ["Captcha cancelled"];
      obj = outer1_3(CaptchaCancelError);
      tmp2 = outer1_2;
      if (outer1_9()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_3;
        constructResult = Reflect.construct(obj, items, outer1_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      return tmp2(self, constructResult);
    }
  }
  callback(CaptchaCancelError, arg0);
  return CaptchaCancelError(CaptchaCancelError);
})(require("_wrapNativeSuper")(Error));
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/captcha/SharedCaptchaUtils.tsx");

export const CaptchaError = { CANCEL: "cancel", ERROR: "error", EXPIRED: "expired" };
export const extractCaptchaPropsFromResponse = function extractCaptchaPropsFromResponse(body) {
  obj = { captchaService: body.captcha_service, sitekey: body.captcha_sitekey, captchaSessionId: body.captcha_session_id, options: obj };
  obj = { rqdata: body.captcha_rqdata, rqtoken: body.captcha_rqtoken, serveInvisible: tmp, userflow: body.user_flow };
  const should_serve_invisible = body.should_serve_invisible;
  return obj;
};
export const emitCaptchaDistributionMetric = function emitCaptchaDistributionMetric(closure_7) {
  if (callback3()) {
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => outer1_6(), closure_8);
  }
  callback2(closure_7);
};
export const CaptchaCancelError = tmp4;
