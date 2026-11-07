// Module ID: 13689
// Function ID: 13690
// Name: useCheckpointRoute
// Dependencies: [32, 19, 13667, 6567, 13686, 13669, 2]
// Exports: default

// Module 13689 (useCheckpointRoute)
import CheckpointNavigation from "CheckpointNavigation" /* 6567 */;
import CheckpointActionCreators from "CheckpointActionCreators" /* 13669 */;
import CheckpointFlows from "CheckpointFlows" /* 13686 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 13667 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/checkpoint/hooks/useCheckpointRoute.tsx");

export default function useCheckpointRoute(arg0) {
  let first;
  let tmp3;
  let closure_0 = arg0;
  [first, tmp3] = react.useState(() => {
    const progress = CheckpointStore.progress;
    const stats = CheckpointStore.stats;
    const tmp = closure_0;
    if (null != CheckpointStore.character) {
      let stage = CheckpointNavigation.CheckpointCharacterStage.SUMMARY;
    } else if (progress != null) {
      stage = progress.stage;
    }
    let obj = CheckpointFlows;
    const checkpointRoutes = obj.getCheckpointRoutes({ flow: tmp, stats });
    let HOME = checkpointRoutes.find((item) => {
      const obj = closure_2_0(first[3]);
      return obj.getCheckpointRoutePresentation(item).characterStage === stage;
    });
    if (HOME == null) {
      HOME = CheckpointNavigation.CheckpointRoute.HOME;
    }
    return HOME;
  });
  const items = [first];
  const effect = react.useEffect(() => {
    const obj = CheckpointNavigation;
    const characterStage = obj.getCheckpointRoutePresentation(first).characterStage;
    const obj2 = CheckpointActionCreators;
    const result = obj2.saveCheckpointProgress(characterStage);
  }, items);
  const items1 = [first, tmp3];
  return items1;
};
