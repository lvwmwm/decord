// Module ID: 4307
// Function ID: 4308
// Name: useBaseAppContainerDimensions
// Dependencies: [19, 1493, 1628, 2]
// Exports: default, getBaseAppContainerDimensions

// Module 4307 (useBaseAppContainerDimensions)
import useWindowDimensions from "useWindowDimensions" /* 1493 */;
import useSafeAreaInsets from "useSafeAreaInsets" /* 1628 */;
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
