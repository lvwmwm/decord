// Module ID: 14183
// Function ID: 14184
// Name: useCheckpointRoute
// Dependencies: [32, 19, 14146, 6682, 14180, 14150, 2]
// Exports: default

// Module 14183 (useCheckpointRoute)
import CheckpointNavigation from "CheckpointNavigation" /* 6682 */;
import CheckpointActionCreators from "CheckpointActionCreators" /* 14150 */;
import CheckpointFlows from "CheckpointFlows" /* 14180 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 14146 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/checkpoint/hooks/useCheckpointRoute.tsx");

export default function useCheckpointRoute(arg0) {
  let first;
  let tmp3;
  let closure_0 = arg0;
  [first, tmp3] = react.useState(() => {
    let HOME;
    const progress = CheckpointStore.progress;
    if (CheckpointStore.isCharacterCreatorEnabled) {
      if (null != tmp2) {
        let stage = CheckpointNavigation.CheckpointCharacterStage.SUMMARY;
      } else if (progress != null) {
        stage = progress.stage;
      }
      let obj = CheckpointFlows;
      const obj2 = { flow: tmp, stats: tmp3 };
      const checkpointRoutes = obj.getCheckpointRoutes(obj2);
      let HOME2 = checkpointRoutes.find((item) => {
        const obj = closure_2_0(first[3]);
        return obj.getCheckpointRoutePresentation(item).characterStage === stage;
      });
      const tmp9 = require;
      if (HOME2 == null) {
        HOME2 = tmp9(6682).CheckpointRoute.HOME;
      }
      HOME = HOME2;
    } else {
      HOME = CheckpointNavigation.CheckpointRoute.HOME;
    }
    return HOME;
  });
  const items = [first];
  const effect = react.useEffect(() => {
    if (CheckpointStore.isCharacterCreatorEnabled) {
      const obj = CheckpointNavigation;
      const characterStage = obj.getCheckpointRoutePresentation(first).characterStage;
      const obj2 = CheckpointActionCreators;
      const result = obj2.saveCheckpointProgress(characterStage);
    }
  }, items);
  const items1 = [first, tmp3];
  return items1;
};
