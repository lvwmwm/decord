// Module ID: 9851
// Function ID: 9852
// Name: StickerPickerStore
// Dependencies: [560, 1248, 2]

// Module 9851 (StickerPickerStore)
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

let obj = module_560.create((arg0) => {
  let closure_0 = arg0;
  let obj = {
    packToScrollTo: null,
    setPackToScrollTo(pack_id) {
      let obj = pack_id(dependencyMap[1]);
      return obj.batchUpdates(() => {
        let tmp = pack_id((packToScrollTo) => {
          let tmp = packToScrollTo;
          if (packToScrollTo.packToScrollTo !== pack_id) {
            tmp = { packToScrollTo: tmp2 };
            const obj = { packToScrollTo: tmp2 };
          }
          return tmp;
        });
      });
    }
  };
  return obj;
});
const result = size.fileFinishedImporting("modules/stickers/native/StickerPickerStore.tsx");

export const useStickerPickerStore = obj;
