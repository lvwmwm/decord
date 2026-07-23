// Module ID: 7865
// Function ID: 62676
// Name: useCollectibleListLayout
// Dependencies: [57, 31, 2]
// Exports: default

// Module 7865 (useCollectibleListLayout)
import _slicedToArray from "_slicedToArray";
import result from "result";

let closure_1;
let closure_2;
({ useCallback: closure_1, useState: closure_2 } = result);
result = require("set").fileFinishedImporting("modules/collectibles/native/useCollectibleListLayout.tsx");

export default function useCollectibleListLayout() {
  const tmp = callback(callback3(0), 2);
  callback = tmp[1];
  return {
    size: tmp[0],
    onLayout: callback2((nativeEvent) => {
      callback((nativeEvent.nativeEvent.layout.width - 64) / 3);
    }, [])
  };
};
export const GUTTER_SIZE = 16;
export const ROW_SIZE = 3;
export const COLLECTIBLE_ROW_HEIGHT = 114;
