// Module ID: 9439
// Function ID: 73578
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: emitCaptchaDistributionMetric, extractCaptchaPropsFromResponse

// Module 9439 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
const importDefaultResult = importDefault(dependencyMap[5]);
({ incrementCaptchaServeVolume: closure_5, flushCaptchaServeVolume: closure_6, isCaptchaStoreVolumeEmpty: closure_7 } = arg1(dependencyMap[6]));
let closure_8 = arg1(dependencyMap[7]).CAPTCHA_SERVE_VOLUME_DISTRIBUTION_AGGREGATION_WINDOW_MS;
const tmp3 = arg1(dependencyMap[6]);
const tmp4 = (arg0) => {
  class CaptchaCancelError {
    constructor() {
      self = this;
      tmp = closure_1(this, CaptchaCancelError);
      items = [null];
      obj = closure_3(CaptchaCancelError);
      tmp2 = closure_2;
      if (closure_9()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, items, closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      return tmp2(self, constructResult);
    }
  }
  const callback = CaptchaCancelError;
  callback2(CaptchaCancelError, arg0);
  return callback(CaptchaCancelError);
}(importDefaultResult(Error));
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/captcha/SharedCaptchaUtils.tsx");

export const CaptchaError = { CANCEL: "cancel", ERROR: "error", EXPIRED: "expired" };
export const extractCaptchaPropsFromResponse = function extractCaptchaPropsFromResponse(body) {
  let obj = { captchaService: body.captcha_service, sitekey: body.captcha_sitekey, captchaSessionId: body.captcha_session_id, options: obj };
  obj = { rqdata: body.captcha_rqdata, rqtoken: body.captcha_rqtoken, serveInvisible: tmp, userflow: body.user_flow };
  const should_serve_invisible = body.should_serve_invisible;
  return obj;
};
export const emitCaptchaDistributionMetric = function emitCaptchaDistributionMetric(closure_7) {
  if (callback4()) {
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => callback(), closure_8);
  }
  callback3(closure_7);
};
export const CaptchaCancelError = tmp4;
