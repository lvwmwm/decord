// Module ID: 12167
// Function ID: 12168
// Name: ConjureTipsHost
// Dependencies: [19, 17, 21, 4945, 587, 558, 576, 12168, 12178, 12189, 2]

// Module 12167 (ConjureTipsHost)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import useConjureTipsDefault from "useConjureTips" /* 12168 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4945 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { tips: obj2 };
obj2 = { gap: nativeDefault.space.PX_8, paddingTop: nativeDefault.space.PX_20, paddingBottom: nativeDefault.space.PX_4 };
let closure_6 = createStyles.createStyles(obj);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureTipsHost(onShow) {
  let closure_1;
  let draftHasText;
  let messages;
  let onAskForIdeas;
  let projectId;
  let tmp16;
  let tmp4;
  const obj = onShow(576);
  const cResult = obj.c(13);
  onShow = onShow.onShow;
  ({ projectId, messages, draftHasText, onAskForIdeas } = onShow);
  const tmp2 = closure_6();
  const tmp3 = useConjureTipsDefault;
  const tmp3Result = tmp3(onShow(12178).CONJURE_TIPS, projectId, messages, draftHasText, onAskForIdeas);
  if (cResult[0] !== tmp3Result) {
    let tmp6;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function l(tip) {
        return "" + tip.tip.id + ":" + tip.presentation;
      };
      cResult[2] = fn;
      tmp6 = fn;
    } else {
      tmp6 = cResult[2];
    }
    const mapped = tmp3Result.map(tmp6);
    const joined = mapped.join(",");
    cResult[0] = tmp3Result;
    cResult[1] = joined;
    tmp4 = joined;
  } else {
    tmp4 = cResult[1];
  }
  importDefault = tmp4;
  if (cResult[3] === onShow) {
    let tmp8;
    let tmp9;
    if (cResult[4] === tmp4) {
      tmp8 = cResult[5];
      tmp9 = cResult[6];
    }
    const layoutEffect = react.useLayoutEffect(tmp8, tmp9);
    if (0 === tmp3Result.length) {
      return null;
    } else {
      const tips = tmp2.tips;
      if (cResult[7] !== tmp3Result) {
        let tmp14;
        const _Symbol2 = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          class P {
            constructor(arg0) {
              tip = onShow.tip;
              options = onShow.options;
              obj = {
                presentation: onShow.presentation,
                render(arg0) {
                              return tip.render(arg0, options);
                            }
              };
              return closure_1_5(closure_1(closure_1_2[9]), obj, tip.id);
            }
          }
          cResult[9] = P;
          tmp14 = P;
        } else {
          class P {
            constructor(arg0) {
              tip = onShow.tip;
              options = onShow.options;
              obj = {
                presentation: onShow.presentation,
                render(arg0) {
                              return tip.render(arg0, options);
                            }
              };
              return closure_1_5(closure_1(closure_1_2[9]), obj, tip.id);
            }
          }
        }
        const mapped1 = tmp3Result.map(tmp14);
        cResult[7] = tmp3Result;
        cResult[8] = mapped1;
      } else {
        class P {
          constructor(arg0) {
            tip = onShow.tip;
            options = onShow.options;
            obj = {
              presentation: onShow.presentation,
              render(arg0) {
                          return tip.render(arg0, options);
                        }
            };
            return closure_1_5(closure_1(closure_1_2[9]), obj, tip.id);
          }
        }
      }
      if (cResult[10] === tmp2.tips) {
        class P {
          constructor(arg0) {
            tip = onShow.tip;
            options = onShow.options;
            obj = {
              presentation: onShow.presentation,
              render(arg0) {
                          return tip.render(arg0, options);
                        }
            };
            return closure_1_5(closure_1(closure_1_2[9]), obj, tip.id);
          }
        }
        return tmp16;
      }
      const tmp19 = <View style={tips} accessibilityLiveRegion="polite">{tmp12}</View>;
      cResult[10] = tmp2.tips;
      cResult[11] = tmp12;
      cResult[12] = tmp19;
      tmp16 = tmp19;
    }
  }
  class I {
    constructor() {
      if ("" !== closure_1) {
        if (onShow != null) {
          tmp();
        }
      }
    }
  }
  const items = [tmp4, onShow];
  cResult[3] = onShow;
  cResult[4] = tmp4;
  cResult[5] = I;
  cResult[6] = items;
  tmp9 = items;
  tmp8 = I;
}) : (function ConjureTipsHost(onShow) {
  let draftHasText;
  let messages;
  let onAskForIdeas;
  let projectId;
  onShow = onShow.onShow;
  let joined;
  ({ projectId, messages, draftHasText, onAskForIdeas } = onShow);
  const tmp = closure_6();
  const tmp2 = joined(12168);
  const tmp2Result = tmp2(onShow(12178).CONJURE_TIPS, projectId, messages, draftHasText, onAskForIdeas);
  const mapped = tmp2Result.map((tip) => "" + tip.tip.id + ":" + tip.presentation);
  joined = mapped.join(",");
  const items = [joined, onShow];
  const layoutEffect = react.useLayoutEffect(() => {
    if ("" !== joined) {
      if (onShow != null) {
        tmp();
      }
    }
  }, items);
  let tmp5 = null;
  if (0 !== tmp2Result.length) {
    tmp5 = <View style={tmp.tips} accessibilityLiveRegion="polite">{tmp2Result.map((presentation) => {
      const tip = presentation.tip;
      const options = presentation.options;
      return jsx(joined(dependencyMap[9]), {
        presentation: presentation.presentation,
        render(arg0) {
          return tip.render(arg0, options);
        }
      }, tip.id);
    })}</View>;
  }
  return tmp5;
});
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureTipsHost.tsx");

export default tmp2;
