// Module ID: 10121
// Function ID: 10122
// Name: useGameCoverLayout
// Dependencies: [7508, 10099, 2]
// Exports: default

// Module 10121 (useGameCoverLayout)
import useMeasuredLayoutDefault from "useMeasuredLayout" /* 7508 */;
import UserProfileGameWidgetConstants from "UserProfileGameWidgetConstants" /* 10099 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/native/useGameCoverLayout.tsx");

export default function useGameCoverLayout() {
  let onLayout;
  let ref;
  const tmp2 = useMeasuredLayoutDefault();
  const width = tmp2.width;
  let num = 0;
  ({ ref, onLayout } = tmp2);
  if (undefined !== width) {
    num = width;
  }
  const sum = num + UserProfileGameWidgetConstants.GAME_COVER_GRID_GAP;
  const maxResult = max(3, ceil(sum / (120 + UserProfileGameWidgetConstants.GAME_COVER_GRID_GAP)));
  const obj = { ref, onLayout, width: num, isMeasured: num > 0, columns: maxResult, coverWidth: (num - UserProfileGameWidgetConstants.GAME_COVER_GRID_GAP * (maxResult - 1)) / maxResult };
  return obj;
};
