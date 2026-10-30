// Module ID: 5197
// Function ID: 5198
// Name: useWindowSizeClassifier
// Dependencies: [5198, 2]
// Exports: default, getWindowSizeClassifier

// Module 5197 (useWindowSizeClassifier)
import useBaseAppContainerDimensions from "useBaseAppContainerDimensions" /* 5198 */;
import size from "module_2" /* 2 */;

const useBaseAppContainerDimensionsDefault = useBaseAppContainerDimensions;

const WindowSizeClassifier = { SMALL: 0, [0]: "SMALL", NORMAL: 1, [1]: "NORMAL", LARGE: 2, [2]: "LARGE", XLARGE: 3, [3]: "XLARGE" };
const result = size.fileFinishedImporting("modules/screen/native/useWindowSizeClassifier.tsx");

export default function useWindowSizeClassifier() {
  let XLARGE;
  const width = useBaseAppContainerDimensionsDefault().width;
  if (width <= 360) {
    XLARGE = obj.SMALL;
  } else if (width <= 600) {
    XLARGE = obj.NORMAL;
  } else if (width <= 840) {
    XLARGE = obj.LARGE;
  } else {
    XLARGE = obj.XLARGE;
  }
  return XLARGE;
};
export const WINDOW_SIZE_THRESHOLD_SMALL = 360;
export const WINDOW_SIZE_THRESHOLD_LARGE = 600;
export const WINDOW_SIZE_THRESHOLD_XLARGE = 840;
export { WindowSizeClassifier };
export function getWindowSizeClassifier() {
  let XLARGE;
  const obj = useBaseAppContainerDimensions;
  const width = obj.getBaseAppContainerDimensions().width;
  if (width <= 360) {
    XLARGE = obj.SMALL;
  } else if (width <= 600) {
    XLARGE = obj.NORMAL;
  } else if (width <= 840) {
    XLARGE = obj.LARGE;
  } else {
    XLARGE = obj.XLARGE;
  }
  return XLARGE;
}
