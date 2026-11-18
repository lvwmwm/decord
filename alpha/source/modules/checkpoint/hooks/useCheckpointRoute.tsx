// Module ID: 12453
// Function ID: 12454
// Name: useCheckpointRoute
// Dependencies: [32, 19, 12417, 6246, 12419, 12424, 2]
// Exports: default

// Module 12453 (useCheckpointRoute)
import CheckpointNavigation from "CheckpointNavigation" /* 6246 */;
import CheckpointFlows from "CheckpointFlows" /* 12419 */;
import CheckpointActionCreators from "CheckpointActionCreators" /* 12424 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 12417 */;
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
