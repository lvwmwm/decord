// Module ID: 19481
// Function ID: 19482
// Name: InterestPickerStep
// Dependencies: [19, 21, 17703, 19482, 19479, 1241, 19483, 2]
// Exports: default

// Module 19481 (InterestPickerStep)
import Fragment from "Fragment" /* 21 */;
import SentryUtilsDefault from "SentryUtils" /* 1241 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestPickerStep.tsx");

export default function InterestPickerStep(navigation) {
  let closure_2;
  let ref;
  navigation = navigation.navigation;
  dependencyMap = undefined;
  let onComplete = navigation.route.params.onComplete;
  const tmp = dependencyMap;
  let obj = navigation(17703);
  const interestPickerGameList = obj.useInterestPickerGameList("InterestPickerStep");
  const tmp4 = onComplete(19482)("InterestPickerStep");
  dependencyMap = tmp4;
  let obj2 = navigation(19479);
  const setPicks = obj2.useInterestPickerPicks().setPicks;
  jsx = setPicks.useRef(false);
  const items = [navigation, onComplete, setPicks];
  const tmp3 = onComplete;
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
  const items1 = [tmp4, onComplete];
  const effect = setPicks.useEffect(() => {
    if (null == closure_2) {
      callback([], true);
    }
  }, items1);
  let tmp7 = null;
  if (null != tmp4) {
    tmp7 = null;
    if (null != interestPickerGameList) {
      tmp7 = jsx(tmp3(19483), { arm: interestPickerGameList, catalog: tmp4, onComplete });
    }
  }
  return tmp7;
};
