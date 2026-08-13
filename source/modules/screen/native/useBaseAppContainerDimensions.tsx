// Module ID: 4202
// Function ID: 4203
// Name: useBaseAppContainerDimensions
// Dependencies: [19, 1493, 1628, 2]
// Exports: default, getBaseAppContainerDimensions

// Module 4202 (useBaseAppContainerDimensions)
import noop from "noop";

const require = arg1;
const result = require("useSafeAreaInsets").fileFinishedImporting("modules/screen/native/useBaseAppContainerDimensions.tsx");

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
  let height;
  let width;
  let obj = require(1493) /* useWindowDimensions */;
  const windowDimensions = obj.getWindowDimensions();
  ({ width, height } = windowDimensions);
  const rect = require(1628) /* useSafeAreaInsets */.getSafeAreaInsets();
  obj = { width: width - rect.left - rect.right, height };
  return obj;
};
