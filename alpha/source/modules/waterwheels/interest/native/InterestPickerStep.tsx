// Module ID: 19724
// Function ID: 19725
// Name: InterestPickerStep
// Dependencies: [19, 21, 18571, 19722, 1242, 18575, 1113, 2537, 2]
// Exports: default

// Module 19724 (InterestPickerStep)
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
  const onComplete = navigation.route.params.onComplete;
  const tmp = onComplete;
  const tmp3 = onComplete(18571)("InterestPickerStep");
  dependencyMap = tmp3;
  let obj = navigation(19722);
  const setPicks = obj.useInterestPickerPicks().setPicks;
  jsx = setPicks.useRef(false);
  const items = [navigation, onComplete, setPicks];
  const callback = setPicks.useCallback((gameIds, arg1) => {
    if (!ref.current) {
      tmp.current = true;
      setPicks(gameIds);
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
  const items1 = [tmp3, callback];
  const effect = setPicks.useEffect(() => {
    if (null == closure_2) {
      callback([], true);
    }
  }, items1);
  const items2 = [callback];
  [][0] = callback;
  const callback1 = setPicks.useCallback((arg0) => callback(arg0, false), items2);
  let tmp9 = null;
  if (null != tmp3) {
    tmp(18575);
    const intl = tmp4(1113).intl;
    const intl2 = tmp4(1113).intl;
    tmp9 = <tmpResult catalog={tmp3} title={intl.string(tmp(2537)["5MUKTF"])} subtitle={intl2.string(tmp(2537)["z/57xV"])} minSelection={1} onContinue={callback1} onSkip={tmp8} />;
  }
  return tmp9;
};
