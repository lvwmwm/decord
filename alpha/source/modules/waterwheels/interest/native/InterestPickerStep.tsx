// Module ID: 19441
// Function ID: 19442
// Name: InterestPickerStep
// Dependencies: [19, 21, 558, 576, 19437, 19442, 19443, 1254, 1125, 2406, 19444, 2]

// Module 19441 (InterestPickerStep)
import Fragment from "Fragment" /* 21 */;
import SentryUtilsDefault from "SentryUtils" /* 1254 */;
import InterestPickerCatalogs from "InterestPickerCatalogs" /* 19443 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let react = react_mod;
let jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function InterestPickerStep(navigation) {
  let closure_3;
  let ref;
  let setPicks;
  const tmp = navigation;
  let obj = navigation(setPicks[3]);
  const cResult = obj.c(20);
  navigation = navigation.navigation;
  const onComplete = navigation.route.params.onComplete;
  let obj2 = navigation(setPicks[4]);
  const interestPickerGameList = obj2.useInterestPickerGameList("InterestPickerStep");
  const obj3 = navigation(setPicks[5]);
  setPicks = obj3.useInterestPickerPicks().setPicks;
  let tmp5 = null;
  if (null != interestPickerGameList) {
    let tmp6;
    if (cResult[0] !== interestPickerGameList) {
      const tmpResult = tmp(setPicks[6]);
      const interestPickerCatalog = tmpResult.getInterestPickerCatalog(interestPickerGameList);
      cResult[0] = interestPickerGameList;
      cResult[1] = interestPickerCatalog;
      tmp6 = interestPickerCatalog;
    } else {
      tmp6 = cResult[1];
    }
    tmp5 = tmp6;
  }
  react = tmp5;
  jsx = react.useRef(false);
  const obj5 = react;
  if (cResult[2] === navigation) {
    if (cResult[3] === onComplete) {
      let tmp8;
      if (cResult[4] === setPicks) {
        tmp8 = cResult[5];
      }
      let closure_5 = tmp8;
      if (cResult[6] === tmp5) {
        let tmp9;
        let tmp10;
        if (cResult[7] === tmp8) {
          tmp9 = cResult[8];
          tmp10 = cResult[9];
        }
        const effect = obj5.useEffect(tmp9, tmp10);
        if (cResult[10] !== tmp8) {
          class S {
            constructor(arg0) {
              return closure_5(arg0, false);
            }
          }
          cResult[10] = tmp8;
          cResult[11] = S;
        } else {
          class S {
            constructor(arg0) {
              return closure_5(arg0, false);
            }
          }
        }
        if (cResult[12] !== tmp8) {
          class S {
            constructor(arg0) {
              return closure_5(arg0, false);
            }
          }
          cResult[12] = tmp8;
          cResult[13] = tmp14;
        } else {
          class S {
            constructor(arg0) {
              return closure_5(arg0, false);
            }
          }
        }
        if (null != tmp5) {
          let tmp17;
          let tmp16;
          class S {
            constructor(arg0) {
              return closure_5(arg0, false);
            }
          }
          const _Symbol = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            class S {
              constructor(arg0) {
                return closure_5(arg0, false);
              }
            }
            const stringResult = obj6.string(onComplete(setPicks[9])["5MUKTF"]);
            const intl = tmp(tmp2[8]).intl;
            const stringResult1 = intl.string(onComplete(setPicks[9])["z/57xV"]);
            cResult[14] = stringResult;
            cResult[15] = stringResult1;
            tmp17 = stringResult1;
            tmp16 = stringResult;
          } else {
            class S {
              constructor(arg0) {
                return closure_5(arg0, false);
              }
            }
            tmp17 = cResult[15];
          }
          if (cResult[16] === tmp5) {
            class S {
              constructor(arg0) {
                return closure_5(arg0, false);
              }
            }
          }
          cResult[16] = tmp5;
          cResult[17] = tmp12;
          cResult[18] = tmp13;
          cResult[19] = jsx(onComplete(setPicks[10]), { catalog: tmp5, title: tmp16, subtitle: tmp17, minSelection: 1, onContinue: tmp12, onSkip: tmp13 });
          const tmp24 = jsx(onComplete(setPicks[10]), { catalog: tmp5, title: tmp16, subtitle: tmp17, minSelection: 1, onContinue: tmp12, onSkip: tmp13 });
        }
        return null;
      }
      const fn2 = function b() {
        if (null == closure_3) {
          closure_5([], true);
        }
      };
      const items = [tmp5, tmp8];
      cResult[6] = tmp5;
      cResult[7] = tmp8;
      cResult[8] = fn2;
      cResult[9] = items;
      tmp10 = items;
      tmp9 = fn2;
    }
  }
  const fn = function f(arg0, arg1) {
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
  };
  cResult[2] = navigation;
  cResult[3] = onComplete;
  cResult[4] = setPicks;
  cResult[5] = fn;
  tmp8 = fn;
}) : (function InterestPickerStep(navigation) {
  let intl;
  let intl2;
  navigation = navigation.navigation;
  let interestPickerGameList;
  const onComplete = navigation.route.params.onComplete;
  const tmp = navigation;
  let obj = navigation(interestPickerGameList[4]);
  interestPickerGameList = obj.useInterestPickerGameList("InterestPickerStep");
  let obj2 = navigation(interestPickerGameList[5]);
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
    const obj3 = { catalog: memo, title: intl.string(onComplete(interestPickerGameList[9])["5MUKTF"]), subtitle: intl2.string(onComplete(interestPickerGameList[9])["z/57xV"]), minSelection: 1, onContinue: callback1, onSkip: tmp8 };
    const tmp12 = onComplete(interestPickerGameList[10]);
    intl = tmp(tmp2[8]).intl;
    intl2 = tmp(tmp2[8]).intl;
    tmp9 = memo(tmp12, obj3);
  }
  return tmp9;
});
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestPickerStep.tsx");

export default tmp2;
