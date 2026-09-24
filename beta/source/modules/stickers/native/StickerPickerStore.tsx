// Module ID: 10718
// Function ID: 10719
// Name: StickerPickerStore
// Dependencies: [562, 1252, 2]

// Module 10718 (StickerPickerStore)
import module_562 from "module_562" /* 562 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/stickers/native/StickerPickerStore.tsx");

export const useStickerPickerStore = module_562.create((arg0) => {
  closure_0 = arg0;
  return {
    packToScrollTo: null,
    setPackToScrollTo(pack_id) {
      return pack_id(dependencyMap[1]).batchUpdates(() => {
        pack_id((packToScrollTo) => {
          let tmp = packToScrollTo;
          if (packToScrollTo.packToScrollTo !== pack_id) {
            const obj = { packToScrollTo: tmp2 };
            tmp = obj;
          }
          return tmp;
        });
      });
    }
  };
});
