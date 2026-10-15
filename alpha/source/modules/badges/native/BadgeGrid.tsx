// Module ID: 15532
// Function ID: 15533
// Name: BadgeGrid
// Dependencies: [7062, 587, 2]
// Exports: getBadgeTileSize

// Module 15532 (BadgeGrid)
import nativeDefault from "native" /* 587 */;
import ActionSheetConstants from "ActionSheetConstants" /* 7062 */;
import size from "module_2" /* 2 */;

const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
const PX_16 = nativeDefault.space.PX_16;
const result = size.fileFinishedImporting("modules/badges/native/BadgeGrid.tsx");

export const BADGE_GRID_COLUMNS = 3;
export const BADGE_GRID_GAP = PX_16;
export const BADGE_TILE_ICON_SIZE = 48;
export const getBadgeTileSize = function getBadgeTileSize(width) {
  const bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  return (bound - 2 * nativeDefault.space.PX_16 - 2 * PX_16) / 3;
};
