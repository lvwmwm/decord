// Module ID: 10102
// Function ID: 10103
// Name: useGameCoverLayout
// Dependencies: [7477, 10080, 2]
// Exports: default

// Module 10102 (useGameCoverLayout)
import useMeasuredLayoutDefault from "useMeasuredLayout" /* 7477 */;
import UserProfileGameWidgetConstants from "UserProfileGameWidgetConstants" /* 10080 */;
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
