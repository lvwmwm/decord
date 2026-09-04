// Module ID: 4340
// Function ID: 4341
// Name: useBaseAppContainerDimensions
// Dependencies: [19, 1492, 1627, 2]
// Exports: default, getBaseAppContainerDimensions

// Module 4340 (useBaseAppContainerDimensions)
import useWindowDimensions from "useWindowDimensions" /* 1492 */;
import useSafeAreaInsets from "useSafeAreaInsets" /* 1627 */;
import closure_3 from "noop" /* 19 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/screen/native/useBaseAppContainerDimensions.tsx");

export default function useBaseAppContainerDimensions() {
  const size = height(left[1])();
  const width = size.width;
  height = size.height;
  const rect = height(left[2])();
  left = rect.left;
  const right = rect.right;
  const items = [width, height, left, right];
  return right.useMemo(() => ({ width: width - left - right, height }), items);
};
export const getBaseAppContainerDimensions = function getBaseAppContainerDimensions() {
  let obj = useWindowDimensions;
  const windowDimensions = obj.getWindowDimensions();
  ({ width, height } = windowDimensions);
  const rect = useSafeAreaInsets.getSafeAreaInsets();
  obj = { width: width - rect.left - rect.right, height };
  return obj;
};
