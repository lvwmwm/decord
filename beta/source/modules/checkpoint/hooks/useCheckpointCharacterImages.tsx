// Module ID: 10116
// Function ID: 10117
// Name: useCheckpointCharacterImages
// Dependencies: [19, 5990, 10117, 2]
// Exports: default

// Module 10116 (useCheckpointCharacterImages)
import checkpoint_CheckpointMessageComponentUtils from "checkpoint/CheckpointMessageComponentUtils" /* 5990 */;
import useCompositeImagesLoadedDefault from "useCompositeImagesLoaded" /* 10117 */;
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
