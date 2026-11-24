// Module ID: 17982
// Function ID: 17983
// Name: useIsCheckpointRelaunchCoachmarkEligible
// Dependencies: [32, 19, 6643, 4949, 4750, 17983, 2]
// Exports: useIsCheckpointRelaunchCoachmarkEligible

// Module 17982 (useIsCheckpointRelaunchCoachmarkEligible)
import dismissible_content from "dismissible_content" /* 4750 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4949 */;
import CheckpointExperiments from "CheckpointExperiments" /* 6643 */;
import useIsCheckpointOpen from "useIsCheckpointOpen" /* 17983 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/checkpoint/useIsCheckpointRelaunchCoachmarkEligible.tsx");

export const CHECKPOINT_RELAUNCH_COACHMARK_SOURCE = "relaunch_coachmark";
export function useIsCheckpointRelaunchCoachmarkEligible(YouBar) {
  let closure_2;
  let first;
  const obj = CheckpointExperiments;
  let isCheckpointIntroEnabled = obj.useIsCheckpointIntroEnabled(YouBar);
  const obj2 = DismissibleContentUnsafeUtils;
  const result = obj2.useIsDismissibleContentDismissed_UNSAFE(dismissible_content.DismissibleContent.BUILD_A_BEAR_INTRO);
  const obj3 = useIsCheckpointOpen;
  const isCheckpointOpen = obj3.useIsCheckpointOpen();
  let closure_1 = react.useRef(isCheckpointOpen);
  [first, closure_2] = react.useState(false);
  const items = [isCheckpointOpen];
  const effect = react.useEffect(() => {
    if (isCheckpointOpen !== ref.current) {
      ref.current = isCheckpointOpen;
      if (!isCheckpointOpen) {
        closure_2(true);
      }
    }
  }, items);
  if (isCheckpointIntroEnabled) {
    isCheckpointIntroEnabled = result;
  }
  if (isCheckpointIntroEnabled) {
    isCheckpointIntroEnabled = !isCheckpointOpen;
  }
  if (isCheckpointIntroEnabled) {
    isCheckpointIntroEnabled = first;
  }
  return isCheckpointIntroEnabled;
}
