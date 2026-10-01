// Module ID: 12743
// Function ID: 12744
// Name: useCollectibleListLayout
// Dependencies: [32, 19, 2]
// Exports: default

// Module 12743 (useCollectibleListLayout)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c2;
let map;
({ useCallback: map, useState: c2 } = react);
const result = size.fileFinishedImporting("modules/collectibles/native/useCollectibleListLayout.tsx");

export default function useCollectibleListLayout() {
  const tmp = _slicedToArray(React2(0), 2);
  let closure_0 = tmp[1];
  const obj = {
    size: tmp[0],
    onLayout: map((nativeEvent) => {
      closure_0((nativeEvent.nativeEvent.layout.width - 64) / 3);
    }, [])
  };
  return obj;
};
export const GUTTER_SIZE = 16;
export const ROW_SIZE = 3;
export const COLLECTIBLE_ROW_HEIGHT = 114;
