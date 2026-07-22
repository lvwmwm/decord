// Module ID: 7859
// Function ID: 62639
// Name: useCollectibleListLayout
// Dependencies: []
// Exports: default

// Module 7859 (useCollectibleListLayout)
let closure_0 = importDefault(dependencyMap[0]);
({ useCallback: closure_1, useState: closure_2 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/collectibles/native/useCollectibleListLayout.tsx");

export default function useCollectibleListLayout() {
  const tmp = callback(callback3(0), 2);
  const callback = tmp[1];
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
