// Module ID: 19305
// Function ID: 19306
// Name: captcha/CaptchaUtils
// Dependencies: [5254, 6540, 504, 5253, 19306, 1995, 6532, 2]

// Module 19305 (captcha/CaptchaUtils)
import get_initialized from "get initialized" /* 504 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import SharedCaptchaUtils from "SharedCaptchaUtils" /* 6532 */;
import CaptchaConstants from "CaptchaConstants" /* 6540 */;
import ActionSheetStore from "ActionSheetStore" /* 5254 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const CAPTCHA_MODAL_KEY = CaptchaConstants.CAPTCHA_MODAL_KEY;
let obj = {
  showCaptcha(options, arg1) {
    let captchaService;
    let closure_0;
    let sitekey;
    _require = arg1;
    let obj = arg2;
    if (arg2 === undefined) {
      obj = {};
    }
    options = options.options;
    ({ sitekey, captchaService } = options);
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    const obj2 = {
      sitekey,
      captchaService,
      onCaptchaVerify(captcha_key, captcha_rqtoken) {
        const obj = { captcha_key, captcha_rqtoken };
        return closure_0(obj);
      },
      close() {
        const obj = ActionSheetActionCreatorsDefault;
        return obj.hideActionSheet(CAPTCHA_MODAL_KEY);
      }
    };
    ActionSheetActionCreatorsDefault;
    const tmp2 = require("asyncRequire")(19306, dependencyMap.paths);
    const merged = Object.assign(obj);
    const merged1 = Object.assign(options);
    openLazy(tmp2, CAPTCHA_MODAL_KEY, obj2);
  },
  showCaptchaAsync(arg0) {
    let c1;
    let c2;
    let c3;
    let c4;
    let captchaService;
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    ({ sitekey: c1, captchaService: c2, captchaSessionId: c3, options: c4 } = arg0);
    const promise = new Promise((arg0, arg1) => {
      let captcha_session_id;
      let closure_1;
      let closure_0 = arg0;
      sitekey = arg1;
      let tmp = sitekey(captchaService[3]);
      const openLazy = tmp.openLazy;
      const tmp2 = obj(captchaService[5])(captchaService[4], captchaService.paths);
      obj = {
        sitekey,
        captchaService,
        onCaptchaVerify(captcha_key, captcha_rqtoken) {
          obj = { captcha_key, captcha_rqtoken, captcha_session_id };
          return closure_0(obj);
        },
        onReject(dependencyMap) {
          if (dependencyMap === SharedCaptchaUtils.CaptchaError.CANCEL) {
            const self3 = this;
            const self4 = this;
            const captchaCancelError = new SharedCaptchaUtils.CaptchaCancelError();
            closure_1(captchaCancelError);
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const self = this;
            const self2 = this;
            const error = new Error("Failed to display captcha for service " + c2 + ".");
            closure_1(error);
          }
        },
        close() {
          obj = closure_1(captchaService[3]);
          return obj.hideActionSheet(closure_1_4);
        }
      };
      const merged = Object.assign(closure_0);
      const merged1 = Object.assign(c4);
      openLazy(tmp2, c4, obj, "stack");
    });
    return promise;
  },
  useIsCaptchaModalOpen() {
    let key;
    const items = [ActionSheetStore];
    const obj = get_initialized;
    return obj.useStateFromStores(items, () => key.getKey() === CAPTCHA_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/captcha/CaptchaUtils.native.tsx");

export default obj;
