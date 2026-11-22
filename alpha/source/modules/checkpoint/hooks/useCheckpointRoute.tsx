// Module ID: 12526
// Function ID: 12527
// Name: useCheckpointRoute
// Dependencies: [32, 19, 12128, 6338, 12130, 12500, 2]
// Exports: default

// Module 12526 (useCheckpointRoute)
import CheckpointNavigation from "CheckpointNavigation" /* 6338 */;
import CheckpointFlows from "CheckpointFlows" /* 12130 */;
import CheckpointActionCreators from "CheckpointActionCreators" /* 12500 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 12128 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/checkpoint/hooks/useCheckpointRoute.tsx");

export default function useCheckpointRoute(arg0) {
  let first;
  let tmp3;
  let closure_0 = arg0;
  [first, tmp3] = react.useState(() => {
    let character;
    let isCharacterCreatorEnabled;
    let progress;
    let stats;
    ({ character, progress } = CheckpointStore);
    ({ stats, isCharacterCreatorEnabled } = CheckpointStore);
    const tmp = closure_0;
    if (null != character) {
      let stage = CheckpointNavigation.CheckpointCharacterStage.SUMMARY;
    } else if (progress != null) {
      stage = progress.stage;
    }
    let obj = CheckpointFlows;
    const checkpointRoutes = obj.getCheckpointRoutes({ flow: tmp, stats, character, isCharacterCreatorEnabled });
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
