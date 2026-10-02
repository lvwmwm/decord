// Module ID: 16335
// Function ID: 16336
// Name: VibegrationsFeedbackSheet
// Dependencies: [19, 21, 558, 576, 16316, 4530, 1127, 3718, 16322, 2]

// Module 16335 (VibegrationsFeedbackSheet)
import Fragment from "Fragment" /* 21 */;
import vibegrationsFeedback from "vibegrationsFeedback" /* 16316 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let projectId;

let tmp;
const ToastUtils = tmp(4530);
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  let tmp = projectId;
  let obj = projectId(576);
  const cResult = obj.c(9);
  projectId = projectId.projectId;
  const promptCount = projectId.promptCount;
  if (cResult[0] === projectId) {
    let tmp4;
    let tmp6;
    let tmp9;
    let tmp8;
    let tmp7;
    let tmp14;
    if (cResult[1] === promptCount) {
      tmp4 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      let tmpResult = tmp(16316);
      const items = [tmpResult.vibegrationsFeedbackSection()];
      cResult[3] = items;
      tmp6 = items;
    } else {
      tmp6 = cResult[3];
    }
    const _Symbol2 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1127).intl;
      const stringResult = intl.string(promptCount(3718).W7Sdp4);
      const intl2 = tmp(1127).intl;
      const stringResult1 = intl2.string(promptCount(3718).dXJed8);
      const intl3 = tmp(1127).intl;
      const stringResult2 = intl3.string(promptCount(3718).kLHFxL);
      cResult[4] = stringResult;
      cResult[5] = stringResult1;
      cResult[6] = stringResult2;
      tmp9 = stringResult2;
      tmp8 = stringResult1;
      tmp7 = stringResult;
    } else {
      tmp7 = cResult[4];
      tmp8 = cResult[5];
      tmp9 = cResult[6];
    }
    if (cResult[7] !== tmp4) {
      promptCount(16322);
      const tmp18 = <tmp17 headerLabel={tmp7} ratingBody={tmp8} categoriesHeader={tmp9} optionsTree={tmp6} trackOpen={tmp(16316).trackVibegrationsFeedbackOpened} trackReport={tmp4} />;
      cResult[7] = tmp4;
      cResult[8] = tmp18;
      tmp14 = tmp18;
    } else {
      tmp14 = cResult[8];
    }
    return tmp14;
  }
  const fn = function o(rating) {
    const obj = vibegrationsFeedback;
    const result = obj.submitVibegrationsFeedback(projectId, promptCount, rating, "VibegrationsFeedbackSheet");
    if (null != rating.rating) {
      const tmpResult = ToastUtils;
      tmpResult.presentFeedbackSent();
    }
  };
  cResult[0] = projectId;
  cResult[1] = promptCount;
  cResult[2] = fn;
  tmp4 = fn;
}) : ((projectId) => {
  projectId = projectId.projectId;
  const promptCount = projectId.promptCount;
  let items = [projectId, promptCount];
  const callback = react.useCallback((rating) => {
    const obj = vibegrationsFeedback;
    const result = obj.submitVibegrationsFeedback(projectId, promptCount, rating, "VibegrationsFeedbackSheet");
    if (null != rating.rating) {
      const tmpResult = ToastUtils;
      tmpResult.presentFeedbackSent();
    }
  }, items);
  const memo = react.useMemo(() => {
    const items = [];
    const obj = projectId(dependencyMap[4]);
    items[0] = obj.vibegrationsFeedbackSection();
    return items;
  }, []);
  promptCount(16322);
  const intl = projectId(1127).intl;
  const intl2 = projectId(1127).intl;
  const intl3 = projectId(1127).intl;
  return <tmp3 headerLabel={intl.string(promptCount(3718).W7Sdp4)} ratingBody={intl2.string(promptCount(3718).dXJed8)} categoriesHeader={intl3.string(promptCount(3718).kLHFxL)} optionsTree={memo} trackOpen={projectId(16316).trackVibegrationsFeedbackOpened} trackReport={callback} />;
});
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsFeedbackSheet.tsx");

export default tmp2;
