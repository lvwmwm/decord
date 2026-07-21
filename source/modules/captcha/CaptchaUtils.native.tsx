// Module ID: 15836
// Function ID: 121054
// Dependencies: []

// Module 15836
let closure_3 = importDefault(dependencyMap[0]);
const CAPTCHA_MODAL_KEY = arg1(dependencyMap[1]).CAPTCHA_MODAL_KEY;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/captcha/CaptchaUtils.native.tsx");

export default {
  showCaptcha(options) {
    let captchaService;
    let sitekey;
    let obj = arg2;
    if (arg2 === undefined) {
      obj = {};
    }
    ({ sitekey, captchaService } = options);
    obj = {
      sitekey,
      captchaService,
      onCaptchaVerify(captcha_key, captcha_rqtoken) {
        return captcha_rqtoken({ captcha_key, captcha_rqtoken });
      },
      close() {
        return callback(closure_2[3]).hideActionSheet(closure_4);
      }
    };
    const obj2 = importDefault(dependencyMap[3]);
    const merged = Object.assign(obj);
    const merged1 = Object.assign(options.options);
    obj2.openLazy(arg1(dependencyMap[5])(dependencyMap[4], dependencyMap.paths), CAPTCHA_MODAL_KEY, obj);
  },
  showCaptchaAsync(nextResult1) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    const arg1 = obj;
    let closure_1;
    let closure_2;
    let closure_3;
    let closure_4;
    ({ sitekey: closure_1, captchaService: closure_2, captchaSessionId: closure_3, options: closure_4 } = nextResult1);
    return new Promise((arg0, arg1) => {
      let obj = arg0;
      const _undefined = arg1;
      obj = _undefined(paths[3]);
      obj = {
        sitekey: _undefined,
        captchaService: paths,
        onCaptchaVerify(captcha_key, captcha_rqtoken) {
          return captcha_key({ captcha_key, captcha_rqtoken, captcha_session_id: closure_3 });
        },
        onReject(arg0) {
          if (arg0 === arg0(closure_2[6]).CaptchaError.CANCEL) {
            const CaptchaCancelError = arg0(closure_2[6]).CaptchaCancelError;
            const prototype2 = CaptchaCancelError.prototype;
            const captchaCancelError = new CaptchaCancelError();
            arg1(captchaCancelError);
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error = new Error("Failed to display captcha for service " + closure_2 + ".");
            arg1(error);
          }
        },
        close() {
          return arg1(closure_2[3]).hideActionSheet(closure_4);
        }
      };
      const merged = Object.assign(obj);
      const merged1 = Object.assign(closure_4);
      obj.openLazy(obj(paths[5])(paths[4], paths.paths), closure_4, obj, "stack");
    });
  },
  useIsCaptchaModalOpen() {
    const items = [closure_3];
    return arg1(dependencyMap[2]).useStateFromStores(items, () => key.getKey() === closure_4);
  }
};
