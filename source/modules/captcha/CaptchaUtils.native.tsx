// Module ID: 16008
// Function ID: 123592
// Dependencies: [3823, 9484, 566, 4098, 16009, 1934, 9482, 2]

// Module 16008
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { CAPTCHA_MODAL_KEY } from "CAPTCHA_SERVE_VOLUME_DISTRIBUTION_AGGREGATION_WINDOW_MS";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/captcha/CaptchaUtils.native.tsx");

export default {
  showCaptcha(options) {
    let captchaService;
    let sitekey;
    let obj = arg2;
    const _require = arg1;
    if (arg2 === undefined) {
      obj = {};
    }
    ({ sitekey, captchaService } = options);
    obj = {
      sitekey,
      captchaService,
      onCaptchaVerify(captcha_key, captcha_rqtoken) {
        return callback({ captcha_key, captcha_rqtoken });
      },
      close() {
        return outer1_1(outer1_2[3]).hideActionSheet(outer1_4);
      }
    };
    const obj2 = importDefault(4098);
    const merged = Object.assign(obj);
    const merged1 = Object.assign(options.options);
    obj2.openLazy(_require(1934)(16009, dependencyMap.paths), CAPTCHA_MODAL_KEY, obj);
  },
  showCaptchaAsync(nextResult1) {
    let c1;
    let c2;
    let c3;
    let c4;
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    ({ sitekey: c1, captchaService: c2, captchaSessionId: c3, options: c4 } = nextResult1);
    return new Promise((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      let obj = _undefined(_undefined2[3]);
      obj = {
        sitekey: closure_1,
        captchaService: _undefined2,
        onCaptchaVerify(captcha_key, captcha_rqtoken) {
          return callback({ captcha_key, captcha_rqtoken, captcha_session_id: outer1_3 });
        },
        onReject(arg0) {
          if (arg0 === obj(9482).CaptchaError.CANCEL) {
            const CaptchaCancelError = obj(9482).CaptchaCancelError;
            const prototype2 = CaptchaCancelError.prototype;
            const captchaCancelError = new CaptchaCancelError();
            callback2(captchaCancelError);
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error = new Error("Failed to display captcha for service " + outer1_2 + ".");
            callback2(error);
          }
        },
        close() {
          return callback2(4098).hideActionSheet(c4);
        }
      };
      const merged = Object.assign(closure_0);
      const merged1 = Object.assign(c4);
      obj.openLazy(obj(_undefined2[5])(_undefined2[4], _undefined2.paths), c4, obj, "stack");
    });
  },
  useIsCaptchaModalOpen() {
    const items = [_isNativeReflectConstruct];
    return require(566) /* initialize */.useStateFromStores(items, () => outer1_3.getKey() === outer1_4);
  }
};
