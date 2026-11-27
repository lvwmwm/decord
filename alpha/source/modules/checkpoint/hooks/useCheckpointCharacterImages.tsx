// Module ID: 12647
// Function ID: 12648
// Name: useCheckpointCharacterImages
// Dependencies: [19, 6419, 12648, 2]
// Exports: default

// Module 12647 (useCheckpointCharacterImages)
import checkpoint_CheckpointMessageComponentUtils from "checkpoint/CheckpointMessageComponentUtils" /* 6419 */;
import useCompositeImagesLoadedDefault from "useCompositeImagesLoaded" /* 12648 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let importDefault;

const result = size.fileFinishedImporting("modules/checkpoint/hooks/useCheckpointCharacterImages.tsx");

export default function useCheckpointCharacterImages(arg0, arg1) {
  let closure_1;
  let closure_0 = arg0;
  importDefault = arg1;
  const items = [arg0, arg1];
  const memo = react.useMemo(() => {
    let characterLayerUrls;
    if (null != closure_0) {
      const obj = checkpoint_CheckpointMessageComponentUtils;
      characterLayerUrls = obj.getCharacterLayerUrls(tmp, closure_1);
    } else {
      characterLayerUrls = [];
    }
    return characterLayerUrls;
  }, items);
  return useCompositeImagesLoadedDefault(memo);
};
