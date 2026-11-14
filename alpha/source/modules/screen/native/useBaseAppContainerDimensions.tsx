// Module ID: 5497
// Function ID: 5498
// Name: useBaseAppContainerDimensions
// Dependencies: [19, 1496, 1630, 2]
// Exports: default, getBaseAppContainerDimensions

// Module 5497 (useBaseAppContainerDimensions)
import useWindowDimensions from "useWindowDimensions" /* 1496 */;
import useSafeAreaInsets from "useSafeAreaInsets" /* 1630 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const useWindowDimensionsDefault = useWindowDimensions;
const useSafeAreaInsetsDefault = useSafeAreaInsets;

let size = size_mod;
const result = size.fileFinishedImporting("modules/screen/native/useBaseAppContainerDimensions.tsx");

export default function useBaseAppContainerDimensions() {
  size = useWindowDimensionsDefault();
  const width = size.width;
  const height = size.height;
  const rect = useSafeAreaInsetsDefault();
  const left = rect.left;
  const right = rect.right;
  const items = [width, height, left, right];
  return react.useMemo(() => {
    size = { width: width - left - right, height };
    return size;
  }, items);
};
export function getBaseAppContainerDimensions() {
  let height;
  let width;
  const obj = useWindowDimensions;
  const windowDimensions = obj.getWindowDimensions();
  ({ width, height } = windowDimensions);
  const obj2 = useSafeAreaInsets;
  const rect = obj2.getSafeAreaInsets();
  size = { width: width - rect.left - rect.right, height };
  return size;
}
