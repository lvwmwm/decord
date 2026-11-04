// Module ID: 19829
// Function ID: 19830
// Name: InterestPickerStep
// Dependencies: [19, 21, 18666, 19827, 1242, 19830, 2]
// Exports: default

// Module 19829 (InterestPickerStep)
import Fragment from "Fragment" /* 21 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestPickerStep.tsx");

export default function InterestPickerStep(navigation) {
  let closure_2;
  let ref;
  navigation = navigation.navigation;
  let onComplete = navigation.route.params.onComplete;
  const tmp = onComplete;
  const tmp3 = onComplete(18666)("InterestPickerStep");
  dependencyMap = tmp3;
  let obj = navigation(19827);
  const setPicks = obj.useInterestPickerPicks().setPicks;
  jsx = setPicks.useRef(false);
  const items = [navigation, onComplete, setPicks];
  onComplete = setPicks.useCallback((arg0, arg1) => {
    if (!ref.current) {
      tmp.current = true;
      setPicks(arg0);
      if (null == onComplete) {
        const obj2 = { tags: { reason: "missing_on_complete" } };
        const obj = SentryUtilsDefault;
        obj.captureMessage("waterwheels picker step missing completion callback", obj2);
        navigation.goBack();
      } else {
        tmp5(arg1);
      }
    }
  }, items);
  const items1 = [tmp3, onComplete];
  const effect = setPicks.useEffect(() => {
    if (null == closure_2) {
      callback([], true);
    }
  }, items1);
  let tmp6 = null;
  if (null != tmp3) {
    tmp6 = jsx(tmp(19830), { catalog: tmp3, onComplete });
  }
  return tmp6;
};
