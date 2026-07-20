// Module ID: 15827
// Function ID: 121005
// Name: useCaptchaModalEffects
// Dependencies: []
// Exports: default

// Module 15827 (useCaptchaModalEffects)
let closure_3 = importAll(dependencyMap[0]);
const AnalyticEvents = arg1(dependencyMap[1]).AnalyticEvents;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/captcha/useCaptchaModalEffects.tsx");

export default function useCaptchaModalEffects(arg0) {
  let analyticsType;
  ({ onReject: closure_0, analyticsType } = arg0);
  if (analyticsType === undefined) {
    analyticsType = "Guild Join Captcha";
  }
  const importDefault = analyticsType;
  let closure_2;
  closure_2 = React.useRef(true);
  importDefault(closure_2[2])(() => () => {
    if (ref.current) {
      if (null != callback) {
        callback(callback(ref[3]).CaptchaError.CANCEL);
      }
    }
  });
  const items = [analyticsType];
  const effect = React.useEffect(() => {
    let obj = analyticsType(closure_2[4]);
    obj = { type: analyticsType };
    obj.track(constants.OPEN_MODAL, obj);
    return () => {
      if (ref.current) {
        let obj = callback(ref[4]);
        obj = { type: callback };
        obj.track(constants.MODAL_DISMISSED, obj);
      }
    };
  }, items);
  return () => {
    closure_2.current = false;
  };
};
