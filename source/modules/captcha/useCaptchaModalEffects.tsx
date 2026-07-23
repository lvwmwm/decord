// Module ID: 15963
// Function ID: 123289
// Name: useCaptchaModalEffects
// Dependencies: [31, 653, 4559, 9446, 675, 2]
// Exports: default

// Module 15963 (useCaptchaModalEffects)
import result from "result";
import { AnalyticEvents } from "ME";

const require = arg1;
const result = require("useMountLayoutEffect").fileFinishedImporting("modules/captcha/useCaptchaModalEffects.tsx");

export default function useCaptchaModalEffects(arg0) {
  let analyticsType;
  let require;
  ({ onReject: require, analyticsType } = arg0);
  if (analyticsType === undefined) {
    analyticsType = "Guild Join Captcha";
  }
  let dependencyMap;
  dependencyMap = React.useRef(true);
  analyticsType(4559)(() => () => {
    if (outer1_2.current) {
      if (null != outer1_0) {
        outer1_0(outer2_0(table[3]).CaptchaError.CANCEL);
      }
    }
  });
  const items = [analyticsType];
  const effect = React.useEffect(() => {
    let obj = analyticsType(table[4]);
    obj = { type: analyticsType };
    obj.track(outer1_4.OPEN_MODAL, obj);
    return () => {
      if (outer1_2.current) {
        let obj = analyticsType(table[4]);
        obj = { type: outer1_1 };
        obj.track(outer2_4.MODAL_DISMISSED, obj);
      }
    };
  }, items);
  return () => {
    closure_2.current = false;
  };
};
