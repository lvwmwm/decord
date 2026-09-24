// Module ID: 4653
// Function ID: 4654
// Name: useBaseAppContainerDimensions
// Dependencies: [19, 1482, 1616, 558, 568, 2]
// Exports: getBaseAppContainerDimensions

// Module 4653 (useBaseAppContainerDimensions)
import c from "c" /* 568 */;
import useWindowDimensions from "useWindowDimensions" /* 1482 */;
import useSafeAreaInsets from "useSafeAreaInsets" /* 1616 */;
import noop from "module_19" /* 19 */;

const useWindowDimensionsDefault = useWindowDimensions;
const useSafeAreaInsetsDefault = useSafeAreaInsets;

require = fn;
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/screen/native/useBaseAppContainerDimensions.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  ({ height, width } = useWindowDimensionsDefault());
  const rect = useSafeAreaInsetsDefault();
  const diff = width - rect.left - rect.right;
  if (cResult[0] === height) {
    if (cResult[1] === diff) {
      let tmp4 = cResult[2];
    }
    return tmp4;
  }
  const size = { width: diff, height };
  cResult[0] = height;
  cResult[1] = diff;
  cResult[2] = size;
  tmp4 = size;
}) : (() => {
  let size = useWindowDimensionsDefault();
  const width = size.width;
  const height = size.height;
  const rect = useSafeAreaInsetsDefault();
  const left = rect.left;
  const right = rect.right;
  const items = [width, height, left, right];
  return noop.useMemo(() => {
    const size = { width: width - left - right, height };
    return size;
  }, items);
});
export const getBaseAppContainerDimensions = function getBaseAppContainerDimensions() {
  const windowDimensions = useWindowDimensions.getWindowDimensions();
  ({ width, height } = windowDimensions);
  const rect = useSafeAreaInsets.getSafeAreaInsets();
  const size = { width: width - rect.left - rect.right, height };
  return size;
};
