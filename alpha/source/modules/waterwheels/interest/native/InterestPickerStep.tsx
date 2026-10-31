// Module ID: 19562
// Function ID: 19563
// Name: InterestPickerStep
// Dependencies: [19, 21, 19557, 19560, 19563, 1242, 19564, 1113, 2408, 2]
// Exports: default

// Module 19562 (InterestPickerStep)
import Fragment from "Fragment" /* 21 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import InterestPickerCatalogs from "InterestPickerCatalogs" /* 19563 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestPickerStep.tsx");

export default function InterestPickerStep(navigation) {
  let intl;
  let intl2;
  navigation = navigation.navigation;
  let interestPickerGameList;
  const onComplete = navigation.route.params.onComplete;
  const tmp = navigation;
  let obj = navigation(interestPickerGameList[2]);
  interestPickerGameList = obj.useInterestPickerGameList("InterestPickerStep");
  let obj2 = navigation(interestPickerGameList[3]);
  const setPicks = obj2.useInterestPickerPicks().setPicks;
  const items = [interestPickerGameList];
  const memo = setPicks.useMemo(() => {
    let interestPickerCatalog = null;
    if (null != interestPickerGameList) {
      const obj = InterestPickerCatalogs;
      interestPickerCatalog = obj.getInterestPickerCatalog(tmp);
    }
    return interestPickerCatalog;
  }, items);
  const ref = setPicks.useRef(false);
  const items1 = [navigation, onComplete, setPicks];
  const callback = setPicks.useCallback((arg0, arg1) => {
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
  }, items1);
  const items2 = [memo, callback];
  const effect = setPicks.useEffect(() => {
    if (null == memo) {
      callback([], true);
    }
  }, items2);
  const items3 = [callback];
  [][0] = callback;
  const callback1 = setPicks.useCallback((arg0) => callback(arg0, false), items3);
  let tmp9 = null;
  if (null != memo) {
    const obj3 = { catalog: memo, title: intl.string(onComplete(interestPickerGameList[8])["5MUKTF"]), subtitle: intl2.string(onComplete(interestPickerGameList[8])["z/57xV"]), minSelection: 1, onContinue: callback1, onSkip: tmp8 };
    const tmp12 = onComplete(interestPickerGameList[6]);
    intl = tmp(tmp2[7]).intl;
    intl2 = tmp(tmp2[7]).intl;
    tmp9 = memo(tmp12, obj3);
  }
  return tmp9;
};
