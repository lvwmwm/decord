// Module ID: 9590
// Function ID: 74765
// Name: useStickerPickerStore
// Dependencies: []

// Module 9590 (useStickerPickerStore)
const _module = require(dependencyMap[0]);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/stickers/native/StickerPickerStore.tsx");

export const useStickerPickerStore = _module.create((arg0) => {
  const require = arg0;
  return {
    packToScrollTo: null,
    setPackToScrollTo(closure_3) {
      return closure_3(closure_1[1]).batchUpdates(() => {
        arg0((packToScrollTo) => {
          let tmp = packToScrollTo;
          if (packToScrollTo.packToScrollTo !== closure_0) {
            const obj = { packToScrollTo: closure_0 };
            tmp = obj;
          }
          return tmp;
        });
      });
    }
  };
});
