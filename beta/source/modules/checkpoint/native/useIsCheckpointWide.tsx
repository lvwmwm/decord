// Module ID: 14485
// Function ID: 14486
// Name: useIsCheckpointWide
// Dependencies: [1496, 2]
// Exports: default

// Module 14485 (useIsCheckpointWide)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import size_mod from "module_2" /* 2 */;

let size = size_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/useIsCheckpointWide.tsx");

export default function useIsCheckpointWide() {
  size = useWindowDimensionsDefault({ ignoreKeyboard: true });
  return size.width / size.height >= 1.2;
};
export const CHECKPOINT_WIDE_MAX_WIDTH = 880;
