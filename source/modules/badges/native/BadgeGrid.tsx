// Module ID: 14546
// Function ID: 14547
// Name: PX_16
// Dependencies: [7091, 709, 2]
// Exports: getBadgeTileSize

// Module 14546 (PX_16)
import set from "set" /* 2 */;
import ThemesDefault from "Themes" /* 709 */;
import ACTION_SHEET_START_HEIGHT_RATIO from "ACTION_SHEET_START_HEIGHT_RATIO" /* 7091 */;

const ACTION_SHEET_MAX_WIDTH = ACTION_SHEET_START_HEIGHT_RATIO.ACTION_SHEET_MAX_WIDTH;
const PX_16 = ThemesDefault.space.PX_16;
const result = set.fileFinishedImporting("modules/badges/native/BadgeGrid.tsx");

export const BADGE_GRID_COLUMNS = 3;
export const BADGE_GRID_GAP = PX_16;
export const BADGE_TILE_ICON_SIZE = 60;
export const getBadgeTileSize = function getBadgeTileSize(width) {
  const bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  return (bound - 2 * ThemesDefault.space.PX_16 - 2 * PX_16) / 3;
};
