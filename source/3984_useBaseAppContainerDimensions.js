// Module ID: 3984
// Function ID: 33078
// Name: useBaseAppContainerDimensions
// Dependencies: []
// Exports: default, getBaseAppContainerDimensions

// Module 3984 (useBaseAppContainerDimensions)
let closure_3 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/screen/native/useBaseAppContainerDimensions.tsx");

export default function useBaseAppContainerDimensions() {
  const size = importDefault(dependencyMap[1])();
  const width = size.width;
  const arg1 = width;
  const height = size.height;
  const importDefault = height;
  const rect = importDefault(dependencyMap[2])();
  const left = rect.left;
  const dependencyMap = left;
  const right = rect.right;
  const React = right;
  const items = [width, height, left, right];
  return React.useMemo(() => ({ width: width - left - right, height }), items);
};
export const getBaseAppContainerDimensions = function getBaseAppContainerDimensions() {
  let height;
  let width;
  let obj = arg1(dependencyMap[1]);
  const windowDimensions = obj.getWindowDimensions();
  ({ width, height } = windowDimensions);
  const rect = arg1(dependencyMap[2]).getSafeAreaInsets();
  obj = { width: width - rect.left - rect.right, height };
  return obj;
};
