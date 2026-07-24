// Module ID: 3986
// Function ID: 33091
// Name: useBaseAppContainerDimensions
// Dependencies: [31, 1450, 1557, 2]
// Exports: default, getBaseAppContainerDimensions

// Module 3986 (useBaseAppContainerDimensions)
import result from "result";

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
  let obj = require(1450) /* useWindowDimensions */;
  const windowDimensions = obj.getWindowDimensions();
  ({ width, height } = windowDimensions);
  const rect = require(1557) /* useSafeAreaInsets */.getSafeAreaInsets();
  obj = { width: width - rect.left - rect.right, height };
  return obj;
};
