// Module ID: 15171
// Function ID: 15172
// Name: useGameCoverLayout
// Dependencies: [575, 9087, 2]
// Exports: default

// Module 15171 (useGameCoverLayout)
import nativeDefault from "native" /* 575 */;
import useMeasuredLayoutDefault from "useMeasuredLayout" /* 9087 */;
import size from "module_2" /* 2 */;

const PX_16 = nativeDefault.space.PX_16;
const result = size.fileFinishedImporting("modules/user_profile/native/useGameCoverLayout.tsx");

export default function useGameCoverLayout() {
  let onLayout;
  let ref;
  const tmp = useMeasuredLayoutDefault();
  const width = tmp.width;
  let num = 0;
  ({ ref, onLayout } = tmp);
  if (undefined !== width) {
    num = width;
  }
  const bound = Math.max(3, Math.ceil((num + PX_16) / (120 + PX_16)));
  return { ref, onLayout, isMeasured: num > 0, columns: bound, coverWidth: (num - PX_16 * (bound - 1)) / bound };
};
export const GAME_COVER_GAP = PX_16;
