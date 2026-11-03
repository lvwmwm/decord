// Module ID: 13771
// Function ID: 13772
// Name: useCheckpointCharacterTextureManager
// Dependencies: [5, 19, 5217, 2]
// Exports: useCheckpointCharacterTextureManager

// Module 13771 (useCheckpointCharacterTextureManager)
import DataBindByName from "DataBindByName" /* 5217 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function loadImage() {
  return obj(...arguments);
}
let obj = function _loadImage() {
  obj = _asyncToGenerator(async (arg0) => {
    let c1;
    let c2;
    let c3;
    let closure_0 = arg0;
    const RiveImages = DataBindByName.RiveImages;
    await RiveImages.loadFromURLAsync(closure_0);
    return arg1;
  });
  return obj(...arguments);
};
let result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointCharacterTextureManager.tsx");

export function useCheckpointCharacterTextureManager(arg0) {
  let closure_0 = arg0;
  let items = [arg0];
  return react.useMemo(() => {
    let tmp = null;
    if (null != closure_0) {
      obj = {
        load: loadImage,
        swap(arg0) {
            const updateReferencedAssets = closure_1_0.updateReferencedAssets;
            obj = {
              data: Object.fromEntries(Array.from(arg0, (arg0) => {
                let tmp;
                let tmp2;
                [tmp, tmp2] = arg0;
                const items = [tmp, { image: tmp2 }];
                return items;
              }))
            };
            const result = updateReferencedAssets(obj);
          },
        release(arg0) {
            closure_0 = arg0;
            const timerId = setTimeout(() => closure_0.forEach((dispose) => dispose.dispose()), 1000);
          }
      };
      const tmp2 = loadImage;
      tmp = obj;
    }
    return tmp;
  }, items);
}
