// Module ID: 15244
// Function ID: 15245
// Name: useGameCoverLayout
// Dependencies: [9075, 15233, 2]
// Exports: default

// Module 15244 (useGameCoverLayout)
import useMeasuredLayoutDefault from "useMeasuredLayout" /* 9075 */;
import UserProfileGameWidgetConstants from "UserProfileGameWidgetConstants" /* 15233 */;
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
  const obj = { ref, onLayout, isMeasured: num > 0, columns: maxResult, coverWidth: (num - UserProfileGameWidgetConstants.GAME_COVER_GRID_GAP * (maxResult - 1)) / maxResult };
  return obj;
};
