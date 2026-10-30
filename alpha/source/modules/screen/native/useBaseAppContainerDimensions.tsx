// Module ID: 5198
// Function ID: 5199
// Name: useBaseAppContainerDimensions
// Dependencies: [19, 1492, 1626, 2]
// Exports: default, getBaseAppContainerDimensions

// Module 5198 (useBaseAppContainerDimensions)
import useWindowDimensions from "useWindowDimensions" /* 1492 */;
import useSafeAreaInsets from "useSafeAreaInsets" /* 1626 */;
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
