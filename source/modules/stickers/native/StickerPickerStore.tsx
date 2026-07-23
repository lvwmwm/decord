// Module ID: 9603
// Function ID: 74847
// Name: useStickerPickerStore
// Dependencies: [621, 682, 2]

// Module 9603 (useStickerPickerStore)
import keys from "keys";

let obj = keys.create((arg0) => {
  let closure_0 = arg0;
  return {
    packToScrollTo: null,
    setPackToScrollTo(outer1_3) {
      const callback = outer1_3;
      return callback(outer1_1[1]).batchUpdates(() => {
        outer1_3((packToScrollTo) => {
          let tmp = packToScrollTo;
          if (packToScrollTo.packToScrollTo !== outer1_0) {
            const obj = { packToScrollTo: outer1_0 };
            tmp = obj;
          }
          return tmp;
        });
      });
    }
  };
});
const result = require("set").fileFinishedImporting("modules/stickers/native/StickerPickerStore.tsx");

export const useStickerPickerStore = obj;
