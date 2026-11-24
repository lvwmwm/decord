// Module ID: 12717
// Function ID: 12718
// Name: useCheckpointCompletionSurvey
// Dependencies: [19, 572, 7722, 7729, 2]
// Exports: default

// Module 12717 (useCheckpointCompletionSurvey)
import DispatcherDefault from "Dispatcher" /* 572 */;
import QualtricsActionCreators from "QualtricsActionCreators" /* 7722 */;
import SurveyActionTypes from "SurveyActionTypes" /* 7729 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/checkpoint/hooks/useCheckpointCompletionSurvey.tsx");

export default function useCheckpointCompletionSurvey() {
  const effect = react.useEffect(() => {
    function handleCompleteSuccess() {
      c0 = true;
    }
    let c0 = false;
    let obj = handleCompleteSuccess(closure_2[1]);
    const subscription = obj.subscribe("CHECKPOINT_COMPLETE_SUCCESS", handleCompleteSuccess);
    return () => {
      const obj = DispatcherDefault;
      obj.unsubscribe("CHECKPOINT_COMPLETE_SUCCESS", handleCompleteSuccess);
      const tmp3 = c0;
      if (tmp3) {
        const obj2 = QualtricsActionCreators;
        obj2.fireSurveyAction(SurveyActionTypes.SurveyActionTypes.CHECKPOINT_COMPLETED);
      }
    };
  }, []);
};
