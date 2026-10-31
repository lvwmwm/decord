// Module ID: 19364
// Function ID: 19365
// Name: useCaptchaModalEffects
// Dependencies: [19, 1072, 5593, 6538, 1252, 2]
// Exports: default

// Module 19364 (useCaptchaModalEffects)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/captcha/useCaptchaModalEffects.tsx");

export default function useCaptchaModalEffects(arg0) {
  let analyticsType;
  let closure_2;
  ({ onReject: require, analyticsType } = arg0);
  if (analyticsType === undefined) {
    analyticsType = "Guild Join Captcha";
  }
  dependencyMap = react.useRef(true);
  const tmp = analyticsType(5593)(() => {
    let ref;
    return () => {
      if (ref.current) {
        if (closure_1_0 != null) {
          tmp(require("SharedCaptchaUtils").CaptchaError.CANCEL);
        }
      }
    };
  });
  const items = [analyticsType];
  const effect = react.useEffect(() => {
    let ref;
    let type;
    let obj = AnalyticsUtilsDefault;
    let obj2 = { type: analyticsType };
    obj.track(AnalyticEvents.OPEN_MODAL, obj2);
    return () => {
      if (ref.current) {
        const obj2 = { type };
        const obj = analyticsType(ref[4]);
        obj.track(constants.MODAL_DISMISSED, obj2);
      }
    };
  }, items);
  return function onCaptchaAttempted() {
    closure_2.current = false;
  };
};
